import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, age, friends }) {
	// console.log(props);
	return (
		<>
			<h1>{isLoggedIn ? `${name} ${surname} (${age})` : "You are not logged in."}</h1>

			{friends &&
				friends.map((friend, index) => (
					<div key={friend.id}>{friend.name}</div>
				))}
		</>
	);
}

User.prototype = {
	name: PropTypes.string.isRequired,
	surname: PropTypes.string.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	friends: PropTypes.array,
};

export default User;
