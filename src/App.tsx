import { useState } from 'react'
import Modal from 'react-modal'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#yourAppElement')

export function App() {
  const [ isNewTransactionModelOpen, setIsNewTransactionModelOpen ] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModelOpen(true)
  }
  
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModelOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={ handleOpenNewTransactionModal }/>
      <Dashboard />    
      <Modal isOpen={ isNewTransactionModelOpen } onRequestClose={ handleCloseNewTransactionModal } >
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  )
}
