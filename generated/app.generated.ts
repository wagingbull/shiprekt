import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  __typename?: 'Account';
  /** Account URL */
  accountUrl: Scalars['String'];
  /** Punks offered for sale by Account */
  asks: Array<Ask>;
  /** Punks assigned to account (if any) */
  assigned: Array<Assign>;
  /** Average amount spent buying Punks by Account */
  averageAmountSpent: Scalars['BigInt'];
  /** Query bids by Account */
  bids: Array<Bid>;
  /** Purchases by Account */
  bought: Array<Sale>;
  /** Ethereum Address */
  id: Scalars['Bytes'];
  /** All Punks owned by Account */
  nftsOwned: Array<Nft>;
  /** Total number of Punks assigned to account */
  numberOfPunksAssigned: Scalars['BigInt'];
  /** Total number of Punks owned by account */
  numberOfPunksOwned: Scalars['BigInt'];
  /** Total number of purchases by Account */
  numberOfPurchases: Scalars['BigInt'];
  /** Total number of sales by Account */
  numberOfSales: Scalars['BigInt'];
  /** Total number of transfer by Account */
  numberOfTransfers: Scalars['BigInt'];
  /** All Punks owned by Account */
  punksOwned?: Maybe<Array<Punk>>;
  /** Punk transfers to Account */
  received: Array<Transfer>;
  /** Punk transfers by Account */
  sent: Array<Transfer>;
  /** Total amount earned by Account from selling Punks */
  totalEarned: Scalars['BigInt'];
  /** Total amount spent buying Punks by Account */
  totalSpent: Scalars['BigInt'];
};


export type AccountAsksArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ask_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ask_Filter>;
};


export type AccountAssignedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Assign_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Assign_Filter>;
};


export type AccountBidsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Bid_Filter>;
};


export type AccountBoughtArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Sale_Filter>;
};


export type AccountNftsOwnedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Nft_Filter>;
};


export type AccountPunksOwnedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Punk_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Punk_Filter>;
};


export type AccountReceivedArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Transfer_Filter>;
};


export type AccountSentArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Transfer_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accountUrl?: InputMaybe<Scalars['String']>;
  accountUrl_contains?: InputMaybe<Scalars['String']>;
  accountUrl_contains_nocase?: InputMaybe<Scalars['String']>;
  accountUrl_ends_with?: InputMaybe<Scalars['String']>;
  accountUrl_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountUrl_gt?: InputMaybe<Scalars['String']>;
  accountUrl_gte?: InputMaybe<Scalars['String']>;
  accountUrl_in?: InputMaybe<Array<Scalars['String']>>;
  accountUrl_lt?: InputMaybe<Scalars['String']>;
  accountUrl_lte?: InputMaybe<Scalars['String']>;
  accountUrl_not?: InputMaybe<Scalars['String']>;
  accountUrl_not_contains?: InputMaybe<Scalars['String']>;
  accountUrl_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  accountUrl_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountUrl_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  accountUrl_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountUrl_starts_with?: InputMaybe<Scalars['String']>;
  accountUrl_starts_with_nocase?: InputMaybe<Scalars['String']>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  asks_?: InputMaybe<Ask_Filter>;
  assigned_?: InputMaybe<Assign_Filter>;
  averageAmountSpent?: InputMaybe<Scalars['BigInt']>;
  averageAmountSpent_gt?: InputMaybe<Scalars['BigInt']>;
  averageAmountSpent_gte?: InputMaybe<Scalars['BigInt']>;
  averageAmountSpent_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageAmountSpent_lt?: InputMaybe<Scalars['BigInt']>;
  averageAmountSpent_lte?: InputMaybe<Scalars['BigInt']>;
  averageAmountSpent_not?: InputMaybe<Scalars['BigInt']>;
  averageAmountSpent_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bids_?: InputMaybe<Bid_Filter>;
  bought_?: InputMaybe<Sale_Filter>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  nftsOwned_?: InputMaybe<Nft_Filter>;
  numberOfPunksAssigned?: InputMaybe<Scalars['BigInt']>;
  numberOfPunksAssigned_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfPunksAssigned_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfPunksAssigned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfPunksAssigned_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfPunksAssigned_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfPunksAssigned_not?: InputMaybe<Scalars['BigInt']>;
  numberOfPunksAssigned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfPunksOwned?: InputMaybe<Scalars['BigInt']>;
  numberOfPunksOwned_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfPunksOwned_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfPunksOwned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfPunksOwned_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfPunksOwned_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfPunksOwned_not?: InputMaybe<Scalars['BigInt']>;
  numberOfPunksOwned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfPurchases?: InputMaybe<Scalars['BigInt']>;
  numberOfPurchases_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfPurchases_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfPurchases_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfPurchases_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfPurchases_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfPurchases_not?: InputMaybe<Scalars['BigInt']>;
  numberOfPurchases_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfSales?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfSales_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_not?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfTransfers?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfTransfers_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_not?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  punksOwned_?: InputMaybe<Punk_Filter>;
  received_?: InputMaybe<Transfer_Filter>;
  sent_?: InputMaybe<Transfer_Filter>;
  totalEarned?: InputMaybe<Scalars['BigInt']>;
  totalEarned_gt?: InputMaybe<Scalars['BigInt']>;
  totalEarned_gte?: InputMaybe<Scalars['BigInt']>;
  totalEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalEarned_lt?: InputMaybe<Scalars['BigInt']>;
  totalEarned_lte?: InputMaybe<Scalars['BigInt']>;
  totalEarned_not?: InputMaybe<Scalars['BigInt']>;
  totalEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSpent?: InputMaybe<Scalars['BigInt']>;
  totalSpent_gt?: InputMaybe<Scalars['BigInt']>;
  totalSpent_gte?: InputMaybe<Scalars['BigInt']>;
  totalSpent_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSpent_lt?: InputMaybe<Scalars['BigInt']>;
  totalSpent_lte?: InputMaybe<Scalars['BigInt']>;
  totalSpent_not?: InputMaybe<Scalars['BigInt']>;
  totalSpent_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Account_OrderBy {
  AccountUrl = 'accountUrl',
  Asks = 'asks',
  Assigned = 'assigned',
  AverageAmountSpent = 'averageAmountSpent',
  Bids = 'bids',
  Bought = 'bought',
  Id = 'id',
  NftsOwned = 'nftsOwned',
  NumberOfPunksAssigned = 'numberOfPunksAssigned',
  NumberOfPunksOwned = 'numberOfPunksOwned',
  NumberOfPurchases = 'numberOfPurchases',
  NumberOfSales = 'numberOfSales',
  NumberOfTransfers = 'numberOfTransfers',
  PunksOwned = 'punksOwned',
  Received = 'received',
  Sent = 'sent',
  TotalEarned = 'totalEarned',
  TotalSpent = 'totalSpent'
}

export type Ask = Offer & {
  __typename?: 'Ask';
  /** Ask for Punk in ETH */
  amount: Scalars['BigInt'];
  /** Ask created at */
  created?: Maybe<Event>;
  /** Account that created Ask */
  from: Account;
  id: Scalars['ID'];
  /** Punk being offered for sale */
  nft?: Maybe<Nft>;
  offerType: OfferType;
  /** Open Status of Punk. Asks can be either Open or Closed */
  open: Scalars['Boolean'];
  /** Ask removed at */
  removed?: Maybe<Event>;
};

export type AskCreated = Event & {
  __typename?: 'AskCreated';
  /** Ask in ETH */
  amount?: Maybe<Scalars['BigInt']>;
  ask?: Maybe<Ask>;
  blockHash: Scalars['Bytes'];
  /** Transaction details */
  blockNumber: Scalars['BigInt'];
  /** Contract metadata */
  contract?: Maybe<Contract>;
  /** Account that created Ask */
  from?: Maybe<Account>;
  id: Scalars['ID'];
  logNumber: Scalars['BigInt'];
  /** Punk being offered for sale */
  nft?: Maybe<Nft>;
  timestamp: Scalars['BigInt'];
  to?: Maybe<Account>;
  txHash: Scalars['Bytes'];
  type: EventType;
};

export type AskCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<AskCreated_Filter>>>;
  ask?: InputMaybe<Scalars['String']>;
  ask_?: InputMaybe<Ask_Filter>;
  ask_contains?: InputMaybe<Scalars['String']>;
  ask_contains_nocase?: InputMaybe<Scalars['String']>;
  ask_ends_with?: InputMaybe<Scalars['String']>;
  ask_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ask_gt?: InputMaybe<Scalars['String']>;
  ask_gte?: InputMaybe<Scalars['String']>;
  ask_in?: InputMaybe<Array<Scalars['String']>>;
  ask_lt?: InputMaybe<Scalars['String']>;
  ask_lte?: InputMaybe<Scalars['String']>;
  ask_not?: InputMaybe<Scalars['String']>;
  ask_not_contains?: InputMaybe<Scalars['String']>;
  ask_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ask_not_ends_with?: InputMaybe<Scalars['String']>;
  ask_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ask_not_in?: InputMaybe<Array<Scalars['String']>>;
  ask_not_starts_with?: InputMaybe<Scalars['String']>;
  ask_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ask_starts_with?: InputMaybe<Scalars['String']>;
  ask_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logNumber?: InputMaybe<Scalars['BigInt']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<AskCreated_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<EventType>;
  type_in?: InputMaybe<Array<EventType>>;
  type_not?: InputMaybe<EventType>;
  type_not_in?: InputMaybe<Array<EventType>>;
};

export enum AskCreated_OrderBy {
  Amount = 'amount',
  Ask = 'ask',
  AskAmount = 'ask__amount',
  AskId = 'ask__id',
  AskOfferType = 'ask__offerType',
  AskOpen = 'ask__open',
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractImageHash = 'contract__imageHash',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalAmountTraded = 'contract__totalAmountTraded',
  ContractTotalSales = 'contract__totalSales',
  ContractTotalSupply = 'contract__totalSupply',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  Timestamp = 'timestamp',
  To = 'to',
  ToAccountUrl = 'to__accountUrl',
  ToAverageAmountSpent = 'to__averageAmountSpent',
  ToId = 'to__id',
  ToNumberOfPunksAssigned = 'to__numberOfPunksAssigned',
  ToNumberOfPunksOwned = 'to__numberOfPunksOwned',
  ToNumberOfPurchases = 'to__numberOfPurchases',
  ToNumberOfSales = 'to__numberOfSales',
  ToNumberOfTransfers = 'to__numberOfTransfers',
  ToTotalEarned = 'to__totalEarned',
  ToTotalSpent = 'to__totalSpent',
  TxHash = 'txHash',
  Type = 'type'
}

export type AskRemoved = Event & {
  __typename?: 'AskRemoved';
  /** Ask that was removed, in ETH */
  amount?: Maybe<Scalars['BigInt']>;
  ask: Ask;
  blockHash: Scalars['Bytes'];
  /** Transaction details */
  blockNumber: Scalars['BigInt'];
  /** Contract metadata */
  contract?: Maybe<Contract>;
  /** Account that removed Ask */
  from?: Maybe<Account>;
  id: Scalars['ID'];
  logNumber: Scalars['BigInt'];
  /** Punk whose asked was removed */
  nft?: Maybe<Nft>;
  timestamp: Scalars['BigInt'];
  to?: Maybe<Account>;
  txHash: Scalars['Bytes'];
  type: EventType;
};

export type AskRemoved_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<AskRemoved_Filter>>>;
  ask?: InputMaybe<Scalars['String']>;
  ask_?: InputMaybe<Ask_Filter>;
  ask_contains?: InputMaybe<Scalars['String']>;
  ask_contains_nocase?: InputMaybe<Scalars['String']>;
  ask_ends_with?: InputMaybe<Scalars['String']>;
  ask_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ask_gt?: InputMaybe<Scalars['String']>;
  ask_gte?: InputMaybe<Scalars['String']>;
  ask_in?: InputMaybe<Array<Scalars['String']>>;
  ask_lt?: InputMaybe<Scalars['String']>;
  ask_lte?: InputMaybe<Scalars['String']>;
  ask_not?: InputMaybe<Scalars['String']>;
  ask_not_contains?: InputMaybe<Scalars['String']>;
  ask_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ask_not_ends_with?: InputMaybe<Scalars['String']>;
  ask_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ask_not_in?: InputMaybe<Array<Scalars['String']>>;
  ask_not_starts_with?: InputMaybe<Scalars['String']>;
  ask_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ask_starts_with?: InputMaybe<Scalars['String']>;
  ask_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logNumber?: InputMaybe<Scalars['BigInt']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<AskRemoved_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<EventType>;
  type_in?: InputMaybe<Array<EventType>>;
  type_not?: InputMaybe<EventType>;
  type_not_in?: InputMaybe<Array<EventType>>;
};

