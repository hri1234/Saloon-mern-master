import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const data = [
    { connect: 'January', widget: 20000 },
    { connect: 'February', widget: 15000 },
    { connect: 'March', widget: 12000 },
    { connect: 'April', widget: 10000 },
    { connect: 'May', widget: 7000 },
    { connect: 'June', widget: 5000 }
];

const ReportTwo = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <p><span><i class="fa-solid fa-angle-left"></i></span>Reports</p>
                        <div className='d-flex justify-content-between '>
                            <div className='col-md-9 col-lg-9 col-sm-9'>
                                <div>
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Client Report</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            label="Age">
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div> 
                            </div>

                            <div className='col-md-3 col-lg-3 col-sm-3'>
                                <div className='d-flex'>
                                    <p className=' d-flex mx-4'><span className=''><i class="fa-solid fa-print"></i>Print</span></p>
                                    <p className=' d-flex'><span className='mx-1'><i class="fa-solid fa-arrow-down"></i></span>Download</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                    <div className='row'>
                             
                             <div className='col-md-8 col-lg-8 col-sm-8'>
                             <div >
                                  <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }}>
                                       {/* <InputLabel id="demo-simple-select-standard-label">22-03-23</InputLabel> */}

                                       <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                 <DatePicker label="" />
                                            </DemoContainer>
                                       </LocalizationProvider>
                                       


                                  </FormControl>

                                  <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }}>
                                       {/* <InputLabel id="demo-simple-select-standard-label">22-03-23</InputLabel> */}

                                       <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                 <DatePicker label="" />
                                            </DemoContainer>
                                       </LocalizationProvider>
                                       


                                  </FormControl>
                                  
                                  
                                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                       <InputLabel id="demo-simple-select-standard-label">All Channels</InputLabel>
                                       <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            label="Age">
                                            <MenuItem value="">
                                                 <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                       </Select>
                                  </FormControl>
                             </div>
                             </div>
                             <div className='col-md-4 col-lg-4 col-sm-4'>
                                  <p>Generated Friday,  Febuary 2, 2024 11:36PM     </p>
                             </div>
                   </div>
                    <div className="row">

                        <p style={{ backgroundColor: "rgb(167, 231, 209)" }}>
                            <span><i class="fa-solid fa-circle-info" style={{ color: "#630c26;" }}></i></span>   Always make sure you check out appointments to get the most out of
                            Reports. <a href="">Read More...</a>
                        </p>
                    </div>

                    <div className="row mt-3">
                        <div className="section col-md-12">
                            <div className="section-content">
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
                                        <Tooltip />
                                        <XAxis dataKey="label" />
                                        <YAxis />
                                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                        <Legend />
                                        <Line type="monotone" dataKey="connect" stroke="#FB8833" />
                                        <Line type="monotone" dataKey="widget" stroke="#17A8F5" />
                                        <Line type="monotone" dataKey="treatwell " stroke="#17A867" />

                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                    </div>

                    <div className='row table-responsive mt-5'>

                    <table className="table table-striped-columns " style={{ border: "1px solid black", borderBottom: "1px solid black", }}>
                            <thead className='text-center'>
                                <tr>
                                    <th>Month</th>
                                    <th>Treatwell</th>
                                    <th>Widget</th>
                                    <th>Connect</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody  className='text-center'>
                                <tr>
                                    <th>February 2024</th>
                                    <th>4</th>
                                    <th>0</th>
                                    <th>0</th>
                                    <th>4</th>
                                </tr>
                                <tr>
                                    <th>january 2024</th>
                                    <th>4</th>
                                    <th>0</th>
                                    <th>0</th>
                                    <th>4</th>
                                </tr>
                                <tr>
                                    <th>December 2023</th>
                                    <th>4</th>
                                    <th>0</th>
                                    <th>0</th>
                                    <th>4</th>
                                </tr>
                                <tr>
                                    <th>November 2023</th>
                                    <th>4</th>
                                    <th>0</th>
                                    <th>0</th>
                                    <th>4</th>
                                </tr>
                                <tr>
                                    <th>October 2023</th>
                                    <th>4</th>
                                    <th>0</th>
                                    <th>0</th>
                                    <th>4</th>
                                </tr>
                                <tr>
                                    <th>September 2023</th>
                                    <th>4</th>
                                    <th>0</th>
                                    <th>0</th>
                                    <th>4</th>
                                </tr>
                                <tr>
                                    <th>August 2023</th>
                                    <th>4</th>
                                    <th>0</th>
                                    <th>0</th>
                                    <th>4</th>
                                </tr>
                                <tr>
                                    <th>July 2023</th>
                                    <th>4</th>
                                    <th>0</th>
                                    <th>0</th>
                                    <th>4</th>
                                </tr>
                              
                            </tbody>
                        </table>


                    </div>



                </div>
            </div>
        </>

    )
}

export default ReportTwo;



