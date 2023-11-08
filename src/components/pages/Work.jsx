export default function Work() {
  return (
    <section className="contentSection">
      <section id="work" className="sectionTitle">
        <h2>Projects By Mi</h2>
      </section>
      <section className="projectCard">
        <a href="https://pawgress-263620beafdd.herokuapp.com/">
          <img
            src="./assets/images/Home-SS.png"
            alt="Homepage for Pawgress app"
          />
          </a>
          <section className="projectCaptions">
            <h3>Pawgress</h3>
            <p>HTML/CSS, JavaScript, Handlebars</p>
          </section>
      </section>
      <section className="projectCard">
        <a href="https://bizwliz.github.io/gympal-project-one/">
          <img
            src="assets/images/GymPal.png"
            alt="Homepage for Gym Pal project"
          />
          <section className="projectCaptions">
            <h3>Gym Pal</h3>
          </section>
        </a>
      </section>
      <section className="projectCard">
        <a href="https://therealmi.github.io/HoriseonRefactor/">
          <img
            src="./assets/images/Challenge1.PNG"
            alt="Big image of challenge one"
          />
          <section className="projectCaptions">
            <h3>Horiseon Refactor</h3>
          </section>
        </a>
      </section>
      <section className="projectCard">
        {/* <a href="#">  ADD LINK TO FINISHED PROJECT HERE*/}
        <img
          src="./assets/images/sea.jpg"
          alt="Smaller image of another project"
        />
        <section className="projectCaptions">
          <h3>Project 4</h3>
        </section>
        {/* </a> */}
      </section>
    </section>
  );
}
