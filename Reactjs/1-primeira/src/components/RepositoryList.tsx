import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repository.scss";

type Repository = {
  name: string;
  description: string;
  html_url: string;
};

export function RepositoryList() {
  const [repository, setRepository] = useState<Repository[]>([]);

  useEffect(() => {
    const url = "https://api.github.com/users/Hugovarellaa/repos";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRepository(data));
  }, []);

  return (
    <section className="section-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repository.map((item) => (
          <RepositoryItem key={item.name} repository={item} />
        ))}
      </ul>
    </section>
  );
}
