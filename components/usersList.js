import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import UserItem from './userItem';

const users = gql`
    query allUsers($filter: UserFilter!, $first: Int!) {
      allUsers(filter: $filter, first: $first){
        id
        name
        email
        avatar
        _followingMeta{
          count
        }
        _likesMeta{
          count
        }
        _followersMeta{
          count
        }
    }
  }
`;

const UserList = ({ search }) => (
  <Query
          query={users}
          variables={{ filter: { name_contains: search }, first: 3 }}
          ssr={false}
          fetchPolicy="cache-and-network"
  >
    {({ loading, error, data }) => {
            if (loading) {
              return (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'calc(100vh - 110px)',
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    Loading
                  </div>
                </div>
              );
            }

            if (error) {
              return (
                <div style={{ textAlign: 'center' }}>
                  We're sorry. There was an error processing your request.
                </div>
              );
            }

            const { allUsers } = data;
            return (
              <section className="report-section">
                <div className="report-container">
                  {allUsers && allUsers.map((res) => (
                    <UserItem item={res} key={res.id} />
                  ))}
                </div>
              </section>
            );
          }}
  </Query>
      );

export default UserList;
