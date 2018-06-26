import ai from "./icons/ai.png";
import creode from "./icons/creode.png";
import e from "./icons/e.png";

const countryTrends = [
  {
    key: 1,
    to: "/trends/BringYourDogToWorkDay",
    count: null,
    description: null,
    name: "#BringYourDogToWorkDay"
  },
  {
    key: 2,
    to: "/trends/FridayFeeling",
    count: 12100,
    description: null,
    name: "#FridayFeeling"
  },
  {
    key: 3,
    to: "/trends/BrexitAnniversary",
    count: null,
    description: "It’s one year since the UK voted to leave the European Union",
    name: "#BrexitAnniversary"
  },
  {
    key: 4,
    to: "/trends/HMSQueenElizabeth",
    count: 1036,
    description: null,
    name: "HMS Queen Elizabeth"
  },
  {
    key: 5,
    to: "/trends/JoeBudden",
    count: 1036,
    description: null,
    name: "Joe Budden"
  },
  {
    key: 6,
    to: "/trends/Trident",
    count: 6136,
    description: null,
    name: "Trident"
  }
];

const statInfos = [
  {
    key: 1,
    to: "/EveryInteract/",
    amount: 8058,
    active: true,
    name: "Tweets"
  },
  {
    key: 2,
    to: "/EveryInteract/following",
    amount: 721,
    active: null,
    name: "Following"
  },
  {
    key: 3,
    to: "/EveryInteract/followers",
    amount: 1815,
    active: null,
    name: "Followers"
  },
  {
    key: 4,
    to: "/EveryInteract/likes",
    amount: 460,
    active: null,
    name: "Likes"
  },
  {
    key: 5,
    to: "/EveryInteract/lists",
    amount: 2,
    active: null,
    name: "Lists"
  }
];

const suggestions = [
  {
    key: 1,
    image: ai,
    adress: "@appleinsider",
    official: null,
    name: "AppleInsider"
  },
  {
    key: 2,
    image: creode,
    adress: "@Creode",
    official: true,
    name: "Creode"
  },
  {
    key: 3,
    image: e,
    adress: "@EpiphanySearch",
    official: null,
    name: "Epiphany Search"
  }
];

export { countryTrends, statInfos, suggestions };
