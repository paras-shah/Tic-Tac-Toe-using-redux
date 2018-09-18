import * as types from "../actions";

const initialState = {
  squares: Array(9).fill(null),
  stepNumber: 0,
  isXNext: true,
  winner: null
};

function checkWinner(sqaures) {
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let winningPosition of winningCombination) {
    let [first, second, third] = winningPosition;
    // console.log(sqaures[first]   ,sqaures[second]   ,sqaures[third]   );
    if (
      sqaures[first] &&
      sqaures[first] === sqaures[second] &&
      sqaures[second] === sqaures[third]
    ) {
      return sqaures[first];
    }
  }
  return null;
}

export default function(
  state = initialState,
  action = { type: "", payload: { value: "", isXNext: "" } }
) {
  const params = action.payload;
  //console.log('action',action);

  if (state.winner !== null) return state;

  switch (action.type) {
    case types.SQUARE_CLICK:
      const squares = state.squares.slice();
      squares[params.value - 1] = state.isXNext ? "X" : "O";
      const newState = {
        ...state,
        squares: squares,
        stepNumber: state.stepNumber + 1,
        isXNext: !state.isXNext,
        winner: checkWinner(
          squares
        ) /* check current sqaures as state is not updated*/
      };
      // console.log('newState',newState);
      return newState;

    default:
      console.log(state);
      return state;
  }
}
