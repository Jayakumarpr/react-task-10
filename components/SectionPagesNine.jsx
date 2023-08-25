import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SectionPagesNine = () => {
  return (
    <div className='SectionpageNinediv'>
    <h4 className='SectionpageFiveh'>Must Visit Place in Chennai</h4>

    <div className="SectionpageNineCard">

        <Card style={{ width: '18rem' }} className='SectionpageNineCard1'>
            <Card.Img variant="top" src={require('../Images/homePage/ooty1 (1).jpeg')} />
            <Card.Body>
                <Card.Title>Nilgiri moutain Railway</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='SectionpageNineCard1'>
            <Card.Img variant="top" src={require('../Images/homePage/ooty1 (2).jpeg')} />
            <Card.Body>
                <Card.Title>Ooty potencial Garden</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='SectionpageNineCard1'>
            <Card.Img variant="top" src={require('../Images/homePage/ooty1 (3).jpeg')} className='ootycard3' />
            <Card.Body>
                <Card.Title>Emerald Lake</Card.Title>
                <Card.Text>
                    Some quick example text to title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='SectionpageNineCard1'>
            <Card.Img variant="top" src={require('../Images/homePage/ooty1 (4).jpeg')} className='ootycard4'  />
            <Card.Body>
                <Card.Title>Dolpins Nose</Card.Title>
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

export default SectionPagesNine
