import React, {useState} from 'react';

const Palindrome = () => {
    const [word, setWord] = useState("");
    const [result, setResult] = useState("");

const inputHandler = (e) => {
    setWord(e.target.value);
    
  };

const isPalindrome = () => {
    const revWord = word.split("").reverse().join("")
      if (word.toLowerCase()  === revWord.toLowerCase()){
        setResult("This word is a Palindrome!!!")
      } else {
        setResult("This word does not qualify as a palindrome ... try again")
      }
}

const palindromeHandler = () => {
    isPalindrome();
  };

    return (
      <div>
        <h1>Palindrome</h1>
        <h2>Enter any word to check its palindrome properties</h2>
        <div className="checker">
        <input type="text" onChange={inputHandler}  />
        <button onClick={palindromeHandler}>Submit</button>
        </div>
        <h2>{result}</h2>
      </div>
    );
 }

export default Palindrome;