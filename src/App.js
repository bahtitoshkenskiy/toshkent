import './App.css';
import Start from './pages/Start.js'
import Konor from './pages/Konor.js'
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuPalette } from "react-icons/lu";
import { PiShoppingBagOpen,PiChartLineUpThin,PiHeartbeat } from "react-icons/pi";
import { CiMedal } from "react-icons/ci";
import { BsShield } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";

function App() {
  return (
<div >
<Konor/>
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
  <div id='card01' className="card1">
    <div className="dv1">
      <button className='bt5'>Marketing</button>
      <h3 className='h11'>250.000 UZS</h3>
    </div>
    <h3 className='h12'>Raqamli marketing bo'yicha 
to'liq kurs</h3><div className="img2"></div>
    <button className='bt6'><AiOutlineArrowRight/></button>
  </div>
  <div className="card1">
  <div className="dv1">
      <button className='bt7'>Dasturlash</button>
      <h3 className='h11'>250.000 UZS</h3>
    </div>
    <h3 className='h13'>Java Spring bo’yicha to’liq
kurs(amaliy)</h3><div className="img2"></div>
    <button className='bt6'><AiOutlineArrowRight/></button>
  </div>
  <div  className="card1">
  <div className="dv1">
      <button className='bt8'>Dizayn</button>
      <h3 className='h11'>250.000 UZS</h3>
    </div>
    <h3 className='h14'>Illustrator 0 dan professionalgacha
to’liq kurs</h3><div className="img2"></div>
    <button className='bt6'><AiOutlineArrowRight/></button>
  </div>
  <div id='card1' className="card1">
  <div className="dv1">
      <button className='bt9'>Biznes</button>
      <h3 className='h11'>250.000 UZS</h3>
    </div>
    <h3 className='h15'>Shaxsiy biznersni rivojlantirishda
e’tibor berish kerak bo’lgan</h3><div className="img2"></div>
    <button className='bt6'><AiOutlineArrowRight/></button>
  </div>
</div>
</header>
<h1 className='h'>Bizning eng top kurslarimizni ko'rib chiqing</h1>
<header className='header2'>
<div className="big">
  <div className="minibig1">
<div className="mini1">
  <div className="img3">
  <button className='bt11'>Dasturlash</button>
  </div>
  <div className="min1">
    <div className="bginfo">
    <div className="info1">
      <h3 className='hh'>Java, Spring bo’yicha to’liq 
kurs. (amaliy)</h3>
<div className="img2"></div>
    </div>
    <div className="info2">
<div className="text5">
  <h6>Kurs hajmi</h6>
  <h3>38 soat</h3>
</div>
<div className="text6">
  <h6>Kurs narxi</h6>
  <h3>250.000 UZS</h3>
</div>
<button className='btn1'><AiOutlineArrowRight/></button>
    </div>
    </div>
  </div>
</div>
<div className="mini2">
  <div className="img4">
  <button className='btn2'>Dizayn</button>
  </div>
  <div className="min1">
    <div className="bginfo">
    <div className="info1">
      <h3 className='hh1'>Illustrator boshlang’ichdan
proffessionalgacha</h3>
<div className="img2"></div>
    </div>
    <div className="info2">
<div className="text5">
  <h6>Kurs hajmi</h6>
  <h3>38 soat</h3>
</div>
<div className="text6">
  <h6>Kurs narxi</h6>
  <h3>250.000 UZS</h3>
</div>
<button className='btn3'><AiOutlineArrowRight/></button>
    </div>
    </div>
  </div>
</div>
  </div>
  <div className="minibig2">
  <div className="mini3">
  <div className="img5">
  <button className='btn2'>Dizayn</button>
  </div>
  <div className="min3">
    <div className="bginfo">
    <div className="info1">
      <h3 className='hh2'>Boshlang’ich Photoshop
kurslari</h3>
<div className="img2"></div>
    </div>
    <div className="info2">
<div className="text5">
  <p>Kurs hajmi</p>
  <h5>42 soat</h5>
</div>
<div className="text6">
  <p>Kurs narxi</p>
  <h5>370.000 UZS</h5>
</div>
<button className='btn3'><AiOutlineArrowRight/></button>
    </div>
    </div>
  </div>
</div>
<div className="mini4">
  <div className="img6">
  <button className='btn4'>Biznes</button>
  </div>
  <div className="min3">
    <div className="bginfo">
    <div className="info1">
      <h3 className='hh2'>Shaxsiy biznesni rivojlan-
tirish qoidalari</h3>
<div className="img2"></div>
    </div>
    <div className="info2">
<div className="text5">
  <p>Kurs hajmi</p>
  <h5>16 soat</h5>
</div>
<div className="text6">
  <p>Kurs narxi</p>
  <h5>420.000 UZS</h5>
</div>
<button className='btn3'><AiOutlineArrowRight/></button>
    </div>
    </div>
  </div>
</div>
<div className="mini6">
  <div className="img7">
  <button className='btn5'>Buxgalteriya</button>
  </div>
  <div className="min3">
    <div className="bginfo">
    <div className="info1">
      <h3 className='hh2'>1C bo’yicha to’liq kurs
(amaliy)</h3>
<div className="img2"></div>
    </div>
    <div className="info2">
<div className="text5">
  <p>Kurs hajmi</p>
  <h5>36 soat</h5>
</div>
<div className="text6">
  <p>Kurs narxi</p>
  <h5>450.000 UZS</h5>
</div>
<button className='btn3'><AiOutlineArrowRight/></button>
    </div>
    </div>
  </div>
</div>
  </div>
</div>
<div className="minibig3">
<div className="text02">
<h2>Top kategoriyalar</h2>
<button className='btn6' >Barchasi</button>
  </div>
  <div className="bg1">
    <div className="div1">
      <div className="mini22" id='sp1'>
        
        <h3><span className='sp1'><HiOutlineDesktopComputer/></span>Dasturlash</h3>
      </div>
      <div className="mini22"id='sp1'>
      
        <h3>  <span className='sp2'><LuPalette/></span>Dizayn</h3>
      </div>
      <div className="mini22" id='sp1'>
       
        <h3> <span className='sp3'><PiShoppingBagOpen/></span>Biznes</h3>
      </div>
      <div className="mini22" id='sp1'>
        
        <h3><span className='sp4'><BiCoinStack/></span>Buxgalteriya</h3>
      </div>

      </div>

      <div className="div2">
    <div className="mini22" id='sp2'>
     
      <h3> <span className='sp5'><PiChartLineUpThin/></span>Marketing</h3>
    </div>
    <div className="mini22"id='sp2'>
      
      <h3><span className='sp6'><CiMedal/></span>Menejment</h3>
    </div>
    <div className="mini22" id='sp2'>
      
      <h3><span className='sp7'><BsShield/></span>Xavfsizlik</h3>
    </div>
     <div className="mini22" id='sp2'>
      
      <h3><span className='sp8'><PiHeartbeat/></span>Salomatlik</h3>
     </div>
     </div>
  </div>
</div>

</header>
<header className='header3'>
  <div className="textt1">
    <div className="db">
    <h3>Dasturlash</h3>
    <h2 className='line1'></h2>
    </div>
    <h3>Dizayn</h3>
    <h3>Marketing</h3>
    <h3>Biznes</h3>
    <h3>Salomatlik</h3>
    <h3>Menejment</h3>
    <h3>Buxgalteriya</h3>
    <h3>Tarmoq  </h3>
  </div>
  <div className="cards1">
    <div className="mini7 ">
  <div className="img01">
  <button className='btn01'>Dasturlash</button>
  </div>
  <div className="min4">
    <div className="bginfo">
    <div className="info1">
      <h3 className='hh01'>Python bo’yicha boshlang’ich
dasturlash</h3>
<div className="img2"></div>
    </div>
    <div className="info2">
<div className="text5">
  <p>Kurs hajmi</p>
  <h5>42 soat</h5>
</div>
<div className="text6">
  <p>Kurs narxi</p>
  <h5>370.000 UZS</h5>
</div>
<button className='btn3'><AiOutlineArrowRight/></button>
    </div>
    </div>
  </div>
</div>
<div className="mini8 ">
  <div className="img02">
  <button className='btn01'>Dasturlash</button>
  </div>
  <div className="min4">
    <div className="bginfo">
    <div className="info1">
      <h3 className='hh02'>Java bo’yicha boshlang’ich
dasturlash</h3>
<div className="img2"></div>
    </div>
    <div className="info2">
<div className="text5">
  <p>Kurs hajmi</p>
  <h5>42 soat</h5>
</div>
<div className="text6">
  <p>Kurs narxi</p>
  <h5>370.000 UZS</h5>
</div>
<button className='btn3'><AiOutlineArrowRight/></button>
    </div>
    </div>
  </div>
</div>
<div className="mini9 ">
  <div className="img03">
  <button className='btn01'>Dasturlash</button>
  </div>
  <div className="min4">
    <div className="bginfo">
    <div className="info1">
      <h3 className=''>Spring to’liq kurs</h3>
<div className="img2"></div>
    </div>
    <div className="info2">
<div className="text5">
  <p>Kurs hajmi</p>
  <h5>42 soat</h5>
</div>
<div className="text6">
  <p>Kurs narxi</p>
  <h5>370.000 UZS</h5>
</div>
<button className='btn3'><AiOutlineArrowRight/></button>
    </div>
    </div>
  </div>
</div>
<div className="mini10 ">
  <div className="img04">
  <button className='btn01'>Dasturlash</button>
  </div>
  <div className="min4">
    <div className="bginfo">
    <div className="info1">
      <h3 className='hh03'>C++ da massivlar bilan
ishlash</h3>
<div className="img2"></div>
    </div>
    <div className="info2">
<div className="text5">
  <p>Kurs hajmi</p>
  <h5>42 soat</h5>
</div>
<div className="text6">
  <p>Kurs narxi</p>
  <h5>370.000 UZS</h5>
</div>
<button className='btn3'><AiOutlineArrowRight/></button>
    </div>
    </div>
  </div>
</div>
  </div>

  <div className="cards2">
  <div className="mini11 ">
  <div className="img05 ">
  <button className='btn01'>Dasturlash</button>
  </div>
  <div className="min4">
    <div className="bginfo">
    <div className="info1">
      <h3 className=''>CSS da grid texnologiyalari</h3>
<div className="img2"></div>
    </div>
    <div className="info2">
<div className="text5">
  <p>Kurs hajmi</p>
  <h5>42 soat</h5>
</div>
<div className="text6">
  <p>Kurs narxi</p>
  <h5>370.000 UZS</h5>
</div>
<button className='btn3'><AiOutlineArrowRight/></button>
    </div>
    </div>
  </div>
</div>
<div className="mini12 ">
  <div className="img06 ">
  <button className='btn01'>Dasturlash</button>
  </div>
  <div className="min4">
    <div className="bginfo">
    <div className="info1">
      <h3 className='hh04'>HTML 5 imkoniyatlari, CSS 3 
imkoniyatlari</h3>
<div className="img2"></div>
    </div>
    <div className="info2">
<div className="text5">
  <p>Kurs hajmi</p>
  <h5>42 soat</h5>
</div>
<div className="text6">
  <p>Kurs narxi</p>
  <h5>370.000 UZS</h5>
</div>
<button className='btn3'><AiOutlineArrowRight/></button>
    </div>
    </div>
  </div>
</div>
  </div>
  <div className="vin">
    <h1 className='g1'>"</h1><h4>“O’z qalbing va ichki sezgingga ergashish uchun 
yetarlicha jur’atli bo’l. Zotan shu ikki tuyg’u 
sening aslida kim bo’lishni xoxlashingni aniq biladi.”</h4><h1 className='g2'>"</h1>
  </div>
</header>
    </div>
  );
}
export default App;


