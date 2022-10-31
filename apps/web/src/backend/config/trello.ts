import dotenv from "dotenv";

dotenv.config();

const env = (key: string, defaultValue: string = "") => {
  return typeof process.env[key] === "undefined" ? defaultValue : process.env[key];
}

const envArray = (key:string) => env(key, "").split(",");

export default {
  key: env("TRELLO_KEY"),
  token: env("TRELLO_TOKEN"),
  boardId: env("TRELLO_BOARD_ID"),

  stages: {
    info: {
      label: "Info",
      listNames: envArray("TRELLO_STAGE_INFO"),
    },
    todo: {
      label: "Todo",
      listNames: envArray("TRELLO_STAGE_TODO"),
    },
    inProgress: {
      label: "In Progress",
      listNames: envArray("TRELLO_STAGE_IN_PROGRESS"),
    },
    done: {
      label: "Done",
      listNames: envArray("TRELLO_STAGE_DONE"),
    },
  },
};

