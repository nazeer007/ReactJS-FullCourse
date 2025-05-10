function Main() {
    function getName(name) {
        return name;
    }
    let a = true;

    console.log(a && getName("Nazeer"));

    // Template Literals
    let name1 = "Syed";
    let name2 = "Nazeer";

    console.log(`${name1} ${name2}`);

    // Ternary operator
    let isPresent = true;

    isPresent ? console.log("Present") : console.log("Absent");

    //Objects and Arrays Destructuring
    const product = {
        title: 'title1',
        description: 'description one'
    }

    const {description} = product;
    console.log(description);

    const arr = [10, 20, 30];

    const [first, second] = arr;
    console.log(first, second);

    //Default parameters, spread operators and rest parameters
    function mulOfTwoNumbers(num1 = 1, num2 = 2) { // default values
        return num1 * num2;
    }

    console.log(mulOfTwoNumbers(2, 3));

    const arr2 = [10, 20, 30];
    const arr3 = [50, 60, 70];
    console.log([90,...arr2, 99,...arr3]);

    function getInfo(a, b, ...c) {
        console.log(a, b, c);
    }
    getInfo(1, 2, 3, 4, 5);

    // Map, filter, find, some, every, includes, indexOf, findIndex
    const personsArray = [
        {
            name: "Person 1",
            age: "22",
            country: "India"
        },
        {
            name: "Person 2",
            age: "25",
            country: "USA"
        },
        {
            name: "Person 3",
            age: "20",
            country: "Russia"
        },
        {
            name: "Person 4",
            age: "32",
            country: "USA"
        }          
    ];
    //Map
    let getAllPersons = personsArray.map((singlePerson, index) => {
        console.log(singlePerson, index);
        return `Name: ${singlePerson.name} Age: ${singlePerson.age}`;
    });
    console.log(getAllPersons);

    //Find -> It will return only one value that first satisfy
    let getPersonFromUsa = personsArray.find((singlePerson, index) => {
        return singlePerson.country === "USA";
    });
    console.log(getPersonFromUsa);

    //filter -> It will return all values that satisfy
    let getAllPersonsFromUsa = personsArray.filter((singlePerson, index) => {
        return singlePerson.country === "USA";
    });
    console.log(getAllPersonsFromUsa);
    
    //some
    let checkSomeArrayMethod = personsArray.some((singlePerson, index) => {
        return singlePerson.age > 30;
    });
    console.log(checkSomeArrayMethod);

    //every
    let checkEveryArrayMethod = personsArray.every((singlePerson) => {
        return singlePerson.age > 18;
    });
    console.log(checkEveryArrayMethod);
    
    //includes, indexOf
    const fruitsArray = ['apple', 'banana', 'orange'];
    console.log(fruitsArray.includes("apple"), fruitsArray.indexOf("banana"));
    
    //findIndex
    let getIndexOfPersonFromRussia = personsArray.findIndex((singlePerson) => {
        return singlePerson.country === "Russia";
    });
    console.log(getIndexOfPersonFromRussia);

    let getListOfProductsElement = document.querySelector(".list-of-products");

    function renderProducts(getProducts) {
        getListOfProductsElement.innerHTML = getProducts.map((singleProductItem) => 
            `<p>${singleProductItem.title}</p>`
        ).join(" ")
    }

    //async await API call example
    async function fetchListOfProducts() {
        try {
            const apiResponse = await fetch("https://dummyjson.com/products", {
                method :"GET"
            });

            const result = await apiResponse.json();
            console.log(result);
            
            if (result?.products?.length > 0) renderProducts(result?.products);

        } catch(e) {
            console.log(e);
        }
    }
    fetchListOfProducts();
}

export default Main;