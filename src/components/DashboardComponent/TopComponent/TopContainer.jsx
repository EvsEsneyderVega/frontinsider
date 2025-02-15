import { BiSearchAlt } from "react-icons/bi"
import { FaBell,FaChevronDown } from "react-icons/fa"
// import "./TopContainer.css";

import { useEffect } from "react"
const TopContainer = () => {
    useEffect(() => {
        const menuTarget = document.getElementById("menuChevron");
        const menuContainer = document.getElementById("menuContainer");

        menuTarget.addEventListener("mouseenter",()=>{
            menuTarget.style.transform='rotate(180deg)'
            menuContainer.style.transform='translateX(0px)'
        })
        menuContainer.addEventListener("mouseleave",()=>{
            menuTarget.style.transform='rotate(0deg)'
            menuContainer.style.transform='translateX(300px)'
        })

    }, [])  
    
  return (
    <div className="topContainer">
        <div className="inputBox">
            <h1 style={{color: "#d0cfd4"}}>Root</h1>
        </div>

        <div className="profileContainer">
            <i className="profileIcon"><FaBell/></i>
            <div className="profileImage">
                
            </div>
            <p className="profileName">Esneyder Vega</p>
            <i className="menuChevron" id="menuChevron">
                <i><FaChevronDown/></i>
            </i>

            <div className="menuContainer" id="menuContainer">
                <ul>
                    <li>algo</li>
                    <li>algo</li>
                    <li>algo</li>
                    <li>algo</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TopContainer