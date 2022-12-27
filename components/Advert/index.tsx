import React from "react";

const Advert = () => {
  return (
    <>
      <img
        style={{ width: "100vw", objectFit: "contain" }}
        src="https://m.media-amazon.com/images/G/02/kindle/merch/2019/campaign/aucc/evergreen/BBU/BBU-ILM-B1-650x45-UK._CB451912896_.jpg"
        alt="Echo Dot"
      />
      <br />
      <div
        style={{
          backgroundColor: "#EBF8FA",
          color: "#111",
          padding: "8px",
          border: "1px solid black",
        }}
      >
        <span style={{ margin: "0px 0px 14px" }}>
          <strong>Buy 2 Echo Dot (3rd Gen) for £29.98</strong> when you add 2
          units to basket and apply the <strong> promo code 2ECHODOT3</strong>{" "}
          at check-out. <u>Terms apply</u>
        </span>
      </div>
    </>
  );
};

export default Advert;
