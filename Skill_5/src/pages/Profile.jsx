import ProfileCard from "../components/ProfileCard";
import useUser from "../hooks/useUser";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
function Profile() {
  const user = useUser();
  const { status } = useContext(UserContext);
  if (!user) return <p>Loading...</p>;
  return (
    <section>
      <h2>Profile</h2>
      <ProfileCard
        name={user.name}
        role={user.role}
        status={status}
      />
    </section>
  );
}
export default Profile;
