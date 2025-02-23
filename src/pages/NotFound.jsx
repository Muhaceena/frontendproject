import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="mt-5 text-center">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
    </Container>
  );
};

export default NotFound;
