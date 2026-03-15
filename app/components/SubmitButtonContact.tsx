import { useFormStatus } from 'react-dom'
import { Send } from 'lucide-react'

export default function SubmitButton({ className }: { className: string }) {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className={className}
        >
            {pending ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
            <Send size={20} />
        </button>
    )
}