
import styled from 'styled-components';

export const Wrapper = styled.div`
flex-grow: 1;
-ms-flex-positive: 1;
position: relative;
height: 47px;
margin-top: 50px;
&.active {
  box-shadow: 0 4px 4px rgba(79, 79, 79, 0.21);
  .search-dropdown {
    display: block;
  }
  .search-input {
    -webkit-animation: expand-search-box-animation 0.5s forwards;
    animation: expand-search-box-animation 0.5s forwards;
    input {
      border-width: 2px;
    }
    .close-search {
      display: inline-block;
    }
  }
}
.search-input {
  transition: left 0.2s ease-in-out;
  transition: width 0s ease-in-out;
  .search-icon {
    position: absolute;
    left: 15px;
    top: 13px;
    z-index: 999;
    color: #bfc1c8;
  }
  input {
    font: 16px/1.875 "Avenir Next W01", "Avenir Next", "Helvetica Neue", Helvetica, sans-serif;
    height: 50px;
    border: 1px solid #bfc1c8;
    border-radius: 4px;
    width: 100%;
    padding-left: 10px;
    &:focus {
      outline: none;
    }
  }
  i.close-search {
    color: ##bfc1c8;
    display: none;
    position: absolute;
    right: 15px;
    top: 13px;
    cursor: pointer;
  }
  .search-dropdown {
    position: absolute;
    z-index: 999999999;
    box-sizing: border-box;
    color: #B3B3B3;
    font: 14px/1.875 "Avenir Next W01", "Avenir Next", "Helvetica Neue", Helvetica, sans-serif;
    opacity: 1.00;
    padding: 20px;
    width: 100%;
    -webkit-animation: expand-search-dropdown-animation 0.5s forwards;
    animation: expand-search-dropdown-animation 0.5s forwards;
    overflow-y: scroll;
    max-height: 400px;
    border-radius: 0 0 4px 4px;
    background-color: #FCFCFC;
    border: 1px solid #E0E0E0;
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.09);
    .small {
      -webkit-flex-basis: 35%;
      -ms-flex-preferred-size: 35%;
      flex-basis: 35%;
    }
  }
}
.hit {
  border-bottom: 1px solid #E6E6E6;

  .hit-title {
    color: #bfc1c8;
    font-family: 'bt_mono', monospace;
    border-bottom: 1px solid #bfc1c8;
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 0;
    display: inline-block;
    font-size: 14px;
  }
  .hit-description {
      text-decoration: none;
      color: black;
      font-size: 14px;
      display: block;
    margin-top: 3px;
  }
  .hit-anchor {
      font-size: 13px;
      color: #666;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
.ais-hits--item {
  cursor: pointer;
  &:last-child {
    .hit {
      border: 0;  
    }
  }
  &:hover {
    background-color: #00BFFF;
  }
}
`;

export default Wrapper;
