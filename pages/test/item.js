import axios from "axios";
import Layout from "../../component/layout";

export async function getStaticProps() {
    const itemSocket = await axios.get("http://localhost:3001/item");
    const itemData = itemSocket.data;
    console.log(itemData);
    return {
      props: {
        itemData
      }
    }
  }

export default function Test({itemData}) {
    return(
        <Layout>
            {
                itemData.map((item, index) => {
                    return(
                        <div key="index">
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </Layout>
    )
}