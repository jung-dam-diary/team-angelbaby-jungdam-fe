import styled from '@emotion/styled';
import font from '@assets/fonts';
import { forwardRef } from 'react';

const Conatainer = styled.div`
  padding-top: 20px;
`;

const Article = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
`;

const Avatar = styled.img`
  margin-right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.span`
  display: inline-block;
  ${() => font.content_16};
`;

const Comment = styled.span`
  ${() => font.content_12}
`;

const DiaryComment = forwardRef(({ comments }, ref) => {
  return (
    <Conatainer ref={ref}>
      {comments.map(({ commentId, avatar, nickname, commentContent }) => (
        <Article key={commentId}>
          <Avatar alt="images" src={avatar} />
          <CommentContainer>
            <UserInfo>{nickname}</UserInfo>
            <Comment>{commentContent}</Comment>
          </CommentContainer>
        </Article>
      ))}
    </Conatainer>
  );
});

export default DiaryComment;
