import React from 'react'
import moment from 'moment'

import GreenBadge from '../../assets/GreenBadge.png'
import RedBadge from '../../assets/RedBadge.png'
import YellowBadge from '../../assets/YellowBadge.png'
import './ListItem.css'
import NumbersLookup from '../../config/violationsLookup'

class ListItem extends React.Component {
    constructor() {
        super()

        this.state = {
            showMore: false
        }
    }

    render() {

        let badge = YellowBadge
        if (this.props.restaurant.results.toUpperCase() === 'Fail'.toUpperCase()) {
            badge = RedBadge
        } else if (this.props.restaurant.results.toUpperCase() === 'Pass'.toUpperCase()) {
            badge = GreenBadge
        }

        let name = this.props.restaurant.aka_name
            ? this.props.restaurant.aka_name
            : this.props.restaurant.dba_name

        name = name.toLowerCase()
        name = `${name.substring(0, 1).toUpperCase()}${name.substring(1)}`
        const date = moment(this.props.restaurant.inspection_date)
        const containerClasses = this.state.showMore
            ? 'result-list-item-container result-list-item-container-large'
            : 'result-list-item-container'

        const iconClass = this.state.showMore
            ? 'result-list-item-more-icon rotated'
            : 'result-list-item-more-icon'
        return (
            <div className={containerClasses}>
                <div className="result-list-item">
                    <div className="result-list-item-description">
                        <h2>{name}</h2>
                        <p>{this.props.restaurant.address}</p>
                        <p className="result-list-item-last-updated"> Last Updated: {date.format('MMM D YYYY')}</p>
                    </div>
                    <div className="result-list-item-badge">
                        <img src={badge} alt={this.props.restaurant.results} title={this.props.restaurant.results} />
                    </div>
                </div>
            </div>
        )
    }
}
export default ListItem
