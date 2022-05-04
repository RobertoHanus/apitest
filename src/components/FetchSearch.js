import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';

const FetchSearch = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState({});
    const [page, setPage] = useState(1);

    const handlePagination = (e, p) => {
        setPage(p);
    }


    useEffect(() => {
        if (props.userLogin != '') {
            fetch(`https://api.github.com/search/users?q=${props.userLogin}&per_page=25&page=${page}`)
                .then(res => res.json())
                .then(
                    (data) => {
                        setIsLoaded(true);
                        setUsers(data);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }
    }
        , [props]);


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
                <ul>
                    {users.items.map(user => (
                        <li key={user.id}>
                            {user.login}
                        </li>
                    ))}
                </ul>
                <div>
                    <Pagination count={Math.ceil(users.total_count / 25)} onChange={handlePagination} />
                </div>
            </div>
        );
    }
};

export default FetchSearch;