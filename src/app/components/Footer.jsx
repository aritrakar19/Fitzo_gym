import React from "react";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#191919",
    color: "#fff",
    padding: "40px 20px 20px 20px",
    // marginTop: "40px",
  };

  const container = {
    maxWidth: "1140px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
  };

  const col = {
    flex: "1 1 200px",
  };

  const logo = {
    fontSize: "24px",
    fontWeight: "bold",
    // color: "#f34e3a",
    marginBottom: "15px",
  };

  const linksList = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const linkItem = {
    marginBottom: "10px",
  };

  const link = {
    color: "#ccc",
    textDecoration: "none",
    transition: "0.3s",
  };

  const linkHover = {
    color: "#f34e3a",
  };

  const socialIcons = {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  };

  const socialLink = {
    color: "#fff",
    fontSize: "18px",
    textDecoration: "none",
    transition: "0.3s",
  };

  const bottomBar = {
    borderTop: "1px solid #333",
    textAlign: "center",
    padding: "10px 0",
    fontSize: "14px",
    marginTop: "20px",
    color: "#888",
  };

  return (
    <footer style={footerStyle}>
      <div style={container}>
        {/* Logo & About */}
        <div style={col}>
          <div style={logo}>
            FIT<span style={{ color: "#ed563b" }}>ZO</span>
          </div>
          <p>
            Your go-to place for latest news, articles, and updates tailored to
            your interests.
          </p>
        </div>

        {/* Quick Links */}
        <div style={col}>
          <h4>Quick Links</h4>
          <ul style={linksList}>
            <li style={linkItem}>
              <a href="/" style={link}>
                Home
              </a>
            </li>
            <li style={linkItem}>
              <a href="/about" style={link}>
                About
              </a>
            </li>
            <li style={linkItem}>
              <a href="/news" style={link}>
                News
              </a>
            </li>
            <li style={linkItem}>
              <a href="/contact" style={link}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div style={col}>
          <h4>Follow Us</h4>
          <div style={socialIcons}>
            <a href="#" style={socialLink}>
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" style={socialLink}>
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" style={socialLink}>
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" style={socialLink}>
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={bottomBar}>
        © {new Date().getFullYear()} FITZO. All Rights Reserved.
      </div>
    </footer>
  );
}