export enum AskRemoved_OrderBy {
  Amount = 'amount',
  Ask = 'ask',
  AskAmount = 'ask__amount',
  AskId = 'ask__id',
  AskOfferType = 'ask__offerType',
  AskOpen = 'ask__open',
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractImageHash = 'contract__imageHash',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalAmountTraded = 'contract__totalAmountTraded',
  ContractTotalSales = 'contract__totalSales',
  ContractTotalSupply = 'contract__totalSupply',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  Timestamp = 'timestamp',
  To = 'to',
  ToAccountUrl = 'to__accountUrl',
  ToAverageAmountSpent = 'to__averageAmountSpent',
  ToId = 'to__id',
  ToNumberOfPunksAssigned = 'to__numberOfPunksAssigned',
  ToNumberOfPunksOwned = 'to__numberOfPunksOwned',
  ToNumberOfPurchases = 'to__numberOfPurchases',
  ToNumberOfSales = 'to__numberOfSales',
  ToNumberOfTransfers = 'to__numberOfTransfers',
  ToTotalEarned = 'to__totalEarned',
  ToTotalSpent = 'to__totalSpent',
  TxHash = 'txHash',
  Type = 'type'
}

export type Ask_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Ask_Filter>>>;
  created?: InputMaybe<Scalars['String']>;
  created_?: InputMaybe<Event_Filter>;
  created_contains?: InputMaybe<Scalars['String']>;
  created_contains_nocase?: InputMaybe<Scalars['String']>;
  created_ends_with?: InputMaybe<Scalars['String']>;
  created_ends_with_nocase?: InputMaybe<Scalars['String']>;
  created_gt?: InputMaybe<Scalars['String']>;
  created_gte?: InputMaybe<Scalars['String']>;
  created_in?: InputMaybe<Array<Scalars['String']>>;
  created_lt?: InputMaybe<Scalars['String']>;
  created_lte?: InputMaybe<Scalars['String']>;
  created_not?: InputMaybe<Scalars['String']>;
  created_not_contains?: InputMaybe<Scalars['String']>;
  created_not_contains_nocase?: InputMaybe<Scalars['String']>;
  created_not_ends_with?: InputMaybe<Scalars['String']>;
  created_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  created_not_in?: InputMaybe<Array<Scalars['String']>>;
  created_not_starts_with?: InputMaybe<Scalars['String']>;
  created_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  created_starts_with?: InputMaybe<Scalars['String']>;
  created_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  offerType?: InputMaybe<OfferType>;
  offerType_in?: InputMaybe<Array<OfferType>>;
  offerType_not?: InputMaybe<OfferType>;
  offerType_not_in?: InputMaybe<Array<OfferType>>;
  open?: InputMaybe<Scalars['Boolean']>;
  open_in?: InputMaybe<Array<Scalars['Boolean']>>;
  open_not?: InputMaybe<Scalars['Boolean']>;
  open_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  or?: InputMaybe<Array<InputMaybe<Ask_Filter>>>;
  removed?: InputMaybe<Scalars['String']>;
  removed_?: InputMaybe<Event_Filter>;
  removed_contains?: InputMaybe<Scalars['String']>;
  removed_contains_nocase?: InputMaybe<Scalars['String']>;
  removed_ends_with?: InputMaybe<Scalars['String']>;
  removed_ends_with_nocase?: InputMaybe<Scalars['String']>;
  removed_gt?: InputMaybe<Scalars['String']>;
  removed_gte?: InputMaybe<Scalars['String']>;
  removed_in?: InputMaybe<Array<Scalars['String']>>;
  removed_lt?: InputMaybe<Scalars['String']>;
  removed_lte?: InputMaybe<Scalars['String']>;
  removed_not?: InputMaybe<Scalars['String']>;
  removed_not_contains?: InputMaybe<Scalars['String']>;
  removed_not_contains_nocase?: InputMaybe<Scalars['String']>;
  removed_not_ends_with?: InputMaybe<Scalars['String']>;
  removed_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  removed_not_in?: InputMaybe<Array<Scalars['String']>>;
  removed_not_starts_with?: InputMaybe<Scalars['String']>;
  removed_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  removed_starts_with?: InputMaybe<Scalars['String']>;
  removed_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Ask_OrderBy {
  Amount = 'amount',
  Created = 'created',
  CreatedAmount = 'created__amount',
  CreatedBlockHash = 'created__blockHash',
  CreatedBlockNumber = 'created__blockNumber',
  CreatedId = 'created__id',
  CreatedLogNumber = 'created__logNumber',
  CreatedTimestamp = 'created__timestamp',
  CreatedTxHash = 'created__txHash',
  CreatedType = 'created__type',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  OfferType = 'offerType',
  Open = 'open',
  Removed = 'removed',
  RemovedAmount = 'removed__amount',
  RemovedBlockHash = 'removed__blockHash',
  RemovedBlockNumber = 'removed__blockNumber',
  RemovedId = 'removed__id',
  RemovedLogNumber = 'removed__logNumber',
  RemovedTimestamp = 'removed__timestamp',
  RemovedTxHash = 'removed__txHash',
  RemovedType = 'removed__type'
}

export type Assign = Event & {
  __typename?: 'Assign';
  amount?: Maybe<Scalars['BigInt']>;
  blockHash: Scalars['Bytes'];
  /** Transaction details */
  blockNumber: Scalars['BigInt'];
  /** Contract metadata */
  contract?: Maybe<Contract>;
  from?: Maybe<Account>;
  id: Scalars['ID'];
  logNumber: Scalars['BigInt'];
  /** Punk that was assigned */
  nft?: Maybe<Nft>;
  timestamp: Scalars['BigInt'];
  /** Account that claimed Punk */
  to?: Maybe<Account>;
  txHash: Scalars['Bytes'];
  type: EventType;
};

export type Assign_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Assign_Filter>>>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logNumber?: InputMaybe<Scalars['BigInt']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Assign_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<EventType>;
  type_in?: InputMaybe<Array<EventType>>;
  type_not?: InputMaybe<EventType>;
  type_not_in?: InputMaybe<Array<EventType>>;
};

export enum Assign_OrderBy {
  Amount = 'amount',
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractImageHash = 'contract__imageHash',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalAmountTraded = 'contract__totalAmountTraded',
  ContractTotalSales = 'contract__totalSales',
  ContractTotalSupply = 'contract__totalSupply',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  Timestamp = 'timestamp',
  To = 'to',
  ToAccountUrl = 'to__accountUrl',
  ToAverageAmountSpent = 'to__averageAmountSpent',
  ToId = 'to__id',
  ToNumberOfPunksAssigned = 'to__numberOfPunksAssigned',
  ToNumberOfPunksOwned = 'to__numberOfPunksOwned',
  ToNumberOfPurchases = 'to__numberOfPurchases',
  ToNumberOfSales = 'to__numberOfSales',
  ToNumberOfTransfers = 'to__numberOfTransfers',
  ToTotalEarned = 'to__totalEarned',
  ToTotalSpent = 'to__totalSpent',
  TxHash = 'txHash',
  Type = 'type'
}

export type Bid = Offer & {
  __typename?: 'Bid';
  /** Bid amount in ETH */
  amount: Scalars['BigInt'];
  /** Bid created at */
  created?: Maybe<Event>;
  /** Bidder */
  from: Account;
  id: Scalars['ID'];
  /** Punk bidded */
  nft?: Maybe<Nft>;
  offerType: OfferType;
  /** Open status of Punk. Bids can be either Open or Closed */
  open: Scalars['Boolean'];
  /** Bid removed at */
  removed?: Maybe<Event>;
};

export type BidCreated = Event & {
  __typename?: 'BidCreated';
  /** Bid in ETH */
  amount?: Maybe<Scalars['BigInt']>;
  bid?: Maybe<Bid>;
  blockHash: Scalars['Bytes'];
  /** Transaction details */
  blockNumber: Scalars['BigInt'];
  /** Contract metadata */
  contract?: Maybe<Contract>;
  /** Account that created Bid */
  from?: Maybe<Account>;
  id: Scalars['ID'];
  logNumber: Scalars['BigInt'];
  /** Punk being bidded */
  nft?: Maybe<Nft>;
  timestamp: Scalars['BigInt'];
  to?: Maybe<Account>;
  txHash: Scalars['Bytes'];
  type: EventType;
};

export type BidCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<BidCreated_Filter>>>;
  bid?: InputMaybe<Scalars['String']>;
  bid_?: InputMaybe<Bid_Filter>;
  bid_contains?: InputMaybe<Scalars['String']>;
  bid_contains_nocase?: InputMaybe<Scalars['String']>;
  bid_ends_with?: InputMaybe<Scalars['String']>;
  bid_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bid_gt?: InputMaybe<Scalars['String']>;
  bid_gte?: InputMaybe<Scalars['String']>;
  bid_in?: InputMaybe<Array<Scalars['String']>>;
  bid_lt?: InputMaybe<Scalars['String']>;
  bid_lte?: InputMaybe<Scalars['String']>;
  bid_not?: InputMaybe<Scalars['String']>;
  bid_not_contains?: InputMaybe<Scalars['String']>;
  bid_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bid_not_ends_with?: InputMaybe<Scalars['String']>;
  bid_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bid_not_in?: InputMaybe<Array<Scalars['String']>>;
  bid_not_starts_with?: InputMaybe<Scalars['String']>;
  bid_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bid_starts_with?: InputMaybe<Scalars['String']>;
  bid_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logNumber?: InputMaybe<Scalars['BigInt']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<BidCreated_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<EventType>;
  type_in?: InputMaybe<Array<EventType>>;
  type_not?: InputMaybe<EventType>;
  type_not_in?: InputMaybe<Array<EventType>>;
};

export enum BidCreated_OrderBy {
  Amount = 'amount',
  Bid = 'bid',
  BidAmount = 'bid__amount',
  BidId = 'bid__id',
  BidOfferType = 'bid__offerType',
  BidOpen = 'bid__open',
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractImageHash = 'contract__imageHash',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalAmountTraded = 'contract__totalAmountTraded',
  ContractTotalSales = 'contract__totalSales',
  ContractTotalSupply = 'contract__totalSupply',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  Timestamp = 'timestamp',
  To = 'to',
  ToAccountUrl = 'to__accountUrl',
  ToAverageAmountSpent = 'to__averageAmountSpent',
  ToId = 'to__id',
  ToNumberOfPunksAssigned = 'to__numberOfPunksAssigned',
  ToNumberOfPunksOwned = 'to__numberOfPunksOwned',
  ToNumberOfPurchases = 'to__numberOfPurchases',
  ToNumberOfSales = 'to__numberOfSales',
  ToNumberOfTransfers = 'to__numberOfTransfers',
  ToTotalEarned = 'to__totalEarned',
  ToTotalSpent = 'to__totalSpent',
  TxHash = 'txHash',
  Type = 'type'
}

export type BidRemoved = Event & {
  __typename?: 'BidRemoved';
  /** Bid that was removed, in ETH */
  amount?: Maybe<Scalars['BigInt']>;
  bid: Bid;
  blockHash: Scalars['Bytes'];
  /** Transaction details */
  blockNumber: Scalars['BigInt'];
  /** Contract metadata */
  contract?: Maybe<Contract>;
  /** Account that removed Bid */
  from?: Maybe<Account>;
  id: Scalars['ID'];
  logNumber: Scalars['BigInt'];
  /** Punk whose Bid was removed */
  nft?: Maybe<Nft>;
  timestamp: Scalars['BigInt'];
  to?: Maybe<Account>;
  txHash: Scalars['Bytes'];
  type: EventType;
};

