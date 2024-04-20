import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table/Table";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [usersData, setUsersData] = useState([]);

  const headings = [
    "Id",
    "Firstname",
    "Lastname",
    "Email",
    "Department",
    "Edit",
    "Delete",
  ];
  const rows = usersData.map((user) => {
    return {
      id: user.id,
      firstname: user.name.split(" ")[0],
      lastname: user.name.split(" ")[1],
      email: user.email,
      department: user.company.bs,
    };
  });

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const res = await axios.get(url);

      if (res.status === 200) {
        // Set state data
        setUsersData(res.data);
        console.log(res.data);
      }
    } catch (error) {
      if (error.response) {
        console.error(
          `Request failed with status ${error.response.status}: ${error.response.data}`
        );
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div className="App">
      <Table headings={headings} rows={rows} />
    </div>
  );
}

export default App;
