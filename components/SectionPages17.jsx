import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SectionPages17 = () => {
  return (
    <div className='Sectionpage17div'>
    <h4 className='SectionpageFiveh'>Must Visit Place in Chennai</h4>

    <div className="Sectionpage17Card">

        <Card style={{ width: '18rem' }} className='Sectionpage17Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/yercaud1 (2).jpeg')} />
            <Card.Body>
                <Card.Title>Pagoda Point</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage17Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/yercaud1 (4).jpeg')} />
            <Card.Body>
                <Card.Title>Botencial Garden</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage17Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/yercaud1.(3).jpeg')} />
            <Card.Body>
                <Card.Title>Emerald Lake</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}className='Sectionpage17Card1'>
            <Card.Img variant="top" src={require('../Images/homePage/yercaud1.(4).jpeg')} />
            <Card.Body>
                <Card.Title>Ledys seat</Card.Title>
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

export default SectionPages17
