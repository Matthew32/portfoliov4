import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts } from "../../lib/getPost";
import ContainerBlock from "../../components/containerBlock";

function Posts({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
           <ContainerBlock>
                 <div className="relative z-10 rounded-md shadow-md bg-[#B8DBF7] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mt-3 mb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
      
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-10">
            <Link
              as={`/blog/${post.slug}`}
              href="/blog/[slug]"
              className="text-lg leading-6 font-bold"
            >
              {post.title}
            </Link>
            <p>{post.excerpt}</p>
            <div className="text-gray-400">
              <time>{distanceToNow(new Date(post.date))}</time>
            </div>
          </article>
        ))
      ) : (
        <p>No blog posted yet :/</p>
      )}
      </header>
      </div>
      </div>
      </div>
    </ContainerBlock>
  );
}
export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "excerpt", "date"]);

  return {
    props: { allPosts },
  };
}

export default Posts;