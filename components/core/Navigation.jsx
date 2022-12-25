import React, { useEffect } from 'react'
import { useRouter } from 'next/router'         
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = ({props}) => {


 
  
  const router = useRouter();
  return (
    <>
        
  <section
    id="topbar"
    className="d-flex  bg-dark align-items-center sticky-top topbar-transparent"
  >
    <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
      <i className="bi bi-phone d-flex align-items-center">
        <span>022-0403-1982</span>
      </i>
      <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center">
        <span>Senin Jam 08-00 : 16 : 00</span>
      </i>
    </div>
  </section>
  {/* ======= Header ======= */}
  <Navbar bg="dark" expand="lg" className='sticky-top'>
      <Container>
        
        {router.pathname.includes("/training") == true && (

        <Navbar.Brand><Link href="/training">Internusa Training</Link></Navbar.Brand>
        )}

        {router.pathname == "/" && (

        <Navbar.Brand><Link href="/">Internusa Group</Link></Navbar.Brand>
        )}
        

        <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          {router.pathname.includes("/training") == true && (
<>

<li className="nav-item">
<Link href="/training">
          <a className="nav-link" >Home</a>
</Link>
</li>
<li className="nav-item">
<Link href="/training/#about">
          <a className="nav-link" >About</a>
</Link>
</li>
<li className="nav-item">
<Link href="/training/#program">
          <a className="nav-link" >Our Program</a>
</Link>
</li>
<li className="nav-item">
<Link href="/training/#menu">
          <a className="nav-link" >Detail Training</a>
</Link>
</li>
<li className="nav-item">
<Link href="/training/#popular">
          <a className="nav-link" >Training Populer</a>
</Link>
</li>
<li className="nav-item">
<Link href="/training/#testimoni">
          <a className="nav-link" >Testimoni</a>
</Link>
</li>
<li className="nav-item">
  <Link href="/training/contact?training=">
            <a className="nav-link">Contact</a>
  </Link>
</li>
          
          
          
</>

)}

{router.pathname == "/" == true && (
  <>
    <li className="nav-item">
    <Link href="/">
              <a className="nav-link" >Home</a>
    </Link>
    </li>
    <li className="nav-item">
      <Link href="/#about">
                <a className="nav-link">About</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/#why-us">
                <a className="nav-link">Kenapa Kami</a>
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/#bisnis">
                <a className="nav-link">Bisnis Kami</a>
      </Link>
    </li>

    <li className="nav-item">
      <Link href="/#sosial">
                <a className="nav-link">Kegiatan Sosial Kami</a>
      </Link>
    </li>

    <li className="nav-item">
      <Link href="/#testimoni">
                <a className="nav-link">Testimoni</a>
      </Link>
    </li>

    <li className="nav-item">
      <Link href="/#contact">
                <a className="nav-link">Kontak</a>
      </Link>
    </li>



  </>
)}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}

export default Navigation