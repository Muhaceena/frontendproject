
import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    salary: "",
    age: "",
    phone: "",
    email: "",
    place: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); 

  
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
   
    if (Object.values(profile).some((value) => value.trim() === "")) {
      setSuccessMessage("Please fill in all fields before saving.");
      return;
    }

    localStorage.setItem("profile", JSON.stringify(profile));
    
    setSuccessMessage("Saved successfully!"); 
    setTimeout(() => setSuccessMessage(""), 3000); 
  };

  return (
    <Container className="mt-5">
      <h2>Profile Settings</h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>} {/* Success Message */}
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={profile.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control type="number" name="salary" value={profile.salary} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" name="age" value={profile.age} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" name="phone" value={profile.phone} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={profile.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Place</Form.Label>
          <Form.Control type="text" name="place" value={profile.place} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" className="mt-3" onClick={handleSave}>
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default Profile;
// import React, { useState, useEffect } from "react";
// import { Container, Form, Button, Alert } from "react-bootstrap";

// const Profile = () => {
//   const [profile, setProfile] = useState({
//     name: "",
//     salary: "",
//     age: "",
//     phone: "",
//     email: "",
//     place: "",
//   });

//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     const savedProfile = JSON.parse(localStorage.getItem("profile"));
//     if (savedProfile) {
//       setProfile(savedProfile);
//     }
//   }, []);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     if (Object.values(profile).some((value) => value.trim() === "")) {
//       setSuccessMessage("Please fill in all fields before saving.");
//       return;
//     }

//     localStorage.setItem("profile", JSON.stringify(profile));

//     setSuccessMessage("Saved successfully!");
//     setTimeout(() => setSuccessMessage(""), 3000);
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{ backgroundColor: "#f8f9fa" }}
//     >
//       <Container
//         className="p-4 shadow rounded bg-white"
//         style={{ maxWidth: "500px", width: "100%", textAlign: "center" }}
//       >
//         <h2>Profile Settings</h2>
//         {successMessage && <Alert variant="success">{successMessage}</Alert>}
//         <Form>
//           <Form.Group>
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" name="name" value={profile.name} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Salary</Form.Label>
//             <Form.Control type="number" name="salary" value={profile.salary} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Age</Form.Label>
//             <Form.Control type="number" name="age" value={profile.age} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Phone Number</Form.Label>
//             <Form.Control type="tel" name="phone" value={profile.phone} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" name="email" value={profile.email} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Place</Form.Label>
//             <Form.Control type="text" name="place" value={profile.place} onChange={handleChange} />
//           </Form.Group>
//           <Button variant="primary" className="mt-3 w-100" onClick={handleSave}>
//             Save
//           </Button>
//         </Form>
//       </Container>
//     </div>
//   );
// };

// export default Profile;
