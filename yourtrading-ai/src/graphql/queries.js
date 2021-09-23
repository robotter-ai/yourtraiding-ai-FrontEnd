/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSource = /* GraphQL */ `
  query GetSource($id: ID!) {
    getSource(id: $id) {
      id
      name
      url
      datasets {
        items {
          id
          sourceID
          coinID
          title
          interval
          count
          mean
          std
          min
          max
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSources = /* GraphQL */ `
  query ListSources(
    $filter: ModelSourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        datasets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCoin = /* GraphQL */ `
  query GetCoin($id: ID!) {
    getCoin(id: $id) {
      id
      name
      description
      urls
      datasets {
        items {
          id
          sourceID
          coinID
          title
          interval
          count
          mean
          std
          min
          max
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCoins = /* GraphQL */ `
  query ListCoins(
    $filter: ModelCoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        urls
        datasets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDataset = /* GraphQL */ `
  query GetDataset($id: ID!) {
    getDataset(id: $id) {
      id
      sourceID
      coinID
      title
      interval
      count
      mean
      std
      min
      max
      description
      data {
        items {
          id
          datasetID
          datetime
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDatasets = /* GraphQL */ `
  query ListDatasets(
    $filter: ModelDatasetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDatasets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sourceID
        coinID
        title
        interval
        count
        mean
        std
        min
        max
        description
        data {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTimeEntry = /* GraphQL */ `
  query GetTimeEntry($id: ID!) {
    getTimeEntry(id: $id) {
      id
      datasetID
      datetime
      value
      createdAt
      updatedAt
    }
  }
`;
export const listTimeEntries = /* GraphQL */ `
  query ListTimeEntries(
    $filter: ModelTimeEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        datasetID
        datetime
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
