import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromApi'
import {ChannelCard, Videos} from './'
const ChannelDetail = () => {
  const [channelDetail,setChannelDetail] = useState(null)
  const [videos,setVideos] = useState([])
  // console.log(channelDetail,Videos)
  const {id} = useParams()
  useEffect(()=>{
    fetchFromAPI(`channels?part="snippet&id=${id}`)
    .then((data)=>{setChannelDetail(data?.items[0])})
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{setVideos(data?.items)})
  },[id])
  if(!channelDetail?.snippet)return (<h1 style={{color:'violet'}}> Loading... </h1>)

  return (
<Box minHeight='95vh'>
  <Box>
    <div style={{background:`linear-gradient(90deg,rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)`,zIndex:10,height:"300px"}}/>
<ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
<Box display="flex" p="2">
  <Box sx={{mr:{sm:'100px'}}}/>
    <Videos videos={videos}/>
</Box>
  </Box>
</Box>
  )
}

export default ChannelDetail