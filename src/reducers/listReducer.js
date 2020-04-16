
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
    id: 0,
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
        default:
            return state;
    }
};

export default listReducer;