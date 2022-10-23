import { Link } from 'react-router-dom';

function Portfolio () {
    return (
        <div class="my-portfolio">
            <div class="lay">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="about-heading skill">
                            <p>Portfolio</p>
                            <h2>My Works</h2>
                            <div class="animation-bar">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <ul class="port-ul text-center">
                            <li class="port-item"><a class="port-link" href="#">All</a></li>
                            <li class="port-item"><a class="port-link" href="#">Slideshow</a></li>
                            <li class="port-item"><a class="port-link" href="#">Video</a></li>
                            <li class="port-item"><a class="port-link" href="#">Images</a></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="port-main">
                            <div class="port-image">
                                <img src="images/port-1.jpg" class="w-100" alt="" />
                            </div>
                            <div class="port-lay">
                                <div class="port-headings">
                                    <a href="#">
                                        <h4>keto app design</h4>
                                    </a>
                                <h5>Slideshow</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="port-main">
                            <div class="port-image">
                                <img src="images/port-2.jpg" class="w-100" alt="" />
                            </div>
                            <div class="port-lay">
                                <div class="port-headings">
                                    <a href="#">
                                        <h4>Web design</h4>
                                    </a>
                                <h5>Video</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="port-main">
                            <div class="port-image">
                                <img src="images/port-3.jpg" class="w-100" alt="" />
                            </div>
                            <div class="port-lay">
                                <div class="port-headings">
                                    <a href="#">
                                        <h4>Marketing website</h4>
                                    </a>
                                <h5>Slideshow</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="port-main">
                            <div class="port-image">
                                <img src="images/port-4.jpg" class="w-100" alt="" />
                            </div>
                            <div class="port-lay">
                                <div class="port-headings">
                                    <a href="#">
                                        <h4>app design</h4>
                                    </a>
                                <h5>Image</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="port-main">
                            <div class="port-image">
                                <img src="images/port-5.jpg" class="w-100" alt="" />
                            </div>
                            <div class="port-lay">
                                <div class="port-headings">
                                    <a href="#">
                                        <h4>e-commerce</h4>
                                    </a>
                                <h5>Video</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="port-main">
                            <div class="port-image">
                                <img src="images/port-6.jpg" class="w-100" alt="" />
                            </div>
                            <div class="port-lay">
                                <div class="port-headings">
                                <a href="#">
                                    <h4>Free tamplate</h4>
                                </a>
                                <h5>Image</h5>
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
 
export default Portfolio;