(this.webpackJsonpportfolio_frontend=this.webpackJsonpportfolio_frontend||[]).push([[0],{64:function(e,t,n){},70:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(2),s=(n(51),n(0)),r=n.n(s),c=n(14),i=n.n(c),o=n(9),l=n(10),j=n(12),h=n(11),u=n(48),d=n(93),b=n(94),m=n(28),p=n.p+"static/media/cv.85754fbb.pdf",f=(n(64),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(d.a,{bg:"dark",variant:"dark",fixed:"top",children:[Object(a.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(b.a,{className:"justify-content-center",style:{flex:1},children:[Object(a.jsx)(m.Link,{className:"links",href:"/",activeClass:"active",to:"about",spy:!0,smooth:!0,duration:800,offset:-100,children:"\xdeorsteinn \xd3skarsson"}),Object(a.jsx)(m.Link,{className:"links",href:"/",activeClass:"active",to:"projects",spy:!0,smooth:!0,duration:800,offset:-100,children:"Verkefni"}),Object(a.jsx)("a",{className:"links",href:p,rel:"noreferrer",target:"_blank",children:"Ferilskr\xe1"})]})})]}),Object(a.jsx)("br",{})]})})}}]),n}(r.a.Component)),O=(n(70),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e;this.props.project.image;return e=this.props.project.url?Object(a.jsx)("a",{href:this.props.project.url,className:"btn btn-primary",children:"Demo"}):Object(a.jsx)("a",{href:this.props.project.url,className:"btn btn-secondary  disabled",children:"Demo"}),Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{className:"card-img-top",src:this.props.project.image,alt:"Mynd"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:this.props.project.name}),Object(a.jsx)("p",{className:"card-text",children:this.props.project.description}),Object(a.jsx)("a",{href:this.props.project.git,className:"btn btn-primary mr-2 ",children:"Git"}),e]})]})}}]),n}(r.a.Component)),v=n(47),x=n.n(v),g=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={projects:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://thorsteinn-portfolio.herokuapp.com/projects/").then((function(t){var n=t.data.results;console.log(n),e.setState({projects:n})})).catch((function(e){console.error("Error",e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container-fluid",id:"projects",children:[Object(a.jsx)("h2",{className:"text-center mb-3",children:"Verkefni"}),Object(a.jsx)("div",{className:"row",children:this.state.projects.map((function(e){return Object(a.jsx)("div",{className:"col-sm-4 mb-3",children:Object(a.jsx)(O,{project:e})})}))})]})}}]),n}(r.a.Component),k=(n(88),n.p+"static/media/am.ee05a92d.jpg"),N=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container-about",id:"about",children:Object(a.jsxs)("div",{className:"about-content",children:[Object(a.jsx)("div",{className:"container mt-5 pt-4",children:Object(a.jsx)("div",{className:"about-image",children:Object(a.jsx)("img",{src:k,alt:"",className:"rounded-circle"})})}),Object(a.jsx)("h2",{className:"mt-5 pt-4 ",children:"\xdeorsteinn \xd3skarsson"}),Object(a.jsx)("h5",{children:"T\xf6lvunarfr\xe6\xf0ingur "}),Object(a.jsx)("h6",{children:"S\xedmi: 6923097 "}),Object(a.jsxs)("h6",{children:["Netfang:",Object(a.jsx)("a",{href:"mailto:tho85@hi.is",children:" tho85@hi.is"})," "]}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"about-text",children:Object(a.jsx)("p",{children:"Vori\xf0 2020 \xfatskrifa\xf0ist \xe9g me\xf0 B.Sc. \xed t\xf6lvunarfr\xe6\xf0i me\xf0 fyrstu einkunn vi\xf0 H\xe1sk\xf3la \xcdslands. \xc1hugam\xe1l m\xedn liggja hva\xf0 helst \xed f\xf3tbolta, verja t\xedma me\xf0 vinum, t\xf6lvuleikjum og a\xf0 l\xe6ra og upplifa n\xfdja hluti. \xc9g hef mikla reynslu af Java og Javascript \xfear sem \xfeau voru helstu forritunarm\xe1lin sem kennd voru \xed H\xcd \xe1samt \xfe\xf3 nokkurri reynslu \xed Python. \xcd gegnum h\xe1sk\xf3lag\xf6ngu m\xedna haf\xf0i \xe9g hva\xf0 mest gaman af \xfeeim k\xfarsum sem gengu helst \xfat \xe1 a\xf0 hanna og k\xf3\xf0a hugb\xfana\xf0, hvort sem um r\xe6ddi t\xf6lvuleiki, vefs\xed\xf0ur e\xf0a app. \xc9g stefni \xe1 \xe1framhaldandi n\xe1m einhvernt\xedmann \xed framt\xed\xf0inni en hugurinn er \xfe\xf3 ekki alveg kominn \xfeanga\xf0 enn."})})})]})})}}]),n}(r.a.Component),y=(n(89),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={showProjects:!0,showCv:!1},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)("div",{className:"navigtion",children:Object(a.jsx)(f,{})}),Object(a.jsx)(N,{}),Object(a.jsx)("div",{className:"container mt-5",children:Object(a.jsx)(g,{})})]})}}]),n}(r.a.Component)),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),C()}},[[90,1,2]]]);
//# sourceMappingURL=main.34515709.chunk.js.map