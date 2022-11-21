import { useState, useEffect, useLayoutEffect } from "react";

function Tr(props) {
  const [data, setdata] = useState(null);
  useEffect(() => {
    let m = async () => {
      try {
        let d = await fetch("http://localhost:3001/tr");
        let r = await d.json();
        setdata(r);
      } catch (error) {
        console.log("error from tr ", error);
      }
    };
    m();
    // fetch("http://localhost:3001/tr")
    //   .then((d) => {
    //     d.json().then((r) => setdata(r));
    //     console.log(data, "from fun");
    //   })
    //   .catch((e) => console.log(e));
  }, []);

  if (data === null) {
    console.log(null);
    return <h1>Loading</h1>;
  } else {
    console.log(data.r);
    return (
      <div className=" bg-primary flex p-3 space-x-2   rounded-xl shadow-inner drop-shadow-lg">
        {data.tr.map((i) => {
          return (
            <button
              key={i}
              className=" bg-neutrel  text-accent badge  p-3 opacity-75"
              info={i}
              onClick={() => {
                props.add(i);
              }}
            >
              {i}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Tr;
