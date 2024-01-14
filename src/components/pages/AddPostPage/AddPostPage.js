import AddPostForm from '../../features/AddPostForm/AddPostForm';

const AddPostPage = (props) => {
  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      <h1>Add Post</h1>
      <AddPostForm postId={props.id} />
    </div>
  );
};

export default AddPostPage;
