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
