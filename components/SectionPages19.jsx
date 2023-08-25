import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SectionPages19 = () => {
  return (
    <div className='Sectionpage19div'>
    <h4 className='SectionpageFiveh'>Must Visit Place in Chennai</h4>

    <div className="Sectionpage19Card">

        <Card style={{ width: '18rem' }} className='Sectionpage19Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/theni1.(1).jpeg')} />
            <Card.Body>
                <Card.Title>Cinna suruli Falls</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage19Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/theni1 (2).jpeg')} />
            <Card.Body>
                <Card.Title>Kumbakarai Falls</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage19Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/theni1.(3).jpeg')} />
            <Card.Body>
                <Card.Title>Mehamali</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage19Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/theni1.(4).jpeg')} />
            <Card.Body>
                <Card.Title>Suruli Falls</Card.Title>
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

export default SectionPages19
