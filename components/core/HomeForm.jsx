import axios from 'axios';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Loadingers from '../litle/Loadingers';
import emailjs from '@emailjs/browser';
const HomeForm = () => {
  const[email,setemail] = useState();
  const[fullName,setfullName] = useState();
  const[subjek,setsubjek] = useState();
  const[pesan,setpesan] = useState();
  const[message,setMessage] = useState();
  const[loading,setLoading] = useState();


  const reset = () => {
    setemail("");
setfullName("");
setsubjek("");
setpesan("");
    
  }

  const submitHandle = async(e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    

    let emailReq = await emailjs.send("service_bkhmzcz","template_wo5ylt5", {
      email,
        fullName,
        subjek,
        pesan
    }, "LQoZu-XRbIVJp9khL");
    
   
  
    // let emailReq = await emailjs.send("service_bkhmzcz","template_5f3f4w8",{
    //   name: name,
    //   wa: wa,
    //   email: email,
    //   training: trainingChose,
    //   instansi: instansi,
    //   jam,
    //   tgl: tgl,
    //   alamat: alamat,
    // }, "LQoZu-XRbIVJp9khL");
  
  
  
    let data = {
      data : {
        email,
        fullName,
        subjek,
        pesan
      }
    }


    const response = await axios.post(process.env.NEXT_PUBLIC_API +'/api/inter-contacts',data);


    setMessage("Berhasil. Mohon di tunggu balasan pada email anda");
    setLoading(false);
    reset();
  }

  return (
    <>
    <form onSubmit={submitHandle}>
     <div className="col-md-12 mt-3">
              
     <FloatingLabel
      controlId="floatingInput"
      label="Alamat Email"
        >
      <Form.Control type="email" placeholder="emailmu@contoh.com" 
      value={email}
      onChange={e => setemail(e.target.value)}
      
      />
    </FloatingLabel>

    </div>

    <div className="col-md-12 mt-3">
              
     <FloatingLabel
      controlId="floatingInput"
      label="Nama Lengkap"
        >
      <Form.Control type="text" placeholder="Nama Lengkap" 
      value={fullName}
      onChange={e => setfullName(e.target.value)}/>
    </FloatingLabel>

    </div>

    <div className="col-md-12 mt-4">
              
     <FloatingLabel
      controlId="floatingInput"
      label="Subjek"
        >
      <Form.Control type="text" placeholder="Subjek" 
      value={subjek}
      onChange={e => setsubjek(e.target.value)}/>
    </FloatingLabel>

    </div>

    <div className="col-md-12 mt-4">
              
    <FloatingLabel controlId="floatingTextarea2" label="Pesan">
        <Form.Control
          as="textarea"
          placeholder="Pesan"
          style={{ height: '200px' }}
          
      value={pesan}
      onChange={e => setpesan(e.target.value)}
        />
      </FloatingLabel>

    </div>

    <div className="col-md-3 mt-4 d-grid gap-2">
        <button className="btn btn-warning text-white">Kirim Pesan</button>
    </div>
<div className='p-5'>
    {message && (<h3 className='text-center text-success'>{message}</h3>)}
          
          {loading && <Loadingers />}
          </div>
    </form>
  </>
  )
}

export default HomeForm