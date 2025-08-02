export function incrementAction(number : number) {
    return {
        type : "INCREMENT",
        payload : number
    }
}

export function decrementAction(number : number) {
    return {
        type : "DECREMENT",
        payload : number
    }
}

export function resetAction() {
    return {
        type : "RESET",
        payload : ''
    }
}