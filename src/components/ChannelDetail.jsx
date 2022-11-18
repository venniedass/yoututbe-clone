import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Box } from "@mui/material";

/* Don't use curly braces when importing default exports, and use curly braces when importing named exports. */

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const { id } = useParams();
  const [ videos, setVideos ] = useState([])

  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));


  fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      {/* The 95vh makes it take up the entire screen */}
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
          zIndex:10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail}
        marginTop="-110px" />
      </Box>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: '100px' }}} />
            <Videos videos={videos} />
        </Box>
    </Box>
  )
  
}

export default ChannelDetail