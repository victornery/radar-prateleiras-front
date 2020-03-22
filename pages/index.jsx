import React from 'react'

import Menu from '../src/components/Menu'
import Main from '../src/styles/pages/home'

import { useData } from '../src/context/dataContext'

const Index = () => {
   // Our custom hook to get context values
   const { data, loadingData } = useData()
  
  return (
    <>
      <Menu />
      <Main>
        Hey there!
        { loadingData 
          ? <p>Carregando Dados..</p> 
          : <pre>
              {JSON.stringify(data, null, '   ')}
            </pre>
          }
      </Main>
    </>
  )
}

export default Index
