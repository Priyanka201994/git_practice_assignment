function prime(a)
{
    let count=0
    for(let i=1;i<=a;i++)
    {
        if(a%i==0)
        {
            count+=1
        }
    }
    if(count==2)
    {
        console.log("yes:it's a prime number")
    }
    else{
        console.log("No:it's not a prime number")
    }
}

result = prime(9)
console.log(result)