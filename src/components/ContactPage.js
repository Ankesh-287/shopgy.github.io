import React from 'react'

const ContactPage = () => {
    return (
        <>
            <div className="c-panel1">
                <div id="c-image">
                    <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg" alt="" />
                </div>
                <div id="questions">
                    <h4> How can we help ?</h4>
                    <ol id="q-list">
                        <li className="q-list">Product-related inquiries</li>
                        <li className="q-list">Order-related support</li>
                        <li className="q-list">Payment and billing support</li>
                        <li className="q-list">Promotions and discounts</li>
                        <li className="q-list">Technical support</li>
                    </ol>
                </div>
            </div>
            <div className="c-panel2">
                <h2>Have questions ?<br />Shoot us an email</h2>
                <p className='c-para'>We are an e-commerce buisness providing online 
                e-shop services for customers to buy products online 
                and deliver at home so its makes life easy for people 
                </p>
                <p className='c-para'>Have a question for us or feedback? Please click on 
                the most appropriate category and fill out the form to reach us. 
                </p>

                <div className="msg-box">
                <select className='dropDown'>
                    <option value="">Select main option</option>
                    <option value="product">Product-related inquiries</option>
                    <option value="order">Order-related support</option>
                    <option value="payment">Payment and billing support</option>
                    <option value="promotions">Promotions and discounts</option>
                    <option value="technical">Technical support</option>
                </select><br />
                    <label htmlFor="" className='required-field'>Your Name</label> <br/>
                    <input type="text" name="" id="" /> <br/>
                    <label htmlFor="" className='required-field'>Your Email</label> <br/>
                    <input type="text" name="" id="" /> <br/>
                    <label htmlFor="" className='required-field'>Your Message</label> <br/>
                    <textarea type="text" name="" id="" /> <br/>

                    <label htmlFor="">Screenshot (optional) </label><br />
                    <label htmlFor="file-upload" className='upload'>Upload</label> <br/>
                    <input type="file" id="file-upload" name="img" accept="image/*" />
                </div>
            </div>
        </>
    )
}

export default ContactPage
