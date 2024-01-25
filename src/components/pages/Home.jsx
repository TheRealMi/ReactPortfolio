import './home.css';

export default function Home() {
    return (
        <div className='main-menu'>
            <img className="menuTitle" src="/assets/images/codedByMi.png" alt="coded by Mi" />
            <div className="menuContainer">
            <button className='menuButtons'>
                <img className="menuArrow" src="/assets/images/menuArrow.png" alt="menu arrow" />
                <img src="/assets/images/aboutMi.png" alt="about Mi" /></button>
            <button className='menuButtons'>
                <img className="menuArrow" src="/assets/images/menuArrow.png" alt="menu arrow" />
                <img src="/assets/images/Projects.png" alt="Projects" /></button>
            <button className='menuButtons'>
                <img className="menuArrow" src="/assets/images/menuArrow.png" alt="menu arrow" />
                <img src="/assets/images/resume.png" alt="resume" /></button>
            <button className='menuButtons'>
                <img className="menuArrow" src="/assets/images/menuArrow.png" alt="menu arrow" />
                <img src="/assets/images/contactMi.png" alt="contact Mi" /></button>
            </div>
        </div>
    );
}