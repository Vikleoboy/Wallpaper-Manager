import { motion, MotionConfig } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

function Pic(props) {
  let imgs = props.img;

  const [wal, setwall] = useState();

  useEffect(() => {
    if (wal !== undefined) {
      fetch(`http://localhost:3001/setwal/${wal}`).then((_) =>
        console.log("bro send")
      );
      console.log(wal, "send ");
    } else {
      console.log("wal is undefined ");
    }
  }, [wal]);

  function setwal(event) {
    setwall(event.currentTarget.parentNode.id);
  }

  return (
    <>
      <motion.div
        id={imgs.id}
        className={
          props.className +
          "z-0 sixcont relative min-w-[50%] xl:min-w-[33%] max-h-[40rem] p-[20px] group"
        }
      >
        <img
          className=" w-full h-full rounded-xl pointer-events-none shadow-inner drop-shadow-xl"
          src={imgs.src.large}
        ></img>
        <button
          onClick={setwal}
          className="btn group-hover:opacity-100 opacity-0 absolute bottom-[40px] left-[10%] bg-primary rounded-full px-3 py-2 text-white text-md shadow-inner drop-shadow-2xl hover:bg-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          Set wallpaper
        </button>

        {/* <div className="absolute bottom-[40px] left-[40%]">
          <div className="dropdown dropdown-end relative group-hover:opacity-100 opacity-0">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabindex="0"
              className="menu z-10 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 relative"
            >
              <li className="">
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </motion.div>
    </>
  );
}

export default Pic;
