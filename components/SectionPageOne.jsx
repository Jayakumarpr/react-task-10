import React from 'react'
import { Row } from 'react-bootstrap'

const SectionPageOne = () => {
  return (
    <div>
    <div className='sectionhead'>
     <h1>Tourist Places To Tamil Nadu  </h1> <br/><h2>Here Are The Top Places To Visit In Tamil Nadu In 2023</h2>
    </div>

      {/* <ul>
         <li><a href="">Chennai  Rameshwaram</a></li>
         <li><a href="">Kodaikanal<br/> Ooty</a></li>
         <li><a href="">Madurai<br/> Kanyakumari</a></li>
         <li><a href=""> Kumbakonam <br/>Yarcaud </a></li>
         <li><a href="">Theni<br/> Hogenakkal</a></li>
      </ul> */}

      {/* <div>
        <Row>
            <col><a href="">Chennai  Rameshwaram</a></col>
            <col><a href="">Kodaikanal<br/> Ooty</a></col>
            <col><a href="">Madurai<br/> Kanyakumari</a></col>
            <col><a href=""> Kumbakonam <br/>Yarcaud </a></col>
            <col><a href="">Theni<br/>Hogenakkal</a></col>
        </Row>
      </div> */}

<div class="container text-center sectionbtm">
  <div class="row">
    <div class="col">
    <a href="#ectionPageTwo">Chennai <br></br> Rameshwaram</a>
    </div>
    <div class="col">
    <a href="">Kodaikanal<br/> Ooty</a>
    </div>
    <div class="col">
        <a href="">Madurai<br/> Kanyakumari</a>
        </div>
    <div class="col">
    <a href="#SectionPages18">Theni<br/>Hogenakkal</a> 
    </div>
  </div>
 
</div>
</div>
  )
}

export default SectionPageOne
