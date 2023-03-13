import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Finance.css";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

function FinanceApi() {
  const [coins, setCoins] = useState([]);
  const [nextBtn, setNextBtn] = useState(false);
  console.log(coins);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const SecondTableData = coins.slice(0, 3);
  const ThirdTableData = coins.slice(3, 6);
  console.log("SecondTableData", SecondTableData);
  console.log("ThirdTableData", ThirdTableData);
  return (
    <div className="coin-app">
      {!nextBtn && <FirstPage data={SecondTableData} />}
      {nextBtn && <SecondPage data={ThirdTableData} />}
      <button
        onClick={() => setNextBtn(!nextBtn)}
        className={`Button ${nextBtn ? "NextBtnColor" : "RemainBtnColor"}`}
      >
        {nextBtn ? "Back to First Three Data" : "Next To remaining Data"}
      </button>
    </div>
  );
}

export default FinanceApi;
