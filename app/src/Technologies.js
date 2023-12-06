import React from 'react'
import { Row } from 'react-bootstrap'
import Group1942 from './Group1942.png'
import technologies from './technologies.png'

function Technologies() {
  return (
    <Row id='technologies' className='justify-content-center'>
        <Row>
            <div style={{ fontSize: '24px', color: 'white', textAlign: 'center', marginTop: '150px' }}>I'm currently looking to join a team</div>
            <div style={{ fontSize: '20px', color: 'white', textAlign: 'center', marginTop: '10px' }}>that values improving people's lives through accessible design</div>
        </Row>
        <Row className='justify-content-center'>
            <img src={technologies} alt="technologies" style={{ width: '550px', justifyContent: 'center', marginTop: '50px' }}/>
        </Row>
        <Row className='justify-content-center'>
            <img src={Group1942} alt="orb" style={{ width: '60%', marginTop: '30px'}}/>
        </Row>
    </Row>
  )
}

export default Technologies