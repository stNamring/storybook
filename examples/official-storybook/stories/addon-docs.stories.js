import React from 'react';
import notes from './notes/notes.md';
import mdxNotes from './notes/notes.stories.mdx';
import DocgenButton from '../components/DocgenButton';

export default {
  title: 'Addons|Docs/stories',
  parameters: {
    component: DocgenButton,
  },
};

export const basic = () => <div>Click docs tab to see basic docs</div>;

export const withNotes = () => <div>Click docs tab to see DocsPage docs</div>;
withNotes.title = 'with notes';
withNotes.parameters = {
  notes,
};

export const withInfo = () => <div>Click docs tab to see DocsPage docs</div>;
withInfo.title = 'with info';
withInfo.parameters = {
  info: 'some user info string',
};

export const mdxOverride = () => <div>Click docs tab to see MDX-overridden docs</div>;
mdxOverride.title = 'mdx override';
mdxOverride.parameters = {
  docs: mdxNotes && mdxNotes.parameters && mdxNotes.parameters.docs,
};

export const jsxOverride = () => <div>Click docs tab to see JSX-overridden docs</div>;
jsxOverride.title = 'jsx override';
jsxOverride.parameters = {
  docs: () => <div>Hello docs</div>,
};
