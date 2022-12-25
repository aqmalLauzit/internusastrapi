import axios from 'axios'
import Image from 'next/image';
import React from 'react'
import Layout from '../../../components/Layout'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link';


export async function getStaticPaths() {
  const trainingGroups = await axios.get(process.env.NEXT_PUBLIC_API + `/api/training-groups?&populate=gambarTraining`);
  
  const paths = trainingGroups.data.data.map((trgp) => {
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
  const trainingGroup = await axios.get(process.env.NEXT_PUBLIC_API + `/api/training-groups?filters[slug][$eq]=${params.slug}&populate=gambarTraining`);
  const homeData = await axios.get(process.env.NEXT_PUBLIC_API + '/api/home-trainings?populate=gambarAbout&populate=logowebsite');
  const eachTrainings = await axios.get(process.env.NEXT_PUBLIC_API + `/api/trainings?filters[training_groups][slug][$eq]=${params.slug}&populate=poster`);

 

  return {
    // Passed to the page component as props
    props: { 
      trainingGroup: trainingGroup.data,
      homeData : homeData.data.data[0],
      eachTrainings : eachTrainings.data,
     },
     revalidate: 30,
  }
}


const slug = ({trainingGroup,homeData,eachTrainings}) => {

 

  return (
    <Layout title={trainingGroup?.data[0].attributes.namaPelatihan} homeData={homeData} secondTitle={trainingGroup?.data[0].attributes.namaPelatihan}>
      <div className="container">
        <center>
      <Image
            src={process.env.NEXT_PUBLIC_API + trainingGroup?.data[0].attributes.gambarTraining.data.attributes.url}
            alt="First slide"
            placeholder="blur"
            blurDataURL={process.env.NEXT_PUBLIC_API + trainingGroup?.data[0].attributes.gambarTraining.data.attributes.url}
            width={1000}
            height={1000}
            objectFit="cover"
          />
</center>
          <hr />
          <ReactMarkdown>{trainingGroup?.data[0].attributes.description}</ReactMarkdown>


          <h2>Berikut adalah rangkaian program training yang tersedia di series {trainingGroup?.data[0].attributes.namaPelatihan} :</h2>

<div className="row">
                {eachTrainings?.data.map(training => (

      <div className="col-lg-4 col-md-6 my-1" key={training?.id}>
      <div className="member">
        <div className="pic">
          <Image
            src={process.env.NEXT_PUBLIC_API + training?.attributes?.poster?.data?.attributes?.url}
            className="img-fluid"
            alt=""
            width={400}
            height={400}
            objectFit="cover"
          />
        </div>
        <div className="member-info">
          <h4>{training?.attributes?.judulTraining}</h4>
          <span>{training?.attributes?.headlineTraining}</span>
          <div className="social">
            <Link href={`/training/${training?.attributes?.slug}`}>
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
      
    </Layout>
    
  )
}

export default slug