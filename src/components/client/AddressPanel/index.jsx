import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const AddressPanel = () => {
    return (
        <>
            <div className='w-full max-h-[100vh] overflow-auto'>
                <form className='p-8 py-3 pb-8 px-4'>
                    <div className='col w-[100%] mb-4'>
                        <TextField
                            label="Address Line 1"
                            variant="outlined"
                            className='w-full'
                            name='address'
                            size="small"
                        />
                    </div>
                    <div className='col w-[100%] mb-4'>
                        <TextField
                            label="City"
                            variant="outlined"
                            className='w-full'
                            name='city'
                            size="small"
                        />
                    </div>
                    <div className='col w-[100%] mb-4'>
                        <TextField
                            label="State"
                            variant="outlined"
                            className='w-full'
                            name='state'
                            size="small"
                        />
                    </div>
                    <div className='col w-[100%] mb-4'>
                        <TextField
                            label="Pincode"
                            variant="outlined"
                            className='w-full'
                            name='pincode'
                            size="small"
                        />
                    </div>
                    <div className='col w-[100%] mb-4'>
                        <TextField
                            label="Country"
                            variant="outlined"
                            className='w-full'
                            name='country'
                            size="small"
                        />
                    </div>
                    <div className='col w-[100%] mb-4'>
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            className='w-full'
                            name='phone_number'
                            size="small"
                        />
                    </div>
                    <div className='col w-[100%] mb-4'>
                        <TextField
                            label="Land Mark"
                            variant="outlined"
                            className='w-full'
                            name='landMark'
                            size="small"
                        />
                    </div>
                    <div className='flex gap-5 pb-5 flex-col'>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Address Type</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Home" />
                                <FormControlLabel value="male" control={<Radio />} label="Office" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Button className='btn-org btn-lg w-full flex gap-2 items-center'>Submit</Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddressPanel;