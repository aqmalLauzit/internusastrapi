import axios from 'axios';
import React from 'react'
import Layout from '../../components/Layout';
import ContactTraining from '../../components/trainingComponents/ContactTraining'



export async function getServerSideProps(contex) {
    const homeData = await axios.get(process.env.NEXT_PUBLIC_API + '/api/home-trainings?populate=gambarAbout&populate=logowebsite');
    const trainings = await axios.get(process.env.NEXT_PUBLIC_API +'/api/trainings');
    let train = null;
    if(contex?.query?.training !== ""){
      train = contex.query.training
    } else {
      train = ""
    }
console.log(train);
   
    return {
      props: { 
        homeData : homeData.data,
        trainings : trainings?.data,
        train : train ? train : null
       }, // will be passed to the page component as props
    }
  }

const contact = ({homeData,trainings,train}) => {
  return (
    <Layout title={'Booking Pelatihan'} homeData={homeData?.data[0]} secondTitle={''}>
    <ContactTraining  trainings={trainings} train={train} homeData={homeData?.data[0]}/>
    </Layout>
  )
}

export default contact