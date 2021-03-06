import React, {useState, useEffect, Fragment} from "react";

import ProductCard from "./ProductCard";
import ProductDetail from "../ProductDetail";
import Filters from "../Filters";

import { getJsonFromCSV } from "../Plugins/JsonFromCSV";

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import "../css/productList.scss"

export default function ProductList (props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // const [itemLength, setItemLength] = useState(0);
    const [endtLength, setEndtLength] = useState(100);
    const [filteredItems, setFilteredItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState(null);

    const [searchItem, setSearchItem] = useState("");
    const [gender, setGender] = useState("");
    const [price, setPrice] = useState(false);

    useEffect(() => {
        fetch("./products.csv").then(result => {
            return result.text();
          }).then(csv => {
            let result = getJsonFromCSV(csv);
            setItems(result);
            setIsLoaded(true);
            // setItemLength(result.length)
          }).catch((err) => {
            console.error(err)
              setError(err);
          })
    },[])

    useEffect(() => {
        const filterSearchBox = items.filter(
            suggestion => {
                return suggestion.title && suggestion.title.toLowerCase().indexOf(searchItem.toLowerCase()) > -1 || suggestion.gtin && suggestion.gtin.toLowerCase().indexOf(searchItem.toLowerCase()) > -1
            }
        )

        let filteredGender = items.filter(
            suggestion => {
                return gender !== "" ? suggestion && suggestion.gender === gender.toLowerCase() : suggestion
            }
        )

        let filterPrice = items.filter(
            suggestion => {
                return price ? Number(suggestion && suggestion.price && suggestion.price.substring(0, suggestion && suggestion.price && suggestion.price.length - 4)) > Number(suggestion && suggestion.sale_price && suggestion.sale_price.substring(0, suggestion && suggestion.sale_price && suggestion.sale_price.length - 4)) : suggestion
            }
        )

        handleIntersection(filterSearchBox, filteredGender, filterPrice)
    }, [
        searchItem,
        gender,
        price,
        items,
    ])

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

    const handleLoadMore = () => {
        if (endtLength + 100 <= filteredItems.length) {
            setEndtLength(endtLength + 100)
        } else {
            setEndtLength(filteredItems.length)
        }
    }

    const productSearch = e => {
        const userInput = e.currentTarget.value;
        setSearchItem(userInput)
    }

    const filterByGender = gender => {
        setGender(gender)
    }

    const filterByDiscount = boolean => {
        setPrice(boolean)
    }

    const handleOpen = item => {
        setProduct(item)
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false);
        setProduct(null)
    }

    if (error) {
        return <>{error.message}</>;
    } else if (!isLoaded) {
        return <Fragment>loading...</Fragment>;
    } else {
        return(
            <div className="ProductListBody">
                {/* <TextField label="Product" onChange={(e) => productSearch(e)} className="searchBox" /> */}
                <Filters productSearch={productSearch} className="filter-selectors" filterByGender={filterByGender} filterByDiscount={filterByDiscount} gender={gender} price={price} />
                {filteredItems.length > 0 ? <ProductCard data={ filteredItems.slice(0, endtLength)} onClick={handleOpen} /> : <Paper className="paper-No-products">No products to Display</Paper>}
                {endtLength < filteredItems.length && <Button variant="outlined" className="loaad-more-button" onClick={handleLoadMore}>Load More</Button>}
                {open && <ProductDetail product={product} handleClose={handleClose} open={open} />}
            </div>
        )
    }
}