import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../header/header.module.css";
import Search from "../search";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <header className={styles.header}>
      {openSearch ? (
        <Search setOpenSearch={setOpenSearch} />
      ) : (
        <div className={styles.header_content}>
          <Link href="/">
            <Image
              src="/LAZURDE_LOGO_2.png"
              width={100}
              height={40}
              className={styles.header_logo}
            ></Image>
          </Link>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <Image
                src="/search.svg"
                width={25}
                height={25}
                onClick={() => setOpenSearch(true)}
                className={styles.search_icon}
              ></Image>
            </li>
            <li className={styles.nav_item}>
              <Link href={"/categories"}>Categories</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
