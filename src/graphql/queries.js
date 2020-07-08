/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!) {
    getCategories(id: $id) {
      id
      name
      subcategories {
        items {
          id
          name
          categoriesID
          description
          categories {
            id
            name
            createdAt
            updatedAt
          }
          algorithms {
            nextToken
          }
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
        subcategories {
          items {
            id
            name
            categoriesID
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubcategories = /* GraphQL */ `
  query GetSubcategories($id: ID!) {
    getSubcategories(id: $id) {
      id
      name
      categoriesID
      description
      categories {
        id
        name
        subcategories {
          items {
            id
            name
            categoriesID
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      algorithms {
        items {
          id
          name
          categoriesID
          subcategoriesID
          example
          description
          picture
          pictureDescription
          subcategories {
            nextToken
          }
          quizes {
            nextToken
          }
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
export const listSubcategoriess = /* GraphQL */ `
  query ListSubcategoriess(
    $filter: ModelSubcategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubcategoriess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        categoriesID
        description
        categories {
          id
          name
          subcategories {
            nextToken
          }
          createdAt
          updatedAt
        }
        algorithms {
          items {
            id
            name
            categoriesID
            subcategoriesID
            example
            description
            picture
            pictureDescription
            createdAt
            updatedAt
          }
          nextToken
        }
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
      subcategoriesID
      example
      description
      picture
      pictureDescription
      subcategories {
        items {
          id
          name
          categoriesID
          description
          categories {
            id
            name
            createdAt
            updatedAt
          }
          algorithms {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      quizes {
        items {
          id
          algorithmsID
          algorithms {
            id
            name
            categoriesID
            subcategoriesID
            example
            description
            picture
            pictureDescription
            createdAt
            updatedAt
          }
          question
          option
          answer
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
        subcategoriesID
        example
        description
        picture
        pictureDescription
        subcategories {
          items {
            id
            name
            categoriesID
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        quizes {
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
        subcategoriesID
        example
        description
        picture
        pictureDescription
        subcategories {
          items {
            id
            name
            categoriesID
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        quizes {
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
        algorithms {
          id
          name
          categoriesID
          subcategoriesID
          example
          description
          picture
          pictureDescription
          subcategories {
            nextToken
          }
          quizes {
            nextToken
          }
          createdAt
          updatedAt
        }
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
