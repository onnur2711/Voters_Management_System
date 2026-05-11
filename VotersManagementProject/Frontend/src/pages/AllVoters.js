import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function AllVoters() {

    const [voters, setVoters] = useState([]);

    // FETCH ALL VOTERS

    const getAllVoters = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8800/votersapp/readall"
            );

            setVoters(response.data);

        }
        catch (error) {

            console.log(error);

            alert("Failed To Fetch Voters");
        }
    };

    // LOAD DATA

    useEffect(() => {

        getAllVoters();

    }, []);

    return (

        <>

            <Navbar current="all" />

            <div style={styles.page}>

                <h1 style={styles.heading}>
                    All Voters
                </h1>

                <div style={styles.voterContainer}>

                    {
                        voters.map((voter) => (

                            <div
                                key={voter.vId}
                                style={styles.card}
                            >

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
                        ))
                    }

                </div>

            </div>

        </>
    );
}

const styles = {

    page: {

        minHeight: "100vh",

        padding: "30px"
    },

    heading: {

        textAlign: "center",

        color: "white",

        marginBottom: "40px",

        fontSize: "45px"
    },

    voterContainer: {

        display: "grid",

        gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",

        gap: "30px"
    },

    card: {

        backgroundColor: "white",

        padding: "25px",

        borderRadius: "18px",

        boxShadow:
            "0px 6px 20px rgba(0,0,0,0.2)",

        transition: "0.3s",

        lineHeight: "1.8"
    },

    name: {

        color: "#185a9d",

        marginBottom: "15px",

        fontSize: "30px"
    }
};

export default AllVoters;