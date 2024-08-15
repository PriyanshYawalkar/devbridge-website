import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white"}}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project was created By{" "}
        <a href="#" style={{ color: "#87CEFA", textDecoration: "none" }}>
          DevBridge
        </a>
        . Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/frameone" style={{ color: "#87CEFA", textDecoration: "none" }}>
            FrameOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/framettwo" style={{ color: "#87CEFA", textDecoration: "none" }}>
            FrameTwo
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/framethree" style={{ color: "#87CEFA", textDecoration: "none" }}>
            FrameThree
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/framefour" style={{ color: "#87CEFA", textDecoration: "none" }}>
            FrameFour
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;