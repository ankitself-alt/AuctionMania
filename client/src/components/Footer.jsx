import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="pt-5">
      <footer className="footer fixed-bottom bg-dark">
        <div className="container">
          <span className="text-light">
            <a
              className="text-light text-decoration-none"
              href="https://github.com/TallSoup"
            >
              TallSoup
            </a>{" "}
            &copy; {year}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
