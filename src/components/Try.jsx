import React , { useState }from 'react'
import img1 from '../assets/img/service-img/shape1.png'
import img2 from '../assets/img/service-img/shape4.png'
import img3 from '../assets/img/service-img/shape3.png'
import img4 from '../assets/img/service-img/shape2.png'


function Try() {
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);


      
    return (
        <div className="container">
        <div className="row">
        <div className="col-sm-8">
        <div className="row">
           <div class="col-sm-6" onMouseEnter={() => setIsShown(true)}
           onMouseLeave={() => setIsShown(false)}>
            <h3>WEB APP DEVELOPMENT</h3>
            <p>Superlative <strong>Web application development</strong> projects require
            technology that perfectly fits the web design. We rely on the right tools 
            to get the job done, not a "one-size-fits-all" tech stack.</p>
            </div>
            
            <div class="col-sm-6" onMouseEnter={() => setIsShown3(true)}
            onMouseLeave={() => setIsShown3(false)}>
            <h3>WEB DESIGN SERVICES</h3>
            <p>The most impressive Websites and Mobile App that you are noticing in the web are rooted in smart Web Design (UI/UX).
             A design which embodies clear vision and are backed by the right technology.</p>
           </div>

           <div class="col-sm-6" onMouseEnter={() => setIsShown2(true)}
           onMouseLeave={() => setIsShown2(false)}>
           <h3>MOBILE APP DEVELOPMENT</h3>
           <p style={{textAlign: "justify"}}>We are an <strong>Mobile app development</strong> company Indore India with the cutting edge technologies developing complex solutions.Thus, providing you the most robust Web & Mobile Application for your demands.</p>
           <ul style={{color: "#fff" ,textAlign:"left"}}>
           <li><i/>Android App Development company in Indore</li>
           <li><i/>IOS App Development company in Indore</li>
           </ul>

           </div>
            <div class="col-sm-6" onMouseEnter={() => setIsShown4(true)}
            onMouseLeave={() => setIsShown4(false)}>
            <h3>SEARCH ENGINE OPTIMIZATION</h3>
            <p style={{textAlign: "justify"}}>Search Engine Optimization helps to improve the quantity and quality of traffic to your website. It will also help your business to increase online presence, brand value, users, leads, and ranking on the search engine.</p>
        </div>
        </div>
        </div>

         <div className="col-sm-4">
         {isShown && (
          <div>
            <img src={img1}/>
          </div>
        )}

        {isShown2 && (
          <div>
            <img src={img2}/>
          </div>
        )}
        {isShown3 && (
          <div>
            <img src={img1}/>
          </div>
        )}
        {isShown4 && (
          <div>
            <img src={img4}/>
          </div>
        )}
         </div>   

           

        </div>


      
     
     

        </div>
    )
}

export default Try




// import React from 'react'

// function Try() {
//     return (
//         <div>
//         <section id="Services" class="Services">
//         <div class="container">
//           <h2 class="my_h2_30_b text-center">            
//          The Focal Areas of Our Technical Services
//           </h2>
//           <p style={{textalign:" center",marginbottom:"60px"}}>Being the most reliable mobile application
//            development agency, we offer a complete set of web, mobile and design services to our customers. 
//           <br/>Besides providing custom-solutions to our clients we offer them quality services in: </p>
//           <div class="col-md-12">
//             <div class="row d-flex justify-content-left position-relative">
//               <div class="col-lg-8 col-md-12 tabsport">
//                 <div class="nav row  nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  
//                 <a target="_blank" id="a-click" href="" onClick="javascript:window.location.href=''">
//                   <div class="nav-link col-md-6 col-12 active new-div" id="v-pills-home-tab" data-toggle="pill"
//                   href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"> 
//                   <i class="fas fa-mobile">&nbsp;&nbsp;</i><span>Mobile App Development
//                   </span><br/>
//                   We develop stunning mobile applications that transform lives to see the bigger picture. Our prime
//                   directive is to craft world-class applications for our clients across the globe.           
//                 </div>
//                 </a>  
                 
                  
//                  <a target="_blank" id="a-click" href="" onClick="javascript:window.location.href=''">
//                   <div class="nav-link col-md-6 col-12 new-div" id="v-pills-profile-tab" data-toggle="pill"
//                   href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i
//                     class="fas fa-shopping-cart"></i>&nbsp;&nbsp;<span>E-commerce Website
    
    
//                   </span><br/>
//                   Our experienced and tech-savvy developers will create a fully loaded and feature rich e-commerce website
//                   for your business. We never create anything less than the best.
    
    
                  
//                 </div>
//                  </a> 
                  
