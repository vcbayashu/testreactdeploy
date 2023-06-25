import { useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
const ConditionalRendering = () => {
  const [isVerified, setisVerified] = useState(false);

  return (
    <>
      <h1>enthuashu </h1>
      {isVerified ? (
        <p>
          enthuashu is verified
          <VerifiedIcon sx={{ backgroundColor: "blue" }} />
        </p>
      ) : null}

      <button onClick={() => setisVerified(true)} type="button">
        Verify enthuashu
      </button>
    </>
  );
};

export default ConditionalRendering;
