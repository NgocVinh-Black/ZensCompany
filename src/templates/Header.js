import React from "react";
import imgLogo from "../assets/image/logo.png";
import imgAvatar from "../assets/image/avatar.png";

const Header = () => {
  return (
    <div className="container">
      <div className="flex justify-between py-4">
        <img
          style={{
            width: 80,
            height: 70,
          }}
          src={imgLogo}
          alt=""
        />
        <div className="flex text-right items-center gap-5">
          <div>
            <p
              style={{
                color: "#A2A2A2",
                fontStyle: "italic",
              }}
            >
              Handicrafted by
            </p>
            <p>Jim HLS</p>
          </div>
          <img
            style={{
              width: 80,
              height: 70,
              borderRadius: "50%",
            }}
            className=""
            src={imgAvatar}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
