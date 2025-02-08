import { css } from '@emotion/react';
import { Row } from '../commons/Flex';

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

const TagFilter = ({ tags, selectedTag, onSelectTag }: TagFilterProps) => {
  return (
    <Row
      css={css`
        gap: 8px;
        padding: 0 5%;
        overflow-x: auto;
        scrollbar-width: none;
      `}
    >
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelectTag(selectedTag === tag ? null : tag)}
          css={css`
            flex: 0 0 auto;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            border: 1px solid ${selectedTag === tag ? '#ff6666' : '#ddd'};
            background-color: ${selectedTag === tag ? '#ffebeb' : 'white'};
            color: ${selectedTag === tag ? '#ff6666' : '#666'};
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: #ffeaea;
            }
          `}
        >
          {tag}
        </button>
      ))}
    </Row>
  );
};

export default TagFilter;
