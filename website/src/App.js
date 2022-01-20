import { Route, Routes } from 'react-router';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="grid">
      <div><Header></Header></div>
      {/* Router Outlet */}
      <div className="min-h-full">
        <Body></Body>
      </div>
      <div>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
