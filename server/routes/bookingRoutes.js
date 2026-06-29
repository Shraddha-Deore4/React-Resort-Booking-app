const express = require("express");
const router = express.Router();
const db = require("../db");

// Add Booking
router.post("/add", (req, res) => {
  const booking = req.body;

  const sql = `
    INSERT INTO bookings 
    (room, fullName, age, mobile, guests, adults, children, arrivalDate, arrivalTime, checkoutDate, specialRequests, bookedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
  `;

  db.query(
    sql,
    [
      booking.room,
      booking.fullName,
      booking.age,
      booking.mobile,
      booking.guests,
      booking.adults,
      booking.children,
      booking.arrivalDate,
      booking.arrivalTime,
      booking.checkoutDate,
      booking.specialRequests
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Database error" });
      }

      res.json({ message: "Booking Saved Successfully" });
    }
  );
});

// Get All Bookings (Admin)
router.get("/", (req, res) => {
  db.query("SELECT * FROM bookings ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

module.exports = router;