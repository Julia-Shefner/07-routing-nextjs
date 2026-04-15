import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./filter/[...slug]/Notes.client";

type NotesProps = {
  searchParams: {
    page?: string;
    search?: string;
  };
};

const Notes = async ({ searchParams }: NotesProps) => {
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search ?? "";
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", page, search],
    queryFn: () => fetchNotes({ page, search }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
};

export default Notes;
