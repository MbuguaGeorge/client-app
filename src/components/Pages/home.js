import React, {useState, useEffect} from 'react';
import './pages.css';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Carousel from 'react-bootstrap/Carousel';
import about_pic from '../images/about-left.png';
import author1 from '../images/blog-author-1.png';
import blogimg from '../images/blog-img-1.png';
import author2 from '../images/blog-author-2.png';
import blogimg2 from '../images/blog-img-2.png';
import hero1 from '../images/hero-bg-img-1.png';
import hero2 from '../images/hero-bg-img-2.png';
import testimonial1 from '../images/testimonial-img-3.png';
import testimonial2 from '../images/testimonial-img-2.png';
import testimonial3 from '../images/testimonial-img-5.png';

export default function Home(){

    const [open, setOpen] = useState(false);
    const [samples, setSamples] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // slidenavbar
    const [isExpanded, setIsExpanded] = useState(false);

    // carousel
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 200){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    });

    let navbarClasses = ['navigation'];
    
    if(scrolled){
        navbarClasses.push('scrolled')
    };

    const handleOpenOptions = () => {
        setOpen(!open)
        setSamples(false)
    };

    const handleOpenSamples = () => {
        setSamples(!samples)
        setOpen(false)
    };

    let displayOptions, displayIcon, displaySamples, sampleIcon;

    if(open === true){
        displayOptions = (
            <div className="services-container">
                <div className="services-options">
                    <ul>
                        <li>Academic Writing</li>
                        <li>Programming Assignment</li>
                        <li>Calculations Assignment</li>
                    </ul>
                </div>
            </div>
        )
        displayIcon = (
            <ExpandLessIcon />
        )
    } else if(open === false) {
        displayIcon = (
            <ExpandMoreIcon />
        )
    };

    if(samples === true){
        displaySamples = (
                <div className="sample-work-container">
                    <div className="sample-work">
                        <ul>
                            <li>Business Plan</li>
                            <li>Dissertation</li>
                            <li>Creative Writing</li>
                            <li>Research paper</li>
                            <li>Term Paper</li>
                            <li>Article Review</li>
                            <li>Statistics</li>
                            <li>Engineering</li>
                            <li>Mathematics</li>
                            <li>Web Programming</li>
                            <li>Database Design and Optimization</li>
                            <li>Mobile Application Development</li>
                        </ul>
                    </div>
                </div>
        )
        sampleIcon = (
            <ExpandLessIcon />
        )
    } else if(samples === false) {
        sampleIcon = (
            <ExpandMoreIcon />
        )
    };

    return (
        <div className='home-container'>
            <div className={navbarClasses.join(" ")}>

                <div className={isExpanded ? "navlinks expanded" : "navlinks"}>
                    <ul>
                        <li onClick={handleOpenOptions}>Our Services <span>{displayIcon}</span></li>
                        <li>How to Order</li>
                        <li onClick={handleOpenSamples}>Sample Work {sampleIcon}</li>
                        <li>Blog</li>
                        <li>Latest Reviews</li>
                        <li>Pricing</li>
                    <div className="order-slidebar">
                        <Link to="/log" style={{textDecoration: 'none'}}><li><Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />} style={{width: '130px', padding: '8px 0'}} >Order now</Button></li></Link>
                    </div>
                    </ul>
                </div>

                {displayOptions}

                {displaySamples}

                <div className="logo">
                    <ul>
                        <li>Elency</li>
                        <Link to="/log" style={{textDecoration: 'none'}}><li><Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />} style={{width: '130px', padding: '8px 0'}} >Order now</Button></li></Link>
                    </ul>
                </div>

                <div className="hamburger">
                    <h1>Elency</h1>
                    <div className="hamburg-menu" onClick={() => setIsExpanded(!isExpanded)}>
                        <span className="h-top"></span>
                        <span className="h-middle"></span>
                        <span className="h-bottom"></span>
                    </div>
                </div>

            </div>

            <div className="home-carousel">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className="carousel1">
                            <div className="caption">
                                <h1>We Provide Only <br className="hide-breakline"/> The Best Services</h1>
                                <p>Our company is designed to deliver only the best work. We only hire the top notch experts. Hiring a professional expert will provide you with qualified and unique paper assistance.</p>
                                <div className="carousel-links">
                                    <Link to="/log" style={{textDecoration: 'none'}}><li><Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />} style={{width: '150px', padding: '8px 5px'}} >Place Order</Button></li></Link>
                                    <Link to="/register" style={{textDecoration: 'none'}}><li><Button variant="contained" size="small" style={{width: '150px', padding: '8px 5px'}} >Create Account</Button></li></Link>
                                </div>
                            </div>
                            <div className="caption-img">
                                <img src={hero1} alt="hero" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel1">
                            <div className="caption">
                                <h1>We Provide Only <br className="hide-breakline"/> The Best Services</h1>
                                <p>Our company is designed to deliver only the best work. We only hire the top notch experts. Hiring a professional expert will provide you with qualified and unique paper assistance.</p>
                                <div className="carousel-links">
                                    <Link to="/log" style={{textDecoration: 'none'}}><li><Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />} style={{width: '150px', padding: '8px 5px'}} >Place Order</Button></li></Link>
                                    <Link to="/" style={{textDecoration: 'none'}}><li><Button variant="contained" size="small" style={{width: '150px', padding: '8px 5px'}} >Create Account</Button></li></Link>
                                </div>
                            </div>
                            <div className="caption-img">
                                <img src={hero2} alt="hero" />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

                <div className="about">
                    <div className="about-pic">
                        <img src={about_pic} alt="about-left" />
                    </div>
                    <div className="about-content">
                        <h1>About Us</h1>
                        <h2>The ultimate accolade across all <br className="hide-breakline" /> fields.</h2>
                        <p>A platform for professional writing and development called Company Name links skilled experts with anyone who requires a top-notch outcome inside an affordable price range.<br/>
                        <br/>
                        We have come a long way in our mission to provide economic possibilities so that people might live better lives. As a result, we have evolved into the global work marketplace where companies of all sizes and freelancers from all over the world join together daily to do amazing things. Use this pool of independent talent if you are a client who has come to us to get things done in order to alter your company and build more quickly. If you're a talented independent person who has come here to fulfill your potential, know that you are an important and useful member of someone's team.</p>

                        <div className="about-cards">
                            <ul>
                                <li>Creative Team</li>
                                <li>Friendly Support</li>
                                <li>Save Your Time</li>
                            </ul>
                            <ul>
                                <li>Original Samples</li>
                                <li>Strict Deadlines</li>
                                <li>Available 24/7</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-contain">
                    <div className="services">
                        <div className="services-title">
                            <h1>Services</h1>
                            <h2>Our team offers...</h2>
                        </div>

                        <div className="services-examples">
                            <ul>
                                <li>
                                    <h3>Creative Writing</h3>
                                    <p>Autobiography, flash fiction, Novel, play, poetry, screenplay and short stories.</p>
                                    <h5>Find more</h5>
                                </li>
                                <li>
                                    <h3>Research Paper</h3>
                                    <p>Analytical, compare and constrast, interpretative, Survey research paper, and exploratory research paper.</p>
                                    <h5>Find more</h5>
                                </li>
                                <li>
                                    <h3>Term Paper</h3>
                                    <p>Get a term paper in any format including IEEE.</p>
                                    <h5>Find more</h5>
                                </li>
                                <li>
                                    <h3>Dissertation</h3>
                                    <p>Get a term paper in any format including IEEE.</p>
                                    <h5>Find more</h5>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <h3>Statistics</h3>
                                    <p>Experiments and Sampling, probability, hypothesis, linear reggresion, correlation.</p>
                                    <h5>Find more</h5>
                                </li>
                                <li>
                                    <h3>Mathematics</h3>
                                    <p>Algebra, trigonometry, matrix, geometry, calculus, rate & proportion, percentages...etc.</p>
                                    <h5>Find more</h5>
                                </li>
                                <li>
                                    <h3>Engineering</h3>
                                    <p>Algebra, trigonometry, matrix, geometry, calculus, rate & proportion, percentages...etc</p>
                                    <h5>Find more</h5>
                                </li>
                                <li>
                                    <h3>Chemistry</h3>
                                    <p>Thermo-chemistry, electrochemistry, periodic table, chemical bonding, organic, inorganic chemistry,...etc.</p>
                                    <h5>Find more</h5>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <h3>Web Programming</h3>
                                    <p>HTML, Javascript, CSS, Python, PHP, RUBY, C#, JAVA, C++,...etc.</p>
                                    <h5>Find more</h5>
                                </li>
                                <li>
                                    <h3>Mobile App Development</h3>
                                    <p>Android and IOS application development</p>
                                    <h5>Find more</h5>
                                </li>
                                <li>
                                    <h3>Database Design and Optimization</h3>
                                    <p>MYSQL, SQL, ORACLE, Postgresql, MongoDB, EER diagrams,...etc.</p>
                                    <h5>Find more</h5>
                                </li>
                                <li>
                                    <h3>Graphic Design</h3>
                                    <p>Logo design, web design, book covers, product labels, business cards, software interfaces,...etc.</p>
                                    <h5>Find more</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="order-process-container">
                    <div className="order-process">
                        <h1>How our company works</h1>
                        <h2>Perfect Solution Makes a Success.</h2>
                    </div>
                    <div className="alternate-process">
                        <div className="right-process">
                            <h3>Placing an Order</h3>
                            <h4>Step 1</h4>
                            <p>Press the button to navigate to the order page. Fill out the order form. Provide any extra details regardding the work to provide more clarity. Provide any necesary attachment.</p>
                        </div>
                        <div className="left-process">
                            <h3>Account</h3>
                            <h4>Step 2</h4>
                            <p>All our customers have an account. An account helps you track the order progress. An existing customer will be redirected to the dashboard after placing ane order. A new customer will be redirected to the registration page.</p>
                        </div>
                        <div className="right-process">
                            <h3>Payment</h3>
                            <h4>Step 3</h4>
                            <p>Choose your preferred mode of payment. Making a payments provides a guarantee to our team that the client is serious. It also helps us match the work with the best expert.</p>
                        </div>
                        <div className="left-process">
                            <h3>Expertise Selection</h3>
                            <h4>Step 4</h4>
                            <p>Our team matches the work with the best experts on that area. Selection of an expert depends on the clients service selection including extra services.</p>
                        </div>
                        <div className="right-process">
                            <h3>Tracking Order Progress</h3>
                            <h4>Step 5</h4>
                            <p>After placing an order, the order will appear on the dashboard. The only thing remaining is you to wait for order delivery. You can also ask about the order progress by sending a message to the support team.</p>
                        </div>
                        <div className="left-process">
                            <h3>Receive Order and Rate</h3>
                            <h4>Step 6</h4>
                            <p>After the order is completed, its placed on the dashboard and a message is sent to the client informing them about order delivery. The only thing now left is rating our services and making anothe order if you found our servic es top notch.</p>
                        </div>
                    </div>
                </div>

                <div className="order-cta-container">
                    <div className="overlay"></div>
                    <div className="order-cta">
                        <h1>Do You Have A Project In <br className='hide-breakline'/> Mind</h1>
                        <div className="order-cta-links">
                            <Link to="/log" style={{textDecoration: 'none'}}><li><Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />} style={{width: '130px', padding: '10px 3px'}} >Order now</Button></li></Link>
                            <Link to="/" style={{textDecoration: 'none'}}><li><Button variant="contained" size="small" style={{width: '130px', padding: '10px 3px'}} >Contact Us</Button></li></Link>
                        </div>
                    </div>
                </div>

                <div className="reviews-container">
                    <div className="reviews">
                        <h1>Reviews</h1>
                        <h2>What Customers Say About Us</h2>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                            <div className="review-carousel">
                                <div className="review-carousel-img">
                                    <img src={testimonial1} alt='testimonial1' />
                                </div>
                                <div className="review-carousel-content">
                                    <h3>Miller</h3>
                                    <h4>Australia</h4>
                                    <p>My suggestions were well considered by the designer, who worked diligently to produce a high quality <br/> final product.</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="review-carousel">
                                <div className="review-carousel-img">
                                    <img src={testimonial3} alt='testimonial1' />
                                </div>
                                <div className="review-carousel-content">
                                    <h3>Alen</h3>
                                    <h4>Ukraine</h4>
                                    <p>Great work, will recommend</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="review-carousel">
                                <div className="review-carousel-img">
                                    <img src={testimonial2} alt='testimonial1' />
                                </div>
                                <div className="review-carousel-content">
                                    <h3>Watson</h3>
                                    <h4>United States</h4>
                                    <p>Excellent talents, excellent communication, and project completed much earlier than expected. I'd be happy <br/>to collaborate with you guys once again.</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="blog-section-container">
                    <div className="blog-section">
                        <div className="blog-content">
                            <h1>Our Blog</h1>
                            <h2>Check Our <br className='hide-breakline'/> Recent Blogs</h2>
                            <p>Our blog helps keep you with up to date news, technology and other areas related to our services. Please subscribe so that you may never miss our newly written pieces</p>
                            <Link to="/" style={{textDecoration: 'none'}}><li><Button variant="contained" size="small" style={{width: '130px', padding: '10px 3px'}} >Explore More</Button></li></Link>
                        </div>
                        <div className="blog-samples">
                            <div className="blog">
                                <img src={blogimg} alt="blog" />
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <img src={author1} alt="author" />
                                        <h5>By John Smith</h5>
                                    </div>
                                    <h3>Topic One</h3>
                                    <h4>Learn More</h4>
                                </div>
                            </div>
                        
                            <div className="blog">
                                <img src={blogimg2} alt="blog" />
                                <div className="blog-content">
                                    <div className="blog-author">
                                        <img src={author2} alt="author" />
                                        <h5>By John Smith</h5>
                                    </div>
                                    <h3>Topic Two</h3>
                                    <h4>Learn More</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-container">
                    <div className="overlay"></div>
                    <div className="footer-section">
                        <div className="footer1">
                            <h1>Elency</h1>
                            <p>We provide only the best services. We hire only the to notch experts . Hiring a professional expert will provide you with time qualified and unique assistance.</p>
                        </div>

                        <div className="footer-centre">
                            <div className="footer2">
                                <h1>Explore</h1>
                                <ul>
                                    <li>Our Services</li>
                                    <li>About Us</li>
                                    <li>Meet Our Team</li>
                                    <li>Our Services</li>
                                    <li>Our Blog</li>
                                </ul>
                            </div>

                            <div className="footer3">
                                <h1>Contact Us</h1>
                                <ul>
                                    <li>+1234 0055 8049</li>
                                    <li>[Email Protected]</li>
                                    <li>3102 Bartlett Avenue <br/>
                                    Southfield, MI 48075</li>
                                </ul>
                            </div>
                        </div>


                        <div className="footer4">
                            <h1>Newsletter</h1>
                            <form>
                                <input type='email' required 
                                    placeholder="Enter Your Email"
                                />
                                <input type='submit' value='Subscribe' />
                            </form>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="underline"></div>
                        <h5>Copyright 2022 Klaus | Design By Klaus Lab</h5>
                    </div>
                </div>

        </div>
    )
}