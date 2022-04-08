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

  const [repos, setRepos] = useState<repositories[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section>
      <h1>Lista de repositorios</h1>

      <ul>
        {repos.map((item) => (
          <RepositoryItem key={item.name} repository={item} />
        ))}
      </ul>
    </section>
  );
}
