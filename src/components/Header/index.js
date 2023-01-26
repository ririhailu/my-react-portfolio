import React, { useState } from "react";
import { Route, HashRouter, BrowserRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Portfolio from "../../components/Portfolio";
import Resume from "../../components/Resume";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      {/* <Navigation /> */}
      {/* <div className="row Header" id="header">
        <a href="https://ririhailu.github.io/my-react-portfolio/"></a> */}
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        <div class="container content">{renderPage()}</div>
        
       
      </div>

    //</div>

  );
}
