import ProfileCard from "../components/ProfileCard";
import { getUser } from "../services/userService";
function Profile() {
  const user = getUser();

  return (
    <div>
      <h2>Profile Page</h2>
      <ProfileCard name={user.name} role={user.role} />
    </div>
  );
}
export default Profile;
