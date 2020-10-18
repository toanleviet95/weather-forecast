import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import Spinner from '@/components/Spinner';
import useOutside from '@/shared/useOutside';
import useDebounce from '@/shared/useDebounce';
import useAsync from '@/shared/useAsync';
import locationService from '@/services/location.service';
import { DEBOUNCE_TIME } from '@/shared/constants';
import { Wrapper } from './index.styled';

const SearchInput = ({ onSelect }) => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const debouncedSearchTerm = useDebounce(value, DEBOUNCE_TIME);
  const wrapperRef = useRef(null);
  const { execute, value: locationValue, status } = useAsync(locationService, '', false);
  
  const handleFocus = () => {
    setActive(true);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setData([]);
  };

  const handleReset = () => {
    setActive(false);
    setValue('');
    setData([]);
  };

  const handleSelect = ({title, woeid}) => {
    setValue(title);
    setActive(false);
    setData([]);
    onSelect(woeid);
  };

  useOutside(wrapperRef, () => {
    setActive(false);
  });

  useEffect(() => {
    if (debouncedSearchTerm && active) {
      setActive(true);
      // Fetch location data
      execute(debouncedSearchTerm);
    } else {
      setData([]);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (status === 'success' && debouncedSearchTerm) {
      const { data: hits } = locationValue;
      const regex = RegExp(debouncedSearchTerm, 'gi');
      const replacement = `<b><mark>${debouncedSearchTerm}</mark></b>`;
      hits.forEach((it, idx) => {
        hits[idx].markTitle = !hits[idx].title ? '' : hits[idx].title.replace(regex, replacement.toLowerCase());
      });
      setData(hits);
    }
  }, [status, debouncedSearchTerm]);

  return (
    <Wrapper className={active ? 'active' : ''}>
      <div
        ref={wrapperRef}
        className='search-input'
        onFocus={handleFocus}
      >
        <input
          value={value}
          onChange={handleChange}
          type='text'
          placeholder='Type and choose name of city...'
          id='search-input'
          autoComplete='off'
        />
        {debouncedSearchTerm  && active && (
          <div className='search-dropdown' id='hits-container'>
            {status === 'success' && data.length === 0 && <div>No location match with your input</div>}
            {status === 'pending' && <Spinner />}
            {data.length > 0 && status === 'success' && (
            <div className='ais-hits'>
              {data.map(item => (
                <div key={`location_${item.woeid}`} onClick={() => handleSelect(item)} className='ais-hits--item'>
                  <div className='hit'>
                    <div className='hit-content'>
                      <p className='hit-description' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.markTitle) }} />
                    </div>
                  </div>
                </div>
                ))}
            </div>
            )}
          </div>
        )
        }
        <span onClick={handleReset}>
          <i className='close-search'>x</i>
        </span>
      </div>
    </Wrapper>
  );
};

SearchInput.propTypes = {
  onSelect: PropTypes.func,
};

SearchInput.defaultProps = {
  onSelect: () => {},
};

export default SearchInput;
