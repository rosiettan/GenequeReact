import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../App.css';
import Home from './home/Home';
import Header from './header/Header';
import Footer from './footer/Footer';
import About from './about/About';
import Login from './login/Login';
import Register from './register/Register';
import Personal from './personal_data/Personal';
import Sample from './sample_life_tracking/Sample';
import Viewing from './viewing_data/Viewing';
import Prediction from './prediction/Prediction';


function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route >
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="personal" element={<Personal />} />
                    <Route path="sample" element={<Sample />} />
                    <Route path="viewing" element={<Viewing />} />
                    <Route path="prediction" element={<Prediction />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default App;
