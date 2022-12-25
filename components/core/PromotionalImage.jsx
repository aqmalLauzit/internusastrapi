import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const PromotionalImage = ({trainingGroup,homeData = ""}) => {
  return (
    <section id="program" className="chefs">
      <div className="container">
        <div className="section-title">
          <h2>
            <span>Pelatihan  </span>Kami
          </h2>
          <p>
            {homeData}
          </p>
        </div>
        <div className="row">
{trainingGroup.data.map(trainingGrp => (

<div className="col-lg-4 col-md-6" key={trainingGrp.id}>
<div className="member">
  <div className="pic">
    <Image
      src={process.env.NEXT_PUBLIC_API + trainingGrp.attributes.gambarTraining.data.attributes.url}
      className="img-fluid"
      alt=""
      width={400}
      height={400}
      objectFit="cover"
    />
  </div>
  <div className="member-info">
    <h4>{trainingGrp.attributes.namaPelatihan}</h4>
    <span>{trainingGrp.attributes.headline}</span>
    <div className="social">
      <Link href={`/training/detail/${trainingGrp.attributes.slug}`}>
      <a >
        Lihat Detail
      </a>
      </Link>
      
    </div>
  </div>
</div>
</div>

))}
          

        </div>
      </div>
    </section>
  )
}

export default PromotionalImage