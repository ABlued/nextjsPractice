import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';
import Layout from '../component/layout';

export default function Mutest() {
  const inputRef = useRef();
  const [inputText, setInputText] = useState('');
  let inputValue = '';
  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Layout>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          ref={inputRef}
          onChange={onChangeInput}
          value={inputText}
        />
        <p>{inputText}</p>
      </Box>
    </Layout>
  );
}
