/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PoolFactoryInterface extends ethers.utils.Interface {
  functions: {
    "SCALING_FACTOR()": FunctionFragment;
    "changeShkoobyRewardsForLpPools(uint256)": FunctionFragment;
    "changeShkoobyRewardsForShkoobyPools(uint256)": FunctionFragment;
    "claimedShkoobyRewardsForLpPools()": FunctionFragment;
    "claimedShkoobyRewardsForShkoobyPools()": FunctionFragment;
    "emergencyWithdrawRewardBalance(address)": FunctionFragment;
    "flushReward(address,uint256)": FunctionFragment;
    "getPoolApr(address)": FunctionFragment;
    "getPoolShare(address)": FunctionFragment;
    "getTotalTVLWeight()": FunctionFragment;
    "owner()": FunctionFragment;
    "poolNumberToPoolAddress(uint256)": FunctionFragment;
    "pools(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "shkoobyRewardsForLpPools()": FunctionFragment;
    "shkoobyRewardsForShkoobyPools()": FunctionFragment;
    "totalPools()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateTVL(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "SCALING_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeShkoobyRewardsForLpPools",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeShkoobyRewardsForShkoobyPools",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimedShkoobyRewardsForLpPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimedShkoobyRewardsForShkoobyPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdrawRewardBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "flushReward",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getPoolApr", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getPoolShare",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalTVLWeight",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolNumberToPoolAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pools", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shkoobyRewardsForLpPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shkoobyRewardsForShkoobyPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTVL",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "SCALING_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeShkoobyRewardsForLpPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeShkoobyRewardsForShkoobyPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimedShkoobyRewardsForLpPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimedShkoobyRewardsForShkoobyPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdrawRewardBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "flushReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPoolApr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalTVLWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolNumberToPoolAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shkoobyRewardsForLpPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shkoobyRewardsForShkoobyPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalPools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateTVL", data: BytesLike): Result;

  events: {
    "CreatePool(uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "UpdatePoolTVL(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreatePool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatePoolTVL"): EventFragment;
}

export class PoolFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PoolFactoryInterface;

  functions: {
    SCALING_FACTOR(overrides?: CallOverrides): Promise<[number]>;

    "SCALING_FACTOR()"(overrides?: CallOverrides): Promise<[number]>;

    changeShkoobyRewardsForLpPools(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "changeShkoobyRewardsForLpPools(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeShkoobyRewardsForShkoobyPools(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "changeShkoobyRewardsForShkoobyPools(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimedShkoobyRewardsForLpPools(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "claimedShkoobyRewardsForLpPools()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimedShkoobyRewardsForShkoobyPools(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "claimedShkoobyRewardsForShkoobyPools()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    emergencyWithdrawRewardBalance(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "emergencyWithdrawRewardBalance(address)"(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    flushReward(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "flushReward(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPoolApr(pool: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "getPoolApr(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPoolShare(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    "getPoolShare(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    getTotalTVLWeight(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        shkoobyPoolWeight: BigNumber;
        lpPoolWeight: BigNumber;
      }
    >;

    "getTotalTVLWeight()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        shkoobyPoolWeight: BigNumber;
        lpPoolWeight: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    poolNumberToPoolAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "poolNumberToPoolAddress(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    pools(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, boolean, boolean] & {
        tvl: BigNumber;
        weight: number;
        isPool: boolean;
        shkoobyPool: boolean;
      }
    >;

    "pools(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, boolean, boolean] & {
        tvl: BigNumber;
        weight: number;
        isPool: boolean;
        shkoobyPool: boolean;
      }
    >;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    "rewardToken()"(overrides?: CallOverrides): Promise<[string]>;

    shkoobyRewardsForLpPools(overrides?: CallOverrides): Promise<[BigNumber]>;

    "shkoobyRewardsForLpPools()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    shkoobyRewardsForShkoobyPools(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "shkoobyRewardsForShkoobyPools()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalPools(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalPools()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateTVL(
      tvl: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateTVL(uint256)"(
      tvl: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  SCALING_FACTOR(overrides?: CallOverrides): Promise<number>;

  "SCALING_FACTOR()"(overrides?: CallOverrides): Promise<number>;

  changeShkoobyRewardsForLpPools(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "changeShkoobyRewardsForLpPools(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeShkoobyRewardsForShkoobyPools(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "changeShkoobyRewardsForShkoobyPools(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimedShkoobyRewardsForLpPools(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "claimedShkoobyRewardsForLpPools()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimedShkoobyRewardsForShkoobyPools(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "claimedShkoobyRewardsForShkoobyPools()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  emergencyWithdrawRewardBalance(
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "emergencyWithdrawRewardBalance(address)"(
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  flushReward(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "flushReward(address,uint256)"(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPoolApr(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getPoolApr(address)"(
    pool: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPoolShare(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getPoolShare(address)"(
    pool: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalTVLWeight(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      shkoobyPoolWeight: BigNumber;
      lpPoolWeight: BigNumber;
    }
  >;

  "getTotalTVLWeight()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      shkoobyPoolWeight: BigNumber;
      lpPoolWeight: BigNumber;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  poolNumberToPoolAddress(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "poolNumberToPoolAddress(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  pools(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, boolean, boolean] & {
      tvl: BigNumber;
      weight: number;
      isPool: boolean;
      shkoobyPool: boolean;
    }
  >;

  "pools(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, boolean, boolean] & {
      tvl: BigNumber;
      weight: number;
      isPool: boolean;
      shkoobyPool: boolean;
    }
  >;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  "rewardToken()"(overrides?: CallOverrides): Promise<string>;

  shkoobyRewardsForLpPools(overrides?: CallOverrides): Promise<BigNumber>;

  "shkoobyRewardsForLpPools()"(overrides?: CallOverrides): Promise<BigNumber>;

  shkoobyRewardsForShkoobyPools(overrides?: CallOverrides): Promise<BigNumber>;

  "shkoobyRewardsForShkoobyPools()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalPools(overrides?: CallOverrides): Promise<BigNumber>;

  "totalPools()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateTVL(
    tvl: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateTVL(uint256)"(
    tvl: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    SCALING_FACTOR(overrides?: CallOverrides): Promise<number>;

    "SCALING_FACTOR()"(overrides?: CallOverrides): Promise<number>;

    changeShkoobyRewardsForLpPools(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeShkoobyRewardsForLpPools(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeShkoobyRewardsForShkoobyPools(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeShkoobyRewardsForShkoobyPools(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimedShkoobyRewardsForLpPools(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimedShkoobyRewardsForLpPools()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimedShkoobyRewardsForShkoobyPools(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimedShkoobyRewardsForShkoobyPools()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    emergencyWithdrawRewardBalance(
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "emergencyWithdrawRewardBalance(address)"(
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    flushReward(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "flushReward(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getPoolApr(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getPoolApr(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolShare(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getPoolShare(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalTVLWeight(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        shkoobyPoolWeight: BigNumber;
        lpPoolWeight: BigNumber;
      }
    >;

    "getTotalTVLWeight()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        shkoobyPoolWeight: BigNumber;
        lpPoolWeight: BigNumber;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    poolNumberToPoolAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "poolNumberToPoolAddress(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    pools(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, boolean, boolean] & {
        tvl: BigNumber;
        weight: number;
        isPool: boolean;
        shkoobyPool: boolean;
      }
    >;

    "pools(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, boolean, boolean] & {
        tvl: BigNumber;
        weight: number;
        isPool: boolean;
        shkoobyPool: boolean;
      }
    >;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    "rewardToken()"(overrides?: CallOverrides): Promise<string>;

    shkoobyRewardsForLpPools(overrides?: CallOverrides): Promise<BigNumber>;

    "shkoobyRewardsForLpPools()"(overrides?: CallOverrides): Promise<BigNumber>;

    shkoobyRewardsForShkoobyPools(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "shkoobyRewardsForShkoobyPools()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalPools(overrides?: CallOverrides): Promise<BigNumber>;

    "totalPools()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTVL(tvl: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "updateTVL(uint256)"(
      tvl: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CreatePool(
      poolNumber: BigNumberish | null,
      pool: string | null
    ): TypedEventFilter<
      [BigNumber, string],
      { poolNumber: BigNumber; pool: string }
    >;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    UpdatePoolTVL(
      pool: string | null,
      tvl: null
    ): TypedEventFilter<[string, BigNumber], { pool: string; tvl: BigNumber }>;
  };

  estimateGas: {
    SCALING_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    "SCALING_FACTOR()"(overrides?: CallOverrides): Promise<BigNumber>;

    changeShkoobyRewardsForLpPools(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "changeShkoobyRewardsForLpPools(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeShkoobyRewardsForShkoobyPools(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "changeShkoobyRewardsForShkoobyPools(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimedShkoobyRewardsForLpPools(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimedShkoobyRewardsForLpPools()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimedShkoobyRewardsForShkoobyPools(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimedShkoobyRewardsForShkoobyPools()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    emergencyWithdrawRewardBalance(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "emergencyWithdrawRewardBalance(address)"(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    flushReward(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "flushReward(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPoolApr(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getPoolApr(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolShare(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getPoolShare(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalTVLWeight(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalTVLWeight()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    poolNumberToPoolAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "poolNumberToPoolAddress(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pools(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "pools(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    shkoobyRewardsForLpPools(overrides?: CallOverrides): Promise<BigNumber>;

    "shkoobyRewardsForLpPools()"(overrides?: CallOverrides): Promise<BigNumber>;

    shkoobyRewardsForShkoobyPools(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "shkoobyRewardsForShkoobyPools()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalPools(overrides?: CallOverrides): Promise<BigNumber>;

    "totalPools()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateTVL(
      tvl: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateTVL(uint256)"(
      tvl: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    SCALING_FACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SCALING_FACTOR()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeShkoobyRewardsForLpPools(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "changeShkoobyRewardsForLpPools(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeShkoobyRewardsForShkoobyPools(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "changeShkoobyRewardsForShkoobyPools(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimedShkoobyRewardsForLpPools(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimedShkoobyRewardsForLpPools()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimedShkoobyRewardsForShkoobyPools(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimedShkoobyRewardsForShkoobyPools()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    emergencyWithdrawRewardBalance(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "emergencyWithdrawRewardBalance(address)"(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    flushReward(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "flushReward(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPoolApr(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPoolApr(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolShare(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPoolShare(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalTVLWeight(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTotalTVLWeight()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolNumberToPoolAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "poolNumberToPoolAddress(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pools(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pools(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shkoobyRewardsForLpPools(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "shkoobyRewardsForLpPools()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    shkoobyRewardsForShkoobyPools(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "shkoobyRewardsForShkoobyPools()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalPools()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateTVL(
      tvl: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateTVL(uint256)"(
      tvl: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
