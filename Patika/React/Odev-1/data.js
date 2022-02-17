import axios from "axios";

const getUser = async (userId) => {
	return new Promise(async (resolve, reject) => {
		if (typeof userId == 'number') {
			const { data: user } = await axios(
				`https://jsonplaceholder.typicode.com/users/${userId}`
			);
			resolve(user);
		} else {
			reject("PLEASE TYPE A VALID USER ID");
		}
	});
};

const getPosts = (userId) => {
	return new Promise(async (resolve, reject) => {
		if (typeof userId == 'number') {
			const { data: posts } = await axios(
				`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
			);
			resolve(posts);
		} else {
			reject("PLEASE TYPE A VALID USER ID");
		}
	});
};

export default async function getData(userId) {
	var user = await getUser(userId);
	var posts = await getPosts(userId);

	return { user, posts };
}
