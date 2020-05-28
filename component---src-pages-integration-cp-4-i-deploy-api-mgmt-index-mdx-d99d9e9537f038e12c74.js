(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),i=a("q1tI"),r=a.n(i),c=a("NmYn"),o=a.n(c),l=a("OKom"),p=a("k4MR"),b=a("TSYQ"),s=a.n(b),m=a("QH2O"),d=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(d.b)("div",{className:s()(m.pageHeader,(t={},t[m.withTabs]=i.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},a)))))},g=a("pEPl"),O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=g.data.site.siteMetadata.repository,i=a||n,r=i.baseUrl,c=i.subDirectory,o=r+"/edit/"+i.branch+c+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),N=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0}),r=i===n,c=new RegExp(n+"(?!-)"),l=a.replace(c,i);return Object(d.b)("li",{key:e,className:s()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(d.b)(N.Link,{className:f.link,to:""+l},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},i))))))},n}(r.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,r=e.Title,c=t.frontmatter,b=void 0===c?{}:c,s=t.relativePagePath,m=t.titleType,g=b.tabs,O=b.title,N=b.theme,f=b.description,k=b.keywords,v=n.data.site.pathPrefix,x=v?i.pathname.replace(v,""):i.pathname,C=g?x.split("/").filter(Boolean).slice(-1)[0]||o()(g[0],{lower:!0}):"";return Object(d.b)(p.a,{tabs:g,homepage:!1,theme:N,pageTitle:O,pageDescription:f,pageKeywords:k,titleType:m},Object(d.b)(u,{title:r?Object(d.b)(r,null):O,label:"label",tabs:g}),g&&Object(d.b)(y,{slug:x,tabs:g,currentTab:C}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:s})),Object(d.b)(j.a,{pageContext:t,location:i,slug:x,tabs:g,currentTab:C}),Object(d.b)(l.a,null))}},kvEH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=o("AnchorLinks"),p=o("AnchorLink"),b={_frontmatter:c},s=i.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(s,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This page contains guidance on how to configure the API Connect (APIC)\nrelease for both on-prem and IBM Cloud."),Object(n.b)(l,{mdxType:"AnchorLinks"},Object(n.b)(p,{mdxType:"AnchorLink"},"Prepare endpoints"),Object(n.b)(p,{mdxType:"AnchorLink"},"Obtain the pull secret"),Object(n.b)(p,{mdxType:"AnchorLink"},"Create the TLS secret"),Object(n.b)(p,{mdxType:"AnchorLink"},"Increase vm.max_map_count"),Object(n.b)(p,{mdxType:"AnchorLink"},"Storage class"),Object(n.b)(p,{mdxType:"AnchorLink"},"Create an instance"),Object(n.b)(p,{mdxType:"AnchorLink"},"Configure APIC to work with Tracing"),Object(n.b)(p,{mdxType:"AnchorLink"},"SMTP server"),Object(n.b)(p,{mdxType:"AnchorLink"},"Configuring the API Connect")),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Prepare endpoints")),Object(n.b)("p",null,"We have to define the endpoint for each of the APIC subsystems. We can\n“construct” the endpoints by adding descriptive “prefixes” to the proxy\nURL. In the sample described here, the proxy URL was\n",Object(n.b)("inlineCode",{parentName:"p"},"icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud"),"\nso we defined the endpoints as follows:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Parameter"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Sample Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"API Manager UI endpoint"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"mgmt.icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Cloud Admin UI endpoint"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"mcadmin.icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Platform API endpoint"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"mpapi.icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Consumer API endpoint"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"mcapi.icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"API Gateway"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"gw.icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Gateway Service"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"gwd.icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Analytics Client"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"ac.icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Analytics Ingestion"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"ai.icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Portal"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"portal.icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"Portal Director"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"padmin.icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud")))),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Obtain the pull secret")),Object(n.b)("p",null,"To obtain the secret for pulling the image login to the OCP CLI and run:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc get secrets -n apic\n")),Object(n.b)("p",null,"For Offline Installs - The pull secret starts with ",Object(n.b)("strong",{parentName:"p"},"deployer-dockercfg"),", in our case it was:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"deployer-dockercfg-7mlqd\n")),Object(n.b)("p",null,"For Online/entitled Registry Installs - use the ",Object(n.b)("inlineCode",{parentName:"p"},"ibm-entitlement-key")," pull secret"),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Create the TLS secret")),Object(n.b)("p",null,"The easiest way to accomplish this is to create the TLS Secret using the Visual Web Terminal inside of the Cloud Pak Foundation window.  To access this window do the following"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Via the Platform Navigator. Select the Hamburger menu, top left and\nthen select ",Object(n.b)("strong",{parentName:"p"},"Cloud Pak Foundation")),Object(n.b)("p",{parentName:"li"},"   ",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/deploy-api-mgmt/8.common-cli.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select the Visual Web Terminal icon.  2nd Icon from the right\n(looks like the box)"),Object(n.b)("p",{parentName:"li"},"   ",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/deploy-api-mgmt/9.cli2.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The Visual Web Terminal will start and then once it connects to your\ncluster you can enter in commands.  Try to enter a command\nlike ",Object(n.b)("inlineCode",{parentName:"p"},"helm ls"),".  You should see output like the following:"),Object(n.b)("p",{parentName:"li"},"   ",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/deploy-api-mgmt/10.visual.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Now you can run the following command to create the TLS secret:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"oc create secret generic apic-ent-helm-tls --from-file=cert.pem=$HOME/.helm/cert.pem --from-file=ca.pem=$HOME/.helm/ca.pem --from-file=key.pem=$HOME/.helm/key.pem -n apic\n")),Object(n.b)("p",{parentName:"li"},"where ",Object(n.b)("strong",{parentName:"p"},"apic-ent-helm-tls")," is the name of the secret."))),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Increase vm.max_map_count")),Object(n.b)("p",null,"To check and increase ",Object(n.b)("inlineCode",{parentName:"p"},"vm.max_map_count")," we would need an ",Object(n.b)("em",{parentName:"p"},"ssh")," access to each of the cluster nodes."),Object(n.b)("p",null,"The alternative is to create a DaemonSet which will do that for us. Prepare the yaml file with the following content:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"apiVersion: extensions/v1beta1\nkind: DaemonSet\nmetadata:\n  labels:\n    k8s-app: sysctl-conf\n  name: sysctl-conf\n  namespace: kube-system\nspec:\n  template:\n    metadata:\n      labels:\n        k8s-app: sysctl-conf\n    spec:\n      containers:\n      - command:\n        - sh\n        - -c\n        - sysctl -w vm.max_map_count=262144 && while true; do sleep 86400; done\n        image: busybox:1.26.2\n        name: sysctl-conf\n        resources:\n          limits:\n            cpu: 10m\n            memory: 50Mi\n          requests:\n            cpu: 10m\n            memory: 50Mi\n        securityContext:\n          privileged: true\n      terminationGracePeriodSeconds: 1\n")),Object(n.b)("p",null,"and run apply it with:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc apply -f sysctl-conf.yaml\n")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Note")," if you have done something similar for eventstreams, note that\nthe required value of vm.max_map_count is higher than what was\nrequired"),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Storage class")),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"block storage class")," is needed for APIC.\nYou can obtain the class names with"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc get storageclass\n")),Object(n.b)("p",null,"The follwing classes are available on IBM Cloud:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"NAME                          PROVISIONER         AGE\ndefault                       ibm.io/ibmc-file    9d\nibmc-block-bronze (default)   ibm.io/ibmc-block   9d\nibmc-block-custom             ibm.io/ibmc-block   9d\nibmc-block-gold               ibm.io/ibmc-block   9d\nibmc-block-retain-bronze      ibm.io/ibmc-block   9d\nibmc-block-retain-custom      ibm.io/ibmc-block   9d\nibmc-block-retain-gold        ibm.io/ibmc-block   9d\nibmc-block-retain-silver      ibm.io/ibmc-block   9d\nibmc-block-silver             ibm.io/ibmc-block   9d\nibmc-file-bronze              ibm.io/ibmc-file    9d\nibmc-file-custom              ibm.io/ibmc-file    9d\nibmc-file-gold                ibm.io/ibmc-file    9d\nibmc-file-retain-bronze       ibm.io/ibmc-file    9d\nibmc-file-retain-custom       ibm.io/ibmc-file    9d\nibmc-file-retain-gold         ibm.io/ibmc-file    9d\nibmc-file-retain-silver       ibm.io/ibmc-file    9d\nibmc-file-silver              ibm.io/ibmc-file    9d\n")),Object(n.b)("p",null,"In our case, we decided to use ",Object(n.b)("inlineCode",{parentName:"p"},"ibmc-block-gold"),".  This will work with IBM Cloud based installs.  Offline Installs Require Ceph.  Other Clouds like AWS have their own block storage.  Be sure to check their documentation."),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Create an instance")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Be sure to set permissions using the following.  Make sure you have changed context to the apic project via ",Object(n.b)("inlineCode",{parentName:"li"},"oc project apic"))),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc adm policy add-scc-to-group ibm-anyuid-scc system:serviceaccounts:apic\noc adm policy add-scc-to-group anyuid system:serviceaccounts:apic\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open platform navigator and select ",Object(n.b)("strong",{parentName:"p"},"API Connect")," / ",Object(n.b)("strong",{parentName:"p"},"Create instance"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("em",{parentName:"p"},"Continue"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Define the helm release name, select ",Object(n.b)("strong",{parentName:"p"},"apic")," namespace and the local-cluster.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Enter the registry secret name, helm TLS secret name and select storage class:")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Enter the management and portal endpoints:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190909_16.png",alt:"Platform endpoints"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Scroll enter the analytics and gateway endpoints:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190909_17.png",alt:"Gateway endpoints"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If not already, switch the view to show all parameters\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190909_17c.png",alt:"All params"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"For the non-production installation, you may switch the mode to ",Object(n.b)("strong",{parentName:"p"},"dev"),"\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190909_17d.png",alt:"Mode"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"and the number of gateway replicas to ",Object(n.b)("strong",{parentName:"p"},"1"),"\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190909_17b.png",alt:"Replicas"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Make sure the checkbox for ",Object(n.b)("inlineCode",{parentName:"p"},"v5 Gateway Compatibility")," is ",Object(n.b)("em",{parentName:"p"},"not")," checked (i.e. disabled), otherwise od tracing will not function.  See ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/od_register.html"}),"here"),"\nfor more information.  Only APIs using the API Gateway (not the v5 Compatible Gateway) will deliver data to the Operations Dashboard)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Ensure the ",Object(n.b)("inlineCode",{parentName:"p"},"Enable OD Tracing")," check box is enabled (i.e. checked).  Ensure the proper tracing namespace is populated in the requisite box.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on ",Object(n.b)("strong",{parentName:"p"},"Install"),", the confirmation message will appear:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190909_19.png",alt:"Install"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can check the status of the pods with the command:"))),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc get pods -n apic\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"When deployment is completed, all pods must be in ",Object(n.b)("strong",{parentName:"li"},"Running")," or ",Object(n.b)("strong",{parentName:"li"},"Completed")," state.  This entire process could take over an hour to complete.  The list of pods should look similar to this one:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"apic-ibm-apiconnect-icp4i-prod-operator-0 1/1 Running 1 2h\nr09aaff73f9-analytics-proxy-5c95c649d9-2ld22 1/1 Running 0 2h\nr09aaff73f9-apiconnect-cc-0 1/1 Running 0 4h\nr09aaff73f9-apiconnect-cc-1 1/1 Running 0 3h\nr09aaff73f9-apiconnect-cc-2 1/1 Running 0 2h\nr09aaff73f9-apiconnect-cc-repair-1582765200-b5964 0/1 Completed 0 2h\nr09aaff73f9-apim-v2-857cd65d49-2mpsc 1/1 Running 0 2h\nr09aaff73f9-client-dl-srv-5c74686597-j5rmw 1/1 Running 0 2h\nr09aaff73f9-juhu-b995789c-c7glf 1/1 Running 0 2h\nr09aaff73f9-ldap-6656df9f7-cfv49 1/1 Running 0 2h\nr09aaff73f9-lur-v2-5ddddcfc77-r2k74 1/1 Running 0 2h\nr09aaff73f9-ui-6dbcf69d48-qhwtk 1/1 Running 0 2h\nr307b84ffe1-analytics-client-5758786cf8-k484c 1/1 Running 0 2h\nr307b84ffe1-analytics-cronjobs-retention-1582767000-dnmvk 0/1 Completed 0 1h\nr307b84ffe1-analytics-cronjobs-rollover-1582771500-gzh7w 0/1 Completed 0 15m\nr307b84ffe1-analytics-ingestion-6d9dd9c977-5rhx2 1/1 Running 0 2h\nr307b84ffe1-analytics-mtls-gw-7c9fbbbfcd-pmdzq 1/1 Running 0 2h\nr307b84ffe1-analytics-operator-785bf8c8c9-n6nxs 1/1 Running 0 2h\nr307b84ffe1-analytics-storage-coordinating-5d596f596b-hd7v4 1/1 Running 0 2h\nr307b84ffe1-analytics-storage-data-0 1/1 Running 0 2h\nr307b84ffe1-analytics-storage-master-0 1/1 Running 0 3h\nr9a3cf2a2d0-cassandra-operator-54c75c5c6f-mvfd2 1/1 Running 0 2h\nrbcb357bd8b-apic-portal-db-0 2/2 Running 0 4h\nrbcb357bd8b-apic-portal-nginx-6d5b5f9d5c-bbczb 1/1 Running 0 2h\nrbcb357bd8b-apic-portal-www-0 2/2 Running 0 4h\nrf9ad2183d2-datapower-monitor-5c4cb7d895-zjxc2 1/1 Running 0 2h\nrf9ad2183d2-dynamic-gateway-service-0 3/3 Running 0 3h\n")),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Configure APIC to work with Tracing")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Near the end of the install of APIC, a job will be created that has the\nname ",Object(n.b)("inlineCode",{parentName:"li"},"odtracing.registration"),".  This job will not complete until the\nRegistration is completed inside of the Tracing capability."),Object(n.b)("li",{parentName:"ol"},"What will happen is that a request will be created inside of tracing\nthat you need to act upon.  Navigate to the Platform Navigator and via the\nHamburger menu select Tracing and then when the window pops out select\nthe name of your tracing instance which should be called ",Object(n.b)("inlineCode",{parentName:"li"},"tracing"),Object(n.b)("img",r({parentName:"li"},{src:"/assets/img/integration/deploy-api-mgmt/13.tracing-nav.png",alt:null}))),Object(n.b)("li",{parentName:"ol"},"Within tracing, select the ",Object(n.b)("inlineCode",{parentName:"li"},"Manage")," icon from the menu.  Looks like a\ncog wheel.\n",Object(n.b)("img",r({parentName:"li"},{src:"/assets/img/integration/deploy-api-mgmt/14.tracing-from-menu.png",alt:null}))),Object(n.b)("li",{parentName:"ol"},"Click on the ",Object(n.b)("inlineCode",{parentName:"li"},"Registration Requests")," icon."),Object(n.b)("li",{parentName:"ol"},"You should see a new registration request for your APIC install.  Click\nthe ",Object(n.b)("inlineCode",{parentName:"li"},"approve")," link"),Object(n.b)("li",{parentName:"ol"},"You will see a pop up window with some lines to copy to your clipboard.\nClick the 2 boxes icon in the top right icon to copy the commands required.\n",Object(n.b)("img",r({parentName:"li"},{src:"/assets/img/integration/deploy-api-mgmt/15.process-request.png",alt:null}))),Object(n.b)("li",{parentName:"ol"},"Ensuring you have an active ",Object(n.b)("inlineCode",{parentName:"li"},"oc")," session and in the ",Object(n.b)("inlineCode",{parentName:"li"},"apic")," project.\nPaste the commands to the window and it will run then and finish the\nprocessing."),Object(n.b)("li",{parentName:"ol"},"If you are slow in doing the steps above.  It is possible you might see\nthe ",Object(n.b)("inlineCode",{parentName:"li"},"odtracing.registration")," job fail.  No worries.  Once you complete the\npasting of the commands to create your secret, the job will re-create\nitself.")),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"SMTP server")),Object(n.b)("p",null,"In order to configure the API Connect, we need a SMTP server."),Object(n.b)("p",null,"A quick and easy setup for an smtp server required by API Connect is to use MailTrap.io. Go to ",Object(n.b)("a",r({parentName:"p"},{href:"https://mailtrap.io"}),"https://mailtrap.io")," and set yourself an account. I believe you are limited to 500 emails per month for free. See pricing plans at ",Object(n.b)("a",r({parentName:"p"},{href:"https://mailtrap.io/pricing"}),"https://mailtrap.io/pricing"),". Once you reach the monthly limit, you’ll get the SMTP protocol error: “535 5.7."),Object(n.b)("p",null,"Some key info you need in order to setup the smtp resource in the APIC Cloud are smtp server address. port number, username, and password."),Object(n.b)("p",null,"Once setup with MailTrap.io, clink on your inbox link in MailTrap and copy the username and password from the credentials section into the APIC username and password fields."),Object(n.b)("p",null,"You will see something similar below in the credentials section in MailTrap:"),Object(n.b)("p",null,"config.action_mailer.smtp_settings = {\n:user_name => ‘xxxxxxxxxxxxx’,\n:password => ‘xxxxxxxxxxxxxx’,\n:address => ‘smtp.mailtrap.io’,\n:domain => ‘smtp.mailtrap.io’,\n:port => ‘2525’,\n:authentication => :cram_md5address: smtp.mailtrap.io"),Object(n.b)("p",null,"address and port can also be take directly from the credentials section."),Object(n.b)("p",null,"address: smtp.mailtrap.io\nport: 2525\nusername: xxxxxxxxxxxxx\npassword: xxxxxxxxxxxx"),Object(n.b)("p",null,"Click the Test button in the APIC Cloud Manager and your email will be successfully sent and you can view it in MailTrap.io"),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Configuring the API Connect")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can access your new install by starting from the Platform Navigator")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select IBM Cloud Private user, default username and password in this case are admin/admin\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_32.png",alt:"Login CMC"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Under ",Object(n.b)("strong",{parentName:"p"},"Resources/Notifications")," define the SMTP server\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_51.png",alt:"SMTP"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"For our Mailtrap server enter ClusterIP address and port:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_53.png",alt:"SMTP"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Under ",Object(n.b)("strong",{parentName:"p"},"Settings/Notifications")," edit the sender email server:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_56.png",alt:"SMTP"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"And select the SMTP server defined under resources:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_57.png",alt:"email"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Start with the ",Object(n.b)("strong",{parentName:"p"},"Topology")," configuration\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_34.png",alt:"Topology"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Register service:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_35.png",alt:"Register Service"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Start with the Gateway, select the version that you defined under the Helm release properties when you started creating the instance.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("img",r({parentName:"li"},{src:"/assets/img/integration/apic-roks/Snip20190910_36.png",alt:"Gateway"}))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Give some name to the service (e.g. ",Object(n.b)("strong",{parentName:"p"},"gateway1"),") enter the ",Object(n.b)("strong",{parentName:"p"},"endpoints")," and click on ",Object(n.b)("strong",{parentName:"p"},"Save"),":\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_38.png",alt:"Gateway"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The confirmation message should appear:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_40.png",alt:"Gateway"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on ",Object(n.b)("em",{parentName:"p"},"Register service")," again and select Analytics:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_43.png",alt:"Analytics"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Give some name to the service, enter Management endpoint (the one that you defined for ",Object(n.b)("strong",{parentName:"p"},"analytics client"),") and click ",Object(n.b)("strong",{parentName:"p"},"Save"),"\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_44.png",alt:"Analytics"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The confirmation appears:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_46.png",alt:"Analytics"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Before configuring the portal, you must make sure the admin_email is defined.  This done by clicking the User icon in the Cloud Manager, then go to ",Object(n.b)("inlineCode",{parentName:"p"},"My Account"),".  Fill out the details in the Profile window that comes up.  The email field is mandatory, the remaining are optional.  Click ",Object(n.b)("inlineCode",{parentName:"p"},"Save")," when complete.\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_48.png",alt:"Portal"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Repeat the same with portal:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_48.png",alt:"Portal"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The confirmation appears again:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_62.png",alt:"Portal"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on ",Object(n.b)("strong",{parentName:"p"},"Associate Analytics Service")," to associate analytics with the gateway:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_63.png",alt:"Associate analytics"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the analytics service:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_64.png",alt:"Associate analytics"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on ",Object(n.b)("strong",{parentName:"p"},"Provider organizations")," and add new organization:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_66.png",alt:"ProvOrg"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Give some name to the organization:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_67.png",alt:"ProvOrg"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Define the owner\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_68.png",alt:"ProvOrg"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"After you submit the organization will appear on the list:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_69.png",alt:"ProvOrg"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Navigate to the API Manager, in our case the endpoint was:\n",Object(n.b)("inlineCode",{parentName:"p"},"https://mgmt.icp-proxy.icp4i-6550a99fb8cff23207ccecc2183787a9-0001.us-east.containers.appdomain.cloud/manage"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Login as the owner (defined in the previous step), the API Manager page should open:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_70.png",alt:"API Mgr"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can navigate to the catalog:\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_71.png",alt:"Sandbox"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"and create portal\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_73.png",alt:"Create portal"})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can also assign the gateway to the catalog\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/integration/apic-roks/Snip20190910_79.png",alt:"Catalog"}))))),Object(n.b)("p",null,"With that, your API Connect instance is ready for usage."),Object(n.b)("hr",null))}m.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-deploy-api-mgmt-index-mdx-d99d9e9537f038e12c74.js.map