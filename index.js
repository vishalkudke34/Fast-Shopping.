let allproducts = [];

async function fetchproduct() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    allproducts = data.products;

    displayProducts(allproducts);
}

function displayProducts(products) {
    const container = document.getElementById("root");
    container.innerHTML = "";

    console.log(products);

    products.forEach((ele) => {
        container.innerHTML += `
            <div class="card">

                <div class="img_container">
                    <img src="${ele.thumbnail}" alt="${ele.title}">
                </div>

                <div class="main">

                    <div id="con">
                        <h1>${ele.title.slice(0,20).concat("...")}</h1>
                    </div>

                    <p>Category: ${ele.category}</p>
                    <p>Price: ${(ele.price * 50).toFixed()} INR</p>
                    <p>Rating: ${"⭐".repeat(Math.round(ele.rating))}</p>

                    <div class="viewcontainer">
                        <a href="./viewmore.html" onclick="getproduct(${ele.id})">
                            View More...
                        </a>
                    </div>

                </div>

            </div>
        `;
        });
        }
        

fetchproduct();

let sea = document.querySelector('[name="searchproduct"]');

sea.addEventListener("input", (eve) => {
    let value = eve.target.value.toLowerCase();

    let filterproducts = allproducts.filter((pro) =>
        pro.title.toLowerCase().includes(value)
    );

    displayProducts(filterproducts);
});

let pop = document.getElementById("popup");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    pop.style.display = "none";
});

function getproduct(id) {
    localStorage.setItem("id", id);
}