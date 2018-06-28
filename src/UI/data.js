import appleinsider from './icons/appleinsider.png';
import creode from './icons/creode.png';
import epiphanySearch from './icons/epiphany-search.png';
import everyinteract from './icons/everyinteract-middle.png';
import futureOfTheWeb from './icons/future-of-the-web.png';
import everyInteraction from './icons/every-interaction-image.png';

const users = [
  {
    userName: 'Every Interaction',
    userAddress: 'EveryInteract',
    description:
      'UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing.',
    city: 'London, UK',
    website: 'everyinteraction.com',
    joined: 'May 2008',
  },
  {
    userName: 'Nick Brooks',
    userAddress: 'NickBrooks',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora minima fugit corporis.',
    city: 'Shreveport, USA',
    website: 'google.com',
    joined: 'May 2010',
  },
  {
    userName: 'Stephen',
    userAddress: 'Stephen',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora minima fugit corporis.',
    city: 'Ramstein, Germany',
    website: 'yahoo.com',
    joined: 'April 2011',
  },
  {
    userName: 'Raimond Green',
    userAddress: 'RaimondGreen',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora minima fugit corporis.',
    city: 'Berlin, Germany',
    website: 'git.com',
    joined: 'May 2006',
  },
  {
    userName: 'Ashley',
    userAddress: 'Ashley',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora minima fugit corporis.',
    city: 'Liverpool, UK',
    website: 'some.io',
    joined: 'Junyary 2009',
  },
  {
    userName: 'The Best Design',
    userAddress: 'TheBestDesign',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora minima fugit corporis.',
    city: 'Paris, Franse',
    website: 'bing.com',
    joined: 'April 2009',
  },
  {
    userName: 'Logical Exercises',
    userAddress: 'LogicalExercises',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora minima fugit corporis.',
    city: 'Los-Angeles, USA',
    website: 'microsoft.com',
    joined: 'June 2007',
  },
];

const countryTrends = [
  {
    id: 1,
    to: '/trends/BringYourDogToWorkDay',
    count: null,
    description: null,
    name: '#BringYourDogToWorkDay',
  },
  {
    id: 2,
    to: '/trends/FridayFeeling',
    count: 12100,
    description: null,
    name: '#FridayFeeling',
  },
  {
    id: 3,
    to: '/trends/BrexitAnniversary',
    count: null,
    description: 'It’s one year since the UK voted to leave the European Union',
    name: '#BrexitAnniversary',
  },
  {
    id: 4,
    to: '/trends/HMSQueenElizabeth',
    count: 1036,
    description: null,
    name: 'HMS Queen Elizabeth',
  },
  {
    id: 5,
    to: '/trends/JoeBudden',
    count: 1036,
    description: null,
    name: 'Joe Budden',
  },
  {
    id: 6,
    to: '/trends/Trident',
    count: 6136,
    description: null,
    name: 'Trident',
  },
];

const suggestions = [
  {
    id: 1,
    image: appleinsider,
    address: '@appleinsider',
    official: null,
    name: 'AppleInsider',
  },
  {
    id: 2,
    image: creode,
    address: '@Creode',
    official: true,
    name: 'Creode',
  },
  {
    id: 3,
    image: epiphanySearch,
    address: '@EpiphanySearch',
    official: null,
    name: 'Epiphany Search',
  },
];

const messages = [
  {
    id: 1,
    pinned: true,
    userName: 'Every Interaction',
    userAddress: 'EveryInteract',
    avatar: everyinteract,
    dateinfo: '2 Mar 2015',
    comments: null,
    retweets: 17,
    likes: 47,
    currentUserLiked: true,
    image: everyInteraction,
    message:
      'We’ve made some more resources for all you wonderful #design folk http://everyinteraction.com/resources/ #webdesign #UI',
  },
  {
    id: 2,
    pinned: null,
    userName: 'Every Interaction',
    userAddress: 'EveryInteract',
    avatar: everyinteract,
    dateinfo: '23h',
    comments: 1,
    retweets: 4,
    likes: 2,
    currentUserLiked: null,
    image: null,
    message:
      'Our new website concept; Taking you from… @ Every Interaction http://instagram.com/p/BNFGrfhBP3M/',
  },
  {
    id: 3,
    pinned: null,
    userName: 'Every Interaction',
    userAddress: 'EveryInteract',
    avatar: everyinteract,
    dateinfo: 'Nov 18',
    comments: null,
    retweets: null,
    likes: null,
    currentUserLiked: null,
    image: futureOfTheWeb,
    message:
      'Variable web fonts are coming, and will open a world of opportunities for weight use online',
  },
];

export {
  users, countryTrends, suggestions, messages,
};
