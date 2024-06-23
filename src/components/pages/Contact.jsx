import classes from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className={classes.container}>
      
      <div className={classes.info}>
      <div className={classes.banner}>
        <h1>Contact Mi</h1>
      </div>
      <section className={classes.text}>
        <p>
          Have a cool coding project idea? Want to discuss the latest patch notes for Fortnite? Testing out new cosplay crafting techniques?
        </p>

        <p>
          I'd love to get in touch! Reach out via any of the platforms below, and I'll get back to you in a jiffy!
        </p>
        <div className={classes.socials}>
        <a href="https://www.linkedin.com/in/mia-ol"><FontAwesomeIcon className={classes.icon} icon={faLinkedin} size="5x"/></a>
        <a href="https://github.com/TheRealMi"><FontAwesomeIcon className={classes.icon} icon={faGithub} size="5x"/></a>
        <a href="https://discord.gg/HjM2j7epZn"><FontAwesomeIcon className={classes.icon} icon={faDiscord} size="5x"/></a>
        </div>

      </section>
      </div>
    
    </div>
  );
}
