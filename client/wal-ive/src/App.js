import Home from "./Pages/Home";
import Nav from "./comp/navbar";
import { useState } from "react";
import Search from "./Pages/Search";
import Col from "./Pages/Col";
function App() {
  const [page, setpage] = useState("Home");
  let currentPage;

  if (page === "Home") {
    currentPage = <Home></Home>;
  } else if (page === "Search") {
    currentPage = <Search></Search>;
  } else if (page === "Collaction") {
    currentPage = <Col></Col>;
  }

  function cgPage(pg) {
    setpage(pg);
  }
  return (
    // bg-gradient-to-r from-[#ecf3f9] via-red-100 to-[#ecf3f9]
    <div className="p-6 h-[100%] w-[100vw] ">
      <Nav className="mb-10 " cgPage={cgPage}></Nav>
      {currentPage}
    </div>
  );
}

export default App;
