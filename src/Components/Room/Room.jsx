import React from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// import assets
import defaultImg from "../../assets/img/jpeg/room-1.jpeg";

// import prop-types
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />

        <div className="price-top">
          <h6>&#8377; {price}</h6>
          <p>per night</p>
        </div>

        {/* Feature Button */}
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Feature
        </Link>

        {/* Book Now Button */}
        <Link to={`/booking/${slug}`} className="btn-book room-book-link">
          Book Now
        </Link>
      </div>

      <p className="room-info">{name}</p>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};