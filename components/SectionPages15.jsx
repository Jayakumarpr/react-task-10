import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SectionPages15 = () => {
  return (
    <div className='Sectionpage15div'>
    <h4 className='SectionpageFiveh'>Must Visit Place in Chennai</h4>

    <div className="Sectionpage15Card">

        <Card style={{ width: '18rem' }} className='Sectionpage15Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/madurai1..jpeg')} />
            <Card.Body>
                <Card.Title>Vagai Dam</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage15Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/madurai2.jpeg')} />
            <Card.Body>
                <Card.Title>Megamalai</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage15Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/madurai3..jpeg')} />
            <Card.Body>
                <Card.Title>Semmanar Hills</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage15Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/madurai4..jpeg')} />
            <Card.Body>
                <Card.Title>Thirumali Nayakkar </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>


        
    </div>

</div>
  )
}

export default SectionPages15
