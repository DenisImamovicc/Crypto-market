import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import CryptoAd from "./Crypto-Advertising";
import FavouriteCrypto from "./Favourite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
function CryptoCurrPice() {
  const [cryptocurr, setCryptocurr] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCryptocurr(data);
        setIsPending(false);
        console.log(data);
      });
  }, []);

  //i % 3 === 0 använd logik för vart tredje del sant
  return (
    <div className="List">
      {isPending && <div className="Loading"><img src="images/loading-gear.svg" alt="Loading"/><p className="text-center">Loading...</p></div>}
      {cryptocurr &&
        cryptocurr.map((currency, i) => (
          <div key={currency.id}>
            <Card style={{ width: "18rem" }} className="currency">
              <div className="first-row">
                <Card.Img src={currency.image} className="crypto-img" />
                <Card.Header className="fw-italic">
                  {currency.name},{currency.symbol}
                </Card.Header>
                <div className="mx-3 font-group">
                <FavouriteCrypto />
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </div>
              <Table bordered hover variant="dark" size="sm">
                <tbody>
                  <tr>
                    <td className="fw-bold">Price:</td>
                    <td className="fw-bold">Market Cap</td>
                  </tr>
                  <tr>
                    <td>{currency.current_price}$</td>
                    <td>{currency.market_cap}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="fw-bold">High_24h</td>
                    <td className="fw-bold">Low_24h</td>
                  </tr>
                  <tr>
                    <td>{currency.high_24h}$</td>
                    <td>{currency.low_24h}$</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="fw-bold">Price change 24h</td>
                    <td className="fw-bold">Price change 24h%</td>
                  </tr>
                  <tr>
                    <td>{currency.price_change_24h}$</td>
                    <td>{currency.price_change_percentage_24h}%</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
            <CryptoAd i={i} />
          </div>
        ))}
    </div>
  );
}

export default CryptoCurrPice;
