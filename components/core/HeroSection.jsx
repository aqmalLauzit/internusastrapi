import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

const HeroSection = ({bannerData}) => {

 


  return (
    <>


  <Carousel fade>
    {bannerData.data.map((banner) => (

<Carousel.Item key={banner.id}>
<Image
    src={process.env.NEXT_PUBLIC_API + banner.attributes.gambar.data.attributes.url}
    alt="First slide"
    layout="fill"
    placeholder="blur"
    blurDataURL={process.env.NEXT_PUBLIC_API + banner.attributes.gambar.data.attributes.url}
    objectFit={"cover"}
  />

<div className="image-backdrop">
          <div className="text-container">
            <h2 className='text-white text-center'><b>{banner.attributes.title}</b></h2>
            <p className='text-white text-center'>{banner.attributes.description}</p>
          </div>
        </div>


</Carousel.Item>

    ))}
     
      
    </Carousel>
</>
  )
}

export default HeroSection