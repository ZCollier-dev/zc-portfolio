import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/hangman" element={<Hangman />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/hangman-code" element={<HangmanCode />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
