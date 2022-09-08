// React
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
// Components
import { Videos } from './';
// API
import { fetchData } from '../utils/fetchData';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchtxt } = useParams();
  console.log(useParams());
  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchtxt}`)
      .then((data) => setVideos(data.items))
  }, [searchtxt]);
  return (
    <Box p={2} sx={{
      overflowY: 'auto',
      height:'90vh',
      flex:'2'
    }}>
      <Typography 
        variant='h4'
        fontWeight="bold"
        mb={2}
        sx={{color: 'white'}}
      >
        Search Results for: <span style={{color:'#F31502'}}>{searchtxt}</span> Videos
      </Typography>

      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed