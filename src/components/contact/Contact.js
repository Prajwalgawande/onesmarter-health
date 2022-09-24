import React from 'react'
import './contact.css'


const Contact = () => {

    const sendMail = (e) => {
        const fName = document.querySelector('input[name="first-name"]').value;
        const lName = document.querySelector('input[name="last-name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const massage = document.querySelector('textarea[name="massage"]').value;
        // console.log(fName, lName, email, phone, massage)
        const mailBody = `Name : ${fName} ${lName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${massage}`
        window.location.replace(`mailto:prajwalgawande998@gmail.com?body=${mailBody}`);
    }
    

    return (
        <> <div className="banner">
            <div>CONTACT US</div>
        </div>
            <div className="contact_us">
                <div className="contact_infromation">
                    <h2>OFFICE ADDRESS</h2>
                    <div className="office">
                        <h3>GLOBAL OFFICE</h3>
                        <div className="under_line"></div>
                        <p>Beavercreek, Ohio, USA</p>
                        <p><strong>Phone: </strong>+1 937 545 0742</p>
                        <p><strong>Email: </strong><a href="mailto:pete.savard@onesmarter.com">pete.savard@onesmarter.com</a></p>
                    </div>
                    <div className="regions">
                        <h3>APAC REGION</h3>
                        <div className="under_line"></div>
                        <p>Contact RK Srivastava</p>
                        <p><strong>Phone: </strong>+91 981 889 9777</p>
                        <p><strong>Email: </strong><a href="mailto:rks@onesmarter.com">rks@onesmarter.com</a></p>
                    </div>
                    <div className="call_us">
                        <h4>CALL US</h4>
                        <div className="under_line"></div>
                        <p style={{ color: "red", fontSize: "1.3rem" }}><strong>+1 937 344 6241</strong></p>
                    </div>
                    <div className="email_us">
                        <h4>EMAIL US</h4>
                        <p style={{ color: "red", fontSize: "1.3rem" }} ><strong><a href="mailto:INFO@ONESMARTER.COM">INFO@ONESMARTER.COM</a></strong></p>
                    </div>
                    <div className="whatsapp">
                        <h4>Whatsapp</h4>
                        <p style={{ color: "red", fontSize: "1.3rem" }}><strong>+1 937 344 6241</strong></p>
                    </div>
                </div>
                <div className="send_massage">
                    <h2>SEND MESSAGE</h2>
                    <p>Send us a message using the form and we'll respond as soon as we can.
                        Fields marked with * are mandatory</p>
                        <form className='contact-form'>
                    <div className="name">
                        <input type="text" name="first-name" id="first-name" placeholder='First Name *'required/>
                        <input type="text" name="last-name" id="last-name" placeholder='Last Name *'required/>
                    </div>
                    <div className="con_detiles">
                        <input type="email" name="email" id="email"placeholder='Email *' required/>
                        <input type="number" name="phone" id="phone" placeholder='Phone *'required/>
                    </div>
                    <div className="disc_detiles" required>
                        <textarea name="massage" id="massage" cols="70" rows="15" placeholder='Massage *'></textarea>
                    </div>
                    <div className='submit_button'><a type='submit' onClick={sendMail}>Send Message</a> </div> 
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact