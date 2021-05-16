function reverseBits(n)
{
    let rev = 0;
    while (n > 0)
    {
        rev <<= 1;
        if ((n & 1) == 1)
            rev ^= 1;
        n >>= 1;
    }
    return rev;
}

let n = 417;
console.log(reverseBits(n));
