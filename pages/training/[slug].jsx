import axios from 'axios'
import Image from 'next/image';
import React from 'react'
import Layout from '../../components/Layout'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link';


export async function getStaticPaths() {
  const trainings = await axios.get(process.env.NEXT_PUBLIC_API + `/api/trainings?&populate=poster`);
  
  const paths = trainings.data.data.map((trgp) => {
    return {

      params: { slug : trgp.attributes.slug },
    }
  })


  return {
    paths,
    fallback: true,
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({params}) {
  const trainings = await axios.get(process.env.NEXT_PUBLIC_API + `/api/trainings?filters[slug][$eq]=${params.slug}&populate=poster`);
  const homeData = await axios.get(process.env.NEXT_PUBLIC_API + '/api/home-trainings?populate=gambarAbout&populate=logowebsite');
  return {
    // Passed to the page component as props
    props: { 
      trainings: trainings.data,
      homeData : homeData.data
     },
     revalidate: 30,
  }
}


const slug = ({trainings,homeData}) => {



  return (
    <Layout title={trainings?.data[0]?.attributes?.judulTraining} homeData={homeData?.data[0]} secondTitle={trainings?.data[0]?.attributes?.judulTraining}>
      <div className="container">
        <center>
      <Image
            src={process.env.NEXT_PUBLIC_API + trainings?.data[0]?.attributes?.poster?.data?.attributes?.url}
            alt="First slide"
            placeholder="blur"
            blurDataURL={process.env.NEXT_PUBLIC_API + trainings?.data[0]?.attributes?.poster?.data?.attributes?.url}
            width={1000}
            height={1000}
            objectFit="cover"
          />
</center>
          <hr />
          <ReactMarkdown>{trainings?.data[0]?.attributes?.description}</ReactMarkdown>

          <Link href={`/training/contact?training=${trainings?.data[0]?.attributes?.slug}`}>
            
          <button className='btn btn-outline-warning mb-5'>............Booking Program sekarang............</button>
          </Link>

      </div>
      
    </Layout>
  )
}

export default slug