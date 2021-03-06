import { INCREMENT, DECREMENT } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

const initialState = 0;

 const counter= (count = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
      return count+action.payload;
    case DECREMENT:
    // Fill in the body of this case
      return count-action.payload;
    default:
      return count;
  }
};

export default counter;
