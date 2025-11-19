export interface ICollectionState {
  collection: ICollection[];
  addToCollection: (item: ICollection) => Promise<void>;
  removePokemon: (name: string) => Promise<void>;
}

export interface ICollection {
  name: string;
  sprites: {
    front_default: string;
  };
}
