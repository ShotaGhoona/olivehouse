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
          <svg id="グループ_12" data-name="グループ 12" xmlns="http://www.w3.org/2000/svg" className='w-full h-full' viewBox="0 0 183.061 186.119">
            <defs>
                <clipPath id="clip-path">
                <rect id="長方形_1" data-name="長方形 1" width="183.061" height="186.12" fill="none"/>
                </clipPath>
            </defs>
            <g id="グループ_1" data-name="グループ 1" clip-path="url(#clip-path)">
                <path id="パス_1" data-name="パス 1" d="M87.36,1.249A91.642,91.642,0,1,1,19.5,154.481" transform="translate(2.641 0.169)" fill="none" stroke="#353f2e" stroke-miterlimit="10" stroke-width="2.497"/>
                <path id="パス_2" data-name="パス 2" d="M0,67.28s-1.447,49.362,45.938,52.18c0,0,6.366-33.242-45.938-52.18" transform="translate(0 9.113)" fill="#353f2e"/>
                <path id="パス_3" data-name="パス 3" d="M84.872,177.211l11.68-3.328s7.73-8.244.86-39.164S132.626,84.046,147.4,85.764V83.788s-12.826-.2-22.732,3.236a90.873,90.873,0,0,1,13.742-8.646s-42.056,9.39-47.582,52.448c0,0-6.212.629-7.93-16.462S78.288,70.877,87.106,53.7c0,0-12.024,10.077-8.475,64.586,0,0-.458,3.551-28.17-14.2,0,0,9.161,8.7,16.719,12.941,0,0,4.208,2.19-.086,2.018s-18.065-2.362-35.3,8.861c0,0,22.559-10.02,37.218-4.352s20.5,21.815,20.583,25.022,3.235,15.989-4.723,28.636" transform="translate(4.306 7.273)" fill="#353f2e"/>
                <path id="パス_4" data-name="パス 4" d="M90.222,159.547l-2.06,3.711-9.621-1.034" transform="translate(10.638 21.61)" fill="#353f2e"/>
                <path id="パス_5" data-name="パス 5" d="M24.843,21.747S33.874,61.628,69.583,53.4c0,0-2.085-28.051-44.74-31.656" transform="translate(3.365 2.945)" fill="#353f2e"/>
                <path id="パス_6" data-name="パス 6" d="M154.132,45.538s-32.621,7.387-25.893,36.594c0,0,22.944-1.7,25.893-36.594" transform="translate(17.245 6.168)" fill="#353f2e"/>
                <path id="パス_7" data-name="パス 7" d="M52.439,101.025S69.038,90.16,59.08,73.9c0,0-12.418,5.54-6.641,27.127" transform="translate(6.895 10.009)" fill="#353f2e"/>
                <path id="パス_8" data-name="パス 8" d="M87.792,62.059s41.974-10.275,33.316-50.9c0,0-29.523,2.371-33.316,50.9" transform="translate(11.891 1.511)" fill="#353f2e"/>
                <path id="パス_9" data-name="パス 9" d="M105.237,75.374A12.374,12.374,0,1,1,92.863,63a12.373,12.373,0,0,1,12.374,12.374" transform="translate(10.902 8.533)" fill="#353f2e"/>
                <path id="パス_10" data-name="パス 10" d="M60.552,127.607a12.374,12.374,0,1,1-12.374-12.374,12.374,12.374,0,0,1,12.374,12.374" transform="translate(4.849 15.608)" fill="#353f2e"/>
                <path id="パス_11" data-name="パス 11" d="M117.967,114.712a12.374,12.374,0,1,1-12.374-12.374,12.374,12.374,0,0,1,12.374,12.374" transform="translate(12.626 13.861)" fill="#353f2e"/>
            </g>
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
        <nav className={`absolute md:static top-16 buttom-16 left-0 w-full md:w-auto bg-[#f9f5e7] z-50 md:bg-transparent transition-all duration-300 ease-in-out ${
          menuOpen ? 'block' : 'hidden'
        } md:flex md:gap-6 ml-auto`}>
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-lg text-[#2c5530] font-bold">
            <li><a href="#top-view" onClick={() => setMenuOpen(false)}>トップ</a></li>
            <li><a href="#facility-info" onClick={() => setMenuOpen(false)}>施設について</a></li>
            <li><a href="#recommended-section" onClick={() => setMenuOpen(false)}>こんな方におすすめ</a></li>
            <li><a href="#daily-flow" onClick={() => setMenuOpen(false)}>1日の流れ</a></li>
            <li><a href="#usage-flow" onClick={() => setMenuOpen(false)}>利用までの流れ</a></li>
            <li><a href="#location" onClick={() => setMenuOpen(false)}>アクセス</a></li>
            {/* <li><a href="#pricing" onClick={() => setMenuOpen(false)}>料金</a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
