import { useEffect, useState } from "react";


function useFetch(URL) {

    const [fail, setFail] = useState(false);
    const [loading, setLoading] = useState();
    const [resp, setResp] = useState(null);
        

    const fetching = async () => {

    
        try {
            
        setLoading(true);
        const resp = await fetch(URL);
        setLoading(false);

            if(!resp.ok) {

                throw new Error(`Response status: ${resp.status}`);
    
            }

        const data = await resp.json();
        setResp(data)
        
        }
         
        catch (error) {
            
            setLoading(false)
            setFail(true)
            console.error(error)

        }


    }



    useEffect(() => {

        fetching()

    }, [URL])


    return(

        {

            data: resp,
            isLoading: loading,
            hasError: fail

        }

    );


}

export default useFetch;