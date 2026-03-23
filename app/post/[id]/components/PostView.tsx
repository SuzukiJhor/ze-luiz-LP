'use client'

import Link from 'next/link'
import PostHeader from './PostHeder'
import { motion } from 'framer-motion'
import AudioDocument from './AudioDocument'
import ButtonDownloadDocument from './ButtonDownloadDocument'
import PostImage from './PostImage'
import GoBack from './GoBack'
import { Post } from '@/app/types/post'

export default function PostView({
  post,
  posts
}: {
  post: Post
  posts: Post[]
}) {

  const isPoesia = post.section === 'POESIA'
  const parentPath = isPoesia ? '/poesia' : '/poesia'
  const parentName = isPoesia ? 'Poesia & Música' : 'Docência'

  const currentIndex = posts.findIndex(p => p.id === post.id)

  const prevPost = posts[currentIndex - 1]
  const nextPost = posts[currentIndex + 1]

  return (
    <div className='min-h-screen bg-surface text-white flex flex-col'>
      <PostImage post={post} />

      <main
        className={`flex-1 relative z-10 px-6 ${post.coverImage ? '-mt-32' : 'pt-40'
          }`}
      >
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className='max-w-3xl mx-auto'
        >
          <GoBack parentPath={parentPath} parentName={parentName} />

          <PostHeader post={post} />

          <AudioDocument post={post} />
          <div
            className={`
            prose prose-invert prose-lg max-w-none
            prose-a:text-primary hover:prose-a:text-primary/80 prose-a:underline
           [&_a]:text-blue-400!
          [&_a]:underline!
          [&_a]:decoration-blue-400/30!
         hover:[&_a]:text-blue-300!
            ${isPoesia ? 'font-serif text-center' : 'font-sans text-left'}
          `}
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <ButtonDownloadDocument post={post} />


          <div className='mt-36 pt-8 border-t border-border flex justify-between gap-6'>

            {prevPost ? (
              <Link
                href={`/post/${prevPost.id}`}
                className='flex-1 p-4 rounded-xl border border-border hover:border-primary transition'
              >
                <p className='text-xs text-muted mb-1'>
                  ← Publicação anterior
                </p>

                <p className='text-white font-serif'>
                  {prevPost.title}
                </p>
              </Link>
            ) : <div />}

            {nextPost ? (
              <Link
                href={`/post/${nextPost.id}`}
                className='flex-1 p-4 rounded-xl border border-border text-right hover:border-primary transition'
              >
                <p className='text-xs text-muted mb-1'>
                  Próxima publicação →
                </p>

                <p className='text-white font-serif'>
                  {nextPost.title}
                </p>
              </Link>
            ) : <div />}

          </div>

        </motion.article>
      </main>

      <div className='h-32' />
    </div >
  )
}