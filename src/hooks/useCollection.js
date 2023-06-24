import { useEffect, useRef, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection=(collection,_query) =>{
    const [documents,setDocuments]=useState('');
    const [error,setError]=useState('');

    const query=useRef(_query).current;
 
    

    useEffect(()=>{
        let ref=projectFirestore.collection(collection);
       

        if(query){
            ref=ref.where(...query);
        }

      
        console.log(ref)
        const unsub=ref.onSnapshot((snapshot)=>{
            let results=[];
            snapshot.docs.forEach(doc=>{
                results.push({...doc.data(),id:doc.id})
            })

            setDocuments(results);
            console.log(documents);
            setError(null);

        },(err)=>{
            console.log(err)
            setError("Could not fetch data")
        });

        return ()=>unsub();
    },[collection, query])

    return {documents,error}
}