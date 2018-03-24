import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const GridForm = (props) => (
  <Grid columns='equal'>
    {/* <Grid.Column>
      <Segment></Segment>
    </Grid.Column> */}
    <Grid.Column width={8} className="ui centered grid">
      <Segment>{props.children}</Segment>
    </Grid.Column>
    {/* <Grid.Column>
      <Segment></Segment>
    </Grid.Column> */}
  </Grid>
)

export default GridForm
