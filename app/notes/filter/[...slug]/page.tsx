import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type NotesByTagProps = {
  params: Promise<{ slug: string[] }>;
};

const NotesByTag = async ({ params }: NotesByTagProps) => {
  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];
  const response = await fetchNotes({ page: 1, tag });
  return <div>{response?.notes?.length > 0 && <NotesClient tag={tag} />}</div>;
};

export default NotesByTag;

// import {
//   QueryClient,
//   HydrationBoundary,
//   dehydrate,
// } from "@tanstack/react-query";
// import { fetchNotes } from "@/lib/api";
// import NotesClient from "./Notes.client";

// type NotesProps = {
//   searchParams: {
//     page?: string;
//     search?: string;
//   };
// };

// const Notes = async ({ searchParams }: NotesProps) => {
//   const page = Number(searchParams.page) || 1;
//   const search = searchParams.search ?? "";
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["notes", page, search],
//     queryFn: () => fetchNotes({ page, search }),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotesClient />
//     </HydrationBoundary>
//   );
// };

// export default Notes;
