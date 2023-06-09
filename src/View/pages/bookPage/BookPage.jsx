import React, { useState } from 'react'
import Navbar from '../../components/navigation/Navbar'
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

const BookPage = () => {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[phone, setPhone] = useState('')
  const[clinic, setClinic] = useState('')
  const[date, setDate] = useState()
  const[description, setDescription] = useState('')

  const onChangeDate = (dateSelected) => {
      // console.log(dateSelected)
      // console.log(format(dateSelected, 'dd/MM/yyyy'))
      setDate(format(dateSelected, 'MM/dd/yyyy'))
  }

  return (

    <div className='bookPage-container'>
        <Navbar />
        <div className="bookPage-wrapper">
            <div className='bookPage-progress-status'>

            </div>
            <div className='bookPage-progress-form'>
              <div className="bookPage-stage1">
                <div className='headerText'>General Info</div>
                <form>
                    <section>
                            <input type="text" className="formInput" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                            <input type="text" className="formInput" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            <input type="tel" className="formInput" placeholder="Phone" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                    </section>
                    <section>
                      <select className = 'formSelect' onChange={(e)=>setClinic(e.target.value)} value={clinic}>
                        <option>- Choose a Clinic -</option>
                        {
                          clinicData.map((data)=>(
                              <option value={data.name} key={data.id}>{data.name}</option>
                          ))
                        }
                      </select>
                    </section>
                    <section>
                      <div className="calendar">
                        <Calendar
                          onChange={onChangeDate}
                          // ranges={date}
                          date={new Date()}
                        />
                      </div>
                    </section>
                    <section>
                            <textarea className="formTextArea" type="text" placeholder="Are there some more information you would want the doctor to know about?"
                             value={description} onChange={(e)=> setDescription(e.target.value)}
                            />
                    </section>
                    <button className='next-button'>Next</button>
                </form>
              </div>
              <div className="bookPage-stage2">
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
                  <button className='nav-button'>Previous</button>
                  <button className='nav-button'>Submit</button>
                </div>
              </div>
              <div className="bookPage-stage3"></div>
            </div>
        </div>
    </div>
    
  )
}

export default BookPage