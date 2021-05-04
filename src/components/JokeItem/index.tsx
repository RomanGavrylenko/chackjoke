import React, { FC } from 'react';
import classNames from 'classnames';
import { IJokeItem } from 'store/jokes/types';
import './index.css';

interface JokeItemProps extends IJokeItem {
  className?: string;
}

export const JokeItem: FC<JokeItemProps> = ({ value }) => (
  <li className={classNames('joke-item', classNames)}>{value}</li>
)
