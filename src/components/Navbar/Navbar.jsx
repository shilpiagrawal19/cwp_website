import React from 'react'
import logo from '../../assets/img/logo.png'
import skypeicon from '../../assets/img/Skype-Icon.png'
import $ from 'jquery'

function Navbar() {

        // Header Sticky
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
    return (
        <div>
        <div class="navbar-area">
        <div class="cloudwapp-responsive-nav">
            <div class="container">
                <div class="cloudwapp-responsive-menu">
                    <div class="logo">
                        <a href="index-2.html">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="cloudwapp-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="index-2.html">
                        <img src={logo} alt="logo"/>
                    </a>
                    <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav" style={{marginright:"35px"}}>
                            <li class="nav-item">
                                <a href="" class="nav-link active">Home</a>

                            </li>

                            <li class="nav-item">
                                <a href="products.html" class="nav-link">Services 

                                    </a>

                            </li>

                            <li class="nav-item">
                                <a href="services.html" class="nav-link">Portfolio 

                                    </a>

                            </li>

                            <li class="nav-item">
                                <a href="process.html" class="nav-link">Process 
                                    </a>
                            </li>

                            <li class="nav-item ">
                                <a class="nav-link">Company
                                </a>
                                
                                <ul class="dropdown-menu">
                                    <li class="nav-item ">
                                        <a href="#" class="nav-link">About Us </a>
                                    </li>
                                    <li class="nav-item ">
                                        <a href="#" class="nav-link">Careers</a>
                                    </li>
                                </ul>
                                
                            </li>

                            <li class="nav-item ">
                                <a href="#" class="nav-link">Contact</a>
                            </li>
                            
                             <li class="nav-item ">
                                <a href="#" class="nav-link differ">
                                    <img src={skypeicon} alt="skype"/> &nbsp; bde.rad
                                </a>
                            </li>
                        </ul>

                       {/*<!--<div class="others-options">-->

                        <!--    <div class="burger-menu">-->
                        <!--        <span></span>-->
                        <!--        <span></span>-->
                        <!--        <span></span>-->
                        <!--    </div>-->
    <!--</div>-->*/}
                    </div>
                </nav>
            </div>
        </div>
    </div> 
        </div>
    )
}

export default Navbar
