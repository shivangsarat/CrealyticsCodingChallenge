# Getting Started with CrealyticsCodingChallenge App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## __Instructions__

### Versions

Node: `v16.13.0`
npm: `8.1.0`

In the project directory, you can run:


### `npm i`

Installs all the required dependencies from package.json.

This command will create node_module/ directory and package-lock.json file.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm test`

Launches the test runner in the interactive watch mode.\
For testing Jest and Puppeteer Frameworks are used

__Instructions for running Test__

For running the test you need to run this app in another terminal or in background
#### `By running app in another Console/Terminal` :
- In first Terminal run start script
```
npm start
```
- Once the app has started, switch terminal to run the test script
```
npm test
```
It'll then Iterate over all the test cases and dispaly results

#### `By running app in Background` :
To run the app in background we could use pm2
- We will install PM2 Gobally
```
npm install pm2@latest -g
```
- Now from command prompt navigate inside the project’s root folder and run below mentioned PM2 command.
```
pm2 start --name CrealyticsCodingChallenge npm -- start
```
- Once the app has started, switch terminal to run the test script
```
npm test
```
It'll then Iterate over all the test cases and dispaly results
- To stop the service use command
```
pm2 stop CrealyticsCodingChallenge
```
- To delete the service use command
```
pm2 delete CrealyticsCodingChallenge
```


## __Documentation__

### Additional Libraries Used

#### sass

For Stylesheet to import scss files, [sass](https://www.npmjs.com/package/sass) library is installed

```
npm i sass -s
```

#### Material UI/MUI

[MUI](https://mui.com/) is a React UI framework. MUI components work in isolation. They are self-supporting, and will only inject the styles they need to display.

This is used to create an interactive and presenatble UI for this project.

```
npm install @mui/material @emotion/react @emotion/styled -s
npm install @mui/icons-material -s
```

#### Material UI/MUI

[Puppeteer](https://www.npmjs.com/package/puppeteer) is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.

This Library is used for creating UI render specific Test Cases.
```
npm i puppeteer -s
```

**Note: All of the above mentioned libraries are saved in [package.json](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/package.json). It'll be installed with command `npm i`!**

### File Structure

- CrealyticsCodingChallenge
    - [public](https://github.com/shivangsarat/CrealyticsCodingChallenge/tree/main/public)
        - [products.csv](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/public/products.csv)
    - [src](https://github.com/shivangsarat/CrealyticsCodingChallenge/tree/main/src)
        - [App.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/App.js)
        - [css](https://github.com/shivangsarat/CrealyticsCodingChallenge/tree/main/src/css)
            - [filters.scss](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/css/filters.scss)
            - [productDetail.scss](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/css/productDetail.scss)
            - [productList.scss](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/css/productList.scss)
        - [Plugins](https://github.com/shivangsarat/CrealyticsCodingChallenge/tree/main/src/Plugins)
            - [JsonFromCSV.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/Plugins/JsonFromCSV.js)
        - [Header](https://github.com/shivangsarat/CrealyticsCodingChallenge/tree/main/src/Header)
            - [index.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/Header/index.js)
        - [ProductList](https://github.com/shivangsarat/CrealyticsCodingChallenge/tree/main/src/ProductList)
            - [index.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/index.js)
            - [ProductCard.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/ProductCard.js)
        - [Filters](https://github.com/shivangsarat/CrealyticsCodingChallenge/tree/main/src/Filters)
            - [index.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/Filters/index.js)
        - [ProductDetails](https://github.com/shivangsarat/CrealyticsCodingChallenge/tree/main/src/ProductDetail)
            - [index.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductDetail/index.js)
        - [AsyncImage](https://github.com/shivangsarat/CrealyticsCodingChallenge/tree/main/src/AsyncImage)
            - [index.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/AsyncImage/index.js)
        - [__tests__](https://github.com/shivangsarat/CrealyticsCodingChallenge/tree/main/src/__tests__)
            - [crealitcs.test.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/__tests__/crealitcs.test.js)

### Test Cases Covered:
- Checking basic rendering of elements:
    - Contains the Search Box
    - Pagination limit of 100
    - Contains the Product name
    - Contains the Product price
    - Contains the Product sale_price
    - Contains the Product gtin
    - Contains the Product gender
    - Contains the Product Image
    - Expands on click displaying another image
    - On click of Load More button add another 100 items in the list maintaining the Pagination limit of 100
- Product List Checking Functionality
    - Checks product rendered on first keypress element
    - Checks product rendered on second keypress element and product different from previous entry
    - Checks for product rendered on price switch that sale price is less than product price
    - Checks the product for gender matching to applied filter

### WorkFlow
**Note: All logical operations are tried to be defined at one place in [src/ProductList/index.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/index.js). While all Other UI Components are broken into different components and actions are performed using callback functions or props.**

- #### Fetching CSV File

    - Fetching of CSV file is done in `src/ProductList/index.js` [Line 27-40](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/index.js#L27-L40) in useEffect with empty array as dependency immitating `componentDidMount`.
    - To fetch from CSV we use ```fetch("./products.csv")``` function to get the result and convert it to text using ```.text()``` function.
    - Once the data is fetched, it is paseed to [Plugins/JsonFromCSV.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/Plugins/JsonFromCSV.js) where the data is seperated in form of array and mapped together to form an array of objects.
        - ***Note: in `JsonFromCSV.js` between [Line 14 - Line 16](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/Plugins/JsonFromCSV.js#L14-L16) it is checked if in parsing data gender is shifted to a index below and handled.***
        - ***Note: in `JsonFromCSV.js` between [Line 17 - Line 19](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/Plugins/JsonFromCSV.js#L17-L19) it is checked if gender is in the scope ("male", "female", "unisex"). If not, then data is not entered into final product listing.***
        ```
        if (currentline[3] === 'male' || currentline[3] === 'female' || currentline[3] === 'unisex') {
            obj[headers[0]] = currentline[0].replace('"', '') + currentline[1].replace('"', '');
            obj[headers[j]] = currentline[j+1];
        } else if (currentline[2] === 'male' || currentline[2] === 'female' || currentline[2] === 'unisex') {
            obj[headers[j]] = currentline[j];
        }
        ```
    - After recieving the data in desired format (JSON), data is added to state in items list and loading message is turned off.

- #### Rendering Products
    - Products are rendered using a component [src/ProductList/ProductCard.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/ProductCard.js) which is called in [Line 135](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/index.js#L135) of `src/ProductList/index.js`.
    - In `src/ProductList/ProductCard.js` [Line 15 to Line 51](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/ProductCard.js#L15-L51) data is mapped and a product card is generated contaning [Async Image](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/ProductCard.js#L27), [Title](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/ProductCard.js#L29-L31), [Gender](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/ProductCard.js#L32-L34), [GTIN](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/ProductCard.js#L35-L37), [Sell Price](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/ProductCard.js#L38-L40) and [Price](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/ProductCard.js#L41-L43) of the Product.
    - On Click of card a callback funtion of [onClick](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/ProductCard.js#L18) is called tht passes an argument of product json which in turn is responsible for opening modal with additional images of product.

- #### Filter Coulumn UI
    - Filter box is called in [Line 134](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/index.js#L134) of `src/ProductList/index.js` and is renderd using component [src/Filters/index.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/Filters/index.js).

- #### Product Details Modal
    - Product Details modal is called in [Line 13](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/index.js#L137) of `src/ProductList/index.js` and is renderd using component [src/ProductDetails/index.js](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductDetail/index.js).
    - When the Modal opens, Product Title and and GTIN is displayed along with all the additional images loaded asynchronously.
    - In case of no image url in additional_image_link, a text message will appear stating  `No Image to display`.

- #### Asynchronous loading of Images
    - This componenet is used for loading images asynchronously.

- ### Filters Function
    - Filters are implemented from [Line 41 - Line 66](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/index.js#L41-L66) in `src/ProductList/index.js` inside useState function listning to state variables `searchItem`, `gender`, `price`, and `items`.
    - `searchItem` is the listner for user inputs in the search box.
    - `gender` is the listner for user inputs in the dropdown for gender of the product.
    - `price` is the listner for user inputs in the checkbox/switch for price comparison between product price and selling price of the product.

    - `searchItem` filter operation are implemented in [Line 42 - line 46](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/index.js#L42-L46).
    ```
    const filterSearchBox = items.filter(
        suggestion => {
            return suggestion.title && suggestion.title.toLowerCase().indexOf(searchItem.toLowerCase()) > -1 || suggestion.gtin && suggestion.gtin.toLowerCase().indexOf(searchItem.toLowerCase()) > -1
        }
    )
    ```
    - ***This box could be used for searching products by both product Title and GTIN.***
    - `gender` filter operation are implemented in [Line 48 - line 52](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/index.js#L48-L52).
    ```
    let filteredGender = items.filter(
        suggestion => {
            return gender !== "" ? suggestion && suggestion.gender === gender.toLowerCase() : suggestion
        }
    )
    ```
    - `price` filter operation are implemented in [Line 54 - line 58](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/index.js#L48-L52).
    ```
    let filterPrice = items.filter(
        suggestion => {
            return price ? Number(suggestion && suggestion.price && suggestion.price.substring(0, suggestion && suggestion.price && suggestion.price.length - 4)) > Number(suggestion && suggestion.sale_price && suggestion.sale_price.substring(0, suggestion && suggestion.sale_price && suggestion.sale_price.length - 4)) : suggestion
        }
    )
    ```

    - These filtered Items are then passed to [handleIntersection](https://github.com/shivangsarat/CrealyticsCodingChallenge/blob/main/src/ProductList/index.js#L60) as an Argument. Where intersection of all Individual filters are returned.
    ```
    const handleIntersection = (...args) => {
        let all = args;

        let objects = {}
        let counter = {}

        all.forEach(function(ary, n) {
            ary.forEach(function(obj) {
                var key = JSON.stringify(obj);
                objects[key] = obj;
                counter[key] = (counter[key] || 0) | (1 << n);
            })
        })

        let intersection = []
        Object.keys(counter).forEach(function(key) {
            if(counter[key] === (1 << all.length) - 1)
                intersection.push(objects[key]);
        })

        setFilteredItems(intersection)
        if (intersection.length < 100) {
            setEndtLength(intersection.length)
        } else {
            setEndtLength(100)
        }
    }
    ```