import useFetch from "../../hooks/use-fetch";


export default function CommentsList() {
    const {data, loading} = useFetch('https://dummyjson.com/comments');
    if (loading) return <h3>Fetching Comments! Please wait</h3>;
    return (
        <div>
            <h2>Comments List Page</h2>
            <ul>
                {
                    data?.comments?.length > 0
                    ? data?.comments?.map((commentItem) => (
                        <div>
                            <label>{commentItem?.body}</label>
                            <p>Likes: {commentItem?.likes}</p>
                        </div>
                    ))
                    :null
                }
            </ul>
        </div>
        
        
    );
}