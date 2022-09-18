import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import DriversHome from './components/pages/DriversHome';
import TeamsHome from './components/pages/TeamsHome';
import HomePage from './components/pages/HomePage';
import NotFound from './components/pages/NotFound';
import Footer from './components/structure/Footer';
import Header from './components/structure/Header';
import HistoryHome from './components/pages/HistoryHome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='AppBody'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/driversHome' element={<DriversHome />} />
            <Route path='/teamsHome' element={<TeamsHome />} />
            <Route path='/historyHome' element={<HistoryHome />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
