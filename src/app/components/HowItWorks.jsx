"use client";

import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function HowItWorks() {
  const steps = [
    { title: "Member Signup", desc: "Register members in seconds with QR or phone.", icon: "📝", color: "#ffb3c1" },
    { title: "Plan Assignment", desc: "Attach workouts & diet templates instantly.", icon: "🏋️", color: "#b3d9ff" },
    { title: "Track & Check-in", desc: "Attendance + progress auto-synced.", icon: "📈", color: "#b2f2bb" },
    { title: "Payments", desc: "Auto reminders, invoices & receipts.", icon: "💳", color: "#ffe066" },
  ];

  return (
    <section id="how" className="how-section">
      <div className="container">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="heading"
        >
          How it works
        </motion.h2>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="description"
        >
          A streamlined flow that saves hours every week and keeps your gym running smoothly.
        </motion.p>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerStagger}
          className="steps-grid"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={fadeUp}
              className="step-card"
            >
              <div className="icon-wrapper" style={{ backgroundColor: s.color }}>
                <span className="icon">{s.icon}</span>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .how-section {
          padding: 5rem 1rem;
          background: linear-gradient(135deg, #fceff9, #f4f9ff);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .heading {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
          color: #2b2d42;
        }
        .description {
          color: #555;
          font-size: 1.125rem;
          max-width: 700px;
          margin: 0 auto;
        }
        .steps-grid {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .step-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 1rem;
          padding: 2rem 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }
        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        .icon {
          font-size: 2rem;
        }
        .step-title {
          font-weight: bold;
          font-size: 1.25rem;
          color: #2b2d42;
          margin-top: 0.5rem;
        }
        .step-desc {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: #666;
        }
      `}</style>
    </section>
  );
}

export default HowItWorks;
