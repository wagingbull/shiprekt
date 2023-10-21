import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/app.generated";

const client = getSdk(new GraphQLClient('https://gateway.thegraph.com/api/2b11ac00415c862cdedc3a3b95852e37/subgraphs/id/YqMJatbgbqy1GodtbYZv4U9NzyaScCgSF7CAE5ivAM7'));

export default client;