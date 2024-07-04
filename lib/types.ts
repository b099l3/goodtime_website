export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  count: number;
};

export type TopViews = {
  slug: string;
  views: string;
};

export type Views = {
  total: number;
};

export type TopPostViews = {
  topViews: TopViews[];
};
