import React from 'react'
import './any-questions.scss'
import quesImg from '../../assets/questions-img.svg'

const AnyQuestions = () => {
  return (
    <div className='any-questions section__margin'>
      <div className="any-questions__left">
        <h2>Have a question for us?</h2>
        <img src={quesImg} alt="Any Questions!" />
      </div>
      <div className='ny-questions__right'>
      <form action="">
        <div className="form-control">
          <label htmlFor="subject">Your E-Mail</label>
          <input type="text" name="subject" placeholder='abcd.email.com'/>
        </div>
        <div className="form-control">
          <label htmlFor="subject">Your Message</label>
          <textarea name="message" cols="30" rows="7"></textarea>
        </div>
        <div className="form-control">
          <button type="submit">Send your massage</button>
        </div>
      </form>
    </div> 
    </div>
    
  )
}

export default AnyQuestions