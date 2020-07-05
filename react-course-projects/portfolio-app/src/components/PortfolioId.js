import React from 'react'

const PortfolioId = (props) => (
    <div>
        <h1>This is my project {props.match.params.id}</h1>
    </div>
)

export default PortfolioId