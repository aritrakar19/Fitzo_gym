"use client";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/hero-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section
        style={{
          padding: "70px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            maxWidth: "1000px",
            width: "90%",
            display: "flex",
            justifyContent: "center", // horizontally center
            alignItems: "center", // vertically center
          }}
          className="contact-wrapper"
        >
          {/* Contact Form */}
          <div
            className="contact-form"
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <h2
              style={{
                fontSize: "27px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#2a2a2a",
                fontFamily: "Oswald, sans-serif",
                textAlign: "center", // center the heading
              }}
            >
              Get in Touch
            </h2>
            <form>
              <div style={{ marginBottom: "30px" }}>
                <textarea
                  style={{
                    width: "100%",
                    border: "1px solid #e5e6e9",
                    padding: "18px",
                    fontSize: "13px",
                    height: "150px",
                  }}
                  placeholder="Enter Message"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "30px",
                  flexWrap: "wrap",
                }}
                className="input-row"
              >
                <input
                  type="text"
                  placeholder="Enter your name"
                  style={{
                    flex: 1,
                    border: "1px solid #e5e6e9",
                    padding: "18px",
                    fontSize: "13px",
                    minWidth: "250px",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  style={{
                    flex: 1,
                    border: "1px solid #e5e6e9",
                    padding: "18px",
                    fontSize: "13px",
                    minWidth: "250px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "30px" }}>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  style={{
                    width: "100%",
                    border: "1px solid #e5e6e9",
                    padding: "18px",
                    fontSize: "13px",
                  }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#ed563b",
                    color: "#fff",
                    padding: "12px 30px",
                    border: "none",
                    fontSize: "14px",
                    cursor: "pointer",
                    borderRadius: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .contact-wrapper {
            //   padding: 20px;
            }
            .input-row {
              flex-direction: column;
              gap: 15px;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
