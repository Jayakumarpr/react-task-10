import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SectionPages21 = () => {
  return (
    <div className='Sectionpage21div'>
    <h4 className='SectionpageFiveh'>Must Visit Place in Chennai</h4>

    <div className="Sectionpage21Card">

        <Card style={{ width: '18rem' }} className='Sectionpage21Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/hogenakkal1.jpeg')} />
            <Card.Body>
                <Card.Title>Theerthamalai temple</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage21Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/hogenakkal2..jpeg')} />
            <Card.Body>
                <Card.Title>Hoganenkkal Falls</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage21Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/hogenakkal3.jpeg')} />
            <Card.Body>
                <Card.Title>Pennagaram village</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage21Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/hokenakkal4..jpeg')} />
            <Card.Body>
                <Card.Title>Mettur dam</Card.Title>
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

export default SectionPages21
