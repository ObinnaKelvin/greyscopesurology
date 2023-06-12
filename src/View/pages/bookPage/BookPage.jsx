import React, { useState, useRef } from 'react'
import Navbar from '../../components/navigation/Navbar'
import emailjs from "@emailjs/browser";
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'//transform the dates to readable formats
import './bookPage.scss'
import { clinicData } from './clinicData.jsx'
import userImg from '../../assets/images/user.png'
import emailImg from '../../assets/images/email.png'
import callImg from '../../assets/images/iphone.png'
import clinicImg from '../../assets/images/clinic.png'
import dateImg from '../../assets/images/calendar.png'
import infoImg from '../../assets/images/sketching.png'
import successImg from '../../assets/images/success.jpg'
import { Link } from 'react-router-dom';

const BookPage = () => {
  const formRef = useRef()
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[phone, setPhone] = useState('')
  const[clinic, setClinic] = useState('')
  const[date, setDate] = useState()
  const[description, setDescription] = useState('')
  const[activeStep, setActiveStep] = useState(1)
  const[openDate, setOpenDate] = useState(false)
  const[buttonChange, setButtonChange] = useState("Submit")

  const onChangeDate = (dateSelected) => {
      // console.log(dateSelected)
      // console.log(format(dateSelected, 'dd/MM/yyyy'))
      setDate(format(dateSelected, 'eeee do LLLL yyyy'))
  }

  const clearFields = (name,email,phone,clinic,date) => {
    setName('');
    setEmail('');
    setPhone('');
    setClinic('');
    setDate('');
    setDescription('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && email && phone && clinic && date) {
      setButtonChange("Sending...");
      emailjs
        .sendForm(
          'service_kmxu2ia', 
          'template_yqa4rgc', 
          formRef.current, 
          'iSH_B0Jhf97BjMuAD')
        .then((result) => {
          setButtonChange("Submit");
          setActiveStep(3);
          clearFields() //Clears all fields
              console.log(result.text);

        }, (error) => {
              console.log(error.text);
        });	

    }
    else {
      alert (`Please make sure that "name", "email", "phone", "clinic", and "date" fields are filled`)
    }
  }

  return (

    <div className='bookPage-container'>
        <Navbar />
        
        <div className="bookPage-banner">
            <div className='bookPage-darkOverlay'></div>
            <div className="bookPage-header">
                    <p>Book Appointment</p>
            </div>
        </div>
        <div className="bookPage-wrapper">
            <div className='bookPage-progress-status'>

            </div>
            <div className='bookPage-progress-form'>
              <div className={`bookPage-stage1 ${activeStep === 1 ? "active" : "inactive" }`}>
                <div className='headerText'>General Info</div>
                <form ref={formRef}>
                    <section>
                            <input type="text" className="formInput" name="user_name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                            <input type="text" className="formInput" name="user_email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            <input type="tel" className="formInput"name="user_phone" placeholder="Phone" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                    </section>
                    <section>
                      <select className = 'formSelect' name="user_appointment_clinic" onChange={(e)=>setClinic(e.target.value)} value={clinic}>
                        <option>- Choose a Clinic -</option>
                        {
                          clinicData.map((data)=>(
                              <option value={data.name} key={data.id}>{data.name}</option>
                          ))
                        }
                      </select>
                    </section>
                    <section>
                      <input type="text" className="formInput" name="user_appointment_date" placeholder="Select Appointment Date" value={date} onChange={(e)=> setDate(e.target.value)} onClick={()=>setOpenDate(!openDate)} />
                      <div className={`calendar ${openDate ? 'active' : 'inactive'}`} onClick={()=>setOpenDate(false)}>
                        <Calendar
                          onChange={onChangeDate}
                          // ranges={date}
                          date={new Date()}
                        />
                      </div>
                    </section>
                    <section>
                            <textarea className="formTextArea" type="text"name="user_additional_info" placeholder="Are there some more information you would want the doctor to know about?"
                             value={description} onChange={(e)=> setDescription(e.target.value)}
                            />
                    </section>
                    <div className='next-button' onClick={(e)=>setActiveStep(2)}>Next</div>
                    {/* <button className='next-button' onClick={(e)=>setActiveStep(2)}>Next</button> */}
                </form>
              </div>
              <div className={`bookPage-stage2 ${activeStep === 2 ? "active" : "inactive" }`}>
                <div className='headerText'>Summary</div>
                <div className="name">
                  <img src={userImg} alt='user png'/>
                  <p>{name}</p>
                </div>
                <div className="email">
                  <img src={emailImg} alt='email png'/>
                  <p>{email}</p>
                </div>
                <div className="phone">
                  <img src={callImg} alt='call png'/>
                  <p>{phone}</p>
                </div>
                <div className="clinic">
                  <img src={clinicImg} alt='clinic png'/>
                  <p>{clinic}</p>
                </div>
                <div className="date">
                  <img src={dateImg} alt='date png'/>
                  <p>{date}</p>
                </div>
                <div className="info">
                  <img src={infoImg} alt='info png'/>
                  <p>{description}</p>
                </div>
                <div className="nav-buttons">
                  {/* <button className='nav-button' onClick={(e)=>setActiveStep(1)}>Previous</button>
                  <button className='nav-button' onClick={(e)=>setActiveStep(3)}>Submit</button> */}
                  <div className='nav-button' onClick={(e)=>setActiveStep(1)}>Previous</div>
                  <div className='nav-button' onClick={handleSubmit}>{buttonChange}</div>
                </div>
              </div>
              <div className={`bookPage-stage3 ${activeStep === 3 ? "active" : "inactive" }`}>
                <div className="imgHolder">
                  <img src={successImg} alt='success cover'/>
                </div>
                <div className='headerText'>Reservation completed successfully</div>
                <div className='bodyText'>
                  Your reservation has been booked successfully.
                  We will process payment after the service is rendered.
                </div>
                <div className='subText'>
                  An email confirmation will be sent to you shortly.
                </div>
                {/* <div className='subText'>
                  Your order number: URO-1356.
                </div> */}
                <div className="nav-buttons">
                  {/* <button className='nav-button'>Book Again</button>
                  <button className='nav-button'>Finish</button> */}
                  <div className='nav-button' onClick={(e)=>setActiveStep(1)}>Book Again</div>
                  <Link to='/'><div className='nav-button'>Finish</div></Link>
                </div>
              </div>
            </div>
        </div>
    </div>
    
  )
}

export default BookPage