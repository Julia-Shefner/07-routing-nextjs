"use client";

import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";
import type { Note } from "@/types/note";

type NotePreviewClientProps = {
  note: Note;
};

const NotePreviewClient = ({ note }: NotePreviewClientProps) => {
  const router = useRouter();
  const modalClose = () => {
    router.back();
  };

  return (
    <Modal onClose={modalClose}>
      <button className={css.backBtn} onClick={modalClose}>
        Close
      </button>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{note.createdAt}</p>
        </div>
      </div>
    </Modal>
  );
};

export default NotePreviewClient;
