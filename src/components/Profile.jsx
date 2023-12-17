import styled from 'styled-components';

const ProfileWrap = styled('div')`
  background-color: #f4bf96;
  max-width: 500px;
  border-radius: 0 60px 0 60px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin: 30px 0;

    .avatar {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      display: block;

      border: 5px solid #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      background-color: #fcf5ed;
    }

    p {
      margin: 0;
      padding-top: 10px;
      color: #fcf5ed;
    }

    .name {
      color: #1f1717;
      font-weight: bold;
      padding-top: 20px;
      font-size: 30px;
    }
  }

  .stats {
    margin: 0;
    padding: 0;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
    list-style: none;
    color: #fcf5ed;

    li {
      border: 1px solid #fcf5ed;
      width: 166px;
      height: 100px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      text-align: center;
      gap: 5px;
      background-color: #ce5a67;
      box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);

      .quantity {
        font-weight: bold;
      }

      &:first-child {
        border-radius: 0 0 0 60px;
      }
    }
  }
`;

export const Profile = ({ user }) => {
  return (
    <ProfileWrap>
      <div className="description">
        <img src={user.avatar} alt="User avatar" className="avatar" />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </ProfileWrap>
  );
};
