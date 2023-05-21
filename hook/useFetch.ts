import { useState, useEffect, FC } from "react";
import axios from 'axios';

const useFetch = <D>(endpoint: string, query: Record<string, unknown>) => {
    const [data, setData] = useState<D[]>([]);
    const [isLoading, setIsloading] = useState<boolean>(false);
    const [error, setError] = useState<null | unknown>(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIS_API_KEY,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };

      const fetchData = async () => {
        setIsloading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data)
            setIsloading(false);
        } catch (error) {
                setError(error);
                alert('Something went wrong. Please try again')
        } finally {
            setIsloading(false);
        }
      }

      const refetch = () => { fetchData() }

      useEffect(() => {
        fetchData();
      }, [])

      return { data, isLoading, error, refetch };
}

export default useFetch