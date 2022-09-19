import "./styles/main.css";
import logoImg from "./assets/logo.svg";
import { GamerBanner } from "./components/GamerBanner";
import { CreateAtBanner } from "./components/CreateAtBanner";
import { TextBanner } from "./components/TextBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CreateAtModal } from "./components/CreateAdModal";
import axios from "axios";

interface Games {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function App() {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) =>
      setGames(response.data)
    );
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
      <img src={logoImg} alt="" />
      <TextBanner />

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GamerBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAtBanner />
        <CreateAtModal />
      </Dialog.Root>
    </div>
  );
}
