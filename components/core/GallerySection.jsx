import Image from 'next/image'
import React from 'react'

const GallerySection = ({galery,homeData = ""}) => {
  return (
    <section id="gallery" className="gallery">
    <div className="container-fluid">
      <div className="section-title">
        <h2>
          Foto Dokumentasi <span>Pelatihan Kami</span>
        </h2>
        <p>
          {homeData}
        </p>
      </div>
      <div className="row g-0">
{galery.data.map((gal,index) => (
  <div className="col-lg-3 col-md-4" key={index}>
  <div className="gallery-item">
    <a
      href={process.env.NEXT_PUBLIC_API + gal.attributes.foto.data.attributes.url}
      className="gallery-lightbox"
    >
      <Image
        src={process.env.NEXT_PUBLIC_API + gal.attributes.foto.data.attributes.url}
        alt=""
        className="img-fluid"
        width={500}
        height={350}
        objectFit={"cover"}
      />
    </a>
  </div>
</div>
))}
        

       
      </div>
    </div>
  </section>
  )
}

export default GallerySection