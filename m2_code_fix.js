function prime(a)
{
  let count=0
  for(let i=1;i<=a;i++)
    {
      if (a%i==0)
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
prime(7)