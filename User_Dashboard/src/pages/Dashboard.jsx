import UserCard from "../components/UserCard";

const Dashboard = () => {
  return (
    <main style={{ padding: "20px" }}>
      <UserCard name="Ravi Kumar" email="ravi@gmail.com" />
      <UserCard name="Anita Sharma" email="anita@gmail.com" />
      <UserCard name="Suresh Reddy" email="suresh@gmail.com" />
    </main>
  );
};

export default Dashboard;
