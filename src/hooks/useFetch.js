import { useEffect, useState } from "react"

const useFetch = (url)=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            try{
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
                setLoading(false);
            }catch(err){
                setError(err);
                setLoading(false)
            }    
        }
        fetchData();
    },[url])
    return {data, loading, error}
}

export default useFetch;