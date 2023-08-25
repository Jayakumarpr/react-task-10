import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SectionPageFive = () => {
  return (
    <div className='SectionpageFivediv'>
            <h4 className='SectionpageFiveh'>Must Visit Place in Chennai</h4>

            <div className="SectionpageFiveCard">

                <Card style={{ width: '18rem' }} className='SectionpageFiveCard1'>
                    <Card.Img variant="top" src={require('../Images/homePage/rameshwarem1 (6).jpeg')} />
                    <Card.Body>
                        <Card.Title>Dhanushkodi Temple</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}className='SectionpageFiveCard1'>
                    <Card.Img variant="top" src={require('../Images/homePage/rameshwarem2.jpeg')} />
                    <Card.Body>
                        <Card.Title>Lakshmana Temple</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}className='SectionpageFiveCard1'>
                    <Card.Img variant="top" src={require('../Images/homePage/Rameshwaram3..jpeg')} />
                    <Card.Body>
                        <Card.Title>Rameshwaram Temple</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}className='SectionpageFiveCard1'>
                    <Card.Img variant="top" src={require('../Images/homePage/rameshwarem1 (6).jpeg')} />
                    <Card.Body>
                        <Card.Title>Viloondi Temple</Card.Title>
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

export default SectionPageFive
