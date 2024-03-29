import { CurrencyContext } from "../contxt/currencyContex"
import {Grid, Autocomplete, TextField, Skeleton} from "@mui/material"
import { useContext } from "react";


const SelectCountry = (props) => {

    const {value, setValue, label} = props;


    const {
        newCurrencies, 
        setNewCurrencies,        
        error,
        setError,
        loaded,
        setLoaded,
        currencies,
        setCurrencies
     } = useContext(CurrencyContext);

    if(loaded){
        return(
            <Grid item xs={12} md={3}>
                <Skeleton variant="rounded" height={60}></Skeleton>
            </Grid> 
        )
    }

    if(error){
        return "Something Went Wrong!"
    }
    
    

    // const filteredData = countriesData.filter(countary => {
    //    return  "currencies" in countary && 
    //    currencies.includes(Object.keys(countary.currencies)[0])
    //  } );
    // const dataCountary = filteredData.map(countary => {
    //     // return `${countary.flag} ${Object.keys(countary.currencies)[0]} ${countary.name.common}`
    //     return `${Object.keys(countary.currencies)[0]}`
    // })
    

    return (
        <Grid item xs={12} md={3}>
            <Autocomplete
                value={value}
                disableClearable
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                options={currencies}
                renderInput={(params) => <TextField {...params} label={label}
                />}
            />
        </Grid>
    );
};

export default SelectCountry;