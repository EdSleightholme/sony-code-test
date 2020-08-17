import React from 'react';

interface IProps {
  title: string;
  done: boolean;
  toDelate: () => void;
}

export const ListItem = ({ title, done, toDelate }: IProps) => {
  return (
    <div>
      {title}
      {done && 'DONE'}
      <div onClick={toDelate}>DELETE TASK </div>
    </div>
  );
};
