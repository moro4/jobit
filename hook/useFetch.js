import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';

const rapid_api_key = RAPID_API_KEY;

export default function useFetch(endpoint, query) {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

   const options = {
      method: 'GET',

      // not best practice but easy and straightforward
      // way of to mock the api server
      // url: `http://192.168.2.154:3000/${endpoint}`,

      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
         'X-RapidAPI-Key': rapid_api_key,
         'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      params: {...query}
   };

   async function fetchData() {

      setIsLoading(true);

      try {
         const response = await axios.request(options)
         // setData(response.data);
         setData(response.data.data);
         setIsLoading(false);
      } catch (error) {
         setIsError(true);
         alert('There is an error');
      } finally {
         setIsLoading(false);
      }

   }

   useEffect(() => {
      fetchData()
   }, []);

   function refetch() {
      fetchData();
   }

   return {data, isLoading, isError, refetch};
}