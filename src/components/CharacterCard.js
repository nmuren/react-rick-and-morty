import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CharacterCard = ({ name, image, status, location, url }) => {
  return (
    <Card className="styled-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        {url ? (
          <Link to={url}>
            <Card.Title className="mb-3">{name}</Card.Title>
          </Link>
        ) : (
          <Card.Title className="mb-3">{name}</Card.Title>
        )}
        <Card.Subtitle className="mb-3 text-muted row">
          <span className="col">
            {/* <img src={user} alt="status" width="16" height="16" /> */}
            {status}
          </span>
          <span className="col">
            {/* <img src={calendar} alt="location" width="16" height="16" /> */}
            {location}
          </span>
        </Card.Subtitle>
        {/* <Card.Text className="text-muted">{text}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
