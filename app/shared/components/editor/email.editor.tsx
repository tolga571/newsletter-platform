"use client";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import React, { useEffect, useRef, useState } from "react";
import { DefaultJsonData } from "@/app/assets/mails/default";
import { useClerk } from "@clerk/nextjs";

const Emaileditor = ({ subjectTitle }: { subjectTitle: string }) => {
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
  const { user } = useClerk();
  const emailEditorRef = useRef<EditorRef>(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      setJsonData(design);
    });
  };

  const onReady: EmailEditorProps["onReady"] = () => {
    const unlayer: any = emailEditorRef.current?.editor;
    unlayer.loadDesign(jsonData);
  };

  return (
    <>
      {!loading && (
        <div className="w-full h-[90vh] relative">
          <EmailEditor
            minHeight={"80vh"}
            ref={emailEditorRef}
            onReady={onReady}
          />
          <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3">

          </div>
        </div>
      )}
    </>
  );
};

export default Emaileditor;
