export function calcDiscountedPrice(orgPrice,discPercentage)
{
    return orgPrice - (discPercentage*0.01*orgPrice);
}
export function discountAmount(orgPrice,discPercentage)
{
    return (discPercentage*0.01*orgPrice);
}