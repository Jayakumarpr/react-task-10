import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SectionPageSeven = () => {
  return (
     
    <div className='SectionpageSevendiv'>
    <h4 className='SectionpageFiveh'>Must Visit Place in Chennai</h4>

    <div className="SectionpageSevenCard">

        <Card style={{ width: '18rem' }} className='SectionpageSevenCard1'>
            <Card.Img variant="top" src={require('../Images/homePage/kodaikanal1....jpeg')} />
            <Card.Body>
                <Card.Title>Green valley View</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='SectionpageSevenCard1'>
            <Card.Img variant="top" src={require('../Images/homePage/kodaikanal2.jpeg')} />
            <Card.Body>
                <Card.Title>Kodai lake</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='SectionpageSevenCard1'>
            <Card.Img variant="top" src={require('../Images/homePage/kodaikanal3..jpeg')} />
            <Card.Body>
                <Card.Title>Bear Schola Falls</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='SectionpageSevenCard1'>
            <Card.Img variant="top" src={require('../Images/homePage/kodaikanal4.jpeg')} />
            <Card.Body>
                <Card.Title>Piller Rocks</Card.Title>
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

export default SectionPageSeven
