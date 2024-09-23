// import React from 'react';



// import MailTo from "./MailTo";


export default function Info(){
    return(
        <><div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2e0VYbI3S58Gs_KhSqQ52jShlH4bua23nw&s" alt="person img" 
        />
</div>
        
        <section className="section-info">
            <h2 className="name">Mohit Sahani</h2>
            <p className="stack">Web Dev Intern</p>

            <div className="contact">
                
                <a href="mailto:sahanimohit5ed@gamil.com" className="email">Email</a>

                <a href="https://linkedin.com/mohit-sahani78" target="_" className="linkedin"> 
                
                
                <span>Linkedin</span>
                </a>
              
            </div>
        </section>
        </>
    )
}