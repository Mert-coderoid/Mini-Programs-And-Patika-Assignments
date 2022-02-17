import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users/";

export default function User() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState([]);
   // const {pathname} = useLocation();
   // console.log(pathname);

	useEffect(() => {
		axios
			.get(`${API_URL}${id}`)
			.then((res) => {
				setUser(res.data);
			})
			.finally(() => setLoading(false));
	}, [id]);

	return (
		<>
			{loading && "User loading...."}
			<h1>User: {user.name}</h1>
			<p>Email: {user.email}</p>
			<p>Phone: {user.phone}</p>
			<a href="#mail">{user.website}</a>
			<br />
         <br />

			<Link to={`/users/${parseInt(id) - 1}`}>
				Previous User ({parseInt(id) - 1})
			</Link>
			<Link to={`/users/${parseInt(id) + 1}`}>-----Next User ({parseInt(id) + 1})</Link>
		</>
	);
}
