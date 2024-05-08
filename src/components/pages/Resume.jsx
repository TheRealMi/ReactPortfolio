import classes from './resume.module.css';

export default function Resume() {
  return (
    <section className="contentSection">
      <section>
      <section className={classes.container}>
        <img src="./assets/images/ResumeScroll.png" alt="Pixelated Scroll"/>
          <a className={classes.scrollText} href="./assets/images/Mia Olmedillo resume update.pdf">
            Download my Resume!
          </a>
      </section>
      </section>
      <section className="text">
        <h4>My Proficiencies</h4>
        <br />
        <ul>
          <li>HTML/CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>Node</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
        <h4>My Skills</h4>
        <br />
        <ul>
          <li>Creative Problem Solving</li>
          <li>Data Entry</li>
          <li>Attention to Detail</li>
          <li>Teamwork</li>
          <li>Collaborative Leadership</li>
          <li>Time Management</li>
        </ul>
      </section>
    </section>
  );
}
