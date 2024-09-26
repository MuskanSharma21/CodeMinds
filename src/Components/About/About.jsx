import React from 'react'
import './About.css'
import about_img from '../../assets/about-img.jpg'
import play_icon from '../../assets/play-icon.png'
import about_img2 from '../../assets/about-img2.jpg'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about-img'/>
            <img src={about_img2} alt='' className='about-img2'/>
            <img src={play_icon} alt='' className='play-icon' onClick={()=> {setPlayState(true)}}/>
        </div>

        <div className='about-right'>
            <h3> About Us </h3>
            <h2> Welcome to CodeMinds! </h2>
            <p> At CodeMinds, we are dedicated to helping students and professionals achieve their academic and career goals through high-quality education and training. With a team of expert educators and industry professionals, we provide comprehensive courses designed to help you succeed in competitive exams, coding, and career transitions.</p> 

            <h2> Why Choose Us? </h2>
            <p> 
              <h3> Expert Faculty: </h3>
              ur instructors are highly qualified with years of experience in their respective fields.

          <h3> Customized Learning: </h3>
          We offer flexible learning options tailored to your needs, whether you're preparing for exams or transitioning to a new career.
          </p>

          <p>
            <h3> Practical Experience: </h3>
            Our courses are designed with real-world applications in mind, ensuring you are job-ready and equipped with the skills employers are looking for.
          </p>

          <p>
            <h3> Aptitude and Career Readiness for College Students: </h3>
            We prepare college students for campus placements with a complete package of aptitude training, coding courses, and mock interview sessions to ensure they are job-ready.
          </p>

          <p>
            <h3> Comprehensive Support: </h3>
            We guide you through every step of your learning journey, providing mentoring, resources, and career counseling to help you succeed.
          </p>

        </div>

    </div>
  )
}

export default About