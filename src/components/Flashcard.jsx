import React, {useState} from "react";
import "./FlashCard.css";

const FlashCard = ({question, answer}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () =>{
        setIsFlipped(!isFlipped);
    }
    return(
        <div className={`flashcard ${isFlipped ? "flipped":""}`} onClick={handleClick}>
            <div className="front">
                <div className="content">{question}</div>
            </div>
            <div className="back">
                <div className="content">{answer}</div>
            </div>
        </div>
    )
}

export default FlashCard;