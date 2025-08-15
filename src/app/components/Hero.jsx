"use client";

import { motion } from "framer-motion";
// import gymVideo from "../../assets/images/gym-video.mp4";


const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "7rem",
        paddingBottom: "6rem",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      {/* Video background */}
      <video
  autoPlay
  muted
  loop
  playsInline
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  }}
>
  <source src="/assets/images/gym-video.mp4" type="video/mp4" />
</video>


      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(35, 45, 57, 0.8)",
          zIndex: -1,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Text content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerStagger}
        >
          <motion.h6
            variants={fadeUp}
            style={{
              marginTop: 0,
              fontSize: "18px",
              textTransform: "uppercase",
              fontWeight: 800,
              letterSpacing: "0.5px",
            }}
          >
            work harder, get stronger
          </motion.h6>

          <motion.h2
            variants={fadeUp}
            style={{
              marginTop: "30px",
              marginBottom: "25px",
              fontSize: "clamp(2rem, 4vw, 48px)",
              textTransform: "uppercase",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
           Grow your fitness business with an {" "}
            <em style={{ fontStyle: "normal", color: "#ed563b", fontWeight: 900 }}>
              all-in-one software 
            </em>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}
          >
            <a
              href="#features"
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                background: "#ed563b",
                color: "#fff",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Watch demo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
