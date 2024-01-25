import './home.css';

function Home({ handlePageChange }) {
    return (
        <div className='main-menu'>
            <img className="menuTitle" src="/assets/images/codedByMi.png" alt="coded by Mi" />
            <div className="menuContainer">
            <a
                href="#bottom"
                onClick={() => handlePageChange('About')}
            >
                <button className='menuButtons'>
                    <img className="menuArrow" src="/assets/images/menuArrow.png" alt="menu arrow" />
                    <img src="/assets/images/aboutMi.png" alt="about Mi" />
                </button>
            </a>
            <a
                href="#bottom"
                onClick={() => handlePageChange('Work')}
            >
                <button className='menuButtons'>
                    <img className="menuArrow" src="/assets/images/menuArrow.png" alt="menu arrow" />
                    <img src="/assets/images/Projects.png" alt="Projects" />
                </button>
            </a>
            <a
                href="#bottom"
                onClick={() => handlePageChange('Resume')}
            >
                <button className='menuButtons'>
                    <img className="menuArrow" src="/assets/images/menuArrow.png" alt="menu arrow" />
                    <img src="/assets/images/resume.png" alt="resume" />
                </button>
            </a>
            <a
                href="#bottom"
                onClick={() => handlePageChange('Contact')}
            >
                <button className='menuButtons'>
                    <img className="menuArrow" src="/assets/images/menuArrow.png" alt="menu arrow" />
                    <img src="/assets/images/contactMi.png" alt="contact Mi" />
                </button>
            </a>
            </div>
        </div>
    );
}

export default Home;