function SearchField(props){

    return(
        <input type="search" placeholder={props.placeholder} onChange={props.handleFromComponent} />
    )
}

export default SearchField;