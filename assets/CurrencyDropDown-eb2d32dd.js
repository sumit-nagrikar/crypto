import{u as a,a as l,c as p,j as r,d as u}from"./index-ed7b77d9.js";import{p as t}from"./styled-components.browser.esm-27bb5851.js";import"./emotion-unitless.esm-e90fc357.js";const d=t.div`
  height: 10vh;
  min-width: 50px;
  display: flex;
  align-items: center;
`,h=t.select`
  width: 100%;
  height: 50px;
  overflow: scroll;
  font-weight: 700;
  background-color: #e6ecff;
  margin: 1%;
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`,s=t.option`
  text-transform: uppercase;
  font-weight: 400;
`,f=()=>{const o=a(e=>e.selectCurrency.selectedCurrency),c=l(),i=e=>{c(u(e.target.value))},{data:n}=p();return r.jsx(d,{children:r.jsxs(h,{onChange:i,value:o,children:[r.jsx(s,{value:"currency",disabled:!0,children:"Currency"}),n&&n.map(e=>r.jsx(s,{value:e,children:e.toUpperCase()},e))]})})};export{f as CurrencyDropDown};
