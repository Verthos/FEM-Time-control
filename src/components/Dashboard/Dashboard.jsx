import React, { useState } from "react";
import { Container, Menu, Card } from "./styles.js"
import avatar from "../../assets/image-jeremy.png"


import ellipsisImage from "../../assets/icon-ellipsis.svg"
import workImage from "../../assets/icon-work.svg"
import ExerciseImage from "../../assets/icon-exercise.svg"
import playImage from "../../assets/icon-play.svg"
import selfCareImage from "../../assets/icon-self-care.svg"
import socialImage from "../../assets/icon-social.svg"
import studyImage from "../../assets/icon-study.svg"

import data from "../../data/data.json"


export function Dashboard() {

    const images = {
        Work: workImage, 
        Ellipsis: ellipsisImage,
        Exercise: ExerciseImage, 
        Play: playImage, 
        Selfcare: selfCareImage, 
        Social: socialImage, 
        Study: studyImage
    }

    const [isSelected, setIsSelected] = useState("daily")
    const handleIsSelected = (argument) => {
        setIsSelected(argument)
    }


    return(
        <Container>
            <Menu>
                <div className="userInfo">
                    <img src={avatar} alt="avatar" />
                    <section>
                        Report for
                        <span>
                            Jerimy Robson
                        </span>
                    </section>
                </div>
                <ul>
                    <li onClick={() => handleIsSelected("daily")} className={isSelected === "daily" ? "active" : "inactive"}>Daily</li>
                    <li onClick={() => handleIsSelected("weekly")} className={isSelected === "weekly" ? "active" : "inactive"}>Weekly</li>
                    <li onClick={() => handleIsSelected("monthly")} className={isSelected === "monthly" ? "active" : "inactive"}> Monthly</li>
                </ul>
            </Menu>

            {data.map((card) => {              
                return(
                    <Card className={card.title}>
                        <img src={images[`${card.title}`]} alt="2" />
                        <div className="content">
                            <section>
                                <h1>{card.title}</h1>
                                <h2>{card.timeframes[`${isSelected}`].current}Hrs</h2>
                            </section>
                            <section>
                                <div className="options">
                                    <img src={images.Ellipsis} alt="ellipsis" />
                                </div>
                                <h3>Last week - {card.timeframes[`${isSelected}`].previous}Hrs</h3>
                            </section>
                        </div>
                    </Card>
                )
            })}
        </Container>
    )
}