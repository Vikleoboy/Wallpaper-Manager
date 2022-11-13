import { Navbar } from "@material-tailwind/react";
import { createPortal } from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const [data, setdata] = useState([
    {
      label: "Home",
      value: "/",
      active: true,
    },
    {
      label: "Search",
      value: "/Search",
      active: false,
    },

    {
      label: "Collaction",
      value: "/Collaction",
      active: false,
    },

    {
      label: "Tag",
      value: "/Tag",
      active: false,
    },

    {
      label: "Svelte",
      value: "svelte",
      active: false,
    },
  ]);

  function tabget(event) {
    for (let i of data) {
      if (i.value === event.currentTarget.id) {
        let m = data.slice();
        m[m.indexOf(i)].active = true;
        props.cgPage(i.label);
        setdata(m);
      } else {
        i.active = false;
      }
    }
  }

  return createPortal(
    <div
      className={
        " bg-secondary mac h-14 flex justify-between items-center  rounded-2xl px-4 shadow-inner drop-shadow-xl mb-6 bg" +
        props.className
      }
    >
      {/* burger */}
      {/* <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div> */}

      {/* logo */}
      <div className="flex justify-center">
        <a className=" normal-case text-xl">Wallpaper Manager</a>
      </div>

      {/* tabs */}
      <div className=" ">
        <div className="mac  tabs tabs-boxed mx-auto shadow-inner drop-shadow-sm ">
          {data.map((a) => {
            return (
              <button
                key={a.value}
                id={a.value}
                className={a.active ? "tab tab-active text-md" : "tab text-md "}
                onClick={tabget}
              >
                <Link to={a.value}>{a.label}</Link>
              </button>
            );
          })}
        </div>
      </div>
      {/* <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div> */}

      {/* liked */}

      <div>
        <div className="dropdown dropdown-end ">
          <label tabindex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabindex="0"
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* propfile */}
        <div className="dropdown dropdown-end z-10">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute z-10"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li className=" z-10">
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    document.getElementById("nav")
  );
}
