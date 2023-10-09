function prime(c)
{
  let count=0
  for(let i=1;i<=c;i++)
    {
      if (c%i==0)
      {
        count+=1
      }
    }
  if(count==2)
  {
    console.log("number is prime")
  }
  else{
    console.log("number is not prime")
  }
}
prime(15)