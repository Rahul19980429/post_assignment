import React from 'react'
import PostShow from './PostShow'
import css from '../App.css'

const PillForPost = () => {
    return (
        <div  className='my-4'>
             <h3 className="text-center my-3">Welcome to the Poster Creater</h3>
            <ul className="nav nav-pills justify-content-center mb-4" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-dark active fw-bold " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">POST</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-dark fw-bold" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">CREATE NEW</button>
                </li>
               
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0"><PostShow/></div>
                <div className="tab-pane fade fs-4 text-center" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">Here we can add form to create new post.<br/>
                Thanks For Watching.
                </div>
               
            </div>

        </div>
    )
}

export default PillForPost
