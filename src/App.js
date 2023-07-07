
import './App.css';
import Nav from './navbar/navbar';
import ImageContainer from './imageContainer';
import {
  TwitterIcon,
  LinkedInIcon,
  ResumeIcon,
  GitHubIcon
} from './icons'

function App() {
  return (
    <>
   
    <div className='container'>
    <Nav />
    <div className='info'>
    <h1>Presley Potter</h1>
    <p className='bio'>
      Software Engineer at Getty Images with a passion for learning and contributing to meaningful projects. Utilizing enterprise-level languages like JavaScript, React, Python, and CSS to deliver solutions with a customer-first approach.
    </p>
    <ImageContainer />
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://twitter.com/presleytieman"
          >
            <TwitterIcon />
            {`Follow me on Twitter`}
          </a>
          <a 
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/presley-potter/"
            >
            <LinkedInIcon />
            {'Connect with me on LinkedIn'}
            </a> 
            <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ptieman"
          >
            <GitHubIcon />
            {`Find me on GitHub`}
    
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            download href='/files/PresleyPotterResume.pdf'
            >
              <ResumeIcon />
              {'Download my resume'}
            </a>
            <p>
      When I'm not coding, I'm probably playing Dungeon's & Dragons. I also love gardening and craft projects.
    </p>


    </div>
    </div> 
    
    
    

    </>
   

  )
}

export default App;
