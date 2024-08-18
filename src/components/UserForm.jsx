import { useEffect, useState} from "react";
import Swal from "sweetalert2";


export const UserForm =({ userSelected,handlerAddUser,initialUserForm,handlerCloseForm})=>{
   
   const [userForm, setUserForm] = useState(initialUserForm);

   const {id,username,password,email}= userForm; 


  useEffect(()=>{
   setUserForm({
      ...userSelected,
      password:'',
   })

  },[userSelected]);

   const onInputChange = ({target})=> {
      // console.log(target.value);

      const{name, value} = target;
      setUserForm({
        ...userForm,
        [name]: value,
      });
   }

   const onSubmit =(event) =>{
       event.preventDefault();
       if(!username || (!password&& id === 0) || !email){

         Swal.fire({
            title: "Error de validacion",
            text: "debe completar los campos del formulario!",
            icon: "error"
          });
     
         return;
       }
       
      // console.log(userForm);

       //guardar el userForm en el listado de usuarios
       handlerAddUser(userForm)
       setUserForm(initialUserForm);
   }
  
   const onCloseForm =()=>{
       handlerCloseForm ();
       setUserForm(initialUserForm);
   }
  return (
      <>
         <form onSubmit={onSubmit}>
            <input 
                 className="form-control my-3 w-75" 
                 placeholder="Username"
                 name="username"
                 value={username}
                 onChange={onInputChange}
                 />
                  {id > 0 || <input 
                 className="form-control my-3 w-75" 
                 placeholder="Password"
                 type="password"
                 name="password"
                 value={password}
                 onChange={onInputChange}  />}
                
                 <input 
                 className="form-control my-3 w-75" 
                 placeholder="Email"
                 name="email"
                 value={email}
                 onChange={onInputChange}/>
                 <input type="hidden"
                 name="id"
                 value={id}/>
                 <button 
                  className="btn btn-primary"
                  type="submit"> 
                   {id> 0? 'editar': 'crear'}

                 </button>
                 <button
                            className="btn btn-primary mx-2"
                             type="button"
                              onClick={()=> onCloseForm()}>
                             cerrar 
                           </button>
         </form>
      </>
    )
}