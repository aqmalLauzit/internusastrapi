import Link from 'next/link';
import React, { useState } from 'react'

const DetailTraining = ({trainings,trainingGroup}) => {

  const allProgram = trainings;



  const [selected,SetSelected] = useState("");
  const [programs,setPrograms] = useState(allProgram);

  
 


  const onSelect = (chose = "") => {
    SetSelected(chose);
    setPrograms(allProgram.data.filter((progs) => {
      let i = 0;
      while (i < trainingGroup.data.length) {
        if(progs.attributes.training_groups.data[i]?.attributes.namaPendek != chose){
          
        } else if (progs.attributes.training_groups.data[i]?.attributes.namaPendek == chose) {
          return progs.attributes.training_groups.data[i].attributes.namaPendek == chose;
          
        }
        i++;
      }
    
     

    }))
  }

 



  return (
     <section id="menu" className="menu">
      <div className="container">
        <div className="section-title">
          <h2>
            Program <span>Latihan Kami</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            
            <button className={selected == '' ? 'btn btn-warning' : 'btn btn-outline-warning mx-1 my-1'} onClick={
              () => {
                SetSelected('')
                setPrograms(allProgram)
              }}>
              Semua
            </button>

            {trainingGroup.data.map(trainingGrp => (
              <button key={trainingGrp.id} className={selected == trainingGrp.attributes.namaPendek ? 'btn btn-warning' : 'btn btn-outline-warning mx-1 my-1'} onClick={
                async() => {
                  setPrograms(allProgram)
                   onSelect(trainingGrp.attributes.namaPendek)
                }
              }>
                {trainingGrp.attributes.namaPendek}
              </button>
            ))}

            

           

          </div>
        </div>
        <div className="row menu-container">
{programs.data ? programs.data.map((program, index) => (

<div key={index} className="col-lg-6 menu-item">
<div className="menu-content">
<Link href={`/training/${program.attributes.slug}`}>  
  <a>{program.attributes.judulTraining}
</a>
</Link>
</div>
            <div className="menu-ingredients">
              {program.attributes.headlineTraining}
            </div>
          </div>

)) : programs.map((program, index) => (

  <div key={index} className="col-lg-6 menu-item">
  <div className="menu-content">
  <Link href={`/training/${program.attributes.slug}`}>  
    <a>{program.attributes.judulTraining}
  </a>
  </Link>
  </div>
              <div className="menu-ingredients">
                {program.attributes.headlineTraining}
              </div>
            </div>
  
  ))}
          
            


        </div>
      </div>
    </section>
  )
}

export default DetailTraining