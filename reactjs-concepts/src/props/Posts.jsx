import './styles.css';

const Posts = (props) => {
    const {id, title, body} = props;
    return (
        <div className="posts-container">
            <p>{id}</p>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}

export default Posts;