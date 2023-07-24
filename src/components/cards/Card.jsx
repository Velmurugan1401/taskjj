import { useState } from "react"
import "./card.css"
import Coin from "../../assets/images/icons/coin.png"

function Card({ item, index }) {
    
    const [cureenthover, sethover] = useState(-1)
    return (
        <div key={index} className="cardss " onMouseOver={() => {
            sethover(index)
        }} onMouseLeave={() => {
            sethover(-1)
        }} >
            <div className={(index == cureenthover ? "card-child" : "card-h-child card-child")}> <span style={index == cureenthover ? { color: "#1D9C60" } : {color: "#707275" }} className="card-headers">{item.Name}</span>
                {
                    cureenthover == index ? (item.Child?.map((childitem, index) => {
                        return (

                            item.Name == "Gold Rate History" ? (
                                <div className="d-flex card-flex">

                                    <div className="" style={{marginRight:10}}>
                                        <img style={{width:39}} src={Coin}></img>
                                    </div>
                                    <div className=" SecountaryFont ">
                                        {childitem.Name} 
                                        <div className="SecountaryFont">{childitem.Value}</div>

                                    </div>
                                </div>
                            ) : (
                                <div className="d-flex card-flex">

                                    <div className="flex">
                                        {childitem.Name}
                                    </div>
                                    <div className="flex SecountaryFont card-value">
                                        {childitem.Value}

                                    </div>
                                </div>
                            )
                        )
                    })) : ("")
                }
            </div>
        </div>
    )
}

export default Card