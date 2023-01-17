import React from 'react'
import { Stack } from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from "../utils/constraints"
import SearchBar from "./SearchBar"
const Navbar = () => {
  return (
    // <div>Navbar</div>
  <Stack direction="row" aligntems = "center" p={2} sx={{position:'sticky', background:"#000", top:0 , justifyContent:"space-between"}}>
      <Link to='/' style={{display:'flex',alignItems:'center'}}>
          <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar