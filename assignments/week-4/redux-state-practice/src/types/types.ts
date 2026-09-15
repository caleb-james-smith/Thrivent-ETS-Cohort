export interface Article {
  id: string;
  title: string;
  category: string;
  saved: boolean;
}

export type ArticlesState = {
  articles: Article[];
};

export interface ArticleCardProps {
  article: Article;
}

export interface ArticleListProps {
  articles: Article[];
}
