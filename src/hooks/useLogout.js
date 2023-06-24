import { projectAuth } from '../firebase/config'
import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'


export const useLogout =()=>{
    const [isCancelled,setIsCancelled] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const {dispatch}= useAuthContext();

    const logout = async ()=>{
        setError(null);
        setIsPending(true);

        try{
            await projectAuth.signOut();
            

            dispatch({type:'LOGOUT'})

            if(!isCancelled){
                 setError(error)
            setIsPending(false);
            }
           

        }
        catch(err){
            if(!isCancelled) {

                console.log(err)
                setError(err.message)
                setIsPending(false);
            }
        }   

    }

    useEffect(()=>{
        return ()=> setIsCancelled(true);
    },[])
    return {logout,error,isPending}
}