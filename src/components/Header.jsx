'use client';

import { React, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  let [hamMenuShowing, setHamMenuShowing] = useState(false);

  useEffect(() => {
    const dropdown = document.getElementById('links-mobile');
    const hamBtn = document.getElementById('hamburger');
    if (hamMenuShowing) {
      dropdown.classList.add('showing');
      hamBtn.classList.add('fa-x');
      hamBtn.classList.remove('fa-bars');
    } else {
      dropdown.classList.remove('showing');
      hamBtn.classList.add('fa-bars');
      hamBtn.classList.remove('fa-x');
    }
  }, [hamMenuShowing]);
  
  return (
    <header>
      <a href="../">
        <Image 
          src="/edbab-header-logo.svg" 
          alt="Everyday Better and Better Logo" 
          width="100"
          height="100"
          className="header-logo"
        />
      </a>
      
      <nav>
        <i className="hamburger fa-solid fa-bars" id="hamburger" onClick={() => setHamMenuShowing(!hamMenuShowing)}></i>
        <ul className="links-mobile" id="links-mobile">
          <Link href="../"><li>Home</li></Link>
          <Link href="../blogspot"><li>Blog</li></Link>
          <Link href="../lifecoaching"><li>Life coaching</li></Link>
          <Link href="../courses"><li>Courses</li></Link>
        </ul>
        <ul className="links-desktop">
          <Link href="../"><li>Home</li></Link>
          <Link href="../blogspot"><li>Blog</li></Link>
          <Link href="../lifecoaching"><li>Life coaching</li></Link>
          <Link href="../courses"><li>Courses</li></Link>
          <a id="dropdown-link" href="../more">
            <li className="dropdown">
              More
              <i className="carrot fa-solid fa-angle-down"></i>
            </li>
          </a>
          <div className="dropdown-content">
            <Link href="../">Link 1</Link>
            <Link href="../">Link 2</Link>
            <Link href="../">Link 3</Link>
          </div>
        </ul>
      </nav>
    </header>
  )
}
