import QueryProvider from "@/components/Providers";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import Posts from "./post";

export async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  }
  
export default async function PostsPage() {
  // 1. Create a QueryClient on the server
  const queryClient = new QueryClient();

  // 2. Prefetch data into the QueryClient cache
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // 3. Dehydrate the cache into a serializable object
  const dehydratedState = dehydrate(queryClient);

  // 4. Pass that into QueryProvider
  return (
    <QueryProvider dehydratedState={dehydratedState}>
      <Posts />
    </QueryProvider>
  );
}
