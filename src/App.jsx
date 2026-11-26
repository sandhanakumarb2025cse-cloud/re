import "./App.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Role: {props.role}</p>
      <p>Salary: ₹{props.salary}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Employee Dashboard</h1>

      <EmployeeCard
        name="Ravi"
        role="Developer"
        salary="50000"
      />

      <EmployeeCard
        name="Priya"
        role="Designer"
        salary="45000"
      />

      <EmployeeCard
        name="Arun"
        role="Tester"
        salary="40000"
      />
    </div>
  );
}

export default App;