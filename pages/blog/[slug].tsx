import components from 'components/MDXComponents';
import type { Blog } from 'contentlayer/generated';
import { allBlogs, allCategories } from 'contentlayer/generated';
import BlogLayout from 'layouts/blog';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Post({ post, categories }: { post: Blog; categories:any[] }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post} categories={categories}>
      <Component
        components={
          {
            ...components,
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((post) => ({ params: { slug: post.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  const categories = allCategories.filter((cat) => post.categories.includes(cat.slug));
  return { props: { post, categories } };
}
