// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="fixed" id="bottom">
    <ul className="nav nav-tabs d-flex flex-nowrap justify-content-around">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          <img src='/assets/images/aboutMi.png' alt='about Mi'/>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#work"
          onClick={() => handlePageChange('Work')}
          // Check to see if the currentPage is `Work`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
        >
          <img src='/assets/images/Projects.png' alt='projects'/>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // This is a conditional (ternary) operator that checks to see if the current page is "resume"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          <img src="/assets/images/resume.png" alt="resume" />
        </a>
      </li>
      <li className="nav-item ">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          <img src="/assets/images/contactMi.png" alt="contact Mi" />
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
