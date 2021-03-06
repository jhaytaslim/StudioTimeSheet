import React from 'react';
import PropTypes from 'prop-types'
import {Header as HD,Segment} from 'semantic-ui-react'

const Header=({Title})=>(
    <div className="ui fixed menu set-blue">
        <div className="ui container center-content">
            <a href="#" className="header item app-header">
                {/* <img class="logo" src="assets/images/logo.png" /> */}
                <h2>{Title}</h2>
            </a>
            
        </div>
    </div>
)

Header.propTypes = {
    Title: PropTypes.string.isRequired,
}

export default Header