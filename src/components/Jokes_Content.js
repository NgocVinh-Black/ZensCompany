import React from "react";

const Jokes_Content = () => {
  return (
    <div className="container">
      <div className="px-20 py-20">
        <p
          style={{
            color: "#707477",
            padding: "0 295px",
          }}
        >
          A child asked his father, "How were people born?" So his father said,
          "Adam and Eve made babies, then their babies became adults and made
          babies, and so on." The child then went to his mother, asked her the
          same question and she told him, "We were monkeys then we evolved to
          become like we are now." The child ran back to his father and said,
          "You lied to me!" His father replied, "No, your mom was talking about
          her side of the family."
        </p>
      </div>
      <hr
        className="text-center m-auto"
        style={{
          width: "35%",
        }}
      />
      <div className="pt-10 pb-20 text-center">
        <button
          style={{
            backgroundColor: "#2C7CDA",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
          className="px-14 py-2 text-white"
        >
          This is Funny!
        </button>
        <button
          style={{
            backgroundColor: "#2FB164",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            marginLeft: 20,
          }}
          className="px-14 py-2 text-white"
        >
          This is not funny.
        </button>
      </div>
    </div>
  );
};

export default Jokes_Content;
