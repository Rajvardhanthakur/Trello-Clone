import {CONSTANTS}  from "../actions";

let listId = 2
let cardId = 3

const initalState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text:
          "Which is covered in thick white steam pouring from Hogward Express",
      },
      {
        id: 1,
        text: "ALBUS: Platform nine and three-quarters",
      },
    ],
  },
  {
    title: "This Episode",
    id: 1,
    cards: [
      {
        id: 0,
        text: "His hand is empty. It’s a lame trick",
      },
      {
        id: 1,
        text: "ALBUS: Everyone’s staring at us again.",
      },
      {
        id: 2,
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
             id: listId
           };
           listId += 1;
           return [...state, newList]
        
        case CONSTANTS.ADD_CARD:
          const newCard = {
            text: action.payload.text,
            id: cardId
          }
          cardId += 1;

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