const UserCard = ({ name, email, role }) => {
  return (
    <div className="user-card">
      <h4>{name}</h4>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserCard;
