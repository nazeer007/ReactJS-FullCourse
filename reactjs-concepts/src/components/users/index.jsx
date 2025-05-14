import { useState } from "react";

// data fetching using useeffect and managing loading state
export default function Users() {
    
    const [usersList, setUsersList] = useState([]);
    const [pending, setPending] = useState(false);

    async function fetchAllUsers() {
        try {
            setPending(true);
            const apiResponse = await fetch("https://dummyjson.com/users");
            const result = await apiResponse.json();

            if(result?.users) {
                setUsersList(result?.users);
                setPending(false);
            } else {
                setUsersList([]);
                setPending(false);
            }
            
        } catch(error) {
            console.log(error);
        }
    }

    // function handleFetchListOfUsers() {
    //     fetchAllUsers();
    // }

    // useEffect(()=>{
    //     fetchAllUsers();
    // }, []);

    console.log(usersList);
    
    if(pending) return <h3>Retching users! Please wait</h3>

    return (
        <div>
            <h3>All users list</h3>
            <button onClick={fetchAllUsers}>Fetch Users</button>

            <ul>
                {
                    usersList && usersList.length > 0 ?
                    usersList.map(userItem => 
                        <li key={userItem?.id}>
                            <p>{userItem?.firstName} {userItem?.lastName} </p>
                        </li> 

                    ) : <p>No Users Found</p>
                }
            </ul>
        </div>
    );
}