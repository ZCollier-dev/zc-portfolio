import circuitTree from "/circuit-tree.svg";
import "../styles/Hangman.css";
import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

import Hangman0 from "../assets/HangmanPics/hangman-0.png";
import Hangman1 from "../assets/HangmanPics/hangman-1.png";
import Hangman2 from "../assets/HangmanPics/hangman-2.png";
import Hangman3 from "../assets/HangmanPics/hangman-3.png";
import Hangman4 from "../assets/HangmanPics/hangman-4.png";
import Hangman5 from "../assets/HangmanPics/hangman-5.png";

function Letters(props) {
	return <div className="letterbox">{props.letter}</div>;
}

function Hangman() {
	const wordList = [
		"HELLO",
		"GOODBYE",
		"TEMPORAL",
		"HILARITY",
		"PAINLESS",
		"HAPPY",
		"UPSET",
	];

	const hangmanStateList = [
		Hangman0,
		Hangman1,
		Hangman2,
		Hangman3,
		Hangman4,
		Hangman5,
	];

	const [currentWord, setCurrentWord] = useState("");

	useEffect(() => {
		//Select random word
		if (currentWord === "") {
			setCurrentWord(wordList[Math.floor(Math.random() * wordList.length)]);
		}
	}, [currentWord]);

	const [hangmanAlertInfo, setHangmanAlertInfo] = useState({
		type: "empty",
		message: "",
	});

	const hangmanAlert = useRef(null);

	useEffect(() => {
		if (hangmanAlert.current) {
			hangmanAlert.current.innerHTML = `<p>${hangmanAlertInfo.message}</p>`;
			if (hangmanAlertInfo.type === "empty") {
				hangmanAlert.current.style.background = "rgba(0,0,0,0)";
			} else if (hangmanAlertInfo.type === "success") {
				hangmanAlert.current.style.background = "green";
			} else {
				hangmanAlert.current.style.background = "red";
			}

			if (hangmanAlertInfo.type !== "empty") {
				setTimeout(() => {
					setHangmanAlertInfo({ type: "empty", message: "" });
				}, 5000);
			}
		}
	}, [hangmanAlertInfo]);

	const [hangmanState, setHangmanState] = useState(0);

	const [wordState, setWordState] = useState([]);

	const [letterArray, setLetterArray] = useState([]);

	useEffect(() => {
		// Resets word
		if (currentWord != "") {
			setWordState([]);
			setLetterArray([]);
			for (let i = 0; i < currentWord.length; ++i) {
				setWordState((previous) => [...previous, "_"]);
				setLetterArray((previous) => [...previous, currentWord[i]]);
			}
		}
	}, [currentWord]);

	const [guessedLetters, setGuessedLetters] = useState([]);

	const [currentLetter, setCurrentLetter] = useState("");

	const [disableState, setDisableState] = useState(false);

	const handleLetterChange = (e) => {
		setCurrentLetter(e.target.value.toUpperCase());
	};

	const handleLetterSubmit = (e) => {
		e.preventDefault();
		const validCharacters = /[A-Z]/g;
		if (validCharacters.test(currentLetter)) {
			if (guessedLetters.includes(currentLetter)) {
				setHangmanAlertInfo({
					type: "fail",
					message: "Letter already guessed.",
				});
			} else {
				setGuessedLetters((previous) => [...previous, currentLetter]);
				if (currentWord.includes(currentLetter)) {
					setHangmanAlertInfo({
						type: "success",
						message: "Correct!",
					});
					for (let i = 0; i < currentWord.length; ++i) {
						if (letterArray[i].includes(currentLetter)) {
							setWordState(() => [
								...wordState.slice(0, i),
								currentLetter,
								...wordState.slice(i + 1),
							]);
						}
					}
				} else if (hangmanState < 4) {
					setHangmanAlertInfo({
						type: "fail",
						message: "Oof. Guessed wrong.",
					});
					setHangmanState(hangmanState + 1);
				} else {
					setHangmanAlertInfo({
						type: "fail",
						message: "GAME OVER.",
					});
					setHangmanState(5);
					setDisableState(true);
				}
			}
		} else {
			setHangmanAlertInfo({
				type: "fail",
				message: "Please input a valid letter.",
			});
		}
	};

	useEffect(() => {
		for (let i = 0; i < currentWord.length; ++i) {
			for (let j = 0; j < guessedLetters.length; ++j) {
				if (
					letterArray[i].includes(guessedLetters[j]) &&
					wordState[i].includes("_")
				) {
					setWordState(() => [
						...wordState.slice(0, i),
						guessedLetters[j],
						...wordState.slice(i + 1),
					]);
				}
			}
		}
		if (wordState.join("") === currentWord && currentWord != "") {
			setHangmanAlertInfo({
				type: "success",
				message: "VICTORY!",
			});
			setDisableState(true);
		}
	}, [wordState]);

	const handleReset = (e) => {
		e.preventDefault();
		setCurrentWord("");
		setHangmanState(0);
		setWordState([]);
		setLetterArray([]);
		setDisableState(false);
		setCurrentLetter("");
		setGuessedLetters([]);
	};

	return (
		<main>
			<img className="treeimg" src={circuitTree} />
			<article>
				<div className="toparticle">
					<h2>Hangman Game</h2>
					<br />
					<p>
						Hangman is a game where the player guesses the letters in a word
						before the stick person fully forms. If the person is complete, the
						player loses. If the word is complete, the player wins! <br />
						<br />
						How To Play:
						<br />
						<br />
					</p>
					<ul className="ruleslist">
						<li>
							Type a letter into the guess box and press the “Guess” button to
							guess a letter.
						</li>
						<li>
							A correctly guessed letter will appear in the appropriate area. If
							the word is full, the player wins!
						</li>
						<li>
							There are 6 states of the stickman, depending on how many wrong
							guesses the player has.
						</li>
						<ul>
							<li>0 Wrong - Nothing</li>
							<li>1 Wrong - Head</li>
							<li>2 Wrong - Torso</li>
							<li>3 Wrong - Arms</li>
							<li>4 Wrong - Left Leg</li>
							<li>5 Wrong - Right Leg and Player Loses</li>
						</ul>
						<li>
							To play again after a win or loss, press the “Retry” button and a
							new word will be generated.
						</li>
					</ul>
				</div>
				<div className="mainarticle">
					<div className="hangmanbox">
						<div className="hangmanalert" ref={hangmanAlert}></div>
						<div className="hangmanimg">
							<img src={hangmanStateList[hangmanState]} alt="Hangman Image" />
						</div>
						<div className="hangmanword">
							{wordState.map((letter, index) => (
								<Letters letter={letter} key={index} />
							))}
						</div>
						<div className="hangmancontrols">
							<form>
								<label htmlFor="guess">Your Guess:</label>
								<input
									type="text"
									maxLength={1}
									id="letterinput"
									name="letterinput"
									value={currentLetter}
									onChange={handleLetterChange}
									disabled={disableState}
								/>
								<button disabled={disableState} onClick={handleLetterSubmit}>
									Guess
								</button>
								<button onClick={handleReset}>Retry</button>
								<Link to="/hangman-code">
									<Button name="Code" />
								</Link>
							</form>
						</div>
					</div>
				</div>
			</article>
		</main>
	);
}

export default Hangman;
