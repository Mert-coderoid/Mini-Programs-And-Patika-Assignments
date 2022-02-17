import { useState } from "react";

export default function Counter() {
	const [count, setcount] = useState(0);

	const increase = () => {
		setcount(count + 1);
	};

	const decrease = () => {
		setcount(count - 1);
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	);
}
