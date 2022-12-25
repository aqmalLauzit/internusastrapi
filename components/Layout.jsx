import Head from 'next/head'
import React from 'react'
import Navigation from './core/Navigation'
import Footer from "./core/Footer"
import { useRouter } from 'next/router' 

const Layout = ({title = "", homeData = "", secondTitle= "", children}) => {
  const router = useRouter();
  return (
    <>
        <Head>
            <title>
              {title}
            </title>
            <link href={process.env.NEXT_PUBLIC_API + homeData?.attributes?.logowebsite?.data.attributes.url} rel="icon" />
            <link href={process.env.NEXT_PUBLIC_API + homeData?.attributes?.logowebsite?.data.attributes.url} rel="apple-touch-icon" />
            <meta property="og:image" content={process.env.NEXT_PUBLIC_API + homeData?.attributes?.logowebsite?.data.attributes.url} />
            <meta property="og:title" content={process.env.NEXT_PUBLIC_API + homeData?.attributes?.logowebsite?.data.attributes.url} />
            <meta name="author" content="Muchamad Aqmal Hidayat" />
            {router.pathname.includes("/training") == true && (
              <>
            <meta name="description"content={`Internusa Training adalah instansi yang menyediakan pelatihan profesial, dan internusa training juga memiliki banyak program training lainya seperti salah satunya ${secondTitle}`} key="desc"/>
            <meta
              property="og:description"
              content={`Internusa Training. tempat training terbaik untuk instansi anda salah satunya adalah ${secondTitle}`}
              />
              <meta property="og:url" content="https://www.internusagroup.com/training" />
              <meta name="keywords" content="internusa training, internusa group, internusa training school, internusa traning and human resaurce" />
            
            </>
            )}
            {router.pathname == "/" == true && (
              <>
              <meta name="description"content={`Internusa Group adalah instansi yang bergerak di banyak bidang, dan internusa group juga mengedepan kan syariat islami. serta internusa group juga memilikiki kegiatan sosial yang insyallah baik untuk umat ${secondTitle}`} key="desc"/>
              <meta
                property="og:description"
                content={`Internusa Training. tempat training terbaik untuk instansi anda salah satunya adalah ${secondTitle}`}
                />
                <meta property="og:url" content="https://www.internusagroup.com/training" />
                <meta name="keywords" content="internusa group, internusa group training, internusa group tour traver " />
              
              </>
            )}
            <meta charSet="utf-8"></meta>
        </Head>
        <Navigation />

        {children}

        <Footer />

        

        
    
    </>
  )
}

export default Layout