import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    // cleanup
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
}
