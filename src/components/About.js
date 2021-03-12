import React from 'react'
import '../css/about.css'
import prof from '../photos/am.jpg'

class About extends React.Component  {
  

    render () {
        return(
           
    <div className="container-about" id="about">
        <div className="about-content">
            <div className="container mt-5 pt-4">
            <div className="about-image">
                <img src={prof} alt="" className="rounded-circle"/>  
            </div>
            </div>
            <h2 className="mt-5 pt-4 ">Þorsteinn Óskarsson</h2>
            <h5>Tölvunarfræðingur </h5>
            <h6>Sími: 6923097 </h6>
            <h6>Netfang:<a href="mailto:tho85@hi.is"> tho85@hi.is</a> </h6> 
            <div className="container">
                <div className="about-text">
                    <p>Vorið 2020 útskrifaðist ég með B.Sc. í tölvunarfræði með fyrstu einkunn við Háskóla Íslands. 
Áhugamál mín liggja hvað helst í fótbolta, verja tíma með vinum, tölvuleikjum og að læra og upplifa nýja hluti. 
Ég hef mikla reynslu af Java og Javascript þar sem þau voru helstu forritunarmálin sem kennd voru í HÍ ásamt þó nokkurri reynslu í Python.
Í gegnum háskólagöngu mína hafði ég hvað mest gaman af þeim kúrsum sem gengu helst út á að hanna og kóða hugbúnað eða sem tengdust gögnum og gervigreind.

                    </p>
                </div>
            </div>

        </div>
        
    </div>

        
        );
    }
}

export default About