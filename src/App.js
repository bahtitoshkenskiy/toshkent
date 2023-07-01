import './App.css';
import Start from './pages/Start.js'
import Konor from './pages/Konor.js'

function App() {
  return (
    <div >

<Start/>
<header className='header1'>
<div className="text">
  <h1>Biz sizga <span> Dasturla</span>
va boshqa kurslarni taklif 
qilamiz.</h1>
  <p></p>
  <div className="inp">
    <input type="text" />
  </div>
</div>
<div className="aylana"></div>
<div className="cards">
  <div className="card1"></div>
  <div className="card1"></div>
  <div className="card1"></div>
  <div className="card1"></div>
</div>
</header>
    </div>
  );
}
export default App;

