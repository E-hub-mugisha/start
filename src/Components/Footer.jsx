import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="footer-wrapper footer-layout1" data-bg-src="assets/img/bg/footer_bg_1.jpg">
                <div class="widget-area">
                    <div class="container">
                        <div class="row justify-content-between">
                            <div class="col-md-6 col-xl-4">
                                <div class="widget footer-widget">
                                    <h3 class="widget_title">About Company</h3>
                                    <div class="as-widget-about">
                                        <p class="about-text">Intrinsicly target low-risk high-yield sources with proactive
                                            niche markets. Holisticly strategize intermandated.</p>
                                        <div class="social-box mb-30">
                                            <h6 class="social-title">Follow Us:</h6>
                                            <div class="icon-group">
                                                <a href="https://instagram.com/start_advertising?igshid=YmMyMTA2M2Y="><i class="fab fa-instagram"></i></a>
                                                <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                                <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                                                <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                        <form class="newsletter-form"><input class="form-control" type="email"
                                            placeholder="Enter Email" required="" /> <button type="submit"
                                                class="as-btn">Subscribe</button></form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-auto">
                                <div class="widget widget_nav_menu footer-widget">
                                    <h3 class="widget_title">Quick Link</h3>
                                    <div class="menu-all-pages-container">
                                        <ul class="menu">
                                            <li><a href="/about">About Us</a></li>
                                            <li><a href="/service">Services</a></li>
                                            <li><a href="/contact">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-auto">
                                <div class="widget widget_nav_menu footer-widget">
                                    <h3 class="widget_title">Services</h3>
                                    <div class="menu-all-pages-container">
                                        <ul class="menu">
                                            <li><a href="/service">General Trading</a></li>
                                            <li><a href="/service">Business Marketing <br />Communications</a></li>
                                            <li><a href="/service">Advertising</a></li>
                                            <li><a href="/service">Electronics Design</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-auto">
                                <div class="widget footer-widget">
                                    <h3 class="widget_title">Recent Posts</h3>
                                    <div class="recent-post-wrap">
                                        <div class="recent-post">
                                            <div class="media-img"><a href="/"><img
                                                src="assets/img/blog/recent-post-2-1.jpg" alt="Blog" /></a></div>
                                            <div class="media-body">
                                                <h4 class="post-title"><a class="text-inherit" href="/">App
                                                    Promotes Sales of Markets it.</a></h4>
                                                <div class="recent-post-meta"><a href="/"><i
                                                    class="fal fa-calendar-days"></i>21 June, 2022</a></div>
                                            </div>
                                        </div>
                                        <div class="recent-post">
                                            <div class="media-img"><a href="/"><img
                                                src="assets/img/blog/recent-post-2-2.jpg" alt="Blog" /></a></div>
                                            <div class="media-body">
                                                <h4 class="post-title"><a class="text-inherit" href="/">Best
                                                    Define World IT Digital Solution</a></h4>
                                                <div class="recent-post-meta"><a href="/"><i
                                                    class="fal fa-calendar-days"></i>22 June, 2022</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-wrap">
                    <div class="container">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-lg-6">
                                <p class="copyright-text">Copyright <i class="fal fa-copyright"></i> 2023 <a
                                    href="/">Start</a>. All Rights Reserved.</p>
                            </div>
                            <div class="col-lg-6 text-end d-none d-lg-block">
                                <div class="footer-links">
                                    <ul>
                                        <li><a href="/about">Privacy Policy</a></li>
                                        <li><a href="/about">Terms of Use</a></li>
                                        <li><a href="/about">Cookie Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer><a href="#" class="scrollToTop scroll-btn"><i class="far fa-long-arrow-up"></i></a>
        </div>
    )
}

export default Footer