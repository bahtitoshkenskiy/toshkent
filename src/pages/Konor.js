import React, { Component } from 'react'
import './Konor.css';

export default class Konor extends Component {
  render() {
    return (
      <div>
        <div className="big">
            <div className="text">
            <h1 className='h1'>Biz sizga Dasturla
va boshqa kurslarni taklif 
qilamiz.</h1>
<p className='p1'>Siz istalgan vaqtda har qanday mavzuda kurslarni o’rganishingiz 
mumkin. Buning uchun qidiruv tizimidan foydalaning</p>
<input placeholder='Qanday kurs o’rganmoqchisiz ?' className='inp1' type="text" />
</div>
        </div>
        <div className="yelow"></div>
      </div>
    )
  }
}
