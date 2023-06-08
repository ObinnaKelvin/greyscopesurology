import React, { useState } from 'react'
import Navbar from '../../components/navigation/Navbar'
import './bookPage.scss'
import { clinicData } from './clinicData.jsx'

const BookPage = () => {

  const[clinic, setClinic] = useState()
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
                            <input type="text" className="formInput" placeholder="Name"/>
                            <input type="text" className="formInput" placeholder="Email"/>
                            <input type="tel" className="formInput" placeholder="Phone"/>
                    </section>
                    <section>
                            <textarea className="formTextArea" type="text" placeholder="Are there some more information you would want the doctor to know about?"/>
                    </section>
                    <section>
                      <select className = 'formSelect' onChange={(e)=>setClinic(e.target.value)} value={clinic}>
                        <option>**Select a Clinic**</option>
                        {
                          clinicData.map((data)=>(
                              <option value={data.name} key={data.id}>{data.name}</option>
                          ))
                        }
                      </select>
                    </section>
                    <button className='next-button'>Next</button>
                </form>
              </div>
              <div className="bookPage-stage2"></div>
              <div className="bookPage-stage3"></div>
            </div>
        </div>
    </div>
    
  )
}

export default BookPage