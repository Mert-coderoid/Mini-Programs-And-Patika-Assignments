import React from "react";
import { useState,useEffect } from "react";

export default function Counter() {
	const [number, setNumber] = useState(0);
	const [name, setName] = useState("Eyup");

	// useEffect(()=>{
	//   console.log("Component is updated!");
	// })

	useEffect(() => {
		// console.log("Component is mounted!");
      const interval =  setInterval(()=>{
         setNumber((num)=>num+1);
      },1000);

      return ()=> clearInterval(interval); //Unmounted

	}, []);

	useEffect(() => {
		console.log("Name state is updated");
	}, [name]);

	useEffect(() => {
		console.log("Number state is updated");
	}, [number]);

	return (
		<div>
			<h1>{number}</h1>
			<button onClick={() => setNumber(number + 1)}>Click</button>
			<hr />
			<h1>{name}</h1>
			<button onClick={() => setName("Ucmaz")}>Click</button>
		</div>
	);
}
