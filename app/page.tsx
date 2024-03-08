import { Clock } from "./components/Clock";
import { PomodoroContainer } from "./components/PomodoroContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PomodoroContainer>
        <Clock />
      </PomodoroContainer>
    </main>
  );
}
