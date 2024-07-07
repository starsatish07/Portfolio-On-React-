import profile_img from '../../assets/profile_img.svg'
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I'm Satish Gupta </span>,frontend developer </h1>
      <p>
        A skilled front-end developer is a professional who specializes in
        creating user interfaces and<br></br> experiences on the web. They are proficient
        in technologies such as HTML, CSS, and JavaScript,<br></br> along with various
        frameworks and libraries like React,
      </p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  );
}

export default Hero;