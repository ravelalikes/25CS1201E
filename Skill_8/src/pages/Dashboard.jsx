import UserCard from "../components/UserCard";

const Dashboard = () => {
  const users = [
    { id: 1, name: "Ravi", email: "ravi@gmail.com", role: "Admin" },
    { id: 2, name: "Anita", email: "anita@gmail.com", role: "Editor" },
    { id: 3, name: "Suresh", email: "suresh@gmail.com", role: "Viewer" }
  ];

  return (
    <main className="dashboard">
      <h3>User List</h3>

      {users.map(({ id, name, email, role }) => (
        <UserCard
          key={id}
          name={name}
          email={email}
          role={role}
        />
      ))}
    </main>
  );
};

export default Dashboard;
