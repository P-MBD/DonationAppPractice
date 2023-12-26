import React,{useRef,useState} from "react";
import {View, TextInput, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import { scaleFontSize } from "../../assets/styles/scaling";
import PropTypes from 'prop-types';
const Search = props => {
    const textInputRef = useRef(null);
    const[search, setSearch]= useState('');
    const handleFocus = () => {
        textInputRef.current.focus();
    };
    const handleSearch = searchValue =>  {
        setSearch(searchValue);
        props.onSearch(searchValue);
    };
   
    return(
        <Pressable style={style.searchInputContainer} onPress={handleFocus}>
                <FontAwesomeIcon
                    icon={faSearch}
                    color={'#25C0FF'}
                    size={scaleFontSize(22)}/>
              <TextInput 
              placeholder={props.placeholder}
              ref={textInputRef} 
              style={style.searchInput}
              value={search}
              onChangeText = {(value)=> handleSearch(value)}
              />
        </Pressable>
    );
};

Search.defaultProps= {
    onSearch: () =>{},
    placeholder: 'Search'
};
Search.propTypes={
    onPress:PropTypes.func,
};

export default Search;