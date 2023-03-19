import React from 'react'

const About = () => {
    return (
        <div>
            <div class="breadcumb-wrapper " data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg">
                <div class="container">
                    <div class="breadcumb-content">
                        <h1 class="breadcumb-title">About Us</h1>
                        <ul class="breadcumb-menu">
                            <li><a href="/">Home</a></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="space" id="about-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 pe-xl-5">
                            <div class="img-box1">
                                <div class="group">
                                    <div class="img1"><img src="assets/img/normal/about_1_1.jpg" alt="About" /></div>
                                    <div class="img3"><img src="assets/img/normal/about_1_3.jpg" alt="About" /></div>
                                </div>
                                <div class="img2"><img src="assets/img/normal/about_1_2.jpg" alt="About" /></div>
                                <div class="shape1"><img src="assets/img/shape/dot_1.png" alt="shape" /></div>
                                <div class="shape2"><img src="assets/img/shape/bg_shape_1.png" alt="shape" /></div>
                                <div class="about-counter1">
                                    <h3 class="counter-title"><span class="counter-number">24</span>+</h3><span
                                        class="counter-text">Years Experience</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="title-area mb-30"><span class="sub-title">ABOUT US</span>
                                <h2 class="sec-title">World best <span class=" text-theme">Start</span> for your business</h2>
                            </div>
                            <p class="mt-n2 mb-4">
                                A leading marketing agency established in 2012.
                                With our offices in Rwanda, we operate worldwide,
                                with a strong presence in Asia and Africa.
                            </p>
                            <div class="btn-group">
                                <a href="/blog" class="as-btn">Read Case Study</a>
                                <a href="/about"
                                    class="as-btn style7">More Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="cta-sec" data-bg-src="assets/img/bg/cta_bg_5.jpg">
                <div class="container">
                    <div class="row gy-40 align-items-center justify-content-between">
                        <div class="col-lg-6">
                            <h2 class="sec-title text-white mb-10">You Need Our support?</h2>
                            <p class="text-white mb-n2">Perfect Solution For Your Company. Conveniently grow long-term.</p>
                        </div>
                        <div class="col-lg-auto"><a href="tel:+250781303538" class="call-btn">
                            <div class="play-btn style4"><i class="fas fa-phone"></i></div>
                            <div class="btn-content"><span class="btn-text text-white">CALL US</span> <span
                                class="box-title gr-text">+250 781-303-538</span></div>
                        </a></div>
                        <div class="col-lg-auto"><a href="/contact" class="as-btn gr-btn">Get In Touch</a></div>
                    </div>
                </div>
            </section>
            <section class="space process-sec bg-smoke" data-bg-src="assets/img/bg/process_bg_1.png">
                <div class="container">
                    <div class="col-lg-6">
                        <div class="title-area text-center text-lg-start">
                            <span class="sub-title">How we work</span>
                            <h2 class="sec-title">Our working process</h2>
                            <p class="sec-text mb-4 me-auto ms-auto ms-lg-0 pe-lg-5 me-lg-5">
                                Globally actualize premier testing
                                procedures and user-centric e-business. Holisticly productivate cross-media core
                            </p>
                            <a href="/services" class="as-btn mb-20">Learm More</a>
                        </div>
                    </div>
                    <div class="process-line"><img src="assets/img/shape/process_line.svg" alt="shape" /></div>
                    <div class="row gy-30">
                        <div class="col-md-6 col-lg-4 process-card-wrap">
                            <div class="process-card">
                                <div class="process-card_icon"><img src="assets/img/icon/process_1_1.svg" alt="icon" /></div>
                                <div class="process-card_number">1</div>
                                <h2 class="process-card_title box-title">Your Project Analysis</h2>
                                <p class="process-card_text">
                                    From developing marketing strategies to designing eye-catching visuals,
                                    our team has the skills and expertise to help your business thrive
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 process-card-wrap">
                            <div class="process-card">
                                <div class="process-card_icon"><img src="assets/img/icon/process_1_2.svg" alt="icon" /></div>
                                <div class="process-card_number">2</div>
                                <h2 class="process-card_title box-title">Build Powerful Solutions</h2>
                                <p class="process-card_text">
                                    We believe that every client is unique, and we work closely with them to
                                    understand their needs and develop tailored solutions that meet their goals.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 process-card-wrap">
                            <div class="process-card">
                                <div class="process-card_icon"><img src="assets/img/icon/process_1_3.svg" alt="icon" /></div>
                                <div class="process-card_number">3</div>
                                <h2 class="process-card_title box-title">Complete and download</h2>
                                <p class="process-card_text">
                                    Our dedication to quality, creativity, and innovation sets us apart from the competition,
                                    and we're proud to have built a reputation as a trusted partner for businesses worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="process-call-wrap">
                        <div class="process-call-btn">
                            <div class="play-btn"><i class="fa-solid fa-phone"></i></div><a href="tel:+250781303538"
                                class="call-link">+250 781 303 538</a>
                        </div>
                        <div class="process-call-img"><img src="assets/img/normal/process_man.png" alt="man" /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About