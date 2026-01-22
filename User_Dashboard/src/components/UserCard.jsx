const UserCard = ({ name, email }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{name}</h3>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;
