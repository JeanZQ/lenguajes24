namespace StoreAPI;
public sealed class Store
{
    public List<Product> Products { get; private set; }
    public int TaxPercentage { get; private set; }

    private Store( List<Product> products, int TaxPercentage )
    {
        this.Products = products;
        this.TaxPercentage = TaxPercentage;
    }

    public readonly static Store Instance;
    // Static constructor
    static Store()
    {
        var products = new List<Product>();

        // Generate 30 sample products
           products.Add(new Product {
                Name = "Cinder",
                Author = "Marissa Meyer",
                ImgUrl = "https://www.libreriainternacional.com/media/catalog/product/9/7/9781250768889_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000",
                Price = 9500,
                Uuid = Guid.NewGuid()
            });

            products.Add(new Product {
                Name = "Scarlet",
                Author = "Marissa Meyer",
                ImgUrl = "https://www.libreriainternacional.com/media/catalog/product/9/7/9781250768896_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000",
                Price = 9500
            });

            products.Add(new Product    {
                Name = "Cress",
                Author = "Marissa Meyer",
                ImgUrl = "https://www.libreriainternacional.com/media/catalog/product/9/7/9781250768902_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000",
                Price = 9500
            });

            products.Add(new Product {
                Name = "Winter",
                Author = "Marissa Meyer",
                ImgUrl = "https://www.libreriainternacional.com/media/catalog/product/9/7/9781250768926_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000",
                Price = 11900
            });

            products.Add(new Product {
                Name = "Fairest",
                Author = "Marissa Meyer",
                ImgUrl = "https://www.libreriainternacional.com/media/catalog/product/9/7/9781250774057_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000",
                Price = 8700
            });

            products.Add(new Product {
                Name = "La Sociedad de la Nieve",
                Author = "Pablo Vierci",
                ImgUrl = "https://www.libreriainternacional.com/media/catalog/product/9/7/9786070794162_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000",
                Price = 12800
            });

            products.Add(new Product{
                Name = "En Agosto nos vemos",
                Author = "Gabriel García Márquez",
                ImgUrl = "https://www.libreriainternacional.com/media/catalog/product/9/7/9786073911290_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000",
                Price = 14900
            });

            products.Add(new Product {
                Name = "El estrecho sendero entre deseos",
                Author = "Patrick Rothfuss",
                ImgUrl = "https://www.libreriainternacional.com/media/catalog/product/9/7/9789585457935_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000",
                Price = 12800
            });

            products.Add(new Product{
                Name = "Alas de Sangre",
                Author = "Rebecca Yarros",
                ImgUrl = "https://www.libreriainternacional.com/media/catalog/product/9/7/9788408279990_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000",
                Price = 19800
            });

            products.Add(new Product   {
                Name = "Corona de Medianoche",
                Author = "Sarah J. Mass",
                ImgUrl = "https://www.libreriainternacional.com/media/catalog/product/9/7/9786073143691_1_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000",
                Price = 15800
            });

            products.Add(new Product {
                Name = "Carta de Amor a los Muertos",
                Author = "Ava Dellaira",
                ImgUrl = "https://m.media-amazon.com/images/I/41IETN4YxGL._SY445_SX342_.jpg",
                Price = 8900
            });

            products.Add(new Product   {
                Name = "Alicia en el país de las Maravillas",
                Author = "Lewis Carrol",
                ImgUrl = "https://www.libreriainternacional.com/media/catalog/product/9/7/9788415618713_1_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1320&width=1000",
                Price = 7900
            });


        Store.Instance = new Store(products, 13);
    }

 /*   public Sale Purchase (Cart cart)
    {
        if (cart.ProductIds.Count == 0)  throw new ArgumentException("Cart must contain at least one product.");
        if (string.IsNullOrWhiteSpace(cart.Address))throw new ArgumentException("Address must be provided.");

         // Find matching products based on the product IDs in the cart
        IEnumerable<Product> matchingProducts = Products.Where(p => cart.ProductIds.Contains(p.Uuid.ToString())).ToList();

        // Create shadow copies of the matching products
        IEnumerable<Product> shadowCopyProducts = matchingProducts.Select(p => (Product)p.Clone()).ToList();

        // Calculate purchase amount by multiplying each product's price with the store's tax percentage
        decimal purchaseAmount = 0;
        foreach (var product in shadowCopyProducts)
        {
            product.Price *= (1 + (decimal)TaxPercentage / 100);
            purchaseAmount += product.Price;
        }

        // Create a sale object
        var sale = new Sale(shadowCopyProducts, cart.Address, purchaseAmount);

        return sale;

    }*/
}