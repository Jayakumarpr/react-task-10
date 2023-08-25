import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SelectionPages11 = () => {
  return (
    <div className='Sectionpage11div'>
    <h4 className='SectionpageFiveh'>Must Visit Place in Chennai</h4>

    <div className="Sectionpage11Card">

        <Card style={{ width: '18rem' }} className='Sectionpage11Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/kanyakumari1 (1).jpeg')} />
            <Card.Body>
                <Card.Title>Kanniyakumari Baeach</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage11Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/kanyakumari1.(2).jpeg')} />
            <Card.Body>
                <Card.Title>Vivekanandha Memorial </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage11Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/kanyakumari1 (3).jpeg')} className='kanniyaa-card3'/>
            <Card.Body>
                <Card.Title>Thiruvalluvar Status</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage11Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/kanyakumari1 (4).jpeg')} />
            <Card.Body>
                <Card.Title>Thiruparappu falls</Card.Title>
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

export default SelectionPages11
