import React from "react"
import "./icons.css"
import ArrowDown from "../../../images/icons/arrow-down.svg"
import ArrowRight from "../../../images/icons/arrow-right.svg"
import ArrowLeft from "../../../images/icons/arrow-left.svg"
import ArrowUp from "../../../images/icons/arrow-up.svg"
import Close from "../../../images/icons/close.svg"
import Menu from "../../../images/icons/menu.svg"
import Rss from "../../../images/icons/rss.svg"
import Search from "../../../images/icons/search.svg"
import SortAscending from "../../../images/icons/sort-ascending.svg"
import SortDescending from "../../../images/icons/sort-descending.svg"

export const Icons = () => {
  return (
    <div className="icons">
      <div className="icon-container">
        <img src={ArrowDown} alt=""></img>
        <span>arrow-down</span>
      </div>
      <div className="icon-container">
        <img src={ArrowRight} alt=""></img>
        <span>arrow-right</span>
      </div>
      <div className="icon-container">
        <img src={ArrowLeft} alt=""></img>
        <span>arrow-left</span>
      </div>
      <div className="icon-container">
        <img src={ArrowUp} alt=""></img>
        <span>arrow-up</span>
      </div>
      <div className="icon-container">
        <img src={Close} alt=""></img>
        <span>close</span>
      </div>
      <div className="icon-container">
        <img src={Menu} alt=""></img>
        <span>menu</span>
      </div>
      <div className="icon-container">
        <img src={Rss} alt=""></img>
        <span>rss</span>
      </div>
      <div className="icon-container">
        <img src={Search} alt=""></img>
        <span>search</span>
      </div>
      <div className="icon-container">
        <img src={SortAscending} alt=""></img>
        <span>sort-ascending</span>
      </div>
      <div className="icon-container">
        <img src={SortDescending} alt=""></img>
        <span>sort-descending</span>
      </div>
    </div>
  )
}
