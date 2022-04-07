import Header from "./components/header";
import './assets/css/App.scss';
import Banner from "./components/banner";
import Packages from "./components/packages";
import InfoBar from "./components/infobar";

function App() {
  
  return (
    <div className="App">
      <InfoBar/>
      <Header/>
      <div className="container">
        <Banner/>
        <Packages/>
      </div>
      <img src="/img/coinmark.png" className="coin-mark" alt=""/>
      <img src="/img/doge.png" className="doge-mark" alt=""/>
    </div>
  );
}

export default App;
