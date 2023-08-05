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

function DateFormat({ createdAt }: any) {
  const date = new Date(createdAt);
  return <p>{`${date.getFullYear()}.${date.getMonth()}.${date.getDay()}`}</p>;
}

function ReivewListItem({ item }: any) {
  return (
    <li>
      <h1>{item.title}</h1>
      <img src={item.imgUrl} alt={item.title} />
      <p>{item.rating}</p>
      <DateFormat createdAt={item.createdAt} />
      <p>{item.content}</p>
    </li>
  );
}

function ReviewList({ items }: any) {
  console.log(items.length);
  return (
    <ul>
      {items.map((item: any) => {
        return <ReivewListItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default ReviewList;
