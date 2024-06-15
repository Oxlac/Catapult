import { getRoot, IStateTreeNode } from "mobx-state-tree"
import { PersistRootStore, PersistRootStoreModel, RootStore, RootStoreModel } from "../RootStores"

/**
 * Returns a RootStore object in strongly typed way
 * for stores to access other stores.
 * @param {IStateTreeNode} self - The store instance.
 * @returns {PersistRootStore} - The RootStore instance.
 */
export const getPersistentRootStore = (self: IStateTreeNode): PersistRootStore => {
  return getRoot<typeof PersistRootStoreModel>(self)
}

export const getRootStore = (self: IStateTreeNode): RootStore => {
  return getRoot<typeof RootStoreModel>(self)
}
