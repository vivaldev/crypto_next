import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

import React from "react";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/logo2.png"
          width={200}
          height={120}
          alt='<a href="https://www.flaticon.com/free-icons/tokens" title="tokens icons">Tokens icons created by Muhammad_Usman - Flaticon</a>'
        />
        <h1 className={styles.title}>
          Crypto Data<span className={styles.titleSpan}>Next</span>
        </h1>
      </div>

      {/* NAVIGATION */}
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listElement}>
            <Link href="/" className={styles.linkElement}>
              Home
            </Link>
          </li>
          <li className={styles.listElement}>
            <Link href="/data" className={styles.linkElement}>
              Data
            </Link>
          </li>
          <li className={styles.listElement}>
            <Link href="/about" className={styles.linkElement}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
