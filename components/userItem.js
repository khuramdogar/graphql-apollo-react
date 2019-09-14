import React from 'react';

const UserItem = ({ item }) => (
  <div className="report-card">
    <div className="card-report-header">
      <div className="card-profile-photo-container">
        <img
          src="https://randomuser.me/api/portraits/men/43.jpg"
          alt="profile"
          className="card-profile-pic"
        />
      </div>
    </div>
    <div className="card-body-report">
      <div className="card-heading-name">
        {item.name}
      </div>
      <div className="card-id-officail">
        {item.email}
      </div>
      <div className="card-report-text">
              Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life.
      </div>
      <div className="follow-stat-row ">
        <div className="follow-stat-container">
          <div className="follow-header">
            {item._followingMeta.count}
          </div>
          <div className="follow-bottom">
                        FOLLOWING
          </div>
        </div>
        <div className="follow-stat-container">
          <div className="follow-header">
            {item._followersMeta.count}
          </div>
          <div className="follow-bottom">
                        FANS
          </div>
        </div>
        <div className="follow-stat-container">
          <div className="follow-header">
            {item._likesMeta.count}
          </div>
          <div className="follow-bottom">
                        HEARTS
          </div>
        </div>
      </div>
      <div className="card-footer-report">
        <div className="card-footer-report-text">
                    See Reports
        </div>
      </div>
    </div>
  </div>
);

export default UserItem;
