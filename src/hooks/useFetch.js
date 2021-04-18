import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(ip) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Return fetched data
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(ip)
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [ip]);

  return { data, error, isLoading };
}

export default useFetch;
