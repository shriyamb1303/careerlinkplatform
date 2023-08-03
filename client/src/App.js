import './App.css';
import Navbarh from './components/Navbarh';
import 'bootstrap/dist/css/bootstrap.min.css';
// import MainContent from './components/mainbody/MainContent';
// import Footerf from './components/footer/Footerf';
import HomePage from './components/HomePage';
import { Route, Routes } from "react-router-dom"
import Jobspage from './components/jobsportal/Jobspage';

function App() {
  return (
    <div className="">
      <header className="">
        <Navbarh />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<Jobspage />} />
      </Routes>
    </div>
  );
}

export default App;
