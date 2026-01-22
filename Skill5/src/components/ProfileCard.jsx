function ProfileCard({ name, role }) {
  return (
    <div style={{ border: "1px solid gray", 
    padding: "10px", marginTop: "10px" }}>
      <h3>Name: {name}</h3>
      <p>Role: {role}</p>
    </div>
  );
}
export default ProfileCard;
