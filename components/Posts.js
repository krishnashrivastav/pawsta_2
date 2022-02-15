import Post from "./Post"

const posts = [
    {
        id: '132',
        username: 'lucy_xoox',
        userImg: "https://i.pinimg.com/originals/ce/03/a1/ce03a1ec8851a33b862a3eb3d122ecb5.jpg",
        img: "https://i.pinimg.com/originals/ce/03/a1/ce03a1ec8851a33b862a3eb3d122ecb5.jpg",
        caption: "Hey everyone.... Have a great day!!!",
    },
    {
        id: '131',
        username: 'lucy_xoox',
        userImg: "https://i.pinimg.com/originals/ce/03/a1/ce03a1ec8851a33b862a3eb3d122ecb5.jpg",
        img: "https://i.pinimg.com/originals/ce/03/a1/ce03a1ec8851a33b862a3eb3d122ecb5.jpg",
        caption: "Hey everyone.... Have a great day!!!",
    },
];

function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption} 
                />
            ))}
        </div>
    )
}

export default Posts;