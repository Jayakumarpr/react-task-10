import React from 'react'

const SectionPageTwo = () => {
  return (
    <div className='SectionPageTwodiv'>
       <h2>01.Chennai</h2>
       <div className='SectionPageTwobox'>
          
          <div className="SectionPageTwobox1">
          
          <img className="SectionPageTwoimg1"
                    src={require("../Images/homePage/Chennai.jpeg")}
                    alt=""
                />
          </div>

          <div className="SectionPageTwobox2">
             <h6 className='SectionPageTwobox2h'>"The Detroit Of India"</h6>

             <p className='SectionPageTwobox2p'>Formerly known as Madras , Chennai is the capital city of the state of Tamil Nadu , in the southern part of India . Located on the Coromandel coast of Bay of Bengal , Chennai is as dynamic as it is immersed in tradition . This ' capital of the south ' , is one among the four metropolitan siblings of India , having a rich cultural history which it perfectly balances with its metropolis lifestyle.</p>
             <p className='SectionPageTwobox2p'>A Amid its chaos of traffic and sweltering humid climate , Chennai is worth visiting for its temples steeped in south - Indian culture , British - era museums and monuments , culinary delights and Marina Beach ( Second largest urban beach in the world ) . Chennai's skyline is famous for its towering skyscrapers , but the heart of Chennai has an old - world charm to it that refuses to be overshadowed</p>

          </div>

       </div>
    </div>
  )
}

export default SectionPageTwo
