import React, { useState } from 'react'
import PropTypes from 'prop-types'
import QrReader from 'react-qr-reader'
import classNames from 'classnames'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import { makeStyles } from '@material-ui/styles'

import Ribbon from './Ribbon.react'

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon
}

const styles = makeStyles(() => ({
  success: { backgroundColor: green[600] },
  error: { backgroundColor: red[900] },
  icon: { fontSize: 20 },
  iconVariant: { opacity: 0.9, marginRight: 10 },
  message: { display: 'flex', alignItems: 'center' }
}))

function SnackbarContentWrapper(props) {
  const classes = styles()
  const { className, message, onClose, variant, ...other } = props
  const Icon = variantIcon[variant]

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="msg-snackbar"
      message={(
        <span id="msg-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      )}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  )
}

SnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'error']).isRequired,
}

export default function Qr() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return
    }

    setCode('')
    setError('')
  }

  function handleError(error) {
    setError(error)
  }

  function handleScan(data) {
    if (data) {
      setCode(data)
    }
  }

  return (
    <div className="column-box index-container">

      <Ribbon />

      <div className="sub-app-container">
        <div className="split-content-container">
          <div className="split-main-content p-0">
            <div className="reader-container center-v-box">
              <QrReader
                className="w-50"
                delay={300}
                resolution={1200}
                onScan={handleScan}
                onError={handleError}
              />
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={Boolean(code)}
        autoHideDuration={10000}
        onClose={handleClose}
      >
        <SnackbarContentWrapper
          onClose={handleClose}
          variant="success"
          message={code}
        />
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={Boolean(error)}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <SnackbarContentWrapper
          onClose={handleClose}
          variant="error"
          message={error}
        />
      </Snackbar>
    </div>
  )
}
