import React from 'react'
import adobe from '../../assets/img/myicon/adobe.png'
import photoshop from '../../assets/img/myicon/photoshop.png'
function Step_ahead() {
    return (
        <div>
        <section class="features-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="features-content-area">
                        <span>Client Interation process</span>
                        <h3>Step ahead to make something valueable</h3>
                        <p>Cloudwapp is your reliable partner to bring you achievements & success. Our process of client on-boarding is frictionless, diligent, and breeds loyalty. We are after a four-step process to collaborate with our clients across global. Here’s how we deal with our clients.</p>

                    </div>
                </div>

                <div class="col-lg-7 col-md-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 wow fadeIn">
                            <div class="single-features-item bg-f1eff8">
                                <div class="icon">
                                    <i class="flaticon-seo"></i>
                                </div>

                                <h3>Project Requirements</h3>
                                <p>Requirements Gathering</p>
                                <p>Requirements Analysis</p>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6 wow fadeIn">
                            <div class="single-features-item bg-fbe6d4">
                                <div class="icon">
                                    <i class="flaticon-analytics"></i>
                                </div>

                                <h3>Business Plan</h3>
                                <p>Brainstorming</p>
                                <p>Wireframe Planning</p>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6 wow fadeIn">
                            <div class="single-features-item bg-f0fffc">
                                <div class="icon">
                                    <i class="flaticon-laptop"></i>
                                </div>

                                <h3>Software Making</h3>
                                <p>Creative Designing </p>
                                <p>Smooth Development</p>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6 wow fadeIn">
                            <div class="single-features-item bg-f8e1eb">
                                <div class="icon">
                                    <i class="flaticon-analysis-1"></i>
                                </div>

                                <h3>Deliver and Evaluation</h3>
                                <p>Releasing software for user exploration</p>
                                <p>Maintainance and Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="features-animation">
            <div class="shape-img1"><img src={photoshop} alt="image"/></div>
            <div class="shape-img2"><img src={adobe} alt="image"/></div>
        </div>
    </section>
            
        </div>
    )
}

export default Step_ahead
