import Post from '@/components/post/Post'
import CommonLayout from '@/components/CommonLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <CommonLayout>
        <Post />
      </CommonLayout>
    </div>
  )
}

export default page