//                  <a target="_blank" id="a-click" href="" onClick="javascript:window.location.href='#'">
//       <div class="nav-link col-md-6 col-12 new-div" id="v-pills-messages-tab" data-toggle="pill"
//       href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i
//         class="fas fa-brush"></i>&nbsp;&nbsp;<span>Web Design and Development
    
//       </span><br/>
//       We create user-friendly websites and applications to delight our customers. Our aim is to provide a
//       seamless user experience for those who use our services.
    
    
    
//     </div>
//     </a>
                 
//                  <a target="_blank" id="a-click" href="" onClick="javascript:window.location.href=''">
//                   <div class="nav-link col-md-6 col-12 new-div" id="v-pills-settings-tab" data-toggle="pill"
//                   href="#v-pills-settings" role="tab" aria-controls="v-pills-settings-tab" aria-selected="true"><i
//                     class="fas fa-palette"></i>&nbsp;&nbsp;<span>UI/UX Design
    
//                   </span><br/>
//                   We beautify our applications through attractive and interactive UI/UX interfaces. Our analysts
//                   understand what people like and they direct the designers to those insights.
                
//                 </div>
//                  </a> 
    
//                  <a target="_blank" id="a-click" href="" onClick="javascript:window.location.href=''">
//                   <div class="nav-link col-md-6 col-12 new-div" id="v-pills-drupal-tab" data-toggle="pill"
//                   href="#v-pills-drupal" role="tab" aria-controls="v-pills-drupal" aria-selected="false"><i
//                     class="fas fa-cloud">&nbsp;&nbsp;</i><span>Content Management System
//                   </span><br/>
//                   We engage various CMS to help you manage your sites online to bring in better outcomes. We know how
//                   to handle your content and what next to implement.
                  
//                 </div>
//                  </a>
    
    
//                  <a target="_blank" id="a-click" href="" onClick="javascript:window.location.href=''">
//                   <div class="nav-link col-md-6 col-12 new-div" id="v-pills-frame-tab" data-toggle="pill"
//                   href="#v-pills-frame" role="tab" aria-controls="v-pills-drupal-frame" aria-selected="false"><i
//                     class="fas fa-code">&nbsp;&nbsp;</i><span>Web Frameworks
//                   </span><br/>
//                   Experience, expertise, and budget friendliness matter the most. With years of experience in web development, we assure that you will never be disappointed.
//                   </div>
//                  </a>
                 
    
//                 </div>
//               </div>
//               <div class="col-md-4">
//                 <div class="contentntab">
//                   <div class="tab-content" id="v-pills-tabContent">
    
//                     <div class="tab-pane  show active" id="v-pills-home" role="tabpanel"
//                       aria-labelledby="v-pills-home-tab"><img class="image-lazy" src="https://mindster.com/wp-content/themes/mindster/img/transparent-429X800.png" data-src="https://mindster.com/wp-content/themes/mindster/img/tab.1.png"/></div>
//                     <div class="tab-pane " id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
//                       <img class="image-lazy" src="https://mindster.com/wp-content/themes/mindster/img/transparent-429X800.png" data-src="https://mindster.com/wp-content/themes/mindster/img/tab.2.png"/></div>
//                     <div class="tab-pane " id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
//                       <img class="image-lazy" src="https://mindster.com/wp-content/themes/mindster/img/transparent-429X800.png" data-src="https://mindster.com/wp-content/themes/mindster/img/tab.3.png"/></div>
//                     <div class="tab-pane " id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
//                       <img class="image-lazy" src="https://mindster.com/wp-content/themes/mindster/img/transparent-429X800.png" data-src="https://mindster.com/wp-content/themes/mindster/img/tab.4.png"/></div>
//                     <div class="tab-pane " id="v-pills-drupal" role="tabpanel" aria-labelledby="v-pills-drupal-tab"><img
//                     class="image-lazy" src="https://mindster.com/wp-content/themes/mindster/img/transparent-429X800.png" data-src="https://mindster.com/wp-content/themes/mindster/img/tab.5.png"/></div>
//                     <div class="tab-pane " id="v-pills-frame" role="tabpanel" aria-labelledby="v-pills-drupal-frame">
//                       <img class="image-lazy" src="https://mindster.com/wp-content/themes/mindster/img/transparent-429X800.png" data-src="https://mindster.com/wp-content/themes/mindster/img/tab.6.png"/></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="d-flex justify-content-center">
//               <div class="">
//                 <a href="#"> <button class="my_form_btn_blue">View all services </button>  </a>
//               </div>
//             </div>
//           </div>
//         </div>
//           </section>
//         </div>
//     )
// }

// export default Try
