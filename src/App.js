import './App.css';
import Start from './pages/Start.js'
import Konor from './pages/Konor.js'
import { RiSearch2Line } from "react-icons/ri";

function App() {
  return (
    <div >

<Start/>
<header className='header1'>
<div className="text">
  <h1>Biz sizga <span> Dasturla</span>
va boshqa kurslarni taklif 
qilamiz.</h1>
  <h5>Siz istalgan vaqtda har qanday mavzuda kurslarni o’rganishingiz 
mumkin. Buning uchun qidiruv tizimidan foydalaning</h5>
  <div className="inp">
    <input type="text" placeholder='Qanday kurs o’rganmoqchisiz ?'/><RiSearch2Line/>
  </div>
</div>
<div className="aylana"></div>
<div className="cards">
  <div id='card01' className="card1"></div>
  <div className="card1"></div>
  <div  className="card1"></div>
  <div id='card1' className="card1"></div>
</div>
</header>
    </div>
  );
}
export default App;

