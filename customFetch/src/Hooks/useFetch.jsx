import { useEffect, useState } from "react";


function useFetch(URL) {

    const [myUrl, setMyUrl] = useState(URL)
    const [fail, setFail] = useState(false);
    const [loading, setLoading] = useState();
    const [resp, setResp] = useState(null);
        

    const fetching = async () => {

    
        try {
            
        setLoading(true);
        setResp(await fetch(URL))
        setLoading(false);

            if(!resp.ok) {

                throw new Error(`Response status: ${resp.status}`);
    
            }
        
        }
         
        catch (error) {
            
            setFail(true)
            console.error(error)

        }


    }



    useEffect(() => {

        fetching()

    }, [myUrl])


    return(

        {

            adata: resp,
            isLoading: loading,
            hasError: fail

        }

    );


}

export default useFetch;