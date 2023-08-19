import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container } from '@mui/material';
import { useState } from 'react';



const FirstPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');



    const handleSubmit = () => {
      // Check if any of the required fields are empty
      if (!name || !phoneNumber || !email) {
        alert('Please fill in all required fields.');
        return; 
      }
  
      // Save data to local storage
      localStorage.setItem('userDetails', JSON.stringify({ name, phoneNumber, email }));
      navigate('/second');
    };
  
    return (
      <Container >
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button  variant="contained" color="primary"onClick={handleSubmit}>Submit</Button>
      </Container>
    );
}

export default FirstPage
