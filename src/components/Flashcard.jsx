import React, {useState} from "react";
import "./FlashCard.css";

const flashcardsData = [
    {question: "1what is jsx?", answer: "1JavaScript Syntax Extension"},
    {question: "2what is jsx?", answer: "2JavaScript Syntax Extension"},
    {question: "3what is jsx?", answer: "3JavaScript Syntax Extension"},
    {question: "4what is jsx?", answer: "4JavaScript Syntax Extension"},
    {question: "5what is jsx?", answer: "5JavaScript Syntax Extension"},
    {question: "6what is jsx?", answer: "6JavaScript Syntax Extension"},
    {question: "7what is jsx?", answer: "7JavaScript Syntax Extension"},
    {question: "8what is jsx?", answer: "8JavaScript Syntax Extension"},
    {question: "9what is jsx?", answer: "9JavaScript Syntax Extension"},
    {question: "10what is jsx?", answer: "10JavaScript Syntax Extension"},
];

const FlashCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const currentFlashcard = flashcardsData[currentCardIndex];

    const handleClick = () =>{
        setIsFlipped(!isFlipped);
    }

    const handleForwardClick = () =>{
        setCurrentCardIndex((currentCardIndex+1)%flashcardsData.length);
    }
    return(
        <>
        <div className={`flashcard ${isFlipped ? "flipped":""}`} onClick={handleClick}>
            <div className="front">
                <div className="content">{currentFlashcard.question}</div>
            </div>
            <div className="back">
                <div className="content">{currentFlashcard.answer}</div>
            </div>
        </div>
        <br/>
        <div>
        <button onClick={handleForwardClick}>→</button>
        </div>
        </>
    )
}

export default FlashCard;