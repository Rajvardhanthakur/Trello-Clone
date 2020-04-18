import {CONSTANTS}  from "../actions";

let listID = 2;
let cardID = 7;

const initalState = [
  {
    title: "Last Episode",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text:
          "Which is covered in thick white steam pouring from Hogward Express",
      },
      {
        id: `card-${1}`,
        text: "ALBUS: Platform nine and three-quarters",
      },
    ],
  },
  {
    title: "This Episode",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "His hand is empty. It’s a lame trick",
      },
      {
        id: `card-${3}`,
        text: "ALBUS: Everyone’s staring at us again.",
      },
      {
        id: `card-${4}`,
        text: "HERMIONE: They’re certainly something.",
      },
    ],
  },
];

const listReducer = (state = initalState, action) =>{
    switch(action.type){
        case CONSTANTS.ADD_LIST:
           const newList = {
             title: action.payload,
             cards: [],
             id: `card-${listID}`,
           };
           listID += 1;
           return [...state, newList]
        
        case CONSTANTS.ADD_CARD:
          const newCard = {
            text: action.payload.text,
            id: `card-${cardID}`,
          };
          cardID += 1;

          console.log("action recieved", action)

          const newState = state.map(list => {
            if(list.id === action.payload.listID){
              return {
                ...list,
                cards : [...list.cards, newCard]
              }
            }else{
              return list;
            }
          });

          return newState;

        default:
            return state;
    }
};

export default listReducer;