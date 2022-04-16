import { useState } from 'react'
import Modal from 'react-modal'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { Dashboard } from './components/Dashboard'
import { TransactionsProvider } from './TransactionsContext'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  const [ isNewTransactionModelOpen, setIsNewTransactionModelOpen ] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModelOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModelOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={ handleOpenNewTransactionModal }/>
      <Dashboard />
      <NewTransactionModal
        isOpen={ isNewTransactionModelOpen }
        onRequestClose={ handleCloseNewTransactionModal }
      />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
