'use-client'
import { NextPage } from "next";
import Editor from "@monaco-editor/react";
type MyEditorProps = {
    language: string;
    onChange:(value:string|undefined)=>void;
    defaultValue:string|undefined;
}

const MyEditor = ({ language,onChange,defaultValue }: MyEditorProps) => 
<Editor height="100vh" onChange={(value)=>onChange(value)} defaultLanguage={language} defaultValue={defaultValue} />;

export default MyEditor