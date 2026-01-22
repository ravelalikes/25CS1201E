import { useContext } from "react";
import { UserContext } from "../context/UserContext";
function Dashboard() {
  const { status, setStatus } = useContext(UserContext);
  return (
    <section>
      <h2>Dashboard</h2>
      <p>Current Status: {status}</p>
      <button onClick={() => setStatus("Inactive")}>
        Set Inactive
      </button>
    </section>
  );
}
export default Dashboard;
