import classes from './work.module.css';

export default function Work() {
  return (
    <section className="contentSection">
      <section className={classes.projectCard}>
        <a href="https://pawgress-263620beafdd.herokuapp.com/">
          <img
            src="./assets/images/Home-SS.png"
            alt="Homepage for Pawgress app"
          />
        </a>
        <section className={classes.projectCaptions}>
          <h3>Pawgress</h3>
          <a className={classes.gitLinks} href="https://github.com/TheRealMi/Pawgress">
            <p>Github repo</p>
          </a>
        </section>
      </section>
      <section className={classes.projectCard}>
        <a href="https://bizwliz.github.io/gympal-project-one/">
          <img
            src="assets/images/GymPal.png"
            alt="Homepage for Gym Pal project"
          />
        </a>
        <section className={classes.projectCaptions}>
          <h3>Gym Pal</h3>
          <a className={classes.gitLinks} href="https://github.com/bizwliz/gympal-project-one">
            <p>Github repo</p>
          </a>
        </section>
      </section>
      <section className={classes.projectCard}>
        <a href="https://therealmi.github.io/HoriseonRefactor/">
          <img
            src="./assets/images/Challenge1.PNG"
            alt="Big image of challenge one"
          />
        </a>
        <section className={classes.projectCaptions}>
          <h3>Horiseon Refactor</h3>
          <a className={classes.gitLinks} href="https://github.com/TheRealMi/HoriseonRefactor">
            <p>Github repo</p>
          </a>
        </section>
      </section>
      <section className={classes.projectCard}>
        <a href="https://sneaker-swap.vercel.app/">
        <img
          src="./assets/images/SneakerSwap.PNG"
          alt="SneakerSwap Homepage"
        />
        </a>
        <section className={classes.projectCaptions}>
          <h3>Sneaker Swap</h3>
          <a className={classes.gitLinks} href="https://github.com/rich-taveras/Sneaker-Swap">
            <p>Github repo</p>
          </a>
        </section>
      </section>
    </section>
  );
}
