import React from 'react';
import { useState } from 'react';
import './Form.css';

  const Forms =(props) => {
      const [name,setName] = useState();
       const [cpf,setCpf] = useState();
       const [bday,setBday] = useState(); 
       const [email,setEmail] = useState();
       const [tell,setTell] = useState();
       const [password, setPassword] = useState(); 
       
    ///const CForm = () => {
      //const[values,setValues] = useState(Forms);
      
     
      function onChange(e){
       const{name,value} = e.target.value;
         
        setValues({...values,[name]:value});
        console.log(values); 
       }
    return(
      
      <div className="Tried">
       <form>
       <div class="form-editUser">
       <h1>Dados do Usuario </h1>
        <input name="name" placeholder="Nome completo" type="text" onChange={onChange}/>
        <input name="cpf" placeholder="CPF" type="number" onChange={onChange}/>
        <input name="bday" placeholder="Data de nascimento" type="date"onChange={onChange}/>
        </div>
        </form>
        <form> 
        <div className="changes">    
        <h2>Dados alteravais</h2>      
        <input name="email" placeholder="Email" type="mail"onChange={onChange}/>
        <input name="social" placeholder="Como deseja ser chamado" type="mail"onChange={onChange}/>
        <input name="tell" placeholder="Telefone" type="number"onChange={onChange}/>
        <input name="password" placeholder="Alterar Senha" type="password" onChange={onChange}/>
        </div>
        </form>
        <button>Salvar</button>

       
      </div>
    )
 };
 export default Forms;