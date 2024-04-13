using storeApi.Models;

namespace storeApi;
public sealed class Cart
{
    public List<string> ProductIds { get; set; }
    public string Address { get; set; }
    public PaymentMethod.Type PaymentMethod{get; set;}
    public decimal Total {get; set;}
}