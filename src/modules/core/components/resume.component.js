import { Link } from 'react-router-dom';

function Resume () {
    return (
        <div class="my-resume">
            <div class="lay">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12 text-left">
                        <div class="about-heading skill">
                            <p>My Resume</p>
                            <h2>My Expertise</h2>
                            <div class="animation-bar ml-0">
                            </div>
                        </div>
                    </div>
                        <div class="col-lg-6">
                            <h5 class="heading">my experience</h5>
                            <div class="resume-box">
                                <h5>Senior Architect</h5>
                                <h6>2015 - Present | Google</h6>
                                <p>Collaborate with creative and development teams on the execution of ideas.</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h5 class="heading">my education</h5>
                            <div class="resume-box">
                                <h5>Master in Arts</h5>
                                <h6>2006-2008</h6>
                                <p>Collaborate with creative and development teams on the execution of ideas.</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="resume-box">
                                <h5>Front-end Developer</h5>
                                <h6>2013 - 2015 | Facebook Inc.</h6>
                                <p>Collaborate with creative and development teams on the execution of ideas.</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="resume-box">
                                <h5>Art University</h5>
                                <h6>2006-2008</h6>
                                <p>Collaborate with creative and development teams on the execution of ideas.</p>
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
 
export default Resume;