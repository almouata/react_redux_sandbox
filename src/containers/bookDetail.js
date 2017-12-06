import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class BookDetail extends Component {
  render(){
    //initial case of app startup , the book prop is null by reducer
    if(!this.props.book){
      return <div>Select a book to get started </div>
    }
    const { title, pages } = this.props.book
    return (
      <div>
        <h3>Detail for:</h3>
        <div>Title : {title}</div>
        <div>Pages : {pages}</div>
      </div>
  )
  }
}

function mapStateToProps(state){
  return{
    book : state.activeBook
  }
}
export default connect(mapStateToProps)(BookDetail)
