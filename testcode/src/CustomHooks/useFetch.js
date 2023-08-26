import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url) {
  const [data, setData] = useState(null); //null
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]); //url

  return [data]; //[]
}

export function useGetAxios(url) {
  const [data, setData] = useState(null); //null
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }

    /* 
        const resp = await axios.get(url);
        setData(resp.data); 
        */
  };

  useEffect(() => {
    fetchData();
  }, [url]); //url

  return [data]; //[]
}
