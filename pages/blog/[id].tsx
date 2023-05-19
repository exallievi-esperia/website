import { getAllPostIds, getPostData } from "@/utils/posts"
import React from "react"

const Post = ({ postData }: any) => {
  return <div>{postData.title}</div>
}

export default Post

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
