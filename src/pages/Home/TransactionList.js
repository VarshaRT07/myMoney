import React from 'react'
import { useFirestore } from '../../hooks/useFirestore'

export default function TransactionList({transactions}) {
   
  const {deleteDocument,response} = useFirestore('transactions');
  
  return (
    
    <ul className="transactions">
       {transactions.map((transaction) =>(
        <li key={transaction.id}>
            <p className='name'>{transaction.name}</p>
            <p className='amount'>${transaction.amount}</p>
            <button onClick={()=>deleteDocument(transaction.id)}>x</button>
        </li>
       ))}
    </ul>
    
  )
}
