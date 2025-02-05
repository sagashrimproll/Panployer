import Image from "next/image";
import Link from "next/link";
import React from "react";



export default function Home() {
  return (
    <div className="Homepage">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      <div className="Header">
        <a href = "#" className= "nav">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </a>
        <h1>
          <Link href="/"  className = "home-button"> Pandployer </Link>
        </h1>
      </div>  
      <main className="Options">
        <div className = "Video">
          <a 
            className="ATS-video" 
            href="https://www.youtube.com/watch?v=fHpVPkIGVyY"
          >
            <Image className="ATS-IMG"
              src="/ATSCoverIMG.png"
              alt="ATS Cover"
              width={700}
              height={700} />
            Click to watch a video in what ATS is.
          </a>
  
        </div>
        <div className = "Buttons">
          <Link href="/interview"> 
          <button> Interview </button>
          </Link>
          <Link href="/jobdes"> 
          <button> Job Description </button>
          </Link>
          <Link href="/res-review"> 
          <button> Resume-Review </button>
          </Link>
        </div>
      </main>


      <footer>
        <a
          className="Discord link"
          href="https://discord.gg/XNjg2VMR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/discord.svg"
            alt="Discord icon"
            width={16}
            height={16}
          />
          Discord
        </a>
      </footer>
    </div>
  );
}
