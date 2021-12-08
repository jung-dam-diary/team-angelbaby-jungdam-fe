import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Icon } from '@components/base';
import color from '@assets/colors';

const Container = styled.nav`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  z-index: 5;
  background: ${color.white};
  box-shadow: 0px 1px 4px ${color.brown_25};
`;

const Span = styled.span`
  margin-top: 4px;
`;

const NavLinkStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  color: ${color.grey};
  text-decoration: none;
  font-size: 12px;

  &.active {
    color: ${color.brown};
  }
`;

const Navigation = () => {
  return (
    <Container>
      <NavLink to="" css={NavLinkStyle}>
        <Icon name="bx:bx-home-heart" height={24} />
        <Span>홈</Span>
      </NavLink>
      <NavLink to="" css={NavLinkStyle}>
        <Icon name="akar-icons:book" height={24} />
        <Span>스토리북</Span>
      </NavLink>
      <NavLink to="" css={NavLinkStyle}>
        <Icon name="bi:pencil" height={24} />
        <Span>일기 쓰기</Span>
      </NavLink>
      <NavLink to="" css={NavLinkStyle}>
        <Icon name="ic:outline-timeline" height={24} />
        <Span>특별한 순간</Span>
      </NavLink>
      <NavLink to="" css={NavLinkStyle}>
        <Icon name="fluent:people-20-regular" height={24} />
        <Span>멤버 리스트</Span>
      </NavLink>
    </Container>
  );
};

export default Navigation;
