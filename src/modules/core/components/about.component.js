import { Link } from "react-router-dom";

function About () {
    return (
        <div class="about-me">
            <div class="lay">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="about-heading">
                            <p>Get to know me</p>
                            <h2>About Me</h2>
                            <div class="animation-bar">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="image">
                            <img src="images/about-me-image3.jpg" alt="my about image" />
                            <div class="image-lay">
                                <div class="heading">
                                    <h2>Hi There!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 ml-auto">
                        <div class="about-details">
                            <h6>Who am i?</h6>
                            <h2>I'm M. Iqbal, a visual UI Designer and Web Developer</h2>
                        <div class="about-description">
                            <p>I am a freelancer based in the United Kingdom and i have been building noteworthy UI designs and websites for years, which comply with the latest design trends. I help to convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                        </div>
                        <div class="address">
                            <div class="row">
                                <div class="col-lg-6 single-info">
                                    <span>Name:</span>
                                    <p>M. Iqbal</p>
                                </div>
                                <div class="col-lg-6 single-info">
                                    <span>Email:</span>
                                    <p><a href="#">Iqbal@example.com</a></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 single-info">
                                    <span>Age:</span>
                                    <p>22</p>
                                </div>
                                <div class="col-lg-6 single-info">
                                    <span>From:</span>
                                    <p>Liverpool, UK</p>
                                </div>
                            </div>
                        </div>
                        <div class="social-connect">
                            <div class="row">
                            <div class="button col-lg-4">
                                <a href="#" class="button-m">Download CV <i class="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                            <div class="icons col-lg-6">
                                <ul class="navbar-nav second-ul p-0">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link bottom-icon">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link bottom-icon">
                                            <i class="fab fa-skype"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link bottom-icon">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link bottom-icon">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button col-lg-4 fixed">
                <Link to='/' class="button-m">Home <i class="fas fa-long-arrow-alt-right"></i></Link>
            </div>
            </div>
        </div>
    );
}
 
export default About;