import { RepositoryItem } from "./RepositoryItem";
import "../styles/repository.scss";
import { useEffect, useState } from "react";

type repository = {
  name: string;
  description: string;
  html_url: string;
};

export function RepositoryList() {
  const url = "https://api.github.com/users/Hugovarellaa/repos";

  const [repository, setRepository] = useState<repository[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRepository(data));
  }, []);

  return (
    <section>
      <h1>Lista de Repositorios do Github</h1>
      <ul>
        {repository.map((item) => (
          <RepositoryItem key={item.name} repository={item} />
        ))}
      </ul>
    </section>
  );
}
