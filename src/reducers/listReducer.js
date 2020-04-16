
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
      }
    ]
  }
];

const listReducer = (state = initalState, action) =>{
    switch(action.type){
        default:
            return state;
    }
};

export default listReducer;