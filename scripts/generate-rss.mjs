import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/index.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Good Time Running Club',
    site_url: 'https://goodtimerunning.co.uk',
    feed_url: 'https://goodtimerunning.co.uk/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://goodtimerunning.co.uk/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
