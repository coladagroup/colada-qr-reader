import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Qr from './qr'
import './styles/base.scss'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiTabs: {
      root: {
        borderBottom: '1px solid rgba(0,0,0,0.12)'
      }
    },
    MuiListItem: {
      root: {
        '&$selected, &$selected:hover': {
          backgroundColor: 'rgba(63,81,181,0.12)'
        }
      }
    },
    MuiAppBar: {
      colorSecondary: {
        backgroundColor: '#11B063'
      }
    }
  }
})

/**
 * Main portal. Apply MUI theme customization here.
 */
export default function Portal() {
  return (
    <MuiThemeProvider theme={theme}>
      <Qr />
    </MuiThemeProvider>
  )
}
