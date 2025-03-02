import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Hangman from "./components/Hangman";
import About from "./components/About";
import Contact from "./components/Contact";
import HangmanCode from "./components/HangmanCode";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/hangman" element={<Hangman />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/hangman-code" element={<HangmanCode />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
