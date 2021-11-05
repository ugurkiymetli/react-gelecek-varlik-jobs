import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import logo from "../../gelecek-full.svg";
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">
            {/* <img
              src="https://www.gelecekvarlik.com.tr/images/gelecek-full.svg"
              alt=""
            /> */}
            <img src={logo} alt="gelecek-varlik-logo" />
          </Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Açık Pozisyonlar</Link>
          </li>

          <li>
            <Link to="/">Başvurularım </Link>
          </li>

          <li>
            <Link to="/">Özgeçmiş Bilgilerim</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Button variant="solid">Giriş Yap</Button>
      </div>
    </nav>
  );
}

export default Navbar;
