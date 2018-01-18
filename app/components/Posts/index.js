import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
// import { Button } from 'react-toolbox/lib/button';
// import { findIndex, set } from 'lodash/fp';
import { fromJS } from 'immutable';
// import PropTypes from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

class Posts extends Component {
  // static propTypes = {
  //   createPost: PropTypes.func.isRequired,
  //   editPost: PropTypes.func.isRequired,
  //   deletePost: PropTypes.func.isRequired,
  //   fetchPosts: PropTypes.func.isRequired,
  //   postsData: ImmutablePropTypes.map.isRequired,
  // };

  state = {
    posts: fromJS([]),
  }

  componentDidMount() {
    const { fetchPosts } = this.props;
    this.fetchData();
  }
  //
  // componentWillReceiveProps(nextProps) {
  //   const { fetchPosts } = this.props;
  //   const { postsData } = nextProps;
  //   console.log(postsData.get('postsLoading'), postsData.get('refresh'));
  //   if (!postsData.get('postsLoading') && postsData.get('refresh')) {
  //     console.log('¡Entró!');
  //     fetchPosts();
  //   }
  // }

  async fetchData() {
    const request = await fetch('https://devhack-blog-api.herokuapp.com/posts')
    const posts = fromJS(await (await request).json())
    console.log(posts);
    this.setState({ posts });
  }

  // createPost = (post) => {
  //   const { createPost } = this.props;
  //   this.setState({ showForm: false }, () => createPost(post.toJS()));
  // };

  // handleEditPost = (post) => {
  //   const { editPost } = this.props;
  //   this.setState({ showForm: false }, () => editPost(post.toJS()));
  // };
  //
  // handleEditPostForm = (id, post) => {
  //   this.setState({
  //     showForm: true,
  //     postToEdit: post
  //       .set('id', id)
  //       .set('updated_at', Date()),
  //   });
  // };


  // handleDeletePost = (id) => {
  //   const { deletePost } = this.props;
  //   deletePost(id);
  // }
  //
  // handleShowForm = () => {
  //   this.setState({ showForm: true });
  // };
  //
  // handleCloseForm = () => {
  //   this.setState({ showForm: false, postToEdit: undefined });
  // };

  render() {
    // const posts = this.props.postsData.get('posts');
    console.log(this.state.posts);
    const postItems = this.state.posts.map(post => (
      <ListItem
        leftIcon={{ name: 'library-books' }}
        key={post.get('_id')}
        title={post.get('title')}
      />
    )).toJS();

    return (
      <View>
        <List>
          {postItems}
        </List>
        {/* <PostForm
          active={this.state.showForm}
          createPost={this.createPost}
          editPost={this.handleEditPost}
          closeForm={this.handleCloseForm}
          post={this.state.postToEdit}
        /> */}
        {/* <Button
          icon="add"
          label="Create post"
          onClick={this.handleShowForm}
        /> */}
      </View>
    );
  }

}

export default Posts;
