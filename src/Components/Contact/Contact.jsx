import React from 'react'
import './Contact.css'
import mail from '../../assets/mail_icon.png'
import call from '../../assets/1.png'
import email from '../../assets/2.png'
import whatsapp from '../../assets/3.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2e2d9b90-6f83-4797-87e4-e4a3a7867e93");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3> Send Us a Message 
                <img src={mail} alt=''></img>
            </h3>
            <p> We’d love to hear from you! Whether you have a question about our courses, pricing, or anything else, our team is ready to answer all your queries.               
            </p>
            <ul>
            <li> 
                <img src={call} alt=''></img>
                    +91 9060597173 
                </li>
                <li> 
                    <img src={email} alt=''></img>
                    contact@codeminds.in 
                </li>
                <li> 
                <img src={whatsapp} alt=''></img>
                    +91 9060597173 
                </li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label> Your Name </label>
                <input type='text' name='name' placeholder='Enter Your Name' required></input>
                <label> Phone Number </label>
                <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required></input>
                <label> Write Your message Here </label>
                <textarea name='message' rows='6' placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'> Submit Now
                    <img src={white_arrow}></img>
                </button>
            </form>
            <span>  {result} </span>
        </div>
    </div>
  )
}

export default Contact