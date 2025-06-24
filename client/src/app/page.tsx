import Image from "next/image";
import styles from "./page.module.css";
import techieLogo from "../../public/icon.png";
import fyiIcon from "../../public/information.png";
import expandIcon from "../../public/downArrow.png";
import Main from "./_mainModule/Main";

export default function Home() {

  return (
    <div className={styles.main}>
        <Main />
    </div>
  );
}
