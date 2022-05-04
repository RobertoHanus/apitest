import Pagination from '@mui/material/Pagination';

const BottomPagination = (props) => {
   
    const handlePagination = (e, p) => {
        props.onPageChange(p);
    }

    return (
        <div>
            <Pagination count={Math.ceil(props.pagesCount/ props.usersPerPage)} onChange={handlePagination} />
        </div>
    );
}

export default BottomPagination;