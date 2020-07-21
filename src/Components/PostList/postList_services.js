import labEdiit from '../../Services/labEdiit';

export const loadPosts = async () => {
    try {
        const response = await labEdiit.get('/posts', {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
        return response.data.posts;
    } catch (error) {
        console.error(error);
    }
};

export const votePost = async (id, direction) => {
    try {
        await labEdiit.put(
            `posts/${id}/vote`,
            { direction: direction },
            {
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            }
        );
    } catch (error) {
        console.error(error);
    }
};

export const createPost = async (content) => {
    try {
        await labEdiit.post(`/posts`, content, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });
    } catch (error) {
        console.error(error);
    }
};
