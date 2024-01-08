import './home.css';

export default function Home() {
    return (
        <div>
            <img className="menuTitle" src="/assets/images/codedByMi.png" alt="coded by Mi" />
            <button className='menuButtons'><img src="/assets/images/aboutMi.png" alt="about Mi" /></button>
            <button className='menuButtons'><img src="/assets/images/Projects.png" alt="Projects" /></button>
            <button className='menuButtons'><img src="/assets/images/resume.png" alt="resume" /></button>
            <button className='menuButtons'><img src="/assets/images/contactMi.png" alt="contact Mi" /></button>
        </div>
    );
}