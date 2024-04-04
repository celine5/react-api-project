function CreateArray () {

    // creating an array using for loop

    const arr=[0,1,2,3,4]
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }

        // creating an array using map method

        const names=["ann","java","hn"]

        names.map((element)=>{
            console.log(element);
        })
            // creating an arrayObjects
            const person=[
                {
                    name:'annie',
                    country:'india'
                },
                {
                    name:'hanna',
                    country:'india'
                },
                {
                    name:'henry',
                    country:'india'
                }
        
            ]
            person.map((e)=>{
                console.log(e.name)
            })

    return (
    <>
    </>
    )
}
export default CreateArray