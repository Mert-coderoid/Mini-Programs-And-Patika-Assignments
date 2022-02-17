import { useState } from "react";

export default function List({ contacts }) {
	const [filterText, setFilterText] = useState("");

	const filtered = contacts.filter((item) => {
		return Object.keys(item).some((key) =>
			item[key].toString().toLowerCase().includes(filterText.toLowerCase())
		);
	});
	console.log(filtered);

	return (
		<>
			<input
				value={filterText}
				onChange={(e) => setFilterText(e.target.value)}
				placeholder="Filter Contact"
			/>
			<ul className="list">
				{filtered.map((item, index) => (
					<li key={index}>
						<span>{item.fullname}</span>
                  <span>{item.phone_number}</span>
					</li>
				))}
			</ul>
			<p>{`Total Contacts (${filtered.length})`}</p>
		</>
	);
}
