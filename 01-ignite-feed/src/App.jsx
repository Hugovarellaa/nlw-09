import styles from "./App.module.css";
import { Header } from "./components/Header";
import "./styles/global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <aside>sidebar</aside>
        <main>post</main>
      </div>
    </div>
  );
}
