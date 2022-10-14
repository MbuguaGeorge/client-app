import React, {useEffect} from 'react';

export default function Home() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "public/assets/js/owl.carousel.min.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script)
        }
    }, []);

    return (
        <div>
            {/* <div className="preloader">
                <div className="sk-cube-grid">
                    <div className="sk-cube sk-cube1"></div>
                    <div className="sk-cube sk-cube2"></div>
                    <div className="sk-cube sk-cube3"></div>
                    <div className="sk-cube sk-cube4"></div>
                    <div className="sk-cube sk-cube5"></div>
                    <div className="sk-cube sk-cube6"></div>
                    <div className="sk-cube sk-cube7"></div>
                    <div className="sk-cube sk-cube8"></div>
                    <div className="sk-cube sk-cube9"></div>
                </div>
            </div> */}

            <a href="/" id="scroll-top" className="back-to-top-btn"><i className="fas fa-chevron-up"></i></a>

            <header>

                <div className="header-top-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-sm-12 col-12">
                                <div className="header-top-left">
                                    <ul>
                                        <li><i className="bi bi-geo-alt"></i><a href="https://www.google.com/maps"
                                                target="_blank" rel="noreferrer">Enter street here</a></li>
                                        <li><i className="bi bi-telephone-plus"></i><a href="tel:925-1352587">enter phone number here. </a>
                                        </li>
                                        <li><i className="bi bi-envelope"></i><a
                                                href="/cdn-cgi/l/email-protection/2c45424a436c5b494e5f455849024f4341"><span
                                                    className="__cf_email__"
                                                    data-cfemail="84edeae2ebc4f3e1e6f7edf0e1aae7ebe9">[enter email here &/160;protected]</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
                                <div className="header-top-right text-end">
                                    <ul>
                                        <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="/"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav>
                    <div className="header-menu-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-2 col-lg-2 col-sm-6 col-6">
                                    <div className="logo text-left">
                                        <a href="/"><img src="assets/images/logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-sm-6 col-6">
                                    <a href="/" className="hidden-lg hamburger">
                                        <span className="h-top"></span>
                                        <span className="h-middle"></span>
                                        <span className="h-bottom"></span>
                                    </a>
                                    <nav className="main-nav">
                                        <div className="logo mobile-ham-logo d-lg-none d-block text-left">
                                            <a href="index.html"><img src="assets/images/footer-logo.png" alt="" /></a>
                                        </div>
                                        <ul>

                                            <li className="has-child-menu">
                                                <a className="active" href="/">Our Services</a>
                                                <i className="fl flaticon-plus">+</i>
                                                <ul className="sub-menu">
                                                    <li><a href="/">Academic</a></li>
                                                    <li><a href="/">Programming</a></li>
                                                    <li><a href="/">Calculations</a></li>
                                                </ul>
                                            </li>


                                            <li><a href="/">How to order</a></li>
                                            <li className="has-child-menu">


                                                <a href="/">Sample work</a>
                                                <i className="fl flaticon-plus">+</i>
                                                <ul className="sub-menu">
                                                    <li><a href="/">Business Plan</a></li>
                                                    <li><a href="/">Dissertation</a></li>
                                                    <li><a href="/">Creative Writing </a></li>
                                                    <li><a href="/">Research Paper</a></li>
                                                    <li><a href="/">Term Paper</a></li>
                                                    <li><a href="/">Article Review</a></li>
                                                    <li><a href="/">Statistics</a></li>
                                                    <li><a href="/">Engineering</a></li>
                                                    <li><a href="/">Mathematics</a></li>
                                                    <li><a href="/">Web Programming</a></li>
                                                    <li><a href="/">Database Design and Optimization</a></li>
                                                    <li><a href="/">Mobile Application Development </a></li>
                                                </ul>


                                            </li>
                                            <li className="has-child-menu">
                                                <a href="/">Blog</a>
                                                <i className="fl flaticon-plus">+</i>


                                            </li>
                                            <li className="has-child-menu">
                                                <a href="/">Latest Reviews</a>
                                                <i className="fl flaticon-plus">+</i>
                                            </li>


                                            <li><a href="/">Pricing </a></li>
                                        </ul>
                                        <div className="btn-wrap hero-btn-wrap d-block d-lg-none">
                                            <a className="common-btn menu-btn" href="/"><i
                                                    className="fas fa-plus"></i>Order Now</a>
                                        </div>
                                    </nav>
                                </div>


                                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                    <div className="btn-wrap menu-btn-wrap text-end">
                                        <a className="common-btn menu-btn" href="/"><i className="fas fa-plus"></i>Order
                                            Now</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


                <div className="hero-area ">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12 d-flex justify-content-end">
                                <div className="hero-content">
                                    <div className="single-hero-content">
                                        <h6>Company Name </h6>
                                        <h1>We deliver only <br/> the best services</h1>
                                        <p>Our company is designed to deliver only the best work. We hire only the top notch experts. Hiring a professional expert will provide you with qualified and unique paper assistance.</p>
                                        <div className="hero-btn-wrap mt-50">
                                            <a className="common-btn hero-btn" href="/"><i className="fas fa-plus"></i>Write
                                                my paper</a>
                                            <span><a className="common-btn hero-btn-2" href="/"><i
                                                        className="fas fa-plus"></i>My Account</a></span>
                                        </div>
                                    </div>

                                    <div className="single-hero-content">
                                        <h6>Company Name </h6>
                                        <h1>We deliver only <br/> the best services</h1>
                                        <p>Our company is designed to deliver only the best work. We only hire only the top notch experts. Hiring a professional expert will provide you with qualified and unique paper assistance.</p>
                                        <div className="hero-btn-wrap mt-50">
                                            <a className="common-btn hero-btn" href="/"><i className="fas fa-plus"></i>Write
                                                my Paper</a>
                                            <span><a className="common-btn hero-btn-2" href="/"><i
                                                        className="fas fa-plus"></i>My Account</a></span>
                                        </div> 
                                    </div>

                                    <div className="single-hero-content">
                                        <h6>Company Name </h6>
                                        <h1>We provide only <br/> the best services</h1>
                                        <p>Our company is designed to deliver only the best work. We only hire only the top notch experts. Hiring a professional expert will provide you with qualified and unique paper assistance.</p>
                                        <div className="hero-btn-wrap mt-50">
                                            <a className="common-btn hero-btn" href="/"><i className="fas fa-plus"></i>Read
                                                More</a>
                                            <span><a className="common-btn hero-btn-2" href="/"><i
                                                        className="fas fa-plus"></i>Contact Us</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12 p-0 mobt-50">
                                <div className="hero-img-wrap">
                                    <div className="single-hero-img">
                                        <img src="assets/images/hero-bg-img-1.png" alt="" />
                                        <div className="video-play">
                                            <a href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                                                className="popup-youtube video-icon"><i className="bx bx-play"></i></a>
                                        </div>
                                    </div>


                                    <div className="single-hero-img">
                                        <img src="assets/images/hero-bg-img-2.png" alt="" />
                                        <div className="video-play">
                                            <a href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                                                className="popup-youtube video-icon"><i className="bx bx-play"></i></a>
                                        </div>
                                    </div>


                                    <div className="single-hero-img">
                                        <img src="assets/images/hero-bg-img-1.png" alt="" />
                                        <div className="video-play">
                                            <a href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                                                className="popup-youtube video-icon"><i className="bx bx-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>


    <div className="about-us-area mt-100">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-sm-12 col-12 wow animate fadeInLeft" data-wow-delay="0ms"
                    data-wow-duration="1500ms">
                    <div className="about-left">
                        <img src="assets/images/about-left.png" alt="" />
                    </div>
                </div>


                <div className="col-xl-6 col-lg-6 col-sm-12 col-12 mobt-50">
                    <div className="about-right">
                        <div className="section-title about-section-title">
                            <h6>About Us</h6>
                            <h1>The ultimate accolade across all fields.</h1>
                        </div>
                        <p>A platform for professional writing and development called 
                            Company Name links skilled experts with anyone who requires a top-notch outcome inside an affordable price range. </p>
                        <p style={{marginBottom: '25px'}}>qWe have come a long way in our mission to provide economic possibilities so that people might live better lives.
                            As a result, we have evolved into the global work marketplace where companies of all sizes and freelancers from all over the world join together daily to do amazing things.
                            Use this pool of independent talent if you are a client who has come to us to get things done in order to alter your company and build more quickly.
                            If you're a talented independent person who has come here to fulfill your potential, know that you are an important and useful member of someone's team.</p>

                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-sm-4 col-12 wow animate fadeInUp" data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                <div className="about-feature text-center">
                                    <i className="flaticon-conversation"></i>
                                    <p>Creative Team</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-sm-4 col-12 wow animate fadeInUp" data-wow-delay="300ms"
                                data-wow-duration="1500ms">
                                <div className="about-feature text-center">
                                    <i className="flaticon-partnership"></i>
                                    <p>Friendly Support</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-sm-4 col-12 wow animate fadeInUp" data-wow-delay="600ms"
                                data-wow-duration="1500ms">
                                <div className="about-feature text-center">
                                    <i className="flaticon-save-time"></i>
                                    <p>Save Your Time</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-sm-4 col-12 wow animate fadeInUp" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="about-feature text-center">
                                <i className="flaticon-conversation"></i>
                                <p>Original Samples</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-4 col-12 wow animate fadeInUp" data-wow-delay="300ms"
                            data-wow-duration="1500ms">
                            <div className="about-feature text-center">
                                <i className="flaticon-partnership"></i>
                                <p>Strict deadlines</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-4 col-12 wow animate fadeInUp" data-wow-delay="600ms"
                            data-wow-duration="1500ms">
                            <div className="about-feature text-center">
                                <i className="flaticon-save-time"></i>
                                <p>Available 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="service-area mt-100 mb-76">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                                <div className="section-title service-section-title text-center">
                                    <h6>Services</h6>
                                    <h1>Our team offers...</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-50">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="service-wrap">
                                    <div className="service-icon">
                                        <img src="assets/images/service-icon-bg.png" alt="" />
                                        <i className="flaticon-web-maintenance"></i>
                                        <span>01</span>
                                    </div>
                                    <div className="service-content">
                                        <h6>Creative Writing</h6>
                                        <p> Autobiography, flash fiction, Novel, play, poetry, screenplay and short stories.</p>
                                        <a href="/">FInd More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="service-wrap">
                                    <div className="service-icon">
                                        <img src="assets/images/service-icon-bg.png" alt="" />
                                        <i className="flaticon-ui"></i>
                                        <span>02</span>
                                    </div>
                                    <div className="service-content">
                                        <h6>Research Paper</h6>
                                        <p>Analytical, compare and constrast, interpretative, Survey research paper, and exploratory research paper.</p>
                                        <a href="/">FInd More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-wrap">
                                    <div className="service-icon">
                                        <img src="assets/images/service-icon-bg.png" alt="" />
                                        <i className="flaticon-code"></i>
                                        <span>03</span>
                                    </div>
                                    <div className="service-content">
                                        <h6>Term Paper </h6>
                                        <p>Get a term paper in any format including IEEE.</p>
                                        <a href="/">FInd More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="service-wrap">
                                    <div className="service-icon">
                                        <img src="assets/images/service-icon-bg.png" alt="" />
                                        <i className="flaticon-computer"></i>
                                        <span>04</span>
                                    </div>
                                    <div className="service-content">
                                        <h6>Dissertation</h6>
                                        <p>Introduction, Review of Literature, methodology, Results, summary and discussion.</p>
                                        <a href="/">FInd More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="service-wrap">
                                    <div className="service-icon">
                                        <img src="assets/images/service-icon-bg.png" alt="" />
                                        <i className="flaticon-hosting"></i>
                                        <span>05</span>
                                    </div>
                                    <div className="service-content">
                                        <h6>Statistics</h6>
                                        <p>Experiments and Sampling, probability, hypothesis, linear reggresion, correlation.</p>
                                        <a href="/">FInd More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="500ms" data-wow-duration="1500ms">
                                <div className="service-wrap">
                                    <div className="service-icon">
                                        <img src="assets/images/service-icon-bg.png" alt="" />
                                        <i className="flaticon-3d-modeling"></i>
                                        <span>06</span>
                                    </div>
                                    <div className="service-content">
                                        <h6>Mathematics</h6>
                                        <p>Algebra, trigonometry, matrix, geometry, calculus, rate & proportion, percentages...etc.</p>
                                        <a href="/">FInd More </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="service-wrap">
                                    <div className="service-icon">
                                        <img src="assets/images/service-icon-bg.png" alt="" />
                                        <i className="flaticon-animation"></i>
                                        <span>07</span>
                                    </div>
                                    <div className="service-content">
                                        <h6>Engineering</h6>
                                        <p>Robotics, machine learning,. automation, mechanical Engineering, electrical Engineering, ...etc.</p>
                                        <a href="/">FInd More </a>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="service-wrap">
                                    <div className="service-icon">
                                        <img src="assets/images/service-icon-bg.png" alt="" />
                                        <i className="flaticon-animation"></i>
                                        <span>08</span>
                                    </div>
                                    <div className="service-content">
                                        <h6>Chemistry</h6>
                                        <p>Thermo-chemistry, electrochemistry, periodic table, chemical bonding, organic, inorganic chemistry,...etc.</p>
                                        <a href="/">FInd More </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="service-wrap">
                                    <div className="service-icon">
                                        <img src="assets/images/service-icon-bg.png" alt="" />
                                        <i className="flaticon-animation"></i>
                                        <span>09</span>
                                    </div>
                                    <div className="service-content">
                                        <h6>Web Programming</h6>
                                        <p>HTML, Javascript, CSS, Python, PHP, RUBY, C/, JAVA, C++,...etc.</p>
                                        <a href="/">FInd More </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="service-wrap">
                                    <div className="service-icon">
                                        <img src="assets/images/service-icon-bg.png" alt="" />
                                        <i className="flaticon-animation"></i>
                                        <span>10</span>
                                    </div>
                                    <div className="service-content">
                                        <h6>Mobile App Development</h6>
                                        <p>Android and IOS application development</p>
                                        <a href="/">FInd More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="service-wrap">
                                    <div className="service-icon">
                                        <img src="assets/images/service-icon-bg.png" alt="" />
                                        <i className="flaticon-animation"></i>
                                        <span>11</span>
                                    </div>
                                    <div className="service-content">
                                        <h6>Database Design and Optimization</h6>
                                        <p>MYSQL, SQL, ORACLE, Postgresql, MongoDB, EER diagrams,...etc.</p>
                                        <a href="/">FInd More </a>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="700ms" data-wow-duration="1500ms">
                                <div className="service-wrap">
                                    <div className="service-icon">
                                        <img src="assets/images/service-icon-bg.png" alt="" />
                                        <i className="flaticon-3d"></i>
                                        <span>12</span>
                                    </div>
                                    <div className="service-content">
                                        <h6>Graphic Design </h6>
                                        <p>Logo design, web design, book covers, product labels, business cards, software interfaces,...etc.</p>
                                        <a href="/">FInd More </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    </div>

    {/* How to make an order */}

    
    <div className="history-area mt-100">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-8 col-sm-12 col-12">
        <div className="section-title history-section-title text-center">
        <h6>How our company works. </h6>
        <h1>Perfect Solution Makes a Success.</h1>
        </div>
        </div>
        </div>
        </div>
        <div className="timeline mt-50">
        <div className="container">
        <div className="row">
        <div className="col-lg-12">
        <div className="timeline-container">
        <div className="timeline-continue">
        <div className="row timeline-right">
        <div className="col-md-6">
        <p className="timeline-date">
        01
        </p>
        </div>
        <div className="col-md-6">
        <div className="timeline-box">
        <div className="timeline-icon">
        </div>
        <div className="timeline-text">
        <p>Placing an Order </p>
        <h3> Step One</h3>
        <p>Press the <a href="/">g</a> button to navigate to the order page. Fill out the order form. 
            Provide any extra details regardding the work to provide more clarity. Provide any necesary attachment..</p>
         </div>
        </div>
        </div>
        </div>
        <div className="row timeline-left">
        <div className="col-md-6 d-md-none d-block">
        <p className="timeline-date">
        02
        </p>
        </div>
        <div className="col-md-6">
        <div className="timeline-box">
        <div className="timeline-icon d-md-none d-block">
        </div>
        <div className="timeline-text">
        <p>Account </p>
        <h3>Step 2</h3>
        <p>All our customers have an account. An account helps you track the order progress. An existing customer will be redirected to the dashboard after placing ane order. A new customer will be redirected to the registration page.</p>
        </div>
        <div className="timeline-icon d-md-block d-none">
        </div>
        </div>
        </div>
        <div className="col-md-6 d-md-block d-none">
        <p className="timeline-date">
        02
        </p>
        </div>
        </div>
        <div className="row">
        <div className="col-12">
        </div>
        </div>
        <div className="row timeline-right">
        <div className="col-md-6">
        <p className="timeline-date">
        03
        </p>
        </div>
        <div className="col-md-6">
        <div className="timeline-box">
        <div className="timeline-icon">
        </div>
        <div className="timeline-text">
        <p>Payment</p>
        <h3>Step 3</h3>
        <p>Choose your preferred mode of payment. Making a payments provides a guarantee to our team that the client is serious. It also helps us match the work with the best expert. </p>
        </div>
        </div>
        </div>
        </div>
        <div className="row timeline-left">
        <div className="col-md-6 d-md-none d-block">
        <p className="timeline-date">
        03
        </p>
        </div>
        <div className="col-md-6">
        <div className="timeline-box">
        <div className="timeline-icon d-md-none d-block">
        </div>
        <div className="timeline-text">
        <p>Expertise Selection </p>
        <h3>Step 4</h3>
        <p>Our team matches the work with the best experts on that area. Selection of an expert depends on the clients service selection including extra services.</p>
        </div>
        <div className="timeline-icon d-md-block d-none">
        </div>
        </div>
        </div>
        <div className="col-md-6 d-md-block d-none">
        <p className="timeline-date">
        04
        </p>
        </div>
        </div>
        <div className="row timeline-right">
        <div className="col-md-6">
        <p className="timeline-date">
        05
        </p>
        </div>
        <div className="col-md-6">
        <div className="timeline-box">
        <div className="timeline-icon">
        </div>
        <div className="timeline-text">
        <p>Tracking Order Progress</p>
        <h3>Step 5</h3>
        <p>After placing an order, the order will appear on the dashboard. The only thing remaining is you to wait for order delivery. You can also ask about the order progress by sending a message to the support team</p>
        </div>
        </div>
        </div>
        </div>
        <div className="row timeline-left">
        <div className="col-md-6 d-md-none d-block">
        <p className="timeline-date">
        01
        </p>
        </div>
        <div className="col-md-6">
        <div className="timeline-box">
        <div className="timeline-icon d-md-none d-block">
        </div>
        <div className="timeline-text">
        <p>Receive Order and Rate</p>
        <h3>Step 6</h3>
        <p>After the order is completed, its placed on the dashboard and a message is sent to the client informing them about order delivery. The only thing now left is rating our services and making anothe order if you found our servic es top notch.</p>
        </div>
        <div className="timeline-icon d-md-block d-none">
        </div>
        </div>
        </div>
        <div className="col-md-6 d-md-block d-none">
        <p className="timeline-date">
        06
        </p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>


                <div className="team-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                                <div className="section-title team-section-title text-center">
                                    <h6>Our Team</h6>
                                    <h1>Meet some of the team members</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="team-wrap owl-carousel">
                                <div className="single-team text-center">
                                    <div className="team-top-section">
                                        <img src="assets/images/team/team-img-17.png" alt="" />

                                    </div>
                                    <div className="team-content">
                                        <h5>Devid Miller</h5>
                                        <h6>Finance Officer</h6>
                                    </div>
                                </div>
                                <div className="single-team text-center">
                                    <div className="team-top-section">
                                        <img src="assets/images/team/team-img-1.png" alt="" />
                                    </div>

                                    <div className="team-content">
                                        <h5>Khagiso Nool</h5>
                                        <h6>Quality Assurance Officer</h6>
                                    </div>
                                </div>
                                <div className="single-team text-center">
                                    <div className="team-top-section">
                                        <img src="assets/images/team/quality assurance officer.jpg" alt="" />
                                    </div>

                                    <div className="team-content">
                                        <h5>Miley Chen</h5>
                                        <h6>Project Manager</h6>
                                    </div>
                                </div>
                                <div className="single-team text-center">
                                    <div className="team-top-section">
                                        <img src="assets/images/team/project manager.jpg" alt="" />
                                    </div>

                                    <div className="team-content">
                                        <h5>Miley Chen</h5>
                                        <h6>Developer</h6>
                                    </div>
                                </div>
                                <div className="single-team text-center">
                                    <div className="team-top-section">
                                        <img src="assets/images/team/team-img-15.png" alt="" />
                                    </div>
                                    
                                    <div className="team-content">
                                        <h5>Miley Chen</h5>
                                        <h6>Web  Designer</h6>
                                    </div>
                                </div>
                                <div className="single-team text-center">
                                    <div className="team-top-section">
                                        <img src="assets/images/team/team-img-4.png" alt="" />
                                    </div>
                                    
                                    <div className="team-content">
                                        <h5>Miley Chen</h5>
                                        <h6>Content Writer</h6>
                                    </div>
                                </div>
                                <div className="single-team text-center">
                                    <div className="team-top-section">
                                        <img src="assets/images/team/team-img-6.png" alt="" />
                                    </div>
                                    

                                    <div className="team-content">
                                        <h5>Watson Sil</h5>
                                        <h6>App Developer</h6>
                                    </div>
                                </div>
                                <div className="single-team text-center">
                                    <div className="team-top-section">
                                        <img src="assets/images/team/team-img-8.png" alt="" />
                                    </div>
                                    <div className="team-content">
                                        <h5>Devid Miller</h5>
                                        <h6>Technial Writer</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="cta-area mt-100 company-statistics-area ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-sm-12 col-12">
                                <div className="cta-content text-center">
                                    <h1>Do You Have A Project In <br/> Your Mind</h1>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12 wow animate fadeInUp"
                                            data-wow-delay="100ms" data-wow-duration="1500ms">
                                            <div className="cta-btn-wrap">
                                                <a className="common-btn cta-btn" href="/"><i
                                                        className="fas fa-plus"></i>Order Now</a>
                                                <span><a className="common-btn cta-btn-2" href="/"><i
                                                            className="fas fa-plus"></i>Contact Us</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="assets/images/statistics-shape-middle.png"
                        style={{position: 'absolute', left: '70%', top: '0', zIndex: '0'}} alt="" />
                    <img src="assets/images/cta-shape-1.png" style={{position: 'absolute', left: '0', top: '60px', zIndex: '0'}}
                        alt="" />
                </div>

                <br/> <br/>


                <div className="testimonial-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                                <div className="section-title testimonial-title text-center">
                                    <br/>
                                    <h6>Reviews</h6>
                                    <h1>What Customers Say About Us</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-50 justify-content-center">
                            <div className="col-xl-6 col-lg-10 col-sm-12 col-12">
                                <div className="testimonial-image text-center">
                                    <div className="single-testimonial-image">
                                        <img src="assets/images/testimonial-img-1.png" alt="" />
                                    </div>
                                    <div className="single-testimonial-image">
                                        <img src="assets/images/testimonial-img-2.png" alt="" />
                                    </div>
                                    <div className="single-testimonial-image">
                                        <img src="assets/images/testimonial-img-5.png" alt="" />
                                    </div>
                                    <div className="single-testimonial-image">
                                        <img src="assets/images/testimonial-img-4.png" alt="" />
                                    </div>
                                    <div className="single-testimonial-image">
                                        <img src="assets/images/testimonial-img-3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-sm-12 col-12 wow animate fadeInUp"
                                data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="testimonial-content-wrap text-center">
                                    <div className="single-testimonial-content">
                                        <h2>Alen </h2>
                                        <h4>Ukraine</h4>
                                        <p>Great work will recommend.</p>
                                    </div>
                                    <div className="single-testimonial-content">
                                        <h2>Miller</h2>
                                        <h4>Australia</h4>
                                        <p>My suggestions were well considered by the designer, who worked diligently to produce a high-quality final product.</p>
                                    </div>
                                    <div className="single-testimonial-content">
                                        <h2>Watson</h2>
                                        <h4>United States</h4>
                                        <p>Excellent talents, excellent communication, and project completed much earlier than expected.
                                            I'd be happy to collaborate with Volodumur once more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="blog-area mt-100 mb-76">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                <div className="blog-left">
                                    <div className="section-title blog-section-title">
                                        <h6>Our Blog</h6>
                                        <h1>Check Our Recent Blogs</h1>
                                    </div>
                                    <p>Our blog helps keep you with up to date news, technology and other areas related to our services. Please subscribe so that you may never miss our newly written pieces</p>
                                    <div className="blog-btn-wrap wow animate fadeInUp" data-wow-delay="600ms"
                                        data-wow-duration="1500ms">
                                        <a className="common-btn blog-btn" href="/"><i
                                                className="fas fa-plus"></i>Explore More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-sm-6 col-12 wow animate fadeInUp" data-wow-delay="0ms"
                                data-wow-duration="1500ms">
                                <div className="blog-wrap">
                                    <div className="blog-img">
                                        <a href="/"><img src="assets/images/blog-img-1.png"
                                                alt="" /></a>
                                        <div className="blog-date">
                                            <span><i className="far fa-calendar-alt"></i>September 1, 2022</span>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <div className="meta-left">
                                                <a href="/"><img
                                                        src="assets/images/blog-author-1.png" alt="" />
                                                    <span>By John Smith </span></a>
                                            </div>
                                            <div className="meta-right">
                                                <a href="/"><i className="far fa-comments"></i>
                                                    <span>Comment(05)</span></a>
                                            </div>
                                        </div>
                                        <h5><a href="/">Topic One</a></h5>
                                        <div className="blog-btn service-content">
                                            <a href="/">Learn More </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-sm-6 col-12 wow animate fadeInUp" data-wow-delay="300ms"
                                data-wow-duration="1500ms">
                                <div className="blog-wrap">
                                    <div className="blog-img">
                                        <a href="/"><img src="assets/images/blog-img-2.png"
                                                alt="" /></a>
                                        <div className="blog-date">
                                            <span><i className="far fa-calendar-alt"></i>November 1, 2022</span>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <div className="meta-left">
                                                <a href="/"><img
                                                        src="assets/images/blog-author-2.png" alt="" />
                                                    <span>By John Smith </span></a>
                                            </div>
                                            <div className="meta-right">
                                                <a href="/"><i className="far fa-comments"></i>
                                                    <span>Comment(05)</span></a>
                                            </div>
                                        </div>
                                        <h5><a href="/">Topic 2.</a></h5>
                                        <div className="blog-btn service-content">
                                            <a href="/">FInd More </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                                <div className="footer-wrap">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-sm-12 col-12">
                                            <div className="single-widget ">
                                                <div className="footer-logo">
                                                    <a href="index.html"><img src="assets/images/footer-logo.png"
                                                            alt="" /></a>
                                                    <p>We provide only the best services. We hire only the to notch experts . Hiring a professional expert will provide you with time qualified and unique assistance.</p>
                                                </div>
                                                <div className="footer-social">
                                                    <ul>
                                                        <li className="wow animate fadeInLeft" data-wow-delay="0ms"
                                                            data-wow-duration="1500ms"><a href="/"><i
                                                                    className="fab fa-facebook-f"></i></a></li>
                                                        <li className="wow animate fadeInLeft" data-wow-delay="100ms"
                                                            data-wow-duration="1500ms"><a href="/"><i
                                                                    className="fab fa-instagram"></i></a></li>
                                                        <li className="wow animate fadeInLeft" data-wow-delay="200ms"
                                                            data-wow-duration="1500ms"><a href="/"><i
                                                                    className="fab fa-twitter"></i></a></li>
                                                        <li className="wow animate fadeInLeft" data-wow-delay="300ms"
                                                            data-wow-duration="1500ms"><a href="/"><i
                                                                    className="fab fa-linkedin-in"></i></a></li>
                                                        <li className="wow animate fadeInLeft" data-wow-delay="400ms"
                                                            data-wow-duration="1500ms"><a href="/"><i
                                                                    className="fab fa-pinterest-p"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-sm-6 col-4">
                                            <div className="single-widget">
                                                <div className="footer-title">
                                                    <h4>Explore</h4>
                                                    <div className="footer-link">
                                                        <ul>
                                                            <li><a href="/">Our Services</a></li>
                                                            <li><a href="/">About Us</a></li>
                                                            <li><a href="/">Meet Our Team</a></li>
                                                            <li><a href="/">Our Services</a></li>
                                                            <li><a href="/">Our Blog</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-sm-6 col-8">
                                            <div className="single-widget">
                                                <div className="footer-title">
                                                    <h4>Contact Us</h4>
                                                    <div className="footer-address">
                                                        <i className="bx bxs-phone"></i>
                                                        <span><a href="tel:123456781233">+1234 5678 1233</a> <br/> <a
                                                                href="tel:123445651343">+1234 4565 1343</a></span>
                                                    </div>
                                                    <div className="footer-address">
                                                        <i className="bx bx-envelope-open"></i>
                                                        <span><a
                                                                href="/cdn-cgi/l/email-protection/3a53545c557a5f425b574a565f14595557"><span
                                                                    className="__cf_email__"
                                                                    data-cfemail="026b6c646d42677a636f726e672c616d6f">[email&/160;protected]</span></a>
                                                            <br/><a
                                                                href="/cdn-cgi/l/email-protection/d9b0b7bfb699bca1b8b4a9b5bcf7bab6b4"><span
                                                                    className="__cf_email__"
                                                                    data-cfemail="4d3e383d3d223f390d28352c203d2128632e2220">[email&/160;protected]</span></a></span>
                                                    </div>
                                                    <div className="footer-address">
                                                        <i className="bx bx-location-plus"></i>
                                                        <span>3102 Bartlett Avenue <br/> Southfield, MI 48075</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
                                            <div className="single-widget">
                                                <div className="footer-title">
                                                    <h4>Newsletter</h4>
                                                    <form action="index.html" className="footer-news-form">
                                                        <input type="text" placeholder="Enter Your Email" />
                                                        <button>Subscribe</button>
                                                    </form>
                                                </div>
                                                <div className="footer-title">
                                                    <h4>New Post</h4>
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-12 col-sm-6 col-12 wow animate fadeInUp"
                                                            data-wow-delay="0ms" data-wow-duration="1500ms">
                                                            <div className="footer-post-wrap">
                                                                <div className="footer-post-img">
                                                                    <a href="/"><img
                                                                            src="assets/images/footer-post-img-1.png"
                                                                            alt="" /></a>
                                                                </div>
                                                                <div className="footer-post-content">
                                                                    <h6><a href="/">Topic 1</a></h6>
                                                                    <h6>November 30, 2022</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-12 col-sm-6 col-12 wow animate fadeInUp"
                                                            data-wow-delay="300ms" data-wow-duration="1500ms">
                                                            <div className="footer-post-wrap">
                                                                <div className="footer-post-img">
                                                                    <a href="/"><img
                                                                            src="assets/images/footer-post-img-2.png"
                                                                            alt="" /></a>
                                                                </div>
                                                                <div className="footer-post-content">
                                                                    <h6><a href="/">Topic 2
                                                                        </a></h6>
                                                                    <h6>November 02, 2022</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                                <div className="copy-right-area text-center">
                                    <p className="copy-text">Copyright 2022 Klaus | Design By <a href="/">Klaus
                                            Lab</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="footer-bottom-shape" src="assets/images/footer-shape-3.png" alt="" />
                </div>
            </div>
        </div>
    )
}