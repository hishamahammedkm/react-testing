import { useState } from "react"

const Button = () => {
    const [value, setValue] = useState('press here')
    function dummyFuction(){
        setValue('button clicked')
    }
    return (
        <button onClick={dummyFuction} title='dummyBytton' >
            {value}
        </button>
    )
}

export default Button
