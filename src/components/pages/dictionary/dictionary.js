import React from 'react';
import { connect  } from 'react-redux';

import DictionaryEmpty from '../../dictionary-empty';
import ItemDictionary from '../../item-dictinary';

import { DictionaryContainer, Title, Settings, Search, Sort } from './dictionary-style';

const Dictionary = ({ dictionary, itemsDictionary }) => {
  return (
    dictionary 
    ? <DictionaryContainer>
        <Title>Словарь</Title>
        <Settings>
          <Search>
            <button type="submit" id="button">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6064 11.1922L17.8142 16.4L16.4 17.8142L11.1922 12.6064C10.0236 13.4816 8.57234 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.57234 13.4816 10.0236 12.6064 11.1922ZM7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" fill="#697077"/>
              </svg>
            </button>
            <input type="search" name="search" id="search" placeholder="Поиск"/>
          </Search>
          <Sort>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.34789e-06 12H4C4 12 4 11.55 4 11C4 10.45 4 10 4 10H6.34789e-06C6.34789e-06 10 0 10.45 0 11C0 11.55 6.34789e-06 12 6.34789e-06 12ZM0 1C0 1.55 6.34789e-06 2 6.34789e-06 2H18C18 2 18 1.55 18 1C18 0.45 18 0 18 0L6.34789e-06 0C6.34789e-06 0 0 0.45 0 1ZM6.34789e-06 7H12C12 7 12 6.55 12 6C12 5.45 12 5 12 5H6.34789e-06C6.34789e-06 5 0 5.45 0 6C0 6.55 6.34789e-06 7 6.34789e-06 7Z" fill="#697077"/>
            </svg>
            <span className="sort">Сортировать по</span>
            <span className="alf">алфавиту</span>
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L5 5L10 0H0Z" fill="#111111"/>
            </svg>

          </Sort>
        </Settings>
        <ItemDictionary itemsDictionary={itemsDictionary}/>
      </DictionaryContainer>
    : <DictionaryEmpty />
  );
};

const mapStateToProps = ({ dictionary, itemsDictionary }) => {
  return {
    dictionary,
    itemsDictionary
  }
}
export default connect(mapStateToProps)(Dictionary);