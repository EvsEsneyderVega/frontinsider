import React, { useEffect } from "react";
import logo from "../../../img/logo.png";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Menu.css";
import { ViewContext } from '../../../context/ViewContext/ViewContext';

export const Menu = () => {

  useEffect(() => {
    const maninMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      maninMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    maninMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu>
      <img src={logo} alt="logo" />
      <ul name="mainMenu" id="mainMenu">
        <Icon icon={<FaDelicious />} texto="inicio" />
        <Icon icon={<FaShoppingCart />} texto="otro"/>
        <Icon icon={<FaWallet />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
      </ul>
      <ul className="lastMenu">
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  );
};

const Icon = ({ icon, texto = "" }) => {
  return (
    <>
      <li>
        <a href="#" >
          {icon} {texto}
        </a>
      </li>
    </>
  );
};
