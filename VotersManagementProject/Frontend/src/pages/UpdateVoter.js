import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function UpdateVoter() {

    const [vId, setVId] =
        useState("");

    const [voter, setVoter] =
        useState({
            vName: "",
            eMail: "",
            mobile: "",
            age: "",
            gender: "",
            aadhaar: ""
        });

    // HANDLE INPUTS

    const handleChange = (e) => {

        setVoter({
            ...voter,
            [e.target.name]:
                e.target.value
        });
    };

    // FETCH VOTER

    const fetchVoter = async () => {

        if (!vId) {

            alert("Enter Voter ID");

            return;
        }

        try {

            const response = await axios.get(
                `http://localhost:8800/votersapp/readone/${vId}`
            );

            setVoter(response.data);

        }
        catch (error) {

            console.log(error);

            alert("Voter Not Found");
        }
    };

    // UPDATE VOTER

    const updateVoter = async () => {

        try {

            await axios.put(
                `http://localhost:8800/votersapp/update/${vId}`,
                voter
            );

            alert(
                "Voter Updated Successfully"
            );

        }
        catch (error) {

            console.log(error);

            if (error.response) {

                const data =
                    error.response.data;

                if (typeof data === "object") {

                    const firstError =
                        Object.values(data)[0];

                    alert(firstError);

                }
                else {

                    alert(data);
                }
            }
            else {

                alert("Update Failed");
            }
        }
    };

    return (

        <>

            <Navbar current="update" />

            <div style={styles.page}>

                <h1 style={styles.heading}>
                    Update Voter
                </h1>

                {/* SEARCH BOX */}

                <div style={styles.searchCard}>

                    <input
                        type="number"

                        placeholder="Enter Voter ID"

                        value={vId}

                        onChange={(e) =>
                            setVId(e.target.value)
                        }

                        style={styles.input}
                    />

                    <button
                        onClick={fetchVoter}

                        style={styles.searchButton}
                    >
                        Fetch Voter
                    </button>

                </div>

                {/* UPDATE FORM */}

                {
                    voter.vName && (

                        <div style={styles.formCard}>

                            <input
                                type="text"
                                name="vName"
                                placeholder="Enter Name"
                                value={voter.vName}
                                onChange={handleChange}
                                style={styles.input}
                            />

                            <input
                                type="email"
                                name="eMail"
                                placeholder="Enter Email"
                                value={voter.eMail}
                                onChange={handleChange}
                                style={styles.input}
                            />

                            <input
                                type="text"
                                name="mobile"
                                placeholder="Enter Mobile"
                                value={voter.mobile}
                                onChange={handleChange}
                                style={styles.input}
                            />

                            <input
                                type="number"
                                name="age"
                                placeholder="Enter Age"
                                value={voter.age}
                                onChange={handleChange}
                                style={styles.input}
                            />

                            <input
                                type="text"
                                name="gender"
                                placeholder="Enter Gender"
                                value={voter.gender}
                                onChange={handleChange}
                                style={styles.input}
                            />

                            <input
                                type="text"
                                name="aadhaar"
                                placeholder="Enter Aadhaar"
                                value={voter.aadhaar}
                                onChange={handleChange}
                                style={styles.input}
                            />

                            <button
                                onClick={updateVoter}

                                style={styles.updateButton}
                            >
                                Update Voter
                            </button>

                        </div>
                    )
                }

            </div>

        </>
    );
}

const styles = {

    page: {

        minHeight: "100vh",

        display: "flex",

        flexDirection: "column",

        alignItems: "center",

        paddingTop: "40px"
    },

    heading: {

        color: "white",

        marginBottom: "30px",

        fontSize: "45px"
    },

    searchCard: {

        backgroundColor: "white",

        padding: "25px",

        borderRadius: "15px",

        width: "350px",

        boxShadow:
            "0px 4px 15px rgba(0,0,0,0.2)"
    },

    formCard: {

        backgroundColor: "white",

        marginTop: "30px",

        padding: "25px",

        borderRadius: "15px",

        width: "350px",

        boxShadow:
            "0px 4px 15px rgba(0,0,0,0.2)"
    },

    input: {

        width: "100%",

        padding: "12px",

        marginBottom: "15px",

        borderRadius: "8px",

        border: "1px solid gray",

        fontSize: "15px"
    },

    searchButton: {

        width: "100%",

        padding: "12px",

        backgroundColor: "#185a9d",

        color: "white",

        border: "none",

        borderRadius: "8px",

        fontSize: "15px",

        cursor: "pointer"
    },

    updateButton: {

        width: "100%",

        padding: "12px",

        backgroundColor: "green",

        color: "white",

        border: "none",

        borderRadius: "8px",

        fontSize: "15px",

        cursor: "pointer"
    }
};

export default UpdateVoter;