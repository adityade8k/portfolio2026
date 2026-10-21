(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fc="164",Zi={ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uf=0,xl=1,Nf=2,Xu=1,Yu=2,Vn=3,$n=0,Gt=1,$t=2,mi=0,br=1,_l=2,Sl=3,bl=4,Ff=5,Ii=100,Of=101,kf=102,Bf=103,zf=104,Gf=200,Hf=201,Vf=202,Wf=203,pc=204,mc=205,jf=206,Xf=207,Yf=208,qf=209,Zf=210,Kf=211,Jf=212,$f=213,Qf=214,ep=0,tp=1,np=2,Po=3,ip=4,rp=5,ap=6,op=7,qu=0,sp=1,cp=2,gi=0,lp=1,hp=2,up=3,dp=4,fp=5,pp=6,mp=7,Zu=300,Ar=301,Cr=302,gc=303,vc=304,Yo=306,yc=1e3,qn=1001,xc=1002,Wt=1003,gp=1004,za=1005,Qt=1006,fs=1007,Ni=1008,vi=1009,vp=1010,yp=1011,Ku=1012,Ju=1013,Rr=1014,Zn=1015,qo=1016,$u=1017,Qu=1018,Ma=1020,xp=35902,_p=1021,Sp=1022,En=1023,bp=1024,Mp=1025,Mr=1026,fa=1027,ed=1028,td=1029,wp=1030,nd=1031,id=1033,ps=33776,ms=33777,gs=33778,vs=33779,Ml=35840,wl=35841,Tl=35842,El=35843,Al=36196,Cl=37492,Rl=37496,Pl=37808,Dl=37809,Ll=37810,Il=37811,Ul=37812,Nl=37813,Fl=37814,Ol=37815,kl=37816,Bl=37817,zl=37818,Gl=37819,Hl=37820,Vl=37821,ys=36492,Wl=36494,jl=36495,Tp=36283,Xl=36284,Yl=36285,ql=36286,Ep=3200,rd=3201,ad=0,Ap=1,fi="",Jt="srgb",bi="srgb-linear",Oc="display-p3",Zo="display-p3-linear",Do="linear",ct="srgb",Lo="rec709",Io="p3",Ji=7680,Zl=519,Cp=512,Rp=513,Pp=514,od=515,Dp=516,Lp=517,Ip=518,Up=519,Kl=35044,xs=35048,Jl="300 es",Kn=2e3,Uo=2001;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $l=1234567;const wr=Math.PI/180,pa=180/Math.PI;function Hi(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[a&255]+Ut[a>>8&255]+Ut[a>>16&255]+Ut[a>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Tt(a,e,t){return Math.max(e,Math.min(t,a))}function kc(a,e){return(a%e+e)%e}function Np(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Fp(a,e,t){return a!==e?(t-a)/(e-a):0}function sa(a,e,t){return(1-t)*a+t*e}function Op(a,e,t,n){return sa(a,e,1-Math.exp(-t*n))}function kp(a,e=1){return e-Math.abs(kc(a,e*2)-e)}function Bp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function zp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Gp(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Hp(a,e){return a+Math.random()*(e-a)}function Vp(a){return a*(.5-Math.random())}function Wp(a){a!==void 0&&($l=a);let e=$l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jp(a){return a*wr}function Xp(a){return a*pa}function Yp(a){return(a&a-1)===0&&a!==0}function qp(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Zp(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Kp(a,e,t,n,i){const r=Math.cos,o=Math.sin,s=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":a.set(s*h,c*u,c*d,s*l);break;case"YZY":a.set(c*d,s*h,c*u,s*l);break;case"ZXZ":a.set(c*u,c*d,s*h,s*l);break;case"XZX":a.set(s*h,c*g,c*f,s*l);break;case"YXY":a.set(c*f,s*h,c*g,s*l);break;case"ZYZ":a.set(c*g,c*f,s*h,s*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ot(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Pt={DEG2RAD:wr,RAD2DEG:pa,generateUUID:Hi,clamp:Tt,euclideanModulo:kc,mapLinear:Np,inverseLerp:Fp,lerp:sa,damp:Op,pingpong:kp,smoothstep:Bp,smootherstep:zp,randInt:Gp,randFloat:Hp,randFloatSpread:Vp,seededRandom:Wp,degToRad:jp,radToDeg:Xp,isPowerOfTwo:Yp,ceilPowerOfTwo:qp,floorPowerOfTwo:Zp,setQuaternionFromProperEuler:Kp,normalize:Ot,denormalize:gr};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,i,r,o,s,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,s,c,l)}set(e,t,n,i,r,o,s,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=s,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],p=i[3],m=i[6],b=i[1],y=i[4],_=i[7],L=i[2],D=i[5],T=i[8];return r[0]=o*v+s*b+c*L,r[3]=o*p+s*y+c*D,r[6]=o*m+s*_+c*T,r[1]=l*v+h*b+u*L,r[4]=l*p+h*y+u*D,r[7]=l*m+h*_+u*T,r[2]=d*v+f*b+g*L,r[5]=d*p+f*y+g*D,r[8]=d*m+f*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*s*l-n*r*h+n*s*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],h=e[8],u=h*o-s*l,d=s*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(s*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-s*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,s){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*s)+o+e,-i*l,i*c,-i*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(_s.makeScale(e,t)),this}rotate(e){return this.premultiply(_s.makeRotation(-e)),this}translate(e,t){return this.premultiply(_s.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _s=new Ve;function sd(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ma(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Jp(){const a=ma("canvas");return a.style.display="block",a}const Ql={};function $p(a){a in Ql||(Ql[a]=!0,console.warn(a))}const eh=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),th=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ga={[bi]:{transfer:Do,primaries:Lo,toReference:a=>a,fromReference:a=>a},[Jt]:{transfer:ct,primaries:Lo,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Zo]:{transfer:Do,primaries:Io,toReference:a=>a.applyMatrix3(th),fromReference:a=>a.applyMatrix3(eh)},[Oc]:{transfer:ct,primaries:Io,toReference:a=>a.convertSRGBToLinear().applyMatrix3(th),fromReference:a=>a.applyMatrix3(eh).convertLinearToSRGB()}},Qp=new Set([bi,Zo]),it={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Qp.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=Ga[e].toReference,i=Ga[t].fromReference;return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return Ga[a].primaries},getTransfer:function(a){return a===fi?Do:Ga[a].transfer}};function Tr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ss(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let $i;class em{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=ma("canvas")),$i.width=e.width,$i.height=e.height;const n=$i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Tr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tr(t[n]/255)*255):t[n]=Tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tm=0;class cd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?r.push(bs(i[o].image)):r.push(bs(i[o]))}else r=bs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function bs(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?em.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nm=0;class Dt extends Gi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=qn,i=qn,r=Qt,o=Ni,s=En,c=vi,l=Dt.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Hi(),this.name="",this.source=new cd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yc:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yc:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Zu;Dt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(f+1)/2,L=(m+1)/2,D=(h+d)/4,T=(u+v)/4,N=(g+p)/4;return y>_&&y>L?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=D/n,r=T/n):_>L?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=D/i,r=N/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=T/r,i=N/r),this.set(n,i,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class im extends Gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let s=0;s<o;s++)this.textures[s]=r.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends im{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ld extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rm extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,s){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(s===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let p=1-s;const m=c*d+l*f+h*g+u*v,b=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const L=Math.sqrt(y),D=Math.atan2(L,m*b);p=Math.sin(p*D)/L,s=Math.sin(s*D)/L}const _=s*b;if(c=c*p+d*_,l=l*p+f*_,h=h*p+g*_,u=u*p+v*_,p===1-s){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const s=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=s*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-s*f,e[t+2]=l*g+h*f+s*d-c*u,e[t+3]=h*g-s*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(n/2),h=s(i/2),u=s(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+s+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>s&&n>u){const f=2*Math.sqrt(1+n-s-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(s>u){const f=2*Math.sqrt(1+s-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-s);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*s+i*l-r*c,this._y=i*h+o*c+r*s-n*l,this._z=r*h+o*l+n*c-i*s,this._w=o*h-n*s-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let s=o*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-s*s;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,s),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*i-s*n),h=2*(s*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-s*h,this.y=n+c*h+s*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,c=t.z;return this.x=i*c-r*s,this.y=r*o-n*c,this.z=n*s-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ms.copy(this).projectOnVector(e),this.sub(Ms)}reflect(e){return this.sub(Ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ms=new X,nh=new Qn;class ii{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=r.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ha.copy(n.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Va.subVectors(this.max,qr),Qi.subVectors(e.a,qr),er.subVectors(e.b,qr),tr.subVectors(e.c,qr),si.subVectors(er,Qi),ci.subVectors(tr,er),wi.subVectors(Qi,tr);let t=[0,-si.z,si.y,0,-ci.z,ci.y,0,-wi.z,wi.y,si.z,0,-si.x,ci.z,0,-ci.x,wi.z,0,-wi.x,-si.y,si.x,0,-ci.y,ci.x,0,-wi.y,wi.x,0];return!ws(t,Qi,er,tr,Va)||(t=[1,0,0,0,1,0,0,0,1],!ws(t,Qi,er,tr,Va))?!1:(Wa.crossVectors(si,ci),t=[Wa.x,Wa.y,Wa.z],ws(t,Qi,er,tr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new X,new X,new X,new X,new X,new X,new X,new X],hn=new X,Ha=new ii,Qi=new X,er=new X,tr=new X,si=new X,ci=new X,wi=new X,qr=new X,Va=new X,Wa=new X,Ti=new X;function ws(a,e,t,n,i){for(let r=0,o=a.length-3;r<=o;r+=3){Ti.fromArray(a,r);const s=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>s)return!1}return!0}const am=new ii,Zr=new X,Ts=new X;class Vi{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):am.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ts.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Ts)),this.expandByPoint(Zr.copy(e.center).sub(Ts))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new X,Es=new X,ja=new X,li=new X,As=new X,Xa=new X,Cs=new X;class Ko{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Es.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Es);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ja),s=li.dot(this.direction),c=-li.dot(ja),l=li.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-s,d=o*s-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*s)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+s)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+s)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+s)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+s)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+s)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Es).addScaledVector(ja,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),s=n-o,c=n+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,s,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(s=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(s=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,r){As.subVectors(t,e),Xa.subVectors(n,e),Cs.crossVectors(As,Xa);let o=this.direction.dot(Cs),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;li.subVectors(this.origin,e);const c=s*this.direction.dot(Xa.crossVectors(li,Xa));if(c<0)return null;const l=s*this.direction.dot(As.cross(li));if(l<0||c+l>o)return null;const h=-s*li.dot(Cs);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,r,o,s,c,l,h,u,d,f,g,v,p){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,s,c,l,h,u,d,f,g,v,p)}set(e,t,n,i,r,o,s,c,l,h,u,d,f,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=s,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/nr.setFromMatrixColumn(e,0).length(),r=1/nr.setFromMatrixColumn(e,1).length(),o=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=s*h,v=s*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-s*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d+v*s,t[4]=g*s-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-s,t[2]=f*s-g,t[6]=v+d*s,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d-v*s,t[4]=-o*u,t[8]=g+f*s,t[1]=f+g*s,t[5]=o*h,t[9]=v-d*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=s*h,v=s*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=s*c,v=s*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-s*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=s*c,v=s*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=s*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(om,e,sm)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),hi.crossVectors(n,qt),hi.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),hi.crossVectors(n,qt)),hi.normalize(),Ya.crossVectors(qt,hi),i[0]=hi.x,i[4]=Ya.x,i[8]=qt.x,i[1]=hi.y,i[5]=Ya.y,i[9]=qt.y,i[2]=hi.z,i[6]=Ya.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],b=n[3],y=n[7],_=n[11],L=n[15],D=i[0],T=i[4],N=i[8],E=i[12],S=i[1],V=i[5],I=i[9],F=i[13],G=i[2],Y=i[6],q=i[10],J=i[14],B=i[3],K=i[7],j=i[11],z=i[15];return r[0]=o*D+s*S+c*G+l*B,r[4]=o*T+s*V+c*Y+l*K,r[8]=o*N+s*I+c*q+l*j,r[12]=o*E+s*F+c*J+l*z,r[1]=h*D+u*S+d*G+f*B,r[5]=h*T+u*V+d*Y+f*K,r[9]=h*N+u*I+d*q+f*j,r[13]=h*E+u*F+d*J+f*z,r[2]=g*D+v*S+p*G+m*B,r[6]=g*T+v*V+p*Y+m*K,r[10]=g*N+v*I+p*q+m*j,r[14]=g*E+v*F+p*J+m*z,r[3]=b*D+y*S+_*G+L*B,r[7]=b*T+y*V+_*Y+L*K,r[11]=b*N+y*I+_*q+L*j,r[15]=b*E+y*F+_*J+L*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+r*c*u-i*l*u-r*s*d+n*l*d+i*s*f-n*c*f)+v*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+p*(+t*l*u-t*s*f-r*o*u+n*o*f+r*s*h-n*l*h)+m*(-i*s*h-t*c*u+t*s*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],b=u*p*l-v*d*l+v*c*f-s*p*f-u*c*m+s*d*m,y=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,_=h*v*l-g*u*l+g*s*f-o*v*f-h*s*m+o*u*m,L=g*u*c-h*v*c-g*s*d+o*v*d+h*s*p-o*u*p,D=t*b+n*y+i*_+r*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/D;return e[0]=b*T,e[1]=(v*d*r-u*p*r-v*i*f+n*p*f+u*i*m-n*d*m)*T,e[2]=(s*p*r-v*c*r+v*i*l-n*p*l-s*i*m+n*c*m)*T,e[3]=(u*c*r-s*d*r-u*i*l+n*d*l+s*i*f-n*c*f)*T,e[4]=y*T,e[5]=(h*p*r-g*d*r+g*i*f-t*p*f-h*i*m+t*d*m)*T,e[6]=(g*c*r-o*p*r-g*i*l+t*p*l+o*i*m-t*c*m)*T,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*T,e[8]=_*T,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*m-t*u*m)*T,e[10]=(o*v*r-g*s*r+g*n*l-t*v*l-o*n*m+t*s*m)*T,e[11]=(h*s*r-o*u*r-h*n*l+t*u*l+o*n*f-t*s*f)*T,e[12]=L*T,e[13]=(h*v*i-g*u*i+g*n*d-t*v*d-h*n*p+t*u*p)*T,e[14]=(g*s*i-o*v*i-g*n*c+t*v*c+o*n*p-t*s*p)*T,e[15]=(o*u*i-h*s*i+h*n*c-t*u*c-o*n*d+t*s*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,c=e.z,l=r*o,h=r*s;return this.set(l*o+n,l*s-i*c,l*c+i*s,0,l*s+i*c,h*s+n,h*c-i*o,0,l*c-i*s,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,s=t._z,c=t._w,l=r+r,h=o+o,u=s+s,d=r*l,f=r*h,g=r*u,v=o*h,p=o*u,m=s*u,b=c*l,y=c*h,_=c*u,L=n.x,D=n.y,T=n.z;return i[0]=(1-(v+m))*L,i[1]=(f+_)*L,i[2]=(g-y)*L,i[3]=0,i[4]=(f-_)*D,i[5]=(1-(d+m))*D,i[6]=(p+b)*D,i[7]=0,i[8]=(g+y)*T,i[9]=(p-b)*T,i[10]=(1-(d+v))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=nr.set(i[0],i[1],i[2]).length();const o=nr.set(i[4],i[5],i[6]).length(),s=nr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],un.copy(this);const l=1/r,h=1/o,u=1/s;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=s,this}makePerspective(e,t,n,i,r,o,s=Kn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(s===Kn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(s===Uo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,s=Kn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h;let g,v;if(s===Kn)g=(o+r)*u,v=-2*u;else if(s===Uo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const nr=new X,un=new rt,om=new X(0,0,0),sm=new X(1,1,1),hi=new X,Ya=new X,qt=new X,ih=new rt,rh=new Qn;class Dn{constructor(e=0,t=0,n=0,i=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],s=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rh.setFromEuler(this),this.setFromQuaternion(rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cm=0;const ah=new X,ir=new Qn,Bn=new rt,qa=new X,Kr=new X,lm=new X,hm=new Qn,oh=new X(1,0,0),sh=new X(0,1,0),ch=new X(0,0,1),lh={type:"added"},um={type:"removed"},rr={type:"childadded",child:null},Rs={type:"childremoved",child:null};class yt extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new X,t=new Dn,n=new Qn,i=new X(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ve}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(oh,e)}rotateY(e){return this.rotateOnAxis(sh,e)}rotateZ(e){return this.rotateOnAxis(ch,e)}translateOnAxis(e,t){return ah.copy(e).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oh,e)}translateY(e){return this.translateOnAxis(sh,e)}translateZ(e){return this.translateOnAxis(ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Kr,qa,this.up):Bn.lookAt(qa,Kr,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),ir.setFromRotationMatrix(Bn),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lh),rr.child=e,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(um),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lh),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,hm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(r(e.materials,this.material[c]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];i.animations.push(r(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(s){const c=[];for(const l in s){const h=s[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new X(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new X,zn=new X,Ps=new X,Gn=new X,ar=new X,or=new X,hh=new X,Ds=new X,Ls=new X,Is=new X;class mn{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),dn.subVectors(e,t),i.cross(dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){dn.subVectors(i,t),zn.subVectors(n,t),Ps.subVectors(e,t);const o=dn.dot(dn),s=dn.dot(zn),c=dn.dot(Ps),l=zn.dot(zn),h=zn.dot(Ps),u=o*l-s*s;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-s*h)*d,g=(o*h-s*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,i,r,o,s,c){return this.getBarycoord(e,t,n,i,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(s,Gn.z),c)}static isFrontFacing(e,t,n,i){return dn.subVectors(n,t),zn.subVectors(e,t),dn.cross(zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),dn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,s;ar.subVectors(i,n),or.subVectors(r,n),Ds.subVectors(e,n);const c=ar.dot(Ds),l=or.dot(Ds);if(c<=0&&l<=0)return t.copy(n);Ls.subVectors(e,i);const h=ar.dot(Ls),u=or.dot(Ls);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ar,o);Is.subVectors(e,r);const f=ar.dot(Is),g=or.dot(Is);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return s=l/(l-g),t.copy(n).addScaledVector(or,s);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return hh.subVectors(r,i),s=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(hh,s);const m=1/(p+v+d);return o=v*m,s=d*m,t.copy(n).addScaledVector(ar,o).addScaledVector(or,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Us(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=kc(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Us(o,r,e+1/3),this.g=Us(o,r,e),this.b=Us(o,r,e-1/3)}return it.toWorkingColorSpace(this,i),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return it.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Tt(Nt.r*255,0,255))*65536+Math.round(Tt(Nt.g*255,0,255))*256+Math.round(Tt(Nt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,r=Nt.b,o=Math.max(n,i,r),s=Math.min(n,i,r);let c,l;const h=(s+o)/2;if(s===o)c=0,l=0;else{const u=o-s;switch(l=h<=.5?u/(o+s):u/(2-o-s),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Jt){it.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Za);const n=sa(ui.h,Za.h,t),i=sa(ui.s,Za.s,t),r=sa(ui.l,Za.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Je;Je.NAMES=hd;let dm=0;class Ir extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=br,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const s in r){const c=r[s];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wa extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new X,Ka=new _e;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $p("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),e}}class ud extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dd extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fm=0;const sn=new rt,Ns=new yt,sr=new X,Zt=new ii,Jr=new ii,wt=new X;class tn extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sd(e)?dd:ud)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ns.lookAt(e),Ns.updateMatrix(),this.applyMatrix4(Ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];Jr.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(Zt.min,Jr.min),Zt.expandByPoint(wt),wt.addVectors(Zt.max,Jr.max),Zt.expandByPoint(wt)):(Zt.expandByPoint(Jr.min),Zt.expandByPoint(Jr.max))}Zt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],c=this.morphTargetsRelative;for(let l=0,h=s.count;l<h;l++)wt.fromBufferAttribute(s,l),c&&(sr.fromBufferAttribute(e,l),wt.add(sr)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),s=[],c=[];for(let N=0;N<n.count;N++)s[N]=new X,c[N]=new X;const l=new X,h=new X,u=new X,d=new _e,f=new _e,g=new _e,v=new X,p=new X;function m(N,E,S){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const V=1/(f.x*g.y-g.x*f.y);isFinite(V)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(V),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(V),s[N].add(v),s[E].add(v),s[S].add(v),c[N].add(p),c[E].add(p),c[S].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,E=b.length;N<E;++N){const S=b[N],V=S.start,I=S.count;for(let F=V,G=V+I;F<G;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new X,_=new X,L=new X,D=new X;function T(N){L.fromBufferAttribute(i,N),D.copy(L);const E=s[N];y.copy(E),y.sub(L.multiplyScalar(L.dot(E))).normalize(),_.crossVectors(D,E);const V=_.dot(c[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,V)}for(let N=0,E=b.length;N<E;++N){const S=b[N],V=S.start,I=S.count;for(let F=V,G=V+I;F<G;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new X,r=new X,o=new X,s=new X,c=new X,l=new X,h=new X,u=new X;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),s.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),s.add(h),c.add(h),l.add(h),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(s,c){const l=s.array,h=s.itemSize,u=s.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,p=c.length;v<p;v++){s.isInterleavedBufferAttribute?f=c[v]*s.data.stride+s.offset:f=c[v]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new gn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const s in i){const c=i[s],l=e(c,n);t.setAttribute(s,l)}const r=this.morphAttributes;for(const s in r){const c=[],l=r[s];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new rt,Ei=new Ko,Ja=new Vi,dh=new X,cr=new X,lr=new X,hr=new X,Fs=new X,$a=new X,Qa=new _e,eo=new _e,to=new _e,fh=new X,ph=new X,mh=new X,no=new X,io=new X;class Et extends yt{constructor(e=new tn,t=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){$a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=s[c],u=r[c];h!==0&&(Fs.fromBufferAttribute(u,e),o?$a.addScaledVector(Fs,h):$a.addScaledVector(Fs.sub(t),h))}t.add($a)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Ja.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Ja,dh)===null||Ei.origin.distanceToSquared(dh)>(e.far-e.near)**2))&&(uh.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(uh),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,s=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),y=Math.min(s.count,Math.min(p.start+p.count,f.start+f.count));for(let _=b,L=y;_<L;_+=3){const D=s.getX(_),T=s.getX(_+1),N=s.getX(_+2);i=ro(this,m,e,n,l,h,u,D,T,N),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(s.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const b=s.getX(p),y=s.getX(p+1),_=s.getX(p+2);i=ro(this,o,e,n,l,h,u,b,y,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let _=b,L=y;_<L;_+=3){const D=_,T=_+1,N=_+2;i=ro(this,m,e,n,l,h,u,D,T,N),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const b=p,y=p+1,_=p+2;i=ro(this,o,e,n,l,h,u,b,y,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function pm(a,e,t,n,i,r,o,s){let c;if(e.side===Gt?c=n.intersectTriangle(o,r,i,!0,s):c=n.intersectTriangle(i,r,o,e.side===$n,s),c===null)return null;io.copy(s),io.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(io);return l<t.near||l>t.far?null:{distance:l,point:io.clone(),object:a}}function ro(a,e,t,n,i,r,o,s,c,l){a.getVertexPosition(s,cr),a.getVertexPosition(c,lr),a.getVertexPosition(l,hr);const h=pm(a,e,t,n,cr,lr,hr,no);if(h){i&&(Qa.fromBufferAttribute(i,s),eo.fromBufferAttribute(i,c),to.fromBufferAttribute(i,l),h.uv=mn.getInterpolation(no,cr,lr,hr,Qa,eo,to,new _e)),r&&(Qa.fromBufferAttribute(r,s),eo.fromBufferAttribute(r,c),to.fromBufferAttribute(r,l),h.uv1=mn.getInterpolation(no,cr,lr,hr,Qa,eo,to,new _e)),o&&(fh.fromBufferAttribute(o,s),ph.fromBufferAttribute(o,c),mh.fromBufferAttribute(o,l),h.normal=mn.getInterpolation(no,cr,lr,hr,fh,ph,mh,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:s,b:c,c:l,normal:new X,materialIndex:0};mn.getNormal(cr,lr,hr,u.normal),h.face=u}return h}class Wi extends tn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const s=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function g(v,p,m,b,y,_,L,D,T,N,E){const S=_/T,V=L/N,I=_/2,F=L/2,G=D/2,Y=T+1,q=N+1;let J=0,B=0;const K=new X;for(let j=0;j<q;j++){const z=j*V-F;for(let te=0;te<Y;te++){const se=te*S-I;K[v]=se*b,K[p]=z*y,K[m]=G,l.push(K.x,K.y,K.z),K[v]=0,K[p]=0,K[m]=D>0?1:-1,h.push(K.x,K.y,K.z),u.push(te/T),u.push(1-j/N),J+=1}}for(let j=0;j<N;j++)for(let z=0;z<T;z++){const te=d+z+Y*j,se=d+z+Y*(j+1),P=d+(z+1)+Y*(j+1),C=d+(z+1)+Y*j;c.push(te,se,C),c.push(se,P,C),B+=6}s.addGroup(f,B,E),f+=B,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(a){const e={};for(let t=0;t<a.length;t++){const n=Pr(a[t]);for(const i in n)e[i]=n[i]}return e}function mm(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function fd(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const pd={clone:Pr,merge:kt};var gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class md extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new X,gh=new _e,vh=new _e;class fn extends md{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,gh,vh),t.subVectors(vh,gh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ur=-90,dr=1;class ym extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn(ur,dr,e,t);i.layers=this.layers,this.add(i);const r=new fn(ur,dr,e,t);r.layers=this.layers,this.add(r);const o=new fn(ur,dr,e,t);o.layers=this.layers,this.add(o);const s=new fn(ur,dr,e,t);s.layers=this.layers,this.add(s);const c=new fn(ur,dr,e,t);c.layers=this.layers,this.add(c);const l=new fn(ur,dr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,s,c]=t;for(const l of t)this.remove(l);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,s),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gd extends Dt{constructor(e,t,n,i,r,o,s,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ar,super(e,t,n,i,r,o,s,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xm extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new gd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wi(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:mi});r.uniforms.tEquirect.value=t;const o=new Et(i,r),s=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Qt),new ym(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Os=new X,_m=new X,Sm=new Ve;class jn{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Os.subVectors(n,t).cross(_m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Os),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sm.getNormalMatrix(e),i=this.coplanarPoint(Os).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Vi,ao=new X;class zc{constructor(e=new jn,t=new jn,n=new jn,i=new jn,r=new jn,o=new jn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){const n=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],p=i[11],m=i[12],b=i[13],y=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,p-f,_-m).normalize(),n[1].setComponents(c+r,d+l,p+f,_+m).normalize(),n[2].setComponents(c+o,d+h,p+g,_+b).normalize(),n[3].setComponents(c-o,d-h,p-g,_-b).normalize(),n[4].setComponents(c-s,d-u,p-v,_-y).normalize(),t===Kn)n[5].setComponents(c+s,d+u,p+v,_+y).normalize();else if(t===Uo)n[5].setComponents(s,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ao.x=i.normal.x>0?e.max.x:e.min.x,ao.y=i.normal.y>0?e.max.y:e.min.y,ao.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vd(){let a=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function bm(a){const e=new WeakMap;function t(s,c){const l=s.array,h=s.usage,u=l.byteLength,d=a.createBuffer();a.bindBuffer(c,d),a.bufferData(c,l,h),s.onUploadCallback();let f;if(l instanceof Float32Array)f=a.FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=a.SHORT;else if(l instanceof Uint32Array)f=a.UNSIGNED_INT;else if(l instanceof Int32Array)f=a.INT;else if(l instanceof Int8Array)f=a.BYTE;else if(l instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:u}}function n(s,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(a.bindBuffer(l,s),u.count===-1&&d.length===0&&a.bufferSubData(l,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const v=d[f];a.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}u.count!==-1&&(a.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function i(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);c&&(a.deleteBuffer(c.buffer),e.delete(s))}function o(s,c){if(s.isGLBufferAttribute){const h=e.get(s);(!h||h.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);if(l===void 0)e.set(s,t(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,s,c),l.version=s.version}}return{get:i,remove:r,update:o}}class ri extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,s=Math.floor(n),c=Math.floor(i),l=s+1,h=c+1,u=e/s,d=t/c,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const b=m*d-o;for(let y=0;y<l;y++){const _=y*u-r;g.push(_,-b,0),v.push(0,0,1),p.push(y/s),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<s;b++){const y=b+l*m,_=b+l*(m+1),L=b+1+l*(m+1),D=b+1+l*m;f.push(y,_,D),f.push(_,L,D)}this.setIndex(f),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
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
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
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
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
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
#endif`,Om=`#ifdef USE_BUMPMAP
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xm=`#define PI 3.141592653589793
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
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qm=`vec3 transformedNormal = objectNormal;
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
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`
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
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
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
}`,ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
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
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_g=`PhysicalMaterial material;
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
#endif`,Sg=`struct PhysicalMaterial {
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
}`,bg=`
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lg=`#if defined( USE_POINTS_UV )
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
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Og=`#ifdef USE_MORPHNORMALS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
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
#endif`,Bg=`#ifdef USE_MORPHTARGETS
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
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
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
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s0=`float getShadowMask() {
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
}`,c0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,d0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,P0=`#define DISTANCE
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
}`,D0=`#define DISTANCE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
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
}`,N0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,O0=`uniform vec3 diffuse;
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
}`,k0=`#define LAMBERT
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
}`,B0=`#define LAMBERT
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
}`,z0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,H0=`#define NORMAL
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
}`,V0=`#define NORMAL
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
}`,W0=`#define PHONG
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
}`,j0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,Y0=`#define STANDARD
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
}`,q0=`#define TOON
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
}`,Z0=`#define TOON
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
}`,K0=`uniform float size;
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
}`,J0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,Q0=`uniform vec3 color;
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
}`,ev=`uniform float rotation;
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
}`,tv=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Mm,alphahash_pars_fragment:wm,alphamap_fragment:Tm,alphamap_pars_fragment:Em,alphatest_fragment:Am,alphatest_pars_fragment:Cm,aomap_fragment:Rm,aomap_pars_fragment:Pm,batching_pars_vertex:Dm,batching_vertex:Lm,begin_vertex:Im,beginnormal_vertex:Um,bsdfs:Nm,iridescence_fragment:Fm,bumpmap_pars_fragment:Om,clipping_planes_fragment:km,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:zm,clipping_planes_vertex:Gm,color_fragment:Hm,color_pars_fragment:Vm,color_pars_vertex:Wm,color_vertex:jm,common:Xm,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:qm,displacementmap_pars_vertex:Zm,displacementmap_vertex:Km,emissivemap_fragment:Jm,emissivemap_pars_fragment:$m,colorspace_fragment:Qm,colorspace_pars_fragment:eg,envmap_fragment:tg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:rg,envmap_physical_pars_fragment:mg,envmap_vertex:ag,fog_vertex:og,fog_pars_vertex:sg,fog_fragment:cg,fog_pars_fragment:lg,gradientmap_pars_fragment:hg,lightmap_pars_fragment:ug,lights_lambert_fragment:dg,lights_lambert_pars_fragment:fg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:vg,lights_phong_fragment:yg,lights_phong_pars_fragment:xg,lights_physical_fragment:_g,lights_physical_pars_fragment:Sg,lights_fragment_begin:bg,lights_fragment_maps:Mg,lights_fragment_end:wg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:Eg,logdepthbuf_pars_vertex:Ag,logdepthbuf_vertex:Cg,map_fragment:Rg,map_pars_fragment:Pg,map_particle_fragment:Dg,map_particle_pars_fragment:Lg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:Ug,morphinstance_vertex:Ng,morphcolor_vertex:Fg,morphnormal_vertex:Og,morphtarget_pars_vertex:kg,morphtarget_vertex:Bg,normal_fragment_begin:zg,normal_fragment_maps:Gg,normal_pars_fragment:Hg,normal_pars_vertex:Vg,normal_vertex:Wg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:qg,iridescence_pars_fragment:Zg,opaque_fragment:Kg,packing:Jg,premultiplied_alpha_fragment:$g,project_vertex:Qg,dithering_fragment:e0,dithering_pars_fragment:t0,roughnessmap_fragment:n0,roughnessmap_pars_fragment:i0,shadowmap_pars_fragment:r0,shadowmap_pars_vertex:a0,shadowmap_vertex:o0,shadowmask_pars_fragment:s0,skinbase_vertex:c0,skinning_pars_vertex:l0,skinning_vertex:h0,skinnormal_vertex:u0,specularmap_fragment:d0,specularmap_pars_fragment:f0,tonemapping_fragment:p0,tonemapping_pars_fragment:m0,transmission_fragment:g0,transmission_pars_fragment:v0,uv_pars_fragment:y0,uv_pars_vertex:x0,uv_vertex:_0,worldpos_vertex:S0,background_vert:b0,background_frag:M0,backgroundCube_vert:w0,backgroundCube_frag:T0,cube_vert:E0,cube_frag:A0,depth_vert:C0,depth_frag:R0,distanceRGBA_vert:P0,distanceRGBA_frag:D0,equirect_vert:L0,equirect_frag:I0,linedashed_vert:U0,linedashed_frag:N0,meshbasic_vert:F0,meshbasic_frag:O0,meshlambert_vert:k0,meshlambert_frag:B0,meshmatcap_vert:z0,meshmatcap_frag:G0,meshnormal_vert:H0,meshnormal_frag:V0,meshphong_vert:W0,meshphong_frag:j0,meshphysical_vert:X0,meshphysical_frag:Y0,meshtoon_vert:q0,meshtoon_frag:Z0,points_vert:K0,points_frag:J0,shadow_vert:$0,shadow_frag:Q0,sprite_vert:ev,sprite_frag:tv},De={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Tn={basic:{uniforms:kt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:kt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:kt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:kt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:kt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:kt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:kt([De.points,De.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:kt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:kt([De.common,De.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:kt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:kt([De.sprite,De.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:kt([De.common,De.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:kt([De.lights,De.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Tn.physical={uniforms:kt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const oo={r:0,b:0,g:0},Ci=new Dn,nv=new rt;function iv(a,e,t,n,i,r,o){const s=new Je(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function v(b){let y=!1;const _=g(b);_===null?m(s,c):_&&_.isColor&&(m(_,1),y=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil)}function p(b,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===Yo)?(h===void 0&&(h=new Et(new Wi(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Pr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,D,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ci.copy(y.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nv.makeRotationFromEuler(Ci)),h.material.toneMapped=it.getTransfer(_.colorSpace)!==ct,(u!==_||d!==_.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=a.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Et(new ri(2,2),new ei({name:"BackgroundMaterial",uniforms:Pr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=it.getTransfer(_.colorSpace)!==ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=a.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,y){b.getRGB(oo,fd(a)),n.buffers.color.setClear(oo.r,oo.g,oo.b,y,o)}return{getClearColor:function(){return s},setClearColor:function(b,y=1){s.set(b),c=y,m(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(s,c)},render:v,addToRenderList:p}}function rv(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function s(S,V,I,F,G){let Y=!1;const q=u(F,I,V);r!==q&&(r=q,l(r.object)),Y=f(S,F,I,G),Y&&g(S,F,I,G),G!==null&&e.update(G,a.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,_(S,V,I,F),G!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return a.createVertexArray()}function l(S){return a.bindVertexArray(S)}function h(S){return a.deleteVertexArray(S)}function u(S,V,I){const F=I.wireframe===!0;let G=n[S.id];G===void 0&&(G={},n[S.id]=G);let Y=G[V.id];Y===void 0&&(Y={},G[V.id]=Y);let q=Y[F];return q===void 0&&(q=d(c()),Y[F]=q),q}function d(S){const V=[],I=[],F=[];for(let G=0;G<t;G++)V[G]=0,I[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:I,attributeDivisors:F,object:S,attributes:{},index:null}}function f(S,V,I,F){const G=r.attributes,Y=V.attributes;let q=0;const J=I.getAttributes();for(const B in J)if(J[B].location>=0){const j=G[B];let z=Y[B];if(z===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(z=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(z=S.instanceColor)),j===void 0||j.attribute!==z||z&&j.data!==z.data)return!0;q++}return r.attributesNum!==q||r.index!==F}function g(S,V,I,F){const G={},Y=V.attributes;let q=0;const J=I.getAttributes();for(const B in J)if(J[B].location>=0){let j=Y[B];j===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(j=S.instanceColor));const z={};z.attribute=j,j&&j.data&&(z.data=j.data),G[B]=z,q++}r.attributes=G,r.attributesNum=q,r.index=F}function v(){const S=r.newAttributes;for(let V=0,I=S.length;V<I;V++)S[V]=0}function p(S){m(S,0)}function m(S,V){const I=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;I[S]=1,F[S]===0&&(a.enableVertexAttribArray(S),F[S]=1),G[S]!==V&&(a.vertexAttribDivisor(S,V),G[S]=V)}function b(){const S=r.newAttributes,V=r.enabledAttributes;for(let I=0,F=V.length;I<F;I++)V[I]!==S[I]&&(a.disableVertexAttribArray(I),V[I]=0)}function y(S,V,I,F,G,Y,q){q===!0?a.vertexAttribIPointer(S,V,I,G,Y):a.vertexAttribPointer(S,V,I,F,G,Y)}function _(S,V,I,F){v();const G=F.attributes,Y=I.getAttributes(),q=V.defaultAttributeValues;for(const J in Y){const B=Y[J];if(B.location>=0){let K=G[J];if(K===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const j=K.normalized,z=K.itemSize,te=e.get(K);if(te===void 0)continue;const se=te.buffer,P=te.type,C=te.bytesPerElement,R=P===a.INT||P===a.UNSIGNED_INT||K.gpuType===Ju;if(K.isInterleavedBufferAttribute){const M=K.data,W=M.stride,re=K.offset;if(M.isInstancedInterleavedBuffer){for(let U=0;U<B.locationSize;U++)m(B.location+U,M.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=M.meshPerAttribute*M.count)}else for(let U=0;U<B.locationSize;U++)p(B.location+U);a.bindBuffer(a.ARRAY_BUFFER,se);for(let U=0;U<B.locationSize;U++)y(B.location+U,z/B.locationSize,P,j,W*C,(re+z/B.locationSize*U)*C,R)}else{if(K.isInstancedBufferAttribute){for(let M=0;M<B.locationSize;M++)m(B.location+M,K.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let M=0;M<B.locationSize;M++)p(B.location+M);a.bindBuffer(a.ARRAY_BUFFER,se);for(let M=0;M<B.locationSize;M++)y(B.location+M,z/B.locationSize,P,j,z*C,z/B.locationSize*M*C,R)}}else if(q!==void 0){const j=q[J];if(j!==void 0)switch(j.length){case 2:a.vertexAttrib2fv(B.location,j);break;case 3:a.vertexAttrib3fv(B.location,j);break;case 4:a.vertexAttrib4fv(B.location,j);break;default:a.vertexAttrib1fv(B.location,j)}}}}b()}function L(){N();for(const S in n){const V=n[S];for(const I in V){const F=V[I];for(const G in F)h(F[G].object),delete F[G];delete V[I]}delete n[S]}}function D(S){if(n[S.id]===void 0)return;const V=n[S.id];for(const I in V){const F=V[I];for(const G in F)h(F[G].object),delete F[G];delete V[I]}delete n[S.id]}function T(S){for(const V in n){const I=n[V];if(I[S.id]===void 0)continue;const F=I[S.id];for(const G in F)h(F[G].object),delete F[G];delete I[S.id]}}function N(){E(),o=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:N,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:b}}function av(a,e,t){let n;function i(l){n=l}function r(l,h){a.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(a.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function s(l,h,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],h[f]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)t.update(g,n,d[v])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function ov(a,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(D){return!(D!==En&&n.convert(D)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(D){const T=D===qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==vi&&n.convert(D)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Zn&&!T)}function c(D){if(D==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),b=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,L=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:m,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:_,maxSamples:L}}function sv(a){const e=this;let t=null,n=0,i=!1,r=!1;const o=new jn,s=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=a.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const b=r?0:n,y=b*4;let _=m.clippingState||null;c.value=_,_=h(g,d,y,f);for(let L=0;L!==y;++L)_[L]=t[L];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=f+v*4,b=d.matrixWorldInverse;s.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,_=f;y!==v;++y,_+=4)o.copy(u[y]).applyMatrix4(b,s),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function cv(a){let e=new WeakMap;function t(o,s){return s===gc?o.mapping=Ar:s===vc&&(o.mapping=Cr),o}function n(o){if(o&&o.isTexture){const s=o.mapping;if(s===gc||s===vc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new xm(c.height);return l.fromEquirectangularTexture(a,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Gc extends md{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,s-=h*this.view.offsetY,c=s-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vr=4,yh=[.125,.215,.35,.446,.526,.582],Ui=20,ks=new Gc,xh=new Je;let Bs=null,zs=0,Gs=0,Hs=!1;const Li=(1+Math.sqrt(5))/2,fr=1/Li,_h=[new X(-Li,fr,0),new X(Li,fr,0),new X(-fr,0,Li),new X(fr,0,Li),new X(0,Li,-fr),new X(0,Li,fr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Bs=this._renderer.getRenderTarget(),zs=this._renderer.getActiveCubeFace(),Gs=this._renderer.getActiveMipmapLevel(),Hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bs,zs,Gs),this._renderer.xr.enabled=Hs,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bs=this._renderer.getRenderTarget(),zs=this._renderer.getActiveCubeFace(),Gs=this._renderer.getActiveMipmapLevel(),Hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:qo,format:En,colorSpace:bi,depthBuffer:!1},i=bh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lv(r)),this._blurMaterial=hv(r,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,ks)}_sceneToCubeUV(e,t,n,i){const s=new fn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xh),h.toneMapping=gi,h.autoClear=!1;const f=new wa({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Et(new Wi,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(xh),v=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(s.up.set(0,c[m],0),s.lookAt(l[m],0,0)):b===1?(s.up.set(0,0,c[m]),s.lookAt(0,l[m],0)):(s.up.set(0,c[m],0),s.lookAt(0,0,l[m]));const y=this._cubeSize;so(i,b*y,m>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,s),h.render(e,s)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ar||e.mapping===Cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const c=this._cubeSize;so(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ks)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=_h[(i-r-1)%_h.length];this._blur(e,r-1,r,o,s)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Et(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Ui;p>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ui}`);const m=[];let b=0;for(let T=0;T<Ui;++T){const N=T/v,E=Math.exp(-N*N/2);m.push(E),T===0?b+=E:T<p&&(b+=2*E)}for(let T=0;T<m.length;T++)m[T]=m[T]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const _=this._sizeLods[i],L=3*_*(i>y-vr?i-y+vr:0),D=4*(this._cubeSize-_);so(t,L,D,3*_,2*_),c.setRenderTarget(t),c.render(u,ks)}}function lv(a){const e=[],t=[],n=[];let i=a;const r=a-vr+1+yh.length;for(let o=0;o<r;o++){const s=Math.pow(2,i);t.push(s);let c=1/s;o>a-vr?c=yh[o-a+vr-1]:o===0&&(c=0),n.push(c);const l=1/(s-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,p=2,m=1,b=new Float32Array(v*g*f),y=new Float32Array(p*g*f),_=new Float32Array(m*g*f);for(let D=0;D<f;D++){const T=D%3*2/3-1,N=D>2?0:-1,E=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];b.set(E,v*g*D),y.set(d,p*g*D);const S=[D,D,D,D,D,D];_.set(S,m*g*D)}const L=new tn;L.setAttribute("position",new gn(b,v)),L.setAttribute("uv",new gn(y,p)),L.setAttribute("faceIndex",new gn(_,m)),e.push(L),i>vr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bh(a,e,t){const n=new Bi(a,e,t);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function hv(a,e,t){const n=new Float32Array(Ui),i=new X(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Mh(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function wh(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Hc(){return`

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
	`}function uv(a){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===gc||c===vc,h=c===Ar||c===Cr;if(l||h){let u=e.get(s);const d=u!==void 0?u.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return t===null&&(t=new Sh(a)),u=l?t.fromEquirectangular(s,u):t.fromCubemap(s,u),u.texture.pmremVersion=s.pmremVersion,e.set(s,u),u.texture;if(u!==void 0)return u.texture;{const f=s.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Sh(a)),u=l?t.fromEquirectangular(s):t.fromCubemap(s),u.texture.pmremVersion=s.pmremVersion,e.set(s,u),s.addEventListener("dispose",r),u.texture):null}}}return s}function i(s){let c=0;const l=6;for(let h=0;h<l;h++)s[h]!==void 0&&c++;return c===l}function r(s){const c=s.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function dv(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fv(a,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],a.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],a.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const b=f.array;v=f.version;for(let y=0,_=b.length;y<_;y+=3){const L=b[y+0],D=b[y+1],T=b[y+2];d.push(L,D,D,T,T,L)}}else if(g!==void 0){const b=g.array;v=g.version;for(let y=0,_=b.length/3-1;y<_;y+=3){const L=y+0,D=y+1,T=y+2;d.push(L,D,D,T,T,L)}}else return;const p=new(sd(d)?dd:ud)(d,1);p.version=v;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:s,update:c,getWireframeAttribute:h}}function pv(a,e,t){let n;function i(d){n=d}let r,o;function s(d){r=d.type,o=d.bytesPerElement}function c(d,f){a.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(a.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<g;p++)this.render(d[p]/o,f[p]);else{v.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}}function u(d,f,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let m=0;for(let b=0;b<g;b++)m+=f[b];for(let b=0;b<v.length;b++)t.update(m,n,v[b])}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function mv(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(t.calls++,o){case a.TRIANGLES:t.triangles+=s*(r/3);break;case a.LINES:t.lines+=s*(r/2);break;case a.LINE_STRIP:t.lines+=s*(r-1);break;case a.LINE_LOOP:t.lines+=s*r;break;case a.POINTS:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gv(a,e,t){const n=new WeakMap,i=new vt;function r(o,s,c){const l=o.morphTargetInfluences,h=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(s);if(d===void 0||d.count!==u){let S=function(){N.dispose(),n.delete(s),s.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=s.morphAttributes.position!==void 0,v=s.morphAttributes.normal!==void 0,p=s.morphAttributes.color!==void 0,m=s.morphAttributes.position||[],b=s.morphAttributes.normal||[],y=s.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let L=s.attributes.position.count*_,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*D*4*u),N=new ld(T,L,D,u);N.type=Zn,N.needsUpdate=!0;const E=_*4;for(let V=0;V<u;V++){const I=m[V],F=b[V],G=y[V],Y=L*D*4*V;for(let q=0;q<I.count;q++){const J=q*E;g===!0&&(i.fromBufferAttribute(I,q),T[Y+J+0]=i.x,T[Y+J+1]=i.y,T[Y+J+2]=i.z,T[Y+J+3]=0),v===!0&&(i.fromBufferAttribute(F,q),T[Y+J+4]=i.x,T[Y+J+5]=i.y,T[Y+J+6]=i.z,T[Y+J+7]=0),p===!0&&(i.fromBufferAttribute(G,q),T[Y+J+8]=i.x,T[Y+J+9]=i.y,T[Y+J+10]=i.z,T[Y+J+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:N,size:new _e(L,D)},n.set(s,d),s.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=s.morphTargetsRelative?1:1-g;c.getUniforms().setValue(a,"morphTargetBaseInfluence",v),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:r}}function vv(a,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),i.get(c)!==l&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class yd extends Dt{constructor(e,t,n,i,r,o,s,c,l,h){if(h=h!==void 0?h:Mr,h!==Mr&&h!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mr&&(n=Rr),n===void 0&&h===fa&&(n=Ma),super(null,i,r,o,s,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xd=new Dt,_d=new yd(1,1);_d.compareFunction=od;const Sd=new ld,bd=new rm,Md=new gd,Th=[],Eh=[],Ah=new Float32Array(16),Ch=new Float32Array(9),Rh=new Float32Array(4);function Ur(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Th[i];if(r===void 0&&(r=new Float32Array(i),Th[i]=r),e!==0){n.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(r,s)}return r}function _t(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function St(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Jo(a,e){let t=Eh[e];t===void 0&&(t=new Int32Array(e),Eh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function yv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function xv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;a.uniform2fv(this.addr,e),St(t,e)}}function _v(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;a.uniform3fv(this.addr,e),St(t,e)}}function Sv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;a.uniform4fv(this.addr,e),St(t,e)}}function bv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(_t(t,n))return;Rh.set(n),a.uniformMatrix2fv(this.addr,!1,Rh),St(t,n)}}function Mv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(_t(t,n))return;Ch.set(n),a.uniformMatrix3fv(this.addr,!1,Ch),St(t,n)}}function wv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(_t(t,n))return;Ah.set(n),a.uniformMatrix4fv(this.addr,!1,Ah),St(t,n)}}function Tv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Ev(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;a.uniform2iv(this.addr,e),St(t,e)}}function Av(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;a.uniform3iv(this.addr,e),St(t,e)}}function Cv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;a.uniform4iv(this.addr,e),St(t,e)}}function Rv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Pv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;a.uniform2uiv(this.addr,e),St(t,e)}}function Dv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;a.uniform3uiv(this.addr,e),St(t,e)}}function Lv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;a.uniform4uiv(this.addr,e),St(t,e)}}function Iv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);const r=this.type===a.SAMPLER_2D_SHADOW?_d:xd;t.setTexture2D(e||r,i)}function Uv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bd,i)}function Nv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Md,i)}function Fv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sd,i)}function Ov(a){switch(a){case 5126:return yv;case 35664:return xv;case 35665:return _v;case 35666:return Sv;case 35674:return bv;case 35675:return Mv;case 35676:return wv;case 5124:case 35670:return Tv;case 35667:case 35671:return Ev;case 35668:case 35672:return Av;case 35669:case 35673:return Cv;case 5125:return Rv;case 36294:return Pv;case 36295:return Dv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Fv}}function kv(a,e){a.uniform1fv(this.addr,e)}function Bv(a,e){const t=Ur(e,this.size,2);a.uniform2fv(this.addr,t)}function zv(a,e){const t=Ur(e,this.size,3);a.uniform3fv(this.addr,t)}function Gv(a,e){const t=Ur(e,this.size,4);a.uniform4fv(this.addr,t)}function Hv(a,e){const t=Ur(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Vv(a,e){const t=Ur(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Wv(a,e){const t=Ur(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function jv(a,e){a.uniform1iv(this.addr,e)}function Xv(a,e){a.uniform2iv(this.addr,e)}function Yv(a,e){a.uniform3iv(this.addr,e)}function qv(a,e){a.uniform4iv(this.addr,e)}function Zv(a,e){a.uniform1uiv(this.addr,e)}function Kv(a,e){a.uniform2uiv(this.addr,e)}function Jv(a,e){a.uniform3uiv(this.addr,e)}function $v(a,e){a.uniform4uiv(this.addr,e)}function Qv(a,e,t){const n=this.cache,i=e.length,r=Jo(t,i);_t(n,r)||(a.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||xd,r[o])}function ey(a,e,t){const n=this.cache,i=e.length,r=Jo(t,i);_t(n,r)||(a.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||bd,r[o])}function ty(a,e,t){const n=this.cache,i=e.length,r=Jo(t,i);_t(n,r)||(a.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Md,r[o])}function ny(a,e,t){const n=this.cache,i=e.length,r=Jo(t,i);_t(n,r)||(a.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Sd,r[o])}function iy(a){switch(a){case 5126:return kv;case 35664:return Bv;case 35665:return zv;case 35666:return Gv;case 35674:return Hv;case 35675:return Vv;case 35676:return Wv;case 5124:case 35670:return jv;case 35667:case 35671:return Xv;case 35668:case 35672:return Yv;case 35669:case 35673:return qv;case 5125:return Zv;case 36294:return Kv;case 36295:return Jv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}class ry{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ov(t.type)}}class ay{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iy(t.type)}}class oy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const Vs=/(\w+)(\])?(\[|\.)?/g;function Ph(a,e){a.seq.push(e),a.map[e.id]=e}function sy(a,e,t){const n=a.name,i=n.length;for(Vs.lastIndex=0;;){const r=Vs.exec(n),o=Vs.lastIndex;let s=r[1];const c=r[2]==="]",l=r[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===i){Ph(t,l===void 0?new ry(s,a,e):new ay(s,a,e));break}else{let u=t.map[s];u===void 0&&(u=new oy(s),Ph(t,u)),t=u}}}class wo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);sy(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const s=t[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Dh(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const cy=37297;let ly=0;function hy(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function uy(a){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(a);let n;switch(e===t?n="":e===Io&&t===Lo?n="LinearDisplayP3ToLinearSRGB":e===Lo&&t===Io&&(n="LinearSRGBToLinearDisplayP3"),a){case bi:case Zo:return[n,"LinearTransferOETF"];case Jt:case Oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[n,"LinearTransferOETF"]}}function Lh(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+hy(a.getShaderSource(e),o)}else return i}function dy(a,e){const t=uy(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fy(a,e){let t;switch(e){case lp:t="Linear";break;case hp:t="Reinhard";break;case up:t="OptimizedCineon";break;case dp:t="ACESFilmic";break;case pp:t="AgX";break;case mp:t="Neutral";break;case fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function py(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function my(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gy(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),o=r.name;let s=1;r.type===a.FLOAT_MAT2&&(s=2),r.type===a.FLOAT_MAT3&&(s=3),r.type===a.FLOAT_MAT4&&(s=4),t[o]={type:r.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function na(a){return a!==""}function Ih(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(a){return a.replace(vy,xy)}const yy=new Map;function xy(a,e){let t=Ke[e];if(t===void 0){const n=yy.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _c(t)}const _y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(a){return a.replace(_y,Sy)}function Sy(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fh(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function by(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function My(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ar:case Cr:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wy(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ty(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case qu:e="ENVMAP_BLENDING_MULTIPLY";break;case sp:e="ENVMAP_BLENDING_MIX";break;case cp:e="ENVMAP_BLENDING_ADD";break}return e}function Ey(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ay(a,e,t,n){const i=a.getContext(),r=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=by(t),l=My(t),h=wy(t),u=Ty(t),d=Ey(t),f=py(t),g=my(r),v=i.createProgram();let p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(na).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(na).join(`
`),m.length>0&&(m+=`
`)):(p=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),m=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==gi?fy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,dy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),o=_c(o),o=Ih(o,t),o=Uh(o,t),s=_c(s),s=Ih(s,t),s=Uh(s,t),o=Nh(o),s=Nh(s),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=b+p+o,_=b+m+s,L=Dh(i,i.VERTEX_SHADER,y),D=Dh(i,i.FRAGMENT_SHADER,_);i.attachShader(v,L),i.attachShader(v,D),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function T(V){if(a.debug.checkShaderErrors){const I=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(L).trim(),G=i.getShaderInfoLog(D).trim();let Y=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,v,L,D);else{const J=Lh(i,L,"vertex"),B=Lh(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+I+`
`+J+`
`+B)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||G==="")&&(q=!1);q&&(V.diagnostics={runnable:Y,programLog:I,vertexShader:{log:F,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(L),i.deleteShader(D),N=new wo(i,v),E=gy(i,v)}let N;this.getUniforms=function(){return N===void 0&&T(this),N};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,cy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ly++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=D,this}let Cy=0;class Ry{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Py(e),t.set(e,n)),n}}class Py{constructor(e){this.id=Cy++,this.code=e,this.usedTimes=0}}function Dy(a,e,t,n,i,r,o){const s=new Bc,c=new Ry,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,S,V,I,F){const G=I.fog,Y=F.geometry,q=E.isMeshStandardMaterial?I.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),B=J&&J.mapping===Yo?J.image.height:null,K=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const j=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,z=j!==void 0?j.length:0;let te=0;Y.morphAttributes.position!==void 0&&(te=1),Y.morphAttributes.normal!==void 0&&(te=2),Y.morphAttributes.color!==void 0&&(te=3);let se,P,C,R;if(K){const Le=Tn[K];se=Le.vertexShader,P=Le.fragmentShader}else se=E.vertexShader,P=E.fragmentShader,c.update(E),C=c.getVertexShaderID(E),R=c.getFragmentShaderID(E);const M=a.getRenderTarget(),W=F.isInstancedMesh===!0,re=F.isBatchedMesh===!0,U=!!E.map,ie=!!E.matcap,Z=!!J,ve=!!E.aoMap,Q=!!E.lightMap,le=!!E.bumpMap,de=!!E.normalMap,me=!!E.displacementMap,H=!!E.emissiveMap,x=!!E.metalnessMap,w=!!E.roughnessMap,k=E.anisotropy>0,ae=E.clearcoat>0,ne=E.dispersion>0,oe=E.iridescence>0,xe=E.sheen>0,be=E.transmission>0,pe=k&&!!E.anisotropyMap,Me=ae&&!!E.clearcoatMap,ge=ae&&!!E.clearcoatNormalMap,Ee=ae&&!!E.clearcoatRoughnessMap,Ue=oe&&!!E.iridescenceMap,Re=oe&&!!E.iridescenceThicknessMap,Se=xe&&!!E.sheenColorMap,Ce=xe&&!!E.sheenRoughnessMap,we=!!E.specularMap,Oe=!!E.specularColorMap,Fe=!!E.specularIntensityMap,A=be&&!!E.transmissionMap,ee=be&&!!E.thicknessMap,$=!!E.gradientMap,ye=!!E.alphaMap,Ae=E.alphaTest>0,Ne=!!E.alphaHash,Pe=!!E.extensions;let Xe=gi;E.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Xe=a.toneMapping);const qe={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:P,defines:E.defines,customVertexShaderID:C,customFragmentShaderID:R,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:re,instancing:W,instancingColor:W&&F.instanceColor!==null,instancingMorph:W&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:M===null?a.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:bi,alphaToCoverage:!!E.alphaToCoverage,map:U,matcap:ie,envMap:Z,envMapMode:Z&&J.mapping,envMapCubeUVHeight:B,aoMap:ve,lightMap:Q,bumpMap:le,normalMap:de,displacementMap:d&&me,emissiveMap:H,normalMapObjectSpace:de&&E.normalMapType===Ap,normalMapTangentSpace:de&&E.normalMapType===ad,metalnessMap:x,roughnessMap:w,anisotropy:k,anisotropyMap:pe,clearcoat:ae,clearcoatMap:Me,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ee,dispersion:ne,iridescence:oe,iridescenceMap:Ue,iridescenceThicknessMap:Re,sheen:xe,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Oe,specularIntensityMap:Fe,transmission:be,transmissionMap:A,thicknessMap:ee,gradientMap:$,opaque:E.transparent===!1&&E.blending===br&&E.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ae,alphaHash:Ne,combine:E.combine,mapUv:U&&v(E.map.channel),aoMapUv:ve&&v(E.aoMap.channel),lightMapUv:Q&&v(E.lightMap.channel),bumpMapUv:le&&v(E.bumpMap.channel),normalMapUv:de&&v(E.normalMap.channel),displacementMapUv:me&&v(E.displacementMap.channel),emissiveMapUv:H&&v(E.emissiveMap.channel),metalnessMapUv:x&&v(E.metalnessMap.channel),roughnessMapUv:w&&v(E.roughnessMap.channel),anisotropyMapUv:pe&&v(E.anisotropyMap.channel),clearcoatMapUv:Me&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ge&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(E.sheenRoughnessMap.channel),specularMapUv:we&&v(E.specularMap.channel),specularColorMapUv:Oe&&v(E.specularColorMap.channel),specularIntensityMapUv:Fe&&v(E.specularIntensityMap.channel),transmissionMapUv:A&&v(E.transmissionMap.channel),thicknessMapUv:ee&&v(E.thicknessMap.channel),alphaMapUv:ye&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(de||k),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(U||ye),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:Xe,useLegacyLights:a._useLegacyLights,decodeVideoTexture:U&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$t,flipSided:E.side===Gt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Pe&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function m(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)S.push(V),S.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(b(S,E),y(S,E),S.push(a.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function b(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),E.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.skinning&&s.enable(4),S.morphTargets&&s.enable(5),S.morphNormals&&s.enable(6),S.morphColors&&s.enable(7),S.premultipliedAlpha&&s.enable(8),S.shadowMapEnabled&&s.enable(9),S.useLegacyLights&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.alphaToCoverage&&s.enable(20),E.push(s.mask)}function _(E){const S=g[E.type];let V;if(S){const I=Tn[S];V=pd.clone(I.uniforms)}else V=E.uniforms;return V}function L(E,S){let V;for(let I=0,F=h.length;I<F;I++){const G=h[I];if(G.cacheKey===S){V=G,++V.usedTimes;break}}return V===void 0&&(V=new Ay(a,S,E,r),h.push(V)),V}function D(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function T(E){c.remove(E)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:L,releaseProgram:D,releaseShaderCache:T,programs:h,dispose:N}}function Ly(){let a=new WeakMap;function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function t(r){a.delete(r)}function n(r,o,s){a.get(r)[o]=s}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Iy(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Oh(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function kh(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,p){let m=a[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},a[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),e++,m}function s(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(u,d,f,g,v,p){const m=o(u,d,f,g,v,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||Iy),n.length>1&&n.sort(d||Oh),i.length>1&&i.sort(d||Oh)}function h(){for(let u=e,d=a.length;u<d;u++){const f=a[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:c,finish:h,sort:l}}function Uy(){let a=new WeakMap;function e(n,i){const r=a.get(n);let o;return r===void 0?(o=new kh,a.set(n,[o])):i>=r.length?(o=new kh,r.push(o)):o=r[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Ny(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Je};break;case"SpotLight":t={position:new X,direction:new X,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new X,halfWidth:new X,halfHeight:new X};break}return a[e.id]=t,t}}}function Fy(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Oy=0;function ky(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function By(a){const e=new Ny,t=Fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);const i=new X,r=new rt,o=new rt;function s(l,h){let u=0,d=0,f=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let g=0,v=0,p=0,m=0,b=0,y=0,_=0,L=0,D=0,T=0,N=0;l.sort(ky);const E=h===!0?Math.PI:1;for(let V=0,I=l.length;V<I;V++){const F=l[V],G=F.color,Y=F.intensity,q=F.distance,J=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=G.r*Y*E,d+=G.g*Y*E,f+=G.b*Y*E;else if(F.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(F.sh.coefficients[B],Y);N++}else if(F.isDirectionalLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity*E),F.castShadow){const K=F.shadow,j=t.get(F);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=F.shadow.matrix,y++}n.directional[g]=B,g++}else if(F.isSpotLight){const B=e.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(G).multiplyScalar(Y*E),B.distance=q,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,n.spot[p]=B;const K=F.shadow;if(F.map&&(n.spotLightMap[D]=F.map,D++,K.updateMatrices(F),F.castShadow&&T++),n.spotLightMatrix[p]=K.matrix,F.castShadow){const j=t.get(F);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.spotShadow[p]=j,n.spotShadowMap[p]=J,L++}p++}else if(F.isRectAreaLight){const B=e.get(F);B.color.copy(G).multiplyScalar(Y),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=B,m++}else if(F.isPointLight){const B=e.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity*E),B.distance=F.distance,B.decay=F.decay,F.castShadow){const K=F.shadow,j=t.get(F);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,n.pointShadow[v]=j,n.pointShadowMap[v]=J,n.pointShadowMatrix[v]=F.shadow.matrix,_++}n.point[v]=B,v++}else if(F.isHemisphereLight){const B=e.get(F);B.skyColor.copy(F.color).multiplyScalar(Y*E),B.groundColor.copy(F.groundColor).multiplyScalar(Y*E),n.hemi[b]=B,b++}}m>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==g||S.pointLength!==v||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==b||S.numDirectionalShadows!==y||S.numPointShadows!==_||S.numSpotShadows!==L||S.numSpotMaps!==D||S.numLightProbes!==N)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=v,n.hemi.length=b,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=L+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=N,S.directionalLength=g,S.pointLength=v,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=b,S.numDirectionalShadows=y,S.numPointShadows=_,S.numSpotShadows=L,S.numSpotMaps=D,S.numLightProbes=N,n.version=Oy++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){const y=l[m];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),u++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(p),v++}}}return{setup:s,setupView:c,state:n}}function Bh(a){const e=new By(a),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function s(h){e.setup(t,h)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:r,pushShadow:o}}function zy(a){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let s;return o===void 0?(s=new Bh(a),e.set(i,[s])):r>=o.length?(s=new Bh(a),o.push(s)):s=o[r],s}function n(){e=new WeakMap}return{get:t,dispose:n}}class wd extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Td extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
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
}`;function Vy(a,e,t){let n=new zc;const i=new _e,r=new _e,o=new vt,s=new wd({depthPacking:rd}),c=new Td,l={},h=t.maxTextureSize,u={[$n]:Gt,[Gt]:$n,[$t]:$t},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Gy,fragmentShader:Hy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Et(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let m=this.type;this.render=function(D,T,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const E=a.getRenderTarget(),S=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),I=a.state;I.setBlending(mi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=m!==Vn&&this.type===Vn,G=m===Vn&&this.type!==Vn;for(let Y=0,q=D.length;Y<q;Y++){const J=D[Y],B=J.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const K=B.getFrameExtents();if(i.multiply(K),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,B.mapSize.y=r.y)),B.map===null||F===!0||G===!0){const z=this.type!==Vn?{minFilter:Wt,magFilter:Wt}:{};B.map!==null&&B.map.dispose(),B.map=new Bi(i.x,i.y,z),B.map.texture.name=J.name+".shadowMap",B.camera.updateProjectionMatrix()}a.setRenderTarget(B.map),a.clear();const j=B.getViewportCount();for(let z=0;z<j;z++){const te=B.getViewport(z);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),I.viewport(o),B.updateMatrices(J,z),n=B.getFrustum(),_(T,N,B.camera,J,this.type)}B.isPointLightShadow!==!0&&this.type===Vn&&b(B,N),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(E,S,V)};function b(D,T){const N=e.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Bi(i.x,i.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,a.setRenderTarget(D.mapPass),a.clear(),a.renderBufferDirect(T,null,N,d,v,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,a.setRenderTarget(D.map),a.clear(),a.renderBufferDirect(T,null,N,f,v,null)}function y(D,T,N,E){let S=null;const V=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)S=V;else if(S=N.isPointLight===!0?c:s,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=S.uuid,F=T.uuid;let G=l[I];G===void 0&&(G={},l[I]=G);let Y=G[F];Y===void 0&&(Y=S.clone(),G[F]=Y,T.addEventListener("dispose",L)),S=Y}if(S.visible=T.visible,S.wireframe=T.wireframe,E===Vn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=a.properties.get(S);I.light=N}return S}function _(D,T,N,E,S){if(D.visible===!1)return;if(D.layers.test(T.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===Vn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const F=e.update(D),G=D.material;if(Array.isArray(G)){const Y=F.groups;for(let q=0,J=Y.length;q<J;q++){const B=Y[q],K=G[B.materialIndex];if(K&&K.visible){const j=y(D,K,E,S);D.onBeforeShadow(a,D,T,N,F,j,B),a.renderBufferDirect(N,null,F,j,D,B),D.onAfterShadow(a,D,T,N,F,j,B)}}}else if(G.visible){const Y=y(D,G,E,S);D.onBeforeShadow(a,D,T,N,F,Y,null),a.renderBufferDirect(N,null,F,Y,D,null),D.onAfterShadow(a,D,T,N,F,Y,null)}}const I=D.children;for(let F=0,G=I.length;F<G;F++)_(I[F],T,N,E,S)}function L(D){D.target.removeEventListener("dispose",L);for(const N in l){const E=l[N],S=D.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function Wy(a){function e(){let A=!1;const ee=new vt;let $=null;const ye=new vt(0,0,0,0);return{setMask:function(Ae){$!==Ae&&!A&&(a.colorMask(Ae,Ae,Ae,Ae),$=Ae)},setLocked:function(Ae){A=Ae},setClear:function(Ae,Ne,Pe,Xe,qe){qe===!0&&(Ae*=Xe,Ne*=Xe,Pe*=Xe),ee.set(Ae,Ne,Pe,Xe),ye.equals(ee)===!1&&(a.clearColor(Ae,Ne,Pe,Xe),ye.copy(ee))},reset:function(){A=!1,$=null,ye.set(-1,0,0,0)}}}function t(){let A=!1,ee=null,$=null,ye=null;return{setTest:function(Ae){Ae?R(a.DEPTH_TEST):M(a.DEPTH_TEST)},setMask:function(Ae){ee!==Ae&&!A&&(a.depthMask(Ae),ee=Ae)},setFunc:function(Ae){if($!==Ae){switch(Ae){case ep:a.depthFunc(a.NEVER);break;case tp:a.depthFunc(a.ALWAYS);break;case np:a.depthFunc(a.LESS);break;case Po:a.depthFunc(a.LEQUAL);break;case ip:a.depthFunc(a.EQUAL);break;case rp:a.depthFunc(a.GEQUAL);break;case ap:a.depthFunc(a.GREATER);break;case op:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}$=Ae}},setLocked:function(Ae){A=Ae},setClear:function(Ae){ye!==Ae&&(a.clearDepth(Ae),ye=Ae)},reset:function(){A=!1,ee=null,$=null,ye=null}}}function n(){let A=!1,ee=null,$=null,ye=null,Ae=null,Ne=null,Pe=null,Xe=null,qe=null;return{setTest:function(Le){A||(Le?R(a.STENCIL_TEST):M(a.STENCIL_TEST))},setMask:function(Le){ee!==Le&&!A&&(a.stencilMask(Le),ee=Le)},setFunc:function(Le,je,Ze){($!==Le||ye!==je||Ae!==Ze)&&(a.stencilFunc(Le,je,Ze),$=Le,ye=je,Ae=Ze)},setOp:function(Le,je,Ze){(Ne!==Le||Pe!==je||Xe!==Ze)&&(a.stencilOp(Le,je,Ze),Ne=Le,Pe=je,Xe=Ze)},setLocked:function(Le){A=Le},setClear:function(Le){qe!==Le&&(a.clearStencil(Le),qe=Le)},reset:function(){A=!1,ee=null,$=null,ye=null,Ae=null,Ne=null,Pe=null,Xe=null,qe=null}}}const i=new e,r=new t,o=new n,s=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,b=null,y=null,_=null,L=null,D=new Je(0,0,0),T=0,N=!1,E=null,S=null,V=null,I=null,F=null;const G=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,q=0;const J=a.getParameter(a.VERSION);J.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=q>=1):J.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=q>=2);let B=null,K={};const j=a.getParameter(a.SCISSOR_BOX),z=a.getParameter(a.VIEWPORT),te=new vt().fromArray(j),se=new vt().fromArray(z);function P(A,ee,$,ye){const Ae=new Uint8Array(4),Ne=a.createTexture();a.bindTexture(A,Ne),a.texParameteri(A,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(A,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Pe=0;Pe<$;Pe++)A===a.TEXTURE_3D||A===a.TEXTURE_2D_ARRAY?a.texImage3D(ee,0,a.RGBA,1,1,ye,0,a.RGBA,a.UNSIGNED_BYTE,Ae):a.texImage2D(ee+Pe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ae);return Ne}const C={};C[a.TEXTURE_2D]=P(a.TEXTURE_2D,a.TEXTURE_2D,1),C[a.TEXTURE_CUBE_MAP]=P(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[a.TEXTURE_2D_ARRAY]=P(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),C[a.TEXTURE_3D]=P(a.TEXTURE_3D,a.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),R(a.DEPTH_TEST),r.setFunc(Po),le(!1),de(xl),R(a.CULL_FACE),ve(mi);function R(A){l[A]!==!0&&(a.enable(A),l[A]=!0)}function M(A){l[A]!==!1&&(a.disable(A),l[A]=!1)}function W(A,ee){return h[A]!==ee?(a.bindFramebuffer(A,ee),h[A]=ee,A===a.DRAW_FRAMEBUFFER&&(h[a.FRAMEBUFFER]=ee),A===a.FRAMEBUFFER&&(h[a.DRAW_FRAMEBUFFER]=ee),!0):!1}function re(A,ee){let $=d,ye=!1;if(A){$=u.get(ee),$===void 0&&($=[],u.set(ee,$));const Ae=A.textures;if($.length!==Ae.length||$[0]!==a.COLOR_ATTACHMENT0){for(let Ne=0,Pe=Ae.length;Ne<Pe;Ne++)$[Ne]=a.COLOR_ATTACHMENT0+Ne;$.length=Ae.length,ye=!0}}else $[0]!==a.BACK&&($[0]=a.BACK,ye=!0);ye&&a.drawBuffers($)}function U(A){return f!==A?(a.useProgram(A),f=A,!0):!1}const ie={[Ii]:a.FUNC_ADD,[Of]:a.FUNC_SUBTRACT,[kf]:a.FUNC_REVERSE_SUBTRACT};ie[Bf]=a.MIN,ie[zf]=a.MAX;const Z={[Gf]:a.ZERO,[Hf]:a.ONE,[Vf]:a.SRC_COLOR,[pc]:a.SRC_ALPHA,[Zf]:a.SRC_ALPHA_SATURATE,[Yf]:a.DST_COLOR,[jf]:a.DST_ALPHA,[Wf]:a.ONE_MINUS_SRC_COLOR,[mc]:a.ONE_MINUS_SRC_ALPHA,[qf]:a.ONE_MINUS_DST_COLOR,[Xf]:a.ONE_MINUS_DST_ALPHA,[Kf]:a.CONSTANT_COLOR,[Jf]:a.ONE_MINUS_CONSTANT_COLOR,[$f]:a.CONSTANT_ALPHA,[Qf]:a.ONE_MINUS_CONSTANT_ALPHA};function ve(A,ee,$,ye,Ae,Ne,Pe,Xe,qe,Le){if(A===mi){g===!0&&(M(a.BLEND),g=!1);return}if(g===!1&&(R(a.BLEND),g=!0),A!==Ff){if(A!==v||Le!==N){if((p!==Ii||y!==Ii)&&(a.blendEquation(a.FUNC_ADD),p=Ii,y=Ii),Le)switch(A){case br:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case _l:a.blendFunc(a.ONE,a.ONE);break;case Sl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case bl:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case br:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case _l:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Sl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case bl:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}m=null,b=null,_=null,L=null,D.set(0,0,0),T=0,v=A,N=Le}return}Ae=Ae||ee,Ne=Ne||$,Pe=Pe||ye,(ee!==p||Ae!==y)&&(a.blendEquationSeparate(ie[ee],ie[Ae]),p=ee,y=Ae),($!==m||ye!==b||Ne!==_||Pe!==L)&&(a.blendFuncSeparate(Z[$],Z[ye],Z[Ne],Z[Pe]),m=$,b=ye,_=Ne,L=Pe),(Xe.equals(D)===!1||qe!==T)&&(a.blendColor(Xe.r,Xe.g,Xe.b,qe),D.copy(Xe),T=qe),v=A,N=!1}function Q(A,ee){A.side===$t?M(a.CULL_FACE):R(a.CULL_FACE);let $=A.side===Gt;ee&&($=!$),le($),A.blending===br&&A.transparent===!1?ve(mi):ve(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),r.setFunc(A.depthFunc),r.setTest(A.depthTest),r.setMask(A.depthWrite),i.setMask(A.colorWrite);const ye=A.stencilWrite;o.setTest(ye),ye&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),H(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?R(a.SAMPLE_ALPHA_TO_COVERAGE):M(a.SAMPLE_ALPHA_TO_COVERAGE)}function le(A){E!==A&&(A?a.frontFace(a.CW):a.frontFace(a.CCW),E=A)}function de(A){A!==Uf?(R(a.CULL_FACE),A!==S&&(A===xl?a.cullFace(a.BACK):A===Nf?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):M(a.CULL_FACE),S=A}function me(A){A!==V&&(Y&&a.lineWidth(A),V=A)}function H(A,ee,$){A?(R(a.POLYGON_OFFSET_FILL),(I!==ee||F!==$)&&(a.polygonOffset(ee,$),I=ee,F=$)):M(a.POLYGON_OFFSET_FILL)}function x(A){A?R(a.SCISSOR_TEST):M(a.SCISSOR_TEST)}function w(A){A===void 0&&(A=a.TEXTURE0+G-1),B!==A&&(a.activeTexture(A),B=A)}function k(A,ee,$){$===void 0&&(B===null?$=a.TEXTURE0+G-1:$=B);let ye=K[$];ye===void 0&&(ye={type:void 0,texture:void 0},K[$]=ye),(ye.type!==A||ye.texture!==ee)&&(B!==$&&(a.activeTexture($),B=$),a.bindTexture(A,ee||C[A]),ye.type=A,ye.texture=ee)}function ae(){const A=K[B];A!==void 0&&A.type!==void 0&&(a.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function ne(){try{a.compressedTexImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function oe(){try{a.compressedTexImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{a.texSubImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function be(){try{a.texSubImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Me(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ge(){try{a.texStorage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ee(){try{a.texStorage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ue(){try{a.texImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Re(){try{a.texImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Se(A){te.equals(A)===!1&&(a.scissor(A.x,A.y,A.z,A.w),te.copy(A))}function Ce(A){se.equals(A)===!1&&(a.viewport(A.x,A.y,A.z,A.w),se.copy(A))}function we(A,ee){let $=c.get(ee);$===void 0&&($=new WeakMap,c.set(ee,$));let ye=$.get(A);ye===void 0&&(ye=a.getUniformBlockIndex(ee,A.name),$.set(A,ye))}function Oe(A,ee){const ye=c.get(ee).get(A);s.get(ee)!==ye&&(a.uniformBlockBinding(ee,ye,A.__bindingPointIndex),s.set(ee,ye))}function Fe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),l={},B=null,K={},h={},u=new WeakMap,d=[],f=null,g=!1,v=null,p=null,m=null,b=null,y=null,_=null,L=null,D=new Je(0,0,0),T=0,N=!1,E=null,S=null,V=null,I=null,F=null,te.set(0,0,a.canvas.width,a.canvas.height),se.set(0,0,a.canvas.width,a.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:R,disable:M,bindFramebuffer:W,drawBuffers:re,useProgram:U,setBlending:ve,setMaterial:Q,setFlipSided:le,setCullFace:de,setLineWidth:me,setPolygonOffset:H,setScissorTest:x,activeTexture:w,bindTexture:k,unbindTexture:ae,compressedTexImage2D:ne,compressedTexImage3D:oe,texImage2D:Ue,texImage3D:Re,updateUBOMapping:we,uniformBlockBinding:Oe,texStorage2D:ge,texStorage3D:Ee,texSubImage2D:xe,texSubImage3D:be,compressedTexSubImage2D:pe,compressedTexSubImage3D:Me,scissor:Se,viewport:Ce,reset:Fe}}function jy(a,e,t,n,i,r,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _e,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,w){return f?new OffscreenCanvas(x,w):ma("canvas")}function v(x,w,k){let ae=1;const ne=H(x);if((ne.width>k||ne.height>k)&&(ae=k/Math.max(ne.width,ne.height)),ae<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const oe=Math.floor(ae*ne.width),xe=Math.floor(ae*ne.height);u===void 0&&(u=g(oe,xe));const be=w?g(oe,xe):u;return be.width=oe,be.height=xe,be.getContext("2d").drawImage(x,0,0,oe,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+oe+"x"+xe+")."),be}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),x;return x}function p(x){return x.generateMipmaps&&x.minFilter!==Wt&&x.minFilter!==Qt}function m(x){a.generateMipmap(x)}function b(x,w,k,ae,ne=!1){if(x!==null){if(a[x]!==void 0)return a[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let oe=w;if(w===a.RED&&(k===a.FLOAT&&(oe=a.R32F),k===a.HALF_FLOAT&&(oe=a.R16F),k===a.UNSIGNED_BYTE&&(oe=a.R8)),w===a.RED_INTEGER&&(k===a.UNSIGNED_BYTE&&(oe=a.R8UI),k===a.UNSIGNED_SHORT&&(oe=a.R16UI),k===a.UNSIGNED_INT&&(oe=a.R32UI),k===a.BYTE&&(oe=a.R8I),k===a.SHORT&&(oe=a.R16I),k===a.INT&&(oe=a.R32I)),w===a.RG&&(k===a.FLOAT&&(oe=a.RG32F),k===a.HALF_FLOAT&&(oe=a.RG16F),k===a.UNSIGNED_BYTE&&(oe=a.RG8)),w===a.RG_INTEGER&&(k===a.UNSIGNED_BYTE&&(oe=a.RG8UI),k===a.UNSIGNED_SHORT&&(oe=a.RG16UI),k===a.UNSIGNED_INT&&(oe=a.RG32UI),k===a.BYTE&&(oe=a.RG8I),k===a.SHORT&&(oe=a.RG16I),k===a.INT&&(oe=a.RG32I)),w===a.RGB&&k===a.UNSIGNED_INT_5_9_9_9_REV&&(oe=a.RGB9_E5),w===a.RGBA){const xe=ne?Do:it.getTransfer(ae);k===a.FLOAT&&(oe=a.RGBA32F),k===a.HALF_FLOAT&&(oe=a.RGBA16F),k===a.UNSIGNED_BYTE&&(oe=xe===ct?a.SRGB8_ALPHA8:a.RGBA8),k===a.UNSIGNED_SHORT_4_4_4_4&&(oe=a.RGBA4),k===a.UNSIGNED_SHORT_5_5_5_1&&(oe=a.RGB5_A1)}return(oe===a.R16F||oe===a.R32F||oe===a.RG16F||oe===a.RG32F||oe===a.RGBA16F||oe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function y(x,w){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==Wt&&x.minFilter!==Qt?Math.log2(Math.max(w.width,w.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?w.mipmaps.length:1}function _(x){const w=x.target;w.removeEventListener("dispose",_),D(w),w.isVideoTexture&&h.delete(w)}function L(x){const w=x.target;w.removeEventListener("dispose",L),N(w)}function D(x){const w=n.get(x);if(w.__webglInit===void 0)return;const k=x.source,ae=d.get(k);if(ae){const ne=ae[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(x),Object.keys(ae).length===0&&d.delete(k)}n.remove(x)}function T(x){const w=n.get(x);a.deleteTexture(w.__webglTexture);const k=x.source,ae=d.get(k);delete ae[w.__cacheKey],o.memory.textures--}function N(x){const w=n.get(x);if(x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let ne=0;ne<w.__webglFramebuffer[ae].length;ne++)a.deleteFramebuffer(w.__webglFramebuffer[ae][ne]);else a.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)a.deleteFramebuffer(w.__webglFramebuffer[ae]);else a.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&a.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&a.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&a.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const k=x.textures;for(let ae=0,ne=k.length;ae<ne;ae++){const oe=n.get(k[ae]);oe.__webglTexture&&(a.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(k[ae])}n.remove(x)}let E=0;function S(){E=0}function V(){const x=E;return x>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+i.maxTextures),E+=1,x}function I(x){const w=[];return w.push(x.wrapS),w.push(x.wrapT),w.push(x.wrapR||0),w.push(x.magFilter),w.push(x.minFilter),w.push(x.anisotropy),w.push(x.internalFormat),w.push(x.format),w.push(x.type),w.push(x.generateMipmaps),w.push(x.premultiplyAlpha),w.push(x.flipY),w.push(x.unpackAlignment),w.push(x.colorSpace),w.join()}function F(x,w){const k=n.get(x);if(x.isVideoTexture&&de(x),x.isRenderTargetTexture===!1&&x.version>0&&k.__version!==x.version){const ae=x.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(k,x,w);return}}t.bindTexture(a.TEXTURE_2D,k.__webglTexture,a.TEXTURE0+w)}function G(x,w){const k=n.get(x);if(x.version>0&&k.__version!==x.version){te(k,x,w);return}t.bindTexture(a.TEXTURE_2D_ARRAY,k.__webglTexture,a.TEXTURE0+w)}function Y(x,w){const k=n.get(x);if(x.version>0&&k.__version!==x.version){te(k,x,w);return}t.bindTexture(a.TEXTURE_3D,k.__webglTexture,a.TEXTURE0+w)}function q(x,w){const k=n.get(x);if(x.version>0&&k.__version!==x.version){se(k,x,w);return}t.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+w)}const J={[yc]:a.REPEAT,[qn]:a.CLAMP_TO_EDGE,[xc]:a.MIRRORED_REPEAT},B={[Wt]:a.NEAREST,[gp]:a.NEAREST_MIPMAP_NEAREST,[za]:a.NEAREST_MIPMAP_LINEAR,[Qt]:a.LINEAR,[fs]:a.LINEAR_MIPMAP_NEAREST,[Ni]:a.LINEAR_MIPMAP_LINEAR},K={[Cp]:a.NEVER,[Up]:a.ALWAYS,[Rp]:a.LESS,[od]:a.LEQUAL,[Pp]:a.EQUAL,[Ip]:a.GEQUAL,[Dp]:a.GREATER,[Lp]:a.NOTEQUAL};function j(x,w){if(w.type===Zn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Qt||w.magFilter===fs||w.magFilter===za||w.magFilter===Ni||w.minFilter===Qt||w.minFilter===fs||w.minFilter===za||w.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(x,a.TEXTURE_WRAP_S,J[w.wrapS]),a.texParameteri(x,a.TEXTURE_WRAP_T,J[w.wrapT]),(x===a.TEXTURE_3D||x===a.TEXTURE_2D_ARRAY)&&a.texParameteri(x,a.TEXTURE_WRAP_R,J[w.wrapR]),a.texParameteri(x,a.TEXTURE_MAG_FILTER,B[w.magFilter]),a.texParameteri(x,a.TEXTURE_MIN_FILTER,B[w.minFilter]),w.compareFunction&&(a.texParameteri(x,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(x,a.TEXTURE_COMPARE_FUNC,K[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Wt||w.minFilter!==za&&w.minFilter!==Ni||w.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");a.texParameterf(x,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function z(x,w){let k=!1;x.__webglInit===void 0&&(x.__webglInit=!0,w.addEventListener("dispose",_));const ae=w.source;let ne=d.get(ae);ne===void 0&&(ne={},d.set(ae,ne));const oe=I(w);if(oe!==x.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ne[oe].usedTimes++;const xe=ne[x.__cacheKey];xe!==void 0&&(ne[x.__cacheKey].usedTimes--,xe.usedTimes===0&&T(w)),x.__cacheKey=oe,x.__webglTexture=ne[oe].texture}return k}function te(x,w,k){let ae=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=a.TEXTURE_3D);const ne=z(x,w),oe=w.source;t.bindTexture(ae,x.__webglTexture,a.TEXTURE0+k);const xe=n.get(oe);if(oe.version!==xe.__version||ne===!0){t.activeTexture(a.TEXTURE0+k);const be=it.getPrimaries(it.workingColorSpace),pe=w.colorSpace===fi?null:it.getPrimaries(w.colorSpace),Me=w.colorSpace===fi||be===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ge=v(w.image,!1,i.maxTextureSize);ge=me(w,ge);const Ee=r.convert(w.format,w.colorSpace),Ue=r.convert(w.type);let Re=b(w.internalFormat,Ee,Ue,w.colorSpace,w.isVideoTexture);j(ae,w);let Se;const Ce=w.mipmaps,we=w.isVideoTexture!==!0,Oe=xe.__version===void 0||ne===!0,Fe=oe.dataReady,A=y(w,ge);if(w.isDepthTexture)Re=a.DEPTH_COMPONENT16,w.type===Zn?Re=a.DEPTH_COMPONENT32F:w.type===Rr?Re=a.DEPTH_COMPONENT24:w.type===Ma&&(Re=a.DEPTH24_STENCIL8),Oe&&(we?t.texStorage2D(a.TEXTURE_2D,1,Re,ge.width,ge.height):t.texImage2D(a.TEXTURE_2D,0,Re,ge.width,ge.height,0,Ee,Ue,null));else if(w.isDataTexture)if(Ce.length>0){we&&Oe&&t.texStorage2D(a.TEXTURE_2D,A,Re,Ce[0].width,Ce[0].height);for(let ee=0,$=Ce.length;ee<$;ee++)Se=Ce[ee],we?Fe&&t.texSubImage2D(a.TEXTURE_2D,ee,0,0,Se.width,Se.height,Ee,Ue,Se.data):t.texImage2D(a.TEXTURE_2D,ee,Re,Se.width,Se.height,0,Ee,Ue,Se.data);w.generateMipmaps=!1}else we?(Oe&&t.texStorage2D(a.TEXTURE_2D,A,Re,ge.width,ge.height),Fe&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ge.width,ge.height,Ee,Ue,ge.data)):t.texImage2D(a.TEXTURE_2D,0,Re,ge.width,ge.height,0,Ee,Ue,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){we&&Oe&&t.texStorage3D(a.TEXTURE_2D_ARRAY,A,Re,Ce[0].width,Ce[0].height,ge.depth);for(let ee=0,$=Ce.length;ee<$;ee++)Se=Ce[ee],w.format!==En?Ee!==null?we?Fe&&t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ee,0,0,0,Se.width,Se.height,ge.depth,Ee,Se.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ee,Re,Se.width,Se.height,ge.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Fe&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ee,0,0,0,Se.width,Se.height,ge.depth,Ee,Ue,Se.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ee,Re,Se.width,Se.height,ge.depth,0,Ee,Ue,Se.data)}else{we&&Oe&&t.texStorage2D(a.TEXTURE_2D,A,Re,Ce[0].width,Ce[0].height);for(let ee=0,$=Ce.length;ee<$;ee++)Se=Ce[ee],w.format!==En?Ee!==null?we?Fe&&t.compressedTexSubImage2D(a.TEXTURE_2D,ee,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(a.TEXTURE_2D,ee,Re,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Fe&&t.texSubImage2D(a.TEXTURE_2D,ee,0,0,Se.width,Se.height,Ee,Ue,Se.data):t.texImage2D(a.TEXTURE_2D,ee,Re,Se.width,Se.height,0,Ee,Ue,Se.data)}else if(w.isDataArrayTexture)we?(Oe&&t.texStorage3D(a.TEXTURE_2D_ARRAY,A,Re,ge.width,ge.height,ge.depth),Fe&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ee,Ue,ge.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,Re,ge.width,ge.height,ge.depth,0,Ee,Ue,ge.data);else if(w.isData3DTexture)we?(Oe&&t.texStorage3D(a.TEXTURE_3D,A,Re,ge.width,ge.height,ge.depth),Fe&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ee,Ue,ge.data)):t.texImage3D(a.TEXTURE_3D,0,Re,ge.width,ge.height,ge.depth,0,Ee,Ue,ge.data);else if(w.isFramebufferTexture){if(Oe)if(we)t.texStorage2D(a.TEXTURE_2D,A,Re,ge.width,ge.height);else{let ee=ge.width,$=ge.height;for(let ye=0;ye<A;ye++)t.texImage2D(a.TEXTURE_2D,ye,Re,ee,$,0,Ee,Ue,null),ee>>=1,$>>=1}}else if(Ce.length>0){if(we&&Oe){const ee=H(Ce[0]);t.texStorage2D(a.TEXTURE_2D,A,Re,ee.width,ee.height)}for(let ee=0,$=Ce.length;ee<$;ee++)Se=Ce[ee],we?Fe&&t.texSubImage2D(a.TEXTURE_2D,ee,0,0,Ee,Ue,Se):t.texImage2D(a.TEXTURE_2D,ee,Re,Ee,Ue,Se);w.generateMipmaps=!1}else if(we){if(Oe){const ee=H(ge);t.texStorage2D(a.TEXTURE_2D,A,Re,ee.width,ee.height)}Fe&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ee,Ue,ge)}else t.texImage2D(a.TEXTURE_2D,0,Re,Ee,Ue,ge);p(w)&&m(ae),xe.__version=oe.version,w.onUpdate&&w.onUpdate(w)}x.__version=w.version}function se(x,w,k){if(w.image.length!==6)return;const ae=z(x,w),ne=w.source;t.bindTexture(a.TEXTURE_CUBE_MAP,x.__webglTexture,a.TEXTURE0+k);const oe=n.get(ne);if(ne.version!==oe.__version||ae===!0){t.activeTexture(a.TEXTURE0+k);const xe=it.getPrimaries(it.workingColorSpace),be=w.colorSpace===fi?null:it.getPrimaries(w.colorSpace),pe=w.colorSpace===fi||xe===be?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Me=w.isCompressedTexture||w.image[0].isCompressedTexture,ge=w.image[0]&&w.image[0].isDataTexture,Ee=[];for(let $=0;$<6;$++)!Me&&!ge?Ee[$]=v(w.image[$],!0,i.maxCubemapSize):Ee[$]=ge?w.image[$].image:w.image[$],Ee[$]=me(w,Ee[$]);const Ue=Ee[0],Re=r.convert(w.format,w.colorSpace),Se=r.convert(w.type),Ce=b(w.internalFormat,Re,Se,w.colorSpace),we=w.isVideoTexture!==!0,Oe=oe.__version===void 0||ae===!0,Fe=ne.dataReady;let A=y(w,Ue);j(a.TEXTURE_CUBE_MAP,w);let ee;if(Me){we&&Oe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,A,Ce,Ue.width,Ue.height);for(let $=0;$<6;$++){ee=Ee[$].mipmaps;for(let ye=0;ye<ee.length;ye++){const Ae=ee[ye];w.format!==En?Re!==null?we?Fe&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,Ae.width,Ae.height,Re,Ae.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Ce,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?Fe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,Ae.width,Ae.height,Re,Se,Ae.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Ce,Ae.width,Ae.height,0,Re,Se,Ae.data)}}}else{if(ee=w.mipmaps,we&&Oe){ee.length>0&&A++;const $=H(Ee[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,A,Ce,$.width,$.height)}for(let $=0;$<6;$++)if(ge){we?Fe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ee[$].width,Ee[$].height,Re,Se,Ee[$].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ce,Ee[$].width,Ee[$].height,0,Re,Se,Ee[$].data);for(let ye=0;ye<ee.length;ye++){const Ne=ee[ye].image[$].image;we?Fe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,Ne.width,Ne.height,Re,Se,Ne.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Ce,Ne.width,Ne.height,0,Re,Se,Ne.data)}}else{we?Fe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Re,Se,Ee[$]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ce,Re,Se,Ee[$]);for(let ye=0;ye<ee.length;ye++){const Ae=ee[ye];we?Fe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,Re,Se,Ae.image[$]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Ce,Re,Se,Ae.image[$])}}}p(w)&&m(a.TEXTURE_CUBE_MAP),oe.__version=ne.version,w.onUpdate&&w.onUpdate(w)}x.__version=w.version}function P(x,w,k,ae,ne,oe){const xe=r.convert(k.format,k.colorSpace),be=r.convert(k.type),pe=b(k.internalFormat,xe,be,k.colorSpace);if(!n.get(w).__hasExternalTextures){const ge=Math.max(1,w.width>>oe),Ee=Math.max(1,w.height>>oe);ne===a.TEXTURE_3D||ne===a.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,pe,ge,Ee,w.depth,0,xe,be,null):t.texImage2D(ne,oe,pe,ge,Ee,0,xe,be,null)}t.bindFramebuffer(a.FRAMEBUFFER,x),le(w)?s.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ae,ne,n.get(k).__webglTexture,0,Q(w)):(ne===a.TEXTURE_2D||ne>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ae,ne,n.get(k).__webglTexture,oe),t.bindFramebuffer(a.FRAMEBUFFER,null)}function C(x,w,k){if(a.bindRenderbuffer(a.RENDERBUFFER,x),w.depthBuffer&&!w.stencilBuffer){let ae=a.DEPTH_COMPONENT24;if(k||le(w)){const ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Zn?ae=a.DEPTH_COMPONENT32F:ne.type===Rr&&(ae=a.DEPTH_COMPONENT24));const oe=Q(w);le(w)?s.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,oe,ae,w.width,w.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,oe,ae,w.width,w.height)}else a.renderbufferStorage(a.RENDERBUFFER,ae,w.width,w.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,x)}else if(w.depthBuffer&&w.stencilBuffer){const ae=Q(w);k&&le(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ae,a.DEPTH24_STENCIL8,w.width,w.height):le(w)?s.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ae,a.DEPTH24_STENCIL8,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,x)}else{const ae=w.textures;for(let ne=0;ne<ae.length;ne++){const oe=ae[ne],xe=r.convert(oe.format,oe.colorSpace),be=r.convert(oe.type),pe=b(oe.internalFormat,xe,be,oe.colorSpace),Me=Q(w);k&&le(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Me,pe,w.width,w.height):le(w)?s.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Me,pe,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,pe,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function R(x,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,x),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const ae=n.get(w.depthTexture).__webglTexture,ne=Q(w);if(w.depthTexture.format===Mr)le(w)?s.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ae,0,ne):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ae,0);else if(w.depthTexture.format===fa)le(w)?s.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ae,0,ne):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function M(x){const w=n.get(x),k=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!w.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");R(w.__webglFramebuffer,x)}else if(k){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]=a.createRenderbuffer(),C(w.__webglDepthbuffer[ae],x,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),C(w.__webglDepthbuffer,x,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function W(x,w,k){const ae=n.get(x);w!==void 0&&P(ae.__webglFramebuffer,x,x.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),k!==void 0&&M(x)}function re(x){const w=x.texture,k=n.get(x),ae=n.get(w);x.addEventListener("dispose",L);const ne=x.textures,oe=x.isWebGLCubeRenderTarget===!0,xe=ne.length>1;if(xe||(ae.__webglTexture===void 0&&(ae.__webglTexture=a.createTexture()),ae.__version=w.version,o.memory.textures++),oe){k.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[be]=[];for(let pe=0;pe<w.mipmaps.length;pe++)k.__webglFramebuffer[be][pe]=a.createFramebuffer()}else k.__webglFramebuffer[be]=a.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)k.__webglFramebuffer[be]=a.createFramebuffer()}else k.__webglFramebuffer=a.createFramebuffer();if(xe)for(let be=0,pe=ne.length;be<pe;be++){const Me=n.get(ne[be]);Me.__webglTexture===void 0&&(Me.__webglTexture=a.createTexture(),o.memory.textures++)}if(x.samples>0&&le(x)===!1){k.__webglMultisampledFramebuffer=a.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let be=0;be<ne.length;be++){const pe=ne[be];k.__webglColorRenderbuffer[be]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,k.__webglColorRenderbuffer[be]);const Me=r.convert(pe.format,pe.colorSpace),ge=r.convert(pe.type),Ee=b(pe.internalFormat,Me,ge,pe.colorSpace,x.isXRRenderTarget===!0),Ue=Q(x);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ue,Ee,x.width,x.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+be,a.RENDERBUFFER,k.__webglColorRenderbuffer[be])}a.bindRenderbuffer(a.RENDERBUFFER,null),x.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),C(k.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(oe){t.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture),j(a.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)P(k.__webglFramebuffer[be][pe],x,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+be,pe);else P(k.__webglFramebuffer[be],x,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);p(w)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let be=0,pe=ne.length;be<pe;be++){const Me=ne[be],ge=n.get(Me);t.bindTexture(a.TEXTURE_2D,ge.__webglTexture),j(a.TEXTURE_2D,Me),P(k.__webglFramebuffer,x,Me,a.COLOR_ATTACHMENT0+be,a.TEXTURE_2D,0),p(Me)&&m(a.TEXTURE_2D)}t.unbindTexture()}else{let be=a.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(be=x.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(be,ae.__webglTexture),j(be,w),w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)P(k.__webglFramebuffer[pe],x,w,a.COLOR_ATTACHMENT0,be,pe);else P(k.__webglFramebuffer,x,w,a.COLOR_ATTACHMENT0,be,0);p(w)&&m(be),t.unbindTexture()}x.depthBuffer&&M(x)}function U(x){const w=x.textures;for(let k=0,ae=w.length;k<ae;k++){const ne=w[k];if(p(ne)){const oe=x.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,xe=n.get(ne).__webglTexture;t.bindTexture(oe,xe),m(oe),t.unbindTexture()}}}const ie=[],Z=[];function ve(x){if(x.samples>0){if(le(x)===!1){const w=x.textures,k=x.width,ae=x.height;let ne=a.COLOR_BUFFER_BIT;const oe=x.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,xe=n.get(x),be=w.length>1;if(be)for(let pe=0;pe<w.length;pe++)t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(ne|=a.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(ne|=a.STENCIL_BUFFER_BIT)),be){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const Me=n.get(w[pe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Me,0)}a.blitFramebuffer(0,0,k,ae,0,0,k,ae,ne,a.NEAREST),c===!0&&(ie.length=0,Z.length=0,ie.push(a.COLOR_ATTACHMENT0+pe),x.depthBuffer&&x.resolveDepthBuffer===!1&&(ie.push(oe),Z.push(oe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Z)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),be)for(let pe=0;pe<w.length;pe++){t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const Me=n.get(w[pe]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,xe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.TEXTURE_2D,Me,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&c){const w=x.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[w])}}}function Q(x){return Math.min(i.maxSamples,x.samples)}function le(x){const w=n.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function de(x){const w=o.render.frame;h.get(x)!==w&&(h.set(x,w),x.update())}function me(x,w){const k=x.colorSpace,ae=x.format,ne=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||k!==bi&&k!==fi&&(it.getTransfer(k)===ct?(ae!==En||ne!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),w}function H(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(l.width=x.naturalWidth||x.width,l.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(l.width=x.displayWidth,l.height=x.displayHeight):(l.width=x.width,l.height=x.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=S,this.setTexture2D=F,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=W,this.setupRenderTarget=re,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=M,this.setupFrameBufferTexture=P,this.useMultisampledRTT=le}function Xy(a,e){function t(n,i=fi){let r;const o=it.getTransfer(i);if(n===vi)return a.UNSIGNED_BYTE;if(n===$u)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Qu)return a.UNSIGNED_SHORT_5_5_5_1;if(n===xp)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===vp)return a.BYTE;if(n===yp)return a.SHORT;if(n===Ku)return a.UNSIGNED_SHORT;if(n===Ju)return a.INT;if(n===Rr)return a.UNSIGNED_INT;if(n===Zn)return a.FLOAT;if(n===qo)return a.HALF_FLOAT;if(n===_p)return a.ALPHA;if(n===Sp)return a.RGB;if(n===En)return a.RGBA;if(n===bp)return a.LUMINANCE;if(n===Mp)return a.LUMINANCE_ALPHA;if(n===Mr)return a.DEPTH_COMPONENT;if(n===fa)return a.DEPTH_STENCIL;if(n===ed)return a.RED;if(n===td)return a.RED_INTEGER;if(n===wp)return a.RG;if(n===nd)return a.RG_INTEGER;if(n===id)return a.RGBA_INTEGER;if(n===ps||n===ms||n===gs||n===vs)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ml||n===wl||n===Tl||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Cl||n===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Cl)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===Fl||n===Ol||n===kl||n===Bl||n===zl||n===Gl||n===Hl||n===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ys||n===Wl||n===jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ys)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tp||n===Xl||n===Yl||n===ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ys)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ma?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}class Yy extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class An extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qy={type:"move"};class Ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(qy)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ky=`
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

}`;class Jy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Dt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new ei({vertexShader:Zy,fragmentShader:Ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Et(new ri(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class $y extends Gi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,s="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new Jy,p=t.getContextAttributes();let m=null,b=null;const y=[],_=[],L=new _e;let D=null;const T=new fn;T.layers.enable(1),T.viewport=new vt;const N=new fn;N.layers.enable(2),N.viewport=new vt;const E=[T,N],S=new Yy;S.layers.enable(1),S.layers.enable(2);let V=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let C=y[P];return C===void 0&&(C=new Ws,y[P]=C),C.getTargetRaySpace()},this.getControllerGrip=function(P){let C=y[P];return C===void 0&&(C=new Ws,y[P]=C),C.getGripSpace()},this.getHand=function(P){let C=y[P];return C===void 0&&(C=new Ws,y[P]=C),C.getHandSpace()};function F(P){const C=_.indexOf(P.inputSource);if(C===-1)return;const R=y[C];R!==void 0&&(R.update(P.inputSource,P.frame,l||o),R.dispatchEvent({type:P.type,data:P.inputSource}))}function G(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Y);for(let P=0;P<y.length;P++){const C=_[P];C!==null&&(_[P]=null,y[P].disconnect(C))}V=null,I=null,v.reset(),e.setRenderTarget(m),f=null,d=null,u=null,i=null,b=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){s=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(P){if(i=P,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const C={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,C),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Bi(f.framebufferWidth,f.framebufferHeight,{format:En,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let C=null,R=null,M=null;p.depth&&(M=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,C=p.stencil?fa:Mr,R=p.stencil?Ma:Rr);const W={colorFormat:t.RGBA8,depthFormat:M,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(W),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Bi(d.textureWidth,d.textureHeight,{format:En,type:vi,depthTexture:new yd(d.textureWidth,d.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(s),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Y(P){for(let C=0;C<P.removed.length;C++){const R=P.removed[C],M=_.indexOf(R);M>=0&&(_[M]=null,y[M].disconnect(R))}for(let C=0;C<P.added.length;C++){const R=P.added[C];let M=_.indexOf(R);if(M===-1){for(let re=0;re<y.length;re++)if(re>=_.length){_.push(R),M=re;break}else if(_[re]===null){_[re]=R,M=re;break}if(M===-1)break}const W=y[M];W&&W.connect(R)}}const q=new X,J=new X;function B(P,C,R){q.setFromMatrixPosition(C.matrixWorld),J.setFromMatrixPosition(R.matrixWorld);const M=q.distanceTo(J),W=C.projectionMatrix.elements,re=R.projectionMatrix.elements,U=W[14]/(W[10]-1),ie=W[14]/(W[10]+1),Z=(W[9]+1)/W[5],ve=(W[9]-1)/W[5],Q=(W[8]-1)/W[0],le=(re[8]+1)/re[0],de=U*Q,me=U*le,H=M/(-Q+le),x=H*-Q;C.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(x),P.translateZ(H),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const w=U+H,k=ie+H,ae=de-x,ne=me+(M-x),oe=Z*ie/k*w,xe=ve*ie/k*w;P.projectionMatrix.makePerspective(ae,ne,oe,xe,w,k),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function K(P,C){C===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(C.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(i===null)return;v.texture!==null&&(P.near=v.depthNear,P.far=v.depthFar),S.near=N.near=T.near=P.near,S.far=N.far=T.far=P.far,(V!==S.near||I!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),V=S.near,I=S.far,T.near=V,T.far=I,N.near=V,N.far=I,T.updateProjectionMatrix(),N.updateProjectionMatrix(),P.updateProjectionMatrix());const C=P.parent,R=S.cameras;K(S,C);for(let M=0;M<R.length;M++)K(R[M],C);R.length===2?B(S,T,N):S.projectionMatrix.copy(T.projectionMatrix),j(P,S,C)};function j(P,C,R){R===null?P.matrix.copy(C.matrixWorld):(P.matrix.copy(R.matrixWorld),P.matrix.invert(),P.matrix.multiply(C.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(C.projectionMatrix),P.projectionMatrixInverse.copy(C.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=pa*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(P){c=P,d!==null&&(d.fixedFoveation=P),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=P)},this.hasDepthSensing=function(){return v.texture!==null};let z=null;function te(P,C){if(h=C.getViewerPose(l||o),g=C,h!==null){const R=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let M=!1;R.length!==S.cameras.length&&(S.cameras.length=0,M=!0);for(let re=0;re<R.length;re++){const U=R[re];let ie=null;if(f!==null)ie=f.getViewport(U);else{const ve=u.getViewSubImage(d,U);ie=ve.viewport,re===0&&(e.setRenderTargetTextures(b,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(b))}let Z=E[re];Z===void 0&&(Z=new fn,Z.layers.enable(re),Z.viewport=new vt,E[re]=Z),Z.matrix.fromArray(U.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(U.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(ie.x,ie.y,ie.width,ie.height),re===0&&(S.matrix.copy(Z.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),M===!0&&S.cameras.push(Z)}const W=i.enabledFeatures;if(W&&W.includes("depth-sensing")){const re=u.getDepthInformation(R[0]);re&&re.isValid&&re.texture&&v.init(e,re,i.renderState)}}for(let R=0;R<y.length;R++){const M=_[R],W=y[R];M!==null&&W!==void 0&&W.update(M,C,l||o)}v.render(e,S),z&&z(P,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),g=null}const se=new vd;se.setAnimationLoop(te),this.setAnimationLoop=function(P){z=P},this.dispose=function(){}}}const Ri=new Dn,Qy=new rt;function ex(a,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,fd(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?c(p,m,b,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Gt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Gt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=e.get(m),y=b.envMap,_=b.envMapRotation;if(y&&(p.envMap.value=y,Ri.copy(_),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),p.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(Ri)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const L=a._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*L,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tx(a,e,t,n){let i={},r={},o=[];const s=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const _=y.program;n.uniformBlockBinding(b,_)}function l(b,y){let _=i[b.id];_===void 0&&(g(b),_=h(b),i[b.id]=_,b.addEventListener("dispose",p));const L=y.program;n.updateUBOMapping(b,L);const D=e.render.frame;r[b.id]!==D&&(d(b),r[b.id]=D)}function h(b){const y=u();b.__bindingPointIndex=y;const _=a.createBuffer(),L=b.__size,D=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,_),a.bufferData(a.UNIFORM_BUFFER,L,D),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,_),_}function u(){for(let b=0;b<s;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=i[b.id],_=b.uniforms,L=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let D=0,T=_.length;D<T;D++){const N=Array.isArray(_[D])?_[D]:[_[D]];for(let E=0,S=N.length;E<S;E++){const V=N[E];if(f(V,D,E,L)===!0){const I=V.__offset,F=Array.isArray(V.value)?V.value:[V.value];let G=0;for(let Y=0;Y<F.length;Y++){const q=F[Y],J=v(q);typeof q=="number"||typeof q=="boolean"?(V.__data[0]=q,a.bufferSubData(a.UNIFORM_BUFFER,I+G,V.__data)):q.isMatrix3?(V.__data[0]=q.elements[0],V.__data[1]=q.elements[1],V.__data[2]=q.elements[2],V.__data[3]=0,V.__data[4]=q.elements[3],V.__data[5]=q.elements[4],V.__data[6]=q.elements[5],V.__data[7]=0,V.__data[8]=q.elements[6],V.__data[9]=q.elements[7],V.__data[10]=q.elements[8],V.__data[11]=0):(q.toArray(V.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,I,V.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(b,y,_,L){const D=b.value,T=y+"_"+_;if(L[T]===void 0)return typeof D=="number"||typeof D=="boolean"?L[T]=D:L[T]=D.clone(),!0;{const N=L[T];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return L[T]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function g(b){const y=b.uniforms;let _=0;const L=16;for(let T=0,N=y.length;T<N;T++){const E=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,V=E.length;S<V;S++){const I=E[S],F=Array.isArray(I.value)?I.value:[I.value];for(let G=0,Y=F.length;G<Y;G++){const q=F[G],J=v(q),B=_%L;B!==0&&L-B<J.boundary&&(_+=L-B),I.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=J.storage}}}const D=_%L;return D>0&&(_+=L-D),b.__size=_,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const b in i)a.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class nx{constructor(e={}){const{canvas:t=Jp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const y=this;let _=!1,L=0,D=0,T=null,N=-1,E=null;const S=new vt,V=new vt;let I=null;const F=new Je(0);let G=0,Y=t.width,q=t.height,J=1,B=null,K=null;const j=new vt(0,0,Y,q),z=new vt(0,0,Y,q);let te=!1;const se=new zc;let P=!1,C=!1;const R=new rt,M=new X,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return T===null?J:1}let U=n;function ie(O,ce){return t.getContext(O,ce)}try{const O={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fc}`),t.addEventListener("webglcontextlost",A,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",$,!1),U===null){const ce="webgl2";if(U=ie(ce,O),U===null)throw ie(ce)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let Z,ve,Q,le,de,me,H,x,w,k,ae,ne,oe,xe,be,pe,Me,ge,Ee,Ue,Re,Se,Ce,we;function Oe(){Z=new dv(U),Z.init(),Se=new Xy(U,Z),ve=new ov(U,Z,e,Se),Q=new Wy(U),le=new mv(U),de=new Ly,me=new jy(U,Z,Q,de,ve,Se,le),H=new cv(y),x=new uv(y),w=new bm(U),Ce=new rv(U,w),k=new fv(U,w,le,Ce),ae=new vv(U,k,w,le),Ee=new gv(U,ve,me),pe=new sv(de),ne=new Dy(y,H,x,Z,ve,Ce,pe),oe=new ex(y,de),xe=new Uy,be=new zy(Z),ge=new iv(y,H,x,Q,ae,d,c),Me=new Vy(y,ae,ve),we=new tx(U,le,ve,Q),Ue=new av(U,Z,le),Re=new pv(U,Z,le),le.programs=ne.programs,y.capabilities=ve,y.extensions=Z,y.properties=de,y.renderLists=xe,y.shadowMap=Me,y.state=Q,y.info=le}Oe();const Fe=new $y(y,U);this.xr=Fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const O=Z.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=Z.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(O){O!==void 0&&(J=O,this.setSize(Y,q,!1))},this.getSize=function(O){return O.set(Y,q)},this.setSize=function(O,ce,fe=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=O,q=ce,t.width=Math.floor(O*J),t.height=Math.floor(ce*J),fe===!0&&(t.style.width=O+"px",t.style.height=ce+"px"),this.setViewport(0,0,O,ce)},this.getDrawingBufferSize=function(O){return O.set(Y*J,q*J).floor()},this.setDrawingBufferSize=function(O,ce,fe){Y=O,q=ce,J=fe,t.width=Math.floor(O*fe),t.height=Math.floor(ce*fe),this.setViewport(0,0,O,ce)},this.getCurrentViewport=function(O){return O.copy(S)},this.getViewport=function(O){return O.copy(j)},this.setViewport=function(O,ce,fe,he){O.isVector4?j.set(O.x,O.y,O.z,O.w):j.set(O,ce,fe,he),Q.viewport(S.copy(j).multiplyScalar(J).round())},this.getScissor=function(O){return O.copy(z)},this.setScissor=function(O,ce,fe,he){O.isVector4?z.set(O.x,O.y,O.z,O.w):z.set(O,ce,fe,he),Q.scissor(V.copy(z).multiplyScalar(J).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(O){Q.setScissorTest(te=O)},this.setOpaqueSort=function(O){B=O},this.setTransparentSort=function(O){K=O},this.getClearColor=function(O){return O.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(O=!0,ce=!0,fe=!0){let he=0;if(O){let ue=!1;if(T!==null){const Ie=T.texture.format;ue=Ie===id||Ie===nd||Ie===td}if(ue){const Ie=T.texture.type,ke=Ie===vi||Ie===Rr||Ie===Ku||Ie===Ma||Ie===$u||Ie===Qu,Be=ge.getClearColor(),Ge=ge.getClearAlpha(),We=Be.r,Te=Be.g,Ye=Be.b;ke?(f[0]=We,f[1]=Te,f[2]=Ye,f[3]=Ge,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=We,g[1]=Te,g[2]=Ye,g[3]=Ge,U.clearBufferiv(U.COLOR,0,g))}else he|=U.COLOR_BUFFER_BIT}ce&&(he|=U.DEPTH_BUFFER_BIT),fe&&(he|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",A,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",$,!1),xe.dispose(),be.dispose(),de.dispose(),H.dispose(),x.dispose(),ae.dispose(),Ce.dispose(),we.dispose(),ne.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Le),Fe.removeEventListener("sessionend",je),Ze.stop()};function A(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const O=le.autoReset,ce=Me.enabled,fe=Me.autoUpdate,he=Me.needsUpdate,ue=Me.type;Oe(),le.autoReset=O,Me.enabled=ce,Me.autoUpdate=fe,Me.needsUpdate=he,Me.type=ue}function $(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function ye(O){const ce=O.target;ce.removeEventListener("dispose",ye),Ae(ce)}function Ae(O){Ne(O),de.remove(O)}function Ne(O){const ce=de.get(O).programs;ce!==void 0&&(ce.forEach(function(fe){ne.releaseProgram(fe)}),O.isShaderMaterial&&ne.releaseShaderCache(O))}this.renderBufferDirect=function(O,ce,fe,he,ue,Ie){ce===null&&(ce=W);const ke=ue.isMesh&&ue.matrixWorld.determinant()<0,Be=At(O,ce,fe,he,ue);Q.setMaterial(he,ke);let Ge=fe.index,We=1;if(he.wireframe===!0){if(Ge=k.getWireframeAttribute(fe),Ge===void 0)return;We=2}const Te=fe.drawRange,Ye=fe.attributes.position;let ft=Te.start*We,ht=(Te.start+Te.count)*We;Ie!==null&&(ft=Math.max(ft,Ie.start*We),ht=Math.min(ht,(Ie.start+Ie.count)*We)),Ge!==null?(ft=Math.max(ft,0),ht=Math.min(ht,Ge.count)):Ye!=null&&(ft=Math.max(ft,0),ht=Math.min(ht,Ye.count));const Mt=ht-ft;if(Mt<0||Mt===1/0)return;Ce.setup(ue,he,Be,fe,Ge);let rn,et=Ue;if(Ge!==null&&(rn=w.get(Ge),et=Re,et.setIndex(rn)),ue.isMesh)he.wireframe===!0?(Q.setLineWidth(he.wireframeLinewidth*re()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if(ue.isLine){let He=he.linewidth;He===void 0&&(He=1),Q.setLineWidth(He*re()),ue.isLineSegments?et.setMode(U.LINES):ue.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else ue.isPoints?et.setMode(U.POINTS):ue.isSprite&&et.setMode(U.TRIANGLES);if(ue.isBatchedMesh)ue._multiDrawInstances!==null?et.renderMultiDrawInstances(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount,ue._multiDrawInstances):et.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else if(ue.isInstancedMesh)et.renderInstances(ft,Mt,ue.count);else if(fe.isInstancedBufferGeometry){const He=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,bn=Math.min(fe.instanceCount,He);et.renderInstances(ft,Mt,bn)}else et.render(ft,Mt)};function Pe(O,ce,fe){O.transparent===!0&&O.side===$t&&O.forceSinglePass===!1?(O.side=Gt,O.needsUpdate=!0,jt(O,ce,fe),O.side=$n,O.needsUpdate=!0,jt(O,ce,fe),O.side=$t):jt(O,ce,fe)}this.compile=function(O,ce,fe=null){fe===null&&(fe=O),p=be.get(fe),p.init(ce),b.push(p),fe.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ce.layers)&&(p.pushLight(ue),ue.castShadow&&p.pushShadow(ue))}),O!==fe&&O.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ce.layers)&&(p.pushLight(ue),ue.castShadow&&p.pushShadow(ue))}),p.setupLights(y._useLegacyLights);const he=new Set;return O.traverse(function(ue){const Ie=ue.material;if(Ie)if(Array.isArray(Ie))for(let ke=0;ke<Ie.length;ke++){const Be=Ie[ke];Pe(Be,fe,ue),he.add(Be)}else Pe(Ie,fe,ue),he.add(Ie)}),b.pop(),p=null,he},this.compileAsync=function(O,ce,fe=null){const he=this.compile(O,ce,fe);return new Promise(ue=>{function Ie(){if(he.forEach(function(ke){de.get(ke).currentProgram.isReady()&&he.delete(ke)}),he.size===0){ue(O);return}setTimeout(Ie,10)}Z.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Xe=null;function qe(O){Xe&&Xe(O)}function Le(){Ze.stop()}function je(){Ze.start()}const Ze=new vd;Ze.setAnimationLoop(qe),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(O){Xe=O,Fe.setAnimationLoop(O),O===null?Ze.stop():Ze.start()},Fe.addEventListener("sessionstart",Le),Fe.addEventListener("sessionend",je),this.render=function(O,ce){if(ce!==void 0&&ce.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.parent===null&&ce.matrixWorldAutoUpdate===!0&&ce.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(ce),ce=Fe.getCamera()),O.isScene===!0&&O.onBeforeRender(y,O,ce,T),p=be.get(O,b.length),p.init(ce),b.push(p),R.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),se.setFromProjectionMatrix(R),C=this.localClippingEnabled,P=pe.init(this.clippingPlanes,C),v=xe.get(O,m.length),v.init(),m.push(v),st(O,ce,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(B,K);const fe=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1;fe&&ge.addToRenderList(v,O),this.info.render.frame++,P===!0&&pe.beginShadows();const he=p.state.shadowsArray;Me.render(he,O,ce),P===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=v.opaque,Ie=v.transmissive;if(p.setupLights(y._useLegacyLights),ce.isArrayCamera){const ke=ce.cameras;if(Ie.length>0)for(let Be=0,Ge=ke.length;Be<Ge;Be++){const We=ke[Be];mt(ue,Ie,O,We)}fe&&ge.render(O);for(let Be=0,Ge=ke.length;Be<Ge;Be++){const We=ke[Be];tt(v,O,We,We.viewport)}}else Ie.length>0&&mt(ue,Ie,O,ce),fe&&ge.render(O),tt(v,O,ce);T!==null&&(me.updateMultisampleRenderTarget(T),me.updateRenderTargetMipmap(T)),O.isScene===!0&&O.onAfterRender(y,O,ce),Ce.resetDefaultState(),N=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],P===!0&&pe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function st(O,ce,fe,he){if(O.visible===!1)return;if(O.layers.test(ce.layers)){if(O.isGroup)fe=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(ce);else if(O.isLight)p.pushLight(O),O.castShadow&&p.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||se.intersectsSprite(O)){he&&M.setFromMatrixPosition(O.matrixWorld).applyMatrix4(R);const ke=ae.update(O),Be=O.material;Be.visible&&v.push(O,ke,Be,fe,M.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||se.intersectsObject(O))){const ke=ae.update(O),Be=O.material;if(he&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),M.copy(O.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),M.copy(ke.boundingSphere.center)),M.applyMatrix4(O.matrixWorld).applyMatrix4(R)),Array.isArray(Be)){const Ge=ke.groups;for(let We=0,Te=Ge.length;We<Te;We++){const Ye=Ge[We],ft=Be[Ye.materialIndex];ft&&ft.visible&&v.push(O,ke,ft,fe,M.z,Ye)}}else Be.visible&&v.push(O,ke,Be,fe,M.z,null)}}const Ie=O.children;for(let ke=0,Be=Ie.length;ke<Be;ke++)st(Ie[ke],ce,fe,he)}function tt(O,ce,fe,he){const ue=O.opaque,Ie=O.transmissive,ke=O.transparent;p.setupLightsView(fe),P===!0&&pe.setGlobalState(y.clippingPlanes,fe),he&&Q.viewport(S.copy(he)),ue.length>0&&bt(ue,ce,fe),Ie.length>0&&bt(Ie,ce,fe),ke.length>0&&bt(ke,ce,fe),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function mt(O,ce,fe,he){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[he.id]===void 0&&(p.state.transmissionRenderTarget[he.id]=new Bi(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?qo:vi,minFilter:Ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Ie=p.state.transmissionRenderTarget[he.id],ke=he.viewport||S;Ie.setSize(ke.z,ke.w);const Be=y.getRenderTarget();y.setRenderTarget(Ie),y.getClearColor(F),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear();const Ge=y.toneMapping;y.toneMapping=gi;const We=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),p.setupLightsView(he),P===!0&&pe.setGlobalState(y.clippingPlanes,he),bt(O,fe,he),me.updateMultisampleRenderTarget(Ie),me.updateRenderTargetMipmap(Ie),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Ye=0,ft=ce.length;Ye<ft;Ye++){const ht=ce[Ye],Mt=ht.object,rn=ht.geometry,et=ht.material,He=ht.group;if(et.side===$t&&Mt.layers.test(he.layers)){const bn=et.side;et.side=Gt,et.needsUpdate=!0,Ft(Mt,fe,he,rn,et,He),et.side=bn,et.needsUpdate=!0,Te=!0}}Te===!0&&(me.updateMultisampleRenderTarget(Ie),me.updateRenderTargetMipmap(Ie))}y.setRenderTarget(Be),y.setClearColor(F,G),We!==void 0&&(he.viewport=We),y.toneMapping=Ge}function bt(O,ce,fe){const he=ce.isScene===!0?ce.overrideMaterial:null;for(let ue=0,Ie=O.length;ue<Ie;ue++){const ke=O[ue],Be=ke.object,Ge=ke.geometry,We=he===null?ke.material:he,Te=ke.group;Be.layers.test(fe.layers)&&Ft(Be,ce,fe,Ge,We,Te)}}function Ft(O,ce,fe,he,ue,Ie){O.onBeforeRender(y,ce,fe,he,ue,Ie),O.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),ue.onBeforeRender(y,ce,fe,he,O,Ie),ue.transparent===!0&&ue.side===$t&&ue.forceSinglePass===!1?(ue.side=Gt,ue.needsUpdate=!0,y.renderBufferDirect(fe,ce,he,ue,O,Ie),ue.side=$n,ue.needsUpdate=!0,y.renderBufferDirect(fe,ce,he,ue,O,Ie),ue.side=$t):y.renderBufferDirect(fe,ce,he,ue,O,Ie),O.onAfterRender(y,ce,fe,he,ue,Ie)}function jt(O,ce,fe){ce.isScene!==!0&&(ce=W);const he=de.get(O),ue=p.state.lights,Ie=p.state.shadowsArray,ke=ue.state.version,Be=ne.getParameters(O,ue.state,Ie,ce,fe),Ge=ne.getProgramCacheKey(Be);let We=he.programs;he.environment=O.isMeshStandardMaterial?ce.environment:null,he.fog=ce.fog,he.envMap=(O.isMeshStandardMaterial?x:H).get(O.envMap||he.environment),he.envMapRotation=he.environment!==null&&O.envMap===null?ce.environmentRotation:O.envMapRotation,We===void 0&&(O.addEventListener("dispose",ye),We=new Map,he.programs=We);let Te=We.get(Ge);if(Te!==void 0){if(he.currentProgram===Te&&he.lightsStateVersion===ke)return nn(O,Be),Te}else Be.uniforms=ne.getUniforms(O),O.onBuild(fe,Be,y),O.onBeforeCompile(Be,y),Te=ne.acquireProgram(Be,Ge),We.set(Ge,Te),he.uniforms=Be.uniforms;const Ye=he.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(Ye.clippingPlanes=pe.uniform),nn(O,Be),he.needsLights=La(O),he.lightsStateVersion=ke,he.needsLights&&(Ye.ambientLightColor.value=ue.state.ambient,Ye.lightProbe.value=ue.state.probe,Ye.directionalLights.value=ue.state.directional,Ye.directionalLightShadows.value=ue.state.directionalShadow,Ye.spotLights.value=ue.state.spot,Ye.spotLightShadows.value=ue.state.spotShadow,Ye.rectAreaLights.value=ue.state.rectArea,Ye.ltc_1.value=ue.state.rectAreaLTC1,Ye.ltc_2.value=ue.state.rectAreaLTC2,Ye.pointLights.value=ue.state.point,Ye.pointLightShadows.value=ue.state.pointShadow,Ye.hemisphereLights.value=ue.state.hemi,Ye.directionalShadowMap.value=ue.state.directionalShadowMap,Ye.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,Ye.spotShadowMap.value=ue.state.spotShadowMap,Ye.spotLightMatrix.value=ue.state.spotLightMatrix,Ye.spotLightMap.value=ue.state.spotLightMap,Ye.pointShadowMap.value=ue.state.pointShadowMap,Ye.pointShadowMatrix.value=ue.state.pointShadowMatrix),he.currentProgram=Te,he.uniformsList=null,Te}function Sn(O){if(O.uniformsList===null){const ce=O.currentProgram.getUniforms();O.uniformsList=wo.seqWithValue(ce.seq,O.uniforms)}return O.uniformsList}function nn(O,ce){const fe=de.get(O);fe.outputColorSpace=ce.outputColorSpace,fe.batching=ce.batching,fe.instancing=ce.instancing,fe.instancingColor=ce.instancingColor,fe.instancingMorph=ce.instancingMorph,fe.skinning=ce.skinning,fe.morphTargets=ce.morphTargets,fe.morphNormals=ce.morphNormals,fe.morphColors=ce.morphColors,fe.morphTargetsCount=ce.morphTargetsCount,fe.numClippingPlanes=ce.numClippingPlanes,fe.numIntersection=ce.numClipIntersection,fe.vertexAlphas=ce.vertexAlphas,fe.vertexTangents=ce.vertexTangents,fe.toneMapping=ce.toneMapping}function At(O,ce,fe,he,ue){ce.isScene!==!0&&(ce=W),me.resetTextureUnits();const Ie=ce.fog,ke=he.isMeshStandardMaterial?ce.environment:null,Be=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:bi,Ge=(he.isMeshStandardMaterial?x:H).get(he.envMap||ke),We=he.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,Te=!!fe.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),Ye=!!fe.morphAttributes.position,ft=!!fe.morphAttributes.normal,ht=!!fe.morphAttributes.color;let Mt=gi;he.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Mt=y.toneMapping);const rn=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,et=rn!==void 0?rn.length:0,He=de.get(he),bn=p.state.lights;if(P===!0&&(C===!0||O!==E)){const It=O===E&&he.id===N;pe.setState(he,O,It)}let at=!1;he.version===He.__version?(He.needsLights&&He.lightsStateVersion!==bn.state.version||He.outputColorSpace!==Be||ue.isBatchedMesh&&He.batching===!1||!ue.isBatchedMesh&&He.batching===!0||ue.isInstancedMesh&&He.instancing===!1||!ue.isInstancedMesh&&He.instancing===!0||ue.isSkinnedMesh&&He.skinning===!1||!ue.isSkinnedMesh&&He.skinning===!0||ue.isInstancedMesh&&He.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&He.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&He.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&He.instancingMorph===!1&&ue.morphTexture!==null||He.envMap!==Ge||he.fog===!0&&He.fog!==Ie||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==pe.numPlanes||He.numIntersection!==pe.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Te||He.morphTargets!==Ye||He.morphNormals!==ft||He.morphColors!==ht||He.toneMapping!==Mt||He.morphTargetsCount!==et)&&(at=!0):(at=!0,He.__version=he.version);let an=He.currentProgram;at===!0&&(an=jt(he,ce,ue));let kr=!1,Fn=!1,Xi=!1;const pt=an.getUniforms(),on=He.uniforms;if(Q.useProgram(an.program)&&(kr=!0,Fn=!0,Xi=!0),he.id!==N&&(N=he.id,Fn=!0),kr||E!==O){pt.setValue(U,"projectionMatrix",O.projectionMatrix),pt.setValue(U,"viewMatrix",O.matrixWorldInverse);const It=pt.map.cameraPosition;It!==void 0&&It.setValue(U,M.setFromMatrixPosition(O.matrixWorld)),ve.logarithmicDepthBuffer&&pt.setValue(U,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&pt.setValue(U,"isOrthographic",O.isOrthographicCamera===!0),E!==O&&(E=O,Fn=!0,Xi=!0)}if(ue.isSkinnedMesh){pt.setOptional(U,ue,"bindMatrix"),pt.setOptional(U,ue,"bindMatrixInverse");const It=ue.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),pt.setValue(U,"boneTexture",It.boneTexture,me))}ue.isBatchedMesh&&(pt.setOptional(U,ue,"batchingTexture"),pt.setValue(U,"batchingTexture",ue._matricesTexture,me));const Mn=fe.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Ee.update(ue,fe,an),(Fn||He.receiveShadow!==ue.receiveShadow)&&(He.receiveShadow=ue.receiveShadow,pt.setValue(U,"receiveShadow",ue.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(on.envMap.value=Ge,on.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&ce.environment!==null&&(on.envMapIntensity.value=ce.environmentIntensity),Fn&&(pt.setValue(U,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&Nn(on,Xi),Ie&&he.fog===!0&&oe.refreshFogUniforms(on,Ie),oe.refreshMaterialUniforms(on,he,J,q,p.state.transmissionRenderTarget[O.id]),wo.upload(U,Sn(He),on,me)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(wo.upload(U,Sn(He),on,me),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&pt.setValue(U,"center",ue.center),pt.setValue(U,"modelViewMatrix",ue.modelViewMatrix),pt.setValue(U,"normalMatrix",ue.normalMatrix),pt.setValue(U,"modelMatrix",ue.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const It=he.uniformsGroups;for(let Mi=0,Br=It.length;Mi<Br;Mi++){const Xt=It[Mi];we.update(Xt,an),we.bind(Xt,an)}}return an}function Nn(O,ce){O.ambientLightColor.needsUpdate=ce,O.lightProbe.needsUpdate=ce,O.directionalLights.needsUpdate=ce,O.directionalLightShadows.needsUpdate=ce,O.pointLights.needsUpdate=ce,O.pointLightShadows.needsUpdate=ce,O.spotLights.needsUpdate=ce,O.spotLightShadows.needsUpdate=ce,O.rectAreaLights.needsUpdate=ce,O.hemisphereLights.needsUpdate=ce}function La(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(O,ce,fe){de.get(O.texture).__webglTexture=ce,de.get(O.depthTexture).__webglTexture=fe;const he=de.get(O);he.__hasExternalTextures=!0,he.__autoAllocateDepthBuffer=fe===void 0,he.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,ce){const fe=de.get(O);fe.__webglFramebuffer=ce,fe.__useDefaultFramebuffer=ce===void 0},this.setRenderTarget=function(O,ce=0,fe=0){T=O,L=ce,D=fe;let he=!0,ue=null,Ie=!1,ke=!1;if(O){const Ge=de.get(O);Ge.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(U.FRAMEBUFFER,null),he=!1):Ge.__webglFramebuffer===void 0?me.setupRenderTarget(O):Ge.__hasExternalTextures&&me.rebindTextures(O,de.get(O.texture).__webglTexture,de.get(O.depthTexture).__webglTexture);const We=O.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ke=!0);const Te=de.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Te[ce])?ue=Te[ce][fe]:ue=Te[ce],Ie=!0):O.samples>0&&me.useMultisampledRTT(O)===!1?ue=de.get(O).__webglMultisampledFramebuffer:Array.isArray(Te)?ue=Te[fe]:ue=Te,S.copy(O.viewport),V.copy(O.scissor),I=O.scissorTest}else S.copy(j).multiplyScalar(J).floor(),V.copy(z).multiplyScalar(J).floor(),I=te;if(Q.bindFramebuffer(U.FRAMEBUFFER,ue)&&he&&Q.drawBuffers(O,ue),Q.viewport(S),Q.scissor(V),Q.setScissorTest(I),Ie){const Ge=de.get(O.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ge.__webglTexture,fe)}else if(ke){const Ge=de.get(O.texture),We=ce||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ge.__webglTexture,fe||0,We)}N=-1},this.readRenderTargetPixels=function(O,ce,fe,he,ue,Ie,ke){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=de.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&ke!==void 0&&(Be=Be[ke]),Be){Q.bindFramebuffer(U.FRAMEBUFFER,Be);try{const Ge=O.texture,We=Ge.format,Te=Ge.type;if(!ve.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ce>=0&&ce<=O.width-he&&fe>=0&&fe<=O.height-ue&&U.readPixels(ce,fe,he,ue,Se.convert(We),Se.convert(Te),Ie)}finally{const Ge=T!==null?de.get(T).__webglFramebuffer:null;Q.bindFramebuffer(U.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(O,ce,fe=0){const he=Math.pow(2,-fe),ue=Math.floor(ce.image.width*he),Ie=Math.floor(ce.image.height*he);me.setTexture2D(ce,0),U.copyTexSubImage2D(U.TEXTURE_2D,fe,0,0,O.x,O.y,ue,Ie),Q.unbindTexture()},this.copyTextureToTexture=function(O,ce,fe,he=0){const ue=ce.image.width,Ie=ce.image.height,ke=Se.convert(fe.format),Be=Se.convert(fe.type);me.setTexture2D(fe,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,fe.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,fe.unpackAlignment),ce.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,he,O.x,O.y,ue,Ie,ke,Be,ce.image.data):ce.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,he,O.x,O.y,ce.mipmaps[0].width,ce.mipmaps[0].height,ke,ce.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,he,O.x,O.y,ke,Be,ce.image),he===0&&fe.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(O,ce,fe,he,ue=0){const Ie=O.max.x-O.min.x,ke=O.max.y-O.min.y,Be=O.max.z-O.min.z,Ge=Se.convert(he.format),We=Se.convert(he.type);let Te;if(he.isData3DTexture)me.setTexture3D(he,0),Te=U.TEXTURE_3D;else if(he.isDataArrayTexture||he.isCompressedArrayTexture)me.setTexture2DArray(he,0),Te=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,he.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,he.unpackAlignment);const Ye=U.getParameter(U.UNPACK_ROW_LENGTH),ft=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ht=U.getParameter(U.UNPACK_SKIP_PIXELS),Mt=U.getParameter(U.UNPACK_SKIP_ROWS),rn=U.getParameter(U.UNPACK_SKIP_IMAGES),et=fe.isCompressedTexture?fe.mipmaps[ue]:fe.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,et.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,et.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,O.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,O.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,O.min.z),fe.isDataTexture||fe.isData3DTexture?U.texSubImage3D(Te,ue,ce.x,ce.y,ce.z,Ie,ke,Be,Ge,We,et.data):he.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,ue,ce.x,ce.y,ce.z,Ie,ke,Be,Ge,et.data):U.texSubImage3D(Te,ue,ce.x,ce.y,ce.z,Ie,ke,Be,Ge,We,et),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ye),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ht),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,rn),ue===0&&he.generateMipmaps&&U.generateMipmap(Te),Q.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?me.setTextureCube(O,0):O.isData3DTexture?me.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?me.setTexture2DArray(O,0):me.setTexture2D(O,0),Q.unbindTexture()},this.resetState=function(){L=0,D=0,T=null,Q.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Oc?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Zo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ix extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rx extends Dt{constructor(e=null,t=1,n=1,i,r,o,s,c,l=Wt,h=Wt,u,d){super(null,o,s,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ga extends gn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pr=new rt,zh=new rt,co=[],Gh=new ii,ax=new rt,$r=new Et,Qr=new Vi;class ox extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ax)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),Gh.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(Gh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),Qr.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(Qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let s=0;s<n.length;s++)n[s]=i[o+s]}raycast(e,t){const n=this.matrixWorld,i=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(n),e.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,pr),zh.multiplyMatrices(n,pr),$r.matrixWorld=zh,$r.raycast(e,co);for(let o=0,s=co.length;o<s;o++){const c=co[o];c.instanceId=r,c.object=this,t.push(c)}co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ga(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rx(new Float32Array(i*this.count),i,this.count,ed,Zn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const s=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=s,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ed extends Ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new X,Fo=new X,Hh=new rt,ea=new Ko,lo=new Vi,js=new X,Vh=new X;class sx extends yt{constructor(e=new tn,t=new Ed){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)No.fromBufferAttribute(t,i-1),Fo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=No.distanceTo(Fo);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(i),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;Hh.copy(i).invert(),ea.copy(e.ray).applyMatrix4(Hh);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=l){const m=h.getX(v),b=h.getX(v+1),y=ho(this,e,ea,c,m,b);y&&t.push(y)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(f),m=ho(this,e,ea,c,v,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=l){const m=ho(this,e,ea,c,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=ho(this,e,ea,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function ho(a,e,t,n,i,r){const o=a.geometry.attributes.position;if(No.fromBufferAttribute(o,i),Fo.fromBufferAttribute(o,r),t.distanceSqToSegment(No,Fo,js,Vh)>n)return;js.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(js);if(!(c<e.near||c>e.far))return{distance:c,point:Vh.clone().applyMatrix4(a.matrixWorld),index:i,face:null,faceIndex:null,object:a}}const Wh=new X,jh=new X;class Ad extends sx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Wh.fromBufferAttribute(t,i),jh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wh.distanceTo(jh);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let s=0,c=r-1,l;for(;s<=c;)if(i=Math.floor(s+(c-s)/2),l=n[i]-o,l<0)s=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),s=this.getPoint(r),c=t||(o.isVector2?new _e:new X);return c.copy(s).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new X,i=[],r=[],o=[],s=new X,c=new rt;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new X)}r[0]=new X,o[0]=new X;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),s.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],s),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),s.crossVectors(i[f-1],i[f]),s.length()>Number.EPSILON){s.normalize();const g=Math.acos(Tt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(s,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Tt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(s.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vc extends Un{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,s=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=s,this.aRotation=c}getPoint(e,t=new _e){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const s=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cx extends Vc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wc(){let a=0,e=0,t=0,n=0;function i(r,o,s,c){a=r,e=s,t=-3*r+3*o-2*s-c,n=2*r-2*o+s+c}return{initCatmullRom:function(r,o,s,c,l){i(o,s,l*(s-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,s,c,l,h,u){let d=(o-r)/l-(s-r)/(l+h)+(s-o)/h,f=(s-o)/h-(c-o)/(h+u)+(c-s)/u;d*=h,f*=h,i(o,s,d,f)},calc:function(r){const o=r*r,s=o*r;return a+e*r+t*o+n*s}}}const uo=new X,Xs=new Wc,Ys=new Wc,qs=new Wc;class lx extends Un{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new X){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let s=Math.floor(o),c=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/r)+1)*r:c===0&&s===r-1&&(s=r-2,c=1);let l,h;this.closed||s>0?l=i[(s-1)%r]:(uo.subVectors(i[0],i[1]).add(i[0]),l=uo);const u=i[s%r],d=i[(s+1)%r];if(this.closed||s+2<r?h=i[(s+2)%r]:(uo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=uo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Xs.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,p),Ys.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,p),qs.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Xs.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ys.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),qs.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Xs.calc(c),Ys.calc(c),qs.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new X().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xh(a,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,s=a*a,c=a*s;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*s+r*a+t}function hx(a,e){const t=1-a;return t*t*e}function ux(a,e){return 2*(1-a)*a*e}function dx(a,e){return a*a*e}function ca(a,e,t,n){return hx(a,e)+ux(a,t)+dx(a,n)}function fx(a,e){const t=1-a;return t*t*t*e}function px(a,e){const t=1-a;return 3*t*t*a*e}function mx(a,e){return 3*(1-a)*a*a*e}function gx(a,e){return a*a*a*e}function la(a,e,t,n,i){return fx(a,e)+px(a,t)+mx(a,n)+gx(a,i)}class Cd extends Un{constructor(e=new _e,t=new _e,n=new _e,i=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _e){const n=t,i=this.v0,r=this.v1,o=this.v2,s=this.v3;return n.set(la(e,i.x,r.x,o.x,s.x),la(e,i.y,r.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vx extends Un{constructor(e=new X,t=new X,n=new X,i=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new X){const n=t,i=this.v0,r=this.v1,o=this.v2,s=this.v3;return n.set(la(e,i.x,r.x,o.x,s.x),la(e,i.y,r.y,o.y,s.y),la(e,i.z,r.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rd extends Un{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yx extends Un{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pd extends Un{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ca(e,i.x,r.x,o.x),ca(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xx extends Un{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ca(e,i.x,r.x,o.x),ca(e,i.y,r.y,o.y),ca(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dd extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),s=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Xh(s,c.x,l.x,h.x,u.x),Xh(s,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new _e().fromArray(i))}return this}}var Yh=Object.freeze({__proto__:null,ArcCurve:cx,CatmullRomCurve3:lx,CubicBezierCurve:Cd,CubicBezierCurve3:vx,EllipseCurve:Vc,LineCurve:Rd,LineCurve3:yx,QuadraticBezierCurve:Pd,QuadraticBezierCurve3:xx,SplineCurve:Dd});class _x extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,s=this.curves[r],c=s.getLength(),l=c===0?0:1-o/c;return s.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],s=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(s);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Yh[i.type]().fromJSON(i))}return this}}class Er extends _x{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Rd(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Pd(this.currentPoint.clone(),new _e(e,t),new _e(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const s=new Cd(this.currentPoint.clone(),new _e(e,t),new _e(n,i),new _e(r,o));return this.curves.push(s),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Dd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const s=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+s,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,s,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,s,c),this}absellipse(e,t,n,i,r,o,s,c){const l=new Vc(e,t,n,i,r,o,s,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const fo=new X,po=new X,Zs=new X,mo=new mn;class Ld extends tn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(wr*t),o=e.getIndex(),s=e.getAttribute("position"),c=o?o.count:s.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:p,c:m}=mo;if(v.fromBufferAttribute(s,l[0]),p.fromBufferAttribute(s,l[1]),m.fromBufferAttribute(s,l[2]),mo.getNormal(Zs),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){const y=(b+1)%3,_=u[b],L=u[y],D=mo[h[b]],T=mo[h[y]],N=`${_}_${L}`,E=`${L}_${_}`;E in d&&d[E]?(Zs.dot(d[E].normal)<=r&&(f.push(D.x,D.y,D.z),f.push(T.x,T.y,T.z)),d[E]=null):N in d||(d[N]={index0:l[b],index1:l[y],normal:Zs.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:p}=d[g];fo.fromBufferAttribute(s,v),po.fromBufferAttribute(s,p),f.push(fo.x,fo.y,fo.z),f.push(po.x,po.y,po.z)}this.setAttribute("position",new Lt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ha extends Er{constructor(e){super(e),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Er().fromJSON(i))}return this}}const Sx={triangulate:function(a,e,t=2){const n=e&&e.length,i=n?e[0]*t:a.length;let r=Id(a,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let s,c,l,h,u,d,f;if(n&&(r=Ex(a,e,r,t)),a.length>80*t){s=l=a[0],c=h=a[1];for(let g=t;g<i;g+=t)u=a[g],d=a[g+1],u<s&&(s=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-s,h-c),f=f!==0?32767/f:0}return va(r,o,t,s,c,f,0),o}};function Id(a,e,t,n,i){let r,o;if(i===Ox(a,e,t,n)>0)for(r=e;r<t;r+=n)o=qh(r,a[r],a[r+1],o);else for(r=t-n;r>=e;r-=n)o=qh(r,a[r],a[r+1],o);return o&&$o(o,o.next)&&(xa(o),o=o.next),o}function zi(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&($o(t,t.next)||dt(t.prev,t,t.next)===0)){if(xa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function va(a,e,t,n,i,r,o){if(!a)return;!o&&r&&Dx(a,n,i,r);let s=a,c,l;for(;a.prev!==a.next;){if(c=a.prev,l=a.next,r?Mx(a,n,i,r):bx(a)){e.push(c.i/t|0),e.push(a.i/t|0),e.push(l.i/t|0),xa(a),a=l.next,s=l.next;continue}if(a=l,a===s){o?o===1?(a=wx(zi(a),e,t),va(a,e,t,n,i,r,2)):o===2&&Tx(a,e,t,n,i,r):va(zi(a),e,t,n,i,r,1);break}}}function bx(a){const e=a.prev,t=a,n=a.next;if(dt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,s=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=s<c?s<l?s:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=s>c?s>l?s:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&yr(i,s,r,c,o,l,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mx(a,e,t,n){const i=a.prev,r=a,o=a.next;if(dt(i,r,o)>=0)return!1;const s=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=s<c?s<l?s:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=s>c?s>l?s:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=Sc(f,g,e,t,n),b=Sc(v,p,e,t,n);let y=a.prevZ,_=a.nextZ;for(;y&&y.z>=m&&_&&_.z<=b;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&yr(s,h,c,u,l,d,y.x,y.y)&&dt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&yr(s,h,c,u,l,d,_.x,_.y)&&dt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=p&&y!==i&&y!==o&&yr(s,h,c,u,l,d,y.x,y.y)&&dt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&yr(s,h,c,u,l,d,_.x,_.y)&&dt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function wx(a,e,t){let n=a;do{const i=n.prev,r=n.next.next;!$o(i,r)&&Ud(i,n,n.next,r)&&ya(i,r)&&ya(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),xa(n),xa(n.next),n=a=r),n=n.next}while(n!==a);return zi(n)}function Tx(a,e,t,n,i,r){let o=a;do{let s=o.next.next;for(;s!==o.prev;){if(o.i!==s.i&&Ux(o,s)){let c=Nd(o,s);o=zi(o,o.next),c=zi(c,c.next),va(o,e,t,n,i,r,0),va(c,e,t,n,i,r,0);return}s=s.next}o=o.next}while(o!==a)}function Ex(a,e,t,n){const i=[];let r,o,s,c,l;for(r=0,o=e.length;r<o;r++)s=e[r]*n,c=r<o-1?e[r+1]*n:a.length,l=Id(a,s,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Ix(l));for(i.sort(Ax),r=0;r<i.length;r++)t=Cx(i[r],t);return t}function Ax(a,e){return a.x-e.x}function Cx(a,e){const t=Rx(a,e);if(!t)return e;const n=Nd(t,a);return zi(n,n.next),zi(t,t.next)}function Rx(a,e){let t=e,n=-1/0,i;const r=a.x,o=a.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const s=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&yr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),ya(t,a)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Px(i,t)))&&(i=t,h=u)),t=t.next;while(t!==s);return i}function Px(a,e){return dt(a.prev,a,e.prev)<0&&dt(e.next,a,a.next)<0}function Dx(a,e,t,n){let i=a;do i.z===0&&(i.z=Sc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,Lx(i)}function Lx(a){let e,t,n,i,r,o,s,c,l=1;do{for(t=a,a=null,r=null,o=0;t;){for(o++,n=t,s=0,e=0;e<l&&(s++,n=n.nextZ,!!n);e++);for(c=l;s>0||c>0&&n;)s!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,s--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:a=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return a}function Sc(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function Ix(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function yr(a,e,t,n,i,r,o,s){return(i-o)*(e-s)>=(a-o)*(r-s)&&(a-o)*(n-s)>=(t-o)*(e-s)&&(t-o)*(r-s)>=(i-o)*(n-s)}function Ux(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!Nx(a,e)&&(ya(a,e)&&ya(e,a)&&Fx(a,e)&&(dt(a.prev,a,e.prev)||dt(a,e.prev,e))||$o(a,e)&&dt(a.prev,a,a.next)>0&&dt(e.prev,e,e.next)>0)}function dt(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function $o(a,e){return a.x===e.x&&a.y===e.y}function Ud(a,e,t,n){const i=vo(dt(a,e,t)),r=vo(dt(a,e,n)),o=vo(dt(t,n,a)),s=vo(dt(t,n,e));return!!(i!==r&&o!==s||i===0&&go(a,t,e)||r===0&&go(a,n,e)||o===0&&go(t,a,n)||s===0&&go(t,e,n))}function go(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function vo(a){return a>0?1:a<0?-1:0}function Nx(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&Ud(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function ya(a,e){return dt(a.prev,a,a.next)<0?dt(a,e,a.next)>=0&&dt(a,a.prev,e)>=0:dt(a,e,a.prev)<0||dt(a,a.next,e)<0}function Fx(a,e){let t=a,n=!1;const i=(a.x+e.x)/2,r=(a.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function Nd(a,e){const t=new bc(a.i,a.x,a.y),n=new bc(e.i,e.x,e.y),i=a.next,r=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function qh(a,e,t,n){const i=new bc(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xa(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function bc(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ox(a,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(a[o]-a[r])*(a[r+1]+a[o+1]),o=r;return i}class Fi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Fi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Zh(e),Kh(n,e);let o=e.length;t.forEach(Zh);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Kh(n,t[c]);const s=Sx.triangulate(n,i);for(let c=0;c<s.length;c+=3)r.push(s.slice(c,c+3));return r}}function Zh(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function Kh(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class jc extends tn{constructor(e=new ha([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let s=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(s,c,h),s+=c,c=0;this.setIndex(n),this.setAttribute("position",new Lt(i,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Fi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const b=g[p];Fi.isClockWise(b)===!0&&(g[p]=b.reverse())}const v=Fi.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const b=g[p];f=f.concat(b)}for(let p=0,m=f.length;p<m;p++){const b=f[p];i.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let p=0,m=v.length;p<m;p++){const b=v[p],y=b[0]+u,_=b[1]+u,L=b[2]+u;n.push(y,_,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return kx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new jc(n,e.curveSegments)}}function kx(a,e){if(e.shapes=[],Array.isArray(a))for(let t=0,n=a.length;t<n;t++){const i=a[t];e.shapes.push(i.uuid)}else e.shapes.push(a.uuid);return e}class Xc extends Ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ad,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Oo={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Bx{constructor(e,t,n){const i=this;let r=!1,o=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){s++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,s),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,s),o===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const zx=new Bx;class Ta{constructor(e){this.manager=e!==void 0?e:zx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class Gx extends Error{constructor(e,t){super(e),this.response=t}}class Hx extends Ta{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Oo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:i});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Hn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const p=new ReadableStream({start(m){b();function b(){u.read().then(({done:y,value:_})=>{if(y)m.close();else{v+=_.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let D=0,T=h.length;D<T;D++){const N=h[D];N.onProgress&&N.onProgress(L)}m.enqueue(_),b()}})}}});return new Response(p)}else throw new Gx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,s));case"json":return l.json();default:if(s===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(s),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Oo.add(e,l);const h=Hn[e];delete Hn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Hn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Hn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vx extends Ta{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Oo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const s=ma("img");function c(){h(),Oo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class Wx extends Ta{constructor(e){super(e)}load(e,t,n,i){const r=new Dt,o=new Vx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Fd extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class jx extends Fd{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ks=new rt,Jh=new X,$h=new X;class Xx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zc,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),Ks.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ks),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ks)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Yx extends Xx{constructor(){super(new Gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qx extends Fd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Yx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Od extends tn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Qh=new rt;class kd{constructor(e,t,n=0,i=1/0){this.ray=new Ko(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qh),this}intersectObject(e,t=!0,n=[]){return Mc(e,this,n,t),n.sort(eu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Mc(e[i],this,n,t);return n.sort(eu),n}}function eu(a,e){return a.distance-e.distance}function Mc(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let r=0,o=i.length;r<o;r++)Mc(i[r],e,t,!0)}}class ko{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const tu=new _e;class Bd{constructor(e=new _e(1/0,1/0),t=new _e(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Pi{constructor(){this.type="ShapePath",this.color=new Je,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Er,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const b=[];for(let y=0,_=m.length;y<_;y++){const L=m[y],D=new ha;D.curves=L.curves,b.push(D)}return b}function n(m,b){const y=b.length;let _=!1;for(let L=y-1,D=0;D<y;L=D++){let T=b[L],N=b[D],E=N.x-T.x,S=N.y-T.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(T=b[D],E=-E,N=b[L],S=-S),m.y<T.y||m.y>N.y)continue;if(m.y===T.y){if(m.x===T.x)return!0}else{const V=S*(m.x-T.x)-E*(m.y-T.y);if(V===0)return!0;if(V<0)continue;_=!_}}else{if(m.y!==T.y)continue;if(N.x<=m.x&&m.x<=T.x||T.x<=m.x&&m.x<=N.x)return!0}}return _}const i=Fi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,s,c;const l=[];if(r.length===1)return s=r[0],c=new ha,c.curves=s.curves,l.push(c),l;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],g=0,v;d[g]=void 0,f[g]=[];for(let m=0,b=r.length;m<b;m++)s=r[m],v=s.getPoints(),o=i(v),o=e?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new ha,p:v},d[g].s.curves=s.curves,h&&g++,f[g]=[]):f[g].push({h:s,p:v[0]});if(!d[0])return t(r);if(d.length>1){let m=!1,b=0;for(let y=0,_=d.length;y<_;y++)u[y]=[];for(let y=0,_=d.length;y<_;y++){const L=f[y];for(let D=0;D<L.length;D++){const T=L[D];let N=!0;for(let E=0;E<d.length;E++)n(T.p,d[E].p)&&(y!==E&&b++,N?(N=!1,u[E].push(T)):m=!0);N&&u[y].push(T)}}b>0&&m===!1&&(f=u)}let p;for(let m=0,b=d.length;m<b;m++){c=d[m].s,l.push(c),p=f[m];for(let y=0,_=p.length;y<_;y++)c.holes.push(p[y].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);const nu={type:"change"},Js={type:"start"},iu={type:"end"},yo=new Ko,ru=new jn,Zx=Math.cos(70*Pt.DEG2RAD);class Kx extends Gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Me),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Me),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(nu),n.update(),r=i.NONE},this.update=function(){const A=new X,ee=new Qn().setFromUnitVectors(e.up,new X(0,1,0)),$=ee.clone().invert(),ye=new X,Ae=new Qn,Ne=new X,Pe=2*Math.PI;return function(qe=null){const Le=n.object.position;A.copy(Le).sub(n.target),A.applyQuaternion(ee),s.setFromVector3(A),n.autoRotate&&r===i.NONE&&I(S(qe)),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let je=n.minAzimuthAngle,Ze=n.maxAzimuthAngle;isFinite(je)&&isFinite(Ze)&&(je<-Math.PI?je+=Pe:je>Math.PI&&(je-=Pe),Ze<-Math.PI?Ze+=Pe:Ze>Math.PI&&(Ze-=Pe),je<=Ze?s.theta=Math.max(je,Math.min(Ze,s.theta)):s.theta=s.theta>(je+Ze)/2?Math.max(je,s.theta):Math.min(Ze,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let st=!1;if(n.zoomToCursor&&D||n.object.isOrthographicCamera)s.radius=j(s.radius);else{const tt=s.radius;s.radius=j(s.radius*l),st=tt!=s.radius}if(A.setFromSpherical(s),A.applyQuaternion($),Le.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&D){let tt=null;if(n.object.isPerspectiveCamera){const mt=A.length();tt=j(mt*l);const bt=mt-tt;n.object.position.addScaledVector(_,bt),n.object.updateMatrixWorld(),st=!!bt}else if(n.object.isOrthographicCamera){const mt=new X(L.x,L.y,0);mt.unproject(n.object);const bt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),st=bt!==n.object.zoom;const Ft=new X(L.x,L.y,0);Ft.unproject(n.object),n.object.position.sub(Ft).add(mt),n.object.updateMatrixWorld(),tt=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;tt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(tt).add(n.object.position):(yo.origin.copy(n.object.position),yo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(yo.direction))<Zx?e.lookAt(n.target):(ru.setFromNormalAndCoplanarPoint(n.object.up,n.target),yo.intersectPlane(ru,n.target))))}else if(n.object.isOrthographicCamera){const tt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),tt!==n.object.zoom&&(n.object.updateProjectionMatrix(),st=!0)}return l=1,D=!1,st||ye.distanceToSquared(n.object.position)>o||8*(1-Ae.dot(n.object.quaternion))>o||Ne.distanceToSquared(n.target)>o?(n.dispatchEvent(nu),ye.copy(n.object.position),Ae.copy(n.object.quaternion),Ne.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ue),n.domElement.removeEventListener("pointerdown",x),n.domElement.removeEventListener("pointercancel",k),n.domElement.removeEventListener("wheel",oe),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",k),n.domElement.getRootNode().removeEventListener("keydown",be,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Me),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,s=new ko,c=new ko;let l=1;const h=new X,u=new _e,d=new _e,f=new _e,g=new _e,v=new _e,p=new _e,m=new _e,b=new _e,y=new _e,_=new X,L=new _e;let D=!1;const T=[],N={};let E=!1;function S(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function V(A){const ee=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*ee)}function I(A){c.theta-=A}function F(A){c.phi-=A}const G=function(){const A=new X;return function($,ye){A.setFromMatrixColumn(ye,0),A.multiplyScalar(-$),h.add(A)}}(),Y=function(){const A=new X;return function($,ye){n.screenSpacePanning===!0?A.setFromMatrixColumn(ye,1):(A.setFromMatrixColumn(ye,0),A.crossVectors(n.object.up,A)),A.multiplyScalar($),h.add(A)}}(),q=function(){const A=new X;return function($,ye){const Ae=n.domElement;if(n.object.isPerspectiveCamera){const Ne=n.object.position;A.copy(Ne).sub(n.target);let Pe=A.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),G(2*$*Pe/Ae.clientHeight,n.object.matrix),Y(2*ye*Pe/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G($*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),Y(ye*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function J(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(A,ee){if(!n.zoomToCursor)return;D=!0;const $=n.domElement.getBoundingClientRect(),ye=A-$.left,Ae=ee-$.top,Ne=$.width,Pe=$.height;L.x=ye/Ne*2-1,L.y=-(Ae/Pe)*2+1,_.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function z(A){u.set(A.clientX,A.clientY)}function te(A){K(A.clientX,A.clientX),m.set(A.clientX,A.clientY)}function se(A){g.set(A.clientX,A.clientY)}function P(A){d.set(A.clientX,A.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const ee=n.domElement;I(2*Math.PI*f.x/ee.clientHeight),F(2*Math.PI*f.y/ee.clientHeight),u.copy(d),n.update()}function C(A){b.set(A.clientX,A.clientY),y.subVectors(b,m),y.y>0?J(V(y.y)):y.y<0&&B(V(y.y)),m.copy(b),n.update()}function R(A){v.set(A.clientX,A.clientY),p.subVectors(v,g).multiplyScalar(n.panSpeed),q(p.x,p.y),g.copy(v),n.update()}function M(A){K(A.clientX,A.clientY),A.deltaY<0?B(V(A.deltaY)):A.deltaY>0&&J(V(A.deltaY)),n.update()}function W(A){let ee=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(-n.keyPanSpeed,0),ee=!0;break}ee&&(A.preventDefault(),n.update())}function re(A){if(T.length===1)u.set(A.pageX,A.pageY);else{const ee=Oe(A),$=.5*(A.pageX+ee.x),ye=.5*(A.pageY+ee.y);u.set($,ye)}}function U(A){if(T.length===1)g.set(A.pageX,A.pageY);else{const ee=Oe(A),$=.5*(A.pageX+ee.x),ye=.5*(A.pageY+ee.y);g.set($,ye)}}function ie(A){const ee=Oe(A),$=A.pageX-ee.x,ye=A.pageY-ee.y,Ae=Math.sqrt($*$+ye*ye);m.set(0,Ae)}function Z(A){n.enableZoom&&ie(A),n.enablePan&&U(A)}function ve(A){n.enableZoom&&ie(A),n.enableRotate&&re(A)}function Q(A){if(T.length==1)d.set(A.pageX,A.pageY);else{const $=Oe(A),ye=.5*(A.pageX+$.x),Ae=.5*(A.pageY+$.y);d.set(ye,Ae)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const ee=n.domElement;I(2*Math.PI*f.x/ee.clientHeight),F(2*Math.PI*f.y/ee.clientHeight),u.copy(d)}function le(A){if(T.length===1)v.set(A.pageX,A.pageY);else{const ee=Oe(A),$=.5*(A.pageX+ee.x),ye=.5*(A.pageY+ee.y);v.set($,ye)}p.subVectors(v,g).multiplyScalar(n.panSpeed),q(p.x,p.y),g.copy(v)}function de(A){const ee=Oe(A),$=A.pageX-ee.x,ye=A.pageY-ee.y,Ae=Math.sqrt($*$+ye*ye);b.set(0,Ae),y.set(0,Math.pow(b.y/m.y,n.zoomSpeed)),J(y.y),m.copy(b);const Ne=(A.pageX+ee.x)*.5,Pe=(A.pageY+ee.y)*.5;K(Ne,Pe)}function me(A){n.enableZoom&&de(A),n.enablePan&&le(A)}function H(A){n.enableZoom&&de(A),n.enableRotate&&Q(A)}function x(A){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",w),n.domElement.addEventListener("pointerup",k)),!Ce(A)&&(Re(A),A.pointerType==="touch"?ge(A):ae(A)))}function w(A){n.enabled!==!1&&(A.pointerType==="touch"?Ee(A):ne(A))}function k(A){switch(Se(A),T.length){case 0:n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",k),n.dispatchEvent(iu),r=i.NONE;break;case 1:const ee=T[0],$=N[ee];ge({pointerId:ee,pageX:$.x,pageY:$.y});break}}function ae(A){let ee;switch(A.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Zi.DOLLY:if(n.enableZoom===!1)return;te(A),r=i.DOLLY;break;case Zi.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;se(A),r=i.PAN}else{if(n.enableRotate===!1)return;z(A),r=i.ROTATE}break;case Zi.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;z(A),r=i.ROTATE}else{if(n.enablePan===!1)return;se(A),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Js)}function ne(A){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;P(A);break;case i.DOLLY:if(n.enableZoom===!1)return;C(A);break;case i.PAN:if(n.enablePan===!1)return;R(A);break}}function oe(A){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(A.preventDefault(),n.dispatchEvent(Js),M(xe(A)),n.dispatchEvent(iu))}function xe(A){const ee=A.deltaMode,$={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(ee){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return A.ctrlKey&&!E&&($.deltaY*=10),$}function be(A){A.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(A){A.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function Me(A){n.enabled===!1||n.enablePan===!1||W(A)}function ge(A){switch(we(A),T.length){case 1:switch(n.touches.ONE){case Ki.ROTATE:if(n.enableRotate===!1)return;re(A),r=i.TOUCH_ROTATE;break;case Ki.PAN:if(n.enablePan===!1)return;U(A),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ki.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Z(A),r=i.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(A),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Js)}function Ee(A){switch(we(A),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Q(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;me(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;H(A),n.update();break;default:r=i.NONE}}function Ue(A){n.enabled!==!1&&A.preventDefault()}function Re(A){T.push(A.pointerId)}function Se(A){delete N[A.pointerId];for(let ee=0;ee<T.length;ee++)if(T[ee]==A.pointerId){T.splice(ee,1);return}}function Ce(A){for(let ee=0;ee<T.length;ee++)if(T[ee]==A.pointerId)return!0;return!1}function we(A){let ee=N[A.pointerId];ee===void 0&&(ee=new _e,N[A.pointerId]=ee),ee.set(A.pageX,A.pageY)}function Oe(A){const ee=A.pointerId===T[0]?T[1]:T[0];return N[ee]}n.domElement.addEventListener("contextmenu",Ue),n.domElement.addEventListener("pointerdown",x),n.domElement.addEventListener("pointercancel",k),n.domElement.addEventListener("wheel",oe,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",be,{passive:!0,capture:!0}),this.update()}}const Jx=[{id:"home",palette:["#f7f3e8","#e23d28","#1f5fbf","#f4c430","#111111"],uniqueColorGroups:[{blockIds:["home-projects","home-experiments","home-teaching"],colors:["#e23d28","#1f5fbf","#f4c430"]}],blocks:[{id:"home-title",type:"content",subtype:"header",placement:"hero",size:"large",gridRect:[2,1,3,3],content:{text:"ADITYA DE",fontWeight:700,fontSize:.62}},{id:"home-intro",type:"content",subtype:"text",placement:"center",size:"wide",gridRect:[1,4,5,3],content:{text:"Creative Technologist and Design Educator working with extended reality interactions, specializing in browser-powered 3D experiences.",fontWeight:400,fontSize:.4,lineHeight:1.12,textAlign:"left",padding:.4}},{id:"home-projects",type:"interaction",placement:"bottomRightLowerLeft",size:"medium",gridRect:[2,8,2,2],content:{label:"PROJECTS",fontWeight:400,fontSize:.42},action:{type:"state",target:"projects"}},{id:"home-about",type:"interaction",placement:"topLeftStack2",size:"medium",gridRect:[0,0,2,2],content:{label:"ABOUT",fontWeight:400,fontSize:.42},action:{type:"state",target:"about"}},{id:"home-experiments",type:"interaction",placement:"bottomRightTop",size:"shortWide",gridRect:[0,7,4,1],content:{label:"EXPERIMENTS",fontWeight:400,fontSize:.42},action:{type:"state",target:"experiments"}},{id:"home-teaching",type:"interaction",placement:"bottomRightLowerRight",size:"medium",gridRect:[4,8,2,2],content:{label:`TEACHING
& RESEARCH`,fontWeight:400,fontSize:.34,lineHeight:1.12},action:{type:"state",target:"teaching"}},{id:"home-explore-tags",type:"interaction",subtype:"text",placement:"bottomLeft",size:"shortWide",gridRect:[4,7,2,1],color:"#f7f3e8",content:{label:`EXPLORE
BY TAGS`,fontWeight:400,fontSize:.3,lineHeight:1.12,padding:.12},action:{type:"state",target:"tags"}}]},{id:"projects",projectItems:[{id:"fareCalculationSimulator",title:"Fare Calculation Algorithm Simulator",thumbnail:"/images/archive/fare-simulation-map.webp",target:"fareCalculationSimulator"},{id:"plasticSweeper",title:"Plastic Sweeper — Live Interactive Data Visualization",thumbnail:"/images/archive/plastic-sweeper-game.webp",target:"plasticSweeper"},{id:"animatedVideoProduction",title:"Animated Video Production",thumbnail:"/images/archive/animation-interim-ensemble.webp",target:"animatedVideoProduction"},{id:"trainingSimulation",title:"Training Simulation Application for the Logistics Industry",thumbnail:"/images/archive/warehouse-training.webp",target:"trainingSimulation"},{id:"radstore",title:"Radstore — RadBoards Virtual Store Experience",thumbnail:"/images/archive/radstore-interior.webp",target:"radstore"},{id:"walkthrough3d",title:"3D Walkthrough Application for Real Estate",thumbnail:"/images/archive/walkthrough-living-room.webp",target:"walkthrough3d"},{id:"liveBallData",title:"Live Ball Data Visualizer for Cricket",thumbnail:"/images/archive/cricket-ball-trajectory.webp",target:"liveBallData"},{id:"bitsDesignSchoolShowcase2025",title:"BITS Design School Showcase 2025",thumbnail:"/images/bits-design-school-showcase-2025.svg",target:"bitsDesignSchoolShowcase2025"},{id:"xrToneSynthesizerBeatSequencer",title:"XR Tone Synthesizer and Beat Sequencer",thumbnail:"/images/xr-tone-synthesizer-beat-sequencer.svg",target:"xrToneSynthesizerBeatSequencer"},{id:"powaiYear1",title:"Powai: Year 1",thumbnail:"/images/powai-year-1.svg",target:"powaiYear1"},{id:"natureOfCodeBranchNotebook",title:"Nature of Code/ Branch Notebook",thumbnail:"/images/nature-of-code-branch-notebook.svg",target:"natureOfCodeBranchNotebook"},{id:"astralProjection",title:"Astral Projection",thumbnail:"/images/project-placeholder.svg",target:"astralProjection"},{id:"hongOrchestra",title:"Honk Orchestra",thumbnail:"/images/project-placeholder.svg",target:"hongOrchestra"}],blocks:[{id:"projects-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"PROJECTS"}},{id:"projects-prev",type:"interaction",placement:"projectPrev",size:"small",content:{label:"PREV",fontWeight:700,iconSrc:"/icons/arrow-left.svg"},action:{type:"carousel",direction:-1}},{id:"projects-next",type:"interaction",placement:"projectNext",size:"small",content:{label:"NEXT",fontWeight:700,iconSrc:"/icons/arrow-right.svg"},action:{type:"carousel",direction:1}},{id:"projects-back",type:"interaction",placement:"topLeftStack1",size:"small",content:{label:"BACK",fontWeight:700},action:{type:"back",target:"home"}}]},{id:"liveBallData",template:"projectDetail",projectDetails:{title:"StanceBeam: Designing Cricket Reviews for Live Broadcast",image:"/images/archive/cricket-ball-trajectory.webp",imageAlt:"Ball trajectory and broadcast overlay in the cricket visualizer.",presentation:{layout:"overview",imageSize:[1320,740]},tags:["REACT","THREE.JS","DATA VIZ","ANIMATION"],textBlocks:["Lead designer and frontend developer for a cricket review tool used on live television."],modal:{title:"StanceBeam: Designing Cricket Reviews for Live Broadcast",context:"Cloudworx Studio × StanceBeam · 2024 · Lead designer & developer",sections:[{type:"text",content:"At Cloudworx Studio in 2024, I led the interface design and frontend development for a cricket visualizer built with StanceBeam. My teammates supplied a configurable 3D environment; I connected it to the operator controls, broadcast graphics, and animation sequence. The main use case was an LBW (leg-before-wicket) review: showing where a delivery pitched, where it hit the batter, and whether its projected path would hit the wickets."},{type:"image",src:"/images/archive/cricket-ball-trajectory.webp",width:1320,height:740,alt:"Original StanceBeam ball trajectory visualization with a broadcast ticker.",caption:"Original project archive, 2024: ball trajectory and broadcast graphics."},{type:"text",content:"We handed the application to StanceBeam for testing and delivery to the broadcaster. An LBW review was shown during one match of the 2024 Madhya Pradesh Premier League on JioCinema."},{type:"text",content:"The console screenshots and feature recordings below show a reconstruction using the original assets and illustrative delivery data. The opening image is from the original project archive; the final video is the original live broadcast."},{type:"heading",content:"From client requirements to an operator workflow"},{type:"text",content:"StanceBeam wanted to make ball tracking more affordable using camera footage and machine learning. After several rounds of training and data collection, they wanted to test their system in a live broadcast setting. Their API supplied the trajectory and analysis data; our application turned it into a graphic the broadcaster could prepare and play."},{type:"text",content:"I worked closely with the client to understand the cricket terminology, the purpose of each graphic, and the steps needed to prepare it. I had to understand the difference between pitching, impact, and the projected path before I could organize the review. These discussions shaped a repeatable workflow: choose the data, configure the graphic, preview it, and prepare a clean output."},{type:"heading",content:"Prepare the graphic before going on air"},{type:"text",content:"The broadcaster needed to prepare a review while keeping setup controls away from the audience. I separated the operator console from the broadcast screen. Batting and bowling selections establish the match context, including which side is requesting a review. Latest data follows incoming deliveries; explicit over-and-ball selection lets the operator return to an earlier moment. Both routes lead into the same configuration process."},{type:"text",content:"Camera presets make framing a choice the operator can make in advance. A closing move to the stump or impact view supports a different reading of the same delivery. Playback speed controls the pace, and the bowler title identifies whose delivery is being shown. Preview lets the operator check these choices together before pressing Start."},{type:"text",content:"Start opens a clean 1920 × 1080 landscape output. Keeping the composition fixed means the broadcast graphics retain their positions and proportions. The operator then presses Space once to play the prepared sequence, including the camera transition. Separating setup, preview, and the playback cue keeps configuration work out of the live animation."},{type:"heading",content:"Decision Review: explain the delivery in stages"},{type:"text",content:"Decision Review was the main reason to build the application. A trajectory becomes useful when the viewer can connect it to the review’s questions: where did the ball pitch, where was the impact, and what does the projection show at the wickets? I designed the 2D review graphics to make those questions legible alongside the 3D scene."},{type:"text",content:"The sequence reveals the relevant information as the ball reaches each checkpoint, then presents the original and final decisions. I timed the panels around these moments so viewers could follow the review in order. StanceBeam supplied the analysis and decision data; my work was to make that information readable and synchronize it with the scene."},{type:"image",src:"/images/stancebeam/console-decision.webp",caption:"Reconstructed demo: preparing a single delivery for Decision Review before opening the clean output.",alt:"Decision Review operator console with delivery, playback, and camera configuration controls.",width:1920,height:1080,fullWidth:!0},{type:"video",src:"/videos/stancebeam/decision-review.mp4",caption:"Reconstructed demo with illustrative data: one Space press runs the delivery, review panels, and configured camera move.",fullWidth:!0,poster:"/images/stancebeam/decision-review-poster.webp"},{type:"heading",content:"Over Review: compare six deliveries"},{type:"text",content:"Over Review answers a different question: how do several deliveries relate to one another? The interface lets the operator choose which balls to include and how to play them. Showing the paths together makes their distribution easy to compare; playing them sequentially makes each delivery easier to follow. Keeping completed paths visible preserves the context as the over builds."},{type:"text",content:"The six measurement choices give each comparison a purpose: speed before pitch, speed after pitch, average speed, angle before pitch, angle after pitch, and turn angle. The lower third shows the selected value for each ball. This gives the operator a focused comparison without putting every available measurement on screen at once."},{type:"image",src:"/images/stancebeam/console-over.webp",caption:"Reconstructed demo: selecting deliveries, sequence, and a measurement for an over comparison.",alt:"Over Review console showing delivery selection, playback order, and measurement controls.",width:1920,height:1080,fullWidth:!0},{type:"video",src:"/videos/stancebeam/over-review.mp4",caption:"Reconstructed demo with illustrative data: selected deliveries play together, followed by their measurement graphic.",fullWidth:!0,poster:"/images/stancebeam/over-review-poster.webp"},{type:"video",src:"/videos/stancebeam/over-sequential.mp4",caption:"Reconstructed demo with illustrative data: deliveries play in sequence while completed paths remain visible.",fullWidth:!0,poster:"/images/stancebeam/over-sequential-poster.webp"},{type:"heading",content:"Swing Analysis: make the comparison visible"},{type:"text",content:"Swing Analysis focuses on the relationship between the actual path and a comparison trajectory. They share the flight to the pitching point and separate after the bounce. That common anchor makes the change in direction easier to read. The graphic presents the before-pitch, after-pitch, and turn angles associated with the delivery."},{type:"text",content:"This comparison depends on the reference data supplied for that delivery. In the reconstruction, imported deliveries without a reference cannot run Swing Analysis. The demo’s reference is an illustrative continuation of the incoming heading, labelled accordingly. It demonstrates the interaction without implying a measured result."},{type:"image",src:"/images/stancebeam/console-swing.webp",caption:"Reconstructed demo: preparing a single-delivery comparison for Swing Analysis.",alt:"Swing Analysis console with a selected delivery and playback configuration.",width:1920,height:1080,fullWidth:!0},{type:"video",src:"/videos/stancebeam/swing-analysis.mp4",caption:"Reconstructed demo with illustrative data: the actual path and illustrative reference separate from their shared bounce point.",fullWidth:!0,poster:"/images/stancebeam/swing-analysis-poster.webp"},{type:"heading",content:"Connecting the console to the 3D scene"},{type:"text",content:"The interface was built in React, alongside a scene implemented with React Three Fiber. I worked with the 3D team on the callbacks that carried selections and playback instructions into their configurable environment. The controls, camera behavior, trajectory animation, and overlay timing needed to describe the same delivery and the same point in the sequence."},{type:"text",content:"This was the main engineering and design connection in my role. A selection in the 2D interface had to produce a predictable change in the 3D scene, and the camera move and overlay reveal had to occur at the right point in playback. I owned those frontend connections and timings while working with the team responsible for the 3D environment."},{type:"image",src:"/images/stancebeam/workflow.svg",caption:"The division of work: StanceBeam supplied tracking data, my teammates supplied the configurable 3D environment, and I built the console and playback connections.",alt:"StanceBeam tracking data feeds the operator console, playback coordination, and 1920 by 1080 output. The diagram distinguishes my frontend contribution from the team’s 3D environment.",width:1600,height:650,fullWidth:!0},{type:"heading",content:"Handover, broadcast, and reflection"},{type:"text",content:"We handed the application to StanceBeam, who tested it and passed it on for use. The original clip below shows the confirmed broadcast outcome: an LBW review during one 2024 Madhya Pradesh Premier League match on JioCinema. It connects the interface and synchronization work to a review presented to a live audience."},{type:"text",content:"The project taught me to treat playback behavior as part of interface design. The useful handoff is from a set of operator choices to a sequence the audience can follow. If I continued the work, I would want to observe operators using it and evaluate preparation, preview, and recovery in their actual workflow. That would test the assumptions we developed with the client."},{type:"video",src:"/videos/archive/cricket-live-broadcast.mp4",poster:"/images/archive/cricket-live-broadcast.webp",caption:"Original broadcast excerpt: an LBW review during one 2024 Madhya Pradesh Premier League match on JioCinema.",fullWidth:!0}],metadata:{years:["2024"],organizations:["Cloudworx Studio","StanceBeam"],role:"Lead designer & developer"},introHeading:"Turning ball-tracking data into a broadcast-ready review."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[8,9]},metadata:{years:["2024"],organizations:["Cloudworx Studio","StanceBeam"],role:"Lead designer & developer"},tileTitle:"StanceBeam: Cricket Broadcast"}},{id:"walkthrough3d",template:"projectDetail",projectDetails:{title:"3D Walkthrough Application for Real Estate",image:"/images/archive/walkthrough-living-room.webp",imageAlt:"A browser-based architectural walkthrough with baked lighting.",tags:["THREE.JS","XR / VR","RESEARCH"],textBlocks:["Browser-based architectural walkthroughs for desktop, mobile, and VR, with optimized models and baked lighting."],modal:{title:"3D Walkthrough Application for Real Estate",context:"Personal project · Started in 2020 · Development documented through 2025",sections:[{type:"text",content:"This project began in 2020 with a question: could we experience the SketchUp models made by interior design students in VR?"},{type:"image",src:"/images/archive/walkthrough-living-room.webp",caption:"A browser-based architectural walkthrough with baked lighting.",alt:"A browser-based architectural walkthrough with baked lighting.",width:1600,height:889},{type:"text",content:"I wanted people to explore architectural models in an immersive, navigable space that was easy to share and available across devices. A browser-based experience made sense because it did not require specialized software or local installation."},{type:"heading",content:"Making the models work on the web"},{type:"text",content:"Early SketchUp models were highly detailed and too heavy to render smoothly. I explored reducing polygon counts and optimizing the lighting. The first versions ran on PCs and VR headsets; later, I added touchscreen-friendly navigation for mobile devices."},{type:"gallery",images:[{type:"image",src:"/images/archive/walkthrough-dining-room.webp",caption:"Dining and living spaces in the walkthrough.",alt:"Dining and living spaces in the walkthrough.",width:1600,height:889},{type:"image",src:"/images/archive/walkthrough-bedroom.webp",caption:"A bedroom scene with light and shadows baked into the textures.",alt:"A bedroom scene with light and shadows baked into the textures.",width:1600,height:889}]},{type:"heading",content:"Texture baking"},{type:"text",content:"Piyush Jain and I explored baking light and shadows directly into textures. This reduced the need for real-time lighting and helped us balance visual quality with performance. We iterated on the baked lighting across several versions of the environment."},{type:"text",content:"Texture baking was also time-consuming and highly manual. In the 2025 portfolio, I identified automating this workflow with AI as a direction for further exploration."},{type:"image",src:"/images/archive/walkthrough-lounge.webp",caption:"Another interior from the walkthrough experiments.",alt:"Another interior from the walkthrough experiments.",width:1600,height:889},{type:"link",label:"Explore the archived walkthrough collection",url:"https://commiep.github.io/PCLinks/"}],metadata:{years:["2020"],organizations:[],role:"Development with Piyush Jain",status:"2020–ongoing"},introHeading:"Exploring architecture through the browser."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[14,15]},link:{label:"VISIT",url:"https://commiep.github.io/PCLinks/"},metadata:{years:["2020"],organizations:[],role:"Development with Piyush Jain",status:"2020–ongoing"},presentation:{layout:"overview",imageSize:[1600,889]},tileTitle:"Architectural Walkthroughs"}},{id:"radstore",template:"projectDetail",projectDetails:{title:"Radstore — RadBoards Virtual Store Experience",image:"/images/archive/radstore-interior.webp",imageAlt:"The RadBoards virtual store, with product displays and a baked lighting environment.",tags:["THREE.JS","XR / VR","SHOWCASE"],textBlocks:["A Three.js virtual store where visitors explore RadBoards products, browse media, and add items to a cart."],modal:{title:"Radstore — RadBoards Virtual Store Experience",context:"Conscious Circle · RadBoards · 2022 · Frontend development",sections:[{type:"text",content:"At Conscious Circle, I built a virtual store for RadBoards, a Bangalore-based hoverboard and electric kick scooter brand."},{type:"image",src:"/images/archive/radstore-interior.webp",caption:"The RadBoards virtual store, with product displays and a baked lighting environment.",alt:"The RadBoards virtual store, with product displays and a baked lighting environment.",width:1130,height:515},{type:"text",content:"I built the frontend with Three.js and managed the 2D product popups with jQuery. Visitors could move freely through the store, inspect products, and add them to a cart. Piyush Jain created the 3D models, textures, lighting, and baked environment. We integrated a video display and an image gallery for the brand’s social media posts."},{type:"gallery",images:[{type:"image",src:"/images/archive/radstore-product-popup.webp",caption:"A product popup within the virtual store.",alt:"A product popup within the virtual store.",width:551,height:361},{type:"image",src:"/images/archive/radstore-video-display.webp",caption:"An in-store video display.",alt:"An in-store video display.",width:558,height:334}]},{type:"text",content:"Texture baking helped us achieve the intended visual style while keeping the experience performant. We also prototyped versions for VR and mobile devices."},{type:"image",src:"/images/archive/radstore-showroom.webp",caption:"Product displays in another area of the showroom.",alt:"Product displays in another area of the showroom.",width:966,height:508},{type:"link",label:"Explore Radstore",url:"https://commiep.github.io/RadStore/"}],metadata:{years:["2022"],organizations:["Conscious Circle","RadBoards"],role:"Frontend development"},introHeading:"A virtual showroom for RadBoards."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[10,11]},link:{label:"VISIT",url:"https://commiep.github.io/RadStore/"},metadata:{years:["2022"],organizations:["Conscious Circle","RadBoards"],role:"Frontend development"},presentation:{layout:"overview",imageSize:[1130,515]},tileTitle:"Radstore — Virtual Store"}},{id:"trainingSimulation",template:"projectDetail",projectDetails:{title:"Training Simulation Application for the Logistics Industry",image:"/images/archive/warehouse-training.webp",imageAlt:"The warehouse training simulation with box handling and a scanner interface.",tags:["THREE.JS","SIMULATION","SYSTEMS","PEDAGOGY"],textBlocks:["A browser-based warehouse training simulation with scanning, box handling, and customizable exercises."],modal:{title:"Training Simulation Application for the Logistics Industry",context:"Hoansi Studios · Sixth-semester internship · 2021",sections:[{type:"text",content:"During my sixth-semester internship at Hoansi Studios, I developed a browser-based warehouse training prototype for the logistics industry."},{type:"image",src:"/images/archive/warehouse-training.webp",caption:"The warehouse training simulation with box handling and a scanner interface.",alt:"The warehouse training simulation with box handling and a scanner interface.",width:1500,height:1e3},{type:"heading",content:"The training problem"},{type:"text",content:"The client worked in the logistics industry in the United States. During COVID-19 restrictions, limits on warehouse staffing meant training new workers on the floor could reduce productivity. Their goal was a virtual module that could shorten a training period of approximately four weeks or eventually replace the need for on-site training. This was the prototype’s aim, rather than a measured result."},{type:"text",content:"The requirements were an immersive 3D environment, interaction with warehouse equipment, real-time instructions and feedback, customizable task sequences, and access through a browser without local installation."},{type:"heading",content:"From A-Frame to Three.js"},{type:"text",content:"I first built the receiving workflow in A-Frame to test movement and scanning interactions. That version distinguished between pallets and individual boxes, a distinction omitted from later iterations. I then modeled a warehouse in Autodesk Fusion 360 and made its textures and floor markings in Photoshop and Illustrator."},{type:"gallery",images:[{type:"image",src:"/images/archive/warehouse-first-prototype.webp",caption:"The early A-Frame proof of concept.",alt:"The early A-Frame proof of concept.",width:1500,height:1e3},{type:"image",src:"/images/archive/warehouse-model.webp",caption:"Warehouse modeling and layout.",alt:"Warehouse modeling and layout.",width:1500,height:1e3}]},{type:"text",content:"With the model ready, I moved development to Three.js. I added gaze-based box dragging and dropping, text input for the scanner, and interactions that simulated the receiving workflow."},{type:"heading",content:"Configuring an exercise"},{type:"text",content:"The setup editor lets an instructor add or remove the printer step, set the number of boxes and their drop-off points, and choose which boxes produce a scan error. A scan error prompts the trainee to enter the information manually."},{type:"image",src:"/images/archive/warehouse-setup-editor.webp",caption:"The setup editor for configuring a training exercise.",alt:"The setup editor for configuring a training exercise.",width:1500,height:1e3},{type:"link",label:"Open the training prototype",url:"https://quirky-euclid-b05c20.netlify.app/"}],metadata:{years:["2021"],organizations:["Hoansi Studios"],role:"Sixth-semester internship"},introHeading:"Learning the warehouse workflow in a browser."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[12,13]},link:{label:"TRY IT",url:"https://quirky-euclid-b05c20.netlify.app/"},metadata:{years:["2021"],organizations:["Hoansi Studios"],role:"Sixth-semester internship"},presentation:{layout:"overview",imageSize:[1500,1e3]},tileTitle:"Warehouse Training Simulation"}},{id:"bitsDesignSchoolShowcase2025",template:"projectDetail",projectDetails:{title:"BITS Design School Showcase 2025",image:"/images/bits-design-school-showcase-2025.svg",tags:["SHOWCASE","ARCHIVE","STORYTELLING","THREE.JS"],textBlocks:["An interactive Three.js archive of the BITS Design School Showcase 2025."],modal:{title:"BITS Design School Showcase 2025",sections:[{type:"image",src:"/images/bits-design-school-showcase-2025.svg",alt:"BITS Design School Schowcase 2025"}],metadata:{years:["2025"],organizations:["BITS Design School"]}},metadata:{years:["2025"],organizations:["BITS Design School"]},presentation:{layout:"overview",imageSize:[1200,800]}}},{id:"xrToneSynthesizerBeatSequencer",template:"projectDetail",projectDetails:{title:"XR Tone Synthesizer and Beat Sequencer",image:"/images/xr-tone-synthesizer-beat-sequencer.svg",tags:["XR / VR","SOUND","SYSTEMS"],textBlocks:["An XR tone synthesizer and beat sequencer."],modal:{title:"XR Tone Synthesizer and Beat Sequencer",sections:[{type:"image",src:"/images/xr-tone-synthesizer-beat-sequencer.svg",alt:"XR Tone Synthesizer and Beat Sequencer"}],metadata:{years:["2025"],organizations:["NYU ITP"]}},metadata:{years:["2025"],organizations:["NYU ITP"]},presentation:{layout:"overview",imageSize:[1200,800]}}},{id:"powaiYear1",template:"projectDetail",projectDetails:{title:"Powai: Year 1",image:"/images/powai-year-1.svg",tags:["ARCHIVE","STORYTELLING","THREE.JS"],textBlocks:["The first year of Powai, documented through an interactive Three.js archive."],modal:{title:"Powai: Year 1",sections:[{type:"image",src:"/images/powai-year-1.svg",alt:"Powai: Year 1"}],metadata:{years:["2026"],organizations:["NYU ITP","BITS Design School"]}},metadata:{years:["2026"],organizations:["NYU ITP","BITS Design School"]},presentation:{layout:"overview",imageSize:[1200,800]}}},{id:"natureOfCodeBranchNotebook",template:"projectDetail",projectDetails:{title:"Nature of Code/ Branch Notebook",image:"/images/nature-of-code-branch-notebook.svg",tags:["GENERATIVE","P5.JS","ARCHIVE","CREATIVE CODING"],textBlocks:["A p5.js notebook of generative sketches and studies from Nature of Code."],modal:{title:"Nature of Code/ Branch Notebook",sections:[{type:"image",src:"/images/nature-of-code-branch-notebook.svg",alt:"Nature of Code/ Branch Notebook"}],metadata:{years:["2026"],organizations:["NYU ITP"]}},metadata:{years:["2026"],organizations:["NYU ITP"]},presentation:{layout:"overview",imageSize:[1200,800]}}},{id:"communion",template:"projectDetail",projectDetails:{title:"COMMUNION",image:"/images/communion.jpg",tags:["SOUND","PARTICIPATION","RITUAL"],textBlocks:["A browser-based ritual interface exploring sound, shared attention, and spatial interaction.","The project treats interface, score, and environment as one continuous browser-native system."],modal:{title:"Communion",sections:[{type:"text",content:"Communion is a prototype for live browser-based participation, using 3D space as both interface and score."},{type:"image",src:"/images/communion.jpg",caption:"Placeholder project image."}]}},blocks:[{id:"communion-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"COMMUNION"}},{id:"communion-text",type:"content",subtype:"text",placement:"left",size:"tall",content:{text:"A browser-based ritual interface exploring sound, shared attention, and spatial interaction."}},{id:"communion-image",type:"content",subtype:"image",placement:"right",size:"large",content:{src:"/images/communion.jpg",alt:"Communion project placeholder"}},{id:"communion-more",type:"moreInfo",placement:"bottom",size:"medium",content:{label:"MORE INFO"},modal:{title:"Communion",sections:[{type:"text",content:"Communion is a prototype for live browser-based participation, using 3D space as both interface and score."},{type:"image",src:"/images/communion.jpg",caption:"Placeholder project image."}]}},{id:"communion-back",type:"interaction",placement:"topLeftStack1",size:"small",content:{label:"BACK"},action:{type:"back"}}]},{id:"astralProjection",template:"projectDetail",projectDetails:{title:"Astral Projection",image:"/images/project-placeholder.svg",imageAlt:"Placeholder for Astral Projection; project imagery to be added.",placeholder:!0,tags:["XR / VR"],textBlocks:["An XR project at NYU ITP. Project documentation is coming soon."],metadata:{years:["2026"],organizations:["NYU ITP"]},presentation:{layout:"overview",imageSize:[1200,800]},modal:{title:"Astral Projection",metadata:{years:["2026"],organizations:["NYU ITP"]},introHeading:"Documentation coming soon.",sections:[{type:"text",content:"An XR project at NYU ITP. Project documentation is coming soon."},{type:"image",src:"/images/project-placeholder.svg",alt:"Placeholder for Astral Projection.",caption:"Project imagery to be added."}]}}},{id:"spatialSketches",template:"projectDetail",projectDetails:{title:"SPATIAL SKETCHES",image:"/images/spatial-sketches.jpg",tags:["PROTOTYPE","SPATIAL UI","WEBXR","STUDY"],textBlocks:["Placeholder project page for a browser-native spatial interaction study.","A set of quick tests for interface behavior, depth, and attention in browser-based 3D."],modal:{title:"Spatial Sketches",sections:[{type:"text",content:"Placeholder detail content for Spatial Sketches."}]}},blocks:[{id:"spatial-sketches-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"SPATIAL SKETCHES",fontWeight:700}},{id:"spatial-sketches-text",type:"content",subtype:"text",placement:"center",size:"wide",content:{text:"Placeholder project page for a browser-native spatial interaction study.",fontWeight:300}},{id:"spatial-sketches-image",type:"content",subtype:"image",placement:"right",size:"medium",content:{src:"/images/spatial-sketches.jpg",alt:"Spatial Sketches placeholder"}},{id:"spatial-sketches-back",type:"interaction",placement:"topLeftStack1",size:"small",content:{label:"BACK",fontWeight:700},action:{type:"back"}}]},{id:"signalGarden",template:"projectDetail",projectDetails:{title:"SIGNAL GARDEN",image:"/images/signal-garden.jpg",tags:["AUDIOVISUAL","REAL TIME","INTERFACE","SYSTEM"],textBlocks:["Placeholder project page for a real-time audiovisual interface.","An experimental system for making signal flow, interaction, and sound visible in the browser."],modal:{title:"Signal Garden",sections:[{type:"text",content:"Placeholder detail content for Signal Garden."}]}},blocks:[{id:"signal-garden-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"SIGNAL GARDEN",fontWeight:700}},{id:"signal-garden-text",type:"content",subtype:"text",placement:"center",size:"wide",content:{text:"Placeholder project page for a real-time audiovisual interface.",fontWeight:300}},{id:"signal-garden-image",type:"content",subtype:"image",placement:"right",size:"medium",content:{src:"/images/signal-garden.jpg",alt:"Signal Garden placeholder"}},{id:"signal-garden-back",type:"interaction",placement:"topLeftStack1",size:"small",content:{label:"BACK",fontWeight:700},action:{type:"back"}}]},{id:"browserRituals",template:"projectDetail",projectDetails:{title:"BROWSER RITUALS",image:"/images/browser-rituals.jpg",tags:["PERFORMANCE","BROWSER","CEREMONY","NETWORK"],textBlocks:["Placeholder project page for an experimental web performance system.","The project uses simple browser primitives to stage shared attention, timing, and mediated presence."],modal:{title:"Browser Rituals",sections:[{type:"text",content:"Placeholder detail content for Browser Rituals."}]}},blocks:[{id:"browser-rituals-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"BROWSER RITUALS",fontWeight:700}},{id:"browser-rituals-text",type:"content",subtype:"text",placement:"center",size:"wide",content:{text:"Placeholder project page for an experimental web performance system.",fontWeight:300}},{id:"browser-rituals-image",type:"content",subtype:"image",placement:"right",size:"medium",content:{src:"/images/browser-rituals.jpg",alt:"Browser Rituals placeholder"}},{id:"browser-rituals-back",type:"interaction",placement:"topLeftStack1",size:"small",content:{label:"BACK",fontWeight:700},action:{type:"back"}}]},{id:"experiments",template:"projectList",projectItems:[{id:"fractalGeneration",title:"Fractal Generation",thumbnail:"/images/archive/fractal-mandelbrot.webp",target:"fractalGeneration"},{id:"kanthaGames",title:"Kantha Games",thumbnail:"/images/archive/kantha-flappy-bird.webp",target:"kanthaGames"},{id:"zoetropeAnimation",title:"Zoetrope Animation",thumbnail:"/images/archive/zoetrope-characters.webp",target:"zoetropeAnimation"},{id:"cyanotypeAnimation",title:"Cyanotype Animation",thumbnail:"/images/archive/cyanotype-frame.webp",target:"cyanotypeAnimation"},{id:"generativeCompositions",title:"Generative Compositions",thumbnail:"/images/archive/generative-rectangle-packing.webp",target:"generativeCompositions"},{id:"soundVisualizationFft",title:"Sound Visualization with FFT",thumbnail:"/images/archive/sound-fft-green.webp",target:"soundVisualizationFft"},{id:"origamiStudies",title:"Origami",thumbnail:"/images/archive/origami-orange.webp",target:"origamiStudies"}],blocks:[{id:"experiments-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"EXPERIMENTS",fontWeight:700}},{id:"experiments-prev",type:"interaction",placement:"projectPrev",size:"small",content:{label:"PREV",fontWeight:700,iconSrc:"/icons/arrow-left.svg"},action:{type:"carousel",direction:-1}},{id:"experiments-next",type:"interaction",placement:"projectNext",size:"small",content:{label:"NEXT",fontWeight:700,iconSrc:"/icons/arrow-right.svg"},action:{type:"carousel",direction:1}},{id:"experiments-back",type:"interaction",placement:"topLeftStack1",size:"small",content:{label:"BACK",fontWeight:700},action:{type:"back",target:"home"}}]},{id:"teaching",template:"projectList",projectItems:[{id:"habitAndBehaviourLab",title:"Habit and Behaviour Lab",thumbnail:"/images/archive/habit-neuron-environment.webp",target:"habitAndBehaviourLab"},{id:"architecturalVisualizationVr",title:"Architectural Visualization in Virtual Reality",thumbnail:"/images/archive/architecture-student-environment.webp",target:"architecturalVisualizationVr"},{id:"basicsOfProgramming",title:"Basics of Programming",thumbnail:"/images/archive/programming-grid-composition.webp",target:"basicsOfProgramming"},{id:"threejsWorkshopNyuTandonMakerspaceDesignLab",title:"Three.js Workshop @ NYU Makerspace",thumbnail:"/images/threejs-workshop-nyu-tandon-makerspace-design-lab.svg",target:"threejsWorkshopNyuTandonMakerspaceDesignLab"},{id:"nyuK12XrCohort2026",title:"NYU K12 XR Cohort 2026",thumbnail:"/images/project-placeholder.svg",target:"nyuK12XrCohort2026"},{id:"algorithmsOfExploitation",title:"Algorithms of Exploitation",thumbnail:"/images/project-placeholder.svg",target:"algorithmsOfExploitation"}],blocks:[{id:"teaching-title",type:"content",subtype:"header",placement:"top",size:"wide",content:{text:"TEACHING & RESEARCH",fontWeight:700}},{id:"teaching-prev",type:"interaction",placement:"projectPrev",size:"small",content:{label:"PREV",fontWeight:700,iconSrc:"/icons/arrow-left.svg"},action:{type:"carousel",direction:-1}},{id:"teaching-next",type:"interaction",placement:"projectNext",size:"small",content:{label:"NEXT",fontWeight:700,iconSrc:"/icons/arrow-right.svg"},action:{type:"carousel",direction:1}},{id:"teaching-back",type:"interaction",placement:"topLeftStack1",size:"small",content:{label:"BACK",fontWeight:700},action:{type:"back",target:"home"}}],title:"Teaching & Research"},{id:"experimentPlaceholder",template:"projectDetail",projectDetails:{title:"Experiment Placeholder",image:"/images/experiment-placeholder.svg",tags:["EXPERIMENT","FILLER","STUDY"],textBlocks:["Placeholder experiment page for a small browser-native study.","This space will hold process notes, technical details, interaction sketches, and documentation once the experiment is ready."],modal:{title:"Experiment Placeholder",sections:[]}}},{id:"teachingPlaceholder",template:"projectDetail",projectDetails:{title:"Teaching Placeholder",image:"/images/teaching-placeholder.svg",tags:["PEDAGOGY","FILLER","PEDAGOGY"],textBlocks:["Placeholder teaching page for a course, workshop, or learning tool.","This space will hold teaching context, learning objectives, session structure, student outcomes, and documentation once the entry is ready."],modal:{title:"Teaching Placeholder",sections:[]}}},{id:"habitAndBehaviourLab",template:"projectDetail",projectDetails:{title:"Habit and Behaviour Lab",image:"/images/archive/habit-neuron-environment.webp",imageAlt:"A neuron-inspired environment for exploring theories of habit formation.",tags:["RESEARCH","XR / VR","PEDAGOGY","THREE.JS","P5.JS"],textBlocks:["Web and VR prototypes, EEG experiments, and teaching support for Dr. Sanjukta Ghosh’s Habit and Behaviour Lab."],modal:{title:"Habit and Behaviour Lab",context:"Srishti Manipal · November 2022–April 2024 · Research and technical support",sections:[{type:"text",content:"I worked with Dr. Sanjukta Ghosh’s Habit and Behaviour Lab at Srishti Manipal as a development resource and research assistant from November 2022 to April 2024."},{type:"image",src:"/images/archive/habit-neuron-environment.webp",caption:"A neuron-inspired environment for exploring theories of habit formation.",alt:"A neuron-inspired environment for exploring theories of habit formation.",width:788,height:366},{type:"text",content:"I initially provided technical assistance to students and conducted masterclasses for M.Des Design Led Innovation students on virtual environments and sensor electronics. With Dr. Sanjukta, I explored VR as a medium for meditation and built prototypes to support the lab’s experiments."},{type:"image",src:"/images/archive/habit-vr-session.webp",caption:"Exploring a virtual environment with a VR headset at the Habit and Behaviour Lab.",alt:"A participant with a VR headset and controller beside monitors displaying interior models.",width:1125,height:1500},{type:"heading",content:"EEG and experimental data"},{type:"text",content:"I helped facilitate experiments with an electroencephalogram (EEG) sensor and extract its readings into a readable format. Students investigated possible relationships between alpha and beta wave readings and different stimuli."},{type:"image",src:"/images/archive/habit-eeg-session.webp",caption:"An EEG experiment at the Habit and Behaviour Lab.",alt:"An EEG experiment at the Habit and Behaviour Lab.",width:525,height:540},{type:"image",src:"/images/archive/habit-eeg-material-study.webp",caption:"An EEG recording session during a hands-on material activity.",alt:"A participant wearing an EEG band while working with thread and fabric.",width:1125,height:1500},{type:"heading",content:"Making research accessible"},{type:"text",content:"I made the lab’s website with HTML, CSS, and Bootstrap to archive student papers, activities, and research. I also created a neuron-inspired virtual environment: each node opened a popup describing a theory of habit formation from the students’ literature review."},{type:"image",src:"/images/archive/habit-lab-website.webp",caption:"The lab website and research archive.",alt:"The lab website and research archive.",width:839,height:361},{type:"link",label:"Visit the Habit and Behaviour Lab",url:"https://www.habitandbehaviour.com/"},{type:"heading",content:"A low-cost VR meditation kit"},{type:"text",content:"I built a Three.js environment around a virtual candle. The experience asked users to look toward the candle and focus on breathing, while the headset measured whether they were looking at it. After tests on VR headsets, I developed several Google Cardboard-style viewers under Dr. Sanjukta’s guidance, testing materials and dimensions with a CNC laser cutter."},{type:"gallery",images:[{type:"image",src:"/images/archive/habit-vr-candle.webp",caption:"The virtual candle meditation environment.",alt:"The virtual candle meditation environment.",width:835,height:364},{type:"image",src:"/images/archive/habit-cardboard-viewer.webp",caption:"Iterations of the low-cost VR viewer.",alt:"Iterations of the low-cost VR viewer.",width:486,height:364}]},{type:"heading",content:"Game sessions as research data"},{type:"text",content:"For an experiment on the addictive qualities of casual mobile games, I built an infinite runner in p5.js and used Firebase to record sessions. The records supported analysis of session duration, frequency of play, and engagement patterns, including how difficulty progression affected play."},{type:"gallery",images:[{type:"image",src:"/images/archive/habit-runner-prototype.webp",caption:"The infinite runner used in the experiment.",alt:"The infinite runner used in the experiment.",width:204,height:361},{type:"image",src:"/images/archive/habit-session-data.webp",caption:"The backend used to record game sessions.",alt:"The backend used to record game sessions.",width:616,height:182}]}],metadata:{years:["2022","2023","2024"],organizations:["Srishti"],role:"Research and technical support"},introHeading:"Building tools for behavioral research."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[3,4]},link:{label:"VISIT",url:"https://www.habitandbehaviour.com/"},metadata:{years:["2022","2023","2024"],organizations:["Srishti"],role:"Research and technical support"},presentation:{layout:"overview",imageSize:[788,366]}}},{id:"architecturalVisualizationVr",template:"projectDetail",projectDetails:{title:"Architectural Visualization in Virtual Reality",image:"/images/archive/architecture-student-environment.webp",imageAlt:"Student work: an interior environment developed for the architectural visualization unit.",tags:["XR / VR","THREE.JS","PEDAGOGY","SHOWCASE"],textBlocks:["A studio on web-ready architectural environments, with student work presented in a Three.js sandbox."],modal:{title:"Architectural Visualization in Virtual Reality",context:"Srishti Manipal · September 2023 · Co-facilitated with Piyush Jain",sections:[{type:"text",content:"In September 2023, I co-facilitated an architectural visualization unit with 3D artist Piyush Jain for third-year Interior Design and Build students at Srishti Manipal."},{type:"image",src:"/images/archive/architecture-student-environment.webp",caption:"Student work: an interior environment developed for the architectural visualization unit.",alt:"Student work: an interior environment developed for the architectural visualization unit.",width:558,height:360},{type:"text",content:"We introduced the workflow for preparing 3D models for the web, covering modeling, texturing, lighting, and baking. Students worked toward immersive virtual environments that we later presented in a Three.js sandbox."},{type:"gallery",images:[{type:"image",src:"/images/archive/architecture-student-gallery.webp",caption:"Student work: a virtual gallery environment.",alt:"Student work: a virtual gallery environment.",width:558,height:361},{type:"image",src:"/images/archive/architecture-student-display.webp",caption:"Student work: a circular display space.",alt:"Student work: a circular display space.",width:558,height:360},{type:"image",src:"/images/archive/architecture-student-interior.webp",caption:"Student work: an interior scene.",alt:"Student work: an interior scene.",width:558,height:364}]},{type:"text",content:"I also developed a website to archive and display the class projects. The environments shown here are student work; my role was co-facilitation and building the web platform."},{type:"link",label:"Explore the student project archive",url:"https://velvety-pie-f26429.netlify.app/"}],metadata:{years:["2023"],organizations:["Srishti"],role:"Co-facilitated with Piyush Jain"},introHeading:"From an architectural model to a shared VR experience."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[7]},link:{label:"VISIT",url:"https://velvety-pie-f26429.netlify.app/"},metadata:{years:["2023"],organizations:["Srishti"],role:"Co-facilitated with Piyush Jain"},presentation:{layout:"overview",imageSize:[558,360]},tileTitle:"Architectural Visualization in VR"}},{id:"basicsOfProgramming",template:"projectDetail",projectDetails:{title:"Basics of Programming",image:"/images/archive/programming-grid-composition.webp",imageAlt:"Student work: a grid-based generative composition from the programming unit.",tags:["P5.JS","CREATIVE CODING","PEDAGOGY","GENERATIVE"],textBlocks:["Learning programming through p5.js: coordinates, loops, randomness, generative compositions, and pixel filters."],modal:{title:"Basics of Programming",context:"Srishti Manipal · November 2022–April 2024 · Later workshop at BITS Design School, Mumbai",sections:[{type:"text",content:"I taught several iterations of Basics of Programming to first-year Creative Coding and User Interface & Interaction Design students at Srishti Manipal between November 2022 and April 2024."},{type:"image",src:"/images/archive/programming-grid-composition.webp",caption:"Student work: a grid-based generative composition from the programming unit.",alt:"Student work: a grid-based generative composition from the programming unit.",width:1274,height:1274},{type:"text",content:"Inspired by my own journey into coding with p5.js, I introduced programming through direct visual feedback. Students explored Cartesian geometry, loops, and randomness, and learned to think algorithmically about composition: instead of only making a final image, they designed rules and systems that generated evolving visuals."},{type:"heading",content:"Coordinates through tartan patterns"},{type:"text",content:"One of the first activities asked students to design their own Scottish tartan. It introduced how the Cartesian coordinate system is represented on a p5.js canvas."},{type:"gallery",images:[{type:"image",src:"/images/archive/programming-tartan-blue.webp",caption:"Student work: a tartan pattern created with p5.js.",alt:"Student work: a tartan pattern created with p5.js.",width:361,height:361},{type:"image",src:"/images/archive/programming-tartan-yellow.webp",caption:"Student work: another tartan composition.",alt:"Student work: another tartan composition.",width:273,height:361}]},{type:"heading",content:"Grids and generative art"},{type:"text",content:"After exploring shapes on the canvas, students worked with different ways to create grids, populate them with elements, and randomize parameters to produce emergent compositions."},{type:"gallery",images:[{type:"image",src:"/images/archive/programming-student-pattern.webp",caption:"Student work: repeated motifs arranged in a grid.",alt:"Student work: repeated motifs arranged in a grid.",width:1070,height:1070},{type:"image",src:"/images/archive/programming-student-flowers.webp",caption:"Student work: a generative composition by Sara.",alt:"Student work: a generative composition by Sara.",width:500,height:500},{type:"image",src:"/images/archive/programming-generative-flower-field.webp",caption:"Student work: Pranathi’s flower field varies repeated motifs across a grid.",alt:"A grid of red, orange and pink flowers varying in size against a cream background.",width:1e3,height:1e3},{type:"image",src:"/images/archive/programming-generative-circles.webp",caption:"Student work: Swasti’s composition of overlapping lines and circles.",alt:"Thin pale-green loops and circles repeated on a blue background.",width:1e3,height:1e3}]},{type:"heading",content:"Composition and perception"},{type:"text",content:"Students also explored Gestalt principles through code. The archived exercises include closure and Prägnanz studies, with moving marks, repeated shapes and visual grouping used to investigate how a composition is perceived."},{type:"image",src:"/images/archive/programming-gestalt-composition.webp",caption:"Student work: Rhea’s composition exploring visual grouping and repeated forms.",alt:"A pink and yellow grid of circles, triangles, dots and flower-like shapes.",width:1e3,height:1e3},{type:"heading",content:"Photo filters at BITS Design School"},{type:"text",content:"In 2024 at BITS Design School, Mumbai, I conducted a variation of the unit as a workshop. Over several weeks we explored grids through pixel manipulation, leading to a pixel filter camera app."},{type:"gallery",images:[{type:"image",src:"/images/archive/programming-filter-portrait.webp",caption:"Workshop output: a portrait processed with the pixel filter app.",alt:"Workshop output: a portrait processed with the pixel filter app.",width:832,height:1280},{type:"image",src:"/images/archive/programming-filter-street.webp",caption:"Workshop output: a street photograph transformed through pixel manipulation.",alt:"Workshop output: a street photograph transformed through pixel manipulation.",width:1065,height:1600}]},{type:"heading",content:"A camera as a canvas"},{type:"text",content:"The workshop outputs include filtered selfies and photographs. Students translated camera images into colored marks and halftone-like grids, experimenting with limited palettes, contrast and repeated pixel shapes."},{type:"gallery",images:[{type:"image",src:"/images/archive/programming-filter-selfie-halftone.webp",caption:"Student work: Nikshitha’s blue and yellow halftone portrait.",alt:"A portrait transformed into blue dots against a yellow field.",width:1500,height:919},{type:"image",src:"/images/archive/programming-filter-selfie-grid.webp",caption:"Student work: Rhea’s live camera filter combines color and a divided grid.",alt:"A self-portrait split into pink, black and white quadrants with pixel texture.",width:1500,height:926},{type:"image",src:"/images/archive/programming-filter-selfie-pixels.webp",caption:"Student work: Sara’s portrait rebuilt with colored pixel shapes.",alt:"A portrait formed from a dense grid of colored square and circular marks.",width:320,height:197}]}],metadata:{years:["2022","2023","2024"],organizations:["Srishti","BITS Design School"],role:"Teaching and workshop facilitation"},introHeading:"Learning to code by making images."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[5,6]},metadata:{years:["2022","2023","2024"],organizations:["Srishti","BITS Design School"],role:"Teaching and workshop facilitation"},presentation:{layout:"overview",imageSize:[1274,1274]}}},{id:"threejsWorkshopNyuTandonMakerspaceDesignLab",template:"projectDetail",projectDetails:{title:"Three.js Workshop @ NYU Makerspace",image:"/images/threejs-workshop-nyu-tandon-makerspace-design-lab.svg",tags:["THREE.JS","PEDAGOGY","CREATIVE CODING"],textBlocks:["A Three.js creative coding workshop at NYU Makerspace."],modal:{title:"Three.js Workshop @ NYU Makerspace",sections:[{type:"image",src:"/images/threejs-workshop-nyu-tandon-makerspace-design-lab.svg",alt:"Three.js Workshop @ NYU Makerspace"}],metadata:{years:["2025"],organizations:["NYU Makerspace"]}},metadata:{years:["2025"],organizations:["NYU Makerspace"]},presentation:{layout:"overview",imageSize:[1200,800]}}},{id:"about",template:"overlay",overlay:{kind:"about",title:"Aditya De",eyebrow:"ABOUT",context:"Creative technologist, designer & educator.",introLabel:"PRACTICE",introHeading:`Design, technology
& education.`,returnLabel:"BACK TO PORTFOLIO",closeLabel:"Close About",sections:[{type:"image",src:"/images/myFace.png",alt:"Portrait of Aditya De"},{type:"text",content:"Aditya's practice explores the juxtaposition of the digital and physical through browser-based 3D interaction, mixed reality experimentation, sound, and real-time creative technology."},{type:"text",content:"As a developer and designer, he builds web-based spatial systems and prototypes mixed reality experiences that reimagine how people engage with space, bodies, and interfaces."},{type:"text",content:"As an educator, he is interested in how AI can be aligned with pedagogy, with a focus on process, experimentation, and learning through making."},{type:"heading",content:"Find me"},{type:"link",label:"Résumé 2026",url:"/files/ADITYADE_CV_2026.pdf"},{type:"link",label:"Instagram",url:"https://www.instagram.com/cactus_de/"},{type:"link",label:"GitHub",url:"https://github.com/adityade8k"},{type:"link",label:"LinkedIn",url:"https://www.linkedin.com/in/aditya-de-94222a163/"}]}},{id:"fareCalculationSimulator",template:"projectDetail",projectDetails:{title:"Fare Calculation Algorithm Simulator",image:"/images/archive/fare-simulation-map.webp",imageAlt:"The fare simulator with a map, configurable rates, and running metrics.",tags:["SIMULATION","RESEARCH","DATA VIZ","SYSTEMS"],textBlocks:["A simulator exploring how fuel costs and fare rules affect auto-rickshaw drivers’ earnings."],modal:{title:"Fare Calculation Algorithm Simulator",context:"Seventh-semester pre-thesis project · 2021",sections:[{type:"text",content:"For my 2021 pre-thesis project, I researched auto-rickshaw drivers in Bangalore and prototyped a simulator for exploring fare calculation models."},{type:"image",src:"/images/archive/fare-simulation-map.webp",caption:"The fare simulator with a map, configurable rates, and running metrics.",alt:"The fare simulator with a map, configurable rates, and running metrics.",width:1600,height:813},{type:"heading",content:"Algorithms and everyday work"},{type:"text",content:"Service aggregation apps use algorithms to assign work and calculate pay. Small changes to these systems can have significant effects on the daily lives of gig workers. I wanted to understand those effects in the context of auto-rickshaw drivers."},{type:"text",content:"Coming from Mumbai, where meter regulations were strictly enforced, I found the situation in Bangalore very different. I interviewed 20 drivers from different parts of Bangalore, often with a translator, to understand their perspectives on fares and ride-sharing platforms."},{type:"heading",content:"The prototype"},{type:"text",content:"The simulator models auto-rickshaws picking up and dropping off passengers within a fixed area. Users can configure fuel cost, the per-kilometer rate, base fare, and minimum distance. As it runs, the interface tracks average fare, take-home earnings, and fuel expenses. I integrated the Google Maps API to ground the simulation in a real map."},{type:"heading",content:"What the research revealed"},{type:"text",content:"Mathematical optimization can suggest an ideal fare model, but interviews showed that social and political factors often diverge from purely numerical solutions. The project helped me examine where a simulation can be useful and where lived experience complicates its assumptions."}],metadata:{years:["2021"],organizations:["Srishti"],role:"Seventh-semester pre-thesis project"},introHeading:"Making the economics of a ride visible."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[16]},metadata:{years:["2021"],organizations:["Srishti"],role:"Seventh-semester pre-thesis project"},presentation:{layout:"overview",imageSize:[1600,813]}}},{id:"plasticSweeper",template:"projectDetail",projectDetails:{title:"Plastic Sweeper — Live Interactive Data Visualization",image:"/images/archive/plastic-sweeper-game.webp",imageAlt:"Plastic Sweeper: an ocean pollution visualization inspired by Minesweeper.",tags:["P5.JS","DATA VIZ","CREATIVE CODING"],textBlocks:["A Minesweeper-inspired game where ocean plastic data makes the grid harder to clear."],modal:{title:"Plastic Sweeper — Live Interactive Data Visualization",context:"Third-semester studio · 2019 · Featured in the p5.js 2020 showcase",sections:[{type:"text",content:"Plastic Sweeper is a Minesweeper-inspired game I made in a 2019 studio led by Garret Lynch to communicate the scale of plastic pollution in the oceans."},{type:"image",src:"/images/archive/plastic-sweeper-game.webp",caption:"Plastic Sweeper: an ocean pollution visualization inspired by Minesweeper.",alt:"Plastic Sweeper: an ocean pollution visualization inspired by Minesweeper.",width:1600,height:889},{type:"text",content:"The studio brief was to create a visualization that responded to real-time data. I chose ocean plastic waste and looked for an interaction that could make its scale tangible."},{type:"text",content:"Players try to uncover the blue tiles while avoiding the red ones. The twist is that the number of red tiles is set by the amount of plastic waste in the oceans. With the data updating live, the increasing difficulty becomes part of the message."},{type:"text",content:"Rubaan Singh created the tile illustrations. Plastic Sweeper was featured in the p5.js 2020 showcase as one of three selected projects from India."},{type:"image",src:"/images/archive/plastic-sweeper-showcase.webp",caption:"Plastic Sweeper in the p5.js 2020 showcase.",alt:"Plastic Sweeper in the p5.js 2020 showcase.",width:1600,height:889},{type:"link",label:"Play Plastic Sweeper",url:"https://kind-lovelace-0bae83.netlify.app/"}],metadata:{years:["2019"],organizations:["Srishti"],role:"Third-semester studio"},introHeading:"Playing through the scale of plastic pollution."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[17]},link:{label:"PLAY",url:"https://kind-lovelace-0bae83.netlify.app/"},metadata:{years:["2019"],organizations:["Srishti"],role:"Third-semester studio"},presentation:{layout:"overview",imageSize:[1600,889]},tileTitle:"Plastic Sweeper"}},{id:"animatedVideoProduction",template:"projectDetail",projectDetails:{title:"Animated Video Production",image:"/images/archive/animation-interim-ensemble.webp",imageAlt:"A still from the class animation work for INTERIM 2019, a tribute to Girish Karnad.",tags:["ANIMATION","STORYTELLING","AUDIOVISUAL"],textBlocks:["Animation and video production for INTERIM 2019 and Grasp, from research and storyboards to editing."],modal:{title:"Animated Video Production",context:"Selected animation work · INTERIM 2019 and Grasp",sections:[{type:"text",content:"My animation work spans research, concepts, scripts, storyboards, shot lists, and video and audio editing, alongside collaboration with designers, animators, and sound engineers."},{type:"image",src:"/images/archive/animation-interim-ensemble.webp",caption:"A still from the class animation work for INTERIM 2019, a tribute to Girish Karnad.",alt:"A still from the class animation work for INTERIM 2019, a tribute to Girish Karnad.",width:842,height:474},{type:"text",content:"I have worked with Illustrator, Photoshop, Premiere Pro, and Audition, and with the After Effects workflow. I have also coordinated teams of animators, designers, editors, and sound engineers."},{type:"heading",content:"INTERIM 2019 — A tribute to Girish Karnad"},{type:"text",content:"For A Festival of Performances, my class at Srishti in 2019 interpreted lines from Girish Karnad’s prose and developed visuals around the emotions in his writing."},{type:"link",label:"Watch the ensemble animation",url:"https://drive.google.com/file/d/1I3sIrpdFyRld7xz30G4NCYZRn7O6n0VD/view"},{type:"image",src:"/images/archive/animation-interim-flight.webp",caption:"A second still from the INTERIM animation work.",alt:"A second still from the INTERIM animation work.",width:843,height:474},{type:"link",label:"Watch the second animation",url:"https://drive.google.com/file/d/1E8Qit8Qds-G13rGnXKUm_yobsVguCyVy/view"},{type:"heading",content:"Grasp"},{type:"text",content:"Grasp was a news media startup founded by a school friend. In 2020, I produced its first YouTube video, an explainer about domestic violence in India."},{type:"image",src:"/images/archive/animation-grasp.webp",caption:"A still from the Grasp news explainer.",alt:"A still from the Grasp news explainer.",width:858,height:481},{type:"link",label:"Watch the Grasp explainer",url:"https://www.youtube.com/watch?v=WoT8a76skhM"}],metadata:{years:["2019","2020"],organizations:["Srishti","Grasp"],role:"Animation and video production"},introHeading:"Stories told through animation."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[24]},metadata:{years:["2019","2020"],organizations:["Srishti","Grasp"],role:"Animation and video production"},presentation:{layout:"overview",imageSize:[842,474]}}},{id:"fractalGeneration",template:"projectDetail",projectDetails:{title:"Fractal Generation",image:"/images/archive/fractal-mandelbrot.webp",imageAlt:"A Mandelbrot fractal generated through repeated transformations of complex numbers.",tags:["GENERATIVE","SYSTEMS","CREATIVE CODING"],textBlocks:["Mandelbrot sets and Chaos Game studies exploring how simple rules generate complex, self-similar forms."],modal:{title:"Fractal Generation",context:"Personal experiments · From the 2025 archive",sections:[{type:"text",content:"I am fascinated by the intricate nature of fractals and have explored different ways to generate them, from Mandelbrot sets to the Chaos Game."},{type:"image",src:"/images/archive/fractal-mandelbrot.webp",caption:"A Mandelbrot fractal generated through repeated transformations of complex numbers.",alt:"A Mandelbrot fractal generated through repeated transformations of complex numbers.",width:363,height:363},{type:"text",content:"For the Mandelbrot studies, I used Python to compute points and exported them as text files representing bitmap images. The process iterates over complex numbers and checks their stability under repeated transformations."},{type:"gallery",images:[{type:"image",src:"/images/archive/fractal-monochrome.webp",caption:"A monochrome fractal study.",alt:"A monochrome fractal study.",width:363,height:363},{type:"image",src:"/images/archive/fractal-pink.webp",caption:"A color exploration of a generated fractal.",alt:"A color exploration of a generated fractal.",width:363,height:363},{type:"image",src:"/images/archive/fractal-branching.webp",caption:"Branching detail in a fractal study.",alt:"Branching detail in a fractal study.",width:363,height:363}]},{type:"text",content:"Other studies used the Chaos Game: points are plotted randomly while following a set of predefined rules. I explored how complex structures, including forms such as the Barnsley Fern, can emerge from this process."},{type:"gallery",images:[{type:"image",src:"/images/archive/fractal-chaos-orange.webp",caption:"A rule-based fractal composition.",alt:"A rule-based fractal composition.",width:1e3,height:1e3},{type:"image",src:"/images/archive/fractal-chaos-red.webp",caption:"A second exploration of recursive structure.",alt:"A second exploration of recursive structure.",width:1e3,height:1e3}]}],metadata:{years:[],organizations:[]},introHeading:"Complex forms from simple rules."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[18]},metadata:{years:[],organizations:[]},presentation:{layout:"overview",imageSize:[363,363]}}},{id:"kanthaGames",template:"projectDetail",projectDetails:{title:"Kantha Games",image:"/images/archive/kantha-flappy-bird.webp",imageAlt:"Flappy Bird rebuilt with embroidered game elements.",tags:["ANIMATION","MOTION","CREATIVE CODING"],textBlocks:["Snake and Flappy Bird recreated with hand-embroidered game elements scanned into digital assets."],modal:{title:"Kantha Games",context:"Personal material exploration · Embroidery workshop in West Bengal",sections:[{type:"text",content:"During an embroidery workshop with artisans in West Bengal, I explored how embroidery could become an art style for games and animation."},{type:"image",src:"/images/archive/kantha-flappy-bird.webp",caption:"Flappy Bird rebuilt with embroidered game elements.",alt:"Flappy Bird rebuilt with embroidered game elements.",width:1600,height:889},{type:"text",content:"I recreated Snake and Flappy Bird by embroidering the game elements and scanning them into digital assets. The Flappy Bird study includes a six-frame looping animation, carrying the texture and character of the hand-stitched work into the game."},{type:"link",label:"Play embroidered Flappy Bird",url:"https://agitated-pike-bfdc12.netlify.app/"},{type:"image",src:"/images/archive/kantha-snake.webp",caption:"Snake recreated using scanned embroidery.",alt:"Snake recreated using scanned embroidery.",width:1600,height:889},{type:"link",label:"Play embroidered Snake",url:"https://friendly-shaw-87bc32.netlify.app/"}],metadata:{years:["2020"],organizations:["Srishti"],role:"Material exploration"},introHeading:"Hand embroidery, made playable."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[19]},link:{label:"PLAY",url:"https://agitated-pike-bfdc12.netlify.app/"},metadata:{years:["2020"],organizations:["Srishti"],role:"Material exploration"},presentation:{layout:"overview",imageSize:[1600,889]}}},{id:"zoetropeAnimation",template:"projectDetail",projectDetails:{title:"Zoetrope Animation",image:"/images/archive/zoetrope-characters.webp",imageAlt:"Animated characters arranged as successive frames around a circle.",tags:["ANIMATION","MOTION","SYSTEMS"],textBlocks:["Mixamo characters rendered in Blender as circular sequences of still poses that suggest continuous movement."],modal:{title:"Zoetrope Animation",context:"Personal animation studies · From the 2025 archive",sections:[{type:"text",content:"These studies use the principles of the zoetrope, one of the earliest devices for creating the illusion of a moving image."},{type:"image",src:"/images/archive/zoetrope-characters.webp",caption:"Animated characters arranged as successive frames around a circle.",alt:"Animated characters arranged as successive frames around a circle.",width:1390,height:1390},{type:"text",content:"I used Mixamo to animate the characters, then rendered spaced animation frames in Blender. Arranging successive poses around a circle applies the zoetrope’s principle: a sequence of still images can create the illusion of continuous movement."},{type:"gallery",images:[{type:"image",src:"/images/archive/zoetrope-red-blue.webp",caption:"A circular sequence of character poses.",alt:"A circular sequence of character poses.",width:1390,height:1390},{type:"image",src:"/images/archive/zoetrope-pink.webp",caption:"Another arrangement of successive animation frames.",alt:"Another arrangement of successive animation frames.",width:1390,height:1390}]},{type:"link",label:"Watch the zoetrope animation",url:"https://www.instagram.com/reel/CusGNlkgM93/"}],metadata:{years:[],organizations:[]},introHeading:"Still poses, continuous motion."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[19]},link:{label:"WATCH",url:"https://www.instagram.com/reel/CusGNlkgM93/"},metadata:{years:[],organizations:[]},presentation:{layout:"overview",imageSize:[1390,1390]}}},{id:"cyanotypeAnimation",template:"projectDetail",projectDetails:{title:"Cyanotype Animation",image:"/images/archive/cyanotype-frame.webp",imageAlt:"An animation frame rendered as a cyanotype print.",tags:["CYANOTYPE","PRINTMAKING","ANIMATION","MOTION"],textBlocks:["Digital animation frames rendered as cyanotype prints, bringing physical texture into moving images."],modal:{title:"Cyanotype Animation",context:"Personal material and animation experiments · From the 2025 archive",sections:[{type:"text",content:"I experimented with creating animations digitally and rendering their individual frames as cyanotype prints."},{type:"image",src:"/images/archive/cyanotype-frame.webp",caption:"An animation frame rendered as a cyanotype print.",alt:"An animation frame rendered as a cyanotype print.",width:244,height:340},{type:"text",content:"I was interested in the meeting point between digital animation tools and a physical printing process. Each printed frame becomes part of a moving sequence, carrying the surface and variation of cyanotype into the result."},{type:"gallery",images:[{type:"image",src:"/images/archive/cyanotype-frame-01.webp",caption:"A cyanotype frame from the first sequence.",alt:"A cyanotype frame from the first sequence.",width:244,height:340},{type:"image",src:"/images/archive/cyanotype-frame-10.webp",caption:"A later frame in the sequence.",alt:"A later frame in the sequence.",width:244,height:340},{type:"image",src:"/images/archive/cyanotype-frame-15.webp",caption:"Another frame from the cyanotype animation.",alt:"Another frame from the cyanotype animation.",width:244,height:340}]},{type:"text",content:"For another animation, I extracted frames from a music video and used them as the basis for the cyanotype sequence."},{type:"gallery",images:[{type:"image",src:"/images/archive/cyanotype-music-01.webp",caption:"A cyanotype made from an extracted music video frame.",alt:"A cyanotype made from an extracted music video frame.",width:144,height:281},{type:"image",src:"/images/archive/cyanotype-music-15.webp",caption:"A later printed frame from the music video study.",alt:"A later printed frame from the music video study.",width:144,height:281}]},{type:"link",label:"Watch the cyanotype animation",url:"https://www.instagram.com/reel/DB8j7FjNl1i/"}],metadata:{years:[],organizations:[]},introHeading:"Digital motion, printed by hand."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[20,21]},link:{label:"WATCH",url:"https://www.instagram.com/reel/DB8j7FjNl1i/"},metadata:{years:[],organizations:[]},presentation:{layout:"overview",imageSize:[244,340]}}},{id:"generativeCompositions",template:"projectDetail",projectDetails:{title:"Generative Compositions",image:"/images/archive/generative-rectangle-packing.webp",imageAlt:"A rectangle-packing composition made with Three.js.",tags:["THREE.JS","P5.JS","GENERATIVE","SYSTEMS","CREATIVE CODING"],textBlocks:["Rectangle packing and terrain generation in Three.js, alongside a random sprite generator in p5.js."],modal:{title:"Generative Compositions",context:"Personal creative coding studies · From the 2025 archive",sections:[{type:"text",content:"A collection of generative studies: rectangle packing and terrain generation in Three.js, alongside a random sprite generator in p5.js."},{type:"image",src:"/images/archive/generative-rectangle-packing.webp",caption:"A rectangle-packing composition made with Three.js.",alt:"A rectangle-packing composition made with Three.js.",width:1600,height:889},{type:"heading",content:"Rectangle packing · Three.js"},{type:"gallery",images:[{type:"image",src:"/images/archive/generative-packing-yellow.webp",caption:"A second rectangle-packing composition.",alt:"A second rectangle-packing composition.",width:1600,height:889},{type:"image",src:"/images/archive/generative-packing-red.webp",caption:"A red and cream variation.",alt:"A red and cream variation.",width:1600,height:889},{type:"image",src:"/images/archive/generative-packing-purple.webp",caption:"A purple variation.",alt:"A purple variation.",width:1600,height:889}]},{type:"heading",content:"Terrain generation · Three.js"},{type:"gallery",images:[{type:"image",src:"/images/archive/generative-forest.webp",caption:"A generated landscape with trees.",alt:"A generated landscape with trees.",width:1600,height:889},{type:"image",src:"/images/archive/generative-terrain.webp",caption:"A low-poly terrain study.",alt:"A low-poly terrain study.",width:1600,height:889}]},{type:"heading",content:"Random sprite generator · p5.js"},{type:"image",src:"/images/archive/generative-sprites.webp",caption:"A collection of generated pixel sprites.",alt:"A collection of generated pixel sprites.",width:1600,height:899},{type:"link",label:"Try the random sprite generator",url:"https://zen-jones-bd7864.netlify.app/"}],metadata:{years:[],organizations:[]},introHeading:"Compositions built from rules and variation."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[22]},link:{label:"TRY IT",url:"https://zen-jones-bd7864.netlify.app/"},metadata:{years:[],organizations:[]},presentation:{layout:"overview",imageSize:[1600,889]}}},{id:"soundVisualizationFft",template:"projectDetail",projectDetails:{title:"Sound Visualization with FFT",image:"/images/archive/sound-fft-green.webp",imageAlt:"A Three.js sound visualization driven by frequency data.",tags:["THREE.JS","SOUND","AUDIOVISUAL","DATA VIZ","MOTION"],textBlocks:["Three.js visualizations that use audio frequency data to drive motion and respond to sound in real time."],modal:{title:"Sound Visualization with FFT",context:"Personal audiovisual experiments · From the 2025 archive",sections:[{type:"text",content:"I use Fourier transforms to analyze audio and explore sound visualization in Three.js."},{type:"image",src:"/images/archive/sound-fft-green.webp",caption:"A Three.js sound visualization driven by frequency data.",alt:"A Three.js sound visualization driven by frequency data.",width:1080,height:1080},{type:"text",content:"Fourier transforms extract frequency data from an audio file. I use that data to change visual parameters in Three.js, making the elements on screen respond to the sound in real time."},{type:"link",label:"Watch the first sound visualization",url:"https://www.instagram.com/reel/C0ClBkttoh_/"},{type:"image",src:"/images/archive/sound-fft-pink.webp",caption:"A second audio-reactive Three.js study.",alt:"A second audio-reactive Three.js study.",width:1080,height:1080},{type:"link",label:"Watch the second sound visualization",url:"https://www.instagram.com/reel/DAvlYZjt22Q/"}],metadata:{years:[],organizations:[]},introHeading:"Frequency becomes form."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[23]},link:{label:"WATCH",url:"https://www.instagram.com/reel/C0ClBkttoh_/"},metadata:{years:[],organizations:[]},presentation:{layout:"overview",imageSize:[1080,1080]}}},{id:"origamiStudies",template:"projectDetail",projectDetails:{title:"Origami",image:"/images/archive/origami-orange.webp",imageAlt:"An origami form from the archive.",tags:[],textBlocks:["Folded paper studies exploring precision, structure, and the transformation of a flat sheet into complex forms."],modal:{title:"Origami",context:"Personal paper studies · From the 2025 archive",sections:[{type:"text",content:"I enjoy origami for the way it brings together precision, creativity, and structure."},{type:"image",src:"/images/archive/origami-orange.webp",caption:"An origami form from the archive.",alt:"An origami form from the archive.",width:408,height:408},{type:"text",content:"The transformation of a simple sheet into a complex form mirrors the relationship between rules and expression in my digital work. These paper studies sit alongside my experiments with algorithms and three-dimensional spaces."},{type:"gallery",images:[{type:"image",src:"/images/archive/origami-grey.webp",caption:"A folded paper study in grey.",alt:"A folded paper study in grey.",width:408,height:408},{type:"image",src:"/images/archive/origami-pink.webp",caption:"A folded paper figure.",alt:"A folded paper figure.",width:408,height:408}]}],metadata:{years:[],organizations:[]},introHeading:"Exploring structure through folded paper."},archiveSource:{document:"AdityaDePortfolio (Portfolio 2025)",pages:[25]},metadata:{years:[],organizations:[]},presentation:{layout:"overview",imageSize:[408,408]}}},{id:"hongOrchestra",template:"projectDetail",projectDetails:{title:"Honk Orchestra",image:"/images/project-placeholder.svg",imageAlt:"Placeholder for Honk Orchestra; project imagery to be added.",placeholder:!0,tags:["XR / VR","SOUND","MOTION"],textBlocks:["XR, sound and motion at NYU ITP. Project documentation is coming soon."],metadata:{years:["2026"],organizations:["NYU ITP"]},presentation:{layout:"overview",imageSize:[1200,800]},modal:{title:"Honk Orchestra",metadata:{years:["2026"],organizations:["NYU ITP"]},introHeading:"Documentation coming soon.",sections:[{type:"text",content:"XR, sound and motion at NYU ITP. Project documentation is coming soon."},{type:"image",src:"/images/project-placeholder.svg",alt:"Placeholder for Honk Orchestra.",caption:"Project imagery to be added."}]}}},{id:"nyuK12XrCohort2026",template:"projectDetail",projectDetails:{title:"NYU K12 XR Cohort 2026",image:"/images/project-placeholder.svg",imageAlt:"Placeholder for NYU K12 XR Cohort 2026; project imagery to be added.",placeholder:!0,tags:["THREE.JS","XR / VR","CREATIVE CODING","PEDAGOGY"],textBlocks:["NYU K12 XR cohort. Project documentation is coming soon."],metadata:{years:["2026"],organizations:["NYU K12 STEM"]},presentation:{layout:"overview",imageSize:[1200,800]},modal:{title:"NYU K12 XR Cohort 2026",metadata:{years:["2026"],organizations:["NYU K12 STEM"]},introHeading:"Documentation coming soon.",sections:[{type:"text",content:"NYU K12 XR cohort. Project documentation is coming soon."},{type:"image",src:"/images/project-placeholder.svg",alt:"Placeholder for NYU K12 XR Cohort 2026.",caption:"Project imagery to be added."}]}}},{id:"algorithmsOfExploitation",template:"projectDetail",projectDetails:{title:"Algorithms of Exploitation",image:"/images/project-placeholder.svg",imageAlt:"Placeholder for Algorithms of Exploitation; project imagery to be added.",placeholder:!0,tags:["RESEARCH"],textBlocks:["Research documentation is coming soon."],metadata:{years:["2022"],organizations:["Srishti"]},presentation:{layout:"overview",imageSize:[1200,800]},modal:{title:"Algorithms of Exploitation",metadata:{years:["2022"],organizations:["Srishti"]},introHeading:"Documentation coming soon.",sections:[{type:"text",content:"Research documentation is coming soon."},{type:"image",src:"/images/project-placeholder.svg",alt:"Placeholder for Algorithms of Exploitation.",caption:"Project imagery to be added."}]}}}],$x=["AI"],lt={pages:Jx,unassignedTags:$x},Qx=Jt;class Qo extends Ta{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const r=this,o=new Hx(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(s){try{t(r.parse(s))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(P,C){if(P.nodeType!==1)return;const R=_(P);let M=!1,W=null;switch(P.nodeName){case"svg":C=g(P,C);break;case"style":r(P);break;case"g":C=g(P,C);break;case"path":C=g(P,C),P.hasAttribute("d")&&(W=i(P));break;case"rect":C=g(P,C),W=c(P);break;case"polygon":C=g(P,C),W=l(P);break;case"polyline":C=g(P,C),W=h(P);break;case"circle":C=g(P,C),W=u(P);break;case"ellipse":C=g(P,C),W=d(P);break;case"line":C=g(P,C),W=f(P);break;case"defs":M=!0;break;case"use":C=g(P,C);const ie=(P.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),Z=P.viewportElement.getElementById(ie);Z?n(Z,C):console.warn("SVGLoader: 'use node' references non-existent node id: "+ie);break}W&&(C.fill!==void 0&&C.fill!=="none"&&W.color.setStyle(C.fill,Qx),D(W,z),I.push(W),W.userData={node:P,style:C});const re=P.childNodes;for(let U=0;U<re.length;U++){const ie=re[U];M&&ie.nodeName!=="style"&&ie.nodeName!=="defs"||n(ie,C)}R&&(G.pop(),G.length>0?z.copy(G[G.length-1]):z.identity())}function i(P){const C=new Pi,R=new _e,M=new _e,W=new _e;let re=!0,U=!1;const ie=P.getAttribute("d");if(ie===""||ie==="none")return null;const Z=ie.match(/[a-df-z][^a-df-z]*/ig);for(let ve=0,Q=Z.length;ve<Q;ve++){const le=Z[ve],de=le.charAt(0),me=le.slice(1).trim();re===!0&&(U=!0,re=!1);let H;switch(de){case"M":H=p(me);for(let x=0,w=H.length;x<w;x+=2)R.x=H[x+0],R.y=H[x+1],M.x=R.x,M.y=R.y,x===0?C.moveTo(R.x,R.y):C.lineTo(R.x,R.y),x===0&&W.copy(R);break;case"H":H=p(me);for(let x=0,w=H.length;x<w;x++)R.x=H[x],M.x=R.x,M.y=R.y,C.lineTo(R.x,R.y),x===0&&U===!0&&W.copy(R);break;case"V":H=p(me);for(let x=0,w=H.length;x<w;x++)R.y=H[x],M.x=R.x,M.y=R.y,C.lineTo(R.x,R.y),x===0&&U===!0&&W.copy(R);break;case"L":H=p(me);for(let x=0,w=H.length;x<w;x+=2)R.x=H[x+0],R.y=H[x+1],M.x=R.x,M.y=R.y,C.lineTo(R.x,R.y),x===0&&U===!0&&W.copy(R);break;case"C":H=p(me);for(let x=0,w=H.length;x<w;x+=6)C.bezierCurveTo(H[x+0],H[x+1],H[x+2],H[x+3],H[x+4],H[x+5]),M.x=H[x+2],M.y=H[x+3],R.x=H[x+4],R.y=H[x+5],x===0&&U===!0&&W.copy(R);break;case"S":H=p(me);for(let x=0,w=H.length;x<w;x+=4)C.bezierCurveTo(v(R.x,M.x),v(R.y,M.y),H[x+0],H[x+1],H[x+2],H[x+3]),M.x=H[x+0],M.y=H[x+1],R.x=H[x+2],R.y=H[x+3],x===0&&U===!0&&W.copy(R);break;case"Q":H=p(me);for(let x=0,w=H.length;x<w;x+=4)C.quadraticCurveTo(H[x+0],H[x+1],H[x+2],H[x+3]),M.x=H[x+0],M.y=H[x+1],R.x=H[x+2],R.y=H[x+3],x===0&&U===!0&&W.copy(R);break;case"T":H=p(me);for(let x=0,w=H.length;x<w;x+=2){const k=v(R.x,M.x),ae=v(R.y,M.y);C.quadraticCurveTo(k,ae,H[x+0],H[x+1]),M.x=k,M.y=ae,R.x=H[x+0],R.y=H[x+1],x===0&&U===!0&&W.copy(R)}break;case"A":H=p(me,[3,4],7);for(let x=0,w=H.length;x<w;x+=7){if(H[x+5]==R.x&&H[x+6]==R.y)continue;const k=R.clone();R.x=H[x+5],R.y=H[x+6],M.x=R.x,M.y=R.y,o(C,H[x],H[x+1],H[x+2],H[x+3],H[x+4],k,R),x===0&&U===!0&&W.copy(R)}break;case"m":H=p(me);for(let x=0,w=H.length;x<w;x+=2)R.x+=H[x+0],R.y+=H[x+1],M.x=R.x,M.y=R.y,x===0?C.moveTo(R.x,R.y):C.lineTo(R.x,R.y),x===0&&W.copy(R);break;case"h":H=p(me);for(let x=0,w=H.length;x<w;x++)R.x+=H[x],M.x=R.x,M.y=R.y,C.lineTo(R.x,R.y),x===0&&U===!0&&W.copy(R);break;case"v":H=p(me);for(let x=0,w=H.length;x<w;x++)R.y+=H[x],M.x=R.x,M.y=R.y,C.lineTo(R.x,R.y),x===0&&U===!0&&W.copy(R);break;case"l":H=p(me);for(let x=0,w=H.length;x<w;x+=2)R.x+=H[x+0],R.y+=H[x+1],M.x=R.x,M.y=R.y,C.lineTo(R.x,R.y),x===0&&U===!0&&W.copy(R);break;case"c":H=p(me);for(let x=0,w=H.length;x<w;x+=6)C.bezierCurveTo(R.x+H[x+0],R.y+H[x+1],R.x+H[x+2],R.y+H[x+3],R.x+H[x+4],R.y+H[x+5]),M.x=R.x+H[x+2],M.y=R.y+H[x+3],R.x+=H[x+4],R.y+=H[x+5],x===0&&U===!0&&W.copy(R);break;case"s":H=p(me);for(let x=0,w=H.length;x<w;x+=4)C.bezierCurveTo(v(R.x,M.x),v(R.y,M.y),R.x+H[x+0],R.y+H[x+1],R.x+H[x+2],R.y+H[x+3]),M.x=R.x+H[x+0],M.y=R.y+H[x+1],R.x+=H[x+2],R.y+=H[x+3],x===0&&U===!0&&W.copy(R);break;case"q":H=p(me);for(let x=0,w=H.length;x<w;x+=4)C.quadraticCurveTo(R.x+H[x+0],R.y+H[x+1],R.x+H[x+2],R.y+H[x+3]),M.x=R.x+H[x+0],M.y=R.y+H[x+1],R.x+=H[x+2],R.y+=H[x+3],x===0&&U===!0&&W.copy(R);break;case"t":H=p(me);for(let x=0,w=H.length;x<w;x+=2){const k=v(R.x,M.x),ae=v(R.y,M.y);C.quadraticCurveTo(k,ae,R.x+H[x+0],R.y+H[x+1]),M.x=k,M.y=ae,R.x=R.x+H[x+0],R.y=R.y+H[x+1],x===0&&U===!0&&W.copy(R)}break;case"a":H=p(me,[3,4],7);for(let x=0,w=H.length;x<w;x+=7){if(H[x+5]==0&&H[x+6]==0)continue;const k=R.clone();R.x+=H[x+5],R.y+=H[x+6],M.x=R.x,M.y=R.y,o(C,H[x],H[x+1],H[x+2],H[x+3],H[x+4],k,R),x===0&&U===!0&&W.copy(R)}break;case"Z":case"z":C.currentPath.autoClose=!0,C.currentPath.curves.length>0&&(R.copy(W),C.currentPath.currentPoint.copy(R),re=!0);break;default:console.warn(le)}U=!1}return C}function r(P){if(!(!P.sheet||!P.sheet.cssRules||!P.sheet.cssRules.length))for(let C=0;C<P.sheet.cssRules.length;C++){const R=P.sheet.cssRules[C];if(R.type!==1)continue;const M=R.selectorText.split(/,/gm).filter(Boolean).map(W=>W.trim());for(let W=0;W<M.length;W++){const re=Object.fromEntries(Object.entries(R.style).filter(([,U])=>U!==""));F[M[W]]=Object.assign(F[M[W]]||{},re)}}}function o(P,C,R,M,W,re,U,ie){if(C==0||R==0){P.lineTo(ie.x,ie.y);return}M=M*Math.PI/180,C=Math.abs(C),R=Math.abs(R);const Z=(U.x-ie.x)/2,ve=(U.y-ie.y)/2,Q=Math.cos(M)*Z+Math.sin(M)*ve,le=-Math.sin(M)*Z+Math.cos(M)*ve;let de=C*C,me=R*R;const H=Q*Q,x=le*le,w=H/de+x/me;if(w>1){const Ee=Math.sqrt(w);C=Ee*C,R=Ee*R,de=C*C,me=R*R}const k=de*x+me*H,ae=(de*me-k)/k;let ne=Math.sqrt(Math.max(0,ae));W===re&&(ne=-ne);const oe=ne*C*le/R,xe=-ne*R*Q/C,be=Math.cos(M)*oe-Math.sin(M)*xe+(U.x+ie.x)/2,pe=Math.sin(M)*oe+Math.cos(M)*xe+(U.y+ie.y)/2,Me=s(1,0,(Q-oe)/C,(le-xe)/R),ge=s((Q-oe)/C,(le-xe)/R,(-Q-oe)/C,(-le-xe)/R)%(Math.PI*2);P.currentPath.absellipse(be,pe,C,R,Me,Me+ge,re===0,M)}function s(P,C,R,M){const W=P*R+C*M,re=Math.sqrt(P*P+C*C)*Math.sqrt(R*R+M*M);let U=Math.acos(Math.max(-1,Math.min(1,W/re)));return P*M-C*R<0&&(U=-U),U}function c(P){const C=y(P.getAttribute("x")||0),R=y(P.getAttribute("y")||0),M=y(P.getAttribute("rx")||P.getAttribute("ry")||0),W=y(P.getAttribute("ry")||P.getAttribute("rx")||0),re=y(P.getAttribute("width")),U=y(P.getAttribute("height")),ie=1-.551915024494,Z=new Pi;return Z.moveTo(C+M,R),Z.lineTo(C+re-M,R),(M!==0||W!==0)&&Z.bezierCurveTo(C+re-M*ie,R,C+re,R+W*ie,C+re,R+W),Z.lineTo(C+re,R+U-W),(M!==0||W!==0)&&Z.bezierCurveTo(C+re,R+U-W*ie,C+re-M*ie,R+U,C+re-M,R+U),Z.lineTo(C+M,R+U),(M!==0||W!==0)&&Z.bezierCurveTo(C+M*ie,R+U,C,R+U-W*ie,C,R+U-W),Z.lineTo(C,R+W),(M!==0||W!==0)&&Z.bezierCurveTo(C,R+W*ie,C+M*ie,R,C+M,R),Z}function l(P){function C(re,U,ie){const Z=y(U),ve=y(ie);W===0?M.moveTo(Z,ve):M.lineTo(Z,ve),W++}const R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,M=new Pi;let W=0;return P.getAttribute("points").replace(R,C),M.currentPath.autoClose=!0,M}function h(P){function C(re,U,ie){const Z=y(U),ve=y(ie);W===0?M.moveTo(Z,ve):M.lineTo(Z,ve),W++}const R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,M=new Pi;let W=0;return P.getAttribute("points").replace(R,C),M.currentPath.autoClose=!1,M}function u(P){const C=y(P.getAttribute("cx")||0),R=y(P.getAttribute("cy")||0),M=y(P.getAttribute("r")||0),W=new Er;W.absarc(C,R,M,0,Math.PI*2);const re=new Pi;return re.subPaths.push(W),re}function d(P){const C=y(P.getAttribute("cx")||0),R=y(P.getAttribute("cy")||0),M=y(P.getAttribute("rx")||0),W=y(P.getAttribute("ry")||0),re=new Er;re.absellipse(C,R,M,W,0,Math.PI*2);const U=new Pi;return U.subPaths.push(re),U}function f(P){const C=y(P.getAttribute("x1")||0),R=y(P.getAttribute("y1")||0),M=y(P.getAttribute("x2")||0),W=y(P.getAttribute("y2")||0),re=new Pi;return re.moveTo(C,R),re.lineTo(M,W),re.currentPath.autoClose=!1,re}function g(P,C){C=Object.assign({},C);let R={};if(P.hasAttribute("class")){const U=P.getAttribute("class").split(/\s/).filter(Boolean).map(ie=>ie.trim());for(let ie=0;ie<U.length;ie++)R=Object.assign(R,F["."+U[ie]])}P.hasAttribute("id")&&(R=Object.assign(R,F["#"+P.getAttribute("id")]));function M(U,ie,Z){Z===void 0&&(Z=function(Q){return Q.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),Q}),P.hasAttribute(U)&&(C[ie]=Z(P.getAttribute(U))),R[U]&&(C[ie]=Z(R[U])),P.style&&P.style[U]!==""&&(C[ie]=Z(P.style[U]))}function W(U){return Math.max(0,Math.min(1,y(U)))}function re(U){return Math.max(0,y(U))}return M("fill","fill"),M("fill-opacity","fillOpacity",W),M("fill-rule","fillRule"),M("opacity","opacity",W),M("stroke","stroke"),M("stroke-opacity","strokeOpacity",W),M("stroke-width","strokeWidth",re),M("stroke-linejoin","strokeLineJoin"),M("stroke-linecap","strokeLineCap"),M("stroke-miterlimit","strokeMiterLimit",re),M("visibility","visibility"),C}function v(P,C){return P-(C-P)}function p(P,C,R){if(typeof P!="string")throw new TypeError("Invalid input: "+typeof P);const M={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},W=0,re=1,U=2,ie=3;let Z=W,ve=!0,Q="",le="";const de=[];function me(k,ae,ne){const oe=new SyntaxError('Unexpected character "'+k+'" at index '+ae+".");throw oe.partial=ne,oe}function H(){Q!==""&&(le===""?de.push(Number(Q)):de.push(Number(Q)*Math.pow(10,Number(le)))),Q="",le=""}let x;const w=P.length;for(let k=0;k<w;k++){if(x=P[k],Array.isArray(C)&&C.includes(de.length%R)&&M.FLAGS.test(x)){Z=re,Q=x,H();continue}if(Z===W){if(M.WHITESPACE.test(x))continue;if(M.DIGIT.test(x)||M.SIGN.test(x)){Z=re,Q=x;continue}if(M.POINT.test(x)){Z=U,Q=x;continue}M.COMMA.test(x)&&(ve&&me(x,k,de),ve=!0)}if(Z===re){if(M.DIGIT.test(x)){Q+=x;continue}if(M.POINT.test(x)){Q+=x,Z=U;continue}if(M.EXP.test(x)){Z=ie;continue}M.SIGN.test(x)&&Q.length===1&&M.SIGN.test(Q[0])&&me(x,k,de)}if(Z===U){if(M.DIGIT.test(x)){Q+=x;continue}if(M.EXP.test(x)){Z=ie;continue}M.POINT.test(x)&&Q[Q.length-1]==="."&&me(x,k,de)}if(Z===ie){if(M.DIGIT.test(x)){le+=x;continue}if(M.SIGN.test(x)){if(le===""){le+=x;continue}le.length===1&&M.SIGN.test(le)&&me(x,k,de)}}M.WHITESPACE.test(x)?(H(),Z=W,ve=!1):M.COMMA.test(x)?(H(),Z=W,ve=!0):M.SIGN.test(x)?(H(),Z=re,Q=x):M.POINT.test(x)?(H(),Z=U,Q=x):me(x,k,de)}return H(),de}const m=["mm","cm","in","pt","pc","px"],b={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(P){let C="px";if(typeof P=="string"||P instanceof String)for(let M=0,W=m.length;M<W;M++){const re=m[M];if(P.endsWith(re)){C=re,P=P.substring(0,P.length-re.length);break}}let R;return C==="px"&&t.defaultUnit!=="px"?R=b.in[t.defaultUnit]/t.defaultDPI:(R=b[C][t.defaultUnit],R<0&&(R=b[C].in*t.defaultDPI)),R*parseFloat(P)}function _(P){if(!(P.hasAttribute("transform")||P.nodeName==="use"&&(P.hasAttribute("x")||P.hasAttribute("y"))))return null;const C=L(P);return G.length>0&&C.premultiply(G[G.length-1]),z.copy(C),G.push(C),C}function L(P){const C=new Ve,R=Y;if(P.nodeName==="use"&&(P.hasAttribute("x")||P.hasAttribute("y"))){const M=y(P.getAttribute("x")),W=y(P.getAttribute("y"));C.translate(M,W)}if(P.hasAttribute("transform")){const M=P.getAttribute("transform").split(")");for(let W=M.length-1;W>=0;W--){const re=M[W].trim();if(re==="")continue;const U=re.indexOf("("),ie=re.length;if(U>0&&U<ie){const Z=re.slice(0,U),ve=p(re.slice(U+1));switch(R.identity(),Z){case"translate":if(ve.length>=1){const Q=ve[0];let le=0;ve.length>=2&&(le=ve[1]),R.translate(Q,le)}break;case"rotate":if(ve.length>=1){let Q=0,le=0,de=0;Q=ve[0]*Math.PI/180,ve.length>=3&&(le=ve[1],de=ve[2]),q.makeTranslation(-le,-de),J.makeRotation(Q),B.multiplyMatrices(J,q),q.makeTranslation(le,de),R.multiplyMatrices(q,B)}break;case"scale":if(ve.length>=1){const Q=ve[0];let le=Q;ve.length>=2&&(le=ve[1]),R.scale(Q,le)}break;case"skewX":ve.length===1&&R.set(1,Math.tan(ve[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ve.length===1&&R.set(1,0,0,Math.tan(ve[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ve.length===6&&R.set(ve[0],ve[2],ve[4],ve[1],ve[3],ve[5],0,0,1);break}}C.premultiply(R)}}return C}function D(P,C){function R(U){j.set(U.x,U.y,1).applyMatrix3(C),U.set(j.x,j.y)}function M(U){const ie=U.xRadius,Z=U.yRadius,ve=Math.cos(U.aRotation),Q=Math.sin(U.aRotation),le=new X(ie*ve,ie*Q,0),de=new X(-Z*Q,Z*ve,0),me=le.applyMatrix3(C),H=de.applyMatrix3(C),x=Y.set(me.x,H.x,0,me.y,H.y,0,0,0,1),w=q.copy(x).invert(),ne=J.copy(w).transpose().multiply(w).elements,oe=V(ne[0],ne[1],ne[4]),xe=Math.sqrt(oe.rt1),be=Math.sqrt(oe.rt2);if(U.xRadius=1/xe,U.yRadius=1/be,U.aRotation=Math.atan2(oe.sn,oe.cs),!((U.aEndAngle-U.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Me=q.set(xe,0,0,0,be,0,0,0,1),ge=J.set(oe.cs,oe.sn,0,-oe.sn,oe.cs,0,0,0,1),Ee=Me.multiply(ge).multiply(x),Ue=Re=>{const{x:Se,y:Ce}=new X(Math.cos(Re),Math.sin(Re),0).applyMatrix3(Ee);return Math.atan2(Ce,Se)};U.aStartAngle=Ue(U.aStartAngle),U.aEndAngle=Ue(U.aEndAngle),T(C)&&(U.aClockwise=!U.aClockwise)}}function W(U){const ie=E(C),Z=S(C);U.xRadius*=ie,U.yRadius*=Z;const ve=ie>Number.EPSILON?Math.atan2(C.elements[1],C.elements[0]):Math.atan2(-C.elements[3],C.elements[4]);U.aRotation+=ve,T(C)&&(U.aStartAngle*=-1,U.aEndAngle*=-1,U.aClockwise=!U.aClockwise)}const re=P.subPaths;for(let U=0,ie=re.length;U<ie;U++){const ve=re[U].curves;for(let Q=0;Q<ve.length;Q++){const le=ve[Q];le.isLineCurve?(R(le.v1),R(le.v2)):le.isCubicBezierCurve?(R(le.v0),R(le.v1),R(le.v2),R(le.v3)):le.isQuadraticBezierCurve?(R(le.v0),R(le.v1),R(le.v2)):le.isEllipseCurve&&(K.set(le.aX,le.aY),R(K),le.aX=K.x,le.aY=K.y,N(C)?M(le):W(le))}}}function T(P){const C=P.elements;return C[0]*C[4]-C[1]*C[3]<0}function N(P){const C=P.elements,R=C[0]*C[3]+C[1]*C[4];if(R===0)return!1;const M=E(P),W=S(P);return Math.abs(R/(M*W))>Number.EPSILON}function E(P){const C=P.elements;return Math.sqrt(C[0]*C[0]+C[1]*C[1])}function S(P){const C=P.elements;return Math.sqrt(C[3]*C[3]+C[4]*C[4])}function V(P,C,R){let M,W,re,U,ie;const Z=P+R,ve=P-R,Q=Math.sqrt(ve*ve+4*C*C);return Z>0?(M=.5*(Z+Q),ie=1/M,W=P*ie*R-C*ie*C):Z<0?W=.5*(Z-Q):(M=.5*Q,W=-.5*Q),ve>0?re=ve+Q:re=ve-Q,Math.abs(re)>2*Math.abs(C)?(ie=-2*C/re,U=1/Math.sqrt(1+ie*ie),re=ie*U):Math.abs(C)===0?(re=1,U=0):(ie=-.5*re/C,re=1/Math.sqrt(1+ie*ie),U=ie*re),ve>0&&(ie=re,re=-U,U=ie),{rt1:M,rt2:W,cs:re,sn:U}}const I=[],F={},G=[],Y=new Ve,q=new Ve,J=new Ve,B=new Ve,K=new _e,j=new X,z=new Ve,te=new DOMParser().parseFromString(e,"image/svg+xml");return n(te.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:I,xml:te.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function r(v,p,m,b){const y=v.x,_=p.x,L=m.x,D=b.x,T=v.y,N=p.y,E=m.y,S=b.y,V=(D-L)*(T-E)-(S-E)*(y-L),I=(_-y)*(T-E)-(N-T)*(y-L),F=(S-E)*(_-y)-(D-L)*(N-T),G=V/F,Y=I/F;if(F===0&&V!==0||G<=0||G>=1||Y<0||Y>1)return null;if(V===0&&F===0){for(let q=0;q<2;q++)if(o(q===0?m:b,v,p),i.loc==n.ORIGIN){const J=q===0?m:b;return{x:J.x,y:J.y,t:i.t}}else if(i.loc==n.BETWEEN){const J=+(y+i.t*(_-y)).toPrecision(10),B=+(T+i.t*(N-T)).toPrecision(10);return{x:J,y:B,t:i.t}}return null}else{for(let B=0;B<2;B++)if(o(B===0?m:b,v,p),i.loc==n.ORIGIN){const K=B===0?m:b;return{x:K.x,y:K.y,t:i.t}}const q=+(y+G*(_-y)).toPrecision(10),J=+(T+G*(N-T)).toPrecision(10);return{x:q,y:J,t:G}}}function o(v,p,m){const b=m.x-p.x,y=m.y-p.y,_=v.x-p.x,L=v.y-p.y,D=b*L-_*y;if(v.x===p.x&&v.y===p.y){i.loc=n.ORIGIN,i.t=0;return}if(v.x===m.x&&v.y===m.y){i.loc=n.DESTINATION,i.t=1;return}if(D<-Number.EPSILON){i.loc=n.LEFT;return}if(D>Number.EPSILON){i.loc=n.RIGHT;return}if(b*_<0||y*L<0){i.loc=n.BEHIND;return}if(Math.sqrt(b*b+y*y)<Math.sqrt(_*_+L*L)){i.loc=n.BEYOND;return}let T;b!==0?T=_/b:T=L/y,i.loc=n.BETWEEN,i.t=T}function s(v,p){const m=[],b=[];for(let y=1;y<v.length;y++){const _=v[y-1],L=v[y];for(let D=1;D<p.length;D++){const T=p[D-1],N=p[D],E=r(_,L,T,N);E!==null&&m.find(S=>S.t<=E.t+Number.EPSILON&&S.t>=E.t-Number.EPSILON)===void 0&&(m.push(E),b.push(new _e(E.x,E.y)))}}return b}function c(v,p,m){const b=new _e;p.getCenter(b);const y=[];return m.forEach(_=>{_.boundingBox.containsPoint(b)&&s(v,_.points).forEach(D=>{y.push({identifier:_.identifier,isCW:_.isCW,point:D})})}),y.sort((_,L)=>_.point.x-L.point.x),y}function l(v,p,m,b,y){(y==null||y==="")&&(y="nonzero");const _=new _e;v.boundingBox.getCenter(_);const L=[new _e(m,_.y),new _e(b,_.y)],D=c(L,v.boundingBox,p);D.sort((I,F)=>I.point.x-F.point.x);const T=[],N=[];D.forEach(I=>{I.identifier===v.identifier?T.push(I):N.push(I)});const E=T[0].point.x,S=[];let V=0;for(;V<N.length&&N[V].point.x<E;)S.length>0&&S[S.length-1]===N[V].identifier?S.pop():S.push(N[V].identifier),V++;if(S.push(v.identifier),y==="evenodd"){const I=S.length%2===0,F=S[S.length-2];return{identifier:v.identifier,isHole:I,for:F}}else if(y==="nonzero"){let I=!0,F=null,G=null;for(let Y=0;Y<S.length;Y++){const q=S[Y];I?(G=p[q].isCW,I=!1,F=q):G!==p[q].isCW&&(G=p[q].isCW,I=!0)}return{identifier:v.identifier,isHole:I,for:F}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let h=999999999,u=-999999999,d=e.subPaths.map(v=>{const p=v.getPoints();let m=-999999999,b=999999999,y=-999999999,_=999999999;for(let L=0;L<p.length;L++){const D=p[L];D.y>m&&(m=D.y),D.y<b&&(b=D.y),D.x>y&&(y=D.x),D.x<_&&(_=D.x)}return u<=y&&(u=y+1),h>=_&&(h=_-1),{curves:v.curves,points:p,isCW:Fi.isClockWise(p),identifier:-1,boundingBox:new Bd(new _e(_,b),new _e(y,m))}});d=d.filter(v=>v.points.length>1);for(let v=0;v<d.length;v++)d[v].identifier=v;const f=d.map(v=>l(v,d,h,u,e.userData?e.userData.style.fillRule:void 0)),g=[];return d.forEach(v=>{if(!f[v.identifier].isHole){const m=new ha;m.curves=v.curves,f.filter(y=>y.isHole&&y.for===v.identifier).forEach(y=>{const _=d[y.identifier],L=new Er;L.curves=_.curves,m.holes.push(L)}),g.push(m)}}),g}static getStrokeStyle(e,t,n,i,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:r}}static pointsToStroke(e,t,n,i){const r=[],o=[],s=[];if(Qo.pointsToStrokeWithBuffers(e,t,n,i,r,o,s)===0)return null;const c=new tn;return c.setAttribute("position",new Lt(r,3)),c.setAttribute("normal",new Lt(o,3)),c.setAttribute("uv",new Lt(s,2)),c}static pointsToStrokeWithBuffers(e,t,n,i,r,o,s,c){const l=new _e,h=new _e,u=new _e,d=new _e,f=new _e,g=new _e,v=new _e,p=new _e,m=new _e,b=new _e,y=new _e,_=new _e,L=new _e,D=new _e,T=new _e,N=new _e,E=new _e;n=n!==void 0?n:12,i=i!==void 0?i:.001,c=c!==void 0?c:0,e=ve(e);const S=e.length;if(S<2)return 0;const V=e[0].equals(e[S-1]);let I,F=e[0],G;const Y=t.strokeWidth/2,q=1/(S-1);let J=0,B,K,j,z,te=!1,se=0,P=c*3,C=c*2;R(e[0],e[1],l).multiplyScalar(Y),p.copy(e[0]).sub(l),m.copy(e[0]).add(l),b.copy(p),y.copy(m);for(let Q=1;Q<S;Q++){I=e[Q],Q===S-1?V?G=e[1]:G=void 0:G=e[Q+1];const le=l;if(R(F,I,le),u.copy(le).multiplyScalar(Y),_.copy(I).sub(u),L.copy(I).add(u),B=J+q,K=!1,G!==void 0){R(I,G,h),u.copy(h).multiplyScalar(Y),D.copy(I).sub(u),T.copy(I).add(u),j=!0,u.subVectors(G,F),le.dot(u)<0&&(j=!1),Q===1&&(te=j),u.subVectors(G,I),u.normalize();const de=Math.abs(le.dot(u));if(de>Number.EPSILON){const me=Y/de;u.multiplyScalar(-me),d.subVectors(I,F),f.copy(d).setLength(me).add(u),N.copy(f).negate();const H=f.length(),x=d.length();d.divideScalar(x),g.subVectors(G,I);const w=g.length();switch(g.divideScalar(w),d.dot(N)<x&&g.dot(N)<w&&(K=!0),E.copy(f).add(I),N.add(I),z=!1,K?j?(T.copy(N),L.copy(N)):(D.copy(N),_.copy(N)):re(),t.strokeLineJoin){case"bevel":U(j,K,B);break;case"round":ie(j,K),j?W(I,_,D,B,0):W(I,T,L,B,1);break;case"miter":case"miter-clip":default:const k=Y*t.strokeMiterLimit/H;if(k<1)if(t.strokeLineJoin!=="miter-clip"){U(j,K,B);break}else ie(j,K),j?(g.subVectors(E,_).multiplyScalar(k).add(_),v.subVectors(E,D).multiplyScalar(k).add(D),M(_,B,0),M(g,B,0),M(I,B,.5),M(I,B,.5),M(g,B,0),M(v,B,0),M(I,B,.5),M(v,B,0),M(D,B,0)):(g.subVectors(E,L).multiplyScalar(k).add(L),v.subVectors(E,T).multiplyScalar(k).add(T),M(L,B,1),M(g,B,1),M(I,B,.5),M(I,B,.5),M(g,B,1),M(v,B,1),M(I,B,.5),M(v,B,1),M(T,B,1));else K?(j?(M(m,J,1),M(p,J,0),M(E,B,0),M(m,J,1),M(E,B,0),M(N,B,1)):(M(m,J,1),M(p,J,0),M(E,B,1),M(p,J,0),M(N,B,0),M(E,B,1)),j?D.copy(E):T.copy(E)):j?(M(_,B,0),M(E,B,0),M(I,B,.5),M(I,B,.5),M(E,B,0),M(D,B,0)):(M(L,B,1),M(E,B,1),M(I,B,.5),M(I,B,.5),M(E,B,1),M(T,B,1)),z=!0;break}}else re()}else re();!V&&Q===S-1&&Z(e[0],b,y,j,!0,J),J=B,F=I,p.copy(D),m.copy(T)}if(!V)Z(I,_,L,j,!1,B);else if(K&&r){let Q=E,le=N;te!==j&&(Q=N,le=E),j?(z||te)&&(le.toArray(r,0*3),le.toArray(r,3*3),z&&Q.toArray(r,1*3)):(z||!te)&&(le.toArray(r,1*3),le.toArray(r,3*3),z&&Q.toArray(r,0*3))}return se;function R(Q,le,de){return de.subVectors(le,Q),de.set(-de.y,de.x).normalize()}function M(Q,le,de){r&&(r[P]=Q.x,r[P+1]=Q.y,r[P+2]=0,o&&(o[P]=0,o[P+1]=0,o[P+2]=1),P+=3,s&&(s[C]=le,s[C+1]=de,C+=2)),se+=3}function W(Q,le,de,me,H){l.copy(le).sub(Q).normalize(),h.copy(de).sub(Q).normalize();let x=Math.PI;const w=l.dot(h);Math.abs(w)<1&&(x=Math.abs(Math.acos(w))),x/=n,u.copy(le);for(let k=0,ae=n-1;k<ae;k++)d.copy(u).rotateAround(Q,x),M(u,me,H),M(d,me,H),M(Q,me,.5),u.copy(d);M(d,me,H),M(de,me,H),M(Q,me,.5)}function re(){M(m,J,1),M(p,J,0),M(_,B,0),M(m,J,1),M(_,B,0),M(L,B,1)}function U(Q,le,de){le?Q?(M(m,J,1),M(p,J,0),M(_,B,0),M(m,J,1),M(_,B,0),M(N,B,1),M(_,de,0),M(D,de,0),M(N,de,.5)):(M(m,J,1),M(p,J,0),M(L,B,1),M(p,J,0),M(N,B,0),M(L,B,1),M(L,de,1),M(N,de,0),M(T,de,1)):Q?(M(_,de,0),M(D,de,0),M(I,de,.5)):(M(L,de,1),M(T,de,0),M(I,de,.5))}function ie(Q,le){le&&(Q?(M(m,J,1),M(p,J,0),M(_,B,0),M(m,J,1),M(_,B,0),M(N,B,1),M(_,J,0),M(I,B,.5),M(N,B,1),M(I,B,.5),M(D,J,0),M(N,B,1)):(M(m,J,1),M(p,J,0),M(L,B,1),M(p,J,0),M(N,B,0),M(L,B,1),M(L,J,1),M(N,B,0),M(I,B,.5),M(I,B,.5),M(N,B,0),M(T,J,1)))}function Z(Q,le,de,me,H,x){switch(t.strokeLineCap){case"round":H?W(Q,de,le,x,.5):W(Q,le,de,x,.5);break;case"square":if(H)l.subVectors(le,Q),h.set(l.y,-l.x),u.addVectors(l,h).add(Q),d.subVectors(h,l).add(Q),me?(u.toArray(r,1*3),d.toArray(r,0*3),d.toArray(r,3*3)):(u.toArray(r,1*3),s[3*2+1]===1?d.toArray(r,3*3):u.toArray(r,3*3),d.toArray(r,0*3));else{l.subVectors(de,Q),h.set(l.y,-l.x),u.addVectors(l,h).add(Q),d.subVectors(h,l).add(Q);const w=r.length;me?(u.toArray(r,w-1*3),d.toArray(r,w-2*3),d.toArray(r,w-4*3)):(d.toArray(r,w-2*3),u.toArray(r,w-1*3),d.toArray(r,w-4*3))}break}}function ve(Q){let le=!1;for(let me=1,H=Q.length-1;me<H;me++)if(Q[me].distanceTo(Q[me+1])<i){le=!0;break}if(!le)return Q;const de=[];de.push(Q[0]);for(let me=1,H=Q.length-1;me<H;me++)Q[me].distanceTo(Q[me+1])>=i&&de.push(Q[me]);return de.push(Q[Q.length-1]),de}}}function e_(){var a=Object.create(null);function e(i,r){var o=i.id,s=i.name,c=i.dependencies;c===void 0&&(c=[]);var l=i.init;l===void 0&&(l=function(){});var h=i.getTransferables;if(h===void 0&&(h=null),!a[o])try{c=c.map(function(d){return d&&d.isWorkerModule&&(e(d,function(f){if(f instanceof Error)throw f}),d=a[d.id].value),d}),l=n("<"+s+">.init",l),h&&(h=n("<"+s+">.getTransferables",h));var u=null;typeof l=="function"?u=l.apply(void 0,c):console.error("worker module init function failed to rehydrate"),a[o]={id:o,value:u,getTransferables:h},r(u)}catch(d){d&&d.noLog||console.error(d),r(d)}}function t(i,r){var o,s=i.id,c=i.args;(!a[s]||typeof a[s].value!="function")&&r(new Error("Worker module "+s+": not found or its 'init' did not return a function"));try{var l=(o=a[s]).value.apply(o,c);l&&typeof l.then=="function"?l.then(h,function(u){return r(u instanceof Error?u:new Error(""+u))}):h(l)}catch(u){r(u)}function h(u){try{var d=a[s].getTransferables&&a[s].getTransferables(u);(!d||!Array.isArray(d)||!d.length)&&(d=void 0),r(u,d)}catch(f){console.error(f),r(f)}}}function n(i,r){var o=void 0;self.troikaDefine=function(c){return o=c};var s=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(s)}catch(c){console.error(c)}return URL.revokeObjectURL(s),delete self.troikaDefine,o}self.addEventListener("message",function(i){var r=i.data,o=r.messageId,s=r.action,c=r.data;try{s==="registerModule"&&e(c,function(l){l instanceof Error?postMessage({messageId:o,success:!1,error:l.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof l=="function"}})}),s==="callModule"&&t(c,function(l,h){l instanceof Error?postMessage({messageId:o,success:!1,error:l.message}):postMessage({messageId:o,success:!0,result:l},h||void 0)})}catch(l){postMessage({messageId:o,success:!1,error:l.stack})}})}function t_(a){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,n=a.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var i=Promise.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var zd=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return zd=function(){return a},a},n_=0,i_=0,$s=!1,ua=Object.create(null),da=Object.create(null),wc=Object.create(null);function Nr(a){if((!a||typeof a.init!="function")&&!$s)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,n=a.getTransferables,i=a.workerId;if(!zd())return t_(a);i==null&&(i="#default");var r="workerModule"+ ++n_,o=a.name||r,s=null;e=e&&e.map(function(l){return typeof l=="function"&&!l.workerModuleData&&($s=!0,l=Nr({workerId:i,name:"<"+o+"> function dependency: "+l.name,init:`function(){return (
`+To(l)+`
)}`}),$s=!1),l&&l.workerModuleData&&(l=l.workerModuleData),l});function c(){for(var l=[],h=arguments.length;h--;)l[h]=arguments[h];if(!s){s=au(i,"registerModule",c.workerModuleData);var u=function(){s=null,da[i].delete(u)};(da[i]||(da[i]=new Set)).add(u)}return s.then(function(d){var f=d.isCallable;if(f)return au(i,"callModule",{id:r,args:l});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:r,name:o,dependencies:e,init:To(t),getTransferables:n&&To(n)},c}function r_(a){da[a]&&da[a].forEach(function(e){e()}),ua[a]&&(ua[a].terminate(),delete ua[a])}function To(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function a_(a){var e=ua[a];if(!e){var t=To(e_);e=ua[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,o=wc[r];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete wc[r],o(i)}}return e}function au(a,e,t){return new Promise(function(n,i){var r=++i_;wc[r]=function(o){o.success?n(o.result):i(new Error("Error in worker "+e+" call: "+o.error))},a_(a).postMessage({messageId:r,action:e,data:t})})}function Gd(){var a=function(e){function t(K,j,z,te,se,P,C,R){var M=1-C;R.x=M*M*K+2*M*C*z+C*C*se,R.y=M*M*j+2*M*C*te+C*C*P}function n(K,j,z,te,se,P,C,R,M,W){var re=1-M;W.x=re*re*re*K+3*re*re*M*z+3*re*M*M*se+M*M*M*C,W.y=re*re*re*j+3*re*re*M*te+3*re*M*M*P+M*M*M*R}function i(K,j){for(var z=/([MLQCZ])([^MLQCZ]*)/g,te,se,P,C,R;te=z.exec(K);){var M=te[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(W){return parseFloat(W)});switch(te[1]){case"M":C=se=M[0],R=P=M[1];break;case"L":(M[0]!==C||M[1]!==R)&&j("L",C,R,C=M[0],R=M[1]);break;case"Q":{j("Q",C,R,C=M[2],R=M[3],M[0],M[1]);break}case"C":{j("C",C,R,C=M[4],R=M[5],M[0],M[1],M[2],M[3]);break}case"Z":(C!==se||R!==P)&&j("L",C,R,se,P);break}}}function r(K,j,z){z===void 0&&(z=16);var te={x:0,y:0};i(K,function(se,P,C,R,M,W,re,U,ie){switch(se){case"L":j(P,C,R,M);break;case"Q":{for(var Z=P,ve=C,Q=1;Q<z;Q++)t(P,C,W,re,R,M,Q/(z-1),te),j(Z,ve,te.x,te.y),Z=te.x,ve=te.y;break}case"C":{for(var le=P,de=C,me=1;me<z;me++)n(P,C,W,re,U,ie,R,M,me/(z-1),te),j(le,de,te.x,te.y),le=te.x,de=te.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",s="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",c=new WeakMap,l={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function h(K,j){var z=K.getContext?K.getContext("webgl",l):K,te=c.get(z);if(!te){let le=function(k){var ae=P[k];if(!ae&&(ae=P[k]=z.getExtension(k),!ae))throw new Error(k+" not supported");return ae},de=function(k,ae){var ne=z.createShader(ae);return z.shaderSource(ne,k),z.compileShader(ne),ne},me=function(k,ae,ne,oe){if(!C[k]){var xe={},be={},pe=z.createProgram();z.attachShader(pe,de(ae,z.VERTEX_SHADER)),z.attachShader(pe,de(ne,z.FRAGMENT_SHADER)),z.linkProgram(pe),C[k]={program:pe,transaction:function(ge){z.useProgram(pe),ge({setUniform:function(Ue,Re){for(var Se=[],Ce=arguments.length-2;Ce-- >0;)Se[Ce]=arguments[Ce+2];var we=be[Re]||(be[Re]=z.getUniformLocation(pe,Re));z["uniform"+Ue].apply(z,[we].concat(Se))},setAttribute:function(Ue,Re,Se,Ce,we){var Oe=xe[Ue];Oe||(Oe=xe[Ue]={buf:z.createBuffer(),loc:z.getAttribLocation(pe,Ue),data:null}),z.bindBuffer(z.ARRAY_BUFFER,Oe.buf),z.vertexAttribPointer(Oe.loc,Re,z.FLOAT,!1,0,0),z.enableVertexAttribArray(Oe.loc),se?z.vertexAttribDivisor(Oe.loc,Ce):le("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Oe.loc,Ce),we!==Oe.data&&(z.bufferData(z.ARRAY_BUFFER,we,Se),Oe.data=we)}})}}}C[k].transaction(oe)},H=function(k,ae){M++;try{z.activeTexture(z.TEXTURE0+M);var ne=R[k];ne||(ne=R[k]=z.createTexture(),z.bindTexture(z.TEXTURE_2D,ne),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MIN_FILTER,z.NEAREST),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MAG_FILTER,z.NEAREST)),z.bindTexture(z.TEXTURE_2D,ne),ae(ne,M)}finally{M--}},x=function(k,ae,ne){var oe=z.createFramebuffer();W.push(oe),z.bindFramebuffer(z.FRAMEBUFFER,oe),z.activeTexture(z.TEXTURE0+ae),z.bindTexture(z.TEXTURE_2D,k),z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,k,0);try{ne(oe)}finally{z.deleteFramebuffer(oe),z.bindFramebuffer(z.FRAMEBUFFER,W[--W.length-1]||null)}},w=function(){P={},C={},R={},M=-1,W.length=0};var re=le,U=de,ie=me,Z=H,ve=x,Q=w,se=typeof WebGL2RenderingContext<"u"&&z instanceof WebGL2RenderingContext,P={},C={},R={},M=-1,W=[];z.canvas.addEventListener("webglcontextlost",function(k){w(),k.preventDefault()},!1),c.set(z,te={gl:z,isWebGL2:se,getExtension:le,withProgram:me,withTexture:H,withTextureFramebuffer:x,handleContextLoss:w})}j(te)}function u(K,j,z,te,se,P,C,R){C===void 0&&(C=15),R===void 0&&(R=null),h(K,function(M){var W=M.gl,re=M.withProgram,U=M.withTexture;U("copy",function(ie,Z){W.texImage2D(W.TEXTURE_2D,0,W.RGBA,se,P,0,W.RGBA,W.UNSIGNED_BYTE,j),re("copy",o,s,function(ve){var Q=ve.setUniform,le=ve.setAttribute;le("aUV",2,W.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Q("1i","image",Z),W.bindFramebuffer(W.FRAMEBUFFER,R||null),W.disable(W.BLEND),W.colorMask(C&8,C&4,C&2,C&1),W.viewport(z,te,se,P),W.scissor(z,te,se,P),W.drawArrays(W.TRIANGLES,0,3)})})})}function d(K,j,z){var te=K.width,se=K.height;h(K,function(P){var C=P.gl,R=new Uint8Array(te*se*4);C.readPixels(0,0,te,se,C.RGBA,C.UNSIGNED_BYTE,R),K.width=j,K.height=z,u(C,R,0,0,te,se)})}var f=Object.freeze({__proto__:null,withWebGLContext:h,renderImageData:u,resizeWebGLCanvasWithoutClearing:d});function g(K,j,z,te,se,P){P===void 0&&(P=1);var C=new Uint8Array(K*j),R=te[2]-te[0],M=te[3]-te[1],W=[];r(z,function(le,de,me,H){W.push({x1:le,y1:de,x2:me,y2:H,minX:Math.min(le,me),minY:Math.min(de,H),maxX:Math.max(le,me),maxY:Math.max(de,H)})}),W.sort(function(le,de){return le.maxX-de.maxX});for(var re=0;re<K;re++)for(var U=0;U<j;U++){var ie=ve(te[0]+R*(re+.5)/K,te[1]+M*(U+.5)/j),Z=Math.pow(1-Math.abs(ie)/se,P)/2;ie<0&&(Z=1-Z),Z=Math.max(0,Math.min(255,Math.round(Z*255))),C[U*K+re]=Z}return C;function ve(le,de){for(var me=1/0,H=1/0,x=W.length;x--;){var w=W[x];if(w.maxX+H<=le)break;if(le+H>w.minX&&de-H<w.maxY&&de+H>w.minY){var k=m(le,de,w.x1,w.y1,w.x2,w.y2);k<me&&(me=k,H=Math.sqrt(me))}}return Q(le,de)&&(H=-H),H}function Q(le,de){for(var me=0,H=W.length;H--;){var x=W[H];if(x.maxX<=le)break;var w=x.y1>de!=x.y2>de&&le<(x.x2-x.x1)*(de-x.y1)/(x.y2-x.y1)+x.x1;w&&(me+=x.y1<x.y2?1:-1)}return me!==0}}function v(K,j,z,te,se,P,C,R,M,W){P===void 0&&(P=1),R===void 0&&(R=0),M===void 0&&(M=0),W===void 0&&(W=0),p(K,j,z,te,se,P,C,null,R,M,W)}function p(K,j,z,te,se,P,C,R,M,W,re){P===void 0&&(P=1),M===void 0&&(M=0),W===void 0&&(W=0),re===void 0&&(re=0);for(var U=g(K,j,z,te,se,P),ie=new Uint8Array(U.length*4),Z=0;Z<U.length;Z++)ie[Z*4+re]=U[Z];u(C,ie,M,W,K,j,1<<3-re,R)}function m(K,j,z,te,se,P){var C=se-z,R=P-te,M=C*C+R*R,W=M?Math.max(0,Math.min(1,((K-z)*C+(j-te)*R)/M)):0,re=K-(z+W*C),U=j-(te+W*R);return re*re+U*U}var b=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:p}),y="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",_="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",L="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",D=new Float32Array([0,0,2,0,0,2]),T=null,N=!1,E={},S=new WeakMap;function V(K){if(!N&&!Y(K))throw new Error("WebGL generation not supported")}function I(K,j,z,te,se,P,C){if(P===void 0&&(P=1),C===void 0&&(C=null),!C&&(C=T,!C)){var R=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!R)throw new Error("OffscreenCanvas or DOM canvas not supported");C=T=R.getContext("webgl",{depth:!1})}V(C);var M=new Uint8Array(K*j*4);h(C,function(ie){var Z=ie.gl,ve=ie.withTexture,Q=ie.withTextureFramebuffer;ve("readable",function(le,de){Z.texImage2D(Z.TEXTURE_2D,0,Z.RGBA,K,j,0,Z.RGBA,Z.UNSIGNED_BYTE,null),Q(le,de,function(me){G(K,j,z,te,se,P,Z,me,0,0,0),Z.readPixels(0,0,K,j,Z.RGBA,Z.UNSIGNED_BYTE,M)})})});for(var W=new Uint8Array(K*j),re=0,U=0;re<M.length;re+=4)W[U++]=M[re];return W}function F(K,j,z,te,se,P,C,R,M,W){P===void 0&&(P=1),R===void 0&&(R=0),M===void 0&&(M=0),W===void 0&&(W=0),G(K,j,z,te,se,P,C,null,R,M,W)}function G(K,j,z,te,se,P,C,R,M,W,re){P===void 0&&(P=1),M===void 0&&(M=0),W===void 0&&(W=0),re===void 0&&(re=0),V(C);var U=[];r(z,function(ie,Z,ve,Q){U.push(ie,Z,ve,Q)}),U=new Float32Array(U),h(C,function(ie){var Z=ie.gl,ve=ie.isWebGL2,Q=ie.getExtension,le=ie.withProgram,de=ie.withTexture,me=ie.withTextureFramebuffer,H=ie.handleContextLoss;if(de("rawDistances",function(x,w){(K!==x._lastWidth||j!==x._lastHeight)&&Z.texImage2D(Z.TEXTURE_2D,0,Z.RGBA,x._lastWidth=K,x._lastHeight=j,0,Z.RGBA,Z.UNSIGNED_BYTE,null),le("main",y,_,function(k){var ae=k.setAttribute,ne=k.setUniform,oe=!ve&&Q("ANGLE_instanced_arrays"),xe=!ve&&Q("EXT_blend_minmax");ae("aUV",2,Z.STATIC_DRAW,0,D),ae("aLineSegment",4,Z.DYNAMIC_DRAW,1,U),ne.apply(void 0,["4f","uGlyphBounds"].concat(te)),ne("1f","uMaxDistance",se),ne("1f","uExponent",P),me(x,w,function(be){Z.enable(Z.BLEND),Z.colorMask(!0,!0,!0,!0),Z.viewport(0,0,K,j),Z.scissor(0,0,K,j),Z.blendFunc(Z.ONE,Z.ONE),Z.blendEquationSeparate(Z.FUNC_ADD,ve?Z.MAX:xe.MAX_EXT),Z.clear(Z.COLOR_BUFFER_BIT),ve?Z.drawArraysInstanced(Z.TRIANGLES,0,3,U.length/4):oe.drawArraysInstancedANGLE(Z.TRIANGLES,0,3,U.length/4)})}),le("post",o,L,function(k){k.setAttribute("aUV",2,Z.STATIC_DRAW,0,D),k.setUniform("1i","tex",w),Z.bindFramebuffer(Z.FRAMEBUFFER,R),Z.disable(Z.BLEND),Z.colorMask(re===0,re===1,re===2,re===3),Z.viewport(M,W,K,j),Z.scissor(M,W,K,j),Z.drawArrays(Z.TRIANGLES,0,3)})}),Z.isContextLost())throw H(),new Error("webgl context lost")})}function Y(K){var j=!K||K===T?E:K.canvas||K,z=S.get(j);if(z===void 0){N=!0;var te=null;try{var se=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],P=I(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,K);z=P&&se.length===P.length&&P.every(function(C,R){return C===se[R]}),z||(te="bad trial run results",console.info(se,P))}catch(C){z=!1,te=C.message}te&&console.warn("WebGL SDF generation not supported:",te),N=!1,S.set(j,z)}return z}var q=Object.freeze({__proto__:null,generate:I,generateIntoCanvas:F,generateIntoFramebuffer:G,isSupported:Y});function J(K,j,z,te,se,P){se===void 0&&(se=Math.max(te[2]-te[0],te[3]-te[1])/2),P===void 0&&(P=1);try{return I.apply(q,arguments)}catch(C){return console.info("WebGL SDF generation failed, falling back to JS",C),g.apply(b,arguments)}}function B(K,j,z,te,se,P,C,R,M,W){se===void 0&&(se=Math.max(te[2]-te[0],te[3]-te[1])/2),P===void 0&&(P=1),R===void 0&&(R=0),M===void 0&&(M=0),W===void 0&&(W=0);try{return F.apply(q,arguments)}catch(re){return console.info("WebGL SDF generation failed, falling back to JS",re),v.apply(b,arguments)}}return e.forEachPathCommand=i,e.generate=J,e.generateIntoCanvas=B,e.javascript=b,e.pathToLineSegments=r,e.webgl=q,e.webglUtils=f,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function o_(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(H,x){n[H]=1<<x+1,i[n[H]]=H}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,o=n.L|n.R|n.AL,s=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,c=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,l=n.S|n.WS|n.B|r|n.PDI|c,h=null;function u(){if(!h){h=new Map;var H=function(w){if(t.hasOwnProperty(w)){var k=0;t[w].split(",").forEach(function(ae){var ne=ae.split("+"),oe=ne[0],xe=ne[1];oe=parseInt(oe,36),xe=xe?parseInt(xe,36):0,h.set(k+=oe,n[w]);for(var be=0;be<xe;be++)h.set(++k,n[w])})}};for(var x in t)H(x)}}function d(H){return u(),h.get(H.codePointAt(0))||n.L}function f(H){return i[d(H)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(H,x){var w=36,k=0,ae=new Map,ne=x&&new Map,oe;return H.split(",").forEach(function xe(be){if(be.indexOf("+")!==-1)for(var pe=+be;pe--;)xe(oe);else{oe=be;var Me=be.split(">"),ge=Me[0],Ee=Me[1];ge=String.fromCodePoint(k+=parseInt(ge,w)),Ee=String.fromCodePoint(k+=parseInt(Ee,w)),ae.set(ge,Ee),x&&ne.set(Ee,ge)}}),{map:ae,reverseMap:ne}}var p,m,b;function y(){if(!p){var H=v(g.pairs,!0),x=H.map,w=H.reverseMap;p=x,m=w,b=v(g.canonical,!1).map}}function _(H){return y(),p.get(H)||null}function L(H){return y(),m.get(H)||null}function D(H){return y(),b.get(H)||null}var T=n.L,N=n.R,E=n.EN,S=n.ES,V=n.ET,I=n.AN,F=n.CS,G=n.B,Y=n.S,q=n.ON,J=n.BN,B=n.NSM,K=n.AL,j=n.LRO,z=n.RLO,te=n.LRE,se=n.RLE,P=n.PDF,C=n.LRI,R=n.RLI,M=n.FSI,W=n.PDI;function re(H,x){for(var w=125,k=new Uint32Array(H.length),ae=0;ae<H.length;ae++)k[ae]=d(H[ae]);var ne=new Map;function oe(Ht,ln){var Vt=k[Ht];k[Ht]=ln,ne.set(Vt,ne.get(Vt)-1),Vt&s&&ne.set(s,ne.get(s)-1),ne.set(ln,(ne.get(ln)||0)+1),ln&s&&ne.set(s,(ne.get(s)||0)+1)}for(var xe=new Uint8Array(H.length),be=new Map,pe=[],Me=null,ge=0;ge<H.length;ge++)Me||pe.push(Me={start:ge,end:H.length-1,level:x==="rtl"?1:x==="ltr"?0:vl(ge,!1)}),k[ge]&G&&(Me.end=ge,Me=null);for(var Ee=se|te|z|j|r|W|P|G,Ue=function(Ht){return Ht+(Ht&1?1:2)},Re=function(Ht){return Ht+(Ht&1?2:1)},Se=0;Se<pe.length;Se++){Me=pe[Se];var Ce=[{_level:Me.level,_override:0,_isolate:0}],we=void 0,Oe=0,Fe=0,A=0;ne.clear();for(var ee=Me.start;ee<=Me.end;ee++){var $=k[ee];if(we=Ce[Ce.length-1],ne.set($,(ne.get($)||0)+1),$&s&&ne.set(s,(ne.get(s)||0)+1),$&Ee)if($&(se|te)){xe[ee]=we._level;var ye=($===se?Re:Ue)(we._level);ye<=w&&!Oe&&!Fe?Ce.push({_level:ye,_override:0,_isolate:0}):Oe||Fe++}else if($&(z|j)){xe[ee]=we._level;var Ae=($===z?Re:Ue)(we._level);Ae<=w&&!Oe&&!Fe?Ce.push({_level:Ae,_override:$&z?N:T,_isolate:0}):Oe||Fe++}else if($&r){$&M&&($=vl(ee+1,!0)===1?R:C),xe[ee]=we._level,we._override&&oe(ee,we._override);var Ne=($===R?Re:Ue)(we._level);Ne<=w&&Oe===0&&Fe===0?(A++,Ce.push({_level:Ne,_override:0,_isolate:1,_isolInitIndex:ee})):Oe++}else if($&W){if(Oe>0)Oe--;else if(A>0){for(Fe=0;!Ce[Ce.length-1]._isolate;)Ce.pop();var Pe=Ce[Ce.length-1]._isolInitIndex;Pe!=null&&(be.set(Pe,ee),be.set(ee,Pe)),Ce.pop(),A--}we=Ce[Ce.length-1],xe[ee]=we._level,we._override&&oe(ee,we._override)}else $&P?(Oe===0&&(Fe>0?Fe--:!we._isolate&&Ce.length>1&&(Ce.pop(),we=Ce[Ce.length-1])),xe[ee]=we._level):$&G&&(xe[ee]=Me.level);else xe[ee]=we._level,we._override&&$!==J&&oe(ee,we._override)}for(var Xe=[],qe=null,Le=Me.start;Le<=Me.end;Le++){var je=k[Le];if(!(je&c)){var Ze=xe[Le],st=je&r,tt=je===W;qe&&Ze===qe._level?(qe._end=Le,qe._endsWithIsolInit=st):Xe.push(qe={_start:Le,_end:Le,_level:Ze,_startsWithPDI:tt,_endsWithIsolInit:st})}}for(var mt=[],bt=0;bt<Xe.length;bt++){var Ft=Xe[bt];if(!Ft._startsWithPDI||Ft._startsWithPDI&&!be.has(Ft._start)){for(var jt=[qe=Ft],Sn=void 0;qe&&qe._endsWithIsolInit&&(Sn=be.get(qe._end))!=null;)for(var nn=bt+1;nn<Xe.length;nn++)if(Xe[nn]._start===Sn){jt.push(qe=Xe[nn]);break}for(var At=[],Nn=0;Nn<jt.length;Nn++)for(var La=jt[Nn],O=La._start;O<=La._end;O++)At.push(O);for(var ce=xe[At[0]],fe=Me.level,he=At[0]-1;he>=0;he--)if(!(k[he]&c)){fe=xe[he];break}var ue=At[At.length-1],Ie=xe[ue],ke=Me.level;if(!(k[ue]&r)){for(var Be=ue+1;Be<=Me.end;Be++)if(!(k[Be]&c)){ke=xe[Be];break}}mt.push({_seqIndices:At,_sosType:Math.max(fe,ce)%2?N:T,_eosType:Math.max(ke,Ie)%2?N:T})}}for(var Ge=0;Ge<mt.length;Ge++){var We=mt[Ge],Te=We._seqIndices,Ye=We._sosType,ft=We._eosType,ht=xe[Te[0]]&1?N:T;if(ne.get(B))for(var Mt=0;Mt<Te.length;Mt++){var rn=Te[Mt];if(k[rn]&B){for(var et=Ye,He=Mt-1;He>=0;He--)if(!(k[Te[He]]&c)){et=k[Te[He]];break}oe(rn,et&(r|W)?q:et)}}if(ne.get(E))for(var bn=0;bn<Te.length;bn++){var at=Te[bn];if(k[at]&E)for(var an=bn-1;an>=-1;an--){var kr=an===-1?Ye:k[Te[an]];if(kr&o){kr===K&&oe(at,I);break}}}if(ne.get(K))for(var Fn=0;Fn<Te.length;Fn++){var Xi=Te[Fn];k[Xi]&K&&oe(Xi,N)}if(ne.get(S)||ne.get(F))for(var pt=1;pt<Te.length-1;pt++){var on=Te[pt];if(k[on]&(S|F)){for(var Mn=0,It=0,Mi=pt-1;Mi>=0&&(Mn=k[Te[Mi]],!!(Mn&c));Mi--);for(var Br=pt+1;Br<Te.length&&(It=k[Te[Br]],!!(It&c));Br++);Mn===It&&(k[on]===S?Mn===E:Mn&(E|I))&&oe(on,Mn)}}if(ne.get(E))for(var Xt=0;Xt<Te.length;Xt++){var Df=Te[Xt];if(k[Df]&E){for(var Ia=Xt-1;Ia>=0&&k[Te[Ia]]&(V|c);Ia--)oe(Te[Ia],E);for(Xt++;Xt<Te.length&&k[Te[Xt]]&(V|c|E);Xt++)k[Te[Xt]]!==E&&oe(Te[Xt],E)}}if(ne.get(V)||ne.get(S)||ne.get(F))for(var zr=0;zr<Te.length;zr++){var rl=Te[zr];if(k[rl]&(V|S|F)){oe(rl,q);for(var Ua=zr-1;Ua>=0&&k[Te[Ua]]&c;Ua--)oe(Te[Ua],q);for(var Na=zr+1;Na<Te.length&&k[Te[Na]]&c;Na++)oe(Te[Na],q)}}if(ne.get(E))for(var is=0,al=Ye;is<Te.length;is++){var ol=Te[is],rs=k[ol];rs&E?al===T&&oe(ol,T):rs&o&&(al=rs)}if(ne.get(s)){var Gr=N|E|I,sl=Gr|T,Fa=[];{for(var Yi=[],qi=0;qi<Te.length;qi++)if(k[Te[qi]]&s){var Hr=H[Te[qi]],cl=void 0;if(_(Hr)!==null)if(Yi.length<63)Yi.push({char:Hr,seqIndex:qi});else break;else if((cl=L(Hr))!==null)for(var Vr=Yi.length-1;Vr>=0;Vr--){var as=Yi[Vr].char;if(as===cl||as===L(D(Hr))||_(D(as))===Hr){Fa.push([Yi[Vr].seqIndex,qi]),Yi.length=Vr;break}}}Fa.sort(function(Ht,ln){return Ht[0]-ln[0]})}for(var os=0;os<Fa.length;os++){for(var ll=Fa[os],Oa=ll[0],ss=ll[1],hl=!1,cn=0,cs=Oa+1;cs<ss;cs++){var ul=Te[cs];if(k[ul]&sl){hl=!0;var dl=k[ul]&Gr?N:T;if(dl===ht){cn=dl;break}}}if(hl&&!cn){cn=Ye;for(var ls=Oa-1;ls>=0;ls--){var fl=Te[ls];if(k[fl]&sl){var pl=k[fl]&Gr?N:T;pl!==ht?cn=pl:cn=ht;break}}}if(cn){if(k[Te[Oa]]=k[Te[ss]]=cn,cn!==ht){for(var Wr=Oa+1;Wr<Te.length;Wr++)if(!(k[Te[Wr]]&c)){d(H[Te[Wr]])&B&&(k[Te[Wr]]=cn);break}}if(cn!==ht){for(var jr=ss+1;jr<Te.length;jr++)if(!(k[Te[jr]]&c)){d(H[Te[jr]])&B&&(k[Te[jr]]=cn);break}}}}for(var ai=0;ai<Te.length;ai++)if(k[Te[ai]]&s){for(var ml=ai,hs=ai,us=Ye,Xr=ai-1;Xr>=0;Xr--)if(k[Te[Xr]]&c)ml=Xr;else{us=k[Te[Xr]]&Gr?N:T;break}for(var gl=ft,Yr=ai+1;Yr<Te.length;Yr++)if(k[Te[Yr]]&(s|c))hs=Yr;else{gl=k[Te[Yr]]&Gr?N:T;break}for(var ds=ml;ds<=hs;ds++)k[Te[ds]]=us===gl?us:ht;ai=hs}}}for(var Yt=Me.start;Yt<=Me.end;Yt++){var Lf=xe[Yt],ka=k[Yt];if(Lf&1?ka&(T|E|I)&&xe[Yt]++:ka&N?xe[Yt]++:ka&(I|E)&&(xe[Yt]+=2),ka&c&&(xe[Yt]=Yt===0?Me.level:xe[Yt-1]),Yt===Me.end||d(H[Yt])&(Y|G))for(var Ba=Yt;Ba>=0&&d(H[Ba])&l;Ba--)xe[Ba]=Me.level}}return{levels:xe,paragraphs:pe};function vl(Ht,ln){for(var Vt=Ht;Vt<H.length;Vt++){var oi=k[Vt];if(oi&(N|K))return 1;if(oi&(G|T)||ln&&oi===W)return 0;if(oi&r){var yl=If(Vt);Vt=yl===-1?H.length:yl}}return 0}function If(Ht){for(var ln=1,Vt=Ht+1;Vt<H.length;Vt++){var oi=k[Vt];if(oi&G)break;if(oi&W){if(--ln===0)return Vt}else oi&r&&ln++}return-1}}var U="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ie;function Z(){if(!ie){var H=v(U,!0),x=H.map,w=H.reverseMap;w.forEach(function(k,ae){x.set(ae,k)}),ie=x}}function ve(H){return Z(),ie.get(H)||null}function Q(H,x,w,k){var ae=H.length;w=Math.max(0,w==null?0:+w),k=Math.min(ae-1,k==null?ae-1:+k);for(var ne=new Map,oe=w;oe<=k;oe++)if(x[oe]&1){var xe=ve(H[oe]);xe!==null&&ne.set(oe,xe)}return ne}function le(H,x,w,k){var ae=H.length;w=Math.max(0,w==null?0:+w),k=Math.min(ae-1,k==null?ae-1:+k);var ne=[];return x.paragraphs.forEach(function(oe){var xe=Math.max(w,oe.start),be=Math.min(k,oe.end);if(xe<be){for(var pe=x.levels.slice(xe,be+1),Me=be;Me>=xe&&d(H[Me])&l;Me--)pe[Me]=oe.level;for(var ge=oe.level,Ee=1/0,Ue=0;Ue<pe.length;Ue++){var Re=pe[Ue];Re>ge&&(ge=Re),Re<Ee&&(Ee=Re|1)}for(var Se=ge;Se>=Ee;Se--)for(var Ce=0;Ce<pe.length;Ce++)if(pe[Ce]>=Se){for(var we=Ce;Ce+1<pe.length&&pe[Ce+1]>=Se;)Ce++;Ce>we&&ne.push([we+xe,Ce+xe])}}}),ne}function de(H,x,w,k){var ae=me(H,x,w,k),ne=[].concat(H);return ae.forEach(function(oe,xe){ne[xe]=(x.levels[oe]&1?ve(H[oe]):null)||H[oe]}),ne.join("")}function me(H,x,w,k){for(var ae=le(H,x,w,k),ne=[],oe=0;oe<H.length;oe++)ne[oe]=oe;return ae.forEach(function(xe){for(var be=xe[0],pe=xe[1],Me=ne.slice(be,pe+1),ge=Me.length;ge--;)ne[pe-ge]=Me[ge]}),ne}return e.closingToOpeningBracket=L,e.getBidiCharType=d,e.getBidiCharTypeName=f,e.getCanonicalBracket=D,e.getEmbeddingLevels=re,e.getMirroredCharacter=ve,e.getMirroredCharactersMap=Q,e.getReorderSegments=le,e.getReorderedIndices=me,e.getReorderedString=de,e.openingToClosingBracket=_,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const Hd=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Tc(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=Ke[i];return r?Tc(r):n}return a.replace(e,t)}const Ct=[];for(let a=0;a<256;a++)Ct[a]=(a<16?"0":"")+a.toString(16);function s_(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[a&255]+Ct[a>>8&255]+Ct[a>>16&255]+Ct[a>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toUpperCase()}const Di=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a},c_=Date.now(),ou=new WeakMap,su=new Map;let l_=1e10;function Ec(a,e){const t=f_(e);let n=ou.get(a);if(n||ou.set(a,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(l,h){a.onBeforeCompile.call(this,l,h);const u=this.customProgramCacheKey()+"|"+l.vertexShader+"|"+l.fragmentShader;let d=su[u];if(!d){const f=h_(this,l,e,t);d=su[u]=f}l.vertexShader=d.vertexShader,l.fragmentShader=d.fragmentShader,Di(l.uniforms,this.uniforms),e.timeUniform&&(l.uniforms[e.timeUniform]={get value(){return Date.now()-c_}}),this[i]&&this[i](l)},o=function(){return s(e.chained?a:a.clone())},s=function(l){const h=Object.create(l,c);return Object.defineProperty(h,"baseMaterial",{value:a}),Object.defineProperty(h,"id",{value:l_++}),h.uuid=s_(),h.uniforms=Di({},l.uniforms,e.uniforms),h.defines=Di({},l.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=Di({},l.extensions,e.extensions),h._listeners=void 0,h},c={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(l){this[i]=l}},copy:{writable:!0,configurable:!0,value:function(l){return a.copy.call(this,l),!a.isShaderMaterial&&!a.isDerivedMaterial&&(Di(this.extensions,l.extensions),Di(this.defines,l.defines),Di(this.uniforms,pd.clone(l.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const l=new a.constructor;return s(l).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let l=this._depthMaterial;return l||(l=this._depthMaterial=Ec(a.isDerivedMaterial?a.getDepthMaterial():new wd({depthPacking:rd}),e),l.defines.IS_DEPTH_MATERIAL="",l.uniforms=this.uniforms),l}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let l=this._distanceMaterial;return l||(l=this._distanceMaterial=Ec(a.isDerivedMaterial?a.getDistanceMaterial():new Td,e),l.defines.IS_DISTANCE_MATERIAL="",l.uniforms=this.uniforms),l}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:l,_distanceMaterial:h}=this;l&&l.dispose(),h&&h.dispose(),a.dispose.call(this)}}};return n[t]=o,new o}function h_(a,{vertexShader:e,fragmentShader:t},n,i){let{vertexDefs:r,vertexMainIntro:o,vertexMainOutro:s,vertexTransform:c,fragmentDefs:l,fragmentMainIntro:h,fragmentMainOutro:u,fragmentColorTransform:d,customRewriter:f,timeUniform:g}=n;if(r=r||"",o=o||"",s=s||"",l=l||"",h=h||"",u=u||"",(c||f)&&(e=Tc(e)),(d||f)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Tc(t)),f){let v=f({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(d){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(v.push(p),"")),u=`${d}
${v.join(`
`)}
${u}`}if(g){const v=`
uniform float ${g};
`;r=v+r,l=v+l}return c&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,r=`${r}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${c}
}
`,o=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,p,m,b)=>/\battribute\s+vec[23]\s+$/.test(b.substr(0,m))?p:`troika_${p}_${i}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=cu(e,i,r,o,s),t=cu(t,i,l,h,u),{vertexShader:e,fragmentShader:t}}function cu(a,e,t,n,i){return(n||i||t)&&(a=a.replace(Hd,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),a}function u_(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let d_=0;const lu=new Map;function f_(a){const e=JSON.stringify(a,u_);let t=lu.get(e);return t==null&&lu.set(e,t=++d_),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function p_(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(i){var r=e._bin,o=new Uint8Array(i);if(r.readASCII(o,0,4)=="ttcf"){var s=4;r.readUshort(o,s),s+=2,r.readUshort(o,s),s+=2;var c=r.readUint(o,s);s+=4;for(var l=[],h=0;h<c;h++){var u=r.readUint(o,s);s+=4,l.push(e._readFont(o,u))}return l}return[e._readFont(o,0)]},_readFont:function(i,r){var o=e._bin,s=r;o.readFixed(i,r),r+=4;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2;for(var l=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],h={_data:i,_offset:s},u={},d=0;d<c;d++){var f=o.readASCII(i,r,4);r+=4,o.readUint(i,r),r+=4;var g=o.readUint(i,r);r+=4;var v=o.readUint(i,r);r+=4,u[f]={offset:g,length:v}}for(d=0;d<l.length;d++){var p=l[d];u[p]&&(h[p.trim()]=e[p.trim()].parse(i,u[p].offset,u[p].length,h))}return h},_tabOffset:function(i,r,o){for(var s=e._bin,c=s.readUshort(i,o+4),l=o+12,h=0;h<c;h++){var u=s.readASCII(i,l,4);l+=4,s.readUint(i,l),l+=4;var d=s.readUint(i,l);if(l+=4,s.readUint(i,l),l+=4,u==r)return d}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,o){for(var s=[],c=0;c<o;c++)s.push(e._bin.readUshort(i,r+2*c));return s},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,o){for(var s="",c=0;c<o;c++)s+=String.fromCharCode(i[r+c]);return s},readUnicode:function(i,r,o){for(var s="",c=0;c<o;c++){var l=i[r++]<<8|i[r++];s+=String.fromCharCode(l)}return s},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,o){var s=e._bin._tdec;return s&&r==0&&o==i.length?s.decode(i):e._bin.readASCII(i,r,o)},readBytes:function(i,r,o){for(var s=[],c=0;c<o;c++)s.push(i[r+c]);return s},readASCIIArray:function(i,r,o){for(var s=[],c=0;c<o;c++)s.push(String.fromCharCode(i[r+c]));return s},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,o,s,c){var l=e._bin,h={},u=r;l.readFixed(i,r),r+=4;var d=l.readUshort(i,r);r+=2;var f=l.readUshort(i,r);r+=2;var g=l.readUshort(i,r);return r+=2,h.scriptList=e._lctf.readScriptList(i,u+d),h.featureList=e._lctf.readFeatureList(i,u+f),h.lookupList=e._lctf.readLookupList(i,u+g,c),h},e._lctf.readLookupList=function(i,r,o){var s=e._bin,c=r,l=[],h=s.readUshort(i,r);r+=2;for(var u=0;u<h;u++){var d=s.readUshort(i,r);r+=2;var f=e._lctf.readLookupTable(i,c+d,o);l.push(f)}return l},e._lctf.readLookupTable=function(i,r,o){var s=e._bin,c=r,l={tabs:[]};l.ltype=s.readUshort(i,r),r+=2,l.flag=s.readUshort(i,r),r+=2;var h=s.readUshort(i,r);r+=2;for(var u=l.ltype,d=0;d<h;d++){var f=s.readUshort(i,r);r+=2;var g=o(i,u,c+f,l);l.tabs.push(g)}return l},e._lctf.numOfOnes=function(i){for(var r=0,o=0;o<32;o++)i>>>o&1&&r++;return r},e._lctf.readClassDef=function(i,r){var o=e._bin,s=[],c=o.readUshort(i,r);if(r+=2,c==1){var l=o.readUshort(i,r);r+=2;var h=o.readUshort(i,r);r+=2;for(var u=0;u<h;u++)s.push(l+u),s.push(l+u),s.push(o.readUshort(i,r)),r+=2}if(c==2){var d=o.readUshort(i,r);for(r+=2,u=0;u<d;u++)s.push(o.readUshort(i,r)),r+=2,s.push(o.readUshort(i,r)),r+=2,s.push(o.readUshort(i,r)),r+=2}return s},e._lctf.getInterval=function(i,r){for(var o=0;o<i.length;o+=3){var s=i[o],c=i[o+1];if(i[o+2],s<=r&&r<=c)return o}return-1},e._lctf.readCoverage=function(i,r){var o=e._bin,s={};s.fmt=o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);return r+=2,s.fmt==1&&(s.tab=o.readUshorts(i,r,c)),s.fmt==2&&(s.tab=o.readUshorts(i,r,3*c)),s},e._lctf.coverageIndex=function(i,r){var o=i.tab;if(i.fmt==1)return o.indexOf(r);if(i.fmt==2){var s=e._lctf.getInterval(o,r);if(s!=-1)return o[s+2]+(r-o[s])}return-1},e._lctf.readFeatureList=function(i,r){var o=e._bin,s=r,c=[],l=o.readUshort(i,r);r+=2;for(var h=0;h<l;h++){var u=o.readASCII(i,r,4);r+=4;var d=o.readUshort(i,r);r+=2;var f=e._lctf.readFeatureTable(i,s+d);f.tag=u.trim(),c.push(f)}return c},e._lctf.readFeatureTable=function(i,r){var o=e._bin,s=r,c={},l=o.readUshort(i,r);r+=2,l>0&&(c.featureParams=s+l);var h=o.readUshort(i,r);r+=2,c.tab=[];for(var u=0;u<h;u++)c.tab.push(o.readUshort(i,r+2*u));return c},e._lctf.readScriptList=function(i,r){var o=e._bin,s=r,c={},l=o.readUshort(i,r);r+=2;for(var h=0;h<l;h++){var u=o.readASCII(i,r,4);r+=4;var d=o.readUshort(i,r);r+=2,c[u.trim()]=e._lctf.readScriptTable(i,s+d)}return c},e._lctf.readScriptTable=function(i,r){var o=e._bin,s=r,c={},l=o.readUshort(i,r);r+=2,l>0&&(c.default=e._lctf.readLangSysTable(i,s+l));var h=o.readUshort(i,r);r+=2;for(var u=0;u<h;u++){var d=o.readASCII(i,r,4);r+=4;var f=o.readUshort(i,r);r+=2,c[d.trim()]=e._lctf.readLangSysTable(i,s+f)}return c},e._lctf.readLangSysTable=function(i,r){var o=e._bin,s={};o.readUshort(i,r),r+=2,s.reqFeature=o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);return r+=2,s.features=o.readUshorts(i,r,c),s},e.CFF={},e.CFF.parse=function(i,r,o){var s=e._bin;(i=new Uint8Array(i.buffer,r,o))[r=0],i[++r],i[++r],i[++r],r++;var c=[];r=e.CFF.readIndex(i,r,c);for(var l=[],h=0;h<c.length-1;h++)l.push(s.readASCII(i,r+c[h],c[h+1]-c[h]));r+=c[c.length-1];var u=[];r=e.CFF.readIndex(i,r,u);var d=[];for(h=0;h<u.length-1;h++)d.push(e.CFF.readDict(i,r+u[h],r+u[h+1]));r+=u[u.length-1];var f=d[0],g=[];r=e.CFF.readIndex(i,r,g);var v=[];for(h=0;h<g.length-1;h++)v.push(s.readASCII(i,r+g[h],g[h+1]-g[h]));if(r+=g[g.length-1],e.CFF.readSubrs(i,r,f),f.CharStrings){r=f.CharStrings,g=[],r=e.CFF.readIndex(i,r,g);var p=[];for(h=0;h<g.length-1;h++)p.push(s.readBytes(i,r+g[h],g[h+1]-g[h]));f.CharStrings=p}if(f.ROS){r=f.FDArray;var m=[];for(r=e.CFF.readIndex(i,r,m),f.FDArray=[],h=0;h<m.length-1;h++){var b=e.CFF.readDict(i,r+m[h],r+m[h+1]);e.CFF._readFDict(i,b,v),f.FDArray.push(b)}r+=m[m.length-1],r=f.FDSelect,f.FDSelect=[];var y=i[r];if(r++,y!=3)throw y;var _=s.readUshort(i,r);for(r+=2,h=0;h<_+1;h++)f.FDSelect.push(s.readUshort(i,r),i[r+2]),r+=3}return f.Encoding&&(f.Encoding=e.CFF.readEncoding(i,f.Encoding,f.CharStrings.length)),f.charset&&(f.charset=e.CFF.readCharset(i,f.charset,f.CharStrings.length)),e.CFF._readFDict(i,f,v),f},e.CFF._readFDict=function(i,r,o){var s;for(var c in r.Private&&(s=r.Private[1],r.Private=e.CFF.readDict(i,s,s+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,s+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(c)!=-1&&(r[c]=o[r[c]-426+35])},e.CFF.readSubrs=function(i,r,o){var s=e._bin,c=[];r=e.CFF.readIndex(i,r,c);var l,h=c.length;l=h<1240?107:h<33900?1131:32768,o.Bias=l,o.Subrs=[];for(var u=0;u<c.length-1;u++)o.Subrs.push(s.readBytes(i,r+c[u],c[u+1]-c[u]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var o=0;o<i.charset.length;o++)if(i.charset[o]==r)return o;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,o){e._bin;var s=[".notdef"],c=i[r];if(r++,c!=0)throw"error: unknown encoding format: "+c;var l=i[r];r++;for(var h=0;h<l;h++)s.push(i[r+h]);return s},e.CFF.readCharset=function(i,r,o){var s=e._bin,c=[".notdef"],l=i[r];if(r++,l==0)for(var h=0;h<o;h++){var u=s.readUshort(i,r);r+=2,c.push(u)}else{if(l!=1&&l!=2)throw"error: format: "+l;for(;c.length<o;){u=s.readUshort(i,r),r+=2;var d=0;for(l==1?(d=i[r],r++):(d=s.readUshort(i,r),r+=2),h=0;h<=d;h++)c.push(u),u++}}return c},e.CFF.readIndex=function(i,r,o){var s=e._bin,c=s.readUshort(i,r)+1,l=i[r+=2];if(r++,l==1)for(var h=0;h<c;h++)o.push(i[r+h]);else if(l==2)for(h=0;h<c;h++)o.push(s.readUshort(i,r+2*h));else if(l==3)for(h=0;h<c;h++)o.push(16777215&s.readUint(i,r+3*h-1));else if(c!=1)throw"unsupported offset size: "+l+", count: "+c;return(r+=c*l)-1},e.CFF.getCharString=function(i,r,o){var s=e._bin,c=i[r],l=i[r+1];i[r+2],i[r+3],i[r+4];var h=1,u=null,d=null;c<=20&&(u=c,h=1),c==12&&(u=100*c+l,h=2),21<=c&&c<=27&&(u=c,h=1),c==28&&(d=s.readShort(i,r+1),h=3),29<=c&&c<=31&&(u=c,h=1),32<=c&&c<=246&&(d=c-139,h=1),247<=c&&c<=250&&(d=256*(c-247)+l+108,h=2),251<=c&&c<=254&&(d=256*-(c-251)-l-108,h=2),c==255&&(d=s.readInt(i,r+1)/65535,h=5),o.val=d??"o"+u,o.size=h},e.CFF.readCharString=function(i,r,o){for(var s=r+o,c=e._bin,l=[];r<s;){var h=i[r],u=i[r+1];i[r+2],i[r+3],i[r+4];var d=1,f=null,g=null;h<=20&&(f=h,d=1),h==12&&(f=100*h+u,d=2),h!=19&&h!=20||(f=h,d=2),21<=h&&h<=27&&(f=h,d=1),h==28&&(g=c.readShort(i,r+1),d=3),29<=h&&h<=31&&(f=h,d=1),32<=h&&h<=246&&(g=h-139,d=1),247<=h&&h<=250&&(g=256*(h-247)+u+108,d=2),251<=h&&h<=254&&(g=256*-(h-251)-u-108,d=2),h==255&&(g=c.readInt(i,r+1)/65535,d=5),l.push(g??"o"+f),r+=d}return l},e.CFF.readDict=function(i,r,o){for(var s=e._bin,c={},l=[];r<o;){var h=i[r],u=i[r+1];i[r+2],i[r+3],i[r+4];var d=1,f=null,g=null;if(h==28&&(g=s.readShort(i,r+1),d=3),h==29&&(g=s.readInt(i,r+1),d=5),32<=h&&h<=246&&(g=h-139,d=1),247<=h&&h<=250&&(g=256*(h-247)+u+108,d=2),251<=h&&h<=254&&(g=256*-(h-251)-u-108,d=2),h==255)throw g=s.readInt(i,r+1)/65535,d=5,"unknown number";if(h==30){var v=[];for(d=1;;){var p=i[r+d];d++;var m=p>>4,b=15&p;if(m!=15&&v.push(m),b!=15&&v.push(b),b==15)break}for(var y="",_=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],L=0;L<v.length;L++)y+=_[v[L]];g=parseFloat(y)}h<=21&&(f=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],d=1,h==12&&(f=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][u],d=2)),f!=null?(c[f]=l.length==1?l[0]:l,l=[]):l.push(g),r+=d}return c},e.cmap={},e.cmap.parse=function(i,r,o){i=new Uint8Array(i.buffer,r,o),r=0;var s=e._bin,c={};s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2;var h=[];c.tables=[];for(var u=0;u<l;u++){var d=s.readUshort(i,r);r+=2;var f=s.readUshort(i,r);r+=2;var g=s.readUint(i,r);r+=4;var v="p"+d+"e"+f,p=h.indexOf(g);if(p==-1){var m;p=c.tables.length,h.push(g);var b=s.readUshort(i,g);b==0?m=e.cmap.parse0(i,g):b==4?m=e.cmap.parse4(i,g):b==6?m=e.cmap.parse6(i,g):b==12?m=e.cmap.parse12(i,g):console.debug("unknown format: "+b,d,f,g),c.tables.push(m)}if(c[v]!=null)throw"multiple tables for one platform+encoding";c[v]=p}return c},e.cmap.parse0=function(i,r){var o=e._bin,s={};s.format=o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,s.map=[];for(var l=0;l<c-6;l++)s.map.push(i[r+l]);return s},e.cmap.parse4=function(i,r){var o=e._bin,s=r,c={};c.format=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2;var h=o.readUshort(i,r);r+=2;var u=h/2;c.searchRange=o.readUshort(i,r),r+=2,c.entrySelector=o.readUshort(i,r),r+=2,c.rangeShift=o.readUshort(i,r),r+=2,c.endCount=o.readUshorts(i,r,u),r+=2*u,r+=2,c.startCount=o.readUshorts(i,r,u),r+=2*u,c.idDelta=[];for(var d=0;d<u;d++)c.idDelta.push(o.readShort(i,r)),r+=2;for(c.idRangeOffset=o.readUshorts(i,r,u),r+=2*u,c.glyphIdArray=[];r<s+l;)c.glyphIdArray.push(o.readUshort(i,r)),r+=2;return c},e.cmap.parse6=function(i,r){var o=e._bin,s={};s.format=o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,s.firstCode=o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,s.glyphIdArray=[];for(var l=0;l<c;l++)s.glyphIdArray.push(o.readUshort(i,r)),r+=2;return s},e.cmap.parse12=function(i,r){var o=e._bin,s={};s.format=o.readUshort(i,r),r+=2,r+=2,o.readUint(i,r),r+=4,o.readUint(i,r),r+=4;var c=o.readUint(i,r);r+=4,s.groups=[];for(var l=0;l<c;l++){var h=r+12*l,u=o.readUint(i,h+0),d=o.readUint(i,h+4),f=o.readUint(i,h+8);s.groups.push([u,d,f])}return s},e.glyf={},e.glyf.parse=function(i,r,o,s){for(var c=[],l=0;l<s.maxp.numGlyphs;l++)c.push(null);return c},e.glyf._parseGlyf=function(i,r){var o=e._bin,s=i._data,c=e._tabOffset(s,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var l={};if(l.noc=o.readShort(s,c),c+=2,l.xMin=o.readShort(s,c),c+=2,l.yMin=o.readShort(s,c),c+=2,l.xMax=o.readShort(s,c),c+=2,l.yMax=o.readShort(s,c),c+=2,l.xMin>=l.xMax||l.yMin>=l.yMax)return null;if(l.noc>0){l.endPts=[];for(var h=0;h<l.noc;h++)l.endPts.push(o.readUshort(s,c)),c+=2;var u=o.readUshort(s,c);if(c+=2,s.length-c<u)return null;l.instructions=o.readBytes(s,c,u),c+=u;var d=l.endPts[l.noc-1]+1;for(l.flags=[],h=0;h<d;h++){var f=s[c];if(c++,l.flags.push(f),(8&f)!=0){var g=s[c];c++;for(var v=0;v<g;v++)l.flags.push(f),h++}}for(l.xs=[],h=0;h<d;h++){var p=(2&l.flags[h])!=0,m=(16&l.flags[h])!=0;p?(l.xs.push(m?s[c]:-s[c]),c++):m?l.xs.push(0):(l.xs.push(o.readShort(s,c)),c+=2)}for(l.ys=[],h=0;h<d;h++)p=(4&l.flags[h])!=0,m=(32&l.flags[h])!=0,p?(l.ys.push(m?s[c]:-s[c]),c++):m?l.ys.push(0):(l.ys.push(o.readShort(s,c)),c+=2);var b=0,y=0;for(h=0;h<d;h++)b+=l.xs[h],y+=l.ys[h],l.xs[h]=b,l.ys[h]=y}else{var _;l.parts=[];do{_=o.readUshort(s,c),c+=2;var L={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(l.parts.push(L),L.glyphIndex=o.readUshort(s,c),c+=2,1&_){var D=o.readShort(s,c);c+=2;var T=o.readShort(s,c);c+=2}else D=o.readInt8(s,c),c++,T=o.readInt8(s,c),c++;2&_?(L.m.tx=D,L.m.ty=T):(L.p1=D,L.p2=T),8&_?(L.m.a=L.m.d=o.readF2dot14(s,c),c+=2):64&_?(L.m.a=o.readF2dot14(s,c),c+=2,L.m.d=o.readF2dot14(s,c),c+=2):128&_&&(L.m.a=o.readF2dot14(s,c),c+=2,L.m.b=o.readF2dot14(s,c),c+=2,L.m.c=o.readF2dot14(s,c),c+=2,L.m.d=o.readF2dot14(s,c),c+=2)}while(32&_);if(256&_){var N=o.readUshort(s,c);for(c+=2,l.instr=[],h=0;h<N;h++)l.instr.push(s[c]),c++}}return l},e.GDEF={},e.GDEF.parse=function(i,r,o,s){var c=r;r+=4;var l=e._bin.readUshort(i,r);return{glyphClassDef:l===0?null:e._lctf.readClassDef(i,c+l)}},e.GPOS={},e.GPOS.parse=function(i,r,o,s){return e._lctf.parse(i,r,o,s,e.GPOS.subt)},e.GPOS.subt=function(i,r,o,s){var c=e._bin,l=o,h={};if(h.fmt=c.readUshort(i,o),o+=2,r==1||r==2||r==3||r==7||r==8&&h.fmt<=2){var u=c.readUshort(i,o);o+=2,h.coverage=e._lctf.readCoverage(i,u+l)}if(r==1&&h.fmt==1){var d=c.readUshort(i,o);o+=2,d!=0&&(h.pos=e.GPOS.readValueRecord(i,o,d))}else if(r==2&&h.fmt>=1&&h.fmt<=2){d=c.readUshort(i,o),o+=2;var f=c.readUshort(i,o);o+=2;var g=e._lctf.numOfOnes(d),v=e._lctf.numOfOnes(f);if(h.fmt==1){h.pairsets=[];var p=c.readUshort(i,o);o+=2;for(var m=0;m<p;m++){var b=l+c.readUshort(i,o);o+=2;var y=c.readUshort(i,b);b+=2;for(var _=[],L=0;L<y;L++){var D=c.readUshort(i,b);b+=2,d!=0&&(I=e.GPOS.readValueRecord(i,b,d),b+=2*g),f!=0&&(F=e.GPOS.readValueRecord(i,b,f),b+=2*v),_.push({gid2:D,val1:I,val2:F})}h.pairsets.push(_)}}if(h.fmt==2){var T=c.readUshort(i,o);o+=2;var N=c.readUshort(i,o);o+=2;var E=c.readUshort(i,o);o+=2;var S=c.readUshort(i,o);for(o+=2,h.classDef1=e._lctf.readClassDef(i,l+T),h.classDef2=e._lctf.readClassDef(i,l+N),h.matrix=[],m=0;m<E;m++){var V=[];for(L=0;L<S;L++){var I=null,F=null;d!=0&&(I=e.GPOS.readValueRecord(i,o,d),o+=2*g),f!=0&&(F=e.GPOS.readValueRecord(i,o,f),o+=2*v),V.push({val1:I,val2:F})}h.matrix.push(V)}}}else if(r==4&&h.fmt==1)h.markCoverage=e._lctf.readCoverage(i,c.readUshort(i,o)+l),h.baseCoverage=e._lctf.readCoverage(i,c.readUshort(i,o+2)+l),h.markClassCount=c.readUshort(i,o+4),h.markArray=e.GPOS.readMarkArray(i,c.readUshort(i,o+6)+l),h.baseArray=e.GPOS.readBaseArray(i,c.readUshort(i,o+8)+l,h.markClassCount);else if(r==6&&h.fmt==1)h.mark1Coverage=e._lctf.readCoverage(i,c.readUshort(i,o)+l),h.mark2Coverage=e._lctf.readCoverage(i,c.readUshort(i,o+2)+l),h.markClassCount=c.readUshort(i,o+4),h.mark1Array=e.GPOS.readMarkArray(i,c.readUshort(i,o+6)+l),h.mark2Array=e.GPOS.readBaseArray(i,c.readUshort(i,o+8)+l,h.markClassCount);else{if(r==9&&h.fmt==1){var G=c.readUshort(i,o);o+=2;var Y=c.readUint(i,o);if(o+=4,s.ltype==9)s.ltype=G;else if(s.ltype!=G)throw"invalid extension substitution";return e.GPOS.subt(i,s.ltype,l+Y)}console.debug("unsupported GPOS table LookupType",r,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(i,r,o){var s=e._bin,c=[];return c.push(1&o?s.readShort(i,r):0),r+=1&o?2:0,c.push(2&o?s.readShort(i,r):0),r+=2&o?2:0,c.push(4&o?s.readShort(i,r):0),r+=4&o?2:0,c.push(8&o?s.readShort(i,r):0),r+=8&o?2:0,c},e.GPOS.readBaseArray=function(i,r,o){var s=e._bin,c=[],l=r,h=s.readUshort(i,r);r+=2;for(var u=0;u<h;u++){for(var d=[],f=0;f<o;f++)d.push(e.GPOS.readAnchorRecord(i,l+s.readUshort(i,r))),r+=2;c.push(d)}return c},e.GPOS.readMarkArray=function(i,r){var o=e._bin,s=[],c=r,l=o.readUshort(i,r);r+=2;for(var h=0;h<l;h++){var u=e.GPOS.readAnchorRecord(i,o.readUshort(i,r+2)+c);u.markClass=o.readUshort(i,r),s.push(u),r+=4}return s},e.GPOS.readAnchorRecord=function(i,r){var o=e._bin,s={};return s.fmt=o.readUshort(i,r),s.x=o.readShort(i,r+2),s.y=o.readShort(i,r+4),s},e.GSUB={},e.GSUB.parse=function(i,r,o,s){return e._lctf.parse(i,r,o,s,e.GSUB.subt)},e.GSUB.subt=function(i,r,o,s){var c=e._bin,l=o,h={};if(h.fmt=c.readUshort(i,o),o+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&h.fmt<=2||r==6&&h.fmt<=2){var u=c.readUshort(i,o);o+=2,h.coverage=e._lctf.readCoverage(i,l+u)}if(r==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=c.readShort(i,o),o+=2;else if(h.fmt==2){var d=c.readUshort(i,o);o+=2,h.newg=c.readUshorts(i,o,d),o+=2*h.newg.length}}else if(r==2&&h.fmt==1){d=c.readUshort(i,o),o+=2,h.seqs=[];for(var f=0;f<d;f++){var g=c.readUshort(i,o)+l;o+=2;var v=c.readUshort(i,g);h.seqs.push(c.readUshorts(i,g+2,v))}}else if(r==4)for(h.vals=[],d=c.readUshort(i,o),o+=2,f=0;f<d;f++){var p=c.readUshort(i,o);o+=2,h.vals.push(e.GSUB.readLigatureSet(i,l+p))}else if(r==5&&h.fmt==2){if(h.fmt==2){var m=c.readUshort(i,o);o+=2,h.cDef=e._lctf.readClassDef(i,l+m),h.scset=[];var b=c.readUshort(i,o);for(o+=2,f=0;f<b;f++){var y=c.readUshort(i,o);o+=2,h.scset.push(y==0?null:e.GSUB.readSubClassSet(i,l+y))}}}else if(r==6&&h.fmt==3){if(h.fmt==3){for(f=0;f<3;f++){d=c.readUshort(i,o),o+=2;for(var _=[],L=0;L<d;L++)_.push(e._lctf.readCoverage(i,l+c.readUshort(i,o+2*L)));o+=2*d,f==0&&(h.backCvg=_),f==1&&(h.inptCvg=_),f==2&&(h.ahedCvg=_)}d=c.readUshort(i,o),o+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(i,o,d)}}else{if(r==7&&h.fmt==1){var D=c.readUshort(i,o);o+=2;var T=c.readUint(i,o);if(o+=4,s.ltype==9)s.ltype=D;else if(s.ltype!=D)throw"invalid extension substitution";return e.GSUB.subt(i,s.ltype,l+T)}console.debug("unsupported GSUB table LookupType",r,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(i,r){var o=e._bin.readUshort,s=r,c=[],l=o(i,r);r+=2;for(var h=0;h<l;h++){var u=o(i,r);r+=2,c.push(e.GSUB.readSubClassRule(i,s+u))}return c},e.GSUB.readSubClassRule=function(i,r){var o=e._bin.readUshort,s={},c=o(i,r),l=o(i,r+=2);r+=2,s.input=[];for(var h=0;h<c-1;h++)s.input.push(o(i,r)),r+=2;return s.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,l),s},e.GSUB.readSubstLookupRecords=function(i,r,o){for(var s=e._bin.readUshort,c=[],l=0;l<o;l++)c.push(s(i,r),s(i,r+2)),r+=4;return c},e.GSUB.readChainSubClassSet=function(i,r){var o=e._bin,s=r,c=[],l=o.readUshort(i,r);r+=2;for(var h=0;h<l;h++){var u=o.readUshort(i,r);r+=2,c.push(e.GSUB.readChainSubClassRule(i,s+u))}return c},e.GSUB.readChainSubClassRule=function(i,r){for(var o=e._bin,s={},c=["backtrack","input","lookahead"],l=0;l<c.length;l++){var h=o.readUshort(i,r);r+=2,l==1&&h--,s[c[l]]=o.readUshorts(i,r,h),r+=2*s[c[l]].length}return h=o.readUshort(i,r),r+=2,s.subst=o.readUshorts(i,r,2*h),r+=2*s.subst.length,s},e.GSUB.readLigatureSet=function(i,r){var o=e._bin,s=r,c=[],l=o.readUshort(i,r);r+=2;for(var h=0;h<l;h++){var u=o.readUshort(i,r);r+=2,c.push(e.GSUB.readLigature(i,s+u))}return c},e.GSUB.readLigature=function(i,r){var o=e._bin,s={chain:[]};s.nglyph=o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2;for(var l=0;l<c-1;l++)s.chain.push(o.readUshort(i,r)),r+=2;return s},e.head={},e.head.parse=function(i,r,o){var s=e._bin,c={};return s.readFixed(i,r),r+=4,c.fontRevision=s.readFixed(i,r),r+=4,s.readUint(i,r),r+=4,s.readUint(i,r),r+=4,c.flags=s.readUshort(i,r),r+=2,c.unitsPerEm=s.readUshort(i,r),r+=2,c.created=s.readUint64(i,r),r+=8,c.modified=s.readUint64(i,r),r+=8,c.xMin=s.readShort(i,r),r+=2,c.yMin=s.readShort(i,r),r+=2,c.xMax=s.readShort(i,r),r+=2,c.yMax=s.readShort(i,r),r+=2,c.macStyle=s.readUshort(i,r),r+=2,c.lowestRecPPEM=s.readUshort(i,r),r+=2,c.fontDirectionHint=s.readShort(i,r),r+=2,c.indexToLocFormat=s.readShort(i,r),r+=2,c.glyphDataFormat=s.readShort(i,r),r+=2,c},e.hhea={},e.hhea.parse=function(i,r,o){var s=e._bin,c={};return s.readFixed(i,r),r+=4,c.ascender=s.readShort(i,r),r+=2,c.descender=s.readShort(i,r),r+=2,c.lineGap=s.readShort(i,r),r+=2,c.advanceWidthMax=s.readUshort(i,r),r+=2,c.minLeftSideBearing=s.readShort(i,r),r+=2,c.minRightSideBearing=s.readShort(i,r),r+=2,c.xMaxExtent=s.readShort(i,r),r+=2,c.caretSlopeRise=s.readShort(i,r),r+=2,c.caretSlopeRun=s.readShort(i,r),r+=2,c.caretOffset=s.readShort(i,r),r+=2,r+=8,c.metricDataFormat=s.readShort(i,r),r+=2,c.numberOfHMetrics=s.readUshort(i,r),r+=2,c},e.hmtx={},e.hmtx.parse=function(i,r,o,s){for(var c=e._bin,l={aWidth:[],lsBearing:[]},h=0,u=0,d=0;d<s.maxp.numGlyphs;d++)d<s.hhea.numberOfHMetrics&&(h=c.readUshort(i,r),r+=2,u=c.readShort(i,r),r+=2),l.aWidth.push(h),l.lsBearing.push(u);return l},e.kern={},e.kern.parse=function(i,r,o,s){var c=e._bin,l=c.readUshort(i,r);if(r+=2,l==1)return e.kern.parseV1(i,r-2,o,s);var h=c.readUshort(i,r);r+=2;for(var u={glyph1:[],rval:[]},d=0;d<h;d++){r+=2,o=c.readUshort(i,r),r+=2;var f=c.readUshort(i,r);r+=2;var g=f>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(i,r,u)}return u},e.kern.parseV1=function(i,r,o,s){var c=e._bin;c.readFixed(i,r),r+=4;var l=c.readUint(i,r);r+=4;for(var h={glyph1:[],rval:[]},u=0;u<l;u++){c.readUint(i,r),r+=4;var d=c.readUshort(i,r);r+=2,c.readUshort(i,r),r+=2;var f=d>>>8;if((f&=15)!=0)throw"unknown kern table format: "+f;r=e.kern.readFormat0(i,r,h)}return h},e.kern.readFormat0=function(i,r,o){var s=e._bin,c=-1,l=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2;for(var h=0;h<l;h++){var u=s.readUshort(i,r);r+=2;var d=s.readUshort(i,r);r+=2;var f=s.readShort(i,r);r+=2,u!=c&&(o.glyph1.push(u),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(d),g.vals.push(f),c=u}return r},e.loca={},e.loca.parse=function(i,r,o,s){var c=e._bin,l=[],h=s.head.indexToLocFormat,u=s.maxp.numGlyphs+1;if(h==0)for(var d=0;d<u;d++)l.push(c.readUshort(i,r+(d<<1))<<1);if(h==1)for(d=0;d<u;d++)l.push(c.readUint(i,r+(d<<2)));return l},e.maxp={},e.maxp.parse=function(i,r,o){var s=e._bin,c={},l=s.readUint(i,r);return r+=4,c.numGlyphs=s.readUshort(i,r),r+=2,l==65536&&(c.maxPoints=s.readUshort(i,r),r+=2,c.maxContours=s.readUshort(i,r),r+=2,c.maxCompositePoints=s.readUshort(i,r),r+=2,c.maxCompositeContours=s.readUshort(i,r),r+=2,c.maxZones=s.readUshort(i,r),r+=2,c.maxTwilightPoints=s.readUshort(i,r),r+=2,c.maxStorage=s.readUshort(i,r),r+=2,c.maxFunctionDefs=s.readUshort(i,r),r+=2,c.maxInstructionDefs=s.readUshort(i,r),r+=2,c.maxStackElements=s.readUshort(i,r),r+=2,c.maxSizeOfInstructions=s.readUshort(i,r),r+=2,c.maxComponentElements=s.readUshort(i,r),r+=2,c.maxComponentDepth=s.readUshort(i,r),r+=2),c},e.name={},e.name.parse=function(i,r,o){var s=e._bin,c={};s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2,s.readUshort(i,r);for(var h,u=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=r+=2,f=0;f<l;f++){var g=s.readUshort(i,r);r+=2;var v=s.readUshort(i,r);r+=2;var p=s.readUshort(i,r);r+=2;var m=s.readUshort(i,r);r+=2;var b=s.readUshort(i,r);r+=2;var y=s.readUshort(i,r);r+=2;var _,L=u[m],D=d+12*l+y;if(g==0)_=s.readUnicode(i,D,b/2);else if(g==3&&v==0)_=s.readUnicode(i,D,b/2);else if(v==0)_=s.readASCII(i,D,b);else if(v==1)_=s.readUnicode(i,D,b/2);else if(v==3)_=s.readUnicode(i,D,b/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;_=s.readASCII(i,D,b),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var T="p"+g+","+p.toString(16);c[T]==null&&(c[T]={}),c[T][L!==void 0?L:m]=_,c[T]._lang=p}for(var N in c)if(c[N].postScriptName!=null&&c[N]._lang==1033)return c[N];for(var N in c)if(c[N].postScriptName!=null&&c[N]._lang==0)return c[N];for(var N in c)if(c[N].postScriptName!=null&&c[N]._lang==3084)return c[N];for(var N in c)if(c[N].postScriptName!=null)return c[N];for(var N in c){h=N;break}return console.debug("returning name table with languageID "+c[h]._lang),c[h]},e["OS/2"]={},e["OS/2"].parse=function(i,r,o){var s=e._bin.readUshort(i,r);r+=2;var c={};if(s==0)e["OS/2"].version0(i,r,c);else if(s==1)e["OS/2"].version1(i,r,c);else if(s==2||s==3||s==4)e["OS/2"].version2(i,r,c);else{if(s!=5)throw"unknown OS/2 table version: "+s;e["OS/2"].version5(i,r,c)}return c},e["OS/2"].version0=function(i,r,o){var s=e._bin;return o.xAvgCharWidth=s.readShort(i,r),r+=2,o.usWeightClass=s.readUshort(i,r),r+=2,o.usWidthClass=s.readUshort(i,r),r+=2,o.fsType=s.readUshort(i,r),r+=2,o.ySubscriptXSize=s.readShort(i,r),r+=2,o.ySubscriptYSize=s.readShort(i,r),r+=2,o.ySubscriptXOffset=s.readShort(i,r),r+=2,o.ySubscriptYOffset=s.readShort(i,r),r+=2,o.ySuperscriptXSize=s.readShort(i,r),r+=2,o.ySuperscriptYSize=s.readShort(i,r),r+=2,o.ySuperscriptXOffset=s.readShort(i,r),r+=2,o.ySuperscriptYOffset=s.readShort(i,r),r+=2,o.yStrikeoutSize=s.readShort(i,r),r+=2,o.yStrikeoutPosition=s.readShort(i,r),r+=2,o.sFamilyClass=s.readShort(i,r),r+=2,o.panose=s.readBytes(i,r,10),r+=10,o.ulUnicodeRange1=s.readUint(i,r),r+=4,o.ulUnicodeRange2=s.readUint(i,r),r+=4,o.ulUnicodeRange3=s.readUint(i,r),r+=4,o.ulUnicodeRange4=s.readUint(i,r),r+=4,o.achVendID=[s.readInt8(i,r),s.readInt8(i,r+1),s.readInt8(i,r+2),s.readInt8(i,r+3)],r+=4,o.fsSelection=s.readUshort(i,r),r+=2,o.usFirstCharIndex=s.readUshort(i,r),r+=2,o.usLastCharIndex=s.readUshort(i,r),r+=2,o.sTypoAscender=s.readShort(i,r),r+=2,o.sTypoDescender=s.readShort(i,r),r+=2,o.sTypoLineGap=s.readShort(i,r),r+=2,o.usWinAscent=s.readUshort(i,r),r+=2,o.usWinDescent=s.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,o){var s=e._bin;return r=e["OS/2"].version0(i,r,o),o.ulCodePageRange1=s.readUint(i,r),r+=4,o.ulCodePageRange2=s.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,o){var s=e._bin;return r=e["OS/2"].version1(i,r,o),o.sxHeight=s.readShort(i,r),r+=2,o.sCapHeight=s.readShort(i,r),r+=2,o.usDefault=s.readUshort(i,r),r+=2,o.usBreak=s.readUshort(i,r),r+=2,o.usMaxContext=s.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,o){var s=e._bin;return r=e["OS/2"].version2(i,r,o),o.usLowerOpticalPointSize=s.readUshort(i,r),r+=2,o.usUpperOpticalPointSize=s.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,o){var s=e._bin,c={};return c.version=s.readFixed(i,r),r+=4,c.italicAngle=s.readFixed(i,r),r+=4,c.underlinePosition=s.readShort(i,r),r+=2,c.underlineThickness=s.readShort(i,r),r+=2,c},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var o=i.cmap,s=-1;if(o.p0e4!=null?s=o.p0e4:o.p3e1!=null?s=o.p3e1:o.p1e0!=null?s=o.p1e0:o.p0e3!=null&&(s=o.p0e3),s==-1)throw"no familiar platform and encoding!";var c=o.tables[s];if(c.format==0)return r>=c.map.length?0:c.map[r];if(c.format==4){for(var l=-1,h=0;h<c.endCount.length;h++)if(r<=c.endCount[h]){l=h;break}return l==-1||c.startCount[l]>r?0:65535&(c.idRangeOffset[l]!=0?c.glyphIdArray[r-c.startCount[l]+(c.idRangeOffset[l]>>1)-(c.idRangeOffset.length-l)]:r+c.idDelta[l])}if(c.format==12){if(r>c.groups[c.groups.length-1][1])return 0;for(h=0;h<c.groups.length;h++){var u=c.groups[h];if(u[0]<=r&&r<=u[1])return u[2]+(r-u[0])}return 0}throw"unknown cmap table format "+c.format},e.U.glyphToPath=function(i,r){var o={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var s=i.SVG.entries[r];return s==null?o:(typeof s=="string"&&(s=e.SVG.toPath(s),i.SVG.entries[r]=s),s)}if(i.CFF){var c={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},l=i.CFF,h=i.CFF.Private;if(l.ROS){for(var u=0;l.FDSelect[u+2]<=r;)u+=2;h=l.FDArray[l.FDSelect[u+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],c,l,h,o)}else i.glyf&&e.U._drawGlyf(r,i,o);return o},e.U._drawGlyf=function(i,r,o){var s=r.glyf[i];s==null&&(s=r.glyf[i]=e.glyf._parseGlyf(r,i)),s!=null&&(s.noc>-1?e.U._simpleGlyph(s,o):e.U._compoGlyph(s,r,o))},e.U._simpleGlyph=function(i,r){for(var o=0;o<i.noc;o++){for(var s=o==0?0:i.endPts[o-1]+1,c=i.endPts[o],l=s;l<=c;l++){var h=l==s?c:l-1,u=l==c?s:l+1,d=1&i.flags[l],f=1&i.flags[h],g=1&i.flags[u],v=i.xs[l],p=i.ys[l];if(l==s)if(d){if(!f){e.U.P.moveTo(r,v,p);continue}e.U.P.moveTo(r,i.xs[h],i.ys[h])}else f?e.U.P.moveTo(r,i.xs[h],i.ys[h]):e.U.P.moveTo(r,(i.xs[h]+v)/2,(i.ys[h]+p)/2);d?f&&e.U.P.lineTo(r,v,p):g?e.U.P.qcurveTo(r,v,p,i.xs[u],i.ys[u]):e.U.P.qcurveTo(r,v,p,(v+i.xs[u])/2,(p+i.ys[u])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,o){for(var s=0;s<i.parts.length;s++){var c={cmds:[],crds:[]},l=i.parts[s];e.U._drawGlyf(l.glyphIndex,r,c);for(var h=l.m,u=0;u<c.crds.length;u+=2){var d=c.crds[u],f=c.crds[u+1];o.crds.push(d*h.a+f*h.b+h.tx),o.crds.push(d*h.c+f*h.d+h.ty)}for(u=0;u<c.cmds.length;u++)o.cmds.push(c.cmds[u])}},e.U._getGlyphClass=function(i,r){var o=e._lctf.getInterval(r,i);return o==-1?0:r[o+2]},e.U._applySubs=function(i,r,o,s){for(var c=i.length-r-1,l=0;l<o.tabs.length;l++)if(o.tabs[l]!=null){var h,u=o.tabs[l];if(!u.coverage||(h=e._lctf.coverageIndex(u.coverage,i[r]))!=-1){if(o.ltype==1)i[r],u.fmt==1?i[r]=i[r]+u.delta:i[r]=u.newg[h];else if(o.ltype==4)for(var d=u.vals[h],f=0;f<d.length;f++){var g=d[f],v=g.chain.length;if(!(v>c)){for(var p=!0,m=0,b=0;b<v;b++){for(;i[r+m+(1+b)]==-1;)m++;g.chain[b]!=i[r+m+(1+b)]&&(p=!1)}if(p){for(i[r]=g.nglyph,b=0;b<v+m;b++)i[r+b+1]=-1;break}}}else if(o.ltype==5&&u.fmt==2)for(var y=e._lctf.getInterval(u.cDef,i[r]),_=u.cDef[y+2],L=u.scset[_],D=0;D<L.length;D++){var T=L[D],N=T.input;if(!(N.length>c)){for(p=!0,b=0;b<N.length;b++){var E=e._lctf.getInterval(u.cDef,i[r+1+b]);if(y==-1&&u.cDef[E+2]!=N[b]){p=!1;break}}if(p){var S=T.substLookupRecords;for(f=0;f<S.length;f+=2)S[f],S[f+1]}}}else if(o.ltype==6&&u.fmt==3){if(!e.U._glsCovered(i,u.backCvg,r-u.backCvg.length)||!e.U._glsCovered(i,u.inptCvg,r)||!e.U._glsCovered(i,u.ahedCvg,r+u.inptCvg.length))continue;var V=u.lookupRec;for(D=0;D<V.length;D+=2){y=V[D];var I=s[V[D+1]];e.U._applySubs(i,r+y,I,s)}}}}},e.U._glsCovered=function(i,r,o){for(var s=0;s<r.length;s++)if(e._lctf.coverageIndex(r[s],i[o+s])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,o){for(var s={cmds:[],crds:[]},c=0,l=0;l<r.length;l++){var h=r[l];if(h!=-1){for(var u=l<r.length-1&&r[l+1]!=-1?r[l+1]:0,d=e.U.glyphToPath(i,h),f=0;f<d.crds.length;f+=2)s.crds.push(d.crds[f]+c),s.crds.push(d.crds[f+1]);for(o&&s.cmds.push(o),f=0;f<d.cmds.length;f++)s.cmds.push(d.cmds[f]);o&&s.cmds.push("X"),c+=i.hmtx.aWidth[h],l<r.length-1&&(c+=e.U.getPairAdjustment(i,h,u))}}return s},e.U.P={},e.U.P.moveTo=function(i,r,o){i.cmds.push("M"),i.crds.push(r,o)},e.U.P.lineTo=function(i,r,o){i.cmds.push("L"),i.crds.push(r,o)},e.U.P.curveTo=function(i,r,o,s,c,l,h){i.cmds.push("C"),i.crds.push(r,o,s,c,l,h)},e.U.P.qcurveTo=function(i,r,o,s,c){i.cmds.push("Q"),i.crds.push(r,o,s,c)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,o,s,c){for(var l=r.stack,h=r.nStems,u=r.haveWidth,d=r.width,f=r.open,g=0,v=r.x,p=r.y,m=0,b=0,y=0,_=0,L=0,D=0,T=0,N=0,E=0,S=0,V={val:0,size:0};g<i.length;){e.CFF.getCharString(i,g,V);var I=V.val;if(g+=V.size,I=="o1"||I=="o18")l.length%2!=0&&!u&&(d=l.shift()+s.nominalWidthX),h+=l.length>>1,l.length=0,u=!0;else if(I=="o3"||I=="o23")l.length%2!=0&&!u&&(d=l.shift()+s.nominalWidthX),h+=l.length>>1,l.length=0,u=!0;else if(I=="o4")l.length>1&&!u&&(d=l.shift()+s.nominalWidthX,u=!0),f&&e.U.P.closePath(c),p+=l.pop(),e.U.P.moveTo(c,v,p),f=!0;else if(I=="o5")for(;l.length>0;)v+=l.shift(),p+=l.shift(),e.U.P.lineTo(c,v,p);else if(I=="o6"||I=="o7")for(var F=l.length,G=I=="o6",Y=0;Y<F;Y++){var q=l.shift();G?v+=q:p+=q,G=!G,e.U.P.lineTo(c,v,p)}else if(I=="o8"||I=="o24"){F=l.length;for(var J=0;J+6<=F;)m=v+l.shift(),b=p+l.shift(),y=m+l.shift(),_=b+l.shift(),v=y+l.shift(),p=_+l.shift(),e.U.P.curveTo(c,m,b,y,_,v,p),J+=6;I=="o24"&&(v+=l.shift(),p+=l.shift(),e.U.P.lineTo(c,v,p))}else{if(I=="o11")break;if(I=="o1234"||I=="o1235"||I=="o1236"||I=="o1237")I=="o1234"&&(b=p,y=(m=v+l.shift())+l.shift(),S=_=b+l.shift(),D=_,N=p,v=(T=(L=(E=y+l.shift())+l.shift())+l.shift())+l.shift(),e.U.P.curveTo(c,m,b,y,_,E,S),e.U.P.curveTo(c,L,D,T,N,v,p)),I=="o1235"&&(m=v+l.shift(),b=p+l.shift(),y=m+l.shift(),_=b+l.shift(),E=y+l.shift(),S=_+l.shift(),L=E+l.shift(),D=S+l.shift(),T=L+l.shift(),N=D+l.shift(),v=T+l.shift(),p=N+l.shift(),l.shift(),e.U.P.curveTo(c,m,b,y,_,E,S),e.U.P.curveTo(c,L,D,T,N,v,p)),I=="o1236"&&(m=v+l.shift(),b=p+l.shift(),y=m+l.shift(),S=_=b+l.shift(),D=_,T=(L=(E=y+l.shift())+l.shift())+l.shift(),N=D+l.shift(),v=T+l.shift(),e.U.P.curveTo(c,m,b,y,_,E,S),e.U.P.curveTo(c,L,D,T,N,v,p)),I=="o1237"&&(m=v+l.shift(),b=p+l.shift(),y=m+l.shift(),_=b+l.shift(),E=y+l.shift(),S=_+l.shift(),L=E+l.shift(),D=S+l.shift(),T=L+l.shift(),N=D+l.shift(),Math.abs(T-v)>Math.abs(N-p)?v=T+l.shift():p=N+l.shift(),e.U.P.curveTo(c,m,b,y,_,E,S),e.U.P.curveTo(c,L,D,T,N,v,p));else if(I=="o14"){if(l.length>0&&!u&&(d=l.shift()+o.nominalWidthX,u=!0),l.length==4){var B=l.shift(),K=l.shift(),j=l.shift(),z=l.shift(),te=e.CFF.glyphBySE(o,j),se=e.CFF.glyphBySE(o,z);e.U._drawCFF(o.CharStrings[te],r,o,s,c),r.x=B,r.y=K,e.U._drawCFF(o.CharStrings[se],r,o,s,c)}f&&(e.U.P.closePath(c),f=!1)}else if(I=="o19"||I=="o20")l.length%2!=0&&!u&&(d=l.shift()+s.nominalWidthX),h+=l.length>>1,l.length=0,u=!0,g+=h+7>>3;else if(I=="o21")l.length>2&&!u&&(d=l.shift()+s.nominalWidthX,u=!0),p+=l.pop(),v+=l.pop(),f&&e.U.P.closePath(c),e.U.P.moveTo(c,v,p),f=!0;else if(I=="o22")l.length>1&&!u&&(d=l.shift()+s.nominalWidthX,u=!0),v+=l.pop(),f&&e.U.P.closePath(c),e.U.P.moveTo(c,v,p),f=!0;else if(I=="o25"){for(;l.length>6;)v+=l.shift(),p+=l.shift(),e.U.P.lineTo(c,v,p);m=v+l.shift(),b=p+l.shift(),y=m+l.shift(),_=b+l.shift(),v=y+l.shift(),p=_+l.shift(),e.U.P.curveTo(c,m,b,y,_,v,p)}else if(I=="o26")for(l.length%2&&(v+=l.shift());l.length>0;)m=v,b=p+l.shift(),v=y=m+l.shift(),p=(_=b+l.shift())+l.shift(),e.U.P.curveTo(c,m,b,y,_,v,p);else if(I=="o27")for(l.length%2&&(p+=l.shift());l.length>0;)b=p,y=(m=v+l.shift())+l.shift(),_=b+l.shift(),v=y+l.shift(),p=_,e.U.P.curveTo(c,m,b,y,_,v,p);else if(I=="o10"||I=="o29"){var P=I=="o10"?s:o;if(l.length==0)console.debug("error: empty stack");else{var C=l.pop(),R=P.Subrs[C+P.Bias];r.x=v,r.y=p,r.nStems=h,r.haveWidth=u,r.width=d,r.open=f,e.U._drawCFF(R,r,o,s,c),v=r.x,p=r.y,h=r.nStems,u=r.haveWidth,d=r.width,f=r.open}}else if(I=="o30"||I=="o31"){var M=l.length,W=(J=0,I=="o31");for(J+=M-(F=-3&M);J<F;)W?(b=p,y=(m=v+l.shift())+l.shift(),p=(_=b+l.shift())+l.shift(),F-J==5?(v=y+l.shift(),J++):v=y,W=!1):(m=v,b=p+l.shift(),y=m+l.shift(),_=b+l.shift(),v=y+l.shift(),F-J==5?(p=_+l.shift(),J++):p=_,W=!0),e.U.P.curveTo(c,m,b,y,_,v,p),J+=4}else{if((I+"").charAt(0)=="o")throw console.debug("Unknown operation: "+I,i),I;l.push(I)}}}r.x=v,r.y=p,r.nStems=h,r.haveWidth=u,r.width=d,r.open=f};var t=e,n={Typr:t};return a.Typr=t,a.default=n,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function m_(){return function(a){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(I,F){for(var G=new t(31),Y=0;Y<31;++Y)G[Y]=F+=1<<I[Y-1];var q=new n(G[30]);for(Y=1;Y<30;++Y)for(var J=G[Y];J<G[Y+1];++J)q[J]=J-G[Y]<<5|Y;return[G,q]},c=s(i,2),l=c[0],h=c[1];l[28]=258,h[258]=28;for(var u=s(r,0)[0],d=new t(32768),f=0;f<32768;++f){var g=(43690&f)>>>1|(21845&f)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,d[f]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(I,F,G){for(var Y=I.length,q=0,J=new t(F);q<Y;++q)++J[I[q]-1];var B,K=new t(F);for(q=0;q<F;++q)K[q]=K[q-1]+J[q-1]<<1;{B=new t(1<<F);var j=15-F;for(q=0;q<Y;++q)if(I[q])for(var z=q<<4|I[q],te=F-I[q],se=K[I[q]-1]++<<te,P=se|(1<<te)-1;se<=P;++se)B[d[se]>>>j]=z}return B},p=new e(288);for(f=0;f<144;++f)p[f]=8;for(f=144;f<256;++f)p[f]=9;for(f=256;f<280;++f)p[f]=7;for(f=280;f<288;++f)p[f]=8;var m=new e(32);for(f=0;f<32;++f)m[f]=5;var b=v(p,9),y=v(m,5),_=function(I){for(var F=I[0],G=1;G<I.length;++G)I[G]>F&&(F=I[G]);return F},L=function(I,F,G){var Y=F/8|0;return(I[Y]|I[Y+1]<<8)>>(7&F)&G},D=function(I,F){var G=F/8|0;return(I[G]|I[G+1]<<8|I[G+2]<<16)>>(7&F)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N=function(I,F,G){var Y=new Error(F||T[I]);if(Y.code=I,Error.captureStackTrace&&Error.captureStackTrace(Y,N),!G)throw Y;return Y},E=function(I,F,G){var Y=I.length;if(!Y||G&&!G.l&&Y<5)return F||new e(0);var q=!F||G,J=!G||G.i;G||(G={}),F||(F=new e(3*Y));var B,K=function(we){var Oe=F.length;if(we>Oe){var Fe=new e(Math.max(2*Oe,we));Fe.set(F),F=Fe}},j=G.f||0,z=G.p||0,te=G.b||0,se=G.l,P=G.d,C=G.m,R=G.n,M=8*Y;do{if(!se){G.f=j=L(I,z,1);var W=L(I,z+1,3);if(z+=3,!W){var re=I[(w=((B=z)/8|0)+(7&B&&1)+4)-4]|I[w-3]<<8,U=w+re;if(U>Y){J&&N(0);break}q&&K(te+re),F.set(I.subarray(w,U),te),G.b=te+=re,G.p=z=8*U;continue}if(W==1)se=b,P=y,C=9,R=5;else if(W==2){var ie=L(I,z,31)+257,Z=L(I,z+10,15)+4,ve=ie+L(I,z+5,31)+1;z+=14;for(var Q=new e(ve),le=new e(19),de=0;de<Z;++de)le[o[de]]=L(I,z+3*de,7);z+=3*Z;var me=_(le),H=(1<<me)-1,x=v(le,me);for(de=0;de<ve;){var w,k=x[L(I,z,H)];if(z+=15&k,(w=k>>>4)<16)Q[de++]=w;else{var ae=0,ne=0;for(w==16?(ne=3+L(I,z,3),z+=2,ae=Q[de-1]):w==17?(ne=3+L(I,z,7),z+=3):w==18&&(ne=11+L(I,z,127),z+=7);ne--;)Q[de++]=ae}}var oe=Q.subarray(0,ie),xe=Q.subarray(ie);C=_(oe),R=_(xe),se=v(oe,C),P=v(xe,R)}else N(1);if(z>M){J&&N(0);break}}q&&K(te+131072);for(var be=(1<<C)-1,pe=(1<<R)-1,Me=z;;Me=z){var ge=(ae=se[D(I,z)&be])>>>4;if((z+=15&ae)>M){J&&N(0);break}if(ae||N(2),ge<256)F[te++]=ge;else{if(ge==256){Me=z,se=null;break}var Ee=ge-254;if(ge>264){var Ue=i[de=ge-257];Ee=L(I,z,(1<<Ue)-1)+l[de],z+=Ue}var Re=P[D(I,z)&pe],Se=Re>>>4;if(Re||N(3),z+=15&Re,xe=u[Se],Se>3&&(Ue=r[Se],xe+=D(I,z)&(1<<Ue)-1,z+=Ue),z>M){J&&N(0);break}q&&K(te+131072);for(var Ce=te+Ee;te<Ce;te+=4)F[te]=F[te-xe],F[te+1]=F[te+1-xe],F[te+2]=F[te+2-xe],F[te+3]=F[te+3-xe];te=Ce}}G.l=se,G.p=Me,G.b=te,se&&(j=1,G.m=C,G.d=P,G.n=R)}while(!j);return te==F.length?F:function(we,Oe,Fe){(Fe==null||Fe>we.length)&&(Fe=we.length);var A=new(we instanceof t?t:we instanceof n?n:e)(Fe-Oe);return A.set(we.subarray(Oe,Fe)),A}(F,0,te)},S=new e(0),V=typeof TextDecoder<"u"&&new TextDecoder;try{V.decode(S,{stream:!0})}catch{}return a.convert_streams=function(I){var F=new DataView(I),G=0;function Y(){var ie=F.getUint16(G);return G+=2,ie}function q(){var ie=F.getUint32(G);return G+=4,ie}function J(ie){re.setUint16(U,ie),U+=2}function B(ie){re.setUint32(U,ie),U+=4}for(var K={signature:q(),flavor:q(),length:q(),numTables:Y(),reserved:Y(),totalSfntSize:q(),majorVersion:Y(),minorVersion:Y(),metaOffset:q(),metaLength:q(),metaOrigLength:q(),privOffset:q(),privLength:q()},j=0;Math.pow(2,j)<=K.numTables;)j++;j--;for(var z=16*Math.pow(2,j),te=16*K.numTables-z,se=12,P=[],C=0;C<K.numTables;C++)P.push({tag:q(),offset:q(),compLength:q(),origLength:q(),origChecksum:q()}),se+=16;var R,M=new Uint8Array(12+16*P.length+P.reduce(function(ie,Z){return ie+Z.origLength+4},0)),W=M.buffer,re=new DataView(W),U=0;return B(K.flavor),J(K.numTables),J(z),J(j),J(te),P.forEach(function(ie){B(ie.tag),B(ie.origChecksum),B(se),B(ie.origLength),ie.outOffset=se,(se+=ie.origLength)%4!=0&&(se+=4-se%4)}),P.forEach(function(ie){var Z,ve=I.slice(ie.offset,ie.offset+ie.compLength);if(ie.compLength!=ie.origLength){var Q=new Uint8Array(ie.origLength);Z=new Uint8Array(ve,2),E(Z,Q)}else Q=new Uint8Array(ve);M.set(Q,ie.outOffset);var le=0;(se=ie.outOffset+ie.origLength)%4!=0&&(le=4-se%4),M.set(new Uint8Array(le).buffer,ie.outOffset+ie.origLength),R=se+le}),W.slice(0,R)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function g_(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,o=4,s=8,c=16,l=32;let h;function u(T){if(!h){const N={R:r,L:i,D:o,C:c,U:l,T:s};h=new Map;for(let E in n){let S=0;n[E].split(",").forEach(V=>{let[I,F]=V.split("+");I=parseInt(I,36),F=F?parseInt(F,36):0,h.set(S+=I,N[E]);for(let G=F;G--;)h.set(++S,N[E])})}}return h.get(T)||l}const d=1,f=2,g=3,v=4,p=[null,"isol","init","fina","medi"];function m(T){const N=new Uint8Array(T.length);let E=l,S=d,V=-1;for(let I=0;I<T.length;I++){const F=T.codePointAt(I);let G=u(F)|0,Y=d;G&s||(E&(i|o|c)?G&(r|o|c)?(Y=g,(S===d||S===g)&&N[V]++):G&(i|l)&&(S===f||S===v)&&N[V]--:E&(r|l)&&(S===f||S===v)&&N[V]--,S=N[I]=Y,E=G,V=I,F>65535&&I++)}return N}function b(T,N){const E=[];for(let V=0;V<N.length;V++){const I=N.codePointAt(V);I>65535&&V++,E.push(a.U.codeToGlyph(T,I))}const S=T.GSUB;if(S){const{lookupList:V,featureList:I}=S;let F;const G=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,Y=[];I.forEach(q=>{if(G.test(q.tag))for(let J=0;J<q.tab.length;J++){if(Y[q.tab[J]])continue;Y[q.tab[J]]=!0;const B=V[q.tab[J]],K=/^(isol|init|fina|medi)$/.test(q.tag);K&&!F&&(F=m(N));for(let j=0;j<E.length;j++)(!F||!K||p[F[j]]===q.tag)&&a.U._applySubs(E,j,B,V)}})}return E}function y(T,N){const E=new Int16Array(N.length*3);let S=0;for(;S<N.length;S++){const G=N[S];if(G===-1)continue;E[S*3+2]=T.hmtx.aWidth[G];const Y=T.GPOS;if(Y){const q=Y.lookupList;for(let J=0;J<q.length;J++){const B=q[J];for(let K=0;K<B.tabs.length;K++){const j=B.tabs[K];if(B.ltype===1){if(a._lctf.coverageIndex(j.coverage,G)!==-1&&j.pos){F(j.pos,S);break}}else if(B.ltype===2){let z=null,te=V();if(te!==-1){const se=a._lctf.coverageIndex(j.coverage,N[te]);if(se!==-1){if(j.fmt===1){const P=j.pairsets[se];for(let C=0;C<P.length;C++)P[C].gid2===G&&(z=P[C])}else if(j.fmt===2){const P=a.U._getGlyphClass(N[te],j.classDef1),C=a.U._getGlyphClass(G,j.classDef2);z=j.matrix[P][C]}if(z){z.val1&&F(z.val1,te),z.val2&&F(z.val2,S);break}}}}else if(B.ltype===4){const z=a._lctf.coverageIndex(j.markCoverage,G);if(z!==-1){const te=V(I),se=te===-1?-1:a._lctf.coverageIndex(j.baseCoverage,N[te]);if(se!==-1){const P=j.markArray[z],C=j.baseArray[se][P.markClass];E[S*3]=C.x-P.x+E[te*3]-E[te*3+2],E[S*3+1]=C.y-P.y+E[te*3+1];break}}}else if(B.ltype===6){const z=a._lctf.coverageIndex(j.mark1Coverage,G);if(z!==-1){const te=V();if(te!==-1){const se=N[te];if(_(T,se)===3){const P=a._lctf.coverageIndex(j.mark2Coverage,se);if(P!==-1){const C=j.mark1Array[z],R=j.mark2Array[P][C.markClass];E[S*3]=R.x-C.x+E[te*3]-E[te*3+2],E[S*3+1]=R.y-C.y+E[te*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const q=V();if(q!==-1){const J=T.kern.glyph1.indexOf(N[q]);if(J!==-1){const B=T.kern.rval[J].glyph2.indexOf(G);B!==-1&&(E[q*3+2]+=T.kern.rval[J].vals[B])}}}}return E;function V(G){for(let Y=S-1;Y>=0;Y--)if(N[Y]!==-1&&(!G||G(N[Y])))return Y;return-1}function I(G){return _(T,G)===1}function F(G,Y){for(let q=0;q<3;q++)E[Y*3+q]+=G[q]||0}}function _(T,N){const E=T.GDEF&&T.GDEF.glyphClassDef;return E?a.U._getGlyphClass(N,E):0}function L(...T){for(let N=0;N<T.length;N++)if(typeof T[N]=="number")return T[N]}function D(T){const N=Object.create(null),E=T["OS/2"],S=T.hhea,V=T.head.unitsPerEm,I=L(E&&E.sTypoAscender,S&&S.ascender,V),F={unitsPerEm:V,ascender:I,descender:L(E&&E.sTypoDescender,S&&S.descender,0),capHeight:L(E&&E.sCapHeight,I),xHeight:L(E&&E.sxHeight,I),lineGap:L(E&&E.sTypoLineGap,S&&S.lineGap),supportsCodePoint(G){return a.U.codeToGlyph(T,G)>0},forEachGlyph(G,Y,q,J){let B=0;const K=1/F.unitsPerEm*Y,j=b(T,G);let z=0;const te=y(T,j);return j.forEach((se,P)=>{if(se!==-1){let C=N[se];if(!C){const{cmds:R,crds:M}=a.U.glyphToPath(T,se);let W="",re=0;for(let Q=0,le=R.length;Q<le;Q++){const de=t[R[Q]];W+=R[Q];for(let me=1;me<=de;me++)W+=(me>1?",":"")+M[re++]}let U,ie,Z,ve;if(M.length){U=ie=1/0,Z=ve=-1/0;for(let Q=0,le=M.length;Q<le;Q+=2){let de=M[Q],me=M[Q+1];de<U&&(U=de),me<ie&&(ie=me),de>Z&&(Z=de),me>ve&&(ve=me)}}else U=Z=ie=ve=0;C=N[se]={index:se,advanceWidth:T.hmtx.aWidth[se],xMin:U,yMin:ie,xMax:Z,yMax:ve,path:W}}J.call(null,C,B+te[P*3]*K,te[P*3+1]*K,z),B+=te[P*3+2]*K,q&&(B+=q*Y)}z+=G.codePointAt(z)>65535?2:1}),B}};return F}return function(N){const E=new Uint8Array(N,0,4),S=a._bin.readASCII(E,0,4);if(S==="wOFF")N=e(N);else if(S==="wOF2")throw new Error("woff2 fonts not supported");return D(a.parse(N)[0])}}const v_=Nr({name:"Typr Font Parser",dependencies:[p_,m_,g_],init(a,e,t){const n=a(),i=e();return t(n,i)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function y_(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(y){var _=y>>5;this.buckets.set(_,(this.buckets.get(_)||0)|1<<(31&y))},e.prototype.has=function(y){var _=this.buckets.get(y>>5);return _!==void 0&&(_&1<<(31&y))!=0},e.prototype.serialize=function(){var y=[];return this.buckets.forEach(function(_,L){y.push((+L).toString(36)+":"+_.toString(36))}),y.join(",")},e.prototype.deserialize=function(y){var _=this;this.buckets.clear(),y.split(",").forEach(function(L){var D=L.split(":");_.buckets.set(parseInt(D[0],36),parseInt(D[1],36))})};var t=Math.pow(2,8),n=t-1,i=~n;function r(y){var _=function(D){return D&i}(y).toString(16),L=function(D){return(D&i)+t-1}(y).toString(16);return"codepoint-index/plane"+(y>>16)+"/"+_+"-"+L+".json"}function o(y,_){var L=y&n,D=_.codePointAt(L/6|0);return((D=(D||48)-48)&1<<L%6)!=0}function s(y,_){var L;(L=y,L.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(D){return D.split("-").map(function(T){return parseInt(T.trim(),16)})})).forEach(function(D){var T=D[0],N=D[1];N===void 0&&(N=T),_(T,N)})}function c(y,_){s(y,function(L,D){for(var T=L;T<=D;T++)_(T)})}var l={},h={},u=new WeakMap,d="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function f(y){var _=u.get(y);return _||(_=new e,c(y.ranges,function(L){return _.add(L)}),u.set(y,_)),_}var g,v=new Map;function p(y,_,L){return y[_]?_:y[L]?L:function(D){for(var T in D)return T}(y)}function m(y,_){var L=_;if(!y.includes(L)){L=1/0;for(var D=0;D<y.length;D++)Math.abs(y[D]-_)<Math.abs(L-_)&&(L=y[D])}return L}function b(y){return g||(g=new Set,c("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(_){g.add(_)})),g.has(y)}return a.CodePointSet=e,a.clearCache=function(){l={},h={}},a.getFontsForString=function(y,_){_===void 0&&(_={});var L,D=_.lang;D===void 0&&(D=new RegExp("\\p{Script=Hangul}","u").test(L=y)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(L)?"ja":"en");var T=_.category;T===void 0&&(T="sans-serif");var N=_.style;N===void 0&&(N="normal");var E=_.weight;E===void 0&&(E=400);var S=(_.dataUrl||d).replace(/\/$/g,""),V=new Map,I=new Uint8Array(y.length),F={},G={},Y=new Array(y.length),q=new Map,J=!1;function B(z){var te=v.get(z);return te||(te=fetch(S+"/"+z).then(function(se){if(!se.ok)throw new Error(se.statusText);return se.json().then(function(P){if(!Array.isArray(P)||P[0]!==1)throw new Error("Incorrect schema version; need 1, got "+P[0]);return P[1]})}).catch(function(se){if(S!==d)return J||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+S+'", trying default CDN. '+se.message),J=!0),S=d,v.delete(z),B(z);throw se}),v.set(z,te)),te}for(var K=function(z){var te=y.codePointAt(z),se=r(te);Y[z]=se,l[se]||q.has(se)||q.set(se,B(se).then(function(P){l[se]=P})),te>65535&&(z++,j=z)},j=0;j<y.length;j++)K(j);return Promise.all(q.values()).then(function(){q.clear();for(var z=function(se){var P=y.codePointAt(se),C=null,R=l[Y[se]],M=void 0;for(var W in R){var re=G[W];if(re===void 0&&(re=G[W]=new RegExp(W).test(D||"en")),re){for(var U in M=W,R[W])if(o(P,R[W][U])){C=U;break}break}}if(!C){e:for(var ie in R)if(ie!==M){for(var Z in R[ie])if(o(P,R[ie][Z])){C=Z;break e}}}C||(console.debug("No font coverage for U+"+P.toString(16)),C="latin"),Y[se]=C,h[C]||q.has(C)||q.set(C,B("font-meta/"+C+".json").then(function(ve){h[C]=ve})),P>65535&&(se++,te=se)},te=0;te<y.length;te++)z(te);return Promise.all(q.values())}).then(function(){for(var z,te=null,se=0;se<y.length;se++){var P=y.codePointAt(se);if(te&&(b(P)||f(te).has(P)))I[se]=I[se-1];else{te=h[Y[se]];var C=F[te.id];if(!C){var R=te.typeforms,M=p(R,T,"sans-serif"),W=p(R[M],N,"normal"),re=m((z=R[M])===null||z===void 0?void 0:z[W],E);C=F[te.id]=S+"/font-files/"+te.id+"/"+M+"."+W+"."+re+".woff"}var U=V.get(C);U==null&&(U=V.size,V.set(C,U)),I[se]=U}P>65535&&(se++,I[se]=I[se-1])}return{fontUrls:Array.from(V.keys()),chars:I}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function x_(a,e){const t=Object.create(null),n=Object.create(null);function i(o,s){const c=l=>{console.error(`Failure loading font ${o}`,l)};try{const l=new XMLHttpRequest;l.open("get",o,!0),l.responseType="arraybuffer",l.onload=function(){if(l.status>=400)c(new Error(l.statusText));else if(l.status>0)try{const h=a(l.response);h.src=o,s(h)}catch(h){c(h)}},l.onerror=c,l.send()}catch(l){c(l)}}function r(o,s){let c=t[o];c?s(c):n[o]?n[o].push(s):(n[o]=[s],i(o,l=>{l.src=o,t[o]=l,n[o].forEach(h=>h(l)),delete n[o]}))}return function(o,s,{lang:c,fonts:l=[],style:h="normal",weight:u="normal",unicodeFontsURL:d}={}){const f=new Uint8Array(o.length),g=[];o.length||b();const v=new Map,p=[];if(h!=="italic"&&(h="normal"),typeof u!="number"&&(u=u==="bold"?700:400),l&&!Array.isArray(l)&&(l=[l]),l=l.slice().filter(_=>!_.lang||_.lang.test(c)).reverse(),l.length){let T=0;(function N(E=0){for(let S=E,V=o.length;S<V;S++){const I=o.codePointAt(S);if(T===1&&g[f[S-1]].supportsCodePoint(I)||/\s/.test(o[S]))f[S]=f[S-1],T===2&&(p[p.length-1][1]=S);else for(let F=f[S],G=l.length;F<=G;F++)if(F===G){const Y=T===2?p[p.length-1]:p[p.length]=[S,S];Y[1]=S,T=2}else{f[S]=F;const{src:Y,unicodeRange:q}=l[F];if(!q||y(I,q)){const J=t[Y];if(!J){r(Y,()=>{N(S)});return}if(J.supportsCodePoint(I)){let B=v.get(J);typeof B!="number"&&(B=g.length,g.push(J),v.set(J,B)),f[S]=B,T=1;break}}}I>65535&&S+1<V&&(f[S+1]=f[S],S++,T===2&&(p[p.length-1][1]=S))}m()})()}else p.push([0,o.length-1]),m();function m(){if(p.length){const _=p.map(L=>o.substring(L[0],L[1]+1)).join(`
`);e.getFontsForString(_,{lang:c||void 0,style:h,weight:u,dataUrl:d}).then(({fontUrls:L,chars:D})=>{const T=g.length;let N=0;p.forEach(S=>{for(let V=0,I=S[1]-S[0];V<=I;V++)f[S[0]+V]=D[N++]+T;N++});let E=0;L.forEach((S,V)=>{r(S,I=>{g[V+T]=I,++E===L.length&&b()})})})}else b()}function b(){s({chars:f,fonts:g})}function y(_,L){for(let D=0;D<L.length;D++){const[T,N=T]=L[D];if(T<=_&&_<=N)return!0}return!1}}}const __=Nr({name:"FontResolver",dependencies:[x_,v_,y_],init(a,e,t){return a(e,t())}});function S_(a,e){const n=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",r=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:v,fonts:p,style:m,weight:b,preResolvedFonts:y,unicodeFontsURL:_},L){const D=({chars:T,fonts:N})=>{let E,S;const V=[];for(let I=0;I<T.length;I++)T[I]!==S?(S=T[I],V.push(E={start:I,end:I,fontObj:N[T[I]]})):E.end=I;L(V)};y?D(y):a(g,D,{lang:v,fonts:p,style:m,weight:b,unicodeFontsURL:_})}function s({text:g="",font:v,lang:p,sdfGlyphSize:m=64,fontSize:b=400,fontWeight:y=1,fontStyle:_="normal",letterSpacing:L=0,lineHeight:D="normal",maxWidth:T=1/0,direction:N,textAlign:E="left",textIndent:S=0,whiteSpace:V="normal",overflowWrap:I="normal",anchorX:F=0,anchorY:G=0,metricsOnly:Y=!1,unicodeFontsURL:q,preResolvedFonts:J=null,includeCaretPositions:B=!1,chunkedBoundsSize:K=8192,colorRanges:j=null},z){const te=u(),se={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),b=+b,L=+L,T=+T,D=D||"normal",S=+S,o({text:g,lang:p,style:_,weight:y,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:q,preResolvedFonts:J},P=>{se.fontLoad=u()-te;const C=isFinite(T);let R=null,M=null,W=null,re=null,U=null,ie=null,Z=null,ve=null,Q=0,le=0,de=V!=="nowrap";const me=new Map,H=u();let x=S,w=0,k=new d;const ae=[k];P.forEach(pe=>{const{fontObj:Me}=pe,{ascender:ge,descender:Ee,unitsPerEm:Ue,lineGap:Re,capHeight:Se,xHeight:Ce}=Me;let we=me.get(Me);if(!we){const $=b/Ue,ye=D==="normal"?(ge-Ee+Re)*$:D*b,Ae=(ye-(ge-Ee)*$)/2,Ne=Math.min(ye,(ge-Ee)*$),Pe=(ge+Ee)/2*$+Ne/2;we={index:me.size,src:Me.src,fontObj:Me,fontSizeMult:$,unitsPerEm:Ue,ascender:ge*$,descender:Ee*$,capHeight:Se*$,xHeight:Ce*$,lineHeight:ye,baseline:-Ae-ge*$,caretTop:Pe,caretBottom:Pe-Ne},me.set(Me,we)}const{fontSizeMult:Oe}=we,Fe=g.slice(pe.start,pe.end+1);let A,ee;Me.forEachGlyph(Fe,b,L,($,ye,Ae,Ne)=>{ye+=w,Ne+=pe.start,A=ye,ee=$;const Pe=g.charAt(Ne),Xe=$.advanceWidth*Oe,qe=k.count;let Le;if("isEmpty"in $||($.isWhitespace=!!Pe&&new RegExp(i).test(Pe),$.canBreakAfter=!!Pe&&r.test(Pe),$.isEmpty=$.xMin===$.xMax||$.yMin===$.yMax||n.test(Pe)),!$.isWhitespace&&!$.isEmpty&&le++,de&&C&&!$.isWhitespace&&ye+Xe+x>T&&qe){if(k.glyphAt(qe-1).glyphObj.canBreakAfter)Le=new d,x=-ye;else for(let Ze=qe;Ze--;)if(Ze===0&&I==="break-word"){Le=new d,x=-ye;break}else if(k.glyphAt(Ze).glyphObj.canBreakAfter){Le=k.splitAt(Ze+1);const st=Le.glyphAt(0).x;x-=st;for(let tt=Le.count;tt--;)Le.glyphAt(tt).x-=st;break}Le&&(k.isSoftWrapped=!0,k=Le,ae.push(k),Q=T)}let je=k.glyphAt(k.count);je.glyphObj=$,je.x=ye+x,je.y=Ae,je.width=Xe,je.charIndex=Ne,je.fontData=we,Pe===`
`&&(k=new d,ae.push(k),x=-(ye+Xe+L*b)+S)}),w=A+ee.advanceWidth*Oe+L*b});let ne=0;ae.forEach(pe=>{let Me=!0;for(let ge=pe.count;ge--;){const Ee=pe.glyphAt(ge);Me&&!Ee.glyphObj.isWhitespace&&(pe.width=Ee.x+Ee.width,pe.width>Q&&(Q=pe.width),Me=!1);let{lineHeight:Ue,capHeight:Re,xHeight:Se,baseline:Ce}=Ee.fontData;Ue>pe.lineHeight&&(pe.lineHeight=Ue);const we=Ce-pe.baseline;we<0&&(pe.baseline+=we,pe.cap+=we,pe.ex+=we),pe.cap=Math.max(pe.cap,pe.baseline+Re),pe.ex=Math.max(pe.ex,pe.baseline+Se)}pe.baseline-=ne,pe.cap-=ne,pe.ex-=ne,ne+=pe.lineHeight});let oe=0,xe=0;if(F&&(typeof F=="number"?oe=-F:typeof F=="string"&&(oe=-Q*(F==="left"?0:F==="center"?.5:F==="right"?1:l(F)))),G&&(typeof G=="number"?xe=-G:typeof G=="string"&&(xe=G==="top"?0:G==="top-baseline"?-ae[0].baseline:G==="top-cap"?-ae[0].cap:G==="top-ex"?-ae[0].ex:G==="middle"?ne/2:G==="bottom"?ne:G==="bottom-baseline"?-ae[ae.length-1].baseline:l(G)*ne)),!Y){const pe=e.getEmbeddingLevels(g,N);R=new Uint16Array(le),M=new Uint8Array(le),W=new Float32Array(le*2),re={},Z=[1/0,1/0,-1/0,-1/0],ve=[],B&&(ie=new Float32Array(g.length*4)),j&&(U=new Uint8Array(le*3));let Me=0,ge=-1,Ee=-1,Ue,Re;if(ae.forEach((Se,Ce)=>{let{count:we,width:Oe}=Se;if(we>0){let Fe=0;for(let Ne=we;Ne--&&Se.glyphAt(Ne).glyphObj.isWhitespace;)Fe++;let A=0,ee=0;if(E==="center")A=(Q-Oe)/2;else if(E==="right")A=Q-Oe;else if(E==="justify"&&Se.isSoftWrapped){let Ne=0;for(let Pe=we-Fe;Pe--;)Se.glyphAt(Pe).glyphObj.isWhitespace&&Ne++;ee=(Q-Oe)/Ne}if(ee||A){let Ne=0;for(let Pe=0;Pe<we;Pe++){let Xe=Se.glyphAt(Pe);const qe=Xe.glyphObj;Xe.x+=A+Ne,ee!==0&&qe.isWhitespace&&Pe<we-Fe&&(Ne+=ee,Xe.width+=ee)}}const $=e.getReorderSegments(g,pe,Se.glyphAt(0).charIndex,Se.glyphAt(Se.count-1).charIndex);for(let Ne=0;Ne<$.length;Ne++){const[Pe,Xe]=$[Ne];let qe=1/0,Le=-1/0;for(let je=0;je<we;je++)if(Se.glyphAt(je).charIndex>=Pe){let Ze=je,st=je;for(;st<we;st++){let tt=Se.glyphAt(st);if(tt.charIndex>Xe)break;st<we-Fe&&(qe=Math.min(qe,tt.x),Le=Math.max(Le,tt.x+tt.width))}for(let tt=Ze;tt<st;tt++){const mt=Se.glyphAt(tt);mt.x=Le-(mt.x+mt.width-qe)}break}}let ye;const Ae=Ne=>ye=Ne;for(let Ne=0;Ne<we;Ne++){const Pe=Se.glyphAt(Ne);ye=Pe.glyphObj;const Xe=ye.index,qe=pe.levels[Pe.charIndex]&1;if(qe){const Le=e.getMirroredCharacter(g[Pe.charIndex]);Le&&Pe.fontData.fontObj.forEachGlyph(Le,0,0,Ae)}if(B){const{charIndex:Le,fontData:je}=Pe,Ze=Pe.x+oe,st=Pe.x+Pe.width+oe;ie[Le*4]=qe?st:Ze,ie[Le*4+1]=qe?Ze:st,ie[Le*4+2]=Se.baseline+je.caretBottom+xe,ie[Le*4+3]=Se.baseline+je.caretTop+xe;const tt=Le-ge;tt>1&&h(ie,ge,tt),ge=Le}if(j){const{charIndex:Le}=Pe;for(;Le>Ee;)Ee++,j.hasOwnProperty(Ee)&&(Re=j[Ee])}if(!ye.isWhitespace&&!ye.isEmpty){const Le=Me++,{fontSizeMult:je,src:Ze,index:st}=Pe.fontData,tt=re[Ze]||(re[Ze]={});tt[Xe]||(tt[Xe]={path:ye.path,pathBounds:[ye.xMin,ye.yMin,ye.xMax,ye.yMax]});const mt=Pe.x+oe,bt=Pe.y+Se.baseline+xe;W[Le*2]=mt,W[Le*2+1]=bt;const Ft=mt+ye.xMin*je,jt=bt+ye.yMin*je,Sn=mt+ye.xMax*je,nn=bt+ye.yMax*je;Ft<Z[0]&&(Z[0]=Ft),jt<Z[1]&&(Z[1]=jt),Sn>Z[2]&&(Z[2]=Sn),nn>Z[3]&&(Z[3]=nn),Le%K===0&&(Ue={start:Le,end:Le,rect:[1/0,1/0,-1/0,-1/0]},ve.push(Ue)),Ue.end++;const At=Ue.rect;if(Ft<At[0]&&(At[0]=Ft),jt<At[1]&&(At[1]=jt),Sn>At[2]&&(At[2]=Sn),nn>At[3]&&(At[3]=nn),R[Le]=Xe,M[Le]=st,j){const Nn=Le*3;U[Nn]=Re>>16&255,U[Nn+1]=Re>>8&255,U[Nn+2]=Re&255}}}}}),ie){const Se=g.length-ge;Se>1&&h(ie,ge,Se)}}const be=[];me.forEach(({index:pe,src:Me,unitsPerEm:ge,ascender:Ee,descender:Ue,lineHeight:Re,capHeight:Se,xHeight:Ce})=>{be[pe]={src:Me,unitsPerEm:ge,ascender:Ee,descender:Ue,lineHeight:Re,capHeight:Se,xHeight:Ce}}),se.typesetting=u()-H,z({glyphIds:R,glyphFontIndices:M,glyphPositions:W,glyphData:re,fontData:be,caretPositions:ie,glyphColors:U,chunkedBounds:ve,fontSize:b,topBaseline:xe+ae[0].baseline,blockBounds:[oe,xe-ne,oe+Q,xe],visibleBounds:Z,timings:se})})}function c(g,v){s({...g,metricsOnly:!0},p=>{const[m,b,y,_]=p.blockBounds;v({width:y-m,height:_-b})})}function l(g){let v=g.match(/^([\d.]+)%$/),p=v?parseFloat(v[1]):NaN;return isNaN(p)?0:p/100}function h(g,v,p){const m=g[v*4],b=g[v*4+1],y=g[v*4+2],_=g[v*4+3],L=(b-m)/p;for(let D=0;D<p;D++){const T=(v+D)*4;g[T]=m+L*D,g[T+1]=m+L*(D+1),g[T+2]=y,g[T+3]=_}}function u(){return(self.performance||Date).now()}function d(){this.data=[]}const f=["glyphObj","x","y","width","charIndex","fontData"];return d.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/f.length)},glyphAt(g){let v=d.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new d;return v.data=this.data.splice(g*f.length),v}},d.flyweight=f.reduce((g,v,p,m)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*f.length+p]},set(b){this.data[this.index*f.length+p]=b}}),g),{data:null,index:0}),{typeset:s,measure:c}}const Oi=()=>(self.performance||Date).now(),es=Gd();let hu;function b_(a,e,t,n,i,r,o,s,c,l,h=!0){return h?w_(a,e,t,n,i,r,o,s,c,l).then(null,u=>(hu||(console.warn("WebGL SDF generation failed, falling back to JS",u),hu=!0),du(a,e,t,n,i,r,o,s,c,l))):du(a,e,t,n,i,r,o,s,c,l)}const Eo=[],M_=5;let Ac=0;function Vd(){const a=Oi();for(;Eo.length&&Oi()-a<M_;)Eo.shift()();Ac=Eo.length?setTimeout(Vd,0):0}const w_=(...a)=>new Promise((e,t)=>{Eo.push(()=>{const n=Oi();try{es.webgl.generateIntoCanvas(...a),e({timing:Oi()-n})}catch(i){t(i)}}),Ac||(Ac=setTimeout(Vd,0))}),T_=4,E_=2e3,uu={};let A_=0;function du(a,e,t,n,i,r,o,s,c,l){const h="TroikaTextSDFGenerator_JS_"+A_++%T_;let u=uu[h];return u||(u=uu[h]={workerModule:Nr({name:h,workerId:h,dependencies:[Gd,Oi],init(d,f){const g=d().javascript.generate;return function(...v){const p=f();return{textureData:g(...v),timing:f()-p}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),u.requests++,clearTimeout(u.idleTimer),u.workerModule(a,e,t,n,i,r).then(({textureData:d,timing:f})=>{const g=Oi(),v=new Uint8Array(d.length*4);for(let p=0;p<d.length;p++)v[p*4+l]=d[p];return es.webglUtils.renderImageData(o,v,s,c,a,e,1<<3-l),f+=Oi()-g,--u.requests===0&&(u.idleTimer=setTimeout(()=>{r_(h)},E_)),{timing:f}})}function C_(a){a._warm||(es.webgl.isSupported(a),a._warm=!0)}const R_=es.webglUtils.resizeWebGLCanvasWithoutClearing,ia={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},P_=new Je;function mr(){return(self.performance||Date).now()}const fu=Object.create(null);function D_(a,e){a=I_({},a);const t=mr(),n=[];if(a.font&&n.push({label:"user",src:U_(a.font)}),a.font=n,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||ia.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||ia.unicodeFontsURL,a.colorRanges!=null){let u={};for(let d in a.colorRanges)if(a.colorRanges.hasOwnProperty(d)){let f=a.colorRanges[d];typeof f!="number"&&(f=P_.set(f).getHex()),u[d]=f}a.colorRanges=u}Object.freeze(a);const{textureWidth:i,sdfExponent:r}=ia,{sdfGlyphSize:o}=a,s=i/o*4;let c=fu[o];if(!c){const u=document.createElement("canvas");u.width=i,u.height=o*256/s,c=fu[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:u,sdfTexture:new Dt(u,void 0,void 0,void 0,Qt,Qt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,L_(c)}const{sdfTexture:l,sdfCanvas:h}=c;F_(a).then(u=>{const{glyphIds:d,glyphFontIndices:f,fontData:g,glyphPositions:v,fontSize:p,timings:m}=u,b=[],y=new Float32Array(d.length*4);let _=0,L=0;const D=mr(),T=g.map(I=>{let F=c.glyphsByFont.get(I.src);return F||c.glyphsByFont.set(I.src,F=new Map),F});d.forEach((I,F)=>{const G=f[F],{src:Y,unitsPerEm:q}=g[G];let J=T[G].get(I);if(!J){const{path:te,pathBounds:se}=u.glyphData[Y][I],P=Math.max(se[2]-se[0],se[3]-se[1])/o*(ia.sdfMargin*o+.5),C=c.glyphCount++,R=[se[0]-P,se[1]-P,se[2]+P,se[3]+P];T[G].set(I,J={path:te,atlasIndex:C,sdfViewBox:R}),b.push(J)}const{sdfViewBox:B}=J,K=v[L++],j=v[L++],z=p/q;y[_++]=K+B[0]*z,y[_++]=j+B[1]*z,y[_++]=K+B[2]*z,y[_++]=j+B[3]*z,d[F]=J.atlasIndex}),m.quads=(m.quads||0)+(mr()-D);const N=mr();m.sdf={};const E=h.height,S=Math.ceil(c.glyphCount/s),V=Math.pow(2,Math.ceil(Math.log2(S*o)));V>E&&(console.info(`Increasing SDF texture size ${E}->${V}`),R_(h,i,V),l.dispose()),Promise.all(b.map(I=>Wd(I,c,a.gpuAccelerateSDF).then(({timing:F})=>{m.sdf[I.atlasIndex]=F}))).then(()=>{b.length&&!c.contextLost&&(jd(c),l.needsUpdate=!0),m.sdfTotal=mr()-N,m.total=mr()-t,e(Object.freeze({parameters:a,sdfTexture:l,sdfGlyphSize:o,sdfExponent:r,glyphBounds:y,glyphAtlasIndices:d,glyphColors:u.glyphColors,caretPositions:u.caretPositions,chunkedBounds:u.chunkedBounds,ascender:u.ascender,descender:u.descender,lineHeight:u.lineHeight,capHeight:u.capHeight,xHeight:u.xHeight,topBaseline:u.topBaseline,blockBounds:u.blockBounds,visibleBounds:u.visibleBounds,timings:u.timings}))})}),Promise.resolve().then(()=>{c.contextLost||C_(h)})}function Wd({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},o){if(r)return Promise.resolve({timing:-1});const{textureWidth:s,sdfExponent:c}=ia,l=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4),u=h%(s/n)*n,d=Math.floor(h/(s/n))*n,f=e%4;return b_(n,n,a,t,l,c,i,u,d,f,o)}function L_(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const n=[];a.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(Wd(r,a,!0))})}),Promise.all(n).then(()=>{jd(a),a.sdfTexture.needsUpdate=!0})})}function I_(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let xo;function U_(a){return xo||(xo=typeof document>"u"?{}:document.createElement("a")),xo.href=a,xo.href}function jd(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:n,height:i}=e,r=a.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==n*i*4)&&(o=new Uint8Array(n*i*4),t.image={width:n,height:i,data:o},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,o)}}const N_=Nr({name:"Typesetter",dependencies:[S_,__,o_],init(a,e,t){return a(e,t())}}),F_=Nr({name:"Typesetter",dependencies:[N_],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}}),pu={};function O_(a){let e=pu[a];if(!e){const t=new ri(1,1,a,a),n=t.clone(),i=t.attributes,r=n.attributes,o=new tn,s=i.uv.count;for(let c=0;c<s;c++)r.position.array[c*3]*=-1,r.normal.array[c*3+2]*=-1;["position","normal","uv"].forEach(c=>{o.setAttribute(c,new Lt([...i[c].array,...r[c].array],i[c].itemSize))}),o.setIndex([...t.index.array,...n.index.array.map(c=>c+s)]),o.translate(.5,.5,0),e=pu[a]=o}return e}const k_="aTroikaGlyphBounds",mu="aTroikaGlyphIndex",B_="aTroikaGlyphColor";class z_ extends Od{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Vi,this.boundingBox=new ii}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Gt?t/2:0,e===$t?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=O_(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,r){Qs(this,k_,e,4),Qs(this,mu,t,1),Qs(this,B_,r,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:r,min:o,max:s,sin:c,cos:l}=Math,h=i/2,u=i*2,d=Math.abs(t),f=e[0]/d,g=e[2]/d,v=r((f+h)/u)!==r((g+h)/u)?-d:o(c(f)*d,c(g)*d),p=r((f-h)/u)!==r((g-h)/u)?d:s(c(f)*d,c(g)*d),m=r((f+i)/u)!==r((g+i)/u)?d*2:s(d-l(f)*d,d-l(g)*d);n.min.set(v,e[1],t<0?-m:0),n.max.set(p,e[3],t<0?0:m)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(mu).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let r=n[i].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}}function Qs(a,e,t,n){const i=a.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(a.setAttribute(e,new ga(t,n)),delete a._maxInstanceCount,a.dispose()):i&&a.deleteAttribute(e)}const G_=`
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
`,H_=`
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
`,V_=`
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
`,W_=`
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
`;function j_(a){const e=Ec(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new _e},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new vt(0,0,0,0)},uTroikaClipRect:{value:new vt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new _e},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Je},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ve},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:G_,vertexTransform:H_,fragmentDefs:V_,fragmentColorTransform:W_,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(Hd,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Yc=new wa({color:16777215,side:$t,transparent:!0}),gu=8421504,vu=new rt,_o=new X,ec=new X,ta=[],X_=new X,tc="+x+y";function yu(a){return Array.isArray(a)?a[0]:a}let Xd=()=>{const a=new Et(new ri(1,1),Yc);return Xd=()=>a,a},Yd=()=>{const a=new Et(new ri(1,1,32,1),Yc);return Yd=()=>a,a};const Y_={type:"syncstart"},q_={type:"synccomplete"},qd=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Z_=qd.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Zd extends Et{constructor(){const e=new z_;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=gu,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=tc,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Y_),D_({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent(q_),e&&e()})))}onBeforeRender(e,t,n,i,r,o){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r),r._hadOwnSide=r.hasOwnProperty("side"),this.geometry.setSide(r._actualSide=r.side),r.side=$n}onAfterRender(e,t,n,i,r,o){r._hadOwnSide?r.side=r._actualSide:delete r.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Yc.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=j_(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return yu(this.material).getDepthMaterial()}get customDistanceMaterial(){return yu(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:s,blockBounds:c}=i;n.uTroikaSDFTexture.value=s,n.uTroikaSDFTextureSize.value.set(s.image.width,s.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(c),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let l=0,h=0,u=0,d,f,g,v=0,p=0;if(t){let{outlineWidth:b,outlineOffsetX:y,outlineOffsetY:_,outlineBlur:L,outlineOpacity:D}=this;l=this._parsePercent(b)||0,h=Math.max(0,this._parsePercent(L)||0),d=D,v=this._parsePercent(y)||0,p=this._parsePercent(_)||0}else u=Math.max(0,this._parsePercent(this.strokeWidth)||0),u&&(g=this.strokeColor,n.uTroikaStrokeColor.value.set(g??gu),f=this.strokeOpacity,f==null&&(f=1)),d=this.fillOpacity;n.uTroikaDistanceOffset.value=l,n.uTroikaPositionOffset.value.set(v,p),n.uTroikaBlurRadius.value=h,n.uTroikaStrokeWidth.value=u,n.uTroikaStrokeOpacity.value=f,n.uTroikaFillOpacity.value=d??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)n.uTroikaClipRect.value.fromArray(m);else{const b=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(c[0]-b,c[1]-b,c[2]+b,c[3]+b)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const s=e.hasOwnProperty("color")?e.color:e.color=new Je;(r!==s._input||typeof r=="object")&&s.set(s._input=r)}let o=this.orientation||tc;if(o!==e._orientation){let s=n.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let c=o!==tc&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(c){let[,l,h,u,d]=c;_o.set(0,0,0)[h]=l==="-"?1:-1,ec.set(0,0,0)[d]=u==="-"?-1:1,vu.lookAt(X_,_o.cross(ec),ec),s.setFromMatrix4(vu)}else s.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new _e){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new _e){return _o.copy(e),this.localPositionToTextCoords(this.worldToLocal(_o),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const r=n.blockBounds,o=i?Yd():Xd(),s=o.geometry,{position:c,uv:l}=s.attributes;for(let h=0;h<l.count;h++){let u=r[0]+l.getX(h)*(r[2]-r[0]);const d=r[1]+l.getY(h)*(r[3]-r[1]);let f=0;i&&(f=i-Math.cos(u/i)*i,u=Math.sin(u/i)*i),c.setXYZ(h,u,d,f)}s.boundingSphere=this.geometry.boundingSphere,s.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,ta.length=0,o.raycast(e,ta);for(let h=0;h<ta.length;h++)ta[h].object=this,t.push(ta[h])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Z_.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}qd.forEach(a=>{const e="_private_"+a;Object.defineProperty(Zd.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});const Ln=["#f7f3e8","#e23d28","#1f5fbf","#f4c430","#111111"];function vn(a,e){return a+Math.random()*(e-a)}function yi(a,e){return Math.floor(vn(a,e+1))}function K_(a){return a[Math.floor(Math.random()*a.length)]}function xi(a=Ln){const e=a[0]??Ln[0],t=a.slice(1),n=[e,e,e,e,e,...t];return K_(n)}function Kd(a){const e=new Je(a);return e.r*.2126+e.g*.7152+e.b*.0722<.45}const nc=new Map,ic=new Map,rc=new Map,J_=[{max:350,url:"/fonts/UniversLight.ttf",weight:300},{max:550,url:"/fonts/UniversRegular.ttf",weight:400},{max:1/0,url:"/fonts/UniversBold.ttf",weight:700}];function Jd(a,e){const t=new An;t.userData.blockData=a;const n=new Wi(a.worldW,a.height,a.worldD),i=new Xc({color:a.color,roughness:.64,metalness:.02,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),r=new Et(n,i);r.position.y=a.height/2,r.castShadow=!0,r.receiveShadow=!0,r.userData.blockData=a,r.userData.isBlockMesh=!0,r.userData.originalHeight=a.height,r.userData.originalY=r.position.y,t.add(r);const o=new Ad(new Ld(n),new Ed({color:1118481}));o.renderOrder=2,r.add(o);const s=$_(a,e);return s&&r.add(s),t.position.set(a.worldX,0,a.worldZ),t.userData.mesh=r,t.userData.blockData=a,t}function $_(a,e){var t,n;return a.type==="filler"?null:(t=a.content)!=null&&t.iconSrc?Q_(a):a.subtype==="image"&&((n=a.content)!=null&&n.src)?aS(a,e,{fit:a.content.fit,scale:a.content.imageScale}):$d(a)}function Q_(a,e){const t=new An,n=$d(a);return n&&t.add(n),eS(a).then(i=>{n&&(n.visible=!1),t.add(i)}).catch(()=>{n&&(n.visible=!0)}),t}async function eS(a){const e=a.content.iconSrc,t=await tS(e),n=new An,i=new wa({color:lS(a.color),side:$t,depthWrite:!1,toneMapped:!1});t.paths.forEach(u=>{Qo.createShapes(u).forEach(d=>{const f=new jc(d),g=new Et(f,i);n.add(g)})});const r=new ii().setFromObject(n),o=r.getSize(new X),s=r.getCenter(new X),c=a.worldW*.34,l=a.worldD*.34,h=Math.min(c/Math.max(o.x,.001),l/Math.max(o.y,.001));return n.children.forEach(u=>{u.geometry.translate(-s.x,-s.y,0)}),n.scale.set(h,-h,h),n.rotation.x=-Math.PI/2,n.position.set(0,a.height/2+.03,0),n.renderOrder=3,n}function tS(a){if(rc.has(a))return rc.get(a);const e=new Qo,t=new Promise((n,i)=>{e.load(a,n,void 0,i)});return rc.set(a,t),t}function $d(a){var n,i,r,o,s;const e=((n=a.content)==null?void 0:n.label)??((i=a.content)==null?void 0:i.text)??"";if(!e)return null;const t=new Zd;return t.text=e,t.font=iS(a),t.fontWeight=Qd(a),t.fontSize=dS(a),t.maxWidth=Math.max(.2,a.worldW-(((r=a.content)==null?void 0:r.padding)??.28)),t.lineHeight=((o=a.content)==null?void 0:o.lineHeight)??"normal",t.textAlign=((s=a.content)==null?void 0:s.textAlign)??"center",t.color=nS(a.color),t.anchorX=t.textAlign==="left"?"left":"center",t.anchorY="middle",t.position.set(t.textAlign==="left"?-t.maxWidth/2:0,a.height/2+.018,0),t.rotation.x=-Math.PI/2,t.sync(),t}function nS(a){const e=new Je(a);return e.r>.55&&e.g<.35&&e.b<.3?1118481:Kd(a)?16249832:1118481}function iS(a){const e=Qd(a);return J_.find(t=>e<=t.max).url}function Qd(a){var e;return Number(((e=a.content)==null?void 0:e.fontWeight)??a.fontWeight??rS(a))}function rS(a){return a.subtype==="header"||a.type==="interaction"||a.type==="moreInfo"?700:400}function aS(a,e,t={}){const n=t.src??a.content.src,i=t.scale??.88,r=new Et(new ri(a.worldW*i,a.worldD*i),new wa({color:16777215,transparent:t.transparent??!1,alphaTest:t.transparent?.08:0,depthWrite:!t.transparent,toneMapped:!1,side:$t}));r.rotation.x=-Math.PI/2,r.position.set(0,a.height/2+.024,0);let o=!1;return r.material.addEventListener("dispose",()=>{var s;o=!0,(s=r.material.map)==null||s.dispose()}),oS(n,e,t).then(s=>{if(o)return;const c=s.clone();c.colorSpace=Jt,c.wrapS=qn,c.wrapT=qn,t.fit==="contain"?uS(r,c,a.worldW,a.worldD):hS(c,a.worldW,a.worldD),c.needsUpdate=!0,r.material.map=c,r.material.needsUpdate=!0,r.visible=!0,r.userData.fallbackText&&(r.userData.fallbackText.visible=!1)}).catch(()=>{r.material.color.set(14209732)}),r}function oS(a,e,t={}){const n=t.tint?`${a}:${t.tint}`:a;if(nc.has(n))return nc.get(n);const i=sS(a,t).then(r=>new Promise((o,s)=>{e.load(r,o,void 0,s)}));return nc.set(n,i),i}function sS(a,e){if(!e.tint||!a.endsWith(".svg"))return Promise.resolve(a);const t=`${a}:${e.tint}`;if(ic.has(t))return ic.get(t);const n=fetch(a).then(i=>{if(!i.ok)throw new Error(`Failed to load SVG icon: ${a}`);return i.text()}).then(i=>{const r=cS(i,e.tint);return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`});return ic.set(t,n),n}function cS(a,e){const t=/\sfill=/.test(a),n=/\sstroke=/.test(a);let i=a.replace(/fill="(?!none)[^"]*"/g,`fill="${e}"`).replace(/stroke="(?!none)[^"]*"/g,`stroke="${e}"`);return!t&&!n&&(i=i.replace("<svg",`<svg fill="${e}"`)),i}function lS(a){const e=new Je(a);return e.b>.45&&e.r<.35||Kd(a)?"#f7f3e8":"#111111"}function hS(a,e,t){const n=a.image;if(!(n!=null&&n.width)||!(n!=null&&n.height))return;const i=n.width/n.height,r=e/t;a.center.set(.5,.5),i>r?a.repeat.set(r/i,1):a.repeat.set(1,i/r)}function uS(a,e,t,n){const i=e.image;if(!(i!=null&&i.width)||!(i!=null&&i.height))return;const r=i.width/i.height,o=t/n;e.repeat.set(1,1),e.offset.set(0,0),a.scale.x=Math.min(1,r/o),a.scale.y=Math.min(1,o/r)}function dS(a){var e;return(e=a.content)!=null&&e.fontSize?Number(a.content.fontSize):a.subtype==="header"?Math.min(.44,a.worldW*.18):a.type==="interaction"||a.type==="moreInfo"?Math.min(.28,a.worldW*.16):Math.min(.22,a.worldW*.12)}function Dr(a){return String(a).trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function fS(a={}){var n;const e=a.metadata??((n=a.modal)==null?void 0:n.metadata)??{},t=[...a.tags??[],...e.years??[],...e.organizations??[]];return[...new Map(t.map(i=>{const r=typeof i=="object"?i.id??i.label:String(i);return[Dr(r),r]})).values()]}const pS=["projects","experiments","teaching"],xu={topic:0,organization:1,year:2},Bo=.3,Cc=1.05,zo=.06,_u=Bo*.62;function ef(a,{backTarget:e="home"}={}){var s,c,l;const t=Array.isArray(a)?a:a.pages??[],n=new Map(t.map(h=>[h.id,h])),i=new Map,r=(h,u)=>{const d=typeof h=="object"&&h!==null?h.label??h.id:h;if(d==null)return;const f=String(d).trim().replace(/\s+/g," "),g=Dr(typeof h=="object"&&h!==null?h.id??f:f);if(!f||!g)return;const v=i.get(g);(!v||v.kind==="topic"&&u!=="topic")&&i.set(g,{id:g,label:f,kind:u})};for(const h of pS)for(const u of((s=n.get(h))==null?void 0:s.projectItems)??[]){const d=(c=n.get(u.target??u.id))==null?void 0:c.projectDetails;if(!d)continue;const f=d.metadata??((l=d.modal)==null?void 0:l.metadata)??{};for(const g of d.tags??[])r(g,"topic");for(const g of f.organizations??[])r(g,"organization");for(const g of f.years??[])r(g,"year")}for(const h of a.unassignedTags??[])r(h,"topic");return{id:"tags",template:"tagDirectory",tags:[...i.values()].sort((h,u)=>{const d=xu[h.kind]-xu[u.kind];return d||(h.kind==="year"?u.label.localeCompare(h.label,"en",{numeric:!0}):h.label.localeCompare(u.label,"en",{sensitivity:"base"}))}),backTarget:e}}function mS(a,e){const t=[],n=a.label.split(/\s+/);for(let i=1;i<=3;i++){const r=i*e.worldWidth/e.cols-e.gap-zo;if(n.some(l=>l.length*_u>r))continue;const o=[""];for(const l of n){const h=o.at(-1)?`${o.at(-1)} ${l}`:l;o.at(-1)&&h.length*_u>r?o.push(l):o[o.length-1]=h}const s=o.length*Bo*Cc+zo+e.gap,c=Math.ceil(s/(e.worldDepth/e.rows/2));c<=2&&t.push({tag:a,width:i,units:c,lines:o})}if(t.sort((i,r)=>i.width*i.units-r.width*r.units||i.lines.length-r.lines.length||i.width-r.width),!t.length)throw new RangeError(`Tag label cannot fit the directory at a readable size: ${a.label}`);return t[0]}function gS(a,e,t=Ln){if(e.cols!==6||e.rows!==10)throw new RangeError("The tag directory requires a 6-column, 10-row frame.");const n=e.rows*2,i=Array.from({length:n},()=>Array(e.cols).fill(!1)),r=[],o=(g,v,p,m)=>g+p<=e.cols&&v+m<=n&&Array.from({length:m},(b,y)=>i[v+y].slice(g,g+p).every(_=>!_)).every(Boolean),s=(g,v,p)=>{if(!o(g.gridX,v,g.gridW,p))throw new RangeError(`Tag directory blocks overlap: ${g.id}`);for(let m=0;m<p;m++)for(let b=0;b<g.gridW;b++)i[v+m][g.gridX+b]=!0;r.push({...g,gridY:v/2,gridH:p/2})};s({id:"tags-back",type:"interaction",subtype:"text",gridX:0,gridW:1,height:1.7,color:t[0],content:{label:"BACK",fontSize:Bo,padding:zo,lineHeight:Cc,fontWeight:700},action:{type:"back",target:a.backTarget??"home"}},0,2),s({id:"tags-title",type:"content",subtype:"header",gridX:1,gridW:4,height:1.7,color:t[0],content:{text:"TAGS",fontSize:.6,fontWeight:700,padding:.18,textAlign:"left"}},0,2),s({id:"tags-top-accent",type:"filler",gridX:5,gridW:1,height:vn(1.1,1.7),color:t[1]??Ln[1],content:null,action:null},0,2);const c=[];for(const g of a.tags??[]){const v=mS(g,e);let p=c.at(-1);(!p||p.width+v.width>e.cols)&&(p={width:0,units:1,items:[]},c.push(p)),p.items.push(v),p.width+=v.width,p.units=Math.max(p.units,v.units)}const l=c.reduce((g,v)=>g+v.units,0);if(l>n-2)throw new RangeError("The complete tag catalog exceeds the directory frame.");const h=c.map((g,v)=>({shelf:g,index:v})).filter(({shelf:g})=>g.units===1),u=Math.min(n-2-l,h.length);for(let g=0;g<u;g++){const{shelf:v}=h[Math.floor((g+.5)*h.length/u)];v.units=2;const p=[...v.items].sort((m,b)=>b.width-m.width)[0];p.units=2}let d=2;for(const g of c){let v=0;for(const p of g.items)s({id:`tags-tag-${p.tag.id}`,type:"interaction",subtype:"tagDirectoryTag",gridX:v,gridW:p.width,height:1.7,color:xi(t),tagKind:p.tag.kind,content:{text:p.lines.join(`
`),fontSize:Bo,padding:zo,lineHeight:Cc,fontWeight:700},action:{type:"tag",tag:p.tag.id}},d,p.units),v+=p.width;d+=g.units}let f=0;for(let g=2;g<n;g++)for(let v=0;v<e.cols;v++){if(i[g][v])continue;const p=[[1,1],[1,2],[2,1],[2,2],[3,2]].filter(([y,_])=>o(v,g,y,_)),[m,b]=p[yi(0,p.length-1)];s({id:`tags-filler-${f++}`,type:"filler",gridX:v,gridW:m,height:vn(.9,1.7),color:xi(t),content:null,action:null},g,b)}return r}const Rt=Object.freeze({cols:6,rows:10,worldWidth:7.2,worldDepth:10,gap:.08}),Jn={content:{min:1.6,max:1.9},filler:{min:.9,max:1.7},fillerRing:{min:.3,max:.8}},Su={small:[[1,1],[2,1]],medium:[[2,2]],large:[[3,3]],wide:[[4,2]],shortWide:[[4,1],[3,1]],tall:[[2,4]]};function qc(a,e={}){const t=e.isMobile??!0,n=Rt,i=a.palette??Ln,r=e.fillerRings??2;if(a.template==="tagDirectory")return gS(a,n,i).map(l=>ac(l,n));if(a.template==="projectDetail"){const h=[...yS(a,n,i),...Mu(n,i,r)].map(u=>ac(u,n));return[...h,...vS(h,n,i)]}const o=Zc(n.cols,n.rows),s=[],c=new Map;for(const l of a.uniqueColorGroups??[]){const h=Rc(l.colors);l.blockIds.forEach((u,d)=>{h[d]&&c.set(u,h[d])})}for(const l of TS(a.blocks??[])){const h=c.has(l.id)?{...l,color:c.get(l.id)}:l,u=wS(h,o,n,i);u&&s.push(u)}return s.push(...ES(o,n,i,a)),s.push(...Mu(n,i,r)),s.map(l=>ac(l,n))}function vS(a,e,t){const n=a.find(h=>h.imageMaxDepth);if(!n)return[];const i=n.gridW*e.worldWidth/e.cols-e.gap,r=n.gridH*e.worldDepth/e.rows-e.gap,o=(i-n.worldW)/2-e.gap,s=(r-n.worldD)/2-e.gap,c=[];if(o>=.1)for(const h of[-1,1])c.push({x:n.worldX+h*(i-o)/2,z:n.worldZ,width:o,depth:Math.min(r,n.worldD),vertical:!0});if(s>=.1)for(const h of[-1,1])c.push({x:n.worldX,z:n.worldZ+h*(r-s)/2,width:i,depth:s,vertical:!1});const l=[];for(const h of c){const u=h.vertical?h.depth:h.width,d=h.vertical?e.worldDepth/e.rows:e.worldWidth/e.cols,f=Math.max(1,Math.round((u+e.gap)/(2*d))),g=(u-(f-1)*e.gap)/f;for(let v=0;v<f;v++){const p=-u/2+g/2+v*(g+e.gap);l.push({id:`${n.id}-surround-${l.length}`,type:"filler",subtype:"heroSurround",worldX:h.x+(h.vertical?0:p),worldZ:h.z+(h.vertical?p:0),worldW:h.vertical?h.width:g,worldD:h.vertical?g:h.depth,height:Aa(),color:xi(t),content:null,action:null,modal:null})}}return l}function yS(a,e,t){var v,p,m,b,y;const i=e.rows*2,r=Zc(e.cols,i),o=[],s=a.projectDetails??{},c=((v=s.presentation)==null?void 0:v.layout)==="overview",[l=1320,h=740]=((p=s.presentation)==null?void 0:p.imageSize)??[],u=l/h,d=c&&u<=1.25,f=_=>{_.outsideProject||Ea(_.gridX,_.gridYUnit,_.gridW,_.gridHUnit,r),o.push({..._,gridY:_.gridYUnit/2,gridH:_.gridHUnit/2,height:_.height??(c&&!_.outsideProject?1.7:tf(_.type)),color:_.color??nf(_,t)})};f({id:`${a.id}-back`,type:"interaction",subtype:"text",gridX:0,gridYUnit:a.projectNavigation||c?-2:0,outsideProject:!!(a.projectNavigation||c),gridW:1,gridHUnit:2,content:{label:"BACK",fontWeight:700},action:{type:"back",target:(m=a.projectNavigation)==null?void 0:m.backTarget}}),f({id:`${a.id}-title`,type:"content",subtype:"header",gridX:c?2:vn(0,1)>.5?1:2,gridYUnit:0,gridW:4,gridHUnit:4,content:{text:s.tileTitle??s.title??a.title??a.id,fontWeight:700,textAlign:"left",...c?{fontSize:.48,lineHeight:1.05}:{}},color:t[0]}),c||f({id:`${a.id}-tags-label`,type:"content",subtype:"text",gridX:0,gridYUnit:2,gridW:1,gridHUnit:1,content:{text:"TAGS",fontWeight:700},color:t[0],height:Ho()}),c?xS({page:a,details:s,grid:e,addBlock:f}):SS({page:a,details:s,occupancy:r,palette:t,addBlock:f}),f({id:`${a.id}-hero`,type:"content",subtype:"image",gridX:c?0:1,gridYUnit:c?8:4,gridW:c&&!d?6:4,gridHUnit:d?12:8,imageAspectRatio:c?u:void 0,imageMaxDepth:c?d?6-e.gap:4:void 0,content:{src:s.image??"/images/project-placeholder.jpg",alt:s.imageAlt??`${s.title??a.id} hero image`,...c?{fit:"contain",imageScale:.96}:{}},color:t[0]});const g=s.textBlocks??[];if(g[0]&&f({id:`${a.id}-text-wide`,type:"content",subtype:"text",gridX:c?2:1,gridYUnit:c?4:12,gridW:4,gridHUnit:4,content:{text:g[0],textAlign:"left",fontWeight:c?400:300,...c?{fontSize:.322,lineHeight:1.2}:{}},color:t[0]}),!c&&g[1]&&f({id:`${a.id}-text-tall`,type:"content",subtype:"text",gridX:1,gridYUnit:16,gridW:2,gridHUnit:4,content:{text:g[1],textAlign:"left",fontWeight:300},color:t[0]}),f({id:`${a.id}-more`,type:"moreInfo",subtype:"text",gridX:4,gridYUnit:16,gridW:2,gridHUnit:4,content:{label:"MORE INFO",fontWeight:700},modal:s.modal??{title:s.title??a.id,sections:[{type:"text",content:g.join(`

`)}]}}),(b=s.link)!=null&&b.url&&f({id:`${a.id}-link`,type:"interaction",subtype:"text",gridX:d?4:3,gridYUnit:d?14:18,gridW:d?2:1,gridHUnit:2,content:{label:s.link.label??"LINK",fontWeight:700},action:{type:"link",url:s.link.url}}),c&&_S({page:a,details:s,grid:e,occupancy:r,addBlock:f,area:d?{x:4,y:8,w:2,h:(y=s.link)!=null&&y.url?6:8}:{x:0,y:16,w:4,h:4}}),a.projectNavigation){const{index:_,count:L,pageIds:D,previousPageId:T,nextPageId:N}=a.projectNavigation,E=Ho(),S={gridYUnit:e.rows*2,gridHUnit:2,height:E,outsideProject:!0};f({...S,id:`${a.id}-previous-project`,type:L>1?"interaction":"content",gridX:1,gridW:1,content:{label:"PREV",iconSrc:"/icons/arrow-left.svg",fontWeight:700},action:L>1?{type:"project",target:T}:null});const V=L<=10?1:L<=20?2:3,I=e.worldWidth/e.cols,F=e.worldDepth/e.rows,G=(F-e.gap)/2,Y=V===1?(G+e.gap)/F*2:2/V;let q=0;for(let J=0;J<V;J+=1){const B=Math.floor(L/V)+(J<L%V?1:0),K=2*I-(V>1?e.gap:0),j=Math.min(e.gap,K/B*.2),z=V===1?2/B:(K+j)/B/I,te=V===1?2:2+(e.gap-j)/(2*I);for(let se=0;se<B;se+=1,q+=1){const P=D[q],C=q===_;f({...S,id:`${a.id}-page-${q+1}`,type:"interaction",subtype:"pageIndicator",gridX:te+se*z,gridW:z,gridYUnit:V===1?S.gridYUnit+2-Y:S.gridYUnit+J*Y,gridHUnit:Y,gapX:j,pageIndex:q,isCurrentPage:C,height:E+(C?.24:0),content:null,action:{type:"project",target:P},color:C?Ln[1+q%3]:t[0]})}}f({...S,id:`${a.id}-next-project`,type:L>1?"interaction":"content",gridX:4,gridW:1,content:{label:"NEXT",iconSrc:"/icons/arrow-right.svg",fontWeight:700},action:L>1?{type:"project",target:N}:null}),f({...S,id:`${a.id}-explore-tags`,type:"interaction",subtype:"text",gridX:5,gridW:1,content:{label:`EXPLORE
BY TAGS`,fontSize:.2,lineHeight:1.1,padding:.12,fontWeight:700},action:{type:"state",target:"tags"},color:t[0]})}return o.push(...bS(r,e,t)),o}function xS({page:a,details:e,grid:t,addBlock:n}){var u;const r=(((u=e.tags)==null?void 0:u.length)??0)>4,o=r?.08:.16,s=r?1.1:1.2,c=t.worldWidth/t.cols,l=t.worldDepth/t.rows/2;let h=0;for(const[d,f]of(e.tags??[]).entries()){const g=f.split(/\s+/),v=.3*.62,p=Math.max(...g.map(L=>L.length))*v+o,m=Math.min(2,Math.max(1,Math.ceil((p+t.gap)/c),f.length>10?2:1)),b=m*c-t.gap-o,y=[""];for(const L of g){const D=y.at(-1),T=D?`${D} ${L}`:L;D&&T.length*v>b?y.push(L):y[y.length-1]=T}const _=Math.ceil((y.length*.3*s+o+t.gap)/l);n({id:`${a.id}-tag-${d}`,type:"interaction",subtype:"text",gridX:0,gridYUnit:h,gridW:m,gridHUnit:_,content:{text:y.join(`
`),fontWeight:700,fontSize:.3,lineHeight:s,padding:o},action:{type:"tag",tag:f},color:xi(a.palette??Ln),height:1.7}),h+=_}}function _S({page:a,details:e,grid:t,occupancy:n,addBlock:i,area:r}){var f;const o=e.metadata??((f=e.modal)==null?void 0:f.metadata)??{},s=[...(o.years??[]).map(g=>({value:g,kind:"year"})),...(o.organizations??[]).map(g=>({value:g,kind:"organization"}))],c=.26,l=1.1,h=.12,u=c*.62,d={cols:t.cols,rows:t.rows*2};s.forEach(({value:g,kind:v},p)=>{const m=typeof g=="object"?g.id??g.label:String(g),b=(typeof g=="object"?g.label??g.id:String(g)).toUpperCase(),y=v==="year"?1:Math.min(2,r.w),_=y*t.worldWidth/t.cols-t.gap-h,L=[""];for(const T of b.split(/\s+/)){const N=L.at(-1)?`${L.at(-1)} ${T}`:T;L.at(-1)&&N.length*u>_?L.push(T):L[L.length-1]=N}const D=Math.ceil((L.length*c*l+h+t.gap)/(t.worldDepth/t.rows/2));for(let T=r.y;T+D<=r.y+r.h;T++)for(let N=r.x;N+y<=r.x+r.w;N++)if(Go(N,T,y,D,n,d)){i({id:`${a.id}-metadata-${p}`,type:"interaction",subtype:"metadata",gridX:N,gridYUnit:T,gridW:y,gridHUnit:D,content:{text:L.join(`
`),fontSize:c,lineHeight:l,padding:h,fontWeight:700},action:{type:"tag",tag:m},metadataKind:v,color:(a.palette??Ln)[0],height:1.7});return}throw new Error(`No room for ${a.id} metadata: ${m}`)})}function SS({page:a,details:e,occupancy:t,palette:n,addBlock:i}){const r=Rc(Array.from({length:14},(s,c)=>c+3));Rc([...e.tags??[]]).forEach((s,c)=>{const l=r[c];l===void 0||!Go(0,l,1,1,t,{cols:6,rows:20})||i({id:`${a.id}-tag-${c}`,type:"interaction",subtype:"text",gridX:0,gridYUnit:l,gridW:1,gridHUnit:1,content:{text:s,fontWeight:700},action:{type:"tag",tag:s},color:xi(n),height:Ho()})});for(let s=3;s<18;s+=vn(0,1)>.25?2:1){const c=vn(0,1)>.25?2:1;Go(0,s,1,c,t,{cols:6,rows:20})&&i({id:`${a.id}-tag-filler-${s}`,type:"filler",subtype:"decorative",gridX:0,gridYUnit:s,gridW:1,gridHUnit:c,content:null,action:null,modal:null,color:xi(n),height:Aa()})}}function bS(a,e,t){const n=[];let i=0;const r={cols:e.cols,rows:e.rows*2};for(let o=0;o<r.rows;o+=1)for(let s=0;s<r.cols;s+=1){if(a[o][s])continue;const c=Kc(s,o,a,r),l=yi(1,Math.min(c,3)),h=Jc(s,o,l,a,r),u=Math.min(h,4);if(u<1)continue;const d=MS(u);Ea(s,o,l,d,a),n.push({id:`project-detail-filler-${i}`,type:"filler",subtype:"decorative",gridX:s,gridY:o/2,gridW:l,gridH:d/2,height:Aa(),color:xi(t),content:null,action:null,modal:null}),i+=1}return n}function MS(a){return vn(0,1)>.25&&a>=2?yi(1,Math.max(1,Math.floor(a/2)))*2:1}function wS(a,e,t,n){const i=a.gridRect?[a.gridRect.slice(2)]:Su[a.size]??Su.medium;for(const[r,o]of i){const s=a.gridRect?[{x:a.gridRect[0],y:a.gridRect[1]}]:CS(a.placement,t,r,o),c=a.gridRect?[]:RS(t,r,o),l=[...s,...c];for(const h of l)if(Go(h.x,h.y,r,o,e,t))return Ea(h.x,h.y,r,o,e),{...a,gridX:h.x,gridY:h.y,gridW:r,gridH:o,height:tf(a.type),color:nf(a,n)}}return null}function TS(a){return[...a].sort((e,t)=>Number(bu(t))-Number(bu(e)))}function bu(a){var e,t,n;return((e=a.action)==null?void 0:e.type)==="back"||((t=a.content)==null?void 0:t.label)==="BACK"||((n=a.id)==null?void 0:n.endsWith("-back"))}function ES(a,e,t,n){const i=[];let r=0;for(let o=0;o<e.rows;o+=1)for(let s=0;s<e.cols;s+=1){if(a[o][s])continue;const c=Kc(s,o,a,e),l=yi(1,Math.min(c,3)),h=Jc(s,o,l,a,e),u=yi(1,Math.min(h,3));Ea(s,o,l,u,a);const d={id:`filler-${r}`,type:"filler",subtype:"decorative",gridX:s,gridY:o,gridW:l,gridH:u,height:Aa(),color:xi(t),content:null,action:null,modal:null};AS(n,d)&&(d.carouselDynamic=!0),i.push(d),r+=1}return i}function AS(a,e){return(a.id==="projects"||a.template==="projectList")&&e.gridY>=2&&e.gridY<=7}function Mu(a,e,t){if(t<=0)return[];const n=[],i=e[0]??Ln[0],r=Math.floor(t),o={cols:a.cols+r*2,rows:a.rows+r*2},s=Zc(o.cols,o.rows);let c=0;for(let l=0;l<o.rows;l+=1)for(let h=0;h<o.cols;h+=1){const u=h-r,d=l-r;if(u>=0&&u<a.cols&&d>=0&&d<a.rows){s[l][h]=!0;continue}if(s[l][h]||vn(0,1)<.18)continue;const g=Kc(h,l,s,o),v=yi(1,Math.min(g,2)),p=Jc(h,l,v,s,o),m=yi(1,Math.min(p,2));Ea(h,l,v,m,s),n.push({id:`outer-filler-${c}`,type:"filler",subtype:"outerDecorative",gridX:u,gridY:d,gridW:v,gridH:m,height:PS(),color:i,content:null,action:null,modal:null}),c+=1}return n}function ac(a,e){const t=e.worldWidth/e.cols,n=e.worldDepth/e.rows,i=Math.max(.01,a.gridW*t-(a.gapX??e.gap)),r=a.imageAspectRatio&&a.imageMaxDepth?Math.min(i,a.imageMaxDepth*a.imageAspectRatio):i,o=a.imageAspectRatio?r/a.imageAspectRatio:Math.max(.1,a.gridH*n-e.gap);return{...a,worldX:a.gridX*t+a.gridW*t/2-e.worldWidth/2,worldZ:a.gridY*n+a.gridH*n/2-e.worldDepth/2,worldW:r,worldD:o}}function Zc(a,e){return Array.from({length:e},()=>Array.from({length:a},()=>!1))}function Go(a,e,t,n,i,r){if(a<0||e<0||a+t>r.cols||e+n>r.rows)return!1;for(let o=e;o<e+n;o+=1)for(let s=a;s<a+t;s+=1)if(i[o][s])return!1;return!0}function Ea(a,e,t,n,i){for(let r=e;r<e+n;r+=1)for(let o=a;o<a+t;o+=1)i[r][o]=!0}function CS(a,e,t,n){const i=e.cols-t,r=e.rows-n,o=Math.round(i/2),s=Math.round(r/2),c={hero:[[1,1],[o,1],[0,1]],top:[[o,0],[0,0],[i,0]],topRight:[[i,0],[i,1],[Math.max(0,i-1),0],[i,2]],projectCounter:[[i,2],[i,1],[Math.max(0,i-1),2]],projectRow1Title:[[0,3],[1,3],[0,2]],projectRow1TitleRight:[[1,3],[2,3],[1,2]],projectRow1TitleFarRight:[[2,3],[1,3],[2,2]],projectRow1ThumbLeft:[[0,3],[0,2],[1,3]],projectRow1ThumbLeftInset:[[1,3],[1,2],[0,3]],projectRow1Thumb:[[4,3],[5,3],[4,2]],projectRow1ThumbFarRight:[[5,3],[5,2],[4,3]],projectRow2Title:[[0,4],[1,4],[0,5]],projectRow2TitleRight:[[1,4],[2,4],[1,5]],projectRow2TitleFarRight:[[2,4],[1,4],[2,5]],projectRow2ThumbLeft:[[0,4],[0,5],[1,4]],projectRow2ThumbLeftInset:[[1,4],[1,5],[0,4]],projectRow2Thumb:[[4,4],[5,4],[4,5]],projectRow2ThumbFarRight:[[5,4],[5,5],[4,4]],projectRow3Title:[[0,5],[1,5],[0,6]],projectRow3TitleRight:[[1,5],[2,5],[1,6]],projectRow3TitleFarRight:[[2,5],[1,5],[2,6]],projectRow3ThumbLeft:[[0,5],[0,6],[1,5]],projectRow3ThumbLeftInset:[[1,5],[1,6],[0,5]],projectRow3Thumb:[[4,5],[5,5],[4,6]],projectRow3ThumbFarRight:[[5,5],[5,6],[4,5]],projectRow4Title:[[0,6],[1,6],[0,7]],projectRow4TitleRight:[[1,6],[2,6],[1,7]],projectRow4TitleFarRight:[[2,6],[1,6],[2,7]],projectRow4ThumbLeft:[[0,6],[0,7],[1,6]],projectRow4ThumbLeftInset:[[1,6],[1,7],[0,6]],projectRow4Thumb:[[4,6],[5,6],[4,7]],projectRow4ThumbFarRight:[[5,6],[5,7],[4,6]],projectRow5Title:[[0,7],[1,7],[0,6]],projectRow5TitleRight:[[1,7],[2,7],[1,6]],projectRow5TitleFarRight:[[2,7],[1,7],[2,6]],projectRow5ThumbLeft:[[0,7],[0,6],[1,7]],projectRow5ThumbLeftInset:[[1,7],[1,6],[0,7]],projectRow5Thumb:[[4,7],[5,7],[4,6]],projectRow5ThumbFarRight:[[5,7],[5,6],[4,7]],projectPrev:[[Math.max(0,o-1),Math.max(0,r-1)],[Math.max(0,o-2),Math.max(0,r-1)]],projectNext:[[Math.min(i,o+1),Math.max(0,r-1)],[Math.min(i,o+2),Math.max(0,r-1)]],topLeftStack1:[[0,0],[1,0],[0,1]],topLeftStack2:[[0,1],[1,1],[0,2]],topLeftStack3:[[0,2],[1,2],[0,3]],bottomCenter:[[o,r],[Math.max(0,o-1),r],[Math.min(i,o+1),r]],aboutTall:[[0,3],[0,4],[1,3],[o,s]],aboutPracticeTop:[[2,2],[1,2],[2,3],[o,2]],aboutHeroImage:[[i,2],[i,3],[Math.max(0,i-1),2],[i,1]],aboutImageBelow:[[i,4],[i,5],[Math.max(0,i-1),4],[i,3]],aboutWide:[[2,5],[1,6],[o,6],[o,s]],aboutLowerWide:[[1,r-2],[o,r-2],[0,r-2],[2,r-3]],bottom:[[o,r],[0,r],[i,r]],bottomRight:[[i,r],[i,Math.max(0,r-2)],[Math.max(0,i-2),r],[i,Math.max(0,r-1)],[Math.max(0,i-1),r],[o,r],[i,s]],bottomRightTop:[[0,Math.max(0,r-2)],[1,Math.max(0,r-2)],[Math.max(0,i-1),Math.max(0,r-2)],[Math.max(0,i-2),Math.max(0,r-2)],[i,Math.max(0,r-2)],[i,Math.max(0,r-3)],[i,r]],bottomRightLowerLeft:[[Math.max(0,i-2),r],[Math.max(0,i-1),r],[i,r],[Math.max(0,i-2),Math.max(0,r-1)]],bottomRightLowerRight:[[i,r],[Math.max(0,i-1),r],[i,Math.max(0,r-1)],[Math.max(0,i-2),r]],left:[[0,s],[0,1],[0,r]],right:[[i,s],[i,1],[i,r]],center:[[o,s],[o,Math.max(0,s-1)],[Math.max(0,o-1),s]],corner:[[0,0],[i,0],[0,r],[i,r]],auto:[]};return(c[a]??c.auto).map(([l,h])=>({x:Math.max(0,Math.min(i,l)),y:Math.max(0,Math.min(r,h))}))}function RS(a,e,t){const n=[];for(let i=0;i<=a.rows-t;i+=1)for(let r=0;r<=a.cols-e;r+=1)n.push({x:r,y:i});return n}function Rc(a){const e=[...a];for(let t=e.length-1;t>0;t-=1){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Kc(a,e,t,n){let i=0;for(;a+i<n.cols&&!t[e][a+i];)i+=1;return Math.max(1,i)}function Jc(a,e,t,n,i){let r=0;for(;e+r<i.rows;){for(let o=a;o<a+t;o+=1)if(n[e+r][o])return Math.max(1,r);r+=1}return Math.max(1,r)}function tf(a){return a==="filler"?Aa():Ho()}function Ho(){return vn(Jn.content.min,Jn.content.max)}function Aa(){return vn(Jn.filler.min,Jn.filler.max)}function PS(){return vn(Jn.fillerRing.min,Jn.fillerRing.max)}function nf(a,e){return a.color?a.color:a.type==="interaction"||a.type==="moreInfo"?e[yi(1,e.length-1)]??e[0]:e[0]??Ln[0]}function Qe(a,e,t){const n=document.createElement(a);return e&&(n.className=e),t&&(n.textContent=t),n}function DS(a=[]){const e=[],t=[];let n=e,i=null;for(const r of a)if(r.type==="heading"){const o={title:r.content,sections:[]};t.push(o),n=o.sections}else!i&&n===e&&r.type==="image"?i=r:n.push(r);return{hero:i,introduction:e,chapters:t}}class LS{constructor(){this.root=Qe("div","cricket-details"),this.root.hidden=!0,this.root.setAttribute("role","dialog"),this.root.setAttribute("aria-modal","true"),this.root.setAttribute("aria-labelledby","cricket-details-title"),this.root.tabIndex=-1,document.body.appendChild(this.root),this.closeTimer=null,window.addEventListener("keydown",e=>{if(!this.root.hidden)if(e.key==="Escape"){if(document.fullscreenElement)return;e.preventDefault(),this.dismiss()}else e.key==="Tab"&&this.keepFocus(e)},!0),window.addEventListener("hashchange",()=>{this.routeManaged||(this.afterClose=null,this.close(!0))})}open(e,t,{onTag:n,onDismiss:i,routeManaged:r=!1}={}){var b,y,_;clearTimeout(this.closeTimer),this.afterClose=null,this.onTag=n,this.onDismiss=i,this.routeManaged=r,this.root.dataset.kind=e.kind??"project",this.root.hidden&&(this.previousFocus=document.activeElement,this.scene=document.querySelector("#scene"),this.sceneWasInert=(b=this.scene)==null?void 0:b.inert,this.sceneAriaHidden=(y=this.scene)==null?void 0:y.getAttribute("aria-hidden"),this.scene&&(this.scene.inert=!0,this.scene.setAttribute("aria-hidden","true"))),this.root.querySelectorAll("video").forEach(L=>L.pause()),this.root.replaceChildren();const o=Math.min(window.innerWidth,Math.max(0,(t==null?void 0:t.x)??window.innerWidth/2)),s=Math.min(window.innerHeight,Math.max(0,(t==null?void 0:t.y)??window.innerHeight/2));this.root.style.setProperty("--reveal-x",`${o}px`),this.root.style.setProperty("--reveal-y",`${s}px`);const c=Qe("div","cricket-details__foundation");c.setAttribute("aria-hidden","true"),this.root.appendChild(c),this.scroll=Qe("div","cricket-details__scroll"),this.root.appendChild(this.scroll),this.scroll.appendChild(this.createToolbar(e));const l=Qe("article","cricket-details__article"),{hero:h,introduction:u,chapters:d}=DS(e.sections);l.appendChild(this.createCover(e,h));const f=[],g=[...u];for(;((_=g[0])==null?void 0:_.type)==="text";)f.push(g.shift());if(f.length){const L=Qe("section","cricket-introduction"),D=this.panel("cricket-introduction__label","expand");D.append(Qe("p","cricket-eyebrow",e.introLabel??"THE PROJECT")),e.introHeading&&D.append(Qe("h3","",e.introHeading));const T=this.panel("cricket-introduction__copy","right");f.forEach(N=>T.appendChild(this.createContent(N))),L.append(D,T),l.appendChild(L)}g.length&&l.appendChild(this.createChapter({sections:g},-1)),d.forEach((L,D)=>l.appendChild(this.createChapter(L,D)));const v=this.panel("cricket-details__footer","left"),p=Qe("button","cricket-return",e.returnLabel??"BACK TO PROJECT");p.type="button";const m=Qe("span","","←");m.setAttribute("aria-hidden","true"),p.append(m),p.addEventListener("click",()=>this.dismiss()),v.appendChild(p),l.appendChild(v),this.scroll.appendChild(l),this.root.hidden=!1,this.root.dataset.state="open",this.scroll.scrollTop=0,this.root.focus({preventScroll:!0})}createToolbar(e){const t=Qe("header","cricket-toolbar"),n=this.panel("cricket-toolbar__label","left");n.append(Qe("span","",e.eyebrow??"PROJECT")),n.append(Qe("span","cricket-toolbar__name",e.title));const i=this.panel("cricket-toolbar__accent","expand");i.setAttribute("aria-hidden","true"),this.closeButton=Qe("button","cricket-panel cricket-close"),this.closeButton.dataset.enter="right",this.closeButton.type="button",this.closeButton.setAttribute("aria-label",e.closeLabel??"Close project details");const r=Qe("span","cricket-close__cross");return r.setAttribute("aria-hidden","true"),this.closeButton.appendChild(r),this.closeButton.addEventListener("click",()=>this.dismiss()),t.append(n,i,this.closeButton),t}createCover(e,t){const n=Qe("div","cricket-cover"),i=this.panel("cricket-cover__title","left");i.style.setProperty("--enter-delay","45ms");const r=Qe("h2","",e.title);r.id="cricket-details-title",i.appendChild(r);const o=this.panel("cricket-cover__accent","expand");o.style.setProperty("--enter-delay","100ms"),o.setAttribute("aria-hidden","true"),n.append(i,o),n.classList.toggle("cricket-cover--without-media",!t);const s=this.createMetadata(e);if(n.classList.toggle("cricket-cover--without-context",!s),s&&n.appendChild(s),t){const c=this.panel("cricket-cover__media","right");c.style.setProperty("--enter-delay","70ms"),c.appendChild(this.createImage(t,!0)),n.appendChild(c)}return n}createMetadata(e){const t=e.metadata??{},n=e.metadata!=null,i=t.years??[],r=t.organizations??[];if(!i.length&&!r.length&&!t.role&&!t.status&&(n||!e.context))return null;const o=this.panel("cricket-cover__context","left");o.style.setProperty("--enter-delay","90ms"),t.role&&o.appendChild(Qe("p","cricket-eyebrow",t.role)),t.status&&o.appendChild(Qe("p","cricket-eyebrow",t.status));const s=Qe("div","cricket-metadata");for(const[c,l]of[["Year",i],["Organization",r]]){if(!l.length)continue;const h=Qe("div","cricket-metadata__group");h.appendChild(Qe("span","cricket-metadata__label",c));const u=Qe("div","cricket-metadata__values");for(const d of l){const f=typeof d=="object"?d:{id:String(d),label:String(d)},g=Qe(this.onTag?"button":"span","cricket-tag",f.label??f.id);this.onTag&&(g.type="button",g.setAttribute("aria-label",`View projects tagged ${f.label??f.id}`),g.addEventListener("click",()=>{const v=this.onTag;this.close(!1,()=>v(f.id??f.label))})),u.appendChild(g)}h.appendChild(u),s.appendChild(h)}return s.childElementCount&&o.appendChild(s),!n&&e.context&&o.appendChild(Qe("p","",e.context)),o}createChapter(e,t){var o;const n=Qe("section",`cricket-chapter cricket-chapter--${t+1}`);if(e.title){const s=this.panel("cricket-chapter__heading",t%2?"right":"left"),c=Qe("h3","",e.title);c.id=`cricket-chapter-${t+1}`,n.setAttribute("aria-labelledby",c.id),s.append(Qe("span","cricket-eyebrow",String(t+1).padStart(2,"0")),c),n.appendChild(s)}let i=[];const r=(s=null)=>{if(!i.length&&!s)return;const c=i.length?s?"paired":"text":"media",l=Qe("div",`cricket-story-row cricket-story-row--${c}`);if(i.length){const h=this.panel("cricket-chapter__copy","left");i.forEach(u=>h.appendChild(this.createContent(u))),l.appendChild(h)}if(s)if(s.type==="gallery")l.appendChild(this.createContent(s));else{const h=this.panel("cricket-media","right");h.appendChild(this.createContent(s)),l.appendChild(h)}n.appendChild(l),i=[]};for(const s of e.sections)if(s.type==="text")i.push(s);else if(s.type==="link"){r();const c=this.panel("cricket-link-panel","right");c.appendChild(this.createContent(s)),n.appendChild(c)}else if(["image","video","gallery"].includes(s.type)){if(s.type==="gallery"&&!((o=s.images)!=null&&o.length))continue;s.fullWidth&&r(),r(s)}return r(),n}panel(e,t){const n=Qe("div",`cricket-panel ${e}`);return n.dataset.enter=t,n}createContent(e){if(e.type==="image")return this.createImage(e);if(e.type==="gallery"){const t=Qe("div","cricket-gallery");for(const n of e.images??[]){const i=this.panel("cricket-media","right");i.appendChild(this.createImage(n)),t.appendChild(i)}return t}if(e.type==="video"){const t=Qe("figure","cricket-figure"),n=Qe("video");return n.src=e.src,n.controls=!0,n.playsInline=!0,n.preload="none",n.setAttribute("aria-label",e.caption??"Project video"),e.poster&&(n.poster=e.poster),t.appendChild(n),e.caption&&t.appendChild(Qe("figcaption","",e.caption)),t}if(e.type==="link"){const t=Qe("a","cricket-link",e.label??"View project");t.href=e.url,t.target="_blank",t.rel="noopener noreferrer";const n=Qe("span","","↗");return n.setAttribute("aria-hidden","true"),t.appendChild(n),t}return Qe("p","",e.content)}createImage(e,t=!1){const n=Qe("figure","cricket-figure"),i=Qe("img");return i.src=e.src,i.alt=e.alt??e.caption??"",e.width>0&&(i.width=e.width),e.height>0&&(i.height=e.height),i.loading=t?"eager":"lazy",i.decoding="async",n.appendChild(i),e.caption&&n.appendChild(Qe("figcaption","",e.caption)),n}dismiss(){this.close(!1,this.onDismiss)}close(e=!1,t){if(this.root.hidden||(e&&(this.afterClose=null),t&&(this.afterClose=t),this.root.dataset.state==="closing"&&!e))return;clearTimeout(this.closeTimer),this.root.querySelectorAll("video").forEach(i=>i.pause()),this.root.querySelectorAll(".cricket-panel").forEach(i=>{const r=getComputedStyle(i);i.style.setProperty("--close-transform",r.transform),i.style.setProperty("--close-opacity",r.opacity),i.style.setProperty("--close-clip",r.clipPath)}),this.root.dataset.state="closing";const n=()=>{var o;this.root.hidden=!0,this.root.replaceChildren(),this.scene&&(this.scene.inert=this.sceneWasInert,this.sceneAriaHidden===null?this.scene.removeAttribute("aria-hidden"):this.scene.setAttribute("aria-hidden",this.sceneAriaHidden));const i=(o=this.previousFocus)!=null&&o.isConnected&&this.previousFocus!==document.body?this.previousFocus:this.scene;if(i){const s=i.getAttribute("tabindex");s===null&&i.setAttribute("tabindex","-1"),i.focus({preventScroll:!0}),s===null&&i.removeAttribute("tabindex")}const r=this.afterClose;this.afterClose=null,r==null||r()};e||window.matchMedia("(prefers-reduced-motion: reduce)").matches?n():this.closeTimer=setTimeout(n,280)}keepFocus(e){const t=[...this.root.querySelectorAll("button, a[href], video[controls]")],n=t[0],i=t.at(-1);e.shiftKey&&(document.activeElement===n||document.activeElement===this.root)?(e.preventDefault(),i==null||i.focus()):!e.shiftKey&&(document.activeElement===i||document.activeElement===this.root)&&(e.preventDefault(),n==null||n.focus())}}class IS{constructor(){this.projectDetails=new LS,this.overlay=document.querySelector("[data-modal-overlay]"),this.dialog=document.querySelector("[data-modal-dialog]"),this.title=document.querySelector("[data-modal-title]"),this.body=document.querySelector("[data-modal-body]"),this.closeButton=document.querySelector("[data-modal-close]"),this.previousFocus=null,this.closeButton.addEventListener("click",()=>this.closeModal()),this.overlay.addEventListener("click",e=>{e.target===this.overlay&&this.closeModal()}),window.addEventListener("keydown",e=>{this.overlay.hidden||(e.key==="Escape"&&this.closeModal(),e.key==="Tab"&&this.keepFocusInDialog(e))})}openModal(e,{projectId:t,projectDetails:n,origin:i,onTag:r}={}){if(n||t==="liveBallData"){this.closeModal(),this.projectDetails.open(e,i,{onTag:r});return}if(this.projectDetails.close(!0),this.previousFocus=document.activeElement,this.title.textContent=e.title??"More Info",this.body.replaceChildren(),e.context){const o=this.createTextSection({content:e.context});o.className="modal-context",this.body.appendChild(o)}for(const o of e.sections??[])if(o.type==="image")this.body.appendChild(this.createImageSection(o));else if(o.type==="gallery"){const s=document.createElement("div");s.className="modal-gallery";for(const c of o.images??[])s.appendChild(this.createImageSection(c));this.body.appendChild(s)}else if(o.type==="heading"){const s=document.createElement("h3");s.textContent=o.content??"",this.body.appendChild(s)}else if(o.type==="link"){const s=document.createElement("a");s.className="modal-link",s.textContent=o.label??"View project",s.href=o.url,s.target="_blank",s.rel="noopener noreferrer",this.body.appendChild(s)}else o.type==="video"?this.body.appendChild(this.createVideoSection(o)):this.body.appendChild(this.createTextSection(o));this.overlay.hidden=!1,this.dialog.scrollTop=0,this.dialog.focus()}openPage(e,{origin:t,onDismiss:n}={}){this.closeModal(),this.projectDetails.open(e,t,{onDismiss:n,routeManaged:!0})}closePage(){this.projectDetails.close(!0)}closeModal(){var e;this.overlay.hidden||(this.body.querySelectorAll("video").forEach(t=>t.pause()),this.overlay.hidden=!0,(e=this.previousFocus)==null||e.focus())}keepFocusInDialog(e){const t=[...this.dialog.querySelectorAll('button, a[href], video[controls], [tabindex="0"]')],n=t[0],i=t.at(-1);e.shiftKey&&(document.activeElement===n||document.activeElement===this.dialog)?(e.preventDefault(),i==null||i.focus()):!e.shiftKey&&(document.activeElement===i||document.activeElement===this.dialog)&&(e.preventDefault(),n==null||n.focus())}createTextSection(e){const t=document.createElement("p");return t.textContent=e.content??"",t}createImageSection(e){const t=document.createElement("figure"),n=document.createElement("img");if(n.src=e.src,n.alt=e.alt??e.caption??"",n.loading="lazy",n.decoding="async",t.appendChild(n),e.caption){const i=document.createElement("figcaption");i.textContent=e.caption,t.appendChild(i)}return t}createVideoSection(e){const t=document.createElement("figure"),n=document.createElement("video");if(n.src=e.src,n.controls=!0,n.playsInline=!0,n.preload="none",n.setAttribute("aria-label",e.caption??"Project video"),e.poster&&(n.poster=e.poster),t.appendChild(n),e.caption){const i=document.createElement("figcaption");i.textContent=e.caption,t.appendChild(i)}return t}}class US{constructor(e,t="home"){this.pages=new Map(e.pages.map(n=>[n.id,n])),this.currentPageId=t}getCurrentPage(){return this.pages.get(this.currentPageId)}getPage(e){return this.pages.get(e)}upsertPage(e){return this.pages.set(e.id,e),e}goToPage(e){if(!this.pages.has(e))throw new Error(`Unknown page id: ${e}`);return this.currentPageId=e,this.getCurrentPage()}}class NS{constructor({duration:e=420,stagger:t=16,ringDuration:n=300,ringDelaySpread:i=90,overlapDelay:r=180,floorY:o=0,hideMargin:s=.18,timeScale:c=1,pageTimeScale:l=1}={}){this.timeScale=c,this.duration=e*c*l,this.stagger=t*c*l,this.ringDuration=n*c*l,this.ringDelaySpread=i*c*l,this.overlapDelay=r*c,this.floorY=o,this.hideMargin=s,this.isTransitioning=!1}async transitionToPage({oldGroup:e,newGroupFactory:t,scene:n,restoreGrid:i,moveCamera:r,clearGrid:o}){if(this.isTransitioning)return e;this.isTransitioning=!0;const s=t();n.add(s),this.setGroupProgress(s,0);try{return e&&await this.animateGroup(e,"exit"),e&&(n.remove(e),oc(e)),await(i==null?void 0:i()),await(r==null?void 0:r()),await(o==null?void 0:o(s)),await this.animateGroup(s,"enter"),s}finally{this.isTransitioning=!1}}async replaceChildren({parent:e,oldChildren:t,newChildren:n,onTransitionStart:i}){return this.isTransitioning?!1:(this.isTransitioning=!0,n.forEach(r=>{e.add(r),this.setGroupProgress(r,0)}),i==null||i(),t.length>0&&await this.animateObjects(t,"exit"),t.forEach(r=>{e.remove(r),oc(r)}),await this.animateObjects(n,"enter"),this.isTransitioning=!1,!0)}animateGroup(e,t){if(e.userData.transitionGroups)return Promise.all(e.userData.transitionGroups.map(s=>this.animateGroup(s,t)));const{centralMeshes:n,ringMeshes:i}=Eu(e),r=this.animateMeshes(n.sort((s,c)=>s.getWorldPosition(wu).x-c.getWorldPosition(Tu).x),t,{duration:this.duration,delays:n.map((s,c)=>c*this.stagger)}),o=this.animateMeshes(i,t,{duration:this.ringDuration,delays:i.map(()=>Math.random()*this.ringDelaySpread)});return Promise.all([r,o])}setProjectTileActive(e,t,n=1){e.visible=t,Ao(e).forEach(i=>{i.userData.skipPageTransition=!t}),this.setGroupProgress(e,t?n:0)}async transitionProjectTile({newTile:e,moveCamera:t,clearGrid:n}){if(!this.isTransitioning){this.isTransitioning=!0;try{await t(),e.visible||(this.setProjectTileActive(e,!0,0),await(n==null?void 0:n()),await this.animateObjects([e],"enter",{duration:260*this.timeScale,stagger:4*this.timeScale}))}finally{this.isTransitioning=!1}}}async returnThroughGallery({gallery:e,returnPlan:t,newGroupFactory:n,scene:i,moveToDestination:r,restoreGrid:o,clearGrid:s,updateGrid:c,prepareFinalTile:l}){if(this.isTransitioning)return e;this.isTransitioning=!0;try{const h=l==null?void 0:l(t.finalTile),u=new Map,d=v=>{for(const p of t.departures){if(v<p.progress||u.has(p.tile))continue;const m=this.animateObjects([p.tile],"exit",{duration:220*this.timeScale,stagger:4*this.timeScale}).then(async()=>{this.setProjectTileActive(p.tile,!1),await o(e)});u.set(p.tile,m)}};d(0),await r(d),d(1),await Promise.all([...u.values(),h]);const{finalTile:f}=t;f&&(await this.animateGroup(f,"exit"),this.setProjectTileActive(f,!1)),i.remove(e),oc(e);const g=n();return this.setGroupProgress(g,0),i.add(g),f?c(g):await s(g),await this.animateGroup(g,"enter"),g}finally{this.isTransitioning=!1}}animateObjects(e,t,{duration:n=this.duration,stagger:i=this.stagger}={}){const r=e.flatMap(o=>Ao(o)).sort((o,s)=>o.getWorldPosition(wu).x-s.getWorldPosition(Tu).x);return this.animateMeshes(r,t,{duration:n,delays:r.map((o,s)=>s*i)})}getGroupAnimationDuration(e){if(e.userData.transitionGroups)return Math.max(0,...e.userData.transitionGroups.map(i=>this.getGroupAnimationDuration(i)));const{centralMeshes:t,ringMeshes:n}=Eu(e);return Math.max(this.getSteppedAnimationDuration(t,this.duration,this.stagger),this.getSpreadAnimationDuration(n,this.ringDuration,this.ringDelaySpread))}getSteppedAnimationDuration(e,t,n){return e.length===0?0:t+(e.length-1)*n}getSpreadAnimationDuration(e,t,n){return e.length===0?0:t+n}animateMeshes(e,t,{duration:n,delays:i}){if(e.length===0)return Promise.resolve();const r=n+Math.max(...i),o=performance.now();return new Promise(s=>{const c=l=>{const h=l-o;if(e.forEach((u,d)=>{const f=h-i[d],g=OS(f/n,0,1),v=FS(g),p=t==="enter"?v:1-v;this.setMeshProgress(u,p)}),h>=r){e.forEach(u=>this.setMeshProgress(u,t==="enter"?1:0)),s();return}requestAnimationFrame(c)};requestAnimationFrame(c)})}setGroupProgress(e,t){Ao(e).forEach(n=>this.setMeshProgress(n,n.userData.skipPageTransition?0:t))}setMeshProgress(e,t){const n=e.userData.originalHeight??1,i=e.userData.originalY??n/2,r=.001,o=Math.max(r,t),s=this.floorY-this.hideMargin-n*r/2;e.scale.y=o,e.position.y=kS(s,i,t)}}const wu=new X,Tu=new X;function Ao(a){const e=[];return a.traverse(t=>{var n;(n=t.userData)!=null&&n.isBlockMesh&&e.push(t)}),e}function Eu(a){const e=[],t=[];return Ao(a).forEach(n=>{var i;n.userData.skipPageTransition||(((i=n.userData.blockData)==null?void 0:i.subtype)==="outerDecorative"?t.push(n):e.push(n))}),{centralMeshes:e,ringMeshes:t}}function oc(a){a.traverse(e=>{var n,i;(i=(n=e.geometry)==null?void 0:n.dispose)==null||i.call(n),(Array.isArray(e.material)?e.material:[e.material]).forEach(r=>{var o;(o=r==null?void 0:r.dispose)==null||o.call(r)})})}function FS(a){return a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2}function OS(a,e,t){return Math.max(e,Math.min(t,a))}function kS(a,e,t){return a+(e-a)*t}const rf=["projects","experiments","teaching"];function Co(a){if(Array.isArray(a))return a.reduce((t,n)=>Math.max(t,Co(n)),-1/0);if(a&&typeof a=="object")return Math.max(Co(a.id),Co(a.label));const e=String(a??"").match(new RegExp("(?<!\\d)\\d{4}(?!\\d)","g"));return e?Math.max(...e.map(Number)):-1/0}function Ca(a,e=[]){const t=new Map(e.map(n=>[n.id,n.projectDetails]));return[...(a==null?void 0:a.projectItems)??[]].reverse().map((n,i)=>{var s,c,l,h;const r=t.get(n.target),o=((s=r==null?void 0:r.metadata)==null?void 0:s.years)??((l=(c=r==null?void 0:r.modal)==null?void 0:c.metadata)==null?void 0:l.years)??((h=n.metadata)==null?void 0:h.years)??n.years??n.year;return{item:n,order:i,year:Co(o)}}).sort((n,i)=>n.year===i.year?n.order-i.order:i.year-n.year).map(({item:n})=>n)}function Pc(a,e){var n;if(!rf.includes(e))return e;const t=a.find(i=>i.id===e);return((n=Ca(t,a)[0])==null?void 0:n.target)??"home"}function Fr(a,e){const t=a.find(r=>{var o;return rf.includes(r.id)&&((o=r.projectItems)==null?void 0:o.some(s=>s.target===e))});if(!t)return null;const n=Ca(t,a),i=n.findIndex(r=>r.target===e);return{categoryId:t.id,index:i,count:n.length,pageIds:n.map(r=>r.target),previousPageId:n[(i-1+n.length)%n.length].target,nextPageId:n[(i+1)%n.length].target}}const Au=11.2,Cu=Math.PI/6;function Ra(a){return new X(a*Au*Math.cos(Cu),0,-a*Au*Math.sin(Cu))}function BS(a,e,t){const n=a.find(r=>r.id===e),i=new An;i.name=`gallery-${e}`,i.userData.categoryId=e,i.userData.transitionGroups=[],i.userData.projectTiles=new Map,i.userData.visitedPageIds=[];for(const[r,o]of Ca(n,a).entries()){const s=a.find(l=>l.id===o.target),c=t(s,Fr(a,s.id));c.userData.projectPageId=o.target,c.position.copy(Ra(r)),i.add(c),i.userData.projectTiles.set(s.id,c),i.userData.transitionGroups.push(c)}return i.updateMatrixWorld(!0),i}function af(a,e){if(!a.userData.projectTiles.has(e))throw new Error(`Unknown gallery project: ${e}`);const t=a.userData.visitedPageIds,n=t.indexOf(e);n!==-1&&t.splice(n,1),t.push(e)}function zS(a){return[...a.userData.visitedPageIds].reverse().map(e=>a.userData.projectTiles.get(e)).filter(e=>e.visible)}function GS(a,e,t=new X){const n=a.userData.projectTiles.get(e).position,i=t.clone().sub(n),r=i.lengthSq(),o=zS(a),s=o.find(l=>l.position.distanceToSquared(t)<4e-4),c=o.filter(l=>l!==s).map(l=>({tile:l,progress:r>4e-4?Pt.clamp(l.position.clone().sub(n).dot(i)/r,0,1):0}));return{finalTile:s,departures:c}}const xr=1.2,_r=1,en=.08,ra=.18,So=16384,Ru=[[[0,0,2,2]],[[0,0,1,2],[1,0,1,2]],[[0,0,2,1],[0,1,2,1]],[[0,0,1,1],[1,0,1,1],[0,1,1,1],[1,1,1,1]],[[0,0,2,1],[0,1,1,1],[1,1,1,1]]];function Pu(a,e,t=0){const n=Math.sin(a*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)}function wn(a){const e=[],t=new Map,n=new Map,i=new X;for(const r of a.filter(Boolean))r.updateMatrixWorld(!0),r.traverseVisible(o=>{const s=o.userData.blockData;if(!s||!o.userData.mesh)return;o.getWorldPosition(i);const c={minX:i.x-(s.worldW+(s.gapX??en))/2,maxX:i.x+(s.worldW+(s.gapX??en))/2,minZ:i.z-(s.worldD+en)/2,maxZ:i.z+(s.worldD+en)/2};if(s.outsideProject)if(s.subtype==="pageIndicator"){const l=t.get(o.parent);l?(l.minX=Math.min(l.minX,c.minX),l.maxX=Math.max(l.maxX,c.maxX),l.minZ=Math.min(l.minZ,c.minZ),l.maxZ=Math.max(l.maxZ,c.maxZ)):t.set(o.parent,c)}else e.push(c);else{const l=n.get(o.parent);l?(l.minX=Math.min(l.minX,c.minX),l.maxX=Math.max(l.maxX,c.maxX),l.minZ=Math.min(l.minZ,c.minZ),l.maxZ=Math.max(l.maxZ,c.maxZ)):n.set(o.parent,c)}});return[...n.values(),...e,...t.values()]}function _a(a,e){return a.minX<e.maxX&&a.maxX>e.minX&&a.minZ<e.maxZ&&a.maxZ>e.minZ}function $c(a,e){if(!_a(a,e))return[a];const t=Math.max(a.minX,e.minX),n=Math.min(a.maxX,e.maxX),i=Math.max(a.minZ,e.minZ),r=Math.min(a.maxZ,e.maxZ);return[{...a,maxX:t},{...a,minX:n},{minX:t,maxX:n,minZ:a.minZ,maxZ:i},{minX:t,maxX:n,minZ:r,maxZ:a.maxZ}].filter(o=>o.maxX-o.minX>en&&o.maxZ-o.minZ>en)}function HS(a,e){let t=[a];const n=[];for(const i of e)t=t.flatMap(r=>_a(r,i)?(n.push({minX:Math.max(r.minX,i.minX),maxX:Math.min(r.maxX,i.maxX),minZ:Math.max(r.minZ,i.minZ),maxZ:Math.min(r.maxZ,i.maxZ)}),$c(r,i)):[r]);return n}function Du(a,e){return e.reduce((t,n)=>t.flatMap(i=>$c(i,n)),a)}function Lu({minX:a,maxX:e,minZ:t,maxZ:n},i=[],r=null){const o=[];for(let c=t;c<=n;c++)for(let l=a;l<=e;l++){const h=Ru[Math.floor(Pu(l,c)*Ru.length)],u={minX:l*2*xr,maxX:(l+1)*2*xr,minZ:c*2*_r,maxZ:(c+1)*2*_r},d=i.filter(g=>_a(u,g)),f=r==null?void 0:r.filter(g=>_a(u,g));f&&!f.length||h.forEach(([g,v,p,m],b)=>{let y=[{minX:(l*2+g)*xr,maxX:(l*2+g+p)*xr,minZ:(c*2+v)*_r,maxZ:(c*2+v+m)*_r}];f&&(y=HS(y[0],f));for(const _ of d)if(y=y.flatMap(L=>$c(L,_)),!y.length)break;o.push(...y.map(_=>({..._,height:.3+Pu(l,c,b+1)*.45})))})}return VS(o).filter(c=>c.maxX-c.minX-en>=ra-1e-8&&c.maxZ-c.minZ-en>=ra-1e-8).map(c=>({x:(c.minX+c.maxX)/2,z:(c.minZ+c.maxZ)/2,width:Math.max(ra,c.maxX-c.minX-en),depth:Math.max(ra,c.maxZ-c.minZ-en),height:c.height}))}function VS(a){const e=ra+en;for(let t=0;t<a.length;t++){const n=a[t],i=n.maxX-n.minX<e-1e-8,r=n.maxZ-n.minZ<e-1e-8;if(!i&&!r)continue;const o=r?"Z":"X",s=r?"X":"Z";for(let c=0;c<a.length;c++){if(t===c)continue;const l=a[c];if(!(Math.abs(n[`max${o}`]-l[`min${o}`])<1e-8||Math.abs(l[`max${o}`]-n[`min${o}`])<1e-8))continue;const u=Math.max(n[`min${s}`],l[`min${s}`]),d=Math.min(n[`max${s}`],l[`max${s}`]),f=Math.min(n[`min${o}`],l[`min${o}`]),g=Math.max(n[`max${o}`],l[`max${o}`]);if(d-u<e-1e-8||g-f<e-1e-8||[u-l[`min${s}`],l[`max${s}`]-d].some(b=>b>1e-8&&b<e-1e-8))continue;const p={...l,[`min${s}`]:u,[`max${s}`]:d,[`min${o}`]:f,[`max${o}`]:g},m=[n,l].flatMap(b=>[{...b,[`max${s}`]:u},{...b,[`min${s}`]:d}]).filter(b=>b.maxX-b.minX>en&&b.maxZ-b.minZ>en);a.splice(Math.max(t,c),1),a.splice(Math.min(t,c),1),a.push(p,...m),t=-1;break}}return a}class WS extends An{constructor(){super(),this.name="infinite-background-grid",this.lastBounds="",this.exclusions=[],this.gridTransitions=[],this.renderedBlocks=[],this.staticBlockCount=0,this.lastProgress=null,this.raycaster=new kd,this.ground=new jn(new X(0,1,0),0),this.corner=new _e,this.intersection=new X,this.transform=new yt;const e=new Wi(1,1,1);this.blocks=new ox(e,new Xc({color:"#f7f3e8",roughness:.82,metalness:0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),So),this.blocks.instanceMatrix.setUsage(xs),this.blocks.castShadow=!0,this.blocks.receiveShadow=!0,this.blocks.frustumCulled=!1,this.blocks.count=0,this.add(this.blocks);const t=new Od,n=new Ld(e);t.setAttribute("position",n.getAttribute("position")),this.offsets=new ga(new Float32Array(So*3),3).setUsage(xs),this.sizes=new ga(new Float32Array(So*3),3).setUsage(xs),t.setAttribute("instanceOffset",this.offsets),t.setAttribute("instanceSize",this.sizes),t.instanceCount=0,this.edges=new Ad(t,new ei({vertexShader:`
        attribute vec3 instanceOffset;
        attribute vec3 instanceSize;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position * instanceSize + instanceOffset, 1.0);
        }
      `,fragmentShader:"void main() { gl_FragColor = vec4(vec3(0.067), 1.0); }",toneMapped:!1})),this.edges.frustumCulled=!1,this.edges.renderOrder=2,this.add(this.edges)}setExclusions(e){this.exclusions=e,this.lastBounds=""}animateExclusions(e,{duration:t=360}={}){const n=[{regions:Du(this.exclusions,e),filling:!0,progress:0},{regions:Du(e,this.exclusions),filling:!1,progress:1}].filter(i=>i.regions.length);for(const i of n)if(this.gridTransitions.some(r=>r.regions.some(o=>i.regions.some(s=>_a(o,s)))))throw new Error("Wait for this grid area to finish animating before changing it again");return this.setExclusions(e),this.gridTransitions.push(...n),Promise.all(n.map(i=>this.animateGridRegion(i,t)))}animateGridRegion(e,t){const n=performance.now();return new Promise(i=>{const r=o=>{const s=Math.min(1,Math.max(0,(o-n)/Math.max(1,t))),c=s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;e.progress=e.filling?c:1-c,s<1?requestAnimationFrame(r):(this.gridTransitions=this.gridTransitions.filter(l=>l!==e),this.lastBounds="",i())};requestAnimationFrame(r)})}update(e){e.updateMatrixWorld();let t=1/0,n=-1/0,i=1/0,r=-1/0;for(const h of[-1,1])for(const u of[-1,1])this.raycaster.setFromCamera(this.corner.set(h,u),e),this.raycaster.ray.intersectPlane(this.ground,this.intersection)&&(t=Math.min(t,this.intersection.x),n=Math.max(n,this.intersection.x),i=Math.min(i,this.intersection.z),r=Math.max(r,this.intersection.z));if(!Number.isFinite(t))return;const o={minX:Math.floor(t/(xr*2))-3,maxX:Math.ceil(n/(xr*2))+3,minZ:Math.floor(i/(_r*2))-3,maxZ:Math.ceil(r/(_r*2))+3},s=JSON.stringify(o);if(s!==this.lastBounds){this.lastBounds=s;const h=this.gridTransitions.flatMap(f=>f.regions),u=Lu(o,[...this.exclusions,...h]),d=this.gridTransitions.flatMap(f=>Lu(o,[],f.regions).map(g=>({...g,transition:f})));this.renderedBlocks=[...u,...d],this.staticBlockCount=u.length,this.lastProgress=null}const c=this.gridTransitions.map(h=>h.progress).join(",");if(c===this.lastProgress)return;this.lastProgress=c;const l=this.renderedBlocks;if(l.length>So)throw new Error("Background grid exceeds its rendering capacity");l.forEach((h,u)=>{var p;const d=((p=h.transition)==null?void 0:p.progress)??1,f=h.height*Math.max(.001,d),g=-.18-h.height*.001/2,v=d===1?h.height/2:Pt.lerp(g,h.height/2,d);this.transform.position.set(h.x,v,h.z),this.transform.scale.set(h.width,f,h.depth),this.transform.updateMatrix(),this.blocks.setMatrixAt(u,this.transform.matrix),this.offsets.setXYZ(u,h.x,v,h.z),this.sizes.setXYZ(u,h.width,f,h.depth)}),this.blocks.count=l.length,this.blocks.instanceMatrix.needsUpdate=!0,this.edges.geometry.instanceCount=l.length,this.offsets.needsUpdate=!0,this.sizes.needsUpdate=!0}}const Vo=Object.freeze({cameraY:8.2,polarAngleDegrees:40,azimuthAngleDegrees:30,zoom:1.2,framingZoom:1.05});function jS(a,e=!1){return a<=1024||e?"mobile":"desktop"}function XS(a,e,t=Vo){return of(a,e,ZS,t,4)}function YS(a,e,t,n=a<=1024){const i={...Vo,polarAngleDegrees:.5,azimuthAngleDegrees:0,framingZoom:1},r=of(a,e,[t],i,n?12:24),o=r.targetOffset;return{...i,viewSize:r.viewSize,target:o,position:o.clone().add(Qc(i))}}function of(a,e,t,n,i){const r=Qc(n).normalize(),o=new X(r.z,0,-r.x).normalize(),s=new X().crossVectors(r,o),c=new Bd,l=new X;for(const g of t)for(const v of[g.minX,g.maxX])for(const p of[g.minZ,g.maxZ])for(const m of[0,g.height])l.set(v,m,p),c.expandByPoint(new _e(l.dot(o),l.dot(s)));const h=c.getCenter(new _e),u=c.getSize(new _e),d=Math.max(1,a-i*2),f=Math.max(1,e-i*2);return{viewSize:Math.max(u.x*e/d,u.y*e/f)*n.zoom/(n.framingZoom??1),targetOffset:o.multiplyScalar(h.x).addScaledVector(s,h.y)}}function qS(a,e,t){return a*t/e}function Qc({cameraY:a,polarAngleDegrees:e,azimuthAngleDegrees:t}){const n=Pt.degToRad(e),i=a/Math.max(.001,Math.cos(n));return new X().setFromSphericalCoords(i*3,n,Pt.degToRad(t))}const Iu=Rt.worldWidth/Rt.cols,Uu=Rt.worldDepth/Rt.rows;function sc(a,e,t,n,i){return{minX:a*Iu-Rt.worldWidth/2+Rt.gap/2,maxX:(a+t)*Iu-Rt.worldWidth/2-Rt.gap/2,minZ:e*Uu-Rt.worldDepth/2+Rt.gap/2,maxZ:(e+n)*Uu-Rt.worldDepth/2-Rt.gap/2,height:i}}const ZS=[sc(0,0,Rt.cols,Rt.rows,Jn.content.max+.08),sc(0,-1,1,1,Jn.content.max+.08),sc(1,Rt.rows,5,1,Jn.content.max+.24+.08)];function sf(a){var e;return a.type==="moreInfo"||!!((e=a.action)!=null&&e.type)}class KS{constructor(e,t,n=64){this.x=e,this.y=t,this.threshold=n,this.maxDistance=0,this.released=!1}move(e,t){const n=e-this.x,i=t-this.y,r=Math.hypot(n,i);this.maxDistance=Math.max(this.maxDistance,r),this.released||(this.released=r>=this.threshold);const o=.14/(1+r/this.threshold);return{x:n*o,y:i*o,released:this.released,isClick:this.maxDistance<6}}}class JS{constructor(e,t,n,i,r,o){this.x=e,this.y=t,this.viewportHeight=n,this.polarAngle=i,this.azimuthAngle=r,this.limits=o}move(e,t){const n=2*Math.PI/Math.max(1,this.viewportHeight);this.polarAngle=Nu(this.polarAngle-(t-this.y)*n,this.limits.minPolarAngle,this.limits.maxPolarAngle),this.azimuthAngle=Nu(this.azimuthAngle-(e-this.x)*n,this.limits.minAzimuthAngle,this.limits.maxAzimuthAngle),this.x=e,this.y=t}}function Nu(a,e,t){return Math.max(e,Math.min(t,a))}const yn=document.querySelector("#scene"),$S=E1(),xn="home",el=0,cf=-2e-4,ts=.7,lf=.3/.7,Wn=ts*lf,hf=1/1.5,uf=.7,df=3,Sr=3,QS=5,ff={mobile:{...Vo,target:new X(0,0,0)},desktop:{...Vo,target:new X(0,0,0)}},ut={enabled:!0,enableRotate:!0,enablePan:!0,enableZoom:!0,damping:.08,minZoom:1.2,maxZoom:4,minPolarAngle:Pt.degToRad(.5),maxPolarAngle:Pt.degToRad(40),minAzimuthAngle:Pt.degToRad(-45),maxAzimuthAngle:Pt.degToRad(45),targetMin:new X(-2.5,-.4,-3.8),targetMax:new X(2.5,1.2,3.8)},pf=window.history.state??{};wf(pf,Or(),a=>{const e=lt.pages.findIndex(t=>t.id===a.id);e<0?lt.pages.push(a):lt.pages[e]=a});var ju;const Dc=(ju=lt.pages.find(a=>a.id===Or()&&a.template==="overlay"))==null?void 0:ju.id,nt=new US(lt,d1());let Pa=ni().viewSize,Fu=Pa,Ou=Si();const In=new ix;In.background=new Je(15986920);const _i=new nx({canvas:yn,antialias:!0,alpha:!1,powerPreference:"high-performance"});_i.setPixelRatio(Math.min(window.devicePixelRatio,df));_i.shadowMap.enabled=!0;_i.shadowMap.type=Yu;_i.outputColorSpace=Jt;const $e=new Gc(-2,2,2,-2,.1,500);u1();const ze=new Kx($e,_i.domElement);ze.enabled=ut.enabled;ze.enableDamping=!0;ze.dampingFactor=ut.damping;ze.enableRotate=ut.enableRotate;ze.enablePan=ut.enablePan;ze.enableZoom=ut.enableZoom;ze.minZoom=ut.minZoom;ze.maxZoom=ut.maxZoom;ze.minPolarAngle=ut.minPolarAngle;ze.maxPolarAngle=ut.maxPolarAngle;ze.minAzimuthAngle=ut.minAzimuthAngle;ze.maxAzimuthAngle=ut.maxAzimuthAngle;ze.target.copy(ni().target);ze.update();const Lr=new Et(new ri(200,200),new Xc({color:0,roughness:.82,metalness:0}));Lr.rotation.x=-Math.PI/2;Lr.position.y=cf;Lr.receiveShadow=!0;In.add(Lr);In.add(new jx(16777215,14208960,2.4));const _n=new qx(16777215,2.8);_n.position.set(4,8,6);_n.castShadow=!0;_n.shadow.camera.left=-8;_n.shadow.camera.right=8;_n.shadow.camera.top=8;_n.shadow.camera.bottom=-8;_n.shadow.mapSize.set(1024,1024);In.add(_n);In.add(_n.target);const Kt=new WS;In.add(Kt);const Wo=new IS,pn=new NS({floorY:cf,timeScale:Wn,pageTimeScale:hf}),mf=new Wx,ku=new kd,cc=new _e,lc=new X,Lc=new X,aa=new X,Ic=new X,oa=new X,gf=new Qn,vf=new Qn,hc=new yt,Bu=new X,zu=new X,uc=new ko,bo={position:.02,target:.02,rotationRadians:Pt.degToRad(.25),viewSize:.001};let jo=0,yf=xn,Xn=tl(pf),ot=Uc(nt.getCurrentPage()),Yn=null,dc=0,ti=!1,Rn=!1,fc=!1,Mo=null,zt="default",Bt=null,xt=null,ki=null;In.add(ot);Kt.setExclusions(wn([ot]));yn.addEventListener("pointermove",r1,!0);yn.addEventListener("pointerleave",Pn);yn.addEventListener("pointerdown",a1,!0);yn.addEventListener("pointerup",o1,!0);yn.addEventListener("pointercancel",Mf,!0);yn.addEventListener("lostpointercapture",Mf);window.addEventListener("popstate",i1);Dc||ba(nt.currentPageId,{replace:!0,historyState:Sa()});function xf(){const a=window.innerWidth,e=window.innerHeight,t=a/e,n=ni(),i=zt==="top"?ns():n,r=Si(),o=r!==Ou,s=fc&&!o&&zt!=="top"?qS(Pa,Fu,i.viewSize):i.viewSize;Fu=n.viewSize,Ou=r,Xo(s,t),(!fc||o||zt==="top")&&($e.position.copy(i.position),$e.zoom=i.zoom,ze.target.copy(i.target),$e.lookAt(i.target),fc=!0,zt==="top"&&(Bt=i)),$e.updateProjectionMatrix(),ze.update(),_i.setPixelRatio(Math.min(window.devicePixelRatio,df)),_i.setSize(a,e)}function _f(){!ki&&!ti&&!Rn&&zt==="default"&&!(xt!=null&&xt.returning)&&(T1(),ze.update()),A1(),Lr.position.x=ze.target.x,Lr.position.z=ze.target.z,_n.position.set(ze.target.x+4,8,ze.target.z+6),_n.target.position.set(ze.target.x,0,ze.target.z),Kt.update($e),_i.render(In,$e),requestAnimationFrame(_f)}window.addEventListener("resize",xf);xf();Dc&&bf(Dc,{replaceUrl:!0});_f();function Uc(a){const e=Fr(lt.pages,a.id);if(e){const t=Xn,n=BS(lt.pages,e.categoryId,(i,r)=>Gu({...i,projectNavigation:{...r,backTarget:t}},{galleryTile:!0}));for(const[i,r]of n.userData.projectTiles)pn.setProjectTileActive(r,i===a.id);return n.userData.backTarget=t,af(n,a.id),n}return Gu(a)}function Gu(a,{galleryTile:e=!1}={}){const t=Ef(a)?Sf(a):a,n=qc(t,{isMobile:Si()==="mobile",fillerRings:el}),i=new An;return i.name=`page-${a.id}`,n.forEach(r=>{i.add(Jd(e?{...r,projectPageId:a.id}:r,mf))}),i.updateMatrixWorld(!0),i}function Sf(a){return{...a,blocks:[...a.blocks??[],...t1(a)]}}function e1(a){return qc(Sf(a),{isMobile:Si()==="mobile",fillerRings:el}).filter(t=>t.carouselDynamic).map(t=>Jd(t,mf))}function t1(a){const e=Ca(a,lt.pages);if(!e.length)return[{id:`${a.id}-empty`,type:"content",subtype:"text",carouselDynamic:!0,placement:"center",size:"wide",content:{text:`No projects yet.
This tag is ready for future work.`,fontSize:.36,textAlign:"left",fontWeight:400}}];const t=Math.max(1,Math.ceil(e.length/Sr)),n=f1(jo,t),i=e.slice(n*Sr,n*Sr+Sr),r=p1(i.length),o=[{id:"projects-counter",type:"content",subtype:"text",carouselDynamic:!0,placement:"projectCounter",size:"small",content:{text:`${n+1}/${t}`,fontWeight:700,fontSize:.32}}];return i.forEach((s,c)=>{const l=r[c],h=Math.random()>.5,u=Math.random()>.5,d=m1(l,{groupOnRight:u,thumbnailOnLeft:h}),f=g1(l,{groupOnRight:u,thumbnailOnLeft:h});o.push({id:`projects-${s.id}-title`,type:"interaction",subtype:"text",carouselDynamic:!0,placement:d,size:"shortWide",content:{label:s.title,fontWeight:400},action:{type:"state",target:s.target}},{id:`projects-${s.id}-thumb`,type:"interaction",subtype:"image",carouselDynamic:!0,placement:f,size:"small",content:{src:s.thumbnail,alt:`${s.title} thumbnail`},action:{type:"state",target:s.target}})}),o}async function Cn(a,e={}){var o;if(a=Pc(lt.pages,a),pn.isTransitioning||Rn){Mo={pageId:a,options:e};return}if(e.historyState&&(wf(e.historyState,a,s=>nt.upsertPage(s)),Xn=tl(e.historyState)),((o=nt.getPage(a))==null?void 0:o.template)==="overlay"){bf(a,e);return}e.preserveOverlay||n1();const t=Fr(lt.pages,a),n=t&&ot.userData.categoryId===t.categoryId,i=nt.currentPageId;if(t&&!e.historyState&&!n&&!e.preservePrevious&&(Xn=i.startsWith("tag:")?i:xn),n&&ot.userData.backTarget!==Xn&&(ot.userData.backTarget=Xn,Hu(ot,Xn)),a===i){const s=nt.getCurrentPage();s.backTarget&&Hu(ot,s.backTarget),e.preserveOverlay||ba(a,{replace:e.replaceUrl??!1,historyState:Sa(s)});return}const r=nt.goToPage(a);xt=null,Pn(),!e.preservePrevious&&!n&&(yf=i),e.preserveOverlay||ba(a,{replace:e.replaceUrl??!1,historyState:Sa(r)}),ze.enabled=!1,Rn=!0;try{const s=ni(i).target,c=ni().target,l=Math.hypot(c.x-s.x,c.z-s.z),h=l>.02?{restoreGrid:()=>Kt.animateExclusions([],{duration:360*Wn}),moveCamera:()=>Wu(Math.min(1800,650+l*18)*ts*uf),clearGrid:u=>Kt.animateExclusions(wn([u]),{duration:360*Wn})}:{moveCamera:()=>Wu(450*hf*lf),clearGrid:u=>Kt.setExclusions(wn([u]))};if(n)await pn.transitionProjectTile({newTile:ot.userData.projectTiles.get(a),moveCamera:()=>y1(a),clearGrid:()=>Kt.animateExclusions(wn([ot]),{duration:360*Wn})}),af(ot,a);else if(ot.userData.categoryId){const u=r.template==="tagDirectory",d=ot.userData.projectTiles.keys().next().value,f=ot.userData.projectTiles.get(d),g=GS(ot,i,Ra((t==null?void 0:t.index)??0));u&&(g.finalTile=f,g.departures=g.departures.filter(v=>v.tile!==f)),ot=await pn.returnThroughGallery({gallery:ot,returnPlan:g,newGroupFactory:()=>Uc(r),scene:In,moveToDestination:v=>x1(u?d:a,v),prepareFinalTile:u?async v=>{v.visible||(pn.setProjectTileActive(v,!0,0),await Kt.animateExclusions(wn([ot]),{duration:360*Wn}),await pn.animateObjects([v],"enter",{duration:260*Wn,stagger:4*Wn}))}:void 0,restoreGrid:v=>Kt.animateExclusions(wn([v]),{duration:360*Wn}),clearGrid:v=>Kt.animateExclusions(wn([v]),{duration:360*Wn}),updateGrid:v=>Kt.setExclusions(wn([v]))})}else ot=await pn.transitionToPage({oldGroup:ot,newGroupFactory:()=>Uc(r),scene:In,...h})}finally{if(Rn=!1,zt==="top"&&(Bt={...ns(),position:$e.position.clone(),target:ze.target.clone(),viewSize:Pa,zoom:$e.zoom}),ze.enabled=!ki&&ut.enabled&&zt==="default",Da(),Mo){const s=Mo;Mo=null,Cn(s.pageId,s.options)}}}function bf(a,{replaceUrl:e=!1,origin:t}={}){var s,c,l,h;const n=nt.getPage(a);if(!(n!=null&&n.overlay)||ki===a&&Wo.projectDetails.root.dataset.state==="open")return;Pn(),xt=null,Da(),ze.enabled=!1,ki=a;const i=e&&((s=window.history.state)==null?void 0:s.pageId)===a?nt.getPage((c=window.history.state)==null?void 0:c.backgroundPageId):null,r=i&&i.template!=="overlay"?i.id:nt.currentPageId,o=!e||((l=window.history.state)==null?void 0:l.pageId)===a&&((h=window.history.state)==null?void 0:h.overlayPushed)===!0;ba(a,{replace:e,historyState:{...Sa(nt.getPage(r)),backgroundPageId:r,overlayPushed:o}}),Wo.openPage(n.overlay,{origin:t,onDismiss:()=>{ki=null,ze.enabled=!Rn&&ut.enabled&&zt==="default",Or()===a&&(o?window.history.back():ba(r,{replace:!0,historyState:Sa(nt.getPage(r))}))}}),r!==nt.currentPageId&&Cn(r,{replaceUrl:!0,preservePrevious:!0,preserveOverlay:!0})}function n1(){ki&&(ki=null,Wo.closePage(),ze.enabled=ut.enabled&&zt==="default")}function i1(){const a=Or(),e=Tf(),t={replaceUrl:!0,historyState:{...window.history.state??{}}};if(e){Cn(pi(e),{...t,preservePrevious:!0});return}Cn(a&&nt.getPage(a)?a:xn,t)}function r1(a){const e=(xt==null?void 0:xt.pointerId)===a.pointerId?xt:null;if(e){const n=e.drag.move(a.clientX,a.clientY);if(e.viewMode==="top"){a.stopImmediatePropagation(),a.preventDefault(),Pn(),e.returning?Cf(e,a):n.released?b1(e,a):S1(n);return}if(!n.isClick){Pn();return}}if(pn.isTransitioning||Rn||ti)return;const t=nl(a);(t==null?void 0:t.object)!==Yn&&(Pn(),t&&(Yn=t.object,sf(Yn.userData.blockData)&&Yn.userData.blockData.subtype!=="pageIndicator"&&(Yn.position.y+=.06),document.body.style.cursor="pointer"))}function a1(a){if(pn.isTransitioning||Rn||ti){a.stopImmediatePropagation();return}if(a.button!==0||xt)return;const e=zt==="top";xt={pointerId:a.pointerId,viewMode:zt,drag:new KS(a.clientX,a.clientY,Si()==="mobile"?64:84),hit:nl(a),returning:!1},e&&(a.stopImmediatePropagation(),a.preventDefault(),yn.setPointerCapture(a.pointerId))}function o1(a){var i;const e=xt;if(!e||e.pointerId!==a.pointerId)return;xt=null;const t=e.drag.move(a.clientX,a.clientY);if(e.viewMode==="top"){if(a.stopImmediatePropagation(),a.preventDefault(),yn.hasPointerCapture(a.pointerId)&&yn.releasePointerCapture(a.pointerId),e.returning){Cf(e,a),Rf();return}if(t.released){Pf();return}if(!t.isClick){ji(Bt,180);return}}if(!t.isClick||ti||Rn)return;const n=nl(a);(n==null?void 0:n.object)===((i=e.hit)==null?void 0:i.object)&&s1(n==null?void 0:n.object.userData.blockData,{x:a.clientX,y:a.clientY})}function Mf(a){if((xt==null?void 0:xt.pointerId)!==a.pointerId)return;const e=xt;if(xt=null,e.returning){Rf();return}e.viewMode==="top"&&!e.returning&&Bt&&!ti&&ji(Bt,180)}function s1(a,e){var t,n,i,r,o,s;if(a){if(a.projectPageId&&a.projectPageId!==nt.currentPageId){Cn(a.projectPageId,{preservePrevious:!0});return}if(!sf(a)){_1();return}if(((t=a.action)==null?void 0:t.type)==="state"){if(a.action.target==="tags"){l1();return}Cn(a.action.target,{origin:e});return}if(((n=a.action)==null?void 0:n.type)==="project"){Cn(a.action.target,{preservePrevious:!0});return}if(((i=a.action)==null?void 0:i.type)==="tag"){Vu(a.action.tag);return}if(((r=a.action)==null?void 0:r.type)==="back"){Cn(a.action.target??yf,{preservePrevious:!0});return}if(a.type==="moreInfo"){Pn(),Wo.openModal(a.modal,{projectId:nt.currentPageId,projectDetails:nt.getCurrentPage().projectDetails,origin:e,onTag:Vu});return}if(((o=a.action)==null?void 0:o.type)==="carousel"){c1(a.action.direction);return}((s=a.action)==null?void 0:s.type)==="link"&&window.open(a.action.url,"_blank","noopener,noreferrer")}}async function c1(a){if(pn.isTransitioning||!Ef(nt.getCurrentPage()))return;const e=nt.getCurrentPage(),t=Math.max(1,Math.ceil(Ca(e,lt.pages).length/Sr));t<=1||(jo=(jo+a+t)%t,Pn(),await pn.replaceChildren({parent:ot,oldChildren:ot.children.filter(n=>{var i;return(i=n.userData.blockData)==null?void 0:i.carouselDynamic}),newChildren:e1(e),onTransitionStart:()=>Kt.setExclusions(wn([ot]))}),Kt.setExclusions(wn([ot])))}function l1(){nt.upsertPage(ef(lt,{backTarget:nt.currentPageId})),Cn("tags")}function Ro(a,e=xn){return typeof a=="string"&&a.startsWith("tag:")&&Dr(a.slice(4))?pi(a.slice(4)):lt.pages.some(t=>t.id===a&&t.template!=="overlay")?a:e}function tl(a={}){const e=Ro(a.galleryBackTarget);return e.startsWith("tag:")?e:xn}function wf(a,e,t){const n=Ro(a.tagsBackTarget??(a.pageId==="tags"?a.backTarget:void 0));t(ef(lt,{backTarget:n==="tags"?xn:n}));const i=tl(a);i.startsWith("tag:")&&t(Nc(i.slice(4),Ro(a.galleryTagBackTarget,"tags")));const r=e!=null&&e.startsWith("tag:")?e:a.backgroundPageId;r!=null&&r.startsWith("tag:")&&t(Nc(r.slice(4),Ro(a.backTarget,"tags")))}function Sa(a=nt.getCurrentPage()){var e,t;return{tagsBackTarget:((e=nt.getPage("tags"))==null?void 0:e.backTarget)??xn,galleryBackTarget:Xn,...Xn.startsWith("tag:")?{galleryTagBackTarget:((t=nt.getPage(Xn))==null?void 0:t.backTarget)??"tags"}:{},...a!=null&&a.backTarget?{backTarget:a.backTarget}:{}}}function Hu(a,e){a.traverse(t=>{var i;const n=(i=t.userData.blockData)==null?void 0:i.action;(n==null?void 0:n.type)==="back"&&(n.target=e)})}function Vu(a){const e=Nc(a,nt.currentPageId);nt.upsertPage(e),jo=0,Cn(e.id)}function Nc(a,e=xn){const t=Dr(a),n=v1().filter(i=>(i.tags??[]).some(r=>Dr(r)===t));return{id:pi(a),template:"projectList",backTarget:e,title:a.toUpperCase(),projectItems:n,blocks:[{id:`${pi(a)}-back`,type:"interaction",placement:"topLeftStack1",size:"small",content:{label:"BACK",fontWeight:700},action:{type:"back",target:e}},{id:`${pi(a)}-title`,type:"content",subtype:"header",placement:"top",size:"wide",content:{text:a.toUpperCase(),fontWeight:700}},...n.length>Sr?h1(pi(a)):[],{id:`${pi(a)}-home`,type:"interaction",placement:"bottomCenter",size:"small",content:{label:"HOME",fontWeight:700},action:{type:"state",target:"home"}}]}}function h1(a){return[{id:`${a}-prev`,type:"interaction",placement:"projectPrev",size:"small",content:{label:"PREV",fontWeight:700,iconSrc:"/icons/arrow-left.svg"},action:{type:"carousel",direction:-1}},{id:`${a}-next`,type:"interaction",placement:"projectNext",size:"small",content:{label:"NEXT",fontWeight:700,iconSrc:"/icons/arrow-right.svg"},action:{type:"carousel",direction:1}}]}function nl(a){const e=yn.getBoundingClientRect();cc.x=(a.clientX-e.left)/e.width*2-1,cc.y=-((a.clientY-e.top)/e.height)*2+1,ku.setFromCamera(cc,$e);const n=ku.intersectObjects(ot.children,!0).find(i=>{var r;return((r=i.object.userData)==null?void 0:r.isBlockMesh)&&i.object.scale.y>.01});return!n||!w1(n)?null:n}function Pn(){Yn&&(Yn.position.y=Yn.userData.originalY,Yn=null),document.body.style.cursor=""}function u1(){const a=ni();Xo(a.viewSize),$e.position.copy(a.position),$e.zoom=a.zoom,$e.lookAt(a.target)}function Xo(a,e=window.innerWidth/window.innerHeight){Pa=a,$e.left=-a*e/2,$e.right=a*e/2,$e.top=a/2,$e.bottom=-a/2,$e.updateProjectionMatrix()}function ni(a=nt.currentPageId){var c,l;const e=Si(),t=(l=(c=nt.getPage(a))==null?void 0:c.projectDetails)==null?void 0:l.presentation,n={...ff[e],...e==="mobile"?t==null?void 0:t.mobileCamera:{}},i=XS(window.innerWidth,window.innerHeight,n),r=n.target.clone().add(i.targetOffset),o=Fr(lt.pages,a);o&&r.add(Ra(o.index));const s=Qc(n);return{...n,viewSize:i.viewSize,target:r,position:r.clone().add(s)}}function Si(){return jS(window.innerWidth,window.matchMedia("(pointer: coarse)").matches)}function d1(){var t;const a=Tf();if(a)return pi(a);const e=Or();if(((t=lt.pages.find(n=>n.id===e))==null?void 0:t.template)==="overlay"){const n=lt.pages.find(i=>{var r;return i.id===((r=window.history.state)==null?void 0:r.backgroundPageId)&&i.template!=="overlay"});return n?Pc(lt.pages,n.id):xn}return e&&lt.pages.some(n=>n.id===e)?Pc(lt.pages,e):xn}function Or(){const a=window.location.hash.replace(/^#\/?/,"");return a?decodeURIComponent(a.split("/")[0]):null}function Tf(){const a=Or();return a!=null&&a.startsWith("tag:")?a.slice(4):null}function ba(a,{replace:e=!1,historyState:t={}}={}){const n=a===xn?"#/":`#/${encodeURIComponent(a)}`,i=`${window.location.pathname}${window.location.search}${n}`;if(`${window.location.pathname}${window.location.search}${window.location.hash}`===i){Object.keys(t).length&&window.history.replaceState({pageId:a,...t},"",i);return}e?window.history.replaceState({pageId:a,...t},"",i):window.history.pushState({pageId:a,...t},"",i)}function f1(a,e){return Math.max(0,Math.min(e-1,a))}function p1(a){const e=Array.from({length:QS},(t,n)=>n+1);for(let t=e.length-1;t>0;t-=1){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e.slice(0,a).sort((t,n)=>t-n)}function m1(a,{groupOnRight:e,thumbnailOnLeft:t}){return e&&t?`projectRow${a}TitleFarRight`:t||e?`projectRow${a}TitleRight`:`projectRow${a}Title`}function g1(a,{groupOnRight:e,thumbnailOnLeft:t}){return e&&t?`projectRow${a}ThumbLeftInset`:e?`projectRow${a}ThumbFarRight`:t?`projectRow${a}ThumbLeft`:`projectRow${a}Thumb`}function Ef(a){return(a==null?void 0:a.id)==="projects"||(a==null?void 0:a.template)==="projectList"}function v1(){const a=lt.pages.filter(t=>["projects","experiments","teaching"].includes(t.id)).flatMap(t=>t.projectItems??[]);return[...new Map(a.map(t=>[t.target,t])).values()].map(t=>{const n=lt.pages.find(i=>i.id===t.target);return{...t,tags:n!=null&&n.projectDetails?fS(n.projectDetails):t.tags??[]}})}function pi(a){return`tag:${Dr(a)}`}function Wu(a){return ji(il(),a)}function y1(a){const e=il(a),t=ze.target.distanceTo(e.target);return ji(e,Math.min(1800,650+t*18)*ts*uf)}function x1(a,e){const t=il(a),n=ze.target.distanceTo(t.target);return ji(t,Math.min(2800,550+n*35)*ts,e)}function il(a=nt.currentPageId){return zt==="top"?ns(a):ni(a)}function ns(a=nt.currentPageId){var s;const e=nt.getPage(a),t=Fr(lt.pages,a),n=((s=ot.userData.projectTiles)==null?void 0:s.get(a))??(ot.name===`page-${a}`?ot:null),i=n?n.children.map(c=>c.userData.blockData).filter(Boolean):qc(t?{...e,projectNavigation:t}:e,{isMobile:Si()==="mobile",fillerRings:el}),r=t?Ra(t.index):new X,o={minX:Math.min(...i.map(c=>c.worldX-(c.worldW+(c.gapX??.08))/2))+r.x,maxX:Math.max(...i.map(c=>c.worldX+(c.worldW+(c.gapX??.08))/2))+r.x,minZ:Math.min(...i.map(c=>c.worldZ-(c.worldD+.08)/2))+r.z,maxZ:Math.max(...i.map(c=>c.worldZ+(c.worldD+.08)/2))+r.z,height:Math.max(...i.map(c=>c.height))+.08};return YS(window.innerWidth,window.innerHeight,o,Si()==="mobile")}async function _1(){zt!=="top"&&(Pn(),Da(),zt="top",ze.enabled=!1,Bt=ns(),await ji(Bt,480))}function S1(a){if(!Bt)return;const e=Bt.viewSize/Bt.zoom/window.innerHeight,t=Bt.position.clone().sub(Bt.target).normalize(),n=new X(t.z,0,-t.x).normalize(),i=new X().crossVectors(t,n),r=n.multiplyScalar(-a.x*e).addScaledVector(i,-a.y*e);ze.target.copy(Bt.target).add(r),$e.position.copy(Bt.position).add(r),$e.lookAt(ze.target)}function b1(a,e){a.returning=!0,a.orbitLayout=ni();const t=new ko().setFromVector3(a.orbitLayout.position.clone().sub(a.orbitLayout.target));a.orbitRadius=t.radius,a.orbit=new JS(e.clientX,e.clientY,window.innerHeight,t.phi,t.theta,ut),Pf(a)}function Af(a){return{...a.orbitLayout,position:new X().setFromSphericalCoords(a.orbitRadius,a.orbit.polarAngle,a.orbit.azimuthAngle).add(a.orbitLayout.target)}}function Cf(a,e){if(a.orbit.move(e.clientX,e.clientY),!ti){const t=Af(a);$e.position.copy(t.position),ze.target.copy(t.target),$e.lookAt(t.target)}}function Rf(){ti||(Da(),ze.enabled=ut.enabled&&!Rn)}async function Pf(a){Pn(),zt="default",Bt=null,ze.enabled=!1,await ji(ni(),420,void 0,a?()=>Af(a):void 0),ze.enabled=ut.enabled&&!Rn&&(!a||xt!==a)}function ji(a,e,t,n){const i=Pa,r=a.viewSize??i,o=r!==i,s=$e.zoom,c=a.zoom??s,l=c!==s;if(Lc.copy($e.position),aa.copy(a.position),Ic.copy(ze.target),oa.copy(a.target),gf.copy($e.quaternion),hc.position.copy(a.position),hc.lookAt(a.target),vf.copy(hc.quaternion),!M1(i,r)&&Math.abs(s-c)<.001)return t==null||t(1),Promise.resolve();dc+=1;const h=dc,u=performance.now();return ti=!0,new Promise(d=>{const f=()=>{$e.position.copy(aa),ze.target.copy(oa),$e.lookAt(oa),o&&Xo(r),$e.zoom=c,$e.updateProjectionMatrix(),Da(),ti=!1,d()},g=v=>{if(h!==dc){d();return}const p=Math.min(1,(v-u)/Math.max(1,e)),m=C1(p);if(n&&aa.copy(n().position),$e.position.lerpVectors(Lc,aa,m),lc.lerpVectors(Ic,oa,m),ze.target.copy(lc),$e.lookAt(lc),t==null||t(m),o&&Xo(Pt.lerp(i,r,m)),l&&($e.zoom=Pt.lerp(s,c,m),$e.updateProjectionMatrix()),p>=1){f();return}requestAnimationFrame(g)};requestAnimationFrame(g)})}function M1(a,e){const t=2*Math.acos(Math.min(1,Math.abs(gf.dot(vf))));return Lc.distanceTo(aa)>bo.position||Ic.distanceTo(oa)>bo.target||t>bo.rotationRadians||Math.abs(a-e)>bo.viewSize}function w1(a){var e;return!((e=a.object.userData)!=null&&e.isBlockMesh)||!a.face?!1:(Bu.copy(a.face.normal).transformDirection(a.object.matrixWorld),Bu.y>.9)}function Da(){const a=$e.position.clone(),e=ze.target.clone(),t=$e.zoom,n=ze.enableDamping;ze.enableDamping=!1,ze.update(),$e.position.copy(a),ze.target.copy(e),$e.zoom=t,$e.lookAt(e),$e.updateProjectionMatrix(),ze.update(),ze.enableDamping=n}function T1(){const a=Fr(lt.pages,nt.currentPageId),e=a?Ra(a.index):ff.desktop.target;ze.target.x=Pt.clamp(ze.target.x,e.x+ut.targetMin.x,e.x+ut.targetMax.x),ze.target.y=Pt.clamp(ze.target.y,ut.targetMin.y,ut.targetMax.y),ze.target.z=Pt.clamp(ze.target.z,e.z+ut.targetMin.z,e.z+ut.targetMax.z)}function E1(){const a=document.createElement("div");return a.style.position="fixed",a.style.right="12px",a.style.top="12px",a.style.zIndex="20",a.style.padding="8px 10px",a.style.background="rgba(17, 17, 17, 0.78)",a.style.color="#f7f3e8",a.style.fontFamily="monospace",a.style.fontSize="12px",a.style.lineHeight="1.45",a.style.pointerEvents="none",a.style.whiteSpace="pre",document.body.appendChild(a),a}function A1(){zu.copy($e.position).sub(ze.target),uc.setFromVector3(zu),$S.textContent=[`polarAngleDegrees: ${Pt.radToDeg(uc.phi).toFixed(2)}`,`azimuthAngleDegrees: ${Pt.radToDeg(uc.theta).toFixed(2)}`].join(`
`)}function C1(a){return a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2}
