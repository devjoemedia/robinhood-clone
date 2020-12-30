import React from "react";
import "./StatsRow.css";
import StockSVG from "./stock.svg";
import { db } from "./firebase";

function StatsRow({ price, openPrice, name, shares }) {
  const percentage = price - (openPrice / openPrice) * 100;

  const myStocks = () => {
    db.collection("mystocks")
      .where("ticker", "==", name)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          // update
          querySnapshot.forEach(function (doc) {
            db.collection("mystocks")
              .doc(doc.id)
              .update({
                shares: (doc.data().shares += 1),
              });
          });
          console.log("exist");
        } else {
          // add to database
          db.collection("mystocks").add({
            ticker: name,
            shares: 1,
          });
        }
      });
  };

  return (
    <div className="row" onClick={myStocks}>
      <div className="row__intro">
        <h1>{name}</h1>
        <p>{shares && shares + " shares"}</p>
      </div>
      <div className="row__chart">
        <img src={StockSVG} alt="" height={16} />
      </div>
      <div className="row__numbers">
        <p className="row__price">${price}</p>
        <p className="row__percentage">+{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;
