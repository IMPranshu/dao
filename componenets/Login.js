import { useWeb3 } from "@3rdweb/hooks";
import styles from "../styles/Login.module.css";

const Login = () => {
  const { connectWallet } = useWeb3();
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => connectWallet("injected")}>
        Sign in using MetaMask
      </button>
    </div>
  );
};
export default Login;