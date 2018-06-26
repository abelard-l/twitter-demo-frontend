import ai from "./icons/ai.png";
import creode from "./icons/creode.png";
import e from "./icons/e.png";

const countryTrends = [
  {
    to: "/trends/BringYourDogToWorkDay",
    count: null,
    description: null,
    name: "#BringYourDogToWorkDay"
  },
  {
    to: "/trends/FridayFeeling",
    count: 12100,
    description: null,
    name: "#FridayFeeling"
  },
  {
    to: "/trends/BrexitAnniversary",
    count: null,
    description: "It’s one year since the UK voted to leave the European Union",
    name: "#BrexitAnniversary"
  },
  {
    to: "/trends/HMSQueenElizabeth",
    count: 1036,
    description: null,
    name: "HMS Queen Elizabeth"
  },
  {
    to: "/trends/JoeBudden",
    count: 1036,
    description: null,
    name: "Joe Budden"
  },
  {
    to: "/trends/Trident",
    count: 6136,
    description: null,
    name: "Trident"
  }
];

const statInfos = [
  {
    to: "/EveryInteract/",
    amount: 8058,
    active: true,
    name: "Tweets"
  },
  {
    to: "/EveryInteract/following",
    amount: 721,
    active: null,
    name: "Following"
  },
  {
    to: "/EveryInteract/followers",
    amount: 1815,
    active: null,
    name: "Followers"
  },
  {
    to: "/EveryInteract/likes",
    amount: 460,
    active: null,
    name: "Likes"
  },
  {
    to: "/EveryInteract/lists",
    amount: 2,
    active: null,
    name: "Lists"
  }
];

const suggestions = [
  {
    image: ai,
    adress: "@appleinsider",
    official: null,
    name: "AppleInsider"
  },
  {
    image: creode,
    adress: "@Creode",
    official: true,
    name: "Creode"
  },
  {
    image: e,
    adress: "@EpiphanySearch",
    official: null,
    name: "Epiphany Search"
  }
];

export { countryTrends, statInfos, suggestions };
