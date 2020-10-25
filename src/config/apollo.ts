import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  concat,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

import { CONFIG_APOLLO_URL } from './variables'

const httpLink = new HttpLink({ uri: CONFIG_APOLLO_URL })

const authMiddleware = new ApolloLink((operation, forward) => {
  const authorization = localStorage.getItem('Token')
    ? `Token ${localStorage.getItem('Token')}`
    : ''
  console.log('hay token', localStorage.getItem('Token'))
  operation.setContext({
    headers: {
      Authorization: authorization
    }
  })
  return forward(operation)
})

let apolloInstance: ApolloClient<NormalizedCacheObject> | null = null

export const Apollo = (): ApolloClient<NormalizedCacheObject> => {
  apolloInstance = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache()
  })

  return apolloInstance
}
