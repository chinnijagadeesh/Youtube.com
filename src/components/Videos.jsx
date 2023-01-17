import { Box, Stack } from '@mui/system'
import React from 'react'
import {VideoCard,ChannelCard} from './'
const Videos = ({videos,direction}) => {
  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" gap={2} >
         {videos?.map((item,ind)=>(
            <Box key = {ind}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
         ))}
    </Stack>
  )
}

export default Videos