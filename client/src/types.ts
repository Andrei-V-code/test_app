export type Data = {
  description: string,
  id: number,
  name: string
}

export type Items = {
  items: Data[]
}

export type ButtonProps = {
  onClick: (id: number | string) => void,
  id: number | string,
  disabled: boolean,
  children: string
}

export type HeaderProps = {
  text: string[] | string,
  handleSort: (value: "ASC" | "DESC") => void,
  sort: string,
  query: string,
  setQuery: (event: {}) => void
}

type Item = {
  id: string,
  name: string,
  description: string
}

export type ItemProps = {
  id: string | number,
  item: Item,
  onClick: (id: string) => void,
  isactive: boolean
}

export type ChildrenProps = {
  children: string | string[]
}

export type ItemType = {
  id: number;
  name: string;
  description: string;
};
