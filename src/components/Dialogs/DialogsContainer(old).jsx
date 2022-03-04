import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return (
    { dialogsPage: state.dialogsPage,
      messages: state.dialogsPage.messages,
      dialogs: state.dialogsPage.dialogs,
      newMessageValue: state.dialogsPage.newMessageValue
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMess: () => dispatch(addMessageActionCreator()),
    updateMess: (text) => dispatch(updateMessageActionCreator(text))
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer