import { useEffect, useState } from "react";
import { fetchUser } from "../services/userService";
function useUser() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const data = fetchUser();
    setUser(data);
  }, []);
  return user;
}
export default useUser;
