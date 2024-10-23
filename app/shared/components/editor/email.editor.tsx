"use client";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import React, { useEffect, useRef, useState } from "react";
import { DefaultJsonData } from "@/app/assets/mails/default";
import { useClerk } from "@clerk/nextjs";

const Emaileditor = ({subjectTitle}:{subjectTitle:string}) => {
    const [loading, setLoading] = useState(true);
    const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
    const {user} = useClerk();
    const emailEditorRef = useRef<EditorRef>(null);

  return (
    <div>Emaileditor</div>
  )
}

export default Emaileditor