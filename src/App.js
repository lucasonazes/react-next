import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    posts: [
      {
        id: 1,
        title: 'The first title',
        body: 'The first body'
      },
      {
        id: 2,
        title: 'The second title',
        body: 'The second body'
      },
      {
        id: 3,
        title: 'The third title',
        body: 'The third body'
      },
    ]
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => (
          <div className='post' key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