export type BidRemoved_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<BidRemoved_Filter>>>;
  bid?: InputMaybe<Scalars['String']>;
  bid_?: InputMaybe<Bid_Filter>;
  bid_contains?: InputMaybe<Scalars['String']>;
  bid_contains_nocase?: InputMaybe<Scalars['String']>;
  bid_ends_with?: InputMaybe<Scalars['String']>;
  bid_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bid_gt?: InputMaybe<Scalars['String']>;
  bid_gte?: InputMaybe<Scalars['String']>;
  bid_in?: InputMaybe<Array<Scalars['String']>>;
  bid_lt?: InputMaybe<Scalars['String']>;
  bid_lte?: InputMaybe<Scalars['String']>;
  bid_not?: InputMaybe<Scalars['String']>;
  bid_not_contains?: InputMaybe<Scalars['String']>;
  bid_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bid_not_ends_with?: InputMaybe<Scalars['String']>;
  bid_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bid_not_in?: InputMaybe<Array<Scalars['String']>>;
  bid_not_starts_with?: InputMaybe<Scalars['String']>;
  bid_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bid_starts_with?: InputMaybe<Scalars['String']>;
  bid_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logNumber?: InputMaybe<Scalars['BigInt']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<BidRemoved_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<EventType>;
  type_in?: InputMaybe<Array<EventType>>;
  type_not?: InputMaybe<EventType>;
  type_not_in?: InputMaybe<Array<EventType>>;
};

export enum BidRemoved_OrderBy {
  Amount = 'amount',
  Bid = 'bid',
  BidAmount = 'bid__amount',
  BidId = 'bid__id',
  BidOfferType = 'bid__offerType',
  BidOpen = 'bid__open',
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractImageHash = 'contract__imageHash',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalAmountTraded = 'contract__totalAmountTraded',
  ContractTotalSales = 'contract__totalSales',
  ContractTotalSupply = 'contract__totalSupply',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  Timestamp = 'timestamp',
  To = 'to',
  ToAccountUrl = 'to__accountUrl',
  ToAverageAmountSpent = 'to__averageAmountSpent',
  ToId = 'to__id',
  ToNumberOfPunksAssigned = 'to__numberOfPunksAssigned',
  ToNumberOfPunksOwned = 'to__numberOfPunksOwned',
  ToNumberOfPurchases = 'to__numberOfPurchases',
  ToNumberOfSales = 'to__numberOfSales',
  ToNumberOfTransfers = 'to__numberOfTransfers',
  ToTotalEarned = 'to__totalEarned',
  ToTotalSpent = 'to__totalSpent',
  TxHash = 'txHash',
  Type = 'type'
}

export type Bid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Bid_Filter>>>;
  created?: InputMaybe<Scalars['String']>;
  created_?: InputMaybe<Event_Filter>;
  created_contains?: InputMaybe<Scalars['String']>;
  created_contains_nocase?: InputMaybe<Scalars['String']>;
  created_ends_with?: InputMaybe<Scalars['String']>;
  created_ends_with_nocase?: InputMaybe<Scalars['String']>;
  created_gt?: InputMaybe<Scalars['String']>;
  created_gte?: InputMaybe<Scalars['String']>;
  created_in?: InputMaybe<Array<Scalars['String']>>;
  created_lt?: InputMaybe<Scalars['String']>;
  created_lte?: InputMaybe<Scalars['String']>;
  created_not?: InputMaybe<Scalars['String']>;
  created_not_contains?: InputMaybe<Scalars['String']>;
  created_not_contains_nocase?: InputMaybe<Scalars['String']>;
  created_not_ends_with?: InputMaybe<Scalars['String']>;
  created_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  created_not_in?: InputMaybe<Array<Scalars['String']>>;
  created_not_starts_with?: InputMaybe<Scalars['String']>;
  created_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  created_starts_with?: InputMaybe<Scalars['String']>;
  created_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  offerType?: InputMaybe<OfferType>;
  offerType_in?: InputMaybe<Array<OfferType>>;
  offerType_not?: InputMaybe<OfferType>;
  offerType_not_in?: InputMaybe<Array<OfferType>>;
  open?: InputMaybe<Scalars['Boolean']>;
  open_in?: InputMaybe<Array<Scalars['Boolean']>>;
  open_not?: InputMaybe<Scalars['Boolean']>;
  open_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  or?: InputMaybe<Array<InputMaybe<Bid_Filter>>>;
  removed?: InputMaybe<Scalars['String']>;
  removed_?: InputMaybe<Event_Filter>;
  removed_contains?: InputMaybe<Scalars['String']>;
  removed_contains_nocase?: InputMaybe<Scalars['String']>;
  removed_ends_with?: InputMaybe<Scalars['String']>;
  removed_ends_with_nocase?: InputMaybe<Scalars['String']>;
  removed_gt?: InputMaybe<Scalars['String']>;
  removed_gte?: InputMaybe<Scalars['String']>;
  removed_in?: InputMaybe<Array<Scalars['String']>>;
  removed_lt?: InputMaybe<Scalars['String']>;
  removed_lte?: InputMaybe<Scalars['String']>;
  removed_not?: InputMaybe<Scalars['String']>;
  removed_not_contains?: InputMaybe<Scalars['String']>;
  removed_not_contains_nocase?: InputMaybe<Scalars['String']>;
  removed_not_ends_with?: InputMaybe<Scalars['String']>;
  removed_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  removed_not_in?: InputMaybe<Array<Scalars['String']>>;
  removed_not_starts_with?: InputMaybe<Scalars['String']>;
  removed_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  removed_starts_with?: InputMaybe<Scalars['String']>;
  removed_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Bid_OrderBy {
  Amount = 'amount',
  Created = 'created',
  CreatedAmount = 'created__amount',
  CreatedBlockHash = 'created__blockHash',
  CreatedBlockNumber = 'created__blockNumber',
  CreatedId = 'created__id',
  CreatedLogNumber = 'created__logNumber',
  CreatedTimestamp = 'created__timestamp',
  CreatedTxHash = 'created__txHash',
  CreatedType = 'created__type',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  OfferType = 'offerType',
  Open = 'open',
  Removed = 'removed',
  RemovedAmount = 'removed__amount',
  RemovedBlockHash = 'removed__blockHash',
  RemovedBlockNumber = 'removed__blockNumber',
  RemovedId = 'removed__id',
  RemovedLogNumber = 'removed__logNumber',
  RemovedTimestamp = 'removed__timestamp',
  RemovedTxHash = 'removed__txHash',
  RemovedType = 'removed__type'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type CToken = {
  __typename?: 'CToken';
  /** Amount of cToken transferred */
  amount?: Maybe<Scalars['BigInt']>;
  blockHash: Scalars['Bytes'];
  /** Transaction details */
  blockNumber: Scalars['BigInt'];
  /** Sender */
  from: Account;
  /** TxHash + logNumber */
  id: Scalars['ID'];
  /** New owner of Punk */
  owner: Scalars['String'];
  punkId?: Maybe<Scalars['String']>;
  /** Field for storing referenceIDs of other events in the same transaction */
  referenceId: Scalars['String'];
  timestamp: Scalars['BigInt'];
  /** Recepient */
  to: Account;
  txHash: Scalars['Bytes'];
};

export type CToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<CToken_Filter>>>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<CToken_Filter>>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  punkId?: InputMaybe<Scalars['String']>;
  punkId_contains?: InputMaybe<Scalars['String']>;
  punkId_contains_nocase?: InputMaybe<Scalars['String']>;
  punkId_ends_with?: InputMaybe<Scalars['String']>;
  punkId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  punkId_gt?: InputMaybe<Scalars['String']>;
  punkId_gte?: InputMaybe<Scalars['String']>;
  punkId_in?: InputMaybe<Array<Scalars['String']>>;
  punkId_lt?: InputMaybe<Scalars['String']>;
  punkId_lte?: InputMaybe<Scalars['String']>;
  punkId_not?: InputMaybe<Scalars['String']>;
  punkId_not_contains?: InputMaybe<Scalars['String']>;
  punkId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  punkId_not_ends_with?: InputMaybe<Scalars['String']>;
  punkId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  punkId_not_in?: InputMaybe<Array<Scalars['String']>>;
  punkId_not_starts_with?: InputMaybe<Scalars['String']>;
  punkId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  punkId_starts_with?: InputMaybe<Scalars['String']>;
  punkId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  referenceId?: InputMaybe<Scalars['String']>;
  referenceId_contains?: InputMaybe<Scalars['String']>;
  referenceId_contains_nocase?: InputMaybe<Scalars['String']>;
  referenceId_ends_with?: InputMaybe<Scalars['String']>;
  referenceId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  referenceId_gt?: InputMaybe<Scalars['String']>;
  referenceId_gte?: InputMaybe<Scalars['String']>;
  referenceId_in?: InputMaybe<Array<Scalars['String']>>;
  referenceId_lt?: InputMaybe<Scalars['String']>;
  referenceId_lte?: InputMaybe<Scalars['String']>;
  referenceId_not?: InputMaybe<Scalars['String']>;
  referenceId_not_contains?: InputMaybe<Scalars['String']>;
  referenceId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  referenceId_not_ends_with?: InputMaybe<Scalars['String']>;
  referenceId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  referenceId_not_in?: InputMaybe<Array<Scalars['String']>>;
  referenceId_not_starts_with?: InputMaybe<Scalars['String']>;
  referenceId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  referenceId_starts_with?: InputMaybe<Scalars['String']>;
  referenceId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum CToken_OrderBy {
  Amount = 'amount',
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  Owner = 'owner',
  PunkId = 'punkId',
  ReferenceId = 'referenceId',
  Timestamp = 'timestamp',
  To = 'to',
  ToAccountUrl = 'to__accountUrl',
  ToAverageAmountSpent = 'to__averageAmountSpent',
  ToId = 'to__id',
  ToNumberOfPunksAssigned = 'to__numberOfPunksAssigned',
  ToNumberOfPunksOwned = 'to__numberOfPunksOwned',
  ToNumberOfPurchases = 'to__numberOfPurchases',
  ToNumberOfSales = 'to__numberOfSales',
  ToNumberOfTransfers = 'to__numberOfTransfers',
  ToTotalEarned = 'to__totalEarned',
  ToTotalSpent = 'to__totalSpent',
  TxHash = 'txHash'
}

export type Contract = {
  __typename?: 'Contract';
  /** Contract Address */
  id: Scalars['ID'];
  /** The hash of the composite image of all the Punks */
  imageHash?: Maybe<Scalars['String']>;
  /** Token name */
  name?: Maybe<Scalars['String']>;
  /** Token Symbol */
  symbol?: Maybe<Scalars['String']>;
  /** Total Sales in ETH for Punks */
  totalAmountTraded: Scalars['BigInt'];
  /** Total number of Punk sales */
  totalSales: Scalars['BigInt'];
  /** Total supply of tokens */
  totalSupply: Scalars['BigInt'];
};

export type Contract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Contract_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  imageHash?: InputMaybe<Scalars['String']>;
  imageHash_contains?: InputMaybe<Scalars['String']>;
  imageHash_contains_nocase?: InputMaybe<Scalars['String']>;
  imageHash_ends_with?: InputMaybe<Scalars['String']>;
  imageHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  imageHash_gt?: InputMaybe<Scalars['String']>;
  imageHash_gte?: InputMaybe<Scalars['String']>;
  imageHash_in?: InputMaybe<Array<Scalars['String']>>;
  imageHash_lt?: InputMaybe<Scalars['String']>;
  imageHash_lte?: InputMaybe<Scalars['String']>;
  imageHash_not?: InputMaybe<Scalars['String']>;
  imageHash_not_contains?: InputMaybe<Scalars['String']>;
  imageHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  imageHash_not_ends_with?: InputMaybe<Scalars['String']>;
  imageHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  imageHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  imageHash_not_starts_with?: InputMaybe<Scalars['String']>;
  imageHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  imageHash_starts_with?: InputMaybe<Scalars['String']>;
  imageHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Contract_Filter>>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  totalAmountTraded?: InputMaybe<Scalars['BigInt']>;
  totalAmountTraded_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTraded_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTraded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountTraded_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountTraded_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountTraded_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountTraded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSales?: InputMaybe<Scalars['BigInt']>;
  totalSales_gt?: InputMaybe<Scalars['BigInt']>;
  totalSales_gte?: InputMaybe<Scalars['BigInt']>;
  totalSales_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSales_lt?: InputMaybe<Scalars['BigInt']>;
  totalSales_lte?: InputMaybe<Scalars['BigInt']>;
  totalSales_not?: InputMaybe<Scalars['BigInt']>;
  totalSales_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Contract_OrderBy {
  Id = 'id',
  ImageHash = 'imageHash',
  Name = 'name',
  Symbol = 'symbol',
  TotalAmountTraded = 'totalAmountTraded',
  TotalSales = 'totalSales',
  TotalSupply = 'totalSupply'
}

export type EpnsNotificationCounter = {
  __typename?: 'EpnsNotificationCounter';
  id: Scalars['ID'];
  totalCount: Scalars['BigInt'];
};

export type EpnsNotificationCounter_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EpnsNotificationCounter_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<EpnsNotificationCounter_Filter>>>;
  totalCount?: InputMaybe<Scalars['BigInt']>;
  totalCount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCount_not?: InputMaybe<Scalars['BigInt']>;
  totalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum EpnsNotificationCounter_OrderBy {
  Id = 'id',
  TotalCount = 'totalCount'
}

export type EpnsPushNotification = {
  __typename?: 'EpnsPushNotification';
  id: Scalars['ID'];
  notification: Scalars['String'];
  notificationNumber: Scalars['BigInt'];
  recipient: Scalars['String'];
};

export type EpnsPushNotification_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EpnsPushNotification_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  notification?: InputMaybe<Scalars['String']>;
  notificationNumber?: InputMaybe<Scalars['BigInt']>;
  notificationNumber_gt?: InputMaybe<Scalars['BigInt']>;
  notificationNumber_gte?: InputMaybe<Scalars['BigInt']>;
  notificationNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  notificationNumber_lt?: InputMaybe<Scalars['BigInt']>;
  notificationNumber_lte?: InputMaybe<Scalars['BigInt']>;
  notificationNumber_not?: InputMaybe<Scalars['BigInt']>;
  notificationNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  notification_contains?: InputMaybe<Scalars['String']>;
  notification_contains_nocase?: InputMaybe<Scalars['String']>;
  notification_ends_with?: InputMaybe<Scalars['String']>;
  notification_ends_with_nocase?: InputMaybe<Scalars['String']>;
  notification_gt?: InputMaybe<Scalars['String']>;
  notification_gte?: InputMaybe<Scalars['String']>;
  notification_in?: InputMaybe<Array<Scalars['String']>>;
  notification_lt?: InputMaybe<Scalars['String']>;
  notification_lte?: InputMaybe<Scalars['String']>;
  notification_not?: InputMaybe<Scalars['String']>;
  notification_not_contains?: InputMaybe<Scalars['String']>;
  notification_not_contains_nocase?: InputMaybe<Scalars['String']>;
  notification_not_ends_with?: InputMaybe<Scalars['String']>;
  notification_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  notification_not_in?: InputMaybe<Array<Scalars['String']>>;
  notification_not_starts_with?: InputMaybe<Scalars['String']>;
  notification_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  notification_starts_with?: InputMaybe<Scalars['String']>;
  notification_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<EpnsPushNotification_Filter>>>;
  recipient?: InputMaybe<Scalars['String']>;
  recipient_contains?: InputMaybe<Scalars['String']>;
  recipient_contains_nocase?: InputMaybe<Scalars['String']>;
  recipient_ends_with?: InputMaybe<Scalars['String']>;
  recipient_ends_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_gt?: InputMaybe<Scalars['String']>;
  recipient_gte?: InputMaybe<Scalars['String']>;
  recipient_in?: InputMaybe<Array<Scalars['String']>>;
  recipient_lt?: InputMaybe<Scalars['String']>;
  recipient_lte?: InputMaybe<Scalars['String']>;
  recipient_not?: InputMaybe<Scalars['String']>;
  recipient_not_contains?: InputMaybe<Scalars['String']>;
  recipient_not_contains_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_ends_with?: InputMaybe<Scalars['String']>;
  recipient_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_not_in?: InputMaybe<Array<Scalars['String']>>;
  recipient_not_starts_with?: InputMaybe<Scalars['String']>;
  recipient_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  recipient_starts_with?: InputMaybe<Scalars['String']>;
  recipient_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum EpnsPushNotification_OrderBy {
  Id = 'id',
  Notification = 'notification',
  NotificationNumber = 'notificationNumber',
  Recipient = 'recipient'
}

export type Event = {
  amount?: Maybe<Scalars['BigInt']>;
  blockHash: Scalars['Bytes'];
  /** Transaction details */
  blockNumber: Scalars['BigInt'];
  /** Contract metadata */
  contract?: Maybe<Contract>;
  from?: Maybe<Account>;
  id: Scalars['ID'];
  logNumber: Scalars['BigInt'];
  /** Punk */
  nft?: Maybe<Nft>;
  timestamp: Scalars['BigInt'];
  to?: Maybe<Account>;
  txHash: Scalars['Bytes'];
  type: EventType;
};

export enum EventType {
  AskCreated = 'ASK_CREATED',
  AskRemoved = 'ASK_REMOVED',
  Assign = 'ASSIGN',
  BidCreated = 'BID_CREATED',
  BidRemoved = 'BID_REMOVED',
  Sale = 'SALE',
  Transfer = 'TRANSFER',
  Unwrap = 'UNWRAP',
  Wrap = 'WRAP'
}

export type Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logNumber?: InputMaybe<Scalars['BigInt']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<EventType>;
  type_in?: InputMaybe<Array<EventType>>;
  type_not?: InputMaybe<EventType>;
  type_not_in?: InputMaybe<Array<EventType>>;
};

