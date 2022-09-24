import React from 'react'
import './about.css'

const About = () => {
    return (
        <>
         <div className="banner">
                <div>INTRODUCTION</div>
                
            </div>
        <div className="intro_page">
           
            <div className="content_intro">
                <div className="intro">
                    <p>Global Health Solutions, LLC (GHS) was founded in June 2009 by Dr. Pete Savard, to combine excellence in supply chain execution with effective information technology (IT) use for a singular purpose - create a revolutionary response approach to surge events.</p>
                    <p>This collaboration of disciplines was a reflection of his vision of a systematic, and holistic response to surge problems in the healthcare world which could radically enhance the ability to impact humanity in a positive and sustainable manner. The question which drove him was <strong> – How can we dramatically decrease human suffering which occurs before, during, and after surge events?</strong></p>
                </div>
                <div className="navigation">
                    <h1>ABOUT</h1>
                    <div className="introduction" > &#62; Introduction</div>
                    <div className="mission"> &#62; Mission</div>
                    <div className="vision"> &#62; Vision</div>
                </div>
            </div>
            <div className="bottom_intro">
                <h2 className='headline_intro'>GHS APPROACH AND PHILOSOPHY</h2>
                <p>GHS approach was based on the following conclusions:</p>
                <ul>
                    <li><strong>Healthcare data is not readily transmitted between Healthcare and Vendor Systems.</strong> This includes both medical data transmission and supply chain data.
                    </li>
                    <li><strong>Clinical Data is not connected to Business Data.</strong> This includes clinical data driving business data.
                    </li>
                    <li>The “Command and Control” of situations is greatly affected by data transmission and the methodology and technology used for this transmission. Like clinical and business data, <strong>communication data is problematic in a surge event.</strong>
                    </li>
                    <li><strong>Surge Solutions are modeled in a “push, build to stock” method. </strong> This model is inefficient and leads to standardized responses to non-standard surge events. Surge events can range from atypical spikes in everyday events (such as an abrupt increase in trauma or cardiac catheterization cases) to disaster events (ranging from local or regional events such as Ike and Isabel to global events such as the 2004 tsunami or the current H1N1 event).
                    </li>
                    <li><strong>Surge events occur annually on a national and global level.</strong> While there have been improvements in response, there has not been a “significant leap” to positively impact humanity during and after these events.
                    </li>
                    <li><strong>Current technology has not been applied to medical, surge, and disaster situations effectively.</strong>
                    </li>
                </ul>
                <h2 className='headline_intro'>AREAS OF DEVELOPMENT</h2>
                <p>GHS was established to operationally function within different areas of focus and development, such as:

                </p>
                <ul>
                    <li>Healthcare data integration;
                    </li>
                    <li>Medical logistics and supply chain execution;
                    </li>
                    <li>Information technology; and,
                    </li>
                    <li>Research, design and development.
                    </li>
                </ul>
                <p>GHS positioned itself with local and global partners to develop a portfolio of Tactics, Techniques, and Procedures (TTP) to respond effectively to surge environments. Working together with partners, GHS continued to work towards real world solutions and applications that positively impacted the ability to provide healthcare to humanity on a global scale.</p>
               <p style={{color:"red"}}><strong>In January 2021</strong>, GHS, LLC partnered with One Smarter Health and became a division within One Smarter, Inc. group operations.</p>
            </div>
            </div>
        </>
    )
};

export default About;