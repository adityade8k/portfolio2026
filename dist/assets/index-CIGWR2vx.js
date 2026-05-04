(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="164",Si={ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qh=0,gl=1,$h=2,Cu=1,Pu=2,Sn=3,Tn=0,Ut=1,Gt=2,Hn=0,Wi=1,vl=2,_l=3,xl=4,ef=5,oi=100,tf=101,nf=102,rf=103,sf=104,of=200,af=201,lf=202,cf=203,ma=204,ga=205,uf=206,hf=207,ff=208,df=209,pf=210,mf=211,gf=212,vf=213,_f=214,xf=0,yf=1,Sf=2,zs=3,Mf=4,Ef=5,bf=6,Tf=7,Lu=0,wf=1,Af=2,Vn=0,Rf=1,Cf=2,Pf=3,Lf=4,Uf=5,Df=6,If=7,Uu=300,Zi=301,Ji=302,va=303,_a=304,Zs=306,xa=1e3,Mn=1001,ya=1002,Kt=1003,Nf=1004,ns=1005,Ht=1006,xo=1007,ci=1008,Wn=1009,Ff=1010,Of=1011,Du=1012,Iu=1013,Qi=1014,kn=1015,Js=1016,Nu=1017,Fu=1018,Hr=1020,Bf=35902,kf=1021,zf=1022,un=1023,Gf=1024,Hf=1025,Xi=1026,Ir=1027,Vf=1028,Ou=1029,Wf=1030,Bu=1031,ku=1033,yo=33776,So=33777,Mo=33778,Eo=33779,yl=35840,Sl=35841,Ml=35842,El=35843,bl=36196,Tl=37492,wl=37496,Al=37808,Rl=37809,Cl=37810,Pl=37811,Ll=37812,Ul=37813,Dl=37814,Il=37815,Nl=37816,Fl=37817,Ol=37818,Bl=37819,kl=37820,zl=37821,bo=36492,Gl=36494,Hl=36495,Xf=36283,Vl=36284,Wl=36285,Xl=36286,jf=3200,zu=3201,Gu=0,Yf=1,Bn="",zt="srgb",qn="srgb-linear",Fa="display-p3",Qs="display-p3-linear",Gs="linear",it="srgb",Hs="rec709",Vs="p3",Ei=7680,jl=519,qf=512,Kf=513,Zf=514,Hu=515,Jf=516,Qf=517,$f=518,ed=519,Yl=35044,ql="300 es",En=2e3,Ws=2001;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const ji=Math.PI/180,Nr=180/Math.PI;function mi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[s&255]+Tt[s>>8&255]+Tt[s>>16&255]+Tt[s>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function Oa(s,e){return(s%e+e)%e}function td(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function nd(s,e,t){return s!==e?(t-s)/(e-s):0}function Rr(s,e,t){return(1-t)*s+t*e}function id(s,e,t,n){return Rr(s,e,1-Math.exp(-t*n))}function rd(s,e=1){return e-Math.abs(Oa(s,e*2)-e)}function sd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function od(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ad(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ld(s,e){return s+Math.random()*(e-s)}function cd(s){return s*(.5-Math.random())}function ud(s){s!==void 0&&(Kl=s);let e=Kl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hd(s){return s*ji}function fd(s){return s*Nr}function dd(s){return(s&s-1)===0&&s!==0}function pd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function md(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bn={DEG2RAD:ji,RAD2DEG:Nr,generateUUID:mi,clamp:xt,euclideanModulo:Oa,mapLinear:td,inverseLerp:nd,lerp:Rr,damp:id,pingpong:rd,smoothstep:sd,smootherstep:od,randInt:ad,randFloat:ld,randFloatSpread:cd,seededRandom:ud,degToRad:hd,radToDeg:fd,isPowerOfTwo:dd,ceilPowerOfTwo:pd,floorPowerOfTwo:md,setQuaternionFromProperEuler:gd,normalize:Pt,denormalize:Gi};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],v=i[0],p=i[3],m=i[6],b=i[1],_=i[4],y=i[7],I=i[2],L=i[5],w=i[8];return r[0]=o*v+a*b+l*I,r[3]=o*p+a*_+l*L,r[6]=o*m+a*y+l*w,r[1]=c*v+u*b+h*I,r[4]=c*p+u*_+h*L,r[7]=c*m+u*y+h*w,r[2]=f*v+d*b+g*I,r[5]=f*p+d*_+g*L,r[8]=f*m+d*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new He;function Vu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vd(){const s=Fr("canvas");return s.style.display="block",s}const Zl={};function _d(s){s in Zl||(Zl[s]=!0,console.warn(s))}const Jl=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ql=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[qn]:{transfer:Gs,primaries:Hs,toReference:s=>s,fromReference:s=>s},[zt]:{transfer:it,primaries:Hs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Qs]:{transfer:Gs,primaries:Vs,toReference:s=>s.applyMatrix3(Ql),fromReference:s=>s.applyMatrix3(Jl)},[Fa]:{transfer:it,primaries:Vs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ql),fromReference:s=>s.applyMatrix3(Jl).convertLinearToSRGB()}},xd=new Set([qn,Qs]),et={enabled:!0,_workingColorSpace:qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!xd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=is[e].toReference,i=is[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return is[s].primaries},getTransfer:function(s){return s===Bn?Gs:is[s].transfer}};function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bi;class yd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=Fr("canvas")),bi.width=e.width,bi.height=e.height;const n=bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Yi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sd=0;class Wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ao(i[o].image)):r.push(Ao(i[o]))}else r=Ao(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ao(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Md=0;class Rt extends pi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Mn,i=Mn,r=Ht,o=ci,a=un,l=Wn,c=Rt.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=mi(),this.name="",this.source=new Wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Uu;Rt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(d+1)/2,I=(m+1)/2,L=(u+f)/4,w=(h+v)/4,F=(g+p)/4;return _>y&&_>I?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=L/n,r=w/n):y>I?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=L/i,r=F/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=w/r,i=F/r),this.set(n,i,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-v)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ed extends pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends Ed{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xu extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bd extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*v,b=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const I=Math.sqrt(_),L=Math.atan2(I,m*b);p=Math.sin(p*L)/I,a=Math.sin(a*L)/I}const y=a*b;if(l=l*p+f*y,c=c*p+d*y,u=u*p+g*y,h=h*p+v*y,p===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new Y,$l=new wn;class gi{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qt):Qt.fromBufferAttribute(r,o),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),ss.subVectors(this.max,_r),Ti.subVectors(e.a,_r),wi.subVectors(e.b,_r),Ai.subVectors(e.c,_r),Ln.subVectors(wi,Ti),Un.subVectors(Ai,wi),Jn.subVectors(Ti,Ai);let t=[0,-Ln.z,Ln.y,0,-Un.z,Un.y,0,-Jn.z,Jn.y,Ln.z,0,-Ln.x,Un.z,0,-Un.x,Jn.z,0,-Jn.x,-Ln.y,Ln.x,0,-Un.y,Un.x,0,-Jn.y,Jn.x,0];return!Co(t,Ti,wi,Ai,ss)||(t=[1,0,0,0,1,0,0,0,1],!Co(t,Ti,wi,Ai,ss))?!1:(os.crossVectors(Ln,Un),t=[os.x,os.y,os.z],Co(t,Ti,wi,Ai,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Qt=new Y,rs=new gi,Ti=new Y,wi=new Y,Ai=new Y,Ln=new Y,Un=new Y,Jn=new Y,_r=new Y,ss=new Y,os=new Y,Qn=new Y;function Co(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Qn.fromArray(s,r);const a=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Td=new gi,xr=new Y,Po=new Y;class Vr{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Td.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Po)),this.expandByPoint(xr.copy(e.center).sub(Po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new Y,Lo=new Y,as=new Y,Dn=new Y,Uo=new Y,ls=new Y,Do=new Y;class $s{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lo.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Lo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(as),a=Dn.dot(this.direction),l=-Dn.dot(as),c=Dn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Lo).addScaledVector(as,f),d}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),i=gn.dot(gn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,i,r){Uo.subVectors(t,e),ls.subVectors(n,e),Do.crossVectors(Uo,ls);let o=this.direction.dot(Do),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);const l=a*this.direction.dot(ls.crossVectors(Dn,ls));if(l<0)return null;const c=a*this.direction.dot(Uo.cross(Dn));if(c<0||l+c>o)return null;const u=-a*Dn.dot(Do);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,g,v,p){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,v,p)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wd,e,Ad)}lookAt(e,t,n){const i=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),In.crossVectors(n,Bt),In.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),In.crossVectors(n,Bt)),In.normalize(),cs.crossVectors(Bt,In),i[0]=In.x,i[4]=cs.x,i[8]=Bt.x,i[1]=In.y,i[5]=cs.y,i[9]=Bt.y,i[2]=In.z,i[6]=cs.z,i[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],b=n[3],_=n[7],y=n[11],I=n[15],L=i[0],w=i[4],F=i[8],T=i[12],S=i[1],W=i[5],D=i[9],N=i[13],H=i[2],q=i[6],K=i[10],$=i[14],k=i[3],Z=i[7],X=i[11],z=i[15];return r[0]=o*L+a*S+l*H+c*k,r[4]=o*w+a*W+l*q+c*Z,r[8]=o*F+a*D+l*K+c*X,r[12]=o*T+a*N+l*$+c*z,r[1]=u*L+h*S+f*H+d*k,r[5]=u*w+h*W+f*q+d*Z,r[9]=u*F+h*D+f*K+d*X,r[13]=u*T+h*N+f*$+d*z,r[2]=g*L+v*S+p*H+m*k,r[6]=g*w+v*W+p*q+m*Z,r[10]=g*F+v*D+p*K+m*X,r[14]=g*T+v*N+p*$+m*z,r[3]=b*L+_*S+y*H+I*k,r[7]=b*w+_*W+y*q+I*Z,r[11]=b*F+_*D+y*K+I*X,r[15]=b*T+_*N+y*$+I*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+v*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+p*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],b=h*p*c-v*f*c+v*l*d-a*p*d-h*l*m+a*f*m,_=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,y=u*v*c-g*h*c+g*a*d-o*v*d-u*a*m+o*h*m,I=g*h*l-u*v*l-g*a*f+o*v*f+u*a*p-o*h*p,L=t*b+n*_+i*y+r*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/L;return e[0]=b*w,e[1]=(v*f*r-h*p*r-v*i*d+n*p*d+h*i*m-n*f*m)*w,e[2]=(a*p*r-v*l*r+v*i*c-n*p*c-a*i*m+n*l*m)*w,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*w,e[4]=_*w,e[5]=(u*p*r-g*f*r+g*i*d-t*p*d-u*i*m+t*f*m)*w,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*m-t*l*m)*w,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*w,e[8]=y*w,e[9]=(g*h*r-u*v*r-g*n*d+t*v*d+u*n*m-t*h*m)*w,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*m+t*a*m)*w,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*w,e[12]=I*w,e[13]=(u*v*i-g*h*i+g*n*f-t*v*f-u*n*p+t*h*p)*w,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*p-t*a*p)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,v=o*u,p=o*h,m=a*h,b=l*c,_=l*u,y=l*h,I=n.x,L=n.y,w=n.z;return i[0]=(1-(v+m))*I,i[1]=(d+y)*I,i[2]=(g-_)*I,i[3]=0,i[4]=(d-y)*L,i[5]=(1-(f+m))*L,i[6]=(p+b)*L,i[7]=0,i[8]=(g+_)*w,i[9]=(p-b)*w,i[10]=(1-(f+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ri.set(i[0],i[1],i[2]).length();const o=Ri.set(i[4],i[5],i[6]).length(),a=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],$t.copy(this);const c=1/r,u=1/o,h=1/a;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=En){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===En)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ws)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=En){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*c,d=(n+i)*u;let g,v;if(a===En)g=(o+r)*h,v=-2*h;else if(a===Ws)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ri=new Y,$t=new rt,wd=new Y(0,0,0),Ad=new Y(1,1,1),In=new Y,cs=new Y,Bt=new Y,ec=new rt,tc=new wn;class hn{constructor(e=0,t=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ec,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tc.setFromEuler(this),this.setFromQuaternion(tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Ba{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rd=0;const nc=new Y,Ci=new wn,vn=new rt,us=new Y,yr=new Y,Cd=new Y,Pd=new wn,ic=new Y(1,0,0),rc=new Y(0,1,0),sc=new Y(0,0,1),oc={type:"added"},Ld={type:"removed"},Pi={type:"childadded",child:null},Io={type:"childremoved",child:null};class dt extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new Y,t=new hn,n=new wn,i=new Y(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new He}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(ic,e)}rotateY(e){return this.rotateOnAxis(rc,e)}rotateZ(e){return this.rotateOnAxis(sc,e)}translateOnAxis(e,t){return nc.copy(e).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ic,e)}translateY(e){return this.translateOnAxis(rc,e)}translateZ(e){return this.translateOnAxis(sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?us.copy(e):us.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(yr,us,this.up):vn.lookAt(us,yr,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(vn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oc),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ld),Io.child=e,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oc),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,Cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new Y(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new Y,_n=new Y,No=new Y,xn=new Y,Li=new Y,Ui=new Y,ac=new Y,Fo=new Y,Oo=new Y,Bo=new Y;class nn{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),en.subVectors(e,t),i.cross(en);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){en.subVectors(i,t),_n.subVectors(n,t),No.subVectors(e,t);const o=en.dot(en),a=en.dot(_n),l=en.dot(No),c=_n.dot(_n),u=_n.dot(No),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(o,xn.y),l.addScaledVector(a,xn.z),l)}static isFrontFacing(e,t,n,i){return en.subVectors(n,t),_n.subVectors(e,t),en.cross(_n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),en.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Li.subVectors(i,n),Ui.subVectors(r,n),Fo.subVectors(e,n);const l=Li.dot(Fo),c=Ui.dot(Fo);if(l<=0&&c<=0)return t.copy(n);Oo.subVectors(e,i);const u=Li.dot(Oo),h=Ui.dot(Oo);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Li,o);Bo.subVectors(e,r);const d=Li.dot(Bo),g=Ui.dot(Bo);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ui,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return ac.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(ac,a);const m=1/(p+v+f);return o=v*m,a=f*m,t.copy(n).addScaledVector(Li,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function ko(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Oa(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ko(o,r,e+1/3),this.g=ko(o,r,e),this.b=ko(o,r,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return et.fromWorkingColorSpace(wt.copy(this),e),Math.round(xt(wt.r*255,0,255))*65536+Math.round(xt(wt.g*255,0,255))*256+Math.round(xt(wt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(wt.copy(this),t);const n=wt.r,i=wt.g,r=wt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=zt){et.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,i=wt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(hs);const n=Rr(Nn.h,hs.h,t),i=Rr(Nn.s,hs.s,t),r=Rr(Nn.l,hs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ze;Ze.NAMES=ju;let Ud=0;class ir extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Wi,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wr extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new Y,fs=new Se;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _d("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yl&&(e.usage=this.usage),e}}class Yu extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qu extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dd=0;const qt=new rt,zo=new dt,Di=new Y,kt=new gi,Sr=new gi,_t=new Y;class Vt extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vu(e)?qu:Yu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(kt.min,Sr.min),kt.expandByPoint(_t),_t.addVectors(kt.max,Sr.max),kt.expandByPoint(_t)):(kt.expandByPoint(Sr.min),kt.expandByPoint(Sr.max))}kt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_t.fromBufferAttribute(a,c),l&&(Di.fromBufferAttribute(e,c),_t.add(Di)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new Y,l[F]=new Y;const c=new Y,u=new Y,h=new Y,f=new Se,d=new Se,g=new Se,v=new Y,p=new Y;function m(F,T,S){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,F),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const W=1/(d.x*g.y-g.x*d.y);isFinite(W)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(W),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(W),a[F].add(v),a[T].add(v),a[S].add(v),l[F].add(p),l[T].add(p),l[S].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let F=0,T=b.length;F<T;++F){const S=b[F],W=S.start,D=S.count;for(let N=W,H=W+D;N<H;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new Y,y=new Y,I=new Y,L=new Y;function w(F){I.fromBufferAttribute(i,F),L.copy(I);const T=a[F];_.copy(T),_.sub(I.multiplyScalar(I.dot(T))).normalize(),y.crossVectors(L,T);const W=y.dot(l[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,W)}for(let F=0,T=b.length;F<T;++F){const S=b[F],W=S.start,D=S.count;for(let N=W,H=W+D;N<H;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new rn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new rt,$n=new $s,ds=new Vr,cc=new Y,Ii=new Y,Ni=new Y,Fi=new Y,Go=new Y,ps=new Y,ms=new Se,gs=new Se,vs=new Se,uc=new Y,hc=new Y,fc=new Y,_s=new Y,xs=new Y;class At extends dt{constructor(e=new Vt,t=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ps.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Go.fromBufferAttribute(h,e),o?ps.addScaledVector(Go,u):ps.addScaledVector(Go.sub(t),u))}t.add(ps)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(r),$n.copy(e.ray).recast(e.near),!(ds.containsPoint($n.origin)===!1&&($n.intersectSphere(ds,cc)===null||$n.origin.distanceToSquared(cc)>(e.far-e.near)**2))&&(lc.copy(r).invert(),$n.copy(e.ray).applyMatrix4(lc),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),_=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=b,I=_;y<I;y+=3){const L=a.getX(y),w=a.getX(y+1),F=a.getX(y+2);i=ys(this,m,e,n,c,u,h,L,w,F),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const b=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);i=ys(this,o,e,n,c,u,h,b,_,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],b=Math.max(p.start,d.start),_=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=b,I=_;y<I;y+=3){const L=y,w=y+1,F=y+2;i=ys(this,m,e,n,c,u,h,L,w,F),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const b=p,_=p+1,y=p+2;i=ys(this,o,e,n,c,u,h,b,_,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Id(s,e,t,n,i,r,o,a){let l;if(e.side===Ut?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Tn,a),l===null)return null;xs.copy(a),xs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(xs);return c<t.near||c>t.far?null:{distance:c,point:xs.clone(),object:s}}function ys(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ii),s.getVertexPosition(l,Ni),s.getVertexPosition(c,Fi);const u=Id(s,e,t,n,Ii,Ni,Fi,_s);if(u){i&&(ms.fromBufferAttribute(i,a),gs.fromBufferAttribute(i,l),vs.fromBufferAttribute(i,c),u.uv=nn.getInterpolation(_s,Ii,Ni,Fi,ms,gs,vs,new Se)),r&&(ms.fromBufferAttribute(r,a),gs.fromBufferAttribute(r,l),vs.fromBufferAttribute(r,c),u.uv1=nn.getInterpolation(_s,Ii,Ni,Fi,ms,gs,vs,new Se)),o&&(uc.fromBufferAttribute(o,a),hc.fromBufferAttribute(o,l),fc.fromBufferAttribute(o,c),u.normal=nn.getInterpolation(_s,Ii,Ni,Fi,uc,hc,fc,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};nn.getNormal(Ii,Ni,Fi,h.normal),u.face=h}return u}class rr extends Vt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2));function g(v,p,m,b,_,y,I,L,w,F,T){const S=y/w,W=I/F,D=y/2,N=I/2,H=L/2,q=w+1,K=F+1;let $=0,k=0;const Z=new Y;for(let X=0;X<K;X++){const z=X*W-N;for(let te=0;te<q;te++){const le=te*S-D;Z[v]=le*b,Z[p]=z*_,Z[m]=H,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[p]=0,Z[m]=L>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(te/w),h.push(1-X/F),$+=1}}for(let X=0;X<F;X++)for(let z=0;z<w;z++){const te=f+z+q*X,le=f+z+q*(X+1),P=f+(z+1)+q*(X+1),R=f+(z+1)+q*X;l.push(te,le,R),l.push(le,P,R),k+=6}a.addGroup(d,k,T),d+=k,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(s){const e={};for(let t=0;t<s.length;t++){const n=$i(s[t]);for(const i in n)e[i]=n[i]}return e}function Nd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ku(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Zu={clone:$i,merge:Lt};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=Nd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ju extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new Y,dc=new Se,pc=new Se;class tn extends Ju{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,dc,pc),t.subVectors(pc,dc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ji*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class Bd extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Oi,Bi,e,t);i.layers=this.layers,this.add(i);const r=new tn(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const o=new tn(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new tn(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const l=new tn(Oi,Bi,e,t);l.layers=this.layers,this.add(l);const c=new tn(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qu extends Rt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zi,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kd extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new rr(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Hn});r.uniforms.tEquirect.value=t;const o=new At(i,r),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=Ht),new Bd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ho=new Y,zd=new Y,Gd=new He;class On{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ho.subVectors(n,t).cross(zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gd.getNormalMatrix(e),i=this.coplanarPoint(Ho).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Vr,Ss=new Y;class ka{constructor(e=new On,t=new On,n=new On,i=new On,r=new On,o=new On){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],v=i[10],p=i[11],m=i[12],b=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,p-d,y-m).normalize(),n[1].setComponents(l+r,f+c,p+d,y+m).normalize(),n[2].setComponents(l+o,f+u,p+g,y+b).normalize(),n[3].setComponents(l-o,f-u,p-g,y-b).normalize(),n[4].setComponents(l-a,f-h,p-v,y-_).normalize(),t===En)n[5].setComponents(l+a,f+h,p+v,y+_).normalize();else if(t===Ws)n[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ss.x=i.normal.x>0?e.max.x:e.min.x,Ss.y=i.normal.y>0?e.max.y:e.min.y,Ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $u(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Hd(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(s.bindBuffer(c,a),h.count===-1&&f.length===0&&s.bufferSubData(c,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const v=f[d];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class Rn extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const b=m*f-o;for(let _=0;_<c;_++){const y=_*h-r;g.push(y,-b,0),v.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const _=b+c*m,y=b+c*(m+1),I=b+1+c*(m+1),L=b+1+c*m;d.push(_,y,L),d.push(y,I,L)}this.setIndex(d),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Om=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ug=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Vd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:jd,alphatest_fragment:Yd,alphatest_pars_fragment:qd,aomap_fragment:Kd,aomap_pars_fragment:Zd,batching_pars_vertex:Jd,batching_vertex:Qd,begin_vertex:$d,beginnormal_vertex:ep,bsdfs:tp,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:rp,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:op,clipping_planes_vertex:ap,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:up,color_vertex:hp,common:fp,cube_uv_reflection_fragment:dp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:vp,emissivemap_pars_fragment:_p,colorspace_fragment:xp,colorspace_pars_fragment:yp,envmap_fragment:Sp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Ep,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Np,envmap_vertex:Tp,fog_vertex:wp,fog_pars_vertex:Ap,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Dp,lights_pars_begin:Ip,lights_toon_fragment:Fp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:kp,lights_physical_fragment:zp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Hp,lights_fragment_maps:Vp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:qp,map_fragment:Kp,map_pars_fragment:Zp,map_particle_fragment:Jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:em,morphinstance_vertex:tm,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:rm,morphtarget_vertex:sm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:um,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:vm,premultiplied_alpha_fragment:_m,project_vertex:xm,dithering_fragment:ym,dithering_pars_fragment:Sm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:Tm,shadowmap_vertex:wm,shadowmask_pars_fragment:Am,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Um,specularmap_pars_fragment:Dm,tonemapping_fragment:Im,tonemapping_pars_fragment:Nm,transmission_fragment:Fm,transmission_pars_fragment:Om,uv_pars_fragment:Bm,uv_pars_vertex:km,uv_vertex:zm,worldpos_vertex:Gm,background_vert:Hm,background_frag:Vm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:jm,cube_frag:Ym,depth_vert:qm,depth_frag:Km,distanceRGBA_vert:Zm,distanceRGBA_frag:Jm,equirect_vert:Qm,equirect_frag:$m,linedashed_vert:eg,linedashed_frag:tg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:rg,meshlambert_frag:sg,meshmatcap_vert:og,meshmatcap_frag:ag,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:ug,meshphong_frag:hg,meshphysical_vert:fg,meshphysical_frag:dg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:vg,shadow_vert:_g,shadow_frag:xg,sprite_vert:yg,sprite_frag:Sg},Le={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},cn={basic:{uniforms:Lt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Lt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Lt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Lt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Lt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Lt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Lt([Le.points,Le.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Lt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Lt([Le.common,Le.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Lt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Lt([Le.sprite,Le.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Lt([Le.common,Le.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Lt([Le.lights,Le.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};cn.physical={uniforms:Lt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Ms={r:0,b:0,g:0},ti=new hn,Mg=new rt;function Eg(s,e,t,n,i,r,o){const a=new Ze(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function v(b){let _=!1;const y=g(b);y===null?m(a,l):y&&y.isColor&&(m(y,1),_=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function p(b,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===Zs)?(u===void 0&&(u=new At(new rr(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:$i(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ti.copy(_.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(ti)),u.material.toneMapped=et.getTransfer(y.colorSpace)!==it,(h!==y||f!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new At(new Rn(2,2),new Xn({name:"BackgroundMaterial",uniforms:$i(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=et.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,_){b.getRGB(Ms,Ku(s)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:v,addToRenderList:p}}function bg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(S,W,D,N,H){let q=!1;const K=h(N,D,W);r!==K&&(r=K,c(r.object)),q=d(S,N,D,H),q&&g(S,N,D,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(S,W,D,N),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,W,D){const N=D.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let q=H[W.id];q===void 0&&(q={},H[W.id]=q);let K=q[N];return K===void 0&&(K=f(l()),q[N]=K),K}function f(S){const W=[],D=[],N=[];for(let H=0;H<t;H++)W[H]=0,D[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:D,attributeDivisors:N,object:S,attributes:{},index:null}}function d(S,W,D,N){const H=r.attributes,q=W.attributes;let K=0;const $=D.getAttributes();for(const k in $)if($[k].location>=0){const X=H[k];let z=q[k];if(z===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(z=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(z=S.instanceColor)),X===void 0||X.attribute!==z||z&&X.data!==z.data)return!0;K++}return r.attributesNum!==K||r.index!==N}function g(S,W,D,N){const H={},q=W.attributes;let K=0;const $=D.getAttributes();for(const k in $)if($[k].location>=0){let X=q[k];X===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(X=S.instanceColor));const z={};z.attribute=X,X&&X.data&&(z.data=X.data),H[k]=z,K++}r.attributes=H,r.attributesNum=K,r.index=N}function v(){const S=r.newAttributes;for(let W=0,D=S.length;W<D;W++)S[W]=0}function p(S){m(S,0)}function m(S,W){const D=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;D[S]=1,N[S]===0&&(s.enableVertexAttribArray(S),N[S]=1),H[S]!==W&&(s.vertexAttribDivisor(S,W),H[S]=W)}function b(){const S=r.newAttributes,W=r.enabledAttributes;for(let D=0,N=W.length;D<N;D++)W[D]!==S[D]&&(s.disableVertexAttribArray(D),W[D]=0)}function _(S,W,D,N,H,q,K){K===!0?s.vertexAttribIPointer(S,W,D,H,q):s.vertexAttribPointer(S,W,D,N,H,q)}function y(S,W,D,N){v();const H=N.attributes,q=D.getAttributes(),K=W.defaultAttributeValues;for(const $ in q){const k=q[$];if(k.location>=0){let Z=H[$];if(Z===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){const X=Z.normalized,z=Z.itemSize,te=e.get(Z);if(te===void 0)continue;const le=te.buffer,P=te.type,R=te.bytesPerElement,C=P===s.INT||P===s.UNSIGNED_INT||Z.gpuType===Iu;if(Z.isInterleavedBufferAttribute){const M=Z.data,V=M.stride,re=Z.offset;if(M.isInstancedInterleavedBuffer){for(let U=0;U<k.locationSize;U++)m(k.location+U,M.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=M.meshPerAttribute*M.count)}else for(let U=0;U<k.locationSize;U++)p(k.location+U);s.bindBuffer(s.ARRAY_BUFFER,le);for(let U=0;U<k.locationSize;U++)_(k.location+U,z/k.locationSize,P,X,V*R,(re+z/k.locationSize*U)*R,C)}else{if(Z.isInstancedBufferAttribute){for(let M=0;M<k.locationSize;M++)m(k.location+M,Z.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let M=0;M<k.locationSize;M++)p(k.location+M);s.bindBuffer(s.ARRAY_BUFFER,le);for(let M=0;M<k.locationSize;M++)_(k.location+M,z/k.locationSize,P,X,z*R,z/k.locationSize*M*R,C)}}else if(K!==void 0){const X=K[$];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(k.location,X);break;case 3:s.vertexAttrib3fv(k.location,X);break;case 4:s.vertexAttrib4fv(k.location,X);break;default:s.vertexAttrib1fv(k.location,X)}}}}b()}function I(){F();for(const S in n){const W=n[S];for(const D in W){const N=W[D];for(const H in N)u(N[H].object),delete N[H];delete W[D]}delete n[S]}}function L(S){if(n[S.id]===void 0)return;const W=n[S.id];for(const D in W){const N=W[D];for(const H in N)u(N[H].object),delete N[H];delete W[D]}delete n[S.id]}function w(S){for(const W in n){const D=n[W];if(D[S.id]===void 0)continue;const N=D[S.id];for(const H in N)u(N[H].object),delete N[H];delete D[S.id]}}function F(){T(),o=!0,r!==i&&(r=i,c(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function Tg(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<h;d++)this.render(c[d],u[d]);else{f.multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<f.length;v++)t.update(g,n,f[v])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==un&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const w=L===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Wn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==kn&&!w)}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:m,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:y,maxSamples:I}}function Ag(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new On,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const b=r?0:n,_=b*4;let y=m.clippingState||null;l.value=y,y=u(g,f,_,d);for(let I=0;I!==_;++I)y[I]=t[I];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,y=d;_!==v;++_,y+=4)o.copy(h[_]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Rg(s){let e=new WeakMap;function t(o,a){return a===va?o.mapping=Zi:a===_a&&(o.mapping=Ji),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===va||a===_a)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kd(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class za extends Ju{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hi=4,mc=[.125,.215,.35,.446,.526,.582],ai=20,Vo=new za,gc=new Ze;let Wo=null,Xo=0,jo=0,Yo=!1;const si=(1+Math.sqrt(5))/2,ki=1/si,vc=[new Y(-si,ki,0),new Y(si,ki,0),new Y(-ki,0,si),new Y(ki,0,si),new Y(0,si,-ki),new Y(0,si,ki),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class _c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo,Xo,jo),this._renderer.xr.enabled=Yo,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Js,format:un,colorSpace:qn,depthBuffer:!1},i=xc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Pg(r,e,t)}return i}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,Vo)}_sceneToCubeUV(e,t,n,i){const a=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(gc),u.toneMapping=Vn,u.autoClear=!1;const d=new Wr({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new At(new rr,d);let v=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,v=!0):(d.color.copy(gc),v=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const _=this._cubeSize;Es(i,b*_,m>2?_:0,_,_),u.setRenderTarget(i),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zi||e.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Vo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vc[(i-r-1)%vc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new At(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ai-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):ai;p>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const m=[];let b=0;for(let w=0;w<ai;++w){const F=w/v,T=Math.exp(-F*F/2);m.push(T),w===0?b+=T:w<p&&(b+=2*T)}for(let w=0;w<m.length;w++)m[w]=m[w]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const y=this._sizeLods[i],I=3*y*(i>_-Hi?i-_+Hi:0),L=4*(this._cubeSize-y);Es(t,I,L,3*y,2*y),l.setRenderTarget(t),l.render(h,Vo)}}function Cg(s){const e=[],t=[],n=[];let i=s;const r=s-Hi+1+mc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Hi?l=mc[o-s+Hi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,p=2,m=1,b=new Float32Array(v*g*d),_=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let L=0;L<d;L++){const w=L%3*2/3-1,F=L>2?0:-1,T=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];b.set(T,v*g*L),_.set(f,p*g*L);const S=[L,L,L,L,L,L];y.set(S,m*g*L)}const I=new Vt;I.setAttribute("position",new rn(b,v)),I.setAttribute("uv",new rn(_,p)),I.setAttribute("faceIndex",new rn(y,m)),e.push(I),i>Hi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xc(s,e,t){const n=new fi(s,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Pg(s,e,t){const n=new Float32Array(ai),i=new Y(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function yc(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Sc(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ga(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===va||l===_a,u=l===Zi||l===Ji;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new _c(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new _c(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ug(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dg(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let _=0,y=b.length;_<y;_+=3){const I=b[_+0],L=b[_+1],w=b[_+2];f.push(I,L,L,w,w,I)}}else if(g!==void 0){const b=g.array;v=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){const I=_+0,L=_+1,w=_+2;f.push(I,L,L,w,w,I)}}else return;const p=new(Vu(f)?qu:Yu)(f,1);p.version=v;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ig(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<g;p++)this.render(f[p]/o,d[p]);else{v.multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}}function h(f,d,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let m=0;for(let b=0;b<g;b++)m+=d[b];for(let b=0;b<v.length;b++)t.update(m,n,v[b])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ng(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fg(s,e,t){const n=new WeakMap,i=new ft;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let I=a.attributes.position.count*y,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const w=new Float32Array(I*L*4*h),F=new Xu(w,I,L,h);F.type=kn,F.needsUpdate=!0;const T=y*4;for(let W=0;W<h;W++){const D=m[W],N=b[W],H=_[W],q=I*L*4*W;for(let K=0;K<D.count;K++){const $=K*T;g===!0&&(i.fromBufferAttribute(D,K),w[q+$+0]=i.x,w[q+$+1]=i.y,w[q+$+2]=i.z,w[q+$+3]=0),v===!0&&(i.fromBufferAttribute(N,K),w[q+$+4]=i.x,w[q+$+5]=i.y,w[q+$+6]=i.z,w[q+$+7]=0),p===!0&&(i.fromBufferAttribute(H,K),w[q+$+8]=i.x,w[q+$+9]=i.y,w[q+$+10]=i.z,w[q+$+11]=H.itemSize===4?i.w:1)}}f={count:h,texture:F,size:new Se(I,L)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Og(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class eh extends Rt{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:Xi,u!==Xi&&u!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xi&&(n=Qi),n===void 0&&u===Ir&&(n=Hr),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const th=new Rt,nh=new eh(1,1);nh.compareFunction=Hu;const ih=new Xu,rh=new bd,sh=new Qu,Mc=[],Ec=[],bc=new Float32Array(16),Tc=new Float32Array(9),wc=new Float32Array(4);function sr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Mc[i];if(r===void 0&&(r=new Float32Array(i),Mc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function eo(s,e){let t=Ec[e];t===void 0&&(t=new Int32Array(e),Ec[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Bg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2fv(this.addr,e),mt(t,e)}}function zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;s.uniform3fv(this.addr,e),mt(t,e)}}function Gg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4fv(this.addr,e),mt(t,e)}}function Hg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;wc.set(n),s.uniformMatrix2fv(this.addr,!1,wc),mt(t,n)}}function Vg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Tc.set(n),s.uniformMatrix3fv(this.addr,!1,Tc),mt(t,n)}}function Wg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;bc.set(n),s.uniformMatrix4fv(this.addr,!1,bc),mt(t,n)}}function Xg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2iv(this.addr,e),mt(t,e)}}function Yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3iv(this.addr,e),mt(t,e)}}function qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4iv(this.addr,e),mt(t,e)}}function Kg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2uiv(this.addr,e),mt(t,e)}}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3uiv(this.addr,e),mt(t,e)}}function Qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4uiv(this.addr,e),mt(t,e)}}function $g(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?nh:th;t.setTexture2D(e||r,i)}function e0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rh,i)}function t0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sh,i)}function n0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ih,i)}function i0(s){switch(s){case 5126:return Bg;case 35664:return kg;case 35665:return zg;case 35666:return Gg;case 35674:return Hg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return jg;case 35668:case 35672:return Yg;case 35669:case 35673:return qg;case 5125:return Kg;case 36294:return Zg;case 36295:return Jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}function r0(s,e){s.uniform1fv(this.addr,e)}function s0(s,e){const t=sr(e,this.size,2);s.uniform2fv(this.addr,t)}function o0(s,e){const t=sr(e,this.size,3);s.uniform3fv(this.addr,t)}function a0(s,e){const t=sr(e,this.size,4);s.uniform4fv(this.addr,t)}function l0(s,e){const t=sr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function c0(s,e){const t=sr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function u0(s,e){const t=sr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function h0(s,e){s.uniform1iv(this.addr,e)}function f0(s,e){s.uniform2iv(this.addr,e)}function d0(s,e){s.uniform3iv(this.addr,e)}function p0(s,e){s.uniform4iv(this.addr,e)}function m0(s,e){s.uniform1uiv(this.addr,e)}function g0(s,e){s.uniform2uiv(this.addr,e)}function v0(s,e){s.uniform3uiv(this.addr,e)}function _0(s,e){s.uniform4uiv(this.addr,e)}function x0(s,e,t){const n=this.cache,i=e.length,r=eo(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||th,r[o])}function y0(s,e,t){const n=this.cache,i=e.length,r=eo(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||rh,r[o])}function S0(s,e,t){const n=this.cache,i=e.length,r=eo(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||sh,r[o])}function M0(s,e,t){const n=this.cache,i=e.length,r=eo(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ih,r[o])}function E0(s){switch(s){case 5126:return r0;case 35664:return s0;case 35665:return o0;case 35666:return a0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return h0;case 35667:case 35671:return f0;case 35668:case 35672:return d0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return v0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return M0}}class b0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i0(t.type)}}class T0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E0(t.type)}}class w0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function Ac(s,e){s.seq.push(e),s.map[e.id]=e}function A0(s,e,t){const n=s.name,i=n.length;for(qo.lastIndex=0;;){const r=qo.exec(n),o=qo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ac(t,c===void 0?new b0(a,s,e):new T0(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new w0(a),Ac(t,h)),t=h}}}class Ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);A0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Rc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const R0=37297;let C0=0;function P0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function L0(s){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(s);let n;switch(e===t?n="":e===Vs&&t===Hs?n="LinearDisplayP3ToLinearSRGB":e===Hs&&t===Vs&&(n="LinearSRGBToLinearDisplayP3"),s){case qn:case Qs:return[n,"LinearTransferOETF"];case zt:case Fa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Cc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+P0(s.getShaderSource(e),o)}else return i}function U0(s,e){const t=L0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function D0(s,e){let t;switch(e){case Rf:t="Linear";break;case Cf:t="Reinhard";break;case Pf:t="OptimizedCineon";break;case Lf:t="ACESFilmic";break;case Df:t="AgX";break;case If:t="Neutral";break;case Uf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function I0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function N0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function br(s){return s!==""}function Pc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(s){return s.replace(O0,k0)}const B0=new Map;function k0(s,e){let t=Ke[e];if(t===void 0){const n=B0.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sa(t)}const z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(s){return s.replace(z0,G0)}function G0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function V0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zi:case Ji:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function X0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lu:e="ENVMAP_BLENDING_MULTIPLY";break;case wf:e="ENVMAP_BLENDING_MIX";break;case Af:e="ENVMAP_BLENDING_ADD";break}return e}function j0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Y0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=H0(t),c=V0(t),u=W0(t),h=X0(t),f=j0(t),d=I0(t),g=N0(r),v=i.createProgram();let p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`)):(p=[Dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),m=[Dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Vn?D0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,U0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=Sa(o),o=Pc(o,t),o=Lc(o,t),a=Sa(a),a=Pc(a,t),a=Lc(a,t),o=Uc(o),a=Uc(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=b+p+o,y=b+m+a,I=Rc(i,i.VERTEX_SHADER,_),L=Rc(i,i.FRAGMENT_SHADER,y);i.attachShader(v,I),i.attachShader(v,L),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(W){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(I).trim(),H=i.getShaderInfoLog(L).trim();let q=!0,K=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,I,L);else{const $=Cc(i,I,"vertex"),k=Cc(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+D+`
`+$+`
`+k)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||H==="")&&(K=!1);K&&(W.diagnostics={runnable:q,programLog:D,vertexShader:{log:N,prefix:p},fragmentShader:{log:H,prefix:m}})}i.deleteShader(I),i.deleteShader(L),F=new Ns(i,v),T=F0(i,v)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,R0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=L,this}let q0=0;class K0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Z0(e),t.set(e,n)),n}}class Z0{constructor(e){this.id=q0++,this.code=e,this.usedTimes=0}}function J0(s,e,t,n,i,r,o){const a=new Ba,l=new K0,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,S,W,D,N){const H=D.fog,q=N.geometry,K=T.isMeshStandardMaterial?D.environment:null,$=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),k=$&&$.mapping===Zs?$.image.height:null,Z=g[T.type];T.precision!==null&&(d=i.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const X=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,z=X!==void 0?X.length:0;let te=0;q.morphAttributes.position!==void 0&&(te=1),q.morphAttributes.normal!==void 0&&(te=2),q.morphAttributes.color!==void 0&&(te=3);let le,P,R,C;if(Z){const Ue=cn[Z];le=Ue.vertexShader,P=Ue.fragmentShader}else le=T.vertexShader,P=T.fragmentShader,l.update(T),R=l.getVertexShaderID(T),C=l.getFragmentShaderID(T);const M=s.getRenderTarget(),V=N.isInstancedMesh===!0,re=N.isBatchedMesh===!0,U=!!T.map,ie=!!T.matcap,j=!!$,ve=!!T.aoMap,Q=!!T.lightMap,ce=!!T.bumpMap,fe=!!T.normalMap,me=!!T.displacementMap,G=!!T.emissiveMap,x=!!T.metalnessMap,E=!!T.roughnessMap,B=T.anisotropy>0,se=T.clearcoat>0,ne=T.dispersion>0,oe=T.iridescence>0,xe=T.sheen>0,Me=T.transmission>0,pe=B&&!!T.anisotropyMap,Ee=se&&!!T.clearcoatMap,ge=se&&!!T.clearcoatNormalMap,we=se&&!!T.clearcoatRoughnessMap,Ie=oe&&!!T.iridescenceMap,Ce=oe&&!!T.iridescenceThicknessMap,ye=xe&&!!T.sheenColorMap,Re=xe&&!!T.sheenRoughnessMap,be=!!T.specularMap,Oe=!!T.specularColorMap,Fe=!!T.specularIntensityMap,A=Me&&!!T.transmissionMap,ee=Me&&!!T.thicknessMap,J=!!T.gradientMap,_e=!!T.alphaMap,Ae=T.alphaTest>0,Ne=!!T.alphaHash,Pe=!!T.extensions;let Xe=Vn;T.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Xe=s.toneMapping);const Ye={shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:le,fragmentShader:P,defines:T.defines,customVertexShaderID:R,customFragmentShaderID:C,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:re,instancing:V,instancingColor:V&&N.instanceColor!==null,instancingMorph:V&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:M===null?s.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:qn,alphaToCoverage:!!T.alphaToCoverage,map:U,matcap:ie,envMap:j,envMapMode:j&&$.mapping,envMapCubeUVHeight:k,aoMap:ve,lightMap:Q,bumpMap:ce,normalMap:fe,displacementMap:f&&me,emissiveMap:G,normalMapObjectSpace:fe&&T.normalMapType===Yf,normalMapTangentSpace:fe&&T.normalMapType===Gu,metalnessMap:x,roughnessMap:E,anisotropy:B,anisotropyMap:pe,clearcoat:se,clearcoatMap:Ee,clearcoatNormalMap:ge,clearcoatRoughnessMap:we,dispersion:ne,iridescence:oe,iridescenceMap:Ie,iridescenceThicknessMap:Ce,sheen:xe,sheenColorMap:ye,sheenRoughnessMap:Re,specularMap:be,specularColorMap:Oe,specularIntensityMap:Fe,transmission:Me,transmissionMap:A,thicknessMap:ee,gradientMap:J,opaque:T.transparent===!1&&T.blending===Wi&&T.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ae,alphaHash:Ne,combine:T.combine,mapUv:U&&v(T.map.channel),aoMapUv:ve&&v(T.aoMap.channel),lightMapUv:Q&&v(T.lightMap.channel),bumpMapUv:ce&&v(T.bumpMap.channel),normalMapUv:fe&&v(T.normalMap.channel),displacementMapUv:me&&v(T.displacementMap.channel),emissiveMapUv:G&&v(T.emissiveMap.channel),metalnessMapUv:x&&v(T.metalnessMap.channel),roughnessMapUv:E&&v(T.roughnessMap.channel),anisotropyMapUv:pe&&v(T.anisotropyMap.channel),clearcoatMapUv:Ee&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:ge&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(T.sheenRoughnessMap.channel),specularMapUv:be&&v(T.specularMap.channel),specularColorMapUv:Oe&&v(T.specularColorMap.channel),specularIntensityMapUv:Fe&&v(T.specularIntensityMap.channel),transmissionMapUv:A&&v(T.transmissionMap.channel),thicknessMapUv:ee&&v(T.thicknessMap.channel),alphaMapUv:_e&&v(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(fe||B),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(U||_e),fog:!!H,useFog:T.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:U&&T.map.isVideoTexture===!0&&et.getTransfer(T.map.colorSpace)===it,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gt,flipSided:T.side===Ut,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Pe&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function m(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const W in T.defines)S.push(W),S.push(T.defines[W]);return T.isRawShaderMaterial===!1&&(b(S,T),_(S,T),S.push(s.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function b(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function _(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),T.push(a.mask)}function y(T){const S=g[T.type];let W;if(S){const D=cn[S];W=Zu.clone(D.uniforms)}else W=T.uniforms;return W}function I(T,S){let W;for(let D=0,N=u.length;D<N;D++){const H=u[D];if(H.cacheKey===S){W=H,++W.usedTimes;break}}return W===void 0&&(W=new Y0(s,S,T,r),u.push(W)),W}function L(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function w(T){l.remove(T)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:I,releaseProgram:L,releaseShaderCache:w,programs:u,dispose:F}}function Q0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ic(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Nc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,v,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=v,m.group=p),e++,m}function a(h,f,d,g,v,p){const m=o(h,f,d,g,v,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,g,v,p){const m=o(h,f,d,g,v,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||$0),n.length>1&&n.sort(f||Ic),i.length>1&&i.sort(f||Ic)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function ev(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Nc,s.set(n,[o])):i>=r.length?(o=new Nc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function tv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Ze};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function nv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let iv=0;function rv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function sv(s){const e=new tv,t=nv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const i=new Y,r=new rt,o=new rt;function a(c,u){let h=0,f=0,d=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let g=0,v=0,p=0,m=0,b=0,_=0,y=0,I=0,L=0,w=0,F=0;c.sort(rv);const T=u===!0?Math.PI:1;for(let W=0,D=c.length;W<D;W++){const N=c[W],H=N.color,q=N.intensity,K=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=H.r*q*T,f+=H.g*q*T,d+=H.b*q*T;else if(N.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(N.sh.coefficients[k],q);F++}else if(N.isDirectionalLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const Z=N.shadow,X=t.get(N);X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=N.shadow.matrix,_++}n.directional[g]=k,g++}else if(N.isSpotLight){const k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(H).multiplyScalar(q*T),k.distance=K,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,n.spot[p]=k;const Z=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,Z.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[p]=Z.matrix,N.castShadow){const X=t.get(N);X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.spotShadow[p]=X,n.spotShadowMap[p]=$,I++}p++}else if(N.isRectAreaLight){const k=e.get(N);k.color.copy(H).multiplyScalar(q),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=k,m++}else if(N.isPointLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*T),k.distance=N.distance,k.decay=N.decay,N.castShadow){const Z=N.shadow,X=t.get(N);X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,n.pointShadow[v]=X,n.pointShadowMap[v]=$,n.pointShadowMatrix[v]=N.shadow.matrix,y++}n.point[v]=k,v++}else if(N.isHemisphereLight){const k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(q*T),k.groundColor.copy(N.groundColor).multiplyScalar(q*T),n.hemi[b]=k,b++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const S=n.hash;(S.directionalLength!==g||S.pointLength!==v||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==b||S.numDirectionalShadows!==_||S.numPointShadows!==y||S.numSpotShadows!==I||S.numSpotMaps!==L||S.numLightProbes!==F)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=v,n.hemi.length=b,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=I,n.spotShadowMap.length=I,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=I+L-w,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=F,S.directionalLength=g,S.pointLength=v,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=b,S.numDirectionalShadows=_,S.numPointShadows=y,S.numSpotShadows=I,S.numSpotMaps=L,S.numLightProbes=F,n.version=iv++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const p=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const _=c[m];if(_.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),h++}else if(_.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(_.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Fc(s){const e=new sv(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ov(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Fc(s),e.set(i,[a])):r>=o.length?(a=new Fc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class oh extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ah extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cv(s,e,t){let n=new ka;const i=new Se,r=new Se,o=new ft,a=new oh({depthPacking:zu}),l=new ah,c={},u=t.maxTextureSize,h={[Tn]:Ut,[Ut]:Tn,[Gt]:Gt},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:av,fragmentShader:lv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new At(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let m=this.type;this.render=function(L,w,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;const T=s.getRenderTarget(),S=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Hn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=m!==Sn&&this.type===Sn,H=m===Sn&&this.type!==Sn;for(let q=0,K=L.length;q<K;q++){const $=L[q],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const Z=k.getFrameExtents();if(i.multiply(Z),r.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Z.x),i.x=r.x*Z.x,k.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Z.y),i.y=r.y*Z.y,k.mapSize.y=r.y)),k.map===null||N===!0||H===!0){const z=this.type!==Sn?{minFilter:Kt,magFilter:Kt}:{};k.map!==null&&k.map.dispose(),k.map=new fi(i.x,i.y,z),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const X=k.getViewportCount();for(let z=0;z<X;z++){const te=k.getViewport(z);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),D.viewport(o),k.updateMatrices($,z),n=k.getFrustum(),y(w,F,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===Sn&&b(k,F),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(T,S,W)};function b(L,w){const F=e.update(v);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new fi(i.x,i.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(w,null,F,f,v,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(w,null,F,d,v,null)}function _(L,w,F,T){let S=null;const W=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(W!==void 0)S=W;else if(S=F.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=S.uuid,N=w.uuid;let H=c[D];H===void 0&&(H={},c[D]=H);let q=H[N];q===void 0&&(q=S.clone(),H[N]=q,w.addEventListener("dispose",I)),S=q}if(S.visible=w.visible,S.wireframe=w.wireframe,T===Sn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=s.properties.get(S);D.light=F}return S}function y(L,w,F,T,S){if(L.visible===!1)return;if(L.layers.test(w.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Sn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const N=e.update(L),H=L.material;if(Array.isArray(H)){const q=N.groups;for(let K=0,$=q.length;K<$;K++){const k=q[K],Z=H[k.materialIndex];if(Z&&Z.visible){const X=_(L,Z,T,S);L.onBeforeShadow(s,L,w,F,N,X,k),s.renderBufferDirect(F,null,N,X,L,k),L.onAfterShadow(s,L,w,F,N,X,k)}}}else if(H.visible){const q=_(L,H,T,S);L.onBeforeShadow(s,L,w,F,N,q,null),s.renderBufferDirect(F,null,N,q,L,null),L.onAfterShadow(s,L,w,F,N,q,null)}}const D=L.children;for(let N=0,H=D.length;N<H;N++)y(D[N],w,F,T,S)}function I(L){L.target.removeEventListener("dispose",I);for(const F in c){const T=c[F],S=L.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function uv(s){function e(){let A=!1;const ee=new ft;let J=null;const _e=new ft(0,0,0,0);return{setMask:function(Ae){J!==Ae&&!A&&(s.colorMask(Ae,Ae,Ae,Ae),J=Ae)},setLocked:function(Ae){A=Ae},setClear:function(Ae,Ne,Pe,Xe,Ye){Ye===!0&&(Ae*=Xe,Ne*=Xe,Pe*=Xe),ee.set(Ae,Ne,Pe,Xe),_e.equals(ee)===!1&&(s.clearColor(Ae,Ne,Pe,Xe),_e.copy(ee))},reset:function(){A=!1,J=null,_e.set(-1,0,0,0)}}}function t(){let A=!1,ee=null,J=null,_e=null;return{setTest:function(Ae){Ae?C(s.DEPTH_TEST):M(s.DEPTH_TEST)},setMask:function(Ae){ee!==Ae&&!A&&(s.depthMask(Ae),ee=Ae)},setFunc:function(Ae){if(J!==Ae){switch(Ae){case xf:s.depthFunc(s.NEVER);break;case yf:s.depthFunc(s.ALWAYS);break;case Sf:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case Mf:s.depthFunc(s.EQUAL);break;case Ef:s.depthFunc(s.GEQUAL);break;case bf:s.depthFunc(s.GREATER);break;case Tf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=Ae}},setLocked:function(Ae){A=Ae},setClear:function(Ae){_e!==Ae&&(s.clearDepth(Ae),_e=Ae)},reset:function(){A=!1,ee=null,J=null,_e=null}}}function n(){let A=!1,ee=null,J=null,_e=null,Ae=null,Ne=null,Pe=null,Xe=null,Ye=null;return{setTest:function(Ue){A||(Ue?C(s.STENCIL_TEST):M(s.STENCIL_TEST))},setMask:function(Ue){ee!==Ue&&!A&&(s.stencilMask(Ue),ee=Ue)},setFunc:function(Ue,We,qe){(J!==Ue||_e!==We||Ae!==qe)&&(s.stencilFunc(Ue,We,qe),J=Ue,_e=We,Ae=qe)},setOp:function(Ue,We,qe){(Ne!==Ue||Pe!==We||Xe!==qe)&&(s.stencilOp(Ue,We,qe),Ne=Ue,Pe=We,Xe=qe)},setLocked:function(Ue){A=Ue},setClear:function(Ue){Ye!==Ue&&(s.clearStencil(Ue),Ye=Ue)},reset:function(){A=!1,ee=null,J=null,_e=null,Ae=null,Ne=null,Pe=null,Xe=null,Ye=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,v=null,p=null,m=null,b=null,_=null,y=null,I=null,L=new Ze(0,0,0),w=0,F=!1,T=null,S=null,W=null,D=null,N=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,K=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),q=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=K>=2);let k=null,Z={};const X=s.getParameter(s.SCISSOR_BOX),z=s.getParameter(s.VIEWPORT),te=new ft().fromArray(X),le=new ft().fromArray(z);function P(A,ee,J,_e){const Ae=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(A,Ne),s.texParameteri(A,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(A,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<J;Pe++)A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY?s.texImage3D(ee,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(ee+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return Ne}const R={};R[s.TEXTURE_2D]=P(s.TEXTURE_2D,s.TEXTURE_2D,1),R[s.TEXTURE_CUBE_MAP]=P(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[s.TEXTURE_2D_ARRAY]=P(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),R[s.TEXTURE_3D]=P(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),C(s.DEPTH_TEST),r.setFunc(zs),ce(!1),fe(gl),C(s.CULL_FACE),ve(Hn);function C(A){c[A]!==!0&&(s.enable(A),c[A]=!0)}function M(A){c[A]!==!1&&(s.disable(A),c[A]=!1)}function V(A,ee){return u[A]!==ee?(s.bindFramebuffer(A,ee),u[A]=ee,A===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ee),A===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ee),!0):!1}function re(A,ee){let J=f,_e=!1;if(A){J=h.get(ee),J===void 0&&(J=[],h.set(ee,J));const Ae=A.textures;if(J.length!==Ae.length||J[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,Pe=Ae.length;Ne<Pe;Ne++)J[Ne]=s.COLOR_ATTACHMENT0+Ne;J.length=Ae.length,_e=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,_e=!0);_e&&s.drawBuffers(J)}function U(A){return d!==A?(s.useProgram(A),d=A,!0):!1}const ie={[oi]:s.FUNC_ADD,[tf]:s.FUNC_SUBTRACT,[nf]:s.FUNC_REVERSE_SUBTRACT};ie[rf]=s.MIN,ie[sf]=s.MAX;const j={[of]:s.ZERO,[af]:s.ONE,[lf]:s.SRC_COLOR,[ma]:s.SRC_ALPHA,[pf]:s.SRC_ALPHA_SATURATE,[ff]:s.DST_COLOR,[uf]:s.DST_ALPHA,[cf]:s.ONE_MINUS_SRC_COLOR,[ga]:s.ONE_MINUS_SRC_ALPHA,[df]:s.ONE_MINUS_DST_COLOR,[hf]:s.ONE_MINUS_DST_ALPHA,[mf]:s.CONSTANT_COLOR,[gf]:s.ONE_MINUS_CONSTANT_COLOR,[vf]:s.CONSTANT_ALPHA,[_f]:s.ONE_MINUS_CONSTANT_ALPHA};function ve(A,ee,J,_e,Ae,Ne,Pe,Xe,Ye,Ue){if(A===Hn){g===!0&&(M(s.BLEND),g=!1);return}if(g===!1&&(C(s.BLEND),g=!0),A!==ef){if(A!==v||Ue!==F){if((p!==oi||_!==oi)&&(s.blendEquation(s.FUNC_ADD),p=oi,_=oi),Ue)switch(A){case Wi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vl:s.blendFunc(s.ONE,s.ONE);break;case _l:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _l:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}m=null,b=null,y=null,I=null,L.set(0,0,0),w=0,v=A,F=Ue}return}Ae=Ae||ee,Ne=Ne||J,Pe=Pe||_e,(ee!==p||Ae!==_)&&(s.blendEquationSeparate(ie[ee],ie[Ae]),p=ee,_=Ae),(J!==m||_e!==b||Ne!==y||Pe!==I)&&(s.blendFuncSeparate(j[J],j[_e],j[Ne],j[Pe]),m=J,b=_e,y=Ne,I=Pe),(Xe.equals(L)===!1||Ye!==w)&&(s.blendColor(Xe.r,Xe.g,Xe.b,Ye),L.copy(Xe),w=Ye),v=A,F=!1}function Q(A,ee){A.side===Gt?M(s.CULL_FACE):C(s.CULL_FACE);let J=A.side===Ut;ee&&(J=!J),ce(J),A.blending===Wi&&A.transparent===!1?ve(Hn):ve(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),r.setFunc(A.depthFunc),r.setTest(A.depthTest),r.setMask(A.depthWrite),i.setMask(A.colorWrite);const _e=A.stencilWrite;o.setTest(_e),_e&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),G(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?C(s.SAMPLE_ALPHA_TO_COVERAGE):M(s.SAMPLE_ALPHA_TO_COVERAGE)}function ce(A){T!==A&&(A?s.frontFace(s.CW):s.frontFace(s.CCW),T=A)}function fe(A){A!==Qh?(C(s.CULL_FACE),A!==S&&(A===gl?s.cullFace(s.BACK):A===$h?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):M(s.CULL_FACE),S=A}function me(A){A!==W&&(q&&s.lineWidth(A),W=A)}function G(A,ee,J){A?(C(s.POLYGON_OFFSET_FILL),(D!==ee||N!==J)&&(s.polygonOffset(ee,J),D=ee,N=J)):M(s.POLYGON_OFFSET_FILL)}function x(A){A?C(s.SCISSOR_TEST):M(s.SCISSOR_TEST)}function E(A){A===void 0&&(A=s.TEXTURE0+H-1),k!==A&&(s.activeTexture(A),k=A)}function B(A,ee,J){J===void 0&&(k===null?J=s.TEXTURE0+H-1:J=k);let _e=Z[J];_e===void 0&&(_e={type:void 0,texture:void 0},Z[J]=_e),(_e.type!==A||_e.texture!==ee)&&(k!==J&&(s.activeTexture(J),k=J),s.bindTexture(A,ee||R[A]),_e.type=A,_e.texture=ee)}function se(){const A=Z[k];A!==void 0&&A.type!==void 0&&(s.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function ne(){try{s.compressedTexImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function oe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{s.texSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Me(){try{s.texSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ee(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ge(){try{s.texStorage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function we(){try{s.texStorage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ie(){try{s.texImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ce(){try{s.texImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(A){te.equals(A)===!1&&(s.scissor(A.x,A.y,A.z,A.w),te.copy(A))}function Re(A){le.equals(A)===!1&&(s.viewport(A.x,A.y,A.z,A.w),le.copy(A))}function be(A,ee){let J=l.get(ee);J===void 0&&(J=new WeakMap,l.set(ee,J));let _e=J.get(A);_e===void 0&&(_e=s.getUniformBlockIndex(ee,A.name),J.set(A,_e))}function Oe(A,ee){const _e=l.get(ee).get(A);a.get(ee)!==_e&&(s.uniformBlockBinding(ee,_e,A.__bindingPointIndex),a.set(ee,_e))}function Fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},k=null,Z={},u={},h=new WeakMap,f=[],d=null,g=!1,v=null,p=null,m=null,b=null,_=null,y=null,I=null,L=new Ze(0,0,0),w=0,F=!1,T=null,S=null,W=null,D=null,N=null,te.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:C,disable:M,bindFramebuffer:V,drawBuffers:re,useProgram:U,setBlending:ve,setMaterial:Q,setFlipSided:ce,setCullFace:fe,setLineWidth:me,setPolygonOffset:G,setScissorTest:x,activeTexture:E,bindTexture:B,unbindTexture:se,compressedTexImage2D:ne,compressedTexImage3D:oe,texImage2D:Ie,texImage3D:Ce,updateUBOMapping:be,uniformBlockBinding:Oe,texStorage2D:ge,texStorage3D:we,texSubImage2D:xe,texSubImage3D:Me,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ee,scissor:ye,viewport:Re,reset:Fe}}function hv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,E){return d?new OffscreenCanvas(x,E):Fr("canvas")}function v(x,E,B){let se=1;const ne=G(x);if((ne.width>B||ne.height>B)&&(se=B/Math.max(ne.width,ne.height)),se<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const oe=Math.floor(se*ne.width),xe=Math.floor(se*ne.height);h===void 0&&(h=g(oe,xe));const Me=E?g(oe,xe):h;return Me.width=oe,Me.height=xe,Me.getContext("2d").drawImage(x,0,0,oe,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+oe+"x"+xe+")."),Me}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),x;return x}function p(x){return x.generateMipmaps&&x.minFilter!==Kt&&x.minFilter!==Ht}function m(x){s.generateMipmap(x)}function b(x,E,B,se,ne=!1){if(x!==null){if(s[x]!==void 0)return s[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let oe=E;if(E===s.RED&&(B===s.FLOAT&&(oe=s.R32F),B===s.HALF_FLOAT&&(oe=s.R16F),B===s.UNSIGNED_BYTE&&(oe=s.R8)),E===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(oe=s.R8UI),B===s.UNSIGNED_SHORT&&(oe=s.R16UI),B===s.UNSIGNED_INT&&(oe=s.R32UI),B===s.BYTE&&(oe=s.R8I),B===s.SHORT&&(oe=s.R16I),B===s.INT&&(oe=s.R32I)),E===s.RG&&(B===s.FLOAT&&(oe=s.RG32F),B===s.HALF_FLOAT&&(oe=s.RG16F),B===s.UNSIGNED_BYTE&&(oe=s.RG8)),E===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(oe=s.RG8UI),B===s.UNSIGNED_SHORT&&(oe=s.RG16UI),B===s.UNSIGNED_INT&&(oe=s.RG32UI),B===s.BYTE&&(oe=s.RG8I),B===s.SHORT&&(oe=s.RG16I),B===s.INT&&(oe=s.RG32I)),E===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),E===s.RGBA){const xe=ne?Gs:et.getTransfer(se);B===s.FLOAT&&(oe=s.RGBA32F),B===s.HALF_FLOAT&&(oe=s.RGBA16F),B===s.UNSIGNED_BYTE&&(oe=xe===it?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function _(x,E){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==Kt&&x.minFilter!==Ht?Math.log2(Math.max(E.width,E.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?E.mipmaps.length:1}function y(x){const E=x.target;E.removeEventListener("dispose",y),L(E),E.isVideoTexture&&u.delete(E)}function I(x){const E=x.target;E.removeEventListener("dispose",I),F(E)}function L(x){const E=n.get(x);if(E.__webglInit===void 0)return;const B=x.source,se=f.get(B);if(se){const ne=se[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(x),Object.keys(se).length===0&&f.delete(B)}n.remove(x)}function w(x){const E=n.get(x);s.deleteTexture(E.__webglTexture);const B=x.source,se=f.get(B);delete se[E.__cacheKey],o.memory.textures--}function F(x){const E=n.get(x);if(x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let ne=0;ne<E.__webglFramebuffer[se].length;ne++)s.deleteFramebuffer(E.__webglFramebuffer[se][ne]);else s.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)s.deleteFramebuffer(E.__webglFramebuffer[se]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=x.textures;for(let se=0,ne=B.length;se<ne;se++){const oe=n.get(B[se]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(B[se])}n.remove(x)}let T=0;function S(){T=0}function W(){const x=T;return x>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+i.maxTextures),T+=1,x}function D(x){const E=[];return E.push(x.wrapS),E.push(x.wrapT),E.push(x.wrapR||0),E.push(x.magFilter),E.push(x.minFilter),E.push(x.anisotropy),E.push(x.internalFormat),E.push(x.format),E.push(x.type),E.push(x.generateMipmaps),E.push(x.premultiplyAlpha),E.push(x.flipY),E.push(x.unpackAlignment),E.push(x.colorSpace),E.join()}function N(x,E){const B=n.get(x);if(x.isVideoTexture&&fe(x),x.isRenderTargetTexture===!1&&x.version>0&&B.__version!==x.version){const se=x.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(B,x,E);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+E)}function H(x,E){const B=n.get(x);if(x.version>0&&B.__version!==x.version){te(B,x,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+E)}function q(x,E){const B=n.get(x);if(x.version>0&&B.__version!==x.version){te(B,x,E);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+E)}function K(x,E){const B=n.get(x);if(x.version>0&&B.__version!==x.version){le(B,x,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+E)}const $={[xa]:s.REPEAT,[Mn]:s.CLAMP_TO_EDGE,[ya]:s.MIRRORED_REPEAT},k={[Kt]:s.NEAREST,[Nf]:s.NEAREST_MIPMAP_NEAREST,[ns]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[xo]:s.LINEAR_MIPMAP_NEAREST,[ci]:s.LINEAR_MIPMAP_LINEAR},Z={[qf]:s.NEVER,[ed]:s.ALWAYS,[Kf]:s.LESS,[Hu]:s.LEQUAL,[Zf]:s.EQUAL,[$f]:s.GEQUAL,[Jf]:s.GREATER,[Qf]:s.NOTEQUAL};function X(x,E){if(E.type===kn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ht||E.magFilter===xo||E.magFilter===ns||E.magFilter===ci||E.minFilter===Ht||E.minFilter===xo||E.minFilter===ns||E.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(x,s.TEXTURE_WRAP_S,$[E.wrapS]),s.texParameteri(x,s.TEXTURE_WRAP_T,$[E.wrapT]),(x===s.TEXTURE_3D||x===s.TEXTURE_2D_ARRAY)&&s.texParameteri(x,s.TEXTURE_WRAP_R,$[E.wrapR]),s.texParameteri(x,s.TEXTURE_MAG_FILTER,k[E.magFilter]),s.texParameteri(x,s.TEXTURE_MIN_FILTER,k[E.minFilter]),E.compareFunction&&(s.texParameteri(x,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(x,s.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Kt||E.minFilter!==ns&&E.minFilter!==ci||E.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(x,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function z(x,E){let B=!1;x.__webglInit===void 0&&(x.__webglInit=!0,E.addEventListener("dispose",y));const se=E.source;let ne=f.get(se);ne===void 0&&(ne={},f.set(se,ne));const oe=D(E);if(oe!==x.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[oe].usedTimes++;const xe=ne[x.__cacheKey];xe!==void 0&&(ne[x.__cacheKey].usedTimes--,xe.usedTimes===0&&w(E)),x.__cacheKey=oe,x.__webglTexture=ne[oe].texture}return B}function te(x,E,B){let se=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=s.TEXTURE_3D);const ne=z(x,E),oe=E.source;t.bindTexture(se,x.__webglTexture,s.TEXTURE0+B);const xe=n.get(oe);if(oe.version!==xe.__version||ne===!0){t.activeTexture(s.TEXTURE0+B);const Me=et.getPrimaries(et.workingColorSpace),pe=E.colorSpace===Bn?null:et.getPrimaries(E.colorSpace),Ee=E.colorSpace===Bn||Me===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ge=v(E.image,!1,i.maxTextureSize);ge=me(E,ge);const we=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type);let Ce=b(E.internalFormat,we,Ie,E.colorSpace,E.isVideoTexture);X(se,E);let ye;const Re=E.mipmaps,be=E.isVideoTexture!==!0,Oe=xe.__version===void 0||ne===!0,Fe=oe.dataReady,A=_(E,ge);if(E.isDepthTexture)Ce=s.DEPTH_COMPONENT16,E.type===kn?Ce=s.DEPTH_COMPONENT32F:E.type===Qi?Ce=s.DEPTH_COMPONENT24:E.type===Hr&&(Ce=s.DEPTH24_STENCIL8),Oe&&(be?t.texStorage2D(s.TEXTURE_2D,1,Ce,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ge.width,ge.height,0,we,Ie,null));else if(E.isDataTexture)if(Re.length>0){be&&Oe&&t.texStorage2D(s.TEXTURE_2D,A,Ce,Re[0].width,Re[0].height);for(let ee=0,J=Re.length;ee<J;ee++)ye=Re[ee],be?Fe&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ye.width,ye.height,we,Ie,ye.data):t.texImage2D(s.TEXTURE_2D,ee,Ce,ye.width,ye.height,0,we,Ie,ye.data);E.generateMipmaps=!1}else be?(Oe&&t.texStorage2D(s.TEXTURE_2D,A,Ce,ge.width,ge.height),Fe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge.width,ge.height,we,Ie,ge.data)):t.texImage2D(s.TEXTURE_2D,0,Ce,ge.width,ge.height,0,we,Ie,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){be&&Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,A,Ce,Re[0].width,Re[0].height,ge.depth);for(let ee=0,J=Re.length;ee<J;ee++)ye=Re[ee],E.format!==un?we!==null?be?Fe&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ye.width,ye.height,ge.depth,we,ye.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Ce,ye.width,ye.height,ge.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Fe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ye.width,ye.height,ge.depth,we,Ie,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Ce,ye.width,ye.height,ge.depth,0,we,Ie,ye.data)}else{be&&Oe&&t.texStorage2D(s.TEXTURE_2D,A,Ce,Re[0].width,Re[0].height);for(let ee=0,J=Re.length;ee<J;ee++)ye=Re[ee],E.format!==un?we!==null?be?Fe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,ye.width,ye.height,we,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Ce,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Fe&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ye.width,ye.height,we,Ie,ye.data):t.texImage2D(s.TEXTURE_2D,ee,Ce,ye.width,ye.height,0,we,Ie,ye.data)}else if(E.isDataArrayTexture)be?(Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,A,Ce,ge.width,ge.height,ge.depth),Fe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,we,Ie,ge.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ge.width,ge.height,ge.depth,0,we,Ie,ge.data);else if(E.isData3DTexture)be?(Oe&&t.texStorage3D(s.TEXTURE_3D,A,Ce,ge.width,ge.height,ge.depth),Fe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,we,Ie,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ge.width,ge.height,ge.depth,0,we,Ie,ge.data);else if(E.isFramebufferTexture){if(Oe)if(be)t.texStorage2D(s.TEXTURE_2D,A,Ce,ge.width,ge.height);else{let ee=ge.width,J=ge.height;for(let _e=0;_e<A;_e++)t.texImage2D(s.TEXTURE_2D,_e,Ce,ee,J,0,we,Ie,null),ee>>=1,J>>=1}}else if(Re.length>0){if(be&&Oe){const ee=G(Re[0]);t.texStorage2D(s.TEXTURE_2D,A,Ce,ee.width,ee.height)}for(let ee=0,J=Re.length;ee<J;ee++)ye=Re[ee],be?Fe&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,we,Ie,ye):t.texImage2D(s.TEXTURE_2D,ee,Ce,we,Ie,ye);E.generateMipmaps=!1}else if(be){if(Oe){const ee=G(ge);t.texStorage2D(s.TEXTURE_2D,A,Ce,ee.width,ee.height)}Fe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Ie,ge)}else t.texImage2D(s.TEXTURE_2D,0,Ce,we,Ie,ge);p(E)&&m(se),xe.__version=oe.version,E.onUpdate&&E.onUpdate(E)}x.__version=E.version}function le(x,E,B){if(E.image.length!==6)return;const se=z(x,E),ne=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,x.__webglTexture,s.TEXTURE0+B);const oe=n.get(ne);if(ne.version!==oe.__version||se===!0){t.activeTexture(s.TEXTURE0+B);const xe=et.getPrimaries(et.workingColorSpace),Me=E.colorSpace===Bn?null:et.getPrimaries(E.colorSpace),pe=E.colorSpace===Bn||xe===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,ge=E.image[0]&&E.image[0].isDataTexture,we=[];for(let J=0;J<6;J++)!Ee&&!ge?we[J]=v(E.image[J],!0,i.maxCubemapSize):we[J]=ge?E.image[J].image:E.image[J],we[J]=me(E,we[J]);const Ie=we[0],Ce=r.convert(E.format,E.colorSpace),ye=r.convert(E.type),Re=b(E.internalFormat,Ce,ye,E.colorSpace),be=E.isVideoTexture!==!0,Oe=oe.__version===void 0||se===!0,Fe=ne.dataReady;let A=_(E,Ie);X(s.TEXTURE_CUBE_MAP,E);let ee;if(Ee){be&&Oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,A,Re,Ie.width,Ie.height);for(let J=0;J<6;J++){ee=we[J].mipmaps;for(let _e=0;_e<ee.length;_e++){const Ae=ee[_e];E.format!==un?Ce!==null?be?Fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,Ae.width,Ae.height,Ce,Ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,Re,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?Fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,Ae.width,Ae.height,Ce,ye,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,Re,Ae.width,Ae.height,0,Ce,ye,Ae.data)}}}else{if(ee=E.mipmaps,be&&Oe){ee.length>0&&A++;const J=G(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,A,Re,J.width,J.height)}for(let J=0;J<6;J++)if(ge){be?Fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,we[J].width,we[J].height,Ce,ye,we[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Re,we[J].width,we[J].height,0,Ce,ye,we[J].data);for(let _e=0;_e<ee.length;_e++){const Ne=ee[_e].image[J].image;be?Fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,Ne.width,Ne.height,Ce,ye,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,Re,Ne.width,Ne.height,0,Ce,ye,Ne.data)}}else{be?Fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ce,ye,we[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Re,Ce,ye,we[J]);for(let _e=0;_e<ee.length;_e++){const Ae=ee[_e];be?Fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,Ce,ye,Ae.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,Re,Ce,ye,Ae.image[J])}}}p(E)&&m(s.TEXTURE_CUBE_MAP),oe.__version=ne.version,E.onUpdate&&E.onUpdate(E)}x.__version=E.version}function P(x,E,B,se,ne,oe){const xe=r.convert(B.format,B.colorSpace),Me=r.convert(B.type),pe=b(B.internalFormat,xe,Me,B.colorSpace);if(!n.get(E).__hasExternalTextures){const ge=Math.max(1,E.width>>oe),we=Math.max(1,E.height>>oe);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,pe,ge,we,E.depth,0,xe,Me,null):t.texImage2D(ne,oe,pe,ge,we,0,xe,Me,null)}t.bindFramebuffer(s.FRAMEBUFFER,x),ce(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ne,n.get(B).__webglTexture,0,Q(E)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,ne,n.get(B).__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function R(x,E,B){if(s.bindRenderbuffer(s.RENDERBUFFER,x),E.depthBuffer&&!E.stencilBuffer){let se=s.DEPTH_COMPONENT24;if(B||ce(E)){const ne=E.depthTexture;ne&&ne.isDepthTexture&&(ne.type===kn?se=s.DEPTH_COMPONENT32F:ne.type===Qi&&(se=s.DEPTH_COMPONENT24));const oe=Q(E);ce(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,se,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,se,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,se,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,x)}else if(E.depthBuffer&&E.stencilBuffer){const se=Q(E);B&&ce(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,E.width,E.height):ce(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,x)}else{const se=E.textures;for(let ne=0;ne<se.length;ne++){const oe=se[ne],xe=r.convert(oe.format,oe.colorSpace),Me=r.convert(oe.type),pe=b(oe.internalFormat,xe,Me,oe.colorSpace),Ee=Q(E);B&&ce(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,pe,E.width,E.height):ce(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function C(x,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,x),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);const se=n.get(E.depthTexture).__webglTexture,ne=Q(E);if(E.depthTexture.format===Xi)ce(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(E.depthTexture.format===Ir)ce(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function M(x){const E=n.get(x),B=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");C(E.__webglFramebuffer,x)}else if(B){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]=s.createRenderbuffer(),R(E.__webglDepthbuffer[se],x,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),R(E.__webglDepthbuffer,x,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function V(x,E,B){const se=n.get(x);E!==void 0&&P(se.__webglFramebuffer,x,x.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&M(x)}function re(x){const E=x.texture,B=n.get(x),se=n.get(E);x.addEventListener("dispose",I);const ne=x.textures,oe=x.isWebGLCubeRenderTarget===!0,xe=ne.length>1;if(xe||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=E.version,o.memory.textures++),oe){B.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[Me]=[];for(let pe=0;pe<E.mipmaps.length;pe++)B.__webglFramebuffer[Me][pe]=s.createFramebuffer()}else B.__webglFramebuffer[Me]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let Me=0;Me<E.mipmaps.length;Me++)B.__webglFramebuffer[Me]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(xe)for(let Me=0,pe=ne.length;Me<pe;Me++){const Ee=n.get(ne[Me]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),o.memory.textures++)}if(x.samples>0&&ce(x)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Me=0;Me<ne.length;Me++){const pe=ne[Me];B.__webglColorRenderbuffer[Me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Me]);const Ee=r.convert(pe.format,pe.colorSpace),ge=r.convert(pe.type),we=b(pe.internalFormat,Ee,ge,pe.colorSpace,x.isXRRenderTarget===!0),Ie=Q(x);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,we,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,B.__webglColorRenderbuffer[Me])}s.bindRenderbuffer(s.RENDERBUFFER,null),x.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),R(B.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),X(s.TEXTURE_CUBE_MAP,E);for(let Me=0;Me<6;Me++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)P(B.__webglFramebuffer[Me][pe],x,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,pe);else P(B.__webglFramebuffer[Me],x,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);p(E)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let Me=0,pe=ne.length;Me<pe;Me++){const Ee=ne[Me],ge=n.get(Ee);t.bindTexture(s.TEXTURE_2D,ge.__webglTexture),X(s.TEXTURE_2D,Ee),P(B.__webglFramebuffer,x,Ee,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,0),p(Ee)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let Me=s.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(Me=x.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Me,se.__webglTexture),X(Me,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)P(B.__webglFramebuffer[pe],x,E,s.COLOR_ATTACHMENT0,Me,pe);else P(B.__webglFramebuffer,x,E,s.COLOR_ATTACHMENT0,Me,0);p(E)&&m(Me),t.unbindTexture()}x.depthBuffer&&M(x)}function U(x){const E=x.textures;for(let B=0,se=E.length;B<se;B++){const ne=E[B];if(p(ne)){const oe=x.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,xe=n.get(ne).__webglTexture;t.bindTexture(oe,xe),m(oe),t.unbindTexture()}}}const ie=[],j=[];function ve(x){if(x.samples>0){if(ce(x)===!1){const E=x.textures,B=x.width,se=x.height;let ne=s.COLOR_BUFFER_BIT;const oe=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(x),Me=E.length>1;if(Me)for(let pe=0;pe<E.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let pe=0;pe<E.length;pe++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),Me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const Ee=n.get(E[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,B,se,0,0,B,se,ne,s.NEAREST),l===!0&&(ie.length=0,j.length=0,ie.push(s.COLOR_ATTACHMENT0+pe),x.depthBuffer&&x.resolveDepthBuffer===!1&&(ie.push(oe),j.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,j)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Me)for(let pe=0;pe<E.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const Ee=n.get(E[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const E=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Q(x){return Math.min(i.maxSamples,x.samples)}function ce(x){const E=n.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function fe(x){const E=o.render.frame;u.get(x)!==E&&(u.set(x,E),x.update())}function me(x,E){const B=x.colorSpace,se=x.format,ne=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||B!==qn&&B!==Bn&&(et.getTransfer(B)===it?(se!==un||ne!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function G(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=S,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=V,this.setupRenderTarget=re,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=M,this.setupFrameBufferTexture=P,this.useMultisampledRTT=ce}function fv(s,e){function t(n,i=Bn){let r;const o=et.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===Nu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ff)return s.BYTE;if(n===Of)return s.SHORT;if(n===Du)return s.UNSIGNED_SHORT;if(n===Iu)return s.INT;if(n===Qi)return s.UNSIGNED_INT;if(n===kn)return s.FLOAT;if(n===Js)return s.HALF_FLOAT;if(n===kf)return s.ALPHA;if(n===zf)return s.RGB;if(n===un)return s.RGBA;if(n===Gf)return s.LUMINANCE;if(n===Hf)return s.LUMINANCE_ALPHA;if(n===Xi)return s.DEPTH_COMPONENT;if(n===Ir)return s.DEPTH_STENCIL;if(n===Vf)return s.RED;if(n===Ou)return s.RED_INTEGER;if(n===Wf)return s.RG;if(n===Bu)return s.RG_INTEGER;if(n===ku)return s.RGBA_INTEGER;if(n===yo||n===So||n===Mo||n===Eo)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===Sl||n===Ml||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bl||n===Tl||n===wl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bl||n===Tl)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Ul||n===Dl||n===Il||n===Nl||n===Fl||n===Ol||n===Bl||n===kl||n===zl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Al)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bo||n===Gl||n===Hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bo)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xf||n===Vl||n===Wl||n===Xl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class dv extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zn extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pv={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Xn({vertexShader:mv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new At(new Rn(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class _v extends pi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=new vv,p=t.getContextAttributes();let m=null,b=null;const _=[],y=[],I=new Se;let L=null;const w=new tn;w.layers.enable(1),w.viewport=new ft;const F=new tn;F.layers.enable(2),F.viewport=new ft;const T=[w,F],S=new dv;S.layers.enable(1),S.layers.enable(2);let W=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let R=_[P];return R===void 0&&(R=new Ko,_[P]=R),R.getTargetRaySpace()},this.getControllerGrip=function(P){let R=_[P];return R===void 0&&(R=new Ko,_[P]=R),R.getGripSpace()},this.getHand=function(P){let R=_[P];return R===void 0&&(R=new Ko,_[P]=R),R.getHandSpace()};function N(P){const R=y.indexOf(P.inputSource);if(R===-1)return;const C=_[R];C!==void 0&&(C.update(P.inputSource,P.frame,c||o),C.dispatchEvent({type:P.type,data:P.inputSource}))}function H(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",q);for(let P=0;P<_.length;P++){const R=y[P];R!==null&&(y[P]=null,_[P].disconnect(R))}W=null,D=null,v.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,b=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(P){if(i=P,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",H),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){const R={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,R),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new fi(d.framebufferWidth,d.framebufferHeight,{format:un,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let R=null,C=null,M=null;p.depth&&(M=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,R=p.stencil?Ir:Xi,C=p.stencil?Hr:Qi);const V={colorFormat:t.RGBA8,depthFormat:M,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(V),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new fi(f.textureWidth,f.textureHeight,{format:un,type:Wn,depthTexture:new eh(f.textureWidth,f.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(P){for(let R=0;R<P.removed.length;R++){const C=P.removed[R],M=y.indexOf(C);M>=0&&(y[M]=null,_[M].disconnect(C))}for(let R=0;R<P.added.length;R++){const C=P.added[R];let M=y.indexOf(C);if(M===-1){for(let re=0;re<_.length;re++)if(re>=y.length){y.push(C),M=re;break}else if(y[re]===null){y[re]=C,M=re;break}if(M===-1)break}const V=_[M];V&&V.connect(C)}}const K=new Y,$=new Y;function k(P,R,C){K.setFromMatrixPosition(R.matrixWorld),$.setFromMatrixPosition(C.matrixWorld);const M=K.distanceTo($),V=R.projectionMatrix.elements,re=C.projectionMatrix.elements,U=V[14]/(V[10]-1),ie=V[14]/(V[10]+1),j=(V[9]+1)/V[5],ve=(V[9]-1)/V[5],Q=(V[8]-1)/V[0],ce=(re[8]+1)/re[0],fe=U*Q,me=U*ce,G=M/(-Q+ce),x=G*-Q;R.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(x),P.translateZ(G),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const E=U+G,B=ie+G,se=fe-x,ne=me+(M-x),oe=j*ie/B*E,xe=ve*ie/B*E;P.projectionMatrix.makePerspective(se,ne,oe,xe,E,B),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function Z(P,R){R===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(R.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(i===null)return;v.texture!==null&&(P.near=v.depthNear,P.far=v.depthFar),S.near=F.near=w.near=P.near,S.far=F.far=w.far=P.far,(W!==S.near||D!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),W=S.near,D=S.far,w.near=W,w.far=D,F.near=W,F.far=D,w.updateProjectionMatrix(),F.updateProjectionMatrix(),P.updateProjectionMatrix());const R=P.parent,C=S.cameras;Z(S,R);for(let M=0;M<C.length;M++)Z(C[M],R);C.length===2?k(S,w,F):S.projectionMatrix.copy(w.projectionMatrix),X(P,S,R)};function X(P,R,C){C===null?P.matrix.copy(R.matrixWorld):(P.matrix.copy(C.matrixWorld),P.matrix.invert(),P.matrix.multiply(R.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(R.projectionMatrix),P.projectionMatrixInverse.copy(R.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Nr*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(P){l=P,f!==null&&(f.fixedFoveation=P),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=P)},this.hasDepthSensing=function(){return v.texture!==null};let z=null;function te(P,R){if(u=R.getViewerPose(c||o),g=R,u!==null){const C=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let M=!1;C.length!==S.cameras.length&&(S.cameras.length=0,M=!0);for(let re=0;re<C.length;re++){const U=C[re];let ie=null;if(d!==null)ie=d.getViewport(U);else{const ve=h.getViewSubImage(f,U);ie=ve.viewport,re===0&&(e.setRenderTargetTextures(b,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(b))}let j=T[re];j===void 0&&(j=new tn,j.layers.enable(re),j.viewport=new ft,T[re]=j),j.matrix.fromArray(U.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(U.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ie.x,ie.y,ie.width,ie.height),re===0&&(S.matrix.copy(j.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),M===!0&&S.cameras.push(j)}const V=i.enabledFeatures;if(V&&V.includes("depth-sensing")){const re=h.getDepthInformation(C[0]);re&&re.isValid&&re.texture&&v.init(e,re,i.renderState)}}for(let C=0;C<_.length;C++){const M=y[C],V=_[C];M!==null&&V!==void 0&&V.update(M,R,c||o)}v.render(e,S),z&&z(P,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),g=null}const le=new $u;le.setAnimationLoop(te),this.setAnimationLoop=function(P){z=P},this.dispose=function(){}}}const ni=new hn,xv=new rt;function yv(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ku(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ut&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ut&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=e.get(m),_=b.envMap,y=b.envMapRotation;if(_&&(p.envMap.value=_,ni.copy(y),ni.x*=-1,ni.y*=-1,ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),p.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(ni)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const I=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*I,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ut&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sv(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){const y=_.program;n.uniformBlockBinding(b,y)}function c(b,_){let y=i[b.id];y===void 0&&(g(b),y=u(b),i[b.id]=y,b.addEventListener("dispose",p));const I=_.program;n.updateUBOMapping(b,I);const L=e.render.frame;r[b.id]!==L&&(f(b),r[b.id]=L)}function u(b){const _=h();b.__bindingPointIndex=_;const y=s.createBuffer(),I=b.__size,L=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,I,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const _=i[b.id],y=b.uniforms,I=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let L=0,w=y.length;L<w;L++){const F=Array.isArray(y[L])?y[L]:[y[L]];for(let T=0,S=F.length;T<S;T++){const W=F[T];if(d(W,L,T,I)===!0){const D=W.__offset,N=Array.isArray(W.value)?W.value:[W.value];let H=0;for(let q=0;q<N.length;q++){const K=N[q],$=v(K);typeof K=="number"||typeof K=="boolean"?(W.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,D+H,W.__data)):K.isMatrix3?(W.__data[0]=K.elements[0],W.__data[1]=K.elements[1],W.__data[2]=K.elements[2],W.__data[3]=0,W.__data[4]=K.elements[3],W.__data[5]=K.elements[4],W.__data[6]=K.elements[5],W.__data[7]=0,W.__data[8]=K.elements[6],W.__data[9]=K.elements[7],W.__data[10]=K.elements[8],W.__data[11]=0):(K.toArray(W.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,W.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,_,y,I){const L=b.value,w=_+"_"+y;if(I[w]===void 0)return typeof L=="number"||typeof L=="boolean"?I[w]=L:I[w]=L.clone(),!0;{const F=I[w];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return I[w]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function g(b){const _=b.uniforms;let y=0;const I=16;for(let w=0,F=_.length;w<F;w++){const T=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,W=T.length;S<W;S++){const D=T[S],N=Array.isArray(D.value)?D.value:[D.value];for(let H=0,q=N.length;H<q;H++){const K=N[H],$=v(K),k=y%I;k!==0&&I-k<$.boundary&&(y+=I-k),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=$.storage}}}const L=y%I;return L>0&&(y+=I-L),b.__size=y,b.__cache={},this}function v(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function p(b){const _=b.target;_.removeEventListener("dispose",p);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function m(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Mv{constructor(e={}){const{canvas:t=vd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Vn,this.toneMappingExposure=1;const _=this;let y=!1,I=0,L=0,w=null,F=-1,T=null;const S=new ft,W=new ft;let D=null;const N=new Ze(0);let H=0,q=t.width,K=t.height,$=1,k=null,Z=null;const X=new ft(0,0,q,K),z=new ft(0,0,q,K);let te=!1;const le=new ka;let P=!1,R=!1;const C=new rt,M=new Y,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return w===null?$:1}let U=n;function ie(O,ae){return t.getContext(O,ae)}try{const O={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",A,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",J,!1),U===null){const ae="webgl2";if(U=ie(ae,O),U===null)throw ie(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let j,ve,Q,ce,fe,me,G,x,E,B,se,ne,oe,xe,Me,pe,Ee,ge,we,Ie,Ce,ye,Re,be;function Oe(){j=new Ug(U),j.init(),ye=new fv(U,j),ve=new wg(U,j,e,ye),Q=new uv(U),ce=new Ng(U),fe=new Q0,me=new hv(U,j,Q,fe,ve,ye,ce),G=new Rg(_),x=new Lg(_),E=new Hd(U),Re=new bg(U,E),B=new Dg(U,E,ce,Re),se=new Og(U,B,E,ce),we=new Fg(U,ve,me),pe=new Ag(fe),ne=new J0(_,G,x,j,ve,Re,pe),oe=new yv(_,fe),xe=new ev,Me=new ov(j),ge=new Eg(_,G,x,Q,se,f,l),Ee=new cv(_,se,ve),be=new Sv(U,ce,ve,Q),Ie=new Tg(U,j,ce),Ce=new Ig(U,j,ce),ce.programs=ne.programs,_.capabilities=ve,_.extensions=j,_.properties=fe,_.renderLists=xe,_.shadowMap=Ee,_.state=Q,_.info=ce}Oe();const Fe=new _v(_,U);this.xr=Fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const O=j.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=j.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(O){O!==void 0&&($=O,this.setSize(q,K,!1))},this.getSize=function(O){return O.set(q,K)},this.setSize=function(O,ae,de=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=O,K=ae,t.width=Math.floor(O*$),t.height=Math.floor(ae*$),de===!0&&(t.style.width=O+"px",t.style.height=ae+"px"),this.setViewport(0,0,O,ae)},this.getDrawingBufferSize=function(O){return O.set(q*$,K*$).floor()},this.setDrawingBufferSize=function(O,ae,de){q=O,K=ae,$=de,t.width=Math.floor(O*de),t.height=Math.floor(ae*de),this.setViewport(0,0,O,ae)},this.getCurrentViewport=function(O){return O.copy(S)},this.getViewport=function(O){return O.copy(X)},this.setViewport=function(O,ae,de,ue){O.isVector4?X.set(O.x,O.y,O.z,O.w):X.set(O,ae,de,ue),Q.viewport(S.copy(X).multiplyScalar($).round())},this.getScissor=function(O){return O.copy(z)},this.setScissor=function(O,ae,de,ue){O.isVector4?z.set(O.x,O.y,O.z,O.w):z.set(O,ae,de,ue),Q.scissor(W.copy(z).multiplyScalar($).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(O){Q.setScissorTest(te=O)},this.setOpaqueSort=function(O){k=O},this.setTransparentSort=function(O){Z=O},this.getClearColor=function(O){return O.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(O=!0,ae=!0,de=!0){let ue=0;if(O){let he=!1;if(w!==null){const De=w.texture.format;he=De===ku||De===Bu||De===Ou}if(he){const De=w.texture.type,Be=De===Wn||De===Qi||De===Du||De===Hr||De===Nu||De===Fu,ke=ge.getClearColor(),ze=ge.getClearAlpha(),Ve=ke.r,Te=ke.g,je=ke.b;Be?(d[0]=Ve,d[1]=Te,d[2]=je,d[3]=ze,U.clearBufferuiv(U.COLOR,0,d)):(g[0]=Ve,g[1]=Te,g[2]=je,g[3]=ze,U.clearBufferiv(U.COLOR,0,g))}else ue|=U.COLOR_BUFFER_BIT}ae&&(ue|=U.DEPTH_BUFFER_BIT),de&&(ue|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",A,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",J,!1),xe.dispose(),Me.dispose(),fe.dispose(),G.dispose(),x.dispose(),se.dispose(),Re.dispose(),be.dispose(),ne.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Ue),Fe.removeEventListener("sessionend",We),qe.stop()};function A(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const O=ce.autoReset,ae=Ee.enabled,de=Ee.autoUpdate,ue=Ee.needsUpdate,he=Ee.type;Oe(),ce.autoReset=O,Ee.enabled=ae,Ee.autoUpdate=de,Ee.needsUpdate=ue,Ee.type=he}function J(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function _e(O){const ae=O.target;ae.removeEventListener("dispose",_e),Ae(ae)}function Ae(O){Ne(O),fe.remove(O)}function Ne(O){const ae=fe.get(O).programs;ae!==void 0&&(ae.forEach(function(de){ne.releaseProgram(de)}),O.isShaderMaterial&&ne.releaseShaderCache(O))}this.renderBufferDirect=function(O,ae,de,ue,he,De){ae===null&&(ae=V);const Be=he.isMesh&&he.matrixWorld.determinant()<0,ke=yt(O,ae,de,ue,he);Q.setMaterial(ue,Be);let ze=de.index,Ve=1;if(ue.wireframe===!0){if(ze=B.getWireframeAttribute(de),ze===void 0)return;Ve=2}const Te=de.drawRange,je=de.attributes.position;let at=Te.start*Ve,st=(Te.start+Te.count)*Ve;De!==null&&(at=Math.max(at,De.start*Ve),st=Math.min(st,(De.start+De.count)*Ve)),ze!==null?(at=Math.max(at,0),st=Math.min(st,ze.count)):je!=null&&(at=Math.max(at,0),st=Math.min(st,je.count));const vt=st-at;if(vt<0||vt===1/0)return;Re.setup(he,ue,ke,de,ze);let Xt,Je=Ie;if(ze!==null&&(Xt=E.get(ze),Je=Ce,Je.setIndex(Xt)),he.isMesh)ue.wireframe===!0?(Q.setLineWidth(ue.wireframeLinewidth*re()),Je.setMode(U.LINES)):Je.setMode(U.TRIANGLES);else if(he.isLine){let Ge=ue.linewidth;Ge===void 0&&(Ge=1),Q.setLineWidth(Ge*re()),he.isLineSegments?Je.setMode(U.LINES):he.isLineLoop?Je.setMode(U.LINE_LOOP):Je.setMode(U.LINE_STRIP)}else he.isPoints?Je.setMode(U.POINTS):he.isSprite&&Je.setMode(U.TRIANGLES);if(he.isBatchedMesh)he._multiDrawInstances!==null?Je.renderMultiDrawInstances(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount,he._multiDrawInstances):Je.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else if(he.isInstancedMesh)Je.renderInstances(at,vt,he.count);else if(de.isInstancedBufferGeometry){const Ge=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,an=Math.min(de.instanceCount,Ge);Je.renderInstances(at,vt,an)}else Je.render(at,vt)};function Pe(O,ae,de){O.transparent===!0&&O.side===Gt&&O.forceSinglePass===!1?(O.side=Ut,O.needsUpdate=!0,Nt(O,ae,de),O.side=Tn,O.needsUpdate=!0,Nt(O,ae,de),O.side=Gt):Nt(O,ae,de)}this.compile=function(O,ae,de=null){de===null&&(de=O),p=Me.get(de),p.init(ae),b.push(p),de.traverseVisible(function(he){he.isLight&&he.layers.test(ae.layers)&&(p.pushLight(he),he.castShadow&&p.pushShadow(he))}),O!==de&&O.traverseVisible(function(he){he.isLight&&he.layers.test(ae.layers)&&(p.pushLight(he),he.castShadow&&p.pushShadow(he))}),p.setupLights(_._useLegacyLights);const ue=new Set;return O.traverse(function(he){const De=he.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const ke=De[Be];Pe(ke,de,he),ue.add(ke)}else Pe(De,de,he),ue.add(De)}),b.pop(),p=null,ue},this.compileAsync=function(O,ae,de=null){const ue=this.compile(O,ae,de);return new Promise(he=>{function De(){if(ue.forEach(function(Be){fe.get(Be).currentProgram.isReady()&&ue.delete(Be)}),ue.size===0){he(O);return}setTimeout(De,10)}j.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Xe=null;function Ye(O){Xe&&Xe(O)}function Ue(){qe.stop()}function We(){qe.start()}const qe=new $u;qe.setAnimationLoop(Ye),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(O){Xe=O,Fe.setAnimationLoop(O),O===null?qe.stop():qe.start()},Fe.addEventListener("sessionstart",Ue),Fe.addEventListener("sessionend",We),this.render=function(O,ae){if(ae!==void 0&&ae.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(ae),ae=Fe.getCamera()),O.isScene===!0&&O.onBeforeRender(_,O,ae,w),p=Me.get(O,b.length),p.init(ae),b.push(p),C.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),le.setFromProjectionMatrix(C),R=this.localClippingEnabled,P=pe.init(this.clippingPlanes,R),v=xe.get(O,m.length),v.init(),m.push(v),nt(O,ae,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(k,Z);const de=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1;de&&ge.addToRenderList(v,O),this.info.render.frame++,P===!0&&pe.beginShadows();const ue=p.state.shadowsArray;Ee.render(ue,O,ae),P===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=v.opaque,De=v.transmissive;if(p.setupLights(_._useLegacyLights),ae.isArrayCamera){const Be=ae.cameras;if(De.length>0)for(let ke=0,ze=Be.length;ke<ze;ke++){const Ve=Be[ke];ct(he,De,O,Ve)}de&&ge.render(O);for(let ke=0,ze=Be.length;ke<ze;ke++){const Ve=Be[ke];$e(v,O,Ve,Ve.viewport)}}else De.length>0&&ct(he,De,O,ae),de&&ge.render(O),$e(v,O,ae);w!==null&&(me.updateMultisampleRenderTarget(w),me.updateRenderTargetMipmap(w)),O.isScene===!0&&O.onAfterRender(_,O,ae),Re.resetDefaultState(),F=-1,T=null,b.pop(),b.length>0?(p=b[b.length-1],P===!0&&pe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function nt(O,ae,de,ue){if(O.visible===!1)return;if(O.layers.test(ae.layers)){if(O.isGroup)de=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(ae);else if(O.isLight)p.pushLight(O),O.castShadow&&p.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||le.intersectsSprite(O)){ue&&M.setFromMatrixPosition(O.matrixWorld).applyMatrix4(C);const Be=se.update(O),ke=O.material;ke.visible&&v.push(O,Be,ke,de,M.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||le.intersectsObject(O))){const Be=se.update(O),ke=O.material;if(ue&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),M.copy(O.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),M.copy(Be.boundingSphere.center)),M.applyMatrix4(O.matrixWorld).applyMatrix4(C)),Array.isArray(ke)){const ze=Be.groups;for(let Ve=0,Te=ze.length;Ve<Te;Ve++){const je=ze[Ve],at=ke[je.materialIndex];at&&at.visible&&v.push(O,Be,at,de,M.z,je)}}else ke.visible&&v.push(O,Be,ke,de,M.z,null)}}const De=O.children;for(let Be=0,ke=De.length;Be<ke;Be++)nt(De[Be],ae,de,ue)}function $e(O,ae,de,ue){const he=O.opaque,De=O.transmissive,Be=O.transparent;p.setupLightsView(de),P===!0&&pe.setGlobalState(_.clippingPlanes,de),ue&&Q.viewport(S.copy(ue)),he.length>0&&gt(he,ae,de),De.length>0&&gt(De,ae,de),Be.length>0&&gt(Be,ae,de),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function ct(O,ae,de,ue){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ue.id]===void 0&&(p.state.transmissionRenderTarget[ue.id]=new fi(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Js:Wn,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const De=p.state.transmissionRenderTarget[ue.id],Be=ue.viewport||S;De.setSize(Be.z,Be.w);const ke=_.getRenderTarget();_.setRenderTarget(De),_.getClearColor(N),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear();const ze=_.toneMapping;_.toneMapping=Vn;const Ve=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),p.setupLightsView(ue),P===!0&&pe.setGlobalState(_.clippingPlanes,ue),gt(O,de,ue),me.updateMultisampleRenderTarget(De),me.updateRenderTargetMipmap(De),j.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let je=0,at=ae.length;je<at;je++){const st=ae[je],vt=st.object,Xt=st.geometry,Je=st.material,Ge=st.group;if(Je.side===Gt&&vt.layers.test(ue.layers)){const an=Je.side;Je.side=Ut,Je.needsUpdate=!0,Ct(vt,de,ue,Xt,Je,Ge),Je.side=an,Je.needsUpdate=!0,Te=!0}}Te===!0&&(me.updateMultisampleRenderTarget(De),me.updateRenderTargetMipmap(De))}_.setRenderTarget(ke),_.setClearColor(N,H),Ve!==void 0&&(ue.viewport=Ve),_.toneMapping=ze}function gt(O,ae,de){const ue=ae.isScene===!0?ae.overrideMaterial:null;for(let he=0,De=O.length;he<De;he++){const Be=O[he],ke=Be.object,ze=Be.geometry,Ve=ue===null?Be.material:ue,Te=Be.group;ke.layers.test(de.layers)&&Ct(ke,ae,de,ze,Ve,Te)}}function Ct(O,ae,de,ue,he,De){O.onBeforeRender(_,ae,de,ue,he,De),O.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),he.onBeforeRender(_,ae,de,ue,O,De),he.transparent===!0&&he.side===Gt&&he.forceSinglePass===!1?(he.side=Ut,he.needsUpdate=!0,_.renderBufferDirect(de,ae,ue,he,O,De),he.side=Tn,he.needsUpdate=!0,_.renderBufferDirect(de,ae,ue,he,O,De),he.side=Gt):_.renderBufferDirect(de,ae,ue,he,O,De),O.onAfterRender(_,ae,de,ue,he,De)}function Nt(O,ae,de){ae.isScene!==!0&&(ae=V);const ue=fe.get(O),he=p.state.lights,De=p.state.shadowsArray,Be=he.state.version,ke=ne.getParameters(O,he.state,De,ae,de),ze=ne.getProgramCacheKey(ke);let Ve=ue.programs;ue.environment=O.isMeshStandardMaterial?ae.environment:null,ue.fog=ae.fog,ue.envMap=(O.isMeshStandardMaterial?x:G).get(O.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&O.envMap===null?ae.environmentRotation:O.envMapRotation,Ve===void 0&&(O.addEventListener("dispose",_e),Ve=new Map,ue.programs=Ve);let Te=Ve.get(ze);if(Te!==void 0){if(ue.currentProgram===Te&&ue.lightsStateVersion===Be)return Wt(O,ke),Te}else ke.uniforms=ne.getUniforms(O),O.onBuild(de,ke,_),O.onBeforeCompile(ke,_),Te=ne.acquireProgram(ke,ze),Ve.set(ze,Te),ue.uniforms=ke.uniforms;const je=ue.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(je.clippingPlanes=pe.uniform),Wt(O,ke),ue.needsLights=qr(O),ue.lightsStateVersion=Be,ue.needsLights&&(je.ambientLightColor.value=he.state.ambient,je.lightProbe.value=he.state.probe,je.directionalLights.value=he.state.directional,je.directionalLightShadows.value=he.state.directionalShadow,je.spotLights.value=he.state.spot,je.spotLightShadows.value=he.state.spotShadow,je.rectAreaLights.value=he.state.rectArea,je.ltc_1.value=he.state.rectAreaLTC1,je.ltc_2.value=he.state.rectAreaLTC2,je.pointLights.value=he.state.point,je.pointLightShadows.value=he.state.pointShadow,je.hemisphereLights.value=he.state.hemi,je.directionalShadowMap.value=he.state.directionalShadowMap,je.directionalShadowMatrix.value=he.state.directionalShadowMatrix,je.spotShadowMap.value=he.state.spotShadowMap,je.spotLightMatrix.value=he.state.spotLightMatrix,je.spotLightMap.value=he.state.spotLightMap,je.pointShadowMap.value=he.state.pointShadowMap,je.pointShadowMatrix.value=he.state.pointShadowMatrix),ue.currentProgram=Te,ue.uniformsList=null,Te}function on(O){if(O.uniformsList===null){const ae=O.currentProgram.getUniforms();O.uniformsList=Ns.seqWithValue(ae.seq,O.uniforms)}return O.uniformsList}function Wt(O,ae){const de=fe.get(O);de.outputColorSpace=ae.outputColorSpace,de.batching=ae.batching,de.instancing=ae.instancing,de.instancingColor=ae.instancingColor,de.instancingMorph=ae.instancingMorph,de.skinning=ae.skinning,de.morphTargets=ae.morphTargets,de.morphNormals=ae.morphNormals,de.morphColors=ae.morphColors,de.morphTargetsCount=ae.morphTargetsCount,de.numClippingPlanes=ae.numClippingPlanes,de.numIntersection=ae.numClipIntersection,de.vertexAlphas=ae.vertexAlphas,de.vertexTangents=ae.vertexTangents,de.toneMapping=ae.toneMapping}function yt(O,ae,de,ue,he){ae.isScene!==!0&&(ae=V),me.resetTextureUnits();const De=ae.fog,Be=ue.isMeshStandardMaterial?ae.environment:null,ke=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:qn,ze=(ue.isMeshStandardMaterial?x:G).get(ue.envMap||Be),Ve=ue.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,Te=!!de.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),je=!!de.morphAttributes.position,at=!!de.morphAttributes.normal,st=!!de.morphAttributes.color;let vt=Vn;ue.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(vt=_.toneMapping);const Xt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Je=Xt!==void 0?Xt.length:0,Ge=fe.get(ue),an=p.state.lights;if(P===!0&&(R===!0||O!==T)){const bt=O===T&&ue.id===F;pe.setState(ue,O,bt)}let tt=!1;ue.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==an.state.version||Ge.outputColorSpace!==ke||he.isBatchedMesh&&Ge.batching===!1||!he.isBatchedMesh&&Ge.batching===!0||he.isInstancedMesh&&Ge.instancing===!1||!he.isInstancedMesh&&Ge.instancing===!0||he.isSkinnedMesh&&Ge.skinning===!1||!he.isSkinnedMesh&&Ge.skinning===!0||he.isInstancedMesh&&Ge.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&Ge.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&Ge.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&Ge.instancingMorph===!1&&he.morphTexture!==null||Ge.envMap!==ze||ue.fog===!0&&Ge.fog!==De||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==pe.numPlanes||Ge.numIntersection!==pe.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==Te||Ge.morphTargets!==je||Ge.morphNormals!==at||Ge.morphColors!==st||Ge.toneMapping!==vt||Ge.morphTargetsCount!==Je)&&(tt=!0):(tt=!0,Ge.__version=ue.version);let jt=Ge.currentProgram;tt===!0&&(jt=Nt(ue,ae,he));let lr=!1,pn=!1,_i=!1;const lt=jt.getUniforms(),Yt=Ge.uniforms;if(Q.useProgram(jt.program)&&(lr=!0,pn=!0,_i=!0),ue.id!==F&&(F=ue.id,pn=!0),lr||T!==O){lt.setValue(U,"projectionMatrix",O.projectionMatrix),lt.setValue(U,"viewMatrix",O.matrixWorldInverse);const bt=lt.map.cameraPosition;bt!==void 0&&bt.setValue(U,M.setFromMatrixPosition(O.matrixWorld)),ve.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&lt.setValue(U,"isOrthographic",O.isOrthographicCamera===!0),T!==O&&(T=O,pn=!0,_i=!0)}if(he.isSkinnedMesh){lt.setOptional(U,he,"bindMatrix"),lt.setOptional(U,he,"bindMatrixInverse");const bt=he.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),lt.setValue(U,"boneTexture",bt.boneTexture,me))}he.isBatchedMesh&&(lt.setOptional(U,he,"batchingTexture"),lt.setValue(U,"batchingTexture",he._matricesTexture,me));const ln=de.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&we.update(he,de,jt),(pn||Ge.receiveShadow!==he.receiveShadow)&&(Ge.receiveShadow=he.receiveShadow,lt.setValue(U,"receiveShadow",he.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Yt.envMap.value=ze,Yt.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&ae.environment!==null&&(Yt.envMapIntensity.value=ae.environmentIntensity),pn&&(lt.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&dn(Yt,_i),De&&ue.fog===!0&&oe.refreshFogUniforms(Yt,De),oe.refreshMaterialUniforms(Yt,ue,$,K,p.state.transmissionRenderTarget[O.id]),Ns.upload(U,on(Ge),Yt,me)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Ns.upload(U,on(Ge),Yt,me),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&lt.setValue(U,"center",he.center),lt.setValue(U,"modelViewMatrix",he.modelViewMatrix),lt.setValue(U,"normalMatrix",he.normalMatrix),lt.setValue(U,"modelMatrix",he.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const bt=ue.uniformsGroups;for(let Zn=0,cr=bt.length;Zn<cr;Zn++){const Ft=bt[Zn];be.update(Ft,jt),be.bind(Ft,jt)}}return jt}function dn(O,ae){O.ambientLightColor.needsUpdate=ae,O.lightProbe.needsUpdate=ae,O.directionalLights.needsUpdate=ae,O.directionalLightShadows.needsUpdate=ae,O.pointLights.needsUpdate=ae,O.pointLightShadows.needsUpdate=ae,O.spotLights.needsUpdate=ae,O.spotLightShadows.needsUpdate=ae,O.rectAreaLights.needsUpdate=ae,O.hemisphereLights.needsUpdate=ae}function qr(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(O,ae,de){fe.get(O.texture).__webglTexture=ae,fe.get(O.depthTexture).__webglTexture=de;const ue=fe.get(O);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=de===void 0,ue.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,ae){const de=fe.get(O);de.__webglFramebuffer=ae,de.__useDefaultFramebuffer=ae===void 0},this.setRenderTarget=function(O,ae=0,de=0){w=O,I=ae,L=de;let ue=!0,he=null,De=!1,Be=!1;if(O){const ze=fe.get(O);ze.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(U.FRAMEBUFFER,null),ue=!1):ze.__webglFramebuffer===void 0?me.setupRenderTarget(O):ze.__hasExternalTextures&&me.rebindTextures(O,fe.get(O.texture).__webglTexture,fe.get(O.depthTexture).__webglTexture);const Ve=O.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Be=!0);const Te=fe.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Te[ae])?he=Te[ae][de]:he=Te[ae],De=!0):O.samples>0&&me.useMultisampledRTT(O)===!1?he=fe.get(O).__webglMultisampledFramebuffer:Array.isArray(Te)?he=Te[de]:he=Te,S.copy(O.viewport),W.copy(O.scissor),D=O.scissorTest}else S.copy(X).multiplyScalar($).floor(),W.copy(z).multiplyScalar($).floor(),D=te;if(Q.bindFramebuffer(U.FRAMEBUFFER,he)&&ue&&Q.drawBuffers(O,he),Q.viewport(S),Q.scissor(W),Q.setScissorTest(D),De){const ze=fe.get(O.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze.__webglTexture,de)}else if(Be){const ze=fe.get(O.texture),Ve=ae||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ze.__webglTexture,de||0,Ve)}F=-1},this.readRenderTargetPixels=function(O,ae,de,ue,he,De,Be){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=fe.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke){Q.bindFramebuffer(U.FRAMEBUFFER,ke);try{const ze=O.texture,Ve=ze.format,Te=ze.type;if(!ve.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae>=0&&ae<=O.width-ue&&de>=0&&de<=O.height-he&&U.readPixels(ae,de,ue,he,ye.convert(Ve),ye.convert(Te),De)}finally{const ze=w!==null?fe.get(w).__webglFramebuffer:null;Q.bindFramebuffer(U.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(O,ae,de=0){const ue=Math.pow(2,-de),he=Math.floor(ae.image.width*ue),De=Math.floor(ae.image.height*ue);me.setTexture2D(ae,0),U.copyTexSubImage2D(U.TEXTURE_2D,de,0,0,O.x,O.y,he,De),Q.unbindTexture()},this.copyTextureToTexture=function(O,ae,de,ue=0){const he=ae.image.width,De=ae.image.height,Be=ye.convert(de.format),ke=ye.convert(de.type);me.setTexture2D(de,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,de.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,de.unpackAlignment),ae.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,O.x,O.y,he,De,Be,ke,ae.image.data):ae.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,O.x,O.y,ae.mipmaps[0].width,ae.mipmaps[0].height,Be,ae.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,ue,O.x,O.y,Be,ke,ae.image),ue===0&&de.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(O,ae,de,ue,he=0){const De=O.max.x-O.min.x,Be=O.max.y-O.min.y,ke=O.max.z-O.min.z,ze=ye.convert(ue.format),Ve=ye.convert(ue.type);let Te;if(ue.isData3DTexture)me.setTexture3D(ue,0),Te=U.TEXTURE_3D;else if(ue.isDataArrayTexture||ue.isCompressedArrayTexture)me.setTexture2DArray(ue,0),Te=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,ue.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,ue.unpackAlignment);const je=U.getParameter(U.UNPACK_ROW_LENGTH),at=U.getParameter(U.UNPACK_IMAGE_HEIGHT),st=U.getParameter(U.UNPACK_SKIP_PIXELS),vt=U.getParameter(U.UNPACK_SKIP_ROWS),Xt=U.getParameter(U.UNPACK_SKIP_IMAGES),Je=de.isCompressedTexture?de.mipmaps[he]:de.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Je.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,O.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,O.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,O.min.z),de.isDataTexture||de.isData3DTexture?U.texSubImage3D(Te,he,ae.x,ae.y,ae.z,De,Be,ke,ze,Ve,Je.data):ue.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,he,ae.x,ae.y,ae.z,De,Be,ke,ze,Je.data):U.texSubImage3D(Te,he,ae.x,ae.y,ae.z,De,Be,ke,ze,Ve,Je),U.pixelStorei(U.UNPACK_ROW_LENGTH,je),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at),U.pixelStorei(U.UNPACK_SKIP_PIXELS,st),U.pixelStorei(U.UNPACK_SKIP_ROWS,vt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xt),he===0&&ue.generateMipmaps&&U.generateMipmap(Te),Q.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?me.setTextureCube(O,0):O.isData3DTexture?me.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?me.setTexture2DArray(O,0):me.setTexture2D(O,0),Q.unbindTexture()},this.resetState=function(){I=0,L=0,w=null,Q.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fa?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Qs?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ev extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bv extends rn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class lh extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xs=new Y,js=new Y,Oc=new rt,Mr=new $s,bs=new Vr,Zo=new Y,Bc=new Y;class Tv extends dt{constructor(e=new Vt,t=new lh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Xs.fromBufferAttribute(t,i-1),js.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xs.distanceTo(js);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=r,e.ray.intersectsSphere(bs)===!1)return;Oc.copy(i).invert(),Mr.copy(e.ray).applyMatrix4(Oc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,p=g-1;v<p;v+=c){const m=u.getX(v),b=u.getX(v+1),_=Ts(this,e,Mr,l,m,b);_&&t.push(_)}if(this.isLineLoop){const v=u.getX(g-1),p=u.getX(d),m=Ts(this,e,Mr,l,v,p);m&&t.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,p=g-1;v<p;v+=c){const m=Ts(this,e,Mr,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=Ts(this,e,Mr,l,g-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ts(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Xs.fromBufferAttribute(o,i),js.fromBufferAttribute(o,r),t.distanceSqToSegment(Xs,js,Zo,Bc)>n)return;Zo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Zo);if(!(l<e.near||l>e.far))return{distance:l,point:Bc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const kc=new Y,zc=new Y;class wv extends Tv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)kc.fromBufferAttribute(t,i),zc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kc.distanceTo(zc);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Se:new Y);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new Y,i=[],r=[],o=[],a=new Y,l=new rt;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new Y)}r[0]=new Y,o[0]=new Y;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(xt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(xt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ha extends fn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Av extends Ha{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Va(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const ws=new Y,Jo=new Va,Qo=new Va,$o=new Va;class Rv extends fn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new Y){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(ws.subVectors(i[0],i[1]).add(i[0]),c=ws);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(ws.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Jo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,p),Qo.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,p),$o.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Qo.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),$o.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Jo.calc(l),Qo.calc(l),$o.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Y().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gc(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Cv(s,e){const t=1-s;return t*t*e}function Pv(s,e){return 2*(1-s)*s*e}function Lv(s,e){return s*s*e}function Cr(s,e,t,n){return Cv(s,e)+Pv(s,t)+Lv(s,n)}function Uv(s,e){const t=1-s;return t*t*t*e}function Dv(s,e){const t=1-s;return 3*t*t*s*e}function Iv(s,e){return 3*(1-s)*s*s*e}function Nv(s,e){return s*s*s*e}function Pr(s,e,t,n,i){return Uv(s,e)+Dv(s,t)+Iv(s,n)+Nv(s,i)}class ch extends fn{constructor(e=new Se,t=new Se,n=new Se,i=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Se){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Pr(e,i.x,r.x,o.x,a.x),Pr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fv extends fn{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Pr(e,i.x,r.x,o.x,a.x),Pr(e,i.y,r.y,o.y,a.y),Pr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uh extends fn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ov extends fn{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hh extends fn{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Cr(e,i.x,r.x,o.x),Cr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bv extends fn{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Cr(e,i.x,r.x,o.x),Cr(e,i.y,r.y,o.y),Cr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fh extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Gc(a,l.x,c.x,u.x,h.x),Gc(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Se().fromArray(i))}return this}}var Hc=Object.freeze({__proto__:null,ArcCurve:Av,CatmullRomCurve3:Rv,CubicBezierCurve:ch,CubicBezierCurve3:Fv,EllipseCurve:Ha,LineCurve:uh,LineCurve3:Ov,QuadraticBezierCurve:hh,QuadraticBezierCurve3:Bv,SplineCurve:fh});class kv extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Hc[i.type]().fromJSON(i))}return this}}class qi extends kv{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new uh(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new hh(this.currentPoint.clone(),new Se(e,t),new Se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new ch(this.currentPoint.clone(),new Se(e,t),new Se(n,i),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new fh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Ha(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const As=new Y,Rs=new Y,ea=new Y,Cs=new nn;class zv extends Vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ji*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:p,c:m}=Cs;if(v.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Cs.getNormal(ea),h[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const _=(b+1)%3,y=h[b],I=h[_],L=Cs[u[b]],w=Cs[u[_]],F=`${y}_${I}`,T=`${I}_${y}`;T in f&&f[T]?(ea.dot(f[T].normal)<=r&&(d.push(L.x,L.y,L.z),d.push(w.x,w.y,w.z)),f[T]=null):F in f||(f[F]={index0:c[b],index1:c[_],normal:ea.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:p}=f[g];As.fromBufferAttribute(a,v),Rs.fromBufferAttribute(a,p),d.push(As.x,As.y,As.z),d.push(Rs.x,Rs.y,Rs.z)}this.setAttribute("position",new Et(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Lr extends qi{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new qi().fromJSON(i))}return this}}const Gv={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=dh(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=jv(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<i;g+=t)h=s[g],f=s[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Or(r,o,t,a,l,d,0),o}};function dh(s,e,t,n,i){let r,o;if(i===i_(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Vc(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Vc(r,s[r],s[r+1],o);return o&&to(o,o.next)&&(kr(o),o=o.next),o}function di(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(to(t,t.next)||ot(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Or(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Jv(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Vv(s,n,i,r):Hv(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),kr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Wv(di(s),e,t),Or(s,e,t,n,i,r,2)):o===2&&Xv(s,e,t,n,i,r):Or(di(s),e,t,n,i,r,1);break}}}function Hv(s){const e=s.prev,t=s,n=s.next;if(ot(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Vi(i,a,r,l,o,c,g.x,g.y)&&ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vv(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ot(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,v=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,m=Ma(d,g,e,t,n),b=Ma(v,p,e,t,n);let _=s.prevZ,y=s.nextZ;for(;_&&_.z>=m&&y&&y.z<=b;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&Vi(a,u,l,h,c,f,_.x,_.y)&&ot(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=v&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Vi(a,u,l,h,c,f,y.x,y.y)&&ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&Vi(a,u,l,h,c,f,_.x,_.y)&&ot(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&Vi(a,u,l,h,c,f,y.x,y.y)&&ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Wv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!to(i,r)&&ph(i,n,n.next,r)&&Br(i,r)&&Br(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),kr(n),kr(n.next),n=s=r),n=n.next}while(n!==s);return di(n)}function Xv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&e_(o,a)){let l=mh(o,a);o=di(o,o.next),l=di(l,l.next),Or(o,e,t,n,i,r,0),Or(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function jv(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=dh(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push($v(c));for(i.sort(Yv),r=0;r<i.length;r++)t=qv(i[r],t);return t}function Yv(s,e){return s.x-e.x}function qv(s,e){const t=Kv(s,e);if(!t)return e;const n=mh(t,s);return di(n,n.next),di(t,t.next)}function Kv(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Vi(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Br(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&Zv(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function Zv(s,e){return ot(s.prev,s,e.prev)<0&&ot(e.next,s,s.next)<0}function Jv(s,e,t,n){let i=s;do i.z===0&&(i.z=Ma(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Qv(i)}function Qv(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Ma(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function $v(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Vi(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function e_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!t_(s,e)&&(Br(s,e)&&Br(e,s)&&n_(s,e)&&(ot(s.prev,s,e.prev)||ot(s,e.prev,e))||to(s,e)&&ot(s.prev,s,s.next)>0&&ot(e.prev,e,e.next)>0)}function ot(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function to(s,e){return s.x===e.x&&s.y===e.y}function ph(s,e,t,n){const i=Ls(ot(s,e,t)),r=Ls(ot(s,e,n)),o=Ls(ot(t,n,s)),a=Ls(ot(t,n,e));return!!(i!==r&&o!==a||i===0&&Ps(s,t,e)||r===0&&Ps(s,n,e)||o===0&&Ps(t,s,n)||a===0&&Ps(t,e,n))}function Ps(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ls(s){return s>0?1:s<0?-1:0}function t_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ph(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Br(s,e){return ot(s.prev,s,s.next)<0?ot(s,e,s.next)>=0&&ot(s,s.prev,e)>=0:ot(s,e,s.prev)<0||ot(s,s.next,e)<0}function n_(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function mh(s,e){const t=new Ea(s.i,s.x,s.y),n=new Ea(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Vc(s,e,t,n){const i=new Ea(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function kr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ea(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function i_(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ui{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ui.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Wc(e),Xc(n,e);let o=e.length;t.forEach(Wc);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Xc(n,t[l]);const a=Gv.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Wc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Xc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Wa extends Vt{constructor(e=new Lr([new Se(0,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Et(i,3)),this.setAttribute("normal",new Et(r,3)),this.setAttribute("uv",new Et(o,2));function c(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;ui.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const b=g[p];ui.isClockWise(b)===!0&&(g[p]=b.reverse())}const v=ui.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const b=g[p];d=d.concat(b)}for(let p=0,m=d.length;p<m;p++){const b=d[p];i.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let p=0,m=v.length;p<m;p++){const b=v[p],_=b[0]+h,y=b[1]+h,I=b[2]+h;n.push(_,y,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return r_(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Wa(n,e.curveSegments)}}function r_(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class gh extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ys={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class s_{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const o_=new s_;class Xr{constructor(e){this.manager=e!==void 0?e:o_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";const yn={};class a_ extends Error{constructor(e,t){super(e),this.response=t}}class l_ extends Xr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ys.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yn[e]!==void 0){yn[e].push({onLoad:t,onProgress:n,onError:i});return}yn[e]=[],yn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=yn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let v=0;const p=new ReadableStream({start(m){b();function b(){h.read().then(({done:_,value:y})=>{if(_)m.close();else{v+=y.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let L=0,w=u.length;L<w;L++){const F=u[L];F.onProgress&&F.onProgress(I)}m.enqueue(y),b()}})}}});return new Response(p)}else throw new a_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ys.add(e,c);const u=yn[e];delete yn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=yn[e];if(u===void 0)throw this.manager.itemError(e),c;delete yn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class c_ extends Xr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ys.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Fr("img");function l(){u(),Ys.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class u_ extends Xr{constructor(e){super(e)}load(e,t,n,i){const r=new Rt,o=new c_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class vh extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class h_ extends vh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ta=new rt,jc=new Y,Yc=new Y;class f_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(jc),Yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yc),t.updateMatrixWorld(),ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class d_ extends f_{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p_ extends vh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new d_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class m_ extends Vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const qc=new rt;class g_{constructor(e,t,n=0,i=1/0){this.ray=new $s(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qc),this}intersectObject(e,t=!0,n=[]){return ba(e,this,n,t),n.sort(Kc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ba(e[i],this,n,t);return n.sort(Kc),n}}function Kc(s,e){return s.distance-e.distance}function ba(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)ba(i[r],e,t,!0)}}class Zc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Jc=new Se;class v_{constructor(e=new Se(1/0,1/0),t=new Se(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jc).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class ii{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new qi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const b=[];for(let _=0,y=m.length;_<y;_++){const I=m[_],L=new Lr;L.curves=I.curves,b.push(L)}return b}function n(m,b){const _=b.length;let y=!1;for(let I=_-1,L=0;L<_;I=L++){let w=b[I],F=b[L],T=F.x-w.x,S=F.y-w.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(w=b[L],T=-T,F=b[I],S=-S),m.y<w.y||m.y>F.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const W=S*(m.x-w.x)-T*(m.y-w.y);if(W===0)return!0;if(W<0)continue;y=!y}}else{if(m.y!==w.y)continue;if(F.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=F.x)return!0}}return y}const i=ui.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Lr,l.curves=a.curves,c.push(l),c;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],g=0,v;f[g]=void 0,d[g]=[];for(let m=0,b=r.length;m<b;m++)a=r[m],v=a.getPoints(),o=i(v),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Lr,p:v},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:v[0]});if(!f[0])return t(r);if(f.length>1){let m=!1,b=0;for(let _=0,y=f.length;_<y;_++)h[_]=[];for(let _=0,y=f.length;_<y;_++){const I=d[_];for(let L=0;L<I.length;L++){const w=I[L];let F=!0;for(let T=0;T<f.length;T++)n(w.p,f[T].p)&&(_!==T&&b++,F?(F=!1,h[T].push(w)):m=!0);F&&h[_].push(w)}}b>0&&m===!1&&(d=h)}let p;for(let m=0,b=f.length;m<b;m++){l=f[m].s,c.push(l),p=d[m];for(let _=0,y=p.length;_<y;_++)l.holes.push(p[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);const Qc={type:"change"},na={type:"start"},$c={type:"end"},Us=new $s,eu=new On,__=Math.cos(70*bn.DEG2RAD);class x_ extends pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Ee),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Qc),n.update(),r=i.NONE},this.update=function(){const A=new Y,ee=new wn().setFromUnitVectors(e.up,new Y(0,1,0)),J=ee.clone().invert(),_e=new Y,Ae=new wn,Ne=new Y,Pe=2*Math.PI;return function(Ye=null){const Ue=n.object.position;A.copy(Ue).sub(n.target),A.applyQuaternion(ee),a.setFromVector3(A),n.autoRotate&&r===i.NONE&&D(S(Ye)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let We=n.minAzimuthAngle,qe=n.maxAzimuthAngle;isFinite(We)&&isFinite(qe)&&(We<-Math.PI?We+=Pe:We>Math.PI&&(We-=Pe),qe<-Math.PI?qe+=Pe:qe>Math.PI&&(qe-=Pe),We<=qe?a.theta=Math.max(We,Math.min(qe,a.theta)):a.theta=a.theta>(We+qe)/2?Math.max(We,a.theta):Math.min(qe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let nt=!1;if(n.zoomToCursor&&L||n.object.isOrthographicCamera)a.radius=X(a.radius);else{const $e=a.radius;a.radius=X(a.radius*c),nt=$e!=a.radius}if(A.setFromSpherical(a),A.applyQuaternion(J),Ue.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&L){let $e=null;if(n.object.isPerspectiveCamera){const ct=A.length();$e=X(ct*c);const gt=ct-$e;n.object.position.addScaledVector(y,gt),n.object.updateMatrixWorld(),nt=!!gt}else if(n.object.isOrthographicCamera){const ct=new Y(I.x,I.y,0);ct.unproject(n.object);const gt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),nt=gt!==n.object.zoom;const Ct=new Y(I.x,I.y,0);Ct.unproject(n.object),n.object.position.sub(Ct).add(ct),n.object.updateMatrixWorld(),$e=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;$e!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar($e).add(n.object.position):(Us.origin.copy(n.object.position),Us.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Us.direction))<__?e.lookAt(n.target):(eu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Us.intersectPlane(eu,n.target))))}else if(n.object.isOrthographicCamera){const $e=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),$e!==n.object.zoom&&(n.object.updateProjectionMatrix(),nt=!0)}return c=1,L=!1,nt||_e.distanceToSquared(n.object.position)>o||8*(1-Ae.dot(n.object.quaternion))>o||Ne.distanceToSquared(n.target)>o?(n.dispatchEvent(Qc),_e.copy(n.object.position),Ae.copy(n.object.quaternion),Ne.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ie),n.domElement.removeEventListener("pointerdown",x),n.domElement.removeEventListener("pointercancel",B),n.domElement.removeEventListener("wheel",oe),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",B),n.domElement.getRootNode().removeEventListener("keydown",Me,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ee),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Zc,l=new Zc;let c=1;const u=new Y,h=new Se,f=new Se,d=new Se,g=new Se,v=new Se,p=new Se,m=new Se,b=new Se,_=new Se,y=new Y,I=new Se;let L=!1;const w=[],F={};let T=!1;function S(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function W(A){const ee=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*ee)}function D(A){l.theta-=A}function N(A){l.phi-=A}const H=function(){const A=new Y;return function(J,_e){A.setFromMatrixColumn(_e,0),A.multiplyScalar(-J),u.add(A)}}(),q=function(){const A=new Y;return function(J,_e){n.screenSpacePanning===!0?A.setFromMatrixColumn(_e,1):(A.setFromMatrixColumn(_e,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(J),u.add(A)}}(),K=function(){const A=new Y;return function(J,_e){const Ae=n.domElement;if(n.object.isPerspectiveCamera){const Ne=n.object.position;A.copy(Ne).sub(n.target);let Pe=A.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),H(2*J*Pe/Ae.clientHeight,n.object.matrix),q(2*_e*Pe/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(J*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),q(_e*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(A,ee){if(!n.zoomToCursor)return;L=!0;const J=n.domElement.getBoundingClientRect(),_e=A-J.left,Ae=ee-J.top,Ne=J.width,Pe=J.height;I.x=_e/Ne*2-1,I.y=-(Ae/Pe)*2+1,y.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function X(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function z(A){h.set(A.clientX,A.clientY)}function te(A){Z(A.clientX,A.clientX),m.set(A.clientX,A.clientY)}function le(A){g.set(A.clientX,A.clientY)}function P(A){f.set(A.clientX,A.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ee=n.domElement;D(2*Math.PI*d.x/ee.clientHeight),N(2*Math.PI*d.y/ee.clientHeight),h.copy(f),n.update()}function R(A){b.set(A.clientX,A.clientY),_.subVectors(b,m),_.y>0?$(W(_.y)):_.y<0&&k(W(_.y)),m.copy(b),n.update()}function C(A){v.set(A.clientX,A.clientY),p.subVectors(v,g).multiplyScalar(n.panSpeed),K(p.x,p.y),g.copy(v),n.update()}function M(A){Z(A.clientX,A.clientY),A.deltaY<0?k(W(A.deltaY)):A.deltaY>0&&$(W(A.deltaY)),n.update()}function V(A){let ee=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):K(-n.keyPanSpeed,0),ee=!0;break}ee&&(A.preventDefault(),n.update())}function re(A){if(w.length===1)h.set(A.pageX,A.pageY);else{const ee=Oe(A),J=.5*(A.pageX+ee.x),_e=.5*(A.pageY+ee.y);h.set(J,_e)}}function U(A){if(w.length===1)g.set(A.pageX,A.pageY);else{const ee=Oe(A),J=.5*(A.pageX+ee.x),_e=.5*(A.pageY+ee.y);g.set(J,_e)}}function ie(A){const ee=Oe(A),J=A.pageX-ee.x,_e=A.pageY-ee.y,Ae=Math.sqrt(J*J+_e*_e);m.set(0,Ae)}function j(A){n.enableZoom&&ie(A),n.enablePan&&U(A)}function ve(A){n.enableZoom&&ie(A),n.enableRotate&&re(A)}function Q(A){if(w.length==1)f.set(A.pageX,A.pageY);else{const J=Oe(A),_e=.5*(A.pageX+J.x),Ae=.5*(A.pageY+J.y);f.set(_e,Ae)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ee=n.domElement;D(2*Math.PI*d.x/ee.clientHeight),N(2*Math.PI*d.y/ee.clientHeight),h.copy(f)}function ce(A){if(w.length===1)v.set(A.pageX,A.pageY);else{const ee=Oe(A),J=.5*(A.pageX+ee.x),_e=.5*(A.pageY+ee.y);v.set(J,_e)}p.subVectors(v,g).multiplyScalar(n.panSpeed),K(p.x,p.y),g.copy(v)}function fe(A){const ee=Oe(A),J=A.pageX-ee.x,_e=A.pageY-ee.y,Ae=Math.sqrt(J*J+_e*_e);b.set(0,Ae),_.set(0,Math.pow(b.y/m.y,n.zoomSpeed)),$(_.y),m.copy(b);const Ne=(A.pageX+ee.x)*.5,Pe=(A.pageY+ee.y)*.5;Z(Ne,Pe)}function me(A){n.enableZoom&&fe(A),n.enablePan&&ce(A)}function G(A){n.enableZoom&&fe(A),n.enableRotate&&Q(A)}function x(A){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",B)),!Re(A)&&(Ce(A),A.pointerType==="touch"?ge(A):se(A)))}function E(A){n.enabled!==!1&&(A.pointerType==="touch"?we(A):ne(A))}function B(A){switch(ye(A),w.length){case 0:n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",B),n.dispatchEvent($c),r=i.NONE;break;case 1:const ee=w[0],J=F[ee];ge({pointerId:ee,pageX:J.x,pageY:J.y});break}}function se(A){let ee;switch(A.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Si.DOLLY:if(n.enableZoom===!1)return;te(A),r=i.DOLLY;break;case Si.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;le(A),r=i.PAN}else{if(n.enableRotate===!1)return;z(A),r=i.ROTATE}break;case Si.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;z(A),r=i.ROTATE}else{if(n.enablePan===!1)return;le(A),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(na)}function ne(A){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;P(A);break;case i.DOLLY:if(n.enableZoom===!1)return;R(A);break;case i.PAN:if(n.enablePan===!1)return;C(A);break}}function oe(A){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(A.preventDefault(),n.dispatchEvent(na),M(xe(A)),n.dispatchEvent($c))}function xe(A){const ee=A.deltaMode,J={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(ee){case 1:J.deltaY*=16;break;case 2:J.deltaY*=100;break}return A.ctrlKey&&!T&&(J.deltaY*=10),J}function Me(A){A.key==="Control"&&(T=!0,n.domElement.getRootNode().addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(A){A.key==="Control"&&(T=!1,n.domElement.getRootNode().removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function Ee(A){n.enabled===!1||n.enablePan===!1||V(A)}function ge(A){switch(be(A),w.length){case 1:switch(n.touches.ONE){case Mi.ROTATE:if(n.enableRotate===!1)return;re(A),r=i.TOUCH_ROTATE;break;case Mi.PAN:if(n.enablePan===!1)return;U(A),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Mi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(A),r=i.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(A),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(na)}function we(A){switch(be(A),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Q(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;me(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;G(A),n.update();break;default:r=i.NONE}}function Ie(A){n.enabled!==!1&&A.preventDefault()}function Ce(A){w.push(A.pointerId)}function ye(A){delete F[A.pointerId];for(let ee=0;ee<w.length;ee++)if(w[ee]==A.pointerId){w.splice(ee,1);return}}function Re(A){for(let ee=0;ee<w.length;ee++)if(w[ee]==A.pointerId)return!0;return!1}function be(A){let ee=F[A.pointerId];ee===void 0&&(ee=new Se,F[A.pointerId]=ee),ee.set(A.pageX,A.pageY)}function Oe(A){const ee=A.pointerId===w[0]?w[1]:w[0];return F[ee]}n.domElement.addEventListener("contextmenu",Ie),n.domElement.addEventListener("pointerdown",x),n.domElement.addEventListener("pointercancel",B),n.domElement.addEventListener("wheel",oe,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Me,{passive:!0,capture:!0}),this.update()}}const y_=[{id:"home",palette:["#f7f3e8","#e23d28","#1f5fbf","#f4c430","#111111"],blocks:[{id:"home-title",type:"content",subtype:"header",placement:"hero",size:"large",content:{text:"ADITYA DE",fontWeight:700}},{id:"home-intro",type:"content",subtype:"text",placement:"center",size:"wide",content:{text:"Creative Technologist and Design Educator working with extended reality interactions, specializing in browser-powered 3D experiences.",fontWeight:300}},{id:"home-projects",type:"interaction",placement:"bottomRightLowerLeft",size:"medium",content:{label:"PROJECTS",fontWeight:400},action:{type:"state",target:"projects"}},{id:"home-about",type:"interaction",placement:"topRight",size:"medium",content:{label:"ABOUT",fontWeight:400},action:{type:"state",target:"about"}},{id:"home-experiments",type:"interaction",placement:"bottomRightTop",size:"shortWide",content:{label:"EXPERIMENTS",fontWeight:400},action:{type:"state",target:"experiments"}},{id:"home-teaching",type:"interaction",placement:"bottomRightLowerRight",size:"medium",content:{label:"TEACHING",fontWeight:400},action:{type:"state",target:"teaching"}}]},{id:"projects",projectItems:[{id:"trainingSimulation",title:"Training Simulation Application for the Logistics Industry",thumbnail:"/images/training-simulation.svg",target:"trainingSimulation"},{id:"radstore",title:"Radstore - RadBoards Virtual Store Experience",thumbnail:"/images/radstore.svg",target:"radstore"},{id:"walkthrough3d",title:"3D Walkthrough Application for Real Estate",thumbnail:"/images/3d-walkthrough.svg",target:"walkthrough3d"},{id:"liveBallData",title:"Live Ball Data Visualizer for Cricket",thumbnail:"/images/live-ball-data.svg",target:"liveBallData"},{id:"bitsDesignSchoolShowcase2025",title:"BITS Design School Schowcase 2025",thumbnail:"/images/bits-design-school-showcase-2025.svg",target:"bitsDesignSchoolShowcase2025"},{id:"xrToneSynthesizerBeatSequencer",title:"XR Tone Synthesizer and Beat Sequencer",thumbnail:"/images/xr-tone-synthesizer-beat-sequencer.svg",target:"xrToneSynthesizerBeatSequencer"},{id:"powaiYear1",title:"Powai: Year 1",thumbnail:"/images/powai-year-1.svg",target:"powaiYear1"},{id:"natureOfCodeBranchNotebook",title:"Nature of Code/ Branch Notebook",thumbnail:"/images/nature-of-code-branch-notebook.svg",target:"natureOfCodeBranchNotebook"}],blocks:[{id:"projects-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"PROJECTS"}},{id:"projects-prev",type:"interaction",placement:"projectPrev",size:"small",content:{label:"PREV",fontWeight:700,iconSrc:"/icons/arrow-left.svg"},action:{type:"carousel",direction:-1}},{id:"projects-next",type:"interaction",placement:"projectNext",size:"small",content:{label:"NEXT",fontWeight:700,iconSrc:"/icons/arrow-right.svg"},action:{type:"carousel",direction:1}},{id:"projects-home",type:"interaction",placement:"bottomCenter",size:"small",content:{label:"HOME",fontWeight:700},action:{type:"state",target:"home"}}]},{id:"liveBallData",template:"projectDetail",projectDetails:{title:"Live Ball Data Visualizer for Cricket",image:"/images/live-ball-data.svg",tags:["REACT","THREE.JS","DATA VIZ","BROADCAST"],textBlocks:["A live cricket ball trajectory visualizer built for StanceBeam while working with Cloudworx Studio in 2024.","The application fetched ball data from an API and let operators choose animation types, overs, balls, camera transitions, and broadcast overlays for live match analysis."],modal:{title:"Live Ball Data Visualizer for Cricket",sections:[]}}},{id:"walkthrough3d",template:"projectDetail",projectDetails:{title:"3D Walkthrough Application for Real Estate",image:"/images/3d-walkthrough.svg",tags:["WEB 3D","VR","REAL ESTATE","OPTIMIZATION"],textBlocks:["A web-based architectural walkthrough system for exploring interior and real estate models in an immersive browser-native 3D space.","The project grew from experiments with SketchUp models, VR headsets, mobile navigation, model optimization, and texture baking to balance visual quality with smooth performance."],modal:{title:"3D Walkthrough Application for Real Estate",sections:[]}}},{id:"radstore",template:"projectDetail",projectDetails:{title:"Radstore - RadBoards Virtual Store Experience",image:"/images/radstore.svg",tags:["THREE.JS","VIRTUAL STORE","ECOMMERCE","JQUERY"],textBlocks:["A virtual store experience for RadBoards, a Bangalore-based hoverboard and electric kick scooter brand, developed at Conscious Circle in 2022.","I built the Three.js frontend, managed 2D product popups with jQuery, and integrated product exploration, video display, image galleries, and cart interactions."],modal:{title:"Radstore - RadBoards Virtual Store Experience",sections:[]}}},{id:"trainingSimulation",template:"projectDetail",projectDetails:{title:"Training Simulation Application for the Logistics Industry",image:"/images/training-simulation.svg",tags:["THREE.JS","SIMULATION","TRAINING","WEB APP"],textBlocks:["A web-based warehouse training simulation prototype for the logistics industry, created during a 2021 internship with Hoansi Studios.","The prototype simulated receiving workflows with 3D navigation, scanner input, box and pallet interactions, real-time instructions, and an editor for customizing training exercises."],modal:{title:"Training Simulation Application for the Logistics Industry",sections:[]}}},{id:"bitsDesignSchoolShowcase2025",template:"projectDetail",projectDetails:{title:"BITS Design School Schowcase 2025",image:"/images/bits-design-school-showcase-2025.svg",tags:["SHOWCASE","WEB","DESIGN SCHOOL","2025"],textBlocks:["Placeholder project page for BITS Design School Schowcase 2025.","This space will hold the project context, role, process notes, and final outcomes once the full write-up is ready."],modal:{title:"BITS Design School Schowcase 2025",sections:[]}}},{id:"xrToneSynthesizerBeatSequencer",template:"projectDetail",projectDetails:{title:"XR Tone Synthesizer and Beat Sequencer",image:"/images/xr-tone-synthesizer-beat-sequencer.svg",tags:["XR","SOUND","SYNTH","SEQUENCER"],textBlocks:["Placeholder project page for an XR tone synthesizer and beat sequencer.","This space will hold interaction details, sound design notes, technical implementation, and documentation once the full write-up is ready."],modal:{title:"XR Tone Synthesizer and Beat Sequencer",sections:[]}}},{id:"powaiYear1",template:"projectDetail",projectDetails:{title:"Powai: Year 1",image:"/images/powai-year-1.svg",tags:["PLACE","RESEARCH","ARCHIVE","STORYTELLING"],textBlocks:["Placeholder project page for Powai: Year 1.","This space will hold the project narrative, research material, visual documentation, and final reflections once the full write-up is ready."],modal:{title:"Powai: Year 1",sections:[]}}},{id:"natureOfCodeBranchNotebook",template:"projectDetail",projectDetails:{title:"Nature of Code/ Branch Notebook",image:"/images/nature-of-code-branch-notebook.svg",tags:["GENERATIVE","NOTEBOOK","P5.JS","SYSTEMS"],textBlocks:["Placeholder project page for Nature of Code/ Branch Notebook.","This space will hold experiments, sketches, code studies, and process notes once the full write-up is ready."],modal:{title:"Nature of Code/ Branch Notebook",sections:[]}}},{id:"communion",template:"projectDetail",projectDetails:{title:"COMMUNION",image:"/images/communion.jpg",tags:["WEB 3D","SOUND","PARTICIPATION","RITUAL"],textBlocks:["A browser-based ritual interface exploring sound, shared attention, and spatial interaction.","The project treats interface, score, and environment as one continuous browser-native system."],modal:{title:"Communion",sections:[{type:"text",content:"Communion is a prototype for live browser-based participation, using 3D space as both interface and score."},{type:"image",src:"/images/communion.jpg",caption:"Placeholder project image."}]}},blocks:[{id:"communion-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"COMMUNION"}},{id:"communion-text",type:"content",subtype:"text",placement:"left",size:"tall",content:{text:"A browser-based ritual interface exploring sound, shared attention, and spatial interaction."}},{id:"communion-image",type:"content",subtype:"image",placement:"right",size:"large",content:{src:"/images/communion.jpg",alt:"Communion project placeholder"}},{id:"communion-more",type:"moreInfo",placement:"bottom",size:"medium",content:{label:"MORE INFO"},modal:{title:"Communion",sections:[{type:"text",content:"Communion is a prototype for live browser-based participation, using 3D space as both interface and score."},{type:"image",src:"/images/communion.jpg",caption:"Placeholder project image."}]}},{id:"communion-back",type:"interaction",placement:"corner",size:"small",content:{label:"BACK"},action:{type:"state",target:"projects"}}]},{id:"astralProjection",template:"projectDetail",projectDetails:{title:"ASTRAL PROJECTION",image:"/images/astral-projection.jpg",tags:["GENERATIVE","SOUND","INTERACTION","ATMOSPHERE"],textBlocks:["An interactive composition for drifting between layered visual systems and generative sound states.","Astral Projection treats navigation, atmosphere, and interaction as a single compositional system."],modal:{title:"Astral Projection",sections:[{type:"text",content:"Astral Projection treats navigation, atmosphere, and interaction as a single compositional system."},{type:"image",src:"/images/astral-projection.jpg",caption:"Placeholder project image."}]}},blocks:[{id:"astral-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"ASTRAL PROJECTION"}},{id:"astral-text",type:"content",subtype:"text",placement:"center",size:"wide",content:{text:"An interactive composition for drifting between layered visual systems and generative sound states."}},{id:"astral-image",type:"content",subtype:"image",placement:"right",size:"large",content:{src:"/images/astral-projection.jpg",alt:"Astral Projection project placeholder"}},{id:"astral-more",type:"moreInfo",placement:"bottom",size:"medium",content:{label:"MORE INFO"},modal:{title:"Astral Projection",sections:[{type:"text",content:"Astral Projection treats navigation, atmosphere, and interaction as a single compositional system."},{type:"image",src:"/images/astral-projection.jpg",caption:"Placeholder project image."}]}},{id:"astral-back",type:"interaction",placement:"corner",size:"small",content:{label:"BACK"},action:{type:"state",target:"projects"}}]},{id:"spatialSketches",template:"projectDetail",projectDetails:{title:"SPATIAL SKETCHES",image:"/images/spatial-sketches.jpg",tags:["PROTOTYPE","SPATIAL UI","WEBXR","STUDY"],textBlocks:["Placeholder project page for a browser-native spatial interaction study.","A set of quick tests for interface behavior, depth, and attention in browser-based 3D."],modal:{title:"Spatial Sketches",sections:[{type:"text",content:"Placeholder detail content for Spatial Sketches."}]}},blocks:[{id:"spatial-sketches-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"SPATIAL SKETCHES",fontWeight:700}},{id:"spatial-sketches-text",type:"content",subtype:"text",placement:"center",size:"wide",content:{text:"Placeholder project page for a browser-native spatial interaction study.",fontWeight:300}},{id:"spatial-sketches-image",type:"content",subtype:"image",placement:"right",size:"medium",content:{src:"/images/spatial-sketches.jpg",alt:"Spatial Sketches placeholder"}},{id:"spatial-sketches-back",type:"interaction",placement:"bottomCenter",size:"small",content:{label:"BACK",fontWeight:700},action:{type:"state",target:"projects"}}]},{id:"signalGarden",template:"projectDetail",projectDetails:{title:"SIGNAL GARDEN",image:"/images/signal-garden.jpg",tags:["AUDIOVISUAL","REAL TIME","INTERFACE","SYSTEM"],textBlocks:["Placeholder project page for a real-time audiovisual interface.","An experimental system for making signal flow, interaction, and sound visible in the browser."],modal:{title:"Signal Garden",sections:[{type:"text",content:"Placeholder detail content for Signal Garden."}]}},blocks:[{id:"signal-garden-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"SIGNAL GARDEN",fontWeight:700}},{id:"signal-garden-text",type:"content",subtype:"text",placement:"center",size:"wide",content:{text:"Placeholder project page for a real-time audiovisual interface.",fontWeight:300}},{id:"signal-garden-image",type:"content",subtype:"image",placement:"right",size:"medium",content:{src:"/images/signal-garden.jpg",alt:"Signal Garden placeholder"}},{id:"signal-garden-back",type:"interaction",placement:"bottomCenter",size:"small",content:{label:"BACK",fontWeight:700},action:{type:"state",target:"projects"}}]},{id:"browserRituals",template:"projectDetail",projectDetails:{title:"BROWSER RITUALS",image:"/images/browser-rituals.jpg",tags:["PERFORMANCE","BROWSER","CEREMONY","NETWORK"],textBlocks:["Placeholder project page for an experimental web performance system.","The project uses simple browser primitives to stage shared attention, timing, and mediated presence."],modal:{title:"Browser Rituals",sections:[{type:"text",content:"Placeholder detail content for Browser Rituals."}]}},blocks:[{id:"browser-rituals-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"BROWSER RITUALS",fontWeight:700}},{id:"browser-rituals-text",type:"content",subtype:"text",placement:"center",size:"wide",content:{text:"Placeholder project page for an experimental web performance system.",fontWeight:300}},{id:"browser-rituals-image",type:"content",subtype:"image",placement:"right",size:"medium",content:{src:"/images/browser-rituals.jpg",alt:"Browser Rituals placeholder"}},{id:"browser-rituals-back",type:"interaction",placement:"bottomCenter",size:"small",content:{label:"BACK",fontWeight:700},action:{type:"state",target:"projects"}}]},{id:"experiments",template:"projectList",projectItems:[{id:"experimentPlaceholder",title:"Experiment Placeholder",thumbnail:"/images/experiment-placeholder.svg",target:"experimentPlaceholder"}],blocks:[{id:"experiments-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"EXPERIMENTS",fontWeight:700}},{id:"experiments-prev",type:"interaction",placement:"projectPrev",size:"small",content:{label:"PREV",fontWeight:700,iconSrc:"/icons/arrow-left.svg"},action:{type:"carousel",direction:-1}},{id:"experiments-next",type:"interaction",placement:"projectNext",size:"small",content:{label:"NEXT",fontWeight:700,iconSrc:"/icons/arrow-right.svg"},action:{type:"carousel",direction:1}},{id:"experiments-home",type:"interaction",placement:"bottomCenter",size:"small",content:{label:"HOME",fontWeight:700},action:{type:"state",target:"home"}}]},{id:"teaching",template:"projectList",projectItems:[{id:"habitAndBehaviourLab",title:"Habit and Behaviour Lab",thumbnail:"/images/habit-and-behaviour-lab.svg",target:"habitAndBehaviourLab"},{id:"architecturalVisualizationVr",title:"Architectural Visualization in Virtual Reality",thumbnail:"/images/architectural-visualization-vr.svg",target:"architecturalVisualizationVr"},{id:"basicsOfProgramming",title:"Basics of Programming",thumbnail:"/images/basics-of-programming.svg",target:"basicsOfProgramming"},{id:"threejsWorkshopNyuTandonMakerspaceDesignLab",title:"Three.js Workshop @ NYU Tandon Makerspace Design Lab",thumbnail:"/images/threejs-workshop-nyu-tandon-makerspace-design-lab.svg",target:"threejsWorkshopNyuTandonMakerspaceDesignLab"}],blocks:[{id:"teaching-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"TEACHING",fontWeight:700}},{id:"teaching-prev",type:"interaction",placement:"projectPrev",size:"small",content:{label:"PREV",fontWeight:700,iconSrc:"/icons/arrow-left.svg"},action:{type:"carousel",direction:-1}},{id:"teaching-next",type:"interaction",placement:"projectNext",size:"small",content:{label:"NEXT",fontWeight:700,iconSrc:"/icons/arrow-right.svg"},action:{type:"carousel",direction:1}},{id:"teaching-home",type:"interaction",placement:"bottomCenter",size:"small",content:{label:"HOME",fontWeight:700},action:{type:"state",target:"home"}}]},{id:"experimentPlaceholder",template:"projectDetail",projectDetails:{title:"Experiment Placeholder",image:"/images/experiment-placeholder.svg",tags:["EXPERIMENT","FILLER","STUDY","WEB"],textBlocks:["Placeholder experiment page for a small browser-native study.","This space will hold process notes, technical details, interaction sketches, and documentation once the experiment is ready."],modal:{title:"Experiment Placeholder",sections:[]}}},{id:"teachingPlaceholder",template:"projectDetail",projectDetails:{title:"Teaching Placeholder",image:"/images/teaching-placeholder.svg",tags:["TEACHING","FILLER","WORKSHOP","PEDAGOGY"],textBlocks:["Placeholder teaching page for a course, workshop, or learning tool.","This space will hold teaching context, learning objectives, session structure, student outcomes, and documentation once the entry is ready."],modal:{title:"Teaching Placeholder",sections:[]}}},{id:"habitAndBehaviourLab",template:"projectDetail",projectDetails:{title:"Habit and Behaviour Lab",image:"/images/habit-and-behaviour-lab.svg",tags:["RESEARCH","VR","EEG","TEACHING"],textBlocks:["A teaching and research engagement with Dr. Sanjukta Ghosh's Habit and Behaviour Lab at Srishti Manipal from November 2022 to April 2024.","I supported students technically, conducted masterclasses on virtual environments and sensor electronics, helped run EEG experiments, and built web and VR prototypes for the lab."],modal:{title:"Habit and Behaviour Lab",sections:[]}}},{id:"architecturalVisualizationVr",template:"projectDetail",projectDetails:{title:"Architectural Visualization in Virtual Reality",image:"/images/architectural-visualization-vr.svg",tags:["VR","ARCHITECTURE","WEB 3D","WORKSHOP"],textBlocks:["A teaching project focused on using virtual reality to experience architectural spaces and spatial models.","The project introduced browser-based 3D workflows, model preparation, navigation, and immersive viewing as a way to make architectural visualization more accessible."],modal:{title:"Architectural Visualization in Virtual Reality",sections:[]}}},{id:"basicsOfProgramming",template:"projectDetail",projectDetails:{title:"Basics of Programming",image:"/images/basics-of-programming.svg",tags:["P5.JS","CREATIVE CODING","GENERATIVE ART","TEACHING"],textBlocks:["A creative coding unit for User Interface and Interaction Design students at Srishti Manipal, built around programming with direct visual feedback in p5.js.","The course introduced Cartesian geometry, loops, randomness, grids, image manipulation, and generative composition through visual exercises and student-led experiments."],modal:{title:"Basics of Programming",sections:[]}}},{id:"threejsWorkshopNyuTandonMakerspaceDesignLab",template:"projectDetail",projectDetails:{title:"Three.js Workshop @ NYU Tandon Makerspace Design Lab",image:"/images/threejs-workshop-nyu-tandon-makerspace-design-lab.svg",tags:["THREE.JS","WORKSHOP","WEB 3D","TEACHING"],textBlocks:["Placeholder teaching page for a Three.js workshop at NYU Tandon Makerspace Design Lab.","This space will hold the workshop structure, learning goals, examples, participant outcomes, and documentation once the write-up is ready."],modal:{title:"Three.js Workshop @ NYU Tandon Makerspace Design Lab",sections:[]}}},{id:"about",blocks:[{id:"about-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"ABOUT",fontWeight:700}},{id:"about-instagram",type:"interaction",placement:"topLeftStack1",size:"small",content:{label:"IG",fontWeight:700,iconSrc:"/icons/instagram.svg"},action:{type:"link",url:"https://www.instagram.com/cactus_de/"}},{id:"about-github",type:"interaction",placement:"topLeftStack2",size:"small",content:{label:"GH",fontWeight:700,iconSrc:"/icons/github.svg"},action:{type:"link",url:"https://github.com/adityade8k"}},{id:"about-linkedin",type:"interaction",placement:"topLeftStack3",size:"small",content:{label:"IN",fontWeight:700,iconSrc:"/icons/linkedin.svg"},action:{type:"link",url:"https://www.linkedin.com/in/aditya-de-94222a163/"}},{id:"about-face",type:"content",subtype:"image",placement:"aboutHeroImage",size:"medium",content:{src:"/images/myFace.png",alt:"Portrait of Aditya De"}},{id:"about-copy-tall",type:"content",subtype:"text",placement:"aboutPracticeTop",size:"wide",content:{text:"Aditya's practice explores the juxtaposition of the digital and physical through browser-based 3D interaction, mixed reality experimentation, sound, and real-time creative technology.",fontWeight:300}},{id:"about-resume",type:"interaction",placement:"aboutImageBelow",size:"small",content:{label:"RESUME 2026",fontWeight:700},action:{type:"link",url:"/files/ADITYADE_CV_2026.pdf"}},{id:"about-copy-wide",type:"content",subtype:"text",placement:"aboutTall",size:"tall",content:{text:"As a developer and designer, he builds web-based spatial systems and prototypes mixed reality experiences that reimagine how people engage with space, bodies, and interfaces.",fontWeight:300}},{id:"about-copy-education",type:"content",subtype:"text",placement:"aboutLowerWide",size:"wide",content:{text:"As an educator, he is interested in how AI can be aligned with pedagogy, with a focus on process, experimentation, and learning through making.",fontWeight:300}},{id:"about-home",type:"interaction",placement:"bottomCenter",size:"small",content:{label:"HOME",fontWeight:700},action:{type:"state",target:"home"}}]}],zr={pages:y_},S_=zt;class no extends Xr{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const r=this,o=new l_(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(P,R){if(P.nodeType!==1)return;const C=y(P);let M=!1,V=null;switch(P.nodeName){case"svg":R=g(P,R);break;case"style":r(P);break;case"g":R=g(P,R);break;case"path":R=g(P,R),P.hasAttribute("d")&&(V=i(P));break;case"rect":R=g(P,R),V=l(P);break;case"polygon":R=g(P,R),V=c(P);break;case"polyline":R=g(P,R),V=u(P);break;case"circle":R=g(P,R),V=h(P);break;case"ellipse":R=g(P,R),V=f(P);break;case"line":R=g(P,R),V=d(P);break;case"defs":M=!0;break;case"use":R=g(P,R);const ie=(P.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),j=P.viewportElement.getElementById(ie);j?n(j,R):console.warn("SVGLoader: 'use node' references non-existent node id: "+ie);break}V&&(R.fill!==void 0&&R.fill!=="none"&&V.color.setStyle(R.fill,S_),L(V,z),D.push(V),V.userData={node:P,style:R});const re=P.childNodes;for(let U=0;U<re.length;U++){const ie=re[U];M&&ie.nodeName!=="style"&&ie.nodeName!=="defs"||n(ie,R)}C&&(H.pop(),H.length>0?z.copy(H[H.length-1]):z.identity())}function i(P){const R=new ii,C=new Se,M=new Se,V=new Se;let re=!0,U=!1;const ie=P.getAttribute("d");if(ie===""||ie==="none")return null;const j=ie.match(/[a-df-z][^a-df-z]*/ig);for(let ve=0,Q=j.length;ve<Q;ve++){const ce=j[ve],fe=ce.charAt(0),me=ce.slice(1).trim();re===!0&&(U=!0,re=!1);let G;switch(fe){case"M":G=p(me);for(let x=0,E=G.length;x<E;x+=2)C.x=G[x+0],C.y=G[x+1],M.x=C.x,M.y=C.y,x===0?R.moveTo(C.x,C.y):R.lineTo(C.x,C.y),x===0&&V.copy(C);break;case"H":G=p(me);for(let x=0,E=G.length;x<E;x++)C.x=G[x],M.x=C.x,M.y=C.y,R.lineTo(C.x,C.y),x===0&&U===!0&&V.copy(C);break;case"V":G=p(me);for(let x=0,E=G.length;x<E;x++)C.y=G[x],M.x=C.x,M.y=C.y,R.lineTo(C.x,C.y),x===0&&U===!0&&V.copy(C);break;case"L":G=p(me);for(let x=0,E=G.length;x<E;x+=2)C.x=G[x+0],C.y=G[x+1],M.x=C.x,M.y=C.y,R.lineTo(C.x,C.y),x===0&&U===!0&&V.copy(C);break;case"C":G=p(me);for(let x=0,E=G.length;x<E;x+=6)R.bezierCurveTo(G[x+0],G[x+1],G[x+2],G[x+3],G[x+4],G[x+5]),M.x=G[x+2],M.y=G[x+3],C.x=G[x+4],C.y=G[x+5],x===0&&U===!0&&V.copy(C);break;case"S":G=p(me);for(let x=0,E=G.length;x<E;x+=4)R.bezierCurveTo(v(C.x,M.x),v(C.y,M.y),G[x+0],G[x+1],G[x+2],G[x+3]),M.x=G[x+0],M.y=G[x+1],C.x=G[x+2],C.y=G[x+3],x===0&&U===!0&&V.copy(C);break;case"Q":G=p(me);for(let x=0,E=G.length;x<E;x+=4)R.quadraticCurveTo(G[x+0],G[x+1],G[x+2],G[x+3]),M.x=G[x+0],M.y=G[x+1],C.x=G[x+2],C.y=G[x+3],x===0&&U===!0&&V.copy(C);break;case"T":G=p(me);for(let x=0,E=G.length;x<E;x+=2){const B=v(C.x,M.x),se=v(C.y,M.y);R.quadraticCurveTo(B,se,G[x+0],G[x+1]),M.x=B,M.y=se,C.x=G[x+0],C.y=G[x+1],x===0&&U===!0&&V.copy(C)}break;case"A":G=p(me,[3,4],7);for(let x=0,E=G.length;x<E;x+=7){if(G[x+5]==C.x&&G[x+6]==C.y)continue;const B=C.clone();C.x=G[x+5],C.y=G[x+6],M.x=C.x,M.y=C.y,o(R,G[x],G[x+1],G[x+2],G[x+3],G[x+4],B,C),x===0&&U===!0&&V.copy(C)}break;case"m":G=p(me);for(let x=0,E=G.length;x<E;x+=2)C.x+=G[x+0],C.y+=G[x+1],M.x=C.x,M.y=C.y,x===0?R.moveTo(C.x,C.y):R.lineTo(C.x,C.y),x===0&&V.copy(C);break;case"h":G=p(me);for(let x=0,E=G.length;x<E;x++)C.x+=G[x],M.x=C.x,M.y=C.y,R.lineTo(C.x,C.y),x===0&&U===!0&&V.copy(C);break;case"v":G=p(me);for(let x=0,E=G.length;x<E;x++)C.y+=G[x],M.x=C.x,M.y=C.y,R.lineTo(C.x,C.y),x===0&&U===!0&&V.copy(C);break;case"l":G=p(me);for(let x=0,E=G.length;x<E;x+=2)C.x+=G[x+0],C.y+=G[x+1],M.x=C.x,M.y=C.y,R.lineTo(C.x,C.y),x===0&&U===!0&&V.copy(C);break;case"c":G=p(me);for(let x=0,E=G.length;x<E;x+=6)R.bezierCurveTo(C.x+G[x+0],C.y+G[x+1],C.x+G[x+2],C.y+G[x+3],C.x+G[x+4],C.y+G[x+5]),M.x=C.x+G[x+2],M.y=C.y+G[x+3],C.x+=G[x+4],C.y+=G[x+5],x===0&&U===!0&&V.copy(C);break;case"s":G=p(me);for(let x=0,E=G.length;x<E;x+=4)R.bezierCurveTo(v(C.x,M.x),v(C.y,M.y),C.x+G[x+0],C.y+G[x+1],C.x+G[x+2],C.y+G[x+3]),M.x=C.x+G[x+0],M.y=C.y+G[x+1],C.x+=G[x+2],C.y+=G[x+3],x===0&&U===!0&&V.copy(C);break;case"q":G=p(me);for(let x=0,E=G.length;x<E;x+=4)R.quadraticCurveTo(C.x+G[x+0],C.y+G[x+1],C.x+G[x+2],C.y+G[x+3]),M.x=C.x+G[x+0],M.y=C.y+G[x+1],C.x+=G[x+2],C.y+=G[x+3],x===0&&U===!0&&V.copy(C);break;case"t":G=p(me);for(let x=0,E=G.length;x<E;x+=2){const B=v(C.x,M.x),se=v(C.y,M.y);R.quadraticCurveTo(B,se,C.x+G[x+0],C.y+G[x+1]),M.x=B,M.y=se,C.x=C.x+G[x+0],C.y=C.y+G[x+1],x===0&&U===!0&&V.copy(C)}break;case"a":G=p(me,[3,4],7);for(let x=0,E=G.length;x<E;x+=7){if(G[x+5]==0&&G[x+6]==0)continue;const B=C.clone();C.x+=G[x+5],C.y+=G[x+6],M.x=C.x,M.y=C.y,o(R,G[x],G[x+1],G[x+2],G[x+3],G[x+4],B,C),x===0&&U===!0&&V.copy(C)}break;case"Z":case"z":R.currentPath.autoClose=!0,R.currentPath.curves.length>0&&(C.copy(V),R.currentPath.currentPoint.copy(C),re=!0);break;default:console.warn(ce)}U=!1}return R}function r(P){if(!(!P.sheet||!P.sheet.cssRules||!P.sheet.cssRules.length))for(let R=0;R<P.sheet.cssRules.length;R++){const C=P.sheet.cssRules[R];if(C.type!==1)continue;const M=C.selectorText.split(/,/gm).filter(Boolean).map(V=>V.trim());for(let V=0;V<M.length;V++){const re=Object.fromEntries(Object.entries(C.style).filter(([,U])=>U!==""));N[M[V]]=Object.assign(N[M[V]]||{},re)}}}function o(P,R,C,M,V,re,U,ie){if(R==0||C==0){P.lineTo(ie.x,ie.y);return}M=M*Math.PI/180,R=Math.abs(R),C=Math.abs(C);const j=(U.x-ie.x)/2,ve=(U.y-ie.y)/2,Q=Math.cos(M)*j+Math.sin(M)*ve,ce=-Math.sin(M)*j+Math.cos(M)*ve;let fe=R*R,me=C*C;const G=Q*Q,x=ce*ce,E=G/fe+x/me;if(E>1){const we=Math.sqrt(E);R=we*R,C=we*C,fe=R*R,me=C*C}const B=fe*x+me*G,se=(fe*me-B)/B;let ne=Math.sqrt(Math.max(0,se));V===re&&(ne=-ne);const oe=ne*R*ce/C,xe=-ne*C*Q/R,Me=Math.cos(M)*oe-Math.sin(M)*xe+(U.x+ie.x)/2,pe=Math.sin(M)*oe+Math.cos(M)*xe+(U.y+ie.y)/2,Ee=a(1,0,(Q-oe)/R,(ce-xe)/C),ge=a((Q-oe)/R,(ce-xe)/C,(-Q-oe)/R,(-ce-xe)/C)%(Math.PI*2);P.currentPath.absellipse(Me,pe,R,C,Ee,Ee+ge,re===0,M)}function a(P,R,C,M){const V=P*C+R*M,re=Math.sqrt(P*P+R*R)*Math.sqrt(C*C+M*M);let U=Math.acos(Math.max(-1,Math.min(1,V/re)));return P*M-R*C<0&&(U=-U),U}function l(P){const R=_(P.getAttribute("x")||0),C=_(P.getAttribute("y")||0),M=_(P.getAttribute("rx")||P.getAttribute("ry")||0),V=_(P.getAttribute("ry")||P.getAttribute("rx")||0),re=_(P.getAttribute("width")),U=_(P.getAttribute("height")),ie=1-.551915024494,j=new ii;return j.moveTo(R+M,C),j.lineTo(R+re-M,C),(M!==0||V!==0)&&j.bezierCurveTo(R+re-M*ie,C,R+re,C+V*ie,R+re,C+V),j.lineTo(R+re,C+U-V),(M!==0||V!==0)&&j.bezierCurveTo(R+re,C+U-V*ie,R+re-M*ie,C+U,R+re-M,C+U),j.lineTo(R+M,C+U),(M!==0||V!==0)&&j.bezierCurveTo(R+M*ie,C+U,R,C+U-V*ie,R,C+U-V),j.lineTo(R,C+V),(M!==0||V!==0)&&j.bezierCurveTo(R,C+V*ie,R+M*ie,C,R+M,C),j}function c(P){function R(re,U,ie){const j=_(U),ve=_(ie);V===0?M.moveTo(j,ve):M.lineTo(j,ve),V++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,M=new ii;let V=0;return P.getAttribute("points").replace(C,R),M.currentPath.autoClose=!0,M}function u(P){function R(re,U,ie){const j=_(U),ve=_(ie);V===0?M.moveTo(j,ve):M.lineTo(j,ve),V++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,M=new ii;let V=0;return P.getAttribute("points").replace(C,R),M.currentPath.autoClose=!1,M}function h(P){const R=_(P.getAttribute("cx")||0),C=_(P.getAttribute("cy")||0),M=_(P.getAttribute("r")||0),V=new qi;V.absarc(R,C,M,0,Math.PI*2);const re=new ii;return re.subPaths.push(V),re}function f(P){const R=_(P.getAttribute("cx")||0),C=_(P.getAttribute("cy")||0),M=_(P.getAttribute("rx")||0),V=_(P.getAttribute("ry")||0),re=new qi;re.absellipse(R,C,M,V,0,Math.PI*2);const U=new ii;return U.subPaths.push(re),U}function d(P){const R=_(P.getAttribute("x1")||0),C=_(P.getAttribute("y1")||0),M=_(P.getAttribute("x2")||0),V=_(P.getAttribute("y2")||0),re=new ii;return re.moveTo(R,C),re.lineTo(M,V),re.currentPath.autoClose=!1,re}function g(P,R){R=Object.assign({},R);let C={};if(P.hasAttribute("class")){const U=P.getAttribute("class").split(/\s/).filter(Boolean).map(ie=>ie.trim());for(let ie=0;ie<U.length;ie++)C=Object.assign(C,N["."+U[ie]])}P.hasAttribute("id")&&(C=Object.assign(C,N["#"+P.getAttribute("id")]));function M(U,ie,j){j===void 0&&(j=function(Q){return Q.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),Q}),P.hasAttribute(U)&&(R[ie]=j(P.getAttribute(U))),C[U]&&(R[ie]=j(C[U])),P.style&&P.style[U]!==""&&(R[ie]=j(P.style[U]))}function V(U){return Math.max(0,Math.min(1,_(U)))}function re(U){return Math.max(0,_(U))}return M("fill","fill"),M("fill-opacity","fillOpacity",V),M("fill-rule","fillRule"),M("opacity","opacity",V),M("stroke","stroke"),M("stroke-opacity","strokeOpacity",V),M("stroke-width","strokeWidth",re),M("stroke-linejoin","strokeLineJoin"),M("stroke-linecap","strokeLineCap"),M("stroke-miterlimit","strokeMiterLimit",re),M("visibility","visibility"),R}function v(P,R){return P-(R-P)}function p(P,R,C){if(typeof P!="string")throw new TypeError("Invalid input: "+typeof P);const M={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},V=0,re=1,U=2,ie=3;let j=V,ve=!0,Q="",ce="";const fe=[];function me(B,se,ne){const oe=new SyntaxError('Unexpected character "'+B+'" at index '+se+".");throw oe.partial=ne,oe}function G(){Q!==""&&(ce===""?fe.push(Number(Q)):fe.push(Number(Q)*Math.pow(10,Number(ce)))),Q="",ce=""}let x;const E=P.length;for(let B=0;B<E;B++){if(x=P[B],Array.isArray(R)&&R.includes(fe.length%C)&&M.FLAGS.test(x)){j=re,Q=x,G();continue}if(j===V){if(M.WHITESPACE.test(x))continue;if(M.DIGIT.test(x)||M.SIGN.test(x)){j=re,Q=x;continue}if(M.POINT.test(x)){j=U,Q=x;continue}M.COMMA.test(x)&&(ve&&me(x,B,fe),ve=!0)}if(j===re){if(M.DIGIT.test(x)){Q+=x;continue}if(M.POINT.test(x)){Q+=x,j=U;continue}if(M.EXP.test(x)){j=ie;continue}M.SIGN.test(x)&&Q.length===1&&M.SIGN.test(Q[0])&&me(x,B,fe)}if(j===U){if(M.DIGIT.test(x)){Q+=x;continue}if(M.EXP.test(x)){j=ie;continue}M.POINT.test(x)&&Q[Q.length-1]==="."&&me(x,B,fe)}if(j===ie){if(M.DIGIT.test(x)){ce+=x;continue}if(M.SIGN.test(x)){if(ce===""){ce+=x;continue}ce.length===1&&M.SIGN.test(ce)&&me(x,B,fe)}}M.WHITESPACE.test(x)?(G(),j=V,ve=!1):M.COMMA.test(x)?(G(),j=V,ve=!0):M.SIGN.test(x)?(G(),j=re,Q=x):M.POINT.test(x)?(G(),j=U,Q=x):me(x,B,fe)}return G(),fe}const m=["mm","cm","in","pt","pc","px"],b={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(P){let R="px";if(typeof P=="string"||P instanceof String)for(let M=0,V=m.length;M<V;M++){const re=m[M];if(P.endsWith(re)){R=re,P=P.substring(0,P.length-re.length);break}}let C;return R==="px"&&t.defaultUnit!=="px"?C=b.in[t.defaultUnit]/t.defaultDPI:(C=b[R][t.defaultUnit],C<0&&(C=b[R].in*t.defaultDPI)),C*parseFloat(P)}function y(P){if(!(P.hasAttribute("transform")||P.nodeName==="use"&&(P.hasAttribute("x")||P.hasAttribute("y"))))return null;const R=I(P);return H.length>0&&R.premultiply(H[H.length-1]),z.copy(R),H.push(R),R}function I(P){const R=new He,C=q;if(P.nodeName==="use"&&(P.hasAttribute("x")||P.hasAttribute("y"))){const M=_(P.getAttribute("x")),V=_(P.getAttribute("y"));R.translate(M,V)}if(P.hasAttribute("transform")){const M=P.getAttribute("transform").split(")");for(let V=M.length-1;V>=0;V--){const re=M[V].trim();if(re==="")continue;const U=re.indexOf("("),ie=re.length;if(U>0&&U<ie){const j=re.slice(0,U),ve=p(re.slice(U+1));switch(C.identity(),j){case"translate":if(ve.length>=1){const Q=ve[0];let ce=0;ve.length>=2&&(ce=ve[1]),C.translate(Q,ce)}break;case"rotate":if(ve.length>=1){let Q=0,ce=0,fe=0;Q=ve[0]*Math.PI/180,ve.length>=3&&(ce=ve[1],fe=ve[2]),K.makeTranslation(-ce,-fe),$.makeRotation(Q),k.multiplyMatrices($,K),K.makeTranslation(ce,fe),C.multiplyMatrices(K,k)}break;case"scale":if(ve.length>=1){const Q=ve[0];let ce=Q;ve.length>=2&&(ce=ve[1]),C.scale(Q,ce)}break;case"skewX":ve.length===1&&C.set(1,Math.tan(ve[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ve.length===1&&C.set(1,0,0,Math.tan(ve[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ve.length===6&&C.set(ve[0],ve[2],ve[4],ve[1],ve[3],ve[5],0,0,1);break}}R.premultiply(C)}}return R}function L(P,R){function C(U){X.set(U.x,U.y,1).applyMatrix3(R),U.set(X.x,X.y)}function M(U){const ie=U.xRadius,j=U.yRadius,ve=Math.cos(U.aRotation),Q=Math.sin(U.aRotation),ce=new Y(ie*ve,ie*Q,0),fe=new Y(-j*Q,j*ve,0),me=ce.applyMatrix3(R),G=fe.applyMatrix3(R),x=q.set(me.x,G.x,0,me.y,G.y,0,0,0,1),E=K.copy(x).invert(),ne=$.copy(E).transpose().multiply(E).elements,oe=W(ne[0],ne[1],ne[4]),xe=Math.sqrt(oe.rt1),Me=Math.sqrt(oe.rt2);if(U.xRadius=1/xe,U.yRadius=1/Me,U.aRotation=Math.atan2(oe.sn,oe.cs),!((U.aEndAngle-U.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Ee=K.set(xe,0,0,0,Me,0,0,0,1),ge=$.set(oe.cs,oe.sn,0,-oe.sn,oe.cs,0,0,0,1),we=Ee.multiply(ge).multiply(x),Ie=Ce=>{const{x:ye,y:Re}=new Y(Math.cos(Ce),Math.sin(Ce),0).applyMatrix3(we);return Math.atan2(Re,ye)};U.aStartAngle=Ie(U.aStartAngle),U.aEndAngle=Ie(U.aEndAngle),w(R)&&(U.aClockwise=!U.aClockwise)}}function V(U){const ie=T(R),j=S(R);U.xRadius*=ie,U.yRadius*=j;const ve=ie>Number.EPSILON?Math.atan2(R.elements[1],R.elements[0]):Math.atan2(-R.elements[3],R.elements[4]);U.aRotation+=ve,w(R)&&(U.aStartAngle*=-1,U.aEndAngle*=-1,U.aClockwise=!U.aClockwise)}const re=P.subPaths;for(let U=0,ie=re.length;U<ie;U++){const ve=re[U].curves;for(let Q=0;Q<ve.length;Q++){const ce=ve[Q];ce.isLineCurve?(C(ce.v1),C(ce.v2)):ce.isCubicBezierCurve?(C(ce.v0),C(ce.v1),C(ce.v2),C(ce.v3)):ce.isQuadraticBezierCurve?(C(ce.v0),C(ce.v1),C(ce.v2)):ce.isEllipseCurve&&(Z.set(ce.aX,ce.aY),C(Z),ce.aX=Z.x,ce.aY=Z.y,F(R)?M(ce):V(ce))}}}function w(P){const R=P.elements;return R[0]*R[4]-R[1]*R[3]<0}function F(P){const R=P.elements,C=R[0]*R[3]+R[1]*R[4];if(C===0)return!1;const M=T(P),V=S(P);return Math.abs(C/(M*V))>Number.EPSILON}function T(P){const R=P.elements;return Math.sqrt(R[0]*R[0]+R[1]*R[1])}function S(P){const R=P.elements;return Math.sqrt(R[3]*R[3]+R[4]*R[4])}function W(P,R,C){let M,V,re,U,ie;const j=P+C,ve=P-C,Q=Math.sqrt(ve*ve+4*R*R);return j>0?(M=.5*(j+Q),ie=1/M,V=P*ie*C-R*ie*R):j<0?V=.5*(j-Q):(M=.5*Q,V=-.5*Q),ve>0?re=ve+Q:re=ve-Q,Math.abs(re)>2*Math.abs(R)?(ie=-2*R/re,U=1/Math.sqrt(1+ie*ie),re=ie*U):Math.abs(R)===0?(re=1,U=0):(ie=-.5*re/R,re=1/Math.sqrt(1+ie*ie),U=ie*re),ve>0&&(ie=re,re=-U,U=ie),{rt1:M,rt2:V,cs:re,sn:U}}const D=[],N={},H=[],q=new He,K=new He,$=new He,k=new He,Z=new Se,X=new Y,z=new He,te=new DOMParser().parseFromString(e,"image/svg+xml");return n(te.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:D,xml:te.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function r(v,p,m,b){const _=v.x,y=p.x,I=m.x,L=b.x,w=v.y,F=p.y,T=m.y,S=b.y,W=(L-I)*(w-T)-(S-T)*(_-I),D=(y-_)*(w-T)-(F-w)*(_-I),N=(S-T)*(y-_)-(L-I)*(F-w),H=W/N,q=D/N;if(N===0&&W!==0||H<=0||H>=1||q<0||q>1)return null;if(W===0&&N===0){for(let K=0;K<2;K++)if(o(K===0?m:b,v,p),i.loc==n.ORIGIN){const $=K===0?m:b;return{x:$.x,y:$.y,t:i.t}}else if(i.loc==n.BETWEEN){const $=+(_+i.t*(y-_)).toPrecision(10),k=+(w+i.t*(F-w)).toPrecision(10);return{x:$,y:k,t:i.t}}return null}else{for(let k=0;k<2;k++)if(o(k===0?m:b,v,p),i.loc==n.ORIGIN){const Z=k===0?m:b;return{x:Z.x,y:Z.y,t:i.t}}const K=+(_+H*(y-_)).toPrecision(10),$=+(w+H*(F-w)).toPrecision(10);return{x:K,y:$,t:H}}}function o(v,p,m){const b=m.x-p.x,_=m.y-p.y,y=v.x-p.x,I=v.y-p.y,L=b*I-y*_;if(v.x===p.x&&v.y===p.y){i.loc=n.ORIGIN,i.t=0;return}if(v.x===m.x&&v.y===m.y){i.loc=n.DESTINATION,i.t=1;return}if(L<-Number.EPSILON){i.loc=n.LEFT;return}if(L>Number.EPSILON){i.loc=n.RIGHT;return}if(b*y<0||_*I<0){i.loc=n.BEHIND;return}if(Math.sqrt(b*b+_*_)<Math.sqrt(y*y+I*I)){i.loc=n.BEYOND;return}let w;b!==0?w=y/b:w=I/_,i.loc=n.BETWEEN,i.t=w}function a(v,p){const m=[],b=[];for(let _=1;_<v.length;_++){const y=v[_-1],I=v[_];for(let L=1;L<p.length;L++){const w=p[L-1],F=p[L],T=r(y,I,w,F);T!==null&&m.find(S=>S.t<=T.t+Number.EPSILON&&S.t>=T.t-Number.EPSILON)===void 0&&(m.push(T),b.push(new Se(T.x,T.y)))}}return b}function l(v,p,m){const b=new Se;p.getCenter(b);const _=[];return m.forEach(y=>{y.boundingBox.containsPoint(b)&&a(v,y.points).forEach(L=>{_.push({identifier:y.identifier,isCW:y.isCW,point:L})})}),_.sort((y,I)=>y.point.x-I.point.x),_}function c(v,p,m,b,_){(_==null||_==="")&&(_="nonzero");const y=new Se;v.boundingBox.getCenter(y);const I=[new Se(m,y.y),new Se(b,y.y)],L=l(I,v.boundingBox,p);L.sort((D,N)=>D.point.x-N.point.x);const w=[],F=[];L.forEach(D=>{D.identifier===v.identifier?w.push(D):F.push(D)});const T=w[0].point.x,S=[];let W=0;for(;W<F.length&&F[W].point.x<T;)S.length>0&&S[S.length-1]===F[W].identifier?S.pop():S.push(F[W].identifier),W++;if(S.push(v.identifier),_==="evenodd"){const D=S.length%2===0,N=S[S.length-2];return{identifier:v.identifier,isHole:D,for:N}}else if(_==="nonzero"){let D=!0,N=null,H=null;for(let q=0;q<S.length;q++){const K=S[q];D?(H=p[K].isCW,D=!1,N=K):H!==p[K].isCW&&(H=p[K].isCW,D=!0)}return{identifier:v.identifier,isHole:D,for:N}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let u=999999999,h=-999999999,f=e.subPaths.map(v=>{const p=v.getPoints();let m=-999999999,b=999999999,_=-999999999,y=999999999;for(let I=0;I<p.length;I++){const L=p[I];L.y>m&&(m=L.y),L.y<b&&(b=L.y),L.x>_&&(_=L.x),L.x<y&&(y=L.x)}return h<=_&&(h=_+1),u>=y&&(u=y-1),{curves:v.curves,points:p,isCW:ui.isClockWise(p),identifier:-1,boundingBox:new v_(new Se(y,b),new Se(_,m))}});f=f.filter(v=>v.points.length>1);for(let v=0;v<f.length;v++)f[v].identifier=v;const d=f.map(v=>c(v,f,u,h,e.userData?e.userData.style.fillRule:void 0)),g=[];return f.forEach(v=>{if(!d[v.identifier].isHole){const m=new Lr;m.curves=v.curves,d.filter(_=>_.isHole&&_.for===v.identifier).forEach(_=>{const y=f[_.identifier],I=new qi;I.curves=y.curves,m.holes.push(I)}),g.push(m)}}),g}static getStrokeStyle(e,t,n,i,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:r}}static pointsToStroke(e,t,n,i){const r=[],o=[],a=[];if(no.pointsToStrokeWithBuffers(e,t,n,i,r,o,a)===0)return null;const l=new Vt;return l.setAttribute("position",new Et(r,3)),l.setAttribute("normal",new Et(o,3)),l.setAttribute("uv",new Et(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,i,r,o,a,l){const c=new Se,u=new Se,h=new Se,f=new Se,d=new Se,g=new Se,v=new Se,p=new Se,m=new Se,b=new Se,_=new Se,y=new Se,I=new Se,L=new Se,w=new Se,F=new Se,T=new Se;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,e=ve(e);const S=e.length;if(S<2)return 0;const W=e[0].equals(e[S-1]);let D,N=e[0],H;const q=t.strokeWidth/2,K=1/(S-1);let $=0,k,Z,X,z,te=!1,le=0,P=l*3,R=l*2;C(e[0],e[1],c).multiplyScalar(q),p.copy(e[0]).sub(c),m.copy(e[0]).add(c),b.copy(p),_.copy(m);for(let Q=1;Q<S;Q++){D=e[Q],Q===S-1?W?H=e[1]:H=void 0:H=e[Q+1];const ce=c;if(C(N,D,ce),h.copy(ce).multiplyScalar(q),y.copy(D).sub(h),I.copy(D).add(h),k=$+K,Z=!1,H!==void 0){C(D,H,u),h.copy(u).multiplyScalar(q),L.copy(D).sub(h),w.copy(D).add(h),X=!0,h.subVectors(H,N),ce.dot(h)<0&&(X=!1),Q===1&&(te=X),h.subVectors(H,D),h.normalize();const fe=Math.abs(ce.dot(h));if(fe>Number.EPSILON){const me=q/fe;h.multiplyScalar(-me),f.subVectors(D,N),d.copy(f).setLength(me).add(h),F.copy(d).negate();const G=d.length(),x=f.length();f.divideScalar(x),g.subVectors(H,D);const E=g.length();switch(g.divideScalar(E),f.dot(F)<x&&g.dot(F)<E&&(Z=!0),T.copy(d).add(D),F.add(D),z=!1,Z?X?(w.copy(F),I.copy(F)):(L.copy(F),y.copy(F)):re(),t.strokeLineJoin){case"bevel":U(X,Z,k);break;case"round":ie(X,Z),X?V(D,y,L,k,0):V(D,w,I,k,1);break;case"miter":case"miter-clip":default:const B=q*t.strokeMiterLimit/G;if(B<1)if(t.strokeLineJoin!=="miter-clip"){U(X,Z,k);break}else ie(X,Z),X?(g.subVectors(T,y).multiplyScalar(B).add(y),v.subVectors(T,L).multiplyScalar(B).add(L),M(y,k,0),M(g,k,0),M(D,k,.5),M(D,k,.5),M(g,k,0),M(v,k,0),M(D,k,.5),M(v,k,0),M(L,k,0)):(g.subVectors(T,I).multiplyScalar(B).add(I),v.subVectors(T,w).multiplyScalar(B).add(w),M(I,k,1),M(g,k,1),M(D,k,.5),M(D,k,.5),M(g,k,1),M(v,k,1),M(D,k,.5),M(v,k,1),M(w,k,1));else Z?(X?(M(m,$,1),M(p,$,0),M(T,k,0),M(m,$,1),M(T,k,0),M(F,k,1)):(M(m,$,1),M(p,$,0),M(T,k,1),M(p,$,0),M(F,k,0),M(T,k,1)),X?L.copy(T):w.copy(T)):X?(M(y,k,0),M(T,k,0),M(D,k,.5),M(D,k,.5),M(T,k,0),M(L,k,0)):(M(I,k,1),M(T,k,1),M(D,k,.5),M(D,k,.5),M(T,k,1),M(w,k,1)),z=!0;break}}else re()}else re();!W&&Q===S-1&&j(e[0],b,_,X,!0,$),$=k,N=D,p.copy(L),m.copy(w)}if(!W)j(D,y,I,X,!1,k);else if(Z&&r){let Q=T,ce=F;te!==X&&(Q=F,ce=T),X?(z||te)&&(ce.toArray(r,0*3),ce.toArray(r,3*3),z&&Q.toArray(r,1*3)):(z||!te)&&(ce.toArray(r,1*3),ce.toArray(r,3*3),z&&Q.toArray(r,0*3))}return le;function C(Q,ce,fe){return fe.subVectors(ce,Q),fe.set(-fe.y,fe.x).normalize()}function M(Q,ce,fe){r&&(r[P]=Q.x,r[P+1]=Q.y,r[P+2]=0,o&&(o[P]=0,o[P+1]=0,o[P+2]=1),P+=3,a&&(a[R]=ce,a[R+1]=fe,R+=2)),le+=3}function V(Q,ce,fe,me,G){c.copy(ce).sub(Q).normalize(),u.copy(fe).sub(Q).normalize();let x=Math.PI;const E=c.dot(u);Math.abs(E)<1&&(x=Math.abs(Math.acos(E))),x/=n,h.copy(ce);for(let B=0,se=n-1;B<se;B++)f.copy(h).rotateAround(Q,x),M(h,me,G),M(f,me,G),M(Q,me,.5),h.copy(f);M(f,me,G),M(fe,me,G),M(Q,me,.5)}function re(){M(m,$,1),M(p,$,0),M(y,k,0),M(m,$,1),M(y,k,0),M(I,k,1)}function U(Q,ce,fe){ce?Q?(M(m,$,1),M(p,$,0),M(y,k,0),M(m,$,1),M(y,k,0),M(F,k,1),M(y,fe,0),M(L,fe,0),M(F,fe,.5)):(M(m,$,1),M(p,$,0),M(I,k,1),M(p,$,0),M(F,k,0),M(I,k,1),M(I,fe,1),M(F,fe,0),M(w,fe,1)):Q?(M(y,fe,0),M(L,fe,0),M(D,fe,.5)):(M(I,fe,1),M(w,fe,0),M(D,fe,.5))}function ie(Q,ce){ce&&(Q?(M(m,$,1),M(p,$,0),M(y,k,0),M(m,$,1),M(y,k,0),M(F,k,1),M(y,$,0),M(D,k,.5),M(F,k,1),M(D,k,.5),M(L,$,0),M(F,k,1)):(M(m,$,1),M(p,$,0),M(I,k,1),M(p,$,0),M(F,k,0),M(I,k,1),M(I,$,1),M(F,k,0),M(D,k,.5),M(D,k,.5),M(F,k,0),M(w,$,1)))}function j(Q,ce,fe,me,G,x){switch(t.strokeLineCap){case"round":G?V(Q,fe,ce,x,.5):V(Q,ce,fe,x,.5);break;case"square":if(G)c.subVectors(ce,Q),u.set(c.y,-c.x),h.addVectors(c,u).add(Q),f.subVectors(u,c).add(Q),me?(h.toArray(r,1*3),f.toArray(r,0*3),f.toArray(r,3*3)):(h.toArray(r,1*3),a[3*2+1]===1?f.toArray(r,3*3):h.toArray(r,3*3),f.toArray(r,0*3));else{c.subVectors(fe,Q),u.set(c.y,-c.x),h.addVectors(c,u).add(Q),f.subVectors(u,c).add(Q);const E=r.length;me?(h.toArray(r,E-1*3),f.toArray(r,E-2*3),f.toArray(r,E-4*3)):(f.toArray(r,E-2*3),h.toArray(r,E-1*3),f.toArray(r,E-4*3))}break}}function ve(Q){let ce=!1;for(let me=1,G=Q.length-1;me<G;me++)if(Q[me].distanceTo(Q[me+1])<i){ce=!0;break}if(!ce)return Q;const fe=[];fe.push(Q[0]);for(let me=1,G=Q.length-1;me<G;me++)Q[me].distanceTo(Q[me+1])>=i&&fe.push(Q[me]);return fe.push(Q[Q.length-1]),fe}}}function M_(){var s=Object.create(null);function e(i,r){var o=i.id,a=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!s[o])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=n("<"+a+">.init",c),u&&(u=n("<"+a+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[o]={id:o,value:h,getTransferables:u},r(h)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(i,r){var o,a=i.id,l=i.args;(!s[a]||typeof s[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=s[a]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var f=s[a].getTransferables&&s[a].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(h,f)}catch(d){console.error(d),r(d)}}}function n(i,r){var o=void 0;self.troikaDefine=function(l){return o=l};var a=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(i){var r=i.data,o=r.messageId,a=r.action,l=r.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function E_(s){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,n=s.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var i=Promise.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var _h=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return _h=function(){return s},s},b_=0,T_=0,ia=!1,Ur=Object.create(null),Dr=Object.create(null),Ta=Object.create(null);function or(s){if((!s||typeof s.init!="function")&&!ia)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,n=s.getTransferables,i=s.workerId;if(!_h())return E_(s);i==null&&(i="#default");var r="workerModule"+ ++b_,o=s.name||r,a=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(ia=!0,c=or({workerId:i,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+Fs(c)+`
)}`}),ia=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!a){a=tu(i,"registerModule",l.workerModuleData);var h=function(){a=null,Dr[i].delete(h)};(Dr[i]||(Dr[i]=new Set)).add(h)}return a.then(function(f){var d=f.isCallable;if(d)return tu(i,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:o,dependencies:e,init:Fs(t),getTransferables:n&&Fs(n)},l}function w_(s){Dr[s]&&Dr[s].forEach(function(e){e()}),Ur[s]&&(Ur[s].terminate(),delete Ur[s])}function Fs(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function A_(s){var e=Ur[s];if(!e){var t=Fs(M_);e=Ur[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,o=Ta[r];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete Ta[r],o(i)}}return e}function tu(s,e,t){return new Promise(function(n,i){var r=++T_;Ta[r]=function(o){o.success?n(o.result):i(new Error("Error in worker "+e+" call: "+o.error))},A_(s).postMessage({messageId:r,action:e,data:t})})}function xh(){var s=function(e){function t(Z,X,z,te,le,P,R,C){var M=1-R;C.x=M*M*Z+2*M*R*z+R*R*le,C.y=M*M*X+2*M*R*te+R*R*P}function n(Z,X,z,te,le,P,R,C,M,V){var re=1-M;V.x=re*re*re*Z+3*re*re*M*z+3*re*M*M*le+M*M*M*R,V.y=re*re*re*X+3*re*re*M*te+3*re*M*M*P+M*M*M*C}function i(Z,X){for(var z=/([MLQCZ])([^MLQCZ]*)/g,te,le,P,R,C;te=z.exec(Z);){var M=te[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(V){return parseFloat(V)});switch(te[1]){case"M":R=le=M[0],C=P=M[1];break;case"L":(M[0]!==R||M[1]!==C)&&X("L",R,C,R=M[0],C=M[1]);break;case"Q":{X("Q",R,C,R=M[2],C=M[3],M[0],M[1]);break}case"C":{X("C",R,C,R=M[4],C=M[5],M[0],M[1],M[2],M[3]);break}case"Z":(R!==le||C!==P)&&X("L",R,C,le,P);break}}}function r(Z,X,z){z===void 0&&(z=16);var te={x:0,y:0};i(Z,function(le,P,R,C,M,V,re,U,ie){switch(le){case"L":X(P,R,C,M);break;case"Q":{for(var j=P,ve=R,Q=1;Q<z;Q++)t(P,R,V,re,C,M,Q/(z-1),te),X(j,ve,te.x,te.y),j=te.x,ve=te.y;break}case"C":{for(var ce=P,fe=R,me=1;me<z;me++)n(P,R,V,re,U,ie,C,M,me/(z-1),te),X(ce,fe,te.x,te.y),ce=te.x,fe=te.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(Z,X){var z=Z.getContext?Z.getContext("webgl",c):Z,te=l.get(z);if(!te){let ce=function(B){var se=P[B];if(!se&&(se=P[B]=z.getExtension(B),!se))throw new Error(B+" not supported");return se},fe=function(B,se){var ne=z.createShader(se);return z.shaderSource(ne,B),z.compileShader(ne),ne},me=function(B,se,ne,oe){if(!R[B]){var xe={},Me={},pe=z.createProgram();z.attachShader(pe,fe(se,z.VERTEX_SHADER)),z.attachShader(pe,fe(ne,z.FRAGMENT_SHADER)),z.linkProgram(pe),R[B]={program:pe,transaction:function(ge){z.useProgram(pe),ge({setUniform:function(Ie,Ce){for(var ye=[],Re=arguments.length-2;Re-- >0;)ye[Re]=arguments[Re+2];var be=Me[Ce]||(Me[Ce]=z.getUniformLocation(pe,Ce));z["uniform"+Ie].apply(z,[be].concat(ye))},setAttribute:function(Ie,Ce,ye,Re,be){var Oe=xe[Ie];Oe||(Oe=xe[Ie]={buf:z.createBuffer(),loc:z.getAttribLocation(pe,Ie),data:null}),z.bindBuffer(z.ARRAY_BUFFER,Oe.buf),z.vertexAttribPointer(Oe.loc,Ce,z.FLOAT,!1,0,0),z.enableVertexAttribArray(Oe.loc),le?z.vertexAttribDivisor(Oe.loc,Re):ce("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Oe.loc,Re),be!==Oe.data&&(z.bufferData(z.ARRAY_BUFFER,be,ye),Oe.data=be)}})}}}R[B].transaction(oe)},G=function(B,se){M++;try{z.activeTexture(z.TEXTURE0+M);var ne=C[B];ne||(ne=C[B]=z.createTexture(),z.bindTexture(z.TEXTURE_2D,ne),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MIN_FILTER,z.NEAREST),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MAG_FILTER,z.NEAREST)),z.bindTexture(z.TEXTURE_2D,ne),se(ne,M)}finally{M--}},x=function(B,se,ne){var oe=z.createFramebuffer();V.push(oe),z.bindFramebuffer(z.FRAMEBUFFER,oe),z.activeTexture(z.TEXTURE0+se),z.bindTexture(z.TEXTURE_2D,B),z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,B,0);try{ne(oe)}finally{z.deleteFramebuffer(oe),z.bindFramebuffer(z.FRAMEBUFFER,V[--V.length-1]||null)}},E=function(){P={},R={},C={},M=-1,V.length=0};var re=ce,U=fe,ie=me,j=G,ve=x,Q=E,le=typeof WebGL2RenderingContext<"u"&&z instanceof WebGL2RenderingContext,P={},R={},C={},M=-1,V=[];z.canvas.addEventListener("webglcontextlost",function(B){E(),B.preventDefault()},!1),l.set(z,te={gl:z,isWebGL2:le,getExtension:ce,withProgram:me,withTexture:G,withTextureFramebuffer:x,handleContextLoss:E})}X(te)}function h(Z,X,z,te,le,P,R,C){R===void 0&&(R=15),C===void 0&&(C=null),u(Z,function(M){var V=M.gl,re=M.withProgram,U=M.withTexture;U("copy",function(ie,j){V.texImage2D(V.TEXTURE_2D,0,V.RGBA,le,P,0,V.RGBA,V.UNSIGNED_BYTE,X),re("copy",o,a,function(ve){var Q=ve.setUniform,ce=ve.setAttribute;ce("aUV",2,V.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Q("1i","image",j),V.bindFramebuffer(V.FRAMEBUFFER,C||null),V.disable(V.BLEND),V.colorMask(R&8,R&4,R&2,R&1),V.viewport(z,te,le,P),V.scissor(z,te,le,P),V.drawArrays(V.TRIANGLES,0,3)})})})}function f(Z,X,z){var te=Z.width,le=Z.height;u(Z,function(P){var R=P.gl,C=new Uint8Array(te*le*4);R.readPixels(0,0,te,le,R.RGBA,R.UNSIGNED_BYTE,C),Z.width=X,Z.height=z,h(R,C,0,0,te,le)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(Z,X,z,te,le,P){P===void 0&&(P=1);var R=new Uint8Array(Z*X),C=te[2]-te[0],M=te[3]-te[1],V=[];r(z,function(ce,fe,me,G){V.push({x1:ce,y1:fe,x2:me,y2:G,minX:Math.min(ce,me),minY:Math.min(fe,G),maxX:Math.max(ce,me),maxY:Math.max(fe,G)})}),V.sort(function(ce,fe){return ce.maxX-fe.maxX});for(var re=0;re<Z;re++)for(var U=0;U<X;U++){var ie=ve(te[0]+C*(re+.5)/Z,te[1]+M*(U+.5)/X),j=Math.pow(1-Math.abs(ie)/le,P)/2;ie<0&&(j=1-j),j=Math.max(0,Math.min(255,Math.round(j*255))),R[U*Z+re]=j}return R;function ve(ce,fe){for(var me=1/0,G=1/0,x=V.length;x--;){var E=V[x];if(E.maxX+G<=ce)break;if(ce+G>E.minX&&fe-G<E.maxY&&fe+G>E.minY){var B=m(ce,fe,E.x1,E.y1,E.x2,E.y2);B<me&&(me=B,G=Math.sqrt(me))}}return Q(ce,fe)&&(G=-G),G}function Q(ce,fe){for(var me=0,G=V.length;G--;){var x=V[G];if(x.maxX<=ce)break;var E=x.y1>fe!=x.y2>fe&&ce<(x.x2-x.x1)*(fe-x.y1)/(x.y2-x.y1)+x.x1;E&&(me+=x.y1<x.y2?1:-1)}return me!==0}}function v(Z,X,z,te,le,P,R,C,M,V){P===void 0&&(P=1),C===void 0&&(C=0),M===void 0&&(M=0),V===void 0&&(V=0),p(Z,X,z,te,le,P,R,null,C,M,V)}function p(Z,X,z,te,le,P,R,C,M,V,re){P===void 0&&(P=1),M===void 0&&(M=0),V===void 0&&(V=0),re===void 0&&(re=0);for(var U=g(Z,X,z,te,le,P),ie=new Uint8Array(U.length*4),j=0;j<U.length;j++)ie[j*4+re]=U[j];h(R,ie,M,V,Z,X,1<<3-re,C)}function m(Z,X,z,te,le,P){var R=le-z,C=P-te,M=R*R+C*C,V=M?Math.max(0,Math.min(1,((Z-z)*R+(X-te)*C)/M)):0,re=Z-(z+V*R),U=X-(te+V*C);return re*re+U*U}var b=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:p}),_="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",y="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",I="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",L=new Float32Array([0,0,2,0,0,2]),w=null,F=!1,T={},S=new WeakMap;function W(Z){if(!F&&!q(Z))throw new Error("WebGL generation not supported")}function D(Z,X,z,te,le,P,R){if(P===void 0&&(P=1),R===void 0&&(R=null),!R&&(R=w,!R)){var C=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!C)throw new Error("OffscreenCanvas or DOM canvas not supported");R=w=C.getContext("webgl",{depth:!1})}W(R);var M=new Uint8Array(Z*X*4);u(R,function(ie){var j=ie.gl,ve=ie.withTexture,Q=ie.withTextureFramebuffer;ve("readable",function(ce,fe){j.texImage2D(j.TEXTURE_2D,0,j.RGBA,Z,X,0,j.RGBA,j.UNSIGNED_BYTE,null),Q(ce,fe,function(me){H(Z,X,z,te,le,P,j,me,0,0,0),j.readPixels(0,0,Z,X,j.RGBA,j.UNSIGNED_BYTE,M)})})});for(var V=new Uint8Array(Z*X),re=0,U=0;re<M.length;re+=4)V[U++]=M[re];return V}function N(Z,X,z,te,le,P,R,C,M,V){P===void 0&&(P=1),C===void 0&&(C=0),M===void 0&&(M=0),V===void 0&&(V=0),H(Z,X,z,te,le,P,R,null,C,M,V)}function H(Z,X,z,te,le,P,R,C,M,V,re){P===void 0&&(P=1),M===void 0&&(M=0),V===void 0&&(V=0),re===void 0&&(re=0),W(R);var U=[];r(z,function(ie,j,ve,Q){U.push(ie,j,ve,Q)}),U=new Float32Array(U),u(R,function(ie){var j=ie.gl,ve=ie.isWebGL2,Q=ie.getExtension,ce=ie.withProgram,fe=ie.withTexture,me=ie.withTextureFramebuffer,G=ie.handleContextLoss;if(fe("rawDistances",function(x,E){(Z!==x._lastWidth||X!==x._lastHeight)&&j.texImage2D(j.TEXTURE_2D,0,j.RGBA,x._lastWidth=Z,x._lastHeight=X,0,j.RGBA,j.UNSIGNED_BYTE,null),ce("main",_,y,function(B){var se=B.setAttribute,ne=B.setUniform,oe=!ve&&Q("ANGLE_instanced_arrays"),xe=!ve&&Q("EXT_blend_minmax");se("aUV",2,j.STATIC_DRAW,0,L),se("aLineSegment",4,j.DYNAMIC_DRAW,1,U),ne.apply(void 0,["4f","uGlyphBounds"].concat(te)),ne("1f","uMaxDistance",le),ne("1f","uExponent",P),me(x,E,function(Me){j.enable(j.BLEND),j.colorMask(!0,!0,!0,!0),j.viewport(0,0,Z,X),j.scissor(0,0,Z,X),j.blendFunc(j.ONE,j.ONE),j.blendEquationSeparate(j.FUNC_ADD,ve?j.MAX:xe.MAX_EXT),j.clear(j.COLOR_BUFFER_BIT),ve?j.drawArraysInstanced(j.TRIANGLES,0,3,U.length/4):oe.drawArraysInstancedANGLE(j.TRIANGLES,0,3,U.length/4)})}),ce("post",o,I,function(B){B.setAttribute("aUV",2,j.STATIC_DRAW,0,L),B.setUniform("1i","tex",E),j.bindFramebuffer(j.FRAMEBUFFER,C),j.disable(j.BLEND),j.colorMask(re===0,re===1,re===2,re===3),j.viewport(M,V,Z,X),j.scissor(M,V,Z,X),j.drawArrays(j.TRIANGLES,0,3)})}),j.isContextLost())throw G(),new Error("webgl context lost")})}function q(Z){var X=!Z||Z===w?T:Z.canvas||Z,z=S.get(X);if(z===void 0){F=!0;var te=null;try{var le=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],P=D(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,Z);z=P&&le.length===P.length&&P.every(function(R,C){return R===le[C]}),z||(te="bad trial run results",console.info(le,P))}catch(R){z=!1,te=R.message}te&&console.warn("WebGL SDF generation not supported:",te),F=!1,S.set(X,z)}return z}var K=Object.freeze({__proto__:null,generate:D,generateIntoCanvas:N,generateIntoFramebuffer:H,isSupported:q});function $(Z,X,z,te,le,P){le===void 0&&(le=Math.max(te[2]-te[0],te[3]-te[1])/2),P===void 0&&(P=1);try{return D.apply(K,arguments)}catch(R){return console.info("WebGL SDF generation failed, falling back to JS",R),g.apply(b,arguments)}}function k(Z,X,z,te,le,P,R,C,M,V){le===void 0&&(le=Math.max(te[2]-te[0],te[3]-te[1])/2),P===void 0&&(P=1),C===void 0&&(C=0),M===void 0&&(M=0),V===void 0&&(V=0);try{return N.apply(K,arguments)}catch(re){return console.info("WebGL SDF generation failed, falling back to JS",re),v.apply(b,arguments)}}return e.forEachPathCommand=i,e.generate=$,e.generateIntoCanvas=k,e.javascript=b,e.pathToLineSegments=r,e.webgl=K,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function R_(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(G,x){n[G]=1<<x+1,i[n[G]]=G}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,o=n.L|n.R|n.AL,a=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,u=null;function h(){if(!u){u=new Map;var G=function(E){if(t.hasOwnProperty(E)){var B=0;t[E].split(",").forEach(function(se){var ne=se.split("+"),oe=ne[0],xe=ne[1];oe=parseInt(oe,36),xe=xe?parseInt(xe,36):0,u.set(B+=oe,n[E]);for(var Me=0;Me<xe;Me++)u.set(++B,n[E])})}};for(var x in t)G(x)}}function f(G){return h(),u.get(G.codePointAt(0))||n.L}function d(G){return i[f(G)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(G,x){var E=36,B=0,se=new Map,ne=x&&new Map,oe;return G.split(",").forEach(function xe(Me){if(Me.indexOf("+")!==-1)for(var pe=+Me;pe--;)xe(oe);else{oe=Me;var Ee=Me.split(">"),ge=Ee[0],we=Ee[1];ge=String.fromCodePoint(B+=parseInt(ge,E)),we=String.fromCodePoint(B+=parseInt(we,E)),se.set(ge,we),x&&ne.set(we,ge)}}),{map:se,reverseMap:ne}}var p,m,b;function _(){if(!p){var G=v(g.pairs,!0),x=G.map,E=G.reverseMap;p=x,m=E,b=v(g.canonical,!1).map}}function y(G){return _(),p.get(G)||null}function I(G){return _(),m.get(G)||null}function L(G){return _(),b.get(G)||null}var w=n.L,F=n.R,T=n.EN,S=n.ES,W=n.ET,D=n.AN,N=n.CS,H=n.B,q=n.S,K=n.ON,$=n.BN,k=n.NSM,Z=n.AL,X=n.LRO,z=n.RLO,te=n.LRE,le=n.RLE,P=n.PDF,R=n.LRI,C=n.RLI,M=n.FSI,V=n.PDI;function re(G,x){for(var E=125,B=new Uint32Array(G.length),se=0;se<G.length;se++)B[se]=f(G[se]);var ne=new Map;function oe(Dt,Jt){var It=B[Dt];B[Dt]=Jt,ne.set(It,ne.get(It)-1),It&a&&ne.set(a,ne.get(a)-1),ne.set(Jt,(ne.get(Jt)||0)+1),Jt&a&&ne.set(a,(ne.get(a)||0)+1)}for(var xe=new Uint8Array(G.length),Me=new Map,pe=[],Ee=null,ge=0;ge<G.length;ge++)Ee||pe.push(Ee={start:ge,end:G.length-1,level:x==="rtl"?1:x==="ltr"?0:pl(ge,!1)}),B[ge]&H&&(Ee.end=ge,Ee=null);for(var we=le|te|z|X|r|V|P|H,Ie=function(Dt){return Dt+(Dt&1?1:2)},Ce=function(Dt){return Dt+(Dt&1?2:1)},ye=0;ye<pe.length;ye++){Ee=pe[ye];var Re=[{_level:Ee.level,_override:0,_isolate:0}],be=void 0,Oe=0,Fe=0,A=0;ne.clear();for(var ee=Ee.start;ee<=Ee.end;ee++){var J=B[ee];if(be=Re[Re.length-1],ne.set(J,(ne.get(J)||0)+1),J&a&&ne.set(a,(ne.get(a)||0)+1),J&we)if(J&(le|te)){xe[ee]=be._level;var _e=(J===le?Ce:Ie)(be._level);_e<=E&&!Oe&&!Fe?Re.push({_level:_e,_override:0,_isolate:0}):Oe||Fe++}else if(J&(z|X)){xe[ee]=be._level;var Ae=(J===z?Ce:Ie)(be._level);Ae<=E&&!Oe&&!Fe?Re.push({_level:Ae,_override:J&z?F:w,_isolate:0}):Oe||Fe++}else if(J&r){J&M&&(J=pl(ee+1,!0)===1?C:R),xe[ee]=be._level,be._override&&oe(ee,be._override);var Ne=(J===C?Ce:Ie)(be._level);Ne<=E&&Oe===0&&Fe===0?(A++,Re.push({_level:Ne,_override:0,_isolate:1,_isolInitIndex:ee})):Oe++}else if(J&V){if(Oe>0)Oe--;else if(A>0){for(Fe=0;!Re[Re.length-1]._isolate;)Re.pop();var Pe=Re[Re.length-1]._isolInitIndex;Pe!=null&&(Me.set(Pe,ee),Me.set(ee,Pe)),Re.pop(),A--}be=Re[Re.length-1],xe[ee]=be._level,be._override&&oe(ee,be._override)}else J&P?(Oe===0&&(Fe>0?Fe--:!be._isolate&&Re.length>1&&(Re.pop(),be=Re[Re.length-1])),xe[ee]=be._level):J&H&&(xe[ee]=Ee.level);else xe[ee]=be._level,be._override&&J!==$&&oe(ee,be._override)}for(var Xe=[],Ye=null,Ue=Ee.start;Ue<=Ee.end;Ue++){var We=B[Ue];if(!(We&l)){var qe=xe[Ue],nt=We&r,$e=We===V;Ye&&qe===Ye._level?(Ye._end=Ue,Ye._endsWithIsolInit=nt):Xe.push(Ye={_start:Ue,_end:Ue,_level:qe,_startsWithPDI:$e,_endsWithIsolInit:nt})}}for(var ct=[],gt=0;gt<Xe.length;gt++){var Ct=Xe[gt];if(!Ct._startsWithPDI||Ct._startsWithPDI&&!Me.has(Ct._start)){for(var Nt=[Ye=Ct],on=void 0;Ye&&Ye._endsWithIsolInit&&(on=Me.get(Ye._end))!=null;)for(var Wt=gt+1;Wt<Xe.length;Wt++)if(Xe[Wt]._start===on){Nt.push(Ye=Xe[Wt]);break}for(var yt=[],dn=0;dn<Nt.length;dn++)for(var qr=Nt[dn],O=qr._start;O<=qr._end;O++)yt.push(O);for(var ae=xe[yt[0]],de=Ee.level,ue=yt[0]-1;ue>=0;ue--)if(!(B[ue]&l)){de=xe[ue];break}var he=yt[yt.length-1],De=xe[he],Be=Ee.level;if(!(B[he]&r)){for(var ke=he+1;ke<=Ee.end;ke++)if(!(B[ke]&l)){Be=xe[ke];break}}ct.push({_seqIndices:yt,_sosType:Math.max(de,ae)%2?F:w,_eosType:Math.max(Be,De)%2?F:w})}}for(var ze=0;ze<ct.length;ze++){var Ve=ct[ze],Te=Ve._seqIndices,je=Ve._sosType,at=Ve._eosType,st=xe[Te[0]]&1?F:w;if(ne.get(k))for(var vt=0;vt<Te.length;vt++){var Xt=Te[vt];if(B[Xt]&k){for(var Je=je,Ge=vt-1;Ge>=0;Ge--)if(!(B[Te[Ge]]&l)){Je=B[Te[Ge]];break}oe(Xt,Je&(r|V)?K:Je)}}if(ne.get(T))for(var an=0;an<Te.length;an++){var tt=Te[an];if(B[tt]&T)for(var jt=an-1;jt>=-1;jt--){var lr=jt===-1?je:B[Te[jt]];if(lr&o){lr===Z&&oe(tt,D);break}}}if(ne.get(Z))for(var pn=0;pn<Te.length;pn++){var _i=Te[pn];B[_i]&Z&&oe(_i,F)}if(ne.get(S)||ne.get(N))for(var lt=1;lt<Te.length-1;lt++){var Yt=Te[lt];if(B[Yt]&(S|N)){for(var ln=0,bt=0,Zn=lt-1;Zn>=0&&(ln=B[Te[Zn]],!!(ln&l));Zn--);for(var cr=lt+1;cr<Te.length&&(bt=B[Te[cr]],!!(bt&l));cr++);ln===bt&&(B[Yt]===S?ln===T:ln&(T|D))&&oe(Yt,ln)}}if(ne.get(T))for(var Ft=0;Ft<Te.length;Ft++){var Kh=Te[Ft];if(B[Kh]&T){for(var Kr=Ft-1;Kr>=0&&B[Te[Kr]]&(W|l);Kr--)oe(Te[Kr],T);for(Ft++;Ft<Te.length&&B[Te[Ft]]&(W|l|T);Ft++)B[Te[Ft]]!==T&&oe(Te[Ft],T)}}if(ne.get(W)||ne.get(S)||ne.get(N))for(var ur=0;ur<Te.length;ur++){var tl=Te[ur];if(B[tl]&(W|S|N)){oe(tl,K);for(var Zr=ur-1;Zr>=0&&B[Te[Zr]]&l;Zr--)oe(Te[Zr],K);for(var Jr=ur+1;Jr<Te.length&&B[Te[Jr]]&l;Jr++)oe(Te[Jr],K)}}if(ne.get(T))for(var lo=0,nl=je;lo<Te.length;lo++){var il=Te[lo],co=B[il];co&T?nl===w&&oe(il,w):co&o&&(nl=co)}if(ne.get(a)){var hr=F|T|D,rl=hr|w,Qr=[];{for(var xi=[],yi=0;yi<Te.length;yi++)if(B[Te[yi]]&a){var fr=G[Te[yi]],sl=void 0;if(y(fr)!==null)if(xi.length<63)xi.push({char:fr,seqIndex:yi});else break;else if((sl=I(fr))!==null)for(var dr=xi.length-1;dr>=0;dr--){var uo=xi[dr].char;if(uo===sl||uo===I(L(fr))||y(L(uo))===fr){Qr.push([xi[dr].seqIndex,yi]),xi.length=dr;break}}}Qr.sort(function(Dt,Jt){return Dt[0]-Jt[0]})}for(var ho=0;ho<Qr.length;ho++){for(var ol=Qr[ho],$r=ol[0],fo=ol[1],al=!1,Zt=0,po=$r+1;po<fo;po++){var ll=Te[po];if(B[ll]&rl){al=!0;var cl=B[ll]&hr?F:w;if(cl===st){Zt=cl;break}}}if(al&&!Zt){Zt=je;for(var mo=$r-1;mo>=0;mo--){var ul=Te[mo];if(B[ul]&rl){var hl=B[ul]&hr?F:w;hl!==st?Zt=hl:Zt=st;break}}}if(Zt){if(B[Te[$r]]=B[Te[fo]]=Zt,Zt!==st){for(var pr=$r+1;pr<Te.length;pr++)if(!(B[Te[pr]]&l)){f(G[Te[pr]])&k&&(B[Te[pr]]=Zt);break}}if(Zt!==st){for(var mr=fo+1;mr<Te.length;mr++)if(!(B[Te[mr]]&l)){f(G[Te[mr]])&k&&(B[Te[mr]]=Zt);break}}}}for(var Cn=0;Cn<Te.length;Cn++)if(B[Te[Cn]]&a){for(var fl=Cn,go=Cn,vo=je,gr=Cn-1;gr>=0;gr--)if(B[Te[gr]]&l)fl=gr;else{vo=B[Te[gr]]&hr?F:w;break}for(var dl=at,vr=Cn+1;vr<Te.length;vr++)if(B[Te[vr]]&(a|l))go=vr;else{dl=B[Te[vr]]&hr?F:w;break}for(var _o=fl;_o<=go;_o++)B[Te[_o]]=vo===dl?vo:st;Cn=go}}}for(var Ot=Ee.start;Ot<=Ee.end;Ot++){var Zh=xe[Ot],es=B[Ot];if(Zh&1?es&(w|T|D)&&xe[Ot]++:es&F?xe[Ot]++:es&(D|T)&&(xe[Ot]+=2),es&l&&(xe[Ot]=Ot===0?Ee.level:xe[Ot-1]),Ot===Ee.end||f(G[Ot])&(q|H))for(var ts=Ot;ts>=0&&f(G[ts])&c;ts--)xe[ts]=Ee.level}}return{levels:xe,paragraphs:pe};function pl(Dt,Jt){for(var It=Dt;It<G.length;It++){var Pn=B[It];if(Pn&(F|Z))return 1;if(Pn&(H|w)||Jt&&Pn===V)return 0;if(Pn&r){var ml=Jh(It);It=ml===-1?G.length:ml}}return 0}function Jh(Dt){for(var Jt=1,It=Dt+1;It<G.length;It++){var Pn=B[It];if(Pn&H)break;if(Pn&V){if(--Jt===0)return It}else Pn&r&&Jt++}return-1}}var U="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ie;function j(){if(!ie){var G=v(U,!0),x=G.map,E=G.reverseMap;E.forEach(function(B,se){x.set(se,B)}),ie=x}}function ve(G){return j(),ie.get(G)||null}function Q(G,x,E,B){var se=G.length;E=Math.max(0,E==null?0:+E),B=Math.min(se-1,B==null?se-1:+B);for(var ne=new Map,oe=E;oe<=B;oe++)if(x[oe]&1){var xe=ve(G[oe]);xe!==null&&ne.set(oe,xe)}return ne}function ce(G,x,E,B){var se=G.length;E=Math.max(0,E==null?0:+E),B=Math.min(se-1,B==null?se-1:+B);var ne=[];return x.paragraphs.forEach(function(oe){var xe=Math.max(E,oe.start),Me=Math.min(B,oe.end);if(xe<Me){for(var pe=x.levels.slice(xe,Me+1),Ee=Me;Ee>=xe&&f(G[Ee])&c;Ee--)pe[Ee]=oe.level;for(var ge=oe.level,we=1/0,Ie=0;Ie<pe.length;Ie++){var Ce=pe[Ie];Ce>ge&&(ge=Ce),Ce<we&&(we=Ce|1)}for(var ye=ge;ye>=we;ye--)for(var Re=0;Re<pe.length;Re++)if(pe[Re]>=ye){for(var be=Re;Re+1<pe.length&&pe[Re+1]>=ye;)Re++;Re>be&&ne.push([be+xe,Re+xe])}}}),ne}function fe(G,x,E,B){var se=me(G,x,E,B),ne=[].concat(G);return se.forEach(function(oe,xe){ne[xe]=(x.levels[oe]&1?ve(G[oe]):null)||G[oe]}),ne.join("")}function me(G,x,E,B){for(var se=ce(G,x,E,B),ne=[],oe=0;oe<G.length;oe++)ne[oe]=oe;return se.forEach(function(xe){for(var Me=xe[0],pe=xe[1],Ee=ne.slice(Me,pe+1),ge=Ee.length;ge--;)ne[pe-ge]=Ee[ge]}),ne}return e.closingToOpeningBracket=I,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=L,e.getEmbeddingLevels=re,e.getMirroredCharacter=ve,e.getMirroredCharactersMap=Q,e.getReorderSegments=ce,e.getReorderedIndices=me,e.getReorderedString=fe,e.openingToClosingBracket=y,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const yh=/\bvoid\s+main\s*\(\s*\)\s*{/g;function wa(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=Ke[i];return r?wa(r):n}return s.replace(e,t)}const St=[];for(let s=0;s<256;s++)St[s]=(s<16?"0":"")+s.toString(16);function C_(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toUpperCase()}const ri=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=n[i])}return s},P_=Date.now(),nu=new WeakMap,iu=new Map;let L_=1e10;function Aa(s,e){const t=N_(e);let n=nu.get(s);if(n||nu.set(s,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=iu[h];if(!f){const d=U_(this,c,e,t);f=iu[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,ri(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-P_}}),this[i]&&this[i](c)},o=function(){return a(e.chained?s:s.clone())},a=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:L_++}),u.uuid=C_(),u.uniforms=ri({},c.uniforms,e.uniforms),u.defines=ri({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=ri({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(ri(this.extensions,c.extensions),ri(this.defines,c.defines),ri(this.uniforms,Zu.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Aa(s.isDerivedMaterial?s.getDepthMaterial():new oh({depthPacking:zu}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Aa(s.isDerivedMaterial?s.getDistanceMaterial():new ah,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return n[t]=o,new o}function U_(s,{vertexShader:e,fragmentShader:t},n,i){let{vertexDefs:r,vertexMainIntro:o,vertexMainOutro:a,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=n;if(r=r||"",o=o||"",a=a||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=wa(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=wa(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(f){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(v.push(p),"")),h=`${f}
${v.join(`
`)}
${h}`}if(g){const v=`
uniform float ${g};
`;r=v+r,c=v+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,r=`${r}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,o=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,p,m,b)=>/\battribute\s+vec[23]\s+$/.test(b.substr(0,m))?p:`troika_${p}_${i}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=ru(e,i,r,o,a),t=ru(t,i,c,u,h),{vertexShader:e,fragmentShader:t}}function ru(s,e,t,n,i){return(n||i||t)&&(s=s.replace(yh,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),s}function D_(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let I_=0;const su=new Map;function N_(s){const e=JSON.stringify(s,D_);let t=su.get(e);return t==null&&su.set(e,t=++I_),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function F_(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(i){var r=e._bin,o=new Uint8Array(i);if(r.readASCII(o,0,4)=="ttcf"){var a=4;r.readUshort(o,a),a+=2,r.readUshort(o,a),a+=2;var l=r.readUint(o,a);a+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(o,a);a+=4,c.push(e._readFont(o,h))}return c}return[e._readFont(o,0)]},_readFont:function(i,r){var o=e._bin,a=r;o.readFixed(i,r),r+=4;var l=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:i,_offset:a},h={},f=0;f<l;f++){var d=o.readASCII(i,r,4);r+=4,o.readUint(i,r),r+=4;var g=o.readUint(i,r);r+=4;var v=o.readUint(i,r);r+=4,h[d]={offset:g,length:v}}for(f=0;f<c.length;f++){var p=c[f];h[p]&&(u[p.trim()]=e[p.trim()].parse(i,h[p].offset,h[p].length,u))}return u},_tabOffset:function(i,r,o){for(var a=e._bin,l=a.readUshort(i,o+4),c=o+12,u=0;u<l;u++){var h=a.readASCII(i,c,4);c+=4,a.readUint(i,c),c+=4;var f=a.readUint(i,c);if(c+=4,a.readUint(i,c),c+=4,h==r)return f}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,o){for(var a=[],l=0;l<o;l++)a.push(e._bin.readUshort(i,r+2*l));return a},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(i[r+l]);return a},readUnicode:function(i,r,o){for(var a="",l=0;l<o;l++){var c=i[r++]<<8|i[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,o){var a=e._bin._tdec;return a&&r==0&&o==i.length?a.decode(i):e._bin.readASCII(i,r,o)},readBytes:function(i,r,o){for(var a=[],l=0;l<o;l++)a.push(i[r+l]);return a},readASCIIArray:function(i,r,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(i[r+l]));return a},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,o,a,l){var c=e._bin,u={},h=r;c.readFixed(i,r),r+=4;var f=c.readUshort(i,r);r+=2;var d=c.readUshort(i,r);r+=2;var g=c.readUshort(i,r);return r+=2,u.scriptList=e._lctf.readScriptList(i,h+f),u.featureList=e._lctf.readFeatureList(i,h+d),u.lookupList=e._lctf.readLookupList(i,h+g,l),u},e._lctf.readLookupList=function(i,r,o){var a=e._bin,l=r,c=[],u=a.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var f=a.readUshort(i,r);r+=2;var d=e._lctf.readLookupTable(i,l+f,o);c.push(d)}return c},e._lctf.readLookupTable=function(i,r,o){var a=e._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(i,r),r+=2,c.flag=a.readUshort(i,r),r+=2;var u=a.readUshort(i,r);r+=2;for(var h=c.ltype,f=0;f<u;f++){var d=a.readUshort(i,r);r+=2;var g=o(i,h,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(i){for(var r=0,o=0;o<32;o++)i>>>o&1&&r++;return r},e._lctf.readClassDef=function(i,r){var o=e._bin,a=[],l=o.readUshort(i,r);if(r+=2,l==1){var c=o.readUshort(i,r);r+=2;var u=o.readUshort(i,r);r+=2;for(var h=0;h<u;h++)a.push(c+h),a.push(c+h),a.push(o.readUshort(i,r)),r+=2}if(l==2){var f=o.readUshort(i,r);for(r+=2,h=0;h<f;h++)a.push(o.readUshort(i,r)),r+=2,a.push(o.readUshort(i,r)),r+=2,a.push(o.readUshort(i,r)),r+=2}return a},e._lctf.getInterval=function(i,r){for(var o=0;o<i.length;o+=3){var a=i[o],l=i[o+1];if(i[o+2],a<=r&&r<=l)return o}return-1},e._lctf.readCoverage=function(i,r){var o=e._bin,a={};a.fmt=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);return r+=2,a.fmt==1&&(a.tab=o.readUshorts(i,r,l)),a.fmt==2&&(a.tab=o.readUshorts(i,r,3*l)),a},e._lctf.coverageIndex=function(i,r){var o=i.tab;if(i.fmt==1)return o.indexOf(r);if(i.fmt==2){var a=e._lctf.getInterval(o,r);if(a!=-1)return o[a+2]+(r-o[a])}return-1},e._lctf.readFeatureList=function(i,r){var o=e._bin,a=r,l=[],c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=o.readASCII(i,r,4);r+=4;var f=o.readUshort(i,r);r+=2;var d=e._lctf.readFeatureTable(i,a+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(i,r){var o=e._bin,a=r,l={},c=o.readUshort(i,r);r+=2,c>0&&(l.featureParams=a+c);var u=o.readUshort(i,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(o.readUshort(i,r+2*h));return l},e._lctf.readScriptList=function(i,r){var o=e._bin,a=r,l={},c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=o.readASCII(i,r,4);r+=4;var f=o.readUshort(i,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(i,a+f)}return l},e._lctf.readScriptTable=function(i,r){var o=e._bin,a=r,l={},c=o.readUshort(i,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(i,a+c));var u=o.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var f=o.readASCII(i,r,4);r+=4;var d=o.readUshort(i,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(i,a+d)}return l},e._lctf.readLangSysTable=function(i,r){var o=e._bin,a={};o.readUshort(i,r),r+=2,a.reqFeature=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);return r+=2,a.features=o.readUshorts(i,r,l),a},e.CFF={},e.CFF.parse=function(i,r,o){var a=e._bin;(i=new Uint8Array(i.buffer,r,o))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(a.readASCII(i,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(i,r,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(i,r+h[u],r+h[u+1]));r+=h[h.length-1];var d=f[0],g=[];r=e.CFF.readIndex(i,r,g);var v=[];for(u=0;u<g.length-1;u++)v.push(a.readASCII(i,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(i,r,d),d.CharStrings){r=d.CharStrings,g=[],r=e.CFF.readIndex(i,r,g);var p=[];for(u=0;u<g.length-1;u++)p.push(a.readBytes(i,r+g[u],g[u+1]-g[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var m=[];for(r=e.CFF.readIndex(i,r,m),d.FDArray=[],u=0;u<m.length-1;u++){var b=e.CFF.readDict(i,r+m[u],r+m[u+1]);e.CFF._readFDict(i,b,v),d.FDArray.push(b)}r+=m[m.length-1],r=d.FDSelect,d.FDSelect=[];var _=i[r];if(r++,_!=3)throw _;var y=a.readUshort(i,r);for(r+=2,u=0;u<y+1;u++)d.FDSelect.push(a.readUshort(i,r),i[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(i,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(i,d.charset,d.CharStrings.length)),e.CFF._readFDict(i,d,v),d},e.CFF._readFDict=function(i,r,o){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(i,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=o[r[l]-426+35])},e.CFF.readSubrs=function(i,r,o){var a=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var h=0;h<l.length-1;h++)o.Subrs.push(a.readBytes(i,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var o=0;o<i.charset.length;o++)if(i.charset[o]==r)return o;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,o){e._bin;var a=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var u=0;u<c;u++)a.push(i[r+u]);return a},e.CFF.readCharset=function(i,r,o){var a=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var u=0;u<o;u++){var h=a.readUshort(i,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){h=a.readUshort(i,r),r+=2;var f=0;for(c==1?(f=i[r],r++):(f=a.readUshort(i,r),r+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(i,r,o){var a=e._bin,l=a.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var u=0;u<l;u++)o.push(i[r+u]);else if(c==2)for(u=0;u<l;u++)o.push(a.readUshort(i,r+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&a.readUint(i,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,o){var a=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=a.readShort(i,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=a.readInt(i,r+1)/65535,u=5),o.val=f??"o"+h,o.size=u},e.CFF.readCharString=function(i,r,o){for(var a=r+o,l=e._bin,c=[];r<a;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=l.readShort(i,r+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(i,r+1)/65535,f=5),c.push(g??"o"+d),r+=f}return c},e.CFF.readDict=function(i,r,o){for(var a=e._bin,l={},c=[];r<o;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var f=1,d=null,g=null;if(u==28&&(g=a.readShort(i,r+1),f=3),u==29&&(g=a.readInt(i,r+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=a.readInt(i,r+1)/65535,f=5,"unknown number";if(u==30){var v=[];for(f=1;;){var p=i[r+f];f++;var m=p>>4,b=15&p;if(m!=15&&v.push(m),b!=15&&v.push(b),b==15)break}for(var _="",y=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],I=0;I<v.length;I++)_+=y[v[I]];g=parseFloat(_)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),r+=f}return l},e.cmap={},e.cmap.parse=function(i,r,o){i=new Uint8Array(i.buffer,r,o),r=0;var a=e._bin,l={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=a.readUshort(i,r);r+=2;var d=a.readUshort(i,r);r+=2;var g=a.readUint(i,r);r+=4;var v="p"+f+"e"+d,p=u.indexOf(g);if(p==-1){var m;p=l.tables.length,u.push(g);var b=a.readUshort(i,g);b==0?m=e.cmap.parse0(i,g):b==4?m=e.cmap.parse4(i,g):b==6?m=e.cmap.parse6(i,g):b==12?m=e.cmap.parse12(i,g):console.debug("unknown format: "+b,f,d,g),l.tables.push(m)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=p}return l},e.cmap.parse0=function(i,r){var o=e._bin,a={};a.format=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(i[r+c]);return a},e.cmap.parse4=function(i,r){var o=e._bin,a=r,l={};l.format=o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2;var u=o.readUshort(i,r);r+=2;var h=u/2;l.searchRange=o.readUshort(i,r),r+=2,l.entrySelector=o.readUshort(i,r),r+=2,l.rangeShift=o.readUshort(i,r),r+=2,l.endCount=o.readUshorts(i,r,h),r+=2*h,r+=2,l.startCount=o.readUshorts(i,r,h),r+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(o.readShort(i,r)),r+=2;for(l.idRangeOffset=o.readUshorts(i,r,h),r+=2*h,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(o.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var o=e._bin,a={};a.format=o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,a.firstCode=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(i,r)),r+=2;return a},e.cmap.parse12=function(i,r){var o=e._bin,a={};a.format=o.readUshort(i,r),r+=2,r+=2,o.readUint(i,r),r+=4,o.readUint(i,r),r+=4;var l=o.readUint(i,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=o.readUint(i,u+0),f=o.readUint(i,u+4),d=o.readUint(i,u+8);a.groups.push([h,f,d])}return a},e.glyf={},e.glyf.parse=function(i,r,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var o=e._bin,a=i._data,l=e._tabOffset(a,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(a,l)),l+=2;var h=o.readUshort(a,l);if(l+=2,a.length-l<h)return null;c.instructions=o.readBytes(a,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=a[l];if(l++,c.flags.push(d),(8&d)!=0){var g=a[l];l++;for(var v=0;v<g;v++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?a[l]:-a[l]),l++):m?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?a[l]:-a[l]),l++):m?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var b=0,_=0;for(u=0;u<f;u++)b+=c.xs[u],_+=c.ys[u],c.xs[u]=b,c.ys[u]=_}else{var y;c.parts=[];do{y=o.readUshort(a,l),l+=2;var I={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(I),I.glyphIndex=o.readUshort(a,l),l+=2,1&y){var L=o.readShort(a,l);l+=2;var w=o.readShort(a,l);l+=2}else L=o.readInt8(a,l),l++,w=o.readInt8(a,l),l++;2&y?(I.m.tx=L,I.m.ty=w):(I.p1=L,I.p2=w),8&y?(I.m.a=I.m.d=o.readF2dot14(a,l),l+=2):64&y?(I.m.a=o.readF2dot14(a,l),l+=2,I.m.d=o.readF2dot14(a,l),l+=2):128&y&&(I.m.a=o.readF2dot14(a,l),l+=2,I.m.b=o.readF2dot14(a,l),l+=2,I.m.c=o.readF2dot14(a,l),l+=2,I.m.d=o.readF2dot14(a,l),l+=2)}while(32&y);if(256&y){var F=o.readUshort(a,l);for(l+=2,c.instr=[],u=0;u<F;u++)c.instr.push(a[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(i,r,o,a){var l=r;r+=4;var c=e._bin.readUshort(i,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(i,l+c)}},e.GPOS={},e.GPOS.parse=function(i,r,o,a){return e._lctf.parse(i,r,o,a,e.GPOS.subt)},e.GPOS.subt=function(i,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(i,o),o+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(i,o);o+=2,u.coverage=e._lctf.readCoverage(i,h+c)}if(r==1&&u.fmt==1){var f=l.readUshort(i,o);o+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(i,o,f))}else if(r==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(i,o),o+=2;var d=l.readUshort(i,o);o+=2;var g=e._lctf.numOfOnes(f),v=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(i,o);o+=2;for(var m=0;m<p;m++){var b=c+l.readUshort(i,o);o+=2;var _=l.readUshort(i,b);b+=2;for(var y=[],I=0;I<_;I++){var L=l.readUshort(i,b);b+=2,f!=0&&(D=e.GPOS.readValueRecord(i,b,f),b+=2*g),d!=0&&(N=e.GPOS.readValueRecord(i,b,d),b+=2*v),y.push({gid2:L,val1:D,val2:N})}u.pairsets.push(y)}}if(u.fmt==2){var w=l.readUshort(i,o);o+=2;var F=l.readUshort(i,o);o+=2;var T=l.readUshort(i,o);o+=2;var S=l.readUshort(i,o);for(o+=2,u.classDef1=e._lctf.readClassDef(i,c+w),u.classDef2=e._lctf.readClassDef(i,c+F),u.matrix=[],m=0;m<T;m++){var W=[];for(I=0;I<S;I++){var D=null,N=null;f!=0&&(D=e.GPOS.readValueRecord(i,o,f),o+=2*g),d!=0&&(N=e.GPOS.readValueRecord(i,o,d),o+=2*v),W.push({val1:D,val2:N})}u.matrix.push(W)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(i,l.readUshort(i,o)+c),u.baseCoverage=e._lctf.readCoverage(i,l.readUshort(i,o+2)+c),u.markClassCount=l.readUshort(i,o+4),u.markArray=e.GPOS.readMarkArray(i,l.readUshort(i,o+6)+c),u.baseArray=e.GPOS.readBaseArray(i,l.readUshort(i,o+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(i,l.readUshort(i,o)+c),u.mark2Coverage=e._lctf.readCoverage(i,l.readUshort(i,o+2)+c),u.markClassCount=l.readUshort(i,o+4),u.mark1Array=e.GPOS.readMarkArray(i,l.readUshort(i,o+6)+c),u.mark2Array=e.GPOS.readBaseArray(i,l.readUshort(i,o+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var H=l.readUshort(i,o);o+=2;var q=l.readUint(i,o);if(o+=4,a.ltype==9)a.ltype=H;else if(a.ltype!=H)throw"invalid extension substitution";return e.GPOS.subt(i,a.ltype,c+q)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,r,o){var a=e._bin,l=[];return l.push(1&o?a.readShort(i,r):0),r+=1&o?2:0,l.push(2&o?a.readShort(i,r):0),r+=2&o?2:0,l.push(4&o?a.readShort(i,r):0),r+=4&o?2:0,l.push(8&o?a.readShort(i,r):0),r+=8&o?2:0,l},e.GPOS.readBaseArray=function(i,r,o){var a=e._bin,l=[],c=r,u=a.readUshort(i,r);r+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<o;d++)f.push(e.GPOS.readAnchorRecord(i,c+a.readUshort(i,r))),r+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(i,r){var o=e._bin,a=[],l=r,c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(i,o.readUshort(i,r+2)+l);h.markClass=o.readUshort(i,r),a.push(h),r+=4}return a},e.GPOS.readAnchorRecord=function(i,r){var o=e._bin,a={};return a.fmt=o.readUshort(i,r),a.x=o.readShort(i,r+2),a.y=o.readShort(i,r+4),a},e.GSUB={},e.GSUB.parse=function(i,r,o,a){return e._lctf.parse(i,r,o,a,e.GSUB.subt)},e.GSUB.subt=function(i,r,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(i,o),o+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(i,o);o+=2,u.coverage=e._lctf.readCoverage(i,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,o),o+=2;else if(u.fmt==2){var f=l.readUshort(i,o);o+=2,u.newg=l.readUshorts(i,o,f),o+=2*u.newg.length}}else if(r==2&&u.fmt==1){f=l.readUshort(i,o),o+=2,u.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(i,o)+c;o+=2;var v=l.readUshort(i,g);u.seqs.push(l.readUshorts(i,g+2,v))}}else if(r==4)for(u.vals=[],f=l.readUshort(i,o),o+=2,d=0;d<f;d++){var p=l.readUshort(i,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+p))}else if(r==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(i,o);o+=2,u.cDef=e._lctf.readClassDef(i,c+m),u.scset=[];var b=l.readUshort(i,o);for(o+=2,d=0;d<b;d++){var _=l.readUshort(i,o);o+=2,u.scset.push(_==0?null:e.GSUB.readSubClassSet(i,c+_))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(i,o),o+=2;for(var y=[],I=0;I<f;I++)y.push(e._lctf.readCoverage(i,c+l.readUshort(i,o+2*I)));o+=2*f,d==0&&(u.backCvg=y),d==1&&(u.inptCvg=y),d==2&&(u.ahedCvg=y)}f=l.readUshort(i,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,o,f)}}else{if(r==7&&u.fmt==1){var L=l.readUshort(i,o);o+=2;var w=l.readUint(i,o);if(o+=4,a.ltype==9)a.ltype=L;else if(a.ltype!=L)throw"invalid extension substitution";return e.GSUB.subt(i,a.ltype,c+w)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,r){var o=e._bin.readUshort,a=r,l=[],c=o(i,r);r+=2;for(var u=0;u<c;u++){var h=o(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,a+h))}return l},e.GSUB.readSubClassRule=function(i,r){var o=e._bin.readUshort,a={},l=o(i,r),c=o(i,r+=2);r+=2,a.input=[];for(var u=0;u<l-1;u++)a.input.push(o(i,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),a},e.GSUB.readSubstLookupRecords=function(i,r,o){for(var a=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(i,r),a(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var o=e._bin,a=r,l=[],c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=o.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,a+h))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var o=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(i,r);r+=2,c==1&&u--,a[l[c]]=o.readUshorts(i,r,u),r+=2*a[l[c]].length}return u=o.readUshort(i,r),r+=2,a.subst=o.readUshorts(i,r,2*u),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(i,r){var o=e._bin,a=r,l=[],c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=o.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,a+h))}return l},e.GSUB.readLigature=function(i,r){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(i,r)),r+=2;return a},e.head={},e.head.parse=function(i,r,o){var a=e._bin,l={};return a.readFixed(i,r),r+=4,l.fontRevision=a.readFixed(i,r),r+=4,a.readUint(i,r),r+=4,a.readUint(i,r),r+=4,l.flags=a.readUshort(i,r),r+=2,l.unitsPerEm=a.readUshort(i,r),r+=2,l.created=a.readUint64(i,r),r+=8,l.modified=a.readUint64(i,r),r+=8,l.xMin=a.readShort(i,r),r+=2,l.yMin=a.readShort(i,r),r+=2,l.xMax=a.readShort(i,r),r+=2,l.yMax=a.readShort(i,r),r+=2,l.macStyle=a.readUshort(i,r),r+=2,l.lowestRecPPEM=a.readUshort(i,r),r+=2,l.fontDirectionHint=a.readShort(i,r),r+=2,l.indexToLocFormat=a.readShort(i,r),r+=2,l.glyphDataFormat=a.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,o){var a=e._bin,l={};return a.readFixed(i,r),r+=4,l.ascender=a.readShort(i,r),r+=2,l.descender=a.readShort(i,r),r+=2,l.lineGap=a.readShort(i,r),r+=2,l.advanceWidthMax=a.readUshort(i,r),r+=2,l.minLeftSideBearing=a.readShort(i,r),r+=2,l.minRightSideBearing=a.readShort(i,r),r+=2,l.xMaxExtent=a.readShort(i,r),r+=2,l.caretSlopeRise=a.readShort(i,r),r+=2,l.caretSlopeRun=a.readShort(i,r),r+=2,l.caretOffset=a.readShort(i,r),r+=2,r+=8,l.metricDataFormat=a.readShort(i,r),r+=2,l.numberOfHMetrics=a.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,o,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<a.maxp.numGlyphs;f++)f<a.hhea.numberOfHMetrics&&(u=l.readUshort(i,r),r+=2,h=l.readShort(i,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(i,r,o,a){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,o,a);var u=l.readUshort(i,r);r+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){r+=2,o=l.readUshort(i,r),r+=2;var d=l.readUshort(i,r);r+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(i,r,h)}return h},e.kern.parseV1=function(i,r,o,a){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(i,r),r+=4;var f=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(i,r,u)}return u},e.kern.readFormat0=function(i,r,o){var a=e._bin,l=-1,c=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2;for(var u=0;u<c;u++){var h=a.readUshort(i,r);r+=2;var f=a.readUshort(i,r);r+=2;var d=a.readShort(i,r);r+=2,h!=l&&(o.glyph1.push(h),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=h}return r},e.loca={},e.loca.parse=function(i,r,o,a){var l=e._bin,c=[],u=a.head.indexToLocFormat,h=a.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(i,r+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(i,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,o){var a=e._bin,l={},c=a.readUint(i,r);return r+=4,l.numGlyphs=a.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(i,r),r+=2,l.maxContours=a.readUshort(i,r),r+=2,l.maxCompositePoints=a.readUshort(i,r),r+=2,l.maxCompositeContours=a.readUshort(i,r),r+=2,l.maxZones=a.readUshort(i,r),r+=2,l.maxTwilightPoints=a.readUshort(i,r),r+=2,l.maxStorage=a.readUshort(i,r),r+=2,l.maxFunctionDefs=a.readUshort(i,r),r+=2,l.maxInstructionDefs=a.readUshort(i,r),r+=2,l.maxStackElements=a.readUshort(i,r),r+=2,l.maxSizeOfInstructions=a.readUshort(i,r),r+=2,l.maxComponentElements=a.readUshort(i,r),r+=2,l.maxComponentDepth=a.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,o){var a=e._bin,l={};a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2,a.readUshort(i,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var g=a.readUshort(i,r);r+=2;var v=a.readUshort(i,r);r+=2;var p=a.readUshort(i,r);r+=2;var m=a.readUshort(i,r);r+=2;var b=a.readUshort(i,r);r+=2;var _=a.readUshort(i,r);r+=2;var y,I=h[m],L=f+12*c+_;if(g==0)y=a.readUnicode(i,L,b/2);else if(g==3&&v==0)y=a.readUnicode(i,L,b/2);else if(v==0)y=a.readASCII(i,L,b);else if(v==1)y=a.readUnicode(i,L,b/2);else if(v==3)y=a.readUnicode(i,L,b/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;y=a.readASCII(i,L,b),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var w="p"+g+","+p.toString(16);l[w]==null&&(l[w]={}),l[w][I!==void 0?I:m]=y,l[w]._lang=p}for(var F in l)if(l[F].postScriptName!=null&&l[F]._lang==1033)return l[F];for(var F in l)if(l[F].postScriptName!=null&&l[F]._lang==0)return l[F];for(var F in l)if(l[F].postScriptName!=null&&l[F]._lang==3084)return l[F];for(var F in l)if(l[F].postScriptName!=null)return l[F];for(var F in l){u=F;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,r,o){var a=e._bin.readUshort(i,r);r+=2;var l={};if(a==0)e["OS/2"].version0(i,r,l);else if(a==1)e["OS/2"].version1(i,r,l);else if(a==2||a==3||a==4)e["OS/2"].version2(i,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(i,r),r+=2,o.usWeightClass=a.readUshort(i,r),r+=2,o.usWidthClass=a.readUshort(i,r),r+=2,o.fsType=a.readUshort(i,r),r+=2,o.ySubscriptXSize=a.readShort(i,r),r+=2,o.ySubscriptYSize=a.readShort(i,r),r+=2,o.ySubscriptXOffset=a.readShort(i,r),r+=2,o.ySubscriptYOffset=a.readShort(i,r),r+=2,o.ySuperscriptXSize=a.readShort(i,r),r+=2,o.ySuperscriptYSize=a.readShort(i,r),r+=2,o.ySuperscriptXOffset=a.readShort(i,r),r+=2,o.ySuperscriptYOffset=a.readShort(i,r),r+=2,o.yStrikeoutSize=a.readShort(i,r),r+=2,o.yStrikeoutPosition=a.readShort(i,r),r+=2,o.sFamilyClass=a.readShort(i,r),r+=2,o.panose=a.readBytes(i,r,10),r+=10,o.ulUnicodeRange1=a.readUint(i,r),r+=4,o.ulUnicodeRange2=a.readUint(i,r),r+=4,o.ulUnicodeRange3=a.readUint(i,r),r+=4,o.ulUnicodeRange4=a.readUint(i,r),r+=4,o.achVendID=[a.readInt8(i,r),a.readInt8(i,r+1),a.readInt8(i,r+2),a.readInt8(i,r+3)],r+=4,o.fsSelection=a.readUshort(i,r),r+=2,o.usFirstCharIndex=a.readUshort(i,r),r+=2,o.usLastCharIndex=a.readUshort(i,r),r+=2,o.sTypoAscender=a.readShort(i,r),r+=2,o.sTypoDescender=a.readShort(i,r),r+=2,o.sTypoLineGap=a.readShort(i,r),r+=2,o.usWinAscent=a.readUshort(i,r),r+=2,o.usWinDescent=a.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,o){var a=e._bin;return r=e["OS/2"].version0(i,r,o),o.ulCodePageRange1=a.readUint(i,r),r+=4,o.ulCodePageRange2=a.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,o){var a=e._bin;return r=e["OS/2"].version1(i,r,o),o.sxHeight=a.readShort(i,r),r+=2,o.sCapHeight=a.readShort(i,r),r+=2,o.usDefault=a.readUshort(i,r),r+=2,o.usBreak=a.readUshort(i,r),r+=2,o.usMaxContext=a.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,o){var a=e._bin;return r=e["OS/2"].version2(i,r,o),o.usLowerOpticalPointSize=a.readUshort(i,r),r+=2,o.usUpperOpticalPointSize=a.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,o){var a=e._bin,l={};return l.version=a.readFixed(i,r),r+=4,l.italicAngle=a.readFixed(i,r),r+=4,l.underlinePosition=a.readShort(i,r),r+=2,l.underlineThickness=a.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var o=i.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var o={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var a=i.SVG.entries[r];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),i.SVG.entries[r]=a),a)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,u,o)}else i.glyf&&e.U._drawGlyf(r,i,o);return o},e.U._drawGlyf=function(i,r,o){var a=r.glyf[i];a==null&&(a=r.glyf[i]=e.glyf._parseGlyf(r,i)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,r,o))},e.U._simpleGlyph=function(i,r){for(var o=0;o<i.noc;o++){for(var a=o==0?0:i.endPts[o-1]+1,l=i.endPts[o],c=a;c<=l;c++){var u=c==a?l:c-1,h=c==l?a:c+1,f=1&i.flags[c],d=1&i.flags[u],g=1&i.flags[h],v=i.xs[c],p=i.ys[c];if(c==a)if(f){if(!d){e.U.P.moveTo(r,v,p);continue}e.U.P.moveTo(r,i.xs[u],i.ys[u])}else d?e.U.P.moveTo(r,i.xs[u],i.ys[u]):e.U.P.moveTo(r,(i.xs[u]+v)/2,(i.ys[u]+p)/2);f?d&&e.U.P.lineTo(r,v,p):g?e.U.P.qcurveTo(r,v,p,i.xs[h],i.ys[h]):e.U.P.qcurveTo(r,v,p,(v+i.xs[h])/2,(p+i.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,o){for(var a=0;a<i.parts.length;a++){var l={cmds:[],crds:[]},c=i.parts[a];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];o.crds.push(f*u.a+d*u.b+u.tx),o.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)o.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(i,r){var o=e._lctf.getInterval(r,i);return o==-1?0:r[o+2]},e.U._applySubs=function(i,r,o,a){for(var l=i.length-r-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,h=o.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,i[r]))!=-1){if(o.ltype==1)i[r],h.fmt==1?i[r]=i[r]+h.delta:i[r]=h.newg[u];else if(o.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],v=g.chain.length;if(!(v>l)){for(var p=!0,m=0,b=0;b<v;b++){for(;i[r+m+(1+b)]==-1;)m++;g.chain[b]!=i[r+m+(1+b)]&&(p=!1)}if(p){for(i[r]=g.nglyph,b=0;b<v+m;b++)i[r+b+1]=-1;break}}}else if(o.ltype==5&&h.fmt==2)for(var _=e._lctf.getInterval(h.cDef,i[r]),y=h.cDef[_+2],I=h.scset[y],L=0;L<I.length;L++){var w=I[L],F=w.input;if(!(F.length>l)){for(p=!0,b=0;b<F.length;b++){var T=e._lctf.getInterval(h.cDef,i[r+1+b]);if(_==-1&&h.cDef[T+2]!=F[b]){p=!1;break}}if(p){var S=w.substLookupRecords;for(d=0;d<S.length;d+=2)S[d],S[d+1]}}}else if(o.ltype==6&&h.fmt==3){if(!e.U._glsCovered(i,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(i,h.inptCvg,r)||!e.U._glsCovered(i,h.ahedCvg,r+h.inptCvg.length))continue;var W=h.lookupRec;for(L=0;L<W.length;L+=2){_=W[L];var D=a[W[L+1]];e.U._applySubs(i,r+_,D,a)}}}}},e.U._glsCovered=function(i,r,o){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],i[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(i,u),d=0;d<f.crds.length;d+=2)a.crds.push(f.crds[d]+l),a.crds.push(f.crds[d+1]);for(o&&a.cmds.push(o),d=0;d<f.cmds.length;d++)a.cmds.push(f.cmds[d]);o&&a.cmds.push("X"),l+=i.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(i,u,h))}}return a},e.U.P={},e.U.P.moveTo=function(i,r,o){i.cmds.push("M"),i.crds.push(r,o)},e.U.P.lineTo=function(i,r,o){i.cmds.push("L"),i.crds.push(r,o)},e.U.P.curveTo=function(i,r,o,a,l,c,u){i.cmds.push("C"),i.crds.push(r,o,a,l,c,u)},e.U.P.qcurveTo=function(i,r,o,a,l){i.cmds.push("Q"),i.crds.push(r,o,a,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,o,a,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open,g=0,v=r.x,p=r.y,m=0,b=0,_=0,y=0,I=0,L=0,w=0,F=0,T=0,S=0,W={val:0,size:0};g<i.length;){e.CFF.getCharString(i,g,W);var D=W.val;if(g+=W.size,D=="o1"||D=="o18")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(D=="o3"||D=="o23")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(D=="o4")c.length>1&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,v,p),d=!0;else if(D=="o5")for(;c.length>0;)v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p);else if(D=="o6"||D=="o7")for(var N=c.length,H=D=="o6",q=0;q<N;q++){var K=c.shift();H?v+=K:p+=K,H=!H,e.U.P.lineTo(l,v,p)}else if(D=="o8"||D=="o24"){N=c.length;for(var $=0;$+6<=N;)m=v+c.shift(),b=p+c.shift(),_=m+c.shift(),y=b+c.shift(),v=_+c.shift(),p=y+c.shift(),e.U.P.curveTo(l,m,b,_,y,v,p),$+=6;D=="o24"&&(v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p))}else{if(D=="o11")break;if(D=="o1234"||D=="o1235"||D=="o1236"||D=="o1237")D=="o1234"&&(b=p,_=(m=v+c.shift())+c.shift(),S=y=b+c.shift(),L=y,F=p,v=(w=(I=(T=_+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,b,_,y,T,S),e.U.P.curveTo(l,I,L,w,F,v,p)),D=="o1235"&&(m=v+c.shift(),b=p+c.shift(),_=m+c.shift(),y=b+c.shift(),T=_+c.shift(),S=y+c.shift(),I=T+c.shift(),L=S+c.shift(),w=I+c.shift(),F=L+c.shift(),v=w+c.shift(),p=F+c.shift(),c.shift(),e.U.P.curveTo(l,m,b,_,y,T,S),e.U.P.curveTo(l,I,L,w,F,v,p)),D=="o1236"&&(m=v+c.shift(),b=p+c.shift(),_=m+c.shift(),S=y=b+c.shift(),L=y,w=(I=(T=_+c.shift())+c.shift())+c.shift(),F=L+c.shift(),v=w+c.shift(),e.U.P.curveTo(l,m,b,_,y,T,S),e.U.P.curveTo(l,I,L,w,F,v,p)),D=="o1237"&&(m=v+c.shift(),b=p+c.shift(),_=m+c.shift(),y=b+c.shift(),T=_+c.shift(),S=y+c.shift(),I=T+c.shift(),L=S+c.shift(),w=I+c.shift(),F=L+c.shift(),Math.abs(w-v)>Math.abs(F-p)?v=w+c.shift():p=F+c.shift(),e.U.P.curveTo(l,m,b,_,y,T,S),e.U.P.curveTo(l,I,L,w,F,v,p));else if(D=="o14"){if(c.length>0&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),c.length==4){var k=c.shift(),Z=c.shift(),X=c.shift(),z=c.shift(),te=e.CFF.glyphBySE(o,X),le=e.CFF.glyphBySE(o,z);e.U._drawCFF(o.CharStrings[te],r,o,a,l),r.x=k,r.y=Z,e.U._drawCFF(o.CharStrings[le],r,o,a,l)}d&&(e.U.P.closePath(l),d=!1)}else if(D=="o19"||D=="o20")c.length%2!=0&&!h&&(f=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(D=="o21")c.length>2&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),p+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,p),d=!0;else if(D=="o22")c.length>1&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,p),d=!0;else if(D=="o25"){for(;c.length>6;)v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p);m=v+c.shift(),b=p+c.shift(),_=m+c.shift(),y=b+c.shift(),v=_+c.shift(),p=y+c.shift(),e.U.P.curveTo(l,m,b,_,y,v,p)}else if(D=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)m=v,b=p+c.shift(),v=_=m+c.shift(),p=(y=b+c.shift())+c.shift(),e.U.P.curveTo(l,m,b,_,y,v,p);else if(D=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)b=p,_=(m=v+c.shift())+c.shift(),y=b+c.shift(),v=_+c.shift(),p=y,e.U.P.curveTo(l,m,b,_,y,v,p);else if(D=="o10"||D=="o29"){var P=D=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var R=c.pop(),C=P.Subrs[R+P.Bias];r.x=v,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d,e.U._drawCFF(C,r,o,a,l),v=r.x,p=r.y,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open}}else if(D=="o30"||D=="o31"){var M=c.length,V=($=0,D=="o31");for($+=M-(N=-3&M);$<N;)V?(b=p,_=(m=v+c.shift())+c.shift(),p=(y=b+c.shift())+c.shift(),N-$==5?(v=_+c.shift(),$++):v=_,V=!1):(m=v,b=p+c.shift(),_=m+c.shift(),y=b+c.shift(),v=_+c.shift(),N-$==5?(p=y+c.shift(),$++):p=y,V=!0),e.U.P.curveTo(l,m,b,_,y,v,p),$+=4}else{if((D+"").charAt(0)=="o")throw console.debug("Unknown operation: "+D,i),D;c.push(D)}}}r.x=v,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d};var t=e,n={Typr:t};return s.Typr=t,s.default=n,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function O_(){return function(s){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(D,N){for(var H=new t(31),q=0;q<31;++q)H[q]=N+=1<<D[q-1];var K=new n(H[30]);for(q=1;q<30;++q)for(var $=H[q];$<H[q+1];++$)K[$]=$-H[q]<<5|q;return[H,K]},l=a(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=a(r,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(D,N,H){for(var q=D.length,K=0,$=new t(N);K<q;++K)++$[D[K]-1];var k,Z=new t(N);for(K=0;K<N;++K)Z[K]=Z[K-1]+$[K-1]<<1;{k=new t(1<<N);var X=15-N;for(K=0;K<q;++K)if(D[K])for(var z=K<<4|D[K],te=N-D[K],le=Z[D[K]-1]++<<te,P=le|(1<<te)-1;le<=P;++le)k[f[le]>>>X]=z}return k},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var b=v(p,9),_=v(m,5),y=function(D){for(var N=D[0],H=1;H<D.length;++H)D[H]>N&&(N=D[H]);return N},I=function(D,N,H){var q=N/8|0;return(D[q]|D[q+1]<<8)>>(7&N)&H},L=function(D,N){var H=N/8|0;return(D[H]|D[H+1]<<8|D[H+2]<<16)>>(7&N)},w=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],F=function(D,N,H){var q=new Error(N||w[D]);if(q.code=D,Error.captureStackTrace&&Error.captureStackTrace(q,F),!H)throw q;return q},T=function(D,N,H){var q=D.length;if(!q||H&&!H.l&&q<5)return N||new e(0);var K=!N||H,$=!H||H.i;H||(H={}),N||(N=new e(3*q));var k,Z=function(be){var Oe=N.length;if(be>Oe){var Fe=new e(Math.max(2*Oe,be));Fe.set(N),N=Fe}},X=H.f||0,z=H.p||0,te=H.b||0,le=H.l,P=H.d,R=H.m,C=H.n,M=8*q;do{if(!le){H.f=X=I(D,z,1);var V=I(D,z+1,3);if(z+=3,!V){var re=D[(E=((k=z)/8|0)+(7&k&&1)+4)-4]|D[E-3]<<8,U=E+re;if(U>q){$&&F(0);break}K&&Z(te+re),N.set(D.subarray(E,U),te),H.b=te+=re,H.p=z=8*U;continue}if(V==1)le=b,P=_,R=9,C=5;else if(V==2){var ie=I(D,z,31)+257,j=I(D,z+10,15)+4,ve=ie+I(D,z+5,31)+1;z+=14;for(var Q=new e(ve),ce=new e(19),fe=0;fe<j;++fe)ce[o[fe]]=I(D,z+3*fe,7);z+=3*j;var me=y(ce),G=(1<<me)-1,x=v(ce,me);for(fe=0;fe<ve;){var E,B=x[I(D,z,G)];if(z+=15&B,(E=B>>>4)<16)Q[fe++]=E;else{var se=0,ne=0;for(E==16?(ne=3+I(D,z,3),z+=2,se=Q[fe-1]):E==17?(ne=3+I(D,z,7),z+=3):E==18&&(ne=11+I(D,z,127),z+=7);ne--;)Q[fe++]=se}}var oe=Q.subarray(0,ie),xe=Q.subarray(ie);R=y(oe),C=y(xe),le=v(oe,R),P=v(xe,C)}else F(1);if(z>M){$&&F(0);break}}K&&Z(te+131072);for(var Me=(1<<R)-1,pe=(1<<C)-1,Ee=z;;Ee=z){var ge=(se=le[L(D,z)&Me])>>>4;if((z+=15&se)>M){$&&F(0);break}if(se||F(2),ge<256)N[te++]=ge;else{if(ge==256){Ee=z,le=null;break}var we=ge-254;if(ge>264){var Ie=i[fe=ge-257];we=I(D,z,(1<<Ie)-1)+c[fe],z+=Ie}var Ce=P[L(D,z)&pe],ye=Ce>>>4;if(Ce||F(3),z+=15&Ce,xe=h[ye],ye>3&&(Ie=r[ye],xe+=L(D,z)&(1<<Ie)-1,z+=Ie),z>M){$&&F(0);break}K&&Z(te+131072);for(var Re=te+we;te<Re;te+=4)N[te]=N[te-xe],N[te+1]=N[te+1-xe],N[te+2]=N[te+2-xe],N[te+3]=N[te+3-xe];te=Re}}H.l=le,H.p=Ee,H.b=te,le&&(X=1,H.m=R,H.d=P,H.n=C)}while(!X);return te==N.length?N:function(be,Oe,Fe){(Fe==null||Fe>be.length)&&(Fe=be.length);var A=new(be instanceof t?t:be instanceof n?n:e)(Fe-Oe);return A.set(be.subarray(Oe,Fe)),A}(N,0,te)},S=new e(0),W=typeof TextDecoder<"u"&&new TextDecoder;try{W.decode(S,{stream:!0})}catch{}return s.convert_streams=function(D){var N=new DataView(D),H=0;function q(){var ie=N.getUint16(H);return H+=2,ie}function K(){var ie=N.getUint32(H);return H+=4,ie}function $(ie){re.setUint16(U,ie),U+=2}function k(ie){re.setUint32(U,ie),U+=4}for(var Z={signature:K(),flavor:K(),length:K(),numTables:q(),reserved:q(),totalSfntSize:K(),majorVersion:q(),minorVersion:q(),metaOffset:K(),metaLength:K(),metaOrigLength:K(),privOffset:K(),privLength:K()},X=0;Math.pow(2,X)<=Z.numTables;)X++;X--;for(var z=16*Math.pow(2,X),te=16*Z.numTables-z,le=12,P=[],R=0;R<Z.numTables;R++)P.push({tag:K(),offset:K(),compLength:K(),origLength:K(),origChecksum:K()}),le+=16;var C,M=new Uint8Array(12+16*P.length+P.reduce(function(ie,j){return ie+j.origLength+4},0)),V=M.buffer,re=new DataView(V),U=0;return k(Z.flavor),$(Z.numTables),$(z),$(X),$(te),P.forEach(function(ie){k(ie.tag),k(ie.origChecksum),k(le),k(ie.origLength),ie.outOffset=le,(le+=ie.origLength)%4!=0&&(le+=4-le%4)}),P.forEach(function(ie){var j,ve=D.slice(ie.offset,ie.offset+ie.compLength);if(ie.compLength!=ie.origLength){var Q=new Uint8Array(ie.origLength);j=new Uint8Array(ve,2),T(j,Q)}else Q=new Uint8Array(ve);M.set(Q,ie.outOffset);var ce=0;(le=ie.outOffset+ie.origLength)%4!=0&&(ce=4-le%4),M.set(new Uint8Array(ce).buffer,ie.outOffset+ie.origLength),C=le+ce}),V.slice(0,C)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function B_(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,o=4,a=8,l=16,c=32;let u;function h(w){if(!u){const F={R:r,L:i,D:o,C:l,U:c,T:a};u=new Map;for(let T in n){let S=0;n[T].split(",").forEach(W=>{let[D,N]=W.split("+");D=parseInt(D,36),N=N?parseInt(N,36):0,u.set(S+=D,F[T]);for(let H=N;H--;)u.set(++S,F[T])})}}return u.get(w)||c}const f=1,d=2,g=3,v=4,p=[null,"isol","init","fina","medi"];function m(w){const F=new Uint8Array(w.length);let T=c,S=f,W=-1;for(let D=0;D<w.length;D++){const N=w.codePointAt(D);let H=h(N)|0,q=f;H&a||(T&(i|o|l)?H&(r|o|l)?(q=g,(S===f||S===g)&&F[W]++):H&(i|c)&&(S===d||S===v)&&F[W]--:T&(r|c)&&(S===d||S===v)&&F[W]--,S=F[D]=q,T=H,W=D,N>65535&&D++)}return F}function b(w,F){const T=[];for(let W=0;W<F.length;W++){const D=F.codePointAt(W);D>65535&&W++,T.push(s.U.codeToGlyph(w,D))}const S=w.GSUB;if(S){const{lookupList:W,featureList:D}=S;let N;const H=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,q=[];D.forEach(K=>{if(H.test(K.tag))for(let $=0;$<K.tab.length;$++){if(q[K.tab[$]])continue;q[K.tab[$]]=!0;const k=W[K.tab[$]],Z=/^(isol|init|fina|medi)$/.test(K.tag);Z&&!N&&(N=m(F));for(let X=0;X<T.length;X++)(!N||!Z||p[N[X]]===K.tag)&&s.U._applySubs(T,X,k,W)}})}return T}function _(w,F){const T=new Int16Array(F.length*3);let S=0;for(;S<F.length;S++){const H=F[S];if(H===-1)continue;T[S*3+2]=w.hmtx.aWidth[H];const q=w.GPOS;if(q){const K=q.lookupList;for(let $=0;$<K.length;$++){const k=K[$];for(let Z=0;Z<k.tabs.length;Z++){const X=k.tabs[Z];if(k.ltype===1){if(s._lctf.coverageIndex(X.coverage,H)!==-1&&X.pos){N(X.pos,S);break}}else if(k.ltype===2){let z=null,te=W();if(te!==-1){const le=s._lctf.coverageIndex(X.coverage,F[te]);if(le!==-1){if(X.fmt===1){const P=X.pairsets[le];for(let R=0;R<P.length;R++)P[R].gid2===H&&(z=P[R])}else if(X.fmt===2){const P=s.U._getGlyphClass(F[te],X.classDef1),R=s.U._getGlyphClass(H,X.classDef2);z=X.matrix[P][R]}if(z){z.val1&&N(z.val1,te),z.val2&&N(z.val2,S);break}}}}else if(k.ltype===4){const z=s._lctf.coverageIndex(X.markCoverage,H);if(z!==-1){const te=W(D),le=te===-1?-1:s._lctf.coverageIndex(X.baseCoverage,F[te]);if(le!==-1){const P=X.markArray[z],R=X.baseArray[le][P.markClass];T[S*3]=R.x-P.x+T[te*3]-T[te*3+2],T[S*3+1]=R.y-P.y+T[te*3+1];break}}}else if(k.ltype===6){const z=s._lctf.coverageIndex(X.mark1Coverage,H);if(z!==-1){const te=W();if(te!==-1){const le=F[te];if(y(w,le)===3){const P=s._lctf.coverageIndex(X.mark2Coverage,le);if(P!==-1){const R=X.mark1Array[z],C=X.mark2Array[P][R.markClass];T[S*3]=C.x-R.x+T[te*3]-T[te*3+2],T[S*3+1]=C.y-R.y+T[te*3+1];break}}}}}}}}else if(w.kern&&!w.cff){const K=W();if(K!==-1){const $=w.kern.glyph1.indexOf(F[K]);if($!==-1){const k=w.kern.rval[$].glyph2.indexOf(H);k!==-1&&(T[K*3+2]+=w.kern.rval[$].vals[k])}}}}return T;function W(H){for(let q=S-1;q>=0;q--)if(F[q]!==-1&&(!H||H(F[q])))return q;return-1}function D(H){return y(w,H)===1}function N(H,q){for(let K=0;K<3;K++)T[q*3+K]+=H[K]||0}}function y(w,F){const T=w.GDEF&&w.GDEF.glyphClassDef;return T?s.U._getGlyphClass(F,T):0}function I(...w){for(let F=0;F<w.length;F++)if(typeof w[F]=="number")return w[F]}function L(w){const F=Object.create(null),T=w["OS/2"],S=w.hhea,W=w.head.unitsPerEm,D=I(T&&T.sTypoAscender,S&&S.ascender,W),N={unitsPerEm:W,ascender:D,descender:I(T&&T.sTypoDescender,S&&S.descender,0),capHeight:I(T&&T.sCapHeight,D),xHeight:I(T&&T.sxHeight,D),lineGap:I(T&&T.sTypoLineGap,S&&S.lineGap),supportsCodePoint(H){return s.U.codeToGlyph(w,H)>0},forEachGlyph(H,q,K,$){let k=0;const Z=1/N.unitsPerEm*q,X=b(w,H);let z=0;const te=_(w,X);return X.forEach((le,P)=>{if(le!==-1){let R=F[le];if(!R){const{cmds:C,crds:M}=s.U.glyphToPath(w,le);let V="",re=0;for(let Q=0,ce=C.length;Q<ce;Q++){const fe=t[C[Q]];V+=C[Q];for(let me=1;me<=fe;me++)V+=(me>1?",":"")+M[re++]}let U,ie,j,ve;if(M.length){U=ie=1/0,j=ve=-1/0;for(let Q=0,ce=M.length;Q<ce;Q+=2){let fe=M[Q],me=M[Q+1];fe<U&&(U=fe),me<ie&&(ie=me),fe>j&&(j=fe),me>ve&&(ve=me)}}else U=j=ie=ve=0;R=F[le]={index:le,advanceWidth:w.hmtx.aWidth[le],xMin:U,yMin:ie,xMax:j,yMax:ve,path:V}}$.call(null,R,k+te[P*3]*Z,te[P*3+1]*Z,z),k+=te[P*3+2]*Z,K&&(k+=K*q)}z+=H.codePointAt(z)>65535?2:1}),k}};return N}return function(F){const T=new Uint8Array(F,0,4),S=s._bin.readASCII(T,0,4);if(S==="wOFF")F=e(F);else if(S==="wOF2")throw new Error("woff2 fonts not supported");return L(s.parse(F)[0])}}const k_=or({name:"Typr Font Parser",dependencies:[F_,O_,B_],init(s,e,t){const n=s(),i=e();return t(n,i)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function z_(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(_){var y=_>>5;this.buckets.set(y,(this.buckets.get(y)||0)|1<<(31&_))},e.prototype.has=function(_){var y=this.buckets.get(_>>5);return y!==void 0&&(y&1<<(31&_))!=0},e.prototype.serialize=function(){var _=[];return this.buckets.forEach(function(y,I){_.push((+I).toString(36)+":"+y.toString(36))}),_.join(",")},e.prototype.deserialize=function(_){var y=this;this.buckets.clear(),_.split(",").forEach(function(I){var L=I.split(":");y.buckets.set(parseInt(L[0],36),parseInt(L[1],36))})};var t=Math.pow(2,8),n=t-1,i=~n;function r(_){var y=function(L){return L&i}(_).toString(16),I=function(L){return(L&i)+t-1}(_).toString(16);return"codepoint-index/plane"+(_>>16)+"/"+y+"-"+I+".json"}function o(_,y){var I=_&n,L=y.codePointAt(I/6|0);return((L=(L||48)-48)&1<<I%6)!=0}function a(_,y){var I;(I=_,I.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(L){return L.split("-").map(function(w){return parseInt(w.trim(),16)})})).forEach(function(L){var w=L[0],F=L[1];F===void 0&&(F=w),y(w,F)})}function l(_,y){a(_,function(I,L){for(var w=I;w<=L;w++)y(w)})}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(_){var y=h.get(_);return y||(y=new e,l(_.ranges,function(I){return y.add(I)}),h.set(_,y)),y}var g,v=new Map;function p(_,y,I){return _[y]?y:_[I]?I:function(L){for(var w in L)return w}(_)}function m(_,y){var I=y;if(!_.includes(I)){I=1/0;for(var L=0;L<_.length;L++)Math.abs(_[L]-y)<Math.abs(I-y)&&(I=_[L])}return I}function b(_){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(y){g.add(y)})),g.has(_)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(_,y){y===void 0&&(y={});var I,L=y.lang;L===void 0&&(L=new RegExp("\\p{Script=Hangul}","u").test(I=_)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(I)?"ja":"en");var w=y.category;w===void 0&&(w="sans-serif");var F=y.style;F===void 0&&(F="normal");var T=y.weight;T===void 0&&(T=400);var S=(y.dataUrl||f).replace(/\/$/g,""),W=new Map,D=new Uint8Array(_.length),N={},H={},q=new Array(_.length),K=new Map,$=!1;function k(z){var te=v.get(z);return te||(te=fetch(S+"/"+z).then(function(le){if(!le.ok)throw new Error(le.statusText);return le.json().then(function(P){if(!Array.isArray(P)||P[0]!==1)throw new Error("Incorrect schema version; need 1, got "+P[0]);return P[1]})}).catch(function(le){if(S!==f)return $||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+S+'", trying default CDN. '+le.message),$=!0),S=f,v.delete(z),k(z);throw le}),v.set(z,te)),te}for(var Z=function(z){var te=_.codePointAt(z),le=r(te);q[z]=le,c[le]||K.has(le)||K.set(le,k(le).then(function(P){c[le]=P})),te>65535&&(z++,X=z)},X=0;X<_.length;X++)Z(X);return Promise.all(K.values()).then(function(){K.clear();for(var z=function(le){var P=_.codePointAt(le),R=null,C=c[q[le]],M=void 0;for(var V in C){var re=H[V];if(re===void 0&&(re=H[V]=new RegExp(V).test(L||"en")),re){for(var U in M=V,C[V])if(o(P,C[V][U])){R=U;break}break}}if(!R){e:for(var ie in C)if(ie!==M){for(var j in C[ie])if(o(P,C[ie][j])){R=j;break e}}}R||(console.debug("No font coverage for U+"+P.toString(16)),R="latin"),q[le]=R,u[R]||K.has(R)||K.set(R,k("font-meta/"+R+".json").then(function(ve){u[R]=ve})),P>65535&&(le++,te=le)},te=0;te<_.length;te++)z(te);return Promise.all(K.values())}).then(function(){for(var z,te=null,le=0;le<_.length;le++){var P=_.codePointAt(le);if(te&&(b(P)||d(te).has(P)))D[le]=D[le-1];else{te=u[q[le]];var R=N[te.id];if(!R){var C=te.typeforms,M=p(C,w,"sans-serif"),V=p(C[M],F,"normal"),re=m((z=C[M])===null||z===void 0?void 0:z[V],T);R=N[te.id]=S+"/font-files/"+te.id+"/"+M+"."+V+"."+re+".woff"}var U=W.get(R);U==null&&(U=W.size,W.set(R,U)),D[le]=U}P>65535&&(le++,D[le]=D[le-1])}return{fontUrls:Array.from(W.keys()),chars:D}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function G_(s,e){const t=Object.create(null),n=Object.create(null);function i(o,a){const l=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=o,a(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(o,a){let l=t[o];l?a(l):n[o]?n[o].push(a):(n[o]=[a],i(o,c=>{c.src=o,t[o]=c,n[o].forEach(u=>u(c)),delete n[o]}))}return function(o,a,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(o.length),g=[];o.length||b();const v=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(y=>!y.lang||y.lang.test(l)).reverse(),c.length){let w=0;(function F(T=0){for(let S=T,W=o.length;S<W;S++){const D=o.codePointAt(S);if(w===1&&g[d[S-1]].supportsCodePoint(D)||/\s/.test(o[S]))d[S]=d[S-1],w===2&&(p[p.length-1][1]=S);else for(let N=d[S],H=c.length;N<=H;N++)if(N===H){const q=w===2?p[p.length-1]:p[p.length]=[S,S];q[1]=S,w=2}else{d[S]=N;const{src:q,unicodeRange:K}=c[N];if(!K||_(D,K)){const $=t[q];if(!$){r(q,()=>{F(S)});return}if($.supportsCodePoint(D)){let k=v.get($);typeof k!="number"&&(k=g.length,g.push($),v.set($,k)),d[S]=k,w=1;break}}}D>65535&&S+1<W&&(d[S+1]=d[S],S++,w===2&&(p[p.length-1][1]=S))}m()})()}else p.push([0,o.length-1]),m();function m(){if(p.length){const y=p.map(I=>o.substring(I[0],I[1]+1)).join(`
`);e.getFontsForString(y,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:I,chars:L})=>{const w=g.length;let F=0;p.forEach(S=>{for(let W=0,D=S[1]-S[0];W<=D;W++)d[S[0]+W]=L[F++]+w;F++});let T=0;I.forEach((S,W)=>{r(S,D=>{g[W+w]=D,++T===I.length&&b()})})})}else b()}function b(){a({chars:d,fonts:g})}function _(y,I){for(let L=0;L<I.length;L++){const[w,F=w]=I[L];if(w<=y&&y<=F)return!0}return!1}}}const H_=or({name:"FontResolver",dependencies:[G_,k_,z_],init(s,e,t){return s(e,t())}});function V_(s,e){const n=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",r=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:v,fonts:p,style:m,weight:b,preResolvedFonts:_,unicodeFontsURL:y},I){const L=({chars:w,fonts:F})=>{let T,S;const W=[];for(let D=0;D<w.length;D++)w[D]!==S?(S=w[D],W.push(T={start:D,end:D,fontObj:F[w[D]]})):T.end=D;I(W)};_?L(_):s(g,L,{lang:v,fonts:p,style:m,weight:b,unicodeFontsURL:y})}function a({text:g="",font:v,lang:p,sdfGlyphSize:m=64,fontSize:b=400,fontWeight:_=1,fontStyle:y="normal",letterSpacing:I=0,lineHeight:L="normal",maxWidth:w=1/0,direction:F,textAlign:T="left",textIndent:S=0,whiteSpace:W="normal",overflowWrap:D="normal",anchorX:N=0,anchorY:H=0,metricsOnly:q=!1,unicodeFontsURL:K,preResolvedFonts:$=null,includeCaretPositions:k=!1,chunkedBoundsSize:Z=8192,colorRanges:X=null},z){const te=h(),le={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),b=+b,I=+I,w=+w,L=L||"normal",S=+S,o({text:g,lang:p,style:y,weight:_,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:K,preResolvedFonts:$},P=>{le.fontLoad=h()-te;const R=isFinite(w);let C=null,M=null,V=null,re=null,U=null,ie=null,j=null,ve=null,Q=0,ce=0,fe=W!=="nowrap";const me=new Map,G=h();let x=S,E=0,B=new f;const se=[B];P.forEach(pe=>{const{fontObj:Ee}=pe,{ascender:ge,descender:we,unitsPerEm:Ie,lineGap:Ce,capHeight:ye,xHeight:Re}=Ee;let be=me.get(Ee);if(!be){const J=b/Ie,_e=L==="normal"?(ge-we+Ce)*J:L*b,Ae=(_e-(ge-we)*J)/2,Ne=Math.min(_e,(ge-we)*J),Pe=(ge+we)/2*J+Ne/2;be={index:me.size,src:Ee.src,fontObj:Ee,fontSizeMult:J,unitsPerEm:Ie,ascender:ge*J,descender:we*J,capHeight:ye*J,xHeight:Re*J,lineHeight:_e,baseline:-Ae-ge*J,caretTop:Pe,caretBottom:Pe-Ne},me.set(Ee,be)}const{fontSizeMult:Oe}=be,Fe=g.slice(pe.start,pe.end+1);let A,ee;Ee.forEachGlyph(Fe,b,I,(J,_e,Ae,Ne)=>{_e+=E,Ne+=pe.start,A=_e,ee=J;const Pe=g.charAt(Ne),Xe=J.advanceWidth*Oe,Ye=B.count;let Ue;if("isEmpty"in J||(J.isWhitespace=!!Pe&&new RegExp(i).test(Pe),J.canBreakAfter=!!Pe&&r.test(Pe),J.isEmpty=J.xMin===J.xMax||J.yMin===J.yMax||n.test(Pe)),!J.isWhitespace&&!J.isEmpty&&ce++,fe&&R&&!J.isWhitespace&&_e+Xe+x>w&&Ye){if(B.glyphAt(Ye-1).glyphObj.canBreakAfter)Ue=new f,x=-_e;else for(let qe=Ye;qe--;)if(qe===0&&D==="break-word"){Ue=new f,x=-_e;break}else if(B.glyphAt(qe).glyphObj.canBreakAfter){Ue=B.splitAt(qe+1);const nt=Ue.glyphAt(0).x;x-=nt;for(let $e=Ue.count;$e--;)Ue.glyphAt($e).x-=nt;break}Ue&&(B.isSoftWrapped=!0,B=Ue,se.push(B),Q=w)}let We=B.glyphAt(B.count);We.glyphObj=J,We.x=_e+x,We.y=Ae,We.width=Xe,We.charIndex=Ne,We.fontData=be,Pe===`
`&&(B=new f,se.push(B),x=-(_e+Xe+I*b)+S)}),E=A+ee.advanceWidth*Oe+I*b});let ne=0;se.forEach(pe=>{let Ee=!0;for(let ge=pe.count;ge--;){const we=pe.glyphAt(ge);Ee&&!we.glyphObj.isWhitespace&&(pe.width=we.x+we.width,pe.width>Q&&(Q=pe.width),Ee=!1);let{lineHeight:Ie,capHeight:Ce,xHeight:ye,baseline:Re}=we.fontData;Ie>pe.lineHeight&&(pe.lineHeight=Ie);const be=Re-pe.baseline;be<0&&(pe.baseline+=be,pe.cap+=be,pe.ex+=be),pe.cap=Math.max(pe.cap,pe.baseline+Ce),pe.ex=Math.max(pe.ex,pe.baseline+ye)}pe.baseline-=ne,pe.cap-=ne,pe.ex-=ne,ne+=pe.lineHeight});let oe=0,xe=0;if(N&&(typeof N=="number"?oe=-N:typeof N=="string"&&(oe=-Q*(N==="left"?0:N==="center"?.5:N==="right"?1:c(N)))),H&&(typeof H=="number"?xe=-H:typeof H=="string"&&(xe=H==="top"?0:H==="top-baseline"?-se[0].baseline:H==="top-cap"?-se[0].cap:H==="top-ex"?-se[0].ex:H==="middle"?ne/2:H==="bottom"?ne:H==="bottom-baseline"?-se[se.length-1].baseline:c(H)*ne)),!q){const pe=e.getEmbeddingLevels(g,F);C=new Uint16Array(ce),M=new Uint8Array(ce),V=new Float32Array(ce*2),re={},j=[1/0,1/0,-1/0,-1/0],ve=[],k&&(ie=new Float32Array(g.length*4)),X&&(U=new Uint8Array(ce*3));let Ee=0,ge=-1,we=-1,Ie,Ce;if(se.forEach((ye,Re)=>{let{count:be,width:Oe}=ye;if(be>0){let Fe=0;for(let Ne=be;Ne--&&ye.glyphAt(Ne).glyphObj.isWhitespace;)Fe++;let A=0,ee=0;if(T==="center")A=(Q-Oe)/2;else if(T==="right")A=Q-Oe;else if(T==="justify"&&ye.isSoftWrapped){let Ne=0;for(let Pe=be-Fe;Pe--;)ye.glyphAt(Pe).glyphObj.isWhitespace&&Ne++;ee=(Q-Oe)/Ne}if(ee||A){let Ne=0;for(let Pe=0;Pe<be;Pe++){let Xe=ye.glyphAt(Pe);const Ye=Xe.glyphObj;Xe.x+=A+Ne,ee!==0&&Ye.isWhitespace&&Pe<be-Fe&&(Ne+=ee,Xe.width+=ee)}}const J=e.getReorderSegments(g,pe,ye.glyphAt(0).charIndex,ye.glyphAt(ye.count-1).charIndex);for(let Ne=0;Ne<J.length;Ne++){const[Pe,Xe]=J[Ne];let Ye=1/0,Ue=-1/0;for(let We=0;We<be;We++)if(ye.glyphAt(We).charIndex>=Pe){let qe=We,nt=We;for(;nt<be;nt++){let $e=ye.glyphAt(nt);if($e.charIndex>Xe)break;nt<be-Fe&&(Ye=Math.min(Ye,$e.x),Ue=Math.max(Ue,$e.x+$e.width))}for(let $e=qe;$e<nt;$e++){const ct=ye.glyphAt($e);ct.x=Ue-(ct.x+ct.width-Ye)}break}}let _e;const Ae=Ne=>_e=Ne;for(let Ne=0;Ne<be;Ne++){const Pe=ye.glyphAt(Ne);_e=Pe.glyphObj;const Xe=_e.index,Ye=pe.levels[Pe.charIndex]&1;if(Ye){const Ue=e.getMirroredCharacter(g[Pe.charIndex]);Ue&&Pe.fontData.fontObj.forEachGlyph(Ue,0,0,Ae)}if(k){const{charIndex:Ue,fontData:We}=Pe,qe=Pe.x+oe,nt=Pe.x+Pe.width+oe;ie[Ue*4]=Ye?nt:qe,ie[Ue*4+1]=Ye?qe:nt,ie[Ue*4+2]=ye.baseline+We.caretBottom+xe,ie[Ue*4+3]=ye.baseline+We.caretTop+xe;const $e=Ue-ge;$e>1&&u(ie,ge,$e),ge=Ue}if(X){const{charIndex:Ue}=Pe;for(;Ue>we;)we++,X.hasOwnProperty(we)&&(Ce=X[we])}if(!_e.isWhitespace&&!_e.isEmpty){const Ue=Ee++,{fontSizeMult:We,src:qe,index:nt}=Pe.fontData,$e=re[qe]||(re[qe]={});$e[Xe]||($e[Xe]={path:_e.path,pathBounds:[_e.xMin,_e.yMin,_e.xMax,_e.yMax]});const ct=Pe.x+oe,gt=Pe.y+ye.baseline+xe;V[Ue*2]=ct,V[Ue*2+1]=gt;const Ct=ct+_e.xMin*We,Nt=gt+_e.yMin*We,on=ct+_e.xMax*We,Wt=gt+_e.yMax*We;Ct<j[0]&&(j[0]=Ct),Nt<j[1]&&(j[1]=Nt),on>j[2]&&(j[2]=on),Wt>j[3]&&(j[3]=Wt),Ue%Z===0&&(Ie={start:Ue,end:Ue,rect:[1/0,1/0,-1/0,-1/0]},ve.push(Ie)),Ie.end++;const yt=Ie.rect;if(Ct<yt[0]&&(yt[0]=Ct),Nt<yt[1]&&(yt[1]=Nt),on>yt[2]&&(yt[2]=on),Wt>yt[3]&&(yt[3]=Wt),C[Ue]=Xe,M[Ue]=nt,X){const dn=Ue*3;U[dn]=Ce>>16&255,U[dn+1]=Ce>>8&255,U[dn+2]=Ce&255}}}}}),ie){const ye=g.length-ge;ye>1&&u(ie,ge,ye)}}const Me=[];me.forEach(({index:pe,src:Ee,unitsPerEm:ge,ascender:we,descender:Ie,lineHeight:Ce,capHeight:ye,xHeight:Re})=>{Me[pe]={src:Ee,unitsPerEm:ge,ascender:we,descender:Ie,lineHeight:Ce,capHeight:ye,xHeight:Re}}),le.typesetting=h()-G,z({glyphIds:C,glyphFontIndices:M,glyphPositions:V,glyphData:re,fontData:Me,caretPositions:ie,glyphColors:U,chunkedBounds:ve,fontSize:b,topBaseline:xe+se[0].baseline,blockBounds:[oe,xe-ne,oe+Q,xe],visibleBounds:j,timings:le})})}function l(g,v){a({...g,metricsOnly:!0},p=>{const[m,b,_,y]=p.blockBounds;v({width:_-m,height:y-b})})}function c(g){let v=g.match(/^([\d.]+)%$/),p=v?parseFloat(v[1]):NaN;return isNaN(p)?0:p/100}function u(g,v,p){const m=g[v*4],b=g[v*4+1],_=g[v*4+2],y=g[v*4+3],I=(b-m)/p;for(let L=0;L<p;L++){const w=(v+L)*4;g[w]=m+I*L,g[w+1]=m+I*(L+1),g[w+2]=_,g[w+3]=y}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let v=f.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new f;return v.data=this.data.splice(g*d.length),v}},f.flyweight=d.reduce((g,v,p,m)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*d.length+p]},set(b){this.data[this.index*d.length+p]=b}}),g),{data:null,index:0}),{typeset:a,measure:l}}const hi=()=>(self.performance||Date).now(),io=xh();let ou;function W_(s,e,t,n,i,r,o,a,l,c,u=!0){return u?j_(s,e,t,n,i,r,o,a,l,c).then(null,h=>(ou||(console.warn("WebGL SDF generation failed, falling back to JS",h),ou=!0),lu(s,e,t,n,i,r,o,a,l,c))):lu(s,e,t,n,i,r,o,a,l,c)}const Os=[],X_=5;let Ra=0;function Sh(){const s=hi();for(;Os.length&&hi()-s<X_;)Os.shift()();Ra=Os.length?setTimeout(Sh,0):0}const j_=(...s)=>new Promise((e,t)=>{Os.push(()=>{const n=hi();try{io.webgl.generateIntoCanvas(...s),e({timing:hi()-n})}catch(i){t(i)}}),Ra||(Ra=setTimeout(Sh,0))}),Y_=4,q_=2e3,au={};let K_=0;function lu(s,e,t,n,i,r,o,a,l,c){const u="TroikaTextSDFGenerator_JS_"+K_++%Y_;let h=au[u];return h||(h=au[u]={workerModule:or({name:u,workerId:u,dependencies:[xh,hi],init(f,d){const g=f().javascript.generate;return function(...v){const p=d();return{textureData:g(...v),timing:d()-p}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,n,i,r).then(({textureData:f,timing:d})=>{const g=hi(),v=new Uint8Array(f.length*4);for(let p=0;p<f.length;p++)v[p*4+c]=f[p];return io.webglUtils.renderImageData(o,v,a,l,s,e,1<<3-c),d+=hi()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{w_(u)},q_)),{timing:d}})}function Z_(s){s._warm||(io.webgl.isSupported(s),s._warm=!0)}const J_=io.webglUtils.resizeWebGLCanvasWithoutClearing,Tr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Q_=new Ze;function zi(){return(self.performance||Date).now()}const cu=Object.create(null);function $_(s,e){s=tx({},s);const t=zi(),n=[];if(s.font&&n.push({label:"user",src:nx(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Tr.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Tr.unicodeFontsURL,s.colorRanges!=null){let h={};for(let f in s.colorRanges)if(s.colorRanges.hasOwnProperty(f)){let d=s.colorRanges[f];typeof d!="number"&&(d=Q_.set(d).getHex()),h[f]=d}s.colorRanges=h}Object.freeze(s);const{textureWidth:i,sdfExponent:r}=Tr,{sdfGlyphSize:o}=s,a=i/o*4;let l=cu[o];if(!l){const h=document.createElement("canvas");h.width=i,h.height=o*256/a,l=cu[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:h,sdfTexture:new Rt(h,void 0,void 0,void 0,Ht,Ht),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,ex(l)}const{sdfTexture:c,sdfCanvas:u}=l;rx(s).then(h=>{const{glyphIds:f,glyphFontIndices:d,fontData:g,glyphPositions:v,fontSize:p,timings:m}=h,b=[],_=new Float32Array(f.length*4);let y=0,I=0;const L=zi(),w=g.map(D=>{let N=l.glyphsByFont.get(D.src);return N||l.glyphsByFont.set(D.src,N=new Map),N});f.forEach((D,N)=>{const H=d[N],{src:q,unitsPerEm:K}=g[H];let $=w[H].get(D);if(!$){const{path:te,pathBounds:le}=h.glyphData[q][D],P=Math.max(le[2]-le[0],le[3]-le[1])/o*(Tr.sdfMargin*o+.5),R=l.glyphCount++,C=[le[0]-P,le[1]-P,le[2]+P,le[3]+P];w[H].set(D,$={path:te,atlasIndex:R,sdfViewBox:C}),b.push($)}const{sdfViewBox:k}=$,Z=v[I++],X=v[I++],z=p/K;_[y++]=Z+k[0]*z,_[y++]=X+k[1]*z,_[y++]=Z+k[2]*z,_[y++]=X+k[3]*z,f[N]=$.atlasIndex}),m.quads=(m.quads||0)+(zi()-L);const F=zi();m.sdf={};const T=u.height,S=Math.ceil(l.glyphCount/a),W=Math.pow(2,Math.ceil(Math.log2(S*o)));W>T&&(console.info(`Increasing SDF texture size ${T}->${W}`),J_(u,i,W),c.dispose()),Promise.all(b.map(D=>Mh(D,l,s.gpuAccelerateSDF).then(({timing:N})=>{m.sdf[D.atlasIndex]=N}))).then(()=>{b.length&&!l.contextLost&&(Eh(l),c.needsUpdate=!0),m.sdfTotal=zi()-F,m.total=zi()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:o,sdfExponent:r,glyphBounds:_,glyphAtlasIndices:f,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{l.contextLost||Z_(u)})}function Mh({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},o){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=Tr,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(a/n)*n,f=Math.floor(u/(a/n))*n,d=e%4;return W_(n,n,s,t,c,l,i,h,f,d,o)}function ex(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const n=[];s.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(Mh(r,s,!0))})}),Promise.all(n).then(()=>{Eh(s),s.sdfTexture.needsUpdate=!0})})}function tx(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let Ds;function nx(s){return Ds||(Ds=typeof document>"u"?{}:document.createElement("a")),Ds.href=s,Ds.href}function Eh(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:n,height:i}=e,r=s.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==n*i*4)&&(o=new Uint8Array(n*i*4),t.image={width:n,height:i,data:o},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,o)}}const ix=or({name:"Typesetter",dependencies:[V_,H_,R_],init(s,e,t){return s(e,t())}}),rx=or({name:"Typesetter",dependencies:[ix],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}}),uu={};function sx(s){let e=uu[s];if(!e){const t=new Rn(1,1,s,s),n=t.clone(),i=t.attributes,r=n.attributes,o=new Vt,a=i.uv.count;for(let l=0;l<a;l++)r.position.array[l*3]*=-1,r.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{o.setAttribute(l,new Et([...i[l].array,...r[l].array],i[l].itemSize))}),o.setIndex([...t.index.array,...n.index.array.map(l=>l+a)]),o.translate(.5,.5,0),e=uu[s]=o}return e}const ox="aTroikaGlyphBounds",hu="aTroikaGlyphIndex",ax="aTroikaGlyphColor";class lx extends m_{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Vr,this.boundingBox=new gi}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Ut?t/2:0,e===Gt?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=sx(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,r){ra(this,ox,e,4),ra(this,hu,t,1),ra(this,ax,r,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:r,min:o,max:a,sin:l,cos:c}=Math,u=i/2,h=i*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,v=r((d+u)/h)!==r((g+u)/h)?-f:o(l(d)*f,l(g)*f),p=r((d-u)/h)!==r((g-u)/h)?f:a(l(d)*f,l(g)*f),m=r((d+i)/h)!==r((g+i)/h)?f*2:a(f-c(d)*f,f-c(g)*f);n.min.set(v,e[1],t<0?-m:0),n.max.set(p,e[3],t<0?0:m)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(hu).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let r=n[i].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}}function ra(s,e,t,n){const i=s.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(s.setAttribute(e,new bv(t,n)),delete s._maxInstanceCount,s.dispose()):i&&s.deleteAttribute(e)}const cx=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,ux=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,hx=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,fx=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function dx(s){const e=Aa(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Se},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ft(0,0,0,0)},uTroikaClipRect:{value:new ft(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Se},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ze},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new He},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:cx,vertexTransform:ux,fragmentDefs:hx,fragmentColorTransform:fx,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(yh,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Xa=new Wr({color:16777215,side:Gt,transparent:!0}),fu=8421504,du=new rt,Is=new Y,sa=new Y,Er=[],px=new Y,oa="+x+y";function pu(s){return Array.isArray(s)?s[0]:s}let bh=()=>{const s=new At(new Rn(1,1),Xa);return bh=()=>s,s},Th=()=>{const s=new At(new Rn(1,1,32,1),Xa);return Th=()=>s,s};const mx={type:"syncstart"},gx={type:"synccomplete"},wh=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],vx=wh.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Ah extends At{constructor(){const e=new lx;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=fu,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=oa,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(mx),$_({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent(gx),e&&e()})))}onBeforeRender(e,t,n,i,r,o){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r),r._hadOwnSide=r.hasOwnProperty("side"),this.geometry.setSide(r._actualSide=r.side),r.side=Tn}onAfterRender(e,t,n,i,r,o){r._hadOwnSide?r.side=r._actualSide:delete r.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Xa.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=dx(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return pu(this.material).getDepthMaterial()}get customDistanceMaterial(){return pu(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:a,blockBounds:l}=i;n.uTroikaSDFTexture.value=a,n.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(l),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,u=0,h=0,f,d,g,v=0,p=0;if(t){let{outlineWidth:b,outlineOffsetX:_,outlineOffsetY:y,outlineBlur:I,outlineOpacity:L}=this;c=this._parsePercent(b)||0,u=Math.max(0,this._parsePercent(I)||0),f=L,v=this._parsePercent(_)||0,p=this._parsePercent(y)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,n.uTroikaStrokeColor.value.set(g??fu),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;n.uTroikaDistanceOffset.value=c,n.uTroikaPositionOffset.value.set(v,p),n.uTroikaBlurRadius.value=u,n.uTroikaStrokeWidth.value=h,n.uTroikaStrokeOpacity.value=d,n.uTroikaFillOpacity.value=f??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)n.uTroikaClipRect.value.fromArray(m);else{const b=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(l[0]-b,l[1]-b,l[2]+b,l[3]+b)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const a=e.hasOwnProperty("color")?e.color:e.color=new Ze;(r!==a._input||typeof r=="object")&&a.set(a._input=r)}let o=this.orientation||oa;if(o!==e._orientation){let a=n.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==oa&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;Is.set(0,0,0)[u]=c==="-"?1:-1,sa.set(0,0,0)[f]=h==="-"?-1:1,du.lookAt(px,Is.cross(sa),sa),a.setFromMatrix4(du)}else a.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Se){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new Se){return Is.copy(e),this.localPositionToTextCoords(this.worldToLocal(Is),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const r=n.blockBounds,o=i?Th():bh(),a=o.geometry,{position:l,uv:c}=a.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const f=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;i&&(d=i-Math.cos(h/i)*i,h=Math.sin(h/i)*i),l.setXYZ(u,h,f,d)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,Er.length=0,o.raycast(e,Er);for(let u=0;u<Er.length;u++)Er[u].object=this,t.push(Er[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,vx.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}wh.forEach(s=>{const e="_private_"+s;Object.defineProperty(Ah.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});const Gr=["#f7f3e8","#e23d28","#1f5fbf","#f4c430","#111111"];function An(s,e){return s+Math.random()*(e-s)}function jn(s,e){return Math.floor(An(s,e+1))}function _x(s){return s[Math.floor(Math.random()*s.length)]}function qs(s=Gr){const e=s[0]??Gr[0],t=s.slice(1),n=[e,e,e,e,e,...t];return _x(n)}function Rh(s){const e=new Ze(s);return e.r*.2126+e.g*.7152+e.b*.0722<.45}const aa=new Map,la=new Map,ca=new Map,xx=[{max:350,url:"/fonts/UniversLight.ttf",weight:300},{max:550,url:"/fonts/UniversRegular.ttf",weight:400},{max:1/0,url:"/fonts/UniversBold.ttf",weight:700}];function Ch(s,e){const t=new zn;t.userData.blockData=s;const n=new rr(s.worldW,s.height,s.worldD),i=new gh({color:s.color,roughness:.64,metalness:.02,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),r=new At(n,i);r.position.y=s.height/2,r.castShadow=!0,r.receiveShadow=!0,r.userData.blockData=s,r.userData.isBlockMesh=!0,r.userData.originalHeight=s.height,r.userData.originalY=s.height/2,t.add(r);const o=new wv(new zv(n),new lh({color:1118481}));o.renderOrder=2,r.add(o);const a=yx(s,e);return a&&r.add(a),t.position.set(s.worldX,0,s.worldZ),t.userData.mesh=r,t.userData.blockData=s,t}function yx(s,e){var t,n;return s.type==="filler"?null:(t=s.content)!=null&&t.iconSrc?Sx(s):s.subtype==="image"&&((n=s.content)!=null&&n.src)?Ax(s,e):Ph(s)}function Sx(s,e){const t=new zn,n=Ph(s);return n&&t.add(n),Mx(s).then(i=>{n&&(n.visible=!1),t.add(i)}).catch(()=>{n&&(n.visible=!0)}),t}async function Mx(s){const e=s.content.iconSrc,t=await Ex(e),n=new zn,i=new Wr({color:Lx(s.color),side:Gt,depthWrite:!1,toneMapped:!1});t.paths.forEach(h=>{no.createShapes(h).forEach(f=>{const d=new Wa(f),g=new At(d,i);n.add(g)})});const r=new gi().setFromObject(n),o=r.getSize(new Y),a=r.getCenter(new Y),l=s.worldW*.34,c=s.worldD*.34,u=Math.min(l/Math.max(o.x,.001),c/Math.max(o.y,.001));return n.children.forEach(h=>{h.geometry.translate(-a.x,-a.y,0)}),n.scale.set(u,-u,u),n.rotation.x=-Math.PI/2,n.position.set(0,s.height/2+.03,0),n.renderOrder=3,n}function Ex(s){if(ca.has(s))return ca.get(s);const e=new no,t=new Promise((n,i)=>{e.load(s,n,void 0,i)});return ca.set(s,t),t}function Ph(s){var n,i;const e=((n=s.content)==null?void 0:n.label)??((i=s.content)==null?void 0:i.text)??"";if(!e)return null;const t=new Ah;return t.text=e,t.font=Tx(s),t.fontWeight=Lh(s),t.fontSize=Ix(s),t.maxWidth=Math.max(.2,s.worldW-.28),t.textAlign="center",t.color=bx(s.color),t.anchorX="center",t.anchorY="middle",t.position.set(0,s.height/2+.018,0),t.rotation.x=-Math.PI/2,t.sync(),t}function bx(s){const e=new Ze(s);return e.r>.55&&e.g<.35&&e.b<.3?1118481:Rh(s)?16249832:1118481}function Tx(s){const e=Lh(s);return xx.find(t=>e<=t.max).url}function Lh(s){var e;return Number(((e=s.content)==null?void 0:e.fontWeight)??s.fontWeight??wx(s))}function wx(s){return s.subtype==="header"||s.type==="interaction"||s.type==="moreInfo"?700:400}function Ax(s,e,t={}){const n=t.src??s.content.src,i=t.scale??.88,r=new At(new Rn(s.worldW*i,s.worldD*i),new Wr({color:16777215,transparent:t.transparent??!1,alphaTest:t.transparent?.08:0,depthWrite:!t.transparent,toneMapped:!1,side:Gt}));return r.rotation.x=-Math.PI/2,r.position.set(0,s.height/2+.024,0),Rx(n,e,t).then(o=>{o.colorSpace=zt,o.wrapS=Mn,o.wrapT=Mn,t.fit==="contain"?Dx(o,s.worldW,s.worldD):Ux(o,s.worldW,s.worldD),r.material.map=o,r.material.needsUpdate=!0,r.visible=!0,r.userData.fallbackText&&(r.userData.fallbackText.visible=!1)}).catch(()=>{r.material.color.set(14209732)}),r}function Rx(s,e,t={}){const n=t.tint?`${s}:${t.tint}`:s;if(aa.has(n))return aa.get(n);const i=Cx(s,t).then(r=>new Promise((o,a)=>{e.load(r,o,void 0,a)}));return aa.set(n,i),i}function Cx(s,e){if(!e.tint||!s.endsWith(".svg"))return Promise.resolve(s);const t=`${s}:${e.tint}`;if(la.has(t))return la.get(t);const n=fetch(s).then(i=>{if(!i.ok)throw new Error(`Failed to load SVG icon: ${s}`);return i.text()}).then(i=>{const r=Px(i,e.tint);return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`});return la.set(t,n),n}function Px(s,e){const t=/\sfill=/.test(s),n=/\sstroke=/.test(s);let i=s.replace(/fill="(?!none)[^"]*"/g,`fill="${e}"`).replace(/stroke="(?!none)[^"]*"/g,`stroke="${e}"`);return!t&&!n&&(i=i.replace("<svg",`<svg fill="${e}"`)),i}function Lx(s){const e=new Ze(s);return e.b>.45&&e.r<.35||Rh(s)?"#f7f3e8":"#111111"}function Ux(s,e,t){const n=s.image;if(!(n!=null&&n.width)||!(n!=null&&n.height))return;const i=n.width/n.height,r=e/t;s.center.set(.5,.5),i>r?s.repeat.set(r/i,1):s.repeat.set(1,i/r)}function Dx(s,e,t){const n=s.image;if(!(n!=null&&n.width)||!(n!=null&&n.height))return;const i=n.width/n.height,r=e/t;s.center.set(.5,.5),i>r?s.repeat.set(1,i/r):s.repeat.set(r/i,1)}function Ix(s){var e;return(e=s.content)!=null&&e.fontSize?Number(s.content.fontSize):s.subtype==="header"?Math.min(.44,s.worldW*.18):s.type==="interaction"||s.type==="moreInfo"?Math.min(.28,s.worldW*.16):Math.min(.22,s.worldW*.12)}const mu={cols:6,rows:10,worldWidth:7.2,worldDepth:10,gap:.08},er={content:{min:1.6,max:1.9},filler:{min:.9,max:1.7},fillerRing:{min:.3,max:.8}},gu={small:[[1,1],[2,1]],medium:[[2,2]],large:[[3,3]],wide:[[4,2]],shortWide:[[4,1],[3,1]],tall:[[2,4]]};function Uh(s,e={}){const t=e.isMobile??!0,n=mu,i=s.palette??Gr,r=e.fillerRings??2;if(s.template==="projectDetail")return[...Nx(s,n,i),...vu(n,i,r)].map(c=>_u(c,n));const o=ja(n.cols,n.rows),a=[];for(const l of s.blocks??[]){const c=kx(l,o,n,i);c&&a.push(c)}return a.push(...zx(o,n,i,s)),a.push(...vu(n,i,r)),a.map(l=>_u(l,n))}function Nx(s,e,t){var u;const i=e.rows*2,r=ja(e.cols,i),o=[],a=s.projectDetails??{},l=h=>{jr(h.gridX,h.gridYUnit,h.gridW,h.gridHUnit,r),o.push({...h,gridY:h.gridYUnit/2,gridH:h.gridHUnit/2,height:h.height??Dh(h.type),color:h.color??Ih(h,t)})};l({id:`${s.id}-back`,type:"interaction",subtype:"text",gridX:0,gridYUnit:0,gridW:1,gridHUnit:2,content:{label:"BACK",fontWeight:700},action:{type:"state",target:"projects"}}),l({id:`${s.id}-title`,type:"content",subtype:"header",gridX:An(0,1)>.5?1:2,gridYUnit:0,gridW:4,gridHUnit:4,content:{text:a.title??s.title??s.id,fontWeight:700},color:t[0]}),l({id:`${s.id}-tags-label`,type:"content",subtype:"text",gridX:0,gridYUnit:2,gridW:1,gridHUnit:1,content:{text:"TAGS",fontWeight:700},color:t[0],height:Ka()}),Fx({page:s,details:a,occupancy:r,palette:t,addBlock:l}),l({id:`${s.id}-hero`,type:"content",subtype:"image",gridX:1,gridYUnit:4,gridW:4,gridHUnit:8,content:{src:a.image??"/images/project-placeholder.jpg",alt:`${a.title??s.id} hero image`},color:t[0]});const c=a.textBlocks??[];return c[0]&&l({id:`${s.id}-text-wide`,type:"content",subtype:"text",gridX:1,gridYUnit:12,gridW:4,gridHUnit:4,content:{text:c[0],fontWeight:300},color:t[0]}),c[1]&&l({id:`${s.id}-text-tall`,type:"content",subtype:"text",gridX:1,gridYUnit:16,gridW:2,gridHUnit:4,content:{text:c[1],fontWeight:300},color:t[0]}),l({id:`${s.id}-more`,type:"moreInfo",subtype:"text",gridX:4,gridYUnit:16,gridW:2,gridHUnit:4,content:{label:"MORE INFO",fontWeight:700},modal:a.modal??{title:a.title??s.id,sections:[{type:"text",content:c.join(`

`)}]}}),(u=a.link)!=null&&u.url&&l({id:`${s.id}-link`,type:"interaction",subtype:"text",gridX:3,gridYUnit:18,gridW:1,gridHUnit:2,content:{label:a.link.label??"LINK",fontWeight:700},action:{type:"link",url:a.link.url}}),o.push(...Ox(r,e,t)),o}function Fx({page:s,details:e,occupancy:t,palette:n,addBlock:i}){const r=xu(Array.from({length:14},(a,l)=>l+3));xu([...e.tags??[]]).forEach((a,l)=>{const c=r[l];c===void 0||!Ca(0,c,1,1,t,{cols:6,rows:20})||i({id:`${s.id}-tag-${l}`,type:"interaction",subtype:"text",gridX:0,gridYUnit:c,gridW:1,gridHUnit:1,content:{text:a,fontWeight:700},action:{type:"tag",tag:a},color:qs(n),height:Ka()})});for(let a=3;a<18;a+=An(0,1)>.25?2:1){const l=An(0,1)>.25?2:1;Ca(0,a,1,l,t,{cols:6,rows:20})&&i({id:`${s.id}-tag-filler-${a}`,type:"filler",subtype:"decorative",gridX:0,gridYUnit:a,gridW:1,gridHUnit:l,content:null,action:null,modal:null,color:qs(n),height:ro()})}}function Ox(s,e,t){const n=[];let i=0;const r={cols:e.cols,rows:e.rows*2};for(let o=0;o<r.rows;o+=1)for(let a=0;a<r.cols;a+=1){if(a>0&&o%2!==0||s[o][a])continue;const l=Ya(a,o,s,r),c=jn(1,Math.min(l,3)),u=qa(a,o,c,s,r),h=a===0?Math.min(u,4):Math.floor(Math.min(u,4)/2)*2;if(h<1)continue;const f=a===0?Bx(h):jn(1,Math.max(1,h/2))*2;jr(a,o,c,f,s),n.push({id:`project-detail-filler-${i}`,type:"filler",subtype:"decorative",gridX:a,gridY:o/2,gridW:c,gridH:f/2,height:ro(),color:qs(t),content:null,action:null,modal:null}),i+=1}return n}function Bx(s){return An(0,1)>.25&&s>=2?jn(1,Math.max(1,Math.floor(s/2)))*2:1}function kx(s,e,t,n){const i=gu[s.size]??gu.medium;for(const[r,o]of i){const a=Hx(s.placement,t,r,o),l=Vx(t,r,o),c=[...a,...l];for(const u of c)if(Ca(u.x,u.y,r,o,e,t))return jr(u.x,u.y,r,o,e),{...s,gridX:u.x,gridY:u.y,gridW:r,gridH:o,height:Dh(s.type),color:Ih(s,n)}}return null}function zx(s,e,t,n){const i=[];let r=0;for(let o=0;o<e.rows;o+=1)for(let a=0;a<e.cols;a+=1){if(s[o][a])continue;const l=Ya(a,o,s,e),c=jn(1,Math.min(l,3)),u=qa(a,o,c,s,e),h=jn(1,Math.min(u,3));jr(a,o,c,h,s);const f={id:`filler-${r}`,type:"filler",subtype:"decorative",gridX:a,gridY:o,gridW:c,gridH:h,height:ro(),color:qs(t),content:null,action:null,modal:null};Gx(n,f)&&(f.carouselDynamic=!0),i.push(f),r+=1}return i}function Gx(s,e){return(s.id==="projects"||s.template==="projectList")&&e.gridY>=2&&e.gridY<=7}function vu(s,e,t){if(t<=0)return[];const n=[],i=e[0]??Gr[0],r=Math.floor(t),o={cols:s.cols+r*2,rows:s.rows+r*2},a=ja(o.cols,o.rows);let l=0;for(let c=0;c<o.rows;c+=1)for(let u=0;u<o.cols;u+=1){const h=u-r,f=c-r;if(h>=0&&h<s.cols&&f>=0&&f<s.rows){a[c][u]=!0;continue}if(a[c][u]||An(0,1)<.18)continue;const g=Ya(u,c,a,o),v=jn(1,Math.min(g,2)),p=qa(u,c,v,a,o),m=jn(1,Math.min(p,2));jr(u,c,v,m,a),n.push({id:`outer-filler-${l}`,type:"filler",subtype:"outerDecorative",gridX:h,gridY:f,gridW:v,gridH:m,height:Wx(),color:i,content:null,action:null,modal:null}),l+=1}return n}function _u(s,e){const t=e.worldWidth/e.cols,n=e.worldDepth/e.rows,i=Math.max(.1,s.gridW*t-e.gap),r=Math.max(.1,s.gridH*n-e.gap);return{...s,worldX:s.gridX*t+s.gridW*t/2-e.worldWidth/2,worldZ:s.gridY*n+s.gridH*n/2-e.worldDepth/2,worldW:i,worldD:r}}function ja(s,e){return Array.from({length:e},()=>Array.from({length:s},()=>!1))}function Ca(s,e,t,n,i,r){if(s<0||e<0||s+t>r.cols||e+n>r.rows)return!1;for(let o=e;o<e+n;o+=1)for(let a=s;a<s+t;a+=1)if(i[o][a])return!1;return!0}function jr(s,e,t,n,i){for(let r=e;r<e+n;r+=1)for(let o=s;o<s+t;o+=1)i[r][o]=!0}function Hx(s,e,t,n){const i=e.cols-t,r=e.rows-n,o=Math.round(i/2),a=Math.round(r/2),l={hero:[[1,1],[o,1],[0,1]],top:[[o,0],[0,0],[i,0]],topRight:[[i,0],[i,1],[Math.max(0,i-1),0],[i,2]],projectCounter:[[i,2],[i,1],[Math.max(0,i-1),2]],projectRow1Title:[[0,3],[1,3],[0,2]],projectRow1TitleRight:[[1,3],[2,3],[1,2]],projectRow1TitleFarRight:[[2,3],[1,3],[2,2]],projectRow1ThumbLeft:[[0,3],[0,2],[1,3]],projectRow1ThumbLeftInset:[[1,3],[1,2],[0,3]],projectRow1Thumb:[[4,3],[5,3],[4,2]],projectRow1ThumbFarRight:[[5,3],[5,2],[4,3]],projectRow2Title:[[0,4],[1,4],[0,5]],projectRow2TitleRight:[[1,4],[2,4],[1,5]],projectRow2TitleFarRight:[[2,4],[1,4],[2,5]],projectRow2ThumbLeft:[[0,4],[0,5],[1,4]],projectRow2ThumbLeftInset:[[1,4],[1,5],[0,4]],projectRow2Thumb:[[4,4],[5,4],[4,5]],projectRow2ThumbFarRight:[[5,4],[5,5],[4,4]],projectRow3Title:[[0,5],[1,5],[0,6]],projectRow3TitleRight:[[1,5],[2,5],[1,6]],projectRow3TitleFarRight:[[2,5],[1,5],[2,6]],projectRow3ThumbLeft:[[0,5],[0,6],[1,5]],projectRow3ThumbLeftInset:[[1,5],[1,6],[0,5]],projectRow3Thumb:[[4,5],[5,5],[4,6]],projectRow3ThumbFarRight:[[5,5],[5,6],[4,5]],projectRow4Title:[[0,6],[1,6],[0,7]],projectRow4TitleRight:[[1,6],[2,6],[1,7]],projectRow4TitleFarRight:[[2,6],[1,6],[2,7]],projectRow4ThumbLeft:[[0,6],[0,7],[1,6]],projectRow4ThumbLeftInset:[[1,6],[1,7],[0,6]],projectRow4Thumb:[[4,6],[5,6],[4,7]],projectRow4ThumbFarRight:[[5,6],[5,7],[4,6]],projectRow5Title:[[0,7],[1,7],[0,6]],projectRow5TitleRight:[[1,7],[2,7],[1,6]],projectRow5TitleFarRight:[[2,7],[1,7],[2,6]],projectRow5ThumbLeft:[[0,7],[0,6],[1,7]],projectRow5ThumbLeftInset:[[1,7],[1,6],[0,7]],projectRow5Thumb:[[4,7],[5,7],[4,6]],projectRow5ThumbFarRight:[[5,7],[5,6],[4,7]],projectPrev:[[Math.max(0,o-1),Math.max(0,r-1)],[Math.max(0,o-2),Math.max(0,r-1)]],projectNext:[[Math.min(i,o+1),Math.max(0,r-1)],[Math.min(i,o+2),Math.max(0,r-1)]],topLeftStack1:[[0,0],[1,0],[0,1]],topLeftStack2:[[0,1],[1,1],[0,2]],topLeftStack3:[[0,2],[1,2],[0,3]],bottomCenter:[[o,r],[Math.max(0,o-1),r],[Math.min(i,o+1),r]],aboutTall:[[0,3],[0,4],[1,3],[o,a]],aboutPracticeTop:[[2,2],[1,2],[2,3],[o,2]],aboutHeroImage:[[i,2],[i,3],[Math.max(0,i-1),2],[i,1]],aboutImageBelow:[[i,4],[i,5],[Math.max(0,i-1),4],[i,3]],aboutWide:[[2,5],[1,6],[o,6],[o,a]],aboutLowerWide:[[1,r-2],[o,r-2],[0,r-2],[2,r-3]],bottom:[[o,r],[0,r],[i,r]],bottomRight:[[i,r],[i,Math.max(0,r-2)],[Math.max(0,i-2),r],[i,Math.max(0,r-1)],[Math.max(0,i-1),r],[o,r],[i,a]],bottomRightTop:[[0,Math.max(0,r-2)],[1,Math.max(0,r-2)],[Math.max(0,i-1),Math.max(0,r-2)],[Math.max(0,i-2),Math.max(0,r-2)],[i,Math.max(0,r-2)],[i,Math.max(0,r-3)],[i,r]],bottomRightLowerLeft:[[Math.max(0,i-2),r],[Math.max(0,i-1),r],[i,r],[Math.max(0,i-2),Math.max(0,r-1)]],bottomRightLowerRight:[[i,r],[Math.max(0,i-1),r],[i,Math.max(0,r-1)],[Math.max(0,i-2),r]],left:[[0,a],[0,1],[0,r]],right:[[i,a],[i,1],[i,r]],center:[[o,a],[o,Math.max(0,a-1)],[Math.max(0,o-1),a]],corner:[[0,0],[i,0],[0,r],[i,r]],auto:[]};return(l[s]??l.auto).map(([c,u])=>({x:Math.max(0,Math.min(i,c)),y:Math.max(0,Math.min(r,u))}))}function Vx(s,e,t){const n=[];for(let i=0;i<=s.rows-t;i+=1)for(let r=0;r<=s.cols-e;r+=1)n.push({x:r,y:i});return n}function xu(s){const e=[...s];for(let t=e.length-1;t>0;t-=1){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Ya(s,e,t,n){let i=0;for(;s+i<n.cols&&!t[e][s+i];)i+=1;return Math.max(1,i)}function qa(s,e,t,n,i){let r=0;for(;e+r<i.rows;){for(let o=s;o<s+t;o+=1)if(n[e+r][o])return Math.max(1,r);r+=1}return Math.max(1,r)}function Dh(s){return s==="filler"?ro():Ka()}function Ka(){return An(er.content.min,er.content.max)}function ro(){return An(er.filler.min,er.filler.max)}function Wx(){return An(er.fillerRing.min,er.fillerRing.max)}function Ih(s,e){return s.color?s.color:s.type==="interaction"||s.type==="moreInfo"?e[jn(1,e.length-1)]??e[0]:e[0]??Gr[0]}class Xx{constructor(){this.overlay=document.querySelector("[data-modal-overlay]"),this.dialog=document.querySelector("[data-modal-dialog]"),this.title=document.querySelector("[data-modal-title]"),this.body=document.querySelector("[data-modal-body]"),this.closeButton=document.querySelector("[data-modal-close]"),this.closeButton.addEventListener("click",()=>this.closeModal()),this.overlay.addEventListener("click",e=>{e.target===this.overlay&&this.closeModal()}),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.closeModal()})}openModal(e){this.title.textContent=e.title??"More Info",this.body.replaceChildren();for(const t of e.sections??[])t.type==="image"?this.body.appendChild(this.createImageSection(t)):this.body.appendChild(this.createTextSection(t));this.overlay.hidden=!1,this.dialog.focus()}closeModal(){this.overlay.hidden=!0}createTextSection(e){const t=document.createElement("p");return t.textContent=e.content??"",t}createImageSection(e){const t=document.createElement("figure"),n=document.createElement("img");if(n.src=e.src,n.alt=e.caption??"",t.appendChild(n),e.caption){const i=document.createElement("figcaption");i.textContent=e.caption,t.appendChild(i)}return t}}class jx{constructor(e,t="home"){this.pages=new Map(e.pages.map(n=>[n.id,n])),this.currentPageId=t}getCurrentPage(){return this.pages.get(this.currentPageId)}getPage(e){return this.pages.get(e)}upsertPage(e){return this.pages.set(e.id,e),e}goToPage(e){if(!this.pages.has(e))throw new Error(`Unknown page id: ${e}`);return this.currentPageId=e,this.getCurrentPage()}}class Yx{constructor({duration:e=420,stagger:t=16,ringDuration:n=300,ringDelaySpread:i=90,overlapDelay:r=180,floorY:o=0,hideMargin:a=.18}={}){this.duration=e,this.stagger=t,this.ringDuration=n,this.ringDelaySpread=i,this.overlapDelay=r,this.floorY=o,this.hideMargin=a,this.isTransitioning=!1}async transitionToPage({oldGroup:e,newGroupFactory:t,scene:n,onTransitionStart:i}){if(this.isTransitioning)return e;this.isTransitioning=!0;const r=t();n.add(r),this.setGroupProgress(r,0);const o=Math.max(e?this.getGroupAnimationDuration(e):0,this.overlapDelay+this.getGroupAnimationDuration(r)),a=(i==null?void 0:i({duration:o}))??Promise.resolve(),l=e?this.animateGroup(e,"exit"):Promise.resolve(),c=bu(this.overlapDelay).then(()=>this.animateGroup(r,"enter"));return await l,e&&(n.remove(e),Eu(e)),await c,await a,this.isTransitioning=!1,r}async replaceChildren({parent:e,oldChildren:t,newChildren:n}){if(this.isTransitioning)return!1;this.isTransitioning=!0,n.forEach(o=>{e.add(o),this.setGroupProgress(o,0)});const i=t.length>0?this.animateObjects(t,"exit"):Promise.resolve(),r=bu(this.overlapDelay).then(()=>this.animateObjects(n,"enter"));return await i,t.forEach(o=>{e.remove(o),Eu(o)}),await r,this.isTransitioning=!1,!0}animateGroup(e,t){const{centralMeshes:n,ringMeshes:i}=Mu(e),r=this.animateMeshes(n.sort((a,l)=>a.getWorldPosition(yu).x-l.getWorldPosition(Su).x),t,{duration:this.duration,delays:n.map((a,l)=>l*this.stagger)}),o=this.animateMeshes(i,t,{duration:this.ringDuration,delays:i.map(()=>Math.random()*this.ringDelaySpread)});return Promise.all([r,o])}animateObjects(e,t){const n=e.flatMap(i=>Pa(i)).sort((i,r)=>i.getWorldPosition(yu).x-r.getWorldPosition(Su).x);return this.animateMeshes(n,t,{duration:this.duration,delays:n.map((i,r)=>r*this.stagger)})}getGroupAnimationDuration(e){const{centralMeshes:t,ringMeshes:n}=Mu(e);return Math.max(this.getSteppedAnimationDuration(t,this.duration,this.stagger),this.getSpreadAnimationDuration(n,this.ringDuration,this.ringDelaySpread))}getSteppedAnimationDuration(e,t,n){return e.length===0?0:t+(e.length-1)*n}getSpreadAnimationDuration(e,t,n){return e.length===0?0:t+n}animateMeshes(e,t,{duration:n,delays:i}){if(e.length===0)return Promise.resolve();const r=n+Math.max(...i),o=performance.now();return new Promise(a=>{const l=c=>{const u=c-o;if(e.forEach((h,f)=>{const d=u-i[f],g=Kx(d/n,0,1),v=qx(g),p=t==="enter"?v:1-v;this.setMeshProgress(h,p)}),u>=r){e.forEach(h=>this.setMeshProgress(h,t==="enter"?1:0)),a();return}requestAnimationFrame(l)};requestAnimationFrame(l)})}setGroupProgress(e,t){Pa(e).forEach(n=>this.setMeshProgress(n,t))}setMeshProgress(e,t){const n=e.userData.originalHeight??1,i=e.userData.originalY??n/2,r=.001,o=Math.max(r,t),a=this.floorY-this.hideMargin-n*r/2;e.scale.y=o,e.position.y=Zx(a,i,t)}}const yu=new Y,Su=new Y;function Pa(s){const e=[];return s.traverse(t=>{var n;(n=t.userData)!=null&&n.isBlockMesh&&e.push(t)}),e}function Mu(s){const e=[],t=[];return Pa(s).forEach(n=>{var i;((i=n.userData.blockData)==null?void 0:i.subtype)==="outerDecorative"?t.push(n):e.push(n)}),{centralMeshes:e,ringMeshes:t}}function Eu(s){s.traverse(e=>{var n,i;(i=(n=e.geometry)==null?void 0:n.dispose)==null||i.call(n),(Array.isArray(e.material)?e.material:[e.material]).forEach(r=>{var o;(o=r==null?void 0:r.dispose)==null||o.call(r)})})}function qx(s){return s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2}function Kx(s,e,t){return Math.max(e,Math.min(t,s))}function Zx(s,e,t){return s+(e-s)*t}function bu(s){return new Promise(e=>{window.setTimeout(e,s)})}const Yr=document.querySelector("#scene"),Nh=window.innerWidth<768,ar="home",Fh=8,Oh=-2e-4,Bh=3,Tu={mobile:{viewSize:22,position:new Y(2,8.2,5),zoom:.01,target:new Y(0,0,0)},desktop:{viewSize:8.8,position:new Y(3,6.2,6.2),zoom:2,target:new Y(0,0,0)}},Mt={enabled:!0,enableRotate:!0,enablePan:!0,enableZoom:!0,damping:.08,minZoom:1.2,maxZoom:4,minPolarAngle:bn.degToRad(.5),maxPolarAngle:bn.degToRad(40),minAzimuthAngle:bn.degToRad(-45),maxAzimuthAngle:bn.degToRad(45),targetMin:new Y(-2.5,-.4,-3.8),targetMax:new Y(2.5,1.2,3.8)},vi=new Ev;vi.background=new Ze(15986920);const Yn=new Mv({canvas:Yr,antialias:!0,alpha:!1,powerPreference:"high-performance"});Yn.setPixelRatio(Math.min(window.devicePixelRatio,Bh));Yn.shadowMap.enabled=!0;Yn.shadowMap.type=Pu;Yn.outputColorSpace=zt;const ht=new za(-2,2,2,-2,.1,500);ay();const Qe=new x_(ht,Yn.domElement);Qe.enabled=Mt.enabled;Qe.enableDamping=!0;Qe.dampingFactor=Mt.damping;Qe.enableRotate=Mt.enableRotate;Qe.enablePan=Mt.enablePan;Qe.enableZoom=Mt.enableZoom;Qe.minZoom=Mt.minZoom;Qe.maxZoom=Mt.maxZoom;Qe.minPolarAngle=Mt.minPolarAngle;Qe.maxPolarAngle=Mt.maxPolarAngle;Qe.minAzimuthAngle=Mt.minAzimuthAngle;Qe.maxAzimuthAngle=Mt.maxAzimuthAngle;Qe.target.copy(ao().target);Qe.update();const so=new At(new Rn(58,58),new gh({color:15986920,roughness:.82,metalness:0}));so.rotation.x=-Math.PI/2;so.position.y=Oh;so.receiveShadow=!0;vi.add(so);vi.add(new h_(16777215,14208960,2.4));const Kn=new p_(16777215,2.8);Kn.position.set(4,8,6);Kn.castShadow=!0;Kn.shadow.camera.left=-8;Kn.shadow.camera.right=8;Kn.shadow.camera.top=8;Kn.shadow.camera.bottom=-8;Kn.shadow.mapSize.set(1024,1024);vi.add(Kn);const wu=$a();wu&&zr.pages.push(Ja(wu,ar));const sn=new jx(zr,ly()),Jx=new Xx,tr=new Yx({floorY:Oh}),kh=new u_,Au=new g_,ua=new Se,ha=new Y,La=new Y,Bs=new Y,Ua=new Y,wr=new Y,zh=new wn,Gh=new wn,fa=new dt,da={position:.02,target:.02,rotationRadians:bn.degToRad(.25)},Ar=3,Qx=5;let Ks=0,Za=ar,nr=Wh(sn.getCurrentPage()),Gn=null,pa=0,ks=!1,Da=!1,Ru=!1;vi.add(nr);Yr.addEventListener("pointermove",ny);Yr.addEventListener("pointerleave",oo);Yr.addEventListener("pointerdown",iy);window.addEventListener("popstate",ty);Yh(sn.currentPageId,{replace:!0});function Hh(){const s=window.innerWidth,e=window.innerHeight,t=s/e,n=ao();ht.left=-n.viewSize*t/2,ht.right=n.viewSize*t/2,ht.top=n.viewSize/2,ht.bottom=-n.viewSize/2,Ru||(ht.position.copy(n.position),ht.zoom=n.zoom,Qe.target.copy(n.target),ht.lookAt(n.target),Ru=!0),ht.updateProjectionMatrix(),Qe.update(),Yn.setPixelRatio(Math.min(window.devicePixelRatio,Bh)),Yn.setSize(s,e)}function Vh(){!ks&&!Da&&(vy(),Qe.update()),Yn.render(vi,ht),requestAnimationFrame(Vh)}window.addEventListener("resize",Hh);Hh();Vh();function Wh(s){const e=qh(s)?Xh(s):s,t=Uh(e,{isMobile:Nh,fillerRings:Fh}),n=new zn;return n.name=`page-${s.id}`,t.forEach(i=>{n.add(Ch(i,kh))}),n.updateMatrixWorld(!0),n}function Xh(s){return{...s,blocks:[...s.blocks??[],...ey(s)]}}function $x(s){return Uh(Xh(s),{isMobile:Nh,fillerRings:Fh}).filter(t=>t.carouselDynamic).map(t=>Ch(t,kh))}function ey(s){const e=el(s),t=Math.max(1,Math.ceil(e.length/Ar)),n=cy(Ks,t),i=e.slice(n*Ar,n*Ar+Ar),r=uy(i.length),o=[{id:"projects-counter",type:"content",subtype:"text",carouselDynamic:!0,placement:"projectCounter",size:"small",content:{text:`${n+1}/${t}`,fontWeight:700,fontSize:.32}}];return i.forEach((a,l)=>{const c=r[l],u=Math.random()>.5,h=Math.random()>.5,f=hy(c,{groupOnRight:h,thumbnailOnLeft:u}),d=fy(c,{groupOnRight:h,thumbnailOnLeft:u});o.push({id:`projects-${a.id}-title`,type:"interaction",subtype:"text",carouselDynamic:!0,placement:f,size:"shortWide",content:{label:a.title,fontWeight:400},action:{type:"state",target:a.target}},{id:`projects-${a.id}-thumb`,type:"interaction",subtype:"image",carouselDynamic:!0,placement:d,size:"small",content:{src:a.thumbnail,alt:`${a.title} thumbnail`},action:{type:"state",target:a.target}})}),o}async function Ki(s,e={}){if(tr.isTransitioning||s===sn.currentPageId)return;const t=sn.currentPageId,n=sn.goToPage(s);oo(),e.preservePrevious||(Za=t),Yh(s,{replace:e.replaceUrl??!1});const i=Qe.enabled;Qe.enabled=!1,Da=!0;try{nr=await tr.transitionToPage({oldGroup:nr,newGroupFactory:()=>Wh(n),scene:vi,onTransitionStart:({duration:r})=>py(r)})}finally{Da=!1,Qe.enabled=i,gy()}}function ty(){const s=Qa(),e=$a();if(e){sn.upsertPage(Ja(e,Za)),Ki(li(e),{replaceUrl:!0,preservePrevious:!0});return}if(s&&sn.getPage(s)){Ki(s,{replaceUrl:!0});return}Ki(ar,{replaceUrl:!0})}function ny(s){if(tr.isTransitioning)return;const e=jh(s);(e==null?void 0:e.object)!==Gn&&(oo(),e&&(Gn=e.object,Gn.scale.x=1.025,Gn.scale.z=1.025,document.body.style.cursor="pointer"))}function iy(s){var n,i,r,o,a;if(tr.isTransitioning)return;const e=jh(s),t=e==null?void 0:e.object.userData.blockData;if(t){if(t.type==="moreInfo"){Jx.openModal(t.modal);return}if(((n=t.action)==null?void 0:n.type)==="state"){Ki(t.action.target);return}if(((i=t.action)==null?void 0:i.type)==="tag"){sy(t.action.tag);return}if(((r=t.action)==null?void 0:r.type)==="back"){Ki(t.action.target??Za,{preservePrevious:!0});return}if(((o=t.action)==null?void 0:o.type)==="carousel"){ry(t.action.direction);return}((a=t.action)==null?void 0:a.type)==="link"&&window.open(t.action.url,"_blank","noopener,noreferrer")}}async function ry(s){if(tr.isTransitioning||!qh(sn.getCurrentPage()))return;const e=sn.getCurrentPage(),t=Math.max(1,Math.ceil(el(e).length/Ar));t<=1||(Ks=(Ks+s+t)%t,oo(),await tr.replaceChildren({parent:nr,oldChildren:nr.children.filter(n=>{var i;return(i=n.userData.blockData)==null?void 0:i.carouselDynamic}),newChildren:$x(e)}))}function sy(s){const e=Ja(s,sn.currentPageId);sn.upsertPage(e),Ks=0,Ki(e.id)}function Ja(s,e=ar){const t=Ia(s),n=dy().filter(i=>(i.tags??[]).some(r=>Ia(r)===t));return{id:li(s),template:"projectList",title:s.toUpperCase(),projectItems:n,blocks:[{id:`${li(s)}-back`,type:"interaction",placement:"topLeftStack1",size:"small",content:{label:"BACK",fontWeight:700},action:{type:"back",target:e}},{id:`${li(s)}-title`,type:"content",subtype:"header",placement:"top",size:"wide",content:{text:s.toUpperCase(),fontWeight:700}},...oy(li(s)),{id:`${li(s)}-home`,type:"interaction",placement:"bottomCenter",size:"small",content:{label:"HOME",fontWeight:700},action:{type:"state",target:"home"}}]}}function oy(s){return[{id:`${s}-prev`,type:"interaction",placement:"projectPrev",size:"small",content:{label:"PREV",fontWeight:700,iconSrc:"/icons/arrow-left.svg"},action:{type:"carousel",direction:-1}},{id:`${s}-next`,type:"interaction",placement:"projectNext",size:"small",content:{label:"NEXT",fontWeight:700,iconSrc:"/icons/arrow-right.svg"},action:{type:"carousel",direction:1}}]}function jh(s){const e=Yr.getBoundingClientRect();return ua.x=(s.clientX-e.left)/e.width*2-1,ua.y=-((s.clientY-e.top)/e.height)*2+1,Au.setFromCamera(ua,ht),Au.intersectObjects(nr.children,!0).find(n=>{var r;const i=(r=n.object.userData)==null?void 0:r.blockData;return(i==null?void 0:i.type)==="interaction"||(i==null?void 0:i.type)==="moreInfo"})}function oo(){Gn&&(Gn.scale.x=1,Gn.scale.z=1,Gn=null),document.body.style.cursor=""}function ay(){const s=ao();ht.position.copy(s.position),ht.zoom=s.zoom,ht.lookAt(s.target)}function ao(){return window.innerWidth<768?Tu.mobile:Tu.desktop}function ly(){const s=$a();if(s)return li(s);const e=Qa();return e&&zr.pages.some(t=>t.id===e)?e:ar}function Qa(){const s=window.location.hash.replace(/^#\/?/,"");return s?decodeURIComponent(s.split("/")[0]):null}function $a(){const s=Qa();return s!=null&&s.startsWith("tag:")?s.slice(4):null}function Yh(s,{replace:e=!1}={}){const t=s===ar?"#/":`#/${encodeURIComponent(s)}`,n=`${window.location.pathname}${window.location.search}${t}`;`${window.location.pathname}${window.location.search}${window.location.hash}`!==n&&(e?window.history.replaceState({pageId:s},"",n):window.history.pushState({pageId:s},"",n))}function cy(s,e){return Math.max(0,Math.min(e-1,s))}function uy(s){const e=Array.from({length:Qx},(t,n)=>n+1);for(let t=e.length-1;t>0;t-=1){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e.slice(0,s).sort((t,n)=>t-n)}function hy(s,{groupOnRight:e,thumbnailOnLeft:t}){return e&&t?`projectRow${s}TitleFarRight`:t||e?`projectRow${s}TitleRight`:`projectRow${s}Title`}function fy(s,{groupOnRight:e,thumbnailOnLeft:t}){return e&&t?`projectRow${s}ThumbLeftInset`:e?`projectRow${s}ThumbFarRight`:t?`projectRow${s}ThumbLeft`:`projectRow${s}Thumb`}function qh(s){return(s==null?void 0:s.id)==="projects"||(s==null?void 0:s.template)==="projectList"}function dy(){const s=zr.pages.find(e=>e.id==="projects");return el(s).map(e=>{var n;const t=zr.pages.find(i=>i.id===e.target);return{...e,tags:((n=t==null?void 0:t.projectDetails)==null?void 0:n.tags)??e.tags??[]}})}function el(s){return[...(s==null?void 0:s.projectItems)??[]].reverse()}function Ia(s){return String(s).trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function li(s){return`tag:${Ia(s)}`}function py(s){const e=ao();if(La.copy(ht.position),Bs.copy(e.position),Ua.copy(Qe.target),wr.copy(e.target),zh.copy(ht.quaternion),fa.position.copy(e.position),fa.lookAt(e.target),Gh.copy(fa.quaternion),!my())return Promise.resolve();pa+=1;const t=pa,n=performance.now();return ks=!0,new Promise(i=>{const r=()=>{ht.position.copy(Bs),Qe.target.copy(wr),ht.lookAt(wr),ks=!1,i()},o=a=>{if(t!==pa){ks=!1,i();return}const l=Math.min(1,(a-n)/Math.max(1,s)),c=_y(l);if(ht.position.lerpVectors(La,Bs,c),ha.lerpVectors(Ua,wr,c),Qe.target.copy(ha),ht.lookAt(ha),l>=1){r();return}requestAnimationFrame(o)};requestAnimationFrame(o)})}function my(){const s=2*Math.acos(Math.min(1,Math.abs(zh.dot(Gh))));return La.distanceTo(Bs)>da.position||Ua.distanceTo(wr)>da.target||s>da.rotationRadians}function gy(){const s=Qe.enableDamping;Qe.enableDamping=!1,Qe.update(),Qe.enableDamping=s}function vy(){Qe.target.x=bn.clamp(Qe.target.x,Mt.targetMin.x,Mt.targetMax.x),Qe.target.y=bn.clamp(Qe.target.y,Mt.targetMin.y,Mt.targetMax.y),Qe.target.z=bn.clamp(Qe.target.z,Mt.targetMin.z,Mt.targetMax.z)}function _y(s){return s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2}
