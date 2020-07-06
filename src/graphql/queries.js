/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!) {
    getCategories(id: $id) {
      id
      name
      algorithms {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategoriess = /* GraphQL */ `
  query ListCategoriess(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoriess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAlgorithms = /* GraphQL */ `
  query GetAlgorithms($id: ID!) {
    getAlgorithms(id: $id) {
      id
      name
      categoriesID
      example
      description
      categories {
        id
        name
        createdAt
        updatedAt
      }
      quizes {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAlgorithmss = /* GraphQL */ `
  query ListAlgorithmss(
    $filter: ModelAlgorithmsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlgorithmss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        categoriesID
        example
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuizes = /* GraphQL */ `
  query GetQuizes($id: ID!) {
    getQuizes(id: $id) {
      id
      algorithmsID
      algorithms {
        id
        name
        categoriesID
        example
        description
        createdAt
        updatedAt
      }
      question
      option
      answer
      createdAt
      updatedAt
    }
  }
`;
export const listQuizess = /* GraphQL */ `
  query ListQuizess(
    $filter: ModelQuizesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        algorithmsID
        question
        option
        answer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
