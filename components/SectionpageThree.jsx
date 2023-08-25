import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SectionpageThree = () => {
    return (
        <div className='SectionpageThreediv'>
            <h4 className='SectionpageThreeh'>Must Visit Place in Chennai</h4>

            <div className="SectionpageThreeCard">

                <Card style={{ width: '18rem' }} className='SectionpageThreeCard1'>
                    <Card.Img variant="top" src={require('../Images/homePage/chennai1.jpeg')} />
                    <Card.Body>
                        <Card.Title>Marina Beach</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}className='SectionpageThreeCard1'>
                    <Card.Img variant="top" src={require('../Images/homePage/chennai2.jpeg')} />
                    <Card.Body>
                        <Card.Title>MGR Flim City</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}className='SectionpageThreeCard1'>
                    <Card.Img variant="top" src={require('../Images/homePage/chennai3...jpeg')} />
                    <Card.Body>
                        <Card.Title>Marundeeswarar</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}className='SectionpageThreeCard1'>
                    <Card.Img variant="top" src={require('../Images/homePage/chennai4.jpeg')} />
                    <Card.Body>
                        <Card.Title>Bressy Beach</Card.Title>
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

export default SectionpageThree
