(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(1),c=a(9),r=(a(0),a(175)),i={id:"introduction",title:"Online psychological experiments and surveys",sidebar_label:"Online Experiments"},b={id:"introduction",title:"Online psychological experiments and surveys",description:"This documentation site refers to the [ILCB server](https://ilc-online-test.net), how it was built and is run, and refers also to several other external resources that one can use for experimenting online.",source:"@site/docs/introduction.md",permalink:"/docs/introduction",editUrl:"https://github.com/lpc-cnrs-amu/online-xp-docs/blob/master/website-docusaurus/docs/introduction.md",sidebar_label:"Online Experiments",sidebar:"ILCBSidebar",next:{title:"How to start",permalink:"/docs/ilcbhowto"}},o=[{value:"ILCB",id:"ilcb",children:[]},{value:"Table of Resources",id:"table-of-resources",children:[]},{value:"Build, manage and promote an online experiment",id:"build-manage-and-promote-an-online-experiment",children:[{value:"Cubius",id:"cubius",children:[]},{value:"JsPsych",id:"jspsych",children:[]},{value:"Lab.js",id:"labjs",children:[]},{value:"OSWeb",id:"osweb",children:[]},{value:"PsychopyJs",id:"psychopyjs",children:[]},{value:"JATOS",id:"jatos",children:[]},{value:"Pavlovia",id:"pavlovia",children:[]},{value:"The experiment factory",id:"the-experiment-factory",children:[]},{value:"Netlify",id:"netlify",children:[]},{value:"Openlab",id:"openlab",children:[]},{value:"SoSci",id:"sosci",children:[]},{value:"Sona systems",id:"sona-systems",children:[]},{value:"Prolific",id:"prolific",children:[]},{value:"Mechanical Turk",id:"mechanical-turk",children:[]},{value:"Labvanced",id:"labvanced",children:[]},{value:"Limesurvey",id:"limesurvey",children:[]},{value:"Qualtrics",id:"qualtrics",children:[]}]}],s={rightToc:o};function l(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This documentation site refers to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ilc-online-test.net"}),"ILCB server"),", how it was built and is run, and refers also to several other external resources that one can use for experimenting online."),Object(r.b)("h2",{id:"ilcb"},"ILCB"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ilcb.fr"}),"Institute for Language, Communication and the Brain")," is a French joint research institute bringing together experts in linguistics, neuroscience, psychology, medicine and computer science to understand and to model the way that language functions. The main objective of this 10-year scientific adventure is to create a generic model of the processing of language and its cerebral bases. The institutional support comes from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.cnrs.fr"}),"CNRS"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.inserm.fr"}),"INSERM"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.univ-amu.fr"}),"Aix-Marseille Universit\xe9")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://univ-avignon.fr"}),"Universit\xe9 d'Avignon"),"."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"table-of-resources"},"Table of Resources"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Refer to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/ilcbhowto"}),"How-to page")," to know more about the preferred paths."))),Object(r.b)("p",null,"Online experiments can be written in javascript from scratch, but there are many tools, libraries or all-in-one solutions to help building, managing and promoting an online experiment."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"The list below reflects the knowledge of the researchers and IT support staff involved in the ILCB server initiative.")),Object(r.b)("h5",{id:"table-1-available-tools-at-a-glance"},"Table 1. Available tools at a glance"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tool"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Build"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Manage"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Promote"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#cubius"}),"Cubius")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#jspsych"}),"JsPsych")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#labjs"}),"Lab.js")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#osweb"}),"OSWeb")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"introduction#psychopyjs"}),"PsychopyJs")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#jatos"}),"JATOS")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#pavlovia"}),"Pavlovia")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#the-experiment-factory"}),"The experiment factory")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#netlify"}),"Netlify")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#openlab"}),"Openlab")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#sosci"}),"SoSci")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#sona-systems"}),"Sona systems")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#prolific"}),"Prolific")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#mechanical-turk"}),"Mechanical Turk")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#labvanced"}),"Labvanced")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#limesurvey"}),"Limesurvey")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/introduction#qualtrics"}),"Qualtrics")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"build-manage-and-promote-an-online-experiment"},"Build, manage and promote an online experiment"),Object(r.b)("h3",{id:"cubius"},"Cubius"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/lina128/cubius"}),"Cubius")," is an Harvard University based solution for dynamically building static web sites to be hosted on Amazon servers."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"jspsych"},"JsPsych"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jspsych.org"}),"JsPsych"),"\nis a JavaScript library for running behavioral experiments in a web browser. The library provides a flexible framework for building a wide range of laboratory-like experiments that can be run online."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"JsPsych is great for advanced users."))),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"labjs"},"Lab.js"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://lab.js.org"}),"Lab.js")," is a free, open, online study builder for the behavioral and cognitive sciences."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Export your experiment as a Jatos zip file, and import it in JATOS.\nThere are plenty of videos on the web to help you start with."))),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"osweb"},"OSWeb"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/shyras/osweb/"}),"OSWeb")," is an online runtime for OpenSesame experiments."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Export your experiment as a Jatos zip file, and import it in JATOS.\nThere are plenty of tutorials on the web, and the forum is quite active"))),Object(r.b)("p",null,"The OSWeb page covers all you need to know about this free software : ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://osdoc.cogsci.nl/3.2/manual/osweb/"}),"https://osdoc.cogsci.nl/3.2/manual/osweb/")),Object(r.b)("p",null,"Basically, everything in OpenSesame that is not python scripted by hand can be turned into a web component, which in turn can be tweaked by javascript inlines. Export your experiment as a Jatos zip file, and import it in JATOS (jatos.ilcb-online-test.net)"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"psychopyjs"},"PsychopyJs"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.psychopy.org"}),"PsychopyJs")," added the facility to run studies online using a high-performance, hardware-accelerated, port of the PsychoPy Python library."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"PsychopyJs works great with Pavlovia."))),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"jatos"},"JATOS"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.jatos.org"}),"JATOS"),", ",Object(r.b)("em",{parentName:"p"},"Just Another Tool for Online Studies"),", helps you set up and run your online studies on your own server."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"JATOS is available on the ILCB experiment server."))),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"pavlovia"},"Pavlovia"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://pavlovia.org"}),"Pavlovia"),", where behaviour is studied. Supported by the Wellcome Trust and the University of Nottingham."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"the-experiment-factory"},"The experiment factory"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://expfactory.github.io"}),"The experiment factory")," builds Docker containers ready to be deployed on servers"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"netlify"},"Netlify"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.netlify.com"}),"Netlify")," hosts studies and take care of data collection. Their service is easy to use, free for basic studies, and inexpensive for large ones."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"openlab"},"Openlab"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.open-lab.online"}),"Openlab")," takes care of running experiments and collecting, storing and managing data. The basic version of the application is available for free."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sosci"},"SoSci"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.soscisurvey.de"}),"SoSci")," is a solution for online questionnaires based in Germany."),Object(r.b)("p",null,"Free for Non-commercial Research (promotion is a paid option)."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sona-systems"},"Sona systems"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.sona-systems.com/participant-recruitment.aspx"}),"Sona systems")," virtualizes every aspect of the sign-up process, eliminating the frustration of paper-based methods and bulletin boards."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Please note that the use of Sona systems raises ethical questions as participation may be seen as low-paid jobs."))),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"prolific"},"Prolific"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.prolific.co"}),"Prolific")," collects high quality responses from people around the world within minutes."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Please note that the use of Prolific raises ethical questions as participation may be seen as low-paid jobs."))),Object(r.b)("p",null,"Prolific had been initially designed by researchers in psychology. For participants, a minimum wage of $6.50 per hour is guaranteed, that is below the recommandation of  ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.psychologicalscience.org/observer/under-the-hood-of-mechanical-turk"}),"https://www.psychologicalscience.org/observer/under-the-hood-of-mechanical-turk"),"."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"mechanical-turk"},"Mechanical Turk"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.mturk.com"}),"Mechanical Turk")," is a crowdsourced market place."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Please note that the use of Mechanical Turk raises ethical questions as participation may be seen as low-paid jobs."))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},'"For some Americans, sub-minimum-wage online tasks are the only work available."')," as stated in this article ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.theatlantic.com/business/archive/2018/01/amazon-mechanical-turk/551192/"}),"https://www.theatlantic.com/business/archive/2018/01/amazon-mechanical-turk/551192/")," : )."),Object(r.b)("p",null,"Researchers in psychology had proposed standard wages of $7.50 an hour or above (see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.psychologicalscience.org/observer/under-the-hood-of-mechanical-turk"}),"https://www.psychologicalscience.org/observer/under-the-hood-of-mechanical-turk"),")."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"labvanced"},"Labvanced"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.labvanced.com"}),"Labvanced")," is a cloud solution for professional web based experiments"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"ILCB user (with a ",Object(r.b)("em",{parentName:"p"},"univ-amu")," Sesame account) can benefit from a Lab licence. For a licence, please ask this ILCB web site maintainer at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/lpc-cnrs-amu/online-xp-docs/issues"}),"https://github.com/lpc-cnrs-amu/online-xp-docs/issues"),"."))),Object(r.b)("p",null,"The Lab / Department licence has :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Unlimited experiment creation"),Object(r.b)("li",{parentName:"ul"},"CSV and Excel data export"),Object(r.b)("li",{parentName:"ul"},"Unlimited Accounts / Logins"),Object(r.b)("li",{parentName:"ul"},"Unlimited Published Studies at a time"),Object(r.b)("li",{parentName:"ul"},"Importing all available experiments"),Object(r.b)("li",{parentName:"ul"},"Unlimited Storage Space"),Object(r.b)("li",{parentName:"ul"},"Unlimited Recordings for all Studies")),Object(r.b)("p",null,"along with this support conditions :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Free Feasibility Check"),Object(r.b)("li",{parentName:"ul"},"Free Template Suggestion"),Object(r.b)("li",{parentName:"ul"},"General Information Counsel"),Object(r.b)("li",{parentName:"ul"},"Answering Technical Questions"),Object(r.b)("li",{parentName:"ul"},"Telephone / Video Call Assistance"),Object(r.b)("li",{parentName:"ul"},"Experiment Implementation Supervision"),Object(r.b)("li",{parentName:"ul"},"Customized Feature Implementation")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"limesurvey"},"Limesurvey"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.limesurvey.org"}),"Limesurvey")," is an open source survey software."),Object(r.b)("p",null,"LimeSurvey (formerly PHPSurveyor) is a free and open source on-line statistical survey web app written in PHP based on a MySQL, SQLite, PostgreSQL or MSSQL database, distributed under the GNU General Public License. As a web server-based software it enables users using a web interface to develop and publish on-line surveys, collect responses, create statistics, and export the resulting data to other applications."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"ILCB users can access a free online instance of Limesurvey Community Edition at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://columbo.univ-amu.fr."}),"https://columbo.univ-amu.fr.")," To open an account, refer to the ENT help desk."))),Object(r.b)("hr",null),Object(r.b)("h5",{id:"ilcb-users"},"ILCB users"),Object(r.b)("p",null,"On ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ent.univ-amu.fr"}),"https://ent.univ-amu.fr"),", go to ",Object(r.b)("em",{parentName:"p"},"e-scolarit\xe9")," then ",Object(r.b)("em",{parentName:"p"},"limesurvey")," as in the following picture"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/limesurvey-amu.png",alt:"limesurvey-amu"}))),Object(r.b)("p",null,"On April 2020, the service ran version 3.15.5. The main page consists of menu at the top including a tutorial and templates to load, and buttons for creating an questionnaire."),Object(r.b)("h5",{id:"from-the-wikipedia-page-about-limesurvey"},"From the wikipedia page about limesurvey:"),Object(r.b)("p",null,"LimeSurvey is a web application that is installed to the user\u2019s server. After installation users can manage LimeSurvey from a web-interface. Users can use rich text in questions and messages, using a rich text editor, and images and videos can be integrated into the survey. The layout and design of the survey can be modified under a template system. Templates can be changed in a WYSIWYG HTML editor. Additionally, templates can be imported and exported through the template editor. Once a survey is finalized, the user can activate it, making it available for respondents to view and answer. Likewise, questions can also be imported and exported through the editor interface. LimeSurvey has no limit on the number of surveys a user can create, nor is there a limit on how many participants can respond. Aside from technical and practical constraints, there is also no limit on the number of questions each survey may have."),Object(r.b)("p",null,"Questions are added in groups. The questions within each group are organized on the same page. Surveys can include a variety of question types that take many response formats, including multiple choice, text input, drop-down lists, numerical input, slider input, and simple yes/no input. Questions can be arranged in a two-dimensional array, with options along one axis based on the questions on the other axis. Questions can depend on the results of other questions. For instance, a respondent might only be asked about transportation for his or her commute if he or she responded affirmatively to a question about having a job."),Object(r.b)("p",null,'LimeSurvey also provides basic statistical and graphical analysis of survey results. Surveys can either be publicly accessible or be strictly controlled through the use of "once-only" tokens, granted only to selected participants. Additionally, participants can be anonymous, or LimeSurvey can track the IP addresses of the participants. A much more detailed listing of features can be found on the LimeSurvey web page.'),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"qualtrics"},"Qualtrics"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qualtrics.com"}),"Qualtrics")," is an online survey platform"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction#resources"}),"To top")))}l.isMDXComponent=!0},175:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=c.a.createContext({}),l=function(e){var t=c.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=l(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,O=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return a?c.a.createElement(O,b({ref:t},s,{components:a})):c.a.createElement(O,b({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var s=2;s<r;s++)i[s]=a[s];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);