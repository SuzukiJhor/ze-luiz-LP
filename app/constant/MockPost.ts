import { Post } from "../types/post";

export const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Ensinar Matemática é um Ato de Criação',
    subtitle: 'Uma reflexão sobre a estética do ensino e a descoberta lógica.',
    content: `
      <p>O ensino da matemática deve ultrapassar a simples transmissão de fórmulas e procedimentos.</p>
      <p>Ensinar matemática é convidar o estudante a explorar padrões, formular conjecturas e compreender o mundo através da lógica e da abstração.</p>
      <p>A sala de aula se transforma, assim, em um espaço de investigação.</p>
    `,
    section: 'DOCENCIA',
    category: 'Metodologia',
    published: true,
    coverImage:
      'https://images.unsplash.com/photo-1509228468518-180dd482195b?q=80&w=2070', // Imagem de exemplo (quadro negro)
    document: '/files/artigo-criacao.pdf',
    createdAt: '2024-02-10T10:30:00Z',
    updatedAt: '2024-02-10T10:30:00Z'
  },
  {
    id: 3,
    title: 'Entre Números e Silêncios',
    subtitle: 'Onde a precisão encontra o sentimento.',
    content: `
      Entre números e silêncios<br />
      habita o pensamento.<br /><br />
      A matemática é poesia<br />
      escrita na linguagem do universo.
    `,
    section: 'POESIA',
    category: 'Poesia Clássica',
    published: true,
    audio: '/audio/poesia-silencio.mp3',
    coverImage:
      'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1974', // Imagem de exemplo (escrita antiga)
    createdAt: '2024-03-20T08:15:00Z',
    updatedAt: '2024-03-20T08:15:00Z'
  },
  {
    id: 5,
    title: 'Geometria do Tempo',
    subtitle: 'Linhas invisíveis que desenham nossa existência.',
    content: `
      O tempo desenha<br />
      linhas invisíveis.<br /><br />
      Entre passado e futuro,<br />
      somos apenas um ponto<br />
      na grande geometria da vida.
    `,
    section: 'POESIA',
    category: 'Filosófico',
    published: true,
    coverImage:
      'https://images.unsplash.com/photo-1461397821064-32d6b3c91b9f?q=80&w=2070',
    createdAt: '2024-05-11T09:40:00Z',
    updatedAt: '2024-05-11T09:40:00Z'
  }
]