export enum Event_OrderBy {
  Amount = 'amount',
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractImageHash = 'contract__imageHash',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalAmountTraded = 'contract__totalAmountTraded',
  ContractTotalSales = 'contract__totalSales',
  ContractTotalSupply = 'contract__totalSupply',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  Timestamp = 'timestamp',
  To = 'to',
  ToAccountUrl = 'to__accountUrl',
  ToAverageAmountSpent = 'to__averageAmountSpent',
  ToId = 'to__id',
  ToNumberOfPunksAssigned = 'to__numberOfPunksAssigned',
  ToNumberOfPunksOwned = 'to__numberOfPunksOwned',
  ToNumberOfPurchases = 'to__numberOfPurchases',
  ToNumberOfSales = 'to__numberOfSales',
  ToNumberOfTransfers = 'to__numberOfTransfers',
  ToTotalEarned = 'to__totalEarned',
  ToTotalSpent = 'to__totalSpent',
  TxHash = 'txHash',
  Type = 'type'
}

export type MetaData = {
  __typename?: 'MetaData';
  /** Contract URI */
  contractURI: Scalars['String'];
  id: Scalars['ID'];
  /** Punk image */
  image?: Maybe<Scalars['String']>;
  /** Punk */
  punk: Punk;
  /** Punk Svg image */
  svg?: Maybe<Scalars['String']>;
  tokenId: Scalars['BigInt'];
  /** URI of Punk */
  tokenURI: Scalars['String'];
  /** Punk Traits */
  traits: Array<Trait>;
};


export type MetaDataTraitsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trait_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Trait_Filter>;
};

export type MetaData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MetaData_Filter>>>;
  contractURI?: InputMaybe<Scalars['String']>;
  contractURI_contains?: InputMaybe<Scalars['String']>;
  contractURI_contains_nocase?: InputMaybe<Scalars['String']>;
  contractURI_ends_with?: InputMaybe<Scalars['String']>;
  contractURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractURI_gt?: InputMaybe<Scalars['String']>;
  contractURI_gte?: InputMaybe<Scalars['String']>;
  contractURI_in?: InputMaybe<Array<Scalars['String']>>;
  contractURI_lt?: InputMaybe<Scalars['String']>;
  contractURI_lte?: InputMaybe<Scalars['String']>;
  contractURI_not?: InputMaybe<Scalars['String']>;
  contractURI_not_contains?: InputMaybe<Scalars['String']>;
  contractURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contractURI_not_ends_with?: InputMaybe<Scalars['String']>;
  contractURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractURI_not_starts_with?: InputMaybe<Scalars['String']>;
  contractURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractURI_starts_with?: InputMaybe<Scalars['String']>;
  contractURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  image?: InputMaybe<Scalars['String']>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<MetaData_Filter>>>;
  punk?: InputMaybe<Scalars['String']>;
  punk_?: InputMaybe<Punk_Filter>;
  punk_contains?: InputMaybe<Scalars['String']>;
  punk_contains_nocase?: InputMaybe<Scalars['String']>;
  punk_ends_with?: InputMaybe<Scalars['String']>;
  punk_ends_with_nocase?: InputMaybe<Scalars['String']>;
  punk_gt?: InputMaybe<Scalars['String']>;
  punk_gte?: InputMaybe<Scalars['String']>;
  punk_in?: InputMaybe<Array<Scalars['String']>>;
  punk_lt?: InputMaybe<Scalars['String']>;
  punk_lte?: InputMaybe<Scalars['String']>;
  punk_not?: InputMaybe<Scalars['String']>;
  punk_not_contains?: InputMaybe<Scalars['String']>;
  punk_not_contains_nocase?: InputMaybe<Scalars['String']>;
  punk_not_ends_with?: InputMaybe<Scalars['String']>;
  punk_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  punk_not_in?: InputMaybe<Array<Scalars['String']>>;
  punk_not_starts_with?: InputMaybe<Scalars['String']>;
  punk_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  punk_starts_with?: InputMaybe<Scalars['String']>;
  punk_starts_with_nocase?: InputMaybe<Scalars['String']>;
  svg?: InputMaybe<Scalars['String']>;
  svg_contains?: InputMaybe<Scalars['String']>;
  svg_contains_nocase?: InputMaybe<Scalars['String']>;
  svg_ends_with?: InputMaybe<Scalars['String']>;
  svg_ends_with_nocase?: InputMaybe<Scalars['String']>;
  svg_gt?: InputMaybe<Scalars['String']>;
  svg_gte?: InputMaybe<Scalars['String']>;
  svg_in?: InputMaybe<Array<Scalars['String']>>;
  svg_lt?: InputMaybe<Scalars['String']>;
  svg_lte?: InputMaybe<Scalars['String']>;
  svg_not?: InputMaybe<Scalars['String']>;
  svg_not_contains?: InputMaybe<Scalars['String']>;
  svg_not_contains_nocase?: InputMaybe<Scalars['String']>;
  svg_not_ends_with?: InputMaybe<Scalars['String']>;
  svg_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  svg_not_in?: InputMaybe<Array<Scalars['String']>>;
  svg_not_starts_with?: InputMaybe<Scalars['String']>;
  svg_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  svg_starts_with?: InputMaybe<Scalars['String']>;
  svg_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Array<Scalars['String']>>;
  traits_?: InputMaybe<Trait_Filter>;
  traits_contains?: InputMaybe<Array<Scalars['String']>>;
  traits_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  traits_not?: InputMaybe<Array<Scalars['String']>>;
  traits_not_contains?: InputMaybe<Array<Scalars['String']>>;
  traits_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
};

export enum MetaData_OrderBy {
  ContractUri = 'contractURI',
  Id = 'id',
  Image = 'image',
  Punk = 'punk',
  PunkAverageSalePrice = 'punk__averageSalePrice',
  PunkId = 'punk__id',
  PunkNumberOfSales = 'punk__numberOfSales',
  PunkNumberOfTransfers = 'punk__numberOfTransfers',
  PunkTokenId = 'punk__tokenId',
  PunkTotalAmountSpentOnPunk = 'punk__totalAmountSpentOnPunk',
  PunkWrapped = 'punk__wrapped',
  Svg = 'svg',
  TokenId = 'tokenId',
  TokenUri = 'tokenURI',
  Traits = 'traits'
}

export type Nft = {
  /** Contract metadata */
  contract?: Maybe<Contract>;
  /** ID of current ask for Punk */
  currentAsk?: Maybe<Ask>;
  /** ID of current bid for Punk */
  currentBid?: Maybe<Bid>;
  /** All events */
  events: Array<Event>;
  id: Scalars['ID'];
  numberOfSales: Scalars['BigInt'];
  numberOfTransfers: Scalars['BigInt'];
  /** Punk owner */
  owner: Account;
  /** Punk index */
  tokenId: Scalars['BigInt'];
};


export type NftEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Event_Filter>;
};

