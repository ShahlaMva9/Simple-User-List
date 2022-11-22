import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import Card from "./components/UI/Card";
import UsersList from "./components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          age: uAge,
          id: usersList.length + 1,
        },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
