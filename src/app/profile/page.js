'use client'
import React from 'react'
import '@/app/page.module.css'
import '@/app/booking.css'
import '@/app/embala.css'
import '@/app/globals.css'
import '@/app/IdealBankSectionStyles.css'
import '@/app/responsive.css'
import '@/app/styles.css'
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
const page = () => {
  return (
    <div>
            <div className='pb-5' style={{ minHeight: '500px', paddingTop: '100px' }}>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-sm-8 border rounded shadow p-4'>
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-details-tab" data-bs-toggle="tab" data-bs-target="#nav-details" type="button" role="tab" aria-controls="nav-home" aria-selected="true">profileDetails</button>
                                <button className="nav-link" style={{ textTransform: 'uppercase' }} id="nav-booking-tab" data-bs-toggle="tab" data-bs-target="#nav-booking" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Bookings</button>
                            </div>
                        </nav>
                        <div className="tab-content mt-3" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">
                                <h1>PROFILE DETAILS</h1>
                                <hr />
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="inputName" className="form-label">bookingName</label>
                                        <input type="text" name="name" className="form-control" id="inputName" placeholder="Name" value='' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputEmail" className="form-label">Email</label>
                                        <input type="email" name="email" className="form-control" id="inputEmail" placeholder="" value=""onChange={(e) => setSetFromData({ ...formData, email: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputPassword" className="form-label">Password</label>
                                        <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Password" value="" onChange={(e) => setSetFromData({ ...formData, password: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputPhone" className="form-label">Phone</label>
                                        <input type="text" name="phone" className="form-control" id="inputPhone" placeholder="Phone" value="" onChange={(e) => setSetFromData({ ...formData, phone: e.target.value })} />
                                    </div>

                                    <a className="btn-next btn btn-dark" >Save<BiRightArrowAlt className="ms-1" /></a>

                                </form>
                            </div>
                            <div className="tab-pane fade" id="nav-booking" role="tabpanel" aria-labelledby="nav-booking-tab">
                                <h1>Bookings</h1>
                                <div className='table-responsive'>
                                    <table className='table table-light'>
                                        <thead>

                                            <tr>
                                                <th> DateTime</th>
                                                <th>Services </th>
                                                <th> Duration </th>
                                                <th> stylist </th>
                                                <th>TotalPrice </th>
                                                <th>Status </th>
                                            </tr>
                                        </thead>
                                        {/* <tbody>
                                            {bookings.map((booking, index) => (
                                                <tr key={index}>
                                                    <td> {booking.data.booking_time} </td>
                                                    <td> {booking.data.services?.map((service, index2) => (
                                                        <div key={index2}> {state.locale == 'en' ? service.data.name_en : service.data.name} </div>
                                                    ))} </td>
                                                    <td> {booking.data.duration} min </td>
                                                    <td> {booking.data.server?.data.name} </td>
                                                    <td> {`€${parseInt(booking.data.charge).toFixed(2)}`} </td>
                                                    <td> {booking.data.payment_status} </td>
                                                </tr>
                                            ))}
                                        </tbody> */}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
  )
}

export default page