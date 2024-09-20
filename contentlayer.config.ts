import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMdxCodeMeta from 'remark-mdx-code-meta';



const computedFields: ComputedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
};

const Category = defineDocumentType(() => ({
  name: 'Category',
  filePathPattern: 'category/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields
}));

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: true },
    categories:{ type: 'list', of: { type: 'string' }, required: true },
  },
  computedFields
}));

const Newsletter = defineDocumentType(() => ({
  name: 'Newsletter',
  filePathPattern: 'newsletter/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: true }
  },
  computedFields
}));

const Event = defineDocumentType(() => ({
  name: 'Event',
  filePathPattern: 'events/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    distance: { type: 'list', of: { type: 'string' }, required: true },
    time: { type: 'list', of: { type: 'string' }, required: true },
    logo: { type: 'string', required: true }
  },
  computedFields
}));

const OtherPage = defineDocumentType(() => ({
  name: 'OtherPage',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true }
  },
  computedFields
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Newsletter, Event, OtherPage, Category],
  mdx: {
    remarkPlugins: [
      remarkMdxCodeMeta,
      remarkGfm
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
});

export default contentLayerConfig;
