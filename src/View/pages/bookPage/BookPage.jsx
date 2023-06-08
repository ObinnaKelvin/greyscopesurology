import React from 'react'
import Navbar from '../../components/navigation/Navbar'
import './bookPage.scss'

const bookPage = () => {
  return (

    <div className='bookPage-container'>
        <Navbar />
        <div className="bookPage-wrapper">
            <div className='bookPage-progress-status'>

            </div>
            <div className='bookPage-progress-form'>
              <form>
                  <section>
                          <input type="text" className="formInput" placeholder="Your name"/>
                          <input type="text" className="formInput" placeholder="Your email"/>
                  </section>
                  <section>
                          <textarea className="formTextArea" type="text" placeholder="Message"/>
                  </section>
                  <button className='send-button'>Send</button>
              </form>
            </div>
        </div>
    </div>
    
  )
}

export default bookPage