/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategories = /* GraphQL */ `
  mutation CreateCategories(
    $input: CreateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    createCategories(input: $input, condition: $condition) {
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
export const updateCategories = /* GraphQL */ `
  mutation UpdateCategories(
    $input: UpdateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    updateCategories(input: $input, condition: $condition) {
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
export const deleteCategories = /* GraphQL */ `
  mutation DeleteCategories(
    $input: DeleteCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    deleteCategories(input: $input, condition: $condition) {
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
export const createSubcategories = /* GraphQL */ `
  mutation CreateSubcategories(
    $input: CreateSubcategoriesInput!
    $condition: ModelSubcategoriesConditionInput
  ) {
    createSubcategories(input: $input, condition: $condition) {
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
export const updateSubcategories = /* GraphQL */ `
  mutation UpdateSubcategories(
    $input: UpdateSubcategoriesInput!
    $condition: ModelSubcategoriesConditionInput
  ) {
    updateSubcategories(input: $input, condition: $condition) {
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
export const deleteSubcategories = /* GraphQL */ `
  mutation DeleteSubcategories(
    $input: DeleteSubcategoriesInput!
    $condition: ModelSubcategoriesConditionInput
  ) {
    deleteSubcategories(input: $input, condition: $condition) {
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
export const createAlgorithms = /* GraphQL */ `
  mutation CreateAlgorithms(
    $input: CreateAlgorithmsInput!
    $condition: ModelAlgorithmsConditionInput
  ) {
    createAlgorithms(input: $input, condition: $condition) {
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
export const updateAlgorithms = /* GraphQL */ `
  mutation UpdateAlgorithms(
    $input: UpdateAlgorithmsInput!
    $condition: ModelAlgorithmsConditionInput
  ) {
    updateAlgorithms(input: $input, condition: $condition) {
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
export const deleteAlgorithms = /* GraphQL */ `
  mutation DeleteAlgorithms(
    $input: DeleteAlgorithmsInput!
    $condition: ModelAlgorithmsConditionInput
  ) {
    deleteAlgorithms(input: $input, condition: $condition) {
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
export const createQuizes = /* GraphQL */ `
  mutation CreateQuizes(
    $input: CreateQuizesInput!
    $condition: ModelQuizesConditionInput
  ) {
    createQuizes(input: $input, condition: $condition) {
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
export const updateQuizes = /* GraphQL */ `
  mutation UpdateQuizes(
    $input: UpdateQuizesInput!
    $condition: ModelQuizesConditionInput
  ) {
    updateQuizes(input: $input, condition: $condition) {
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
export const deleteQuizes = /* GraphQL */ `
  mutation DeleteQuizes(
    $input: DeleteQuizesInput!
    $condition: ModelQuizesConditionInput
  ) {
    deleteQuizes(input: $input, condition: $condition) {
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
