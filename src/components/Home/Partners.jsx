import React from 'react'
import partner1 from '../../assets/img/partnar/partner1.png'
import partner2 from '../../assets/img/partnar/partner2.png'
import partner3 from '../../assets/img/partnar/partner3.png'
import partner4 from '../../assets/img/partnar/partner4.png'
import partner5 from '../../assets/img/partnar/partner5.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Partners() {
    const Partners={
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: false,
        autoplayTimeout: 5500,
        autoplay: true,
        
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    }
    return (
        <div>
        <div class="partner-section">
        <div class="container">
            <div class="section-title">
                <span>Client Logo Slider</span>
                <h3>Our Products Are Rocking On The Internet</h3>
            </div>
            <OwlCarousel class="partner-slider owl-carousel owl-theme wow fadeIn" {...Partners}>
                <div class="partner-item">
                    <a href="#">
                        <img src={partner1} alt="partner"/>
                    </a>
                </div>

                <div class="partner-item">
                    <a href="#">
                        <img src={partner2} alt="partner"/>
                    </a>
                </div>

                <div class="partner-item">
                    <a href="#">
                        <img src={partner3} alt="partner"/>
                    </a>
                </div>

                <div class="partner-item">
                    <a href="#">
                        <img src={partner4} alt="partner"/>
                    </a>
                </div>

                <div class="partner-item">
                    <a href="#">
                        <img src={partner1} alt="partner"/>
                    </a>
                </div>

                <div class="partner-item">
                    <a href="#">
                        <img src={partner5}alt="partner"/>
                    </a>
                </div>
            </OwlCarousel>
        </div>
    </div>
        </div>
    )
}

export default Partners
