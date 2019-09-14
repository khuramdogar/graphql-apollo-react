import Head from 'next/head';
import { React } from 'react';

const Layout = (props) => (
  <div>
    <Head>
      <title>Test App</title>
      {/* <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>       */}
      <link href="https://fonts.googleapis.com/css?family=Barlow:100,200,300,400,500,600,700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      <link href="/static/style.css" rel="stylesheet" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="app-container">
      {props.children}
    </div>
  </div>
);

export default Layout;
