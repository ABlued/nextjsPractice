import axios from "axios";

export async function fetchItemData() {
    const itemSocket = await axios.get("http://localhost:3001/item");
    const itemData = itemSocket.data;
    return itemData;
    
}


export async function fetchItemPaths() {
    const itemSocket = await axios.get("http://localhost:3001/item");
    const itemData = itemSocket.data;


    return (
        itemData.map((item) => {
            return {
                params:{
                    id: String(item.id)
                }
            }
        })
    )
    
}

