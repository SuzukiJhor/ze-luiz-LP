'use client'

import PostHeader from './PostHeder'
import { motion } from 'framer-motion'
import AudioDocument from './AudioDocument'
import ButtonDownloadDocument from './ButtonDownloadDocument'
import PostImage from './PostImage'
import GoBack from './GoBack'
import { Post } from '@/app/types/post'

export default function PostView ({ post }: { post: Post }) {
  const isPoesia = post.section === 'POESIA'
  const parentPath = isPoesia ? '/poesia' : '/poesia'
  const parentName = isPoesia ? 'Poesia & Música' : 'Docência'

  return (
    <div className='min-h-screen bg-surface text-white flex flex-col'>
      <PostImage post={post} />

      <main
        className={`flex-1 relative z-10 px-6 ${
          post.coverImage ? '-mt-32' : 'pt-40'
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
              prose prose-invert prose-lg max-w-none leading-relaxed
              text-muted-foreground
              ${
                isPoesia
                  ? 'text-center font-serif text-xl prose-p:my-6 prose-p:leading-loose'
                  : ''
              }
            `}
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <ButtonDownloadDocument post={post} />
        </motion.article>
      </main>

      <div className='h-32' />
    </div>
  )
}
