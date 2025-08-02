export interface CounterState {
    count : number
}

type IncrementAction = {type : "INCREMENT", payload : number}
type DecrementAction = {type : "DECREMENT", payload : number}
type ResetAction = {type : "RESET"}

type Action = IncrementAction | DecrementAction | ResetAction

export default function counterReducer(state : CounterState , action : Action) {
    switch (action.type) {
        case "INCREMENT":
            
            return{
                ...state,
                count : action.payload + state.count
            }

        case "DECREMENT":
            
            return{
                ...state,
                count :  state.count - action.payload 
            }

        case "RESET":
            
            return{
                ...state,
                count : 0
            }
    
        default:
            return{
                ...state,
                count : 0
            }
    }
}