import gql from "graphql-tag";

export const getInventory = gql`
  query getInventory($address: String!) {
    punks(where: { owner: $address }) {
      tokenId
      metadata {
        svg
        traits {
          id
        }
      }
    }
  }
`;