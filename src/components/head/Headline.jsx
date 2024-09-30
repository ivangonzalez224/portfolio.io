import '../../assets/styles/Headline.css';
import myPic from '../../assets/images/myPic.png';
import myLinkedin from '../../assets/images/myLinkedin.png';
import myGithub from '../../assets/images/myGithub.png';
import myGmail from '../../assets/images/myGmail.png';

const Headline = () => (
  <div className="head-main" id="home">
    <div id="head-presentation">
      <div className="head-imgDiv">
        <img className="head-myPic" src={myPic} alt="My photo" />
      </div>
      <div>
        <span id="head-hello">Hello ! </span>
        <span> 👋 </span>
      </div>
      <div>
        <span>I am </span>
        <span id="head-name">Iván,</span>
      </div>  
      <span>
        a software developer crafting modern and aesthetically pleasing web and mobile applications. 🚀
      </span>
      <span>
      I thrive in teamwork environments and am focused on delivering exceptional user experiences across all platforms.
      </span>
      <div className="head-imgDiv head-imgSocial">
        <a className="socialLinks" href="https://www.linkedin.com/in/iv%C3%A1n-gonzalez/" target="_blank" rel="noreferrer">
          <img className="head-mySocial" src={myLinkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/ivangonzalez224" target="_blank" rel="noreferrer">
          <img className="head-mySocial" src={myGithub} alt="Github" />
        </a>
        <a href="mailto:ivan.gonzalezr224@gmail.com" target="_blank" rel="noreferrer">
          <img className="head-mySocial" src={myGmail} alt="Gmail" />
        </a>
      </div>
    </div>
    <div id="head-photo"></div> 
  </div>
);

export default Headline;