// landing.jsx
import React from "react";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/clerk-react";
import HeroImage from "@/assets/image.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E1A39] to-[#1E1A39]/90 text-white font-sans">
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold tracking-wide text-white">CHRONOPAY</h1>
        <nav className="flex items-center gap-8 text-white text-sm font-medium">
          <a href="#features">features</a>
          <a href="#about">about</a>
          <a href="#contact">contact us</a>
        </nav>

        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <span className="bg-[#A18BFF]/30 px-6 py-2 rounded-full text-white cursor-pointer hover:bg-[#A18BFF]/50">
                Sign up / Log in
              </span>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 items-center px-10 py-20 gap-16">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Spend Time <br />
            Like It’s <span className="font-cursive italic">Money</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Complete microtasks to earn access to digital content and services.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-[#A0E6E6] text-[#0F172A] hover:bg-[#76dada] px-5 py-2 rounded-full font-medium">
              View Available Tasks
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-[#1E1A39] px-5 py-2 rounded-full font-medium">
              Choose A Reward
            </button>
            <button className="bg-[#A18BFF]/40 text-white hover:bg-[#A18BFF]/60 px-5 py-2 rounded-full font-medium">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={HeroImage}
            alt="Illustration"
            className="w-[80%] max-w-md"
          />
        </div>
      </main>

      <footer className="px-10 pb-16">
        <h3 className="text-sm font-semibold text-white/80 mb-4">Our Partners</h3>
        <div className="flex flex-wrap gap-6 items-center">
          {["FASTCOMPANY", "MIT", "Forbes", "TechCrunch"].map((partner, idx) => (
            <span key={idx} className="text-white/70 text-sm font-medium tracking-wide">
              {partner}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
