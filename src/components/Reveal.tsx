import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
};

const Reveal: React.FC<RevealProps> = ({ children, className = "", as = "div", delay = 0 }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Comp: any = as;

  return (
    <Comp
      ref={ref as any}
      className={
        `will-change-transform opacity-0 ${visible ? `opacity-100 animate-fade-in` : ""} ${className}`
      }
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
