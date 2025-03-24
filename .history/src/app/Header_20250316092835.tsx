"use client"; 

import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="p-4 md:p-6 bg-[#f9f5e7] shadow-md relative">
      <div className="flex items-center justify-start">
        {/* ロゴとタイトル (左寄せ) */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-transparent">
            <svg id="グループ_2" data-name="グループ 2" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto" viewBox="0 0 76.875 78.159">
              <path id="パス_1" data-name="パス 1" d="M48,1.249A38.484,38.484,0,1,1,19.5,65.6" transform="translate(-10.202 -0.653)" fill="none" stroke="#353f2e" stroke-miterlimit="10" stroke-width="2.497"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-[#2c5530]">オリーブの家</h1>
        </div>

        {/* ハンバーガーメニューアイコン (右寄せ) */}
        <button 
          className="md:hidden text-[#2c5530] focus:outline-none ml-auto" 
          onClick={toggleMenu}
        >
          {menuOpen ? <span className="text-3xl">&times;</span> : <span className="text-3xl">&#9776;</span>}
        </button>

        {/* ナビゲーションメニュー */}
        <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#f9f5e7] md:bg-transparent transition-all duration-300 ease-in-out ${
          menuOpen ? 'block' : 'hidden'
        } md:flex md:gap-6 ml-auto`}>
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-lg text-[#2c5530] font-medium">
            <li><a href="#top-view" onClick={() => setMenuOpen(false)}>トップ</a></li>
            <li><a href="#facility-info" onClick={() => setMenuOpen(false)}>施設情報</a></li>
            <li><a href="#recommended-section" onClick={() => setMenuOpen(false)}>おすすめ</a></li>
            <li><a href="#daily-flow" onClick={() => setMenuOpen(false)}>日々の流れ</a></li>
            <li><a href="#usage-flow" onClick={() => setMenuOpen(false)}>利用方法</a></li>
            <li><a href="#location" onClick={() => setMenuOpen(false)}>アクセス</a></li>
            <li><a href="#pricing" onClick={() => setMenuOpen(false)}>料金</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
