import React, { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1, toggle: state.toggle }
        case 'TOGGLE':
            return { count: state.count, toggle: !state.toggle }
        default:
            return state
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        toggle: false
    })
    return <>
        <p>{state.count}</p>
        <h3>{state.toggle ? "TOGGLE" : ""}</h3>
        <button onClick={() => {
            dispatch({ type: 'INCREMENT' })
            dispatch({ type: 'TOGGLE' })
        }}>INCREMENT</button>
    </>
}

export default UseReducer