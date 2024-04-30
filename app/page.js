import TopProducts from "./components/topProducts";
import AllProducts from "./components/allProducts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TopProducts />
      <AllProducts />
    </main>
  );
}
