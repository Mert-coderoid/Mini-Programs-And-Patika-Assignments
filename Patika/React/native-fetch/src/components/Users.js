import { useEffect,useState } from "react";

const Users = () => {

   const[users,setUsers]=useState([]);
   const[isLoading,setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) =>res.json())
      .then(data => {
         setUsers(data)
      })
      .finally(()=>setIsLoading(false))
	}, []);
      
	return (<div>
      <h1>Users</h1>
      {isLoading && "Loading..."}
      {
         users.map((user)=>(
            <div key={user.id}>{user.name}</div>
         ))
      }
   </div>);
};

export default Users;
