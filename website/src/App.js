import { Route, Routes, Outlet } from 'react-router';
import Blog from './components/Blog';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Places from './components/Places';

function App() {
  return (
    <div className="grid">
      <div><Header></Header></div>
      {/* Router Outlet */}
      <div className="min-h-full">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/places/:id" element={<Places />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
