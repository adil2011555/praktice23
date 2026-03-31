import React from 'react'
import style from "../styles/Home.module.css"
import { AiFillEnvironment } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import { GiDonut } from "react-icons/gi";

const Home = () => {
  return (
    <div>
        <header className={style.header}>
            <div className={style.foodwagon}>
                <h2 className={style.food}>food</h2>
                <h2 className={style.wagon}>waGon</h2>
            </div>
            <p> Deliver to:map-marker-alt Current Location Mohammadpur Bus Stand, Dhaka</p>
            <div className={style.h2btn}>
               <h2 className={style.searchfood}>Search Food</h2>
               <button className={style.btn}>Login</button>
           </div>
        </header>
        <main>
            <h1>How does it work</h1>
            <div className={style.cardBox}>
                <div className={style.card}>
                    <AiFillEnvironment className={style.icons}/>
                    <h4>Select location</h4>
                    <p>Choose the location where your food will be delivered.</p>
                </div>
                <div className={style.card}>
                    <MdNotifications className={style.icons}/>
                    <h4>Select location</h4>
                    <p>Choose the location where your food will be delivered.</p>
                </div>
                <div className={style.card}>
                    <MdPriceChange className={style.icons}/>
                    <h4>Select location</h4>
                    <p>Choose the location where your food will be delivered.</p>
                </div>
                <div className={style.card}>
                    <GiDonut className={style.icons}/>
                    <h4>Select location</h4>
                    <p>Choose the location where your food will be delivered.</p>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Home
