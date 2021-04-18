import React from 'react'
import { NavLink } from 'react-router-dom'

const Home:React.FC = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 my-3 d-flex flex-column align-items-center">
                    <h4 className="text-center mb-3">React, Typescript, Redux</h4>
                    <a href="https://github.com/themrzlyv/React-Webpack-Boilerplate" target="_blank" className="btn btn-primary">Read More</a>
                    <a href="/menu">go go</a>
                    <NavLink to="/menu">go go2</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home