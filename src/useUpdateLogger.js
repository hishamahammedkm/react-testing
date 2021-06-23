import { useEffect } from "react"

const useUpdateLogger = (state) => {
    useEffect(() => {
        console.log(state)
      
    }, [state])

}

export default useUpdateLogger
