
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebPrincipal from './Pages/WebPrincipal';
import Historias from './Pages/Historias';
import Pensamientos from './Pages/Pensamientos';
import { Navbar } from 'react-bootstrap';
import Libros from './Pages/Libros';
import Links from './Pages/Links';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<WebPrincipal />} />
                <Route path="/historias" element={<Historias />} />
                <Route path="/pensamientos" element={<Pensamientos />} />
                <Route path="/libros" element={<Libros/>} />
                <Route path= "/links" element={<Links/>} />
            </Routes>
        </Router>
    );
};

export default App;
