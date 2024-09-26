import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/Program-2.png'
import program_3 from '../../assets/program-3.png'
import program_1_logo from '../../assets/program_1_logo.png'
import program_2_logo from '../../assets/program_2_logo.png'
import program_3_logo from '../../assets/program_3_logo.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt=''/>
            <div className='caption'>
                <img src={program_1_logo} alt=''/>
                <p> Placement Preparation </p>
            </div>
        </div> 
        <div className='program'>
            <img src={program_2} alt=''/>
            <div className='caption'>
                <img src={program_2_logo} alt=''/>
                <p> Career Switch </p>
            </div>
        </div> 
        <div className='program'>
            <img src={program_3} alt=''/>
            <div className='caption'>
                <img src={program_3_logo} alt=''/>
                <p> Exam Ready </p>
            </div>
        </div> 

    </div>
  )
}

export default Programs