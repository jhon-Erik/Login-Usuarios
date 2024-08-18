import { useReducer, useState } from "react";
import { userReducer } from "../reducers/userReducer";
import Swal from "sweetalert2";




 
const initialUsers=[
    {
      id:1,
      username:'pepe',
      password:'12345',
      email:'pepito@gmail.com'
    },
 ];
 const initialUserForm={
     id:0,
    username:'',
    password: '',
    email:'',
  }

export const useUsers = ()=> {
    
    // Se importa desde los reducers
    const [users, dispatch] = useReducer(userReducer,initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);

    const [visibleForm, setVisibleForm] = useState( false);
     // se agrega a la lista de usuario
     
     
     const handlerAddUser = (user)=>{
        // console.log(user);

        dispatch({
                 type :(user.id === 0)?'addUser' :'updateUser',
                 payload: user
 
              });
              Swal.fire(
                (user.id === 0) ? 
                    'usuario creado' : 
                    'usuario actualizado',
                (user.id === 0) ? 
                    'el usuario ha sido creado con exito' :
                    'el usuario ha sido actualizado con exito',
                 'success'
                
                );
                handlerCloseForm(false);
      
     }


    

   const handlerRemoveUser=(id) =>{
      // console.log(id)
     

      Swal.fire({
        title: "Estas seguro?",
        text: "Cuidado el usuario sera eliminado!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {

            dispatch({
                type:'removeUser',
                payload: id
             })
          Swal.fire({
            title: "usuario eliminado!",
            text: "El usuario ha sido eliminado con exito",
            icon: "success"
          });
        }
      });
   }
    
  const handlerUserSelectedForm =(user)=>{
     // console.log(user);
     setVisibleForm(true);
     setUserSelected({...user});
  }

   const handlerOpenForm =()=>{
    setVisibleForm(true);

   }

  const handlerCloseForm =() =>{
    setVisibleForm(false);
    setUserSelected(initialUserForm)
   }
 
    return {
       users,
       userSelected,
       initialUserForm,
       visibleForm,

       handlerAddUser,
       handlerRemoveUser,
       handlerUserSelectedForm,
       handlerOpenForm,
       handlerCloseForm,

    }
}