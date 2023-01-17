import {useEffect,useState} from 'react'
import { Link,useParams } from 'react-router-dom'
import ReactPlayer from "react-player"
import { Box, Stack, Typography } from '@mui/material'
import {Videos} from "./"
import { fetchFromAPI } from '../utils/fetchFromApi'
import { CheckCircle } from '@mui/icons-material'
const VideoDetail = () => {
  const {id} = useParams()
  const [videoDetail,setVideoDetail] = useState(null)
  const [videos,setVideos] = useState(null)

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>setVideos(data.items))
  },[id])

  // const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}} = videoDetail;

  if(!videoDetail?.snippet)return (<h1 style={{color:'red',display:"block",margin:"auto"}}>Loading...</h1>)

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:"column",md:"row"}}>
        <Box flex={1}>
          <Box sx={{width:'100%',position:"sticky",top:"86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
            <Typography color="#fff" variant='h5' fontWeight='bold' p={2}>
              {videoDetail?.snippet.title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{color:"#fff"}} py={1}  px={2}>
              <Link to={`/channel/${videoDetail?.snippet.channelId}`}>
                <Typography variant={{sm:"subtitle1",md:"h6"}} color="#fff">
                  {videoDetail?.snippet.channelTitle}
                  <CheckCircle sx={{fontSize:'12px', color:"gray",ml:"5px"}}/>
                  <Stack direction='row' gap="20px" alignItems="center" >
                    <Typography variant='body1' sx={{opacity:0.7}}>
                      {parseInt(videoDetail?.snippet.viewCount).toLocaleString()}views
                    </Typography>
                    <Typography variant='body1' sx={{opacity:0.7}}>
                      {parseInt(videoDetail?.snippet.likeCount).toLocaleString()}views
                    </Typography>
                  </Stack>
                </Typography>
              </Link>
            </Stack>
          </Box>
        </Box>
          <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems='center'>
        <Videos videos={videos} direction='column'/>
      </Box>
      </Stack>
    
    </Box>
    )
}

export default VideoDetail