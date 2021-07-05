import React , { useState } from 'react'
import img1 from '../../assets/image/Development/WEBdevelopment.png'
import img2 from '../../assets/image/Development/MOBILE APP.png'
import img3 from '../../assets/image/Development/Websitedesign.png'
import img4 from '../../assets/image/Development/seo.png'
import icond1 from '../../assets/image/Development/icond1.png'
import icond2 from '../../assets/image/Development/icond2.png'
import icond3 from '../../assets/image/Development/icond3.png'
import icond4 from '../../assets/image/Development/icond4.png'



function Developments() {
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);

    return (
        <section className="Development">
        <div className="container">
        <div className="row">
        <div className="col-sm-9">
        <div className="row">
           <div class="col-sm-6 cards"
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}>
                <i> <img src={icond1}/></i>
                <h3>WEB APP DEVELOPMENT</h3>
                <p>Superlative <strong>Web application development</strong> projects require
                technology that perfectly fits the web design. We rely on the right tools 
                to get the job done, not a "one-size-fits-all" tech stack.</p>
            </div>
            <div class="col-sm-6 cards" 
            onMouseEnter={() => setIsShown2(true)}
            onMouseLeave={() => setIsShown2(false)}>
                <i> <img src={icond2}/></i>
                <h3>MOBILE APP DEVELOPMENT</h3>
                <p style={{textAlign: "justify"}}>We are an <strong>Mobile app development</strong> company Indore India with the cutting edge technologies developing complex solutions.Thus, providing you the most robust Web & Mobile Application for your demands.</p>
            </div>

          
            <div class="col-sm-6 cards" 
            onMouseEnter={() => setIsShown3(true)}
            onMouseLeave={() => setIsShown3(false)}>
                <i> <img src={icond3}/></i>
                <h3>WEB DESIGN SERVICES</h3>
                <p>The most impressive Websites and Mobile App that you are noticing in the web are rooted in smart Web Design (UI/UX).
                A design which embodies clear vision and are backed by the right technology.</p>
           </div>

           

            <div class="col-sm-6 cards"
            onMouseEnter={() => setIsShown4(true)}
            onMouseLeave={() => setIsShown4(false)}>
                <i> <img src={icond4}/></i>
                <h3>SEARCH ENGINE OPTIMIZATION</h3>
                <p >Search Engine Optimization helps to improve the quantity and quality of traffic to your website.
                It will also help your business to increase online presence, brand value, users, leads, and ranking on the search engine.</p>
          </div>
        </div>
        </div>

         <div className="col-sm-3">
         {isShown && (
          <div>
            <img className="imgdevelopment" src={img1}/>
          </div>
        )}

        {isShown2 && (
          <div>
            <img className="imgdevelopment" src={img2}/>
          </div>
        )}
        {isShown3 && (
          <div>
            <img className="imgdevelopment" src={img3}/>
          </div>
        )}
        {isShown4 && (
            <div>
              <img className="imgdevelopment" src={img4}/>
            </div>
          )}
   
 
         </div>   

           

        </div>


      
     
     

        </div>
        </section>
    )
}

export default Developments
