import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import LikeCommentContext from '../../../Contexts/LikeCommentContext';
import DisLikeCommentContext from '../../../Contexts/DisLikeCommentContext';

import {
  DivContainer, DivPost, DivLikeDislike
} from './style';

const useStyles = makeStyles((theme) => ({
  likeDislike: {
    color: 'black'
  },
  noAction: {
    color: 'gray'
  }
}));

const Comments = (props) => {
  const classes = useStyles();
  const likeComment = useContext(LikeCommentContext);
  const dislikeComment = useContext(DisLikeCommentContext);

  return(
    <DivContainer key={props.comments.id}>
        <strong>@{props.comments.username}</strong>
        <DivPost>{props.comments.text}</DivPost>
        <div>Votos: {props.comments.votesCount}</div>
        <DivLikeDislike>
          <ThumbUpIcon 
            className={props.comments.userVoteDirection === 1 ? classes.likeDislike : classes.noAction}
            titleAccess="curtir"
            cursor="pointer"
            onClick={() => likeComment(props.comments)} />
        </DivLikeDislike>
        <DivLikeDislike>
          <ThumbDownIcon 
            className={props.comments.userVoteDirection === -1 ? classes.likeDislike : classes.noAction}
            titleAccess="descurtir"
            cursor="pointer"
            onClick={() => dislikeComment(props.comments)} />
        </DivLikeDislike>
    </DivContainer>  
  )
}

export default Comments;