import { useState, useEffect } from "react";

const initialFormValue = { fullname: "", phone_number: "" };

export default function Form({ addContact, contacts }) {
	// console.log(addContact);
	const [form, setForm] = useState(initialFormValue);

	// SET A FORM STATE
	const onChangeForm = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	// ON SUBMIT FORM
	const onSubmit = (e) => {
		e.preventDefault();

		if (form.fullname === "" || form.phone_number === "") {
			return false;
		}
		addContact([...contacts, form]);
		setForm(initialFormValue);
		// console.log(form);
	};

	// CLEAR FORM
	useEffect(() => {
		setForm(initialFormValue);
	}, [contacts]);

	return (
		<form onSubmit={onSubmit}>
			<div>
				<input
					name="fullname"
					placeholder="Full Name"
					onChange={onChangeForm}
					value={form.fullname}
				/>
			</div>
			<div>
				<input
					name="phone_number"
					type={"tel"}
					placeholder="Phone Number"
					onChange={onChangeForm}
					value={form.phone_number}
				/>
			</div>
			<div>
				<button>Add</button>
			</div>
		</form>
	);
}
