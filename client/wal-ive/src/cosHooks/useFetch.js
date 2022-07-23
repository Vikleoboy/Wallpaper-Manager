import { api } from "../api";
import { useState, useEffect, useCallback } from "react";
function useFetch(query, howmany, page) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [deta, setdeta] = useState([]);

  const just = useCallback(async () => {
    try {
      await seterror(false);
      let res = await api(query, howmany, page);

      await setdeta((pre) => {
        return [...res.photos];
      });

      await setloading(false);
    } catch (error) {
      console.log("bro there is eroor ");
      console.log(error);
      seterror(true);
    }
  }, [query, page]);

  useEffect(() => {
    just();
  }, [query, page]);

  return { loading, error, deta };
}

export default useFetch;
