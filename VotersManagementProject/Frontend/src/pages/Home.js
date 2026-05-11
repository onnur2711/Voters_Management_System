import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (

        <div style={styles.container}>

            <h1 style={styles.heading}>
                Voter Management System
            </h1>

            <p style={styles.subHeading}>
                Manage voters easily with complete CRUD operations
            </p>

            <div style={styles.buttonContainer}>

                <button
                    style={styles.button}
                    onClick={() => navigate("/add")}
                >
                    Add Voter
                </button>

                <button
                    style={styles.button}
                    onClick={() => navigate("/allvoters")}
                >
                    Display All Voters
                </button>

                <button
                    style={styles.button}
                    onClick={() => navigate("/search")}
                >
                    Search Voter
                </button>

                <button
                    style={styles.button}
                    onClick={() => navigate("/readone")}
                >
                    Read One Voter
                </button>

                <button
                    style={styles.button}
                    onClick={() => navigate("/update")}
                >
                    Update Voter
                </button>

                <button
                    style={styles.button}
                    onClick={() => navigate("/delete")}
                >
                    Delete Voter
                </button>

            </div>

        </div>
    );
}

const styles = {

    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",

        background:
            "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",

        fontFamily: "Arial"
    },

    heading: {
        fontSize: "48px",
        color: "white",
        marginBottom: "10px",

        textShadow:
            "2px 2px 10px rgba(0,0,0,0.3)"
    },

    subHeading: {
        color: "white",
        fontSize: "18px",
        marginBottom: "35px"
    },

    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "18px"
    },

    button: {
        width: "280px",
        padding: "14px",

        border: "none",
        borderRadius: "10px",

        backgroundColor: "white",

        color: "#185a9d",

        fontSize: "17px",
        fontWeight: "bold",

        cursor: "pointer",

        boxShadow:
            "0px 4px 12px rgba(0,0,0,0.2)",

        transition: "0.3s"
    }
};

export default Home;