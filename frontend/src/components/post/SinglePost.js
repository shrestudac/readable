import React, { Component } from 'react';
import { connect } from 'react-redux'
import { formatTimestamp } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import * as actions from '../../actions/commentPost'

class SinglePost extends Component {
  componentDidMount() {
    this.props.fetchCommentForPost(this.props.post.id)
  }
 
  onPostDelete = () => {
    const id = this.props.match.params.postId
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { post, comments, votePost, fetchAllPosts } = this.props
    var styles = {border:"1px solid black"}

    return (
      <div style={styles}>
        {post && (
          <div className="post">
            <div className="post-description">
              <Link to={`/${post.category}/${post.id}`}>
                <div className="post-title"><h3>{post.title}</h3></div>
              </Link>
              <div className="post-body"><p>{post.body}</p></div>

              <div className="post-likes">
                <button onClick={() => {
                  votePost(post.id, "upVote")
                  fetchAllPosts()
                }}>Upvote
                </button>
                <button onClick={() => {
                  votePost(post.id, "downVote")
                  fetchAllPosts()
                }}>Downvote 
                </button>

              </div>
              <div className="post-likes-comments">
                {post.voteScore} votes {comments && comments ? comments.length : 0} comments
              </div>
            </div>
            <div>
              <div className="post-author"><p><b>Category: </b> {post.category}</p></div>
              <div className="post-author"><p><b>Author: </b> {post.author}</p></div>
              <div className="post-author"><p><b>Time: </b> {formatTimestamp(post.timestamp)}</p></div>
            </div>
          </div>
        )}
        <div className="button-action">
          <Link to={`/${post.category}/${post.id}/edit`}>
            <button>Edit Post</button>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ comments }, { post }) {
  return {
    comments: comments[post.id]
  }
}

export default connect(mapStateToProps, actions)(SinglePost)
