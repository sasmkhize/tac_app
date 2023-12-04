import React, {useState} from 'react'
import './Upload.css';
import axios from 'axios'
import Swal from 'sweetalert2'

function Upload() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [province, setProvince] = useState("");
  const [branch, setBranch] = useState("");
  const [depositDate, setDepositDate] = useState("");
  const [amount, setAmount] = useState("");
  const [popType, setPopType] = useState("");
  const [file, setFile] = useState("");

  const uploadData = (event) =>{

    event.preventDefault();
    
    const formData = new FormData();
    formData.append("title",title);
    formData.append("name",name);
    formData.append("surname",surname);
    formData.append("contactNo",contactNo);
    formData.append("province",province);
    formData.append("branch",branch);
    formData.append("depositedDate",depositDate);
    formData.append("amount",amount);
    formData.append("popType",popType);
    formData.append("file",file)

    axios.post('http://localhost:8081/create', formData )
    .then((response) => {
      if (response.data.Status === "Success"){

        Swal.fire({
          icon: "success",
          title: "POP Successfully Upload",
          showConfirmButton: false,
          timer: 2000
        });
      }
      else{
        Swal.fire({
          icon: "error",
          title: "POP Failed to Upload",
          showConfirmButton: false,
          timer: 2000
        });
      }
    })
    .catch(er => console.log(er))


  }

  return (
    <div className='container'>
      <form className='form'>
      <h3>Upload Tithe POP</h3>
      <div className='formInput' style={{paddingTop: 10}}>
        <label style={{paddingRight:50}}>Title:</label>
        <input type='text' placeholder='Church Title' 
          onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='formInput'>
      <label style={{paddingRight:40}}>Name:</label>
        <input type='text' placeholder='First Name'
          onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className='formInput'>
      <label style={{paddingRight:23}}>Surname:</label>
        <input type='text' placeholder='Surname'
          onChange={(e) => setSurname(e.target.value)}/>
      </div>

      <div className='formInput'>
      <label style={{paddingRight:34}}>Cell No:</label>
        <input type='text' placeholder='Cellphone number'
          onChange={(e) => setContactNo(e.target.value)}/>
      </div>

      <div className='formInput'>
      <label style={{paddingRight:26}}>Province:</label>
        <input type='text' placeholder='Province'
          onChange={(e) => setProvince(e.target.value)}/>
      </div>
       
      <div className='formInput'>
      <label style={{paddingRight:35}}>Branch:</label>
        <input type='text' placeholder='Branch'
          onChange={(e) => setBranch(e.target.value)}/>
      </div>

      <div className='formInput'>
      <label>Deposit Date:</label>
        <input type='text' placeholder='Deposit Date'
        onChange={(e) => setDepositDate(e.target.value)}/>
      </div>

      <div className='formInput'>
      <label style={{paddingRight:34}}>Amount:</label>
        <input type='text' placeholder='Amount' 
          onChange={(e) => setAmount(e.target.value)}/>
      </div>

      <div className='formInput'>
      <label style={{paddingRight:19}}> POP Type :</label>
        <input type='text' placeholder='Individual or Bulk Deposit'
          onChange={(e) => setPopType(e.target.value)}/>
      </div>

      <div style={{paddingTop: 10}}>
        <input type='file' onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <div style={{paddingTop: 10}}>
        <button onClick={uploadData}>Submit</button>
      </div>
      </form>  
    </div>
  )
}

export default Upload