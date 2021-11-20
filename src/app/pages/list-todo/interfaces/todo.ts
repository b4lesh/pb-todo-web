export interface Todo extends TodoPath {
  id: number;
  // Порядковый номер, если пользователь захочет его поменять местами
}

export interface TodoPath {
  text: string;
  checked: boolean;
}
