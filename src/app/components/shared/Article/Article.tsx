import { ReactNode } from 'react';
import s from './Article.module.css';
import clsx from 'clsx';

export interface ArticleProps {
  children: ReactNode;
  id?: string;
  additionalClass?: string;
}
const Article = ({ children, id, additionalClass }: ArticleProps) => {
  return (
    <article id={id} className={clsx(s.wrap, additionalClass)}>
      {children}
    </article>
  );
};

export default Article;
