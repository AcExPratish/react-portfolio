import React from 'react'
import './contact.scss'
import Button from "../../reusables/Button";
import { AiOutlineRight } from 'react-icons/ai'

const Contact = () => {
    return (
        <div id='contact'>
            <img src="./assets/triangle.png" alt="traingle" className='triangle-image' />
            <div className="grid-container">
                <div className="grid-title uppercase title-font">
                    Contact
                    <hr />
                </div>
                <div className="grid-content">
                    <span className='form-message'>Have any project ideas or want to work together?</span>
                    <form action="#">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <textarea rows="4" cols="50" placeholder='Your Message'>
                        </textarea>
                        <Button title='Send Message' icon={<AiOutlineRight className='icon' />} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact