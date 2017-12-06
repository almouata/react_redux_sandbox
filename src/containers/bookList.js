import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { selectBook} from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {

  render(){
    console.log(this.props.books);
    return(
      <ul className = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    )

  }

  renderList(){
    return this.props.books.map((book) =>{
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">{book.title}</li>
      )
    });
  }
}

function mapStateToProps(state){
  // Whatever is returned will show up as props inside Booklist
  return {
    books : state.books
  }
}

// anything returned will end as  a props on the BookList container
function mapDispatchToProps(dispatch){
  // whenever selectBook is called , the result should be passed
  // to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

// Promote bookList from a Component to a contianer - it need to
// know about this new dispatch method , selectBook,make it available
// as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
