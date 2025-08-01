export type Question = {
  question: string;
  alternatives: string[];
  correctAnswer: string;
};

type QuestionsDifficulty = {
  easy: Question;
  medium: Question;
  hard: Question;
};

export type QuestionCategory = {
  history: QuestionsDifficulty;
  science: QuestionsDifficulty;
  technology: QuestionsDifficulty;
  general: QuestionsDifficulty;
  pop: QuestionsDifficulty;
};

export type Category = "history" | "science" | "technology" | "general" | "pop";
export type Difficulty = "easy" | "medium" | "hard";
