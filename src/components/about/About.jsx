import '../../assets/styles/about.css';


const About = () => (
  <div className="about-main" id="about">
    <span id="about-title">ABOUT</span>
    <span id="about-subtitle">Get to know more about me</span>
    <div className="about-content">
      <div id="about-presentation">
        <span>
          Hello
        </span>
        <p>
          My name is Iván Gonzalez, and I am a pasionate Full Stack Developer who uses technology 
          to build engaging mobile and web applications that empower businesses. Whether you&apos;re launching 
          a new brand, streamlining operations, or reaching new audiences, 
          I&apos;m passionate about crafting solutions that make a real difference.
        </p>
        <p>
          Let&apos;s collaborate on your next project! Drop me a line on my contact section, or 
          let&apos;s have a coffee chat to discuss your ideas.
        </p>
      </div>
      <div id="about-skills">
        <span>Skills</span>  
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TailwindCSS</li>
        </ul> 
        <ul>
          <li>React Native</li>
          <li>React.js</li>
          <li>TypeScript</li>
          <li>Bootstrap</li>
        </ul>
        <ul>
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
        </ul>
        <ul>
          <li>Git</li>
          <li>Vite.js</li>
          <li>Jest</li>
        </ul> 
      </div>
    </div>  
  </div>
);

export default About;