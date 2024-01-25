import { useState } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return (
        <div>
          <Home />
          <About />
          <Footer />
        </div>
      );
    }
    if (currentPage === "Work") {
      return (
        <div>
          <Home />
          <Work />
          <Footer />
        </div>
      );
    }
    if (currentPage === "Resume") {
      return (
        <div>
          <Home />
          <Resume />
          <Footer />
        </div>
      );
    }
    if(currentPage === "Contact"){
    return (
      <div>
        <Home />
        <Contact />
        <Footer />
      </div>
    );
    }
    return (
      <div>
        <Home />
      </div>
    )
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
