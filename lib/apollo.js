import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cookie from 'cookie';
import Head from 'next/head';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';

function withApollo(PageComponent, { ssr = true } = {}) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = useMemo(() => {
      if (apolloClient) {
        return apolloClient;
      }

      return initApolloClient(apolloState, { getToken });
    }, []);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';

    WithApollo.displayName = `withApollo(${displayName})`;

    WithApollo.propTypes = {
      apolloClient: PropTypes.object,
      apolloState: PropTypes.object,
    };
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx) => {
      const { AppTree } = ctx;
      const apolloClient = (ctx.apolloClient = initApolloClient({}));

      const pageProps = PageComponent.getInitialProps
        ? await PageComponent.getInitialProps(ctx)
        : {};

      if (typeof window === 'undefined') {
        if (ctx.res && ctx.res.finished) {
          return {};
        }

        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import('@apollo/react-ssr');
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient,
                }}
              />,
            );
          } catch (error) {
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          }
        }
        Head.rewind();
      }

      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState,
      };
    };
  }

  return WithApollo;
}

let apolloClient = null;

function initApolloClient(...args) {
   if (typeof window === 'undefined') {
    return createApolloClient(...args);
  }

  if (!apolloClient) {
    apolloClient = createApolloClient(...args);
  }

  return apolloClient;
}

function createApolloClient(initialState = {}) {
  const fetchOptions = {};

  if (typeof window === 'undefined') {
    if (process.env.https_proxy) {
      // eslint-disable-next-line global-require
      fetchOptions.agent = new (require('https-proxy-agent'))(
        process.env.https_proxy,
      );
    }
  }

  const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cj5geu3slxl7t0127y8sity9r', // Server URL (must be absolute)
    credentials: 'same-origin',
    fetch,
    fetchOptions,
  });

  const authLink = setContext((request, { headers }) => ({
      headers: {
        ...headers,
      },
    }));

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
  });
}

function getToken(req) {
  const cookies = cookie.parse(req ? req.headers.cookie || '' : document.cookie);
  return cookies.token;
}

export default withApollo;
