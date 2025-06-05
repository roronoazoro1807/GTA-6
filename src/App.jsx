import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.2,
      x: "-50%",
      bottom: "-15%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      {/* SPLASH SCREEN */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing relative w-full h-screen bg-black overflow-hidden">
            {/* NAVBAR */}
            <div className="navbar absolute top-0 left-0 z-10 w-full py-6 px-6 md:px-10">
              <div className="logo flex gap-4 md:gap-7 items-center">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-6 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                  <div className="line w-3 h-1 bg-white"></div>
                </div>
                <h3 className="text-2xl md:text-4xl text-white leading-none -mt-1">
                  Rockstar
                </h3>
              </div>
            </div>

            {/* IMAGES + TEXT */}
            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-2 md:gap-3 absolute top-18 left-1/2 -translate-x-1/2 scale-[1.2] rotate-[-10deg] text-center">
                <h1 className="text-[5rem] md:text-[8rem] lg:text-[12rem] -ml-0 md:-ml-40">
                  grand
                </h1>
                <h1 className="text-[5rem] md:text-[8rem] lg:text-[12rem] ml-0 md:ml-20">
                  theft
                </h1>
                <h1 className="text-[5rem] md:text-[8rem] lg:text-[12rem] -ml-0 md:-ml-40">
                  auto
                </h1>
              </div>
              <img
                className="absolute character bottom-[-15%] left-1/2 -translate-x-1/2 scale-[1.2] rotate-[-5deg] max-h-[90vh] object-contain"
                src="./girlbg.png"
                alt=""
              />
            </div>

            {/* BOTTOM ICONS */}
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-6 px-6 md:px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center gap-3">
                <i className="text-3xl md:text-4xl ri-arrow-down-line"></i>
                <h3 className="text-lg md:text-xl font-mono">Scroll Down</h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-10">
            <div className="cntnr flex flex-col lg:flex-row flex-wrap gap-10 w-full max-w-[1400px] text-white">
              <div className="limg w-full lg:w-1/2 h-[300px] lg:h-auto relative flex justify-center items-center">
                <img
                  className="max-w-full max-h-full object-contain"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-full lg:w-[40%]">
                <h1 className="text-4xl md:text-6xl">Still Running,</h1>
                <h1 className="text-4xl md:text-6xl">Not Hunting</h1>

                {/* CLASSY GTA LINES */}
                <p className="mt-6 text-base md:text-lg font-mono">
                  In this city, loyalty is currency.
                </p>
                <p className="mt-4 text-base md:text-lg font-mono">
                  Run the streets, rule the game.
                </p>
                <p className="mt-4 text-base md:text-lg font-mono">
                  Born to break rules, built to survive.
                </p>

                <button className="bg-yellow-500 px-6 py-4 text-black mt-8 text-xl font-bold font-mono tracking-wider">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
