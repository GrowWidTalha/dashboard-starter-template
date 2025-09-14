import { QueryClient, dehydrate } from "@tanstack/react-query";

export async function prefetchQuery(queryKey: any[], queryFn: () => Promise<any>) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey, queryFn });
  return {
    dehydratedState: dehydrate(queryClient),
  };
}
