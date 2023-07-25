import { Box } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import listUser from '../data/mockup';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate()
  const onNavigateUserDetail = (userId) => {
    navigate(`/record/${userId}`)
  }
  return (
    <Box>
      <h1>
        User Table
      </h1>
      <Box display={'flex'} justifyContent={'center'}>
        <TableContainer component={Paper} sx={{ width: 650 }}>
          <Table sx={{ width: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listUser.map((user) => (
                <TableRow key={user.id} onClick={() => onNavigateUserDetail(user.id)}>
                  <TableCell >
                    {user.id}
                  </TableCell>
                  <TableCell >
                    {user.name}
                  </TableCell>
                  <TableCell >{user.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      

    </Box>
  )
}

export default Home