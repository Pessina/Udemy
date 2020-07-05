import React from 'react'
import {Link} from 'react-router-dom'

const Portfolio = () => (
    <div>
        <h1>Things Ive Done</h1>
        <Link to='/portfolio/1'>Proj 1</Link>
        <Link to='/portfolio/2'>Proj 2</Link>
        <Link to='/portfolio/3'>Proj 3</Link>
    </div>
)

export default Portfolio