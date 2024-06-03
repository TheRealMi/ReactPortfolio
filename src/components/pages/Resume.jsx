import classes from './resume.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faBootstrap, faJs, faNode, faReact, faEnvira} from '@fortawesome/free-brands-svg-icons';

export default function Resume() {
  return (
     <section className="contentSection">
      <div className={classes.container}>
        <img src="./assets/images/ResumeScroll.png" alt="Pixelated Scroll"/>
          <a className={classes.scrollText} href="./assets/images/Mia Olmedillo resume update.pdf">
            Download my Resume!
          </a>
      </div>
      <div className="text">
        <h4>Professional Summary</h4>
        <p>Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h4>Technical Skills</h4>
        <ul>
          <FontAwesomeIcon icon={faHtml5} size="5x"/>
          <li>HTML/CSS</li>
          <FontAwesomeIcon icon={faCss3Alt} size="5x"/>
          <li>Bootstrap</li>
          <FontAwesomeIcon icon={faBootstrap} size="5x"/>
          <li>JavaScript</li>
          <FontAwesomeIcon icon={faJs} size="5x"/>
          <li>Node</li>
          <FontAwesomeIcon icon={faNode} size="5x"/>
          <li>MySQL</li>
          <FontAwesomeIcon icon={faDatabase} size="5x"/>
          <li>MongoDB</li>
          <FontAwesomeIcon icon={faEnvira} size="5x"/>
          <li>React</li>
          <FontAwesomeIcon icon={faReact} size="5x"/>
        </ul>
      </div>
      <div className={classes.skills}>
      <h4>Transferable Skills</h4>
      <div className={classes.icongrid}>
        <img src="https://picsum.photos/100/100" alt="" />
        <img src="https://picsum.photos/100/100" alt="" />
        <img src="https://picsum.photos/100/100" alt="" />
        <img src="https://picsum.photos/100/100" alt="" />
        <img src="https://picsum.photos/100/100" alt="" />
        <img src="https://picsum.photos/100/100" alt="" />
      </div>
      </div>
    </section>
  );
}
