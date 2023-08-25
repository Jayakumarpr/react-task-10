import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SectionPages13 = () => {
  return (
    <div className='Sectionpage13div'>
    <h4 className='SectionpageFiveh'>Must Visit Place in Chennai</h4>

    <div className="Sectionpage13Card">

        <Card style={{ width: '18rem' }} className='Sectionpage13Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/Kumbakonam(3).jpeg')} />
            <Card.Body>
                <Card.Title>Sarangapani Temple</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage13Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/kumbakonam1 (2).jpeg')}  className='kumba-card2'/>
            <Card.Body>
                <Card.Title>Nagaeshwar temple</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage13Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/kumbakonam1 (3).jpeg')} className='kumba-card3'/>
            <Card.Body>
                <Card.Title>Adi kumbeshwarar Temple</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage13Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/kumbakonam1 (4).jpeg')} />
            <Card.Body>
                <Card.Title>Airavateshwara Temple</Card.Title>
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

export default SectionPages13
