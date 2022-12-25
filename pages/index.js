import Layout from "../components/Layout"
import axios from "axios"
import HeroSection from '../components/core/HeroSection'
import ReactMarkdown from 'react-markdown'
import dynamic from "next/dynamic";
import SwipperTestimoni from "../components/slider/SwipperTestimoni";
import HomeForm from "../components/core/HomeForm";
import Link from "next/link";

export async function getStaticProps(context) {

  const homeData = await axios.get(process.env.NEXT_PUBLIC_API + '/api/inter-homes?populate=gambarAbout&populate=logowebsite');
  const bannerReq = await axios.get(process.env.NEXT_PUBLIC_API + '/api/inter-banners?populate=gambar');
  const busines = await axios.get(process.env.NEXT_PUBLIC_API + '/api/inter-bisnises');
  const why = await axios.get(process.env.NEXT_PUBLIC_API + '/api/inter-whies');
  const bakti = await axios.get(process.env.NEXT_PUBLIC_API + '/api/inter-baktis');
  const testimoni = await axios.get(process.env.NEXT_PUBLIC_API + '/api/inter-testimonis?populate=avatar&pagination[limit]=6&sort[0]=id%3Adesc');
  const aktifitas = await axios.get(process.env.NEXT_PUBLIC_API + '/api/inter-aktifities?populate=gambar&pagination[limit]=8&sort[0]=id%3Adesc');
  const counter = await axios.get(process.env.NEXT_PUBLIC_API + '/api/inter-counters');
  return {
    props: {
      homeData : homeData.data.data[0],
      banners : bannerReq.data,
      testimoni : testimoni.data,
      busines : busines.data,
      why : why.data,
      bakti : bakti.data,
      aktifitas : aktifitas.data,
      counter : counter.data
    }
  }

}
export default function Home({homeData,banners,testimoni,busines,why,bakti,aktifitas,counter}) {

  const SwipperAktifitas = dynamic(() => import("../components/slider/SwipperAktifitas"))

  return (
    <Layout title='Internusa Group' homeData={homeData} secondTitle="">
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

    {/* conter */}



    {/* end conter */}
    <section id="count" className="counter" style={{
      backgroundImage : `url(/assets/img/chefs-bg.jpg)`
    }}>
      <div className="container py-5">
        <div className="row py-5">
{counter.data.map(count => (

        <div className="col-lg-3 col-md-6"  key={count.id}>
          <h2 className="text-center text-white">{count.attributes.title}</h2>
          <p className="text-center text-white">{count.attributes.content}</p>
        </div>
))}

        
      </div>

      </div>
      

    </section>

    {/* ======= Whu Us Section ======= */}
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="section-title">
          <h2>
            Kenapa <span>Internusa Grop</span>
          </h2>
          <p>
          {homeData.attributes.why}
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

    {/* End About Section */}

    {/* ======= Bisnis Section ======= */}
    <section id="bisnis" className="why-us about">
      <div className="container">
        <div className="section-title">
          <h2>
            Bisnis <span>Internusa Group</span>
          </h2>
          <p>
          {homeData.attributes.bisnis}
          </p>
        </div>
        <div className="row">
          {busines.data.map(bisnis => (

          <div className="col-lg-4 my-2" key={bisnis.id}>
            <Link href={bisnis.attributes.url}>
            <div className="box">
              <span>{bisnis.attributes.no}</span>
              <h1 className={`bi ${bisnis.attributes.icon} text-center`}></h1>
              <h4>{bisnis.attributes.title}</h4>
              <p>
              {bisnis.attributes.description}
              </p>
            </div>
          </Link>
          </div>
          ))}
        </div>
      </div>
    </section>
    {/* End Bisnis Section */}

    {/* ======= Sosial Section ======= */}
    <section id="sosial" className="why-us">
      <div className="container">
        <div className="section-title">
          <h2>
            Kegiatan Bakti Sosial <span>Internusa Grop</span>
          </h2>
          <p>
          {homeData.attributes.bakti}
          </p>
        </div>
        <div className="row">
{bakti.data.map(bak => (
  <Link href={bak.attributes.url}  key={bak.id}>
          <div className="col-lg-4">
            <div className="box">
              <span>{bak.attributes.no}</span>
              <h4>{bak.attributes.title}</h4>
              <p>
              {bak.attributes.description}
              </p>
            </div>
          </div>
  </Link>
))}


        </div>
      </div>
    </section>
    {/* end kegiatan masyarakat */}

    {/* aktifitas */}
    <section id="activitas" className="py-4 pb-3 mt-4 pt-5 bg-kedua">

      <div className="container">
      <div className="section-title">
          <h2>
            Aktifitas Terbaru <span>Internusa Group</span>
          </h2>
          <p>
          {homeData.attributes.aktifitas}
          </p>
        </div>
      </div>


      <div>

      <SwipperAktifitas aktifitas={aktifitas}/>
      </div>

      </section>
    {/* end aktifitas */}

    {/* testi moni */}
    <section  className="py-4" id="testimoni">
    <div className="container" style={{minHeight: 400}}>
    <div className="section-title">
              <p >TESTIMONI</p>
              <h2 className="text-center">Apa yang mereka katakan mengenai <span>INTERNUSA ?</span></h2>
    </div>
    <SwipperTestimoni testimoni={testimoni} />
    </div>
    </section>
    {/* end testimoni */}


    {/* contact */}
    <section className="py-4 bg-kedua mt-4" id="contact">
    <div className="section-title">
        <h2>Kontak</h2>
        <h3 className="text-center">Hubungi Kami Di</h3>
    </div>

    <div className="container">
      <div className="row justify-content-center">

        <div className="col-lg-12">
        <iframe src={homeData.attributes.mapLink}  height="350" style={{border:0, width: '100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="col-md-5 col-sm-10 py-3 px-3 text-bg-warning my-1 mx-1">
        <h2 className='text-center text-white'><i className='bx bx-buildings'></i></h2>
        <p className="text-white text-center">{homeData.attributes.alamat}</p>
        
        </div>

        <div className="col-md-5 col-sm-10  py-3 px-3 text-bg-warning my-1 mx-1">
        <h2 className='text-center text-white'><i className='bx bx-phone' ></i></h2>
        <p className="text-white text-center">{homeData.attributes.wa}</p>
        </div>

        <div className="col-md-5 col-sm-10  py-3 px-3 text-bg-warning my-1 mx-1">
        <h2 className='text-center text-white'><i className='bx bx-envelope' ></i></h2>
        <p className="text-white text-center">{homeData.attributes.email}</p>
        </div>

        <div className="col-md-5 col-sm-10  py-3 px-3 text-bg-warning my-1 mx-1">
        <h2 className='text-center text-white'><i className='bx bx-time-five' ></i></h2>
        <p className="text-white text-center">{homeData.attributes.jamBuka}</p>
        </div>


        <div className="col-12 shadow-md py-3 mt-3 bg-white">

          <div className="row">
            <HomeForm />
          </div>
        </div>

      </div>

    </div>


    </section>
    {/* end contact */}

        </main>
    </Layout>
  )
}
