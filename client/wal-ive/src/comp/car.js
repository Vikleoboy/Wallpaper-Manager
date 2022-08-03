import { motion, MotionConfig } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Pic from "./Pic";
import { api } from "../api";

function Car(props) {
  const [width, setwidth] = useState(0);
  const carousel = useRef();
  const [tagdata, settagdata] = useState(null);

  useEffect(() => {
    // if (props.tag !== undefined) {

    // }
    api(props?.tag).then((data) => settagdata(data));
  }, []);

  useEffect(() => {
    try {
      let car_data = carousel.current;
      console.log(car_data);
      setwidth(car_data?.scrollWidth - car_data.offsetWidth);
    } catch {
      console.log("error came ");
    }
  });

  // if data is not loaded it will say its loding

  var tagName = null;
  if (tagdata === null) {
    return <progress class="progress w-56"></progress>;
  } else {
    tagName = tagdata.next_page.split("=");

    tagName = tagName[tagName.length - 1].replace("+", " ");
  }

  return (
    <>
      <div className="flex justify-between items-center px-6">
        <h1 className=" text-2xl">{tagName}</h1>
        <button className="btn bg-gradient-to-r from-pink-500 to-yellow-500">
          Wallpaper Loop{" "}
        </button>
      </div>
      <motion.div ref={carousel} className="  cursor-grab  overflow-hidden  ">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="in-car flex z-0"
        >
          {tagdata.photos.map((imgs) => {
            return <Pic key={imgs.id} img={imgs}></Pic>;
          })}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Car;
