import { useEffect, useRef, useState } from "react";
import "./fadeUp.css";

const FadeUp = ({ children, once = true, translateY = true }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        }
      },
      {
        // Trigger when element crosses middle of viewport
        rootMargin: "25% 0px 25% 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "visible" : ""}`}
      data-translate-y={translateY}
    >
      {children}
    </div>
  );
};

export default FadeUp;
