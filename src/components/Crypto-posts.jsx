import CryptoAd from "./Crypto-Advertising";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

function CryptoPosts() {
  const [cryptoPosts, setCryptoPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const url = "https://crypto.bestin.com/wp-json/wp/v2/posts";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((posts) => {
        setCryptoPosts(posts);
        setIsPending(false);
        console.log(posts);
      });
  }, []);
  return (
    <div className="CryptoPosts">
      {isPending && <div className="Loading"><img src="images/loading-gear.svg" alt="Loading"/><p className="text-center">Loading...</p></div>}
      {cryptoPosts &&
        cryptoPosts.map((post, i) => (
          <div className="post" key={post.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={post.yoast_head_json.og_image[0].url}
                alt="post article title"
              />
              <Card.Body>
                <Card.Title className="text-white">
                  {post.yoast_head_json.og_title}
                </Card.Title>
                <Card.Text className="text-white desc-post">
                  {post.yoast_head_json.og_description}
                </Card.Text>
                <Button
                  className="goToPostBtn"
                  href={post.yoast_head_json.og_url}
                  target="_blank"
                >
                  Go to article
                </Button>
              </Card.Body>
            </Card>
            <CryptoAd i={i} />
          </div>
        ))}
    </div>
  );
}

export default CryptoPosts;
