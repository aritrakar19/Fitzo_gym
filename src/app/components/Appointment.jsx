"use client";
import Image from "next/image";

function Appointment() {
  return (
    <>
      {/* Classes Section */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#111", // dark background
        }}
      >
        <div style={{ width: "90%", margin: "0 auto" }}>
          {/* Section Title */}
          <div style={{ textAlign: "center", marginBottom: "45px" }}>
            <span
              style={{
                fontSize: "16px",
                color: "#f36100",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Our Classes
            </span>
            <h2
              style={{
                color: "#fff",
                fontSize: "32px",
                fontWeight: 600,
                textTransform: "uppercase",
                marginTop: "8px",
              }}
            >
              WHAT WE CAN OFFER
            </h2>
          </div>

          {/* Class Items */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              { img: "/assets/images/class-1.jpg", tag: "STRENGTH", title: "Weightlifting" },
              { img: "/assets/images/class-2.jpg", tag: "Cardio", title: "Indoor cycling" },
              { img: "/assets/images/class-3.jpg", tag: "STRENGTH", title: "Kettlebell power" },
              { img: "/assets/images/class-4.jpg", tag: "Cardio", title: "Indoor cycling", big: true },
              { img: "/assets/images/class-5.jpg", tag: "Training", title: "Boxing", big: true },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  overflow: "hidden",
                  marginBottom: "30px",
                  flex: item.big ? "1 1 100%" : "1 1 45%",
                }}
              >
                {/* Image */}
                <div>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

                {/* Text */}
                <div
                  style={{
                    background: "#0a0a0a",
                    position: "relative",
                    padding: "10px 30px 26px 30px",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-5px",
                      top: "-44px",
                      height: "100px",
                      width: "600px",
                      borderTop: "4px solid #464646",
                      background: "#0a0a0a",
                      transform: "rotate(-5deg)",
                      zIndex: -1,
                      content: '""',
                    }}
                  ></div>
                  <span
                    style={{
                      color: "#f36100",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    {item.tag}
                  </span>
                  <h5
                    style={{
                      fontSize: item.big ? "26px" : "20px",
                      color: "#fff",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    {item.title}
                  </h5>
                  <a
                    href="#"
                    style={{
                      display: "inline-block",
                      width: "46px",
                      height: "46px",
                      background: "rgba(255,255,255,0.1)",
                      lineHeight: "46px",
                      textAlign: "center",
                      fontSize: "24px",
                      color: "#fff",
                      position: "absolute",
                      right: "30px",
                      bottom: "26px",
                      textDecoration: "none",
                    }}
                  >
                    →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section
        style={{
          backgroundImage: "url('/assets/images/banner-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 0",
        }}
      >
        <div style={{ width: "90%", margin: "0 auto" }}>
          <div style={{ textAlign: "center", color: "#fff" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "bold", textTransform: "uppercase" }}>
              registration now to get more deals
            </h2>
            <div style={{ margin: "10px 0", fontSize: "18px" }}>
              Where health, beauty and fitness meet..
            </div>
            <a
              href="#"
              style={{
                backgroundColor: "#f36100",
                color: "#fff",
                padding: "12px 30px",
                textTransform: "uppercase",
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "4px",
                display: "inline-block",
                marginTop: "15px",
              }}
            >
              Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Appointment;