export type Nft_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Nft_Filter>>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentAsk?: InputMaybe<Scalars['String']>;
  currentAsk_?: InputMaybe<Ask_Filter>;
  currentAsk_contains?: InputMaybe<Scalars['String']>;
  currentAsk_contains_nocase?: InputMaybe<Scalars['String']>;
  currentAsk_ends_with?: InputMaybe<Scalars['String']>;
  currentAsk_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentAsk_gt?: InputMaybe<Scalars['String']>;
  currentAsk_gte?: InputMaybe<Scalars['String']>;
  currentAsk_in?: InputMaybe<Array<Scalars['String']>>;
  currentAsk_lt?: InputMaybe<Scalars['String']>;
  currentAsk_lte?: InputMaybe<Scalars['String']>;
  currentAsk_not?: InputMaybe<Scalars['String']>;
  currentAsk_not_contains?: InputMaybe<Scalars['String']>;
  currentAsk_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentAsk_not_ends_with?: InputMaybe<Scalars['String']>;
  currentAsk_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentAsk_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentAsk_not_starts_with?: InputMaybe<Scalars['String']>;
  currentAsk_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentAsk_starts_with?: InputMaybe<Scalars['String']>;
  currentAsk_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentBid?: InputMaybe<Scalars['String']>;
  currentBid_?: InputMaybe<Bid_Filter>;
  currentBid_contains?: InputMaybe<Scalars['String']>;
  currentBid_contains_nocase?: InputMaybe<Scalars['String']>;
  currentBid_ends_with?: InputMaybe<Scalars['String']>;
  currentBid_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentBid_gt?: InputMaybe<Scalars['String']>;
  currentBid_gte?: InputMaybe<Scalars['String']>;
  currentBid_in?: InputMaybe<Array<Scalars['String']>>;
  currentBid_lt?: InputMaybe<Scalars['String']>;
  currentBid_lte?: InputMaybe<Scalars['String']>;
  currentBid_not?: InputMaybe<Scalars['String']>;
  currentBid_not_contains?: InputMaybe<Scalars['String']>;
  currentBid_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentBid_not_ends_with?: InputMaybe<Scalars['String']>;
  currentBid_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentBid_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentBid_not_starts_with?: InputMaybe<Scalars['String']>;
  currentBid_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentBid_starts_with?: InputMaybe<Scalars['String']>;
  currentBid_starts_with_nocase?: InputMaybe<Scalars['String']>;
  events_?: InputMaybe<Event_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numberOfSales?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfSales_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_not?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfTransfers?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfTransfers_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_not?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<Nft_Filter>>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Nft_OrderBy {
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractImageHash = 'contract__imageHash',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalAmountTraded = 'contract__totalAmountTraded',
  ContractTotalSales = 'contract__totalSales',
  ContractTotalSupply = 'contract__totalSupply',
  CurrentAsk = 'currentAsk',
  CurrentAskAmount = 'currentAsk__amount',
  CurrentAskId = 'currentAsk__id',
  CurrentAskOfferType = 'currentAsk__offerType',
  CurrentAskOpen = 'currentAsk__open',
  CurrentBid = 'currentBid',
  CurrentBidAmount = 'currentBid__amount',
  CurrentBidId = 'currentBid__id',
  CurrentBidOfferType = 'currentBid__offerType',
  CurrentBidOpen = 'currentBid__open',
  Events = 'events',
  Id = 'id',
  NumberOfSales = 'numberOfSales',
  NumberOfTransfers = 'numberOfTransfers',
  Owner = 'owner',
  OwnerAccountUrl = 'owner__accountUrl',
  OwnerAverageAmountSpent = 'owner__averageAmountSpent',
  OwnerId = 'owner__id',
  OwnerNumberOfPunksAssigned = 'owner__numberOfPunksAssigned',
  OwnerNumberOfPunksOwned = 'owner__numberOfPunksOwned',
  OwnerNumberOfPurchases = 'owner__numberOfPurchases',
  OwnerNumberOfSales = 'owner__numberOfSales',
  OwnerNumberOfTransfers = 'owner__numberOfTransfers',
  OwnerTotalEarned = 'owner__totalEarned',
  OwnerTotalSpent = 'owner__totalSpent',
  TokenId = 'tokenId'
}

export type Offer = {
  /** Bid/Ask for Punk in ETH */
  amount: Scalars['BigInt'];
  /** Created at. Could be ASK or BID */
  created?: Maybe<Event>;
  /** Punk owner */
  from: Account;
  id: Scalars['ID'];
  /** Punk being offered/bidded */
  nft?: Maybe<Nft>;
  offerType: OfferType;
  /** Open Status of Punk. Asks/Bids can be either Open or Closed */
  open: Scalars['Boolean'];
  /** Removed at. Could be ASK or BID */
  removed?: Maybe<Event>;
};

export enum OfferType {
  Ask = 'ASK',
  Bid = 'BID'
}

export type Offer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Offer_Filter>>>;
  created?: InputMaybe<Scalars['String']>;
  created_?: InputMaybe<Event_Filter>;
  created_contains?: InputMaybe<Scalars['String']>;
  created_contains_nocase?: InputMaybe<Scalars['String']>;
  created_ends_with?: InputMaybe<Scalars['String']>;
  created_ends_with_nocase?: InputMaybe<Scalars['String']>;
  created_gt?: InputMaybe<Scalars['String']>;
  created_gte?: InputMaybe<Scalars['String']>;
  created_in?: InputMaybe<Array<Scalars['String']>>;
  created_lt?: InputMaybe<Scalars['String']>;
  created_lte?: InputMaybe<Scalars['String']>;
  created_not?: InputMaybe<Scalars['String']>;
  created_not_contains?: InputMaybe<Scalars['String']>;
  created_not_contains_nocase?: InputMaybe<Scalars['String']>;
  created_not_ends_with?: InputMaybe<Scalars['String']>;
  created_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  created_not_in?: InputMaybe<Array<Scalars['String']>>;
  created_not_starts_with?: InputMaybe<Scalars['String']>;
  created_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  created_starts_with?: InputMaybe<Scalars['String']>;
  created_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  offerType?: InputMaybe<OfferType>;
  offerType_in?: InputMaybe<Array<OfferType>>;
  offerType_not?: InputMaybe<OfferType>;
  offerType_not_in?: InputMaybe<Array<OfferType>>;
  open?: InputMaybe<Scalars['Boolean']>;
  open_in?: InputMaybe<Array<Scalars['Boolean']>>;
  open_not?: InputMaybe<Scalars['Boolean']>;
  open_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  or?: InputMaybe<Array<InputMaybe<Offer_Filter>>>;
  removed?: InputMaybe<Scalars['String']>;
  removed_?: InputMaybe<Event_Filter>;
  removed_contains?: InputMaybe<Scalars['String']>;
  removed_contains_nocase?: InputMaybe<Scalars['String']>;
  removed_ends_with?: InputMaybe<Scalars['String']>;
  removed_ends_with_nocase?: InputMaybe<Scalars['String']>;
  removed_gt?: InputMaybe<Scalars['String']>;
  removed_gte?: InputMaybe<Scalars['String']>;
  removed_in?: InputMaybe<Array<Scalars['String']>>;
  removed_lt?: InputMaybe<Scalars['String']>;
  removed_lte?: InputMaybe<Scalars['String']>;
  removed_not?: InputMaybe<Scalars['String']>;
  removed_not_contains?: InputMaybe<Scalars['String']>;
  removed_not_contains_nocase?: InputMaybe<Scalars['String']>;
  removed_not_ends_with?: InputMaybe<Scalars['String']>;
  removed_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  removed_not_in?: InputMaybe<Array<Scalars['String']>>;
  removed_not_starts_with?: InputMaybe<Scalars['String']>;
  removed_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  removed_starts_with?: InputMaybe<Scalars['String']>;
  removed_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Offer_OrderBy {
  Amount = 'amount',
  Created = 'created',
  CreatedAmount = 'created__amount',
  CreatedBlockHash = 'created__blockHash',
  CreatedBlockNumber = 'created__blockNumber',
  CreatedId = 'created__id',
  CreatedLogNumber = 'created__logNumber',
  CreatedTimestamp = 'created__timestamp',
  CreatedTxHash = 'created__txHash',
  CreatedType = 'created__type',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  OfferType = 'offerType',
  Open = 'open',
  Removed = 'removed',
  RemovedAmount = 'removed__amount',
  RemovedBlockHash = 'removed__blockHash',
  RemovedBlockNumber = 'removed__blockNumber',
  RemovedId = 'removed__id',
  RemovedLogNumber = 'removed__logNumber',
  RemovedTimestamp = 'removed__timestamp',
  RemovedTxHash = 'removed__txHash',
  RemovedType = 'removed__type'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Punk = Nft & {
  __typename?: 'Punk';
  /** Account that claimed Punk */
  assignedTo?: Maybe<Account>;
  /** Average price for Punk across OpenSea & Rarible marketplaces */
  averageSalePrice: Scalars['BigInt'];
  /** Contract data */
  contract?: Maybe<Contract>;
  /** Current Ask for Punk */
  currentAsk?: Maybe<Ask>;
  /** Current AskCreated event */
  currentAskCreated?: Maybe<AskCreated>;
  /** Current AskRemoved event */
  currentAskRemoved?: Maybe<AskRemoved>;
  /** Current Bid for Punk */
  currentBid?: Maybe<Bid>;
  /** Current BidCreated event */
  currentBidCreated?: Maybe<BidCreated>;
  /** Current BidRemoved event */
  currentBidRemoved?: Maybe<BidRemoved>;
  /** All Punk events */
  events: Array<Event>;
  /** Punk ID */
  id: Scalars['ID'];
  /** Punk metadata */
  metadata?: Maybe<MetaData>;
  /** Number of times Punk was sold */
  numberOfSales: Scalars['BigInt'];
  /** Number of times Punk has been transferred */
  numberOfTransfers: Scalars['BigInt'];
  /** Current owner of Punk */
  owner: Account;
  /** Punk buyers */
  purchasedBy?: Maybe<Account>;
  /** Punk tokenId */
  tokenId: Scalars['BigInt'];
  /** Total amount spent purchasing Punk across OpenSea & Rarible marketplaces */
  totalAmountSpentOnPunk: Scalars['BigInt'];
  /** Account that received Punk */
  transferedTo?: Maybe<Account>;
  /** Wrap Status */
  wrapped: Scalars['Boolean'];
};


export type PunkEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Event_Filter>;
};

