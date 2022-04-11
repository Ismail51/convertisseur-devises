

import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Button, TextField, CardActionArea, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import exchangeMoney from '../functions/exchange'
import CardContent from '@mui/material/CardContent';
import '../App.css'

export default function BasicSelect() {
  const [source, setSource] = React.useState('');
  const [target, setTarget] = React.useState('');
  const [result, setResult] = React.useState('');

  const handleChange = (event) => {
    if (event.target.name === 'source') {
      setSource(event.target.value)
    } else {
      setTarget(event.target.value)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.amount.value)
    console.log("submit")
    let amount = event.target.amount.value
    let baseCurrency = event.target.source.value
    let targetCurrency = event.target.target.value
    console.log(amount, baseCurrency, targetCurrency)
    if (amount && baseCurrency && targetCurrency) {
      let result = exchangeMoney(amount, baseCurrency, targetCurrency)
      result.then((resultAmount) => {
        setResult(resultAmount)
      })
    }
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <form onSubmit={handleSubmit}>
        <TextField id="amount" label="Montant" variant="outlined" />
        <FormControl sx={{ width: "100px" }}>
          <Select
            labelId="demo-simple-select-label"
            id="source"
            value={source}
            label="source"
            name="source"
            onChange={handleChange}
          >
            <MenuItem value={'EUR'}>EUR</MenuItem>
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'GBP'}>GBP</MenuItem>
            <MenuItem value={'AED'}>AED</MenuItem>
            <MenuItem value={'AUD'}>AUD</MenuItem>
            <MenuItem value={'CHF'}>CHF</MenuItem>

          </Select>
        </FormControl>



        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="target"
            value={target}
            label="target"
            name="target"
            onChange={handleChange}
          >
            <MenuItem value={'EUR'}>EUR</MenuItem>
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'GBP'}>GBP</MenuItem>
            <MenuItem value={'AED'}>AED</MenuItem>
            <MenuItem value={'AUD'}>AUD</MenuItem>
            <MenuItem value={'CHF'}>CHF</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
      {/* <Card className='button'>
        <CardActionArea>
          <CardContent> */}
      <Typography gutterBottom variant="h5" component="div">
        Result : {result} {target}
      </Typography>
      {/* </CardContent>
        </CardActionArea>
      </Card> */}
    </Box>
  );
}

