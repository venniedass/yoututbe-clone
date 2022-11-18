import React from "react";
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';


const Videos = ({ videos, direction }) => {
  /* Use console.log(videos) to view the data.items data that it's pulling from the YouTube API. This is data is pulled from YouTube in the fetchFromAPI function which is called in the Feed and SearchFeed components. Below we break it down into its smaller components: id and videoId.
  
  The fetchFromAPI function converts the searchTerm which is entered in the SearchBar as "searchTerm" state and then the page gets "navigated" (which is a React Router component) over to the page with the corresponding entered search term.
  
  The useParams function from React Router is used to pass that url into a const. That const, which is the original search term, gets passed into the fetchFromAPI function and that asynchronous function returns data from YouTube via the Youtube API which is passed into the videos state and can be viewed as mentioned above using a console.log() function.*/

  if(!videos?.length) return

  return (
    <Stack direction={direction || "row" } flexWrap="wrap" justifyContent="start" gap={2}>
      
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}>
         
        </Box>
         
      ))}
    </Stack>
  )

}
/* The "item" prop above is taking the value of "data.items" in the Feed and SearchFeed components which renders this Videos component. */

export default Videos;