export type Punk_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Punk_Filter>>>;
  assignedTo?: InputMaybe<Scalars['String']>;
  assignedTo_?: InputMaybe<Account_Filter>;
  assignedTo_contains?: InputMaybe<Scalars['String']>;
  assignedTo_contains_nocase?: InputMaybe<Scalars['String']>;
  assignedTo_ends_with?: InputMaybe<Scalars['String']>;
  assignedTo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  assignedTo_gt?: InputMaybe<Scalars['String']>;
  assignedTo_gte?: InputMaybe<Scalars['String']>;
  assignedTo_in?: InputMaybe<Array<Scalars['String']>>;
  assignedTo_lt?: InputMaybe<Scalars['String']>;
  assignedTo_lte?: InputMaybe<Scalars['String']>;
  assignedTo_not?: InputMaybe<Scalars['String']>;
  assignedTo_not_contains?: InputMaybe<Scalars['String']>;
  assignedTo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  assignedTo_not_ends_with?: InputMaybe<Scalars['String']>;
  assignedTo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  assignedTo_not_in?: InputMaybe<Array<Scalars['String']>>;
  assignedTo_not_starts_with?: InputMaybe<Scalars['String']>;
  assignedTo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  assignedTo_starts_with?: InputMaybe<Scalars['String']>;
  assignedTo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  averageSalePrice?: InputMaybe<Scalars['BigInt']>;
  averageSalePrice_gt?: InputMaybe<Scalars['BigInt']>;
  averageSalePrice_gte?: InputMaybe<Scalars['BigInt']>;
  averageSalePrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  averageSalePrice_lt?: InputMaybe<Scalars['BigInt']>;
  averageSalePrice_lte?: InputMaybe<Scalars['BigInt']>;
  averageSalePrice_not?: InputMaybe<Scalars['BigInt']>;
  averageSalePrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentAsk?: InputMaybe<Scalars['String']>;
  currentAskCreated?: InputMaybe<Scalars['String']>;
  currentAskCreated_?: InputMaybe<AskCreated_Filter>;
  currentAskCreated_contains?: InputMaybe<Scalars['String']>;
  currentAskCreated_contains_nocase?: InputMaybe<Scalars['String']>;
  currentAskCreated_ends_with?: InputMaybe<Scalars['String']>;
  currentAskCreated_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentAskCreated_gt?: InputMaybe<Scalars['String']>;
  currentAskCreated_gte?: InputMaybe<Scalars['String']>;
  currentAskCreated_in?: InputMaybe<Array<Scalars['String']>>;
  currentAskCreated_lt?: InputMaybe<Scalars['String']>;
  currentAskCreated_lte?: InputMaybe<Scalars['String']>;
  currentAskCreated_not?: InputMaybe<Scalars['String']>;
  currentAskCreated_not_contains?: InputMaybe<Scalars['String']>;
  currentAskCreated_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentAskCreated_not_ends_with?: InputMaybe<Scalars['String']>;
  currentAskCreated_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentAskCreated_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentAskCreated_not_starts_with?: InputMaybe<Scalars['String']>;
  currentAskCreated_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentAskCreated_starts_with?: InputMaybe<Scalars['String']>;
  currentAskCreated_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentAskRemoved?: InputMaybe<Scalars['String']>;
  currentAskRemoved_?: InputMaybe<AskRemoved_Filter>;
  currentAskRemoved_contains?: InputMaybe<Scalars['String']>;
  currentAskRemoved_contains_nocase?: InputMaybe<Scalars['String']>;
  currentAskRemoved_ends_with?: InputMaybe<Scalars['String']>;
  currentAskRemoved_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentAskRemoved_gt?: InputMaybe<Scalars['String']>;
  currentAskRemoved_gte?: InputMaybe<Scalars['String']>;
  currentAskRemoved_in?: InputMaybe<Array<Scalars['String']>>;
  currentAskRemoved_lt?: InputMaybe<Scalars['String']>;
  currentAskRemoved_lte?: InputMaybe<Scalars['String']>;
  currentAskRemoved_not?: InputMaybe<Scalars['String']>;
  currentAskRemoved_not_contains?: InputMaybe<Scalars['String']>;
  currentAskRemoved_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentAskRemoved_not_ends_with?: InputMaybe<Scalars['String']>;
  currentAskRemoved_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentAskRemoved_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentAskRemoved_not_starts_with?: InputMaybe<Scalars['String']>;
  currentAskRemoved_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentAskRemoved_starts_with?: InputMaybe<Scalars['String']>;
  currentAskRemoved_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentAsk_?: InputMaybe<Ask_Filter>;
  currentAsk_contains?: InputMaybe<Scalars['String']>;
  currentAsk_contains_nocase?: InputMaybe<Scalars['String']>;
  currentAsk_ends_with?: InputMaybe<Scalars['String']>;
  currentAsk_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentAsk_gt?: InputMaybe<Scalars['String']>;
  currentAsk_gte?: InputMaybe<Scalars['String']>;
  currentAsk_in?: InputMaybe<Array<Scalars['String']>>;
  currentAsk_lt?: InputMaybe<Scalars['String']>;
  currentAsk_lte?: InputMaybe<Scalars['String']>;
  currentAsk_not?: InputMaybe<Scalars['String']>;
  currentAsk_not_contains?: InputMaybe<Scalars['String']>;
  currentAsk_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentAsk_not_ends_with?: InputMaybe<Scalars['String']>;
  currentAsk_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentAsk_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentAsk_not_starts_with?: InputMaybe<Scalars['String']>;
  currentAsk_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentAsk_starts_with?: InputMaybe<Scalars['String']>;
  currentAsk_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentBid?: InputMaybe<Scalars['String']>;
  currentBidCreated?: InputMaybe<Scalars['String']>;
  currentBidCreated_?: InputMaybe<BidCreated_Filter>;
  currentBidCreated_contains?: InputMaybe<Scalars['String']>;
  currentBidCreated_contains_nocase?: InputMaybe<Scalars['String']>;
  currentBidCreated_ends_with?: InputMaybe<Scalars['String']>;
  currentBidCreated_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentBidCreated_gt?: InputMaybe<Scalars['String']>;
  currentBidCreated_gte?: InputMaybe<Scalars['String']>;
  currentBidCreated_in?: InputMaybe<Array<Scalars['String']>>;
  currentBidCreated_lt?: InputMaybe<Scalars['String']>;
  currentBidCreated_lte?: InputMaybe<Scalars['String']>;
  currentBidCreated_not?: InputMaybe<Scalars['String']>;
  currentBidCreated_not_contains?: InputMaybe<Scalars['String']>;
  currentBidCreated_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentBidCreated_not_ends_with?: InputMaybe<Scalars['String']>;
  currentBidCreated_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentBidCreated_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentBidCreated_not_starts_with?: InputMaybe<Scalars['String']>;
  currentBidCreated_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentBidCreated_starts_with?: InputMaybe<Scalars['String']>;
  currentBidCreated_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentBidRemoved?: InputMaybe<Scalars['String']>;
  currentBidRemoved_?: InputMaybe<BidRemoved_Filter>;
  currentBidRemoved_contains?: InputMaybe<Scalars['String']>;
  currentBidRemoved_contains_nocase?: InputMaybe<Scalars['String']>;
  currentBidRemoved_ends_with?: InputMaybe<Scalars['String']>;
  currentBidRemoved_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentBidRemoved_gt?: InputMaybe<Scalars['String']>;
  currentBidRemoved_gte?: InputMaybe<Scalars['String']>;
  currentBidRemoved_in?: InputMaybe<Array<Scalars['String']>>;
  currentBidRemoved_lt?: InputMaybe<Scalars['String']>;
  currentBidRemoved_lte?: InputMaybe<Scalars['String']>;
  currentBidRemoved_not?: InputMaybe<Scalars['String']>;
  currentBidRemoved_not_contains?: InputMaybe<Scalars['String']>;
  currentBidRemoved_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentBidRemoved_not_ends_with?: InputMaybe<Scalars['String']>;
  currentBidRemoved_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentBidRemoved_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentBidRemoved_not_starts_with?: InputMaybe<Scalars['String']>;
  currentBidRemoved_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentBidRemoved_starts_with?: InputMaybe<Scalars['String']>;
  currentBidRemoved_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentBid_?: InputMaybe<Bid_Filter>;
  currentBid_contains?: InputMaybe<Scalars['String']>;
  currentBid_contains_nocase?: InputMaybe<Scalars['String']>;
  currentBid_ends_with?: InputMaybe<Scalars['String']>;
  currentBid_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentBid_gt?: InputMaybe<Scalars['String']>;
  currentBid_gte?: InputMaybe<Scalars['String']>;
  currentBid_in?: InputMaybe<Array<Scalars['String']>>;
  currentBid_lt?: InputMaybe<Scalars['String']>;
  currentBid_lte?: InputMaybe<Scalars['String']>;
  currentBid_not?: InputMaybe<Scalars['String']>;
  currentBid_not_contains?: InputMaybe<Scalars['String']>;
  currentBid_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currentBid_not_ends_with?: InputMaybe<Scalars['String']>;
  currentBid_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currentBid_not_in?: InputMaybe<Array<Scalars['String']>>;
  currentBid_not_starts_with?: InputMaybe<Scalars['String']>;
  currentBid_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currentBid_starts_with?: InputMaybe<Scalars['String']>;
  currentBid_starts_with_nocase?: InputMaybe<Scalars['String']>;
  events_?: InputMaybe<Event_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_?: InputMaybe<MetaData_Filter>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  numberOfSales?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfSales_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_not?: InputMaybe<Scalars['BigInt']>;
  numberOfSales_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfTransfers?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfTransfers_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_not?: InputMaybe<Scalars['BigInt']>;
  numberOfTransfers_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<Punk_Filter>>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  purchasedBy?: InputMaybe<Scalars['String']>;
  purchasedBy_?: InputMaybe<Account_Filter>;
  purchasedBy_contains?: InputMaybe<Scalars['String']>;
  purchasedBy_contains_nocase?: InputMaybe<Scalars['String']>;
  purchasedBy_ends_with?: InputMaybe<Scalars['String']>;
  purchasedBy_ends_with_nocase?: InputMaybe<Scalars['String']>;
  purchasedBy_gt?: InputMaybe<Scalars['String']>;
  purchasedBy_gte?: InputMaybe<Scalars['String']>;
  purchasedBy_in?: InputMaybe<Array<Scalars['String']>>;
  purchasedBy_lt?: InputMaybe<Scalars['String']>;
  purchasedBy_lte?: InputMaybe<Scalars['String']>;
  purchasedBy_not?: InputMaybe<Scalars['String']>;
  purchasedBy_not_contains?: InputMaybe<Scalars['String']>;
  purchasedBy_not_contains_nocase?: InputMaybe<Scalars['String']>;
  purchasedBy_not_ends_with?: InputMaybe<Scalars['String']>;
  purchasedBy_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  purchasedBy_not_in?: InputMaybe<Array<Scalars['String']>>;
  purchasedBy_not_starts_with?: InputMaybe<Scalars['String']>;
  purchasedBy_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  purchasedBy_starts_with?: InputMaybe<Scalars['String']>;
  purchasedBy_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountSpentOnPunk?: InputMaybe<Scalars['BigInt']>;
  totalAmountSpentOnPunk_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmountSpentOnPunk_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmountSpentOnPunk_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmountSpentOnPunk_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmountSpentOnPunk_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmountSpentOnPunk_not?: InputMaybe<Scalars['BigInt']>;
  totalAmountSpentOnPunk_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferedTo?: InputMaybe<Scalars['String']>;
  transferedTo_?: InputMaybe<Account_Filter>;
  transferedTo_contains?: InputMaybe<Scalars['String']>;
  transferedTo_contains_nocase?: InputMaybe<Scalars['String']>;
  transferedTo_ends_with?: InputMaybe<Scalars['String']>;
  transferedTo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transferedTo_gt?: InputMaybe<Scalars['String']>;
  transferedTo_gte?: InputMaybe<Scalars['String']>;
  transferedTo_in?: InputMaybe<Array<Scalars['String']>>;
  transferedTo_lt?: InputMaybe<Scalars['String']>;
  transferedTo_lte?: InputMaybe<Scalars['String']>;
  transferedTo_not?: InputMaybe<Scalars['String']>;
  transferedTo_not_contains?: InputMaybe<Scalars['String']>;
  transferedTo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transferedTo_not_ends_with?: InputMaybe<Scalars['String']>;
  transferedTo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transferedTo_not_in?: InputMaybe<Array<Scalars['String']>>;
  transferedTo_not_starts_with?: InputMaybe<Scalars['String']>;
  transferedTo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transferedTo_starts_with?: InputMaybe<Scalars['String']>;
  transferedTo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  wrapped?: InputMaybe<Scalars['Boolean']>;
  wrapped_in?: InputMaybe<Array<Scalars['Boolean']>>;
  wrapped_not?: InputMaybe<Scalars['Boolean']>;
  wrapped_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export enum Punk_OrderBy {
  AssignedTo = 'assignedTo',
  AssignedToAccountUrl = 'assignedTo__accountUrl',
  AssignedToAverageAmountSpent = 'assignedTo__averageAmountSpent',
  AssignedToId = 'assignedTo__id',
  AssignedToNumberOfPunksAssigned = 'assignedTo__numberOfPunksAssigned',
  AssignedToNumberOfPunksOwned = 'assignedTo__numberOfPunksOwned',
  AssignedToNumberOfPurchases = 'assignedTo__numberOfPurchases',
  AssignedToNumberOfSales = 'assignedTo__numberOfSales',
  AssignedToNumberOfTransfers = 'assignedTo__numberOfTransfers',
  AssignedToTotalEarned = 'assignedTo__totalEarned',
  AssignedToTotalSpent = 'assignedTo__totalSpent',
  AverageSalePrice = 'averageSalePrice',
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractImageHash = 'contract__imageHash',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalAmountTraded = 'contract__totalAmountTraded',
  ContractTotalSales = 'contract__totalSales',
  ContractTotalSupply = 'contract__totalSupply',
  CurrentAsk = 'currentAsk',
  CurrentAskCreated = 'currentAskCreated',
  CurrentAskCreatedAmount = 'currentAskCreated__amount',
  CurrentAskCreatedBlockHash = 'currentAskCreated__blockHash',
  CurrentAskCreatedBlockNumber = 'currentAskCreated__blockNumber',
  CurrentAskCreatedId = 'currentAskCreated__id',
  CurrentAskCreatedLogNumber = 'currentAskCreated__logNumber',
  CurrentAskCreatedTimestamp = 'currentAskCreated__timestamp',
  CurrentAskCreatedTxHash = 'currentAskCreated__txHash',
  CurrentAskCreatedType = 'currentAskCreated__type',
  CurrentAskRemoved = 'currentAskRemoved',
  CurrentAskRemovedAmount = 'currentAskRemoved__amount',
  CurrentAskRemovedBlockHash = 'currentAskRemoved__blockHash',
  CurrentAskRemovedBlockNumber = 'currentAskRemoved__blockNumber',
  CurrentAskRemovedId = 'currentAskRemoved__id',
  CurrentAskRemovedLogNumber = 'currentAskRemoved__logNumber',
  CurrentAskRemovedTimestamp = 'currentAskRemoved__timestamp',
  CurrentAskRemovedTxHash = 'currentAskRemoved__txHash',
  CurrentAskRemovedType = 'currentAskRemoved__type',
  CurrentAskAmount = 'currentAsk__amount',
  CurrentAskId = 'currentAsk__id',
  CurrentAskOfferType = 'currentAsk__offerType',
  CurrentAskOpen = 'currentAsk__open',
  CurrentBid = 'currentBid',
  CurrentBidCreated = 'currentBidCreated',
  CurrentBidCreatedAmount = 'currentBidCreated__amount',
  CurrentBidCreatedBlockHash = 'currentBidCreated__blockHash',
  CurrentBidCreatedBlockNumber = 'currentBidCreated__blockNumber',
  CurrentBidCreatedId = 'currentBidCreated__id',
  CurrentBidCreatedLogNumber = 'currentBidCreated__logNumber',
  CurrentBidCreatedTimestamp = 'currentBidCreated__timestamp',
  CurrentBidCreatedTxHash = 'currentBidCreated__txHash',
  CurrentBidCreatedType = 'currentBidCreated__type',
  CurrentBidRemoved = 'currentBidRemoved',
  CurrentBidRemovedAmount = 'currentBidRemoved__amount',
  CurrentBidRemovedBlockHash = 'currentBidRemoved__blockHash',
  CurrentBidRemovedBlockNumber = 'currentBidRemoved__blockNumber',
  CurrentBidRemovedId = 'currentBidRemoved__id',
  CurrentBidRemovedLogNumber = 'currentBidRemoved__logNumber',
  CurrentBidRemovedTimestamp = 'currentBidRemoved__timestamp',
  CurrentBidRemovedTxHash = 'currentBidRemoved__txHash',
  CurrentBidRemovedType = 'currentBidRemoved__type',
  CurrentBidAmount = 'currentBid__amount',
  CurrentBidId = 'currentBid__id',
  CurrentBidOfferType = 'currentBid__offerType',
  CurrentBidOpen = 'currentBid__open',
  Events = 'events',
  Id = 'id',
  Metadata = 'metadata',
  MetadataContractUri = 'metadata__contractURI',
  MetadataId = 'metadata__id',
  MetadataImage = 'metadata__image',
  MetadataSvg = 'metadata__svg',
  MetadataTokenId = 'metadata__tokenId',
  MetadataTokenUri = 'metadata__tokenURI',
  NumberOfSales = 'numberOfSales',
  NumberOfTransfers = 'numberOfTransfers',
  Owner = 'owner',
  OwnerAccountUrl = 'owner__accountUrl',
  OwnerAverageAmountSpent = 'owner__averageAmountSpent',
  OwnerId = 'owner__id',
  OwnerNumberOfPunksAssigned = 'owner__numberOfPunksAssigned',
  OwnerNumberOfPunksOwned = 'owner__numberOfPunksOwned',
  OwnerNumberOfPurchases = 'owner__numberOfPurchases',
  OwnerNumberOfSales = 'owner__numberOfSales',
  OwnerNumberOfTransfers = 'owner__numberOfTransfers',
  OwnerTotalEarned = 'owner__totalEarned',
  OwnerTotalSpent = 'owner__totalSpent',
  PurchasedBy = 'purchasedBy',
  PurchasedByAccountUrl = 'purchasedBy__accountUrl',
  PurchasedByAverageAmountSpent = 'purchasedBy__averageAmountSpent',
  PurchasedById = 'purchasedBy__id',
  PurchasedByNumberOfPunksAssigned = 'purchasedBy__numberOfPunksAssigned',
  PurchasedByNumberOfPunksOwned = 'purchasedBy__numberOfPunksOwned',
  PurchasedByNumberOfPurchases = 'purchasedBy__numberOfPurchases',
  PurchasedByNumberOfSales = 'purchasedBy__numberOfSales',
  PurchasedByNumberOfTransfers = 'purchasedBy__numberOfTransfers',
  PurchasedByTotalEarned = 'purchasedBy__totalEarned',
  PurchasedByTotalSpent = 'purchasedBy__totalSpent',
  TokenId = 'tokenId',
  TotalAmountSpentOnPunk = 'totalAmountSpentOnPunk',
  TransferedTo = 'transferedTo',
  TransferedToAccountUrl = 'transferedTo__accountUrl',
  TransferedToAverageAmountSpent = 'transferedTo__averageAmountSpent',
  TransferedToId = 'transferedTo__id',
  TransferedToNumberOfPunksAssigned = 'transferedTo__numberOfPunksAssigned',
  TransferedToNumberOfPunksOwned = 'transferedTo__numberOfPunksOwned',
  TransferedToNumberOfPurchases = 'transferedTo__numberOfPurchases',
  TransferedToNumberOfSales = 'transferedTo__numberOfSales',
  TransferedToNumberOfTransfers = 'transferedTo__numberOfTransfers',
  TransferedToTotalEarned = 'transferedTo__totalEarned',
  TransferedToTotalSpent = 'transferedTo__totalSpent',
  Wrapped = 'wrapped'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  ask?: Maybe<Ask>;
  askCreated?: Maybe<AskCreated>;
  askCreateds: Array<AskCreated>;
  askRemoved?: Maybe<AskRemoved>;
  askRemoveds: Array<AskRemoved>;
  asks: Array<Ask>;
  assign?: Maybe<Assign>;
  assigns: Array<Assign>;
  bid?: Maybe<Bid>;
  bidCreated?: Maybe<BidCreated>;
  bidCreateds: Array<BidCreated>;
  bidRemoved?: Maybe<BidRemoved>;
  bidRemoveds: Array<BidRemoved>;
  bids: Array<Bid>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  ctoken?: Maybe<CToken>;
  ctokens: Array<CToken>;
  epnsNotificationCounter?: Maybe<EpnsNotificationCounter>;
  epnsNotificationCounters: Array<EpnsNotificationCounter>;
  epnsPushNotification?: Maybe<EpnsPushNotification>;
  epnsPushNotifications: Array<EpnsPushNotification>;
  event?: Maybe<Event>;
  events: Array<Event>;
  metaData?: Maybe<MetaData>;
  metaDatas: Array<MetaData>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  offer?: Maybe<Offer>;
  offers: Array<Offer>;
  punk?: Maybe<Punk>;
  punks: Array<Punk>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  trait?: Maybe<Trait>;
  traits: Array<Trait>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  unwrap?: Maybe<Unwrap>;
  unwraps: Array<Unwrap>;
  userProxies: Array<UserProxy>;
  userProxy?: Maybe<UserProxy>;
  wrap?: Maybe<Wrap>;
  wraps: Array<Wrap>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryAskArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAskCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAskCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AskCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AskCreated_Filter>;
};


export type QueryAskRemovedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAskRemovedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AskRemoved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AskRemoved_Filter>;
};


export type QueryAsksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ask_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ask_Filter>;
};


export type QueryAssignArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAssignsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Assign_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Assign_Filter>;
};


export type QueryBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBidCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBidCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BidCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BidCreated_Filter>;
};


export type QueryBidRemovedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBidRemovedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BidRemoved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BidRemoved_Filter>;
};


export type QueryBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bid_Filter>;
};


export type QueryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contract_Filter>;
};


export type QueryCtokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCtokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CToken_Filter>;
};


export type QueryEpnsNotificationCounterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEpnsNotificationCountersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EpnsNotificationCounter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EpnsNotificationCounter_Filter>;
};


export type QueryEpnsPushNotificationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEpnsPushNotificationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EpnsPushNotification_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EpnsPushNotification_Filter>;
};


export type QueryEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type QueryMetaDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMetaDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetaData_Filter>;
};


export type QueryNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nft_Filter>;
};


export type QueryOfferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOffersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Offer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Offer_Filter>;
};


export type QueryPunkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPunksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Punk_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Punk_Filter>;
};


export type QuerySaleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySalesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Sale_Filter>;
};


export type QueryTraitArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTraitsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trait_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Trait_Filter>;
};


export type QueryTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type QueryUnwrapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUnwrapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Unwrap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Unwrap_Filter>;
};


export type QueryUserProxiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserProxy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserProxy_Filter>;
};


export type QueryUserProxyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWrapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWrapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Wrap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Wrap_Filter>;
};

export type Sale = Event & {
  __typename?: 'Sale';
  /** Amount in ETH */
  amount?: Maybe<Scalars['BigInt']>;
  blockHash: Scalars['Bytes'];
  /** Transaction details */
  blockNumber: Scalars['BigInt'];
  /** Contract metadata */
  contract?: Maybe<Contract>;
  /** Punk seller */
  from?: Maybe<Account>;
  id: Scalars['ID'];
  logNumber: Scalars['BigInt'];
  /** Punk being sold */
  nft?: Maybe<Nft>;
  timestamp: Scalars['BigInt'];
  /** Punk buyer */
  to?: Maybe<Account>;
  txHash: Scalars['Bytes'];
  type: EventType;
};

export type Sale_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Sale_Filter>>>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logNumber?: InputMaybe<Scalars['BigInt']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Sale_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<EventType>;
  type_in?: InputMaybe<Array<EventType>>;
  type_not?: InputMaybe<EventType>;
  type_not_in?: InputMaybe<Array<EventType>>;
};

export enum Sale_OrderBy {
  Amount = 'amount',
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractImageHash = 'contract__imageHash',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalAmountTraded = 'contract__totalAmountTraded',
  ContractTotalSales = 'contract__totalSales',
  ContractTotalSupply = 'contract__totalSupply',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  Timestamp = 'timestamp',
  To = 'to',
  ToAccountUrl = 'to__accountUrl',
  ToAverageAmountSpent = 'to__averageAmountSpent',
  ToId = 'to__id',
  ToNumberOfPunksAssigned = 'to__numberOfPunksAssigned',
  ToNumberOfPunksOwned = 'to__numberOfPunksOwned',
  ToNumberOfPurchases = 'to__numberOfPurchases',
  ToNumberOfSales = 'to__numberOfSales',
  ToNumberOfTransfers = 'to__numberOfTransfers',
  ToTotalEarned = 'to__totalEarned',
  ToTotalSpent = 'to__totalSpent',
  TxHash = 'txHash',
  Type = 'type'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  ask?: Maybe<Ask>;
  askCreated?: Maybe<AskCreated>;
  askCreateds: Array<AskCreated>;
  askRemoved?: Maybe<AskRemoved>;
  askRemoveds: Array<AskRemoved>;
  asks: Array<Ask>;
  assign?: Maybe<Assign>;
  assigns: Array<Assign>;
  bid?: Maybe<Bid>;
  bidCreated?: Maybe<BidCreated>;
  bidCreateds: Array<BidCreated>;
  bidRemoved?: Maybe<BidRemoved>;
  bidRemoveds: Array<BidRemoved>;
  bids: Array<Bid>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  ctoken?: Maybe<CToken>;
  ctokens: Array<CToken>;
  epnsNotificationCounter?: Maybe<EpnsNotificationCounter>;
  epnsNotificationCounters: Array<EpnsNotificationCounter>;
  epnsPushNotification?: Maybe<EpnsPushNotification>;
  epnsPushNotifications: Array<EpnsPushNotification>;
  event?: Maybe<Event>;
  events: Array<Event>;
  metaData?: Maybe<MetaData>;
  metaDatas: Array<MetaData>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  offer?: Maybe<Offer>;
  offers: Array<Offer>;
  punk?: Maybe<Punk>;
  punks: Array<Punk>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  trait?: Maybe<Trait>;
  traits: Array<Trait>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  unwrap?: Maybe<Unwrap>;
  unwraps: Array<Unwrap>;
  userProxies: Array<UserProxy>;
  userProxy?: Maybe<UserProxy>;
  wrap?: Maybe<Wrap>;
  wraps: Array<Wrap>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionAskArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAskCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAskCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AskCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AskCreated_Filter>;
};


export type SubscriptionAskRemovedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAskRemovedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AskRemoved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AskRemoved_Filter>;
};


