import { projectAuth } from '../firebase/config'
import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin =()=>{

    const [isCancelled,setIsCancelled] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const {dispatch}= useAuthContext();

    const login =async (email, password)=>{
        setError(null);
        setIsPending(true);

        try{
            const res =await projectAuth.signInWithEmailAndPassword(email, password);
            console.log(res);

            dispatch({type:'LOGIN',payload: res.user})

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
    return {login,error,isPending}
}