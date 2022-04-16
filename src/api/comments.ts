import { Comment } from '../types/comment';
import { request } from './api';

export const getPostComments = (postId: number) => request(`/comments?postId=${postId}`);

export const addComment = ({
  postId, name, email, body,
}: Comment) => request('/comments', {
  method: 'POST',
  body: JSON.stringify({
    postId,
    name,
    email,
    body,
  }),
});
