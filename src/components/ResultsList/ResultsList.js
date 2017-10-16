import React from 'react'
import './ResultsList.css'
import Arrow from '../../assets/arrow.png'
import LoadingGif from '../../assets/giphy.gif'
import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem'

const ResultsList = (props) => {
    if (props.loading) {
        return (
            <div className='results-list-container'>
                <img src={LoadingGif} className='loading-gif' />
            </div>
        )
    }
    else if (props.results.length > 0) {
        return (
            <div className='results-list-container'>
                { props.results.map((restaurant, i) => {
                    if (restaurant.results.toUpperCase() !== 'Out of Business'.toUpperCase()) {
                        return (
                            <ListItem key={i} restaurant={restaurant}/>
                        )
                    }
                })}
            </div>
        )
    } else if (props.searched) {
        return (
            <div className='results-list-container'>
                <h2>Sorry, no restaurants were found by that name</h2>
            </div>
        )
    }
    else {
        return (
            <div className='results-list-container'>
                <h2>Kick it off from the top!</h2>
                <img className="arrow" src={Arrow} />
            </div>
        )
    }
}

ResultsList.propTypes = {
    loading: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired
}

export default ResultsList