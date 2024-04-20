import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table/Table";

function App() {
  const headings = [
    "Id",
    "Firstname",
    "Lastname",
    "Email",
    "Department",
    "Edit",
    "Delete",
  ];
  const rows = [
    {
      id: 1,
      firstname: "John",
      lastname: "Doe",
      email: "john@example.com",
      department: "IT department",
    },
    {
      id: 2,
      firstname: "John",
      lastname: "Doe",
      email: "john@example.com",
      department: "IT department",
    },
  ];

  return (
    <div className="App">
      <Table headings={headings} rows={rows} />
    </div>
  );
}

export default App;
