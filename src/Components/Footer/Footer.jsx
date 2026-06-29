import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Beach Resort | Hotel Room Booking</h2>
      <p>
        &copy; <span>{year}</span> BeachResort.com



      </p>
    </footer>
  );
}
