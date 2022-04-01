import Header from "./components/header";
import './assets/css/App.scss';
import Banner from "./components/banner";
import Packages from "./components/packages";

function App() {
  
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Banner/>
        <Packages/>
      </div>
    </div>
  );
}

export default App;
