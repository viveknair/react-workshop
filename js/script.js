class CallbackFacebook extends React.Component {
  render() {
    return (
      <div>
        <TopBar/>
        <Feed/>
      </div>
    )
  }
}

class TopBar extends React.Component {
  render() {
    return (
      <div id="top-bar">
        <h1>Callback Facebook</h1>
      </div>
    )
  }
}

class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }

    this.addPost = this.addPost.bind(this)
  }

  addPost(post) {
    const copiedPosts = this.state.posts.slice()
    copiedPosts.unshift(post)
    this.setState({
      posts: copiedPosts
    })
  }

  render() {
    return (
      <div id="feed">
        <Status addPost={this.addPost}/>
        <Posts posts={this.state.posts}/>
      </div>
    )
  }
}

class Status extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStatusChange = this.handleStatusChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const statusInput = event.target.querySelector('input[name="status"]')
    this.setState({
      status: ""
    })
    this.props.addPost({
      author: "Vivek",
      content: statusInput.value
    })
  }

  handleStatusChange(event) {
    const newStatus = event.target.value.substr(0, 20)
    this.setState({
      status: newStatus
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="status" placeholder="What's on your mind?"
          value={this.state.status} onChange={this.handleStatusChange}/>
        <input type="submit" defaultValue="Submit Status"/>
      </form>
    )
  }
}

class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  render() {
    const posts = this.props.posts.map((post, index) => {
      return (
        <Post key={index} author={post.author} content={post.content} />
      )
    })
    return (
      <ul id="stories">
        {posts}
      </ul>
    )
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberLikes: 0
    }

    this.incrementLikeCount = this.incrementLikeCount.bind(this)
  }

  incrementLikeCount(event) {
    event.preventDefault()
    this.setState({
      numberLikes: this.state.numberLikes + 1
    })
  }

  render() {
    return (
      <li className="story">
        <h2>{this.props.author}</h2>
        <p>{this.props.content}</p>
        <div className="story-likes">
          {this.state.numberLikes} likes
          <a onClick={this.incrementLikeCount} href="#" className="like">like</a>
        </div>
      </li>
    )
  }
}

ReactDOM.render(
  <CallbackFacebook/>,
  document.getElementById('facebook')
)
