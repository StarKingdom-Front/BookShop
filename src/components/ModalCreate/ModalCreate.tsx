import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CreateItem from '../CreateItem/CreateItem';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'rgb(31, 26, 45)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

interface ICreateBook {
    setBooks: any
}

export default function BasicModal({setBooks} : ICreateBook ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='_container' style={{marginBottom: '20px'}}>
      <Button onClick={handleOpen}>Create Book</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateItem setBooks={setBooks} handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}