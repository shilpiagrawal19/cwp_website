import React from 'react'
import tabb from '../../assets/img/tab/b.png'
import taba from '../../assets/img/tab/a.png'
import tabc from '../../assets/img/tab/c.png'
import whitecheckmark from "../../assets/img/whitecheckmark.png"

import shape from '../../assets/img/tab/shape.png'

import $ from 'jquery'


function Our_outstanding_work() {
    
    // (function ($)
    //   {
    //     $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    //     $('.tab ul.tabs li a').on('click', function (g) {
    //         var tab = $(this).closest('.tab'), 
    //         index = $(this).closest('li').index();
    //         tab.find('ul.tabs > li').removeClass('current');
    //         $(this).closest('li').addClass('current');
    //         tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
    //         tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
    //         g.preventDefault();
    //     });
    // })(jQuery);
    $(document).ready(function() {
        $('.btn_sec1').addClass('btn1Color')
        $('.btn1 a').addClass('btn1Color');
        $('.btn1 a').click(function() {
            $('.tabs li a').removeClass('btn2Color');
            $('.tabs li a').removeClass('btn3Color');
            $('.tabs li a').removeClass('btn4Color');
            $('.tabs li a').removeClass('btn5Color');
            $('.tabs li a').removeClass('btn6Color');
            $('.btn_sec6').addClass('btn6Color');
            $('.btn_sec5').addClass('btn5Color');
            $('.btn_sec1').addClass('btn1Color')
            $(this).addClass('btn1Color');
        });
        $('.btn2 a').click(function() {
            $('.tabs li a').removeClass('btn1Color');
            $('.tabs li a').removeClass('btn3Color');
            $('.tabs li a').removeClass('btn4Color');
            $('.tabs li a').removeClass('btn5Color');
            $('.tabs li a').removeClass('btn6Color');
            $('.btn_sec6').addClass('btn6Color');
            $('.btn_sec5').addClass('btn5Color');
            $('.btn_sec2').addClass('btn2Color')
            $(this).addClass('btn2Color');
        });
        $('.btn3 a').click(function() {
            $('.tabs li a').removeClass('btn1Color');
            $('.tabs li a').removeClass('btn4Color');
            $('.tabs li a').removeClass('btn2Color');
            $('.tabs li a').removeClass('btn5Color');
            $('.tabs li a').removeClass('btn6Color');
            $('.btn_sec6').addClass('btn6Color');
            $('.btn_sec5').addClass('btn5Color');
            $('.btn_sec3').addClass('btn3Color')
            $(this).addClass('btn3Color');
        });
        $('.btn4 a').click(function() {
            $('.tabs li a').removeClass('btn1Color');
            $('.tabs li a').removeClass('btn3Color');
            $('.tabs li a').removeClass('btn2Color');
            $('.tabs li a').removeClass('btn5Color');
            $('.tabs li a').removeClass('btn6Color');

            $('.btn_sec4').addClass('btn4Color')
            $(this).addClass('btn4Color');
        });
        $('.btn5 a').click(function() {
            $('.tabs li a').removeClass('btn1Color');
            $('.tabs li a').removeClass('btn3Color');
            $('.tabs li a').removeClass('btn2Color');
            $('.tabs li a').removeClass('btn4Color');
            $('.tabs li a').removeClass('btn6Color');
            $('.btn_sec5').addClass('btn5Color')
            $(this).addClass('btn5Color');
        });
        $('.btn6 a').click(function() {
            $('.tabs li a').removeClass('btn1Color');
            $('.tabs li a').removeClass('btn3Color');
            $('.tabs li a').removeClass('btn2Color');
            $('.tabs li a').removeClass('btn4Color');
            $('.tabs li a').removeClass('btn5Color');
            $('.btn_sec6').addClass('btn6Color')
            $(this).addClass('btn6Color');
        });
    });
   
        
      
    return (
                <section class="tab-section">
                <div class="container">
                    <div class="section-title mb-5">
                        <span>Product</span>
                        <h3>Our Outstanding Work</h3>
                    </div>
        
                    <div class="tab boosting-list-tab">
                        <ul class="tabs">
                            <li class="btn1" data-skin="#e67817">
                                <a href="#1">
                                    <i class="flaticon-mobile"></i>
                                    <span>Taxi Apps</span>
                                </a>
                            </li>
        
                            <li class="btn2" data-skin="#000">
                                <a href="#2">
                                    <i class="flaticon-wholesaler"></i>
                                    <span>Home Service Apps</span>
                                </a>
                            </li>
        
                            <li class="btn3">
                                <a href="#3">
                                    <i class="flaticon-uber"></i>
                                    <span>Uber-X Apps</span>
                                </a>
                            </li>
        
                            <li class="btn4">
                                <a href="#4">
                                    <i class="flaticon-scooter"></i>
                                    <span>Food Delivery Apps</span>
                                </a>
                            </li>
        
                            <li class="btn5">
                                <a href="#5">
                                    <i class="flaticon-loader"></i>
                                    <span>On Demand Delivery</span>
                                </a>
                            </li>
        
                            <li class="btn6">
                                <a href="#6">
                                    <i class="flaticon-group"></i>
                                    <span>Social Apps</span>
                                </a>
                            </li>
                        </ul>
        
                        <div class="tab_content current wow fadeIn">
                            <div class="tabs_item btn_sec1">
                                <div class="row align-items-center">
                                    <div class="col-lg-5">
                                        <div class="tab-image">
                                            <img src={tabb} alt="taxidude"/>
                                        </div>
                                    </div>
        
                                    <div class="col-lg-7">
                                        <div class="content">
                                            <h2>Taxidudes Apps</h2>
                                            <p>Taxidude enterprise is a cost effective taxi booking app. You can book diffrent type of taxi like sedan, mini and micro. you can also check FARE ESTIMATION and TIME ESTIMATION to your drop location.</p>
                                            <ul>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Requesting your taxidude is easy—here’s how it works:</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Just open the app and register with your mobile number with OTP verification.</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Set your pickup location or current location.</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Pick the type of vehicle you want liek sedan, micro, mini & tap ‘RIDE NOW’</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Nearest driver will accpet your booking.</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Enjoy your ride.</li>
                                            </ul>
                                        </div>
        
                                        
                                    </div>
                                </div>
        
                                <div class="tab-shape">
                                    <img src={shape} alt="app development"/>
                                </div>
                            </div>
        
                            <div class="tabs_item btn_sec2">
                                <div class="row align-items-center">
                                    <div class="col-lg-5">
                                        <div class="tab-image">
                                            <img src={taba} alt="handyman"/>
                                        </div>
                                    </div>
        
                                    <div class="col-lg-7">
                                        <div class="content">
                                            <h2>Handyman Apps</h2>
                                            <p>Handyman is the most convenient and hassle free way to get your household work done. With well trained and background verified professionals we make sure all your pest control, home cleaning, plumbing, carpentry, electrical and other needs are taken care of. With the Gago instant job app you could make a booking, track status of your booking and rate the provider on the go. We have handcrafted the App to make your booking a delightful experience</p>
                                            <ul>
                                                <h6>Features :-</h6>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Instant booking .</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Schedule boooking .</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Live tracking .</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>One tap payment.</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Track time.</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Service history.</li>
                                            </ul>
                                        </div>
                                       
                                    </div>
                                </div>
        
                                <div class="tab-shape">
                                    <img src={shape} alt="web development"/>
                                </div>
                            </div>
        
                            <div class="tabs_item btn_sec3">
                                <div class="row align-items-center">
                                    <div class="col-lg-5">
                                        <div class="tab-image">
                                            <img src="https://www.cloudwapp.com/assets/front/img/tab/e.png" alt="gago"/>
                                        </div>
                                    </div>
        
                                    <div class="col-lg-7">
                                        <div class="content">
                                            <h2>Gago Apps</h2>
                                            <p>You can book a wide range of doorstep services from salon-at-home to home cleaning, appliance repairs and home maintenance to home construction, delivered by well-qualified professionals from anywhere, anytime</p>
                                        </div>
        
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="tab-text-content">
                                                    <p>Gago instant job is the most convenient and hassle free way to get your household work done. With well trained and background verified professionals we make sure all your pest control, home cleaning, plumbing, carpentry, electrical and other needs are taken care of. With the Gago instant job app you could make a booking, track status of your booking and rate the provider on the go. We have handcrafted the App to make your booking a delightful experience
        </p>
                                                </div>
                                                
                                                
                                                <ul>
                                                <h6>Features :-</h6>
                                                <li><img className="Checksquare" src={whitecheckmark}/> Instant booking </li>
                                                <li><img className="Checksquare" src={whitecheckmark}/> Schedule boooking </li>
                                                <li><img className="Checksquare" src={whitecheckmark}/> Live tracking </li>
                                                <li><img className="Checksquare" src={whitecheckmark}/> One tap payment </li>
                                                <li><img className="Checksquare" src={whitecheckmark}/> Track time </li>
                                                <li><img className="Checksquare" src={whitecheckmark}/> Service history </li>
                                            </ul>
                                            </div>
                                        </div>
        
                             
                                    </div>
                                </div>
        
                                <div class="tab-shape">
                                    <img src={shape} alt="web design"/>
                                </div>
                            </div>
        
                            <div class="tabs_item btn_sec4">
                                <div class="row align-items-center">
                                    <div class="col-lg-5">
                                        <div class="tab-image">
                                            <img src="https://www.cloudwapp.com/assets/front/img/tab/d.png" alt="food-delivery"/>
                                        </div>
                                    </div>
        
                                    <div class="col-lg-7">
                                        <div class="content">
                                            <h2>Food Delivery</h2>
                                            <p>Get the food you want, from the restaurants you love, delivered at super speed.</p>
                                        </div>
        
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="tab-text-content">
        
                                                    <p>Eat what you like, where you like, when you like. Find the local flavours you crave, all at the tap of a button</p>
                                                </div>
                                            </div>
        
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="tab-text-content">
        
                                                    <p>Browse local restaurants and fast food favourites for inspiration. Or get just what you’re looking for by searching for a specific restaurant, dish or cuisine. Pizza. Burritos. Burgers. Sushi. If you're hungry for it, try CW Eats.</p>
                                                </div>
                                            </div>
        
                                            <div class="col-lg-12 col-md-12 col-sm-12">
                                                <div class="tab-text-content">
        
                                                    <p>When you’re ready to place your order, you’ll see your delivery address, an estimated delivery time and the total price including tax and booking fee. Tap to seamlessly pay with your wallet account, or add a credit card. Track your order in real-time as it heads your way.</p>
                                                </div>
                                            </div>
                                        </div>
        
                                       
                                    </div>
                                </div>
        
                                <div class="tab-shape">
                                    <img src={shape} alt="seo"/>
                                </div>
                            </div>
        
                            <div class="tabs_item btn_sec5">
                                <div class="row align-items-center">
                                    <div class="col-lg-5">
                                        <div class="tab-image">
                                            <img src={tabc} alt="delivery dude"/>
                                        </div>
                                    </div>
        
                                    <div class="col-lg-7">
                                        <div class="content">
                                            <h2>Delivery Dude Apps</h2>
                                            <p>Delivery Dude delivers anything to your doorstep fron any place. Whether it's food delivery ,grocery shopping or your medecine from medical store, Deliver Dude is the only delivery app you'll ever need.</p>
                                            <ul>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Get clothes delivered from laundries near you.</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Get groceries delivered from local grocery stores near you.</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Get medicines delivered from local chemists near you.</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Send parcels anywhere within the city.</li>
        
                                            </ul>
                                            <p>Delivery Dude will deliver safely and in time. No Minimum Order. Delivery Dude will do pickup and drop of a item from one place to deliver to other place</p>
                                        </div>
        
                                        
                                    </div>
                                </div>
        
                                <div class="tab-shape">
                                    <img src={shape} alt="graphic design"/>
                                </div>
                            </div>
        
                            <div class="tabs_item btn_sec6">
                                <div class="row align-items-center">
                                    <div class="col-lg-5">
                                        <div class="tab-image">
                                            <img src="https://www.cloudwapp.com/assets/front/img/tab/f.png" alt="social app"/>
                                        </div>
                                    </div>
        
                                    <div class="col-lg-7">
                                        <div class="content">
                                            <h2>Social Apps</h2>
                                            <p>We created Social App to let you have one place that gathers your best moments with your friends. Social App is featured in the following:</p>
                                            <ul>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Adding friends</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Share images</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Share links</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>share thoughts</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Post your location</li>
                                                <li><img className="Checksquare" src={whitecheckmark}/>Chat with friends</li>
                                            </ul>
                                            <p>Social app is different due to the limitation of friend list. Now, let’s Mush!</p>
                                        </div>
        
                                    </div>
                                </div>
        
                                <div class="tab-shape">
                                    <img src={shape} alt="ios app development"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          


            
          
            
            )
        }
        
        
 
export default Our_outstanding_work
