import { opr } from './actions'

const reducer = (state = { ans: 0, history: [] }, action) => {
    if (action.type == "add") {
      // console.log(state.ans)
        return {
            ans: action.val1 + action.val2,
            history: state.history
        }
    }
    if (action.type == "sub") {
        //console.log(state.ans)
        return {

            ans: action.val1 - action.val2,
            history: state.history
        }
    }
    if (action.type == "mul") {
      //  console.log(state.ans)
        return {

            ans: action.val1 * action.val2,
            history: state.history
        }
    }
    if (action.type == "div") {
      // console.log(state.ans)
        return {

            ans: action.val1 / action.val2,
            history: state.history
        }
    }

    if (action.type == "hist") {
       // console.log(state.history)
        return {

            ans: state.ans,
            history: [...state.history, action.histval + "=" + state.ans]
        }
    }
    return state
}
export default reducer;
