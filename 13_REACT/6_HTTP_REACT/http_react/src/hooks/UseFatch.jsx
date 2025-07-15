import { useState, useEffect, use } from "react";

// Custom Hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);

    // Loading
    const [loading, setLoading] = useState(false);

    // Erros
    const [error, setError] = useState(null); 

    const httpConfig = (data, method) => {

        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            // tratando erros
            try {
           // Loading
            setLoading(true)

            const res = await fetch(url);
            const json = await res.json();

            setLoading(false)

            setData(json);
            } catch (error) {
                console.log(error.message);

                setError("Houve um erro ao carregar os dados.");
            }
            setLoading(true)
        }

        fetchData();
    }, [url, callFetch]);

    // refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            let json;

            if (method === "POST") {

                setLoading(true)

                let fetchOptions = [url, config];

                const res = await fetch(...fetchOptions);

                json = await res.json();

                setLoading(false)
            }
            
            setCallFetch(json);
        };

        httpRequest();
    }, [config, method, url])

    return {data, httpConfig, loading, error };
};