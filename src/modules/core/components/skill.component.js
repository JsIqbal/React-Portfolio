import { Link } from 'react-router-dom';

function Skill () {
    return (
        <div class="my-skill">
            <div class="lay">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-left">
                        <div class="about-heading skill">
                            <p>Abilities</p>
                            <h2>My Skills</h2>
                            <div class="animation-bar ml-0">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 margin-fix-1">
                        <p>Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massa malesuada fermentum.</p>
                        <p>tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massa malesuada fermentum.</p>
                    </div>
                    <div class="col-lg-6 margin-fix-2">
                        <div class="resume">
                            <div class="none-fade">
                                <p><i class="fab fa-html5"></i> HTML</p>
                                <div class="progress-metr html"></div>
                            </div>
                            <div class="none-fade">
                                <p> <i class="fab fa-css3-alt"></i> CSS</p>
                                <div class="progress-metr css"></div>
                            </div>
                            <div class="none-fade">
                                <p><i class="fab fa-bootstrap"></i> Bootstrap </p>
                                <div class="progress-metr bootstrap"></div>
                            </div>
                            <div class="none-fade">
                                <p> <i class="fas fa-mobile-alt"></i> responsive </p>
                                <div class="progress-metr res"></div>
                            </div>
                            <div class="none-fade">
                                <p><i class="fa-brands fa-js"></i> js</p>
                                <div class="progress-metr html"></div>
                            </div>
                            <div class="none-fade">
                                <p><i class="fa-brands fa-node-js"></i>Node.js</p>
                                <div class="progress-metr css"></div>
                            </div>
                            <div class="none-fade">
                                <p><i class="fa-brands fa-react"></i>React.js</p>
                                <div class="progress-metr bootstrap"></div>
                            </div>
                            <div class="none-fade">
                                <p><i class="fa-solid fa-database"></i>mysql</p>
                                <div class="progress-metr res"></div>
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
 
export default Skill;