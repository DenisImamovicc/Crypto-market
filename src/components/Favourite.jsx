import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const FavouriteCrypto = () => {
  const [favor, SetFavor] = useState(false);

  function favourAction() {
    if (favor === false) {
      SetFavor(true);
    } else {
      SetFavor(false);
    }
  }

  useEffect(() => {
    console.log(favor);
  }, [favor]);
  
  return (
    <div className="ikon">
      <FontAwesomeIcon icon={faHeart}  onClick={favourAction} color={favor? "blue":"gray"} />
    </div>
  );
};

export default FavouriteCrypto;
