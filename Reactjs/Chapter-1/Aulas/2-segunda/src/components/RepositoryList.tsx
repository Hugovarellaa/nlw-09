import { useEffect, useState } from "react";
import "../styles/repository.scss";
import { RepositoryItem } from "./RepositoryItem";

type Repository = {
  name: string;
  description: string;
  html_url: string;
};

export function RepositoryList() {
  const [list, setList] = useState<Repository[]>([]);

  useEffect(() => {
    const url = "https://api.github.com/users/Hugovarellaa/repos";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <section>
      <h1>Lista de repositorios</h1>

      <ul>
        {list.map((item) => (
          <RepositoryItem key={item.name} repository={item} />
        ))}
      </ul>
    </section>
  );
}
