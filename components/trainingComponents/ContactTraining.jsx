import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import Loadingers from '../litle/Loadingers';



const ContactTraining = ({trainings,train,homeData}) => {
console.log(train);
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [wa, setwa] = useState("");
  const [info, setinfo] = useState("");
  const [jam, setjam] = useState("");
  const [tgl, settgl] = useState("");
  const [trainingChose, settrainingChose] = useState("");
  const [instansi, setinstansi] = useState("");
  const [alamat, setalamat] = useState("");


  const [message,setMessage] = useState("");
  const [loading,setLoading] = useState(false);
  let converted;
  let conName;


const reset = () => {
  setname("");
  setemail("");
  setwa("");
  setinfo("");
  setjam("");
  settgl("");
  settrainingChose("");
  setinstansi("");
  setalamat("");
  setLoading(false);
}


const submitHandle = async(e) => {
  e.preventDefault();
  setMessage("");
  setLoading(true);
  await coverToId();

  
  if(converted.length == 0) {
    return console.log("training tidak valid");
    
  } else {
    converted = converted[0].id
  }

  let emailReq = await emailjs.send("service_bkhmzcz","template_5f3f4w8",{
    name: name,
    wa: wa,
    email: email,
    training: trainingChose,
    instansi: instansi,
    jam,
    tgl: tgl,
    alamat: alamat,
  }, "LQoZu-XRbIVJp9khL");



  let data = {
    data : {
      fullName : name,
      status : "baru",
      wa,
      email,
      tgl_program : tgl,
      jam,
      alamat,
      info,
      instansi,
      training : {
        id : converted
      }
    }
  }


  const response = await axios.post(process.env.NEXT_PUBLIC_API +'/api/training-bookings',data);


  setMessage("Berhasil. Mohon di tunggu confirmasi lanjutan di whatsapp / email anda !");
  reset();
}

const coverToId = async () => {
  converted = trainings.data.filter((trg) => {
    if(trg.attributes.judulTraining == trainingChose){
      return trg.id
    }
  })
}

const convertSlugtoName = async () => {
  conName = trainings.data.filter((trg) => {
    if(trg.attributes.slug == train){
      return trg.id
    } else {
      return false;
    }
  })
}

useEffect(() => {
  if(train !== ""){
    
   convertSlugtoName();

    if(conName == false) {
      settrainingChose("")
    } else {
      settrainingChose(conName[0]?.attributes?.judulTraining);

    }



  }
},[]);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>
            <span>Contact</span> Kami
          </h2>
          <p>
            Booking Pelatihan
          </p>
        </div>
      </div>
      <div className="map">
        <iframe
          style={{ border: 0, width: "100%", height: 350 }}
          src={homeData.attributes.linkMap}
          frameBorder={0}
          allowFullScreen=""
        />
      </div>
      <div className="container mt-5">
        <div className="info-wrap">
          <div className="row">
            <div className="col-lg-3 col-md-6 info">
              <i className="bi bi-geo-alt" />
              <h4>Location:</h4>
              <p>
              {homeData.attributes.alamat}
              </p>
            </div>
            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-clock" />
              <h4>Open Hours:</h4>
              <p>
              {homeData.attributes.jamBuka}
              </p>
            </div>
            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-envelope" />
              <h4>Email:</h4>
              <p>
              {homeData.attributes.email}
              </p>
            </div>
            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-phone" />
              <h4>Telepon & WA:</h4>
              <p>
              {homeData.attributes.wa}
              </p>
            </div>
          </div>
        </div>
        <form
          className="php-email-form"
          onSubmit={submitHandle}
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Nama Pembooking"
                value={name}
                onChange={e => setname(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email Pembooking (harus aktif)"
                required
                value={email}
                onChange={e => setemail(e.target.value)}
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="number"
                className="form-control"
                name="wa"
                id="wa"
                placeholder="Whatsapp Nomor / Telp Nomor"
                required
                value={wa}
                onChange={e => setwa(e.target.value)}
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
            <Form.Select onChange={(e) => setinfo(e.target.value)} value={info}>
              <option value="">Mendapatkan Informasi Training Internusa di mana?</option>
              <option value="google">Google</option>
              <option value="rekomendasi">Rekomendasi dari orang lain</option>
              <option value="sosmed">Sosial Media</option>
            </Form.Select>
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                className="form-control"
                name="jam"
                id="jam"
                placeholder="Jam Acara (cnth : 9 siang)"
                required
                value={jam}
                onChange={e => setjam(e.target.value)}
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="date"
                className="form-control"
                name="wa"
                id="wa"
                placeholder="Tanggal Acara"
                required
                value={tgl}
                onChange={e => settgl(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mt-3">
          <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Pilih Pelatihan... (ketik)" 
          value={trainingChose}
          onChange={e => settrainingChose(e.target.value)}
          />
          <datalist id="datalistOptions">
            {trainings.data.map(training => (

            <option value={`${training.attributes.judulTraining}`} key={training.id} />
            ))}
            
          </datalist>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="instansi / perusahaan pembooking"
              required
              value={instansi}
                onChange={e => setinstansi(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="Alamat / lokasi tempat training (tidak perlu di isi jika ingin pihak internusa yang me nentukan)"
              required
              value={alamat}
                onChange={e => setalamat(e.target.value)}
            />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          {message && (<h3 className='text-center text-success'>{message}</h3>)}
          
          {loading && <Loadingers />}
          <div className="text-center">
            <button type="submit">Booking Pelatihan</button>
            
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactTraining