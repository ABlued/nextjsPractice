import axios from "axios";
import Layout from "../../component/layout";
import { fetchItemData, fetchItemPaths } from "../../lib/test";

export async function getStaticProps() {
    const itemData = await fetchItemData();
    console.log(itemData);
    return {
      props: {
        itemData
      }
    }
  }

  export async function getStaticPaths() {
    const paths = await fetchItemPaths();
    console.log(paths);
    return {
      paths,
      fallback: false   // 이 처리를 해야 없는 path를 주었을 경우 404에러처리가 일어난다.
    }
  }


export default function Test({itemData}) {
    return(
        <Layout>
            {
                itemData.map((item, index) => {
                    return(
                        <div key={index}>
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </Layout>
    )
}