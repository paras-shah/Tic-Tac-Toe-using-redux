import * as types from "../actions";

const initialState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  isXNext: true,
  winner: null
};

function checkWinner(squares) {
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
  let draw = false;

  for (let winningPosition of winningCombination) {
    let [first, second, third] = winningPosition;
    // console.log(sqaures[first]   ,sqaures[second]   ,sqaures[third]   );
    if (
      squares[first] &&
      squares[first] === squares[second] &&
      squares[second] === squares[third]
    ) {
      return squares[first];
    }
  }
  if (squares.indexOf(null) < 0) return true;
  return null;
}

export default function(
  state = initialState,
  action = { type: "", payload: { value: "", isXNext: "" } }
) {
  const params = action.payload;
  const moves = state.stepNumber;
  const history = state.history.slice(0, moves + 1);
  const currentState = history[moves];
  const squares = currentState.squares;

  console.log("action", action);

  if (state.winner !== null) return state;

  switch (action.type) {
    case types.SQUARE_CLICK:
      if (squares[params.value - 1]) return state;

      squares[params.value - 1] = state.isXNext ? "X" : "O";

      const newState = {
        history: history.concat([{ squares }]),
        stepNumber: state.stepNumber + 1,
        isXNext: !state.isXNext,
        winner: checkWinner(
          squares
        ) /* check current sqaures as state is not updated*/
      };
      // console.log('newState',newState);
      return newState;

    default:
      console.log("default state", state);
      return state;
  }
}
