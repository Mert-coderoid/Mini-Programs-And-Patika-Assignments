import React, { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import "./styles.css"

export default function Contacts() {
	const [contacts, setContacts] = useState([
		{
			fullname: "Eyup",
			phone_number: "123124",
		},
		{
			fullname: "John Doe",
			phone_number: "09823423",
		},
		{
			fullname: "Sherlock",
			phone_number: "22123123",
		},
	]);

	useEffect(() => {
		console.log(contacts);
	}, [contacts]);

	return (
		<div id="container">
         <h1>My Contacts 🤖</h1>
			<List contacts={contacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	);
}
