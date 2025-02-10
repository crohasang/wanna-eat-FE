import { css } from '@emotion/react';

interface TagListProps {
  tags: string[];
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      `}
    >
      {tags.map((tag, index) => (
        <span
          key={index}
          css={css`
            background: rgba(255, 102, 102, 0.1);
            color: #f66;
            padding: 4px 8px;
            border-radius: 8px;
            font-size: 12px;
            white-space: nowrap;
          `}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
