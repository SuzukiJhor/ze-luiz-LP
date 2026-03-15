'use client'

import { useState } from 'react'
import { useUploadThing } from '@/app/lib/uploadthing'
import { X, Image as ImageIcon, FileText, Music } from 'lucide-react'

type UploadType = 'image' | 'pdf' | 'audio'

interface FileUploadProps {
    type: UploadType
    value: string | null
    onChange: (url: string | null) => void
    onUploadingChange?: (uploading: boolean) => void
}

const uploadConfig = {
    image: {
        endpoint: 'coverUploader',
        accept: 'image/*',
        label: 'Selecionar imagem',
        loadingLabel: 'Carregando imagem...',
        preview: 'image',
        icon: <ImageIcon size={20} className="text-primary" />
    },
    pdf: {
        endpoint: 'pdfUploader',
        accept: 'application/pdf',
        label: 'Selecionar PDF',
        loadingLabel: 'Carregando PDF...',
        preview: 'none',
        icon: <FileText size={20} className="text-blue-400" />
    },
    audio: {
        endpoint: 'audioUploader',
        accept: 'audio/*',
        label: 'Selecionar áudio',
        loadingLabel: 'Carregando áudio...',
        preview: 'audio',
        icon: <Music size={20} className="text-purple-400" />
    }
} as const

export function FileUpload({ type, value, onChange, onUploadingChange }: FileUploadProps) {

    const [progress, setProgress] = useState(0)

    const config = uploadConfig[type]

    const { startUpload, isUploading } = useUploadThing(config.endpoint as any, {
        onUploadBegin: () => {
            onUploadingChange?.(true)
        },
        onUploadProgress: setProgress,
        onClientUploadComplete: (res) => {
            const url = res?.[0]?.url
            if (url) onChange(url)

            setProgress(0)
            onUploadingChange?.(false)
        },
        onUploadError: () => {
            setProgress(0)
            onUploadingChange?.(false)
        }
    })

    return (
        <div className="space-y-2">

            {!value && (
                <label className="flex items-center gap-2 border border-dashed border-border rounded-xl p-2 cursor-pointer hover:bg-surface transition">

                    {config.icon}

                    <span className="text-sm text-muted">
                        {config.label}
                    </span>

                    <input
                        type="file"
                        accept={config.accept}
                        className="hidden"
                        onChange={(e) => {
                            const files = Array.from(e.target.files ?? [])
                            if (files.length) startUpload(files)
                        }}
                    />
                </label>
            )}

            {isUploading && (
                <>
                    <p className='text-muted text-xs uppercase font-bold tracking-wider'>
                        {config.loadingLabel} {progress}%
                    </p>
                    <div className="w-full bg-border rounded-full h-2 overflow-hidden">

                        <div
                            className="bg-primary h-2 transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </>
            )}

            {value && type === 'image' && (
                <div className="relative">
                    <img
                        src={value}
                        className="rounded-xl border border-border w-full"
                    />

                    <button
                        type="button"
                        onClick={() => onChange(null)}
                        className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-lg cursor-pointer"
                    >
                        <X size={16} />
                    </button>
                </div>
            )}

            {value && type === 'audio' && (
                <audio controls className="w-full">
                    <source src={value} />
                </audio>
            )}

            {value && type === 'pdf' && (
                <div className="relative flex items-center gap-3 border border-border rounded-xl p-3 bg-surface-muted">

                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/10">
                        <FileText size={20} className="text-red-500" />
                    </div>

                    <div className="flex flex-col text-xs text-muted flex-1">
                        <span className="font-medium text-white">
                            Documento PDF
                        </span>
                        <span>
                            Arquivo carregado com sucesso
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={() => onChange(null)}
                        className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-lg cursor-pointer hover:bg-black/80 transition"
                    >
                        <X size={16} />
                    </button>

                </div>
            )}

        </div>
    )
}