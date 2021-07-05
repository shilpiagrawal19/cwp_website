import React from 'react'
import { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import html5 from '../../assets/img/myicon/html5.png'
import shape6 from '../../assets/img/shape/6.png'
import apple from '../../assets/img/myicon/apple.png'
import phpicon from '../../assets/img/myicon/php-icon.png'
import jspng from '../../assets/img/myicon/js.png'
import css3png from '../../assets/img/myicon/css3.png'
import android from '../../assets/img/myicon/android.png'
import shape3 from '../../assets/img/shape/3.png'
import mainimg from '../../assets/img/saas-image/main-image.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import gogalaxy from "../../assets/image/app-3.png";
import About from "../../assets/image/about.png"
import checkedsquare from "../../assets/img/checked.png"
import webdevelopmentprocess from "../../assets/img/web-development-process.png"
import $ from "jquery";
import Industry_we_serve from './Industry_we_serve'
import Step_ahead from './Step_ahead'
import Our_outstanding_work from './Our_outstanding_work'
import Bussiness_solving from './Bussiness_solving'
import Testimonial from './Testimonial'
import Partners from './Partners'
import Footer from './Footer'
import Fade from 'react-reveal/Fade';
import Preloader from '../Preloader/Preloader'
import whatsapp from '../../assets/image/whatsapp.png'
import call from '../../assets/image/call.png'
import Tab from '../tab/Tab'
import Developments from './Developments';



dom.watch()

library.add(fab);
library.add(fas);


function Home() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
      useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
      }, []);
    
    
  
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });  
    // Click Event
    // $('.go-top').on('click', function() {
    //     $("html, body").animate({ scrollTop: "0" },  500);
    // });
    const testimonial ={
        loop: true,
        center: true,
        items: 2,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        smartSpeed: 2500,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 2
          }
        }
    }
    return (
        <div>

       <Preloader/>
      
        <Navbar/>
        <div class="main-banner">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="main-banner-content">
                                <h1>Best Web And Mobile App Development Company</h1>
                                <ul>
                                    <li><img className="Checksquare" src={checkedsquare}/>Launch Your Business App Today!</li>
                                    <li><img className="Checksquare" src={checkedsquare}/>5+ Years of Domain Expertise</li>
                                    <li><img className="Checksquare" src={checkedsquare}/>Strong In-house Development Team</li>
                                    <li><img className="Checksquare" src={checkedsquare}/>Delivering 400+ Business Ready Solutions Per Year</li>
                                    <li><img className="Checksquare" src={checkedsquare}/>Average of 45 days from Development to Deployment</li>
                                </ul>

                                <div class="banner-btn">
                                    <a href="#" class="default-btn-one">More About Us</a>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="banner-image">

                                <div class="testimonials">
                                    {/*<!-- TESTIMONIALS -->*/}

                                    <OwlCarousel id="customers-testimonials" class="owl-carousel" {...testimonial}>

                                       {/* <!--TESTIMONIAL 1 -->*/}
                                       <div class="item">
                                       <div class="shadow-effect">
                                           <div class="myicon">
                                              <img src={gogalaxy} alt="image"/>
                                           </div>
                                           <div class="slider-content">
                                               <h5> <a href="https://play.google.com/store/apps/details?id=com.cw.gogalaxy">Go-Galaxy</a></h5>
                                               <p>Buy grocery and all other items from the local shop through the app. We are responsible for delivery</p>
                                               
                                           </div>
                                       </div>

                                   </div>
                                                                         <div class="item">
                                       <div class="shadow-effect">
                                           <div class="myicon">
                                              <img src="https://www.cloudwapp.com/uploads/images/app-21.png" alt="image"/>
                                           </div>
                                           <div class="slider-content">
                                               <h5> <a href="#">Delivery Dude</a></h5>
                                               <p>Delivery Dude delivers anything to your doorstep from any place.Delivery Dude will deliver safely and in time.</p>
                                               
                                           </div>
                                       </div>

                                   </div>
                                                                         <div class="item">
                                       <div class="shadow-effect">
                                           <div class="myicon">
                                              <img src="https://www.cloudwapp.com/uploads/images/bus.png" alt="image"/>
                                           </div>
                                           <div class="slider-content">
                                               <h5> <a href="https://play.google.com/store/apps/details?id=com.appforpeople&hl=en">Bus Route App</a></h5>
                                               <p>Easily search bus routes, bus stops, transit info around you. Search by area, street name, bus number or destination.</p>
                                               
                                           </div>
                                       </div>

                                   </div>
                                                                         <div class="item">
                                       <div class="shadow-effect">
                                           <div class="myicon">
                                              <img src="https://www.cloudwapp.com/uploads/images/food.png" alt="image"/>
                                           </div>
                                           <div class="slider-content">
                                               <h5> <a href="https://play.google.com/store/apps/details?id=com.cw.foodclick">Foodclick App</a></h5>
                                               <p>Foodclick is the best app to track and share your daily eating details. You can privately share to your friends , relatives and with your doctors.</p>
                                               
                                           </div>
                                       </div>

                                   </div>
                                                                         <div class="item">
                                       <div class="shadow-effect">
                                           <div class="myicon">
                                              <img src="https://www.cloudwapp.com/uploads/images/freebook.png" alt="image"/>
                                           </div>
                                           <div class="slider-content">
                                               <h5> <a href="https://play.google.com/store/apps/details?id=com.cloudwapp.bookstore.hym">Free Books for Kindle</a></h5>
                                               <p>If you are in the habit of reading e-books, our app is the perfect place you can discover your new favorite titles for Free!</p>
                                               
                                           </div>
                                       </div>

                                   </div>
                                                                         <div class="item">
                                       <div class="shadow-effect">
                                           <div class="myicon">
                                              <img src="https://www.cloudwapp.com/uploads/images/gago.png" alt="image"/>
                                           </div>
                                           <div class="slider-content">
                                               <h5> <a href="https://play.google.com/store/apps/details?id=com.cloudwapp.gago.user&hl=en">Gago - On Demand Home Service App</a></h5>
                                               <p>You can book a wide range of doorstep services with well trained and background verified professionals.</p>
                                               
                                           </div>
                                       </div>

                                   </div>
                                                                         <div class="item">
                                       <div class="shadow-effect">
                                           <div class="myicon">
                                              <img src="https://www.cloudwapp.com/uploads/images/myglicense.png" alt="image"/>
                                           </div>
                                           <div class="slider-content">
                                               <h5> <a href="https://play.google.com/store/apps/details?id=com.cloudwapp.myglicense">MyGlicense</a></h5>
                                               <p>The application brings together the Licensees/Students, Instructor and Employers all in one place.</p>
                                               
                                           </div>
                                       </div>

                                   </div>
                                                                         <div class="item">
                                       <div class="shadow-effect">
                                           <div class="myicon">
                                              <img src="https://www.cloudwapp.com/uploads/images/taxidude.png" alt="image"/>
                                           </div>
                                           <div class="slider-content">
                                               <h5> <a href="https://play.google.com/store/apps/details?id=com.cw.taxidude.userapp">Taxi App - Taxidude User</a></h5>
                                               <p>Taxidude is an effective taxi booking app. You can schedule a booking with precise location pins.</p>
                                               
                                           </div>
                                       </div>

                                   </div>
                                   {/*        <div class="shadow-effect">
                                                <div class="myicon">
                                                    <i class="fa fa-ravelry" aria-hidden="true"></i>
                                                </div>
                                                <div class="slider-content">
                                                    <h5>web designer</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                                    <div class='rating-stars text-center'>
                                                        <ul id='stars'>
                                                            <li class='star' title='Poor' data-value='1'>
                                                                <i class='fa fa-star fa-fw'></i>
                                                            </li>
                                                            <li class='star' title='Fair' data-value='2'>
                                                                <i class='fa fa-star fa-fw'></i>
                                                            </li>
                                                            <li class='star' title='Good' data-value='3'>
                                                                <i class='fa fa-star fa-fw'></i>
                                                            </li>
                                                            <li class='star' title='Excellent' data-value='4'>
                                                                <i class='fa fa-star fa-fw'></i>
                                                            </li>
                                                            <li class='star' title='WOW!!!' data-value='5'>
                                                                <i class='fa fa-star fa-fw'></i>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>*/ } 

                                        
                                      { /* <!--END OF TESTIMONIAL 5 -->*/}


                                    </OwlCarousel>

                {    /*  <!-- END OF TESTIMONIALS -->*/}         
                       </div>
                              <img src={mainimg} class="wow zoomIn" data-wow-delay="0.6s" alt="main-image.png"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="shape-img2"><img src={html5} alt="image"/></div>
        <div class="shape-img4"><img src={shape6} alt="image"/></div>
        <div class="shape-img5"><img src={apple} alt="image"/></div>
        <div class="shape-img6"><img src={phpicon} alt="image"/></div>
        <div class="shape-img7"><img src={jspng} alt="image"/></div>
        <div class="shape-img8"><img src={css3png} alt="image"/></div>
        <div class="shape-img9"><img src={android} alt="image"/></div>
        <div class="shape-img11"><img src={shape3} alt="image"/></div>
    </div>

    { /////////////About /////////////////}
    <section class="about-section pt-100 pb-0">
<div class="container">
    <div class="row align-items-center">
        
        <div class="col-lg-6 col-md-12 wow fadeInLeft">
            <div class="about-image">
               <Fade left> <img src={About} alt="image"/></Fade>
            </div>
        </div>

       
        <div class="col-lg-6 col-md-12 wow fadeInRight">
        <Fade right>  
            <div class="about-area-content">
                <span style={{fontstyle: "italic", fontweight: "600" }}>Welcome to Cloudwapp Technologies</span>
                <h3 class="animated fadeIn">We Are Dynamic Team of Web and Mobile Applications</h3>
                
                <p className="content-p">There is no such industry that remains untouched by technology. If you are looking for the best web and mobile app development company, you are really looking for the right development services for you, your business, and the website you want to create.</p>
                <p className="content-p">We at Cloudwapp Technologies delivers full-cycle custom Web &amp; Mobile App Design and Development services.</p>

            </div> 
            </Fade> 

        </div>
       
        <Fade right>   
        <div class="col-lg-12">
            <div class="about-area-content">
                    <p>
                        At present small and large scale businesses are investing heavily in mobile applications. Connecting with your targeted audience through mobile apps is not only a great way but an effective way to show the latest updates and offers. We deliver cost-effective app development solutions to take your business to a leading enterprise. Get attractive, fast loading, responsive, and highly functional iOS & Android mobile apps that complete all your business need. From planning to development and launch, we work on every aspect. It does not matter how unique or complex your business ideas are, our well trained and highly skilled experts are always ready to take the challenge.
                    </p>
                   
                    <p>We also carefully evaluate and select the best web developers and designers from across the globe. When you select us for your web and mobile app design and development, you are going with the very best. We fulfill all your requirement because your success becomes our story of success. We have dedicated designers, strategists, and developers in our company to deliver attractive and innovative web and mobile app development solutions to our clients.</p>
                    <p>If you compare to other web and mobile app development companies - what makes us different and unique? We take every project as an opportunity to deliver a unique website and mobile applications according to your demand.</p>
                    
                    
                    <p>Shake your hand with us today - We can make your digital dreams come true. Tell us about your idea to get a custom quote, and hire the best web and mobile app developers today.</p>
                    
            </div>
            
        </div>
        </Fade>

        <div class="col-lg-4">
        <div class="single-fun-facts">
            <h3>400 <span class="sign-icon">+</span></h3>
            <p>Project Completed</p>
        </div>
    </div>

    <div class="col-lg-4">
        <div class="single-fun-facts">
            <h3>350 <span class="sign-icon">+</span></h3>
            <p>Satisfied Clients</p>
        </div>
    </div>      
 
    </div>
</div>
</section>
  

     
        /*///////////////extra section 4 colum Developments */}
   <Developments/>

    {/* Why choose us section */}
    <section class="choose-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="choose-content-area">
                        <span>Why Choose Us</span>
                        <h3>Outstanding Web & App Experience</h3>
                        <p>We are a Custom Software Development Company. But what we do is more than that. We solve business problems with technology in new and creative ways. We have over 10 years of experience in strategy, design, custom software development and managed services.</p>

                        <div class="choose-text">
                        <i> <FontAwesomeIcon icon={['fas', 'check']} className="check" /></i>
                        <h4><span></span> Dedicated Project Manager</h4>
                            <p>We invest the time to understand your business, unlock challenges, validate assumptions and help you prioritise technology decisions that achieve business outcomes</p>
                        </div>

                        <div class="choose-text">
                       <i> <FontAwesomeIcon icon={['fas', 'check']} className="check"  /></i>
                            <h4>Reliability</h4>
                            <p>We recruit the best people, we strive to understand, to deliver on our promises and to work closely with you to solve your toughest problems</p>
                        </div>

                        <div class="choose-text">
                        <i> <FontAwesomeIcon icon={['fas', 'check']} className="check" /></i>
                        <h4>Innvative ideas</h4>
                            <p>We help you to foster a culture of innovation that surfaces unique solutions to unique problems</p>
                        </div>

                    </div>
                </div>

                <div  class="col-lg-6 col-md-12 wow fadeInRight">
                    <div class="choose-image">
                        <Fade right> <img src={webdevelopmentprocess} alt="image"/></Fade>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/*///////Industry We Serve */}
    <Industry_we_serve/>
  
    {/*///////Industry We Serve */}
    <Step_ahead/>


    {/* ///////////our outstanding work//////// 
    <Our_outstanding_work/>   */}
     
    <Tab/>                                 


    {/* Bussiness Solving technique */}
    <Bussiness_solving/>


    {/*///////////////////////// Testimonial Client////////////// */}
    <Testimonial/>

    {/* ///////////////// Partners/////////////////    */ }      
    <Partners/>  
       
       {/*//////////Footer/////////////////////// */}
       <Footer/>
       <div className="scroll-to-top">
       {isVisible && 
 
     <div className="go-top" type="button" onClick={scrollToTop}>
       <i className="fa fa-chevron-up"></i>
   </div>}
   </div>
     {/* ///////social fixed img  */}
    <div className="fixedIcon">
    <ul style={{textAlign:"left"}}>
        <li>
            <a href="https://www.cloudwapp.com/ContactUs"> <img src={call} alt="contact"/> </a>
        </li>
        <li>
            <a href="https://wa.me/+917898117784" target="_blank"> <img src={whatsapp} alt="whatsapp"/> </a>
        </li>
        <li>
            <a href="mailto:info@cloudwapp.com" target="_blank"> <FontAwesomeIcon icon={['fas', 'envelope']} /></a>
        </li>
    </ul>
</div>
   

    {/* ///////need help fixed img  */}
    <div className="needhelpfixed">
        <a href="https://www.cloudwapp.com/ContactUs">
        <img src="https://www.cloudwapp.com/assets/front/img/myicon/need-help1.png" alt="" className="img-fluid"/>
        <p><span> Need <br/> Help ? </span></p>
        </a>
    </div>


   {/* ////// hiring fixed img  */}
    <div className="fixedIcon hiring-icon">
    <a href="https://www.cloudwapp.com/Career">
    <img src="https://www.cloudwapp.com/assets/front/image/hiring.png" alt="Hiring"/>
    </a>
    </div>
        </div>


        
    )
}

export default Home
