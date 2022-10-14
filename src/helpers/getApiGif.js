
export const getApidata=async (category)=>{
    const apiGetData=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=rlqJAzrIcVX5pOpFDbfmztjmijJ72qeY&q= ${category}&limit=10`);
    const {data}=await apiGetData.json();
    const gifs=data.map((img) =>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));
    return gifs;

}