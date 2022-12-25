import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
    <div className="container">
      <h3><u>Internusa Group</u></h3>
      <p>
        Adalah Instansi Yang bergerak di bidang islami bisnis dakwah, training (Sekolah, SDM, Majelis), Tour dan travel haji umroh, percetakan, serta lainya.
      </p>

      <div className="row text-start">
        <div className="col-md-4 ">
          <h4>Internusa Group :</h4>
          <ul className='no-style-list'>
          <li className=''>
              <Link href="/">
             <a>Mengenai Internusa</a>
             </Link>
            </li>

            <li className=''>
              <Link href="/training">
             <a>Internusa Training</a>
             </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Sosial Dakwah Internusa group  :</h4>
        </div>
        <div className="col-md-4">
          <h4>Sosial Media Internusa Group :</h4>
          <a href=""></a>
        </div>
      </div>
      <hr />
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>Internusa Group</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
       Powered by <a href="https://nextjs.org/">Next Js</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer