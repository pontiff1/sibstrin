import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../src/compoments/header'
import Navbar from "./compoments/navbar";
import Main from "./Pages/main";
import Enrollee from "./Pages/enrollee";
import News from "./Pages/news";
import Employees from "./Pages/emloyees";
import Info from "./Pages/info";
import Active from "./Pages/active";
import Footer from "./compoments/footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="main">
                    <Navbar />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/enrollee" element={<Enrollee />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/employees" element={<Employees />} />
                            <Route path="/info" element={<Info />} />
                            <Route path="/active" element={<Active />} />
                        </Routes>
                    </div>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;