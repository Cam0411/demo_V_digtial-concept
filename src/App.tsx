/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import MarketingServices from "./pages/MarketingServices";
import VideoProduction from "./pages/VideoProduction";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <div className="min-h-screen bg-[#000000] selection:bg-brand-primary/30 selection:text-brand-lime font-sans relative">
        {/* Grain Texture Overlay */}
        <div className="fixed inset-0 z-[1] bg-grain" />
        
        <Navbar />
        <main className="relative z-10">
          {/* Global LED Background Effects */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-brand-primary/10 blur-[140px] rounded-full animate-aurora" />
            <div className="absolute bottom-[-20%] right-[-10%] right-[-10%] w-[80%] h-[80%] bg-brand-lime/10 blur-[160px] rounded-full animate-aurora delay-700" />
            <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] bg-brand-dark/5 blur-[100px] rounded-full animate-led" />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dich-vu-marketing" element={<MarketingServices />} />
            <Route path="/dich-vu-san-xuat-video" element={<VideoProduction />} />
            <Route path="/khach-hang" element={<Clients />} />
            <Route path="/lien-he" element={<Contact />} />
          </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
