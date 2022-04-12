import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

type repositories = {
  name: string;
  description: string;
  html_url: string;
};

export function RepositoryList() {
  const url = "https://api.github.com/users/Hugovarellaa/repos";

  const [list, setList] = useState<repositories[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <section>
      <h1>Lista de Repositorios</h1>
      <ul>
        {list.map((item) => (
          <RepositoryItem key={item.name} repository={item} />
        ))}
      </ul>
    </section>
  );
}
