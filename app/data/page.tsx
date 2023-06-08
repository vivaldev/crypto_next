import React from "react";
import DataLayout from "../data/layout";

import styles from "./page.module.css";

export default function Page() {
  return (
    <DataLayout>
      <main className={styles.main}>
        <div>Data</div>
      </main>
    </DataLayout>
  );
}
