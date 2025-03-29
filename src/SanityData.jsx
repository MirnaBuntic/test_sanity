import { useEffect, useState } from 'react';
import client, { urlFor } from './sanityClient';

function SanityData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "post"]{ _id, title, body, mainImage }') // Hämta inlägg
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Sanity Blogg</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {post.mainImage && (
              <img src={urlFor(post.mainImage).width(400).url()} alt={post.title} />
            )}
          </div>
        ))
      ) : (
        <p>Laddar data...</p>
      )}
    </div>
  );
}

export default SanityData;