import db from "./db";

db.transaction((table) => {
  table.executeSql("DROP TABLE users;");
  table.executeSql(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, pass TEXT, pic TEXT, name TEXT);"
  );
});

const addUser = (user) => {
  return new Promise((resolve, reject) => {
    db.transaction((table) => {
      table.executeSql(
        "INSERT INTO users (email, pass, name) values (?,?,?);",
        [user.email, user.pass, user.name],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Error inserting obj: " + JSON.stringify(obj));
        },
        (_, error) => reject(error)
      );
    });
  });
};

const updateUser = (id, obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((table) => {
      table.executeSql(
        "UPDATE users SET name=?, pic=? WHERE id=?;",
        [obj.name, obj.pic, id],
        //-----------------------
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj: id=" + id);
        },
        (_, error) => reject(error)
      );
    });
  });
};

const allUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction((table) => {
      table.executeSql(
        "SELECT * FROM users;",
        [],
        //-----------------------
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

export default {
  addUser,
  updateUser,
  allUsers,
};
