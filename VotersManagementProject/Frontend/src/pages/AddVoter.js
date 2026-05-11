import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function AddVoter() {

  const [voter, setVoter] = useState({
    vName: "",
    eMail: "",
    mobile: "",
    age: "",
    gender: "",
    aadhaar: ""
  });

  const handleChange = (e) => {

    setVoter({
      ...voter,
      [e.target.name]: e.target.value
    });
  };

  const addVoter = async () => {

    try {

      const response = await axios.post(
        "http://localhost:8800/votersapp/insert",
        voter
      );

      alert("Voter Added Successfully");

      console.log(response.data);

      setVoter({
        vName: "",
        eMail: "",
        mobile: "",
        age: "",
        gender: "",
        aadhaar: ""
      });

    } catch (error) {

  console.log(error);

  if (error.response) {

    const data = error.response.data;

    // Validation Errors

    if (typeof data === "object") {

      const firstError =
        Object.values(data)[0];

      alert(firstError);

    } else {

      alert(data);
    }

  } else {

    alert("Server Error");
  }
}
  };

  return (

    <>

      <Navbar current="add" />
       <div style={styles.container}>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
          backgroundColor: "#f4f6f9"
        }}
      >

        <div
          style={{
            width: "400px",
            padding: "30px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px gray"
          }}
        >

          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px"
            }}
          >
            Add Voter
          </h2>

          <input
            type="text"
            name="vName"
            placeholder="Enter Name"
            value={voter.vName}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="eMail"
            placeholder="Enter Email"
            value={voter.eMail}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="mobile"
            placeholder="Enter Mobile"
            value={voter.mobile}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={voter.age}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="gender"
            placeholder="Enter Gender"
            value={voter.gender}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="aadhaar"
            placeholder="Enter Aadhaar"
            value={voter.aadhaar}
            onChange={handleChange}
            style={inputStyle}
          />

          <button
            onClick={addVoter}
            style={buttonStyle}
          >
            Add Voter
          </button>

        </div>
        </div>
        </div>

    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "15px",
  borderRadius: "5px",
  border: "1px solid gray"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  backgroundColor: "#1e3c72",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer"
};

const styles = {

    container:{
        minHeight:"100vh",

        display:"flex",
        flexDirection:"column",

        justifyContent:"center",
        alignItems:"center"
    },

    card:{
        backgroundColor:"white",

        padding:"30px",

        borderRadius:"12px",

        boxShadow:
        "0px 4px 15px rgba(0,0,0,0.2)"
    }
}
export default AddVoter;