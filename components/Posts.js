import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post"

// const posts = [
//     {
//         id: '132',
//         username: 'lucy_xoox',
//         userImg: "https://i.pinimg.com/originals/ce/03/a1/ce03a1ec8851a33b862a3eb3d122ecb5.jpg",
//         img: "https://i.pinimg.com/originals/ce/03/a1/ce03a1ec8851a33b862a3eb3d122ecb5.jpg",
//         caption: "Hey everyone.... Have a great day!!!",
//     },
//     {
//         id: '131',
//         username: 'lucy_xoox',
//         userImg: "https://i.pinimg.com/originals/ce/03/a1/ce03a1ec8851a33b862a3eb3d122ecb5.jpg",
//         img: "https://i.pinimg.com/originals/ce/03/a1/ce03a1ec8851a33b862a3eb3d122ecb5.jpg",
//         caption: "Hey everyone.... Have a great day!!!",
//     },
// ];

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => 
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
        }       
    ), [db]);

    return (
        <div>
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption} 
                />
            ))}
        </div>
    )
}

export default Posts;