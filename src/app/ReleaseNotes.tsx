import ReactMarkdown from "react-markdown";
import { nanoid } from "nanoid";
import { CollapsibleSection } from "@/components/CollapsibleSection";
import { ReleaseNote } from "@/types/release-notes";
import releaseNotes from "../data/release-notes.json";

const ReleaseNoteItem = ({ releaseNote }: { releaseNote: ReleaseNote }) => {
  return (
    <li>
      <h3 className="text-lg font-bold">
        {releaseNote.version} - {releaseNote.date} -{" "}
        <a href={releaseNote.link} className="link font-semibold">
          Download
        </a>
      </h3>
      <ul className="list-disc ml-5">
        {releaseNote.notes.map((note) => (
          <li key={nanoid()}>
            <ReactMarkdown
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="bg-[#2a2d34] text-[#e2e6eb]">{children}</code>
                ),
              }}
            >
              {note}
            </ReactMarkdown>
          </li>
        ))}
      </ul>
    </li>
  );
};

export const ReleaseNotes = () => {
  return (
    <section className="grid w-full gap-3 p-3">
      <CollapsibleSection title="Download Links / Release Notes">
        <ul className="flex flex-col gap-3 ml-6">
          {releaseNotes.map((note) => (
            <ReleaseNoteItem key={note.version} releaseNote={note}></ReleaseNoteItem>
          ))}
        </ul>
      </CollapsibleSection>
    </section>
  );
};

export default ReleaseNotes;
