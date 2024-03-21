import { PomodoroContainer } from "./components/PomodoroContainer";

export default function Home() {
  return (
    <main className="flex h-auto flex-col items-center gap-2 justify-between p-4 sm:p-24">
      <PomodoroContainer />
    </main>
  );
}
