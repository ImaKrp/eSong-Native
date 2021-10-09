import React, { useState, useCallback, createContext, useEffect } from "react";
import { changeLocalData, getLocalData } from "../../storage/Storage";
import User from "../../db/User";

const initialState = [];
export const sessionContext = createContext(initialState);

export function SessionProvider({ children }) {
  const [Accounts, setAccounts] = useState([
    {
      id: 1,
      email: "teste@gmail.com",
      pass: "123",
      name: "Teste",
      pic: "https://64.media.tumblr.com/7031561507aa20b65087c7812ace806c/ea95d609d48498c5-e5/s2048x3072/e948e9677edaa3caed15be26dff8d21b11624546.jpg",
    },
  ]);
  const [session, setSession] = useState(getSession());
  const [logged, setLogged] = useState(session ? true : false);

  async function getSession() {
    const data = await getLocalData("@eSong:User");
    if (data) {
      return data;
    }
    return;
  }

  function upperFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const fetchAccounts = useCallback(async () => {
    User.allUsers().then(users => setAccounts(users));
  }, []);

  function LogOut() {
    AsyncStorage.removeItem("@eSong:User");
    setSession();
    setLogged();
  }

  async function CreateSession(Email, Pass) {
    const Login = Accounts.filter((account) => account.email === Email).map(
      (account) => (account.pass === Pass ? account : false)
    );

    if (Login[0]) {
      setSession(Login[0]);
      changeLocalData({ dataName: "@eSong:User", object: Login[0] });
      return true;
    }

    return Login.length > 0 ? !Login[0] && "senha" : "email";
  }

  async function AddAccount(Email, Pass, Name) {
    let erro = 0;

    const Login = Accounts.filter((account) => account.email === Email);
    if (Login.length > 0) erro++;

    if (erro > 0) return "email";

    const name = upperFirstLetter(Name);

    const submit = {
      email: `${Email}`,
      pass: `${Pass}`,
      name: `${name}`,
    };

    User.addUser( submit )
    .then( id => console.log('User created with id: '+ id) )
    .catch( err => console.log(err) )

    setSession(submit);
    await changeLocalData({ dataName: "@eSong:User", object: submit });

    return true;
  }

  async function updateUser(name, pic, id) {
    if (pic === "https://") pic = "";

    const Name = upperFirstLetter(name);
    const submit = {
      id: `${id}`,
      email: `${email}`,
      pass: `${pass}`,
      name: `${Name}`,
      pic: `${pic}`,
    };

    if (email === "teste@gmail.com") {
      setSession(submit);
    } else {

      setSession(submit);

      await changeLocalData({ dataName: "@eSong:User", object: submit });

      return true;
    }
  }

  return (
    <sessionContext.Provider
      value={{
        CreateSession,
        AddAccount,
        LogOut,
        fetchAccounts,
        updateUser,
        session,
        logged,
        setLogged,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
}
