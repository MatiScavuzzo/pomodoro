import { PomodoroContainer } from "./components/PomodoroContainer";

export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center gap-2 justify-between">
      <PomodoroContainer />
    </main>
  );
}