export type SubscriptionAsksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Ask_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ask_Filter>;
};


export type SubscriptionAssignArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAssignsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Assign_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Assign_Filter>;
};


export type SubscriptionBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBidCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBidCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BidCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BidCreated_Filter>;
};


export type SubscriptionBidRemovedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBidRemovedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BidRemoved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BidRemoved_Filter>;
};


export type SubscriptionBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bid_Filter>;
};


export type SubscriptionContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contract_Filter>;
};


export type SubscriptionCtokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCtokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CToken_Filter>;
};


export type SubscriptionEpnsNotificationCounterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEpnsNotificationCountersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EpnsNotificationCounter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EpnsNotificationCounter_Filter>;
};


export type SubscriptionEpnsPushNotificationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEpnsPushNotificationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EpnsPushNotification_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EpnsPushNotification_Filter>;
};


export type SubscriptionEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type SubscriptionMetaDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMetaDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetaData_Filter>;
};


export type SubscriptionNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nft_Filter>;
};


export type SubscriptionOfferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOffersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Offer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Offer_Filter>;
};


export type SubscriptionPunkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPunksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Punk_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Punk_Filter>;
};


export type SubscriptionSaleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSalesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Sale_Filter>;
};


export type SubscriptionTraitArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTraitsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trait_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Trait_Filter>;
};


export type SubscriptionTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type SubscriptionUnwrapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUnwrapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Unwrap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Unwrap_Filter>;
};


export type SubscriptionUserProxiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserProxy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserProxy_Filter>;
};


export type SubscriptionUserProxyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWrapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWrapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Wrap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Wrap_Filter>;
};

export type Trait = {
  __typename?: 'Trait';
  /** Trait */
  id: Scalars['ID'];
  metaDatas: Array<MetaData>;
  /** Number of Punks with this trait */
  numberOfNfts: Scalars['BigInt'];
  type: TraitType;
};


export type TraitMetaDatasArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MetaData_Filter>;
};

export enum TraitType {
  Accessory = 'ACCESSORY',
  Type = 'TYPE'
}

export type Trait_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Trait_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  metaDatas_?: InputMaybe<MetaData_Filter>;
  numberOfNfts?: InputMaybe<Scalars['BigInt']>;
  numberOfNfts_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfNfts_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfNfts_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfNfts_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfNfts_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfNfts_not?: InputMaybe<Scalars['BigInt']>;
  numberOfNfts_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<Trait_Filter>>>;
  type?: InputMaybe<TraitType>;
  type_in?: InputMaybe<Array<TraitType>>;
  type_not?: InputMaybe<TraitType>;
  type_not_in?: InputMaybe<Array<TraitType>>;
};

export enum Trait_OrderBy {
  Id = 'id',
  MetaDatas = 'metaDatas',
  NumberOfNfts = 'numberOfNfts',
  Type = 'type'
}

export type Transfer = Event & {
  __typename?: 'Transfer';
  amount?: Maybe<Scalars['BigInt']>;
  blockHash: Scalars['Bytes'];
  /** Transaction details */
  blockNumber: Scalars['BigInt'];
  /** Contract metadata */
  contract?: Maybe<Contract>;
  /** Sender */
  from?: Maybe<Account>;
  id: Scalars['ID'];
  logNumber: Scalars['BigInt'];
  /** Punk being transferred */
  nft?: Maybe<Nft>;
  timestamp: Scalars['BigInt'];
  /** Receiver */
  to?: Maybe<Account>;
  txHash: Scalars['Bytes'];
  type: EventType;
};

export type Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Transfer_Filter>>>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logNumber?: InputMaybe<Scalars['BigInt']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Transfer_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<EventType>;
  type_in?: InputMaybe<Array<EventType>>;
  type_not?: InputMaybe<EventType>;
  type_not_in?: InputMaybe<Array<EventType>>;
};

export enum Transfer_OrderBy {
  Amount = 'amount',
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractImageHash = 'contract__imageHash',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalAmountTraded = 'contract__totalAmountTraded',
  ContractTotalSales = 'contract__totalSales',
  ContractTotalSupply = 'contract__totalSupply',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  Timestamp = 'timestamp',
  To = 'to',
  ToAccountUrl = 'to__accountUrl',
  ToAverageAmountSpent = 'to__averageAmountSpent',
  ToId = 'to__id',
  ToNumberOfPunksAssigned = 'to__numberOfPunksAssigned',
  ToNumberOfPunksOwned = 'to__numberOfPunksOwned',
  ToNumberOfPurchases = 'to__numberOfPurchases',
  ToNumberOfSales = 'to__numberOfSales',
  ToNumberOfTransfers = 'to__numberOfTransfers',
  ToTotalEarned = 'to__totalEarned',
  ToTotalSpent = 'to__totalSpent',
  TxHash = 'txHash',
  Type = 'type'
}

export type Unwrap = Event & {
  __typename?: 'Unwrap';
  amount?: Maybe<Scalars['BigInt']>;
  blockHash: Scalars['Bytes'];
  /** Transaction details */
  blockNumber: Scalars['BigInt'];
  /** Contract metadata */
  contract?: Maybe<Contract>;
  /** Account that unwrapped Punk */
  from?: Maybe<Account>;
  id: Scalars['ID'];
  logNumber: Scalars['BigInt'];
  /** Punk being unwrapped */
  nft?: Maybe<Nft>;
  timestamp: Scalars['BigInt'];
  to?: Maybe<Account>;
  txHash: Scalars['Bytes'];
  type: EventType;
};

export type Unwrap_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Unwrap_Filter>>>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logNumber?: InputMaybe<Scalars['BigInt']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Unwrap_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<EventType>;
  type_in?: InputMaybe<Array<EventType>>;
  type_not?: InputMaybe<EventType>;
  type_not_in?: InputMaybe<Array<EventType>>;
};

export enum Unwrap_OrderBy {
  Amount = 'amount',
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractImageHash = 'contract__imageHash',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalAmountTraded = 'contract__totalAmountTraded',
  ContractTotalSales = 'contract__totalSales',
  ContractTotalSupply = 'contract__totalSupply',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  Timestamp = 'timestamp',
  To = 'to',
  ToAccountUrl = 'to__accountUrl',
  ToAverageAmountSpent = 'to__averageAmountSpent',
  ToId = 'to__id',
  ToNumberOfPunksAssigned = 'to__numberOfPunksAssigned',
  ToNumberOfPunksOwned = 'to__numberOfPunksOwned',
  ToNumberOfPurchases = 'to__numberOfPurchases',
  ToNumberOfSales = 'to__numberOfSales',
  ToNumberOfTransfers = 'to__numberOfTransfers',
  ToTotalEarned = 'to__totalEarned',
  ToTotalSpent = 'to__totalSpent',
  TxHash = 'txHash',
  Type = 'type'
}

export type UserProxy = {
  __typename?: 'UserProxy';
  blockHash: Scalars['Bytes'];
  /** Transaction details */
  blockNumber: Scalars['BigInt'];
  /** Contract Address of UserProxy */
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  txHash: Scalars['Bytes'];
  /** Account that owns the Proxy */
  user: Account;
};

export type UserProxy_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserProxy_Filter>>>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<UserProxy_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<Account_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum UserProxy_OrderBy {
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Id = 'id',
  Timestamp = 'timestamp',
  TxHash = 'txHash',
  User = 'user',
  UserAccountUrl = 'user__accountUrl',
  UserAverageAmountSpent = 'user__averageAmountSpent',
  UserId = 'user__id',
  UserNumberOfPunksAssigned = 'user__numberOfPunksAssigned',
  UserNumberOfPunksOwned = 'user__numberOfPunksOwned',
  UserNumberOfPurchases = 'user__numberOfPurchases',
  UserNumberOfSales = 'user__numberOfSales',
  UserNumberOfTransfers = 'user__numberOfTransfers',
  UserTotalEarned = 'user__totalEarned',
  UserTotalSpent = 'user__totalSpent'
}

export type Wrap = Event & {
  __typename?: 'Wrap';
  amount?: Maybe<Scalars['BigInt']>;
  blockHash: Scalars['Bytes'];
  /** Transaction details */
  blockNumber: Scalars['BigInt'];
  /** Contract metadata */
  contract?: Maybe<Contract>;
  /** Account that wrapped Punk */
  from?: Maybe<Account>;
  id: Scalars['ID'];
  logNumber: Scalars['BigInt'];
  /** Punk being wrapped */
  nft?: Maybe<Nft>;
  timestamp: Scalars['BigInt'];
  to?: Maybe<Account>;
  txHash: Scalars['Bytes'];
  type: EventType;
};

export type Wrap_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<Wrap_Filter>>>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  logNumber?: InputMaybe<Scalars['BigInt']>;
  logNumber_gt?: InputMaybe<Scalars['BigInt']>;
  logNumber_gte?: InputMaybe<Scalars['BigInt']>;
  logNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logNumber_lt?: InputMaybe<Scalars['BigInt']>;
  logNumber_lte?: InputMaybe<Scalars['BigInt']>;
  logNumber_not?: InputMaybe<Scalars['BigInt']>;
  logNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft?: InputMaybe<Scalars['String']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_ends_with?: InputMaybe<Scalars['String']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_gt?: InputMaybe<Scalars['String']>;
  nft_gte?: InputMaybe<Scalars['String']>;
  nft_in?: InputMaybe<Array<Scalars['String']>>;
  nft_lt?: InputMaybe<Scalars['String']>;
  nft_lte?: InputMaybe<Scalars['String']>;
  nft_not?: InputMaybe<Scalars['String']>;
  nft_not_contains?: InputMaybe<Scalars['String']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  nft_starts_with?: InputMaybe<Scalars['String']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Wrap_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  type?: InputMaybe<EventType>;
  type_in?: InputMaybe<Array<EventType>>;
  type_not?: InputMaybe<EventType>;
  type_not_in?: InputMaybe<Array<EventType>>;
};

export enum Wrap_OrderBy {
  Amount = 'amount',
  BlockHash = 'blockHash',
  BlockNumber = 'blockNumber',
  Contract = 'contract',
  ContractId = 'contract__id',
  ContractImageHash = 'contract__imageHash',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTotalAmountTraded = 'contract__totalAmountTraded',
  ContractTotalSales = 'contract__totalSales',
  ContractTotalSupply = 'contract__totalSupply',
  From = 'from',
  FromAccountUrl = 'from__accountUrl',
  FromAverageAmountSpent = 'from__averageAmountSpent',
  FromId = 'from__id',
  FromNumberOfPunksAssigned = 'from__numberOfPunksAssigned',
  FromNumberOfPunksOwned = 'from__numberOfPunksOwned',
  FromNumberOfPurchases = 'from__numberOfPurchases',
  FromNumberOfSales = 'from__numberOfSales',
  FromNumberOfTransfers = 'from__numberOfTransfers',
  FromTotalEarned = 'from__totalEarned',
  FromTotalSpent = 'from__totalSpent',
  Id = 'id',
  LogNumber = 'logNumber',
  Nft = 'nft',
  NftId = 'nft__id',
  NftNumberOfSales = 'nft__numberOfSales',
  NftNumberOfTransfers = 'nft__numberOfTransfers',
  NftTokenId = 'nft__tokenId',
  Timestamp = 'timestamp',
  To = 'to',
  ToAccountUrl = 'to__accountUrl',
  ToAverageAmountSpent = 'to__averageAmountSpent',
  ToId = 'to__id',
  ToNumberOfPunksAssigned = 'to__numberOfPunksAssigned',
  ToNumberOfPunksOwned = 'to__numberOfPunksOwned',
  ToNumberOfPurchases = 'to__numberOfPurchases',
  ToNumberOfSales = 'to__numberOfSales',
  ToNumberOfTransfers = 'to__numberOfTransfers',
  ToTotalEarned = 'to__totalEarned',
  ToTotalSpent = 'to__totalSpent',
  TxHash = 'txHash',
  Type = 'type'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetInventoryQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type GetInventoryQuery = { __typename?: 'Query', punks: Array<{ __typename?: 'Punk', tokenId: any, metadata?: { __typename?: 'MetaData', svg?: string | null, traits: Array<{ __typename?: 'Trait', id: string }> } | null }> };


export const GetInventoryDocument = gql`
    query getInventory($address: String!) {
  punks(where: {owner: $address}) {
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getInventory(variables: GetInventoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetInventoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetInventoryQuery>(GetInventoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getInventory', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;