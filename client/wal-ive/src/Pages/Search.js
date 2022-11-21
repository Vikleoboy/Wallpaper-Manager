import e from "cors";
import { useRef, useState, useEffect, useCallback } from "react";

import useFetch from "../cosHooks/useFetch";
import Pic from "../comp/Pic";
function Search() {
  const [text, settext] = useState("");
  const [PageNum, setPageNum] = useState(1);
  const { loading, error, deta } = useFetch(text, 20, PageNum);

  // on enter
  function onDown(e) {
    if (e.key === "Enter") {
      let inshit = document.querySelector("#inshit");
      settext(inshit.value);
    }
  }

  // Logs
  console.log(deta);
  return (
    <>
      <div className=" mx-auto mt-8 text-center">
        <input
          id="inshit"
          type="text"
          className=" outline-none text-center  rounded-full drop-shadow-xl shadow-inner text-3xl px-6 py-4 "
          onKeyDown={onDown}
        />
      </div>

      <div id="allimg" className=" text-center p-6">
        <div className="flex flex-wrap ">
          {error ? (
            <h1 className=" text-4xl mx-auto">Search plz</h1>
          ) : deta.length === 0 ? (
            <h1></h1>
          ) : loading ? (
            <h1 className=" text-4xl">Loading</h1>
          ) : (
            deta.map((i, num) => {
              return (
                <div className=" basis-1/2 lg:basis-1/3">
                  <Pic key={num} img={i}></Pic>
                </div>
              );
            })
          )}
        </div>
        {!error && (
          <div className="flex justify-end px-4 space-x-4">
            <button
              className="btn"
              onClick={() => setPageNum((pre) => pre - 1)}
            >
              Previos
            </button>
            <button
              className="btn "
              onClick={() => setPageNum((pre) => pre + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
