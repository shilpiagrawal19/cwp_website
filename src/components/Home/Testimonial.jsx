import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Testimonial() {
   const Testimonialclients= {
        loop: true,
        nav: true,
        dots: true,
        smartSpeed: 800,
        margin: 30,
        active: true,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='flaticon-left-arrow-1'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    }
    return (
        <div>
        <section class="testimonial-section ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="testimonial-content-area">
                        <span>Testimonial</span>
                        <h3>What Our Client Say</h3>
                        <p>We have worked with 300+ Clients and established organisations and have assisted them to achieve their technology goals. We take pride in establishing long term relationships with our clients, focusing on a strategic IT partnership - rather than just a business transaction.</p>
                        </div>
                </div>
                <div class="col-lg-8 wow fadeIn">
                    <OwlCarousel class="testimonial-slides owl-carousel owl-theme"  {...Testimonialclients}>
                        <div class="testimonial-single-item">
                            <div class="testimonial-content-text">
                                <h3>CYRS COMS.</h3>
                                <span>Product Manager</span>
                                <div class="icon">
                                    <i class="flaticon-quote"></i>
                                </div>
                                <p> They understood our requirements from the start and was able to explain back to us what we are asking for, a question we always pose to our developers. Through out the process Ankit and his team were very responsive and went above and beyond with the work in front of them. All our requests were met with understanding. The system they built for us was exactly what we envisioned, we provided exact wireframes and the team was able to replicate them as required </p>
                            </div>
                        </div>

                        <div class="testimonial-single-item">

                            <div class="testimonial-content-text">
                                <h3>YAHZE</h3>
                                <span>CEO & Founder</span>
                                <div class="icon">
                                    <i class="flaticon-quote"></i>
                                </div>
                                <p> This team is very professional and fast, they developed my full eCommerce app in just 2 days!!!!. I have never seen this kind of fast development before with nice and cool design. You will notice a comprehensive development plan before they start with very specific clarifications on any and all questions prior to coding. Also, during the process they will update with detailed documents and date when things are done. Very reliable group of coders. I am delighted to work with them in the future. 10/10 </p>
                            </div>
                        </div>

                        <div class="testimonial-single-item">

                            <div class="testimonial-content-text">
                                <h3>David T.</h3>
                                <span>Ceo & Sustainable designer</span>
                                <div class="icon">
                                    <i class="flaticon-quote"></i>
                                </div>
                                <p> Being an entrepreneur/sole owner of a new business, I had to be very careful who I choose to work on my dream project. I was inundated with over 120 different companies looking forward to work on my project. After days of research &amp; careful reviewing all the companies, I choose Cloudwapp Team for my project &amp; I gotta be honest- What an experience this has been. I am a corporate banker with limited knowledge around technology when it comes to building websites but kudos to team for being so patient &amp; calm throughout the project. I was kept in loop with every step of the way. Top Notch My 5 cent tip to anyone looking for a serious, experienced &amp; knowledgeable team- "Make sure you can give Cloudwapp Technologies . Couldn't recommend them enough. Top job guys. Bloody great experience. Cheers </p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

            </div>
        </div>
    </section>
        </div>
    )
}

export default Testimonial
