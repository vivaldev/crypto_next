import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Nav from "./nav";

import React from "react";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/logo2.png"
          width={200}
          height={120}
          alt='<a href="https://www.flaticon.com/free-icons/crypto" title="crypto icons">Crypto icons created by ultimatearm - Flaticon</a>'
        />
      </div>

      <Nav />
    </div>
  );
};

export default Header;
