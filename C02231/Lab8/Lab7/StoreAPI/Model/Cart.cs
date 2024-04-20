
namespace StoreAPI.models;
public sealed class Cart
{
    public List<string> ProductIds { get; set; }
    public string Address { get; set; }
    public PaymentMethods.Type PaymentMethod { get; set; }
    public decimal Total { get; set; }
}