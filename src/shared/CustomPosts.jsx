/* eslint-disable react/prop-types */
const CustomPosts = ({ userId, id, title, body }) => {
  return (
    <div>
      <h2>{id}</h2>
      <h3>{userId}</h3>
      <h4>{title}</h4>
      <h5>{body}</h5>
      <hr />
    </div>
  );
};

export default CustomPosts;
