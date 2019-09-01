import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'
import IS_MOBILE from '../../lib/is-mobile'

class Screen extends React.Component {
    constructor(props) {
        super(props)
        this.wrapper = React.createRef()
    }

    componentDidMount() {
        if (IS_MOBILE()) {
            let vh = window.innerHeight * 0.01
            //this trick is useful to get 100% height of mobile screen (ignore the menu bar) see ref: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
            this.wrapper.current.style.setProperty('--vh', ` ${vh}px `)
        }
    }

    render() {
        return (
            <div
                className={classnames(this.props.className, styles.screen)}
                ref={this.wrapper}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Screen