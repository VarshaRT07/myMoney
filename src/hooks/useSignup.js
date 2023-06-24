
import { projectAuth } from '../firebase/config'
import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'


export const useSignup =()=> {
    const [isCancelled,setIsCancelled] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const {dispatch}= useAuthContext();

    const signup = async(email, password,displayName)=>{
        setError(null)
        setIsPending(true)

        try{
            const res=await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user)

            if(!res){
                throw new Error('Could not complete signup')
            }

            await res.user.updateProfile({displayName})

            dispatch({type: 'LOGIN', payload:res.user})

            if(!isCancelled){
                setError(error)
                setIsPending(false);
           }

        }
        catch(err){
            if(!isCancelled){

                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }
    
    useEffect(()=>{
        return ()=> setIsCancelled(true);
    },[])
    
     return {error, isPending, signup};
}
