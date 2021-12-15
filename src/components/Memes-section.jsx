import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import CryptoAd from "./Crypto-Advertising";

const Memes = () => {
  const [memes, setMemes] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const url = "https://meme-api.herokuapp.com/gimme/cryptocurrencymemes/10";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMemes(data.memes);
        setIsPending(false);
      });
  }, []);

  console.log(memes);
  return (
    <div className="Memes-list">
      {isPending && <div className="Loading"><img src="images/loading-gear.svg" alt="Loading"/><p className="text-center">Loading...</p></div>}
      {memes &&
        memes.map((meme, i) => (
          <div className="meme" key={i}>
            <Card className="bg-dark text-white" style={{ width: "18rem" }}>
              <Card.Title>{meme.title}</Card.Title>
              <Card.Img src={meme.preview[2]} alt="A meme" />
            </Card>
            <CryptoAd i={i} />
          </div>
        ))}
    </div>
  );
};

export default Memes;
