(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(57),l=a.n(r),c=(a(65),a(12)),i=a(13),u=a(15),s=a(14),d=a(18),h=a(2),m=a(58),p=(a(66),function(){return o.a.createElement("header",null,o.a.createElement("div",null,o.a.createElement(m.a,{className:"virusIcon"})),o.a.createElement("h1",null,"COVID-19 API"))}),f=a(37),b=(a(67),function(){return o.a.createElement("nav",null,o.a.createElement(d.b,{to:"/global"},o.a.createElement(f.a,null)),o.a.createElement(d.b,{to:"/location"},o.a.createElement(f.b,null)))}),C=(a(72),function(e){return o.a.createElement("option",{onClick:e.click},e.country.Country)}),y=(a(73),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={size:1},e.handleClick=function(){1===e.state.size?e.setState({size:4}):e.setState({size:1})},e.handleOnMouseDown=function(){1===e.state.size&&e.setState({size:4})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.size,a=this.props.countries.map((function(t){return o.a.createElement(C,{key:t.CountryCode,country:t,clik:e.handleClick})}));return o.a.createElement("div",{onTouchEnd:function(e){return e.preventDefault()}},o.a.createElement("select",{onMouseDown:this.handleOnMouseDown,onClick:this.handleClick,onChange:this.props.handleChange,size:t},a))}}]),a}(n.Component)),g=a(38),v=(a(169),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:{Global:{TotalConfirmed:0,TotalRecovered:0,TotalDeaths:0},actualCountry:{Country:"",TotalConfirmed:0,TotalRecovered:0,TotalDeaths:0}},isLoaded:!1},e.createMain=function(t){return"global"===e.props.type?o.a.createElement("main",null,o.a.createElement(g.Bar,{data:{labels:["Confirmed","Recovered","Deaths"],datasets:[{data:[t.Global.TotalConfirmed,t.Global.TotalRecovered,t.Global.TotalDeaths],backgroundColor:["rgba(255, 0, 0, 0.5)","rgba(59, 178, 226, 0.5)","rgba(0, 0, 0, 0.5)"],borderColor:["rgb(255, 0, 0)","rgb(59, 178, 226)","rgb(0, 0, 0)"],borderWidth:1}]},width:40,height:50,options:{title:{display:!0,text:"Global Data",padding:20,fontStyle:"normal",fontSize:20},legend:{display:!1}}})):"location"===e.props.type?o.a.createElement("main",null,o.a.createElement(y,{handleChange:e.handleChange,countries:e.props.data.Countries}),o.a.createElement(g.Bar,{data:{labels:["Confirmed","Recovered","Deaths"],datasets:[{data:[t.actualCountry.TotalConfirmed,t.actualCountry.TotalRecovered,t.actualCountry.TotalDeaths],backgroundColor:["rgba(255, 0, 0, 0.5)","rgba(59, 178, 226, 0.5)","rgba(0, 0, 0, 0.5)"],borderColor:["rgb(255, 0, 0)","rgb(59, 178, 226)","rgb(0, 0, 0)"],borderWidth:1}]},width:40,height:50,options:{title:{display:!0,text:"".concat(t.actualCountry.Country),padding:20,fontStyle:"normal",fontSize:20},legend:{display:!1}}})):void 0},e.handleChange=function(t){console.log(t.target.value),console.log(e.props.data.Countries);var a=e.props.data.Countries.filter((function(e){return e.Country===t.target.value}))[0];console.log(a.Country);var n={Country:a.Country,TotalConfirmed:a.TotalConfirmed,TotalRecovered:a.TotalRecovered,TotalDeaths:a.TotalDeaths};e.setState({data:{actualCountry:n}})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.data;this.setState({data:{Global:e.Global,actualCountry:e.Countries[0]},isLoaded:!0})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoaded;return console.log(t.actualCountry),o.a.createElement(o.a.Fragment,null,a?this.createMain(t):null)}}]),a}(n.Component)),E=(a(170),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={data:{isLoaded:!1}},e.fetchData=function(){fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(t){e.setState({data:t,isLoaded:!0})}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoaded;return o.a.createElement(d.a,{basename:"/coronavirus-api"},o.a.createElement("div",{className:"app"},o.a.createElement(p,null),o.a.createElement(b,null),a?o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/",exact:!0,component:function(){return o.a.createElement("main",null,o.a.createElement("h1",null,"Select an option..."))}}),o.a.createElement(h.a,{path:"/global",component:function(){return o.a.createElement(v,{data:t,type:"global"})}}),o.a.createElement(h.a,{path:"/location",component:function(){return o.a.createElement(v,{data:t,type:"location"})}}),o.a.createElement(h.a,{component:function(){return o.a.createElement("main",null,o.a.createElement("h1",null,"This page doesn't exist"))}})):null))}}]),a}(n.Component));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root"))},60:function(e,t,a){e.exports=a(171)},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.44ae74f9.chunk.js.map