interface LogoProps {
  small?: boolean;
}

export function Logo({ small = false }: LogoProps) {
  return (
    <div
      className={
        small
          ? "flex items-center justify-center"
          : "flex items-center flex-col"
      }
    >
      <img src="/logo2.png" alt="DataQuiz logo" />
      <h1
        className={
          small
            ? "text-2xl font-bold tracking-tighter"
            : "text-6xl font-bold tracking-tighter"
        }
      >
        Quizz<span className="text-green-500">fy</span>
      </h1>
    </div>
  );
}
