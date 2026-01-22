function ProfileCard({ name, role, status }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Status: {status}</p>
    </div>
  );
}
export default ProfileCard;
