import Imagem from '../../assets/Logo.jpg'
import {useRef, useState,useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'

export default function Login() {

    const usuario =useRef();
    const senha =useRef();

    const [usuarios,setUsuarios]=useState([]);

    const navigate = useNavigate();

    function validade(){
        for(let i =0; i <usuarios.length; i++){
            if(
                usuarios[i].usuario ==usuario.current.value &&
                usuarios[i].senha == senha.current.value
            ){
                return true;
            }
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(validade()){
            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario",usuario.current.value);
                sessionStorage.setItem("senha", token);
                navigate("/Dashboard")       
        }else{
            alert("usuario/senha inválidos")
        }
    }


    useEffect(()=>{
        fetch("http://localhost:5000/usuarios/")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setUsuarios(res);
        })
    },[])


  return (
    <div className='m-20 p-40'>
      <div className='flex-wrap bg-gray-400 rounded-2xl p-5 pb-48'>
        <h1 className=' text-red-950 text-2xl font-bold uppercase flex justify-center'>Login</h1>
        <img src={Imagem} alt="Imagem" className='float-right rounded-2xl'></img>
          <div className='flex-wrap mt-16 mb-5'>
            <h2 className='flex-wrap text-lg font-bold uppercase m-3 inline-block'>Usuário:</h2>
            <input 
              type="text"
              className="pl-24"
              id="usuario"
              ref={usuario}
            />
          </div>
          <div>
            <h2 className='font-bold text-lg uppercase m-3 mr-8 inline-block'>Senha:</h2>
            <input 
              type="password"
              className="pl-24"
              id="senha"
              ref={senha}
            />
          </div>
          <div className='m-10 ml-32'>
            <button type="submit" className='bg-red-950 text-white font-bold uppercase rounded-full p-5 pl-16 pr-16'>Entrar</button>
          </div>
      </div>
    </div>
  )
}
