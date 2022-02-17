import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import InputExample from "./components/InputExample";

function App() {
	const [name, setName] = useState("Eyup");
	const [age, setAge] = useState(25);
	const [friends, setFriends] = useState(["Ahmet", "Mahmut", "Ayse"]);
	const [address, setAddress] = useState({ title: "Istanbul", zip: 34090 });

	return (
		<div className="App">
			<h1>Name: {name}</h1>
			<h1>Age: {age}</h1>
			<button onClick={() => setName("Ahmet")}>Set Name</button>
			<button onClick={() => setAge(23)}>Set Age</button>

			<hr />
			<h2>Friends</h2>
			{friends.map((friend, index) => (
				<div key={index}>{friend}</div>
			))}
			<br />
			<button onClick={() => setFriends([...friends, "Fatma"])}>Add Age</button>

			<hr />
			<br />
			<h2>Address</h2>
			<div>
				{address.title} {address.zip}
			</div>
			<br />
			<button onClick={() => setAddress({ ...address, title: "ankara" })}>
				Set Adress
			</button>

			<hr />
			<br />
			<Counter />
			<hr />
			<InputExample />
			<hr />
		</div>
	);
}

export default App;
