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
      <Image 
        src="/edbab-header-logo.svg" 
        alt="Everyday Better and Better Logo" 
        width="100"
        height="100"
      />
      
      <nav>
        <i className="hamburger fa-solid fa-bars" id="hamburger" onClick={() => setHamMenuShowing(!hamMenuShowing)}></i>
        <ul className="links-mobile" id="links-mobile">
          <Link href="../app/"><li>Home</li></Link>
          <Link href="../app/blog"><li>Blog</li></Link>
          <Link href="../app/lifecoaching"><li>Life coaching</li></Link>
          <Link href="../app/courses"><li>Courses</li></Link>
        </ul>
        <ul className="links-desktop">
          <Link href="../app/"><li>Home</li></Link>
          <Link href="../app/blog"><li>Blog</li></Link>
          <Link href="../app/lifecoaching"><li>Life coaching</li></Link>
          <Link href="../app/courses"><li>Courses</li></Link>
          <a id="dropdown-link" href="../app/affiliate">
            <li>
              <button className="dropdown">
                More
                <i className="dropbtn-carrot fa-solid fa-angle-down"></i>
              </button>
            </li>
          </a>
          <div className="dropdown-content">
            <Link href="../app/blog/">Link 1</Link>
            <Link href="../app/blog/">Link 2</Link>
            <Link href="../app/blog/">Link 3</Link>
          </div>
        </ul>
      </nav>
    </header>
  )
}
