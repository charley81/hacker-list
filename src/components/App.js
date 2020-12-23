/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef, useCallback } from 'react'
import axios from 'axios'
import '../style/index.css'
import { css } from '@emotion/react'

function App() {
  return (
    <div
      css={css`
        h1 {
          color: var(--primaryColor);
        }
      `}
    >
      <h1>Hacker List</h1>
    </div>
  )
}

export default App
