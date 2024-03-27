import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
const Cv = () => {
  return (
    <div>
        <div style={{backgroundColor:"#102A73",marginBottom: "20px", color:"white"}}>
            <div style={{textAlign:"center", paddingTop: "30px"}}>
                <h1>Gbolahan Coker</h1>
                <p style={{paddingTop:"5px", }}>Frontend Developer</p>
            </div>
            <div>
                <div id='the' style={{display: "flex", alignItems:"center", justifyContent:"center", padding: "10px"}}>
                    <div style={{display: "flex", alignItems:'center'}} >
                        <span id='th'>< FaLinkedinIn/></span>
                        <Link 
                        to="https://www.linkedin.com/in/gbolahan-coker-85ba39241/" target="_blank">
                            https://www.linkedin.com/in/gbolahan-coker-85ba39241/
                        </Link>
                    </div>
                    <div style={{display: "flex", alignItems:'center'}} >
                        <span id='th'><FaGithub/></span>
                        <Link 
                            to="https://github.com/GbollySckoky?tab=repositories" target='_blank'>
                            https://github.com/GbollySckoky?tab=repositories
                        </Link>
                    </div>
                    <div style={{display: "flex", alignItems:'center'}}>
                        <span id='th'><BiLogoGmail/></span>
                        <p>gbolahancoker99@gmail.com</p>
                    </div>
                    <div style={{display: "flex", alignItems:'center'}}>
                        <span id='th'><BsFillTelephoneFill /></span>
                        <p>+234(907 543 7117)</p>
                    </div>
                </div>
                <div style={{display: "flex", alignItems:"center", justifyContent:"space-evenly"}}>
                    
                    <div style={{display: "flex",alignItems:'center', paddingBottom:"20px"}}>
                        <span id='th'><MdOutlineLocationOn/></span>
                        <p>IKEJA, LAGOS NIGERIA </p>
                </div>
                </div>
            </div> 
        </div>
        
        {/* Profile */}
        <div style={{margin: "auto", width:"95%", marginTop:"40px"}}>
        <div>
            <h5 style={{font:'700', fontSize:"18px"}}>PROFILE</h5>
            <hr />
            <p style={{paddingTop:'10px', fontSize:"20px"}}>I am a dedicated front-end developer with a passion for crafting visually appealing, 
                user-friendly websites. My objective is to collaborate with dynamic teams, continuously 
                staying abreast of the latest design trends and technologies to deliver exceptional online 
                experiences.</p>
        </div>
        {/* Work */}
        <div style={{paddingTop: '20px'}}>
            <h5 style={{font:'700', fontSize:"18px"}}>WORK HISTORY</h5>
            <hr />
            <div style={{display:"flex", paddingTop:"10px"}}>
                <div>
                    <p style={{fontSize:"18px"}}>02/2024_Current</p>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <h4 style={{fontSize:"20px"}}>Front End Developer Intern</h4>
                    <p style={{padding:"5px 0", fontSize:"18px"}}>Intrapair - Remote</p>
                    <li>
                        Collaborated with back-end developers to improve website functionality and integrate new features.
                    </li>
                    <li>
                        Utilized Tailwind, React, and TypeScript to create visually appealing and responsive web pages
                        that met client requirements.
                    </li>
                    <li>
                        Worked closely with UX/UI designers to translate their designs into functional web applications
                    </li>
                    <li style={{lineHeight: "30px"}}>
                    I have experience implementing CRUD operations in web applications. This includes creating, reading,
                    updating, and deleting data through interactions between the frontend <span style={{marginLeft:"24px"}}> and backend systems. 
                    I'm proficient in utilizing HTTP methods such as POST, GET, PUT/PATCH, and DELETE to perform 
                    these operations efficiently and securely.
                    </span>
                    </li>
                </div>
            </div>
        </div>
        {/* Skills */}
        <div>
            <h5 style={{font:'700', fontSize:"18px"}}>SKILLS</h5>
            <hr />
        </div>
        <div style={{padding: "10px 0"}}>
            <li>
                Strong Verbal Communiccation
            </li>
            <li>
                Problem Solving
            </li>
            <li>
                UI/UX Design Principles
            </li>
            <li>
                Responsive Design
            </li>
            <li>
                JavaScript
            </li>
            <li>
                React
            </li>
            <li>
                Tailwind CSS
            </li>
        </div>
        {/* EDucation */}
        <div style={{paddingTop:"10px"}}>
            <h5 style={{font:'700', fontSize:"18px"}}>EDUCATION</h5>
            <hr />
        </div>
        <div>
            <div style={{display:"flex", paddingTop:"10px"}}>
                <div>
                <p style={{fontSize:"20px"}}>2022</p> 
                </div>
                <div style={{marginLeft:"100px"}}>
                    <h4 style={{paddingBottom:"5px", fontSize:"20px"}}>Bachelor of Science: Business Education</h4>
                    <p>Olabisi Onabanjo University - Ago-iwoye Ogun State</p>
                </div>
            </div>
            <div style={{display:"flex", padding:"15px 0"}}>
                <div>
                <p style={{fontSize:"20px"}}>2016</p> 
                </div>
                <div style={{marginLeft:"100px"}}>
                    <h4 style={{paddingBottom:"5px", fontSize:"20px"}}>High School Diploma</h4>
                    <p>Mayflower School - Ikenne Ogun State</p>
                </div>
            </div>
        </div>
        {/* Certifivation */}
        <div>
            <div>
                <h5 style={{font:'700', fontSize:"18px", paddingTop:"20px"}}>CERTIFICATION</h5>
                <hr />
            </div>
            <div style={{display:"flex", paddingTop:"10px"}}>
                <p style={{fontSize:"20px"}}>2023</p>
                <p style={{marginLeft: "84px", fontSize:"18px"}}>Full-Stack WebDevelopment BootCamp, Gomycode Yaba Lagos.</p>
            </div>
        </div>
        {/* Projects */}
        <div>
            <div style={{paddingTop:"30px"}}>
                <h5 style={{font:'700', fontSize:"18px"}}>PROJECTS</h5>
                <hr />
            </div>
            <div style={{display: "flex", paddingTop: "15px"}}>
                <div>
                    <p style={{fontSize:"20px"}}>2023</p>
                </div>
                <div style={{marginLeft: "100px"}}>
                    <h5 style={{paddingBottom: "8px", fontSize:"18px"}}>MOVIE DISCOVERY APP</h5>
                    <p style={{fontSize:"18px", paddingBottom:"5px"}}>React, Tailwind CSS, Redux, useEffect, useState, CRUD</p>
                    <li style={{lineHeight: "25px"}}>In the development of a dynamic movie website leveraging the TMDb API,
                        I crafted a feature-rich Movie Discovery web application. Users can seamlessly search for movies,  <span style={{paddingLeft:"24px", lineHeight:"30px"}}> explore detailed information, and curate  a list of , their favorite films. Key highlights of the project include:</span>
                    </li>
                    <li>State Management: Employed Redux and the useState hook to effectively manage the state 
                        of the application, ensuring a streamlined and predictable flow of data.
                    </li>
                    <li>
                    Database Interaction: Utilized the useEffect hook to facilitate the retrieval and reading (GET) of movie data from the TMDb API, ensuring up-to-date and
                    dynamic content.
                    </li>
                    <li>Search Functionality: Integrated a robust search feature that empowers users to find movies based on their 
                    titles, enhancing the overall discoverability of content.
                    </li>
                </div>
            </div>
            <div style={{display: "flex", padding: "35px 0"}}>
                <div>
                    <p style={{fontSize:"20px"}}>2023</p>
                </div>
                <div style={{marginLeft: "100px"}}>
                    <h5 style={{paddingBottom: "8px", fontSize:"18px"}}>BLOGS WEBSITE</h5>
                    <p style={{paddingBottom: "8px", fontSize:"18px"}}>React, CRUD operations, JSON server, useState, UseEffect, Redux</p>
                    <li style={{lineHeight: "25px"}}>I developed a dynamic Blog website, integrating React, CRUD operations,
                     a JSON server, and state management tools such as useState, useEffect, and Redux. Here's an overview <span style={{marginLeft: "27px", lineHeight:"33px"}}>of the key features:</span> 
                    </li>
                    <li>CRUD Operations: Implemented comprehensive Create, Read, and Delete (CRUD) functionalities to empower 
                        users in managing blog content seamlessly.
                    </li>
                    <li style={{lineHeight: "25px"}}>
                        This Blog website combines the power of React components, CRUD operations, a JSON server for data storage, 
                        and effective use of state management tools. Users can create, <span style={{marginLeft: '28px',lineHeight:"33px"}}> read, and delete blog entries in a 
                        user-friendly environment, making the platform versatile and accessible for content management.</span> 
                    </li>
                </div>
            </div>
           
        </div>
        </div>
    </div>
  )
}

export default Cv