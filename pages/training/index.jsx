import axios from 'axios'
import Image from 'next/image'
import Script from 'next/script'
import GallerySection from '../../components/core/GallerySection'
import HeroSection from '../../components/core/HeroSection'
import PromotionalImage from '../../components/core/PromotionalImage'
import SwipperTestimoni from '../../components/slider/SwipperTestimoni'
import DetailTraining from '../../components/trainingComponents/DetailTraining'
import PopularTraining from '../../components/trainingComponents/PopularTraining'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'



export async function getStaticProps(context) {
  const bannerReq = await axios.get(process.env.NEXT_PUBLIC_API + '/api/banners?populate=gambar');
  const clients = await axios.get(process.env.NEXT_PUBLIC_API + '/api/clients?populate=logoInstansi&pagination[limit]=24&sort[0]=id%3Adesc');
  const trainingGroup = await axios.get(process.env.NEXT_PUBLIC_API + '/api/training-groups?populate=gambarTraining');
  const trainings = await axios.get(process.env.NEXT_PUBLIC_API +'/api/trainings?populate[0]=training_groups');
  const trainingPopuler = await axios.get(process.env.NEXT_PUBLIC_API +'/api/trainings?filters[popular][$eq]=true&populate=poster');
  const testimoni = await axios.get(process.env.NEXT_PUBLIC_API + '/api/testimoni-trainings?populate=avatar&pagination[limit]=6&sort[0]=id%3Adesc');
  const galery = await axios.get(process.env.NEXT_PUBLIC_API + '/api/galery-trainings?populate=foto&pagination[limit]=8&sort[0]=id%3Adesc');
  const homeData = await axios.get(process.env.NEXT_PUBLIC_API + '/api/home-trainings?populate=gambarAbout&populate=logowebsite&pagination[limit]=1');
  const why = await axios.get(process.env.NEXT_PUBLIC_API + '/api/why-trainings');

  return {
    props: {
      banners : bannerReq.data,
      clients : clients.data,
      trainingGroup: trainingGroup.data,
      trainings: trainings.data,
      trainingPopuler: trainingPopuler.data,
      testimoni : testimoni.data,
      galery : galery.data,
      homeData : homeData.data.data[0],
      why : why.data
      
    }, // will be passed to the page component as props
    revalidate: 30,
  }
}

export default function Home({banners,clients,trainingGroup,trainings,trainingPopuler,testimoni,galery,homeData,why}) {
 




  

  return (
    <>
    
    <Layout title='Internusa Training' homeData={homeData} secondTitle="">
  {/* End Header */}

  <HeroSection bannerData={banners}/>
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-5 align-items-stretch video-box"
            style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_API + homeData.attributes.gambarAbout.data.attributes.url})` }}
          >
            <a
              href="https://www.youtube.com/watch?v=zVFct7nl3zs"
              className="venobox play-btn mb-4"
              data-vbtype="video"
              data-autoplay="true"
            />
          </div>
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
            <div className="content">
              <ReactMarkdown>{homeData.attributes.about}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}
    {/* ======= Whu Us Section ======= */}
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="section-title">
          <h2>
            Kenapa Memilih <span>Pelatihan Kami</span>
          </h2>
          <p>
          {homeData.attributes.kenapaKami}
          </p>
        </div>
        <div className="row">
        {why.data.map(wh => (
          <div className="col-lg-4" key={wh.id}>
          <div className="box">
            <span>{wh.attributes.no}</span>
            <h4>{wh.attributes.title}</h4>
            <p>
            {wh.attributes.description}
            </p>
          </div>
        </div>
        ))}
          

         
        </div>
      </div>
    </section>
    {/* End Whu Us Section */}
     {/* ======= Chefs Section ======= */}
     <PromotionalImage trainingGroup={trainingGroup} homeData={homeData.attributes.pelatihanKami}/>
    {/* End Chefs Section */}
    {/* ======= Menu Section ======= */}
    <DetailTraining trainings={trainings} trainingGroup={trainingGroup}/>
    {/* End Menu Section */}
    {/* ======= Specials Section ======= */}
    <PopularTraining trainings={trainingPopuler} homeData={homeData.attributes.pelatihanPopuler}/>
    {/* End Specials Section */}


    <section  className="bg-light py-4" id="testimoni">
<div className="container" style={{minHeight: 400}}>
<div className="section-title">
          <p >TESTIMONI</p>
          <h2 className="text-center">Apa yang mereka katakan mengenai <span>INTERNUSA ?</span></h2>
</div>
<SwipperTestimoni testimoni={testimoni} />
</div>
</section>
   
    {/* ======= Gallery Section ======= */}
   <GallerySection galery={galery} omeData={homeData.attributes.pelatihanDokumentasi}/>
    {/* End Gallery Section */}
   
   
    {/* ======= Contact Section ======= */}
    



    <section  className="bg-light py-4" id="testimoni">

   

<div className="container" style={{minHeight: 400}}>

<div className="section-title">
          <p >CLIENT KAMI</p>
          <h2 className="text-center">Di percara oleh banyak <span>Instansi Besar</span></h2>


</div>
    <div className='row'>
      {clients.data.map((client,index) => (
        <div className='col-lg-2 col-md-2 col-sm-4 col-6' key={index}>
        <Image src={process.env.NEXT_PUBLIC_API + client.attributes.logoInstansi.data.attributes.url} alt={client.attributes.namaInstansi} width={90} height={90}/>
      </div>
      ))}
      

    </div>

</div>


</section>
    {/* End Contact Section */}
  </main>
  {/* End #main */}


  
  <Script src="assets/vendor/glightbox/js/glightbox.min.js" />
  <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" />
  

  
 


    </Layout>


</>

  )
}
