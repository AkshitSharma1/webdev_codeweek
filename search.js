const productlist = document.getElementById('productlist');
const searchbar = document.getElementById('searchbar');
let products = [];

searchbar.addEventListener('keyup', (e) => {
    const query = e.target.value.toLowerCase();

    const sort = products.filter((product) => {
        return (
            //sorts the array and return it

            product.title.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    });
    printdata(sort);
});

const getdata = async () => {
    
        const res = await fetch('https://raw.githubusercontent.com/AkshitSharma1/webdev_codeweek/main/data.json');
        products = (await res.json()).products;
        printdata(products);
   
};

const printdata = (prods) => {
    const htmlString = prods
        .map((product) => {
            return `
            <li class="product">
            
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <img src="${product.thumbnail}"></img>
                <br><Br><br><Br>
            </li>
        `;
        })
        .join('');
    productlist.innerHTML = htmlString;
};

getdata();
