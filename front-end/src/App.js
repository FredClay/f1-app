import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DriversHome from './components/pages/DriversHome';
import HomePage from './components/pages/HomePage';
import NotFound from './components/pages/NotFound';
import Header from './components/structure/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='AppBody'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/driversHome' element={<DriversHome />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
