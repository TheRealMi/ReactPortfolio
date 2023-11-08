import { useState } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return (
        <div>
          <About />
          <Footer />
        </div>
      );
    }
    if (currentPage === "Work") {
      return (
        <div>
          <Work />
          <Footer />
        </div>
      );
    }
    if (currentPage === "Resume") {
      return (
        <div>
          <Resume />
          <Footer />
        </div>
      );
    }
    return (
      <div>
        <Contact />
        <Footer />
      </div>
    );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
