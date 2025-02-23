
import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [hiddenFeedback, setHiddenFeedback] = useState([]);
  const [showHidden, setShowHidden] = useState(false);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedbackList")) || [];
    setFeedbackList(storedFeedback);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    const newFeedbackList = [...feedbackList, feedback];
    setFeedbackList(newFeedbackList);
    localStorage.setItem("feedbackList", JSON.stringify(newFeedbackList));
    setFeedback("");
  };

  const handleDismiss = (index) => {
    const updatedHidden = [...hiddenFeedback, feedbackList[index]];
    setHiddenFeedback(updatedHidden);
    setFeedbackList(feedbackList.filter((_, i) => i !== index));
  };

  const handleShowHidden = () => {
    setFeedbackList([...feedbackList, ...hiddenFeedback]);
    setHiddenFeedback([]);
    setShowHidden(false);
  };

  return (
    <Container className="mt-5">
      <h2>Give Your Feedback</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Feedback</Form.Label>
          <Form.Control as="textarea" rows={3} value={feedback} onChange={(e) => setFeedback(e.target.value)} />
        </Form.Group>
        <Button variant="success" type="submit" className="mt-3">Submit</Button>
      </Form>
      
      {feedbackList.map((item, index) => (
        <Alert key={index} variant="info" dismissible onClose={() => handleDismiss(index)} className="mt-3">
          {item}
        </Alert>
      ))}
      
      {hiddenFeedback.length > 0 && (
        <Button variant="secondary" className="mt-3" onClick={handleShowHidden}>
          Show Hidden Feedback
        </Button>
      )}
    </Container>
  );
};

export default Feedback;