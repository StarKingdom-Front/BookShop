import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function () {
  return (
    <>
      <div style={{background: '#1F1A2D'}}>
        <div className="_container">
            <div style={{height: '86px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="logo_body">
                    <img src="/img/logo.png" alt="logo" />
                </div>
                © {new Date().getFullYear()} My real project
            </div>
        </div>
      </div>
    </>
    
  )
}
