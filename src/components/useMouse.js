import React, { useEffect, useState } from 'react'

export default function useMouse() {
  const [mouse, setMouse] = useState({x: 0, y: 0});

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    setMouse({
        x: clientX,
        y: clientY
    })
  }

  useEffect( () => {
    window.addEventListener("mousemove", mouseMove)
    return () => window.removeEventListener("mousemove", mouseMove)
  }, [])

  return mouse;
}
