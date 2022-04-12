import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repos.scss";

type Respository = {
  name: string;
  description: string;
  html_url: string;
}[];

export function RespositoryList() {
  const url = "https://api.github.com/users/Hugovarellaa/repos";

  const [repos, setRepos] = useState<Respository>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section>
      <h1>Lista de respositorios</h1>
      <ul>
        {repos.map((item) => (
          <RepositoryItem key={item.name} repository={item} />
        ))}
      </ul>
    </section>
  );
}
