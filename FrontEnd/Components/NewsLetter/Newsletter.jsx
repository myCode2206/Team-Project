import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Newsletter = () => {
  return (
    <div
      style={{
        backgroundColor: "#734060",
        height: "180px",
        margin: "10px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <div className="icons" style={{ display: "flex", alignItems: "center" }}>
        <h5 style={{ color: "white", margin: "0 15px", fontSize: "20px" }}>
          FOLLOW US
        </h5>
        <FacebookRoundedIcon
          style={{ color: "white", fontSize: "40px", marginRight: "8px" }}
        />
        <InstagramIcon
          style={{ color: "white", fontSize: "40px", marginRight: "8px" }}
        />
        <TwitterIcon style={{ color: "white", fontSize: "40px" }} />
      </div>
      <div className="newsletter-form">
        <h3 style={{ color: "white" }}>Signup For Latest Updates</h3>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Email Address" />
        <button style={{ backgroundColor: "#ECB554", color: "white" }}>
          submit
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
