import React from 'react'
import { Card, Icon,Image, Reveal,Feed } from 'semantic-ui-react'
import '../../styles/main.css'
const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const RevealForm = () => (
  <Reveal animated='move right'>
  {/* <div> */}
    <Reveal.Content visible>
      {/* <Image src='/assets/images/wireframe/square-image.png' size='small' /> */}
      <DisplayForm text="Taslim ADIATU" size="large"/>
    </Reveal.Content>
    {/* </div>
    <div> */}
    <Reveal.Content hidden>
      <DisplayForm  text="David EDET" size="large"/>
    </Reveal.Content>
    {/* </div> */}
  </Reveal>
)


const RevealFormX = () => (
  <Reveal animated='fade'>
    <Reveal.Content visible>
      <Image src={require('../../images/tas_n.jpg')} size='large' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src={require('../../images/cutting.jpg')} size='large' />
    </Reveal.Content>
  </Reveal>
)

//  RevealExampleMove

export const DisplayForm = (text) => (
  <Card
    image={require('../../images/tas_n.jpg')}
    header={text}
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
    size="large"
  />
)

const XForm = () => (
  <Card
    fluid
    className="ui centered grid"
    image={require('../../images/5d90c8cec7eccb9a40db0cfabfbbd787.jpeg')}
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)

export const DetailForm = () => (
  <Card>
    <Card.Content>
      <Card.Header>
        Recent Activity
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='/assets/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/assets/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/assets/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
)


export default RevealForm

