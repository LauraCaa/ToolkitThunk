import { useNavigate } from "react-router";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = true;

  const handleLogout = () => {
    navigate("/login");
  };
  return(
    <div className={styles.navbarWrapper}>
      <div>
        <h1>OAL NEWS</h1>
        <p> {user} </p>
      </div>
      <div className={styles.buttonWrapper}>
        {user && <button onClick={handleLogout}>Logout</button>}
        {!user && <button onClick={() => navigate("/login")}>Login</button>}
      </div>
    </div>
  )
};

export default Navbar;