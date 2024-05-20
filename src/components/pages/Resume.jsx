import classes from './resume.module.css';

export default function Resume() {
  return (
     <section className="contentSection">
      <div className={classes.container}>
        <img src="./assets/images/ResumeScroll.png" alt="Pixelated Scroll"/>
          <a className={classes.scrollText} href="./assets/images/Mia Olmedillo resume update.pdf">
            Download my Resume!
          </a>
      </div>
      <div className={classes.container}>
      <h4>Transferable Skills</h4>
      <div className={classes.icons}>
        
      </div>
      </div>
      <div className="text">
        <h4>Professional Summary</h4>
        <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h4>Technical Skills</h4>
        <ul>
          <li>HTML/CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>Node</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
        
      </div>
    </section>
  );
}
