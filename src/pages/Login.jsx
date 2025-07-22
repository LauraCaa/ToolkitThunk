import {useState} from "react";
import styles from "../styles/Login.module.css";
import { useNavigate} from "react-router-dom";

const Login = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    setEmail("");
    setPassword("");
  };
  return(
    <div className={styles.formWrapper}>
      <form className={styles.form}onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
         <div className={styles.inputWrapper} >
          <label htmlFor="password">password</label>
          <input 
            type="password" 
            id="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="submit"/>
        
      </form>
    </div>
  )
};

export default Login;