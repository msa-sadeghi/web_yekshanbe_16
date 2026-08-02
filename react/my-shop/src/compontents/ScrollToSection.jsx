import { useEffect, useRef } from "react";

export default function ScrollToSection() {
  const sectionRef = useRef(null);
  const handleClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div>
      <button onClick={handleClick}>Go to section</button>
      <div style={{ height: "1000px" }}>Another Content ...</div>
      <section ref={sectionRef}>
        <h2>another section</h2>
      </section>
    </div>
  );
}
