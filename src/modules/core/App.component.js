import { Routes, Route } from 'react-router-dom';
import Home from './components/home.component';
import About from './components/about.component';
import Resume from './components/resume.component';
import Skill from './components/skill.component';
import Portfolio from './components/portfolio.component';
import Blog from './components/blog.component';

function App () {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/blog' element={<Blog />} />
        </Routes>
    );
}
 
export default App;