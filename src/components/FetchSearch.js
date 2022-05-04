import { height } from "@mui/system";
import { useState, useEffect } from "react";

const FetchSearch = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState({});


    useEffect(() => {
        if (props.userLogin != '') {
            fetch(`https://api.github.com/search/users?q=${props.userLogin}&per_page=${props.usersPerPage}&page=${props.page}`)
                .then(res => res.json())
                .then(
                    (data) => {
                        setIsLoaded(true);
                        setUsers(data);
                        props.onListLoaded(data.total_count);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }
    }, [props]);


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <div>
                    Total users found: {users.total_count}
                </div>
                <div>
                    {users.items.map(user => (
                        <div key={user.id}>
                            <div>
                                {user.login}
                            </div>
                            <div>
                                <div style={{ 
                                    backgroundImage: `url("${user.avatar_url}")`, 
                                    height: 100,
                                    width: 100,
                                    backgroundSize: 100
                                    }} />
                            </div>
                            <br /><br />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default FetchSearch;