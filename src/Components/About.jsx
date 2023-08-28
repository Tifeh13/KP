import './About.css'; //about me css
import shoeboy from '../assets/kp-shoe.png';

function About() {
 

    return (
      <div>
        <div className="about-1">
            <div className="about-2">
                <div className="about-3">
                    <div className="about-container">
                        {/* About Me */}
                        <div className="about-first">
                            <h1>About Me</h1>
                            <p>I enjoy creating memories, shooting videos and editing to tell 
                                stories and also as montage. I like enjoy creating, collaborating
                                ad working on production.
                                If I am not shooting or making videos, i enjoy listening to music
                                watching movies, touring, travelling and sometimes talking to
                                people.
                                This is briefly about me.
                            </p>
                        </div>
                        {/* About me Image */}
                        <div className="about-second">
                            <img src={shoeboy} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default About;