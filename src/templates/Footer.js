import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        borderTop: "2px solid #E5E7EB",
      }}
      className="text-center"
    >
      <p
        style={{
          margin: "25px 0 10px 0",
          color: "#A2A2A2",
        }}
        className="text-xs leading-6"
      >
        This website is created as part of HLsolutions program.The materials
        contained on this website are provided for general <br /> information
        only and do not constitute any form of advice. HLS assumes no
        responsibility for the accuracy of any particular statement and <br />{" "}
        accepts no liability for any loss or damage which may arise from
        reliance on the information contained on this site
      </p>
      <p className="text-sm">Copyright 2021 HLS</p>
    </div>
  );
};

export default Footer;
