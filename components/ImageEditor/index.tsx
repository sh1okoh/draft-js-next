import Editor from '@draft-js-plugins/editor';
import '@draft-js-plugins/image/lib/plugin.css';
import createImagePlugin from '@draft-js-plugins/image';
import React, { useState } from 'react';
import { convertFromRaw, EditorState, RawDraftContentState } from 'draft-js';
import imageEditorStyles from './imageEditorStyle.module.css';

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin]

const ImageEditor = () => {
  const [editorState, setEditorState] = useState({});
  const initialState: RawDraftContentState = {
    entityMap: {
      0: {
        type: 'IMAGE',
        mutability: 'IMMUTABLE',
        data: {
          src: 'https://dummyimage.com/600x400/000000/fff',
        },
      },
    },
    blocks: [
      {
        key: '9gm3s',
        text:
          'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ov7r',
        text: ' ',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 0,
          },
        ],
        data: {},
      },
      {
        key: 'e23a8',
        text: 'See advanced examples further down …',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
  }

  const state = {
    editorState: EditorState.createWithContent(convertFromRaw(initialState)),
  };

  const onChange = (editorState: EditorState) => {
    setEditorState(editorState)
  }

  return (
    <div>
    <div className={imageEditorStyles.editor}>
      <Editor
        editorState={state.editorState}
        onChange={(v) => console.log('v', v)}
        plugins={plugins}
      />
    </div>
  </div>
  )
}

export default ImageEditor;