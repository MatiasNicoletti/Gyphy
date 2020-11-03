import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading: true
    });
    useEffect(() => {
        getGifs(category).then(response => setstate({data:response, loading: false}))
    }, [category]); //execute useEffect once, when the comp is rendered

    // setTimeout(()=>{setstate({data:[1,2,3], loading: false})}, 2000)
    return state;
}