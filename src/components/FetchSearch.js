import { useState, useEffect } from "react";

const FetchSearch = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState({});

    useEffect(() => {
        fetch(`https://api.github.com/search/users?q=${props.userLogin}&per_page=${props.usersPerPage}&page=${props.page}`)
            .then(res => res.json())
            .then(
                (data) => {
                    if(data.total_count !== undefined) {
                    setIsLoaded(true);
                    setUsers(data);
                    props.onListLoaded(data.total_count);
                    }
                    else {
                        setIsLoaded(true);
                        setError({message:data.message});
                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        return function cleanup() {
            setIsLoaded(false);
        }
    }, [props]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <div>
                <div>
                    Loading...
                </div>
            </div>);
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
}

export default FetchSearch;