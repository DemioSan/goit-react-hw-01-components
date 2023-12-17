import styled from 'styled-components';

const OnlineCircle = styled('span')`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: green;
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);
`;
const OfflineCircle = styled('span')`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      {isOnline ? <OnlineCircle /> : <OfflineCircle />}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
