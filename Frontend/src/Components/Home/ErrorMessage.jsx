import { FaExclamationTriangle } from "react-icons/fa";
import styles from "../Error/ErrorPage.module.css";

function ErrorMessage({error }) {
    return (
      <>
        <div className={styles.errorPage}>
        <FaExclamationTriangle className={styles.errorIcon} />
        <h1>Oops! Something went wrong.</h1>
        <p>{error}</p>
        </div>
      </>
    )
  }

  export default ErrorMessage