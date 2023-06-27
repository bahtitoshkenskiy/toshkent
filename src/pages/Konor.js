import React, { Component } from 'react'
import './Konor.css';
import { AiOutlineStar,AiFillStar,AiOutlineArrowRight } from "react-icons/ai";

export default class Konor extends Component {
  render() {
    return (
      <div>
<div className="blu">
  <div className="text">
    <h3 className='h1'>Biz sizga Dasturla
va boshqa kurslarni taklif 
qilamiz.</h3>
<p className='p1'>Siz istalgan vaqtda har qanday mavzuda kurslarni o’rganishingiz </p>
<input className='inp1' placeholder='Qanday kurs o’rganmoqchisiz ?' type="text" />
  </div>
  <div className="bguzs">
  <div className="uzs01">
  <div className="uzs1">
      <div className="mini4">
        <button className='bt4'>Marketing</button>
        <h6>250.000 uzs</h6>
      </div>
<div className="mini6">
  <div className="mini5">
  <h5 className='h3'>Raqamli marketing bo'yicha 
to'liq kurs</h5>
<div className="stars">
  <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/><AiOutlineStar/>4.1(524)
</div>
  </div>
  <button className='bt5'><AiOutlineArrowRight/></button>
</div>
</div>

<div className="uzs2">
      <div className="mini4">
        <button className='bt6'>Dasturlash</button>
        <h6>250.000 uzs</h6>
      </div>
<div className="mini6">
  <div className="mini5">
  <h5 className='h3'>Java Spring bo’yicha to’liq
kurs(amaliy)</h5>
<div className="stars">
  <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/><AiOutlineStar/>4.0(670)
</div>
  </div>
  <button className='bt5'><AiOutlineArrowRight/></button>
</div>
</div>
</div>
<div className="uzs02">
<div className="uzs3">
      <div className="mini4">
        <button className='bt9'>Dizayn</button>
        <h6>400.000 uzs</h6>
      </div>
<div className="mini6">
  <div className="mini5">
  <h5 className='h3'>Illustrator 0 dan professionalgacha
to’liq kurs</h5>
<div className="stars">
  <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/><AiOutlineStar/>4.1(1,250)
</div>
  </div>
  <button className='bt5'><AiOutlineArrowRight/></button>
</div>
</div>
<div className="uzs4">
      <div className="mini4">
        <button className='bt7'>Biznes</button>
        <h6>400.000 uzs</h6>
      </div>
<div className="mini6">
  <div className="mini5">
  <h5 className='h3'>Shaxsiy biznersni rivojlantirishda
e’tibor  </h5>
<div className="stars">
  <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/><AiOutlineStar/>4.1(1,250)
</div>
  </div>
  <button className='bt5'><AiOutlineArrowRight/></button>
</div>
</div>
</div>
  </div>
</div>
<div className="yelow"></div>






















{/* <div className="blue">
<div className="text">
  <h1 className='h1' >Biz sizga Dasturla
va boshqa kurslarni taklif 
qilamiz.</h1>
<h3 className='h2'>Siz istalgan vaqtda har qanday mavzuda kurslarni o’rganishingiz 
mumkin. Buning uchun qidiruv tizimidan foydalaning</h3>
<input className='inp1' type="text" placeholder='Qanday kurs o’rganmoqchisiz ?'/>
</div>
</div>
<div className="yelow"></div> */}




        {/* <div className="bg">
        <div className="big">
            <div className="text">
            <h1 className='h1'>Biz sizga Dasturla
va boshqa kurslarni taklif 
qilamiz.</h1>
<p className='p1'>Siz istalgan vaqtda har qanday mavzuda kurslarni o’rganishingiz 
</p>
<input placeholder='Qanday kurs o’rganmoqchisiz ?' className='inp1' type="text" />
</div>
        </div>
        <div className="yelow"></div>
        </div>
        <div className="boss">
          <div className="mini2">
            <div className="min1">
<div className="uzs1">
      <div className="mini4">
        <button className='bt4'>Marketing</button>
        <h3>250.000 uzs</h3>
      </div>
<div className="mini6">
  <div className="mini5">
  <h3 className='h3'>Raqamli marketing bo'yicha 
to'liq kurs</h3>
<div className="stars">
  <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/><AiOutlineStar/>4.1(524)
</div>
  </div>
  <button className='bt5'><AiOutlineArrowRight/></button>
</div>
</div>

<div className="uzs2">
      <div className="mini4">
        <button className='bt6'>Dasturlash</button>
        <h3>250.000 uzs</h3>
      </div>
<div className="mini6">
  <div className="mini5">
  <h3 className='h3'>Java Spring bo’yicha to’liq
kurs(amaliy)</h3>
<div className="stars">
  <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/><AiOutlineStar/>4.0(670)
</div>
  </div>
  <button className='bt5'><AiOutlineArrowRight/></button>
</div>
</div>
</div>
<div className="min2">
<div className="uzs3">
      <div className="mini4">
        <button className='bt9'>Dizayn</button>
        <h3>400.000 uzs</h3>
      </div>
<div className="mini6">
  <div className="mini5">
  <h3 className='h3'>Illustrator 0 dan professionalgacha
to’liq kurs</h3>
<div className="stars">
  <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/><AiOutlineStar/>4.1(1,250)
</div>
  </div>
  <button className='bt5'><AiOutlineArrowRight/></button>
</div>
</div>
<div className="uzs4">
      <div className="mini4">
        <button className='bt7'>Biznes</button>
        <h3>400.000 uzs</h3>
      </div>
<div className="mini6">
  <div className="mini5">
  <h3 className='h3'>Shaxsiy biznersni rivojlantirishda
e’tibor berish kerak bo’lgan</h3>
<div className="stars">
  <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/><AiOutlineStar/>4.1(1,250)
</div>
  </div>
  <button className='bt5'><AiOutlineArrowRight/></button>
</div>
</div>
</div>
          </div>
          <div className="mini3"></div>
         </div>  */}
      </div>
    )
  }
}
