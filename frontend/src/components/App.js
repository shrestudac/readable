import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { Link, Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { sortPost } from '../actions/post'
import { fetchCategories } from '../actions/category'
import NewPost from './post/NewPost'
import EditComment from './comment/EditComment'
import NewComment from './comment/NewComment'
import EditPost from './post/EditPost'
import ListPosts from './ListPosts'
import PostDetail from './post/PostDetail'

class App extends Component {

  static propTypes = {
    posts: PropTypes.array,
    categories: PropTypes.array,
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories, sortPost } = this.props 
    var border = {border:"1px solid black"}
    var inline = {width:"25%", display:"inline-block"}
    
    return (
      <div className="App">
        <div className="nav-header" style={border}>
          <Link className="home" to="/">
            <h1>Readable</h1>
          </Link>
          <Link className="new-post" to="/new">
            <p>New Post</p>
          </Link>
        </div>
      
        <div className="filter" style={border}>
          <div className="category-changer" style={inline} align="left" >
            <p>Choose Category</p>
            <Link key="all" to="/">
              <button>All</button>
            </Link>
            {categories && categories.map(category => (
              <Link key={category.name} to={`/${category.path}`}>
                <button>{category.name}</button>
              </Link>
            ))}
          </div>

          <div className="sort-changer" style={inline} align="right">
            <p>Sort By</p>
            <button onClick={() => sortPost('timestamp')}>Time</button>
            <button onClick={() => sortPost("voteScore")}>Vote Score</button>
          </div>

        </div>

        <Switch>
          <Route exact path="/" component={ListPosts} />
          <Route exact path="/new" component={NewPost} />
          <Route exact path="/:category" component={ListPosts} />
          <Route exact path="/:category/:postId" component={PostDetail} />
          <Route path="/:category/:postId/edit" component={EditPost} />
          <Route path="/:category/:postId/comment" component={NewComment} />
          <Route path="/:category/:postId/:commentId/edit" component={EditComment} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories
  }
}

export default withRouter(connect(mapStateToProps, {
  sortPost,
  fetchCategories
})(App))
