/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSource = /* GraphQL */ `
  subscription OnCreateSource {
    onCreateSource {
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
export const onUpdateSource = /* GraphQL */ `
  subscription OnUpdateSource {
    onUpdateSource {
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
export const onDeleteSource = /* GraphQL */ `
  subscription OnDeleteSource {
    onDeleteSource {
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
export const onCreateCoin = /* GraphQL */ `
  subscription OnCreateCoin {
    onCreateCoin {
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
export const onUpdateCoin = /* GraphQL */ `
  subscription OnUpdateCoin {
    onUpdateCoin {
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
export const onDeleteCoin = /* GraphQL */ `
  subscription OnDeleteCoin {
    onDeleteCoin {
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
export const onCreateDataset = /* GraphQL */ `
  subscription OnCreateDataset {
    onCreateDataset {
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
export const onUpdateDataset = /* GraphQL */ `
  subscription OnUpdateDataset {
    onUpdateDataset {
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
export const onDeleteDataset = /* GraphQL */ `
  subscription OnDeleteDataset {
    onDeleteDataset {
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
