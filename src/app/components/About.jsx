"use client";

export default function About() {
  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .about-flex {
            flex-direction: column;
          }
          .about-col,
          .service-col {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
          .service-item {
            padding-left: 80px !important;
          }
        }
        @media (max-width: 768px) {
          .about-flex {
            flex-direction: column;
          }
          .about-col,
          .service-col {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
          .service-item {
            padding-left: 70px !important;
          }
          h2 {
            font-size: 28px !important;
          }
        }
      `}</style>

      {/* About Section */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#fff",
          fontFamily: "Oswald, sans-serif",
        }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div
            className="about-flex"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {/* Left Image */}
            <div className="about-col" style={{ flex: "0 0 50%", maxWidth: "50%" }}>
              <div style={{ position: "relative" }}>
                <img
                  src="/assets/images/about-pic.jpg"
                  alt="About"
                  style={{ minWidth: "100%", display: "block" }}
                />
                <a
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-41.5px, -41.5px)",
                    display: "inline-block",
                  }}
                >
                  <img src="/assets/images/play.png" alt="Play" style={{ display: "block" }} />
                </a>
              </div>
            </div>

            {/* Right Text */}
            <div
              className="about-col"
              style={{
                flex: "0 0 50%",
                maxWidth: "50%",
                paddingTop: "15px",
                paddingLeft: "40px",
              }}
            >
              <h2
                style={{
                  fontSize: "40px",
                  color: "#111111",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  marginBottom: "25px",
                }}
              >
                Story About Us
              </h2>
              <p style={{ color: "#6b6b6b", marginBottom: "10px" }}>
                Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium
                sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet
                nibh vulputate cursus a amet.
              </p>
              <p style={{ color: "#6b6b6b", marginBottom: "50px" }}>
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam
                semper libero sit amet.
              </p>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  padding: "12px 30px",
                  backgroundColor: "#f15d44",
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section */}
<section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
  <div style={{ width: "100%", margin: "0 auto" }}>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      
      {/* Left column */}
      <div
        className="service-col"
        style={{
          flex: "0 0 50%",
          maxWidth: "50%",
          backgroundColor: "#2f2f2f",
        }}
      >
        <img
          src="/assets/images/service-pic.jpg"
          alt=""
          style={{
            width: "100%",
            display: "block",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Right column */}
      <div
        className="service-col"
        style={{
          flex: "0 0 50%",
          maxWidth: "50%",
          backgroundColor: "#141414",
          color: "#fff",
        }}
      >
        <div style={{ padding: "30px" }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            
            {/* Item 1 */}
            <div
              className="service-col"
              style={{
                flex: "0 0 50%",
                maxWidth: "50%",
                backgroundColor: "#141414",
              }}
            >
              <div
                style={{
                  padding: "70px 30px 30px 100px",
                  marginBottom: "30px",
                  position: "relative",
                  borderRadius: "8px",
                }}
              >
                <img
                  src="/assets/images/service-icon-1.png"
                  alt=""
                  style={{
                    position: "absolute",
                    left: "40px",
                    top: "35px",
                    width: "50px",
                    height: "50px",
                  }}
                />
                <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "#fff" }}>
                  Strategies
                </h4>
                <p style={{ color: "#6b6b6b", lineHeight: "1.6" }}>
                  Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part
                  urient montes.
                </p>
              </div>

              {/* Item 2 */}
              <div
                style={{
                  padding: "70px 30px 30px 100px",
                  marginBottom: "30px",
                  position: "relative",
                  borderRadius: "8px",
                }}
              >
                <img
                  src="/assets/images/service-icon-3.png"
                  alt=""
                  style={{
                    position: "absolute",
                    left: "40px",
                    top: "35px",
                    width: "50px",
                    height: "50px",
                  }}
                />
                <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "#fff" }}>
                  Workout
                </h4>
                <p style={{ color: "#6b6b6b", lineHeight: "1.6" }}>
                  Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part
                  urient montes.
                </p>
              </div>
            </div>

            {/* Item 3 & 4 */}
            <div
              className="service-col"
              style={{
                flex: "0 0 50%",
                maxWidth: "50%",
                backgroundColor: "#141414",
              }}
            >
              <div
                style={{
                  padding: "70px 30px 30px 100px",
                  marginBottom: "30px",
                  position: "relative",
                  borderRadius: "8px",
                }}
              >
                <img
                  src="/assets/images/service-icon-2.png"
                  alt=""
                  style={{
                    position: "absolute",
                    left: "40px",
                    top: "35px",
                    width: "50px",
                    height: "50px",
                  }}
                />
                <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "#fff" }}>
                  Yoga
                </h4>
                <p style={{ color: "#6b6b6b", lineHeight: "1.6" }}>
                  Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part
                  urient montes.
                </p>
              </div>

              <div
                style={{
                  padding: "70px 30px 30px 100px",
                  marginBottom: "30px",
                  position: "relative",
                  borderRadius: "8px",
                }}
              >
                <img
                  src="/assets/images/service-icon-4.png"
                  alt=""
                  style={{
                    position: "absolute",
                    left: "40px",
                    top: "35px",
                    width: "50px",
                    height: "50px",
                  }}
                />
                <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "#fff" }}>
                  Weight Loss
                </h4>
                <p style={{ color: "#6b6b6b", lineHeight: "1.6" }}>
                  Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part
                  urient montes.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}
