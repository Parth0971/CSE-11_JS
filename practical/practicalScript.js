function operation()
{
let N = (Number)(document.getElementById("myInput").value);
let sum = 0;
for(let i = 1; i <= N; i++)
{
    if(i % 2 == 0)
    {
        sum = sum + i;
    }
}
document.getElementById("result").innerHTML = sum;
}