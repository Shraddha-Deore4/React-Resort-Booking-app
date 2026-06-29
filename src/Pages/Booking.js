import React, { useState } from "react";
import { Link } from "react-router-dom";

const todayStr = () => {
  const d = new Date();
  return d.toISOString().split("T")[0];
};

const emptyForm = {
  fullName: "",
  age: "",
  mobile: "",
  guests: "",
  adults: "",
  children: "",
  arrivalDate: "",
  arrivalTime: "",
  checkoutDate: "",
  specialRequests: "",
};

function validate(data) {
  const errors = {};

  if (!data.fullName.trim()) errors.fullName = "Full name required";
  if (!data.age || data.age < 18) errors.age = "Valid age required";
  if (!/^\d{10}$/.test(data.mobile)) errors.mobile = "Valid mobile required";
  if (!data.guests) errors.guests = "Guests required";
  if (!data.adults) errors.adults = "Adults required";
  if (data.children === "") errors.children = "Children required";
  if (!data.arrivalDate) errors.arrivalDate = "Arrival date required";
  if (!data.arrivalTime) errors.arrivalTime = "Arrival time required";
  if (!data.checkoutDate) errors.checkoutDate = "Checkout date required";

  return errors;
}

export default function Booking({ match }) {
  const { slug } = match.params;

  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const booking = {
      room: slug,
      ...formData,
    };

    console.log("Sending booking:", booking); // Debug

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/bookings/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });

      const data = await response.json();
      console.log("Server Response:", data);

      if (response.ok) {
        setConfirmed(true);
        setFormData(emptyForm);
        setErrors({});
      } else {
        alert(data.error || "Booking failed");
      }

    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Server connection failed");
    } finally {
      setLoading(false);
    }
  };

  if (confirmed) {
    return (
      <div className="booking-page">
        <div className="booking-confirmation">
          <h2>Booking Confirmed ✅</h2>
          <p>Your reservation for <strong>{slug}</strong> room is successful.</p>
          <button onClick={() => setConfirmed(false)}>
            Book Again
          </button>
          <br /><br />
          <Link to="/rooms">Back to Rooms</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="booking-header">
        <h2>Reserve Your {slug} Room</h2>
      </div>

      <div className="booking-form-card">
        <form onSubmit={handleSubmit}>

          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error-msg">{errors.fullName}</p>}

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p className="error-msg">{errors.age}</p>}

          <input
            name="mobile"
            placeholder="Mobile (10 digits)"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="error-msg">{errors.mobile}</p>}

          <input
            type="number"
            name="guests"
            placeholder="Guests"
            value={formData.guests}
            onChange={handleChange}
          />

          <input
            type="number"
            name="adults"
            placeholder="Adults"
            value={formData.adults}
            onChange={handleChange}
          />

          <input
            type="number"
            name="children"
            placeholder="Children"
            value={formData.children}
            onChange={handleChange}
          />

          <input
            type="date"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            min={todayStr()}
          />

          <input
            type="time"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleChange}
          />

          <input
            type="date"
            name="checkoutDate"
            value={formData.checkoutDate}
            onChange={handleChange}
          />

          <textarea
            name="specialRequests"
            placeholder="Special Requests"
            value={formData.specialRequests}
            onChange={handleChange}
          />

          <br /><br />

          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Confirm Booking"}
          </button>

        </form>
      </div>
    </div>
  );
}