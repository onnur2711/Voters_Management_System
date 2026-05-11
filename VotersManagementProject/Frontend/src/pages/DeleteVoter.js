import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function DeleteVoter() {

    const [id, setId] = useState("");

    const deleteVoter = async () => {

        if (id === "") {

            alert("Enter Voter ID");

            return;
        }

        try {

            const response = await axios.delete(
                `http://localhost:8800/votersapp/delete/${id}`
            );

            alert(response.data);

            setId("");

        }
        catch (error) {

            alert(
                error.response?.data?.message ||
                "Delete Failed"
            );
        }
    };

    return (

        <>

            <Navbar current="delete" />

            <div style={styles.page}>

                <h1 style={styles.heading}>
                    Delete Voter
                </h1>

                <div style={styles.card}>

                    <input
                        type="number"

                        placeholder="Enter Voter ID"

                        value={id}

                        onChange={(e) =>
                            setId(e.target.value)
                        }

                        style={styles.input}
                    />

                    <button
                        onClick={deleteVoter}

                        style={styles.button}
                    >
                        Delete Voter
                    </button>

                </div>

            </div>

        </>
    );
}

const styles = {

    page: {

        minHeight: "100vh",

        display: "flex",

        flexDirection: "column",

        justifyContent: "center",

        alignItems: "center"
    },

    heading: {

        color: "white",

        marginBottom: "30px",

        fontSize: "45px"
    },

    card: {

        backgroundColor: "white",

        padding: "30px",

        borderRadius: "15px",

        width: "350px",

        boxShadow:
            "0px 4px 15px rgba(0,0,0,0.2)"
    },

    input: {

        width: "100%",

        padding: "12px",

        marginBottom: "20px",

        borderRadius: "8px",

        border: "1px solid gray",

        fontSize: "16px"
    },

    button: {

        width: "100%",

        padding: "12px",

        backgroundColor: "red",

        color: "white",

        border: "none",

        borderRadius: "8px",

        fontSize: "18px",

        cursor: "pointer"
    }
};

export default DeleteVoter;