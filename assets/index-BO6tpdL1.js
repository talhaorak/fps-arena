(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const _o="182",oh=0,Go=1,lh=2,or=1,Ql=2,ss=3,Xn=0,Ne=1,sn=2,Dn=0,ci=1,Ui=2,Wo=3,Xo=4,ch=5,ii=100,hh=101,uh=102,dh=103,fh=104,ph=200,mh=201,gh=202,_h=203,xa=204,va=205,xh=206,vh=207,Mh=208,Sh=209,yh=210,Eh=211,bh=212,wh=213,Th=214,Ma=0,Sa=1,ya=2,Oi=3,Ea=4,ba=5,wa=6,Ta=7,tc=0,Ah=1,Rh=2,xn=0,ec=1,nc=2,ic=3,sc=4,rc=5,ac=6,oc=7,lc=300,ui=301,Bi=302,Aa=303,Ra=304,br=306,ri=1e3,Pn=1001,Ca=1002,Ae=1003,Ch=1004,Ls=1005,Pe=1006,Nr=1007,ai=1008,qe=1009,cc=1010,hc=1011,fs=1012,xo=1013,Sn=1014,pn=1015,Un=1016,vo=1017,Mo=1018,ps=1020,uc=35902,dc=35899,fc=1021,pc=1022,on=1023,Nn=1026,oi=1027,mc=1028,So=1029,zi=1030,yo=1031,Eo=1033,lr=33776,cr=33777,hr=33778,ur=33779,Pa=35840,La=35841,Da=35842,Ia=35843,Ua=36196,Na=37492,Fa=37496,Oa=37488,Ba=37489,za=37490,ka=37491,Va=37808,Ha=37809,Ga=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,Za=37815,$a=37816,Ka=37817,Ja=37818,ja=37819,Qa=37820,to=37821,eo=36492,no=36494,io=36495,so=36283,ro=36284,ao=36285,oo=36286,Ph=3200,gc=0,Lh=1,Gn="",Ke="srgb",ki="srgb-linear",pr="linear",le="srgb",mi=7680,qo=519,Dh=512,Ih=513,Uh=514,bo=515,Nh=516,Fh=517,wo=518,Oh=519,lo=35044,Yo="300 es",mn=2e3,mr=2001;function _c(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bh(){const i=gr("canvas");return i.style.display="block",i}const Zo={};function _r(...i){const t="THREE."+i.shift();console.log(t,...i)}function Vt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function te(...i){const t="THREE."+i.shift();console.error(t,...i)}function ms(...i){const t=i.join(" ");t in Zo||(Zo[t]=!0,Vt(...i))}function zh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $o=1234567;const ls=Math.PI/180,gs=180/Math.PI;function vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function To(i,t){return(i%t+t)%t}function kh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Vh(i,t,e){return i!==t?(e-i)/(t-i):0}function cs(i,t,e){return(1-e)*i+e*t}function Hh(i,t,e,n){return cs(i,t,1-Math.exp(-e*n))}function Gh(i,t=1){return t-Math.abs(To(i,t*2)-t)}function Wh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Xh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Yh(i,t){return i+Math.random()*(t-i)}function Zh(i){return i*(.5-Math.random())}function $h(i){i!==void 0&&($o=i);let t=$o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kh(i){return i*ls}function Jh(i){return i*gs}function jh(i){return(i&i-1)===0&&i!==0}function Qh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function eu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*p,o*h,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xr={DEG2RAD:ls,RAD2DEG:gs,generateUUID:vn,clamp:Jt,euclideanModulo:To,mapLinear:kh,inverseLerp:Vh,lerp:cs,damp:Hh,pingpong:Gh,smoothstep:Wh,smootherstep:Xh,randInt:qh,randFloat:Yh,randFloatSpread:Zh,seededRandom:$h,degToRad:Kh,radToDeg:Jh,isPowerOfTwo:jh,ceilPowerOfTwo:Qh,floorPowerOfTwo:tu,setQuaternionFromProperEuler:eu,normalize:ce,denormalize:rn};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Es{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==m){let g=l*d+c*p+h*m+u*x;g<0&&(d=-d,p=-p,m=-m,x=-x,g=-g);let f=1-o;if(g<.9995){const T=Math.acos(g),b=Math.sin(T);f=Math.sin(f*T)/b,o=Math.sin(o*T)/b,l=l*f+d*o,c=c*f+p*o,h=h*f+m*o,u=u*f+x*o}else{l=l*f+d*o,c=c*f+p*o,h=h*f+m*o,u=u*f+x*o;const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*p-c*d,t[e+1]=l*m+h*d+c*u-o*p,t[e+2]=c*m+h*p+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ko.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ko.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fr.copy(this).projectOnVector(t),this.sub(Fr)}reflect(t){return this.sub(Fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new P,Ko=new Es;class Yt{constructor(t,e,n,s,r,a,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],x=s[0],g=s[3],f=s[6],T=s[1],b=s[4],y=s[7],A=s[2],R=s[5],C=s[8];return r[0]=a*x+o*T+l*A,r[3]=a*g+o*b+l*R,r[6]=a*f+o*y+l*C,r[1]=c*x+h*T+u*A,r[4]=c*g+h*b+u*R,r[7]=c*f+h*y+u*C,r[2]=d*x+p*T+m*A,r[5]=d*g+p*b+m*R,r[8]=d*f+p*y+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Or.makeScale(t,e)),this}rotate(t){return this.premultiply(Or.makeRotation(-t)),this}translate(t,e){return this.premultiply(Or.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Or=new Yt,Jo=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jo=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nu(){const i={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ki]:{primaries:t,whitePoint:n,transfer:pr,toXYZ:Jo,fromXYZ:jo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:le,toXYZ:Jo,fromXYZ:jo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}const ee=nu();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gi;class iu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gi===void 0&&(gi=gr("canvas")),gi.width=t.width,gi.height=t.height;const s=gi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=gi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let su=0;class Ao{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=vn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Br(s[a].image)):r.push(Br(s[a]))}else r=Br(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let ru=0;const zr=new P;class Le extends Gi{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Pn,s=Pn,r=Pe,a=ai,o=on,l=qe,c=Le.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=vn(),this.name="",this.source=new Ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zr).x}get height(){return this.source.getSize(zr).y}get depth(){return this.source.getSize(zr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ri:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case Ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ri:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case Ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=lc;Le.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],x=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,y=(p+1)/2,A=(f+1)/2,R=(h+d)/4,C=(u+x)/4,N=(m+g)/4;return b>y&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=C/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=N/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=N/r),this.set(n,s,r,e),this}let T=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class au extends Gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Le(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ao(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends au{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xc extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ou extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),Is.subVectors(this.max,Yi),_i.subVectors(t.a,Yi),xi.subVectors(t.b,Yi),vi.subVectors(t.c,Yi),Fn.subVectors(xi,_i),On.subVectors(vi,xi),Kn.subVectors(_i,vi);let e=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Kn.z,Kn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Kn.z,0,-Kn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Kn.y,Kn.x,0];return!kr(e,_i,xi,vi,Is)||(e=[1,0,0,0,1,0,0,0,1],!kr(e,_i,xi,vi,Is))?!1:(Us.crossVectors(Fn,On),e=[Us.x,Us.y,Us.z],kr(e,_i,xi,vi,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wn=[new P,new P,new P,new P,new P,new P,new P,new P],tn=new P,Ds=new bs,_i=new P,xi=new P,vi=new P,Fn=new P,On=new P,Kn=new P,Yi=new P,Is=new P,Us=new P,Jn=new P;function kr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);const o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const lu=new bs,Zi=new P,Vr=new P;class ws{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);const e=Zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(Vr)),this.expandByPoint(Zi.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Tn=new P,Hr=new P,Ns=new P,Bn=new P,Gr=new P,Fs=new P,Wr=new P;class wr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hr.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(Hr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ns),o=Bn.dot(this.direction),l=-Bn.dot(Ns),c=Bn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hr).addScaledVector(Ns,d),p}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){Gr.subVectors(e,t),Fs.subVectors(n,t),Wr.crossVectors(Gr,Fs);let a=this.direction.dot(Wr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,t);const l=o*this.direction.dot(Fs.crossVectors(Bn,Fs));if(l<0)return null;const c=o*this.direction.dot(Gr.cross(Bn));if(c<0||l+c>a)return null;const h=-o*Bn.dot(Wr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,m,x,g){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,m,x,g)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,m,x,g){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+m*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,m=c*h,x=c*u;e[0]=d+x*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-m,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,m=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=m*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+m,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,p=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cu,t,hu)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),zn.crossVectors(n,Ve),zn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),zn.crossVectors(n,Ve)),zn.normalize(),Os.crossVectors(Ve,zn),s[0]=zn.x,s[4]=Os.x,s[8]=Ve.x,s[1]=zn.y,s[5]=Os.y,s[9]=Ve.y,s[2]=zn.z,s[6]=Os.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],x=n[6],g=n[10],f=n[14],T=n[3],b=n[7],y=n[11],A=n[15],R=s[0],C=s[4],N=s[8],v=s[12],S=s[1],L=s[5],O=s[9],B=s[13],q=s[2],k=s[6],G=s[10],z=s[14],j=s[3],ct=s[7],at=s[11],$=s[15];return r[0]=a*R+o*S+l*q+c*j,r[4]=a*C+o*L+l*k+c*ct,r[8]=a*N+o*O+l*G+c*at,r[12]=a*v+o*B+l*z+c*$,r[1]=h*R+u*S+d*q+p*j,r[5]=h*C+u*L+d*k+p*ct,r[9]=h*N+u*O+d*G+p*at,r[13]=h*v+u*B+d*z+p*$,r[2]=m*R+x*S+g*q+f*j,r[6]=m*C+x*L+g*k+f*ct,r[10]=m*N+x*O+g*G+f*at,r[14]=m*v+x*B+g*z+f*$,r[3]=T*R+b*S+y*q+A*j,r[7]=T*C+b*L+y*k+A*ct,r[11]=T*N+b*O+y*G+A*at,r[15]=T*v+b*B+y*z+A*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],x=t[7],g=t[11],f=t[15],T=l*p-c*d,b=o*p-c*u,y=o*d-l*u,A=a*p-c*h,R=a*d-l*h,C=a*u-o*h;return e*(x*T-g*b+f*y)-n*(m*T-g*A+f*R)+s*(m*b-x*A+f*C)-r*(m*y-x*R+g*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],x=t[13],g=t[14],f=t[15],T=u*g*c-x*d*c+x*l*p-o*g*p-u*l*f+o*d*f,b=m*d*c-h*g*c-m*l*p+a*g*p+h*l*f-a*d*f,y=h*x*c-m*u*c+m*o*p-a*x*p-h*o*f+a*u*f,A=m*u*l-h*x*l-m*o*d+a*x*d+h*o*g-a*u*g,R=e*T+n*b+s*y+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=T*C,t[1]=(x*d*r-u*g*r-x*s*p+n*g*p+u*s*f-n*d*f)*C,t[2]=(o*g*r-x*l*r+x*s*c-n*g*c-o*s*f+n*l*f)*C,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*C,t[4]=b*C,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*C,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*f-e*l*f)*C,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*C,t[8]=y*C,t[9]=(m*u*r-h*x*r-m*n*p+e*x*p+h*n*f-e*u*f)*C,t[10]=(a*x*r-m*o*r+m*n*c-e*x*c-a*n*f+e*o*f)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*C,t[12]=A*C,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*C,t[14]=(m*o*s-a*x*s-m*n*l+e*x*l+a*n*g-e*o*g)*C,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,m=r*u,x=a*h,g=a*u,f=o*u,T=l*c,b=l*h,y=l*u,A=n.x,R=n.y,C=n.z;return s[0]=(1-(x+f))*A,s[1]=(p+y)*A,s[2]=(m-b)*A,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(d+f))*R,s[6]=(g+T)*R,s[7]=0,s[8]=(m+b)*C,s[9]=(g-T)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=Mi.set(s[0],s[1],s[2]).length();const a=Mi.set(s[4],s[5],s[6]).length(),o=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),en.copy(this);const c=1/r,h=1/a,u=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=mn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===mn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===mr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===mn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===mr)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new P,en=new de,cu=new P(0,0,0),hu=new P(1,1,1),zn=new P,Os=new P,Ve=new P,Qo=new de,tl=new Es;class Ye{constructor(t=0,e=0,n=0,s=Ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tl.setFromEuler(this),this.setFromQuaternion(tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ye.DEFAULT_ORDER="XYZ";class Tr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uu=0;const el=new P,Si=new Es,An=new de,Bs=new P,$i=new P,du=new P,fu=new Es,nl=new P(1,0,0),il=new P(0,1,0),sl=new P(0,0,1),rl={type:"added"},pu={type:"removed"},yi={type:"childadded",child:null},Xr={type:"childremoved",child:null};class Ee extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new P,e=new Ye,n=new Es,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Yt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(nl,t)}rotateY(t){return this.rotateOnAxis(il,t)}rotateZ(t){return this.rotateOnAxis(sl,t)}translateOnAxis(t,e){return el.copy(t).applyQuaternion(this.quaternion),this.position.add(el.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nl,t)}translateY(t){return this.translateOnAxis(il,t)}translateZ(t){return this.translateOnAxis(sl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt($i,Bs,this.up):An.lookAt(Bs,$i,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(An),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rl),yi.child=t,this.dispatchEvent(yi),yi.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pu),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rl),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,du),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new P(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new P,Rn=new P,qr=new P,Cn=new P,Ei=new P,bi=new P,al=new P,Yr=new P,Zr=new P,$r=new P,Kr=new xe,Jr=new xe,jr=new xe;class je{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),Rn.subVectors(n,e),qr.subVectors(t,e);const a=nn.dot(nn),o=nn.dot(Rn),l=nn.dot(qr),c=Rn.dot(Rn),h=Rn.dot(qr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Kr.setScalar(0),Jr.setScalar(0),jr.setScalar(0),Kr.fromBufferAttribute(t,e),Jr.fromBufferAttribute(t,n),jr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Kr,r.x),a.addScaledVector(Jr,r.y),a.addScaledVector(jr,r.z),a}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),Rn.subVectors(t,e),nn.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),nn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ei.subVectors(s,n),bi.subVectors(r,n),Yr.subVectors(t,n);const l=Ei.dot(Yr),c=bi.dot(Yr);if(l<=0&&c<=0)return e.copy(n);Zr.subVectors(t,s);const h=Ei.dot(Zr),u=bi.dot(Zr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ei,a);$r.subVectors(t,r);const p=Ei.dot($r),m=bi.dot($r);if(m>=0&&p<=m)return e.copy(r);const x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(bi,o);const g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return al.subVectors(r,s),o=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(al,o);const f=1/(g+x+d);return a=x*f,o=d*f,e.copy(n).addScaledVector(Ei,a).addScaledVector(bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Qr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=To(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qr(a,r,t+1/3),this.g=Qr(a,r,t),this.b=Qr(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=vc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return ee.workingToColorSpace(Ce.copy(this),t),Math.round(Jt(Ce.r*255,0,255))*65536+Math.round(Jt(Ce.g*255,0,255))*256+Math.round(Jt(Ce.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ke){ee.workingToColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(zs);const n=cs(kn.h,zs.h,e),s=cs(kn.s,zs.s,e),r=cs(kn.l,zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new jt;jt.NAMES=vc;let mu=0;class Yn extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=ci,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=va,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _s extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new P,ks=new ut;let gu=0;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lo,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lo&&(t.usage=this.usage),t}}class Mc extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sc extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _u=0;const $e=new de,ta=new Ee,wi=new P,He=new bs,Ki=new bs,Te=new P;class ye extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_c(t)?Sc:Mc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(He.min,Ki.min),He.expandByPoint(Te),Te.addVectors(He.max,Ki.max),He.expandByPoint(Te)):(He.expandByPoint(Ki.min),He.expandByPoint(Ki.max))}He.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(t,c),Te.add(wi)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new P,l[N]=new P;const c=new P,h=new P,u=new P,d=new ut,p=new ut,m=new ut,x=new P,g=new P;function f(N,v,S){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,v),m.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),m.sub(d);const L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(L),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(L),o[N].add(x),o[v].add(x),o[S].add(x),l[N].add(g),l[v].add(g),l[S].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,v=T.length;N<v;++N){const S=T[N],L=S.start,O=S.count;for(let B=L,q=L+O;B<q;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const b=new P,y=new P,A=new P,R=new P;function C(N){A.fromBufferAttribute(s,N),R.copy(A);const v=o[N];b.copy(v),b.sub(A.multiplyScalar(A.dot(v))).normalize(),y.crossVectors(R,v);const L=y.dot(l[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,L)}for(let N=0,v=T.length;N<v;++N){const S=T[N],L=S.start,O=S.count;for(let B=L,q=L+O;B<q;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new Be(d,h,u)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ol=new de,jn=new wr,Vs=new ws,ll=new P,Hs=new P,Gs=new P,Ws=new P,ea=new P,Xs=new P,cl=new P,qs=new P;class Z extends Ee{constructor(t=new ye,e=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ea.fromBufferAttribute(u,t),a?Xs.addScaledVector(ea,h):Xs.addScaledVector(ea.sub(e),h))}e.add(Xs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Vs.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Vs,ll)===null||jn.origin.distanceToSquared(ll)>(t.far-t.near)**2))&&(ol.copy(r).invert(),jn.copy(t.ray).applyMatrix4(ol),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const g=d[m],f=a[g.materialIndex],T=Math.max(g.start,p.start),b=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,A=b;y<A;y+=3){const R=o.getX(y),C=o.getX(y+1),N=o.getX(y+2);s=Ys(this,f,t,n,c,h,u,R,C,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){const T=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=Ys(this,a,t,n,c,h,u,T,b,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const g=d[m],f=a[g.materialIndex],T=Math.max(g.start,p.start),b=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,A=b;y<A;y+=3){const R=y,C=y+1,N=y+2;s=Ys(this,f,t,n,c,h,u,R,C,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){const T=g,b=g+1,y=g+2;s=Ys(this,a,t,n,c,h,u,T,b,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function xu(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:i}}function Ys(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Hs),i.getVertexPosition(l,Gs),i.getVertexPosition(c,Ws);const h=xu(i,t,e,n,Hs,Gs,Ws,cl);if(h){const u=new P;je.getBarycoord(cl,Hs,Gs,Ws,u),s&&(h.uv=je.getInterpolatedAttribute(s,o,l,c,u,new ut)),r&&(h.uv1=je.getInterpolatedAttribute(r,o,l,c,u,new ut)),a&&(h.normal=je.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};je.getNormal(Hs,Gs,Ws,d.normal),h.face=d,h.barycoord=u}return h}class qt extends ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function m(x,g,f,T,b,y,A,R,C,N,v){const S=y/C,L=A/N,O=y/2,B=A/2,q=R/2,k=C+1,G=N+1;let z=0,j=0;const ct=new P;for(let at=0;at<G;at++){const $=at*L-B;for(let lt=0;lt<k;lt++){const mt=lt*S-O;ct[x]=mt*T,ct[g]=$*b,ct[f]=q,c.push(ct.x,ct.y,ct.z),ct[x]=0,ct[g]=0,ct[f]=R>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(lt/C),u.push(1-at/N),z+=1}}for(let at=0;at<N;at++)for(let $=0;$<C;$++){const lt=d+$+k*at,mt=d+$+k*(at+1),Ht=d+($+1)+k*(at+1),Tt=d+($+1)+k*at;l.push(lt,mt,Tt),l.push(mt,Ht,Tt),j+=6}o.addGroup(p,j,v),p+=j,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Vi(i[e]);for(const s in n)t[s]=n[s]}return t}function vu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Mu={clone:Vi,merge:Ue};var Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Su,this.fragmentShader=yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=vu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ec extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new P,hl=new ut,ul=new ut;class We extends Ec{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,hl,ul),e.subVectors(ul,hl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ls*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,Ai=1;class Eu extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new We(Ti,Ai,t,e);s.layers=this.layers,this.add(s);const r=new We(Ti,Ai,t,e);r.layers=this.layers,this.add(r);const a=new We(Ti,Ai,t,e);a.layers=this.layers,this.add(a);const o=new We(Ti,Ai,t,e);o.layers=this.layers,this.add(o);const l=new We(Ti,Ai,t,e);l.layers=this.layers,this.add(l);const c=new We(Ti,Ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class bc extends Le{constructor(t=[],e=ui,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wc extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Dn});r.uniforms.tEquirect.value=e;const a=new Z(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=Pe),new Eu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Qe extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bu={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),f=this._getHandJoint(c,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ro{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new Ro(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wu extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Tu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lo,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ie=new P;class vr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){_r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new vr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tc extends Yn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ri;const Ji=new P,Ci=new P,Pi=new P,Li=new ut,ji=new ut,Ac=new de,Zs=new P,Qi=new P,$s=new P,dl=new ut,ia=new ut,fl=new ut;class Au extends Ee{constructor(t=new Tc){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new ye;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tu(e,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new vr(n,3,0,!1)),Ri.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=Ri,this.material=t,this.center=new ut(.5,.5),this.count=1}raycast(t,e){t.camera===null&&te('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ci.setFromMatrixScale(this.matrixWorld),Ac.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ci.multiplyScalar(-Pi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ks(Zs.set(-.5,-.5,0),Pi,a,Ci,s,r),Ks(Qi.set(.5,-.5,0),Pi,a,Ci,s,r),Ks($s.set(.5,.5,0),Pi,a,Ci,s,r),dl.set(0,0),ia.set(1,0),fl.set(1,1);let o=t.ray.intersectTriangle(Zs,Qi,$s,!1,Ji);if(o===null&&(Ks(Qi.set(-.5,.5,0),Pi,a,Ci,s,r),ia.set(0,1),o=t.ray.intersectTriangle(Zs,$s,Qi,!1,Ji),o===null))return;const l=t.ray.origin.distanceTo(Ji);l<t.near||l>t.far||e.push({distance:l,point:Ji.clone(),uv:je.getInterpolation(Ji,Zs,Qi,$s,dl,ia,fl,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ks(i,t,e,n,s,r){Li.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ji.x=r*Li.x-s*Li.y,ji.y=s*Li.x+r*Li.y):ji.copy(Li),i.copy(t),i.x+=ji.x,i.y+=ji.y,i.applyMatrix4(Ac)}class Ru extends Le{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ae,h=Ae,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sa=new P,Cu=new P,Pu=new Yt;class ni{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=sa.subVectors(n,e).cross(Cu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pu.getNormalMatrix(t),s=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new ws,Lu=new ut(.5,.5),Js=new P;class Co{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,a=new ni){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],m=r[8],x=r[9],g=r[10],f=r[11],T=r[12],b=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,p-h,f-m,A-T).normalize(),s[1].setComponents(c+a,p+h,f+m,A+T).normalize(),s[2].setComponents(c+o,p+u,f+x,A+b).normalize(),s[3].setComponents(c-o,p-u,f-x,A-b).normalize(),n)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,p-d,f-g,A-y).normalize();else if(s[4].setComponents(c-l,p-d,f-g,A-y).normalize(),e===mn)s[5].setComponents(c+l,p+d,f+g,A+y).normalize();else if(e===mr)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){Qn.center.set(0,0,0);const e=Lu.distanceTo(t.center);return Qn.radius=.7071067811865476+e,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rc extends Yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mr=new P,Sr=new P,pl=new de,ts=new wr,js=new ws,ra=new P,ml=new P;class Du extends Ee{constructor(t=new ye,e=new Rc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Mr.fromBufferAttribute(e,s-1),Sr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Mr.distanceTo(Sr);t.setAttribute("lineDistance",new Me(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),js.radius+=r,t.ray.intersectsSphere(js)===!1)return;pl.copy(s).invert(),ts.copy(t.ray).applyMatrix4(pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=c){const f=h.getX(x),T=h.getX(x+1),b=Qs(this,t,ts,l,f,T,x);b&&e.push(b)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(p),f=Qs(this,t,ts,l,x,g,m-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=c){const f=Qs(this,t,ts,l,x,x+1,x);f&&e.push(f)}if(this.isLineLoop){const x=Qs(this,t,ts,l,m-1,p,m-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qs(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Mr.fromBufferAttribute(o,s),Sr.fromBufferAttribute(o,r),e.distanceSqToSegment(Mr,Sr,ra,ml)>n)return;ra.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ra);if(!(c<t.near||c>t.far))return{distance:c,point:ml.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class dr extends Yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gl=new de,co=new wr,tr=new ws,er=new P;class aa extends Ee{constructor(t=new ye,e=new dr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),tr.radius+=r,t.ray.intersectsSphere(tr)===!1)return;gl.copy(s).invert(),co.copy(t.ray).applyMatrix4(gl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=d,x=p;m<x;m++){const g=c.getX(m);er.fromBufferAttribute(u,g),_l(er,g,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,x=p;m<x;m++)er.fromBufferAttribute(u,m),_l(er,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _l(i,t,e,n,s,r,a){const o=co.distanceSqToPoint(i);if(o<e){const l=new P;co.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ii extends Le{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xs extends Le{constructor(t,e,n=Sn,s,r,a,o=Ae,l=Ae,c,h=Nn,u=1){if(h!==Nn&&h!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ao(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Iu extends xs{constructor(t,e=Sn,n=ui,s,r,a=Ae,o=Ae,l,c=Nn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Cc extends Le{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ve extends ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let m=0;const x=[],g=n/2;let f=0;T(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(p,2));function T(){const y=new P,A=new P;let R=0;const C=(e-t)/n;for(let N=0;N<=r;N++){const v=[],S=N/r,L=S*(e-t)+t;for(let O=0;O<=s;O++){const B=O/s,q=B*l+o,k=Math.sin(q),G=Math.cos(q);A.x=L*k,A.y=-S*n+g,A.z=L*G,u.push(A.x,A.y,A.z),y.set(k,C,G).normalize(),d.push(y.x,y.y,y.z),p.push(B,1-S),v.push(m++)}x.push(v)}for(let N=0;N<s;N++)for(let v=0;v<r;v++){const S=x[v][N],L=x[v+1][N],O=x[v+1][N+1],B=x[v][N+1];(t>0||v!==0)&&(h.push(S,L,B),R+=3),(e>0||v!==r-1)&&(h.push(L,O,B),R+=3)}c.addGroup(f,R,0),f+=R}function b(y){const A=m,R=new ut,C=new P;let N=0;const v=y===!0?t:e,S=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*S,0),d.push(0,S,0),p.push(.5,.5),m++;const L=m;for(let O=0;O<=s;O++){const q=O/s*l+o,k=Math.cos(q),G=Math.sin(q);C.x=v*G,C.y=g*S,C.z=v*k,u.push(C.x,C.y,C.z),d.push(0,S,0),R.x=k*.5+.5,R.y=G*.5*S+.5,p.push(R.x,R.y),m++}for(let O=0;O<s;O++){const B=A+O,q=L+O;y===!0?h.push(q,q+1,B):h.push(q+1,q,B),N+=3}c.addGroup(f,N,y===!0?1:2),f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class li extends ve{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new li(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ut:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new de;for(let p=0;p<=t;p++){const m=p/t;s[p]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Jt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Jt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Po extends En{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Uu extends Po{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Lo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const nr=new P,oa=new Lo,la=new Lo,ca=new Lo;class Nu extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(nr.subVectors(s[0],s[1]).add(s[0]),c=nr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(nr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=nr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),oa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),la.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),ca.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(oa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),la.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ca.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(oa.calc(l),la.calc(l),ca.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Fu(i,t){const e=1-i;return e*e*t}function Ou(i,t){return 2*(1-i)*i*t}function Bu(i,t){return i*i*t}function hs(i,t,e,n){return Fu(i,t)+Ou(i,e)+Bu(i,n)}function zu(i,t){const e=1-i;return e*e*e*t}function ku(i,t){const e=1-i;return 3*e*e*i*t}function Vu(i,t){return 3*(1-i)*i*i*t}function Hu(i,t){return i*i*i*t}function us(i,t,e,n,s){return zu(i,t)+ku(i,e)+Vu(i,n)+Hu(i,s)}class Pc extends En{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(us(t,s.x,r.x,a.x,o.x),us(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gu extends En{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(us(t,s.x,r.x,a.x,o.x),us(t,s.y,r.y,a.y,o.y),us(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lc extends En{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wu extends En{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dc extends En{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(hs(t,s.x,r.x,a.x),hs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xu extends En{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(hs(t,s.x,r.x,a.x),hs(t,s.y,r.y,a.y),hs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ic extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(xl(o,l.x,c.x,h.x,u.x),xl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var ho=Object.freeze({__proto__:null,ArcCurve:Uu,CatmullRomCurve3:Nu,CubicBezierCurve:Pc,CubicBezierCurve3:Gu,EllipseCurve:Po,LineCurve:Lc,LineCurve3:Wu,QuadraticBezierCurve:Dc,QuadraticBezierCurve3:Xu,SplineCurve:Ic});class qu extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ho[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ho[s.type]().fromJSON(s))}return this}}class vl extends qu{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Lc(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Dc(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Pc(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ic(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Po(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Uc extends vl{constructor(t){super(t),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new vl().fromJSON(s))}return this}}function Yu(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Nc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=ju(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){const p=i[d],m=i[d+1];p<o&&(o=p),m<l&&(l=m),p>h&&(h=p),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return vs(r,a,e,o,l,c,0),a}function Nc(i,t,e,n,s){let r;if(s===cd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ml(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ml(a/n|0,i[a],i[a+1],r);return r&&Hi(r,r.next)&&(Ss(r),r=r.next),r}function di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Hi(e,e.next)||me(e.prev,e,e.next)===0)){if(Ss(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&id(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?$u(i,n,s,r):Zu(i)){t.push(l.i,i.i,c.i),Ss(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ku(di(i),t),vs(i,t,e,n,s,r,2)):a===2&&Ju(i,t,e,n,s,r):vs(di(i),t,e,n,s,r,1);break}}}function Zu(i){const t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&rs(s,o,r,l,a,c,m.x,m.y)&&me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $u(i,t,e,n){const s=i.prev,r=i,a=i.next;if(me(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,l,c),m=Math.min(h,u,d),x=Math.max(o,l,c),g=Math.max(h,u,d),f=uo(p,m,t,e,n),T=uo(x,g,t,e,n);let b=i.prevZ,y=i.nextZ;for(;b&&b.z>=f&&y&&y.z<=T;){if(b.x>=p&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&rs(o,h,l,u,c,d,b.x,b.y)&&me(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&rs(o,h,l,u,c,d,y.x,y.y)&&me(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&rs(o,h,l,u,c,d,b.x,b.y)&&me(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=T;){if(y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&rs(o,h,l,u,c,d,y.x,y.y)&&me(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ku(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Hi(n,s)&&Oc(n,e,e.next,s)&&Ms(n,s)&&Ms(s,n)&&(t.push(n.i,e.i,s.i),Ss(e),Ss(e.next),e=i=s),e=e.next}while(e!==i);return di(e)}function Ju(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ad(a,o)){let l=Bc(a,o);a=di(a,a.next),l=di(l,l.next),vs(a,t,e,n,s,r,0),vs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ju(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Nc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(rd(c))}s.sort(Qu);for(let r=0;r<s.length;r++)e=td(s[r],e);return e}function Qu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function td(i,t){const e=ed(i,t);if(!e)return t;const n=Bc(e,i);return di(n,n.next),di(e,e.next)}function ed(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Hi(i,e))return e;do{if(Hi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Fc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Ms(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&nd(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function nd(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function id(i,t,e,n){let s=i;do s.z===0&&(s.z=uo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sd(s)}function sd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function uo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function rd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function rs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Fc(i,t,e,n,s,r,a,o)}function ad(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!od(i,t)&&(Ms(i,t)&&Ms(t,i)&&ld(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Hi(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Hi(i,t){return i.x===t.x&&i.y===t.y}function Oc(i,t,e,n){const s=sr(me(i,t,e)),r=sr(me(i,t,n)),a=sr(me(e,n,i)),o=sr(me(e,n,t));return!!(s!==r&&a!==o||s===0&&ir(i,e,t)||r===0&&ir(i,n,t)||a===0&&ir(e,i,n)||o===0&&ir(e,t,n))}function ir(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function sr(i){return i>0?1:i<0?-1:0}function od(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Oc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ms(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function ld(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bc(i,t){const e=fo(i.i,i.x,i.y),n=fo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ml(i,t,e,n){const s=fo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ss(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class hd{static triangulate(t,e,n=2){return Yu(t,e,n)}}class Ni{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ni.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Sl(t),yl(n,t);let a=t.length;e.forEach(Sl);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,yl(n,e[l]);const o=hd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Sl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Do extends ye{constructor(t=new Uc([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:ud;let b,y=!1,A,R,C,N;if(f){b=f.getSpacedPoints(h),y=!0,d=!1;const J=f.isCatmullRomCurve3?f.closed:!1;A=f.computeFrenetFrames(h,J),R=new P,C=new P,N=new P}d||(g=0,p=0,m=0,x=0);const v=o.extractPoints(c);let S=v.shape;const L=v.holes;if(!Ni.isClockWise(S)){S=S.reverse();for(let J=0,nt=L.length;J<nt;J++){const et=L[J];Ni.isClockWise(et)&&(L[J]=et.reverse())}}function B(J){const et=10000000000000001e-36;let gt=J[0];for(let w=1;w<=J.length;w++){const Ut=w%J.length,Et=J[Ut],Bt=Et.x-gt.x,ot=Et.y-gt.y,E=Bt*Bt+ot*ot,_=Math.max(Math.abs(Et.x),Math.abs(Et.y),Math.abs(gt.x),Math.abs(gt.y)),I=et*_*_;if(E<=I){J.splice(Ut,1),w--;continue}gt=Et}}B(S),L.forEach(B);const q=L.length,k=S;for(let J=0;J<q;J++){const nt=L[J];S=S.concat(nt)}function G(J,nt,et){return nt||te("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(nt,et)}const z=S.length;function j(J,nt,et){let gt,w,Ut;const Et=J.x-nt.x,Bt=J.y-nt.y,ot=et.x-J.x,E=et.y-J.y,_=Et*Et+Bt*Bt,I=Et*E-Bt*ot;if(Math.abs(I)>Number.EPSILON){const X=Math.sqrt(_),Q=Math.sqrt(ot*ot+E*E),Y=nt.x-Bt/X,Pt=nt.y+Et/X,ht=et.x-E/Q,Rt=et.y+ot/Q,zt=((ht-Y)*E-(Rt-Pt)*ot)/(Et*E-Bt*ot);gt=Y+Et*zt-J.x,w=Pt+Bt*zt-J.y;const it=gt*gt+w*w;if(it<=2)return new ut(gt,w);Ut=Math.sqrt(it/2)}else{let X=!1;Et>Number.EPSILON?ot>Number.EPSILON&&(X=!0):Et<-Number.EPSILON?ot<-Number.EPSILON&&(X=!0):Math.sign(Bt)===Math.sign(E)&&(X=!0),X?(gt=-Bt,w=Et,Ut=Math.sqrt(_)):(gt=Et,w=Bt,Ut=Math.sqrt(_/2))}return new ut(gt/Ut,w/Ut)}const ct=[];for(let J=0,nt=k.length,et=nt-1,gt=J+1;J<nt;J++,et++,gt++)et===nt&&(et=0),gt===nt&&(gt=0),ct[J]=j(k[J],k[et],k[gt]);const at=[];let $,lt=ct.concat();for(let J=0,nt=q;J<nt;J++){const et=L[J];$=[];for(let gt=0,w=et.length,Ut=w-1,Et=gt+1;gt<w;gt++,Ut++,Et++)Ut===w&&(Ut=0),Et===w&&(Et=0),$[gt]=j(et[gt],et[Ut],et[Et]);at.push($),lt=lt.concat($)}let mt;if(g===0)mt=Ni.triangulateShape(k,L);else{const J=[],nt=[];for(let et=0;et<g;et++){const gt=et/g,w=p*Math.cos(gt*Math.PI/2),Ut=m*Math.sin(gt*Math.PI/2)+x;for(let Et=0,Bt=k.length;Et<Bt;Et++){const ot=G(k[Et],ct[Et],Ut);Dt(ot.x,ot.y,-w),gt===0&&J.push(ot)}for(let Et=0,Bt=q;Et<Bt;Et++){const ot=L[Et];$=at[Et];const E=[];for(let _=0,I=ot.length;_<I;_++){const X=G(ot[_],$[_],Ut);Dt(X.x,X.y,-w),gt===0&&E.push(X)}gt===0&&nt.push(E)}}mt=Ni.triangulateShape(J,nt)}const Ht=mt.length,Tt=m+x;for(let J=0;J<z;J++){const nt=d?G(S[J],lt[J],Tt):S[J];y?(C.copy(A.normals[0]).multiplyScalar(nt.x),R.copy(A.binormals[0]).multiplyScalar(nt.y),N.copy(b[0]).add(C).add(R),Dt(N.x,N.y,N.z)):Dt(nt.x,nt.y,0)}for(let J=1;J<=h;J++)for(let nt=0;nt<z;nt++){const et=d?G(S[nt],lt[nt],Tt):S[nt];y?(C.copy(A.normals[J]).multiplyScalar(et.x),R.copy(A.binormals[J]).multiplyScalar(et.y),N.copy(b[J]).add(C).add(R),Dt(N.x,N.y,N.z)):Dt(et.x,et.y,u/h*J)}for(let J=g-1;J>=0;J--){const nt=J/g,et=p*Math.cos(nt*Math.PI/2),gt=m*Math.sin(nt*Math.PI/2)+x;for(let w=0,Ut=k.length;w<Ut;w++){const Et=G(k[w],ct[w],gt);Dt(Et.x,Et.y,u+et)}for(let w=0,Ut=L.length;w<Ut;w++){const Et=L[w];$=at[w];for(let Bt=0,ot=Et.length;Bt<ot;Bt++){const E=G(Et[Bt],$[Bt],gt);y?Dt(E.x,E.y+b[h-1].y,b[h-1].x+et):Dt(E.x,E.y,u+et)}}}V(),K();function V(){const J=s.length/3;if(d){let nt=0,et=z*nt;for(let gt=0;gt<Ht;gt++){const w=mt[gt];yt(w[2]+et,w[1]+et,w[0]+et)}nt=h+g*2,et=z*nt;for(let gt=0;gt<Ht;gt++){const w=mt[gt];yt(w[0]+et,w[1]+et,w[2]+et)}}else{for(let nt=0;nt<Ht;nt++){const et=mt[nt];yt(et[2],et[1],et[0])}for(let nt=0;nt<Ht;nt++){const et=mt[nt];yt(et[0]+z*h,et[1]+z*h,et[2]+z*h)}}n.addGroup(J,s.length/3-J,0)}function K(){const J=s.length/3;let nt=0;xt(k,nt),nt+=k.length;for(let et=0,gt=L.length;et<gt;et++){const w=L[et];xt(w,nt),nt+=w.length}n.addGroup(J,s.length/3-J,1)}function xt(J,nt){let et=J.length;for(;--et>=0;){const gt=et;let w=et-1;w<0&&(w=J.length-1);for(let Ut=0,Et=h+g*2;Ut<Et;Ut++){const Bt=z*Ut,ot=z*(Ut+1),E=nt+gt+Bt,_=nt+w+Bt,I=nt+w+ot,X=nt+gt+ot;Qt(E,_,I,X)}}}function Dt(J,nt,et){l.push(J),l.push(nt),l.push(et)}function yt(J,nt,et){re(J),re(nt),re(et);const gt=s.length/3,w=T.generateTopUV(n,s,gt-3,gt-2,gt-1);Gt(w[0]),Gt(w[1]),Gt(w[2])}function Qt(J,nt,et,gt){re(J),re(nt),re(gt),re(nt),re(et),re(gt);const w=s.length/3,Ut=T.generateSideWallUV(n,s,w-6,w-3,w-2,w-1);Gt(Ut[0]),Gt(Ut[1]),Gt(Ut[3]),Gt(Ut[1]),Gt(Ut[2]),Gt(Ut[3])}function re(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Gt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ho[s.type]().fromJSON(s)),new Do(n,t.options)}}const ud={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,a),new ut(o,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ut(a,1-l),new ut(c,1-u),new ut(d,1-m),new ut(x,1-f)]:[new ut(o,1-l),new ut(h,1-u),new ut(p,1-m),new ut(g,1-f)]}};function dd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class gn extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],m=[],x=[],g=[];for(let f=0;f<h;f++){const T=f*d-a;for(let b=0;b<c;b++){const y=b*u-r;m.push(y,-T,0),x.push(0,0,1),g.push(b/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const b=T+c*f,y=T+c*(f+1),A=T+1+c*(f+1),R=T+1+c*f;p.push(b,y,R),p.push(y,A,R)}this.setIndex(p),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.width,t.height,t.widthSegments,t.heightSegments)}}class an extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,p=[],m=[],x=[],g=[];for(let f=0;f<=n;f++){const T=[],b=f/n;let y=0;f===0&&a===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const R=A/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+b*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(R+y,1-b),T.push(c++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<e;T++){const b=h[f][T+1],y=h[f][T],A=h[f+1][T],R=h[f+1][T+1];(f!==0||a>0)&&p.push(b,y,R),(f!==n-1||l<Math.PI)&&p.push(y,A,R)}this.setIndex(p),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fi extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){const x=m/s*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){const x=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,T=(s+1)*p+m;a.push(x,g,T),a.push(g,f,T)}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fd extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class se extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pd extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class md extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ar extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class gd extends Ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ha=new de,El=new P,bl=new P;class zc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=qe,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;El.setFromMatrixPosition(t.matrixWorld),e.position.copy(El),bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bl),e.updateMatrixWorld(),ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _d extends zc{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}}class hi extends Ar{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _d}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Io extends Ec{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xd extends zc{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vd extends Ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new xd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Md extends Ar{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sd extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class yd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const wl=new de;class kc{constructor(t,e,n=0,s=1/0){this.ray=new wr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):te("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wl),this}intersectObject(t,e=!0,n=[]){return po(t,this,n,e),n.sort(Tl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)po(t[s],this,n,e);return n.sort(Tl),n}}function Tl(i,t){return i.distance-t.distance}function po(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)po(r[a],t,e,!0)}}function Al(i,t,e,n){const s=Ed(n);switch(e){case fc:return i*t;case mc:return i*t/s.components*s.byteLength;case So:return i*t/s.components*s.byteLength;case zi:return i*t*2/s.components*s.byteLength;case yo:return i*t*2/s.components*s.byteLength;case pc:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Eo:return i*t*4/s.components*s.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:case Ia:return Math.max(i,16)*Math.max(t,8)/4;case Pa:case Da:return Math.max(i,8)*Math.max(t,8)/2;case Ua:case Na:case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fa:case za:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case eo:case no:case io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case so:case ro:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ao:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ed(i){switch(i){case qe:case cc:return{byteLength:1,components:1};case fs:case hc:case Un:return{byteLength:2,components:1};case vo:case Mo:return{byteLength:2,components:4};case Sn:case xo:case pn:return{byteLength:4,components:1};case uc:case dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_o}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_o);function Vc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function bd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){const m=u[d],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){const x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
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
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
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
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
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
#endif`,zd=`#ifdef USE_BUMPMAP
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zd=`#define PI 3.141592653589793
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
} // validated`,$d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ff=`#ifdef USE_GRADIENTMAP
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
}`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_f=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,xf=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,bf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wf=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
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
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
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
}`,Dp=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ip=`#define DISTANCE
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
}`,Up=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,zp=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,Vp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Gp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yp=`#define PHONG
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
}`,Zp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,$p=`#define STANDARD
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
}`,Kp=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Jp=`#define TOON
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
}`,jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Qp=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sm=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:wd,alphahash_pars_fragment:Td,alphamap_fragment:Ad,alphamap_pars_fragment:Rd,alphatest_fragment:Cd,alphatest_pars_fragment:Pd,aomap_fragment:Ld,aomap_pars_fragment:Dd,batching_pars_vertex:Id,batching_vertex:Ud,begin_vertex:Nd,beginnormal_vertex:Fd,bsdfs:Od,iridescence_fragment:Bd,bumpmap_pars_fragment:zd,clipping_planes_fragment:kd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Gd,color_fragment:Wd,color_pars_fragment:Xd,color_pars_vertex:qd,color_vertex:Yd,common:Zd,cube_uv_reflection_fragment:$d,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Jd,displacementmap_vertex:jd,emissivemap_fragment:Qd,emissivemap_pars_fragment:tf,colorspace_fragment:ef,colorspace_pars_fragment:nf,envmap_fragment:sf,envmap_common_pars_fragment:rf,envmap_pars_fragment:af,envmap_pars_vertex:of,envmap_physical_pars_fragment:xf,envmap_vertex:lf,fog_vertex:cf,fog_pars_vertex:hf,fog_fragment:uf,fog_pars_fragment:df,gradientmap_pars_fragment:ff,lightmap_pars_fragment:pf,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:_f,lights_toon_fragment:vf,lights_toon_pars_fragment:Mf,lights_phong_fragment:Sf,lights_phong_pars_fragment:yf,lights_physical_fragment:Ef,lights_physical_pars_fragment:bf,lights_fragment_begin:wf,lights_fragment_maps:Tf,lights_fragment_end:Af,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Cf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Lf,map_fragment:Df,map_pars_fragment:If,map_particle_fragment:Uf,map_particle_pars_fragment:Nf,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:Of,morphinstance_vertex:Bf,morphcolor_vertex:zf,morphnormal_vertex:kf,morphtarget_pars_vertex:Vf,morphtarget_vertex:Hf,normal_fragment_begin:Gf,normal_fragment_maps:Wf,normal_pars_fragment:Xf,normal_pars_vertex:qf,normal_vertex:Yf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:jf,opaque_fragment:Qf,packing:tp,premultiplied_alpha_fragment:ep,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:sp,roughnessmap_fragment:rp,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:op,shadowmap_pars_vertex:lp,shadowmap_vertex:cp,shadowmask_pars_fragment:hp,skinbase_vertex:up,skinning_pars_vertex:dp,skinning_vertex:fp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:gp,tonemapping_fragment:_p,tonemapping_pars_fragment:xp,transmission_fragment:vp,transmission_pars_fragment:Mp,uv_pars_fragment:Sp,uv_pars_vertex:yp,uv_vertex:Ep,worldpos_vertex:bp,background_vert:wp,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:Rp,cube_vert:Cp,cube_frag:Pp,depth_vert:Lp,depth_frag:Dp,distance_vert:Ip,distance_frag:Up,equirect_vert:Np,equirect_frag:Fp,linedashed_vert:Op,linedashed_frag:Bp,meshbasic_vert:zp,meshbasic_frag:kp,meshlambert_vert:Vp,meshlambert_frag:Hp,meshmatcap_vert:Gp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:Zp,meshphysical_vert:$p,meshphysical_frag:Kp,meshtoon_vert:Jp,meshtoon_frag:jp,points_vert:Qp,points_frag:tm,shadow_vert:em,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},vt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},un={basic:{uniforms:Ue([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ue([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ue([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ue([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ue([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ue([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ue([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ue([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ue([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ue([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ue([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Ue([vt.common,vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Ue([vt.lights,vt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};un.physical={uniforms:Ue([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const rr={r:0,b:0,g:0},ti=new Ye,rm=new de;function am(i,t,e,n,s,r,a){const o=new jt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function m(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function x(b){let y=!1;const A=m(b);A===null?f(o,l):A&&A.isColor&&(f(A,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,y){const A=m(y);A&&(A.isCubeTexture||A.mapping===br)?(h===void 0&&(h=new Z(new qt(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Vi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(y.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(ti)),h.material.toneMapped=ee.getTransfer(A.colorSpace)!==le,(u!==A||d!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Z(new gn(2,2),new yn({name:"BackgroundMaterial",uniforms:Vi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ee.getTransfer(A.colorSpace)!==le,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,y){b.getRGB(rr,yc(i)),n.buffers.color.setClear(rr.r,rr.g,rr.b,y,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:x,addToRenderList:g,dispose:T}}function om(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,L,O,B,q){let k=!1;const G=u(B,O,L);r!==G&&(r=G,c(r.object)),k=p(S,B,O,q),k&&m(S,B,O,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(S,L,O,B),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,O){const B=O.wireframe===!0;let q=n[S.id];q===void 0&&(q={},n[S.id]=q);let k=q[L.id];k===void 0&&(k={},q[L.id]=k);let G=k[B];return G===void 0&&(G=d(l()),k[B]=G),G}function d(S){const L=[],O=[],B=[];for(let q=0;q<e;q++)L[q]=0,O[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,L,O,B){const q=r.attributes,k=L.attributes;let G=0;const z=O.getAttributes();for(const j in z)if(z[j].location>=0){const at=q[j];let $=k[j];if($===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),at===void 0||at.attribute!==$||$&&at.data!==$.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function m(S,L,O,B){const q={},k=L.attributes;let G=0;const z=O.getAttributes();for(const j in z)if(z[j].location>=0){let at=k[j];at===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(at=S.instanceColor));const $={};$.attribute=at,at&&at.data&&($.data=at.data),q[j]=$,G++}r.attributes=q,r.attributesNum=G,r.index=B}function x(){const S=r.newAttributes;for(let L=0,O=S.length;L<O;L++)S[L]=0}function g(S){f(S,0)}function f(S,L){const O=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;O[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),q[S]!==L&&(i.vertexAttribDivisor(S,L),q[S]=L)}function T(){const S=r.newAttributes,L=r.enabledAttributes;for(let O=0,B=L.length;O<B;O++)L[O]!==S[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function b(S,L,O,B,q,k,G){G===!0?i.vertexAttribIPointer(S,L,O,q,k):i.vertexAttribPointer(S,L,O,B,q,k)}function y(S,L,O,B){x();const q=B.attributes,k=O.getAttributes(),G=L.defaultAttributeValues;for(const z in k){const j=k[z];if(j.location>=0){let ct=q[z];if(ct===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),ct!==void 0){const at=ct.normalized,$=ct.itemSize,lt=t.get(ct);if(lt===void 0)continue;const mt=lt.buffer,Ht=lt.type,Tt=lt.bytesPerElement,V=Ht===i.INT||Ht===i.UNSIGNED_INT||ct.gpuType===xo;if(ct.isInterleavedBufferAttribute){const K=ct.data,xt=K.stride,Dt=ct.offset;if(K.isInstancedInterleavedBuffer){for(let yt=0;yt<j.locationSize;yt++)f(j.location+yt,K.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let yt=0;yt<j.locationSize;yt++)g(j.location+yt);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let yt=0;yt<j.locationSize;yt++)b(j.location+yt,$/j.locationSize,Ht,at,xt*Tt,(Dt+$/j.locationSize*yt)*Tt,V)}else{if(ct.isInstancedBufferAttribute){for(let K=0;K<j.locationSize;K++)f(j.location+K,ct.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let K=0;K<j.locationSize;K++)g(j.location+K);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let K=0;K<j.locationSize;K++)b(j.location+K,$/j.locationSize,Ht,at,$*Tt,$/j.locationSize*K*Tt,V)}}else if(G!==void 0){const at=G[z];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(j.location,at);break;case 3:i.vertexAttrib3fv(j.location,at);break;case 4:i.vertexAttrib4fv(j.location,at);break;default:i.vertexAttrib1fv(j.location,at)}}}}T()}function A(){N();for(const S in n){const L=n[S];for(const O in L){const B=L[O];for(const q in B)h(B[q].object),delete B[q];delete L[O]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const O in L){const B=L[O];for(const q in B)h(B[q].object),delete B[q];delete L[O]}delete n[S.id]}function C(S){for(const L in n){const O=n[L];if(O[S.id]===void 0)continue;const B=O[S.id];for(const q in B)h(B[q].object),delete B[q];delete O[S.id]}}function N(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function lm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==on&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==qe&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==pn&&!N)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:y,maxSamples:A,samples:R}}function hm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ni,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const T=r?0:n,b=T*4;let y=f.clippingState||null;l.value=y,y=h(m,d,b,p);for(let A=0;A!==b;++A)y[A]=e[A];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const f=p+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<f)&&(g=new Float32Array(f));for(let b=0,y=p;b!==x;++b,y+=4)a.copy(u[b]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function um(i){let t=new WeakMap;function e(a,o){return o===Aa?a.mapping=ui:o===Ra&&(a.mapping=Bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Aa||o===Ra)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Wn=4,Rl=[.125,.215,.35,.446,.526,.582],si=20,dm=256,es=new Io,Cl=new jt;let ua=null,da=0,fa=0,pa=!1;const fm=new P;class Pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=fm}=r;ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,Di(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Un,format:on,colorSpace:ki,depthBuffer:!1},s=Ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pm(r)),this._blurMaterial=gm(r,t,e),this._ggxMaterial=mm(r,t,e)}return s}_compileMaterial(t){const e=new Z(new ye,t);this._renderer.compile(e,es)}_sceneToCubeUV(t,e,n,s,r){const l=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Cl),u.toneMapping=xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Z(new qt,new _s({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let f=!1;const T=t.background;T?T.isColor&&(g.color.copy(T),t.background=null,f=!0):(g.color.copy(Cl),f=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const A=this._cubeSize;Di(s,y*A,b>2?A:0,A,A),u.setRenderTarget(s),f&&u.render(x,l),u.render(t,l)}u.toneMapping=p,u.autoClear=d,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ui||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Di(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,es)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Wn?n-m+Wn:0),f=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=m-e,Di(r,g,f,3*x,2*x),s.setRenderTarget(r),s.render(o,es),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Di(t,g,f,3*x,2*x),s.setRenderTarget(t),s.render(o,es)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&te("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*si-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):si;g>si&&Vt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${si}`);const f=[];let T=0;for(let C=0;C<si;++C){const N=C/x,v=Math.exp(-N*N/2);f.push(v),C===0?T+=v:C<g&&(T+=2*v)}for(let C=0;C<f.length;C++)f[C]=f[C]/T;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;const y=this._sizeLods[s],A=3*y*(s>b-Wn?s-b+Wn:0),R=4*(this._cubeSize-y);Di(e,A,R,3*y,2*y),l.setRenderTarget(e),l.render(u,es)}}function pm(i){const t=[],e=[],n=[];let s=i;const r=i-Wn+1+Rl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Wn?l=Rl[a-i+Wn-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,x=3,g=2,f=1,T=new Float32Array(x*m*p),b=new Float32Array(g*m*p),y=new Float32Array(f*m*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,N=R>2?0:-1,v=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];T.set(v,x*m*R),b.set(d,g*m*R);const S=[R,R,R,R,R,R];y.set(S,f*m*R)}const A=new ye;A.setAttribute("position",new Be(T,x)),A.setAttribute("uv",new Be(b,g)),A.setAttribute("faceIndex",new Be(y,f)),n.push(new Z(A,null)),s>Wn&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ll(i,t,e){const n=new Mn(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Di(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function mm(i,t,e){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function gm(i,t,e){const n=new Float32Array(si),s=new P(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rr(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Dl(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rr(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Il(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Rr(){return`

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
	`}function _m(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Aa||l===Ra,h=l===ui||l===Bi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Pl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Pl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function xm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ms("WebGLRenderer: "+n+" extension not supported."),s}}}function vm(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,m=u.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let b=0,y=T.length;b<y;b+=3){const A=T[b+0],R=T[b+1],C=T[b+2];d.push(A,R,R,C,C,A)}}else if(m!==void 0){const T=m.array;x=m.version;for(let b=0,y=T.length/3-1;b<y;b+=3){const A=b+0,R=b+1,C=b+2;d.push(A,R,R,C,C,A)}}else return;const g=new(_c(d)?Sc:Mc)(d,1);g.version=x;const f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Mm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,m);let f=0;for(let T=0;T<m;T++)f+=p[T]*x[T];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Sm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:te("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ym(i,t,e){const n=new WeakMap,s=new xe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let A=o.attributes.position.count*y,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*R*4*u),N=new xc(C,A,R,u);N.type=pn,N.needsUpdate=!0;const v=y*4;for(let L=0;L<u;L++){const O=f[L],B=T[L],q=b[L],k=A*R*4*L;for(let G=0;G<O.count;G++){const z=G*v;m===!0&&(s.fromBufferAttribute(O,G),C[k+z+0]=s.x,C[k+z+1]=s.y,C[k+z+2]=s.z,C[k+z+3]=0),x===!0&&(s.fromBufferAttribute(B,G),C[k+z+4]=s.x,C[k+z+5]=s.y,C[k+z+6]=s.z,C[k+z+7]=0),g===!0&&(s.fromBufferAttribute(q,G),C[k+z+8]=s.x,C[k+z+9]=s.y,C[k+z+10]=s.z,C[k+z+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new ut(A,R)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Em(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const bm={[ec]:"LINEAR_TONE_MAPPING",[nc]:"REINHARD_TONE_MAPPING",[ic]:"CINEON_TONE_MAPPING",[sc]:"ACES_FILMIC_TONE_MAPPING",[ac]:"AGX_TONE_MAPPING",[oc]:"NEUTRAL_TONE_MAPPING",[rc]:"CUSTOM_TONE_MAPPING"};function wm(i,t,e,n,s){const r=new Mn(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Mn(t,e,{type:Un,depthBuffer:!1,stencilBuffer:!1}),o=new ye;o.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Me([0,2,0,0,2,0],2));const l=new fd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Z(o,l),h=new Io(-1,1,1,-1,0,1);let u=null,d=null,p=!1,m,x=null,g=[],f=!1;this.setSize=function(T,b){r.setSize(T,b),a.setSize(T,b);for(let y=0;y<g.length;y++){const A=g[y];A.setSize&&A.setSize(T,b)}},this.setEffects=function(T){g=T,f=g.length>0&&g[0].isRenderPass===!0;const b=r.width,y=r.height;for(let A=0;A<g.length;A++){const R=g[A];R.setSize&&R.setSize(b,y)}},this.begin=function(T,b){if(p||T.toneMapping===xn&&g.length===0)return!1;if(x=b,b!==null){const y=b.width,A=b.height;(r.width!==y||r.height!==A)&&this.setSize(y,A)}return f===!1&&T.setRenderTarget(r),m=T.toneMapping,T.toneMapping=xn,!0},this.hasRenderPass=function(){return f},this.end=function(T,b){T.toneMapping=m,p=!0;let y=r,A=a;for(let R=0;R<g.length;R++){const C=g[R];if(C.enabled!==!1&&(C.render(T,A,y,b),C.needsSwap!==!1)){const N=y;y=A,A=N}}if(u!==T.outputColorSpace||d!==T.toneMapping){u=T.outputColorSpace,d=T.toneMapping,l.defines={},ee.getTransfer(u)===le&&(l.defines.SRGB_TRANSFER="");const R=bm[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,T.setRenderTarget(x),T.render(c,h),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Hc=new Le,mo=new xs(1,1),Gc=new xc,Wc=new ou,Xc=new bc,Ul=[],Nl=[],Fl=new Float32Array(16),Ol=new Float32Array(9),Bl=new Float32Array(4);function Wi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ul[s];if(r===void 0&&(r=new Float32Array(s),Ul[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cr(i,t){let e=Nl[t];e===void 0&&(e=new Int32Array(t),Nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Bl.set(n),i.uniformMatrix2fv(this.addr,!1,Bl),we(e,n)}}function Lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Ol.set(n),i.uniformMatrix3fv(this.addr,!1,Ol),we(e,n)}}function Dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Fl.set(n),i.uniformMatrix4fv(this.addr,!1,Fl),we(e,n)}}function Im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function Om(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function Vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mo.compareFunction=e.isReversedDepthBuffer()?wo:bo,r=mo):r=Hc,e.setTexture2D(t||r,s)}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wc,s)}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xc,s)}function Wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gc,s)}function Xm(i){switch(i){case 5126:return Tm;case 35664:return Am;case 35665:return Rm;case 35666:return Cm;case 35674:return Pm;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Im;case 35667:case 35671:return Um;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return zm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Wm}}function qm(i,t){i.uniform1fv(this.addr,t)}function Ym(i,t){const e=Wi(t,this.size,2);i.uniform2fv(this.addr,e)}function Zm(i,t){const e=Wi(t,this.size,3);i.uniform3fv(this.addr,e)}function $m(i,t){const e=Wi(t,this.size,4);i.uniform4fv(this.addr,e)}function Km(i,t){const e=Wi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jm(i,t){const e=Wi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jm(i,t){const e=Wi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qm(i,t){i.uniform1iv(this.addr,t)}function t0(i,t){i.uniform2iv(this.addr,t)}function e0(i,t){i.uniform3iv(this.addr,t)}function n0(i,t){i.uniform4iv(this.addr,t)}function i0(i,t){i.uniform1uiv(this.addr,t)}function s0(i,t){i.uniform2uiv(this.addr,t)}function r0(i,t){i.uniform3uiv(this.addr,t)}function a0(i,t){i.uniform4uiv(this.addr,t)}function o0(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=mo:a=Hc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function l0(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wc,r[a])}function c0(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Xc,r[a])}function h0(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gc,r[a])}function u0(i){switch(i){case 5126:return qm;case 35664:return Ym;case 35665:return Zm;case 35666:return $m;case 35674:return Km;case 35675:return Jm;case 35676:return jm;case 5124:case 35670:return Qm;case 35667:case 35671:return t0;case 35668:case 35672:return e0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}class d0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xm(e.type)}}class f0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u0(e.type)}}class p0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function zl(i,t){i.seq.push(t),i.map[t.id]=t}function m0(i,t,e){const n=i.name,s=n.length;for(ma.lastIndex=0;;){const r=ma.exec(n),a=ma.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zl(e,c===void 0?new d0(o,i,t):new f0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new p0(o),zl(e,u)),e=u}}}class fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);m0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function kl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const g0=37297;let _0=0;function x0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Vl=new Yt;function v0(i){ee._getMatrix(Vl,ee.workingColorSpace,i);const t=`mat3( ${Vl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case pr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+x0(i.getShaderSource(t),o)}else return r}function M0(i,t){const e=v0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const S0={[ec]:"Linear",[nc]:"Reinhard",[ic]:"Cineon",[sc]:"ACESFilmic",[ac]:"AgX",[oc]:"Neutral",[rc]:"Custom"};function y0(i,t){const e=S0[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ar=new P;function E0(){ee.getLuminanceCoefficients(ar);const i=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function w0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function as(i){return i!==""}function Gl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(A0,C0)}const R0=new Map;function C0(i,t){let e=Zt[t];if(e===void 0){const n=R0.get(t);if(n!==void 0)e=Zt[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}const P0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(i){return i.replace(P0,L0)}function L0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ql(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const D0={[or]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function I0(i){return D0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const U0={[ui]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function N0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":U0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const F0={[Bi]:"ENVMAP_MODE_REFRACTION"};function O0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":F0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const B0={[tc]:"ENVMAP_BLENDING_MULTIPLY",[Ah]:"ENVMAP_BLENDING_MIX",[Rh]:"ENVMAP_BLENDING_ADD"};function z0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":B0[i.combine]||"ENVMAP_BLENDING_NONE"}function k0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function V0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=I0(e),c=N0(e),h=O0(e),u=z0(e),d=k0(e),p=b0(e),m=w0(r),x=s.createProgram();let g,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(as).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(as).join(`
`),f.length>0&&(f+=`
`)):(g=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),f=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==xn?y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,M0("linearToOutputTexel",e.outputColorSpace),E0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),a=go(a),a=Gl(a,e),a=Wl(a,e),o=go(o),o=Gl(o,e),o=Wl(o,e),a=Xl(a),o=Xl(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=T+g+a,y=T+f+o,A=kl(s,s.VERTEX_SHADER,b),R=kl(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(L){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(A)||"",q=s.getShaderInfoLog(R)||"",k=O.trim(),G=B.trim(),z=q.trim();let j=!0,ct=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,R);else{const at=Hl(s,A,"vertex"),$=Hl(s,R,"fragment");te("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+at+`
`+$)}else k!==""?Vt("WebGLProgram: Program Info Log:",k):(G===""||z==="")&&(ct=!1);ct&&(L.diagnostics={runnable:j,programLog:k,vertexShader:{log:G,prefix:g},fragmentShader:{log:z,prefix:f}})}s.deleteShader(A),s.deleteShader(R),N=new fr(s,x),v=T0(s,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,g0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}let H0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new W0(t),e.set(t,n)),n}}class W0{constructor(t){this.id=H0++,this.code=t,this.usedTimes=0}}function X0(i,t,e,n,s,r,a){const o=new Tr,l=new G0,c=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,S,L,O,B){const q=O.fog,k=B.geometry,G=v.isMeshStandardMaterial?O.environment:null,z=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),j=z&&z.mapping===br?z.image.height:null,ct=m[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&Vt("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const at=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$=at!==void 0?at.length:0;let lt=0;k.morphAttributes.position!==void 0&&(lt=1),k.morphAttributes.normal!==void 0&&(lt=2),k.morphAttributes.color!==void 0&&(lt=3);let mt,Ht,Tt,V;if(ct){const ae=un[ct];mt=ae.vertexShader,Ht=ae.fragmentShader}else mt=v.vertexShader,Ht=v.fragmentShader,l.update(v),Tt=l.getVertexShaderID(v),V=l.getFragmentShaderID(v);const K=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,yt=B.isBatchedMesh===!0,Qt=!!v.map,re=!!v.matcap,Gt=!!z,J=!!v.aoMap,nt=!!v.lightMap,et=!!v.bumpMap,gt=!!v.normalMap,w=!!v.displacementMap,Ut=!!v.emissiveMap,Et=!!v.metalnessMap,Bt=!!v.roughnessMap,ot=v.anisotropy>0,E=v.clearcoat>0,_=v.dispersion>0,I=v.iridescence>0,X=v.sheen>0,Q=v.transmission>0,Y=ot&&!!v.anisotropyMap,Pt=E&&!!v.clearcoatMap,ht=E&&!!v.clearcoatNormalMap,Rt=E&&!!v.clearcoatRoughnessMap,zt=I&&!!v.iridescenceMap,it=I&&!!v.iridescenceThicknessMap,pt=X&&!!v.sheenColorMap,Ct=X&&!!v.sheenRoughnessMap,Lt=!!v.specularMap,ft=!!v.specularColorMap,$t=!!v.specularIntensityMap,D=Q&&!!v.transmissionMap,St=Q&&!!v.thicknessMap,rt=!!v.gradientMap,bt=!!v.alphaMap,st=v.alphaTest>0,tt=!!v.alphaHash,dt=!!v.extensions;let Xt=xn;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const fe={shaderID:ct,shaderType:v.type,shaderName:v.name,vertexShader:mt,fragmentShader:Ht,defines:v.defines,customVertexShaderID:Tt,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:yt,batchingColor:yt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ki,alphaToCoverage:!!v.alphaToCoverage,map:Qt,matcap:re,envMap:Gt,envMapMode:Gt&&z.mapping,envMapCubeUVHeight:j,aoMap:J,lightMap:nt,bumpMap:et,normalMap:gt,displacementMap:w,emissiveMap:Ut,normalMapObjectSpace:gt&&v.normalMapType===Lh,normalMapTangentSpace:gt&&v.normalMapType===gc,metalnessMap:Et,roughnessMap:Bt,anisotropy:ot,anisotropyMap:Y,clearcoat:E,clearcoatMap:Pt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Rt,dispersion:_,iridescence:I,iridescenceMap:zt,iridescenceThicknessMap:it,sheen:X,sheenColorMap:pt,sheenRoughnessMap:Ct,specularMap:Lt,specularColorMap:ft,specularIntensityMap:$t,transmission:Q,transmissionMap:D,thicknessMap:St,gradientMap:rt,opaque:v.transparent===!1&&v.blending===ci&&v.alphaToCoverage===!1,alphaMap:bt,alphaTest:st,alphaHash:tt,combine:v.combine,mapUv:Qt&&x(v.map.channel),aoMapUv:J&&x(v.aoMap.channel),lightMapUv:nt&&x(v.lightMap.channel),bumpMapUv:et&&x(v.bumpMap.channel),normalMapUv:gt&&x(v.normalMap.channel),displacementMapUv:w&&x(v.displacementMap.channel),emissiveMapUv:Ut&&x(v.emissiveMap.channel),metalnessMapUv:Et&&x(v.metalnessMap.channel),roughnessMapUv:Bt&&x(v.roughnessMap.channel),anisotropyMapUv:Y&&x(v.anisotropyMap.channel),clearcoatMapUv:Pt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(v.sheenRoughnessMap.channel),specularMapUv:Lt&&x(v.specularMap.channel),specularColorMapUv:ft&&x(v.specularColorMap.channel),specularIntensityMapUv:$t&&x(v.specularIntensityMap.channel),transmissionMapUv:D&&x(v.transmissionMap.channel),thicknessMapUv:St&&x(v.thicknessMap.channel),alphaMapUv:bt&&x(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(gt||ot),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Qt||bt),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:B.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Qt&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===le,decodeVideoTextureEmissive:Ut&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sn,flipSided:v.side===Ne,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:dt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&v.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function f(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)S.push(L),S.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(T(S,v),b(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function T(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const S=m[v.type];let L;if(S){const O=un[S];L=Mu.clone(O.uniforms)}else L=v.uniforms;return L}function A(v,S){let L=u.get(S);return L!==void 0?++L.usedTimes:(L=new V0(i,S,v,r),h.push(L),u.set(S,L)),L}function R(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function C(v){l.remove(v)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:N}}function q0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Y0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,m,x,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=x,f.group=g),t++,f}function o(u,d,p,m,x,g){const f=a(u,d,p,m,x,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,m,x,g){const f=a(u,d,p,m,x,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Y0),n.length>1&&n.sort(d||Yl),s.length>1&&s.sort(d||Yl)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Z0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Zl,i.set(n,[a])):s>=r.length?(a=new Zl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new jt};break;case"SpotLight":e={position:new P,direction:new P,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function K0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let J0=0;function j0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Q0(i){const t=new $0,e=K0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new de,a=new de;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,m=0,x=0,g=0,f=0,T=0,b=0,y=0,A=0,R=0,C=0;c.sort(j0);for(let v=0,S=c.length;v<S;v++){const L=c[v],O=L.color,B=L.intensity,q=L.distance;let k=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===zi?k=L.shadow.map.texture:k=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],B);C++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const z=L.shadow,j=e.get(L);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=G,p++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(O).multiplyScalar(B),G.distance=q,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[x]=G;const z=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,z.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=z.matrix,L.castShadow){const j=e.get(L);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=k,y++}x++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(O).multiplyScalar(B),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=G,g++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const z=L.shadow,j=e.get(L);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,j.shadowCameraNear=z.camera.near,j.shadowCameraFar=z.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=L.shadow.matrix,b++}n.point[m]=G,m++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(B),G.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[f]=G,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==p||N.pointLength!==m||N.spotLength!==x||N.rectAreaLength!==g||N.hemiLength!==f||N.numDirectionalShadows!==T||N.numPointShadows!==b||N.numSpotShadows!==y||N.numSpotMaps!==A||N.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,N.directionalLength=p,N.pointLength=m,N.spotLength=x,N.rectAreaLength=g,N.hemiLength=f,N.numDirectionalShadows=T,N.numPointShadows=b,N.numSpotShadows=y,N.numSpotMaps=A,N.numLightProbes=C,n.version=J0++)}function l(c,h){let u=0,d=0,p=0,m=0,x=0;const g=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const b=c[f];if(b.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(b.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function $l(i){const t=new Q0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function tg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new $l(i),t.set(s,[o])):r>=a.length?(o=new $l(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ig=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],sg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Kl=new de,ns=new P,ga=new P;function rg(i,t,e){let n=new Co;const s=new ut,r=new ut,a=new xe,o=new pd,l=new md,c={},h=e.maxTextureSize,u={[Xn]:Ne,[Ne]:Xn,[sn]:sn},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:eg,fragmentShader:ng}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new ye;m.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Z(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let f=this.type;this.render=function(R,C,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;R.type===Ql&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=or);const v=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Dn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=f!==this.type;B&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(k=>k.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,k=R.length;q<k;q++){const G=R[q],z=G.shadow;if(z===void 0){Vt("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const j=z.getFrameExtents();if(s.multiply(j),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,z.mapSize.y=r.y)),z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ss){if(G.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Mn(s.x,s.y,{format:zi,type:Un,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new xs(s.x,s.y,pn),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=Nn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ae,z.map.depthTexture.magFilter=Ae}else{G.isPointLight?(z.map=new wc(s.x),z.map.depthTexture=new Iu(s.x,Sn)):(z.map=new Mn(s.x,s.y),z.map.depthTexture=new xs(s.x,s.y,Sn)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=Nn;const at=i.state.buffers.depth.getReversed();this.type===or?(z.map.depthTexture.compareFunction=at?wo:bo,z.map.depthTexture.minFilter=Pe,z.map.depthTexture.magFilter=Pe):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ae,z.map.depthTexture.magFilter=Ae)}z.camera.updateProjectionMatrix()}const ct=z.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<ct;at++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,at),i.clear();else{at===0&&(i.setRenderTarget(z.map),i.clear());const $=z.getViewport(at);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),O.viewport(a)}if(G.isPointLight){const $=z.camera,lt=z.matrix,mt=G.distance||$.far;mt!==$.far&&($.far=mt,$.updateProjectionMatrix()),ns.setFromMatrixPosition(G.matrixWorld),$.position.copy(ns),ga.copy($.position),ga.add(ig[at]),$.up.copy(sg[at]),$.lookAt(ga),$.updateMatrixWorld(),lt.makeTranslation(-ns.x,-ns.y,-ns.z),Kl.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Kl,$.coordinateSystem,$.reversedDepth)}else z.updateMatrices(G);n=z.getFrustum(),y(C,N,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===ss&&T(z,N),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(v,S,L)};function T(R,C){const N=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Mn(s.x,s.y,{format:zi,type:Un})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,N,d,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,N,p,x,null)}function b(R,C,N,v){let S=null;const L=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)S=L;else if(S=N.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=S.uuid,B=C.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let k=q[B];k===void 0&&(k=S.clone(),q[B]=k,C.addEventListener("dispose",A)),S=k}if(S.visible=C.visible,S.wireframe=C.wireframe,v===ss?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=i.properties.get(S);O.light=N}return S}function y(R,C,N,v,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===ss)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const B=t.update(R),q=R.material;if(Array.isArray(q)){const k=B.groups;for(let G=0,z=k.length;G<z;G++){const j=k[G],ct=q[j.materialIndex];if(ct&&ct.visible){const at=b(R,ct,v,S);R.onBeforeShadow(i,R,C,N,B,at,j),i.renderBufferDirect(N,null,B,at,R,j),R.onAfterShadow(i,R,C,N,B,at,j)}}}else if(q.visible){const k=b(R,q,v,S);R.onBeforeShadow(i,R,C,N,B,k,null),i.renderBufferDirect(N,null,B,k,R,null),R.onAfterShadow(i,R,C,N,B,k,null)}}const O=R.children;for(let B=0,q=O.length;B<q;B++)y(O[B],C,N,v,S)}function A(R){R.target.removeEventListener("dispose",A);for(const N in c){const v=c[N],S=R.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const ag={[Ma]:Sa,[ya]:wa,[Ea]:Ta,[Oi]:ba,[Sa]:Ma,[wa]:ya,[Ta]:Ea,[ba]:Oi};function og(i,t){function e(){let D=!1;const St=new xe;let rt=null;const bt=new xe(0,0,0,0);return{setMask:function(st){rt!==st&&!D&&(i.colorMask(st,st,st,st),rt=st)},setLocked:function(st){D=st},setClear:function(st,tt,dt,Xt,fe){fe===!0&&(st*=Xt,tt*=Xt,dt*=Xt),St.set(st,tt,dt,Xt),bt.equals(St)===!1&&(i.clearColor(st,tt,dt,Xt),bt.copy(St))},reset:function(){D=!1,rt=null,bt.set(-1,0,0,0)}}}function n(){let D=!1,St=!1,rt=null,bt=null,st=null;return{setReversed:function(tt){if(St!==tt){const dt=t.get("EXT_clip_control");tt?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),St=tt;const Xt=st;st=null,this.setClear(Xt)}},getReversed:function(){return St},setTest:function(tt){tt?K(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(tt){rt!==tt&&!D&&(i.depthMask(tt),rt=tt)},setFunc:function(tt){if(St&&(tt=ag[tt]),bt!==tt){switch(tt){case Ma:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case Ea:i.depthFunc(i.EQUAL);break;case ba:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=tt}},setLocked:function(tt){D=tt},setClear:function(tt){st!==tt&&(St&&(tt=1-tt),i.clearDepth(tt),st=tt)},reset:function(){D=!1,rt=null,bt=null,st=null,St=!1}}}function s(){let D=!1,St=null,rt=null,bt=null,st=null,tt=null,dt=null,Xt=null,fe=null;return{setTest:function(ae){D||(ae?K(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(ae){St!==ae&&!D&&(i.stencilMask(ae),St=ae)},setFunc:function(ae,ln,bn){(rt!==ae||bt!==ln||st!==bn)&&(i.stencilFunc(ae,ln,bn),rt=ae,bt=ln,st=bn)},setOp:function(ae,ln,bn){(tt!==ae||dt!==ln||Xt!==bn)&&(i.stencilOp(ae,ln,bn),tt=ae,dt=ln,Xt=bn)},setLocked:function(ae){D=ae},setClear:function(ae){fe!==ae&&(i.clearStencil(ae),fe=ae)},reset:function(){D=!1,St=null,rt=null,bt=null,st=null,tt=null,dt=null,Xt=null,fe=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],m=null,x=!1,g=null,f=null,T=null,b=null,y=null,A=null,R=null,C=new jt(0,0,0),N=0,v=!1,S=null,L=null,O=null,B=null,q=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=z>=2);let ct=null,at={};const $=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),mt=new xe().fromArray($),Ht=new xe().fromArray(lt);function Tt(D,St,rt,bt){const st=new Uint8Array(4),tt=i.createTexture();i.bindTexture(D,tt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<rt;dt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(St+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return tt}const V={};V[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Oi),et(!1),gt(Go),K(i.CULL_FACE),J(Dn);function K(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function xt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Dt(D,St){return u[D]!==St?(i.bindFramebuffer(D,St),u[D]=St,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function yt(D,St){let rt=p,bt=!1;if(D){rt=d.get(St),rt===void 0&&(rt=[],d.set(St,rt));const st=D.textures;if(rt.length!==st.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,dt=st.length;tt<dt;tt++)rt[tt]=i.COLOR_ATTACHMENT0+tt;rt.length=st.length,bt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(rt)}function Qt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const re={[ii]:i.FUNC_ADD,[hh]:i.FUNC_SUBTRACT,[uh]:i.FUNC_REVERSE_SUBTRACT};re[dh]=i.MIN,re[fh]=i.MAX;const Gt={[ph]:i.ZERO,[mh]:i.ONE,[gh]:i.SRC_COLOR,[xa]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[Mh]:i.DST_COLOR,[xh]:i.DST_ALPHA,[_h]:i.ONE_MINUS_SRC_COLOR,[va]:i.ONE_MINUS_SRC_ALPHA,[Sh]:i.ONE_MINUS_DST_COLOR,[vh]:i.ONE_MINUS_DST_ALPHA,[Eh]:i.CONSTANT_COLOR,[bh]:i.ONE_MINUS_CONSTANT_COLOR,[wh]:i.CONSTANT_ALPHA,[Th]:i.ONE_MINUS_CONSTANT_ALPHA};function J(D,St,rt,bt,st,tt,dt,Xt,fe,ae){if(D===Dn){x===!0&&(xt(i.BLEND),x=!1);return}if(x===!1&&(K(i.BLEND),x=!0),D!==ch){if(D!==g||ae!==v){if((f!==ii||y!==ii)&&(i.blendEquation(i.FUNC_ADD),f=ii,y=ii),ae)switch(D){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",D);break}else switch(D){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wo:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xo:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",D);break}T=null,b=null,A=null,R=null,C.set(0,0,0),N=0,g=D,v=ae}return}st=st||St,tt=tt||rt,dt=dt||bt,(St!==f||st!==y)&&(i.blendEquationSeparate(re[St],re[st]),f=St,y=st),(rt!==T||bt!==b||tt!==A||dt!==R)&&(i.blendFuncSeparate(Gt[rt],Gt[bt],Gt[tt],Gt[dt]),T=rt,b=bt,A=tt,R=dt),(Xt.equals(C)===!1||fe!==N)&&(i.blendColor(Xt.r,Xt.g,Xt.b,fe),C.copy(Xt),N=fe),g=D,v=!1}function nt(D,St){D.side===sn?xt(i.CULL_FACE):K(i.CULL_FACE);let rt=D.side===Ne;St&&(rt=!rt),et(rt),D.blending===ci&&D.transparent===!1?J(Dn):J(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const bt=D.stencilWrite;o.setTest(bt),bt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function gt(D){D!==oh?(K(i.CULL_FACE),D!==L&&(D===Go?i.cullFace(i.BACK):D===lh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),L=D}function w(D){D!==O&&(G&&i.lineWidth(D),O=D)}function Ut(D,St,rt){D?(K(i.POLYGON_OFFSET_FILL),(B!==St||q!==rt)&&(i.polygonOffset(St,rt),B=St,q=rt)):xt(i.POLYGON_OFFSET_FILL)}function Et(D){D?K(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Bt(D){D===void 0&&(D=i.TEXTURE0+k-1),ct!==D&&(i.activeTexture(D),ct=D)}function ot(D,St,rt){rt===void 0&&(ct===null?rt=i.TEXTURE0+k-1:rt=ct);let bt=at[rt];bt===void 0&&(bt={type:void 0,texture:void 0},at[rt]=bt),(bt.type!==D||bt.texture!==St)&&(ct!==rt&&(i.activeTexture(rt),ct=rt),i.bindTexture(D,St||V[D]),bt.type=D,bt.texture=St)}function E(){const D=at[ct];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(D){te("WebGLState:",D)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(D){te("WebGLState:",D)}}function X(){try{i.texSubImage2D(...arguments)}catch(D){te("WebGLState:",D)}}function Q(){try{i.texSubImage3D(...arguments)}catch(D){te("WebGLState:",D)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(D){te("WebGLState:",D)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){te("WebGLState:",D)}}function ht(){try{i.texStorage2D(...arguments)}catch(D){te("WebGLState:",D)}}function Rt(){try{i.texStorage3D(...arguments)}catch(D){te("WebGLState:",D)}}function zt(){try{i.texImage2D(...arguments)}catch(D){te("WebGLState:",D)}}function it(){try{i.texImage3D(...arguments)}catch(D){te("WebGLState:",D)}}function pt(D){mt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),mt.copy(D))}function Ct(D){Ht.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ht.copy(D))}function Lt(D,St){let rt=c.get(St);rt===void 0&&(rt=new WeakMap,c.set(St,rt));let bt=rt.get(D);bt===void 0&&(bt=i.getUniformBlockIndex(St,D.name),rt.set(D,bt))}function ft(D,St){const bt=c.get(St).get(D);l.get(St)!==bt&&(i.uniformBlockBinding(St,bt,D.__bindingPointIndex),l.set(St,bt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,at={},u={},d=new WeakMap,p=[],m=null,x=!1,g=null,f=null,T=null,b=null,y=null,A=null,R=null,C=new jt(0,0,0),N=0,v=!1,S=null,L=null,O=null,B=null,q=null,mt.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:xt,bindFramebuffer:Dt,drawBuffers:yt,useProgram:Qt,setBlending:J,setMaterial:nt,setFlipSided:et,setCullFace:gt,setLineWidth:w,setPolygonOffset:Ut,setScissorTest:Et,activeTexture:Bt,bindTexture:ot,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:zt,texImage3D:it,updateUBOMapping:Lt,uniformBlockBinding:ft,texStorage2D:ht,texStorage3D:Rt,texSubImage2D:X,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pt,scissor:pt,viewport:Ct,reset:$t}}function lg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,_){return p?new OffscreenCanvas(E,_):gr("canvas")}function x(E,_,I){let X=1;const Q=ot(E);if((Q.width>I||Q.height>I)&&(X=I/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(X*Q.width),Pt=Math.floor(X*Q.height);u===void 0&&(u=m(Y,Pt));const ht=_?m(Y,Pt):u;return ht.width=Y,ht.height=Pt,ht.getContext("2d").drawImage(E,0,0,Y,Pt),Vt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Pt+")."),ht}else return"data"in E&&Vt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function g(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,_,I,X,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=_;if(_===i.RED&&(I===i.FLOAT&&(Y=i.R32F),I===i.HALF_FLOAT&&(Y=i.R16F),I===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(Y=i.R8UI),I===i.UNSIGNED_SHORT&&(Y=i.R16UI),I===i.UNSIGNED_INT&&(Y=i.R32UI),I===i.BYTE&&(Y=i.R8I),I===i.SHORT&&(Y=i.R16I),I===i.INT&&(Y=i.R32I)),_===i.RG&&(I===i.FLOAT&&(Y=i.RG32F),I===i.HALF_FLOAT&&(Y=i.RG16F),I===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(Y=i.RG8UI),I===i.UNSIGNED_SHORT&&(Y=i.RG16UI),I===i.UNSIGNED_INT&&(Y=i.RG32UI),I===i.BYTE&&(Y=i.RG8I),I===i.SHORT&&(Y=i.RG16I),I===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),I===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),I===i.UNSIGNED_INT&&(Y=i.RGB32UI),I===i.BYTE&&(Y=i.RGB8I),I===i.SHORT&&(Y=i.RGB16I),I===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),I===i.UNSIGNED_INT&&(Y=i.RGBA32UI),I===i.BYTE&&(Y=i.RGBA8I),I===i.SHORT&&(Y=i.RGBA16I),I===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){const Pt=Q?pr:ee.getTransfer(X);I===i.FLOAT&&(Y=i.RGBA32F),I===i.HALF_FLOAT&&(Y=i.RGBA16F),I===i.UNSIGNED_BYTE&&(Y=Pt===le?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(E,_){let I;return E?_===null||_===Sn||_===ps?I=i.DEPTH24_STENCIL8:_===pn?I=i.DEPTH32F_STENCIL8:_===fs&&(I=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Sn||_===ps?I=i.DEPTH_COMPONENT24:_===pn?I=i.DEPTH_COMPONENT32F:_===fs&&(I=i.DEPTH_COMPONENT16),I}function A(E,_){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ae&&E.minFilter!==Pe?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function R(E){const _=E.target;_.removeEventListener("dispose",R),N(_),_.isVideoTexture&&h.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),S(_)}function N(E){const _=n.get(E);if(_.__webglInit===void 0)return;const I=E.source,X=d.get(I);if(X){const Q=X[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(E),Object.keys(X).length===0&&d.delete(I)}n.remove(E)}function v(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const I=E.source,X=d.get(I);delete X[_.__cacheKey],a.memory.textures--}function S(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Q=0;Q<_.__webglFramebuffer[X].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[X][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=E.textures;for(let X=0,Q=I.length;X<Q;X++){const Y=n.get(I[X]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(I[X])}n.remove(E)}let L=0;function O(){L=0}function B(){const E=L;return E>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function q(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function k(E,_){const I=n.get(E);if(E.isVideoTexture&&Et(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&I.__version!==E.version){const X=E.image;if(X===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(I,E,_);return}}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+_)}function G(E,_){const I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){V(I,E,_);return}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+_)}function z(E,_){const I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){V(I,E,_);return}e.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+_)}function j(E,_){const I=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&I.__version!==E.version){K(I,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+_)}const ct={[ri]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},at={[Ae]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[Pe]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},$={[Dh]:i.NEVER,[Oh]:i.ALWAYS,[Ih]:i.LESS,[bo]:i.LEQUAL,[Uh]:i.EQUAL,[wo]:i.GEQUAL,[Nh]:i.GREATER,[Fh]:i.NOTEQUAL};function lt(E,_){if(_.type===pn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Pe||_.magFilter===Nr||_.magFilter===Ls||_.magFilter===ai||_.minFilter===Pe||_.minFilter===Nr||_.minFilter===Ls||_.minFilter===ai)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ct[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ct[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ct[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,at[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,at[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,$[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ae||_.minFilter!==Ls&&_.minFilter!==ai||_.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function mt(E,_){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",R));const X=_.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const Y=q(_);if(Y!==E.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Q[Y].usedTimes++;const Pt=Q[E.__cacheKey];Pt!==void 0&&(Q[E.__cacheKey].usedTimes--,Pt.usedTimes===0&&v(_)),E.__cacheKey=Y,E.__webglTexture=Q[Y].texture}return I}function Ht(E,_,I){return Math.floor(Math.floor(E/I)/_)}function Tt(E,_,I,X){const Y=E.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,I,X,_.data);else{Y.sort((it,pt)=>it.start-pt.start);let Pt=0;for(let it=1;it<Y.length;it++){const pt=Y[Pt],Ct=Y[it],Lt=pt.start+pt.count,ft=Ht(Ct.start,_.width,4),$t=Ht(pt.start,_.width,4);Ct.start<=Lt+1&&ft===$t&&Ht(Ct.start+Ct.count-1,_.width,4)===ft?pt.count=Math.max(pt.count,Ct.start+Ct.count-pt.start):(++Pt,Y[Pt]=Ct)}Y.length=Pt+1;const ht=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),zt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let it=0,pt=Y.length;it<pt;it++){const Ct=Y[it],Lt=Math.floor(Ct.start/4),ft=Math.ceil(Ct.count/4),$t=Lt%_.width,D=Math.floor(Lt/_.width),St=ft,rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,$t,D,St,rt,I,X,_.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,zt)}}function V(E,_,I){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const Q=mt(E,_),Y=_.source;e.bindTexture(X,E.__webglTexture,i.TEXTURE0+I);const Pt=n.get(Y);if(Y.version!==Pt.__version||Q===!0){e.activeTexture(i.TEXTURE0+I);const ht=ee.getPrimaries(ee.workingColorSpace),Rt=_.colorSpace===Gn?null:ee.getPrimaries(_.colorSpace),zt=_.colorSpace===Gn||ht===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let it=x(_.image,!1,s.maxTextureSize);it=Bt(_,it);const pt=r.convert(_.format,_.colorSpace),Ct=r.convert(_.type);let Lt=b(_.internalFormat,pt,Ct,_.colorSpace,_.isVideoTexture);lt(X,_);let ft;const $t=_.mipmaps,D=_.isVideoTexture!==!0,St=Pt.__version===void 0||Q===!0,rt=Y.dataReady,bt=A(_,it);if(_.isDepthTexture)Lt=y(_.format===oi,_.type),St&&(D?e.texStorage2D(i.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Lt,it.width,it.height,0,pt,Ct,null));else if(_.isDataTexture)if($t.length>0){D&&St&&e.texStorage2D(i.TEXTURE_2D,bt,Lt,$t[0].width,$t[0].height);for(let st=0,tt=$t.length;st<tt;st++)ft=$t[st],D?rt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,pt,Ct,ft.data):e.texImage2D(i.TEXTURE_2D,st,Lt,ft.width,ft.height,0,pt,Ct,ft.data);_.generateMipmaps=!1}else D?(St&&e.texStorage2D(i.TEXTURE_2D,bt,Lt,it.width,it.height),rt&&Tt(_,it,pt,Ct)):e.texImage2D(i.TEXTURE_2D,0,Lt,it.width,it.height,0,pt,Ct,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Lt,$t[0].width,$t[0].height,it.depth);for(let st=0,tt=$t.length;st<tt;st++)if(ft=$t[st],_.format!==on)if(pt!==null)if(D){if(rt)if(_.layerUpdates.size>0){const dt=Al(ft.width,ft.height,_.format,_.type);for(const Xt of _.layerUpdates){const fe=ft.data.subarray(Xt*dt/ft.data.BYTES_PER_ELEMENT,(Xt+1)*dt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Xt,ft.width,ft.height,1,pt,fe)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,it.depth,pt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Lt,ft.width,ft.height,it.depth,0,ft.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,it.depth,pt,Ct,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Lt,ft.width,ft.height,it.depth,0,pt,Ct,ft.data)}else{D&&St&&e.texStorage2D(i.TEXTURE_2D,bt,Lt,$t[0].width,$t[0].height);for(let st=0,tt=$t.length;st<tt;st++)ft=$t[st],_.format!==on?pt!==null?D?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,pt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Lt,ft.width,ft.height,0,ft.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?rt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,pt,Ct,ft.data):e.texImage2D(i.TEXTURE_2D,st,Lt,ft.width,ft.height,0,pt,Ct,ft.data)}else if(_.isDataArrayTexture)if(D){if(St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Lt,it.width,it.height,it.depth),rt)if(_.layerUpdates.size>0){const st=Al(it.width,it.height,_.format,_.type);for(const tt of _.layerUpdates){const dt=it.data.subarray(tt*st/it.data.BYTES_PER_ELEMENT,(tt+1)*st/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,it.width,it.height,1,pt,Ct,dt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,Ct,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,pt,Ct,it.data);else if(_.isData3DTexture)D?(St&&e.texStorage3D(i.TEXTURE_3D,bt,Lt,it.width,it.height,it.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,Ct,it.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,pt,Ct,it.data);else if(_.isFramebufferTexture){if(St)if(D)e.texStorage2D(i.TEXTURE_2D,bt,Lt,it.width,it.height);else{let st=it.width,tt=it.height;for(let dt=0;dt<bt;dt++)e.texImage2D(i.TEXTURE_2D,dt,Lt,st,tt,0,pt,Ct,null),st>>=1,tt>>=1}}else if($t.length>0){if(D&&St){const st=ot($t[0]);e.texStorage2D(i.TEXTURE_2D,bt,Lt,st.width,st.height)}for(let st=0,tt=$t.length;st<tt;st++)ft=$t[st],D?rt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,pt,Ct,ft):e.texImage2D(i.TEXTURE_2D,st,Lt,pt,Ct,ft);_.generateMipmaps=!1}else if(D){if(St){const st=ot(it);e.texStorage2D(i.TEXTURE_2D,bt,Lt,st.width,st.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ct,it)}else e.texImage2D(i.TEXTURE_2D,0,Lt,pt,Ct,it);g(_)&&f(X),Pt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function K(E,_,I){if(_.image.length!==6)return;const X=mt(E,_),Q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+I);const Y=n.get(Q);if(Q.version!==Y.__version||X===!0){e.activeTexture(i.TEXTURE0+I);const Pt=ee.getPrimaries(ee.workingColorSpace),ht=_.colorSpace===Gn?null:ee.getPrimaries(_.colorSpace),Rt=_.colorSpace===Gn||Pt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const zt=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let tt=0;tt<6;tt++)!zt&&!it?pt[tt]=x(_.image[tt],!0,s.maxCubemapSize):pt[tt]=it?_.image[tt].image:_.image[tt],pt[tt]=Bt(_,pt[tt]);const Ct=pt[0],Lt=r.convert(_.format,_.colorSpace),ft=r.convert(_.type),$t=b(_.internalFormat,Lt,ft,_.colorSpace),D=_.isVideoTexture!==!0,St=Y.__version===void 0||X===!0,rt=Q.dataReady;let bt=A(_,Ct);lt(i.TEXTURE_CUBE_MAP,_);let st;if(zt){D&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,$t,Ct.width,Ct.height);for(let tt=0;tt<6;tt++){st=pt[tt].mipmaps;for(let dt=0;dt<st.length;dt++){const Xt=st[dt];_.format!==on?Lt!==null?D?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,Xt.width,Xt.height,Lt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,$t,Xt.width,Xt.height,0,Xt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,Xt.width,Xt.height,Lt,ft,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,$t,Xt.width,Xt.height,0,Lt,ft,Xt.data)}}}else{if(st=_.mipmaps,D&&St){st.length>0&&bt++;const tt=ot(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(it){D?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,pt[tt].width,pt[tt].height,Lt,ft,pt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,pt[tt].width,pt[tt].height,0,Lt,ft,pt[tt].data);for(let dt=0;dt<st.length;dt++){const fe=st[dt].image[tt].image;D?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,fe.width,fe.height,Lt,ft,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,$t,fe.width,fe.height,0,Lt,ft,fe.data)}}else{D?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,ft,pt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,Lt,ft,pt[tt]);for(let dt=0;dt<st.length;dt++){const Xt=st[dt];D?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,Lt,ft,Xt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,$t,Lt,ft,Xt.image[tt])}}}g(_)&&f(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function xt(E,_,I,X,Q,Y){const Pt=r.convert(I.format,I.colorSpace),ht=r.convert(I.type),Rt=b(I.internalFormat,Pt,ht,I.colorSpace),zt=n.get(_),it=n.get(I);if(it.__renderTarget=_,!zt.__hasExternalTextures){const pt=Math.max(1,_.width>>Y),Ct=Math.max(1,_.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,Rt,pt,Ct,_.depth,0,Pt,ht,null):e.texImage2D(Q,Y,Rt,pt,Ct,0,Pt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Q,it.__webglTexture,0,w(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Q,it.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(E,_,I){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const X=_.depthTexture,Q=X&&X.isDepthTexture?X.type:null,Y=y(_.stencilBuffer,Q),Pt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ut(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,w(_),Y,_.width,_.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,w(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,E)}else{const X=_.textures;for(let Q=0;Q<X.length;Q++){const Y=X[Q],Pt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),Rt=b(Y.internalFormat,Pt,ht,Y.colorSpace);Ut(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,w(_),Rt,_.width,_.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,w(_),Rt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(E,_,I){const X=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),lt(i.TEXTURE_CUBE_MAP,_.depthTexture);const zt=r.convert(_.depthTexture.format),it=r.convert(_.depthTexture.type);let pt;_.depthTexture.format===Nn?pt=i.DEPTH_COMPONENT24:_.depthTexture.format===oi&&(pt=i.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,pt,_.width,_.height,0,zt,it,null)}}else k(_.depthTexture,0);const Y=Q.__webglTexture,Pt=w(_),ht=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,Rt=_.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Nn)Ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,ht,Y,0,Pt):i.framebufferTexture2D(i.FRAMEBUFFER,Rt,ht,Y,0);else if(_.depthTexture.format===oi)Ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,ht,Y,0,Pt):i.framebufferTexture2D(i.FRAMEBUFFER,Rt,ht,Y,0);else throw new Error("Unknown depthTexture format")}function Qt(E){const _=n.get(E),I=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const X=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=X}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(I)for(let X=0;X<6;X++)yt(_.__webglFramebuffer[X],E,X);else{const X=E.texture.mipmaps;X&&X.length>0?yt(_.__webglFramebuffer[0],E,0):yt(_.__webglFramebuffer,E,0)}else if(I){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),Dt(_.__webglDepthbuffer[X],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else{const X=E.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Dt(_.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(E,_,I){const X=n.get(E);_!==void 0&&xt(X.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Qt(E)}function Gt(E){const _=E.texture,I=n.get(E),X=n.get(_);E.addEventListener("dispose",C);const Q=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Pt=Q.length>1;if(Pt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),Y){I.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[ht]=[];for(let Rt=0;Rt<_.mipmaps.length;Rt++)I.__webglFramebuffer[ht][Rt]=i.createFramebuffer()}else I.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let ht=0;ht<_.mipmaps.length;ht++)I.__webglFramebuffer[ht]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let ht=0,Rt=Q.length;ht<Rt;ht++){const zt=n.get(Q[ht]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Ut(E)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){const Rt=Q[ht];I.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ht]);const zt=r.convert(Rt.format,Rt.colorSpace),it=r.convert(Rt.type),pt=b(Rt.internalFormat,zt,it,Rt.colorSpace,E.isXRRenderTarget===!0),Ct=w(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,pt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,I.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(I.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),lt(i.TEXTURE_CUBE_MAP,_);for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)xt(I.__webglFramebuffer[ht][Rt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Rt);else xt(I.__webglFramebuffer[ht],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ht=0,Rt=Q.length;ht<Rt;ht++){const zt=Q[ht],it=n.get(zt);let pt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,it.__webglTexture),lt(pt,zt),xt(I.__webglFramebuffer,E,zt,i.COLOR_ATTACHMENT0+ht,pt,0),g(zt)&&f(pt)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,X.__webglTexture),lt(ht,_),_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)xt(I.__webglFramebuffer[Rt],E,_,i.COLOR_ATTACHMENT0,ht,Rt);else xt(I.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,ht,0);g(_)&&f(ht),e.unbindTexture()}E.depthBuffer&&Qt(E)}function J(E){const _=E.textures;for(let I=0,X=_.length;I<X;I++){const Q=_[I];if(g(Q)){const Y=T(E),Pt=n.get(Q).__webglTexture;e.bindTexture(Y,Pt),f(Y),e.unbindTexture()}}}const nt=[],et=[];function gt(E){if(E.samples>0){if(Ut(E)===!1){const _=E.textures,I=E.width,X=E.height;let Q=i.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(E),ht=_.length>1;if(ht)for(let zt=0;zt<_.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Rt=E.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let zt=0;zt<_.length;zt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[zt]);const it=n.get(_[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,I,X,0,0,I,X,Q,i.NEAREST),l===!0&&(nt.length=0,et.length=0,nt.push(i.COLOR_ATTACHMENT0+zt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(nt.push(Y),et.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let zt=0;zt<_.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[zt]);const it=n.get(_[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function w(E){return Math.min(s.maxSamples,E.samples)}function Ut(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Et(E){const _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Bt(E,_){const I=E.colorSpace,X=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==ki&&I!==Gn&&(ee.getTransfer(I)===le?(X!==on||Q!==qe)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",I)),_}function ot(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=re,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cg(i,t){function e(n,s=Gn){let r;const a=ee.getTransfer(s);if(n===qe)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cc)return i.BYTE;if(n===hc)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===fc)return i.ALPHA;if(n===pc)return i.RGB;if(n===on)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===mc)return i.RED;if(n===So)return i.RED_INTEGER;if(n===zi)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===La||n===Da||n===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Na)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oa)return r.COMPRESSED_R11_EAC;if(n===Ba)return r.COMPRESSED_SIGNED_R11_EAC;if(n===za)return r.COMPRESSED_RG11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ka||n===Ja||n===ja||n===Qa||n===to)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===to)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===no||n===io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===eo)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===so||n===ro||n===ao||n===oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
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

}`;class dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Cc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fg extends Gi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null;const x=typeof XRWebGLBinding<"u",g=new dg,f={},T=e.getContextAttributes();let b=null,y=null;const A=[],R=[],C=new ut;let N=null;const v=new We;v.viewport=new xe;const S=new We;S.viewport=new xe;const L=[v,S],O=new Sd;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=A[V];return K===void 0&&(K=new na,A[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=A[V];return K===void 0&&(K=new na,A[V]=K),K.getGripSpace()},this.getHand=function(V){let K=A[V];return K===void 0&&(K=new na,A[V]=K),K.getHandSpace()};function k(V){const K=R.indexOf(V.inputSource);if(K===-1)return;const xt=A[K];xt!==void 0&&(xt.update(V.inputSource,V.frame,c||a),xt.dispatchEvent({type:V.type,data:V.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",z);for(let V=0;V<A.length;V++){const K=R[V];K!==null&&(R[V]=null,A[V].disconnect(K))}B=null,q=null,g.reset();for(const V in f)delete f[V];t.setRenderTarget(b),p=null,d=null,u=null,s=null,y=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",z),T.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Dt=null,yt=null;T.depth&&(yt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=T.stencil?oi:Nn,Dt=T.stencil?ps:Sn);const Qt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Mn(d.textureWidth,d.textureHeight,{format:on,type:qe,depthTexture:new xs(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Mn(p.framebufferWidth,p.framebufferHeight,{format:on,type:qe,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(V){for(let K=0;K<V.removed.length;K++){const xt=V.removed[K],Dt=R.indexOf(xt);Dt>=0&&(R[Dt]=null,A[Dt].disconnect(xt))}for(let K=0;K<V.added.length;K++){const xt=V.added[K];let Dt=R.indexOf(xt);if(Dt===-1){for(let Qt=0;Qt<A.length;Qt++)if(Qt>=R.length){R.push(xt),Dt=Qt;break}else if(R[Qt]===null){R[Qt]=xt,Dt=Qt;break}if(Dt===-1)break}const yt=A[Dt];yt&&yt.connect(xt)}}const j=new P,ct=new P;function at(V,K,xt){j.setFromMatrixPosition(K.matrixWorld),ct.setFromMatrixPosition(xt.matrixWorld);const Dt=j.distanceTo(ct),yt=K.projectionMatrix.elements,Qt=xt.projectionMatrix.elements,re=yt[14]/(yt[10]-1),Gt=yt[14]/(yt[10]+1),J=(yt[9]+1)/yt[5],nt=(yt[9]-1)/yt[5],et=(yt[8]-1)/yt[0],gt=(Qt[8]+1)/Qt[0],w=re*et,Ut=re*gt,Et=Dt/(-et+gt),Bt=Et*-et;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Bt),V.translateZ(Et),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),yt[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ot=re+Et,E=Gt+Et,_=w-Bt,I=Ut+(Dt-Bt),X=J*Gt/E*ot,Q=nt*Gt/E*ot;V.projectionMatrix.makePerspective(_,I,X,Q,ot,E),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function $(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let K=V.near,xt=V.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),O.near=S.near=v.near=K,O.far=S.far=v.far=xt,(B!==O.near||q!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,q=O.far),O.layers.mask=V.layers.mask|6,v.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const Dt=V.parent,yt=O.cameras;$(O,Dt);for(let Qt=0;Qt<yt.length;Qt++)$(yt[Qt],Dt);yt.length===2?at(O,v,S):O.projectionMatrix.copy(v.projectionMatrix),lt(V,O,Dt)};function lt(V,K,xt){xt===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(xt.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=gs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(V){return f[V]};let mt=null;function Ht(V,K){if(h=K.getViewerPose(c||a),m=K,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Dt=!1;xt.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let Gt=0;Gt<xt.length;Gt++){const J=xt[Gt];let nt=null;if(p!==null)nt=p.getViewport(J);else{const gt=u.getViewSubImage(d,J);nt=gt.viewport,Gt===0&&(t.setRenderTargetTextures(y,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(y))}let et=L[Gt];et===void 0&&(et=new We,et.layers.enable(Gt),et.viewport=new xe,L[Gt]=et),et.matrix.fromArray(J.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(J.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(nt.x,nt.y,nt.width,nt.height),Gt===0&&(O.matrix.copy(et.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push(et)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Gt=u.getDepthInformation(xt[0]);Gt&&Gt.isValid&&Gt.texture&&g.init(Gt,s.renderState)}if(yt&&yt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Gt=0;Gt<xt.length;Gt++){const J=xt[Gt].camera;if(J){let nt=f[J];nt||(nt=new Cc,f[J]=nt);const et=u.getCameraImage(J);nt.sourceTexture=et}}}}for(let xt=0;xt<A.length;xt++){const Dt=R[xt],yt=A[xt];Dt!==null&&yt!==void 0&&yt.update(Dt,K,c||a)}mt&&mt(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}const Tt=new Vc;Tt.setAnimationLoop(Ht),this.setAnimationLoop=function(V){mt=V},this.dispose=function(){}}}const ei=new Ye,pg=new de;function mg(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,yc(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,T,b,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),x(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,T,b):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Ne&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Ne&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const T=t.get(f),b=T.envMap,y=T.envMapRotation;b&&(g.envMap.value=b,ei.copy(y),ei.x*=-1,ei.y*=-1,ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),g.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(ei)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,T,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*T,g.scale.value=b*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,T){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ne&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){const T=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const y=b.program;n.uniformBlockBinding(T,y)}function c(T,b){let y=s[T.id];y===void 0&&(m(T),y=h(T),s[T.id]=y,T.addEventListener("dispose",g));const A=b.program;n.updateUBOMapping(T,A);const R=t.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function h(T){const b=u();T.__bindingPointIndex=b;const y=i.createBuffer(),A=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const b=s[T.id],y=T.uniforms,A=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,C=y.length;R<C;R++){const N=Array.isArray(y[R])?y[R]:[y[R]];for(let v=0,S=N.length;v<S;v++){const L=N[v];if(p(L,R,v,A)===!0){const O=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let k=0;k<B.length;k++){const G=B[k],z=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+q,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,q),q+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,b,y,A){const R=T.value,C=b+"_"+y;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const N=A[C];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return A[C]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function m(T){const b=T.uniforms;let y=0;const A=16;for(let C=0,N=b.length;C<N;C++){const v=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,L=v.length;S<L;S++){const O=v[S],B=Array.isArray(O.value)?O.value:[O.value];for(let q=0,k=B.length;q<k;q++){const G=B[q],z=x(G),j=y%A,ct=j%z.boundary,at=j+ct;y+=ct,at!==0&&A-at<z.storage&&(y+=A-at),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=z.storage}}}const R=y%A;return R>0&&(y+=A-R),T.__size=y,T.__cache={},this}function x(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Vt("WebGLRenderer: Unsupported uniform value type.",T),b}function g(T){const b=T.target;b.removeEventListener("dispose",g);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}const _g=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cn=null;function xg(){return cn===null&&(cn=new Ru(_g,16,16,zi,Un),cn.name="DFG_LUT",cn.minFilter=Pe,cn.magFilter=Pe,cn.wrapS=Pn,cn.wrapT=Pn,cn.generateMipmaps=!1,cn.needsUpdate=!0),cn}class vg{constructor(t={}){const{canvas:e=Bh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=qe}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=p,g=new Set([Eo,yo,So]),f=new Set([qe,Sn,fs,ps,vo,Mo]),T=new Uint32Array(4),b=new Int32Array(4);let y=null,A=null;const R=[],C=[];let N=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=Ke;let L=0,O=0,B=null,q=-1,k=null;const G=new xe,z=new xe;let j=null;const ct=new jt(0);let at=0,$=e.width,lt=e.height,mt=1,Ht=null,Tt=null;const V=new xe(0,0,$,lt),K=new xe(0,0,$,lt);let xt=!1;const Dt=new Co;let yt=!1,Qt=!1;const re=new de,Gt=new P,J=new xe,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function gt(){return B===null?mt:1}let w=n;function Ut(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_o}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",ae,!1),w===null){const U="webgl2";if(w=Ut(U,M),w===null)throw Ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw te("WebGLRenderer: "+M.message),M}let Et,Bt,ot,E,_,I,X,Q,Y,Pt,ht,Rt,zt,it,pt,Ct,Lt,ft,$t,D,St,rt,bt,st;function tt(){Et=new xm(w),Et.init(),rt=new cg(w,Et),Bt=new cm(w,Et,t,rt),ot=new og(w,Et),Bt.reversedDepthBuffer&&d&&ot.buffers.depth.setReversed(!0),E=new Sm(w),_=new q0,I=new lg(w,Et,ot,_,Bt,rt,E),X=new um(v),Q=new _m(v),Y=new bd(w),bt=new om(w,Y),Pt=new vm(w,Y,E,bt),ht=new Em(w,Pt,Y,E),$t=new ym(w,Bt,I),Ct=new hm(_),Rt=new X0(v,X,Q,Et,Bt,bt,Ct),zt=new mg(v,_),it=new Z0,pt=new tg(Et),ft=new am(v,X,Q,ot,ht,m,l),Lt=new rg(v,ht,Bt),st=new gg(w,E,Bt,ot),D=new lm(w,Et,E),St=new Mm(w,Et,E),E.programs=Rt.programs,v.capabilities=Bt,v.extensions=Et,v.properties=_,v.renderLists=it,v.shadowMap=Lt,v.state=ot,v.info=E}tt(),x!==qe&&(N=new wm(x,e.width,e.height,s,r));const dt=new fg(v,w);this.xr=dt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=Et.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Et.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(M){M!==void 0&&(mt=M,this.setSize($,lt,!1))},this.getSize=function(M){return M.set($,lt)},this.setSize=function(M,U,W=!0){if(dt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,lt=U,e.width=Math.floor(M*mt),e.height=Math.floor(U*mt),W===!0&&(e.style.width=M+"px",e.style.height=U+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set($*mt,lt*mt).floor()},this.setDrawingBufferSize=function(M,U,W){$=M,lt=U,mt=W,e.width=Math.floor(M*W),e.height=Math.floor(U*W),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(x===qe){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(G)},this.getViewport=function(M){return M.copy(V)},this.setViewport=function(M,U,W,H){M.isVector4?V.set(M.x,M.y,M.z,M.w):V.set(M,U,W,H),ot.viewport(G.copy(V).multiplyScalar(mt).round())},this.getScissor=function(M){return M.copy(K)},this.setScissor=function(M,U,W,H){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,U,W,H),ot.scissor(z.copy(K).multiplyScalar(mt).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(M){ot.setScissorTest(xt=M)},this.setOpaqueSort=function(M){Ht=M},this.setTransparentSort=function(M){Tt=M},this.getClearColor=function(M){return M.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,W=!0){let H=0;if(M){let F=!1;if(B!==null){const _t=B.texture.format;F=g.has(_t)}if(F){const _t=B.texture.type,wt=f.has(_t),Mt=ft.getClearColor(),At=ft.getClearAlpha(),It=Mt.r,kt=Mt.g,Nt=Mt.b;wt?(T[0]=It,T[1]=kt,T[2]=Nt,T[3]=At,w.clearBufferuiv(w.COLOR,0,T)):(b[0]=It,b[1]=kt,b[2]=Nt,b[3]=At,w.clearBufferiv(w.COLOR,0,b))}else H|=w.COLOR_BUFFER_BIT}U&&(H|=w.DEPTH_BUFFER_BIT),W&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),ft.dispose(),it.dispose(),pt.dispose(),_.dispose(),X.dispose(),Q.dispose(),ht.dispose(),bt.dispose(),st.dispose(),Rt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Fo),dt.removeEventListener("sessionend",Oo),Zn.stop()};function Xt(M){M.preventDefault(),_r("WebGLRenderer: Context Lost."),S=!0}function fe(){_r("WebGLRenderer: Context Restored."),S=!1;const M=E.autoReset,U=Lt.enabled,W=Lt.autoUpdate,H=Lt.needsUpdate,F=Lt.type;tt(),E.autoReset=M,Lt.enabled=U,Lt.autoUpdate=W,Lt.needsUpdate=H,Lt.type=F}function ae(M){te("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ln(M){const U=M.target;U.removeEventListener("dispose",ln),bn(U)}function bn(M){Qc(M),_.remove(M)}function Qc(M){const U=_.get(M).programs;U!==void 0&&(U.forEach(function(W){Rt.releaseProgram(W)}),M.isShaderMaterial&&Rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,W,H,F,_t){U===null&&(U=nt);const wt=F.isMesh&&F.matrixWorld.determinant()<0,Mt=eh(M,U,W,H,F);ot.setMaterial(H,wt);let At=W.index,It=1;if(H.wireframe===!0){if(At=Pt.getWireframeAttribute(W),At===void 0)return;It=2}const kt=W.drawRange,Nt=W.attributes.position;let Kt=kt.start*It,he=(kt.start+kt.count)*It;_t!==null&&(Kt=Math.max(Kt,_t.start*It),he=Math.min(he,(_t.start+_t.count)*It)),At!==null?(Kt=Math.max(Kt,0),he=Math.min(he,At.count)):Nt!=null&&(Kt=Math.max(Kt,0),he=Math.min(he,Nt.count));const ge=he-Kt;if(ge<0||ge===1/0)return;bt.setup(F,H,Mt,W,At);let _e,ue=D;if(At!==null&&(_e=Y.get(At),ue=St,ue.setIndex(_e)),F.isMesh)H.wireframe===!0?(ot.setLineWidth(H.wireframeLinewidth*gt()),ue.setMode(w.LINES)):ue.setMode(w.TRIANGLES);else if(F.isLine){let Ft=H.linewidth;Ft===void 0&&(Ft=1),ot.setLineWidth(Ft*gt()),F.isLineSegments?ue.setMode(w.LINES):F.isLineLoop?ue.setMode(w.LINE_LOOP):ue.setMode(w.LINE_STRIP)}else F.isPoints?ue.setMode(w.POINTS):F.isSprite&&ue.setMode(w.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ms("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))ue.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ft=F._multiDrawStarts,oe=F._multiDrawCounts,ne=F._multiDrawCount,ze=At?Y.get(At).bytesPerElement:1,pi=_.get(H).currentProgram.getUniforms();for(let ke=0;ke<ne;ke++)pi.setValue(w,"_gl_DrawID",ke),ue.render(Ft[ke]/ze,oe[ke])}else if(F.isInstancedMesh)ue.renderInstances(Kt,ge,F.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,oe=Math.min(W.instanceCount,Ft);ue.renderInstances(Kt,ge,oe)}else ue.render(Kt,ge)};function No(M,U,W){M.transparent===!0&&M.side===sn&&M.forceSinglePass===!1?(M.side=Ne,M.needsUpdate=!0,Ps(M,U,W),M.side=Xn,M.needsUpdate=!0,Ps(M,U,W),M.side=sn):Ps(M,U,W)}this.compile=function(M,U,W=null){W===null&&(W=M),A=pt.get(W),A.init(U),C.push(A),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),M!==W&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),A.setupLights();const H=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const _t=F.material;if(_t)if(Array.isArray(_t))for(let wt=0;wt<_t.length;wt++){const Mt=_t[wt];No(Mt,W,F),H.add(Mt)}else No(_t,W,F),H.add(_t)}),A=C.pop(),H},this.compileAsync=function(M,U,W=null){const H=this.compile(M,U,W);return new Promise(F=>{function _t(){if(H.forEach(function(wt){_.get(wt).currentProgram.isReady()&&H.delete(wt)}),H.size===0){F(M);return}setTimeout(_t,10)}Et.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Dr=null;function th(M){Dr&&Dr(M)}function Fo(){Zn.stop()}function Oo(){Zn.start()}const Zn=new Vc;Zn.setAnimationLoop(th),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(M){Dr=M,dt.setAnimationLoop(M),M===null?Zn.stop():Zn.start()},dt.addEventListener("sessionstart",Fo),dt.addEventListener("sessionend",Oo),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const W=dt.enabled===!0&&dt.isPresenting===!0,H=N!==null&&(B===null||W)&&N.begin(v,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(U),U=dt.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,B),A=pt.get(M,C.length),A.init(U),C.push(A),re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Dt.setFromProjectionMatrix(re,mn,U.reversedDepth),Qt=this.localClippingEnabled,yt=Ct.init(this.clippingPlanes,Qt),y=it.get(M,R.length),y.init(),R.push(y),dt.enabled===!0&&dt.isPresenting===!0){const wt=v.xr.getDepthSensingMesh();wt!==null&&Ir(wt,U,-1/0,v.sortObjects)}Ir(M,U,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(Ht,Tt),et=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,et&&ft.addToRenderList(y,M),this.info.render.frame++,yt===!0&&Ct.beginShadows();const F=A.state.shadowsArray;if(Lt.render(F,M,U),yt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&N.hasRenderPass())===!1){const wt=y.opaque,Mt=y.transmissive;if(A.setupLights(),U.isArrayCamera){const At=U.cameras;if(Mt.length>0)for(let It=0,kt=At.length;It<kt;It++){const Nt=At[It];zo(wt,Mt,M,Nt)}et&&ft.render(M);for(let It=0,kt=At.length;It<kt;It++){const Nt=At[It];Bo(y,M,Nt,Nt.viewport)}}else Mt.length>0&&zo(wt,Mt,M,U),et&&ft.render(M),Bo(y,M,U)}B!==null&&O===0&&(I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B)),H&&N.end(v),M.isScene===!0&&M.onAfterRender(v,M,U),bt.resetDefaultState(),q=-1,k=null,C.pop(),C.length>0?(A=C[C.length-1],yt===!0&&Ct.setGlobalState(v.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function Ir(M,U,W,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Dt.intersectsSprite(M)){H&&J.setFromMatrixPosition(M.matrixWorld).applyMatrix4(re);const wt=ht.update(M),Mt=M.material;Mt.visible&&y.push(M,wt,Mt,W,J.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Dt.intersectsObject(M))){const wt=ht.update(M),Mt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),J.copy(M.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),J.copy(wt.boundingSphere.center)),J.applyMatrix4(M.matrixWorld).applyMatrix4(re)),Array.isArray(Mt)){const At=wt.groups;for(let It=0,kt=At.length;It<kt;It++){const Nt=At[It],Kt=Mt[Nt.materialIndex];Kt&&Kt.visible&&y.push(M,wt,Kt,W,J.z,Nt)}}else Mt.visible&&y.push(M,wt,Mt,W,J.z,null)}}const _t=M.children;for(let wt=0,Mt=_t.length;wt<Mt;wt++)Ir(_t[wt],U,W,H)}function Bo(M,U,W,H){const{opaque:F,transmissive:_t,transparent:wt}=M;A.setupLightsView(W),yt===!0&&Ct.setGlobalState(v.clippingPlanes,W),H&&ot.viewport(G.copy(H)),F.length>0&&Cs(F,U,W),_t.length>0&&Cs(_t,U,W),wt.length>0&&Cs(wt,U,W),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function zo(M,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Kt=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Mn(1,1,{generateMipmaps:!0,type:Kt?Un:qe,minFilter:ai,samples:Bt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const _t=A.state.transmissionRenderTarget[H.id],wt=H.viewport||G;_t.setSize(wt.z*v.transmissionResolutionScale,wt.w*v.transmissionResolutionScale);const Mt=v.getRenderTarget(),At=v.getActiveCubeFace(),It=v.getActiveMipmapLevel();v.setRenderTarget(_t),v.getClearColor(ct),at=v.getClearAlpha(),at<1&&v.setClearColor(16777215,.5),v.clear(),et&&ft.render(W);const kt=v.toneMapping;v.toneMapping=xn;const Nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),yt===!0&&Ct.setGlobalState(v.clippingPlanes,H),Cs(M,W,H),I.updateMultisampleRenderTarget(_t),I.updateRenderTargetMipmap(_t),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let he=0,ge=U.length;he<ge;he++){const _e=U[he],{object:ue,geometry:Ft,material:oe,group:ne}=_e;if(oe.side===sn&&ue.layers.test(H.layers)){const ze=oe.side;oe.side=Ne,oe.needsUpdate=!0,ko(ue,W,H,Ft,oe,ne),oe.side=ze,oe.needsUpdate=!0,Kt=!0}}Kt===!0&&(I.updateMultisampleRenderTarget(_t),I.updateRenderTargetMipmap(_t))}v.setRenderTarget(Mt,At,It),v.setClearColor(ct,at),Nt!==void 0&&(H.viewport=Nt),v.toneMapping=kt}function Cs(M,U,W){const H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,_t=M.length;F<_t;F++){const wt=M[F],{object:Mt,geometry:At,group:It}=wt;let kt=wt.material;kt.allowOverride===!0&&H!==null&&(kt=H),Mt.layers.test(W.layers)&&ko(Mt,U,W,At,kt,It)}}function ko(M,U,W,H,F,_t){M.onBeforeRender(v,U,W,H,F,_t),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(v,U,W,H,M,_t),F.transparent===!0&&F.side===sn&&F.forceSinglePass===!1?(F.side=Ne,F.needsUpdate=!0,v.renderBufferDirect(W,U,H,F,M,_t),F.side=Xn,F.needsUpdate=!0,v.renderBufferDirect(W,U,H,F,M,_t),F.side=sn):v.renderBufferDirect(W,U,H,F,M,_t),M.onAfterRender(v,U,W,H,F,_t)}function Ps(M,U,W){U.isScene!==!0&&(U=nt);const H=_.get(M),F=A.state.lights,_t=A.state.shadowsArray,wt=F.state.version,Mt=Rt.getParameters(M,F.state,_t,U,W),At=Rt.getProgramCacheKey(Mt);let It=H.programs;H.environment=M.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(M.isMeshStandardMaterial?Q:X).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,It===void 0&&(M.addEventListener("dispose",ln),It=new Map,H.programs=It);let kt=It.get(At);if(kt!==void 0){if(H.currentProgram===kt&&H.lightsStateVersion===wt)return Ho(M,Mt),kt}else Mt.uniforms=Rt.getUniforms(M),M.onBeforeCompile(Mt,v),kt=Rt.acquireProgram(Mt,At),It.set(At,kt),H.uniforms=Mt.uniforms;const Nt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Nt.clippingPlanes=Ct.uniform),Ho(M,Mt),H.needsLights=ih(M),H.lightsStateVersion=wt,H.needsLights&&(Nt.ambientLightColor.value=F.state.ambient,Nt.lightProbe.value=F.state.probe,Nt.directionalLights.value=F.state.directional,Nt.directionalLightShadows.value=F.state.directionalShadow,Nt.spotLights.value=F.state.spot,Nt.spotLightShadows.value=F.state.spotShadow,Nt.rectAreaLights.value=F.state.rectArea,Nt.ltc_1.value=F.state.rectAreaLTC1,Nt.ltc_2.value=F.state.rectAreaLTC2,Nt.pointLights.value=F.state.point,Nt.pointLightShadows.value=F.state.pointShadow,Nt.hemisphereLights.value=F.state.hemi,Nt.directionalShadowMap.value=F.state.directionalShadowMap,Nt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Nt.spotShadowMap.value=F.state.spotShadowMap,Nt.spotLightMatrix.value=F.state.spotLightMatrix,Nt.spotLightMap.value=F.state.spotLightMap,Nt.pointShadowMap.value=F.state.pointShadowMap,Nt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=kt,H.uniformsList=null,kt}function Vo(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=fr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ho(M,U){const W=_.get(M);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function eh(M,U,W,H,F){U.isScene!==!0&&(U=nt),I.resetTextureUnits();const _t=U.fog,wt=H.isMeshStandardMaterial?U.environment:null,Mt=B===null?v.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ki,At=(H.isMeshStandardMaterial?Q:X).get(H.envMap||wt),It=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,kt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Nt=!!W.morphAttributes.position,Kt=!!W.morphAttributes.normal,he=!!W.morphAttributes.color;let ge=xn;H.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ge=v.toneMapping);const _e=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=_e!==void 0?_e.length:0,Ft=_.get(H),oe=A.state.lights;if(yt===!0&&(Qt===!0||M!==k)){const De=M===k&&H.id===q;Ct.setState(H,M,De)}let ne=!1;H.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==oe.state.version||Ft.outputColorSpace!==Mt||F.isBatchedMesh&&Ft.batching===!1||!F.isBatchedMesh&&Ft.batching===!0||F.isBatchedMesh&&Ft.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ft.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ft.instancing===!1||!F.isInstancedMesh&&Ft.instancing===!0||F.isSkinnedMesh&&Ft.skinning===!1||!F.isSkinnedMesh&&Ft.skinning===!0||F.isInstancedMesh&&Ft.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ft.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ft.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ft.instancingMorph===!1&&F.morphTexture!==null||Ft.envMap!==At||H.fog===!0&&Ft.fog!==_t||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Ct.numPlanes||Ft.numIntersection!==Ct.numIntersection)||Ft.vertexAlphas!==It||Ft.vertexTangents!==kt||Ft.morphTargets!==Nt||Ft.morphNormals!==Kt||Ft.morphColors!==he||Ft.toneMapping!==ge||Ft.morphTargetsCount!==ue)&&(ne=!0):(ne=!0,Ft.__version=H.version);let ze=Ft.currentProgram;ne===!0&&(ze=Ps(H,U,F));let pi=!1,ke=!1,qi=!1;const pe=ze.getUniforms(),Fe=Ft.uniforms;if(ot.useProgram(ze.program)&&(pi=!0,ke=!0,qi=!0),H.id!==q&&(q=H.id,ke=!0),pi||k!==M){ot.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pe.setValue(w,"projectionMatrix",M.projectionMatrix),pe.setValue(w,"viewMatrix",M.matrixWorldInverse);const Oe=pe.map.cameraPosition;Oe!==void 0&&Oe.setValue(w,Gt.setFromMatrixPosition(M.matrixWorld)),Bt.logarithmicDepthBuffer&&pe.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pe.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),k!==M&&(k=M,ke=!0,qi=!0)}if(Ft.needsLights&&(oe.state.directionalShadowMap.length>0&&pe.setValue(w,"directionalShadowMap",oe.state.directionalShadowMap,I),oe.state.spotShadowMap.length>0&&pe.setValue(w,"spotShadowMap",oe.state.spotShadowMap,I),oe.state.pointShadowMap.length>0&&pe.setValue(w,"pointShadowMap",oe.state.pointShadowMap,I)),F.isSkinnedMesh){pe.setOptional(w,F,"bindMatrix"),pe.setOptional(w,F,"bindMatrixInverse");const De=F.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),pe.setValue(w,"boneTexture",De.boneTexture,I))}F.isBatchedMesh&&(pe.setOptional(w,F,"batchingTexture"),pe.setValue(w,"batchingTexture",F._matricesTexture,I),pe.setOptional(w,F,"batchingIdTexture"),pe.setValue(w,"batchingIdTexture",F._indirectTexture,I),pe.setOptional(w,F,"batchingColorTexture"),F._colorsTexture!==null&&pe.setValue(w,"batchingColorTexture",F._colorsTexture,I));const Ze=W.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&$t.update(F,W,ze),(ke||Ft.receiveShadow!==F.receiveShadow)&&(Ft.receiveShadow=F.receiveShadow,pe.setValue(w,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Fe.envMap.value=At,Fe.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Fe.envMapIntensity.value=U.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=xg()),ke&&(pe.setValue(w,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&nh(Fe,qi),_t&&H.fog===!0&&zt.refreshFogUniforms(Fe,_t),zt.refreshMaterialUniforms(Fe,H,mt,lt,A.state.transmissionRenderTarget[M.id]),fr.upload(w,Vo(Ft),Fe,I)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(fr.upload(w,Vo(Ft),Fe,I),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pe.setValue(w,"center",F.center),pe.setValue(w,"modelViewMatrix",F.modelViewMatrix),pe.setValue(w,"normalMatrix",F.normalMatrix),pe.setValue(w,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const De=H.uniformsGroups;for(let Oe=0,Ur=De.length;Oe<Ur;Oe++){const $n=De[Oe];st.update($n,ze),st.bind($n,ze)}}return ze}function nh(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function ih(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,U,W){const H=_.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=U,_.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const W=_.get(M);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const sh=w.createFramebuffer();this.setRenderTarget=function(M,U=0,W=0){B=M,L=U,O=W;let H=null,F=!1,_t=!1;if(M){const Mt=_.get(M);if(Mt.__useDefaultFramebuffer!==void 0){ot.bindFramebuffer(w.FRAMEBUFFER,Mt.__webglFramebuffer),G.copy(M.viewport),z.copy(M.scissor),j=M.scissorTest,ot.viewport(G),ot.scissor(z),ot.setScissorTest(j),q=-1;return}else if(Mt.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(Mt.__hasExternalTextures)I.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const kt=M.depthTexture;if(Mt.__boundDepthTexture!==kt){if(kt!==null&&_.has(kt)&&(M.width!==kt.image.width||M.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(_t=!0);const It=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(It[U])?H=It[U][W]:H=It[U],F=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?H=_.get(M).__webglMultisampledFramebuffer:Array.isArray(It)?H=It[W]:H=It,G.copy(M.viewport),z.copy(M.scissor),j=M.scissorTest}else G.copy(V).multiplyScalar(mt).floor(),z.copy(K).multiplyScalar(mt).floor(),j=xt;if(W!==0&&(H=sh),ot.bindFramebuffer(w.FRAMEBUFFER,H)&&ot.drawBuffers(M,H),ot.viewport(G),ot.scissor(z),ot.setScissorTest(j),F){const Mt=_.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,W)}else if(_t){const Mt=U;for(let At=0;At<M.textures.length;At++){const It=_.get(M.textures[At]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+At,It.__webglTexture,W,Mt)}}else if(M!==null&&W!==0){const Mt=_.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Mt.__webglTexture,W)}q=-1},this.readRenderTargetPixels=function(M,U,W,H,F,_t,wt,Mt=0){if(!(M&&M.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){ot.bindFramebuffer(w.FRAMEBUFFER,At);try{const It=M.textures[Mt],kt=It.format,Nt=It.type;if(!Bt.textureFormatReadable(kt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Nt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&W>=0&&W<=M.height-F&&(M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Mt),w.readPixels(U,W,H,F,rt.convert(kt),rt.convert(Nt),_t))}finally{const It=B!==null?_.get(B).__webglFramebuffer:null;ot.bindFramebuffer(w.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(M,U,W,H,F,_t,wt,Mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At)if(U>=0&&U<=M.width-H&&W>=0&&W<=M.height-F){ot.bindFramebuffer(w.FRAMEBUFFER,At);const It=M.textures[Mt],kt=It.format,Nt=It.type;if(!Bt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Kt),w.bufferData(w.PIXEL_PACK_BUFFER,_t.byteLength,w.STREAM_READ),M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Mt),w.readPixels(U,W,H,F,rt.convert(kt),rt.convert(Nt),0);const he=B!==null?_.get(B).__webglFramebuffer:null;ot.bindFramebuffer(w.FRAMEBUFFER,he);const ge=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await zh(w,ge,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Kt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,_t),w.deleteBuffer(Kt),w.deleteSync(ge),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,W=0){const H=Math.pow(2,-W),F=Math.floor(M.image.width*H),_t=Math.floor(M.image.height*H),wt=U!==null?U.x:0,Mt=U!==null?U.y:0;I.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,W,0,0,wt,Mt,F,_t),ot.unbindTexture()};const rh=w.createFramebuffer(),ah=w.createFramebuffer();this.copyTextureToTexture=function(M,U,W=null,H=null,F=0,_t=null){_t===null&&(F!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=F,F=0):_t=0);let wt,Mt,At,It,kt,Nt,Kt,he,ge;const _e=M.isCompressedTexture?M.mipmaps[_t]:M.image;if(W!==null)wt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,At=W.isBox3?W.max.z-W.min.z:1,It=W.min.x,kt=W.min.y,Nt=W.isBox3?W.min.z:0;else{const Ze=Math.pow(2,-F);wt=Math.floor(_e.width*Ze),Mt=Math.floor(_e.height*Ze),M.isDataArrayTexture?At=_e.depth:M.isData3DTexture?At=Math.floor(_e.depth*Ze):At=1,It=0,kt=0,Nt=0}H!==null?(Kt=H.x,he=H.y,ge=H.z):(Kt=0,he=0,ge=0);const ue=rt.convert(U.format),Ft=rt.convert(U.type);let oe;U.isData3DTexture?(I.setTexture3D(U,0),oe=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),oe=w.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),oe=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const ne=w.getParameter(w.UNPACK_ROW_LENGTH),ze=w.getParameter(w.UNPACK_IMAGE_HEIGHT),pi=w.getParameter(w.UNPACK_SKIP_PIXELS),ke=w.getParameter(w.UNPACK_SKIP_ROWS),qi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,_e.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_e.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,It),w.pixelStorei(w.UNPACK_SKIP_ROWS,kt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Nt);const pe=M.isDataArrayTexture||M.isData3DTexture,Fe=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Ze=_.get(M),De=_.get(U),Oe=_.get(Ze.__renderTarget),Ur=_.get(De.__renderTarget);ot.bindFramebuffer(w.READ_FRAMEBUFFER,Oe.__webglFramebuffer),ot.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ur.__webglFramebuffer);for(let $n=0;$n<At;$n++)pe&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_.get(M).__webglTexture,F,Nt+$n),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_.get(U).__webglTexture,_t,ge+$n)),w.blitFramebuffer(It,kt,wt,Mt,Kt,he,wt,Mt,w.DEPTH_BUFFER_BIT,w.NEAREST);ot.bindFramebuffer(w.READ_FRAMEBUFFER,null),ot.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||_.has(M)){const Ze=_.get(M),De=_.get(U);ot.bindFramebuffer(w.READ_FRAMEBUFFER,rh),ot.bindFramebuffer(w.DRAW_FRAMEBUFFER,ah);for(let Oe=0;Oe<At;Oe++)pe?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ze.__webglTexture,F,Nt+Oe):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ze.__webglTexture,F),Fe?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,De.__webglTexture,_t,ge+Oe):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,De.__webglTexture,_t),F!==0?w.blitFramebuffer(It,kt,wt,Mt,Kt,he,wt,Mt,w.COLOR_BUFFER_BIT,w.NEAREST):Fe?w.copyTexSubImage3D(oe,_t,Kt,he,ge+Oe,It,kt,wt,Mt):w.copyTexSubImage2D(oe,_t,Kt,he,It,kt,wt,Mt);ot.bindFramebuffer(w.READ_FRAMEBUFFER,null),ot.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Fe?M.isDataTexture||M.isData3DTexture?w.texSubImage3D(oe,_t,Kt,he,ge,wt,Mt,At,ue,Ft,_e.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(oe,_t,Kt,he,ge,wt,Mt,At,ue,_e.data):w.texSubImage3D(oe,_t,Kt,he,ge,wt,Mt,At,ue,Ft,_e):M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,_t,Kt,he,wt,Mt,ue,Ft,_e.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,_t,Kt,he,_e.width,_e.height,ue,_e.data):w.texSubImage2D(w.TEXTURE_2D,_t,Kt,he,wt,Mt,ue,Ft,_e);w.pixelStorei(w.UNPACK_ROW_LENGTH,ne),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ze),w.pixelStorei(w.UNPACK_SKIP_PIXELS,pi),w.pixelStorei(w.UNPACK_SKIP_ROWS,ke),w.pixelStorei(w.UNPACK_SKIP_IMAGES,qi),_t===0&&U.generateMipmaps&&w.generateMipmap(oe),ot.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),ot.unbindTexture()},this.resetState=function(){L=0,O=0,B=null,ot.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class Mg{constructor(){this.running=!1,this.clock=new yd,this.updateCallbacks=[],this.renderer=new vg({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ql,document.body.appendChild(this.renderer.domElement),this.scene=new wu,window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight)})}init(){this.clock.start()}start(t){this.running=!0;const e=()=>{if(!this.running)return;requestAnimationFrame(e);const n=Math.min(this.clock.getDelta(),.05);for(const s of this.updateCallbacks)s(n);this.renderer.render(this.scene,t)};e()}stop(){this.running=!1}onUpdate(t){this.updateCallbacks.push(t)}getRenderer(){return this.renderer}getScene(){return this.scene}getDomElement(){return this.renderer.domElement}}const Wt={PLAYER_SPEED:8,PLAYER_SPRINT_SPEED:12,PLAYER_JUMP_FORCE:10,PLAYER_HEIGHT:1.8,PLAYER_MAX_HEALTH:100,MOUSE_SENSITIVITY:.002,GRAVITY:-25,WORLD_SIZE:50,WALL_HEIGHT:4,ENEMY_BASE_HEALTH:50,ENEMY_BASE_SPEED:3,ENEMY_BASE_DAMAGE:10,ENEMY_DETECTION_RANGE:20,ENEMY_ATTACK_RANGE:2,ENEMY_ATTACK_COOLDOWN:1.5,HEALTH_SCALE_PER_WAVE:1.2,SPEED_SCALE_PER_WAVE:1.05,ENEMIES_PER_WAVE_BASE:5,ENEMIES_PER_WAVE_INCREMENT:3,WEAPONS:[{name:"Pistol",damage:25,fireRate:4,maxAmmo:12,reserveAmmo:48,reloadTime:1.5,range:100,spread:.02},{name:"Shotgun",damage:15,fireRate:1.2,maxAmmo:6,reserveAmmo:24,reloadTime:2.5,range:30,spread:.1},{name:"Assault Rifle",damage:18,fireRate:10,maxAmmo:30,reserveAmmo:90,reloadTime:2,range:80,spread:.04}],KILL_SCORE:100,WAVE_BONUS:500,FOV:75,NEAR_CLIP:.1,FAR_CLIP:200};class is{static brick(t=512,e=512){const n=document.createElement("canvas");n.width=t,n.height=e;const s=n.getContext("2d");s.fillStyle="#6b6b60",s.fillRect(0,0,t,e);const r=64,a=28,o=4,l=["#8b4533","#7a3e2e","#9c5040","#6d3a2a","#a0584a","#7f4638"];for(let h=0;h<e/(a+o);h++){const u=h%2*(r/2);for(let d=-1;d<t/(r+o)+1;d++){const p=d*(r+o)+u,m=h*(a+o);s.fillStyle=l[Math.floor(Math.random()*l.length)],s.fillRect(p,m,r,a);for(let x=0;x<30;x++){const g=p+Math.random()*r,f=m+Math.random()*a;s.fillStyle=`rgba(0,0,0,${Math.random()*.15})`,s.fillRect(g,f,2,2)}s.strokeStyle="rgba(255,255,255,0.08)",s.strokeRect(p+1,m+1,r-2,a-2)}}const c=new Ii(n);return c.wrapS=c.wrapT=ri,c.repeat.set(2,2),c}static concrete(t=512,e=512){const n=document.createElement("canvas");n.width=t,n.height=e;const s=n.getContext("2d");s.fillStyle="#707878",s.fillRect(0,0,t,e);for(let o=0;o<8e3;o++){const l=Math.random()*t,c=Math.random()*e,h=Math.random()*.12;s.fillStyle=Math.random()>.5?`rgba(255,255,255,${h})`:`rgba(0,0,0,${h})`,s.fillRect(l,c,Math.random()*3+1,Math.random()*3+1)}const r=128;s.strokeStyle="rgba(0,0,0,0.2)",s.lineWidth=2;for(let o=0;o<t;o+=r)s.beginPath(),s.moveTo(o,0),s.lineTo(o,e),s.stroke();for(let o=0;o<e;o+=r)s.beginPath(),s.moveTo(0,o),s.lineTo(t,o),s.stroke();for(let o=0;o<5;o++){const l=Math.random()*t,c=Math.random()*e,h=s.createRadialGradient(l,c,0,l,c,30+Math.random()*40);h.addColorStop(0,"rgba(50,45,40,0.15)"),h.addColorStop(1,"rgba(50,45,40,0)"),s.fillStyle=h,s.fillRect(l-60,c-60,120,120)}const a=new Ii(n);return a.wrapS=a.wrapT=ri,a.repeat.set(8,8),a}static metal(t=256,e=256){const n=document.createElement("canvas");n.width=t,n.height=e;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,e);r.addColorStop(0,"#5a5e65"),r.addColorStop(.5,"#6a6e75"),r.addColorStop(1,"#4a4e55"),s.fillStyle=r,s.fillRect(0,0,t,e);for(let l=0;l<e;l+=2)s.fillStyle=`rgba(${Math.random()>.5?255:0},${Math.random()>.5?255:0},${Math.random()>.5?255:0},${Math.random()*.04})`,s.fillRect(0,l,t,1);const a=[[20,20],[t-20,20],[20,e-20],[t-20,e-20]];for(const[l,c]of a){const h=s.createRadialGradient(l-1,c-1,0,l,c,6);h.addColorStop(0,"#888"),h.addColorStop(.5,"#666"),h.addColorStop(1,"#444"),s.fillStyle=h,s.beginPath(),s.arc(l,c,6,0,Math.PI*2),s.fill()}const o=new Ii(n);return o.wrapS=o.wrapT=ri,o}static crate(t=256,e=256){const n=document.createElement("canvas");n.width=t,n.height=e;const s=n.getContext("2d");s.fillStyle="#8B6914",s.fillRect(0,0,t,e);for(let l=0;l<e;l++){const c=Math.sin(l*.1)*5,h=.85+Math.sin(l*.3+c)*.15;s.fillStyle=`rgba(139,105,20,${h})`,s.fillRect(0,l,t,1)}s.strokeStyle="#5a3a08",s.lineWidth=3;const r=12;s.strokeRect(r,r,t-r*2,e-r*2),s.beginPath(),s.moveTo(r,r),s.lineTo(t-r,e-r),s.moveTo(t-r,r),s.lineTo(r,e-r),s.stroke();const a=[[r+4,r+4],[t-r-4,r+4],[r+4,e-r-4],[t-r-4,e-r-4],[t/2,e/2]];for(const[l,c]of a)s.fillStyle="#888",s.beginPath(),s.arc(l,c,3,0,Math.PI*2),s.fill(),s.fillStyle="#aaa",s.beginPath(),s.arc(l-1,c-1,1.5,0,Math.PI*2),s.fill();return new Ii(n)}static ceiling(t=512,e=512){const n=document.createElement("canvas");n.width=t,n.height=e;const s=n.getContext("2d");s.fillStyle="#4a4a50",s.fillRect(0,0,t,e);const r=128;s.strokeStyle="rgba(0,0,0,0.3)",s.lineWidth=2;for(let o=0;o<t;o+=r)for(let l=0;l<e;l+=r)s.strokeRect(o+2,l+2,r-4,r-4),s.strokeStyle="rgba(255,255,255,0.05)",s.strokeRect(o+4,l+4,r-8,r-8),s.strokeStyle="rgba(0,0,0,0.3)";const a=new Ii(n);return a.wrapS=a.wrapT=ri,a.repeat.set(4,4),a}}class Sg{constructor(){this.walls=[],this.spawnPoints=[],this.enemySpawnPoints=[]}build(t){const e=is.brick(),n=is.concrete(),s=is.ceiling(),r=is.metal(),a=is.crate(),o=new gn(Wt.WORLD_SIZE*2,Wt.WORLD_SIZE*2),l=new se({map:n,roughness:.8,metalness:.05,color:12303291}),c=new Z(o,l);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,c.userData.isFloor=!0,t.add(c);const h=new Md(10070732,1.5);t.add(h);const u=new vd(16772829,1.2);u.position.set(15,25,10),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),u.shadow.camera.near=1,u.shadow.camera.far=80,u.shadow.camera.left=-40,u.shadow.camera.right=40,u.shadow.camera.top=40,u.shadow.camera.bottom=-40,t.add(u);const d=new gd(11193599,4478276,.6);t.add(d);const p=[[0,0,14,14],[-20,0,9,9],[20,0,9,9],[0,-20,9,9],[0,20,11,11]],m=Wt.WALL_HEIGHT,x=.5,g=new se({map:e,roughness:.75,metalness:.02}),f=new se({map:s,roughness:.9});for(const[$,lt,mt,Ht]of p){const Tt=mt/2,V=Ht/2;lt+V<Wt.WORLD_SIZE&&(this.addWall(t,g,$-Tt/2-1,m/2,lt+V,Tt-2,m,x),this.addWall(t,g,$+Tt/2+1,m/2,lt+V,Tt-2,m,x)),lt-V>-50&&(this.addWall(t,g,$-Tt/2-1,m/2,lt-V,Tt-2,m,x),this.addWall(t,g,$+Tt/2+1,m/2,lt-V,Tt-2,m,x)),this.addWall(t,g,$+Tt,m/2,lt-V/2-1,x,m,V-2),this.addWall(t,g,$+Tt,m/2,lt+V/2+1,x,m,V-2),this.addWall(t,g,$-Tt,m/2,lt-V/2-1,x,m,V-2),this.addWall(t,g,$-Tt,m/2,lt+V/2+1,x,m,V-2);const K=new gn(mt+.5,Ht+.5),xt=new Z(K,f);xt.rotation.x=Math.PI/2,xt.position.set($,m,lt),xt.receiveShadow=!0,t.add(xt);const Dt=new hi(16772795,2.5,mt*3.5);Dt.position.set($,m-.4,lt),Dt.castShadow=!0,Dt.shadow.mapSize.set(512,512),t.add(Dt);const yt=new ve(.02,.02,.4,6),Qt=new se({color:5592405,metalness:.7,roughness:.4}),re=new Z(yt,Qt);re.position.set($,m-.2,lt),t.add(re);const Gt=new ve(.08,.18,.15,8),J=new se({color:3355443,metalness:.8,roughness:.3}),nt=new Z(Gt,J);nt.position.set($,m-.42,lt),t.add(nt);const et=new an(.08,8,8),gt=new se({color:16772812,emissive:16768426,emissiveIntensity:3}),w=new Z(et,gt);w.position.set($,m-.52,lt),t.add(w);const Ut=new hi(10070732,.6,mt*2);Ut.position.set($,m*.4,lt),t.add(Ut),this.spawnPoints.push(new P($,0,lt)),this.enemySpawnPoints.push(new P($+Tt*.3,0,lt+V*.3),new P($-Tt*.3,0,lt-V*.3))}const T=new se({map:a,roughness:.8}),b=new se({map:r,color:4482628,roughness:.5,metalness:.3}),y=new se({color:3355443,metalness:.6,roughness:.4}),A=[{pos:[-4,0,-4],size:.45},{pos:[4.5,0,3],size:.5},{pos:[-19.5,0,2.5],size:.4},{pos:[21,0,-2.5],size:.45},{pos:[2.5,0,-19.5],size:.4},{pos:[-1.5,0,19.5],size:.5},{pos:[-4,.45,-4],size:.35},{pos:[4.9,0,3.4],size:.4}];for(const $ of A){const lt=$.size,mt=new Z(new qt(lt,lt,lt),T);mt.position.set($.pos[0],$.pos[1]+lt/2,$.pos[2]),mt.rotation.y=Math.random()*.3-.15,mt.castShadow=!0,mt.receiveShadow=!0,mt.userData.isWall=!0,t.add(mt),this.walls.push(mt)}const R=[[5,0,-5],[-5,0,4],[18,0,3],[-18,0,-3],[3,0,18],[-2,0,-18]];for(const[$,lt,mt]of R){const Ht=new Qe,Tt=.22,V=.75,K=new Z(new ve(Tt,Tt*.95,V,16),b);K.position.y=V/2,K.castShadow=!0,K.receiveShadow=!0,Ht.add(K);for(const Dt of[V,.02]){const yt=new Z(new fi(Tt,.025,8,16),y);yt.rotation.x=Math.PI/2,yt.position.y=Dt,Ht.add(yt)}const xt=new Z(new fi(Tt+.01,.02,8,16),y);xt.rotation.x=Math.PI/2,xt.position.y=V/2,Ht.add(xt),Ht.position.set($,0,mt),t.add(Ht)}const C=[[0,9.5,3,5],[0,-9.5,3,5],[10,0,6,3],[-10,0,6,3]];for(const[$,lt,mt,Ht]of C){const Tt=new Z(new gn(mt,Ht),f);Tt.rotation.x=Math.PI/2,Tt.position.set($,m,lt),t.add(Tt);const V=new hi(14535850,1.2,8);V.position.set($,m-.3,lt),t.add(V);const K=new Z(new an(.06,6,6),new se({color:16772812,emissive:16764040,emissiveIntensity:2}));K.position.set($,m-.15,lt),t.add(K)}const N=new se({color:5592405,roughness:.95}),v=new gn(2,2),S=[[0,7],[0,-7],[7,0],[-7,0],[0,14],[0,-14],[14,0],[-14,0]];for(const[$,lt]of S){const mt=new Z(v,N);mt.rotation.x=-Math.PI/2,mt.position.set($,.02,lt),mt.userData.isFloor=!0,t.add(mt)}const L=Wt.WORLD_SIZE,O=new se({map:e,color:6710903,roughness:.8});this.addWall(t,O,0,m/2,L,L*2,m,x),this.addWall(t,O,0,m/2,-L,L*2,m,x),this.addWall(t,O,L,m/2,0,x,m,L*2),this.addWall(t,O,-L,m/2,0,x,m,L*2),t.fog=new Ro(1712176,.015);const B=Wt.WORLD_SIZE*3,q=document.createElement("canvas");q.width=512,q.height=512;const k=q.getContext("2d"),G=k.createLinearGradient(0,0,0,512);G.addColorStop(0,"#0a0f18"),G.addColorStop(.4,"#151e2d"),G.addColorStop(.7,"#1f2a3a"),G.addColorStop(1,"#2a3545"),k.fillStyle=G,k.fillRect(0,0,512,512),k.fillStyle="rgba(255, 255, 255, 0.5)";for(let $=0;$<100;$++){const lt=Math.random()*512,mt=Math.random()*300,Ht=Math.random()*1.5+.5;k.beginPath(),k.arc(lt,mt,Ht,0,Math.PI*2),k.fill()}k.fillStyle="rgba(255, 255, 255, 0.8)";for(let $=0;$<20;$++){const lt=Math.random()*512,mt=Math.random()*200,Ht=Math.random()*2+1;k.beginPath(),k.arc(lt,mt,Ht,0,Math.PI*2),k.fill()}const z=new Ii(q),j=new an(B,32,32),ct=new _s({map:z,side:Ne,fog:!1}),at=new Z(j,ct);t.add(at),t.background=new jt(659224)}addWall(t,e,n,s,r,a,o,l){const c=new qt(a,o,l),h=new Z(c,e);h.position.set(n,s,r),h.castShadow=!0,h.receiveShadow=!0,h.userData.isWall=!0,t.add(h),this.walls.push(h)}getWalls(){return this.walls}getSpawnPoints(){return this.spawnPoints}getEnemySpawnPoints(){return this.enemySpawnPoints}}class yg{constructor(){this.shakeIntensity=0,this.shakeDuration=0,this.shakeTime=0,this.shakeOffset={x:0,y:0},this.slowMoScale=1,this.slowMoTarget=1,this.slowMoDuration=0,this.flashOpacity=0,this.vignetteIntensity=0,this.flashElement=document.createElement("div"),this.flashElement.style.cssText=`
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: white;
      pointer-events: none;
      opacity: 0;
      z-index: 100;
      mix-blend-mode: overlay;
    `,document.body.appendChild(this.flashElement),this.vignetteElement=document.createElement("div"),this.vignetteElement.style.cssText=`
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      opacity: 0;
      z-index: 99;
      background: radial-gradient(ellipse at center, transparent 40%, rgba(100,0,0,0.6) 100%);
    `,document.body.appendChild(this.vignetteElement)}shake(t,e){t>this.shakeIntensity&&(this.shakeIntensity=t,this.shakeDuration=e,this.shakeTime=0)}gunShake(){this.shake(2,.05)}damageShake(){this.shake(8,.15)}explosionShake(){this.shake(12,.2)}getShakeOffset(){return this.shakeOffset}slowMotion(t,e){this.slowMoTarget=t,this.slowMoDuration=e}waveSlowMo(){this.slowMotion(.2,1.5)}headshotSlowMo(){this.slowMotion(.5,.3)}getTimeScale(){return this.slowMoScale}flash(t=.3){this.flashOpacity=t}muzzleFlash(){this.flash(.1)}headshotFlash(){this.flash(.4),this.flashElement.style.background="#ff4400"}setHealthVignette(t){t<50?(this.vignetteIntensity=(50-t)/30,this.vignetteIntensity=Math.min(1,this.vignetteIntensity)):this.vignetteIntensity=0}update(t){if(this.shakeDuration>0){this.shakeTime+=t;const n=this.shakeTime/this.shakeDuration;if(n<1){const s=1-n,r=Math.random()*Math.PI*2,a=this.shakeIntensity*s*Math.random();this.shakeOffset.x=Math.cos(r)*a,this.shakeOffset.y=Math.sin(r)*a}else this.shakeOffset.x=0,this.shakeOffset.y=0,this.shakeDuration=0,this.shakeIntensity=0}this.slowMoDuration>0?(this.slowMoScale=this.slowMoTarget,this.slowMoDuration-=t/this.slowMoScale,this.slowMoDuration<=0&&(this.slowMoScale=1,this.slowMoTarget=1)):(this.slowMoScale+=(1-this.slowMoScale)*5*t,this.slowMoScale>.99&&(this.slowMoScale=1)),this.flashOpacity>0&&(this.flashOpacity-=t*8,this.flashOpacity<0&&(this.flashOpacity=0,this.flashElement.style.background="white")),this.flashElement.style.opacity=this.flashOpacity.toString();const e=Math.sin(Date.now()*.005)*.15+.85;this.vignetteElement.style.opacity=(this.vignetteIntensity*e).toString()}}class Eg{constructor(){this.pitch=0,this.yaw=0,this.bobTimer=0,this.bobAmount=0,this.locked=!1,this.camera=new We(Wt.FOV,window.innerWidth/window.innerHeight,Wt.NEAR_CLIP,Wt.FAR_CLIP),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()})}init(t){t.addEventListener("click",()=>{this.locked||t.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.locked=!!document.pointerLockElement})}update(t,e,n){if(!this.locked)return;this.yaw-=n.x*Wt.MOUSE_SENSITIVITY,this.pitch-=n.y*Wt.MOUSE_SENSITIVITY,this.pitch=Math.max(-Math.PI*85/180,Math.min(Math.PI*85/180,this.pitch));const s=new Ye(this.pitch,this.yaw,0,"YXZ");this.camera.quaternion.setFromEuler(s),e?(this.bobTimer+=t*10,this.bobAmount=Math.sin(this.bobTimer)*.05):(this.bobAmount*=.9,this.bobTimer=0)}setPosition(t){this.camera.position.set(t.x,t.y+Wt.PLAYER_HEIGHT+this.bobAmount,t.z)}applyShake(t,e){const n=new Ye(this.pitch+e*.01,this.yaw+t*.01,0,"YXZ");this.camera.quaternion.setFromEuler(n)}getCamera(){return this.camera}isLocked(){return this.locked}getYaw(){return this.yaw}getDirection(){const t=new P;return this.camera.getWorldDirection(t),t}lock(){document.body.requestPointerLock()}unlock(){document.exitPointerLock()}}const _a=new kc,bg=new P(0,-1,0);function wg(i,t,e){e||(i.y+=Wt.GRAVITY*t)}function Tg(i,t){_a.set(new P(i.x,i.y+1,i.z),bg),_a.far=3;const e=_a.intersectObjects(t.children,!0);for(const n of e)if(n.object.userData.isFloor||n.object.userData.isWall){const s=n.point.y;if(i.y-s<.1)return{grounded:!0,height:s}}return i.y<=.01?{grounded:!0,height:0}:{grounded:!1,height:0}}function Ag(i,t,e){const n=i.clone().add(t),s=.4;for(const r of e){r.geometry.boundingBox||r.geometry.computeBoundingBox();const a=r.geometry.boundingBox.clone();if(a.applyMatrix4(r.matrixWorld),a.min.x-=s,a.min.z-=s,a.max.x+=s,a.max.z+=s,n.x>a.min.x&&n.x<a.max.x&&n.z>a.min.z&&n.z<a.max.z&&n.y<a.max.y&&n.y+Wt.PLAYER_HEIGHT>a.min.y){const o=n.x-a.min.x,l=a.max.x-n.x,c=n.z-a.min.z,h=a.max.z-n.z,u=Math.min(o,l,c,h);u===o?n.x=a.min.x:u===l?n.x=a.max.x:u===c?n.z=a.min.z:n.z=a.max.z}}return n}class Rg{constructor(){this.position=new P(0,0,0),this.velocity=new P,this.grounded=!1,this.health=Wt.PLAYER_MAX_HEALTH,this.walls=[]}init(t,e,n){this.scene=t,this.walls=e,n&&this.position.copy(n)}update(t,e,n){if(!n.isLocked())return;const s=new P(0,0,-1),r=new P(1,0,0),a=n.getYaw();s.applyAxisAngle(new P(0,1,0),a),r.applyAxisAngle(new P(0,1,0),a);const o=new P;e.isKeyDown("KeyW")&&o.add(s),e.isKeyDown("KeyS")&&o.sub(s),e.isKeyDown("KeyD")&&o.add(r),e.isKeyDown("KeyA")&&o.sub(r),o.length()>0&&o.normalize();const l=e.isKeyDown("ShiftLeft")?Wt.PLAYER_SPRINT_SPEED:Wt.PLAYER_SPEED;this.velocity.x=o.x*l*t,this.velocity.z=o.z*l*t,e.isKeyDown("Space")&&this.grounded&&(this.velocity.y=Wt.PLAYER_JUMP_FORCE*t*3,this.grounded=!1),wg(this.velocity,t,this.grounded),this.position.y+=this.velocity.y*t;const c=Ag(this.position,new P(this.velocity.x,0,this.velocity.z),this.walls);this.position.x=c.x,this.position.z=c.z;const h=Tg(this.position,this.scene);this.grounded=h.grounded,this.grounded&&this.position.y<h.height&&(this.position.y=h.height,this.velocity.y=0),n.setPosition(this.position);const u=e.getMouseDelta();n.update(t,o.length()>0,u),e.resetMouseDelta()}takeDamage(t){return this.health-=t,this.health<=0?(this.health=0,!0):!1}heal(t){this.health=Math.min(Wt.PLAYER_MAX_HEALTH,this.health+t)}getPosition(){return this.position.clone()}getVelocity(){return this.velocity.clone()}isGrounded(){return this.grounded}getHealth(){return this.health}isMoving(){return this.velocity.x!==0||this.velocity.z!==0}reset(t){this.position.copy(t),this.velocity.set(0,0,0),this.health=Wt.PLAYER_MAX_HEALTH}}class Cg{constructor(){this.keys=new Set,this.mouseX=0,this.mouseY=0,this.mouseButtons=new Set}init(){document.addEventListener("keydown",t=>this.keys.add(t.code)),document.addEventListener("keyup",t=>this.keys.delete(t.code)),document.addEventListener("mousemove",t=>{this.mouseX+=t.movementX,this.mouseY+=t.movementY}),document.addEventListener("mousedown",t=>this.mouseButtons.add(t.button)),document.addEventListener("mouseup",t=>this.mouseButtons.delete(t.button))}isKeyDown(t){return this.keys.has(t)}isMouseDown(t=0){return this.mouseButtons.has(t)}getMouseDelta(){return{x:this.mouseX,y:this.mouseY}}resetMouseDelta(){this.mouseX=0,this.mouseY=0}dispose(){this.keys.clear(),this.mouseButtons.clear()}}class Pg{constructor(t){this.raycaster=new kc,this.scene=null,this.camera=null,this.effects=t}init(t,e){this.scene=t,this.camera=e}shoot(t,e){if(!this.scene||!this.camera)return{hit:!1,point:new P,object:null,distance:0,normal:null};const n=new P(0,0,-1);n.applyQuaternion(this.camera.quaternion),t>0&&(n.x+=(Math.random()-.5)*t,n.y+=(Math.random()-.5)*t,n.z+=(Math.random()-.5)*t,n.normalize()),this.raycaster.set(this.camera.position,n),this.raycaster.far=e;const s=this.raycaster.intersectObjects(this.scene.children,!0).filter(o=>(o.object.layers.test(new Tr),!o.object.userData.isEffect&&!o.object.userData.isWeaponModel)),r=this.camera.position.clone();if(s.length>0){const o=s[0],l=o.point.clone(),c=o.face?o.face.normal.clone():null;return this.effects.createBulletTrail(r,l),this.effects.createImpactSparks(l,c??void 0),{hit:!0,point:l,object:o.object,distance:o.distance,normal:c}}const a=r.clone().add(n.multiplyScalar(e));return this.effects.createBulletTrail(r,a),{hit:!1,point:a,object:null,distance:e,normal:null}}}class qc{constructor(){this.scene=null,this.effects=[]}init(t){this.scene=t}createMuzzleFlash(t){if(!this.scene)return;const e=new hi(16755251,3,8);e.position.copy(t),this.scene.add(e),this.effects.push({object:e,lifetime:0,maxLifetime:.06,update:r=>{const a=1-r.lifetime/r.maxLifetime;r.object.intensity=3*a}});const n=new Tc({color:16768358,transparent:!0,opacity:.9,blending:Ui,depthWrite:!1}),s=new Au(n);s.position.copy(t),s.scale.set(.4,.4,.4),this.scene.add(s),this.effects.push({object:s,lifetime:0,maxLifetime:.08,update:r=>{const a=1-r.lifetime/r.maxLifetime;r.object.material.opacity=.9*a;const o=.4+.3*(r.lifetime/r.maxLifetime);r.object.scale.set(o,o,o)}})}createBloodSplatter(t,e){if(!this.scene)return;const n=20,s=new Float32Array(n*3),r=[],a=e?e.clone().negate():new P(0,1,0);for(let h=0;h<n;h++){s[h*3]=t.x,s[h*3+1]=t.y,s[h*3+2]=t.z;const u=new P((Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6);u.add(a.clone().multiplyScalar(2+Math.random()*4)),r.push(u)}const o=new ye;o.setAttribute("position",new Be(s,3));const l=new dr({color:11141120,size:.1,transparent:!0,opacity:1,blending:ci,depthWrite:!1}),c=new aa(o,l);this.scene.add(c),this.effects.push({object:c,lifetime:0,maxLifetime:.6,update:(h,u)=>{const d=h.object.geometry.getAttribute("position");for(let m=0;m<n;m++)r[m].y-=15*u,d.setXYZ(m,d.getX(m)+r[m].x*u,d.getY(m)+r[m].y*u,d.getZ(m)+r[m].z*u);d.needsUpdate=!0;const p=1-h.lifetime/h.maxLifetime;h.object.material.opacity=p}})}createDeathExplosion(t){if(!this.scene)return;const e=40,n=new Float32Array(e*3),s=[];for(let c=0;c<e;c++){n[c*3]=t.x,n[c*3+1]=t.y+.8,n[c*3+2]=t.z;const h=Math.random()*Math.PI*2,u=(Math.random()-.3)*Math.PI,d=3+Math.random()*5,p=new P(Math.cos(h)*Math.cos(u)*d,Math.sin(u)*d+2,Math.sin(h)*Math.cos(u)*d);s.push(p)}const r=new ye;r.setAttribute("position",new Be(n,3));const a=new dr({color:16729122,size:.15,transparent:!0,opacity:1,blending:Ui,depthWrite:!1}),o=new aa(r,a);this.scene.add(o),this.effects.push({object:o,lifetime:0,maxLifetime:.8,update:(c,h)=>{const u=c.object.geometry.getAttribute("position");for(let p=0;p<e;p++)s[p].y-=12*h,s[p].multiplyScalar(.98),u.setXYZ(p,u.getX(p)+s[p].x*h,u.getY(p)+s[p].y*h,u.getZ(p)+s[p].z*h);u.needsUpdate=!0;const d=1-c.lifetime/c.maxLifetime;c.object.material.opacity=d,c.object.material.size=.15*(.5+d*.5)}});const l=new hi(16737843,5,10);l.position.copy(t),l.position.y+=.8,this.scene.add(l),this.effects.push({object:l,lifetime:0,maxLifetime:.2,update:c=>{const h=1-c.lifetime/c.maxLifetime;c.object.intensity=5*h}})}createImpactSparks(t,e){if(!this.scene)return;const n=12,s=new Float32Array(n*3),r=[],a=e?e.clone():new P(0,1,0);for(let h=0;h<n;h++){s[h*3]=t.x,s[h*3+1]=t.y,s[h*3+2]=t.z;const u=new P((Math.random()-.5)*4,(Math.random()-.5)*4,(Math.random()-.5)*4);u.add(a.clone().multiplyScalar(2+Math.random()*3)),r.push(u)}const o=new ye;o.setAttribute("position",new Be(s,3));const l=new dr({color:16763972,size:.08,transparent:!0,opacity:1,blending:Ui,depthWrite:!1}),c=new aa(o,l);this.scene.add(c),this.effects.push({object:c,lifetime:0,maxLifetime:.4,update:(h,u)=>{const d=h.object.geometry.getAttribute("position");for(let m=0;m<n;m++)r[m].y-=9.8*u,d.setXYZ(m,d.getX(m)+r[m].x*u,d.getY(m)+r[m].y*u,d.getZ(m)+r[m].z*u);d.needsUpdate=!0;const p=1-h.lifetime/h.maxLifetime;h.object.material.opacity=p}})}createBulletTrail(t,e){if(!this.scene)return;const n=new ye().setFromPoints([t.clone(),e.clone()]),s=new Rc({color:16777130,transparent:!0,opacity:.6,blending:Ui,depthWrite:!1}),r=new Du(n,s);this.scene.add(r),this.effects.push({object:r,lifetime:0,maxLifetime:.15,update:a=>{const o=1-a.lifetime/a.maxLifetime;a.object.material.opacity=.6*o}})}update(t){for(let e=this.effects.length-1;e>=0;e--){const n=this.effects[e];if(n.lifetime+=t,n.update&&n.update(n,t),n.lifetime>=n.maxLifetime){if(this.scene?.remove(n.object),n.object.geometry&&n.object.geometry.dispose(),n.object.material){const s=n.object.material;Array.isArray(s)?s.forEach(r=>r.dispose()):s.dispose()}this.effects.splice(e,1)}}}dispose(){for(const t of this.effects)if(this.scene?.remove(t.object),t.object.geometry&&t.object.geometry.dispose(),t.object.material){const e=t.object.material;Array.isArray(e)?e.forEach(n=>n.dispose()):e.dispose()}this.effects.length=0}}const Ot={gunMetal:new se({color:2763306,metalness:.9,roughness:.25}),darkMetal:new se({color:1710618,metalness:.85,roughness:.3}),grip:new se({color:1710618,metalness:.2,roughness:.9}),wood:new se({color:4861984,metalness:.1,roughness:.8}),chrome:new se({color:8947848,metalness:1,roughness:.1}),rubber:new se({color:1118481,metalness:0,roughness:1}),sight:new se({color:65280,emissive:65280,emissiveIntensity:.5})};function Xe(i,t,e,n=.005){return new qt(i-n*2,t-n*2,e-n*2,2,2,2)}function Jl(){const i=new Qe,t=new Z(Xe(.032,.04,.16),Ot.gunMetal);t.position.set(0,.02,-.02),i.add(t);for(let g=0;g<6;g++){const f=new Z(new qt(.034,.002,.004),Ot.darkMetal);f.position.set(0,.02,.04+g*.008),i.add(f)}const e=new Z(new ve(.006,.006,.18,12),Ot.chrome);e.rotation.x=Math.PI/2,e.position.set(0,.025,-.09),i.add(e);const n=new Z(new ve(.008,.01,.02,12),Ot.gunMetal);n.rotation.x=Math.PI/2,n.position.set(0,.025,-.11),i.add(n);const s=new Z(Xe(.028,.035,.12),Ot.gunMetal);s.position.set(0,-.015,0),i.add(s);const r=new Uc;r.moveTo(0,0),r.lineTo(.03,0),r.lineTo(.03,-.025),r.quadraticCurveTo(.015,-.035,0,-.025),r.lineTo(0,0);const a=new Do(r,{depth:.006,bevelEnabled:!1}),o=new Z(a,Ot.gunMetal);o.rotation.y=Math.PI/2,o.position.set(.003,-.015,-.035),i.add(o);const l=new Z(new qt(.003,.018,.008),Ot.chrome);l.position.set(0,-.025,-.025),l.rotation.x=.3,i.add(l);const c=new Z(Xe(.026,.08,.035),Ot.grip);c.position.set(0,-.06,.025),c.rotation.x=.15,i.add(c);for(let g=0;g<5;g++){const f=new Z(new qt(.001,.012,.028),Ot.rubber);f.position.set(.014,-.04-g*.014,.025),i.add(f);const T=f.clone();T.position.x=-.014,i.add(T)}const h=new Z(new qt(.022,.008,.028),Ot.chrome);h.position.set(0,-.1,.025),i.add(h);const u=new Z(new qt(.004,.008,.004),Ot.darkMetal);u.position.set(0,.045,-.07),i.add(u);const d=new Z(new qt(.02,.008,.006),Ot.darkMetal);d.position.set(0,.045,.05),i.add(d);const p=new Z(new qt(.006,.01,.008),Ot.gunMetal);p.position.set(0,.045,.05),i.add(p);const m=new Z(new qt(.004,.015,.01),Ot.chrome);m.position.set(0,.03,.07),m.rotation.x=-.5,i.add(m);const x=new Z(new ve(.004,.004,.02,8),Ot.darkMetal);return x.rotation.z=Math.PI/2,x.position.set(.02,.01,.04),i.add(x),i.position.set(.28,-.26,-.45),i.rotation.y=-.05,i}function Lg(){const i=new Qe,t=new Z(Xe(.045,.055,.18),Ot.gunMetal);t.position.set(0,0,0),i.add(t);const e=new Z(new ve(.018,.02,.45,16),Ot.darkMetal);e.rotation.x=Math.PI/2,e.position.set(0,.015,-.28),i.add(e);const n=new Z(new ve(.014,.014,.1,12),Ot.rubber);n.rotation.x=Math.PI/2,n.position.set(0,.015,-.51),i.add(n);const s=new Z(new ve(.014,.014,.35,12),Ot.gunMetal);s.rotation.x=Math.PI/2,s.position.set(0,-.02,-.22),i.add(s);const r=new Z(Xe(.05,.055,.1),Ot.grip);r.position.set(0,-.005,-.12),i.add(r);for(let m=0;m<8;m++){const x=new Z(new qt(.052,.003,.008),Ot.rubber);x.position.set(0,-.005,-.16+m*.012),i.add(x)}const a=new Z(new qt(.035,.025,.04),Ot.darkMetal);a.position.set(.01,.025,.02),i.add(a);const o=new Z(Xe(.04,.065,.18),Ot.grip);o.position.set(0,-.01,.17),i.add(o);const l=new Z(new qt(.042,.07,.015),Ot.rubber);l.position.set(0,-.01,.27),i.add(l);const c=new Z(Xe(.03,.07,.04),Ot.grip);c.position.set(0,-.055,.05),c.rotation.x=.25,i.add(c);const h=new Z(new fi(.02,.004,8,12,Math.PI),Ot.gunMetal);h.rotation.y=Math.PI/2,h.rotation.x=Math.PI,h.position.set(0,-.04,0),i.add(h);const u=new Z(new qt(.004,.02,.01),Ot.chrome);u.position.set(0,-.035,0),i.add(u);const d=new Z(new an(.004,8,8),Ot.sight);d.position.set(0,.04,-.45),i.add(d);const p=new Z(new qt(.03,.02,.06),Ot.chrome);return p.position.set(0,-.04,0),i.add(p),i.position.set(.25,-.28,-.4),i.rotation.y=-.03,i}function Dg(){const i=new Qe,t=new Z(Xe(.038,.045,.22),Ot.gunMetal);t.position.set(0,.01,0),i.add(t);const e=new Z(Xe(.036,.04,.15),Ot.gunMetal);e.position.set(0,-.025,.02),i.add(e);const n=new Z(new ve(.01,.012,.35,12),Ot.darkMetal);n.rotation.x=Math.PI/2,n.position.set(0,.015,-.26),i.add(n);const s=new Z(new ve(.022,.025,.18,8),Ot.grip);s.rotation.x=Math.PI/2,s.position.set(0,.01,-.15),i.add(s);const r=new qt(.025,.006,.16),a=new Z(r,Ot.gunMetal);a.position.set(0,.035,-.14),i.add(a);for(let R=0;R<12;R++){const C=new Z(new qt(.026,.003,.004),Ot.darkMetal);C.position.set(0,.04,-.22+R*.013),i.add(C)}const o=new Z(new ve(.012,.015,.04,12),Ot.darkMetal);o.rotation.x=Math.PI/2,o.position.set(0,.015,-.44),i.add(o);for(let R=0;R<4;R++){const C=new Z(new qt(.004,.03,.02),Ot.rubber);C.position.set(Math.cos(R*Math.PI/2)*.012,.015+Math.sin(R*Math.PI/2)*.012,-.44),i.add(C)}const l=new Z(new qt(.02,.025,.025),Ot.gunMetal);l.position.set(0,.025,-.25),i.add(l);const c=new Z(new qt(.006,.035,.015),Ot.darkMetal);c.position.set(0,.045,-.25),i.add(c);const h=new Z(new ve(.002,.002,.015,6),Ot.chrome);h.position.set(0,.06,-.25),i.add(h);const u=new Z(Xe(.025,.03,.08),Ot.gunMetal);u.position.set(0,.045,.04),i.add(u);const d=new Z(new qt(.015,.01,.03),Ot.darkMetal);d.position.set(0,.025,.1),i.add(d);const p=new Z(new qt(.002,.02,.04),Ot.gunMetal);p.position.set(.02,.01,.02),i.add(p);const m=new Z(Xe(.025,.12,.04),Ot.darkMetal);m.position.set(0,-.085,0),m.rotation.x=-.1,i.add(m);for(let R=0;R<5;R++){const C=new Z(new qt(.027,.004,.042),Ot.gunMetal);C.position.set(0,-.05-R*.018,0),C.rotation.x=-.1,i.add(C)}const x=new Z(Xe(.028,.07,.035),Ot.grip);x.position.set(0,-.06,.06),x.rotation.x=.2,i.add(x);const g=new Z(new fi(.018,.004,8,12,Math.PI),Ot.gunMetal);g.rotation.y=Math.PI/2,g.rotation.x=Math.PI,g.position.set(0,-.035,.02),i.add(g);const f=new Z(new qt(.004,.018,.008),Ot.chrome);f.position.set(0,-.03,.02),f.rotation.x=.2,i.add(f);const T=new Z(new ve(.014,.014,.12,12),Ot.gunMetal);T.rotation.x=Math.PI/2,T.position.set(0,0,.17),i.add(T);const b=new Z(Xe(.035,.055,.12),Ot.grip);b.position.set(0,-.01,.26),i.add(b);const y=new Z(new qt(.037,.06,.01),Ot.rubber);y.position.set(0,-.01,.325),i.add(y);const A=new Z(new fi(.008,.003,6,12),Ot.chrome);return A.rotation.y=Math.PI/2,A.position.set(.025,-.02,.15),i.add(A),i.position.set(.22,-.26,-.35),i.rotation.y=-.02,i}class Ig{constructor(){this.weapons=[],this.currentIndex=0,this.scene=null,this.camera=null,this.reloadTimer=0,this.bobTime=0,this.viewmodelContainer=new Qe,this.effects=new qc,this.shootingSystem=new Pg(this.effects)}init(t,e){this.scene=t,this.camera=e,this.effects.init(t),this.shootingSystem.init(t,e),this.weapons=Wt.WEAPONS.map(n=>({name:n.name,damage:n.damage,fireRate:n.fireRate,ammo:n.maxAmmo,maxAmmo:n.maxAmmo,reserveAmmo:n.reserveAmmo,reloadTime:n.reloadTime,range:n.range,spread:n.spread,isReloading:!1,lastFireTime:0,mesh:null})),this.weapons.forEach((n,s)=>{n.mesh=this.createWeaponMesh(s),n.mesh.visible=s===this.currentIndex,n.mesh.userData.isWeaponModel=!0,n.mesh.traverse(r=>{r.userData.isWeaponModel=!0}),this.viewmodelContainer.add(n.mesh)}),this.viewmodelContainer.position.set(0,0,0),e.add(this.viewmodelContainer),e.parent||t.add(e)}createWeaponMesh(t){switch(t){case 0:return Jl();case 1:return Lg();case 2:return Dg();default:return Jl()}}switchWeapon(t){if(t<0||t>=this.weapons.length||t===this.currentIndex)return;const e=this.weapons[this.currentIndex];e.isReloading&&(e.isReloading=!1,this.reloadTimer=0),e.mesh&&(e.mesh.visible=!1),this.currentIndex=t;const n=this.weapons[this.currentIndex];n.mesh&&(n.mesh.visible=!0)}shoot(){if(!this.scene||!this.camera)return[];const t=this.weapons[this.currentIndex];if(t.isReloading)return[];if(t.ammo<=0)return this.reload(),[];const e=performance.now()/1e3,n=1/t.fireRate;if(e-t.lastFireTime<n)return[];if(t.lastFireTime=e,t.ammo--,t.mesh){const r=new P(0,.03,-.45);t.mesh.localToWorld(r),this.effects.createMuzzleFlash(r)}this.applyRecoil();const s=[];if(this.currentIndex===1)for(let r=0;r<6;r++)s.push(this.shootingSystem.shoot(t.spread,t.range));else s.push(this.shootingSystem.shoot(t.spread,t.range));return s}reload(){const t=this.weapons[this.currentIndex];t.isReloading||t.ammo>=t.maxAmmo||t.reserveAmmo<=0||(t.isReloading=!0,this.reloadTimer=t.reloadTime)}update(t){const e=this.weapons[this.currentIndex];if(e.isReloading&&(this.reloadTimer-=t,this.reloadTimer<=0)){const n=e.maxAmmo-e.ammo,s=Math.min(n,e.reserveAmmo);e.ammo+=s,e.reserveAmmo-=s,e.isReloading=!1,this.reloadTimer=0}this.bobTime+=t*2,e.mesh&&(e.mesh.position.clone(),e.mesh.position.y+=Math.sin(this.bobTime)*.002),this.effects.update(t)}applyRecoil(){const t=this.weapons[this.currentIndex];if(!t.mesh)return;const e=.04,n=-.06;t.mesh.position.z+=e,t.mesh.rotation.x+=n;const s=t.mesh,r=s.position.z-e,a=s.rotation.x-n;setTimeout(()=>{s.position.z=r,s.rotation.x=a},60)}getCurrentWeapon(){return this.weapons[this.currentIndex]}getHUDData(){const t=this.weapons[this.currentIndex];return{ammo:t.ammo,maxAmmo:t.maxAmmo,reserveAmmo:t.reserveAmmo,weaponName:t.name,isReloading:t.isReloading}}getWeapons(){return this.weapons}addReserveAmmo(t){const e=this.weapons[this.currentIndex];e.reserveAmmo+=t}dispose(){this.effects.dispose(),this.weapons.forEach(t=>{t.mesh&&t.mesh.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){const n=e.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n.dispose()}})}),this.camera&&this.camera.remove(this.viewmodelContainer)}}const ie={skin:new se({color:8921634,roughness:.7,metalness:.1}),darkSkin:new se({color:5574929,roughness:.8,metalness:.05}),armor:new se({color:3355443,roughness:.4,metalness:.6}),cloth:new se({color:1710618,roughness:.9,metalness:0}),eyes:new se({color:16776960,emissive:16763904,emissiveIntensity:2}),teeth:new se({color:13421738,roughness:.3,metalness:.1}),claws:new se({color:1118481,roughness:.2,metalness:.3})};function Ug(){const i=new Qe,t=new Z(new qt(.5,.55,.3),ie.skin);t.position.set(0,1.1,0),i.add(t);const e=new Z(new qt(.4,.35,.08),ie.armor);e.position.set(0,1.15,.16),i.add(e);const n=new Z(new an(.22,12,10),ie.skin);n.scale.set(1,1.2,.8),n.position.set(0,.75,.02),i.add(n);const s=new Z(new an(.18,12,10),ie.skin);s.scale.set(1,1.1,.9),s.position.set(0,1.55,0),i.add(s);const r=new Z(new qt(.25,.06,.1),ie.darkSkin);r.position.set(0,1.62,.12),i.add(r);const a=new an(.035,8,8),o=new Z(a,ie.eyes);o.position.set(-.07,1.57,.14),i.add(o);const l=new Z(a,ie.eyes);l.position.set(.07,1.57,.14),i.add(l);const c=new Z(new li(.04,.08,6),ie.darkSkin);c.rotation.x=Math.PI/2,c.position.set(0,1.5,.18),i.add(c);const h=new Z(new qt(.14,.08,.1),ie.darkSkin);h.position.set(0,1.4,.12),i.add(h);for(let Tt=0;Tt<5;Tt++){const V=new Z(new li(.012,.03,4),ie.teeth);V.rotation.x=Math.PI,V.position.set(-.05+Tt*.025,1.43,.16),i.add(V)}const u=new li(.04,.12,4),d=new Z(u,ie.skin);d.rotation.z=.5,d.rotation.x=.2,d.position.set(-.18,1.6,0),i.add(d);const p=new Z(u,ie.skin);p.rotation.z=-.5,p.rotation.x=.2,p.position.set(.18,1.6,0),i.add(p);const m=new an(.1,8,8),x=new Z(m,ie.skin);x.position.set(-.32,1.25,0),i.add(x);const g=new Z(m,ie.skin);g.position.set(.32,1.25,0),i.add(g);const f=new an(.08,8,6,0,Math.PI),T=new Z(f,ie.armor);T.rotation.z=Math.PI/2,T.position.set(-.35,1.28,0),i.add(T);const b=new Z(f,ie.armor);b.rotation.z=-Math.PI/2,b.position.set(.35,1.28,0),i.add(b);const y=new ve(.07,.06,.25,8),A=new Z(y,ie.skin);A.position.set(-.38,1.05,0),A.rotation.z=.3,i.add(A);const R=new Z(y,ie.skin);R.position.set(.38,1.05,0),R.rotation.z=-.3,i.add(R);const C=new ve(.06,.05,.25,8),N=new Z(C,ie.skin);N.position.set(-.45,.8,.05),N.rotation.z=.2,N.rotation.x=-.3,i.add(N);const v=new Z(C,ie.skin);v.position.set(.45,.8,.05),v.rotation.z=-.2,v.rotation.x=-.3,i.add(v);const S=new qt(.08,.12,.04),L=new Z(S,ie.darkSkin);L.position.set(-.5,.6,.1),i.add(L);const O=new Z(S,ie.darkSkin);O.position.set(.5,.6,.1),i.add(O);const B=new li(.015,.08,4);for(let Tt=0;Tt<3;Tt++){const V=new Z(B,ie.claws);V.rotation.x=Math.PI/2+.3,V.position.set(-.48-Tt*.02,.56,.16),i.add(V);const K=new Z(B,ie.claws);K.rotation.x=Math.PI/2+.3,K.position.set(.48+Tt*.02,.56,.16),i.add(K)}const q=new Z(new qt(.4,.15,.25),ie.cloth);q.position.set(0,.55,0),i.add(q);const k=new Z(new qt(.42,.06,.27),ie.armor);k.position.set(0,.6,0),i.add(k);const G=new ve(.1,.08,.3,8),z=new Z(G,ie.skin);z.position.set(-.12,.35,0),i.add(z);const j=new Z(G,ie.skin);j.position.set(.12,.35,0),i.add(j);const ct=new ve(.07,.06,.28,8),at=new Z(ct,ie.skin);at.position.set(-.12,.08,0),i.add(at);const $=new Z(ct,ie.skin);$.position.set(.12,.08,0),i.add($);const lt=new qt(.1,.06,.18),mt=new Z(lt,ie.darkSkin);mt.position.set(-.12,-.05,.04),i.add(mt);const Ht=new Z(lt,ie.darkSkin);return Ht.position.set(.12,-.05,.04),i.add(Ht),i.traverse(Tt=>{Tt instanceof Z&&(Tt.castShadow=!0,Tt.receiveShadow=!0)}),i}function Ng(i){const t=[];return i.traverse(e=>{if(e instanceof Z&&e.material instanceof se){const n=e.material.clone();n.transparent=!0,e.material=n,t.push(n)}}),t}let Fg=0;class Og{constructor(){this.group=new Qe,this.scene=null,this.deathTimer=0,this.deathAnimating=!1,this.removed=!1,this.materials=[],this.data={id:`enemy_${Fg++}`,mesh:null,position:new P,rotation:new Ye,velocity:new P,health:Wt.ENEMY_BASE_HEALTH,maxHealth:Wt.ENEMY_BASE_HEALTH,speed:Wt.ENEMY_BASE_SPEED,damage:Wt.ENEMY_BASE_DAMAGE,attackRange:Wt.ENEMY_ATTACK_RANGE,detectionRange:Wt.ENEMY_DETECTION_RANGE,attackCooldown:Wt.ENEMY_ATTACK_COOLDOWN,lastAttackTime:0,state:"idle",waypoints:[],currentWaypoint:0}}init(t,e){this.scene=t,this.data.position.copy(e);const n=Ug();this.group.add(n),this.materials=Ng(n),this.bodyMesh=n.children[0],n.traverse(h=>{h instanceof Z&&h.material instanceof se&&h.material.emissiveIntensity>1&&(this.leftEye?this.rightEye||(this.rightEye=h):this.leftEye=h)});const s=.8,r=.08,a=1.9,o=new gn(s,r),l=new _s({color:3355443,transparent:!0,opacity:.8,side:sn,depthTest:!1});this.healthBarBg=new Z(o,l),this.healthBarBg.position.y=a,this.healthBarBg.renderOrder=999,this.group.add(this.healthBarBg);const c=new gn(s,r);new _s({color:4521796,transparent:!0,opacity:.9,side:sn,depthTest:!1}),this.healthBarFg=new Z(c,l.clone()),this.healthBarFg.material.color.set(4521796),this.healthBarFg.material.opacity=.9,this.healthBarFg.position.y=a,this.healthBarFg.position.z=.001,this.healthBarFg.renderOrder=1e3,this.group.add(this.healthBarFg),this.group.traverse(h=>{h.userData.isEnemy=!0}),this.group.position.copy(e),this.data.mesh=this.group,t.add(this.group)}update(t,e){if(!this.removed){if(this.deathAnimating){this.deathTimer+=t;const n=Math.min(this.deathTimer*2,Math.PI/2);this.group.rotation.x=n;const s=Math.min(this.deathTimer/2,1);for(const r of this.materials)r.opacity=1-s;this.deathTimer>=2&&this.removeFromScene();return}this.group.position.copy(this.data.position),this.group.rotation.y=this.data.rotation.y,this.updateHealthBar(e)}}updateHealthBar(t){const e=Math.max(0,this.data.health/this.data.maxHealth);this.healthBarFg.scale.x=e,this.healthBarFg.position.x=-(1-e)*.4;const n=e<.5?1:1-(e-.5)*2,s=e>.5?1:e*2;this.healthBarFg.material.color.setRGB(n,s,0);const r=new P().subVectors(t,this.group.position);if(r.y=0,r.lengthSq()>.001){const o=Math.atan2(r.x,r.z);this.healthBarBg.rotation.y=o-this.group.rotation.y,this.healthBarFg.rotation.y=o-this.group.rotation.y}const a=e<1;this.healthBarBg.visible=a,this.healthBarFg.visible=a}takeDamage(t){if(this.data.state==="dead")return!1;this.data.health-=t;const e=this.bodyMesh.material;return e.color.clone(),e.emissive.set(16777215),e.emissiveIntensity=.8,setTimeout(()=>{this.removed||(e.emissive.set(0),e.emissiveIntensity=0)},80),this.data.health<=0?(this.data.health=0,this.data.state="dead",this.deathAnimating=!0,this.deathTimer=0,!0):!1}isDead(){return this.data.state==="dead"}isRemoved(){return this.removed}getMesh(){return this.group}getPosition(){return this.data.position}getState(){return this.data.state}setState(t){this.data.state=t}removeFromScene(){this.removed||!this.scene||(this.removed=!0,this.scene.remove(this.group),this.group.traverse(t=>{t instanceof Z&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}))}}class Bg{constructor(){this.idleTimers=new Map,this.patrolPauseTimers=new Map,this.patrolPaused=new Map}update(t,e,n){const s=t.data;if(s.state==="dead")return{action:"dead"};const r=new P().subVectors(n,s.position);r.y=0;const a=r.length();switch(s.state){case"idle":return this.handleIdle(t,e,a);case"patrol":return this.handlePatrol(t,e,a,n);case"chase":return this.handleChase(t,e,a,n);case"attack":return this.handleAttack(t,e,a,n);default:return{action:"idle"}}}handleIdle(t,e,n){const s=t.data;if(n<=s.detectionRange)return t.setState("chase"),{action:"chase"};const r=(this.idleTimers.get(s.id)??0)+e;return this.idleTimers.set(s.id,r),r>=1.5?(this.idleTimers.set(s.id,0),this.generateWaypoints(t),t.setState("patrol"),{action:"patrol"}):{action:"idle"}}handlePatrol(t,e,n,s){const r=t.data;if(n<=r.detectionRange)return this.patrolPaused.delete(r.id),this.patrolPauseTimers.delete(r.id),t.setState("chase"),{action:"chase"};if(this.patrolPaused.get(r.id)){const u=(this.patrolPauseTimers.get(r.id)??0)+e;return this.patrolPauseTimers.set(r.id,u),u>=1&&(this.patrolPaused.set(r.id,!1),this.patrolPauseTimers.set(r.id,0),r.currentWaypoint=(r.currentWaypoint+1)%r.waypoints.length),{action:"patrol_pause"}}r.waypoints.length===0&&this.generateWaypoints(t);const a=r.waypoints[r.currentWaypoint],o=new P().subVectors(a,r.position);if(o.y=0,o.length()<.5)return this.patrolPaused.set(r.id,!0),this.patrolPauseTimers.set(r.id,0),{action:"patrol_reached"};const c=o.normalize(),h=r.speed*.5;return r.velocity.set(c.x*h,0,c.z*h),r.position.x+=r.velocity.x*e,r.position.z+=r.velocity.z*e,r.rotation.y=Math.atan2(c.x,c.z),{action:"patrol"}}handleChase(t,e,n,s){const r=t.data;if(n>r.detectionRange*1.3)return this.generateWaypoints(t),t.setState("patrol"),{action:"patrol"};if(n<=r.attackRange)return t.setState("attack"),this.handleAttack(t,e,n,s);const a=new P().subVectors(s,r.position);a.y=0;const o=a.normalize();return r.velocity.set(o.x*r.speed,0,o.z*r.speed),r.position.x+=r.velocity.x*e,r.position.z+=r.velocity.z*e,r.rotation.y=Math.atan2(o.x,o.z),{action:"chase"}}handleAttack(t,e,n,s){const r=t.data;if(n>r.attackRange*1.5)return t.setState("chase"),{action:"chase"};const a=new P().subVectors(s,r.position);a.y=0,a.lengthSq()>.001&&(r.rotation.y=Math.atan2(a.x,a.z));const o=performance.now()/1e3;if(o-r.lastAttackTime>=r.attackCooldown)return r.lastAttackTime=o,{action:"attack",damage:r.damage};if(n>r.attackRange*.6){const l=a.normalize(),c=r.speed*.3;r.position.x+=l.x*c*e,r.position.z+=l.z*c*e}return{action:"attack_cooldown"}}generateWaypoints(t){const e=t.data,n=e.position.clone();e.waypoints=[];const s=3+Math.floor(Math.random()*3);for(let r=0;r<s;r++){const a=Math.random()*Math.PI*2,o=3+Math.random()*7,l=new P(n.x+Math.cos(a)*o,0,n.z+Math.sin(a)*o),c=Wt.WORLD_SIZE/2-2;l.x=xr.clamp(l.x,-c,c),l.z=xr.clamp(l.z,-c,c),e.waypoints.push(l)}e.currentWaypoint=0}clearEnemy(t){this.idleTimers.delete(t),this.patrolPauseTimers.delete(t),this.patrolPaused.delete(t)}}class zg{constructor(){this.scene=null,this.enemies=[],this.ai=new Bg,this.currentWave=0,this.onPlayerDamage=null,this.onEnemyHit=null,this.onEnemyDeath=null,this.onHeadshot=null}init(t){this.scene=t,this.enemies=[],this.currentWave=0}spawnWave(t){if(!this.scene)return;this.currentWave=t;const e=Wt.ENEMIES_PER_WAVE_BASE+Wt.ENEMIES_PER_WAVE_INCREMENT*(t-1),n=Math.pow(Wt.HEALTH_SCALE_PER_WAVE,t-1),s=Math.pow(Wt.SPEED_SCALE_PER_WAVE,t-1);for(let r=0;r<e;r++){const a=new Og,o=Math.random()*Math.PI*2,l=15+Math.random()*15,c=new P(Math.cos(o)*l,0,Math.sin(o)*l),h=Wt.WORLD_SIZE/2-2;c.x=xr.clamp(c.x,-h,h),c.z=xr.clamp(c.z,-h,h),a.init(this.scene,c),a.data.maxHealth=Math.round(Wt.ENEMY_BASE_HEALTH*n),a.data.health=a.data.maxHealth,a.data.speed=Wt.ENEMY_BASE_SPEED*s,a.data.damage=Math.round(Wt.ENEMY_BASE_DAMAGE*(1+(t-1)*.15)),this.enemies.push(a)}}update(t,e){const n=[];for(let s=0;s<this.enemies.length;s++){const r=this.enemies[s],a=this.ai.update(r,t,e);a.action==="attack"&&a.damage!=null&&this.onPlayerDamage&&this.onPlayerDamage(a.damage),r.update(t,e),r.isRemoved()&&n.push(s)}for(let s=n.length-1;s>=0;s--){const r=n[s];this.ai.clearEnemy(this.enemies[r].data.id),this.enemies.splice(r,1)}}applyDamageAtPoint(t,e,n,s){let r=0;for(const a of this.enemies){if(a.isDead())continue;const o=a.getPosition().distanceTo(t);if(o<=n){const l=a.getPosition().y,h=t.y-l>1.4,u=n>0?1-o/n:1;let d=Math.max(1,Math.round(e*Math.max(u,.3)));h&&(d=Math.round(d*2.5),this.onHeadshot&&this.onHeadshot(t));const p=a.takeDamage(d);if(this.onEnemyHit){const m=t.clone();h||(m.y=l+.8),this.onEnemyHit(m,s)}p&&(r++,this.onEnemyDeath&&this.onEnemyDeath(a.getPosition()))}}return r}isWaveComplete(){return this.enemies.length===0}getEnemies(){return this.enemies}getAliveCount(){return this.enemies.filter(t=>!t.isDead()).length}getCurrentWave(){return this.currentWave}}class kg{constructor(){this.scene=null,this.pickups=[],this.onHealthPickup=null,this.onAmmoPickup=null}init(t){this.scene=t,this.pickups=[]}spawn(t,e){if(!this.scene)return;const n=e??(Math.random()<.3?"health":"ammo"),s=this.createPickupMesh(n);s.position.copy(t),s.position.y=.3,this.scene.add(s),this.pickups.push({type:n,mesh:s,position:s.position.clone(),value:n==="health"?25:15,lifetime:15,bobOffset:Math.random()*Math.PI*2})}maybeSpawn(t,e=.4){Math.random()<e&&this.spawn(t)}createPickupMesh(t){const e=new Qe;if(t==="health"){const n=new se({color:2271778,emissive:1135889,emissiveIntensity:.5,metalness:.3,roughness:.5}),s=new Z(new qt(.3,.2,.3),n);e.add(s);const r=new se({color:16777215,emissive:16777215,emissiveIntensity:.3}),a=new Z(new qt(.2,.05,.06),r);a.position.z=.16,e.add(a);const o=new Z(new qt(.06,.05,.2),r);o.position.z=.16,e.add(o);const l=new hi(4521796,1,3);l.position.y=.2,e.add(l)}else{const n=new se({color:14527010,emissive:6702080,emissiveIntensity:.5,metalness:.4,roughness:.4}),s=new Z(new qt(.25,.15,.35),n);e.add(s);const r=new se({color:8939042,metalness:.8,roughness:.2});for(let o=0;o<3;o++){const l=new Z(new ve(.025,.025,.08,6),r);l.position.set(-.05+o*.05,.1,0),e.add(l);const c=new Z(new li(.025,.04,6),r);c.position.set(-.05+o*.05,.16,0),e.add(c)}const a=new hi(16755234,1,3);a.position.y=.2,e.add(a)}return e}update(t,e){const s=[];for(let r=0;r<this.pickups.length;r++){const a=this.pickups[r];if(a.lifetime-=t,a.lifetime<=0){s.push(r);continue}const o=Math.sin(Date.now()*.003+a.bobOffset)*.1;if(a.mesh.position.y=a.position.y+o,a.mesh.rotation.y+=t*2,a.lifetime<3){const c=a.lifetime/3;a.mesh.traverse(h=>{if(h instanceof Z){const u=h.material;u.transparent||(u.transparent=!0),u.opacity=c}})}a.mesh.position.distanceTo(e)<1.2&&(a.type==="health"&&this.onHealthPickup?this.onHealthPickup(a.value):a.type==="ammo"&&this.onAmmoPickup&&this.onAmmoPickup(a.value),s.push(r))}for(let r=s.length-1;r>=0;r--){const a=s[r],o=this.pickups[a];this.scene&&this.scene.remove(o.mesh),o.mesh.traverse(l=>{l instanceof Z&&(l.geometry.dispose(),Array.isArray(l.material)?l.material.forEach(c=>c.dispose()):l.material.dispose())}),this.pickups.splice(a,1)}}clear(){for(const t of this.pickups)this.scene&&this.scene.remove(t.mesh);this.pickups=[]}}const Yc=document.createElement("style");Yc.textContent=`
  @keyframes fadeUp {
    0% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
    100% { opacity: 0; transform: translate(-50%, -120%) scale(0.8); }
  }
  @keyframes pulseGlow {
    0%, 100% { text-shadow: 0 0 10px currentColor; }
    50% { text-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
  }
  @keyframes slideIn {
    0% { transform: translateX(100px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  .weapon-slot { 
    display: inline-block; 
    padding: 4px 10px; 
    margin: 0 2px;
    background: rgba(255,255,255,0.1); 
    border-radius: 4px;
    font-size: 12px;
    transition: all 0.2s;
  }
  .weapon-slot.active { 
    background: rgba(255,100,100,0.4); 
    border: 1px solid #f66;
    transform: scale(1.1);
  }
  .weapon-slot .key { 
    color: #888; 
    font-size: 10px; 
    margin-right: 4px;
  }
`;document.head.appendChild(Yc);class Vg{constructor(){this.combo=0,this.comboTimer=null,this.container=document.createElement("div"),this.container.id="hud-overlay",this.container.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;font-family:monospace;color:#fff;z-index:10;",this.container.innerHTML=`
      <!-- Health Bar (bottom left) -->
      <div style="position:absolute;bottom:30px;left:20px;">
        <div style="display:flex;align-items:center;margin-bottom:5px;">
          <span style="font-size:20px;margin-right:8px;">❤️</span>
          <div style="width:180px;height:16px;background:#222;border:2px solid #444;border-radius:4px;overflow:hidden;">
            <div class="health-bar" style="width:100%;height:100%;background:linear-gradient(180deg,#f55,#a22);border-radius:2px;transition:width 0.3s;"></div>
          </div>
          <span class="health-text" style="margin-left:8px;font-size:14px;min-width:50px;">100/100</span>
        </div>
      </div>
      
      <!-- Ammo & Weapon (bottom right) -->
      <div style="position:absolute;bottom:30px;right:20px;text-align:right;">
        <div class="ammo-counter" style="font-size:32px;font-weight:bold;text-shadow:0 0 10px rgba(255,255,255,0.3);">0 / 0</div>
        <div class="weapon-name" style="font-size:16px;color:#f66;margin-top:2px;">Pistol</div>
        <div class="weapon-slots" style="margin-top:8px;">
          <span class="weapon-slot active"><span class="key">1</span>🔫</span>
          <span class="weapon-slot"><span class="key">2</span>💥</span>
          <span class="weapon-slot"><span class="key">3</span>🔥</span>
        </div>
        <div class="reload-indicator" style="font-size:18px;color:#ff0;margin-top:10px;display:none;animation:pulseGlow 0.5s infinite;">⟳ RELOADING</div>
      </div>
      
      <!-- Score & Stats (top right) -->
      <div style="position:absolute;top:20px;right:20px;text-align:right;background:rgba(0,0,0,0.3);padding:10px 15px;border-radius:8px;">
        <div class="score" style="font-size:24px;color:#ff6;font-weight:bold;">0</div>
        <div style="font-size:11px;color:#888;margin-top:2px;">SCORE</div>
        <div style="margin-top:10px;display:flex;gap:15px;">
          <div>
            <div class="kills" style="font-size:18px;">0</div>
            <div style="font-size:10px;color:#666;">KILLS</div>
          </div>
          <div>
            <div class="enemy-count" style="font-size:18px;color:#f66;">0</div>
            <div style="font-size:10px;color:#666;">ENEMIES</div>
          </div>
        </div>
      </div>
      
      <!-- Wave (top left) -->
      <div style="position:absolute;top:20px;left:20px;background:rgba(0,0,0,0.3);padding:10px 15px;border-radius:8px;">
        <div class="wave" style="font-size:22px;color:#6cf;">WAVE 1</div>
      </div>
      
      <!-- Combo Counter (center) -->
      <div class="combo-counter" style="position:absolute;top:30%;left:50%;transform:translateX(-50%);font-size:32px;color:#ff6;font-weight:bold;opacity:0;transition:all 0.3s;text-shadow:0 0 20px #ff6;"></div>
      
      <!-- Overlays -->
      <div class="damage-overlay" style="position:absolute;top:0;left:0;width:100%;height:100%;background:radial-gradient(transparent 40%, rgba(255,0,0,0.6));opacity:0;transition:opacity 0.15s;pointer-events:none;"></div>
      <div class="kill-notifications" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;"></div>
    `,document.body.appendChild(this.container)}init(){this.healthBar=this.container.querySelector(".health-bar"),this.healthText=this.container.querySelector(".health-text"),this.ammoCounter=this.container.querySelector(".ammo-counter"),this.weaponName=this.container.querySelector(".weapon-name"),this.weaponSlots=this.container.querySelector(".weapon-slots"),this.scoreEl=this.container.querySelector(".score"),this.killsEl=this.container.querySelector(".kills"),this.waveEl=this.container.querySelector(".wave"),this.enemyCount=this.container.querySelector(".enemy-count"),this.reloadIndicator=this.container.querySelector(".reload-indicator"),this.damageOverlay=this.container.querySelector(".damage-overlay"),this.killNotifications=this.container.querySelector(".kill-notifications"),this.comboCounter=this.container.querySelector(".combo-counter")}update(t){const e=t.health/t.maxHealth*100;this.healthBar.style.width=`${e}%`,this.healthText.textContent=`${Math.ceil(t.health)}/${t.maxHealth}`,e<25?this.healthBar.style.background="linear-gradient(180deg,#f22,#800)":e<50?this.healthBar.style.background="linear-gradient(180deg,#f80,#a50)":this.healthBar.style.background="linear-gradient(180deg,#f55,#a22)";const n=t.ammo<=3?"#f66":"#fff";this.ammoCounter.style.color=n,this.ammoCounter.textContent=`${t.ammo} / ${t.reserveAmmo}`,this.weaponName.textContent=t.weaponName;const s=this.weaponSlots.querySelectorAll(".weapon-slot"),r=t.weaponName==="Pistol"?0:t.weaponName==="Shotgun"?1:2;s.forEach((a,o)=>{a.classList.toggle("active",o===r)}),this.scoreEl.textContent=t.score.toLocaleString(),this.killsEl.textContent=t.kills.toString(),this.waveEl.textContent=`WAVE ${t.wave}`,t.enemyCount!==void 0&&(this.enemyCount.textContent=t.enemyCount.toString()),this.reloadIndicator.style.display=t.isReloading?"block":"none"}showDamage(){this.damageOverlay.style.opacity="0.7",setTimeout(()=>{this.damageOverlay.style.opacity="0"},150)}showKill(t){this.combo++,this.comboTimer&&clearTimeout(this.comboTimer),this.comboTimer=window.setTimeout(()=>{this.combo=0,this.comboCounter.style.opacity="0"},2e3),this.combo>1&&(this.comboCounter.textContent=`${this.combo}x COMBO!`,this.comboCounter.style.opacity="1",this.comboCounter.style.transform="translateX(-50%) scale(1.2)",setTimeout(()=>{this.comboCounter.style.transform="translateX(-50%) scale(1)"},100));const e=document.createElement("div"),n=this.combo>1?Math.floor(t*(this.combo-1)*.1):0,s=t+n;e.innerHTML=this.combo>1?`+${s} <span style="font-size:16px;color:#f80;">×${this.combo}</span>`:`+${t}`;const r=(Math.random()-.5)*100,a=(Math.random()-.5)*50;e.style.cssText=`
      position:absolute;
      left:calc(50% + ${r}px);
      top:calc(40% + ${a}px);
      transform:translate(-50%,-50%) scale(1.3);
      font-size:28px;
      color:#ff6;
      font-weight:bold;
      animation:fadeUp 1.2s forwards;
      pointer-events:none;
      text-shadow: 0 0 10px rgba(255,255,0,0.8), 2px 2px 4px rgba(0,0,0,0.5);
    `,this.killNotifications.appendChild(e),setTimeout(()=>e.remove(),1200)}showWaveStart(t){const e=document.createElement("div");e.textContent=`WAVE ${t}`,e.style.cssText=`
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      font-size:64px;
      color:#6cf;
      font-weight:bold;
      opacity:0;
      animation:slideIn 0.5s forwards, fadeUp 2s 0.5s forwards;
      pointer-events:none;
      text-shadow: 0 0 30px rgba(100,200,255,0.8);
    `,this.killNotifications.appendChild(e),setTimeout(()=>e.remove(),2500)}showPickup(t,e){const n=document.createElement("div"),s=t==="health"?"❤️":"🔫",r=t==="health"?"#4f4":"#fa0";n.innerHTML=`${s} +${e}`,n.style.cssText=`
      position:absolute;
      left:50%;
      top:60%;
      transform:translate(-50%,-50%);
      font-size:24px;
      color:${r};
      font-weight:bold;
      animation:fadeUp 1s forwards;
      pointer-events:none;
      text-shadow: 0 0 10px ${r};
    `,this.killNotifications.appendChild(n),setTimeout(()=>n.remove(),1e3)}showHeadshot(){const t=document.createElement("div");t.textContent="💀 HEADSHOT!",t.style.cssText=`
      position:absolute;
      left:50%;
      top:35%;
      transform:translate(-50%,-50%) scale(1.5);
      font-size:28px;
      color:#f40;
      font-weight:bold;
      animation:fadeUp 1.5s forwards;
      pointer-events:none;
      text-shadow: 0 0 20px rgba(255,68,0,0.8), 0 0 40px rgba(255,68,0,0.5);
    `,this.killNotifications.appendChild(t),setTimeout(()=>t.remove(),1500)}}class Hg{constructor(){this.lines=[],this.reloadAnim=null,this.rotation=0,this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("width","40"),this.svg.setAttribute("height","40"),this.svg.setAttribute("viewBox","0 0 40 40"),this.svg.style.cssText="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:15;",[[20,5,20,15],[20,25,20,35],[5,20,15,20],[25,20,35,20]].forEach(([n,s,r,a])=>{const o=document.createElementNS("http://www.w3.org/2000/svg","line");o.setAttribute("x1",String(n)),o.setAttribute("y1",String(s)),o.setAttribute("x2",String(r)),o.setAttribute("y2",String(a)),o.setAttribute("stroke","#fff"),o.setAttribute("stroke-width","2"),this.svg.appendChild(o),this.lines.push(o)});const e=document.createElementNS("http://www.w3.org/2000/svg","circle");e.setAttribute("cx","20"),e.setAttribute("cy","20"),e.setAttribute("r","1.5"),e.setAttribute("fill","#fff"),this.svg.appendChild(e),document.body.appendChild(this.svg)}init(){this.svg.style.display="block"}update(t,e){if(t&&(this.lines.forEach(n=>{n.setAttribute("stroke","#f00"),n.setAttribute("stroke-width","3")}),setTimeout(()=>this.lines.forEach(n=>{n.setAttribute("stroke","#fff"),n.setAttribute("stroke-width","2")}),100)),e&&!this.reloadAnim){const n=()=>{this.rotation+=2,this.svg.style.transform=`translate(-50%,-50%) rotate(${this.rotation}deg)`,this.reloadAnim=requestAnimationFrame(n)};n()}else!e&&this.reloadAnim&&(cancelAnimationFrame(this.reloadAnim),this.reloadAnim=null,this.svg.style.transform="translate(-50%,-50%)")}}const Zc="fps_arena_highscores",jl=5;function $c(){try{const i=localStorage.getItem(Zc);if(i)return JSON.parse(i)}catch(i){console.warn("Failed to load high scores:",i)}return[]}function Gg(i,t,e){const n=$c(),s={score:i,kills:t,wave:e,date:new Date().toLocaleDateString()};n.push(s),n.sort((l,c)=>c.score-l.score);const r=n.findIndex(l=>l===s)+1,a=r===1,o=n.slice(0,jl);try{localStorage.setItem(Zc,JSON.stringify(o))}catch(l){console.warn("Failed to save high scores:",l)}return{rank:r<=jl?r:0,isNewHigh:a}}function Wg(i){return i.length===0?'<p style="color:#666;">No scores yet. Be the first!</p>':i.map((t,e)=>`<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #333;">
      <span>${e===0?"🥇":e===1?"🥈":e===2?"🥉":`${e+1}.`} ${t.score.toLocaleString()}</span>
      <span style="color:#888;">Wave ${t.wave} • ${t.kills} kills</span>
    </div>`).join("")}class Xg{constructor(){const t="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);font-family:monospace;color:#fff;z-index:50;",e="padding:14px 40px;font-size:18px;background:linear-gradient(180deg,#e44,#b22);color:#fff;border:none;cursor:pointer;font-family:monospace;margin:8px;border-radius:4px;text-transform:uppercase;letter-spacing:2px;transition:transform 0.1s;",n=`onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'"`;this.startScreen=document.createElement("div"),this.startScreen.style.cssText=t,this.startScreen.innerHTML=`
      <h1 style="font-size:3.5em;margin-bottom:10px;text-shadow:0 0 20px rgba(255,50,50,0.5);">⚔️ FPS ARENA</h1>
      <p style="color:#888;margin-bottom:30px;font-size:0.9em;">WASD=Move | Mouse=Look | Click=Shoot | R=Reload | 1-3=Weapons</p>
      <button style="${e}" ${n}>START GAME</button>
      <div class="highscores" style="margin-top:40px;width:300px;background:rgba(255,255,255,0.05);padding:15px 20px;border-radius:8px;">
        <h3 style="margin:0 0 10px 0;color:#ff6;font-size:1.1em;">🏆 HIGH SCORES</h3>
        <div class="hs-list" style="font-size:0.85em;"></div>
      </div>
    `,this.pauseScreen=document.createElement("div"),this.pauseScreen.style.cssText=t+"display:none;",this.pauseScreen.innerHTML=`
      <h2 style="font-size:2.5em;margin-bottom:20px;">⏸ PAUSED</h2>
      <p style="color:#666;margin-bottom:20px;">Click to resume or press ESC</p>
      <button style="${e}" ${n}>RESUME</button>
    `,this.gameOverScreen=document.createElement("div"),this.gameOverScreen.style.cssText=t+"display:none;",this.gameOverScreen.innerHTML=`
      <h2 style="font-size:2.5em;color:#e33;margin-bottom:10px;text-shadow:0 0 30px rgba(255,0,0,0.5);">☠️ GAME OVER</h2>
      <div class="go-rank" style="color:#ff6;font-size:1.2em;margin-bottom:10px;"></div>
      <p class="go-score" style="font-size:2em;margin:5px 0;">Score: 0</p>
      <p class="go-kills" style="color:#aaa;margin-bottom:5px;">Kills: 0</p>
      <p class="go-wave" style="color:#aaa;margin-bottom:20px;">Wave: 0</p>
      <button style="${e}" ${n}>PLAY AGAIN</button>
      <div class="highscores" style="margin-top:30px;width:300px;background:rgba(255,255,255,0.05);padding:15px 20px;border-radius:8px;">
        <h3 style="margin:0 0 10px 0;color:#ff6;font-size:1.1em;">🏆 HIGH SCORES</h3>
        <div class="hs-list" style="font-size:0.85em;"></div>
      </div>
    `,document.body.appendChild(this.startScreen),document.body.appendChild(this.pauseScreen),document.body.appendChild(this.gameOverScreen),this.startScreen.querySelector("button").onclick=()=>{this.hide(),this.onStart?.()},this.pauseScreen.querySelector("button").onclick=()=>{this.hide()},this.gameOverScreen.querySelector("button").onclick=()=>{this.hide(),this.onRestart?.()}}updateHighScoresList(t){const e=t.querySelector(".hs-list");e&&(e.innerHTML=Wg($c()))}showStart(){this.startScreen.style.display="flex",this.pauseScreen.style.display="none",this.gameOverScreen.style.display="none",this.updateHighScoresList(this.startScreen)}showPause(){this.pauseScreen.style.display="flex"}showGameOver(t,e,n=0){const{rank:s,isNewHigh:r}=Gg(t,e,n);this.gameOverScreen.querySelector(".go-score").textContent=`Score: ${t.toLocaleString()}`,this.gameOverScreen.querySelector(".go-kills").textContent=`Kills: ${e}`,this.gameOverScreen.querySelector(".go-wave").textContent=`Wave: ${n}`;const a=this.gameOverScreen.querySelector(".go-rank");r?(a.innerHTML="🎉 NEW HIGH SCORE! 🎉",a.setAttribute("style","color:#ff6;font-size:1.4em;margin-bottom:15px;animation:pulse 0.5s infinite alternate;")):s>0?(a.textContent=`Rank #${s}`,a.setAttribute("style","color:#ff6;font-size:1.2em;margin-bottom:10px;")):a.textContent="",this.gameOverScreen.style.display="flex",this.updateHighScoresList(this.gameOverScreen)}hide(){this.startScreen.style.display="none",this.pauseScreen.style.display="none",this.gameOverScreen.style.display="none"}}class qg{constructor(){this.size=150,this.scale=this.size/(Wt.WORLD_SIZE*2),this.container=document.createElement("div"),this.container.style.cssText=`
      position: absolute;
      bottom: 100px;
      left: 20px;
      width: ${this.size}px;
      height: ${this.size}px;
      background: rgba(0, 0, 0, 0.6);
      border: 2px solid rgba(100, 200, 255, 0.5);
      border-radius: 50%;
      overflow: hidden;
      z-index: 15;
    `,this.canvas=document.createElement("canvas"),this.canvas.width=this.size,this.canvas.height=this.size,this.canvas.style.cssText="width: 100%; height: 100%;",this.ctx=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),document.body.appendChild(this.container)}update(t,e,n){const s=this.ctx,r=this.size/2;s.clearRect(0,0,this.size,this.size),s.fillStyle="rgba(10, 20, 30, 0.8)",s.beginPath(),s.arc(r,r,r-2,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(100, 200, 255, 0.15)",s.lineWidth=1;for(let a=25;a<r;a+=25)s.beginPath(),s.arc(r,r,a,0,Math.PI*2),s.stroke();s.beginPath(),s.moveTo(r,0),s.lineTo(r,this.size),s.moveTo(0,r),s.lineTo(this.size,r),s.stroke(),s.save(),s.translate(r,r),s.rotate(-e);for(const a of n){if(a.isDead)continue;const o=(a.position.x-t.x)*this.scale,l=(a.position.z-t.z)*this.scale;if(Math.sqrt(o*o+l*l)>r-10)continue;const h=.8+Math.sin(Date.now()*.01)*.2;s.fillStyle=`rgba(255, 80, 80, ${h})`,s.beginPath(),s.arc(o,l,4,0,Math.PI*2),s.fill(),s.fillStyle="rgba(255, 80, 80, 0.3)",s.beginPath(),s.arc(o,l,7,0,Math.PI*2),s.fill()}s.restore(),s.save(),s.translate(r,r),s.fillStyle="#6cf",s.beginPath(),s.moveTo(0,-8),s.lineTo(-5,6),s.lineTo(5,6),s.closePath(),s.fill(),s.fillStyle="rgba(100, 200, 255, 0.3)",s.beginPath(),s.arc(0,0,10,0,Math.PI*2),s.fill(),s.restore(),s.font="10px monospace",s.textAlign="center",s.fillStyle="rgba(100, 200, 255, 0.6)",s.fillText("N",r,12),s.fillText("S",r,this.size-4),s.fillText("E",this.size-6,r+4),s.fillText("W",8,r+4)}show(){this.container.style.display="block"}hide(){this.container.style.display="none"}}class Yg{constructor(){this.listenerPos=new P}init(){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.master.gain.value=.5}play(t){if(!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const e=t.volume??1,n=t.position?t.position.distanceTo(this.listenerPos):0,s=t.position?Math.max(0,1-n/80):1,a={gunshot:{freq:150,dur:.15,decay:30},reload:{freq:300,dur:.4,decay:5,type:"triangle"},footstep:{freq:80,dur:.1,decay:20},hit:{freq:600,dur:.08,decay:40},kill:{freq:800,dur:.3,decay:8,type:"square"},damage:{freq:100,dur:.2,decay:10},ambient:{freq:60,dur:2,decay:1},wave_start:{freq:440,dur:.8,decay:3,type:"triangle"},headshot:{freq:1200,dur:.15,decay:20,type:"square"},pickup:{freq:660,dur:.2,decay:15,type:"triangle"}}[t.type];if(!a)return;const o=this.ctx.createOscillator(),l=this.ctx.createGain();if(o.type=a.type||"sine",o.frequency.value=a.freq,l.gain.setValueAtTime(e*s*.3,this.ctx.currentTime),l.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+a.dur),o.connect(l),l.connect(this.master),o.start(),o.stop(this.ctx.currentTime+a.dur),t.type==="gunshot"){const c=this.ctx.sampleRate*.05,h=this.ctx.createBuffer(1,c,this.ctx.sampleRate),u=h.getChannelData(0);for(let m=0;m<c;m++)u[m]=(Math.random()*2-1)*Math.exp(-m/c*5);const d=this.ctx.createBufferSource();d.buffer=h;const p=this.ctx.createGain();p.gain.value=e*s*.5,d.connect(p),p.connect(this.master),d.start(),d.stop(this.ctx.currentTime+.05)}}setListenerPosition(t,e){this.listenerPos.copy(t)}setVolume(t){this.master&&(this.master.gain.value=t)}}const Ts=new Mg;Ts.init();const Xi=Ts.getScene(),Pr=new Sg;Pr.build(Xi);const Ge=new Eg;Ge.init(Ts.getDomElement());const Hn=new Cg;Hn.init();const dn=new Rg,Uo=Pr.getSpawnPoints();dn.init(Xi,Pr.getWalls(),Uo[0]);const hn=new Ig;hn.init(Xi,Ge.getCamera());const Je=new zg;Je.init(Xi);const Lr=new qc;Lr.init(Xi);Je.onEnemyHit=(i,t)=>{Lr.createBloodSplatter(i,t),fn.gunShake()};Je.onEnemyDeath=i=>{Lr.createDeathExplosion(i),fn.explosionShake(),As.maybeSpawn(i,.5)};Je.onHeadshot=i=>{fn.headshotSlowMo(),fn.headshotFlash(),_n.play({type:"headshot"}),qn.showHeadshot()};const qn=new Vg;qn.init();const Kc=new Hg;Kc.init();const _n=new Yg;_n.init();const Zg=new qg,fn=new yg,As=new kg;As.init(Xi);As.onHealthPickup=i=>{dn.heal(i),_n.play({type:"pickup"}),qn.showPickup("health",i)};As.onAmmoPickup=i=>{hn.addReserveAmmo(i),_n.play({type:"pickup"}),qn.showPickup("ammo",i)};const Rs=new Xg;let ds=0,yr=0,Ln=0,Er=!1,ys=!1,os=0;Je.onPlayerDamage=i=>{const t=dn.takeDamage(i);qn.showDamage(),_n.play({type:"damage"}),fn.damageShake(),t&&(ys=!0,Ge.unlock(),Rs.showGameOver(ds,yr,Ln))};function Jc(){ds=0,yr=0,Ln=0,os=0,Er=!0,ys=!1,dn.reset(Uo[0]),jc(),Ge.lock()}function jc(){Ln++,Je.spawnWave(Ln),_n.play({type:"wave_start"}),qn.showWaveStart(Ln)}Rs.onStart=Jc;Rs.onRestart=Jc;Rs.showStart();const $g=document.getElementById("blocker");$g.style.display="none";document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&Er&&!ys&&Rs.showPause()});Ts.onUpdate(i=>{if(!Er||ys||!Ge.isLocked())return;fn.update(i);const t=i*fn.getTimeScale(),e=fn.getShakeOffset();dn.update(t,Hn,Ge);const n=dn.getPosition();if(Ge.setPosition(n),Ge.applyShake(e.x,e.y),_n.setListenerPosition(n,Ge.getDirection()),fn.setHealthVignette(dn.getHealth()/Wt.PLAYER_MAX_HEALTH*100),hn.update(t),Lr.update(t),As.update(t,n),Hn.isMouseDown(0)){const c=hn.shoot();if(c&&c.length>0){_n.play({type:"gunshot"});for(const h of c)if(h.object?.userData?.isEnemy){const u=hn.getCurrentWeapon(),d=Ge.getDirection();Je.applyDamageAtPoint(h.point,u.damage,.5,d),_n.play({type:"hit",position:h.point})}}}Hn.isKeyDown("KeyR")&&hn.reload(),Hn.isKeyDown("Digit1")&&hn.switchWeapon(0),Hn.isKeyDown("Digit2")&&hn.switchWeapon(1),Hn.isKeyDown("Digit3")&&hn.switchWeapon(2),Je.update(t,dn.getPosition());const s=Je.getEnemies(),a=Ln*(Wt.ENEMIES_PER_WAVE_BASE+(Ln-1)*Wt.ENEMIES_PER_WAVE_INCREMENT)-s.length;if(a>os){const c=a-os;yr+=c,ds+=c*Wt.KILL_SCORE;for(let h=0;h<c;h++)_n.play({type:"kill"}),qn.showKill(Wt.KILL_SCORE);os=a}Je.isWaveComplete()&&Ln>0&&(ds+=Wt.WAVE_BONUS,os=0,fn.waveSlowMo(),setTimeout(()=>{Er&&!ys&&jc()},2e3));const o=hn.getHUDData();qn.update({health:dn.getHealth(),maxHealth:Wt.PLAYER_MAX_HEALTH,ammo:o.ammo??0,maxAmmo:o.maxAmmo??0,reserveAmmo:o.reserveAmmo??0,weaponName:o.weaponName??"Unknown",score:ds,kills:yr,wave:Ln,isReloading:o.isReloading??!1,crosshairHit:!1,enemyCount:Je.getAliveCount()}),Kc.update(!1,o.isReloading??!1);const l=Je.getEnemies().map(c=>({position:c.getPosition(),isDead:c.isDead()}));Zg.update(dn.getPosition(),Ge.getCamera().rotation.y,l),Hn.isKeyDown("Escape")&&Ge.unlock()});Ts.start(Ge.getCamera());console.log("[FPS Game] Initialized!");console.log(`[FPS Game] ${Pr.getWalls().length} walls, ${Uo.length} rooms`);
