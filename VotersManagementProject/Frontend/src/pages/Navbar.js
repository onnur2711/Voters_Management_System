import { useNavigate } from "react-router-dom";

function Navbar({ current }) {

  const navigate = useNavigate();

  return (

    <div style={navStyle}>

      {
        current !== "home" && (

          <button
            style={btn}
            onClick={() => navigate("/")}
          >
            Home
          </button>
        )
      }

      {
        current !== "add" && (

          <button
            style={btn}
            onClick={() => navigate("/add")}
          >
            Add
          </button>
        )
      }

      {
        current !== "all" && (

          <button
            style={btn}
            onClick={() => navigate("/allvoters")}
          >
            All Voters
          </button>
        )
      }

      {
        current !== "search" && (

          <button
            style={btn}
            onClick={() => navigate("/search")}
          >
            Search
          </button>
        )
      }

      {
        current !== "update" && (

          <button
            style={btn}
            onClick={() => navigate("/update")}
          >
            Update
          </button>
        )
      }

      {
        current !== "delete" && (

          <button
            style={btn}
            onClick={() => navigate("/delete")}
          >
            Delete
          </button>
        )
      }

      {
        current !== "readone" && (

          <button
            style={btn}
            onClick={() => navigate("/readone")}
          >
            Read One
          </button>
        )
      }

    </div>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  padding: "20px",
  backgroundColor: "#1e3c72"
};

const btn = {
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "white",
  color: "#1e3c72",
  fontWeight: "bold"
};

export default Navbar;