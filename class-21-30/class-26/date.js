const date=new Date()
console.log(date.getDay())


useEffect(()=>{
    let ignore =false;

    async function startFetching(){
        const json=await fetchindComments(postId);

        if(!ignore){
            setComments(json)
        }
    }

    startFetching();
})