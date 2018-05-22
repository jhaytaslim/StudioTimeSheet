import React from 'react';
import PropTypes from 'prop-types'
import {Segment} from 'semantic-ui-react'

const Header=({Title})=>(
    <Segment textAlign='center' inverted color='blue'>
            {Title}
    </Segment>
)

Header.propTypes = {
    Title: PropTypes.string.isRequired,
}

export default Header