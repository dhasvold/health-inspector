import React from 'react'
import './ResultsList.css'
import Arrow from '../../assets/arrow.png'
import LoadingGif from '../../assets/giphy.gif'
import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem'

const ResultsList = (props) => {
    if (props.loading) {
        return (
            <div className="results-list-container">
                <img src={LoadingGif} className="loading-gif" />
            </div>
        )
    } else if (props.results.length > 0) {
        return (
            <div className="results-list-container">
                <div className="results-list">
                    {props.results.map((item, i) => {
                        if (item.results.toUpperCase() !== 'out of business'.toUpperCase()) {
                            return (
                                <ListItem key={i} restaurant={item} />
                            )
                        }
                    })}
                </div>
            </div>
        )
    } else if (props.searched) {
        return (
            <div className="results-list-container">
                <div className="no-results-found">
                    <h2>Sorry, we couldn't restaurants with that name</h2>
                </div>
            </div>
        )
    }
     else {
        return (
            <div className="results-list-container">
                <h2>Kick it off by searching up top!</h2>
                <img className="arrow" src={Arrow} />
            </div>
        )
    }
}

ResultsList.propTypes = {
    loading: PropTypes.bool.isRequired,
    searched: PropTypes.bool.isRequired
}
export default ResultsList

