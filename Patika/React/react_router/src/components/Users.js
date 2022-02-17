import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function Users() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	const location = useLocation();

	useEffect(() => {
		axios
			.get(API_URL)
			.then((res) => setUsers(res.data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<>
			<main>
				<h2>USERS</h2>
				{loading && "Users are loading..."}
				<ul>
					{users.map((user) => (
						<li key={user.id}>
							<Link to={`/users/${user.id}`}>{user.name}</Link>
						</li>
					))}
				</ul>

				<Outlet />
			</main>
		</>
	);
}
