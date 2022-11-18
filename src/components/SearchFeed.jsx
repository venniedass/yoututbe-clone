import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';

const SearchFeed = () => {

   const [videos, setVideos] = useState([]);
  /*This has to be an array because "data.items" which is being fetched from the API is being passed into this and "data.items" is an array. */

   const { searchTerm } = useParams();
   /* useParams will cause "searchTerm" to get populated with whatever we enter in the URL bar after /search/... */

  useEffect(() => {
   fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))}, [searchTerm]);
   /* This is taking the data.items info from the YouTube API when the "searchTerm" is entered and passing it into the "videos" state which is then being passed as props into the video component which is rendered below. */

  return (
   
          <Box p={2} sx={{ overflowY: "auto", minheight: "90vh", flex: 2}}>
              <Typography variant="h4"
              fontWeight="bold" mb={2} sx={{ color: "white"}}>
                Search Results for: <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
              </Typography>

              <Box display="flex">
              <Box sx={{ mr: { sm: '100px' } }}/>
              
              <Videos videos={videos} />

            </Box>
          </Box>
          
  )
}

export default SearchFeed

/* When the videos component is rendered, we pass in the videos prop from state.

Whatever the videos prop is is whatever comes in from the search bar via "searchTerm" via useParams." */