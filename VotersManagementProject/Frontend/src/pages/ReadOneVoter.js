import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function ReadOneVoter() {

    const [vId, setVId] = useState("");

    const [voter, setVoter] = useState(null);

    // FETCH VOTER

    const getVoterById = async () => {

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

    return (

        <>

            <Navbar current="readone" />

            <div style={styles.page}>

                <h1 style={styles.heading}>
                    Read One Voter
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
                        onClick={getVoterById}

                        style={styles.button}
                    >
                        Read Voter
                    </button>

                </div>

                {/* VOTER DETAILS */}

                {
                    voter && (

                        <div style={styles.voterCard}>

                            <h2 style={styles.name}>
                                {voter.vName}
                            </h2>

                            <p>
                                <b>ID :</b> {voter.vId}
                            </p>

                            <p>
                                <b>Email :</b> {voter.eMail}
                            </p>

                            <p>
                                <b>Mobile :</b> {voter.mobile}
                            </p>

                            <p>
                                <b>Age :</b> {voter.age}
                            </p>

                            <p>
                                <b>Gender :</b> {voter.gender}
                            </p>

                            <p>
                                <b>Aadhaar :</b> {voter.aadhaar}
                            </p>

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

    voterCard: {

        backgroundColor: "white",

        marginTop: "30px",

        padding: "25px",

        borderRadius: "15px",

        width: "350px",

        lineHeight: "1.8",

        boxShadow:
            "0px 4px 15px rgba(0,0,0,0.2)"
    },

    name: {

        color: "#185a9d",

        marginBottom: "15px"
    },

    input: {

        width: "100%",

        padding: "12px",

        marginBottom: "15px",

        borderRadius: "8px",

        border: "1px solid gray",

        fontSize: "15px"
    },

    button: {

        width: "100%",

        padding: "12px",

        backgroundColor: "#185a9d",

        color: "white",

        border: "none",

        borderRadius: "8px",

        fontSize: "16px",

        cursor: "pointer"
    }
};

export default ReadOneVoter;