import { PaginationMeta } from "./pagination"
import { Post } from "./post"

export interface GetPostsResult {
  posts: Post[]
  pagination: PaginationMeta
}