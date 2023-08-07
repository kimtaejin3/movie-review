import styled from "styled-components";
import ReviewList from "./ReviewList";
import { useEffect, useState } from "react";
import { getReviews } from "../api";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  color: #b6b9b9;
  font-family: "Kanit", sans-serif;
`;

const Header = styled.header`
  padding: 40px 0 0;
  margin-bottom: 20px;
  text-align: center;
  background-color: #30373f;
`;

const Nav_ul = styled.ul`
  margin-top: 40px;
  display: flex;
  background-color: #282b32;
`;

const Nav_li = styled.li`
  color: #7d8087;
  padding: 15px 30px;
  font-size: 13px;
`;

const Active = styled.p`
  background-color: #1c1f24;
`;

function Movies() {
  const [item, setItem] = useState([]);

  const handleLoad = async () => {
    const { reviews } = await getReviews();
    setItem(reviews);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Header>
        <Wrapper>
          <Title>
            {/* <img src={Logo} /> */}
            MoviePedia
          </Title>
          <Nav_ul>
            <Active>
              <Nav_li>액션</Nav_li>
            </Active>
            <Nav_li>스릴러</Nav_li>
            <Nav_li>범죄/느와르</Nav_li>
            <Nav_li>공포</Nav_li>
            <Nav_li>로맨틱 코미디</Nav_li>
            <Nav_li>영화 업로드</Nav_li>
          </Nav_ul>
        </Wrapper>
      </Header>
      <Wrapper>
        <ReviewList items={item} />
      </Wrapper>
    </>
  );
}

export default Movies;
