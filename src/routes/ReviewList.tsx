import styled from "styled-components";
import { Link } from "react-router-dom";

// interface itemType {
//   id: number;
//   title: string;
//   imgUrl: string;
//   rating: number;
//   content: string;
//   createdAt: number;
//   updatedAt: number;
// }

// interface itemsType {
//   items: itemType[];
// }

const L_row = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  margin: 0 -10px;
`;

const L_col = styled.li`
  width: 20%;
  padding: 0 10px;

  @media (max-width: 900px) {
    width: 25%;
  }

  @media (max-width: 700px) {
    width: 33.3333%;
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

const Content = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: #111111;
  color: #7d8087;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.2;
  height: calc(1.2em * 5);
  overflow: hidden;
`;

const Img = styled.img``;

const Cover = styled.div``;

const MovieDes = styled.div`
  padding: 20px;
  border-top: 5px solid whitesmoke;
`;

const Title = styled.h2`
  font-size: 21px;
`;

const Rating = styled.p``;

function DateFormat({ createdAt }: any) {
  const date = new Date(createdAt);
  return <p>{`${date.getFullYear()}.${date.getMonth()}.${date.getDay()}`}</p>;
}

function ReivewListItem({ item }: any) {
  return (
    <Content>
      <Cover>
        <Img src={item.imgUrl} alt={item.title} />
      </Cover>
      <MovieDes>
        <Title>{item.title}</Title>
        <Rating>{item.rating}</Rating>
        <DateFormat createdAt={item.createdAt} />
        <Description>{item.content}</Description>
      </MovieDes>
    </Content>
  );
}

function ReviewList({ items }: any) {
  return (
    <L_row>
      {items.map((item: any) => {
        return (
          <L_col key={item.id}>
            <ReivewListItem key={item.id} item={item} />
          </L_col>
        );
      })}
    </L_row>
  );
}

export default ReviewList;
