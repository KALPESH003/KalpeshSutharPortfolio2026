import React from 'react';

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Readex Pro', system-ui, -apple-system, sans-serif;
          background: #000;
          color: #fff;
          -webkit-font-smoothing: antialiased;
          margin: 0;
          padding: 0;
          height: 100%;
        }
        
        html, #root {
          height: 100%;
        }

        .not-found-title {
          letter-spacing: -0.06em;
          line-height: 0.9;
        }
      `}</style>

      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 md:opacity-80"
          autoPlay
          loop
          muted
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
        />
        
        {/* Foreground Content */}
        <div className="relative h-full w-full z-10 pointer-events-none">
          {/* Error Indicator */}
          <div className="absolute top-[12%] left-4 md:left-10 text-white/55 text-xs tracking-[0.22em] uppercase font-medium">
            error 404 // page not found
          </div>

          {/* Giant Headline */}
          <h1 className="not-found-title absolute text-white font-medium text-[18vw] md:text-[14vw] lowercase left-4 md:left-10 top-[20%]">
            lost
          </h1>

          <h1 className="not-found-title absolute text-white font-medium text-[16vw] md:text-[12vw] lowercase right-4 md:right-10 top-[20%]">
            page.
          </h1>

          {/* <h1 className="not-found-title absolute text-white font-medium text-[28vw] md:text-[24vw] lowercase left-[18%] md:left-[28%] top-[58%]">
            404
          </h1> */}

        <h1
          className=" absolute left-1/2 top-[70%] -translate-x-[60%] -translate-y-1/2 text-[30vw] md:text-[24vw] font-black tracking-[-0.08em] text-transparent bg-clip-text bg-gradient-to-r from-white to-white/2 pointer-events-auto"
          style={{
            WebkitTextStroke: "3px rgba(255,255,255,0.9)",
          }}
        >
          404
        </h1>


          {/* Description */}
          <p className="absolute left-6 md:left-10 top-[46%] max-w-[280px] text-[15px] leading-snug text-white/90 lowercase pointer-events-auto">
            the page you are looking for doesn&apos;t exist, was moved, or may have been deleted.
          </p>

          {/* CTA Buttons */}
          <div className="absolute left-6 md:left-10 top-[72%] flex flex-col sm:flex-row gap-3 pointer-events-auto">
            <a
              href="/"
              className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors text-center"
            >
              Return to Home
            </a>
          </div>

          {/* Bottom-Left Stat Block */}
          <div className="absolute left-6 md:left-20 bottom-20 md:bottom-24 pointer-events-auto">
            <div className="flex items-center gap-3">
              <span className="text-4xl md:text-5xl font-medium tracking-tight">-1</span>
            </div>
            <div className="text-xs md:text-sm text-white/70 mt-1 lowercase">
              missing page detected
            </div>
          </div>

          {/* Bottom-Right Stat Block */}
          <div className="absolute right-6 md:right-20 bottom-16 md:bottom-20 pointer-events-auto">
            <div className="flex items-center gap-3 justify-end">
              <span className="text-4xl md:text-5xl font-medium tracking-tight">00</span>
            </div>
            <div className="text-xs md:text-sm text-white/70 mt-1 text-right lowercase">
              valid routes
            </div>
          </div>
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black z-10" />
      </section>
    </>
  );
}