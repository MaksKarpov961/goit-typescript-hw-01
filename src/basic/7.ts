type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close"; // Там де є open повинен бути і close але не точно)
  details?: {
    createAt: Date; // Знайшов такий тип, або думаю можна ось так createAt: {}; але не точно)
    updateAt: Date;
  };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
