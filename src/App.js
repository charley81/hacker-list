/** @jsxImportSource @emotion/react */
import React, {useState, useEffect, useRef, useCallback} from 'react'
import axios from 'axios'
import { css, jsx } from '@emotion/react'


function App() {
  return (
    <div className="App" css={css`
      background: red;
    `}>
      <h1>Hacker List</h1>
    </div>
  );
}

export default App;
