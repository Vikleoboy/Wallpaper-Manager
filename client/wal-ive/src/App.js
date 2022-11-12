import Home from "./Pages/Home";
import Nav from "./comp/navbar";
import { useState } from "react";
import Search from "./Pages/Search";
import Col from "./Pages/Col";
import { Routes, Route } from "react-router-dom";
import { Tag } from "./Pages/Tag";

function App() {
  const [page, setpage] = useState("Home");
  let currentPage;

  // if (page === "Home") {
  //   currentPage = <Home></Home>;
  // } else if (page === "Search") {
  //   currentPage = <Search></Search>;
  // } else if (page === "Collaction") {
  //   currentPage = <Col></Col>;
  // }

  function cgPage(pg) {
    setpage(pg);
  }
  return (
    // bg-gradient-to-r from-[#ecf3f9] via-red-100 to-[#ecf3f9]
    <div className="p-6 h-[100%] w-[100vw] ">
      <Nav className="mb-10 " cgPage={cgPage}></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Collaction" element={<Col />} />
        <Route path="/Tag" element={<Tag />} />
      </Routes>
    </div>
  );
}

export default App;
