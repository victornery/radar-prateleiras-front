import React, { useEffect, useRef, useState, useCallback } from 'react'
import places from 'places.js'

import { InputHolder, Input } from './styles'

const Autocomplete = ({ setSugestion }) => {
  const autoCompletRef = useRef()

  useEffect(() => {
    const autocomplete = places({
      appId: 'plP8P4C2FBCL',
      apiKey: '110e915f614cce5de6642816d99caa6d',
      container: autoCompletRef.current,
      language: 'pt'
    })

    autocomplete.on('change', handleAutocompleteChange)
  }, [])

  const handleAutocompleteChange = useCallback(rawAnswer => {
    const { suggestion } = rawAnswer

    setSugestion(suggestion)
  })

  return (
    <InputHolder>
      <Input ref={autoCompletRef} placeholder="Qual sua Localização ?" />
    </InputHolder>
  )
}

export default Autocomplete
