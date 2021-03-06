import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { formatTimestamp } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import { fetchCommentForPost } from '../../actions/commentPost'
import { fetchAllPosts, votePost, deletePost } from '../../actions/commentPost'
import PostComment from '../comment/PostComment'

class PostDetail extends Component {

  componentDidMount() {
    this.props.fetchAllPosts()
    this.props.fetchCommentForPost(this.props.match.params.postId)
  }

  onPostDelete = () => {
    const id = this.props.match.params.postId
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { post, comments, votePost, fetchAllPosts } = this.props
    if(!post) {
      return <div>404 Post Not Found</div>
    }
    return (
      <div>
        {post && (
          <div className="post" key={post.id}>
            <div className="post-description">
              <Link to={`/${post.category}/${post.id}`}>
                <div className="post-title"><h3>{post.title}</h3></div>
              </Link>
              <div className="post-body"><p>{post.body}</p></div>
              <div className="post-likes">
                <button onClick={() => {
                  votePost(post.id, "upVote")
                  fetchAllPosts()
                }}>Upvote Post
                </button>
                <button onClick={() => {
                  votePost(post.id, "downVote")
                  fetchAllPosts()
                }}>Downvote Post
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
          <Link to={`/${post.category}/${post.id}/comment`}>
            <button>Add Comment</button>
          </Link>
          <button onClick={(e) => this.onPostDelete(e)}>Delete Post</button>
        </div>

        {post && comments && <PostComment category={post.category} comments={comments} history={this.props.history}/>}
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }, { match }) {
  const post = _.find(posts, { id: match.params.postId })
  return {
    post: post,
    comments: comments[match.params.postId]
  }
}

export default connect(mapStateToProps, {fetchAllPosts, votePost, deletePost, fetchCommentForPost})(PostDetail)
