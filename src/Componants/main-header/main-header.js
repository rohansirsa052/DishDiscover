import Link from "next/link";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import styles from "./main-header.module.css";
import Background from "./main-headerBackground";
import MainNav from "./main-nav";

const Mainheader = () => {
  
  return (
    <div>
      <Background />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
        
            <Image src={logo} alt="Logo" width={100} height={100} />
            Next level food
          
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
          <MainNav  href= "/meals" >
             Browse your meals 
           
            </MainNav>

            </li>
            <li>
            <MainNav   href= "/community" >
              Fooides Community
              </MainNav>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Mainheader;
