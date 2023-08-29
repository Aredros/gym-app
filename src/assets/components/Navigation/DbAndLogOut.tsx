import { auth } from "../../../config/firebase";
import { signOut } from "firebase/auth";

function DbAndLogOut() {
  //function to log out//
  const logItOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bottom-buttons">
      <button onClick={logItOut}>LogOut</button>
    </div>
  );
}

export default DbAndLogOut;
