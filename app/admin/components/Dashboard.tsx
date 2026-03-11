'use client'

import {
  getPostsAction,
  deletePostAction,
  savePostAction,
  togglePublishAction
} from '@/app/actions/posts'
import PostsList from './PostsList'
import StatsCards from './StatsCards'
import { PostForm } from './PostForm'
import { Post } from '@/app/types/post'
import { DeleteModal } from './DeleteModal'
import { EditPostForm } from './EditPostForm'
import PostHeaderAdmin from './PostHeaderAdmin'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState, useTransition } from 'react'
import DashboardSkeleton from './DashboardSkeleton'

export default function Dashboard () {
  const [posts, setPosts] = useState<Post[]>([])
  const [isPending, startTransition] = useTransition()
  const [showModal, setShowModal] = useState(false)
  const [deletingId, setDeletingId] = useState<number | string | null>(null)
  const [postToEdit, setPostToEdit] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const refreshData = async () => {
    const data = await getPostsAction()
    setPosts(data as Post[])
  }

  const handleDeleteClick = (id: number | string) => {
    setDeletingId(id)
  }

  const confirmDelete = async () => {
    if (!deletingId) return

    startTransition(async () => {
      await deletePostAction(deletingId)
      setDeletingId(null)
      refreshData()
    })
  }

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        await refreshData()
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return (
    <div className='min-h-screen bg-[#0A0A0A] text-white p-8 pt-24 '>
      <div className='max-w-6xl mx-auto'>
        <PostHeaderAdmin setShowModal={setShowModal} />
        {isLoading ? (
          <DashboardSkeleton />
        ) : (
          <>
            <AnimatePresence>
              {showModal && (
                <PostForm
                  isPending={isPending}
                  onClose={() => setShowModal(false)}
                  onSave={fd => {
                    startTransition(() => {
                      savePostAction(fd).then(() => {
                        setShowModal(false)
                        refreshData()
                      })
                    })
                  }}
                />
              )}

              <StatsCards posts={posts} />

              {postToEdit && (
                <EditPostForm
                  post={postToEdit}
                  isPending={isPending}
                  onClose={() => setPostToEdit(null)}
                  onSave={fd => {
                    startTransition(() => {
                      savePostAction(fd).then(() => {
                        setPostToEdit(null)
                        refreshData()
                      })
                    })
                  }}
                />
              )}

              {deletingId && (
                <DeleteModal
                  isPending={isPending}
                  onClose={() => setDeletingId(null)}
                  onConfirm={confirmDelete}
                />
              )}
            </AnimatePresence>

            <PostsList
              posts={posts}
              refreshData={refreshData}
              handleDelete={handleDeleteClick}
              handleEdit={post => setPostToEdit(post)}
              startTransition={startTransition}
              togglePublishAction={async id => {
                await togglePublishAction(id)
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}
