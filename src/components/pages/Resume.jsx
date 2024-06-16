import classes from './resume.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faBootstrap, faJs, faNode, faReact, faEnvira} from '@fortawesome/free-brands-svg-icons';

export default function Resume() {
  return (
     <section className="contentSection">
      <div className={classes.backboard}>
      <div className={classes.container}>
        <img src="./assets/images/ResumeScroll.png" alt="Pixelated Scroll"/>
          <a className={classes.scrollText} href="./assets/images/Mia Olmedillo resume update.pdf">
            Download my Resume!
          </a>
      </div>
      <div className="text">
        <h4>Professional Summary</h4>
        <p>I have always been drawn to tech. From founding a nationally competitive robotics club in high-school, to taking elective courses in Python and Game Development in college, to implementing systems to aid in my original career field of Animal Science, the tech field has forever remained relevant to me. In 2018 I graduated from Cornell University with a B.S. in Animal Science, and I worked in that field for about 6 years before realizing I needed a change. Now, I seek to bring my background, skills, and passions to a new career path in software engineering.</p>
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
        <img src="/assets/images/teamwork-export.png" alt="" />
        <img src="/assets/images/empathy.png" alt="" />
        <img src="/assets/images/attn2detail.png" alt="" />
        <img src="https://picsum.photos/100/100" alt="" />
        <img src="https://picsum.photos/100/100" alt="" />
        <img src="https://picsum.photos/100/100" alt="" />
      </div>
      </div>
      </div>
    </section>
  );
}
