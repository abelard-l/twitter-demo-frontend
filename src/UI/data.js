import ai from './icons/ai.png';
import creode from './icons/creode.png';
import e from './icons/e.png';
import everyinteract from './icons/everyinteract-middle.png';

const users = [
  {
    username: 'Every Interaction',
    useradress: 'EveryInteract',
    description:
      'UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing.',
    city: 'London, UK',
    website: 'everyinteraction.com',
    joined: 'May 2008',
  },
  {
    username: 'Nick Brooks',
    useradress: 'NickBrooks',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora minima fugit corporis.',
    city: 'Shreveport, USA',
    website: 'google.com',
    joined: 'May 2010',
  },
  {
    username: 'Stephen',
    useradress: 'Stephen',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora minima fugit corporis.',
    city: 'Ramstein, Germany',
    website: 'yahoo.com',
    joined: 'April 2011',
  },
  {
    username: 'Raimond Green',
    useradress: 'RaimondGreen',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora minima fugit corporis.',
    city: 'Berlin, Germany',
    website: 'git.com',
    joined: 'May 2006',
  },
  {
    username: 'Ashley',
    useradress: 'Ashley',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora minima fugit corporis.',
    city: 'Liverpool, UK',
    website: 'some.io',
    joined: 'Junyary 2009',
  },
  {
    username: 'The Best Design',
    useradress: 'TheBestDesign',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora minima fugit corporis.',
    city: 'Paris, Franse',
    website: 'bing.com',
    joined: 'April 2009',
  },
  {
    username: 'Logical Exercises',
    useradress: 'LogicalExercises',
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

const statInfos = [
  {
    id: 1,
    to: '',
    amount: 8058,
    active: true,
    name: 'Tweets',
  },
  {
    id: 2,
    to: 'following',
    amount: 721,
    active: null,
    name: 'Following',
  },
  {
    id: 3,
    to: 'followers',
    amount: 1815,
    active: null,
    name: 'Followers',
  },
  {
    id: 4,
    to: 'likes',
    amount: 460,
    active: null,
    name: 'Likes',
  },
  {
    id: 5,
    to: 'lists',
    amount: 2,
    active: null,
    name: 'Lists',
  },
];

const suggestions = [
  {
    id: 1,
    image: ai,
    adress: '@appleinsider',
    official: null,
    name: 'AppleInsider',
  },
  {
    id: 2,
    image: creode,
    adress: '@Creode',
    official: true,
    name: 'Creode',
  },
  {
    id: 3,
    image: e,
    adress: '@EpiphanySearch',
    official: null,
    name: 'Epiphany Search',
  },
];

const messages = [
  {
    id: 1,
    pinned: true,
    username: 'Every Interaction',
    useradress: 'EveryInteract',
    avatar: everyinteract,
    dateinfo: '2 Mar 2015',
    comments: null,
    retweets: 17,
    likes: 47,
    currentUserLiked: true,
    message:
      'We’ve made some more resources for all you wonderful #design folk http://everyinteraction.com/resources/ #webdesign #UI',
  },
  {
    id: 2,
    pinned: null,
    username: 'Every Interaction',
    useradress: 'EveryInteract',
    avatar: everyinteract,
    dateinfo: '23h',
    comments: 1,
    retweets: 4,
    likes: 2,
    currentUserLiked: null,
    message:
      'Our new website concept; Taking you from… @ Every Interaction http://instagram.com/p/BNFGrfhBP3M/',
  },
  {
    id: 3,
    pinned: true,
    username: 'Every Interaction',
    useradress: 'EveryInteract',
    avatar: everyinteract,
    dateinfo: 'Nov 18',
    comments: null,
    retweets: null,
    likes: null,
    currentUserLiked: null,
    message:
      'Variable web fonts are coming, and will open a world of opportunities for weight use online',
  },
];

export {
  users, countryTrends, statInfos, suggestions, messages,
};
