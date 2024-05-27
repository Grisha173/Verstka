import './App.css';

import Layout from './components/Layout';
import Announce from './pages/Announce';
import ContactsPage from './pages/ContactsPage';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './pages/News';
import Poster from './pages/Poster';
 
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/announce' element={<Announce />} />
          <Route path='/news' element={<News />} />
          <Route path='/poster' element={<Poster />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
