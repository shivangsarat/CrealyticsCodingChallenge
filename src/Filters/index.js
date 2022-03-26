import React from "react";

import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import '../css/filters.scss'

export default function Filters(props) {

    const handleChange = (event) => {
        props.filterByGender(event.target.value)
    };

    const handleSwitch = event => {
        props.filterByDiscount(!props.price)
    }

    return(
        <div className={props.className}>
            <TextField label="Product" onChange={(e) => props.productSearch(e)} className="searchBox" />

            <div className="additional-filters">
                <div className="filter-gender">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Filter by Gender</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.gender}
                        label="Gender"
                        onChange={handleChange}
                        >
                            <MenuItem value={'male'} id="filter-value-male">Male</MenuItem>
                            <MenuItem value={'female'} id="filter-value-female">Female</MenuItem>
                            <MenuItem value={'unisex'} id="filter-value-unisex">Unisex</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                
                <div className="filter-price">
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    onClick={(e) => handleSwitch(e)}
                                    checked={props.price}
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            }
                        label="Filter by Discounts" />
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}