
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
    <h1 className='name'>Presley Potter</h1>
    <p className='bio'>
      Software Engineer at Getty Images with a passion for learning and contributing to meaningful projects. Utilizing enterprise-level languages like JavaScript, React, Python, and CSS to deliver solutions with a customer-first approach.
    </p>
    <div className='socials'>
    <ImageContainer />
    <div className='linkscontainer'>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://twitter.com/presleytieman"
      className='sociallink'
          >
            <TwitterIcon />
    
            <p className='socialdescriptions'>Follow me on Twitter</p>
            
          </a>
          <a 
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/presley-potter/"
            className='sociallink'
            >
            <LinkedInIcon/>
            <p className='socialdescriptions'>Connect with me on LinkedIn</p>
            </a> 
            <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ptieman"
            className='sociallink'
          >
            <GitHubIcon />
            <p className='socialdescriptions'>Find me on GitHub</p>
    
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            download href='/files/PresleyPotterResume.pdf'
            className='sociallink'
            >
              <ResumeIcon />
              <p className='socialdescriptions'>Download my resume</p>
            </a>
            </div>
            </div>
            <p className='bio'> When I'm not coding, I'm probably playing Dungeon's & Dragons. I also love gardening and craft projects.</p>
    </div>
    </div> 
    
    
    

    </>
   

  )
}

export default App;
