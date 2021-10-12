import React, { useState, useCallback, createContext, useEffect } from "react";
import {
  changeLocalData,
  getLocalData,
  deleteLocalData,
} from "../../storage/Storage";
import User from "../../db/User";

const initialState = [];
export const sessionContext = createContext(initialState);

export function SessionProvider({ children }) {
  const [Accounts, setAccounts] = useState([]);
  const [session, setSession] = useState();
  const [logged, setLogged] = useState(session ? true : false);

  const wasThereSession = useCallback(async () => {
    const previousSession = await getLocalData("@eSong");
    setSession(previousSession);
  }, []);

  useEffect(() => {
    wasThereSession();
  }, []);

  function upperFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const fetchAccounts = useCallback(async () => {
    User.allUsers().then((users) => setAccounts(users));
  }, []);

  async function LogOut() {
    await deleteLocalData("@eSong");
    setSession();
    setLogged();
  }

  async function CreateSession(Email, Pass) {
    const Login = Accounts.filter((account) => account.email === Email).map(
      (account) => (account.pass === Pass ? account : false)
    );

    if (Login[0]) {
      setSession(Login[0]);
      await changeLocalData("@eSong", Login[0]);
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

    User.addUser(submit)
      .then(async(id) => {
        const userData = {
          id: `${id}`,
          email: `${Email}`,
          pass: `${Pass}`,
          name: `${name}`,
        };
        setSession(userData);
        await changeLocalData("@eSong", userData);
      })
      .catch((err) => console.log(err));

    return true;
  }

  async function updateUser(email, pass, name, pic, id) {
    if (pic === "https://") pic = "";

    const Name = upperFirstLetter(name);

    const submit = {
      id: `${id}`,
      email: `${email}`,
      pass: `${pass}`,
      name: `${Name}`,
      pic: `${pic}`,
    };

    const update = {
      name: `${Name}`,
      pic: `${pic}`,
    };

    User.updateUser(id, update)
      .then((updated) => console.log("User updated: " + updated))
      .catch((err) => console.log(err));

    setSession(submit);

    await changeLocalData("@eSong", submit);

    return true;
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
