import React, { useRef } from "react";

const UseRef = () => {
    const inputRef = useRef(null)
    const buttonClick = () => {
        inputRef.current.value = ""
    }
    return <div>
        <input type="text" placeholder="Ex.." ref={inputRef} />
        <button onClick={buttonClick}>Change Name</button>
    </div>
}

export default UseRef