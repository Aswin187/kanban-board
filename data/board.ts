export const DEFAULT_CARDS = [
  // BACKLOG
  {
    id: "1",
    title: "Look into render bug in dashboard",
    description: "Lorem ipsum dolor sit amet ..",
    deadline: new Date("2024-08-10"),
    assignee: "",
    tag: "Programming",
    column: "backlog",
    color: "neutral",
  },
  {
    id: "2",
    title: "SOX compliance checklist",
    description: "Lorem ipsum dolor sit amet ..",
    deadline: new Date("2024-08-15"),
    assignee: "",
    tag: "R&D",
    column: "backlog",
    color: "neutral",
  },
  {
    id: "3",
    title: "[SPIKE] Migrate to Azure",
    description: "Lorem ipsum dolor sit amet ..",
    deadline: new Date("2024-07-25"),
    assignee: "",
    tag: "Devops",
    column: "backlog",
    color: "neutral",
  },

  // TODO
  {
    id: "4",
    title: "Research DB options for new microservice",
    description: "Lorem ipsum dolor sit amet ..",
    deadline: new Date("2024-07-25"),
    assignee: "",
    tag: "Programming",
    column: "todo",
    color: "yellow",
  },
  {
    id: "5",
    title: "Postmortem for outage",
    description: "Lorem ipsum dolor sit amet ..",
    deadline: new Date("2024-07-25"),
    assignee: "",
    tag: "Programming",
    column: "todo",
    color: "yellow",
  },

  // DOING
  {
    id: "6",
    title: "Refactor context providers to use Zustand",
    description: "Lorem ipsum dolor sit amet ..",
    deadline: new Date("2024-07-25"),
    assignee: "",
    tag: "Programming",
    column: "doing",
    color: "blue",
  },
  {
    id: "7",
    title: "Add logging to daily CRON",
    description: "Lorem ipsum dolor sit amet ..",
    deadline: new Date("2024-07-25"),
    assignee: "",
    tag: "Programming",
    column: "doing",
    color: "blue",
  },

  // DONE
  {
    id: "8",
    title: "Set up DD dashboards for Lambda listener",
    description: "Lorem ipsum dolor sit amet ..",
    deadline: new Date("2024-07-25"),
    assignee: "",
    tag: "Programming",
    column: "done",
    color: "emerald",
  },
];
