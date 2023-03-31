import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'

const Order = () => {

    return (
        <div className='container-fluid vh-100 p-2'>
            <Header />
            <div className="row">
                <div className="col-md-12 p-2">
                    <Link to='/profile' className='btn btn-outline-primary'>Back</Link>
                </div>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-heading">
                            <h2 className="text-center">Order Process</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div>
                                        <input type="checkbox" name="Pre-Transit" id="" className='orderstatus' defaultChecked /><label htmlFor='Pre-Transit'>Pre-Transit</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="In-Transit" id="" className='orderstatus' defaultChecked /><label htmlFor='In-Transit'>In Transit</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="Out-for-Delivery" id="" className='orderstatus' defaultChecked /><label htmlFor='Out-for-Delivery'>Out for Delivery</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="Delivered" id="" className='orderstatus' defaultChecked /><label htmlFor='Delivered'>Delivered</label>
                                    </div>
                                </div>
                                <div className="col-md-6">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='map'>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a herf:"https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <Marker position={[51.505, -0.09]}></Marker>
            </MapContainer>
            </div>
        </div>
    )
}

export default Order