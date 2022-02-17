import "./App.css";
import User from "./components/User";

const friends = [
	{ name: "Ahmet", id: 1 },
	{ name: "Fatma", id: 2 },
	{ name: "Mehmet", id: 3 },
	{ name: "Ayse", id: 4 },
];

function App() {
	return (
		<div className="App">
			<User
				name="Eyup"
				surname="Ucmaz"
				isLoggedIn={true}
				age={"25"} //Double type allows int and string
				friends={friends}
			/>
		</div>
	);
}

export default App;
