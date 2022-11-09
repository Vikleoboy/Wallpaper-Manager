import { motion, MotionConfig } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Pic from "./Pic";
import { api } from "../api";
import axios from "axios";

function Car(props) {
  const [width, setwidth] = useState(0);
  const carousel = useRef();
  const [tagdata, settagdata] = useState(null);

  useEffect(() => {
    // if (props.tag !== undefined) {

    // }

    let dod = async () => {
      let res = await axios(
        `http://localhost:3001/api/search?query=${props.tag}&pageNum=1&way=2`
      );
      settagdata(res.data.res);
    };
    dod();
    // api(props.tag).then((data) => settagdata(data));
  }, []);

  useEffect(() => {
    try {
      let car_data = carousel.current;

      setwidth(car_data?.scrollWidth - car_data.offsetWidth);
    } catch {
      console.log("error came ");
    }
  });

  // if data is not loaded it will say its loding

  async function walloop() {
    let list = [];
    for (let i of tagdata) {
      list.push(i.image);
    }
    let res = await axios.post("http://localhost:3001/walloop", { pics: list });
    console.log(res);
    fetch("http://localhost:3001/walloop", {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  var tagName = null;
  if (tagdata === null) {
    return <progress class="progress w-56"></progress>;
  } else {
    tagName = props.tag;
  }

  return (
    <>
      {/* Tag Name and Waloop Button */}
      <div className="flex justify-between items-center px-6">
        <h1 className=" text-2xl">{tagName}</h1>
        <button
          onClick={walloop}
          className="btn bg-gradient-to-r from-pink-500 to-yellow-500"
        >
          Wallpaper Loop
        </button>
      </div>

      {/* real functionality of carsonal  */}
      <motion.div ref={carousel} className="  cursor-grab  overflow-hidden  ">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className=" flex z-0 "
        >
          {tagdata.map((imgs) => {
            return (
              <Pic className=" basis-1/3 " key={imgs.title} img={imgs}></Pic>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Car;
