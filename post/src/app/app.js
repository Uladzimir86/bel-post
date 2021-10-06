import './app.scss';
import Header from '../components/header/header';
import Slider from '../components/slider/slider';
import Main from '../components/main/main';
import Footer from '../components/footer/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />
     {/*  <Main />*/}
      <Footer /> 
    </div>
  );
}

export default App;
