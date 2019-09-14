import React, { Component } from 'react';
import Layout from '../components/layout';
import UserList from '../components/usersList';
import NavBar from '../components/nav';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  onChange = (e) => {
    this.setState({ query: e.target.value.toLowerCase() });
  }

  render() {
    return (
      <Layout>
        <section className="main-section">
          <div className="header-container">
            <NavBar />
            <div className="main-section-center">
              <div className="main-section-container">
                <div className="main-heading-lg">
                        The easiest way to find Tik Tok influencers
                </div>
                <div className="main-heading-sm">
                        Search database of over 1.5M tiktok accounts in seconds
                </div>
                <div className="search-bar-container">
                  <div className="seach-bar">
                    <input
                      type="text"
                      placeholder="Enter keywords e.g Canada, Fashion, Football"
                      className="search-input-container"
                      onChange={this.onChange}
                    />
                    <button className="search-btn">
                                Search
                    </button>
                  </div>
                </div>
                <div className="stat-text">
                        See stats for your account
                </div>
              </div>
            </div>
          </div>
        </section>
        <UserList search={this.state.query} />
      </Layout>
    );
  }
}

export default Home;
