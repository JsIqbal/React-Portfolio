import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() { 
        return (
            <>
            <div class="header">
                    <div class="row w-100 m-0">
                        <div class="col-lg-2 p-0 m-0">
                            <div class="menu">
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <div class="about text-center">
                                <a class="navbar-brand m-0" href="#">
                                    <div class="my-image">
                                    <img src="images/about-optional.jpg" alt="my image" />
                                    </div>
                                </a>
                                <div class="avatar-details">
                                    <h3>M.Iqbal</h3>
                                    <h3>hossain</h3>
                                </div>
                                </div>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav w-100 text-center">
                                    <li class="nav-item">
                                    <Link class="nav-link" to='/'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
                                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                    </svg>Home</Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link class="nav-link" to='/about'>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-briefcase" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"/>
                                            <path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"/>
                                        </svg>  
                                        About</Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link class="nav-link" to='/resume'>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-award" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l-1.51-.229L8 1.126l-1.355.702-1.51.229-.684 1.365-1.086 1.072L3.614 6l-.25 1.506 1.087 1.072.684 1.365 1.51.229L8 10.874l1.356-.702 1.509-.229.684-1.365 1.086-1.072L12.387 6l.248-1.506-1.086-1.072-.684-1.365z"/>
                                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                                        </svg>
                                        Certificate</Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link class="nav-link" to='/skill'>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-patch-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                                            <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
                                            <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8z"/>
                                        </svg>  
                                        Skills</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to='/portfolio'>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
                                                <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
                                            </svg>
                                            Projects</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to='/blog'>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.471 16.471 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                                            </svg>
                                            Blog</Link>
                                    </li>
                                    <li class="nav-item">
                                        <ul class="navbar-nav second-ul">

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
                                    </li>
                                </ul>

                                </div>

                            </nav>
                            </div>
                        </div>
                        <div class="col-lg-10 p-0 m-0">
                            <div class="header-details">
                                <div class="overlay">
                                    <h1>M. IQBAL</h1>
                                    <p>A Dedicated Web Developer</p>
                                    <div class="button">
                                    <a href="#" class="button-m">Contact Me <i class="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="contact">
            <div class="lay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="about-heading skill">
                                <p>Feel free to contact me anytimes</p>
                                <h2>Get in Touch</h2>
                                <div class="animation-bar">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-7">
                            <form>
                                <h4 class="heading">Contact Title</h4>
                                <div class="row">
        
                                  <div class="col col-lg-6 form-item">
                                    <input type="text" class="form-control" placeholder="First name" />
                                  </div>
        
                                  <div class="col col-lg-6 form-item">
                                    <input type="text" class="form-control" placeholder="E-mail" />
                                  </div>
                                  <div class="col col-lg-12 form-item">
                                    <input type="text" class="form-control" placeholder="Subject" />
                                  </div>
                                  <div class="col col-lg-12 form-item">
                                    <input type="text" class="form-control messege" placeholder="Messege" />
                                  </div>
                                </div>
                                    <div class="button">
                                        <a href="#" class="button-m">send messege <i class="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                              </form>
                        </div>
                        <div class="col-lg-5">
                            <div class="contact-info">
                                <h4>Contact Info</h4>
                                <p class="indi">Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                                <ul class="contact-ul">
                                    <li class="row">
                                        <span class="col-lg-2">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-peace icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0v6.775l4.79 4.79A7 7 0 0 0 8.5 1.018zm4.084 12.273L8.5 9.207v5.775a6.97 6.97 0 0 0 4.084-1.691zM7.5 14.982V9.207l-4.084 4.084A6.97 6.97 0 0 0 7.5 14.982zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                              </svg>
                                        </span>
                                        <span class="col-lg-10 border-li">
                                            <h6 class="name">Name</h6>
                                            <p class="pera">M. Iqbal</p>
                                        </span>
                                    </li>
                                    <li class="row">
                                        <span class="col-lg-2">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-map icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M15.817.613A.5.5 0 0 1 16 1v13a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 14.51l-4.902.98A.5.5 0 0 1 0 15V2a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0l4.902.98 4.902-.98a.5.5 0 0 1 .415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"/>
                                              </svg>
                                        </span>
                                        <span class="col-lg-10 border-li">
                                            <h6 class="name">Location</h6>
                                            <p class="pera">4155 Mann Island, Liverpool, United Kingdom.</p>
                                        </span>
                                    </li>
                                    <li class="row">
                                        <span class="col-lg-2">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.471 16.471 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                                              </svg>
                                        </span>
                                        <span class="col-lg-10 border-li">
                                            <h6 class="name">Call Me</h6>
                                            <p class="pera"><a href="#">+44 1632 967704</a></p>
                                        </span>
                                    </li>
                                    <li class="row">
                                        <span class="col-lg-2">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-reply icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M9.502 5.013a.144.144 0 0 0-.202.134V6.3a.5.5 0 0 1-.5.5c-.667 0-2.013.005-3.3.822-.984.624-1.99 1.76-2.595 3.876C3.925 10.515 5.09 9.982 6.11 9.7a8.741 8.741 0 0 1 1.921-.306 7.403 7.403 0 0 1 .798.008h.013l.005.001h.001L8.8 9.9l.05-.498a.5.5 0 0 1 .45.498v1.153c0 .108.11.176.202.134l3.984-2.933a.494.494 0 0 1 .042-.028.147.147 0 0 0 0-.252.494.494 0 0 1-.042-.028L9.502 5.013zM8.3 10.386a7.745 7.745 0 0 0-1.923.277c-1.326.368-2.896 1.201-3.94 3.08a.5.5 0 0 1-.933-.305c.464-3.71 1.886-5.662 3.46-6.66 1.245-.79 2.527-.942 3.336-.971v-.66a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.667z"/>
                                              </svg>
                                        </span>
                                        <span class="col-lg-10 border-li">
                                            <h6 class="name">Email Me</h6>
                                            <p class="pera"><a href="#">Iqbal@example.com</a></p>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="footer">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <p>© M. Iqbal 2020 <span>|</span> All Right Reserved</p>
                    </div>
                </div>
                </div>
            </div>
            </>
        );
    }
}
 
export default Home;