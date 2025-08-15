// app/news/page.jsx  (if using Next.js App Router)
import Image from "next/image";
import React from "react";

export default function News() {
  const sectionTitle = {
    marginBottom: "45px",
    textAlign: "center",
  };

  const sectionTitleH2 = {
    fontWeight: 600,
    color: "#191919",
    marginBottom: "46px",
    position: "relative",
    fontSize: "36px",
    lineHeight: "26px",
    paddingLeft: "12px",
  };

  const sectionTitleH2Before = {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    width: "70px",
    height: "3px",
    background: "#f34e3a",
    right: 0,
    margin: "0 auto",
    top: "49px",
  };

  const sectionTitleP = {
    color: "#6e6e6e",
  };

  const latestNewsSection = {
    paddingBottom: "70px",
  };

  const latestItems = {
    marginBottom: "30px",
  };

  const latestPicImg = {
    minWidth: "100%",
  };

  const latestText = {
    borderLeft: "1px solid #ebebeb",
    borderRight: "1px solid #ebebeb",
    borderBottom: "1px solid #ebebeb",
    padding: "25px 30px",
  };

  const latestTag = {
    overflow: "hidden",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const tagClock = {
    fontSize: "14px",
    color: "#9a9a9a",
    display: "flex",
    alignItems: "center",
  };

  const tagComments = {
    fontSize: "14px",
    color: "#9a9a9a",
    display: "flex",
    alignItems: "center",
    marginLeft: "28px",
  };

  const tagIcon = {
    marginRight: "8px",
  };

  const latestTitle = {
    fontSize: "20px",
    fontWeight: 500,
    color: "#191919",
    lineHeight: "28px",
  };

  const latestLink = {
    color: "#191919",
    transition: "0.3s",
    textDecoration: "none",
  };

  const latestLinkHover = {
    color: "#f34e3a",
  };

  const newsData = [
    {
      img: "/assets/images/latest-1.jpg",
      date: "Dec 11, 2018",
      comments: "6 Comments",
      title: "The Greatist Team's Favorite Leggings With Pockets",
    },
    {
      img: "/assets/images/latest-2.jpg",
      date: "Dec 19, 2018",
      comments: "6 Comments",
      title:
        "Everything You Need to Know Before Your First Indoor Cycling Class",
    },
    {
      img: "/assets/images/latest-3.jpg",
      date: "Dec 23, 2018",
      comments: "6 Comments",
      title:
        "Run Your Best Race Ever with These 5 Tips for the Perfect Taper",
    },
  ];

  return (
    <section style={latestNewsSection}>
      <div style={{ maxWidth: "1140px", margin: "0 auto", marginTop: "50px" }}>
        <div style={sectionTitle}>
          <h2 style={sectionTitleH2}>Latest News</h2>
          <p style={sectionTitleP}>A range of services adapted to your needs</p>
        </div>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {newsData.map((news, index) => (
            <div key={index} style={{ flex: "1 1 calc(33.333% - 20px)" }}>
              <div style={latestItems}>
                <div>
                  <Image
                    src={news.img}
                    alt={news.title}
                    width={350}
                    height={230}
                    style={latestPicImg}
                  />
                </div>
                <div style={latestText}>
                  <div style={latestTag}>
                    <div style={tagClock}>
                      <i className="fa fa-clock-o" style={tagIcon}></i>
                      {news.date}
                    </div>
                    <div style={tagComments}>
                      <i className="fa fa-comments-o" style={tagIcon}></i>
                      {news.comments}
                    </div>
                  </div>
                  <h5 style={latestTitle}>
                    <a href="#" style={latestLink}>
                      {news.title}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
