import React from 'react';

const useFetch = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    interface Options {
        method: string;
        headers: {
            accept: string;
            Authorization: string;
        };
    }

    const request = React.useCallback(async (url: string, options: Options) => {
        let response;
        let json;
        try {
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
            if (response.ok === false) throw new Error(json.message);
        } catch (erro) {
            json = null;
            console.log(erro);
        } finally {
            setLoading(false);
            setData(json.results);
        }
    }, []);

    return {
        request,
        data,
        loading,
    };
};

export default useFetch;
