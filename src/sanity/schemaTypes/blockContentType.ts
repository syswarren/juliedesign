import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon, CodeIcon} from '@sanity/icons'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    // Code block for syntax highlighting
    defineArrayMember({
      type: 'object',
      name: 'codeBlock',
      icon: CodeIcon,
      title: 'Code Block',
      fields: [
        {
          name: 'code',
          type: 'text',
          title: 'Code',
          description: 'Your code snippet',
          rows: 10,
        },
        {
          name: 'filename',
          type: 'string',
          title: 'Filename (optional)',
          description: 'e.g., app.js, styles.css, etc.',
        },
        {
          name: 'language',
          type: 'string',
          title: 'Language',
          description: 'Programming language for syntax highlighting',
          options: {
            list: [
              {title: 'JavaScript', value: 'javascript'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'JSX', value: 'jsx'},
              {title: 'TSX', value: 'tsx'},
              {title: 'HTML', value: 'markup'},
              {title: 'CSS', value: 'css'},
              {title: 'JSON', value: 'json'},
              {title: 'Markdown', value: 'markdown'},
              {title: 'Python', value: 'python'},
              {title: 'Bash', value: 'bash'},
              {title: 'SQL', value: 'sql'},
              {title: 'Plain Text', value: 'text'},
            ],
          },
        },
      ],
      preview: {
        select: {
          title: 'filename',
          subtitle: 'language',
          code: 'code',
        },
        prepare(selection) {
          const {title, subtitle, code} = selection
          return {
            title: title || 'Code Block',
            subtitle: subtitle ? `${subtitle} code` : 'Code',
            media: CodeIcon,
          }
        },
      },
    }),
  ],
})
