// Material UI
import { Stack, Typography } from '@mui/material';
// React
import { Link } from 'react-router-dom';
// Assets
import { logo } from '../utils/constants';
// Components
import Searchbar from './Searchbar';

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center "
    p={2} 
    sx={{
      position: 'sticky', 
      background: '#000', 
      top: 0, 
      justifyContent:'space-between'
    }}
    >
      <Link to="/" 
        style={{
          display: 'flex', 
          alignItems: 'center'
        }}
      >
        <img src={logo} alt="logo" height={45} />
        <Typography variant='h5'
          fontWeight="bold"
          ml={2}
          sx={{color: 'white'}}
        >
          R<span style={{color:'#F31502'}}>Tube</span>

        </Typography>
      </Link>
      <Searchbar>

      </Searchbar>
    </Stack>
)



export default Navbar