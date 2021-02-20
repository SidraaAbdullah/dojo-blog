import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not fetch data from that resource");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setIsError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setIsPending(false);
            setIsError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, isError };
};

export default useFetch;
