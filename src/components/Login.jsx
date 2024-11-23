import React, { useState , useEffect} from "react";
// import Records from '../db.json';
// import "../component/Auth.css";
import "../components/Home"
import "./Auth.css"
import { useNavigate } from "react-router";
// import Home from "../components/Home";


function Login(){

    const [signin,setSignIn] = useState(false)
    const [data,setData] = useState([])
    const [email,setEmail] = useState('')


    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem('user')))
    },[])

    const [logger,setLogger] = useState({
        email:"",
        password:""
    });

    const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setLogger({...logger,[name]:value})
    }

    const navigate = useNavigate()

    const handleSubmit =(e,type)=>{
        e.preventDefault()
        console.log(e.target.email.value)
        if(e.target.email.value && e.target.password.value){
            if(!localStorage.getItem('user')){
                localStorage.setItem('user',JSON.stringify([{email:e.target.email.value,passeord:e.target.password.value}]))
                navigate('/home',{state:e.target.email.value })
            }else{
                for(let val of data){
                    setEmail(val.email)
                    if(val.email.includes(e.target.email.value)){
                        if(type == 'signUp'){
                        alert("User already Exist")
                        setSignIn(true)
                        }else{
                            if(val.passeord == e.target.password.value){
                                navigate('/home',{state:e.target.email.value })
                            }else{
                                alert('Password does not match')
                            }
                        }
                        return true;
                    }
                }
                if(type =='signUp' && email !==e.target.email.value){
                    localStorage.setItem('user',JSON.stringify([...data,{email:e.target.email.value,password:e.target.password.value}]))
                    navigate('/home',{state:e.target.email.value })
                }else{
                    alert('User does not exist')
                    setSignIn(false)
                }
            }
        }
    }
      
    return <div className="loginForm">
    <div className="main">  	
        <input type="checkbox" id="chk" aria-hidden="true" />
        {/* <div className="tabs">
                <h1 className={!signin?'activeBtn':'nonActive'} onClick={()=>setSignIn(false)}>SignUp</h1>
                <h1 className={signin?'activeBtn':'nonActive'} onClick={()=>setSignIn(true)}>SignIn</h1>
            </div> */}
        <div className="signup">
            <form onSubmit={(e)=>handleSubmit(e,'signUp')}>
                <label className="labels" for="chk" aria-hidden="true">Sign up</label>
                {/* <input type="text" name="txt" placeholder="User name" required="" /> */}
                <input type="email" name="email" placeholder="Email"  onChange={handleChange} value={logger.emails} required="" ></input>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={logger.passwords} required="" ></input>
                <button>SignUp</button>
            </form>
        </div>

        <div className="login">
            <form onSubmit={(e)=>handleSubmit(e,'signIn')}>
                <label className="labels" for="chk" aria-hidden="true">Login</label>
                <input type="email" name="email" placeholder="Email" required="" onChange={handleChange} value={logger.email}/>
                <input type="password" name="password" placeholder="Password" required="" onChange={handleChange} value={logger.password} />
                <button>Login</button>
            </form>
        </div>
</div>
</div>
}     
export default Login;




    // useEffect(()=>{
    //     const registerData = localStorage.setItem('Register', JSON.stringify(register));
    //         if(registerData){
    //             setregister(registerData)
    //         }
    // })

    // const [logger,setLogger] = useState({
    //     username:"",
    //     passwords:""
    // });
    // const [userData,setuserData] = useState({
    //     txt:"",
    //     email:"",
    //     psd:""
    // });

    // const handleChange = (event) =>{
    //     let name = event.target.name;
    //     let value = event.target.value;

    //     setLogger({...logger,[name]:value})
    // }
    // const handleRegistry = (event) =>{
    //     let name = event.target.name;
    //     let value = event.target.value;
    //     // let email = event.target.email

    //     setuserData({...setuserData,[name]:value})
    //     // register = localStorage.setItem("Register",JSON.stringify(register))
    //     // console.log(userData);

    // }





    

    
//     return(
//         <div className="mainBox">
            
//             <form onSubmit={(e)=>handleSubmit(e,signin?'signIn':'signUp')}>
//                 <input placeholder="Email" name="email" /><br/><br/>
//                 <input placeholder="Password" name="password" /><br/><br/>
//                 
//             </form>
//         </div>
//     )
// }