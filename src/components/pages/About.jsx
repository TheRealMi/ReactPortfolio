import classes from './about.module.css';

export default function About() {
  return (
    <div className={classes.container}>
      
      <div className={classes.frame}>
      <section className="profilePic">
        <img src="./assets/images/pixelpfp.png" alt="Pixelated Avatar" />
      </section>
      </div>
      <div className={classes.info}>
      <div className={classes.banner}>
        <h1>About Mi</h1>
      </div>
      <section className={classes.text}>
        <p>
          I'm a self-proclaimed "renaissance woman" who thrives in the world of
          tech. While I have a strong background in full-stack development, my
          true passion lies in creating exceptional user experiences. 🌐👩‍💻
        </p>

        <p>
          My journey started with founding a robotics club in high school and
          dabbling in Python and Game Development in college. A bit
          unconventional, considering I graduated with a B.S. in Animal Science
          from Cornell University and worked in the field for six years! But,
          I've realized it's time for a change. 🦊🔬
        </p>

        <p>
          I'm now on a mission to blend my diverse background, skills, and
          passion into a new career in software development. Let's connect and
          explore how we can bridge the gaps between our worlds and the tech
          field. Together, we can create something extraordinary. 💪💻
        </p>
      </section>
      </div>
    
    </div>
  );
}
