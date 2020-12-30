import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";
import StatsRow from "./StatsRow";
import { db } from "./firebase";

const token = "bvlgh1v48v6vvdqsoim0";
const baseURL = "https://finnhub.io/api/v1/quote";

function Stats() {
  const [stockData, setStockData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = () => {
    db.collection("mystocks").onSnapshot((snapshot) => {
      let tempData = [];
      let promises = [];
      snapshot.docs.map((doc) => {
        promises.push(
          getStockData(doc.data().ticker).then((res) => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            });
            console.log(tempData); 
          })
        );
      });
      Promise.all(promises).then(() => {
        setMyStocks(tempData);
      });
    });
  };

  const getStockData = (stock) => {
    return axios
      .get(`${baseURL}?symbol=${stock}&token=${token}`)
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMyStocks();
    let tempStocksData = [];
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "UBER",
      "BABA",
      "FB",
      "SBUX",
      "DIS",
    ];
    let promises = [];

    stocksList.map((stock) => {
      promises.push(
        getStockData(stock).then((res) => {
          tempStocksData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setStockData(tempStocksData);
    });
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>stats</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
          {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                price={stock.info.c}
                shares={stock.data.shares}
              />
            ))}
          </div>
        </div>
        <div className="stats__header stats__lists">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
