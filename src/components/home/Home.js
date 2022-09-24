import React from 'react'
import './home.css'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import first from '../images/first.jpg'
import value1 from '../images/value-icon-01.png'
import value2 from '../images/value-icon-02.png'
import value3 from '../images/value-icon-03.png'
import service1 from '../images/care-service-01.jpg'
import service2 from '../images/care-service-02.jpg'
import service3 from '../images/care-service-03.jpg'
import expertise1 from '../images/expertise-icon-01.png'
import expertise2 from '../images/expertise-icon-02.png'
import expertise3 from '../images/expertise-icon-03.png'
import expertise4 from '../images/expertise-icon-04.png'
import expertise5 from '../images/expertise-icon-05.png'
import expertise6 from '../images/expertise-icon-06.png'
import expertise7 from '../images/expertise-icon-07.png'
import Card from './Card'
import { useState } from 'react'

const Home = () => {

  const data = [
    {
      id: 1,
      image: service1,
      title: "100/65",
      description: '"100/65™️" is a revolutionary method to approach disaster and surge response in a fiscally sound manner.  It uses supply and demand analysis to define what a SKU based chronological response to a surge event should be to meet anticipated demand.'
    },
    {
      id: 2,
      image: service3,
      title: "CAM",
      description: 'Our Cross Asset Management™️ (CAM) evaluates products in a purchaser’s inventory or a group of purchaser’s inventory and evaluates how current product is maintained, how product and services could be maintained to meet performance based goals of surge response'
    },
    {
      id: 3,
      image: service2,
      title: "MSUV ",
      description:' Maximum Secondary Use Value™️ (MSUV) is a system that defines the Maximum Secondary Use Value for a particular SKU. This MSUV™️ for a particular SKU can and should be different depending on the potential secondary uses that have been identified. For example, a case of Intravenous Fluid (IVF) could have MSUV™️ values (in days) of 60, 70, 90, 105, and 150.'
    },
    {
      id: 4,
      image: service2,
      title: "HSC",
      description: 'Hospital Surge Center™️ (HSC) is a modular, “combat loaded” product that is offered in 20-foot, 40-foot, and additional models. The scope and capacity can be from a 25-bed hospital to a 250-bed hospital which allow for variable response with variable footprints.'
    },
    {
      id: 5,
      image: service1,
      title: "SC",
      description: 'The Surge Center (SC) is a hybrid platform.  It allows both types of care to be accomplished at the same physical location with throughput being scaled down. It can be deployed during smaller events or used for large scale public gathering events.'
    },
    {
      id: 6,
      image: service3,
      title: "MTC",
      description: 'Our Mass Triage and Treatment Center™️ (MTC) is a modular, “combat loaded” product that is also offered in 20-foot, 40-foot, and additional models. The MTC treat patients who need medical care; but ultimate disposition is home, not a hospital in-patient bed.'
    }
  ]

   const [active, setActive] = useState([1, 2, 3])

   const changeActive = () => {
    if(active[0] === 1) {
      setActive([4, 5, 6]);
    }
    else if (active[0] === 4) {
      setActive([1, 2, 3])
    }
   }

  return (
    <>
      <div className='top'>
        <div className="main_img">
          <img src={first} alt="" />
        </div>
      </div>
      <div className="osh_container">
        <div className="osh highlight">
          <div className="osh_box">
            <div className="symbol">
              <img src={icon1} alt="" />
            </div>
            <div className="title_osh">OSH Designs</div>
            <div className="disc_osh">One Smarter Health (OSH) recognizes that no two disaster/surge events are the same. Each type requires a configuration change to assets needed. Our designs are modular and flexible so that disaster assets are cross-purposed.</div>
          </div>
        </div>
        <div className="osh">
          <div className="osh_box">
            <div className="symbol">
              <img src={icon2} alt="" />
            </div>
            <div className="title_osh">OSH Develops</div>
            <div className="disc_osh">OSH builds Emergency Medical Health Centers; Mass Trauma Centers, and Surge Care Centers for global disaster assistance.</div>
          </div>
        </div>
        <div className="osh highlight">
          <div className="osh_box">
            <div className="symbol">
              <img src={icon3} alt="" />
            </div>
            <div className="title_osh">OSH Implements</div>
            <div className="disc_osh">OSH builds Emergency Medical Health Centers; Mass Trauma Centers, and Surge Care Centers for global disaster assistance.</div>
          </div>
        </div>
        <div className="osh">
          <div className="osh_box">
            <div className="symbol">
              <img src={icon4} alt="" />
            </div>
            <div className="title_osh">OSH Trains</div>
            <div className="disc_osh">OSH provides comprehensive training in the use of our assets and to personnel who manage them. This include ICS; BDLS, ADLS, and response setup.</div>
          </div>
        </div>
      </div>
      <div className="perposition_container">
        <div className="headline_preposition">Our Value <span>Proposition</span></div>
        <div className="detiles_preposition">
          <div className="preposition">
            <div className="value-icons">
              <img src={value1} alt="" />
            </div>
            <div className="preposition_title">Flexible Designs</div>
            <div className="preposition_desc">Using a base of 53" and 40" vehicles, our assets are built to MEMS specs. Foundational elements can adapt to any location and environment to build surge solutions.</div>
          </div>
          <div className="preposition">
            <div className="value-icons">
              <img src={value2} alt="" />
            </div>
            <div className="preposition_title">Targeted Development</div>
            <div className="preposition_desc">OSH matches asset configuration to use environments. We include centralized and standardized design capability consistent with US-DoD, FEMA, and DHS specifications.</div>
          </div>
          <div className="preposition">
            <div className="value-icons">
              <img src={value3} alt="" />
            </div>
            <div className="preposition_title">Implementation</div>
            <div className="preposition_desc">Our offerings include surge logistics systems which can provide fast asset replenishment, back-end localized distribution center management services, and in-theater and in-supply visibility services.</div>
          </div>
        </div>
      </div>
      <div className="explanation_container">
        <div className="content">
          <div className="info_explaination">One Smarter Health, Inc. helps and supports you with your community's needs of disaster care management.</div>
          <div className="heading_explaination colored" >GLOBAL HEALTH</div>
          <div className="heading_explaination">SOLUTIONS DIVISION</div>
          <div className="contact_explaination">Contact: <a className="colored" href="mailto:Pete.Savard@onesmarter.com">Pete.Savard@onesmarter.com</a></div>
          <div className="right_part"><i className="fa fa-play-circle" aria-hidden="true"></i>
            Explaination How it works?</div>
        </div>
      </div>
      <div className="services_container"> 
        <div className="services_info">
          <div className="title">Our Services</div>
          <div className="info">Disaster Health Care Services</div>
          <div className="detiles">We transform how healthcare services are offered during disaster situations and create new abilities to service people in need.</div>
        </div>

        <div className="boxes">
          <button className='left' onClick={changeActive}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
          {data.map(item => {
            if(active.includes(item.id)) {
              return <Card key={item.id} image={item.image} title={item.title} description={item.description}/>
            }
            return(<> </>)
          })}
          <button className='right' onClick={changeActive}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>
     
      </div>

      <div className="smartheatlh">
        <div className="heading_sm">One Smarter Health</div>
        <div className="subhead_sm">World-wide leader in emergency preparedness and disaster health assets & solutions</div>
        <div className="line_sm"></div>
        <p className="first_sm"><span>Natural Disasters </span>such as hurricanes, tornadoes, flooding and wind storms; public health emergencies such as food borne illnesses and the H1N1 pandemic; and multiple acts of terrorism have painfully taught us to guard against the unexpected on any scale, and to plan for the worst-case scenario to ensure all levels of government remain prepared to respond efficiently and effectively.</p>
        <p className="first_sm"><span>One Smarter Health Solutions (OSH) </span>is transforming emergency preparedness, emergency management, and capabilities analysis. We are uniquely qualified to offer our services in support of this important endeavor, and we are committed to building on our continuous commitment to disaster relief and preparedness.</p>
      </div>
      <div className="experties_container">
        <div className="heading_expert">
          <div className="line_st_expert"></div>
          <span> Our <b> Expertise</b></span>
          <div className="line_end_expert"></div>
        </div>
        <div className="first_row_expert">
          <div className="logo_expert">
            <img src={expertise1} alt="" />
            <div className="logo_disc_expert">
            </div>
            Medical logistics &
            supply chain management</div>
          <div className="logo_expert">
            <img src={expertise2} alt="" />
            <div className="logo_disc_expert">Disaster response
            </div>
            components & systems</div>
          <div className="logo_expert">
            <img src={expertise3} alt="" />
            <div className="logo_disc_expert">Battlefield & mass casualty
            </div>
            emergency medical services</div>
        </div>
        <div className="second_row_expert">
          <div className="logo1_expert">
            <img src={expertise4} alt="" />
            <div className="logo1_disc_expert">Disaster management
              program administration</div>
          </div>
          <div className="logo1_expert">
            <img src={expertise5} alt="" />
            <div className="logo1_disc_expert">All-hazard risk
              assessment</div>
          </div>
          <div className="logo1_expert">
            <img src={expertise6} alt="" />
            <div className="logo1_disc_expert">
              Health and medical emergency
              preparedness & response operations</div>
          </div>
          <div className="logo1_expert">
            <img src={expertise7} alt="" />
            <div className="logo1_disc_expert">Healthcare data
              integration & communications</div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Home