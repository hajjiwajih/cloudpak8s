(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),i=a.n(r),s=a("NmYn"),o=a.n(s),l=a("OKom"),c=a("k4MR"),p=a("TSYQ"),u=a.n(p),b=a("QH2O"),h=a("qKvR"),f=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(h.b)("div",{className:u()(b.pageHeader,(t={},t[b.withTabs]=r.length,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:b.text},a)))))},d=a("pEPl"),m=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=d.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,s=r.subDirectory,o=i+"/edit/"+r.branch+s+"/src/pages"+t;return i?Object(h.b)("div",{className:"bx--row "+m.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:m.link,href:o},"Edit this page on GitHub"))):null},v=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),j=a("I8xM");var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0}),i=r===n,s=new RegExp(n+"(?!-)"),l=a.replace(s,r);return Object(h.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(h.b)(g.Link,{className:j.link,to:""+l},e))}));return Object(h.b)("div",{className:j.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",null,Object(h.b)("ul",{className:j.list},r))))))},n}(i.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,s=t.frontmatter,p=void 0===s?{}:s,u=t.relativePagePath,b=t.titleType,d=p.tabs,m=p.title,g=p.theme,j=p.description,N=p.keywords,P=n.data.site.pathPrefix,I=P?r.pathname.replace(P,""):r.pathname,S=d?I.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"";return Object(h.b)(c.a,{tabs:d,homepage:!1,theme:g,pageTitle:m,pageDescription:j,pageKeywords:N,titleType:b},Object(h.b)(f,{title:i?Object(h.b)(i,null):m,label:"label",tabs:d}),d&&Object(h.b)(w,{slug:I,tabs:d,currentTab:S}),Object(h.b)(y.a,{padded:!0},a,Object(h.b)(O,{relativePagePath:u})),Object(h.b)(v.a,{pageContext:t,location:r,slug:I,tabs:d,currentTab:S}),Object(h.b)(l.a,null))}},emba:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},o={_frontmatter:s},l=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,i({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Openshift 4 is the base platform for all Cloud Paks described on this site.\nInstalling it in a consistent\nway in both on-premises and the public cloud provides a stable landing ground\nfor Cloud Pak deployment.  This section discusses the  installation of Openshift 4\non various cloud infrastructures and introduces the concepts around the\nTerraform automation tool. On this site, every reference to OpenShift, unless\notherwise specified, will assume OpenShift 4."),Object(n.b)("p",null,"As of this page update, the latest generally available version was OpenShift 4.3.\nOpenShift 4 is a major advance over OpenShift 3, and contains a number of\nsignificant architectural changes. The official Red Hat OpenShift documentation\nincludes a\n",Object(n.b)("a",i({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/architecture/architecture.html"}),"product architecture overview"),"\nthat describes the structure and functions of OpenShift 4. "),Object(n.b)("p",null,"OpenShift provides a consistent application environment on a variety of\ninfrastructure platforms. These platforms include public cloud providers, such\nas ",Object(n.b)("a",i({parentName:"p"},{href:"../openshift4_aws/"}),"Amazon Web Services")," (AWS),\n",Object(n.b)("a",i({parentName:"p"},{href:"../openshift4_azure/"}),"Microsoft Azure"),",\n",Object(n.b)("a",i({parentName:"p"},{href:"../openshift4_gcp/"}),"Google Cloud Platform")," (GCP), and\n",Object(n.b)("a",i({parentName:"p"},{href:"../roks/"}),"IBM’s managed Red Hat OpenShift service")," (ROKS).\nThey also include platforms traditionally thought of as on premise, such as\n",Object(n.b)("a",i({parentName:"p"},{href:"../openshift4_vmware/"}),"VMware"),", OpenStack, and bare metal. Wherever it is\ninstalled, it provides a\nconsistent container application runtime, APIs, and interfaces."),Object(n.b)("p",null,"Since the focus of this site is on installing OpenShift 4 and the IBM Cloud Paks,\ninstallation is where we will focus."),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"OpenShift Installation Overview")),Object(n.b)("p",null,"One of the major advances in OpenShift 4 is the\n",Object(n.b)("a",i({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/architecture/architecture-installation.html"}),"installation process"),".\nThere are\ntwo types of installation available:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Installer-provisioned infrastructure (IPI), where the installation program also\nprovisions all the infrstructure (machines, networks, storage, etc) required\nfor the cluster."),Object(n.b)("li",{parentName:"ul"},"User-provisioned infrastructure (UPI), where the installation program installs\nthe cluster on infrastructure that has previously been set up by the user.")),Object(n.b)("p",null,"The default installation type is installer-provisioned infrastructure, which is\nrecommended wherever possible. Using this method, the installation program works\nas a wizard, prompting you for configuration values that it cannot determine\nby itself. You are able to install either a standard cluster with preset starndard\nsizes and configurations, or you have the option of specifying more customized\nparameters. With IPI, OpenShift itself manages all aspects of the cluster,\nincluding the operating systems of the nodes. Again, the IPI method is recommended\nwherever possible."),Object(n.b)("p",null,"User-provisioned infrastructure installation can be used in special circumstances\nrequiring more customized infrastructure requirements. One of these requirements\nis a network restricted or “air-gapped” installation, where the cluster to be\ninstalled is not allowed to have internet access. In this case, the installation\nimages can be staged on an internal network, and UPI installation can be used.\nIf UPI installation is used because of client requirements, tools\nsuch as ",Object(n.b)("a",i({parentName:"p"},{href:"../terraform/"}),"terraform")," can be used to to automate the setup of the\nuser-provisioned infrastructure, and the installtion of OpenShift itself. This\nweb site provides links to example terraform configurations for most of the\ninfrastructure platforms described."))}c.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-ocp-introduction-index-mdx-fc30ad490db68e7d71e1.js.map