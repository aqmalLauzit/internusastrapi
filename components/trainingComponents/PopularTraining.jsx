import Image from 'next/image'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const PopularTraining = ({trainings, homeData = ""}) => {

    const [selected,setSelected] = useState(0);
  return (
    <section id="popular" className="specials">
      <div className="container">
        <div className="section-title">
          <h2>
            Pelatihan <span>Terpopuler</span>
          </h2>
          <p>
          {homeData}
          </p>
        </div>
        <div className="row">

          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
            {trainings.data.map((training,index) => (
                index == selected ? (
<li className="nav-item" key={index}>
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  href={`#`}
                  onClick={() => setSelected(index)}
                >
                  {training.attributes.judulTraining}
                </a>
              </li>
                ) : (

                    <li className="nav-item" key={index}>
                <a
                  className="nav-link  show"
                  data-bs-toggle="tab"
                  href={`#`}
                  onClick={() => setSelected(index)}
                >
                  {training.attributes.judulTraining}
                </a>
              </li>
                )
                
    ))}
            </ul>
          </div>

          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">

            {trainings.data.map((training,index) => (
                    index == selected ? (
                        <div className="tab-pane active show" id={training.attributes.slug} key={index}>
                        <div className="row" key={index}>
                          <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>{training.attributes.judulTraining}</h3>
                            <ReactMarkdown>{training.attributes.description}</ReactMarkdown>
                          </div>
                          <div className="col-lg-4 text-center order-1 order-lg-2">
                            <Image
                              src={process.env.NEXT_PUBLIC_API + training.attributes.poster.data.attributes.url}
                              alt=""
                             width={400}
                             height={400}
                             objectFit='cover'
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                        <div className="tab-pane" id={training.attributes.slug} key={index}>
                        <div className="row" key={index}>
                          <div className="col-lg-8 details order-2 order-lg-1">
                            <h3>{training.attributes.judulTraining}</h3>
                            <ReactMarkdown>{training.attributes.description}</ReactMarkdown>
                            
                          </div>
                          <div className="col-lg-4 text-center order-1 order-lg-2">
                            <Image
                              src="/assets/img/specials-1.jpg"
                              alt=""
                             width={400}
                             height={400}
                            />
                          </div>
                        </div>
                      </div>
                    )
              
            ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularTraining