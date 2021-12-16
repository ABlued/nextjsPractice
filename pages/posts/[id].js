import Head from 'next/head'
import Layout from "../../component/layout";
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false   // 이 처리를 해야 없는 path를 주었을 경우 404에러처리가 일어난다.
    }
  }
  
export default function Post({postData}) { 
    return (
        <Layout>
          <Head>
            <title>{postData.title}</title>
          </Head>
          {postData.title}
          <br />
          {postData.id}
          <br />
          {postData.date}
          <br />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
      )
}
