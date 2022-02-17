import { Route, Routes, NavLink } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";

function App() {
	let activeStyle = {
		textDecoration: "underline",
		color: "red",
	};

	return (
		<>
			<header>
				<h1>Hello Router</h1>
				<nav>
					<ul>
						<li>
							<NavLink
								to="/"
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/users"
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
							>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="users" element={<Users />}>
					<Route path=":id" element={<User />}></Route>
				</Route>
				<Route
					path="*"
					element={
						<>
							<h1>Page Not Found!</h1>
						</>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
