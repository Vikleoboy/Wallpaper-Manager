import Nav from "../comp/navbar";
import Car from "../comp/car";
import Tr from "../comp/TrPage";

import { useState, useEffect, useRef } from "react";

function Home() {
  const [cars, setcars] = useState(["aesthetic", "girls"]);

  function addCar(tag) {
    console.log(cars);
    setcars((pre) => {
      return [...pre, tag];
    });
  }
  console.log(cars);
  return (
    <>
      <Tr add={addCar}></Tr>

      <div className=" space-y-10 mt-6">
        {cars.map((i) => {
          return (
            <div>
              <Car tag={i}></Car>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
