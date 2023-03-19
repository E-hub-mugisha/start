import React from 'react'
import { Carousel } from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            <div class="as-hero-wrapper hero-1" data-bg-src="assets/img/hero/hero_bg_1_1.png">
                <div class="hero-slider-1 as-carousel" data-fade="true" data-slide-show="1" data-md-slide-show="1">
                    <Carousel>
                        <Carousel.Item>
                            <div class="as-hero-slide">
                                <div class="hero-img" data-mask-src="assets/img/hero/hero_mask.png"><img
                                    src="assets/img/hero/hero_1_1.jpg" alt="Hero" /></div>
                                <div class="hero-shape"><img src="assets/img/hero/hero_shape_1.png" alt="shape" /></div>
                                <div class="container">
                                    <div class="hero-style1"><span class="hero-subtitle" data-ani="slideinleft" data-ani-delay="0.1s">A
                                        Trusted Marketing Agency <img src="assets/img/icon/arrow_down.svg" alt="icon" /></span>
                                        <h1 class="hero-title" data-ani="slideinleft" data-ani-delay="0.3s">Marketing  </h1>
                                        <h1 class="hero-title" data-ani="slideinleft" data-ani-delay="0.5s">solutions</h1>
                                        <h1 class="hero-title text-theme" data-ani="slideinleft" data-ani-delay="0.7s">you need.</h1>
                                        <p class="hero-text" data-ani="slideinleft" data-ani-delay="0.8s">We help you become a leader in your industry.</p>
                                        <div class="btn-group" data-ani="slideinleft" data-ani-delay="0.9s">
                                            <a href="/services" class="as-btn">Discover More</a>
                                            <a href="/contact" class="as-btn style7">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div class="as-hero-slide">
                                <div class="hero-img" data-mask-src="assets/img/hero/hero_mask.png"><img
                                    src="assets/img/hero/hero_1_2.jpg" alt="Hero " /></div>
                                <div class="hero-shape"><img src="assets/img/hero/hero_shape_1.png" alt="shape" /></div>
                                <div class="container">
                                    <div class="hero-style1"><span class="hero-subtitle" data-ani="slideinleft" data-ani-delay="0.1s">A
                                        Trusted Marketing Agency <img src="assets/img/icon/arrow_down.svg" alt="icon" /></span>
                                        <h1 class="hero-title text-theme" data-ani="slideinleft" data-ani-delay="0.3s">Grow</h1>
                                        <h1 class="hero-title" data-ani="slideinleft" data-ani-delay="0.5s">Your</h1>
                                        <h1 class="hero-title text-theme" data-ani="slideinleft" data-ani-delay="0.7s">Business</h1>
                                        <p class="hero-text" data-ani="slideinleft" data-ani-delay="0.8s">Credibly harness compelling
                                            imperatives whereas seamless e-services. Continually extend worldwide relationships via
                                            adaptive initiatives. Compellingly.</p>
                                        <div class="btn-group" data-ani="slideinleft" data-ani-delay="0.9s">
                                            <a href="/services" class="as-btn">Discover More</a>
                                            <a href="/contact" class="as-btn style7">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        {/* <Carousel.Item>
                            <div class="as-hero-slide">
                                <div class="hero-img" data-mask-src="assets/img/hero/hero_mask.png"><img
                                    src="assets/img/hero/hero_1_3.jpg" alt="Hero" /></div>
                                <div class="hero-shape"><img src="assets/img/hero/hero_shape_1.png" alt="shape" /></div>
                                <div class="container">
                                    <div class="hero-style1"><span class="hero-subtitle" data-ani="slideinleft" data-ani-delay="0.1s">A
                                        Trusted Marketing Agency <img src="assets/img/icon/arrow_down.svg" alt="icon" /></span>
                                        <h1 class="hero-title" data-ani="slideinleft" data-ani-delay="0.3s">Get Started</h1>
                                        <h1 class="hero-title" data-ani="slideinleft" data-ani-delay="0.5s">Digital Creative</h1>
                                        <h1 class="hero-title text-theme" data-ani="slideinleft" data-ani-delay="0.7s">Platform</h1>
                                        <p class="hero-text" data-ani="slideinleft" data-ani-delay="0.8s">Credibly harness compelling
                                            imperatives whereas seamless e-services. Continually extend worldwide relationships via
                                            adaptive initiatives. Compellingly.</p>
                                        <div class="btn-group" data-ani="slideinleft" data-ani-delay="0.9s">
                                            <a href="/services" class="as-btn">Discover More</a>
                                            <a href="/contact" class="as-btn style7">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item> */}
                    </Carousel>
                </div>
                <div class="employee-box">
                    <div class="thumb-group">
                        <div class="thumb"><img src="assets/img/hero/team_1.png" alt="avater" /></div>
                        <div class="thumb"><img src="assets/img/hero/team_2.png" alt="avater" /></div>
                        <div class="thumb"><img src="assets/img/hero/team_3.png" alt="avater" /></div>
                        <div class="thumb"><img src="assets/img/hero/team_4.png" alt="avater" /></div>
                        <div class="thumb text">25+</div>
                    </div>
                    <h6 class="employee-title">30+ Employee</h6>
                    <p class="employee-text"><i class="fas fa-star me-1"></i> 4.9 (3.5k review)</p>
                </div>
                <div class="shape-mockup jump-reverse d-none d-xl-block" data-top="50%" data-left="12%"><img
                    src="assets/img/hero/shape_1.png" alt="shape" /></div>
                <div class="shape-mockup moving d-none d-xxl-block" data-bottom="20%" data-left="8%"><img
                    src="assets/img/hero/shape_2.png" alt="shape" /></div>
                <div class="shape-mockup moving" data-top="5%" data-left="54%"><img src="assets/img/hero/shape_3.png"
                    alt="shape" /></div>
                <div class="shape-mockup jump" data-top="10%" data-right="22%"><img src="assets/img/hero/shape_4.png"
                    alt="shape" /></div>
                <div class="shape-mockup jump-reverse" data-top="12%" data-right="5%"><img src="assets/img/hero/shape_5.png"
                    alt="shape" /></div>
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
                                    <h3 class="counter-title"><span class="counter-number">20</span>+</h3><span
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
            <section class="space">
                <div class="container">
                    <div class="title-area text-center"><span class="sub-title">What we do</span>
                        <h2 class="sec-title">Our Services</h2>
                        <p class="sec-text ms-auto me-auto">Globally actualize premier testing procedures and user-centric
                            e-business. Holisticly productivate cross-media core competencies for 24/7.</p>
                    </div>
                    <div class="row gy-4">
                        <div class="col-sm-6 col-lg-3 col-xl-3">
                            <div class="service-card">
                                <div class="service-card_icon"><i class="fal fa-bezier-curve"></i></div>
                                <h3 class="service-card_title"><a href="/services">General Trading</a></h3>
                                <p class="service-card_text">
                                    If you're looking to improve your online presence,
                                    increase sales, or develop a new marketing strategy,
                                    we have the expertise to help.</p><a
                                        href="/services" class="service-card_btn">Read More</a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3 col-xl-3">
                            <div class="service-card">
                                <div class="service-card_icon"><i class="fal fa-chart-line-up"></i></div>
                                <h3 class="service-card_title"><a href="/services">Business Marketing Communications</a></h3>
                                <p class="service-card_text">
                                    We offer a wide range of advertising and
                                    graphic design services, including web design,
                                    branding, re-branding, video motion, and printing.</p><a
                                        href="/services" class="service-card_btn">Read More</a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3 col-xl-3">
                            <div class="service-card">
                                <div class="service-card_icon"><i class="fal fa-layer-group"></i></div>
                                <h3 class="service-card_title"><a href="/services">Advertising</a></h3>
                                <p class="service-card_text">
                                    We design high-quality mobile devices and accessories,
                                    including our latest products: the wireless power bank and headsets.</p><a
                                        href="/services" class="service-card_btn">Read More</a>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3 col-xl-3">
                            <div class="service-card">
                                <div class="service-card_icon"><i class="fal fa-display-code"></i></div>
                                <h3 class="service-card_title"><a href="/services">Electronics Design</a></h3>
                                <p class="service-card_text">
                                    If you're looking to improve your online presence, increase sales, or develop a new marketing strategy, we have the expertise to</p><a
                                        href="/services" class="service-card_btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div class="space-top pb-60 mockup-sec1" data-bg-src="assets/img/bg/mockup_bg_1.jpg" data-overlay="title"
                data-opacity="9">
                <div class="container">
                    <div class="row flex-row-reverse">
                        <div class="col-lg-6 mb-40 mb-lg-0">
                            <div class="img-box2">
                                <div class="img1"><img src="assets/img/normal/mockup_1.jpg" alt="mockup" /></div>
                                <div class="content"><a href="tel:+250781303538" class="play-btn style3"><i
                                    class="fa-solid fa-phone"></i></a>
                                    <h3 class="h4 title">For Free Consultation</h3>
                                    <p class="text">Call: <a href="tel:+250781303538">+250 781 303 538</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 text-center text-md-start">
                            <div class="title-area mb-30"><span class="sub-title text-white">FACTS TO KNOW</span>
                                <h2 class="sec-title text-white">Grow your business & experience endless possibilities</h2>
                            </div>
                            <p class="mt-n2 mb-4 text-white">Dramatically initiate orthogonal mindshare rather than just in time
                                solutions. Interactively supply cross-media.</p><a href="/about"
                                    class="as-btn style3">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="space bg-top-right" data-bg-src="assets/img/bg/about_bg_2.png">
                <div class="container">
                    <div class="row align-items-center">

                        <div class="col-xl-6 col-lg-10">
                            <div class="ps-xl-4 ms-xl-4">
                                <div class="title-area mb-30"><span class="sub-title2"><img src="assets/img/shape/subtitle.svg"
                                    alt="Icon" /> ABOUT OUR COMPANY</span>
                                    <h2 class="sec-title">Where the best <span className='text-theme'>Starts</span></h2>
                                </div>
                                <p class="mt-n2 mb-4">
                                    We specialize in selling high-quality electronics and
                                    providing businesses with cutting-edge design and advertising solutions.</p>
                                <div class="list-column2">
                                    <div class="ticklist">
                                        <ul>
                                            <li>Powerful electronic tools</li>
                                        </ul>
                                    </div>
                                    <div class="ticklist">
                                        <ul>
                                            <li>Productive marketing solutions</li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="/about" class="as-btn gr-btn">About Us More</a>
                            </div>
                        </div>
                        <div class="col-xl-6 mb-xl-0 mb-40">
                            <div class="img-box6">
                                <div class="img1"><img src="assets/img/normal/about_4_1.png" alt="About" /></div>
                                <div class="img2"><img src="assets/img/normal/about_4_2.png" alt="About" /></div>
                                <div class="shape1"><img src="assets/img/normal/about_shape_4_1.png" alt="About" /></div>
                                <div class="shape2"><img src="assets/img/normal/about_shape_4_2.png" alt="About" /></div>
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
                                class="box-title gr-text">+250 781 303 538</span></div>
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
                            <a href="/services" class="as-btn mb-100">Learm More</a>
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

export default Home