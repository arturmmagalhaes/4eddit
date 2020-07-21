import React from 'react';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
  DivContainer, DivPost, DivLikeDislike, InputPost
} from './style';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '0.5em',
  },
  likeDislike: {
    color: 'black'
  },
  noAction: {
    color: 'gray'
  }
}));

const PostDetail = (props) => {
  const classes = useStyles();

  return (<>
    <DivContainer key={props.post.id}>
      <h2>@{props.post.username}</h2>
      <DivPost>
        <p>{props.post.text}</p>
      </DivPost>
      <p>Votos: {props.post.votesCount} - Comentários: {props.post.commentsCount}</p>
      <DivLikeDislike>
        <ThumbUpIcon 
          className={props.post.userVoteDirection === 1 ? (classes.likeDislike) : (classes.noAction)}
          titleAccess="curtir"
          cursor="pointer"
          onClick={props.like} />
      </DivLikeDislike>
      <DivLikeDislike>
        <ThumbDownIcon
          className={props.post.userVoteDirection === -1 ? (classes.likeDislike) : (classes.noAction)} 
          titleAccess="descurtir"
          cursor="pointer"
          onClick={props.dislike} />
      </DivLikeDislike>
      <div>
        <InputPost 
          type="text" 
          placeholder="Comentar"
          onChange={props.changeInputValue}
          value={props.inputValue}
          />
        <ArrowForwardIosIcon 
          className={classes.root}
          cursor="pointer"
          onClick={props.submitComment} />
      </div>
    </DivContainer>
    {props.post.comments.map((comment) => {
      return (
        <Comments
          key={comment.id}
          comments={comment}
          likeComment={props.likeComment}
          dislikeComment={props.dislikeComment}
        />);
      })}
    </>
    )
}

export default PostDetail;