/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createSource = /* GraphQL */ `
  mutation CreateSource(
    $input: CreateSourceInput!
    $condition: ModelSourceConditionInput
  ) {
    createSource(input: $input, condition: $condition) {
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
          x
          y
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
export const updateSource = /* GraphQL */ `
  mutation UpdateSource(
    $input: UpdateSourceInput!
    $condition: ModelSourceConditionInput
  ) {
    updateSource(input: $input, condition: $condition) {
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
          x
          y
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
export const deleteSource = /* GraphQL */ `
  mutation DeleteSource(
    $input: DeleteSourceInput!
    $condition: ModelSourceConditionInput
  ) {
    deleteSource(input: $input, condition: $condition) {
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
          x
          y
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
export const createCoin = /* GraphQL */ `
  mutation CreateCoin(
    $input: CreateCoinInput!
    $condition: ModelCoinConditionInput
  ) {
    createCoin(input: $input, condition: $condition) {
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
          x
          y
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
export const updateCoin = /* GraphQL */ `
  mutation UpdateCoin(
    $input: UpdateCoinInput!
    $condition: ModelCoinConditionInput
  ) {
    updateCoin(input: $input, condition: $condition) {
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
          x
          y
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
export const deleteCoin = /* GraphQL */ `
  mutation DeleteCoin(
    $input: DeleteCoinInput!
    $condition: ModelCoinConditionInput
  ) {
    deleteCoin(input: $input, condition: $condition) {
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
          x
          y
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
export const createDataset = /* GraphQL */ `
  mutation CreateDataset(
    $input: CreateDatasetInput!
    $condition: ModelDatasetConditionInput
  ) {
    createDataset(input: $input, condition: $condition) {
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
      x
      y
      createdAt
      updatedAt
    }
  }
`;
export const updateDataset = /* GraphQL */ `
  mutation UpdateDataset(
    $input: UpdateDatasetInput!
    $condition: ModelDatasetConditionInput
  ) {
    updateDataset(input: $input, condition: $condition) {
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
      x
      y
      createdAt
      updatedAt
    }
  }
`;
export const deleteDataset = /* GraphQL */ `
  mutation DeleteDataset(
    $input: DeleteDatasetInput!
    $condition: ModelDatasetConditionInput
  ) {
    deleteDataset(input: $input, condition: $condition) {
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
      x
      y
      createdAt
      updatedAt
    }
  }
`;
