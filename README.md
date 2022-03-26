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

<!-- **Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it. -->

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