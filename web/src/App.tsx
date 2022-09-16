import "./styles/main.css";
import logoImg from "./assets/logo.svg";
import { GamerBanner } from "./components/GamerBanner";
import { CreateAtBanner } from "./components/CreateAtBanner";
import { TextBanner } from "./components/TextBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

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
    fetch("http://localhost:3001/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
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

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2a2636] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title>Publique um anúncio</Dialog.Title>
            <Dialog.Content>fasçlfkasçlkfça~sd</Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
