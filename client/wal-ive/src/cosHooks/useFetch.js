import axios from "axios";
import { useState, useEffect, useCallback } from "react";
function useFetch(query, howmany, page) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [deta, setdeta] = useState([]);

  const just = useCallback(async () => {
    try {
      await seterror(false);

      let result = await axios(
        `http://localhost:3001/api/search?query=${query}&pageNum=${page}`
      );
      console.log(result);
      await setdeta((pre) => {
        return result.data.res;
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
