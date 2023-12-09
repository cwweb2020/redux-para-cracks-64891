import { useNavigate } from "react-router-dom";
import usePosts from "../hooks/usePosts";
import CustomPosts from "../shared/CustomPosts";

const Posts = () => {
  const { user, user_posts, loading } = usePosts();
  const navigate = useNavigate();
  //console.log(user)
  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (user) {
    return (
      <div>
        <div>
          <button onClick={() => navigate(-1)}>volver</button>
        </div>
        <div style={{ padding: "20px" }}>
          <h1>Usuario</h1>
          {Object.entries(user).map(([key, value], index) => (
            <h4 key={index}>
              <span
                style={{ fontWeight: "lighter", textTransform: "uppercase" }}
              >
                {key}
              </span>
              - {value}
            </h4>
          ))}
        </div>
        <div style={{ padding: "20px" }}>
          <h1>Posts</h1>
          {user_posts.map((post, index) => (
            <CustomPosts key={index} {...post} />
          ))}
        </div>
      </div>
    );
  }
};

export default Posts;
