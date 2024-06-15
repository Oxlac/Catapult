import { Instance, SnapshotOut, types } from "mobx-state-tree";

/**
 * Anything inside this rootstore will persist between app launches.
 */
export const PersistRootStoreModel = types.model("RootStore").props({});

/**
 * The PersistRootStore instance.
 */
export interface PersistRootStore
  extends Instance<typeof PersistRootStoreModel> {}
/**
 * The data of a PersistRootStore.
 */
export interface PersistRootStoreSnapshot
  extends SnapshotOut<typeof PersistRootStoreModel> {}

/**
 *
 * Anything Store inside this rootsore will not persist between app launches.
 * Use this as a temporary cache for data from API calls.
 */
export const RootStoreModel = types.model("RootStore").props({});

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
