export namespace UsersRepository {}
export namespace UsersService {}
export namespace TasksRepository {}
export namespace TasksService {}
export namespace BoardsRepository {}
export namespace BoardsService {}

export type TUser = {
  id: string;
  name: string;
  login: string;
  password: string;
};

export type TTask = {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string;
};

export type TColumn = {
  id: string;
  title: string;
  order: number;
};

export type TBoard = {
  id: string;
  title: string;
  columns: Array<TColumn | null>;
};


