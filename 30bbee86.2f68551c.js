(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(149)),i={title:"In Memory Signer",author:"Simon Boissonneault-Robert"},s=[{value:"Usage",id:"usage",children:[{value:"Loading an unencrypted private key",id:"loading-an-unencrypted-private-key",children:[]},{value:"Loading an encrypted private key with a passphrase",id:"loading-an-encrypted-private-key-with-a-passphrase",children:[]},{value:"Using a testnet faucet key",id:"using-a-testnet-faucet-key",children:[]},{value:"A simple factory multiple keys/wallets",id:"a-simple-factory-multiple-keyswallets",children:[]}]}],c={id:"inmemory_signer",title:"In Memory Signer",description:"> **Warning; storing private keys in memory is suitable for development workflows, but risky for",source:"@site/../docs/inmemory_signer.md",permalink:"/docs/inmemory_signer",sidebar:"docs",previous:{title:"Working with Smart Contracts",permalink:"/docs/smartcontracts"},next:{title:"TezBridge Signer",permalink:"/docs/tezbridge_signer"}},p={rightToc:s,metadata:c},l="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(l,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Warning; storing private keys in memory is suitable for development workflows, but risky for\nproduction use-cases! Use the InMemorySigner appropriately given your risk profile"))),Object(o.b)("p",null,"In memory signer is a local signer implementation that allows you to directly use a private key in your browser or your nodejs app."),Object(o.b)("p",null,"This signer implementation is intended to be used for development workflows."),Object(o.b)("p",null,"Using the InMemorySigner for operations on mainnet where your system is dealing with tokens of real value, is discouraged."),Object(o.b)("p",null,"If you require server-side signing of operations on mainnet, we recommend exploring the use of the Remote Signer package in conjunction with an HSM remote signer such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://signatory.io"}),"Signatory"),", or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tacoinfra/remote-signer"}),"TacoInfra's Remote Signer"),"."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"loading-an-unencrypted-private-key"},"Loading an unencrypted private key"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { InMemorySigner } from '@taquito/signer'\nimport { Tezos } from '@taquito/taquito'\n\nTezos.setProvider({signer: await InMemorySigner.fromSecretKey('you_private_key')})\n")),Object(o.b)("p",null,"If you configure taquito this way you will now be able to use every function that needs signing support"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Note: Operation will be signed automatically using the signer (no prompt)")),Object(o.b)("h3",{id:"loading-an-encrypted-private-key-with-a-passphrase"},"Loading an encrypted private key with a passphrase"),Object(o.b)("p",null,"If your private key is encrypted, you can specify a passphrase to decrypt it. Doing so will automatically decrypt the key and allow you to use the signer to sign transactions. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\nimport { InMemorySigner } from '@taquito/signer'\nimport { Tezos } from '@taquito/taquito'\n\nTezos.setProvider({signer: await InMemorySigner.fromSecretKey('your_private_key', 'your_passphrase')})\n")),Object(o.b)("h3",{id:"using-a-testnet-faucet-key"},"Using a testnet faucet key"),Object(o.b)("p",null,"To load a faucet key (available from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://faucet.tzalpha.net/"}),"https://faucet.tzalpha.net/"),") for working a public testnet use the ",Object(o.b)("inlineCode",{parentName:"p"},"importKey")," function.\ncan do so as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { Tezos } from '@taquito/taquito'\nimport { importKey } from '@taquito/taquito-signer';\n\n// A key faucet, similar to what is available from https://faucet.tzalpha.net/\nconst FAUCET_KEY = {\n  mnemonic: [\n    'cart',\n    'will',\n    'page',\n    'bench',\n    'notice',\n    'leisure',\n    'penalty',\n    'medal',\n    'define',\n    'odor',\n    'ride',\n    'devote',\n    'cannon',\n    'setup',\n    'rescue',\n  ],\n  secret: '35f266fbf0fca752da1342fdfc745a9c608e7b20',\n  amount: '4219352756',\n  pkh: 'tz1YBMFg1nLAPxBE6djnCPbMRH5PLXQWt8Mg',\n  password: 'Fa26j580dQ',\n  email: 'jxmjvauo.guddusns@tezos.example.org',\n};\n\nimportKey(\n  Tezos,\n  FAUCET_KEY.email,\n  FAUCET_KEY.password,\n  FAUCET_KEY.mnemonic.join(' '),\n  FAUCET_KEY.secret\n);\n// Your Tezos instance is now operably configured for signing with the faucet key.\n")),Object(o.b)("p",null,"If you configure taquito this way, you will now be able to use every function that needs signing support."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Note: Operation will be signed automatically using the signer (no prompt)")),Object(o.b)("h3",{id:"a-simple-factory-multiple-keyswallets"},"A simple factory multiple keys/wallets"),Object(o.b)("p",null,"If you require to sign operations with many different keys, then implementing a factory function can be useful.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"signerFactory")," function example creates a new Tezos instance. Use the tezos instance for signing, and discard it when complete. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { InMemorySigner } from \"@taquito/signer\";\nimport { Tezos } from \"@taquito/taquito\";\n\nconst signerFactory = async (pk: string) => {\n  await Tezos.setProvider({ signer: await InMemorySigner.fromSecretKey(pk) });\n  return Tezos;\n};\n\nconst bob = await signerFactory('bobs_secret_key')\nconst alice = await signerFactory('alices_secret_key')\n")))}u.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||y[m]||o;return n?a.a.createElement(b,s({ref:t},p,{components:n})):a.a.createElement(b,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);