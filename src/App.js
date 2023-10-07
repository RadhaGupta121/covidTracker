import logo from './logo.svg';
import './App.css';
import Main from './Main';
import img2 from './img/corona.jpg';
// https://data.covid19india.org/v4/min/data.min.json
function App() {

  return(
    <>
   
    <div style={{backgroundImage:{img2}}}>
    <Main/>
    </div>
   
    </>
  )
}
export default App;
