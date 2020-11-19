import React from 'react'
import '../css/about.css'
import prof from '../photos/am.jpg'

class About extends React.Component  {
  

    render () {
        return(
           
    <div class="container-about" id="about">
        <div className="about-content">
            <div className="container mt-5 pt-4">
            <div className="about-image">
                <img src={prof} alt className="rounded-circle"/>  
            </div>
            </div>
            <h2 className="mt-5 pt-4 ">Þorsteinn Óskarsson</h2>
            <h5>Tölvunarfræðingur </h5>
            <h6>Sími: 6923097 </h6>
            <h6>Netfang:<a href="mailto:tho85@hi.is"> tho85@hi.is</a> </h6> 
            <div className="container">
                <div className="about-text">
                    <p>Vorið 2020 útskrifaðist ég með B.Sc. í tölvunarfræði með fyrstu einkunn við Háskóla Íslands. 
                        Ég hef gaman af því að læra á nýja hluti sem tengjast forritun, hvort sem um ræðir forritunarmál,
                        forritunarsöfn, læra að gera tölvuleiki, vefsíður o.s.fr. Ég stefni á áframhaldandi nám í stórum gagnasöfnum, gervigreind eða 
                        tölvuleikjaforritun eins og staðan er nú, en getur auðveldlega breyst.
                    </p>
                </div>
            </div>

        </div>
        
    </div>

        
        );
    }
}

export default About