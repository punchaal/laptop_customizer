(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),o=(a(13),a(1)),m=a(2),i=a(4),l=a(3),u=a(5),p=(a(15),a(17),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.items).map(function(t){return r.a.createElement("div",{className:"summary__option",key:t},r.a.createElement("div",{className:"summary__option__label"},t,"  "),r.a.createElement("div",{className:"summary__option__value"},e.props.items[t].name),r.a.createElement("div",{className:"summary__option__cost"},new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.props.items[t].cost)))}),a=Object.keys(this.props.items).reduce(function(t,a){return t+e.props.items[a].cost},0);return r.a.createElement("section",{className:"main__summary"},r.a.createElement("h3",null,"NEW GREENLEAF 2018"),t,r.a.createElement("div",{className:"summary__total"},r.a.createElement("div",{className:"summary__total__label"},"Your Price: "),r.a.createElement("div",{className:"summary__total__value"},new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a))))}}]),t}(n.Component)),d=(a(19),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.features).map(function(t){var a=e.props.features[t].map(function(a,n){var s="feature__option "+(a.name===e.props.items.selected[t].name?"feature__selected":"");return r.a.createElement("li",{key:n,className:"feature__item"},r.a.createElement("div",{className:s,onClick:function(n){return e.props.onClickUpdate(t,a)}},a.name,"(",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a.cost),")"))});return r.a.createElement("section",null,r.a.createElement("div",{className:"feature",key:t},r.a.createElement("div",{className:"feature__name"},t),r.a.createElement("ul",{className:"feature__list"},a)))});return r.a.createElement("section",{className:"main__form"},r.a.createElement("h3",null,"TECH SPECS AND CUSTOMIZATIONS"),t)}}]),t}(n.Component)),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).updateFeature=function(e,t){var n=Object.assign({},a.state.selected);n[e]=t,a.setState({selected:n})},a.state={selected:{Processor:{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},"Operating System":{name:"Ubuntu Linux 16.04",cost:200},"Video Card":{name:"Toyota Corolla 1.5v",cost:1150.98},Display:{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500}}},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"ELF Computing"),r.a.createElement("h3",null,"Laptops"),r.a.createElement("h5",null,"Customize your laptop")),r.a.createElement("main",null,r.a.createElement(d,{items:this.state,features:this.props.features,onClickUpdate:function(t,a){return e.updateFeature(t,a)}}),r.a.createElement(p,{items:this.state.selected})))}}]),t}(n.Component);c.a.render(r.a.createElement(f,{features:{Processor:[{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},{name:"Professor X AMD Fire Breather with sidewinder technology",cost:1200}],"Operating System":[{name:"Ubuntu Linux 16.04",cost:200},{name:"Bodhi Linux",cost:300}],"Video Card":[{name:"Toyota Corolla 1.5v",cost:1150.98},{name:"Mind mild breeze 2000",cost:1345}],Display:[{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500},{name:'15.3" HGTV (3840 x 2160) Home makeover edition',cost:1400}]}}),document.getElementById("root"))}],[[8,2,1]]]);
//# sourceMappingURL=main.5f0a3978.chunk.js.map