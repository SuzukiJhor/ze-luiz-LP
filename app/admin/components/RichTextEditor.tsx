'use client'

import { Editor } from '@tinymce/tinymce-react'
import { Loader2 } from 'lucide-react'
import { useRef, useState } from 'react'

interface Props {
    name: string
    initialValue?: string
}

export function RichTextEditor({ name, initialValue = '' }: Props) {
    const editorRef = useRef<any>(null)
    const [value, setValue] = useState(initialValue)
    const [isLoading, setIsLoading] = useState(true)

    const handleChange = (content: string) => {
        setValue(content)
    }

    return (
        <div className="rounded-xl overflow-hidden border border-border relative min-h-100">
            {isLoading && (
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-3 text-muted-foreground animate-pulse">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    <span className="text-sm font-medium">Carregando editor...</span>
                </div>
            )}
            <Editor
                apiKey="jqwj2lodd3l1df2umfcdh2p62kclpkqfc6663vezn5hlf710"
                onInit={(evt, editor) => (editorRef.current = editor, setIsLoading(false))}
                initialValue={initialValue}
                value={value}
                onEditorChange={handleChange}
                init={{
                    height: 300,
                    menubar: false,
                    branding: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'help', 'wordcount'
                    ],
                    link_default_target: '_blank',
                    link_assume_external_targets: 'https',
                    extended_valid_elements: 'a[href|target=_blank|rel=noopener noreferrer]',
                    content_style: `
                        body { 
                            background: #fafaf9;
                            color: #1c1917;                      
                        }
                        a { color: #2563eb; text-decoration: underline; }
                    `,
                    toolbar:
                        'undo redo | bold italic underline | link | alignleft aligncenter alignright | bullist numlist | code',

                    autolink_pattern: /^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/\/|www\.)[^\s]+$/i,
                }}
            />

            {!isLoading && (<input type="hidden" name={name} value={value} />)}

        </div>
    )
}