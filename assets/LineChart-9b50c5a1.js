import{u as a,k as C,j as i}from"./index-ed7b77d9.js";import{m as g}from"./moment-8e38422a.js";import{_ as f}from"./SyncLoader-b8883199.js";import{C as y,k as h,L as x,P as b,n as L,l as M,p as j,f as v,o as w}from"./index-4f687234.js";y.register(h,x,b,L,M,j,v);function T(){const r=a(e=>e.selectCryptoCurrency.selectedCryptoCurrency),s=a(e=>e.selectCurrency.selectedCurrency),l=a(e=>e.selectTime.selectedTime),{data:n,isFetching:c}=C({coin:r,currency:s,time:l}),o=n==null?void 0:n.prices,t=o==null?void 0:o.map(e=>({x:e[0],y:e[1]})),p={responsive:!0,animation:{animateScale:!0},plugins:{legend:{position:"top",align:"end"}},title:{display:!0,text:"Line Chart"},datalabels:{font:function(e){var d=e.chart.width,m=Math.round(d/32);return{size:m,weight:600}},formatter:function(e){return Math.round(e*10)/10}}},u={labels:t==null?void 0:t.map(e=>g(e.x).format("MMM Do")),datasets:[{label:r?`${s.toUpperCase()} vs ${r.toUpperCase()}  `:s.toUpperCase(),data:t==null?void 0:t.map(e=>e.y),borderColor:"rgb(0, 204, 0)",backgroundColor:"rgb(0, 128, 0)"}]};return i.jsxs("div",{className:"h-{25vh} w-full p-1 shadow-md",children:[i.jsx(f,{color:"rgb(0, 51, 102)",size:10,loading:c}),i.jsx(w,{data:u,options:p})]})}export{T as LineChart};