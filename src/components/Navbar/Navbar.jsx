import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currency, setCurrency } = useContext(CoinContext);

  const currencySymbols = {
    aud: "A$",
    usd: "$",
    eur: "€",
  };
  const currencyHandler = (e) => {
    const name = e.target.value;
    const symbol = currencySymbols[name] || "A$";
    setCurrency({ name, symbol });
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>

      <div className="nav-right">
        <select onChange={currencyHandler} value={currency.name}>
          <option value="aud">AUD</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
