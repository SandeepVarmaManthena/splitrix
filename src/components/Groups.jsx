import React, { useState } from 'react'
import Group from './Group'
import Logo from '../assets/logo/logo-transparent-png.png'
import NewGroup from './NewGroup'


const Groups = () => {

  const [showNewGroupModal,setShowNewGroupModal] = useState(null)

  const toggleNewGroupModal = ()=>{
    setShowNewGroupModal(!showNewGroupModal);
  }


  return (
    <>
      <div className="groups_wrapper">
        <div className="top_new_group">
          <div className="new_group">
            <p onClick={()=>setShowNewGroupModal(true)}><span style={{color: 'red', fontWeight : 'bold'}}>+</span> New Group</p>
          </div>
        </div>
        <div className="groups">
          <Group
            date = {'Dec 25'}
            image = {Logo}
            group = {'Birthday'}
            transaction = {'Received'}
            amount = {'20'}
          />
          <Group
            date = {'Dec 25'}
            image = {Logo}
            group = {'Birthday'}
            transaction = {'Received'}
            amount = {'20'}
          />
          <Group
            date = {'Dec 25'}
            image = {Logo}
            group = {'Birthday'}
            transaction = {'Received'}
            amount = {'20'}
          />
          <Group
            date = {'Dec 25'}
            image = {Logo}
            group = {'Birthday'}
            transaction = {'Received'}
            amount = {'20'}
          />
          <Group
            date = {'Dec 25'}
            image = {Logo}
            group = {'Birthday'}
            transaction = {'Received'}
            amount = {'20'}
          />
        </div>
      </div>{ showNewGroupModal ?
      <NewGroup
        isOpen={showNewGroupModal}
        toggleModal={toggleNewGroupModal}
    
        
      /> : <></>}
    </>
  )
}

export default Groups
