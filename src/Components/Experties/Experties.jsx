import React from 'react'
import './Experties.css'
import c from '../../assets/c.png'
import cpp from '../../assets/cpp.jpg'
import java from '../../assets/java.png'
import js from '../../assets/javascript.png'
import sql from '../../assets/sql.jpeg'
import scala from '../../assets/scala.png'
import python from '../../assets/python.jpg'
import science from '../../assets/science.jpg'
import sst from '../../assets/social_studies.jpeg'
import maths from '../../assets/maths.jpg'
import english from '../../assets/english.jpg'
import web_dev from '../../assets/web_development.png'
import data_analytics from '../../assets/data_analytics.png'
import data_science from '../../assets/data_science.png'
import foreign_language from '../../assets/foreign_language.png'


const Experties = ({exp_title}) => {
  return (
    <div className='experties'> 
    <h1> {exp_title} </h1>
    <div className='image-gallery'>
        <div className='image'>
            <img src={c} alt=''/>
            <p> C Programming </p>
        </div>
        <div className='image'>
            <img src={cpp} alt=''/>
            <p> C++ Programming </p>
        </div>
        <div className='image'>
            <img src={java} alt=''/>
            <p> Java Programming </p>
        </div>
        <div className='image'>
            <img src={js} alt=''/>
            <p> JavaScript Programming </p>
        </div>
        <div className='image'>
            <img src={python} alt=''/>
            <p> Python Programming </p>
        </div>
        <div className='image'>
            <img src={sql} alt=''/>
            <p> SQL Programming </p>
        </div>
        <div className='image'>
            <img src={scala} alt=''/>
            <p> Scala Programming </p>
        </div>
        <div className='image'>
            <img src={data_analytics} alt=''/>
            <p> Data Analytics </p>
        </div>
        <div className='image'>
            <img src={data_science} alt=''/>
            <p> Data Science </p>
        </div>
        <div className='image'>
            <img src={web_dev} alt=''/>
            <p> Web Development </p>
        </div>
        <div className='image'>
            <img src={science} alt=''/>
            <p> Science - All Classes </p>
        </div>
        <div className='image'>
            <img src={sst} alt=''/>
            <p> SST - All Classes </p>
        </div>
        <div className='image'>
            <img src={english} alt=''/>
            <p> English - All Classes </p>
        </div>
        <div className='image'>
            <img src={maths} alt=''/>
            <p> Maths - All Classes </p>
        </div>
        <div className='image'>
            <img src={foreign_language} alt=''/>
            <p> Any Foreign Language </p>
        </div>
    </div>
    </div>
  )
}

export default Experties

