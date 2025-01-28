import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WhatsappButton from './components/WhatsappButton/WhatsappButton';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <main>
                  <Home />
                </main>
                <Footer />
                <WhatsappButton />
              </>
            } 
          />
          <Route 
            path="/produto/:id" 
            element={
              <>
                <Header />
                <main>
                  <ProductDetails />
                </main>
                <Footer />
                <WhatsappButton />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 