import { useState } from "react";

export default function InputExample() {
	// const [name, setName] = useState("");
	const [form, setForm] = useState({ name: "", surname: "" });

   const onChangeInput = (event)=>{
      // console.log(event.target.name)
      setForm({...form, [event.target.name]:event.target.value});
   }

	return (
		<div>
			Please type a name <br />
			<input name="name" value={form.name} onChange={onChangeInput} />
			<br />
			<input name="surname" value={form.surname} onChange={onChangeInput} />
			<br />
			{form.name} {form.surname}
		</div>
	);
}
