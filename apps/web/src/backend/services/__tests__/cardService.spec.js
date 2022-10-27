const { CardService } = require("../cardService");
const fakeCreateCardAction = require("./data/actions/createCardAction.json");
const fakeCopyCardAction = require("./data/actions/copyCardAction.json");
const fakeCard = require("./data/cards/card.json");
const fakeUpdatedCard = require("./data/cards/updatedCard.json");
const fakeGroupedCard = require("./data/cards/groupedCard.json");
const fakeList = require("./data/lists/list.json");

describe("CardService", () => {
  describe("appendCreatedDate()", () => {
    it("should append created date for createCard", async () => {
      const cardService = new CardService();
      const cards = [fakeCard];
      const actions = [fakeCreateCardAction];

      const updatedCards = cardService.appendCreatedDate(cards, actions);
      const card = updatedCards[0];

      expect(card.createdDate).toBe(fakeCreateCardAction.date);
    });

    it("should append created date for copyCard", async () => {
      fakeCopyCardAction.data.card.id = fakeCard.id;

      const cardService = new CardService();
      const cards = [fakeCard];
      const actions = [fakeCopyCardAction];

      const updatedCards = cardService.appendCreatedDate(cards, actions);
      const card = updatedCards[0];

      expect(card.createdDate).toBe(fakeCopyCardAction.date);
    });
  });

  describe("appendListName()", () => {
    it("should append list name", async () => {
      const cardService = new CardService();
      const fakeupdatedCards = [fakeUpdatedCard];
      const list = [fakeList];

      const updatedCards = cardService.appendListName(fakeupdatedCards, list);
      const card = updatedCards[0];

      expect(card.updatedListName).toBe(fakeList.name);
    });
  });

  describe("filterByStatus()", () => {
    it("should filter cards by status", async () => {
      const cardService = new CardService();
      const fakeUpdatedCard1 = {
        ...fakeUpdatedCard,
        updatedListName: "In Progress",
      };
      const fakeUpdatedCard2 = {
        ...fakeUpdatedCard,
        id: "62d402c2a48edb10e252b577",
        updatedListName: "Done",
      };
      const fakeUpdatedCard3 = {
        ...fakeUpdatedCard,
        id: "62d402c2a48edb10e252b578",
        updatedListName: "Reviewing",
      };
      const fakeupdatedCards = [
        fakeUpdatedCard1,
        fakeUpdatedCard2,
        fakeUpdatedCard3,
      ];

      const updatedCards = cardService.filterByStatus(
        fakeupdatedCards,
        "InProgress"
      );

      expect(updatedCards.length).toBe(2);
      updatedCards.forEach((card) => {
        expect(["In Progress", "Reviewing"]).toContain(card.updatedListName);
      });
    });
  });

  describe("filterByLabel", () => {
    it("should filter cards by label", async () => {
      const cardService = new CardService();
      const fakeUpdatedCard1 = {
        ...fakeUpdatedCard,
        labels: [
          {
            id: "609f539d679f1c10c63390b4",
            idBoard: "609f488638122f7a82bf31b4",
            name: "Doc",
            color: "yellow",
          },
          {
            id: "60b2024ca49d1525049cf34c",
            idBoard: "609f488638122f7a82bf31b4",
            name: "Productivity",
            color: "lime",
          },
          {
            id: "626bb6c58c2f134275d2429d",
            idBoard: "609f488638122f7a82bf31b4",
            name: "VS Code",
            color: "blue",
          },
        ],
      };
      const fakeUpdatedCard2 = {
        ...fakeUpdatedCard,
        labels: [
          {
            id: "609f539d679f1c10c63390b4",
            idBoard: "609f488638122f7a82bf31b4",
            name: "Doc",
            color: "yellow",
          },
        ],
      };
      const fakeUpdatedCard3 = {
        ...fakeUpdatedCard,
        labels: [
          {
            id: "609f539d679f1c10c63390b4",
            idBoard: "609f488638122f7a82bf31b4",
            name: "Doc",
            color: "yellow",
          },
          {
            id: "626bb6c58c2f134275d2429d",
            idBoard: "609f488638122f7a82bf31b4",
            name: "VS Code",
            color: "blue",
          },
        ],
      };
      const fakeupdatedCards = [
        fakeUpdatedCard1,
        fakeUpdatedCard2,
        fakeUpdatedCard3,
      ];

      const updatedCards = cardService.filterByLabel(fakeupdatedCards, "Doc");

      expect(updatedCards.length).toBe(3);
      updatedCards.forEach((card) => {
        expect("Doc").toBe(card.labels[0].name);
        /* labels = card.labels
        labels.forEach((label) =>{
          expect("Doc").toBe(label.name);
        }) */
      });
    });
  });

  describe("filterByDateRange", () => {
    it("should filter cards by date range", async () => {
      const cardService = new CardService();
      const fakeUpdatedCard1 = {
        ...fakeUpdatedCard,
        createdDate: "2022-07-17T12:38:26.507Z",
      };

      const fakeUpdatedCard2 = {
        ...fakeUpdatedCard,
        createdDate: "2022-01-01T12:38:26.507Z",
      };
      const fakeUpdatedCard3 = {
        ...fakeUpdatedCard,
        createdDate: "2022-03-17T12:38:26.507Z",
      };

      const fakeupdatedCards = [
        fakeUpdatedCard1,
        fakeUpdatedCard2,
        fakeUpdatedCard3,
      ];

      const updatedCards = cardService.filterByDateRange(
        fakeupdatedCards,
        "2022-01-01",
        "2022-03-02"
      );

      expect(updatedCards.length).toBe(1);
      updatedCards.forEach((card) => {
        expect("2022-01-01T12:38:26.507Z").toBe(card.createdDate);
      });
    });
  });

  describe("groupCards()", () => {
    it("should group cards by list, month and count labels", async () => {
      const cardService = new CardService();
      const fakeCard1 = {
        ...fakeUpdatedCard,
        updatedListName: "In Progress",
        labels: [{ name: "A" }],
      };
      const fakeCard2 = {
        ...fakeUpdatedCard,
        id: "62d402c2a48edb10e252b577",
        updatedListName: "Done",
        labels: [{ name: "A" }, { name: "B" }],
      };
      const fakeCard3 = {
        ...fakeUpdatedCard,
        id: "62d402c2a48edb10e252b578",
        updatedListName: "Reviewing",
        labels: [{ name: "B" }, { name: "C" }],
      };
      const fakeCard4 = {
        ...fakeUpdatedCard,
        id: "62d402c2a48edb10e252b568",
        updatedListName: "Reviewing",
        labels: [{ name: "B" }, { name: "C" }, { name: "D" }],
      };
      const fakeCard5 = {
        ...fakeUpdatedCard,
        id: "62d402c2a48edb10e252b558",
        updatedListName: "Reviewing",
        labels: [{ name: "B" }, { name: "C" }, { name: "D" }],
        createdDate: "2022-08-17T12:38:26.507Z",
      };
      const fakeCards = [fakeCard1, fakeCard2, fakeCard3, fakeCard4, fakeCard5];

      const updatedCards = cardService.groupCards(fakeCards);

      const expectedResult = {
        Done: {
          July: {
            A: 1,
            B: 1,
          },
        },
        "In Progress": {
          July: {
            A: 1,
          },
        },
        Reviewing: {
          August: {
            B: 1,
            C: 1,
            D: 1,
          },
          July: {
            B: 2,
            C: 2,
            D: 1,
          },
        },
      };

      expect(updatedCards).toEqual(expectedResult);
    });
  });

  describe("groupByMonth())", () => {
    it("should group card by month", async () => {
      const cardService = new CardService();
      const fakeCard1 = {
        ...fakeUpdatedCard,
        createdDate: "2022-07-17T12:38:26.507Z",
      };
      const fakeCard2 = {
        ...fakeUpdatedCard,
        createdDate: "2022-06-18T12:38:26.507Z",
      };
      const fakeCard3 = {
        ...fakeUpdatedCard,
        createdDate: "2022-07-28T12:38:26.507Z",
      };

      const fakeCards = [fakeCard1, fakeCard2, fakeCard3];

      const updatedCards = cardService.groupByMonth(fakeCards);
      const expectedResult = {
        July: [fakeCard1, fakeCard3],
        June: [fakeCard2],
      };
      expect(updatedCards).toEqual(expectedResult);
    });
  });

  describe("extractAllLabelNames()", () => {
    it("should extract all label name and store to array without repetition", async () => {
      const cardService = new CardService();
      const fakeCard1 = {
        ...fakeUpdatedCard,
        labels: [{ name: "作業" }],
      };
      const fakeCard2 = {
        ...fakeUpdatedCard,
        labels: [{ name: "作業" }, { name: "Productivity" }],
      };
      const fakeCard3 = {
        ...fakeUpdatedCard,
        labels: [{ name: "Productivity" }, { name: "VS Code" }],
      };

      const fakeCards = {
        Todo: {
          July: [fakeCard1],
        },
        Done: {
          June: [fakeCard2, fakeCard3],
        },
      };

      const updatedCards = cardService.extractAllLabelNames(fakeCards);
      const expectedResult = ["作業", "Productivity", "VS Code"];

      expect(updatedCards).toEqual(expectedResult);
    });
  });

  describe("getMonthlyLabelCardNumbersMap()", () => {
    it("should count number of cards for each label in each month", async () => {
      const cardService = new CardService();

      const labelNames = ["作業", "Productivity"];

      const updatedCard = cardService.getMonthlyLabelCardNumbersMap(
        fakeGroupedCard,
        "Done",
        "July",
        labelNames
      );

      expectedResult = {
        作業: 2,
        "No Label": 1,
        Productivity: 1,
      };

      expect(updatedCard).toMatchObject(expectedResult);
    });
  });
});
