import React from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import ReportTwo from './ReportTwo';


const data = [
     { product: 'January', service: 20000 },
     { product: 'February', service: 15000 },
     { product: 'March', service: 12000 },
     { product: 'April', service: 10000 },
     { product: 'May', service: 7000 },
     { product: 'June', service: 5000 }
];




function ReportOne() {

     return (
          <>
               <div className='container-fluid'>
                    <div className='container'>
                         <div className='row'>
                              <p><span><i class="fa-solid fa-angle-left"></i></span>  Reports</p>
                              <div className='d-flex justify-content-between '>
                                   <div className='col-md-9 col-lg-9 col-sm-9'>
                                        <div>
                                             <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
                                                  <InputLabel id="demo-simple-select-standard-label">Monthly Sales</InputLabel>
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

                                   <div className='col-md-3 col-lg-3 col-sm-3 mt-2'>
                                        <div className='d-flex'>
                                             <p className=' d-flex mx-4'><span className=''><i class="fa-solid fa-print"></i>Print</span></p>
                                             <p className=' d-flex'><span className=''><i class="fa-solid fa-arrow-down"></i></span>Download</p>
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

                         <div className="row">
                              <div className="section col-md-12">
                                   <div className="section-content">
                                        <ResponsiveContainer width="100%" height={300}>
                                             <LineChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
                                                  <Tooltip />
                                                  <XAxis dataKey="label" />
                                                  <YAxis />
                                                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                                  <Legend />
                                                  <Line type="monotone" dataKey="service" stroke="#FB8833" />
                                                  <Line type="monotone" dataKey="product" stroke="#17A8F5" />
                                                  <Line type="monotone" dataKey="voucher" stroke="#17A867" />

                                             </LineChart>
                                        </ResponsiveContainer>
                                   </div>
                              </div>
                         </div>

                         <div className='row table-responsive mt-5'>
                              <table className="table table-striped-columns " style={{ border: "1px solid black", borderBottom: "1px solid black", }}>
                                   <thead>
                                        <tr className='text-center'>
                                             <th rowSpan={2} className=" ">
                                                  Month
                                             </th>
                                             <th colSpan={2} className="">
                                                  Services
                                             </th>
                                             <th colSpan={2}>Products</th>
                                             <th colSpan={2}>Vouchers</th>
                                             <th rowSpan={2}>Total</th>
                                        </tr>
                                   </thead>
                                   <thead>

                                   </thead>
                                   <tbody className='text-center'>
                                        <tr>
                                             <th />
                                             <th>Qty</th>
                                             <th>Sales</th>
                                             <th>Qty</th>
                                             <th>Sales</th>
                                             <th>Qty</th>
                                             <th>Sales</th>
                                             <th />
                                        </tr>
                                        <tr>
                                             <th>March 2023</th>
                                             <th>804</th>
                                             <th>23,8640$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>22,3540$</th>
                                        </tr>
                                        <tr>
                                             <th>April 2023</th>
                                             <th>786</th>
                                             <th>22,1967$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>22,3540$</th>
                                        </tr>
                                        <tr>
                                             <th>May 2023</th>
                                             <th>858</th>
                                             <th>23,8640$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>22,3540$</th>
                                        </tr>
                                        <tr>
                                             <th>June 2023</th>
                                             <th>804</th>
                                             <th>23,8640$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>22,3540$</th>
                                        </tr>
                                        <tr>
                                             <th>July 2023</th>
                                             <th>804</th>
                                             <th>23,8640$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>22,3540$</th>
                                        </tr>
                                        <tr>
                                             <th>August 2023</th>
                                             <th>804</th>
                                             <th>23,8640$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>22,3540$</th>
                                        </tr>
                                        <tr>
                                             <th>September 2023</th>
                                             <th>804</th>
                                             <th>23,8640$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>0</th>
                                             <th>0,00$</th>
                                             <th>22,3540$</th>
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






