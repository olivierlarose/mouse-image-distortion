'use client';
import { useEffect, useState } from "react";
import Scene from "@/components/Scene";
import Projects from "@/components/Projects";
import Lenis from 'lenis'
export default function Home() {

  const [activeMenu, setActiveMenu] = useState(null)
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <div className="h-[50vh]"></div>
      <Projects setActiveMenu={setActiveMenu}/>
      <Scene activeMenu={activeMenu}/>
      <div className="h-[50vh]"></div>
    </main>
  );
}
