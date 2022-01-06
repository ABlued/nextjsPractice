import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../../component/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    // paths,
    paths: [{ params: { id: 'ssg-ssr' } }],
    fallback: 'blocking', // 이 처리를 해야 없는 path를 주었을 경우 404에러처리가 일어난다.
  };
}

// export async function getServerSideProps({ params, req }) {
//   console.log(`req.cookie, ${JSON.stringify(req.cookies)}`);
//   // const postData = await getPostData(params.id);
//   return {
//     props: {
//       // postData,
//     },
//   };
// }

export default function Post({ postData }) {
  const router = useRouter();

  useEffect(() => {
    const getText = async () => {
      const res = await fetch('/api/hello');
      const data = await res.json();
      alert(data.name);
    };
    getText();
  }, []);
  if (router.isFallback) {
    return <div>Loading.....</div>;
  }

  return (
    <Layout>
      {/* <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
    </Layout>
  );
}
