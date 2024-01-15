import axios from "axios";

const getItems = async (itemsType) => {
    /*  "api/bikes" or "api/boards"*/
    const items = await axios.get(`api/${itemsType}/`)
    return (items.data)
}

const getItem = async (itemType, id) => {
    /*  "api/bike/id" or "api/board/id"*/
    const item = await axios.get(`api/${itemType}/${id}`)
    return (item.data)
}


const itemsService = {
    getItem,
    getItems
}

export default itemsService