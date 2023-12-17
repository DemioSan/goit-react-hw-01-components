import styled from 'styled-components';
import { FriendListItem } from './FriendListItem';

const FriendsUl = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 500px;

  li {
    background-color: #f4bf96;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    padding-left: 20px;
    align-items: center;
    width: 480px;
    height: 120px;

    gap: 30px;
    border-radius: 0 60px 0 60px;

    .avatar {
      height: 80px;
      width: 80px;
      display: block;

      border-radius: 50%;
      border: 5px solid #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      background-color: #fcf5ed;
    }
  }
`;

export const FriendList = ({ list }) => {
  return (
    <FriendsUl>
      {list.map(item => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </FriendsUl>
  );
};
