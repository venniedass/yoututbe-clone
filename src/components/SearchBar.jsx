import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    /* This state gets updated to whatever you type into the search bar via the "onChange attribute of the input component below" */

    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
        e.preventDefault();
        /* Normally, when you submit a form, it reloads the page - and in React JS, you don't want to do that. So since that's the "default" behavior of the browser, you must you e.preventDefault to prevent this default behavior. */

        if(searchTerm) {
            navigate(`/search/${searchTerm}`);
            /*This is what changes the route in React Router if state is not null.*/

            setSearchTerm('');

        }
    };

  return (
    <Paper
    component="form"
    onSubmit={onhandleSubmit}
    sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
    }}
        >
            <input
                className="search-bar"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                /* e.target.value is where the value of a key press is stored. */
            />
            <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>
  )
}

export default SearchBar






        