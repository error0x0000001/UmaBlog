import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <>
    <div className="container divide-y divide-gray-400 dark:divide-gray-700 max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 ">
        <div className="pace-y-2 pb-6 pt-6 md:space-y-5">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="pb-3 text-lg leading-7 text-gray-700 dark:text-gray-400 md:pb-0">
          Welcome to my blog, where I share my experiences and insights in the world of technology. As a student with a passion for problem-solving and creativity, I love exploring new ideas and discovering the latest trends in this rapidly changing field. In this blog, I share my thoughts on various topics, from projects I have worked on to emerging technologies and industry news. Join me on this exciting journey and stay up-to-date with the latest developments in the tech world.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-3 pt-6 ">
      <div className="col-span-12 col-start-1 sm:col-span-8 ">
        <div className="flex-1 rounded-3xl bg-black p-[1px] transition duration-300 hover:shadow-2xl hover:shadow-slate-800">
        {displayPosts?.length > 0 ? (
            <ul className="flex h-full flex-col justify-between divide-y divide-gray-400 rounded-3xl bg-slate-200 px-6 dark:divide-gray-700 dark:bg-slate-950">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          </div>
        <QueryPagination
            totalPages={totalPages}
            className="justify-end mt-4"
          />
      </div>
      <div className="bg-gray-400 rounded-3xl p-[1px] col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
        <Card className="rounded-3xl bg-slate-200 ">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((tag) => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
    </>
  );
}
