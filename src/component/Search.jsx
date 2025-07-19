import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div style={{height:'10vh',padding:'2%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{width:'85%',display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'white',borderRadius:'40px',padding:'2%'}}>
         <InputBase style={{width:'100%',outline:'none',marginLeft:'10px'}} />
         <SearchIcon/>
      </div>
       
    </div>
  )
}

export default Search
