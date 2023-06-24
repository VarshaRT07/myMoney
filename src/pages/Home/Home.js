import './Home.css'
import React from 'react'
import Transactionform from './Transactionform'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection';
import TransactionList from './TransactionList';
export default function Home() {

  const {user}=useAuthContext();
  const {documents,error}= useCollection(
    'transactions',
  ["uid","==",user.uid]
  )

  console.log(documents)
  return (
    <div className="container">
      <div className="content">
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents}/>}
      </div>
      <div className="sidebar">
      <Transactionform uid={user.uid}/>

      </div>
    </div>
  )
}
