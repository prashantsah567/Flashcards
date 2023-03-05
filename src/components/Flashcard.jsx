import React, {useState} from "react";
import "./FlashCard.css";

const flashcardsData = [
    {question: "What does DOM stands for?", answer: "Document Object Model"},
    {question: "What is a closure?", answer: "It's an inner function that has access to the outer function's variables and parameters"},
    {question: "What does JSX stands for?", answer: "JavaScript Syntax Extension"},
    {question: "What is the virtual DOM in React?", answer: "It's a lightweight representation of the actual DOM used by React for performance optimization"},
    {question: "What is purpose of the 'useEffect' hook in React?", answer: "It is used to perform side effects in a React functional component, such as fetching data or updating the DOM"},
    {question: "What is the difference between 'let' and 'const' in JS?", answer: "'Let' declares a variable that can be reassigned, while 'const' declares a variable that cannot be reassigned"},
    {question: "What is the purpose of the 'map' function in JS?", answer: "It is used to iterate over an array and transform its element into a new array"},
    {question: "What is the difference between 'null' and 'undefined'?", answer: "'null' represents the intentional absence of any object value, while 'undefined' represents the absence of a value"},
    {question: "What is the purpose of 'reduce' function in JS?", answer: "It is used to iterate over an array and accumlate its value into a single value"},
    {question: "What is the purpose fo the 'this' keyword in JS?", answer: "The 'this' keyword refers to the object that the function is a method of, or the global if the function is not a method of any object"},
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
        <button onClick={handleForwardClick} className="btn">→</button>
        </div>
        </>
    )
}

export default FlashCard;