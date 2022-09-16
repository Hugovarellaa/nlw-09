import "./styles/main.css";
import logoImg from "./assets/logo.svg";
import { GamerBanner } from "./components/GamerBanner";
import { CreateAtBanner } from "./components/CreateAtBanner";
import { TextBanner } from "./components/TextBanner";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Input } from "./components/form/Input";

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
            <Dialog.Title className="text-3xl text-white font-black">
              Publique um anúncio
            </Dialog.Title>
            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o game
                </label>
                <Input
                  id="game"
                  placeholder="Selecione o game que deseja buscar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome</label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input
                    type="number"
                    id="yearsPlaying"
                    placeholder="Tudo bem ser ZERO"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu Discord?</label>
                  <Input type="text" id="discord" placeholder="Usuários#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Domingo"
                    >
                      D
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Segunda"
                    >
                      S
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Terça"
                    >
                      T
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Quarta"
                    >
                      Q
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Quinta"
                    >
                      Q
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Sexta"
                    >
                      S
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="Saábado"
                    >
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hoursStart">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="time" id="hoursStart" placeholder="De" />
                    <Input type="time" id="hourEnd" placeholder="Ate" />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex gap-2 text-sm">
                <Input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close
                  type="button"
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                >
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                >
                  <GameController size={24} />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
