import { useEffect, useState } from "react";
function getSavedValue(key,initialState){
    const savedValue = JSON.parse(localStorage.getItem(key))
    if(savedValue) return savedValue
    if(initialState instanceof Function) return initialState()
    return initialState
}
export default function useLocaStorage(key,initialState){
    const [value, setValue] = useState(()=>{
        return getSavedValue(key,initialState)
    })
    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))

       
    }, [value])
    return [value, setValue]
}