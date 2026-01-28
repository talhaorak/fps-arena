(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ba="182",bh=0,Ka=1,wh=2,dr=1,fc=2,as=3,Yn=0,Fe=1,an=2,In=0,hi=1,Ni=2,ja=3,Qa=4,Th=5,si=100,Ah=101,Rh=102,Ch=103,Ph=104,Lh=200,Dh=201,Ih=202,Uh=203,wo=204,To=205,Nh=206,Fh=207,Oh=208,Bh=209,zh=210,kh=211,Vh=212,Hh=213,Gh=214,Ao=0,Ro=1,Co=2,zi=3,Po=4,Lo=5,Do=6,Io=7,pc=0,Wh=1,Xh=2,Mn=0,mc=1,gc=2,_c=3,xc=4,vc=5,Mc=6,yc=7,Sc=300,di=301,ki=302,Uo=303,No=304,Lr=306,oi=1e3,Dn=1001,Fo=1002,Ae=1003,Yh=1004,Is=1005,Pe=1006,Vr=1007,ai=1008,Ye=1009,Ec=1010,bc=1011,gs=1012,wa=1013,En=1014,mn=1015,Nn=1016,Ta=1017,Aa=1018,_s=1020,wc=35902,Tc=35899,Ac=1021,Rc=1022,hn=1023,Fn=1026,li=1027,Cc=1028,Ra=1029,Vi=1030,Ca=1031,Pa=1033,fr=33776,pr=33777,mr=33778,gr=33779,Oo=35840,Bo=35841,zo=35842,ko=35843,Vo=36196,Ho=37492,Go=37496,Wo=37488,Xo=37489,Yo=37490,qo=37491,Zo=37808,$o=37809,Jo=37810,Ko=37811,jo=37812,Qo=37813,ta=37814,ea=37815,na=37816,ia=37817,sa=37818,ra=37819,oa=37820,aa=37821,la=36492,ca=36494,ha=36495,ua=36283,da=36284,fa=36285,pa=36286,qh=3200,Pc=0,Zh=1,Wn="",Ke="srgb",Hi="srgb-linear",Mr="linear",le="srgb",gi=7680,tl=519,$h=512,Jh=513,Kh=514,La=515,jh=516,Qh=517,Da=518,tu=519,ma=35044,el="300 es",gn=2e3,yr=2001;function Lc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eu(){const i=Sr("canvas");return i.style.display="block",i}const nl={};function Er(...i){const t="THREE."+i.shift();console.log(t,...i)}function Vt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function te(...i){const t="THREE."+i.shift();console.error(t,...i)}function xs(...i){const t=i.join(" ");t in nl||(nl[t]=!0,Vt(...i))}function nu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let il=1234567;const us=Math.PI/180,vs=180/Math.PI;function yn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Ia(i,t){return(i%t+t)%t}function iu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function su(i,t,e){return i!==t?(e-i)/(t-i):0}function ds(i,t,e){return(1-e)*i+e*t}function ru(i,t,e,n){return ds(i,t,1-Math.exp(-e*n))}function ou(i,t=1){return t-Math.abs(Ia(i,t*2)-t)}function au(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function lu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function cu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function hu(i,t){return i+Math.random()*(t-i)}function uu(i){return i*(.5-Math.random())}function du(i){i!==void 0&&(il=i);let t=il+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fu(i){return i*us}function pu(i){return i*vs}function mu(i){return(i&i-1)===0&&i!==0}function gu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _u(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*p,a*h,a*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const br={DEG2RAD:us,RAD2DEG:vs,generateUUID:yn,clamp:Kt,euclideanModulo:Ia,mapLinear:iu,inverseLerp:su,lerp:ds,damp:ru,pingpong:ou,smoothstep:au,smootherstep:lu,randInt:cu,randFloat:hu,randFloatSpread:uu,seededRandom:du,degToRad:fu,radToDeg:pu,isPowerOfTwo:mu,ceilPowerOfTwo:gu,floorPowerOfTwo:_u,setQuaternionFromProperEuler:xu,normalize:ce,denormalize:ln};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ts{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],m=r[o+2],x=r[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a>=1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==m){let g=l*d+c*p+h*m+u*x;g<0&&(d=-d,p=-p,m=-m,x=-x,g=-g);let f=1-a;if(g<.9995){const T=Math.acos(g),b=Math.sin(T);f=Math.sin(f*T)/b,a=Math.sin(a*T)/b,l=l*f+d*a,c=c*f+p*a,h=h*f+m*a,u=u*f+x*a}else{l=l*f+d*a,c=c*f+p*a,h=h*f+m*a,u=u*f+x*a;const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*p-c*d,t[e+1]=l*m+h*d+c*u-a*p,t[e+2]=c*m+h*p+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new P,sl=new Ts;class qt{constructor(t,e,n,s,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],x=s[0],g=s[3],f=s[6],T=s[1],b=s[4],S=s[7],A=s[2],R=s[5],C=s[8];return r[0]=o*x+a*T+l*A,r[3]=o*g+a*b+l*R,r[6]=o*f+a*S+l*C,r[1]=c*x+h*T+u*A,r[4]=c*g+h*b+u*R,r[7]=c*f+h*S+u*C,r[2]=d*x+p*T+m*A,r[5]=d*g+p*b+m*R,r[8]=d*f+p*S+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gr.makeScale(t,e)),this}rotate(t){return this.premultiply(Gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new qt,rl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ol=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vu(){const i={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===le&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hi]:{primaries:t,whitePoint:n,transfer:Mr,toXYZ:rl,fromXYZ:ol,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:le,toXYZ:rl,fromXYZ:ol,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}const ee=vu();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class Mu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_i===void 0&&(_i=Sr("canvas")),_i.width=t.width,_i.height=t.height;const s=_i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=_i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Un(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yu=0;class Ua{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=yn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wr(s[o].image)):r.push(Wr(s[o]))}else r=Wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let Su=0;const Xr=new P;class Le extends Xi{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Dn,s=Dn,r=Pe,o=ai,a=hn,l=Ye,c=Le.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=yn(),this.name="",this.source=new Ua(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xr).x}get height(){return this.source.getSize(Xr).y}get depth(){return this.source.getSize(Xr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oi:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case Fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oi:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case Fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Sc;Le.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],x=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,S=(p+1)/2,A=(f+1)/2,R=(h+d)/4,C=(u+x)/4,N=(m+g)/4;return b>S&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=C/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=N/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=N/r),this.set(n,s,r,e),this}let T=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eu extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Le(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ua(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Eu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Dc extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bu extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,nn):nn.fromBufferAttribute(r,o),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),Ns.subVectors(this.max,Ji),xi.subVectors(t.a,Ji),vi.subVectors(t.b,Ji),Mi.subVectors(t.c,Ji),On.subVectors(vi,xi),Bn.subVectors(Mi,vi),Kn.subVectors(xi,Mi);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-Kn.z,Kn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,Kn.z,0,-Kn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-Kn.y,Kn.x,0];return!Yr(e,xi,vi,Mi,Ns)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,xi,vi,Mi,Ns))?!1:(Fs.crossVectors(On,Bn),e=[Fs.x,Fs.y,Fs.z],Yr(e,xi,vi,Mi,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const An=[new P,new P,new P,new P,new P,new P,new P,new P],nn=new P,Us=new As,xi=new P,vi=new P,Mi=new P,On=new P,Bn=new P,Kn=new P,Ji=new P,Ns=new P,Fs=new P,jn=new P;function Yr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){jn.fromArray(i,r);const a=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=t.dot(jn),c=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const wu=new As,Ki=new P,qr=new P;class Rs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ki.subVectors(t,this.center);const e=Ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ki.copy(t.center).add(qr)),this.expandByPoint(Ki.copy(t.center).sub(qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Rn=new P,Zr=new P,Os=new P,zn=new P,$r=new P,Bs=new P,Jr=new P;class Dr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zr.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Zr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Os),a=zn.dot(this.direction),l=-zn.dot(Os),c=zn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zr).addScaledVector(Os,d),p}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){$r.subVectors(e,t),Bs.subVectors(n,t),Jr.crossVectors($r,Bs);let o=this.direction.dot(Jr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const l=a*this.direction.dot(Bs.crossVectors(zn,Bs));if(l<0)return null;const c=a*this.direction.dot($r.cross(zn));if(c<0||l+c>o)return null;const h=-a*zn.dot(Jr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,m,x,g){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,m,x,g){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),o=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+m*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=m+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,m=c*h,x=c*u;e[0]=d+x*a,e[4]=m*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,m=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+m,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,p=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tu,t,Au)}lookAt(t,e,n){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),kn.crossVectors(n,He),kn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),kn.crossVectors(n,He)),kn.normalize(),zs.crossVectors(He,kn),s[0]=kn.x,s[4]=zs.x,s[8]=He.x,s[1]=kn.y,s[5]=zs.y,s[9]=He.y,s[2]=kn.z,s[6]=zs.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],x=n[6],g=n[10],f=n[14],T=n[3],b=n[7],S=n[11],A=n[15],R=s[0],C=s[4],N=s[8],v=s[12],y=s[1],L=s[5],O=s[9],B=s[13],Y=s[2],k=s[6],G=s[10],z=s[14],j=s[3],ct=s[7],ot=s[11],$=s[15];return r[0]=o*R+a*y+l*Y+c*j,r[4]=o*C+a*L+l*k+c*ct,r[8]=o*N+a*O+l*G+c*ot,r[12]=o*v+a*B+l*z+c*$,r[1]=h*R+u*y+d*Y+p*j,r[5]=h*C+u*L+d*k+p*ct,r[9]=h*N+u*O+d*G+p*ot,r[13]=h*v+u*B+d*z+p*$,r[2]=m*R+x*y+g*Y+f*j,r[6]=m*C+x*L+g*k+f*ct,r[10]=m*N+x*O+g*G+f*ot,r[14]=m*v+x*B+g*z+f*$,r[3]=T*R+b*y+S*Y+A*j,r[7]=T*C+b*L+S*k+A*ct,r[11]=T*N+b*O+S*G+A*ot,r[15]=T*v+b*B+S*z+A*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],x=t[7],g=t[11],f=t[15],T=l*p-c*d,b=a*p-c*u,S=a*d-l*u,A=o*p-c*h,R=o*d-l*h,C=o*u-a*h;return e*(x*T-g*b+f*S)-n*(m*T-g*A+f*R)+s*(m*b-x*A+f*C)-r*(m*S-x*R+g*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],x=t[13],g=t[14],f=t[15],T=u*g*c-x*d*c+x*l*p-a*g*p-u*l*f+a*d*f,b=m*d*c-h*g*c-m*l*p+o*g*p+h*l*f-o*d*f,S=h*x*c-m*u*c+m*a*p-o*x*p-h*a*f+o*u*f,A=m*u*l-h*x*l-m*a*d+o*x*d+h*a*g-o*u*g,R=e*T+n*b+s*S+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=T*C,t[1]=(x*d*r-u*g*r-x*s*p+n*g*p+u*s*f-n*d*f)*C,t[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*f+n*l*f)*C,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*C,t[4]=b*C,t[5]=(h*g*r-m*d*r+m*s*p-e*g*p-h*s*f+e*d*f)*C,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*f-e*l*f)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*C,t[8]=S*C,t[9]=(m*u*r-h*x*r-m*n*p+e*x*p+h*n*f-e*u*f)*C,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*C,t[12]=A*C,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*C,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*g-e*a*g)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,m=r*u,x=o*h,g=o*u,f=a*u,T=l*c,b=l*h,S=l*u,A=n.x,R=n.y,C=n.z;return s[0]=(1-(x+f))*A,s[1]=(p+S)*A,s[2]=(m-b)*A,s[3]=0,s[4]=(p-S)*R,s[5]=(1-(d+f))*R,s[6]=(g+T)*R,s[7]=0,s[8]=(m+b)*C,s[9]=(g-T)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=yi.set(s[0],s[1],s[2]).length();const o=yi.set(s[4],s[5],s[6]).length(),a=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),sn.copy(this);const c=1/r,h=1/o,u=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=gn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===gn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===yr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=gn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===gn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===yr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new P,sn=new de,Tu=new P(0,0,0),Au=new P(1,1,1),kn=new P,zs=new P,He=new P,al=new de,ll=new Ts;class qe{constructor(t=0,e=0,n=0,s=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class Na{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ru=0;const cl=new P,Si=new Ts,Cn=new de,ks=new P,ji=new P,Cu=new P,Pu=new Ts,hl=new P(1,0,0),ul=new P(0,1,0),dl=new P(0,0,1),fl={type:"added"},Lu={type:"removed"},Ei={type:"childadded",child:null},Kr={type:"childremoved",child:null};class Ee extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new P,e=new qe,n=new Ts,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new qt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(ul,t)}rotateZ(t){return this.rotateOnAxis(dl,t)}translateOnAxis(t,e){return cl.copy(t).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(ul,t)}translateZ(t){return this.translateOnAxis(dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ks.copy(t):ks.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ji,ks,this.up):Cn.lookAt(ks,ji,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(Cn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lu),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,Cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Pu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new P(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new P,Pn=new P,jr=new P,Ln=new P,bi=new P,wi=new P,pl=new P,Qr=new P,to=new P,eo=new P,no=new xe,io=new xe,so=new xe;class tn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),Pn.subVectors(n,e),jr.subVectors(t,e);const o=rn.dot(rn),a=rn.dot(Pn),l=rn.dot(jr),c=Pn.dot(Pn),h=Pn.dot(jr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(t,e),io.fromBufferAttribute(t,n),so.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(no,r.x),o.addScaledVector(io,r.y),o.addScaledVector(so,r.z),o}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),Pn.subVectors(t,e),rn.cross(Pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),rn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;bi.subVectors(s,n),wi.subVectors(r,n),Qr.subVectors(t,n);const l=bi.dot(Qr),c=wi.dot(Qr);if(l<=0&&c<=0)return e.copy(n);to.subVectors(t,s);const h=bi.dot(to),u=wi.dot(to);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(bi,o);eo.subVectors(t,r);const p=bi.dot(eo),m=wi.dot(eo);if(m>=0&&p<=m)return e.copy(r);const x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(wi,a);const g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return pl.subVectors(r,s),a=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(pl,a);const f=1/(g+x+d);return o=x*f,a=d*f,e.copy(n).addScaledVector(bi,o).addScaledVector(wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function ro(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Ia(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ro(o,r,t+1/3),this.g=ro(o,r,t),this.b=ro(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Ic[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return ee.workingToColorSpace(Ce.copy(this),t),Math.round(Kt(Ce.r*255,0,255))*65536+Math.round(Kt(Ce.g*255,0,255))*256+Math.round(Kt(Ce.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ke){ee.workingToColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Vs);const n=ds(Vn.h,Vs.h,e),s=ds(Vn.s,Vs.s,e),r=ds(Vn.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new jt;jt.NAMES=Ic;let Du=0;class Zn extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=hi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=To,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ms extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new P,Hs=new ut;let Iu=0;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ma,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ma&&(t.usage=this.usage),t}}class Uc extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nc extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uu=0;const $e=new de,oo=new Ee,Ti=new P,Ge=new As,Qi=new As,Te=new P;class Se extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lc(t)?Nc:Uc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return oo.lookAt(t),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Ge.min,Qi.min),Ge.expandByPoint(Te),Te.addVectors(Ge.max,Qi.max),Ge.expandByPoint(Te)):(Ge.expandByPoint(Qi.min),Ge.expandByPoint(Qi.max))}Ge.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Te.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(t,c),Te.add(Ti)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new P,l[N]=new P;const c=new P,h=new P,u=new P,d=new ut,p=new ut,m=new ut,x=new P,g=new P;function f(N,v,y){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,v),m.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),m.sub(d);const L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(L),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(L),a[N].add(x),a[v].add(x),a[y].add(x),l[N].add(g),l[v].add(g),l[y].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,v=T.length;N<v;++N){const y=T[N],L=y.start,O=y.count;for(let B=L,Y=L+O;B<Y;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const b=new P,S=new P,A=new P,R=new P;function C(N){A.fromBufferAttribute(s,N),R.copy(A);const v=a[N];b.copy(v),b.sub(A.multiplyScalar(A.dot(v))).normalize(),S.crossVectors(R,v);const L=S.dot(l[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,L)}for(let N=0,v=T.length;N<v;++N){const y=T[N],L=y.start,O=y.count;for(let B=L,Y=L+O;B<Y;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new ze(d,h,u)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new de,Qn=new Dr,Gs=new Rs,gl=new P,Ws=new P,Xs=new P,Ys=new P,ao=new P,qs=new P,_l=new P,Zs=new P;class Z extends Ee{constructor(t=new Se,e=new Ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ao.fromBufferAttribute(u,t),o?qs.addScaledVector(ao,h):qs.addScaledVector(ao.sub(e),h))}e.add(qs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Gs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Gs,gl)===null||Qn.origin.distanceToSquared(gl)>(t.far-t.near)**2))&&(ml.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(ml),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],f=o[g.materialIndex],T=Math.max(g.start,p.start),b=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=T,A=b;S<A;S+=3){const R=a.getX(S),C=a.getX(S+1),N=a.getX(S+2);s=$s(this,f,t,n,c,h,u,R,C,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){const T=a.getX(g),b=a.getX(g+1),S=a.getX(g+2);s=$s(this,o,t,n,c,h,u,T,b,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],f=o[g.materialIndex],T=Math.max(g.start,p.start),b=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=T,A=b;S<A;S+=3){const R=S,C=S+1,N=S+2;s=$s(this,f,t,n,c,h,u,R,C,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){const T=g,b=g+1,S=g+2;s=$s(this,o,t,n,c,h,u,T,b,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Nu(i,t,e,n,s,r,o,a){let l;if(t.side===Fe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Yn,a),l===null)return null;Zs.copy(a),Zs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zs);return c<e.near||c>e.far?null:{distance:c,point:Zs.clone(),object:i}}function $s(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ws),i.getVertexPosition(l,Xs),i.getVertexPosition(c,Ys);const h=Nu(i,t,e,n,Ws,Xs,Ys,_l);if(h){const u=new P;tn.getBarycoord(_l,Ws,Xs,Ys,u),s&&(h.uv=tn.getInterpolatedAttribute(s,a,l,c,u,new ut)),r&&(h.uv1=tn.getInterpolatedAttribute(r,a,l,c,u,new ut)),o&&(h.normal=tn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};tn.getNormal(Ws,Xs,Ys,d.normal),h.face=d,h.barycoord=u}return h}class Yt extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function m(x,g,f,T,b,S,A,R,C,N,v){const y=S/C,L=A/N,O=S/2,B=A/2,Y=R/2,k=C+1,G=N+1;let z=0,j=0;const ct=new P;for(let ot=0;ot<G;ot++){const $=ot*L-B;for(let lt=0;lt<k;lt++){const mt=lt*y-O;ct[x]=mt*T,ct[g]=$*b,ct[f]=Y,c.push(ct.x,ct.y,ct.z),ct[x]=0,ct[g]=0,ct[f]=R>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(lt/C),u.push(1-ot/N),z+=1}}for(let ot=0;ot<N;ot++)for(let $=0;$<C;$++){const lt=d+$+k*ot,mt=d+$+k*(ot+1),Gt=d+($+1)+k*(ot+1),Tt=d+($+1)+k*ot;l.push(lt,mt,Tt),l.push(mt,Gt,Tt),j+=6}a.addGroup(p,j,v),p+=j,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Gi(i[e]);for(const s in n)t[s]=n[s]}return t}function Fu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Ou={clone:Gi,merge:Ue};var Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Oc extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new P,xl=new ut,vl=new ut;class We extends Oc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,xl,vl),e.subVectors(vl,xl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ri=1;class ku extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new We(Ai,Ri,t,e);s.layers=this.layers,this.add(s);const r=new We(Ai,Ri,t,e);r.layers=this.layers,this.add(r);const o=new We(Ai,Ri,t,e);o.layers=this.layers,this.add(o);const a=new We(Ai,Ri,t,e);a.layers=this.layers,this.add(a);const l=new We(Ai,Ri,t,e);l.layers=this.layers,this.add(l);const c=new We(Ai,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Bc extends Le{constructor(t=[],e=di,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zc extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yt(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:In});r.uniforms.tEquirect.value=e;const o=new Z(s,r),a=e.minFilter;return e.minFilter===ai&&(e.minFilter=Pe),new ku(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class en extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vu={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),f=this._getHandJoint(c,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Fa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new Fa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hu extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ma,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ie=new P;class wr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kc extends Zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ci;const ts=new P,Pi=new P,Li=new P,Di=new ut,es=new ut,Vc=new de,Js=new P,ns=new P,Ks=new P,Ml=new ut,co=new ut,yl=new ut;class Hc extends Ee{constructor(t=new kc){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new Se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gu(e,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new wr(n,3,0,!1)),Ci.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=Ci,this.material=t,this.center=new ut(.5,.5),this.count=1}raycast(t,e){t.camera===null&&te('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),Vc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Li.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;js(Js.set(-.5,-.5,0),Li,o,Pi,s,r),js(ns.set(.5,-.5,0),Li,o,Pi,s,r),js(Ks.set(.5,.5,0),Li,o,Pi,s,r),Ml.set(0,0),co.set(1,0),yl.set(1,1);let a=t.ray.intersectTriangle(Js,ns,Ks,!1,ts);if(a===null&&(js(ns.set(-.5,.5,0),Li,o,Pi,s,r),co.set(0,1),a=t.ray.intersectTriangle(Js,Ks,ns,!1,ts),a===null))return;const l=t.ray.origin.distanceTo(ts);l<t.near||l>t.far||e.push({distance:l,point:ts.clone(),uv:tn.getInterpolation(ts,Js,ns,Ks,Ml,co,yl,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function js(i,t,e,n,s,r){Di.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(es.x=r*Di.x-s*Di.y,es.y=s*Di.x+r*Di.y):es.copy(Di),i.copy(t),i.x+=es.x,i.y+=es.y,i.applyMatrix4(Vc)}class Wu extends Le{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ae,h=Ae,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ho=new P,Xu=new P,Yu=new qt;class ii{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ho.subVectors(n,e).cross(Xu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ho),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Rs,qu=new ut(.5,.5),Qs=new P;class Oa{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],m=r[8],x=r[9],g=r[10],f=r[11],T=r[12],b=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-o,p-h,f-m,A-T).normalize(),s[1].setComponents(c+o,p+h,f+m,A+T).normalize(),s[2].setComponents(c+a,p+u,f+x,A+b).normalize(),s[3].setComponents(c-a,p-u,f-x,A-b).normalize(),n)s[4].setComponents(l,d,g,S).normalize(),s[5].setComponents(c-l,p-d,f-g,A-S).normalize();else if(s[4].setComponents(c-l,p-d,f-g,A-S).normalize(),e===gn)s[5].setComponents(c+l,p+d,f+g,A+S).normalize();else if(e===yr)s[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){ti.center.set(0,0,0);const e=qu.distanceTo(t.center);return ti.radius=.7071067811865476+e,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Qs.x=s.normal.x>0?t.max.x:t.min.x,Qs.y=s.normal.y>0?t.max.y:t.min.y,Qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gc extends Zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tr=new P,Ar=new P,Sl=new de,is=new Dr,tr=new Rs,uo=new P,El=new P;class Wc extends Ee{constructor(t=new Se,e=new Gc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Tr.fromBufferAttribute(e,s-1),Ar.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Tr.distanceTo(Ar);t.setAttribute("lineDistance",new Me(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),tr.radius+=r,t.ray.intersectsSphere(tr)===!1)return;Sl.copy(s).invert(),is.copy(t.ray).applyMatrix4(Sl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){const f=h.getX(x),T=h.getX(x+1),b=er(this,t,is,l,f,T,x);b&&e.push(b)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(p),f=er(this,t,is,l,x,g,m-1);f&&e.push(f)}}else{const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){const f=er(this,t,is,l,x,x+1,x);f&&e.push(f)}if(this.isLineLoop){const x=er(this,t,is,l,m-1,p,m-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function er(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Tr.fromBufferAttribute(a,s),Ar.fromBufferAttribute(a,r),e.distanceSqToSegment(Tr,Ar,uo,El)>n)return;uo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(uo);if(!(c<t.near||c>t.far))return{distance:c,point:El.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class _r extends Zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bl=new de,ga=new Dr,nr=new Rs,ir=new P;class xr extends Ee{constructor(t=new Se,e=new _r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,t.ray.intersectsSphere(nr)===!1)return;bl.copy(s).invert(),ga.copy(t.ray).applyMatrix4(bl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=d,x=p;m<x;m++){const g=c.getX(m);ir.fromBufferAttribute(u,g),wl(ir,g,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=d,x=p;m<x;m++)ir.fromBufferAttribute(u,m),wl(ir,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wl(i,t,e,n,s,r,o){const a=ga.distanceSqToPoint(i);if(a<e){const l=new P;ga.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ui extends Le{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ys extends Le{constructor(t,e,n=En,s,r,o,a=Ae,l=Ae,c,h=Fn,u=1){if(h!==Fn&&h!==li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ua(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Zu extends ys{constructor(t,e=En,n=di,s,r,o=Ae,a=Ae,l,c=Fn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Xc extends Le{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ve extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let m=0;const x=[],g=n/2;let f=0;T(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(p,2));function T(){const S=new P,A=new P;let R=0;const C=(e-t)/n;for(let N=0;N<=r;N++){const v=[],y=N/r,L=y*(e-t)+t;for(let O=0;O<=s;O++){const B=O/s,Y=B*l+a,k=Math.sin(Y),G=Math.cos(Y);A.x=L*k,A.y=-y*n+g,A.z=L*G,u.push(A.x,A.y,A.z),S.set(k,C,G).normalize(),d.push(S.x,S.y,S.z),p.push(B,1-y),v.push(m++)}x.push(v)}for(let N=0;N<s;N++)for(let v=0;v<r;v++){const y=x[v][N],L=x[v+1][N],O=x[v+1][N+1],B=x[v][N+1];(t>0||v!==0)&&(h.push(y,L,B),R+=3),(e>0||v!==r-1)&&(h.push(L,O,B),R+=3)}c.addGroup(f,R,0),f+=R}function b(S){const A=m,R=new ut,C=new P;let N=0;const v=S===!0?t:e,y=S===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*y,0),d.push(0,y,0),p.push(.5,.5),m++;const L=m;for(let O=0;O<=s;O++){const Y=O/s*l+a,k=Math.cos(Y),G=Math.sin(Y);C.x=v*G,C.y=g*y,C.z=v*k,u.push(C.x,C.y,C.z),d.push(0,y,0),R.x=k*.5+.5,R.y=G*.5*y+.5,p.push(R.x,R.y),m++}for(let O=0;O<s;O++){const B=A+O,Y=L+O;S===!0?h.push(Y,Y+1,B):h.push(Y+1,Y,B),N+=3}c.addGroup(f,N,S===!0?1:2),f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ci extends ve{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ci(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],o=[],a=new P,l=new de;for(let p=0;p<=t;p++){const m=p/t;s[p]=this.getTangentAt(m,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Kt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Kt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ba extends wn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $u extends Ba{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function za(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const sr=new P,fo=new za,po=new za,mo=new za;class Ju extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(sr.subVectors(s[0],s[1]).add(s[0]),c=sr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),fo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),po.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),mo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),po.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),mo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(fo.calc(l),po.calc(l),mo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Ku(i,t){const e=1-i;return e*e*t}function ju(i,t){return 2*(1-i)*i*t}function Qu(i,t){return i*i*t}function fs(i,t,e,n){return Ku(i,t)+ju(i,e)+Qu(i,n)}function td(i,t){const e=1-i;return e*e*e*t}function ed(i,t){const e=1-i;return 3*e*e*i*t}function nd(i,t){return 3*(1-i)*i*i*t}function id(i,t){return i*i*i*t}function ps(i,t,e,n,s){return td(i,t)+ed(i,e)+nd(i,n)+id(i,s)}class Yc extends wn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ps(t,s.x,r.x,o.x,a.x),ps(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sd extends wn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ps(t,s.x,r.x,o.x,a.x),ps(t,s.y,r.y,o.y,a.y),ps(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qc extends wn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rd extends wn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zc extends wn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fs(t,s.x,r.x,o.x),fs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class od extends wn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(fs(t,s.x,r.x,o.x),fs(t,s.y,r.y,o.y),fs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $c extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Tl(a,l.x,c.x,h.x,u.x),Tl(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var _a=Object.freeze({__proto__:null,ArcCurve:$u,CatmullRomCurve3:Ju,CubicBezierCurve:Yc,CubicBezierCurve3:sd,EllipseCurve:Ba,LineCurve:qc,LineCurve3:rd,QuadraticBezierCurve:Zc,QuadraticBezierCurve3:od,SplineCurve:$c});class ad extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _a[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new _a[s.type]().fromJSON(s))}return this}}class Al extends ad{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qc(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Zc(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Yc(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $c(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ba(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jc extends Al{constructor(t){super(t),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Al().fromJSON(s))}return this}}function ld(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Kc(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=fd(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){const p=i[d],m=i[d+1];p<a&&(a=p),m<l&&(l=m),p>h&&(h=p),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ss(r,o,e,a,l,c,0),o}function Kc(i,t,e,n,s){let r;if(s===bd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Rl(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Rl(o/n|0,i[o],i[o+1],r);return r&&Wi(r,r.next)&&(bs(r),r=r.next),r}function fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Wi(e,e.next)||me(e.prev,e,e.next)===0)){if(bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ss(i,t,e,n,s,r,o){if(!i)return;!o&&r&&xd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?hd(i,n,s,r):cd(i)){t.push(l.i,i.i,c.i),bs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ud(fi(i),t),Ss(i,t,e,n,s,r,2)):o===2&&dd(i,t,e,n,s,r):Ss(fi(i),t,e,n,s,r,1);break}}}function cd(i){const t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),p=Math.max(a,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&ls(s,a,r,l,o,c,m.x,m.y)&&me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function hd(i,t,e,n){const s=i.prev,r=i,o=i.next;if(me(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=Math.min(a,l,c),m=Math.min(h,u,d),x=Math.max(a,l,c),g=Math.max(h,u,d),f=xa(p,m,t,e,n),T=xa(x,g,t,e,n);let b=i.prevZ,S=i.nextZ;for(;b&&b.z>=f&&S&&S.z<=T;){if(b.x>=p&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&ls(a,h,l,u,c,d,b.x,b.y)&&me(b.prev,b,b.next)>=0||(b=b.prevZ,S.x>=p&&S.x<=x&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&ls(a,h,l,u,c,d,S.x,S.y)&&me(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&ls(a,h,l,u,c,d,b.x,b.y)&&me(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;S&&S.z<=T;){if(S.x>=p&&S.x<=x&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&ls(a,h,l,u,c,d,S.x,S.y)&&me(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function ud(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Wi(n,s)&&Qc(n,e,e.next,s)&&Es(n,s)&&Es(s,n)&&(t.push(n.i,e.i,s.i),bs(e),bs(e.next),e=i=s),e=e.next}while(e!==i);return fi(e)}function dd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yd(o,a)){let l=th(o,a);o=fi(o,o.next),l=fi(l,l.next),Ss(o,t,e,n,s,r,0),Ss(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function fd(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Kc(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Md(c))}s.sort(pd);for(let r=0;r<s.length;r++)e=md(s[r],e);return e}function pd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function md(i,t){const e=gd(i,t);if(!e)return t;const n=th(e,i);return fi(n,n.next),fi(e,e.next)}function gd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Wi(i,e))return e;do{if(Wi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&jc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Es(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&_d(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function _d(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function xd(i,t,e,n){let s=i;do s.z===0&&(s.z=xa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vd(s)}function vd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function xa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Md(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function jc(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ls(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&jc(i,t,e,n,s,r,o,a)}function yd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sd(i,t)&&(Es(i,t)&&Es(t,i)&&Ed(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Wi(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Wi(i,t){return i.x===t.x&&i.y===t.y}function Qc(i,t,e,n){const s=or(me(i,t,e)),r=or(me(i,t,n)),o=or(me(e,n,i)),a=or(me(e,n,t));return!!(s!==r&&o!==a||s===0&&rr(i,e,t)||r===0&&rr(i,n,t)||o===0&&rr(e,i,n)||a===0&&rr(e,t,n))}function rr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function or(i){return i>0?1:i<0?-1:0}function Sd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Es(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function Ed(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function th(i,t){const e=va(i.i,i.x,i.y),n=va(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Rl(i,t,e,n){const s=va(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function va(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class wd{static triangulate(t,e,n=2){return ld(t,e,n)}}class Fi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Fi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Cl(t),Pl(n,t);let o=t.length;e.forEach(Cl);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Pl(n,e[l]);const a=wd.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Cl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Pl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ka extends Se{constructor(t=new Jc([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Td;let b,S=!1,A,R,C,N;if(f){b=f.getSpacedPoints(h),S=!0,d=!1;const K=f.isCatmullRomCurve3?f.closed:!1;A=f.computeFrenetFrames(h,K),R=new P,C=new P,N=new P}d||(g=0,p=0,m=0,x=0);const v=a.extractPoints(c);let y=v.shape;const L=v.holes;if(!Fi.isClockWise(y)){y=y.reverse();for(let K=0,nt=L.length;K<nt;K++){const et=L[K];Fi.isClockWise(et)&&(L[K]=et.reverse())}}function B(K){const et=10000000000000001e-36;let gt=K[0];for(let w=1;w<=K.length;w++){const Ut=w%K.length,Et=K[Ut],Bt=Et.x-gt.x,at=Et.y-gt.y,E=Bt*Bt+at*at,_=Math.max(Math.abs(Et.x),Math.abs(Et.y),Math.abs(gt.x),Math.abs(gt.y)),I=et*_*_;if(E<=I){K.splice(Ut,1),w--;continue}gt=Et}}B(y),L.forEach(B);const Y=L.length,k=y;for(let K=0;K<Y;K++){const nt=L[K];y=y.concat(nt)}function G(K,nt,et){return nt||te("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(nt,et)}const z=y.length;function j(K,nt,et){let gt,w,Ut;const Et=K.x-nt.x,Bt=K.y-nt.y,at=et.x-K.x,E=et.y-K.y,_=Et*Et+Bt*Bt,I=Et*E-Bt*at;if(Math.abs(I)>Number.EPSILON){const X=Math.sqrt(_),Q=Math.sqrt(at*at+E*E),q=nt.x-Bt/X,Pt=nt.y+Et/X,ht=et.x-E/Q,Rt=et.y+at/Q,zt=((ht-q)*E-(Rt-Pt)*at)/(Et*E-Bt*at);gt=q+Et*zt-K.x,w=Pt+Bt*zt-K.y;const it=gt*gt+w*w;if(it<=2)return new ut(gt,w);Ut=Math.sqrt(it/2)}else{let X=!1;Et>Number.EPSILON?at>Number.EPSILON&&(X=!0):Et<-Number.EPSILON?at<-Number.EPSILON&&(X=!0):Math.sign(Bt)===Math.sign(E)&&(X=!0),X?(gt=-Bt,w=Et,Ut=Math.sqrt(_)):(gt=Et,w=Bt,Ut=Math.sqrt(_/2))}return new ut(gt/Ut,w/Ut)}const ct=[];for(let K=0,nt=k.length,et=nt-1,gt=K+1;K<nt;K++,et++,gt++)et===nt&&(et=0),gt===nt&&(gt=0),ct[K]=j(k[K],k[et],k[gt]);const ot=[];let $,lt=ct.concat();for(let K=0,nt=Y;K<nt;K++){const et=L[K];$=[];for(let gt=0,w=et.length,Ut=w-1,Et=gt+1;gt<w;gt++,Ut++,Et++)Ut===w&&(Ut=0),Et===w&&(Et=0),$[gt]=j(et[gt],et[Ut],et[Et]);ot.push($),lt=lt.concat($)}let mt;if(g===0)mt=Fi.triangulateShape(k,L);else{const K=[],nt=[];for(let et=0;et<g;et++){const gt=et/g,w=p*Math.cos(gt*Math.PI/2),Ut=m*Math.sin(gt*Math.PI/2)+x;for(let Et=0,Bt=k.length;Et<Bt;Et++){const at=G(k[Et],ct[Et],Ut);Dt(at.x,at.y,-w),gt===0&&K.push(at)}for(let Et=0,Bt=Y;Et<Bt;Et++){const at=L[Et];$=ot[Et];const E=[];for(let _=0,I=at.length;_<I;_++){const X=G(at[_],$[_],Ut);Dt(X.x,X.y,-w),gt===0&&E.push(X)}gt===0&&nt.push(E)}}mt=Fi.triangulateShape(K,nt)}const Gt=mt.length,Tt=m+x;for(let K=0;K<z;K++){const nt=d?G(y[K],lt[K],Tt):y[K];S?(C.copy(A.normals[0]).multiplyScalar(nt.x),R.copy(A.binormals[0]).multiplyScalar(nt.y),N.copy(b[0]).add(C).add(R),Dt(N.x,N.y,N.z)):Dt(nt.x,nt.y,0)}for(let K=1;K<=h;K++)for(let nt=0;nt<z;nt++){const et=d?G(y[nt],lt[nt],Tt):y[nt];S?(C.copy(A.normals[K]).multiplyScalar(et.x),R.copy(A.binormals[K]).multiplyScalar(et.y),N.copy(b[K]).add(C).add(R),Dt(N.x,N.y,N.z)):Dt(et.x,et.y,u/h*K)}for(let K=g-1;K>=0;K--){const nt=K/g,et=p*Math.cos(nt*Math.PI/2),gt=m*Math.sin(nt*Math.PI/2)+x;for(let w=0,Ut=k.length;w<Ut;w++){const Et=G(k[w],ct[w],gt);Dt(Et.x,Et.y,u+et)}for(let w=0,Ut=L.length;w<Ut;w++){const Et=L[w];$=ot[w];for(let Bt=0,at=Et.length;Bt<at;Bt++){const E=G(Et[Bt],$[Bt],gt);S?Dt(E.x,E.y+b[h-1].y,b[h-1].x+et):Dt(E.x,E.y,u+et)}}}V(),J();function V(){const K=s.length/3;if(d){let nt=0,et=z*nt;for(let gt=0;gt<Gt;gt++){const w=mt[gt];St(w[2]+et,w[1]+et,w[0]+et)}nt=h+g*2,et=z*nt;for(let gt=0;gt<Gt;gt++){const w=mt[gt];St(w[0]+et,w[1]+et,w[2]+et)}}else{for(let nt=0;nt<Gt;nt++){const et=mt[nt];St(et[2],et[1],et[0])}for(let nt=0;nt<Gt;nt++){const et=mt[nt];St(et[0]+z*h,et[1]+z*h,et[2]+z*h)}}n.addGroup(K,s.length/3-K,0)}function J(){const K=s.length/3;let nt=0;xt(k,nt),nt+=k.length;for(let et=0,gt=L.length;et<gt;et++){const w=L[et];xt(w,nt),nt+=w.length}n.addGroup(K,s.length/3-K,1)}function xt(K,nt){let et=K.length;for(;--et>=0;){const gt=et;let w=et-1;w<0&&(w=K.length-1);for(let Ut=0,Et=h+g*2;Ut<Et;Ut++){const Bt=z*Ut,at=z*(Ut+1),E=nt+gt+Bt,_=nt+w+Bt,I=nt+w+at,X=nt+gt+at;Qt(E,_,I,X)}}}function Dt(K,nt,et){l.push(K),l.push(nt),l.push(et)}function St(K,nt,et){re(K),re(nt),re(et);const gt=s.length/3,w=T.generateTopUV(n,s,gt-3,gt-2,gt-1);Wt(w[0]),Wt(w[1]),Wt(w[2])}function Qt(K,nt,et,gt){re(K),re(nt),re(gt),re(nt),re(et),re(gt);const w=s.length/3,Ut=T.generateSideWallUV(n,s,w-6,w-3,w-2,w-1);Wt(Ut[0]),Wt(Ut[1]),Wt(Ut[3]),Wt(Ut[1]),Wt(Ut[2]),Wt(Ut[3])}function re(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function Wt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ad(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _a[s.type]().fromJSON(s)),new ka(n,t.options)}}const Td={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-u),new ut(d,1-m),new ut(x,1-f)]:[new ut(a,1-l),new ut(h,1-u),new ut(p,1-m),new ut(g,1-f)]}};function Ad(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _n extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],m=[],x=[],g=[];for(let f=0;f<h;f++){const T=f*d-o;for(let b=0;b<c;b++){const S=b*u-r;m.push(S,-T,0),x.push(0,0,1),g.push(b/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){const b=T+c*f,S=T+c*(f+1),A=T+1+c*(f+1),R=T+1+c*f;p.push(b,S,R),p.push(S,A,R)}this.setIndex(p),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.width,t.height,t.widthSegments,t.heightSegments)}}class cn extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,p=[],m=[],x=[],g=[];for(let f=0;f<=n;f++){const T=[],b=f/n;let S=0;f===0&&o===0?S=.5/e:f===n&&l===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){const R=A/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+b*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(R+S,1-b),T.push(c++)}h.push(T)}for(let f=0;f<n;f++)for(let T=0;T<e;T++){const b=h[f][T+1],S=h[f][T],A=h[f+1][T],R=h[f+1][T+1];(f!==0||o>0)&&p.push(b,S,R),(f!==n-1||l<Math.PI)&&p.push(S,A,R)}this.setIndex(p),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pi extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){const x=m/s*r,g=p/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){const x=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,T=(s+1)*p+m;o.push(x,g,T),o.push(g,f,T)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Rd extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class se extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cd extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pd extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ir extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ld extends Ir{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const go=new de,Ll=new P,Dl=new P;class eh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ll),Dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dl),e.updateMatrixWorld(),go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Dd extends eh{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}}class ui extends Ir{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Va extends Oc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Id extends eh{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ud extends Ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Id}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Nd extends Ir{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fd extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Od{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Il=new de;class nh{constructor(t,e,n=0,s=1/0){this.ray=new Dr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):te("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Il.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Il),this}intersectObject(t,e=!0,n=[]){return Ma(t,this,n,e),n.sort(Ul),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ma(t[s],this,n,e);return n.sort(Ul),n}}function Ul(i,t){return i.distance-t.distance}function Ma(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ma(r[o],t,e,!0)}}function Nl(i,t,e,n){const s=Bd(n);switch(e){case Ac:return i*t;case Cc:return i*t/s.components*s.byteLength;case Ra:return i*t/s.components*s.byteLength;case Vi:return i*t*2/s.components*s.byteLength;case Ca:return i*t*2/s.components*s.byteLength;case Rc:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case Pa:return i*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:case ko:return Math.max(i,16)*Math.max(t,8)/4;case Oo:case zo:return Math.max(i,8)*Math.max(t,8)/2;case Vo:case Ho:case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Go:case Yo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ea:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case la:case ca:case ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ua:case da:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fa:case pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bd(i){switch(i){case Ye:case Ec:return{byteLength:1,components:1};case gs:case bc:case Nn:return{byteLength:2,components:1};case Ta:case Aa:return{byteLength:2,components:4};case En:case wa:case mn:return{byteLength:4,components:1};case wc:case Tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);function ih(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){const m=u[d],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){const x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
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
#endif`,Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
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
#endif`,$d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qd=`#ifdef USE_IRIDESCENCE
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
#endif`,tf=`#ifdef USE_BUMPMAP
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hf=`#define PI 3.141592653589793
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
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,df=`vec3 transformedNormal = objectNormal;
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
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Df=`uniform bool receiveShadow;
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
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
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
#endif`,zf=`uniform sampler2D dfgLUT;
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
}`,kf=`
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jf=`#if defined( USE_POINTS_UV )
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
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cp=`#ifdef USE_NORMALMAP
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
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wp=`float getShadowMask() {
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
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
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
}`,qp=`#if DEPTH_PACKING == 3200
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
}`,Zp=`#define DISTANCE
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
}`,$p=`#define DISTANCE
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,em=`uniform vec3 diffuse;
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
}`,nm=`#define LAMBERT
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
}`,im=`#define LAMBERT
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
}`,sm=`#define MATCAP
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
}`,rm=`#define MATCAP
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
}`,om=`#define NORMAL
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
}`,am=`#define NORMAL
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
}`,lm=`#define PHONG
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
}`,cm=`#define PHONG
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
}`,hm=`#define STANDARD
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
}`,um=`#define STANDARD
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
}`,dm=`#define TOON
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
}`,fm=`#define TOON
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
}`,pm=`uniform float size;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,vm=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:kd,alphahash_pars_fragment:Vd,alphamap_fragment:Hd,alphamap_pars_fragment:Gd,alphatest_fragment:Wd,alphatest_pars_fragment:Xd,aomap_fragment:Yd,aomap_pars_fragment:qd,batching_pars_vertex:Zd,batching_vertex:$d,begin_vertex:Jd,beginnormal_vertex:Kd,bsdfs:jd,iridescence_fragment:Qd,bumpmap_pars_fragment:tf,clipping_planes_fragment:ef,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:rf,color_fragment:of,color_pars_fragment:af,color_pars_vertex:lf,color_vertex:cf,common:hf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:df,displacementmap_pars_vertex:ff,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,colorspace_fragment:_f,colorspace_pars_fragment:xf,envmap_fragment:vf,envmap_common_pars_fragment:Mf,envmap_pars_fragment:yf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:If,envmap_vertex:Ef,fog_vertex:bf,fog_pars_vertex:wf,fog_fragment:Tf,fog_pars_fragment:Af,gradientmap_pars_fragment:Rf,lightmap_pars_fragment:Cf,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:Lf,lights_pars_begin:Df,lights_toon_fragment:Uf,lights_toon_pars_fragment:Nf,lights_phong_fragment:Ff,lights_phong_pars_fragment:Of,lights_physical_fragment:Bf,lights_physical_pars_fragment:zf,lights_fragment_begin:kf,lights_fragment_maps:Vf,lights_fragment_end:Hf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:Wf,logdepthbuf_pars_vertex:Xf,logdepthbuf_vertex:Yf,map_fragment:qf,map_pars_fragment:Zf,map_particle_fragment:$f,map_particle_pars_fragment:Jf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:jf,morphinstance_vertex:Qf,morphcolor_vertex:tp,morphnormal_vertex:ep,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:sp,normal_fragment_maps:rp,normal_pars_fragment:op,normal_pars_vertex:ap,normal_vertex:lp,normalmap_pars_fragment:cp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:up,clearcoat_pars_fragment:dp,iridescence_pars_fragment:fp,opaque_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:_p,dithering_fragment:xp,dithering_pars_fragment:vp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:yp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:Ep,shadowmap_vertex:bp,shadowmask_pars_fragment:wp,skinbase_vertex:Tp,skinning_pars_vertex:Ap,skinning_vertex:Rp,skinnormal_vertex:Cp,specularmap_fragment:Pp,specularmap_pars_fragment:Lp,tonemapping_fragment:Dp,tonemapping_pars_fragment:Ip,transmission_fragment:Up,transmission_pars_fragment:Np,uv_pars_fragment:Fp,uv_pars_vertex:Op,uv_vertex:Bp,worldpos_vertex:zp,background_vert:kp,background_frag:Vp,backgroundCube_vert:Hp,backgroundCube_frag:Gp,cube_vert:Wp,cube_frag:Xp,depth_vert:Yp,depth_frag:qp,distance_vert:Zp,distance_frag:$p,equirect_vert:Jp,equirect_frag:Kp,linedashed_vert:jp,linedashed_frag:Qp,meshbasic_vert:tm,meshbasic_frag:em,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:sm,meshmatcap_frag:rm,meshnormal_vert:om,meshnormal_frag:am,meshphong_vert:lm,meshphong_frag:cm,meshphysical_vert:hm,meshphysical_frag:um,meshtoon_vert:dm,meshtoon_frag:fm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:_m,sprite_vert:xm,sprite_frag:vm},vt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},pn={basic:{uniforms:Ue([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ue([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ue([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ue([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ue([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ue([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ue([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ue([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ue([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ue([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ue([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Ue([vt.common,vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Ue([vt.lights,vt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};pn.physical={uniforms:Ue([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const ar={r:0,b:0,g:0},ei=new qe,Mm=new de;function ym(i,t,e,n,s,r,o){const a=new jt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function m(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function x(b){let S=!1;const A=m(b);A===null?f(a,l):A&&A.isColor&&(f(A,1),S=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,S){const A=m(S);A&&(A.isCubeTexture||A.mapping===Lr)?(h===void 0&&(h=new Z(new Yt(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Gi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ei.copy(S.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(ei)),h.material.toneMapped=ee.getTransfer(A.colorSpace)!==le,(u!==A||d!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Z(new _n(2,2),new bn({name:"BackgroundMaterial",uniforms:Gi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ee.getTransfer(A.colorSpace)!==le,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,S){b.getRGB(ar,Fc(i)),n.buffers.color.setClear(ar.r,ar.g,ar.b,S,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:x,addToRenderList:g,dispose:T}}function Sm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,L,O,B,Y){let k=!1;const G=u(B,O,L);r!==G&&(r=G,c(r.object)),k=p(y,B,O,Y),k&&m(y,B,O,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(y,L,O,B),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,L,O){const B=O.wireframe===!0;let Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let k=Y[L.id];k===void 0&&(k={},Y[L.id]=k);let G=k[B];return G===void 0&&(G=d(l()),k[B]=G),G}function d(y){const L=[],O=[],B=[];for(let Y=0;Y<e;Y++)L[Y]=0,O[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,L,O,B){const Y=r.attributes,k=L.attributes;let G=0;const z=O.getAttributes();for(const j in z)if(z[j].location>=0){const ot=Y[j];let $=k[j];if($===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),ot===void 0||ot.attribute!==$||$&&ot.data!==$.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function m(y,L,O,B){const Y={},k=L.attributes;let G=0;const z=O.getAttributes();for(const j in z)if(z[j].location>=0){let ot=k[j];ot===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor));const $={};$.attribute=ot,ot&&ot.data&&($.data=ot.data),Y[j]=$,G++}r.attributes=Y,r.attributesNum=G,r.index=B}function x(){const y=r.newAttributes;for(let L=0,O=y.length;L<O;L++)y[L]=0}function g(y){f(y,0)}function f(y,L){const O=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;O[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),Y[y]!==L&&(i.vertexAttribDivisor(y,L),Y[y]=L)}function T(){const y=r.newAttributes,L=r.enabledAttributes;for(let O=0,B=L.length;O<B;O++)L[O]!==y[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function b(y,L,O,B,Y,k,G){G===!0?i.vertexAttribIPointer(y,L,O,Y,k):i.vertexAttribPointer(y,L,O,B,Y,k)}function S(y,L,O,B){x();const Y=B.attributes,k=O.getAttributes(),G=L.defaultAttributeValues;for(const z in k){const j=k[z];if(j.location>=0){let ct=Y[z];if(ct===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){const ot=ct.normalized,$=ct.itemSize,lt=t.get(ct);if(lt===void 0)continue;const mt=lt.buffer,Gt=lt.type,Tt=lt.bytesPerElement,V=Gt===i.INT||Gt===i.UNSIGNED_INT||ct.gpuType===wa;if(ct.isInterleavedBufferAttribute){const J=ct.data,xt=J.stride,Dt=ct.offset;if(J.isInstancedInterleavedBuffer){for(let St=0;St<j.locationSize;St++)f(j.location+St,J.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let St=0;St<j.locationSize;St++)g(j.location+St);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let St=0;St<j.locationSize;St++)b(j.location+St,$/j.locationSize,Gt,ot,xt*Tt,(Dt+$/j.locationSize*St)*Tt,V)}else{if(ct.isInstancedBufferAttribute){for(let J=0;J<j.locationSize;J++)f(j.location+J,ct.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let J=0;J<j.locationSize;J++)g(j.location+J);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let J=0;J<j.locationSize;J++)b(j.location+J,$/j.locationSize,Gt,ot,$*Tt,$/j.locationSize*J*Tt,V)}}else if(G!==void 0){const ot=G[z];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(j.location,ot);break;case 3:i.vertexAttrib3fv(j.location,ot);break;case 4:i.vertexAttrib4fv(j.location,ot);break;default:i.vertexAttrib1fv(j.location,ot)}}}}T()}function A(){N();for(const y in n){const L=n[y];for(const O in L){const B=L[O];for(const Y in B)h(B[Y].object),delete B[Y];delete L[O]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const O in L){const B=L[O];for(const Y in B)h(B[Y].object),delete B[Y];delete L[O]}delete n[y.id]}function C(y){for(const L in n){const O=n[L];if(O[y.id]===void 0)continue;const B=O[y.id];for(const Y in B)h(B[Y].object),delete B[Y];delete O[y.id]}}function N(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function Em(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ye&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==mn&&!N)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:S,maxSamples:A,samples:R}}function wm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ii,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const T=r?0:n,b=T*4;let S=f.clippingState||null;l.value=S,S=h(m,d,b,p);for(let A=0;A!==b;++A)S[A]=e[A];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const f=p+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<f)&&(g=new Float32Array(f));for(let b=0,S=p;b!==x;++b,S+=4)o.copy(u[b]).applyMatrix4(T,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Tm(i){let t=new WeakMap;function e(o,a){return a===Uo?o.mapping=di:a===No&&(o.mapping=ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uo||a===No)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Xn=4,Fl=[.125,.215,.35,.446,.526,.582],ri=20,Am=256,ss=new Va,Ol=new jt;let _o=null,xo=0,vo=0,Mo=!1;const Rm=new P;class Bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Rm}=r;_o=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_o,xo,vo),this._renderer.xr.enabled=Mo,t.scissorTest=!1,Ii(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_o=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Nn,format:hn,colorSpace:Hi,depthBuffer:!1},s=zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Cm(r)),this._blurMaterial=Lm(r,t,e),this._ggxMaterial=Pm(r,t,e)}return s}_compileMaterial(t){const e=new Z(new Se,t);this._renderer.compile(e,ss)}_sceneToCubeUV(t,e,n,s,r){const l=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ol),u.toneMapping=Mn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Z(new Yt,new Ms({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let f=!1;const T=t.background;T?T.isColor&&(g.color.copy(T),t.background=null,f=!0):(g.color.copy(Ol),f=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const A=this._cubeSize;Ii(s,S*A,b>2?A:0,A,A),u.setRenderTarget(s),f&&u.render(x,l),u.render(t,l)}u.toneMapping=p,u.autoClear=d,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===di||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ii(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ss)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Xn?n-m+Xn:0),f=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=m-e,Ii(r,g,f,3*x,2*x),s.setRenderTarget(r),s.render(a,ss),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ii(t,g,f,3*x,2*x),s.setRenderTarget(t),s.render(a,ss)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&te("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ri-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):ri;g>ri&&Vt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ri}`);const f=[];let T=0;for(let C=0;C<ri;++C){const N=C/x,v=Math.exp(-N*N/2);f.push(v),C===0?T+=v:C<g&&(T+=2*v)}for(let C=0;C<f.length;C++)f[C]=f[C]/T;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;const S=this._sizeLods[s],A=3*S*(s>b-Xn?s-b+Xn:0),R=4*(this._cubeSize-S);Ii(e,A,R,3*S,2*S),l.setRenderTarget(e),l.render(u,ss)}}function Cm(i){const t=[],e=[],n=[];let s=i;const r=i-Xn+1+Fl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Xn?l=Fl[o-i+Xn-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,x=3,g=2,f=1,T=new Float32Array(x*m*p),b=new Float32Array(g*m*p),S=new Float32Array(f*m*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,N=R>2?0:-1,v=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];T.set(v,x*m*R),b.set(d,g*m*R);const y=[R,R,R,R,R,R];S.set(y,f*m*R)}const A=new Se;A.setAttribute("position",new ze(T,x)),A.setAttribute("uv",new ze(b,g)),A.setAttribute("faceIndex",new ze(S,f)),n.push(new Z(A,null)),s>Xn&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function zl(i,t,e){const n=new Sn(i,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ii(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pm(i,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Am,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Lm(i,t,e){const n=new Float32Array(ri),s=new P(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function kl(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Vl(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ur(){return`

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
	`}function Dm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uo||l===No,h=l===di||l===ki;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Bl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Bl(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Im(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&xs("WebGLRenderer: "+n+" extension not supported."),s}}}function Um(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,m=u.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let b=0,S=T.length;b<S;b+=3){const A=T[b+0],R=T[b+1],C=T[b+2];d.push(A,R,R,C,C,A)}}else if(m!==void 0){const T=m.array;x=m.version;for(let b=0,S=T.length/3-1;b<S;b+=3){const A=b+0,R=b+1,C=b+2;d.push(A,R,R,C,C,A)}}else return;const g=new(Lc(d)?Nc:Uc)(d,1);g.version=x;const f=r.get(u);f&&t.remove(f),r.set(u,g)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Nm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*o,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function u(d,p,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,m);let f=0;for(let T=0;T<m;T++)f+=p[T]*x[T];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Fm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:te("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Om(i,t,e){const n=new WeakMap,s=new xe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),x===!0&&(S=2),g===!0&&(S=3);let A=a.attributes.position.count*S,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*R*4*u),N=new Dc(C,A,R,u);N.type=mn,N.needsUpdate=!0;const v=S*4;for(let L=0;L<u;L++){const O=f[L],B=T[L],Y=b[L],k=A*R*4*L;for(let G=0;G<O.count;G++){const z=G*v;m===!0&&(s.fromBufferAttribute(O,G),C[k+z+0]=s.x,C[k+z+1]=s.y,C[k+z+2]=s.z,C[k+z+3]=0),x===!0&&(s.fromBufferAttribute(B,G),C[k+z+4]=s.x,C[k+z+5]=s.y,C[k+z+6]=s.z,C[k+z+7]=0),g===!0&&(s.fromBufferAttribute(Y,G),C[k+z+8]=s.x,C[k+z+9]=s.y,C[k+z+10]=s.z,C[k+z+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new ut(A,R)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Bm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const zm={[mc]:"LINEAR_TONE_MAPPING",[gc]:"REINHARD_TONE_MAPPING",[_c]:"CINEON_TONE_MAPPING",[xc]:"ACES_FILMIC_TONE_MAPPING",[Mc]:"AGX_TONE_MAPPING",[yc]:"NEUTRAL_TONE_MAPPING",[vc]:"CUSTOM_TONE_MAPPING"};function km(i,t,e,n,s){const r=new Sn(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),o=new Sn(t,e,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),a=new Se;a.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Me([0,2,0,0,2,0],2));const l=new Rd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Z(a,l),h=new Va(-1,1,1,-1,0,1);let u=null,d=null,p=!1,m,x=null,g=[],f=!1;this.setSize=function(T,b){r.setSize(T,b),o.setSize(T,b);for(let S=0;S<g.length;S++){const A=g[S];A.setSize&&A.setSize(T,b)}},this.setEffects=function(T){g=T,f=g.length>0&&g[0].isRenderPass===!0;const b=r.width,S=r.height;for(let A=0;A<g.length;A++){const R=g[A];R.setSize&&R.setSize(b,S)}},this.begin=function(T,b){if(p||T.toneMapping===Mn&&g.length===0)return!1;if(x=b,b!==null){const S=b.width,A=b.height;(r.width!==S||r.height!==A)&&this.setSize(S,A)}return f===!1&&T.setRenderTarget(r),m=T.toneMapping,T.toneMapping=Mn,!0},this.hasRenderPass=function(){return f},this.end=function(T,b){T.toneMapping=m,p=!0;let S=r,A=o;for(let R=0;R<g.length;R++){const C=g[R];if(C.enabled!==!1&&(C.render(T,A,S,b),C.needsSwap!==!1)){const N=S;S=A,A=N}}if(u!==T.outputColorSpace||d!==T.toneMapping){u=T.outputColorSpace,d=T.toneMapping,l.defines={},ee.getTransfer(u)===le&&(l.defines.SRGB_TRANSFER="");const R=zm[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,T.setRenderTarget(x),T.render(c,h),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const sh=new Le,ya=new ys(1,1),rh=new Dc,oh=new bu,ah=new Bc,Hl=[],Gl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),Yl=new Float32Array(4);function Yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Hl[s];if(r===void 0&&(r=new Float32Array(s),Hl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Nr(i,t){let e=Gl[t];e===void 0&&(e=new Int32Array(t),Gl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function Wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function Xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Yl.set(n),i.uniformMatrix2fv(this.addr,!1,Yl),we(e,n)}}function Ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Xl.set(n),i.uniformMatrix3fv(this.addr,!1,Xl),we(e,n)}}function qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Wl.set(n),i.uniformMatrix4fv(this.addr,!1,Wl),we(e,n)}}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function n0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ya.compareFunction=e.isReversedDepthBuffer()?Da:La,r=ya):r=sh,e.setTexture2D(t||r,s)}function i0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||oh,s)}function s0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ah,s)}function r0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rh,s)}function o0(i){switch(i){case 5126:return Vm;case 35664:return Hm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return Ym;case 35676:return qm;case 5124:case 35670:return Zm;case 35667:case 35671:return $m;case 35668:case 35672:return Jm;case 35669:case 35673:return Km;case 5125:return jm;case 36294:return Qm;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}function a0(i,t){i.uniform1fv(this.addr,t)}function l0(i,t){const e=Yi(t,this.size,2);i.uniform2fv(this.addr,e)}function c0(i,t){const e=Yi(t,this.size,3);i.uniform3fv(this.addr,e)}function h0(i,t){const e=Yi(t,this.size,4);i.uniform4fv(this.addr,e)}function u0(i,t){const e=Yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function d0(i,t){const e=Yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function f0(i,t){const e=Yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function p0(i,t){i.uniform1iv(this.addr,t)}function m0(i,t){i.uniform2iv(this.addr,t)}function g0(i,t){i.uniform3iv(this.addr,t)}function _0(i,t){i.uniform4iv(this.addr,t)}function x0(i,t){i.uniform1uiv(this.addr,t)}function v0(i,t){i.uniform2uiv(this.addr,t)}function M0(i,t){i.uniform3uiv(this.addr,t)}function y0(i,t){i.uniform4uiv(this.addr,t)}function S0(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ya:o=sh;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function E0(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||oh,r[o])}function b0(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ah,r[o])}function w0(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||rh,r[o])}function T0(i){switch(i){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return x0;case 36294:return v0;case 36295:return M0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return w0}}class A0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=o0(e.type)}}class R0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T0(e.type)}}class C0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function ql(i,t){i.seq.push(t),i.map[t.id]=t}function P0(i,t,e){const n=i.name,s=n.length;for(yo.lastIndex=0;;){const r=yo.exec(n),o=yo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ql(e,c===void 0?new A0(a,i,t):new R0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new C0(a),ql(e,u)),e=u}}}class vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);P0(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Zl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const L0=37297;let D0=0;function I0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const $l=new qt;function U0(i){ee._getMatrix($l,ee.workingColorSpace,i);const t=`mat3( ${$l.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Mr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+I0(i.getShaderSource(t),a)}else return r}function N0(i,t){const e=U0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const F0={[mc]:"Linear",[gc]:"Reinhard",[_c]:"Cineon",[xc]:"ACESFilmic",[Mc]:"AgX",[yc]:"Neutral",[vc]:"Custom"};function O0(i,t){const e=F0[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lr=new P;function B0(){ee.getLuminanceCoefficients(lr);const i=lr.x.toFixed(4),t=lr.y.toFixed(4),e=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function k0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function V0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function cs(i){return i!==""}function Kl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(i){return i.replace(H0,W0)}const G0=new Map;function W0(i,t){let e=Zt[t];if(e===void 0){const n=G0.get(t);if(n!==void 0)e=Zt[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sa(e)}const X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(X0,Y0)}function Y0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const q0={[dr]:"SHADOWMAP_TYPE_PCF",[as]:"SHADOWMAP_TYPE_VSM"};function Z0(i){return q0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $0={[di]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE_UV"};function J0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const K0={[ki]:"ENVMAP_MODE_REFRACTION"};function j0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":K0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Q0={[pc]:"ENVMAP_BLENDING_MULTIPLY",[Wh]:"ENVMAP_BLENDING_MIX",[Xh]:"ENVMAP_BLENDING_ADD"};function tg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Q0[i.combine]||"ENVMAP_BLENDING_NONE"}function eg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ng(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Z0(e),c=J0(e),h=j0(e),u=tg(e),d=eg(e),p=z0(e),m=k0(r),x=s.createProgram();let g,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(cs).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(cs).join(`
`),f.length>0&&(f+=`
`)):(g=[tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),f=[tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Mn?O0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,N0("linearToOutputTexel",e.outputColorSpace),B0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),o=Sa(o),o=Kl(o,e),o=jl(o,e),a=Sa(a),a=Kl(a,e),a=jl(a,e),o=Ql(o),a=Ql(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=T+g+o,S=T+f+a,A=Zl(s,s.VERTEX_SHADER,b),R=Zl(s,s.FRAGMENT_SHADER,S);s.attachShader(x,A),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(L){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(R)||"",k=O.trim(),G=B.trim(),z=Y.trim();let j=!0,ct=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,R);else{const ot=Jl(s,A,"vertex"),$=Jl(s,R,"fragment");te("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+ot+`
`+$)}else k!==""?Vt("WebGLProgram: Program Info Log:",k):(G===""||z==="")&&(ct=!1);ct&&(L.diagnostics={runnable:j,programLog:k,vertexShader:{log:G,prefix:g},fragmentShader:{log:z,prefix:f}})}s.deleteShader(A),s.deleteShader(R),N=new vr(s,x),v=V0(s,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,L0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}let ig=0;class sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rg(t),e.set(t,n)),n}}class rg{constructor(t){this.id=ig++,this.code=t,this.usedTimes=0}}function og(i,t,e,n,s,r,o){const a=new Na,l=new sg,c=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,y,L,O,B){const Y=O.fog,k=B.geometry,G=v.isMeshStandardMaterial?O.environment:null,z=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),j=z&&z.mapping===Lr?z.image.height:null,ct=m[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&Vt("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$=ot!==void 0?ot.length:0;let lt=0;k.morphAttributes.position!==void 0&&(lt=1),k.morphAttributes.normal!==void 0&&(lt=2),k.morphAttributes.color!==void 0&&(lt=3);let mt,Gt,Tt,V;if(ct){const oe=pn[ct];mt=oe.vertexShader,Gt=oe.fragmentShader}else mt=v.vertexShader,Gt=v.fragmentShader,l.update(v),Tt=l.getVertexShaderID(v),V=l.getFragmentShaderID(v);const J=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,St=B.isBatchedMesh===!0,Qt=!!v.map,re=!!v.matcap,Wt=!!z,K=!!v.aoMap,nt=!!v.lightMap,et=!!v.bumpMap,gt=!!v.normalMap,w=!!v.displacementMap,Ut=!!v.emissiveMap,Et=!!v.metalnessMap,Bt=!!v.roughnessMap,at=v.anisotropy>0,E=v.clearcoat>0,_=v.dispersion>0,I=v.iridescence>0,X=v.sheen>0,Q=v.transmission>0,q=at&&!!v.anisotropyMap,Pt=E&&!!v.clearcoatMap,ht=E&&!!v.clearcoatNormalMap,Rt=E&&!!v.clearcoatRoughnessMap,zt=I&&!!v.iridescenceMap,it=I&&!!v.iridescenceThicknessMap,pt=X&&!!v.sheenColorMap,Ct=X&&!!v.sheenRoughnessMap,Lt=!!v.specularMap,ft=!!v.specularColorMap,$t=!!v.specularIntensityMap,D=Q&&!!v.transmissionMap,yt=Q&&!!v.thicknessMap,rt=!!v.gradientMap,bt=!!v.alphaMap,st=v.alphaTest>0,tt=!!v.alphaHash,dt=!!v.extensions;let Xt=Mn;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const fe={shaderID:ct,shaderType:v.type,shaderName:v.name,vertexShader:mt,fragmentShader:Gt,defines:v.defines,customVertexShaderID:Tt,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:St,batchingColor:St&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Hi,alphaToCoverage:!!v.alphaToCoverage,map:Qt,matcap:re,envMap:Wt,envMapMode:Wt&&z.mapping,envMapCubeUVHeight:j,aoMap:K,lightMap:nt,bumpMap:et,normalMap:gt,displacementMap:w,emissiveMap:Ut,normalMapObjectSpace:gt&&v.normalMapType===Zh,normalMapTangentSpace:gt&&v.normalMapType===Pc,metalnessMap:Et,roughnessMap:Bt,anisotropy:at,anisotropyMap:q,clearcoat:E,clearcoatMap:Pt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Rt,dispersion:_,iridescence:I,iridescenceMap:zt,iridescenceThicknessMap:it,sheen:X,sheenColorMap:pt,sheenRoughnessMap:Ct,specularMap:Lt,specularColorMap:ft,specularIntensityMap:$t,transmission:Q,transmissionMap:D,thicknessMap:yt,gradientMap:rt,opaque:v.transparent===!1&&v.blending===hi&&v.alphaToCoverage===!1,alphaMap:bt,alphaTest:st,alphaHash:tt,combine:v.combine,mapUv:Qt&&x(v.map.channel),aoMapUv:K&&x(v.aoMap.channel),lightMapUv:nt&&x(v.lightMap.channel),bumpMapUv:et&&x(v.bumpMap.channel),normalMapUv:gt&&x(v.normalMap.channel),displacementMapUv:w&&x(v.displacementMap.channel),emissiveMapUv:Ut&&x(v.emissiveMap.channel),metalnessMapUv:Et&&x(v.metalnessMap.channel),roughnessMapUv:Bt&&x(v.roughnessMap.channel),anisotropyMapUv:q&&x(v.anisotropyMap.channel),clearcoatMapUv:Pt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(v.sheenRoughnessMap.channel),specularMapUv:Lt&&x(v.specularMap.channel),specularColorMapUv:ft&&x(v.specularColorMap.channel),specularIntensityMapUv:$t&&x(v.specularIntensityMap.channel),transmissionMapUv:D&&x(v.transmissionMap.channel),thicknessMapUv:yt&&x(v.thicknessMap.channel),alphaMapUv:bt&&x(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(gt||at),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(Qt||bt),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:B.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:lt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Qt&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===le,decodeVideoTextureEmissive:Ut&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===an,flipSided:v.side===Fe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:dt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&v.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function f(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)y.push(L),y.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(T(y,v),b(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function T(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function b(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function S(v){const y=m[v.type];let L;if(y){const O=pn[y];L=Ou.clone(O.uniforms)}else L=v.uniforms;return L}function A(v,y){let L=u.get(y);return L!==void 0?++L.usedTimes:(L=new ng(i,y,v,r),h.push(L),u.set(y,L)),L}function R(v){if(--v.usedTimes===0){const y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function C(v){l.remove(v)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:S,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:N}}function ag(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function lg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ec(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,m,x,g){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=x,f.group=g),t++,f}function a(u,d,p,m,x,g){const f=o(u,d,p,m,x,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,m,x,g){const f=o(u,d,p,m,x,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||lg),n.length>1&&n.sort(d||ec),s.length>1&&s.sort(d||ec)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function cg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new nc,i.set(n,[o])):s>=r.length?(o=new nc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function hg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new jt};break;case"SpotLight":e={position:new P,direction:new P,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function ug(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let dg=0;function fg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function pg(i){const t=new hg,e=ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new de,o=new de;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,m=0,x=0,g=0,f=0,T=0,b=0,S=0,A=0,R=0,C=0;c.sort(fg);for(let v=0,y=c.length;v<y;v++){const L=c[v],O=L.color,B=L.intensity,Y=L.distance;let k=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Vi?k=L.shadow.map.texture:k=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],B);C++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const z=L.shadow,j=e.get(L);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=G,p++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(O).multiplyScalar(B),G.distance=Y,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[x]=G;const z=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,z.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=z.matrix,L.castShadow){const j=e.get(L);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=k,S++}x++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(O).multiplyScalar(B),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=G,g++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const z=L.shadow,j=e.get(L);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,j.shadowCameraNear=z.camera.near,j.shadowCameraFar=z.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=k,n.pointShadowMatrix[m]=L.shadow.matrix,b++}n.point[m]=G,m++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(B),G.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[f]=G,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==p||N.pointLength!==m||N.spotLength!==x||N.rectAreaLength!==g||N.hemiLength!==f||N.numDirectionalShadows!==T||N.numPointShadows!==b||N.numSpotShadows!==S||N.numSpotMaps!==A||N.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,N.directionalLength=p,N.pointLength=m,N.spotLength=x,N.rectAreaLength=g,N.hemiLength=f,N.numDirectionalShadows=T,N.numPointShadows=b,N.numSpotShadows=S,N.numSpotMaps=A,N.numLightProbes=C,n.version=dg++)}function l(c,h){let u=0,d=0,p=0,m=0,x=0;const g=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const b=c[f];if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(b.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function ic(i){const t=new pg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ic(i),t.set(s,[a])):r>=o.length?(a=new ic(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_g=`uniform sampler2D shadow_pass;
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
}`,xg=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],vg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],sc=new de,rs=new P,So=new P;function Mg(i,t,e){let n=new Oa;const s=new ut,r=new ut,o=new xe,a=new Cd,l=new Pd,c={},h=e.maxTextureSize,u={[Yn]:Fe,[Fe]:Yn,[an]:an},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:gg,fragmentShader:_g}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Se;m.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Z(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let f=this.type;this.render=function(R,C,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;R.type===fc&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=dr);const v=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(In),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=f!==this.type;B&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(k=>k.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,k=R.length;Y<k;Y++){const G=R[Y],z=G.shadow;if(z===void 0){Vt("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const j=z.getFrameExtents();if(s.multiply(j),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,z.mapSize.y=r.y)),z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===as){if(G.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Sn(s.x,s.y,{format:Vi,type:Nn,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new ys(s.x,s.y,mn),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=Fn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ae,z.map.depthTexture.magFilter=Ae}else{G.isPointLight?(z.map=new zc(s.x),z.map.depthTexture=new Zu(s.x,En)):(z.map=new Sn(s.x,s.y),z.map.depthTexture=new ys(s.x,s.y,En)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=Fn;const ot=i.state.buffers.depth.getReversed();this.type===dr?(z.map.depthTexture.compareFunction=ot?Da:La,z.map.depthTexture.minFilter=Pe,z.map.depthTexture.magFilter=Pe):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ae,z.map.depthTexture.magFilter=Ae)}z.camera.updateProjectionMatrix()}const ct=z.map.isWebGLCubeRenderTarget?6:1;for(let ot=0;ot<ct;ot++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,ot),i.clear();else{ot===0&&(i.setRenderTarget(z.map),i.clear());const $=z.getViewport(ot);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),O.viewport(o)}if(G.isPointLight){const $=z.camera,lt=z.matrix,mt=G.distance||$.far;mt!==$.far&&($.far=mt,$.updateProjectionMatrix()),rs.setFromMatrixPosition(G.matrixWorld),$.position.copy(rs),So.copy($.position),So.add(xg[ot]),$.up.copy(vg[ot]),$.lookAt(So),$.updateMatrixWorld(),lt.makeTranslation(-rs.x,-rs.y,-rs.z),sc.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),z._frustum.setFromProjectionMatrix(sc,$.coordinateSystem,$.reversedDepth)}else z.updateMatrices(G);n=z.getFrustum(),S(C,N,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===as&&T(z,N),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(v,y,L)};function T(R,C){const N=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Sn(s.x,s.y,{format:Vi,type:Nn})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,N,d,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,N,p,x,null)}function b(R,C,N,v){let y=null;const L=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=N.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=y.uuid,B=C.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let k=Y[B];k===void 0&&(k=y.clone(),Y[B]=k,C.addEventListener("dispose",A)),y=k}if(y.visible=C.visible,y.wireframe=C.wireframe,v===as?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=N}return y}function S(R,C,N,v,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===as)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const B=t.update(R),Y=R.material;if(Array.isArray(Y)){const k=B.groups;for(let G=0,z=k.length;G<z;G++){const j=k[G],ct=Y[j.materialIndex];if(ct&&ct.visible){const ot=b(R,ct,v,y);R.onBeforeShadow(i,R,C,N,B,ot,j),i.renderBufferDirect(N,null,B,ot,R,j),R.onAfterShadow(i,R,C,N,B,ot,j)}}}else if(Y.visible){const k=b(R,Y,v,y);R.onBeforeShadow(i,R,C,N,B,k,null),i.renderBufferDirect(N,null,B,k,R,null),R.onAfterShadow(i,R,C,N,B,k,null)}}const O=R.children;for(let B=0,Y=O.length;B<Y;B++)S(O[B],C,N,v,y)}function A(R){R.target.removeEventListener("dispose",A);for(const N in c){const v=c[N],y=R.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const yg={[Ao]:Ro,[Co]:Do,[Po]:Io,[zi]:Lo,[Ro]:Ao,[Do]:Co,[Io]:Po,[Lo]:zi};function Sg(i,t){function e(){let D=!1;const yt=new xe;let rt=null;const bt=new xe(0,0,0,0);return{setMask:function(st){rt!==st&&!D&&(i.colorMask(st,st,st,st),rt=st)},setLocked:function(st){D=st},setClear:function(st,tt,dt,Xt,fe){fe===!0&&(st*=Xt,tt*=Xt,dt*=Xt),yt.set(st,tt,dt,Xt),bt.equals(yt)===!1&&(i.clearColor(st,tt,dt,Xt),bt.copy(yt))},reset:function(){D=!1,rt=null,bt.set(-1,0,0,0)}}}function n(){let D=!1,yt=!1,rt=null,bt=null,st=null;return{setReversed:function(tt){if(yt!==tt){const dt=t.get("EXT_clip_control");tt?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),yt=tt;const Xt=st;st=null,this.setClear(Xt)}},getReversed:function(){return yt},setTest:function(tt){tt?J(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(tt){rt!==tt&&!D&&(i.depthMask(tt),rt=tt)},setFunc:function(tt){if(yt&&(tt=yg[tt]),bt!==tt){switch(tt){case Ao:i.depthFunc(i.NEVER);break;case Ro:i.depthFunc(i.ALWAYS);break;case Co:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case Po:i.depthFunc(i.EQUAL);break;case Lo:i.depthFunc(i.GEQUAL);break;case Do:i.depthFunc(i.GREATER);break;case Io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=tt}},setLocked:function(tt){D=tt},setClear:function(tt){st!==tt&&(yt&&(tt=1-tt),i.clearDepth(tt),st=tt)},reset:function(){D=!1,rt=null,bt=null,st=null,yt=!1}}}function s(){let D=!1,yt=null,rt=null,bt=null,st=null,tt=null,dt=null,Xt=null,fe=null;return{setTest:function(oe){D||(oe?J(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(oe){yt!==oe&&!D&&(i.stencilMask(oe),yt=oe)},setFunc:function(oe,un,Tn){(rt!==oe||bt!==un||st!==Tn)&&(i.stencilFunc(oe,un,Tn),rt=oe,bt=un,st=Tn)},setOp:function(oe,un,Tn){(tt!==oe||dt!==un||Xt!==Tn)&&(i.stencilOp(oe,un,Tn),tt=oe,dt=un,Xt=Tn)},setLocked:function(oe){D=oe},setClear:function(oe){fe!==oe&&(i.clearStencil(oe),fe=oe)},reset:function(){D=!1,yt=null,rt=null,bt=null,st=null,tt=null,dt=null,Xt=null,fe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],m=null,x=!1,g=null,f=null,T=null,b=null,S=null,A=null,R=null,C=new jt(0,0,0),N=0,v=!1,y=null,L=null,O=null,B=null,Y=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=z>=2);let ct=null,ot={};const $=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),mt=new xe().fromArray($),Gt=new xe().fromArray(lt);function Tt(D,yt,rt,bt){const st=new Uint8Array(4),tt=i.createTexture();i.bindTexture(D,tt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<rt;dt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(yt+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return tt}const V={};V[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(zi),et(!1),gt(Ka),J(i.CULL_FACE),K(In);function J(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function xt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Dt(D,yt){return u[D]!==yt?(i.bindFramebuffer(D,yt),u[D]=yt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=yt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function St(D,yt){let rt=p,bt=!1;if(D){rt=d.get(yt),rt===void 0&&(rt=[],d.set(yt,rt));const st=D.textures;if(rt.length!==st.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,dt=st.length;tt<dt;tt++)rt[tt]=i.COLOR_ATTACHMENT0+tt;rt.length=st.length,bt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(rt)}function Qt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const re={[si]:i.FUNC_ADD,[Ah]:i.FUNC_SUBTRACT,[Rh]:i.FUNC_REVERSE_SUBTRACT};re[Ch]=i.MIN,re[Ph]=i.MAX;const Wt={[Lh]:i.ZERO,[Dh]:i.ONE,[Ih]:i.SRC_COLOR,[wo]:i.SRC_ALPHA,[zh]:i.SRC_ALPHA_SATURATE,[Oh]:i.DST_COLOR,[Nh]:i.DST_ALPHA,[Uh]:i.ONE_MINUS_SRC_COLOR,[To]:i.ONE_MINUS_SRC_ALPHA,[Bh]:i.ONE_MINUS_DST_COLOR,[Fh]:i.ONE_MINUS_DST_ALPHA,[kh]:i.CONSTANT_COLOR,[Vh]:i.ONE_MINUS_CONSTANT_COLOR,[Hh]:i.CONSTANT_ALPHA,[Gh]:i.ONE_MINUS_CONSTANT_ALPHA};function K(D,yt,rt,bt,st,tt,dt,Xt,fe,oe){if(D===In){x===!0&&(xt(i.BLEND),x=!1);return}if(x===!1&&(J(i.BLEND),x=!0),D!==Th){if(D!==g||oe!==v){if((f!==si||S!==si)&&(i.blendEquation(i.FUNC_ADD),f=si,S=si),oe)switch(D){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFunc(i.ONE,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",D);break}else switch(D){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ja:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qa:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",D);break}T=null,b=null,A=null,R=null,C.set(0,0,0),N=0,g=D,v=oe}return}st=st||yt,tt=tt||rt,dt=dt||bt,(yt!==f||st!==S)&&(i.blendEquationSeparate(re[yt],re[st]),f=yt,S=st),(rt!==T||bt!==b||tt!==A||dt!==R)&&(i.blendFuncSeparate(Wt[rt],Wt[bt],Wt[tt],Wt[dt]),T=rt,b=bt,A=tt,R=dt),(Xt.equals(C)===!1||fe!==N)&&(i.blendColor(Xt.r,Xt.g,Xt.b,fe),C.copy(Xt),N=fe),g=D,v=!1}function nt(D,yt){D.side===an?xt(i.CULL_FACE):J(i.CULL_FACE);let rt=D.side===Fe;yt&&(rt=!rt),et(rt),D.blending===hi&&D.transparent===!1?K(In):K(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const bt=D.stencilWrite;a.setTest(bt),bt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function gt(D){D!==bh?(J(i.CULL_FACE),D!==L&&(D===Ka?i.cullFace(i.BACK):D===wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),L=D}function w(D){D!==O&&(G&&i.lineWidth(D),O=D)}function Ut(D,yt,rt){D?(J(i.POLYGON_OFFSET_FILL),(B!==yt||Y!==rt)&&(i.polygonOffset(yt,rt),B=yt,Y=rt)):xt(i.POLYGON_OFFSET_FILL)}function Et(D){D?J(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Bt(D){D===void 0&&(D=i.TEXTURE0+k-1),ct!==D&&(i.activeTexture(D),ct=D)}function at(D,yt,rt){rt===void 0&&(ct===null?rt=i.TEXTURE0+k-1:rt=ct);let bt=ot[rt];bt===void 0&&(bt={type:void 0,texture:void 0},ot[rt]=bt),(bt.type!==D||bt.texture!==yt)&&(ct!==rt&&(i.activeTexture(rt),ct=rt),i.bindTexture(D,yt||V[D]),bt.type=D,bt.texture=yt)}function E(){const D=ot[ct];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(D){te("WebGLState:",D)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(D){te("WebGLState:",D)}}function X(){try{i.texSubImage2D(...arguments)}catch(D){te("WebGLState:",D)}}function Q(){try{i.texSubImage3D(...arguments)}catch(D){te("WebGLState:",D)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(D){te("WebGLState:",D)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){te("WebGLState:",D)}}function ht(){try{i.texStorage2D(...arguments)}catch(D){te("WebGLState:",D)}}function Rt(){try{i.texStorage3D(...arguments)}catch(D){te("WebGLState:",D)}}function zt(){try{i.texImage2D(...arguments)}catch(D){te("WebGLState:",D)}}function it(){try{i.texImage3D(...arguments)}catch(D){te("WebGLState:",D)}}function pt(D){mt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),mt.copy(D))}function Ct(D){Gt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Gt.copy(D))}function Lt(D,yt){let rt=c.get(yt);rt===void 0&&(rt=new WeakMap,c.set(yt,rt));let bt=rt.get(D);bt===void 0&&(bt=i.getUniformBlockIndex(yt,D.name),rt.set(D,bt))}function ft(D,yt){const bt=c.get(yt).get(D);l.get(yt)!==bt&&(i.uniformBlockBinding(yt,bt,D.__bindingPointIndex),l.set(yt,bt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,ot={},u={},d=new WeakMap,p=[],m=null,x=!1,g=null,f=null,T=null,b=null,S=null,A=null,R=null,C=new jt(0,0,0),N=0,v=!1,y=null,L=null,O=null,B=null,Y=null,mt.set(0,0,i.canvas.width,i.canvas.height),Gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:xt,bindFramebuffer:Dt,drawBuffers:St,useProgram:Qt,setBlending:K,setMaterial:nt,setFlipSided:et,setCullFace:gt,setLineWidth:w,setPolygonOffset:Ut,setScissorTest:Et,activeTexture:Bt,bindTexture:at,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:zt,texImage3D:it,updateUBOMapping:Lt,uniformBlockBinding:ft,texStorage2D:ht,texStorage3D:Rt,texSubImage2D:X,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Pt,scissor:pt,viewport:Ct,reset:$t}}function Eg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,_){return p?new OffscreenCanvas(E,_):Sr("canvas")}function x(E,_,I){let X=1;const Q=at(E);if((Q.width>I||Q.height>I)&&(X=I/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(X*Q.width),Pt=Math.floor(X*Q.height);u===void 0&&(u=m(q,Pt));const ht=_?m(q,Pt):u;return ht.width=q,ht.height=Pt,ht.getContext("2d").drawImage(E,0,0,q,Pt),Vt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Pt+")."),ht}else return"data"in E&&Vt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function g(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,_,I,X,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=_;if(_===i.RED&&(I===i.FLOAT&&(q=i.R32F),I===i.HALF_FLOAT&&(q=i.R16F),I===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.R8UI),I===i.UNSIGNED_SHORT&&(q=i.R16UI),I===i.UNSIGNED_INT&&(q=i.R32UI),I===i.BYTE&&(q=i.R8I),I===i.SHORT&&(q=i.R16I),I===i.INT&&(q=i.R32I)),_===i.RG&&(I===i.FLOAT&&(q=i.RG32F),I===i.HALF_FLOAT&&(q=i.RG16F),I===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RG8UI),I===i.UNSIGNED_SHORT&&(q=i.RG16UI),I===i.UNSIGNED_INT&&(q=i.RG32UI),I===i.BYTE&&(q=i.RG8I),I===i.SHORT&&(q=i.RG16I),I===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RGB8UI),I===i.UNSIGNED_SHORT&&(q=i.RGB16UI),I===i.UNSIGNED_INT&&(q=i.RGB32UI),I===i.BYTE&&(q=i.RGB8I),I===i.SHORT&&(q=i.RGB16I),I===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),I===i.UNSIGNED_INT&&(q=i.RGBA32UI),I===i.BYTE&&(q=i.RGBA8I),I===i.SHORT&&(q=i.RGBA16I),I===i.INT&&(q=i.RGBA32I)),_===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),_===i.RGBA){const Pt=Q?Mr:ee.getTransfer(X);I===i.FLOAT&&(q=i.RGBA32F),I===i.HALF_FLOAT&&(q=i.RGBA16F),I===i.UNSIGNED_BYTE&&(q=Pt===le?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(E,_){let I;return E?_===null||_===En||_===_s?I=i.DEPTH24_STENCIL8:_===mn?I=i.DEPTH32F_STENCIL8:_===gs&&(I=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===En||_===_s?I=i.DEPTH_COMPONENT24:_===mn?I=i.DEPTH_COMPONENT32F:_===gs&&(I=i.DEPTH_COMPONENT16),I}function A(E,_){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ae&&E.minFilter!==Pe?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function R(E){const _=E.target;_.removeEventListener("dispose",R),N(_),_.isVideoTexture&&h.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),y(_)}function N(E){const _=n.get(E);if(_.__webglInit===void 0)return;const I=E.source,X=d.get(I);if(X){const Q=X[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(E),Object.keys(X).length===0&&d.delete(I)}n.remove(E)}function v(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const I=E.source,X=d.get(I);delete X[_.__cacheKey],o.memory.textures--}function y(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Q=0;Q<_.__webglFramebuffer[X].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[X][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=E.textures;for(let X=0,Q=I.length;X<Q;X++){const q=n.get(I[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(I[X])}n.remove(E)}let L=0;function O(){L=0}function B(){const E=L;return E>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function Y(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function k(E,_){const I=n.get(E);if(E.isVideoTexture&&Et(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&I.__version!==E.version){const X=E.image;if(X===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(I,E,_);return}}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+_)}function G(E,_){const I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){V(I,E,_);return}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+_)}function z(E,_){const I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){V(I,E,_);return}e.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+_)}function j(E,_){const I=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&I.__version!==E.version){J(I,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+_)}const ct={[oi]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Fo]:i.MIRRORED_REPEAT},ot={[Ae]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[Pe]:i.LINEAR,[Vr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},$={[$h]:i.NEVER,[tu]:i.ALWAYS,[Jh]:i.LESS,[La]:i.LEQUAL,[Kh]:i.EQUAL,[Da]:i.GEQUAL,[jh]:i.GREATER,[Qh]:i.NOTEQUAL};function lt(E,_){if(_.type===mn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Pe||_.magFilter===Vr||_.magFilter===Is||_.magFilter===ai||_.minFilter===Pe||_.minFilter===Vr||_.minFilter===Is||_.minFilter===ai)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ct[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ct[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ct[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ot[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ot[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,$[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ae||_.minFilter!==Is&&_.minFilter!==ai||_.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function mt(E,_){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",R));const X=_.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const q=Y(_);if(q!==E.__cacheKey){Q[q]===void 0&&(Q[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Q[q].usedTimes++;const Pt=Q[E.__cacheKey];Pt!==void 0&&(Q[E.__cacheKey].usedTimes--,Pt.usedTimes===0&&v(_)),E.__cacheKey=q,E.__webglTexture=Q[q].texture}return I}function Gt(E,_,I){return Math.floor(Math.floor(E/I)/_)}function Tt(E,_,I,X){const q=E.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,I,X,_.data);else{q.sort((it,pt)=>it.start-pt.start);let Pt=0;for(let it=1;it<q.length;it++){const pt=q[Pt],Ct=q[it],Lt=pt.start+pt.count,ft=Gt(Ct.start,_.width,4),$t=Gt(pt.start,_.width,4);Ct.start<=Lt+1&&ft===$t&&Gt(Ct.start+Ct.count-1,_.width,4)===ft?pt.count=Math.max(pt.count,Ct.start+Ct.count-pt.start):(++Pt,q[Pt]=Ct)}q.length=Pt+1;const ht=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),zt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let it=0,pt=q.length;it<pt;it++){const Ct=q[it],Lt=Math.floor(Ct.start/4),ft=Math.ceil(Ct.count/4),$t=Lt%_.width,D=Math.floor(Lt/_.width),yt=ft,rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,$t,D,yt,rt,I,X,_.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,zt)}}function V(E,_,I){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const Q=mt(E,_),q=_.source;e.bindTexture(X,E.__webglTexture,i.TEXTURE0+I);const Pt=n.get(q);if(q.version!==Pt.__version||Q===!0){e.activeTexture(i.TEXTURE0+I);const ht=ee.getPrimaries(ee.workingColorSpace),Rt=_.colorSpace===Wn?null:ee.getPrimaries(_.colorSpace),zt=_.colorSpace===Wn||ht===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let it=x(_.image,!1,s.maxTextureSize);it=Bt(_,it);const pt=r.convert(_.format,_.colorSpace),Ct=r.convert(_.type);let Lt=b(_.internalFormat,pt,Ct,_.colorSpace,_.isVideoTexture);lt(X,_);let ft;const $t=_.mipmaps,D=_.isVideoTexture!==!0,yt=Pt.__version===void 0||Q===!0,rt=q.dataReady,bt=A(_,it);if(_.isDepthTexture)Lt=S(_.format===li,_.type),yt&&(D?e.texStorage2D(i.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Lt,it.width,it.height,0,pt,Ct,null));else if(_.isDataTexture)if($t.length>0){D&&yt&&e.texStorage2D(i.TEXTURE_2D,bt,Lt,$t[0].width,$t[0].height);for(let st=0,tt=$t.length;st<tt;st++)ft=$t[st],D?rt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,pt,Ct,ft.data):e.texImage2D(i.TEXTURE_2D,st,Lt,ft.width,ft.height,0,pt,Ct,ft.data);_.generateMipmaps=!1}else D?(yt&&e.texStorage2D(i.TEXTURE_2D,bt,Lt,it.width,it.height),rt&&Tt(_,it,pt,Ct)):e.texImage2D(i.TEXTURE_2D,0,Lt,it.width,it.height,0,pt,Ct,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Lt,$t[0].width,$t[0].height,it.depth);for(let st=0,tt=$t.length;st<tt;st++)if(ft=$t[st],_.format!==hn)if(pt!==null)if(D){if(rt)if(_.layerUpdates.size>0){const dt=Nl(ft.width,ft.height,_.format,_.type);for(const Xt of _.layerUpdates){const fe=ft.data.subarray(Xt*dt/ft.data.BYTES_PER_ELEMENT,(Xt+1)*dt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Xt,ft.width,ft.height,1,pt,fe)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,it.depth,pt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Lt,ft.width,ft.height,it.depth,0,ft.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,it.depth,pt,Ct,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Lt,ft.width,ft.height,it.depth,0,pt,Ct,ft.data)}else{D&&yt&&e.texStorage2D(i.TEXTURE_2D,bt,Lt,$t[0].width,$t[0].height);for(let st=0,tt=$t.length;st<tt;st++)ft=$t[st],_.format!==hn?pt!==null?D?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,pt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Lt,ft.width,ft.height,0,ft.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?rt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,pt,Ct,ft.data):e.texImage2D(i.TEXTURE_2D,st,Lt,ft.width,ft.height,0,pt,Ct,ft.data)}else if(_.isDataArrayTexture)if(D){if(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Lt,it.width,it.height,it.depth),rt)if(_.layerUpdates.size>0){const st=Nl(it.width,it.height,_.format,_.type);for(const tt of _.layerUpdates){const dt=it.data.subarray(tt*st/it.data.BYTES_PER_ELEMENT,(tt+1)*st/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,it.width,it.height,1,pt,Ct,dt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,Ct,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,pt,Ct,it.data);else if(_.isData3DTexture)D?(yt&&e.texStorage3D(i.TEXTURE_3D,bt,Lt,it.width,it.height,it.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,Ct,it.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,pt,Ct,it.data);else if(_.isFramebufferTexture){if(yt)if(D)e.texStorage2D(i.TEXTURE_2D,bt,Lt,it.width,it.height);else{let st=it.width,tt=it.height;for(let dt=0;dt<bt;dt++)e.texImage2D(i.TEXTURE_2D,dt,Lt,st,tt,0,pt,Ct,null),st>>=1,tt>>=1}}else if($t.length>0){if(D&&yt){const st=at($t[0]);e.texStorage2D(i.TEXTURE_2D,bt,Lt,st.width,st.height)}for(let st=0,tt=$t.length;st<tt;st++)ft=$t[st],D?rt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,pt,Ct,ft):e.texImage2D(i.TEXTURE_2D,st,Lt,pt,Ct,ft);_.generateMipmaps=!1}else if(D){if(yt){const st=at(it);e.texStorage2D(i.TEXTURE_2D,bt,Lt,st.width,st.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ct,it)}else e.texImage2D(i.TEXTURE_2D,0,Lt,pt,Ct,it);g(_)&&f(X),Pt.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function J(E,_,I){if(_.image.length!==6)return;const X=mt(E,_),Q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+I);const q=n.get(Q);if(Q.version!==q.__version||X===!0){e.activeTexture(i.TEXTURE0+I);const Pt=ee.getPrimaries(ee.workingColorSpace),ht=_.colorSpace===Wn?null:ee.getPrimaries(_.colorSpace),Rt=_.colorSpace===Wn||Pt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const zt=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let tt=0;tt<6;tt++)!zt&&!it?pt[tt]=x(_.image[tt],!0,s.maxCubemapSize):pt[tt]=it?_.image[tt].image:_.image[tt],pt[tt]=Bt(_,pt[tt]);const Ct=pt[0],Lt=r.convert(_.format,_.colorSpace),ft=r.convert(_.type),$t=b(_.internalFormat,Lt,ft,_.colorSpace),D=_.isVideoTexture!==!0,yt=q.__version===void 0||X===!0,rt=Q.dataReady;let bt=A(_,Ct);lt(i.TEXTURE_CUBE_MAP,_);let st;if(zt){D&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,$t,Ct.width,Ct.height);for(let tt=0;tt<6;tt++){st=pt[tt].mipmaps;for(let dt=0;dt<st.length;dt++){const Xt=st[dt];_.format!==hn?Lt!==null?D?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,Xt.width,Xt.height,Lt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,$t,Xt.width,Xt.height,0,Xt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,0,0,Xt.width,Xt.height,Lt,ft,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt,$t,Xt.width,Xt.height,0,Lt,ft,Xt.data)}}}else{if(st=_.mipmaps,D&&yt){st.length>0&&bt++;const tt=at(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(it){D?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,pt[tt].width,pt[tt].height,Lt,ft,pt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,pt[tt].width,pt[tt].height,0,Lt,ft,pt[tt].data);for(let dt=0;dt<st.length;dt++){const fe=st[dt].image[tt].image;D?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,fe.width,fe.height,Lt,ft,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,$t,fe.width,fe.height,0,Lt,ft,fe.data)}}else{D?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,ft,pt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,Lt,ft,pt[tt]);for(let dt=0;dt<st.length;dt++){const Xt=st[dt];D?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,0,0,Lt,ft,Xt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,dt+1,$t,Lt,ft,Xt.image[tt])}}}g(_)&&f(i.TEXTURE_CUBE_MAP),q.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function xt(E,_,I,X,Q,q){const Pt=r.convert(I.format,I.colorSpace),ht=r.convert(I.type),Rt=b(I.internalFormat,Pt,ht,I.colorSpace),zt=n.get(_),it=n.get(I);if(it.__renderTarget=_,!zt.__hasExternalTextures){const pt=Math.max(1,_.width>>q),Ct=Math.max(1,_.height>>q);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,Rt,pt,Ct,_.depth,0,Pt,ht,null):e.texImage2D(Q,q,Rt,pt,Ct,0,Pt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Ut(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Q,it.__webglTexture,0,w(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Q,it.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(E,_,I){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const X=_.depthTexture,Q=X&&X.isDepthTexture?X.type:null,q=S(_.stencilBuffer,Q),Pt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ut(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,w(_),q,_.width,_.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,w(_),q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,E)}else{const X=_.textures;for(let Q=0;Q<X.length;Q++){const q=X[Q],Pt=r.convert(q.format,q.colorSpace),ht=r.convert(q.type),Rt=b(q.internalFormat,Pt,ht,q.colorSpace);Ut(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,w(_),Rt,_.width,_.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,w(_),Rt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(E,_,I){const X=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),lt(i.TEXTURE_CUBE_MAP,_.depthTexture);const zt=r.convert(_.depthTexture.format),it=r.convert(_.depthTexture.type);let pt;_.depthTexture.format===Fn?pt=i.DEPTH_COMPONENT24:_.depthTexture.format===li&&(pt=i.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,pt,_.width,_.height,0,zt,it,null)}}else k(_.depthTexture,0);const q=Q.__webglTexture,Pt=w(_),ht=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,Rt=_.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Fn)Ut(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,ht,q,0,Pt):i.framebufferTexture2D(i.FRAMEBUFFER,Rt,ht,q,0);else if(_.depthTexture.format===li)Ut(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,ht,q,0,Pt):i.framebufferTexture2D(i.FRAMEBUFFER,Rt,ht,q,0);else throw new Error("Unknown depthTexture format")}function Qt(E){const _=n.get(E),I=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const X=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=X}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(I)for(let X=0;X<6;X++)St(_.__webglFramebuffer[X],E,X);else{const X=E.texture.mipmaps;X&&X.length>0?St(_.__webglFramebuffer[0],E,0):St(_.__webglFramebuffer,E,0)}else if(I){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),Dt(_.__webglDepthbuffer[X],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}else{const X=E.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Dt(_.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(E,_,I){const X=n.get(E);_!==void 0&&xt(X.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Qt(E)}function Wt(E){const _=E.texture,I=n.get(E),X=n.get(_);E.addEventListener("dispose",C);const Q=E.textures,q=E.isWebGLCubeRenderTarget===!0,Pt=Q.length>1;if(Pt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,o.memory.textures++),q){I.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[ht]=[];for(let Rt=0;Rt<_.mipmaps.length;Rt++)I.__webglFramebuffer[ht][Rt]=i.createFramebuffer()}else I.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let ht=0;ht<_.mipmaps.length;ht++)I.__webglFramebuffer[ht]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let ht=0,Rt=Q.length;ht<Rt;ht++){const zt=n.get(Q[ht]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Ut(E)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){const Rt=Q[ht];I.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ht]);const zt=r.convert(Rt.format,Rt.colorSpace),it=r.convert(Rt.type),pt=b(Rt.internalFormat,zt,it,Rt.colorSpace,E.isXRRenderTarget===!0),Ct=w(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,pt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,I.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(I.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),lt(i.TEXTURE_CUBE_MAP,_);for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)xt(I.__webglFramebuffer[ht][Rt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Rt);else xt(I.__webglFramebuffer[ht],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ht=0,Rt=Q.length;ht<Rt;ht++){const zt=Q[ht],it=n.get(zt);let pt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,it.__webglTexture),lt(pt,zt),xt(I.__webglFramebuffer,E,zt,i.COLOR_ATTACHMENT0+ht,pt,0),g(zt)&&f(pt)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,X.__webglTexture),lt(ht,_),_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)xt(I.__webglFramebuffer[Rt],E,_,i.COLOR_ATTACHMENT0,ht,Rt);else xt(I.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,ht,0);g(_)&&f(ht),e.unbindTexture()}E.depthBuffer&&Qt(E)}function K(E){const _=E.textures;for(let I=0,X=_.length;I<X;I++){const Q=_[I];if(g(Q)){const q=T(E),Pt=n.get(Q).__webglTexture;e.bindTexture(q,Pt),f(q),e.unbindTexture()}}}const nt=[],et=[];function gt(E){if(E.samples>0){if(Ut(E)===!1){const _=E.textures,I=E.width,X=E.height;let Q=i.COLOR_BUFFER_BIT;const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(E),ht=_.length>1;if(ht)for(let zt=0;zt<_.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Rt=E.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let zt=0;zt<_.length;zt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[zt]);const it=n.get(_[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,I,X,0,0,I,X,Q,i.NEAREST),l===!0&&(nt.length=0,et.length=0,nt.push(i.COLOR_ATTACHMENT0+zt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(nt.push(q),et.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let zt=0;zt<_.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[zt]);const it=n.get(_[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function w(E){return Math.min(s.maxSamples,E.samples)}function Ut(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Et(E){const _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Bt(E,_){const I=E.colorSpace,X=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==Hi&&I!==Wn&&(ee.getTransfer(I)===le?(X!==hn||Q!==Ye)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",I)),_}function at(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=re,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function bg(i,t){function e(n,s=Wn){let r;const o=ee.getTransfer(s);if(n===Ye)return i.UNSIGNED_BYTE;if(n===Ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ec)return i.BYTE;if(n===bc)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===wa)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===Ac)return i.ALPHA;if(n===Rc)return i.RGB;if(n===hn)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===Cc)return i.RED;if(n===Ra)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===Ca)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===zo||n===ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===Yo||n===qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vo||n===Ho)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Go)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wo)return r.COMPRESSED_R11_EAC;if(n===Xo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Yo)return r.COMPRESSED_RG11_EAC;if(n===qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zo||n===$o||n===Jo||n===Ko||n===jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ea)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===ca||n===ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===la)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
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

}`;class Ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Xc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:wg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new _n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rg extends Xi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null;const x=typeof XRWebGLBinding<"u",g=new Ag,f={},T=e.getContextAttributes();let b=null,S=null;const A=[],R=[],C=new ut;let N=null;const v=new We;v.viewport=new xe;const y=new We;y.viewport=new xe;const L=[v,y],O=new Fd;let B=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=A[V];return J===void 0&&(J=new lo,A[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=A[V];return J===void 0&&(J=new lo,A[V]=J),J.getGripSpace()},this.getHand=function(V){let J=A[V];return J===void 0&&(J=new lo,A[V]=J),J.getHandSpace()};function k(V){const J=R.indexOf(V.inputSource);if(J===-1)return;const xt=A[J];xt!==void 0&&(xt.update(V.inputSource,V.frame,c||o),xt.dispatchEvent({type:V.type,data:V.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",z);for(let V=0;V<A.length;V++){const J=R[V];J!==null&&(R[V]=null,A[V].disconnect(J))}B=null,Y=null,g.reset();for(const V in f)delete f[V];t.setRenderTarget(b),p=null,d=null,u=null,s=null,S=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",z),T.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Dt=null,St=null;T.depth&&(St=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=T.stencil?li:Fn,Dt=T.stencil?_s:En);const Qt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Sn(d.textureWidth,d.textureHeight,{format:hn,type:Ye,depthTexture:new ys(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Sn(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(V){for(let J=0;J<V.removed.length;J++){const xt=V.removed[J],Dt=R.indexOf(xt);Dt>=0&&(R[Dt]=null,A[Dt].disconnect(xt))}for(let J=0;J<V.added.length;J++){const xt=V.added[J];let Dt=R.indexOf(xt);if(Dt===-1){for(let Qt=0;Qt<A.length;Qt++)if(Qt>=R.length){R.push(xt),Dt=Qt;break}else if(R[Qt]===null){R[Qt]=xt,Dt=Qt;break}if(Dt===-1)break}const St=A[Dt];St&&St.connect(xt)}}const j=new P,ct=new P;function ot(V,J,xt){j.setFromMatrixPosition(J.matrixWorld),ct.setFromMatrixPosition(xt.matrixWorld);const Dt=j.distanceTo(ct),St=J.projectionMatrix.elements,Qt=xt.projectionMatrix.elements,re=St[14]/(St[10]-1),Wt=St[14]/(St[10]+1),K=(St[9]+1)/St[5],nt=(St[9]-1)/St[5],et=(St[8]-1)/St[0],gt=(Qt[8]+1)/Qt[0],w=re*et,Ut=re*gt,Et=Dt/(-et+gt),Bt=Et*-et;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Bt),V.translateZ(Et),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),St[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const at=re+Et,E=Wt+Et,_=w-Bt,I=Ut+(Dt-Bt),X=K*Wt/E*at,Q=nt*Wt/E*at;V.projectionMatrix.makePerspective(_,I,X,Q,at,E),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function $(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let J=V.near,xt=V.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),O.near=y.near=v.near=J,O.far=y.far=v.far=xt,(B!==O.near||Y!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,Y=O.far),O.layers.mask=V.layers.mask|6,v.layers.mask=O.layers.mask&3,y.layers.mask=O.layers.mask&5;const Dt=V.parent,St=O.cameras;$(O,Dt);for(let Qt=0;Qt<St.length;Qt++)$(St[Qt],Dt);St.length===2?ot(O,v,y):O.projectionMatrix.copy(v.projectionMatrix),lt(V,O,Dt)};function lt(V,J,xt){xt===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(xt.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=vs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(V){return f[V]};let mt=null;function Gt(V,J){if(h=J.getViewerPose(c||o),m=J,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Dt=!1;xt.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let Wt=0;Wt<xt.length;Wt++){const K=xt[Wt];let nt=null;if(p!==null)nt=p.getViewport(K);else{const gt=u.getViewSubImage(d,K);nt=gt.viewport,Wt===0&&(t.setRenderTargetTextures(S,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(S))}let et=L[Wt];et===void 0&&(et=new We,et.layers.enable(Wt),et.viewport=new xe,L[Wt]=et),et.matrix.fromArray(K.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(K.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(nt.x,nt.y,nt.width,nt.height),Wt===0&&(O.matrix.copy(et.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push(et)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Wt=u.getDepthInformation(xt[0]);Wt&&Wt.isValid&&Wt.texture&&g.init(Wt,s.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Wt=0;Wt<xt.length;Wt++){const K=xt[Wt].camera;if(K){let nt=f[K];nt||(nt=new Xc,f[K]=nt);const et=u.getCameraImage(K);nt.sourceTexture=et}}}}for(let xt=0;xt<A.length;xt++){const Dt=R[xt],St=A[xt];Dt!==null&&St!==void 0&&St.update(Dt,J,c||o)}mt&&mt(V,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Tt=new ih;Tt.setAnimationLoop(Gt),this.setAnimationLoop=function(V){mt=V},this.dispose=function(){}}}const ni=new qe,Cg=new de;function Pg(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Fc(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,T,b,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),u(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,S)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),x(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,T,b):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Fe&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Fe&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const T=t.get(f),b=T.envMap,S=T.envMapRotation;b&&(g.envMap.value=b,ni.copy(S),ni.x*=-1,ni.y*=-1,ni.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),g.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(ni)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,T,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*T,g.scale.value=b*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,T){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){const T=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const S=b.program;n.uniformBlockBinding(T,S)}function c(T,b){let S=s[T.id];S===void 0&&(m(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",g));const A=b.program;n.updateUBOMapping(T,A);const R=t.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function h(T){const b=u();T.__bindingPointIndex=b;const S=i.createBuffer(),A=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const b=s[T.id],S=T.uniforms,A=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,C=S.length;R<C;R++){const N=Array.isArray(S[R])?S[R]:[S[R]];for(let v=0,y=N.length;v<y;v++){const L=N[v];if(p(L,R,v,A)===!0){const O=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let k=0;k<B.length;k++){const G=B[k],z=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+Y,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,Y),Y+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,b,S,A){const R=T.value,C=b+"_"+S;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const N=A[C];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return A[C]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function m(T){const b=T.uniforms;let S=0;const A=16;for(let C=0,N=b.length;C<N;C++){const v=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,L=v.length;y<L;y++){const O=v[y],B=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,k=B.length;Y<k;Y++){const G=B[Y],z=x(G),j=S%A,ct=j%z.boundary,ot=j+ct;S+=ct,ot!==0&&A-ot<z.storage&&(S+=A-ot),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=z.storage}}}const R=S%A;return R>0&&(S+=A-R),T.__size=S,T.__cache={},this}function x(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Vt("WebGLRenderer: Unsupported uniform value type.",T),b}function g(T){const b=T.target;b.removeEventListener("dispose",g);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}const Dg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dn=null;function Ig(){return dn===null&&(dn=new Wu(Dg,16,16,Vi,Nn),dn.name="DFG_LUT",dn.minFilter=Pe,dn.magFilter=Pe,dn.wrapS=Dn,dn.wrapT=Dn,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}class Ug{constructor(t={}){const{canvas:e=eu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Ye}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const x=p,g=new Set([Pa,Ca,Ra]),f=new Set([Ye,En,gs,_s,Ta,Aa]),T=new Uint32Array(4),b=new Int32Array(4);let S=null,A=null;const R=[],C=[];let N=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let y=!1;this._outputColorSpace=Ke;let L=0,O=0,B=null,Y=-1,k=null;const G=new xe,z=new xe;let j=null;const ct=new jt(0);let ot=0,$=e.width,lt=e.height,mt=1,Gt=null,Tt=null;const V=new xe(0,0,$,lt),J=new xe(0,0,$,lt);let xt=!1;const Dt=new Oa;let St=!1,Qt=!1;const re=new de,Wt=new P,K=new xe,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function gt(){return B===null?mt:1}let w=n;function Ut(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ba}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",oe,!1),w===null){const U="webgl2";if(w=Ut(U,M),w===null)throw Ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw te("WebGLRenderer: "+M.message),M}let Et,Bt,at,E,_,I,X,Q,q,Pt,ht,Rt,zt,it,pt,Ct,Lt,ft,$t,D,yt,rt,bt,st;function tt(){Et=new Im(w),Et.init(),rt=new bg(w,Et),Bt=new bm(w,Et,t,rt),at=new Sg(w,Et),Bt.reversedDepthBuffer&&d&&at.buffers.depth.setReversed(!0),E=new Fm(w),_=new ag,I=new Eg(w,Et,at,_,Bt,rt,E),X=new Tm(v),Q=new Dm(v),q=new zd(w),bt=new Sm(w,q),Pt=new Um(w,q,E,bt),ht=new Bm(w,Pt,q,E),$t=new Om(w,Bt,I),Ct=new wm(_),Rt=new og(v,X,Q,Et,Bt,bt,Ct),zt=new Pg(v,_),it=new cg,pt=new mg(Et),ft=new ym(v,X,Q,at,ht,m,l),Lt=new Mg(v,ht,Bt),st=new Lg(w,E,Bt,at),D=new Em(w,Et,E),yt=new Nm(w,Et,E),E.programs=Rt.programs,v.capabilities=Bt,v.extensions=Et,v.properties=_,v.renderLists=it,v.shadowMap=Lt,v.state=at,v.info=E}tt(),x!==Ye&&(N=new km(x,e.width,e.height,s,r));const dt=new Rg(v,w);this.xr=dt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=Et.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Et.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(M){M!==void 0&&(mt=M,this.setSize($,lt,!1))},this.getSize=function(M){return M.set($,lt)},this.setSize=function(M,U,W=!0){if(dt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,lt=U,e.width=Math.floor(M*mt),e.height=Math.floor(U*mt),W===!0&&(e.style.width=M+"px",e.style.height=U+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set($*mt,lt*mt).floor()},this.setDrawingBufferSize=function(M,U,W){$=M,lt=U,mt=W,e.width=Math.floor(M*W),e.height=Math.floor(U*W),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(x===Ye){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(G)},this.getViewport=function(M){return M.copy(V)},this.setViewport=function(M,U,W,H){M.isVector4?V.set(M.x,M.y,M.z,M.w):V.set(M,U,W,H),at.viewport(G.copy(V).multiplyScalar(mt).round())},this.getScissor=function(M){return M.copy(J)},this.setScissor=function(M,U,W,H){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,U,W,H),at.scissor(z.copy(J).multiplyScalar(mt).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(M){at.setScissorTest(xt=M)},this.setOpaqueSort=function(M){Gt=M},this.setTransparentSort=function(M){Tt=M},this.getClearColor=function(M){return M.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,W=!0){let H=0;if(M){let F=!1;if(B!==null){const _t=B.texture.format;F=g.has(_t)}if(F){const _t=B.texture.type,wt=f.has(_t),Mt=ft.getClearColor(),At=ft.getClearAlpha(),It=Mt.r,kt=Mt.g,Nt=Mt.b;wt?(T[0]=It,T[1]=kt,T[2]=Nt,T[3]=At,w.clearBufferuiv(w.COLOR,0,T)):(b[0]=It,b[1]=kt,b[2]=Nt,b[3]=At,w.clearBufferiv(w.COLOR,0,b))}else H|=w.COLOR_BUFFER_BIT}U&&(H|=w.DEPTH_BUFFER_BIT),W&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",oe,!1),ft.dispose(),it.dispose(),pt.dispose(),_.dispose(),X.dispose(),Q.dispose(),ht.dispose(),bt.dispose(),st.dispose(),Rt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Wa),dt.removeEventListener("sessionend",Xa),$n.stop()};function Xt(M){M.preventDefault(),Er("WebGLRenderer: Context Lost."),y=!0}function fe(){Er("WebGLRenderer: Context Restored."),y=!1;const M=E.autoReset,U=Lt.enabled,W=Lt.autoUpdate,H=Lt.needsUpdate,F=Lt.type;tt(),E.autoReset=M,Lt.enabled=U,Lt.autoUpdate=W,Lt.needsUpdate=H,Lt.type=F}function oe(M){te("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function un(M){const U=M.target;U.removeEventListener("dispose",un),Tn(U)}function Tn(M){gh(M),_.remove(M)}function gh(M){const U=_.get(M).programs;U!==void 0&&(U.forEach(function(W){Rt.releaseProgram(W)}),M.isShaderMaterial&&Rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,W,H,F,_t){U===null&&(U=nt);const wt=F.isMesh&&F.matrixWorld.determinant()<0,Mt=xh(M,U,W,H,F);at.setMaterial(H,wt);let At=W.index,It=1;if(H.wireframe===!0){if(At=Pt.getWireframeAttribute(W),At===void 0)return;It=2}const kt=W.drawRange,Nt=W.attributes.position;let Jt=kt.start*It,he=(kt.start+kt.count)*It;_t!==null&&(Jt=Math.max(Jt,_t.start*It),he=Math.min(he,(_t.start+_t.count)*It)),At!==null?(Jt=Math.max(Jt,0),he=Math.min(he,At.count)):Nt!=null&&(Jt=Math.max(Jt,0),he=Math.min(he,Nt.count));const ge=he-Jt;if(ge<0||ge===1/0)return;bt.setup(F,H,Mt,W,At);let _e,ue=D;if(At!==null&&(_e=q.get(At),ue=yt,ue.setIndex(_e)),F.isMesh)H.wireframe===!0?(at.setLineWidth(H.wireframeLinewidth*gt()),ue.setMode(w.LINES)):ue.setMode(w.TRIANGLES);else if(F.isLine){let Ft=H.linewidth;Ft===void 0&&(Ft=1),at.setLineWidth(Ft*gt()),F.isLineSegments?ue.setMode(w.LINES):F.isLineLoop?ue.setMode(w.LINE_LOOP):ue.setMode(w.LINE_STRIP)}else F.isPoints?ue.setMode(w.POINTS):F.isSprite&&ue.setMode(w.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)xs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))ue.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ft=F._multiDrawStarts,ae=F._multiDrawCounts,ne=F._multiDrawCount,ke=At?q.get(At).bytesPerElement:1,mi=_.get(H).currentProgram.getUniforms();for(let Ve=0;Ve<ne;Ve++)mi.setValue(w,"_gl_DrawID",Ve),ue.render(Ft[Ve]/ke,ae[Ve])}else if(F.isInstancedMesh)ue.renderInstances(Jt,ge,F.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ae=Math.min(W.instanceCount,Ft);ue.renderInstances(Jt,ge,ae)}else ue.render(Jt,ge)};function Ga(M,U,W){M.transparent===!0&&M.side===an&&M.forceSinglePass===!1?(M.side=Fe,M.needsUpdate=!0,Ds(M,U,W),M.side=Yn,M.needsUpdate=!0,Ds(M,U,W),M.side=an):Ds(M,U,W)}this.compile=function(M,U,W=null){W===null&&(W=M),A=pt.get(W),A.init(U),C.push(A),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),M!==W&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),A.setupLights();const H=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const _t=F.material;if(_t)if(Array.isArray(_t))for(let wt=0;wt<_t.length;wt++){const Mt=_t[wt];Ga(Mt,W,F),H.add(Mt)}else Ga(_t,W,F),H.add(_t)}),A=C.pop(),H},this.compileAsync=function(M,U,W=null){const H=this.compile(M,U,W);return new Promise(F=>{function _t(){if(H.forEach(function(wt){_.get(wt).currentProgram.isReady()&&H.delete(wt)}),H.size===0){F(M);return}setTimeout(_t,10)}Et.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Br=null;function _h(M){Br&&Br(M)}function Wa(){$n.stop()}function Xa(){$n.start()}const $n=new ih;$n.setAnimationLoop(_h),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(M){Br=M,dt.setAnimationLoop(M),M===null?$n.stop():$n.start()},dt.addEventListener("sessionstart",Wa),dt.addEventListener("sessionend",Xa),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const W=dt.enabled===!0&&dt.isPresenting===!0,H=N!==null&&(B===null||W)&&N.begin(v,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(U),U=dt.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,B),A=pt.get(M,C.length),A.init(U),C.push(A),re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Dt.setFromProjectionMatrix(re,gn,U.reversedDepth),Qt=this.localClippingEnabled,St=Ct.init(this.clippingPlanes,Qt),S=it.get(M,R.length),S.init(),R.push(S),dt.enabled===!0&&dt.isPresenting===!0){const wt=v.xr.getDepthSensingMesh();wt!==null&&zr(wt,U,-1/0,v.sortObjects)}zr(M,U,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(Gt,Tt),et=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,et&&ft.addToRenderList(S,M),this.info.render.frame++,St===!0&&Ct.beginShadows();const F=A.state.shadowsArray;if(Lt.render(F,M,U),St===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&N.hasRenderPass())===!1){const wt=S.opaque,Mt=S.transmissive;if(A.setupLights(),U.isArrayCamera){const At=U.cameras;if(Mt.length>0)for(let It=0,kt=At.length;It<kt;It++){const Nt=At[It];qa(wt,Mt,M,Nt)}et&&ft.render(M);for(let It=0,kt=At.length;It<kt;It++){const Nt=At[It];Ya(S,M,Nt,Nt.viewport)}}else Mt.length>0&&qa(wt,Mt,M,U),et&&ft.render(M),Ya(S,M,U)}B!==null&&O===0&&(I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B)),H&&N.end(v),M.isScene===!0&&M.onAfterRender(v,M,U),bt.resetDefaultState(),Y=-1,k=null,C.pop(),C.length>0?(A=C[C.length-1],St===!0&&Ct.setGlobalState(v.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function zr(M,U,W,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Dt.intersectsSprite(M)){H&&K.setFromMatrixPosition(M.matrixWorld).applyMatrix4(re);const wt=ht.update(M),Mt=M.material;Mt.visible&&S.push(M,wt,Mt,W,K.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Dt.intersectsObject(M))){const wt=ht.update(M),Mt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),K.copy(M.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),K.copy(wt.boundingSphere.center)),K.applyMatrix4(M.matrixWorld).applyMatrix4(re)),Array.isArray(Mt)){const At=wt.groups;for(let It=0,kt=At.length;It<kt;It++){const Nt=At[It],Jt=Mt[Nt.materialIndex];Jt&&Jt.visible&&S.push(M,wt,Jt,W,K.z,Nt)}}else Mt.visible&&S.push(M,wt,Mt,W,K.z,null)}}const _t=M.children;for(let wt=0,Mt=_t.length;wt<Mt;wt++)zr(_t[wt],U,W,H)}function Ya(M,U,W,H){const{opaque:F,transmissive:_t,transparent:wt}=M;A.setupLightsView(W),St===!0&&Ct.setGlobalState(v.clippingPlanes,W),H&&at.viewport(G.copy(H)),F.length>0&&Ls(F,U,W),_t.length>0&&Ls(_t,U,W),wt.length>0&&Ls(wt,U,W),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function qa(M,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Jt=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Sn(1,1,{generateMipmaps:!0,type:Jt?Nn:Ye,minFilter:ai,samples:Bt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const _t=A.state.transmissionRenderTarget[H.id],wt=H.viewport||G;_t.setSize(wt.z*v.transmissionResolutionScale,wt.w*v.transmissionResolutionScale);const Mt=v.getRenderTarget(),At=v.getActiveCubeFace(),It=v.getActiveMipmapLevel();v.setRenderTarget(_t),v.getClearColor(ct),ot=v.getClearAlpha(),ot<1&&v.setClearColor(16777215,.5),v.clear(),et&&ft.render(W);const kt=v.toneMapping;v.toneMapping=Mn;const Nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),St===!0&&Ct.setGlobalState(v.clippingPlanes,H),Ls(M,W,H),I.updateMultisampleRenderTarget(_t),I.updateRenderTargetMipmap(_t),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let he=0,ge=U.length;he<ge;he++){const _e=U[he],{object:ue,geometry:Ft,material:ae,group:ne}=_e;if(ae.side===an&&ue.layers.test(H.layers)){const ke=ae.side;ae.side=Fe,ae.needsUpdate=!0,Za(ue,W,H,Ft,ae,ne),ae.side=ke,ae.needsUpdate=!0,Jt=!0}}Jt===!0&&(I.updateMultisampleRenderTarget(_t),I.updateRenderTargetMipmap(_t))}v.setRenderTarget(Mt,At,It),v.setClearColor(ct,ot),Nt!==void 0&&(H.viewport=Nt),v.toneMapping=kt}function Ls(M,U,W){const H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,_t=M.length;F<_t;F++){const wt=M[F],{object:Mt,geometry:At,group:It}=wt;let kt=wt.material;kt.allowOverride===!0&&H!==null&&(kt=H),Mt.layers.test(W.layers)&&Za(Mt,U,W,At,kt,It)}}function Za(M,U,W,H,F,_t){M.onBeforeRender(v,U,W,H,F,_t),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(v,U,W,H,M,_t),F.transparent===!0&&F.side===an&&F.forceSinglePass===!1?(F.side=Fe,F.needsUpdate=!0,v.renderBufferDirect(W,U,H,F,M,_t),F.side=Yn,F.needsUpdate=!0,v.renderBufferDirect(W,U,H,F,M,_t),F.side=an):v.renderBufferDirect(W,U,H,F,M,_t),M.onAfterRender(v,U,W,H,F,_t)}function Ds(M,U,W){U.isScene!==!0&&(U=nt);const H=_.get(M),F=A.state.lights,_t=A.state.shadowsArray,wt=F.state.version,Mt=Rt.getParameters(M,F.state,_t,U,W),At=Rt.getProgramCacheKey(Mt);let It=H.programs;H.environment=M.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(M.isMeshStandardMaterial?Q:X).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,It===void 0&&(M.addEventListener("dispose",un),It=new Map,H.programs=It);let kt=It.get(At);if(kt!==void 0){if(H.currentProgram===kt&&H.lightsStateVersion===wt)return Ja(M,Mt),kt}else Mt.uniforms=Rt.getUniforms(M),M.onBeforeCompile(Mt,v),kt=Rt.acquireProgram(Mt,At),It.set(At,kt),H.uniforms=Mt.uniforms;const Nt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Nt.clippingPlanes=Ct.uniform),Ja(M,Mt),H.needsLights=Mh(M),H.lightsStateVersion=wt,H.needsLights&&(Nt.ambientLightColor.value=F.state.ambient,Nt.lightProbe.value=F.state.probe,Nt.directionalLights.value=F.state.directional,Nt.directionalLightShadows.value=F.state.directionalShadow,Nt.spotLights.value=F.state.spot,Nt.spotLightShadows.value=F.state.spotShadow,Nt.rectAreaLights.value=F.state.rectArea,Nt.ltc_1.value=F.state.rectAreaLTC1,Nt.ltc_2.value=F.state.rectAreaLTC2,Nt.pointLights.value=F.state.point,Nt.pointLightShadows.value=F.state.pointShadow,Nt.hemisphereLights.value=F.state.hemi,Nt.directionalShadowMap.value=F.state.directionalShadowMap,Nt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Nt.spotShadowMap.value=F.state.spotShadowMap,Nt.spotLightMatrix.value=F.state.spotLightMatrix,Nt.spotLightMap.value=F.state.spotLightMap,Nt.pointShadowMap.value=F.state.pointShadowMap,Nt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=kt,H.uniformsList=null,kt}function $a(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=vr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ja(M,U){const W=_.get(M);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function xh(M,U,W,H,F){U.isScene!==!0&&(U=nt),I.resetTextureUnits();const _t=U.fog,wt=H.isMeshStandardMaterial?U.environment:null,Mt=B===null?v.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Hi,At=(H.isMeshStandardMaterial?Q:X).get(H.envMap||wt),It=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,kt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Nt=!!W.morphAttributes.position,Jt=!!W.morphAttributes.normal,he=!!W.morphAttributes.color;let ge=Mn;H.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ge=v.toneMapping);const _e=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=_e!==void 0?_e.length:0,Ft=_.get(H),ae=A.state.lights;if(St===!0&&(Qt===!0||M!==k)){const De=M===k&&H.id===Y;Ct.setState(H,M,De)}let ne=!1;H.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ae.state.version||Ft.outputColorSpace!==Mt||F.isBatchedMesh&&Ft.batching===!1||!F.isBatchedMesh&&Ft.batching===!0||F.isBatchedMesh&&Ft.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ft.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ft.instancing===!1||!F.isInstancedMesh&&Ft.instancing===!0||F.isSkinnedMesh&&Ft.skinning===!1||!F.isSkinnedMesh&&Ft.skinning===!0||F.isInstancedMesh&&Ft.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ft.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ft.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ft.instancingMorph===!1&&F.morphTexture!==null||Ft.envMap!==At||H.fog===!0&&Ft.fog!==_t||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Ct.numPlanes||Ft.numIntersection!==Ct.numIntersection)||Ft.vertexAlphas!==It||Ft.vertexTangents!==kt||Ft.morphTargets!==Nt||Ft.morphNormals!==Jt||Ft.morphColors!==he||Ft.toneMapping!==ge||Ft.morphTargetsCount!==ue)&&(ne=!0):(ne=!0,Ft.__version=H.version);let ke=Ft.currentProgram;ne===!0&&(ke=Ds(H,U,F));let mi=!1,Ve=!1,$i=!1;const pe=ke.getUniforms(),Oe=Ft.uniforms;if(at.useProgram(ke.program)&&(mi=!0,Ve=!0,$i=!0),H.id!==Y&&(Y=H.id,Ve=!0),mi||k!==M){at.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pe.setValue(w,"projectionMatrix",M.projectionMatrix),pe.setValue(w,"viewMatrix",M.matrixWorldInverse);const Be=pe.map.cameraPosition;Be!==void 0&&Be.setValue(w,Wt.setFromMatrixPosition(M.matrixWorld)),Bt.logarithmicDepthBuffer&&pe.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pe.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),k!==M&&(k=M,Ve=!0,$i=!0)}if(Ft.needsLights&&(ae.state.directionalShadowMap.length>0&&pe.setValue(w,"directionalShadowMap",ae.state.directionalShadowMap,I),ae.state.spotShadowMap.length>0&&pe.setValue(w,"spotShadowMap",ae.state.spotShadowMap,I),ae.state.pointShadowMap.length>0&&pe.setValue(w,"pointShadowMap",ae.state.pointShadowMap,I)),F.isSkinnedMesh){pe.setOptional(w,F,"bindMatrix"),pe.setOptional(w,F,"bindMatrixInverse");const De=F.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),pe.setValue(w,"boneTexture",De.boneTexture,I))}F.isBatchedMesh&&(pe.setOptional(w,F,"batchingTexture"),pe.setValue(w,"batchingTexture",F._matricesTexture,I),pe.setOptional(w,F,"batchingIdTexture"),pe.setValue(w,"batchingIdTexture",F._indirectTexture,I),pe.setOptional(w,F,"batchingColorTexture"),F._colorsTexture!==null&&pe.setValue(w,"batchingColorTexture",F._colorsTexture,I));const Ze=W.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&$t.update(F,W,ke),(Ve||Ft.receiveShadow!==F.receiveShadow)&&(Ft.receiveShadow=F.receiveShadow,pe.setValue(w,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Oe.envMap.value=At,Oe.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Oe.envMapIntensity.value=U.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=Ig()),Ve&&(pe.setValue(w,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&vh(Oe,$i),_t&&H.fog===!0&&zt.refreshFogUniforms(Oe,_t),zt.refreshMaterialUniforms(Oe,H,mt,lt,A.state.transmissionRenderTarget[M.id]),vr.upload(w,$a(Ft),Oe,I)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(vr.upload(w,$a(Ft),Oe,I),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pe.setValue(w,"center",F.center),pe.setValue(w,"modelViewMatrix",F.modelViewMatrix),pe.setValue(w,"normalMatrix",F.normalMatrix),pe.setValue(w,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const De=H.uniformsGroups;for(let Be=0,kr=De.length;Be<kr;Be++){const Jn=De[Be];st.update(Jn,ke),st.bind(Jn,ke)}}return ke}function vh(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Mh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,U,W){const H=_.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=U,_.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const W=_.get(M);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const yh=w.createFramebuffer();this.setRenderTarget=function(M,U=0,W=0){B=M,L=U,O=W;let H=null,F=!1,_t=!1;if(M){const Mt=_.get(M);if(Mt.__useDefaultFramebuffer!==void 0){at.bindFramebuffer(w.FRAMEBUFFER,Mt.__webglFramebuffer),G.copy(M.viewport),z.copy(M.scissor),j=M.scissorTest,at.viewport(G),at.scissor(z),at.setScissorTest(j),Y=-1;return}else if(Mt.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(Mt.__hasExternalTextures)I.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const kt=M.depthTexture;if(Mt.__boundDepthTexture!==kt){if(kt!==null&&_.has(kt)&&(M.width!==kt.image.width||M.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(_t=!0);const It=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(It[U])?H=It[U][W]:H=It[U],F=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?H=_.get(M).__webglMultisampledFramebuffer:Array.isArray(It)?H=It[W]:H=It,G.copy(M.viewport),z.copy(M.scissor),j=M.scissorTest}else G.copy(V).multiplyScalar(mt).floor(),z.copy(J).multiplyScalar(mt).floor(),j=xt;if(W!==0&&(H=yh),at.bindFramebuffer(w.FRAMEBUFFER,H)&&at.drawBuffers(M,H),at.viewport(G),at.scissor(z),at.setScissorTest(j),F){const Mt=_.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,W)}else if(_t){const Mt=U;for(let At=0;At<M.textures.length;At++){const It=_.get(M.textures[At]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+At,It.__webglTexture,W,Mt)}}else if(M!==null&&W!==0){const Mt=_.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Mt.__webglTexture,W)}Y=-1},this.readRenderTargetPixels=function(M,U,W,H,F,_t,wt,Mt=0){if(!(M&&M.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){at.bindFramebuffer(w.FRAMEBUFFER,At);try{const It=M.textures[Mt],kt=It.format,Nt=It.type;if(!Bt.textureFormatReadable(kt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Nt)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&W>=0&&W<=M.height-F&&(M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Mt),w.readPixels(U,W,H,F,rt.convert(kt),rt.convert(Nt),_t))}finally{const It=B!==null?_.get(B).__webglFramebuffer:null;at.bindFramebuffer(w.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(M,U,W,H,F,_t,wt,Mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At)if(U>=0&&U<=M.width-H&&W>=0&&W<=M.height-F){at.bindFramebuffer(w.FRAMEBUFFER,At);const It=M.textures[Mt],kt=It.format,Nt=It.type;if(!Bt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Jt),w.bufferData(w.PIXEL_PACK_BUFFER,_t.byteLength,w.STREAM_READ),M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Mt),w.readPixels(U,W,H,F,rt.convert(kt),rt.convert(Nt),0);const he=B!==null?_.get(B).__webglFramebuffer:null;at.bindFramebuffer(w.FRAMEBUFFER,he);const ge=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await nu(w,ge,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Jt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,_t),w.deleteBuffer(Jt),w.deleteSync(ge),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,W=0){const H=Math.pow(2,-W),F=Math.floor(M.image.width*H),_t=Math.floor(M.image.height*H),wt=U!==null?U.x:0,Mt=U!==null?U.y:0;I.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,W,0,0,wt,Mt,F,_t),at.unbindTexture()};const Sh=w.createFramebuffer(),Eh=w.createFramebuffer();this.copyTextureToTexture=function(M,U,W=null,H=null,F=0,_t=null){_t===null&&(F!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=F,F=0):_t=0);let wt,Mt,At,It,kt,Nt,Jt,he,ge;const _e=M.isCompressedTexture?M.mipmaps[_t]:M.image;if(W!==null)wt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,At=W.isBox3?W.max.z-W.min.z:1,It=W.min.x,kt=W.min.y,Nt=W.isBox3?W.min.z:0;else{const Ze=Math.pow(2,-F);wt=Math.floor(_e.width*Ze),Mt=Math.floor(_e.height*Ze),M.isDataArrayTexture?At=_e.depth:M.isData3DTexture?At=Math.floor(_e.depth*Ze):At=1,It=0,kt=0,Nt=0}H!==null?(Jt=H.x,he=H.y,ge=H.z):(Jt=0,he=0,ge=0);const ue=rt.convert(U.format),Ft=rt.convert(U.type);let ae;U.isData3DTexture?(I.setTexture3D(U,0),ae=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),ae=w.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),ae=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const ne=w.getParameter(w.UNPACK_ROW_LENGTH),ke=w.getParameter(w.UNPACK_IMAGE_HEIGHT),mi=w.getParameter(w.UNPACK_SKIP_PIXELS),Ve=w.getParameter(w.UNPACK_SKIP_ROWS),$i=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,_e.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_e.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,It),w.pixelStorei(w.UNPACK_SKIP_ROWS,kt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Nt);const pe=M.isDataArrayTexture||M.isData3DTexture,Oe=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Ze=_.get(M),De=_.get(U),Be=_.get(Ze.__renderTarget),kr=_.get(De.__renderTarget);at.bindFramebuffer(w.READ_FRAMEBUFFER,Be.__webglFramebuffer),at.bindFramebuffer(w.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let Jn=0;Jn<At;Jn++)pe&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_.get(M).__webglTexture,F,Nt+Jn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_.get(U).__webglTexture,_t,ge+Jn)),w.blitFramebuffer(It,kt,wt,Mt,Jt,he,wt,Mt,w.DEPTH_BUFFER_BIT,w.NEAREST);at.bindFramebuffer(w.READ_FRAMEBUFFER,null),at.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||_.has(M)){const Ze=_.get(M),De=_.get(U);at.bindFramebuffer(w.READ_FRAMEBUFFER,Sh),at.bindFramebuffer(w.DRAW_FRAMEBUFFER,Eh);for(let Be=0;Be<At;Be++)pe?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ze.__webglTexture,F,Nt+Be):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ze.__webglTexture,F),Oe?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,De.__webglTexture,_t,ge+Be):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,De.__webglTexture,_t),F!==0?w.blitFramebuffer(It,kt,wt,Mt,Jt,he,wt,Mt,w.COLOR_BUFFER_BIT,w.NEAREST):Oe?w.copyTexSubImage3D(ae,_t,Jt,he,ge+Be,It,kt,wt,Mt):w.copyTexSubImage2D(ae,_t,Jt,he,It,kt,wt,Mt);at.bindFramebuffer(w.READ_FRAMEBUFFER,null),at.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Oe?M.isDataTexture||M.isData3DTexture?w.texSubImage3D(ae,_t,Jt,he,ge,wt,Mt,At,ue,Ft,_e.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(ae,_t,Jt,he,ge,wt,Mt,At,ue,_e.data):w.texSubImage3D(ae,_t,Jt,he,ge,wt,Mt,At,ue,Ft,_e):M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,_t,Jt,he,wt,Mt,ue,Ft,_e.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,_t,Jt,he,_e.width,_e.height,ue,_e.data):w.texSubImage2D(w.TEXTURE_2D,_t,Jt,he,wt,Mt,ue,Ft,_e);w.pixelStorei(w.UNPACK_ROW_LENGTH,ne),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ke),w.pixelStorei(w.UNPACK_SKIP_PIXELS,mi),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ve),w.pixelStorei(w.UNPACK_SKIP_IMAGES,$i),_t===0&&U.generateMipmaps&&w.generateMipmap(ae),at.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),at.unbindTexture()},this.resetState=function(){L=0,O=0,B=null,at.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class Ng{constructor(){this.running=!1,this.clock=new Od,this.updateCallbacks=[],this.renderer=new Ug({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fc,document.body.appendChild(this.renderer.domElement),this.scene=new Hu,window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight)})}init(){this.clock.start()}start(t){this.running=!0;const e=()=>{if(!this.running)return;requestAnimationFrame(e);const n=Math.min(this.clock.getDelta(),.05);for(const s of this.updateCallbacks)s(n);this.renderer.render(this.scene,t)};e()}stop(){this.running=!1}onUpdate(t){this.updateCallbacks.push(t)}getRenderer(){return this.renderer}getScene(){return this.scene}getDomElement(){return this.renderer.domElement}}const Ht={PLAYER_SPEED:8,PLAYER_SPRINT_SPEED:12,PLAYER_JUMP_FORCE:10,PLAYER_HEIGHT:1.8,PLAYER_MAX_HEALTH:100,MOUSE_SENSITIVITY:.002,GRAVITY:-25,WORLD_SIZE:50,WALL_HEIGHT:4,ENEMY_BASE_HEALTH:50,ENEMY_BASE_SPEED:3,ENEMY_BASE_DAMAGE:10,ENEMY_DETECTION_RANGE:20,ENEMY_ATTACK_RANGE:2,ENEMY_ATTACK_COOLDOWN:1.5,HEALTH_SCALE_PER_WAVE:1.2,SPEED_SCALE_PER_WAVE:1.05,ENEMIES_PER_WAVE_BASE:5,ENEMIES_PER_WAVE_INCREMENT:3,WEAPONS:[{name:"Pistol",damage:25,fireRate:4,maxAmmo:12,reserveAmmo:48,reloadTime:1.5,range:100,spread:.02},{name:"Shotgun",damage:15,fireRate:1.2,maxAmmo:6,reserveAmmo:24,reloadTime:2.5,range:30,spread:.1},{name:"Assault Rifle",damage:18,fireRate:10,maxAmmo:30,reserveAmmo:90,reloadTime:2,range:80,spread:.04}],KILL_SCORE:100,WAVE_BONUS:500,FOV:75,NEAR_CLIP:.1,FAR_CLIP:200};class os{static brick(t=512,e=512){const n=document.createElement("canvas");n.width=t,n.height=e;const s=n.getContext("2d");s.fillStyle="#6b6b60",s.fillRect(0,0,t,e);const r=64,o=28,a=4,l=["#8b4533","#7a3e2e","#9c5040","#6d3a2a","#a0584a","#7f4638"];for(let h=0;h<e/(o+a);h++){const u=h%2*(r/2);for(let d=-1;d<t/(r+a)+1;d++){const p=d*(r+a)+u,m=h*(o+a);s.fillStyle=l[Math.floor(Math.random()*l.length)],s.fillRect(p,m,r,o);for(let x=0;x<30;x++){const g=p+Math.random()*r,f=m+Math.random()*o;s.fillStyle=`rgba(0,0,0,${Math.random()*.15})`,s.fillRect(g,f,2,2)}s.strokeStyle="rgba(255,255,255,0.08)",s.strokeRect(p+1,m+1,r-2,o-2)}}const c=new Ui(n);return c.wrapS=c.wrapT=oi,c.repeat.set(2,2),c}static concrete(t=512,e=512){const n=document.createElement("canvas");n.width=t,n.height=e;const s=n.getContext("2d");s.fillStyle="#707878",s.fillRect(0,0,t,e);for(let a=0;a<8e3;a++){const l=Math.random()*t,c=Math.random()*e,h=Math.random()*.12;s.fillStyle=Math.random()>.5?`rgba(255,255,255,${h})`:`rgba(0,0,0,${h})`,s.fillRect(l,c,Math.random()*3+1,Math.random()*3+1)}const r=128;s.strokeStyle="rgba(0,0,0,0.2)",s.lineWidth=2;for(let a=0;a<t;a+=r)s.beginPath(),s.moveTo(a,0),s.lineTo(a,e),s.stroke();for(let a=0;a<e;a+=r)s.beginPath(),s.moveTo(0,a),s.lineTo(t,a),s.stroke();for(let a=0;a<5;a++){const l=Math.random()*t,c=Math.random()*e,h=s.createRadialGradient(l,c,0,l,c,30+Math.random()*40);h.addColorStop(0,"rgba(50,45,40,0.15)"),h.addColorStop(1,"rgba(50,45,40,0)"),s.fillStyle=h,s.fillRect(l-60,c-60,120,120)}const o=new Ui(n);return o.wrapS=o.wrapT=oi,o.repeat.set(8,8),o}static metal(t=256,e=256){const n=document.createElement("canvas");n.width=t,n.height=e;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,e);r.addColorStop(0,"#5a5e65"),r.addColorStop(.5,"#6a6e75"),r.addColorStop(1,"#4a4e55"),s.fillStyle=r,s.fillRect(0,0,t,e);for(let l=0;l<e;l+=2)s.fillStyle=`rgba(${Math.random()>.5?255:0},${Math.random()>.5?255:0},${Math.random()>.5?255:0},${Math.random()*.04})`,s.fillRect(0,l,t,1);const o=[[20,20],[t-20,20],[20,e-20],[t-20,e-20]];for(const[l,c]of o){const h=s.createRadialGradient(l-1,c-1,0,l,c,6);h.addColorStop(0,"#888"),h.addColorStop(.5,"#666"),h.addColorStop(1,"#444"),s.fillStyle=h,s.beginPath(),s.arc(l,c,6,0,Math.PI*2),s.fill()}const a=new Ui(n);return a.wrapS=a.wrapT=oi,a}static crate(t=256,e=256){const n=document.createElement("canvas");n.width=t,n.height=e;const s=n.getContext("2d");s.fillStyle="#8B6914",s.fillRect(0,0,t,e);for(let l=0;l<e;l++){const c=Math.sin(l*.1)*5,h=.85+Math.sin(l*.3+c)*.15;s.fillStyle=`rgba(139,105,20,${h})`,s.fillRect(0,l,t,1)}s.strokeStyle="#5a3a08",s.lineWidth=3;const r=12;s.strokeRect(r,r,t-r*2,e-r*2),s.beginPath(),s.moveTo(r,r),s.lineTo(t-r,e-r),s.moveTo(t-r,r),s.lineTo(r,e-r),s.stroke();const o=[[r+4,r+4],[t-r-4,r+4],[r+4,e-r-4],[t-r-4,e-r-4],[t/2,e/2]];for(const[l,c]of o)s.fillStyle="#888",s.beginPath(),s.arc(l,c,3,0,Math.PI*2),s.fill(),s.fillStyle="#aaa",s.beginPath(),s.arc(l-1,c-1,1.5,0,Math.PI*2),s.fill();return new Ui(n)}static ceiling(t=512,e=512){const n=document.createElement("canvas");n.width=t,n.height=e;const s=n.getContext("2d");s.fillStyle="#4a4a50",s.fillRect(0,0,t,e);const r=128;s.strokeStyle="rgba(0,0,0,0.3)",s.lineWidth=2;for(let a=0;a<t;a+=r)for(let l=0;l<e;l+=r)s.strokeRect(a+2,l+2,r-4,r-4),s.strokeStyle="rgba(255,255,255,0.05)",s.strokeRect(a+4,l+4,r-8,r-8),s.strokeStyle="rgba(0,0,0,0.3)";const o=new Ui(n);return o.wrapS=o.wrapT=oi,o.repeat.set(4,4),o}}class Fg{constructor(){this.walls=[],this.spawnPoints=[],this.enemySpawnPoints=[]}build(t){const e=os.brick(),n=os.concrete(),s=os.ceiling(),r=os.metal(),o=os.crate(),a=new _n(Ht.WORLD_SIZE*2,Ht.WORLD_SIZE*2),l=new se({map:n,roughness:.8,metalness:.05,color:12303291}),c=new Z(a,l);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,c.userData.isFloor=!0,t.add(c);const h=new Nd(10070732,1.5);t.add(h);const u=new Ud(16772829,1.2);u.position.set(15,25,10),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),u.shadow.camera.near=1,u.shadow.camera.far=80,u.shadow.camera.left=-40,u.shadow.camera.right=40,u.shadow.camera.top=40,u.shadow.camera.bottom=-40,t.add(u);const d=new Ld(11193599,4478276,.6);t.add(d);const p=[[0,0,14,14],[-20,0,9,9],[20,0,9,9],[0,-20,9,9],[0,20,11,11]],m=Ht.WALL_HEIGHT,x=.5,g=new se({map:e,roughness:.75,metalness:.02}),f=new se({map:s,roughness:.9});for(const[$,lt,mt,Gt]of p){const Tt=mt/2,V=Gt/2;lt+V<Ht.WORLD_SIZE&&(this.addWall(t,g,$-Tt/2-1,m/2,lt+V,Tt-2,m,x),this.addWall(t,g,$+Tt/2+1,m/2,lt+V,Tt-2,m,x)),lt-V>-50&&(this.addWall(t,g,$-Tt/2-1,m/2,lt-V,Tt-2,m,x),this.addWall(t,g,$+Tt/2+1,m/2,lt-V,Tt-2,m,x)),this.addWall(t,g,$+Tt,m/2,lt-V/2-1,x,m,V-2),this.addWall(t,g,$+Tt,m/2,lt+V/2+1,x,m,V-2),this.addWall(t,g,$-Tt,m/2,lt-V/2-1,x,m,V-2),this.addWall(t,g,$-Tt,m/2,lt+V/2+1,x,m,V-2);const J=new _n(mt+.5,Gt+.5),xt=new Z(J,f);xt.rotation.x=Math.PI/2,xt.position.set($,m,lt),xt.receiveShadow=!0,t.add(xt);const Dt=new ui(16772795,2.5,mt*3.5);Dt.position.set($,m-.4,lt),Dt.castShadow=!0,Dt.shadow.mapSize.set(512,512),t.add(Dt);const St=new ve(.02,.02,.4,6),Qt=new se({color:5592405,metalness:.7,roughness:.4}),re=new Z(St,Qt);re.position.set($,m-.2,lt),t.add(re);const Wt=new ve(.08,.18,.15,8),K=new se({color:3355443,metalness:.8,roughness:.3}),nt=new Z(Wt,K);nt.position.set($,m-.42,lt),t.add(nt);const et=new cn(.08,8,8),gt=new se({color:16772812,emissive:16768426,emissiveIntensity:3}),w=new Z(et,gt);w.position.set($,m-.52,lt),t.add(w);const Ut=new ui(10070732,.6,mt*2);Ut.position.set($,m*.4,lt),t.add(Ut),this.spawnPoints.push(new P($,0,lt)),this.enemySpawnPoints.push(new P($+Tt*.3,0,lt+V*.3),new P($-Tt*.3,0,lt-V*.3))}const T=new se({map:o,roughness:.8}),b=new se({map:r,color:4482628,roughness:.5,metalness:.3}),S=new se({color:3355443,metalness:.6,roughness:.4}),A=[{pos:[-4,0,-4],size:.45},{pos:[4.5,0,3],size:.5},{pos:[-19.5,0,2.5],size:.4},{pos:[21,0,-2.5],size:.45},{pos:[2.5,0,-19.5],size:.4},{pos:[-1.5,0,19.5],size:.5},{pos:[-4,.45,-4],size:.35},{pos:[4.9,0,3.4],size:.4}];for(const $ of A){const lt=$.size,mt=new Z(new Yt(lt,lt,lt),T);mt.position.set($.pos[0],$.pos[1]+lt/2,$.pos[2]),mt.rotation.y=Math.random()*.3-.15,mt.castShadow=!0,mt.receiveShadow=!0,mt.userData.isWall=!0,t.add(mt),this.walls.push(mt)}const R=[[5,0,-5],[-5,0,4],[18,0,3],[-18,0,-3],[3,0,18],[-2,0,-18]];for(const[$,lt,mt]of R){const Gt=new en,Tt=.22,V=.75,J=new Z(new ve(Tt,Tt*.95,V,16),b);J.position.y=V/2,J.castShadow=!0,J.receiveShadow=!0,Gt.add(J);for(const Dt of[V,.02]){const St=new Z(new pi(Tt,.025,8,16),S);St.rotation.x=Math.PI/2,St.position.y=Dt,Gt.add(St)}const xt=new Z(new pi(Tt+.01,.02,8,16),S);xt.rotation.x=Math.PI/2,xt.position.y=V/2,Gt.add(xt),Gt.position.set($,0,mt),t.add(Gt)}const C=[[0,9.5,3,5],[0,-9.5,3,5],[10,0,6,3],[-10,0,6,3]];for(const[$,lt,mt,Gt]of C){const Tt=new Z(new _n(mt,Gt),f);Tt.rotation.x=Math.PI/2,Tt.position.set($,m,lt),t.add(Tt);const V=new ui(14535850,1.2,8);V.position.set($,m-.3,lt),t.add(V);const J=new Z(new cn(.06,6,6),new se({color:16772812,emissive:16764040,emissiveIntensity:2}));J.position.set($,m-.15,lt),t.add(J)}const N=new se({color:5592405,roughness:.95}),v=new _n(2,2),y=[[0,7],[0,-7],[7,0],[-7,0],[0,14],[0,-14],[14,0],[-14,0]];for(const[$,lt]of y){const mt=new Z(v,N);mt.rotation.x=-Math.PI/2,mt.position.set($,.02,lt),mt.userData.isFloor=!0,t.add(mt)}const L=Ht.WORLD_SIZE,O=new se({map:e,color:6710903,roughness:.8});this.addWall(t,O,0,m/2,L,L*2,m,x),this.addWall(t,O,0,m/2,-L,L*2,m,x),this.addWall(t,O,L,m/2,0,x,m,L*2),this.addWall(t,O,-L,m/2,0,x,m,L*2),t.fog=new Fa(1712176,.015);const B=Ht.WORLD_SIZE*3,Y=document.createElement("canvas");Y.width=512,Y.height=512;const k=Y.getContext("2d"),G=k.createLinearGradient(0,0,0,512);G.addColorStop(0,"#0a0f18"),G.addColorStop(.4,"#151e2d"),G.addColorStop(.7,"#1f2a3a"),G.addColorStop(1,"#2a3545"),k.fillStyle=G,k.fillRect(0,0,512,512),k.fillStyle="rgba(255, 255, 255, 0.5)";for(let $=0;$<100;$++){const lt=Math.random()*512,mt=Math.random()*300,Gt=Math.random()*1.5+.5;k.beginPath(),k.arc(lt,mt,Gt,0,Math.PI*2),k.fill()}k.fillStyle="rgba(255, 255, 255, 0.8)";for(let $=0;$<20;$++){const lt=Math.random()*512,mt=Math.random()*200,Gt=Math.random()*2+1;k.beginPath(),k.arc(lt,mt,Gt,0,Math.PI*2),k.fill()}const z=new Ui(Y),j=new cn(B,32,32),ct=new Ms({map:z,side:Fe,fog:!1}),ot=new Z(j,ct);t.add(ot),t.background=new jt(659224)}addWall(t,e,n,s,r,o,a,l){const c=new Yt(o,a,l),h=new Z(c,e);h.position.set(n,s,r),h.castShadow=!0,h.receiveShadow=!0,h.userData.isWall=!0,t.add(h),this.walls.push(h)}getWalls(){return this.walls}getSpawnPoints(){return this.spawnPoints}getEnemySpawnPoints(){return this.enemySpawnPoints}}class Og{constructor(){this.shakeIntensity=0,this.shakeDuration=0,this.shakeTime=0,this.shakeOffset={x:0,y:0},this.slowMoScale=1,this.slowMoTarget=1,this.slowMoDuration=0,this.flashOpacity=0,this.vignetteIntensity=0,this.flashElement=document.createElement("div"),this.flashElement.style.cssText=`
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
    `,document.body.appendChild(this.vignetteElement)}shake(t,e){t>this.shakeIntensity&&(this.shakeIntensity=t,this.shakeDuration=e,this.shakeTime=0)}gunShake(){this.shake(2,.05)}damageShake(){this.shake(8,.15)}explosionShake(){this.shake(12,.2)}getShakeOffset(){return this.shakeOffset}slowMotion(t,e){this.slowMoTarget=t,this.slowMoDuration=e}waveSlowMo(){this.slowMotion(.2,1.5)}headshotSlowMo(){this.slowMotion(.5,.3)}getTimeScale(){return this.slowMoScale}flash(t=.3){this.flashOpacity=t}muzzleFlash(){this.flash(.1)}headshotFlash(){this.flash(.4),this.flashElement.style.background="#ff4400"}setHealthVignette(t){t<50?(this.vignetteIntensity=(50-t)/30,this.vignetteIntensity=Math.min(1,this.vignetteIntensity)):this.vignetteIntensity=0}update(t){const e=Math.min(t,.1);if(this.shakeDuration>0){this.shakeTime+=e;const s=this.shakeTime/this.shakeDuration;if(s<1){const r=1-s,o=Math.random()*Math.PI*2,a=this.shakeIntensity*r*Math.random();this.shakeOffset.x=Math.cos(o)*a,this.shakeOffset.y=Math.sin(o)*a}else this.shakeOffset.x=0,this.shakeOffset.y=0,this.shakeDuration=0,this.shakeIntensity=0}this.slowMoDuration>0?(this.slowMoScale=Math.max(.1,this.slowMoTarget),this.slowMoDuration-=e/Math.max(.1,this.slowMoScale),this.slowMoDuration<=0&&(this.slowMoScale=1,this.slowMoTarget=1,this.slowMoDuration=0)):(this.slowMoScale+=(1-this.slowMoScale)*5*e,this.slowMoScale>.99&&(this.slowMoScale=1)),this.slowMoScale=Math.max(.1,Math.min(1,this.slowMoScale)),this.flashOpacity>0&&(this.flashOpacity-=t*8,this.flashOpacity<0&&(this.flashOpacity=0,this.flashElement.style.background="white")),this.flashElement.style.opacity=this.flashOpacity.toString();const n=Math.sin(Date.now()*.005)*.15+.85;this.vignetteElement.style.opacity=(this.vignetteIntensity*n).toString()}}class Bg{constructor(){this.pitch=0,this.yaw=0,this.bobTimer=0,this.bobAmount=0,this.locked=!1,this.mobileMode=!1,this.camera=new We(Ht.FOV,window.innerWidth/window.innerHeight,Ht.NEAR_CLIP,Ht.FAR_CLIP),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()})}init(t){t.addEventListener("click",()=>{this.locked||t.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.locked=!!document.pointerLockElement})}update(t,e,n){if(!this.locked&&!this.mobileMode)return;const s=this.mobileMode?Ht.MOUSE_SENSITIVITY*2:Ht.MOUSE_SENSITIVITY;this.yaw-=n.x*s,this.pitch-=n.y*s,this.pitch=Math.max(-Math.PI*85/180,Math.min(Math.PI*85/180,this.pitch));const r=new qe(this.pitch,this.yaw,0,"YXZ");this.camera.quaternion.setFromEuler(r),e?(this.bobTimer+=t*10,this.bobAmount=Math.sin(this.bobTimer)*(this.mobileMode?.02:.05)):(this.bobAmount*=.9,this.bobTimer=0)}setPosition(t){this.camera.position.set(t.x,t.y+Ht.PLAYER_HEIGHT+this.bobAmount,t.z)}applyShake(t,e){const n=new qe(this.pitch+e*.01,this.yaw+t*.01,0,"YXZ");this.camera.quaternion.setFromEuler(n)}getCamera(){return this.camera}isLocked(){return this.locked}getYaw(){return this.yaw}getDirection(){const t=new P;return this.camera.getWorldDirection(t),t}lock(){document.body.requestPointerLock()}unlock(){document.exitPointerLock()}}const Eo=new nh,zg=new P(0,-1,0);function rc(i,t,e){e||(i.y+=Ht.GRAVITY*t)}let cr=[],oc=null;function kg(i){return(i!==oc||cr.length===0)&&(oc=i,cr=[],i.traverse(t=>{t instanceof Z&&(t.userData.isFloor||t.userData.isWall)&&cr.push(t)})),cr}function ac(i,t){Eo.set(new P(i.x,i.y+1,i.z),zg),Eo.far=3;const e=kg(t),n=Eo.intersectObjects(e,!1);for(const s of n){const r=s.point.y;if(i.y-r<.1)return{grounded:!0,height:r}}return i.y<=.01?{grounded:!0,height:0}:{grounded:!1,height:0}}function lc(i,t,e){const n=i.clone().add(t),s=.4;for(const r of e){r.geometry.boundingBox||r.geometry.computeBoundingBox();const o=r.geometry.boundingBox.clone();if(o.applyMatrix4(r.matrixWorld),o.min.x-=s,o.min.z-=s,o.max.x+=s,o.max.z+=s,n.x>o.min.x&&n.x<o.max.x&&n.z>o.min.z&&n.z<o.max.z&&n.y<o.max.y&&n.y+Ht.PLAYER_HEIGHT>o.min.y){const a=n.x-o.min.x,l=o.max.x-n.x,c=n.z-o.min.z,h=o.max.z-n.z,u=Math.min(a,l,c,h);u===a?n.x=o.min.x:u===l?n.x=o.max.x:u===c?n.z=o.min.z:n.z=o.max.z}}return n}class Vg{constructor(){this.position=new P(0,0,0),this.velocity=new P,this.grounded=!1,this.health=Ht.PLAYER_MAX_HEALTH,this.walls=[]}init(t,e,n){this.scene=t,this.walls=e,n&&this.position.copy(n)}update(t,e,n){if(!n.isLocked())return;const s=new P(0,0,-1),r=new P(1,0,0),o=n.getYaw();s.applyAxisAngle(new P(0,1,0),o),r.applyAxisAngle(new P(0,1,0),o);const a=new P;e.isKeyDown("KeyW")&&a.add(s),e.isKeyDown("KeyS")&&a.sub(s),e.isKeyDown("KeyD")&&a.add(r),e.isKeyDown("KeyA")&&a.sub(r),a.length()>0&&a.normalize();const l=e.isKeyDown("ShiftLeft")?Ht.PLAYER_SPRINT_SPEED:Ht.PLAYER_SPEED;this.velocity.x=a.x*l*t,this.velocity.z=a.z*l*t,e.isKeyDown("Space")&&this.grounded&&(this.velocity.y=Ht.PLAYER_JUMP_FORCE*t*3,this.grounded=!1),rc(this.velocity,t,this.grounded),this.position.y+=this.velocity.y*t;const c=lc(this.position,new P(this.velocity.x,0,this.velocity.z),this.walls);this.position.x=c.x,this.position.z=c.z;const h=ac(this.position,this.scene);this.grounded=h.grounded,this.grounded&&this.position.y<h.height&&(this.position.y=h.height,this.velocity.y=0),n.setPosition(this.position);const u=e.getMouseDelta();n.update(t,a.length()>0,u),e.resetMouseDelta()}updateMobile(t,e,n){const s=new P(0,0,-1),r=new P(1,0,0),o=n.getYaw();s.applyAxisAngle(new P(0,1,0),o),r.applyAxisAngle(new P(0,1,0),o);const a=new P;a.add(s.clone().multiplyScalar(e.moveY)),a.add(r.clone().multiplyScalar(e.moveX)),a.length()>1&&a.normalize();const l=Ht.PLAYER_SPEED;this.velocity.x=a.x*l*t,this.velocity.z=a.z*l*t,e.jump&&this.grounded&&(this.velocity.y=Ht.PLAYER_JUMP_FORCE*t*3,this.grounded=!1),rc(this.velocity,t,this.grounded),this.position.y+=this.velocity.y*t;const c=lc(this.position,new P(this.velocity.x,0,this.velocity.z),this.walls);this.position.x=c.x,this.position.z=c.z;const h=ac(this.position,this.scene);this.grounded=h.grounded,this.grounded&&this.position.y<h.height&&(this.position.y=h.height,this.velocity.y=0),n.setPosition(this.position);const u={x:e.lookX,y:e.lookY};n.update(t,a.length()>.1,u)}takeDamage(t){return this.health-=t,this.health<=0?(this.health=0,!0):!1}heal(t){this.health=Math.min(Ht.PLAYER_MAX_HEALTH,this.health+t)}getPosition(){return this.position.clone()}getVelocity(){return this.velocity.clone()}isGrounded(){return this.grounded}getHealth(){return this.health}isMoving(){return this.velocity.x!==0||this.velocity.z!==0}reset(t){this.position.copy(t),this.velocity.set(0,0,0),this.health=Ht.PLAYER_MAX_HEALTH}}class Hg{constructor(){this.keys=new Set,this.mouseX=0,this.mouseY=0,this.mouseButtons=new Set}init(){document.addEventListener("keydown",t=>this.keys.add(t.code)),document.addEventListener("keyup",t=>this.keys.delete(t.code)),document.addEventListener("mousemove",t=>{this.mouseX+=t.movementX,this.mouseY+=t.movementY}),document.addEventListener("mousedown",t=>this.mouseButtons.add(t.button)),document.addEventListener("mouseup",t=>this.mouseButtons.delete(t.button))}isKeyDown(t){return this.keys.has(t)}isMouseDown(t=0){return this.mouseButtons.has(t)}getMouseDelta(){return{x:this.mouseX,y:this.mouseY}}resetMouseDelta(){this.mouseX=0,this.mouseY=0}dispose(){this.keys.clear(),this.mouseButtons.clear()}}class Gg{constructor(t){this.raycaster=new nh,this.scene=null,this.camera=null,this.effects=t}init(t,e){this.scene=t,this.camera=e,this.raycaster.camera=e}shoot(t,e){if(!this.scene||!this.camera)return{hit:!1,point:new P,object:null,distance:0,normal:null};const n=new P(0,0,-1);n.applyQuaternion(this.camera.quaternion),t>0&&(n.x+=(Math.random()-.5)*t,n.y+=(Math.random()-.5)*t,n.z+=(Math.random()-.5)*t,n.normalize()),this.raycaster.set(this.camera.position,n),this.raycaster.far=e;const s=this.raycaster.intersectObjects(this.scene.children,!0).filter(a=>!(a.object.userData.isEffect||a.object.userData.isWeaponModel||a.object instanceof Hc||a.object instanceof xr||a.object instanceof Wc)),r=this.camera.position.clone();if(s.length>0){const a=s[0],l=a.point.clone(),c=a.face?a.face.normal.clone():null;return this.effects.createBulletTrail(r,l),this.effects.createImpactSparks(l,c??void 0),{hit:!0,point:l,object:a.object,distance:a.distance,normal:c}}const o=r.clone().add(n.multiplyScalar(e));return this.effects.createBulletTrail(r,o),{hit:!1,point:o,object:null,distance:e,normal:null}}}class lh{constructor(){this.scene=null,this.effects=[]}init(t){this.scene=t}createMuzzleFlash(t){if(!this.scene)return;const e=new ui(16755251,3,8);e.position.copy(t),this.scene.add(e),this.effects.push({object:e,lifetime:0,maxLifetime:.06,update:r=>{const o=1-r.lifetime/r.maxLifetime;r.object.intensity=3*o}});const n=new kc({color:16768358,transparent:!0,opacity:.9,blending:Ni,depthWrite:!1}),s=new Hc(n);s.position.copy(t),s.scale.set(.4,.4,.4),this.scene.add(s),this.effects.push({object:s,lifetime:0,maxLifetime:.08,update:r=>{const o=1-r.lifetime/r.maxLifetime;r.object.material.opacity=.9*o;const a=.4+.3*(r.lifetime/r.maxLifetime);r.object.scale.set(a,a,a)}})}createBloodSplatter(t,e){if(!this.scene)return;const n=20,s=new Float32Array(n*3),r=[],o=e?e.clone().negate():new P(0,1,0);for(let h=0;h<n;h++){s[h*3]=t.x,s[h*3+1]=t.y,s[h*3+2]=t.z;const u=new P((Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6);u.add(o.clone().multiplyScalar(2+Math.random()*4)),r.push(u)}const a=new Se;a.setAttribute("position",new ze(s,3));const l=new _r({color:11141120,size:.1,transparent:!0,opacity:1,blending:hi,depthWrite:!1}),c=new xr(a,l);this.scene.add(c),this.effects.push({object:c,lifetime:0,maxLifetime:.6,update:(h,u)=>{const d=h.object.geometry.getAttribute("position");for(let m=0;m<n;m++)r[m].y-=15*u,d.setXYZ(m,d.getX(m)+r[m].x*u,d.getY(m)+r[m].y*u,d.getZ(m)+r[m].z*u);d.needsUpdate=!0;const p=1-h.lifetime/h.maxLifetime;h.object.material.opacity=p}})}createDeathExplosion(t){if(!this.scene)return;const e=40,n=new Float32Array(e*3),s=[];for(let c=0;c<e;c++){n[c*3]=t.x,n[c*3+1]=t.y+.8,n[c*3+2]=t.z;const h=Math.random()*Math.PI*2,u=(Math.random()-.3)*Math.PI,d=3+Math.random()*5,p=new P(Math.cos(h)*Math.cos(u)*d,Math.sin(u)*d+2,Math.sin(h)*Math.cos(u)*d);s.push(p)}const r=new Se;r.setAttribute("position",new ze(n,3));const o=new _r({color:16729122,size:.15,transparent:!0,opacity:1,blending:Ni,depthWrite:!1}),a=new xr(r,o);this.scene.add(a),this.effects.push({object:a,lifetime:0,maxLifetime:.8,update:(c,h)=>{const u=c.object.geometry.getAttribute("position");for(let p=0;p<e;p++)s[p].y-=12*h,s[p].multiplyScalar(.98),u.setXYZ(p,u.getX(p)+s[p].x*h,u.getY(p)+s[p].y*h,u.getZ(p)+s[p].z*h);u.needsUpdate=!0;const d=1-c.lifetime/c.maxLifetime;c.object.material.opacity=d,c.object.material.size=.15*(.5+d*.5)}});const l=new ui(16737843,5,10);l.position.copy(t),l.position.y+=.8,this.scene.add(l),this.effects.push({object:l,lifetime:0,maxLifetime:.2,update:c=>{const h=1-c.lifetime/c.maxLifetime;c.object.intensity=5*h}})}createImpactSparks(t,e){if(!this.scene)return;const n=12,s=new Float32Array(n*3),r=[],o=e?e.clone():new P(0,1,0);for(let h=0;h<n;h++){s[h*3]=t.x,s[h*3+1]=t.y,s[h*3+2]=t.z;const u=new P((Math.random()-.5)*4,(Math.random()-.5)*4,(Math.random()-.5)*4);u.add(o.clone().multiplyScalar(2+Math.random()*3)),r.push(u)}const a=new Se;a.setAttribute("position",new ze(s,3));const l=new _r({color:16763972,size:.08,transparent:!0,opacity:1,blending:Ni,depthWrite:!1}),c=new xr(a,l);this.scene.add(c),this.effects.push({object:c,lifetime:0,maxLifetime:.4,update:(h,u)=>{const d=h.object.geometry.getAttribute("position");for(let m=0;m<n;m++)r[m].y-=9.8*u,d.setXYZ(m,d.getX(m)+r[m].x*u,d.getY(m)+r[m].y*u,d.getZ(m)+r[m].z*u);d.needsUpdate=!0;const p=1-h.lifetime/h.maxLifetime;h.object.material.opacity=p}})}createBulletTrail(t,e){if(!this.scene)return;const n=new Se().setFromPoints([t.clone(),e.clone()]),s=new Gc({color:16777130,transparent:!0,opacity:.6,blending:Ni,depthWrite:!1}),r=new Wc(n,s);this.scene.add(r),this.effects.push({object:r,lifetime:0,maxLifetime:.15,update:o=>{const a=1-o.lifetime/o.maxLifetime;o.object.material.opacity=.6*a}})}update(t){for(let e=this.effects.length-1;e>=0;e--){const n=this.effects[e];if(n.lifetime+=t,n.update&&n.update(n,t),n.lifetime>=n.maxLifetime){if(this.scene?.remove(n.object),n.object.geometry&&n.object.geometry.dispose(),n.object.material){const s=n.object.material;Array.isArray(s)?s.forEach(r=>r.dispose()):s.dispose()}this.effects.splice(e,1)}}}dispose(){for(const t of this.effects)if(this.scene?.remove(t.object),t.object.geometry&&t.object.geometry.dispose(),t.object.material){const e=t.object.material;Array.isArray(e)?e.forEach(n=>n.dispose()):e.dispose()}this.effects.length=0}}const Ot={gunMetal:new se({color:2763306,metalness:.9,roughness:.25}),darkMetal:new se({color:1710618,metalness:.85,roughness:.3}),grip:new se({color:1710618,metalness:.2,roughness:.9}),wood:new se({color:4861984,metalness:.1,roughness:.8}),chrome:new se({color:8947848,metalness:1,roughness:.1}),rubber:new se({color:1118481,metalness:0,roughness:1}),sight:new se({color:65280,emissive:65280,emissiveIntensity:.5})};function Xe(i,t,e,n=.005){return new Yt(i-n*2,t-n*2,e-n*2,2,2,2)}function cc(){const i=new en,t=new Z(Xe(.032,.04,.16),Ot.gunMetal);t.position.set(0,.02,-.02),i.add(t);for(let g=0;g<6;g++){const f=new Z(new Yt(.034,.002,.004),Ot.darkMetal);f.position.set(0,.02,.04+g*.008),i.add(f)}const e=new Z(new ve(.006,.006,.18,12),Ot.chrome);e.rotation.x=Math.PI/2,e.position.set(0,.025,-.09),i.add(e);const n=new Z(new ve(.008,.01,.02,12),Ot.gunMetal);n.rotation.x=Math.PI/2,n.position.set(0,.025,-.11),i.add(n);const s=new Z(Xe(.028,.035,.12),Ot.gunMetal);s.position.set(0,-.015,0),i.add(s);const r=new Jc;r.moveTo(0,0),r.lineTo(.03,0),r.lineTo(.03,-.025),r.quadraticCurveTo(.015,-.035,0,-.025),r.lineTo(0,0);const o=new ka(r,{depth:.006,bevelEnabled:!1}),a=new Z(o,Ot.gunMetal);a.rotation.y=Math.PI/2,a.position.set(.003,-.015,-.035),i.add(a);const l=new Z(new Yt(.003,.018,.008),Ot.chrome);l.position.set(0,-.025,-.025),l.rotation.x=.3,i.add(l);const c=new Z(Xe(.026,.08,.035),Ot.grip);c.position.set(0,-.06,.025),c.rotation.x=.15,i.add(c);for(let g=0;g<5;g++){const f=new Z(new Yt(.001,.012,.028),Ot.rubber);f.position.set(.014,-.04-g*.014,.025),i.add(f);const T=f.clone();T.position.x=-.014,i.add(T)}const h=new Z(new Yt(.022,.008,.028),Ot.chrome);h.position.set(0,-.1,.025),i.add(h);const u=new Z(new Yt(.004,.008,.004),Ot.darkMetal);u.position.set(0,.045,-.07),i.add(u);const d=new Z(new Yt(.02,.008,.006),Ot.darkMetal);d.position.set(0,.045,.05),i.add(d);const p=new Z(new Yt(.006,.01,.008),Ot.gunMetal);p.position.set(0,.045,.05),i.add(p);const m=new Z(new Yt(.004,.015,.01),Ot.chrome);m.position.set(0,.03,.07),m.rotation.x=-.5,i.add(m);const x=new Z(new ve(.004,.004,.02,8),Ot.darkMetal);return x.rotation.z=Math.PI/2,x.position.set(.02,.01,.04),i.add(x),i.position.set(.28,-.26,-.45),i.rotation.y=-.05,i}function Wg(){const i=new en,t=new Z(Xe(.045,.055,.18),Ot.gunMetal);t.position.set(0,0,0),i.add(t);const e=new Z(new ve(.018,.02,.45,16),Ot.darkMetal);e.rotation.x=Math.PI/2,e.position.set(0,.015,-.28),i.add(e);const n=new Z(new ve(.014,.014,.1,12),Ot.rubber);n.rotation.x=Math.PI/2,n.position.set(0,.015,-.51),i.add(n);const s=new Z(new ve(.014,.014,.35,12),Ot.gunMetal);s.rotation.x=Math.PI/2,s.position.set(0,-.02,-.22),i.add(s);const r=new Z(Xe(.05,.055,.1),Ot.grip);r.position.set(0,-.005,-.12),i.add(r);for(let m=0;m<8;m++){const x=new Z(new Yt(.052,.003,.008),Ot.rubber);x.position.set(0,-.005,-.16+m*.012),i.add(x)}const o=new Z(new Yt(.035,.025,.04),Ot.darkMetal);o.position.set(.01,.025,.02),i.add(o);const a=new Z(Xe(.04,.065,.18),Ot.grip);a.position.set(0,-.01,.17),i.add(a);const l=new Z(new Yt(.042,.07,.015),Ot.rubber);l.position.set(0,-.01,.27),i.add(l);const c=new Z(Xe(.03,.07,.04),Ot.grip);c.position.set(0,-.055,.05),c.rotation.x=.25,i.add(c);const h=new Z(new pi(.02,.004,8,12,Math.PI),Ot.gunMetal);h.rotation.y=Math.PI/2,h.rotation.x=Math.PI,h.position.set(0,-.04,0),i.add(h);const u=new Z(new Yt(.004,.02,.01),Ot.chrome);u.position.set(0,-.035,0),i.add(u);const d=new Z(new cn(.004,8,8),Ot.sight);d.position.set(0,.04,-.45),i.add(d);const p=new Z(new Yt(.03,.02,.06),Ot.chrome);return p.position.set(0,-.04,0),i.add(p),i.position.set(.25,-.28,-.4),i.rotation.y=-.03,i}function Xg(){const i=new en,t=new Z(Xe(.038,.045,.22),Ot.gunMetal);t.position.set(0,.01,0),i.add(t);const e=new Z(Xe(.036,.04,.15),Ot.gunMetal);e.position.set(0,-.025,.02),i.add(e);const n=new Z(new ve(.01,.012,.35,12),Ot.darkMetal);n.rotation.x=Math.PI/2,n.position.set(0,.015,-.26),i.add(n);const s=new Z(new ve(.022,.025,.18,8),Ot.grip);s.rotation.x=Math.PI/2,s.position.set(0,.01,-.15),i.add(s);const r=new Yt(.025,.006,.16),o=new Z(r,Ot.gunMetal);o.position.set(0,.035,-.14),i.add(o);for(let R=0;R<12;R++){const C=new Z(new Yt(.026,.003,.004),Ot.darkMetal);C.position.set(0,.04,-.22+R*.013),i.add(C)}const a=new Z(new ve(.012,.015,.04,12),Ot.darkMetal);a.rotation.x=Math.PI/2,a.position.set(0,.015,-.44),i.add(a);for(let R=0;R<4;R++){const C=new Z(new Yt(.004,.03,.02),Ot.rubber);C.position.set(Math.cos(R*Math.PI/2)*.012,.015+Math.sin(R*Math.PI/2)*.012,-.44),i.add(C)}const l=new Z(new Yt(.02,.025,.025),Ot.gunMetal);l.position.set(0,.025,-.25),i.add(l);const c=new Z(new Yt(.006,.035,.015),Ot.darkMetal);c.position.set(0,.045,-.25),i.add(c);const h=new Z(new ve(.002,.002,.015,6),Ot.chrome);h.position.set(0,.06,-.25),i.add(h);const u=new Z(Xe(.025,.03,.08),Ot.gunMetal);u.position.set(0,.045,.04),i.add(u);const d=new Z(new Yt(.015,.01,.03),Ot.darkMetal);d.position.set(0,.025,.1),i.add(d);const p=new Z(new Yt(.002,.02,.04),Ot.gunMetal);p.position.set(.02,.01,.02),i.add(p);const m=new Z(Xe(.025,.12,.04),Ot.darkMetal);m.position.set(0,-.085,0),m.rotation.x=-.1,i.add(m);for(let R=0;R<5;R++){const C=new Z(new Yt(.027,.004,.042),Ot.gunMetal);C.position.set(0,-.05-R*.018,0),C.rotation.x=-.1,i.add(C)}const x=new Z(Xe(.028,.07,.035),Ot.grip);x.position.set(0,-.06,.06),x.rotation.x=.2,i.add(x);const g=new Z(new pi(.018,.004,8,12,Math.PI),Ot.gunMetal);g.rotation.y=Math.PI/2,g.rotation.x=Math.PI,g.position.set(0,-.035,.02),i.add(g);const f=new Z(new Yt(.004,.018,.008),Ot.chrome);f.position.set(0,-.03,.02),f.rotation.x=.2,i.add(f);const T=new Z(new ve(.014,.014,.12,12),Ot.gunMetal);T.rotation.x=Math.PI/2,T.position.set(0,0,.17),i.add(T);const b=new Z(Xe(.035,.055,.12),Ot.grip);b.position.set(0,-.01,.26),i.add(b);const S=new Z(new Yt(.037,.06,.01),Ot.rubber);S.position.set(0,-.01,.325),i.add(S);const A=new Z(new pi(.008,.003,6,12),Ot.chrome);return A.rotation.y=Math.PI/2,A.position.set(.025,-.02,.15),i.add(A),i.position.set(.22,-.26,-.35),i.rotation.y=-.02,i}class Yg{constructor(){this.weapons=[],this.currentIndex=0,this.scene=null,this.camera=null,this.reloadTimer=0,this.bobTime=0,this.recoilZ=0,this.recoilRotX=0,this.targetRecoilZ=0,this.targetRecoilRotX=0,this.basePositions=[],this.baseRotations=[],this.viewmodelContainer=new en,this.effects=new lh,this.shootingSystem=new Gg(this.effects)}init(t,e){this.scene=t,this.camera=e,this.effects.init(t),this.shootingSystem.init(t,e),this.weapons=Ht.WEAPONS.map(n=>({name:n.name,damage:n.damage,fireRate:n.fireRate,ammo:n.maxAmmo,maxAmmo:n.maxAmmo,reserveAmmo:n.reserveAmmo,reloadTime:n.reloadTime,range:n.range,spread:n.spread,isReloading:!1,lastFireTime:0,mesh:null})),this.weapons.forEach((n,s)=>{n.mesh=this.createWeaponMesh(s),n.mesh.visible=s===this.currentIndex,n.mesh.userData.isWeaponModel=!0,n.mesh.traverse(r=>{r.userData.isWeaponModel=!0}),this.viewmodelContainer.add(n.mesh),this.basePositions[s]=n.mesh.position.clone(),this.baseRotations[s]=n.mesh.rotation.clone()}),this.viewmodelContainer.position.set(0,0,0),e.add(this.viewmodelContainer),e.parent||t.add(e)}createWeaponMesh(t){switch(t){case 0:return cc();case 1:return Wg();case 2:return Xg();default:return cc()}}switchWeapon(t){if(t<0||t>=this.weapons.length||t===this.currentIndex)return;const e=this.weapons[this.currentIndex];e.isReloading&&(e.isReloading=!1,this.reloadTimer=0),e.mesh&&(e.mesh.visible=!1),this.currentIndex=t;const n=this.weapons[this.currentIndex];n.mesh&&(n.mesh.visible=!0)}shoot(){if(!this.scene||!this.camera)return[];const t=this.weapons[this.currentIndex];if(t.isReloading)return[];if(t.ammo<=0)return this.reload(),[];const e=performance.now()/1e3,n=1/t.fireRate;if(e-t.lastFireTime<n)return[];if(t.lastFireTime=e,t.ammo--,t.mesh){const r=new P(0,.03,-.45);t.mesh.localToWorld(r),this.effects.createMuzzleFlash(r)}this.applyRecoil();const s=[];if(this.currentIndex===1)for(let r=0;r<6;r++)s.push(this.shootingSystem.shoot(t.spread,t.range));else s.push(this.shootingSystem.shoot(t.spread,t.range));return s}reload(){const t=this.weapons[this.currentIndex];t.isReloading||t.ammo>=t.maxAmmo||t.reserveAmmo<=0||(t.isReloading=!0,this.reloadTimer=t.reloadTime)}update(t){const e=this.weapons[this.currentIndex];if(e.isReloading&&(this.reloadTimer-=t,this.reloadTimer<=0)){const a=e.maxAmmo-e.ammo,l=Math.min(a,e.reserveAmmo);e.ammo+=l,e.reserveAmmo-=l,e.isReloading=!1,this.reloadTimer=0}const n=25;this.recoilZ+=(this.targetRecoilZ-this.recoilZ)*n*t,this.recoilRotX+=(this.targetRecoilRotX-this.recoilRotX)*n*t;const s=8;this.targetRecoilZ*=Math.max(0,1-s*t),this.targetRecoilRotX*=Math.max(0,1-s*t),Math.abs(this.targetRecoilZ)<.001&&(this.targetRecoilZ=0),Math.abs(this.targetRecoilRotX)<.001&&(this.targetRecoilRotX=0),this.bobTime+=t*2;const r=Math.sin(this.bobTime)*.003,o=Math.cos(this.bobTime*.7)*.002;if(e.mesh&&this.basePositions[this.currentIndex]){const a=this.basePositions[this.currentIndex],l=this.baseRotations[this.currentIndex];e.mesh.position.x=a.x+o,e.mesh.position.y=a.y+r,e.mesh.position.z=a.z+this.recoilZ,e.mesh.rotation.x=l.x+this.recoilRotX,e.mesh.rotation.y=l.y,e.mesh.rotation.z=l.z}this.effects.update(t)}applyRecoil(){if(!this.weapons[this.currentIndex].mesh)return;let e=.06,n=-.08;this.currentIndex===1&&(e=.12,n=-.15),this.currentIndex===2&&(e=.04,n=-.05),this.targetRecoilZ=Math.min(this.targetRecoilZ+e,.2),this.targetRecoilRotX=Math.max(this.targetRecoilRotX+n,-.3)}getCurrentWeapon(){return this.weapons[this.currentIndex]}getHUDData(){const t=this.weapons[this.currentIndex];return{ammo:t.ammo,maxAmmo:t.maxAmmo,reserveAmmo:t.reserveAmmo,weaponName:t.name,isReloading:t.isReloading}}getWeapons(){return this.weapons}addReserveAmmo(t){const e=this.weapons[this.currentIndex];e.reserveAmmo+=t}dispose(){this.effects.dispose(),this.weapons.forEach(t=>{t.mesh&&t.mesh.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){const n=e.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n.dispose()}})}),this.camera&&this.camera.remove(this.viewmodelContainer)}}const ie={skin:new se({color:8921634,roughness:.7,metalness:.1}),darkSkin:new se({color:5574929,roughness:.8,metalness:.05}),armor:new se({color:3355443,roughness:.4,metalness:.6}),cloth:new se({color:1710618,roughness:.9,metalness:0}),eyes:new se({color:16776960,emissive:16763904,emissiveIntensity:2}),teeth:new se({color:13421738,roughness:.3,metalness:.1}),claws:new se({color:1118481,roughness:.2,metalness:.3})};function qg(){const i=new en,t=new Z(new Yt(.5,.55,.3),ie.skin);t.position.set(0,1.1,0),i.add(t);const e=new Z(new Yt(.4,.35,.08),ie.armor);e.position.set(0,1.15,.16),i.add(e);const n=new Z(new cn(.22,12,10),ie.skin);n.scale.set(1,1.2,.8),n.position.set(0,.75,.02),i.add(n);const s=new Z(new cn(.18,12,10),ie.skin);s.scale.set(1,1.1,.9),s.position.set(0,1.55,0),i.add(s);const r=new Z(new Yt(.25,.06,.1),ie.darkSkin);r.position.set(0,1.62,.12),i.add(r);const o=new cn(.035,8,8),a=new Z(o,ie.eyes);a.position.set(-.07,1.57,.14),i.add(a);const l=new Z(o,ie.eyes);l.position.set(.07,1.57,.14),i.add(l);const c=new Z(new ci(.04,.08,6),ie.darkSkin);c.rotation.x=Math.PI/2,c.position.set(0,1.5,.18),i.add(c);const h=new Z(new Yt(.14,.08,.1),ie.darkSkin);h.position.set(0,1.4,.12),i.add(h);for(let Tt=0;Tt<5;Tt++){const V=new Z(new ci(.012,.03,4),ie.teeth);V.rotation.x=Math.PI,V.position.set(-.05+Tt*.025,1.43,.16),i.add(V)}const u=new ci(.04,.12,4),d=new Z(u,ie.skin);d.rotation.z=.5,d.rotation.x=.2,d.position.set(-.18,1.6,0),i.add(d);const p=new Z(u,ie.skin);p.rotation.z=-.5,p.rotation.x=.2,p.position.set(.18,1.6,0),i.add(p);const m=new cn(.1,8,8),x=new Z(m,ie.skin);x.position.set(-.32,1.25,0),i.add(x);const g=new Z(m,ie.skin);g.position.set(.32,1.25,0),i.add(g);const f=new cn(.08,8,6,0,Math.PI),T=new Z(f,ie.armor);T.rotation.z=Math.PI/2,T.position.set(-.35,1.28,0),i.add(T);const b=new Z(f,ie.armor);b.rotation.z=-Math.PI/2,b.position.set(.35,1.28,0),i.add(b);const S=new ve(.07,.06,.25,8),A=new Z(S,ie.skin);A.position.set(-.38,1.05,0),A.rotation.z=.3,i.add(A);const R=new Z(S,ie.skin);R.position.set(.38,1.05,0),R.rotation.z=-.3,i.add(R);const C=new ve(.06,.05,.25,8),N=new Z(C,ie.skin);N.position.set(-.45,.8,.05),N.rotation.z=.2,N.rotation.x=-.3,i.add(N);const v=new Z(C,ie.skin);v.position.set(.45,.8,.05),v.rotation.z=-.2,v.rotation.x=-.3,i.add(v);const y=new Yt(.08,.12,.04),L=new Z(y,ie.darkSkin);L.position.set(-.5,.6,.1),i.add(L);const O=new Z(y,ie.darkSkin);O.position.set(.5,.6,.1),i.add(O);const B=new ci(.015,.08,4);for(let Tt=0;Tt<3;Tt++){const V=new Z(B,ie.claws);V.rotation.x=Math.PI/2+.3,V.position.set(-.48-Tt*.02,.56,.16),i.add(V);const J=new Z(B,ie.claws);J.rotation.x=Math.PI/2+.3,J.position.set(.48+Tt*.02,.56,.16),i.add(J)}const Y=new Z(new Yt(.4,.15,.25),ie.cloth);Y.position.set(0,.55,0),i.add(Y);const k=new Z(new Yt(.42,.06,.27),ie.armor);k.position.set(0,.6,0),i.add(k);const G=new ve(.1,.08,.3,8),z=new Z(G,ie.skin);z.position.set(-.12,.35,0),i.add(z);const j=new Z(G,ie.skin);j.position.set(.12,.35,0),i.add(j);const ct=new ve(.07,.06,.28,8),ot=new Z(ct,ie.skin);ot.position.set(-.12,.08,0),i.add(ot);const $=new Z(ct,ie.skin);$.position.set(.12,.08,0),i.add($);const lt=new Yt(.1,.06,.18),mt=new Z(lt,ie.darkSkin);mt.position.set(-.12,-.05,.04),i.add(mt);const Gt=new Z(lt,ie.darkSkin);return Gt.position.set(.12,-.05,.04),i.add(Gt),i.traverse(Tt=>{Tt instanceof Z&&(Tt.castShadow=!0,Tt.receiveShadow=!0)}),i}function Zg(i){const t=[];return i.traverse(e=>{if(e instanceof Z&&e.material instanceof se){const n=e.material.clone();n.transparent=!0,e.material=n,t.push(n)}}),t}let $g=0;class Jg{constructor(){this.group=new en,this.scene=null,this.deathTimer=0,this.deathAnimating=!1,this.removed=!1,this.materials=[],this.data={id:`enemy_${$g++}`,mesh:null,position:new P,rotation:new qe,velocity:new P,health:Ht.ENEMY_BASE_HEALTH,maxHealth:Ht.ENEMY_BASE_HEALTH,speed:Ht.ENEMY_BASE_SPEED,damage:Ht.ENEMY_BASE_DAMAGE,attackRange:Ht.ENEMY_ATTACK_RANGE,detectionRange:Ht.ENEMY_DETECTION_RANGE,attackCooldown:Ht.ENEMY_ATTACK_COOLDOWN,lastAttackTime:0,state:"idle",waypoints:[],currentWaypoint:0}}init(t,e){this.scene=t,this.data.position.copy(e);const n=qg();this.group.add(n),this.materials=Zg(n),this.bodyMesh=n.children[0],n.traverse(h=>{h instanceof Z&&h.material instanceof se&&h.material.emissiveIntensity>1&&(this.leftEye?this.rightEye||(this.rightEye=h):this.leftEye=h)});const s=.8,r=.08,o=1.9,a=new _n(s,r),l=new Ms({color:3355443,transparent:!0,opacity:.8,side:an,depthTest:!1});this.healthBarBg=new Z(a,l),this.healthBarBg.position.y=o,this.healthBarBg.renderOrder=999,this.group.add(this.healthBarBg);const c=new _n(s,r);new Ms({color:4521796,transparent:!0,opacity:.9,side:an,depthTest:!1}),this.healthBarFg=new Z(c,l.clone()),this.healthBarFg.material.color.set(4521796),this.healthBarFg.material.opacity=.9,this.healthBarFg.position.y=o,this.healthBarFg.position.z=.001,this.healthBarFg.renderOrder=1e3,this.group.add(this.healthBarFg),this.group.traverse(h=>{h.userData.isEnemy=!0}),this.group.position.copy(e),this.data.mesh=this.group,t.add(this.group)}update(t,e){if(!this.removed){if(this.deathAnimating){this.deathTimer+=t;const n=Math.min(this.deathTimer*2,Math.PI/2);this.group.rotation.x=n;const s=Math.min(this.deathTimer/2,1);for(const r of this.materials)r.opacity=1-s;this.deathTimer>=2&&this.removeFromScene();return}this.group.position.copy(this.data.position),this.group.rotation.y=this.data.rotation.y,this.updateHealthBar(e)}}updateHealthBar(t){const e=Math.max(0,this.data.health/this.data.maxHealth);this.healthBarFg.scale.x=e,this.healthBarFg.position.x=-(1-e)*.4;const n=e<.5?1:1-(e-.5)*2,s=e>.5?1:e*2;this.healthBarFg.material.color.setRGB(n,s,0);const r=new P().subVectors(t,this.group.position);if(r.y=0,r.lengthSq()>.001){const a=Math.atan2(r.x,r.z);this.healthBarBg.rotation.y=a-this.group.rotation.y,this.healthBarFg.rotation.y=a-this.group.rotation.y}const o=e<1;this.healthBarBg.visible=o,this.healthBarFg.visible=o}takeDamage(t){if(this.data.state==="dead")return!1;this.data.health-=t;const e=this.bodyMesh.material;return e.color.clone(),e.emissive.set(16777215),e.emissiveIntensity=.8,setTimeout(()=>{this.removed||(e.emissive.set(0),e.emissiveIntensity=0)},80),this.data.health<=0?(this.data.health=0,this.data.state="dead",this.deathAnimating=!0,this.deathTimer=0,!0):!1}isDead(){return this.data.state==="dead"}isRemoved(){return this.removed}getMesh(){return this.group}getPosition(){return this.data.position}getState(){return this.data.state}setState(t){this.data.state=t}removeFromScene(){this.removed||!this.scene||(this.removed=!0,this.scene.remove(this.group),this.group.traverse(t=>{t instanceof Z&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}))}}class Kg{constructor(){this.idleTimers=new Map,this.patrolPauseTimers=new Map,this.patrolPaused=new Map}update(t,e,n){const s=t.data;if(s.state==="dead")return{action:"dead"};const r=new P().subVectors(n,s.position);r.y=0;const o=r.length();switch(s.state){case"idle":return this.handleIdle(t,e,o);case"patrol":return this.handlePatrol(t,e,o,n);case"chase":return this.handleChase(t,e,o,n);case"attack":return this.handleAttack(t,e,o,n);default:return{action:"idle"}}}handleIdle(t,e,n){const s=t.data;if(n<=s.detectionRange)return t.setState("chase"),{action:"chase"};const r=(this.idleTimers.get(s.id)??0)+e;return this.idleTimers.set(s.id,r),r>=1.5?(this.idleTimers.set(s.id,0),this.generateWaypoints(t),t.setState("patrol"),{action:"patrol"}):{action:"idle"}}handlePatrol(t,e,n,s){const r=t.data;if(n<=r.detectionRange)return this.patrolPaused.delete(r.id),this.patrolPauseTimers.delete(r.id),t.setState("chase"),{action:"chase"};if(this.patrolPaused.get(r.id)){const u=(this.patrolPauseTimers.get(r.id)??0)+e;return this.patrolPauseTimers.set(r.id,u),u>=1&&(this.patrolPaused.set(r.id,!1),this.patrolPauseTimers.set(r.id,0),r.currentWaypoint=(r.currentWaypoint+1)%r.waypoints.length),{action:"patrol_pause"}}r.waypoints.length===0&&this.generateWaypoints(t);const o=r.waypoints[r.currentWaypoint],a=new P().subVectors(o,r.position);if(a.y=0,a.length()<.5)return this.patrolPaused.set(r.id,!0),this.patrolPauseTimers.set(r.id,0),{action:"patrol_reached"};const c=a.normalize(),h=r.speed*.5;return r.velocity.set(c.x*h,0,c.z*h),r.position.x+=r.velocity.x*e,r.position.z+=r.velocity.z*e,r.rotation.y=Math.atan2(c.x,c.z),{action:"patrol"}}handleChase(t,e,n,s){const r=t.data;if(n>r.detectionRange*1.3)return this.generateWaypoints(t),t.setState("patrol"),{action:"patrol"};if(n<=r.attackRange)return t.setState("attack"),this.handleAttack(t,e,n,s);const o=new P().subVectors(s,r.position);o.y=0;const a=o.normalize();return r.velocity.set(a.x*r.speed,0,a.z*r.speed),r.position.x+=r.velocity.x*e,r.position.z+=r.velocity.z*e,r.rotation.y=Math.atan2(a.x,a.z),{action:"chase"}}handleAttack(t,e,n,s){const r=t.data;if(n>r.attackRange*1.5)return t.setState("chase"),{action:"chase"};const o=new P().subVectors(s,r.position);o.y=0,o.lengthSq()>.001&&(r.rotation.y=Math.atan2(o.x,o.z));const a=performance.now()/1e3;if(a-r.lastAttackTime>=r.attackCooldown)return r.lastAttackTime=a,{action:"attack",damage:r.damage};if(n>r.attackRange*.6){const l=o.normalize(),c=r.speed*.3;r.position.x+=l.x*c*e,r.position.z+=l.z*c*e}return{action:"attack_cooldown"}}generateWaypoints(t){const e=t.data,n=e.position.clone();e.waypoints=[];const s=3+Math.floor(Math.random()*3);for(let r=0;r<s;r++){const o=Math.random()*Math.PI*2,a=3+Math.random()*7,l=new P(n.x+Math.cos(o)*a,0,n.z+Math.sin(o)*a),c=Ht.WORLD_SIZE/2-2;l.x=br.clamp(l.x,-c,c),l.z=br.clamp(l.z,-c,c),e.waypoints.push(l)}e.currentWaypoint=0}clearEnemy(t){this.idleTimers.delete(t),this.patrolPauseTimers.delete(t),this.patrolPaused.delete(t)}}class jg{constructor(){this.scene=null,this.enemies=[],this.ai=new Kg,this.currentWave=0,this.onPlayerDamage=null,this.onEnemyHit=null,this.onEnemyDeath=null,this.onHeadshot=null}init(t){this.scene=t,this.enemies=[],this.currentWave=0}spawnWave(t){if(!this.scene)return;this.currentWave=t;const e=Ht.ENEMIES_PER_WAVE_BASE+Ht.ENEMIES_PER_WAVE_INCREMENT*(t-1),n=Math.pow(Ht.HEALTH_SCALE_PER_WAVE,t-1),s=Math.pow(Ht.SPEED_SCALE_PER_WAVE,t-1);for(let r=0;r<e;r++){const o=new Jg,a=Math.random()*Math.PI*2,l=15+Math.random()*15,c=new P(Math.cos(a)*l,0,Math.sin(a)*l),h=Ht.WORLD_SIZE/2-2;c.x=br.clamp(c.x,-h,h),c.z=br.clamp(c.z,-h,h),o.init(this.scene,c),o.data.maxHealth=Math.round(Ht.ENEMY_BASE_HEALTH*n),o.data.health=o.data.maxHealth,o.data.speed=Ht.ENEMY_BASE_SPEED*s,o.data.damage=Math.round(Ht.ENEMY_BASE_DAMAGE*(1+(t-1)*.15)),this.enemies.push(o)}}update(t,e){const n=[];for(let s=0;s<this.enemies.length;s++){const r=this.enemies[s],o=this.ai.update(r,t,e);o.action==="attack"&&o.damage!=null&&this.onPlayerDamage&&this.onPlayerDamage(o.damage),r.update(t,e),r.isRemoved()&&n.push(s)}for(let s=n.length-1;s>=0;s--){const r=n[s];this.ai.clearEnemy(this.enemies[r].data.id),this.enemies.splice(r,1)}}applyDamageAtPoint(t,e,n,s){let r=0;for(const o of this.enemies){if(o.isDead())continue;const a=o.getPosition(),l=a.x-t.x,c=a.z-t.z,h=Math.sqrt(l*l+c*c),u=t.y-a.y,d=u>=0&&u<=2;if(h<=n&&d){const p=o.getPosition().y,x=t.y-p>1.4,g=n>0?1-h/n:1;let f=Math.max(1,Math.round(e*Math.max(g,.3)));x&&(f=Math.round(f*2.5),this.onHeadshot&&this.onHeadshot(t));const T=o.takeDamage(f);if(this.onEnemyHit){const b=t.clone();x||(b.y=p+.8),this.onEnemyHit(b,s)}T&&(r++,this.onEnemyDeath&&this.onEnemyDeath(o.getPosition()))}}return r}isWaveComplete(){return this.enemies.length===0}getEnemies(){return this.enemies}getAliveCount(){return this.enemies.filter(t=>!t.isDead()).length}getCurrentWave(){return this.currentWave}}class Qg{constructor(){this.scene=null,this.pickups=[],this.onHealthPickup=null,this.onAmmoPickup=null}init(t){this.scene=t,this.pickups=[]}spawn(t,e){if(!this.scene)return;const n=e??(Math.random()<.3?"health":"ammo"),s=this.createPickupMesh(n);s.position.copy(t),s.position.y=.3,this.scene.add(s),this.pickups.push({type:n,mesh:s,position:s.position.clone(),value:n==="health"?25:15,lifetime:15,bobOffset:Math.random()*Math.PI*2})}maybeSpawn(t,e=.4){Math.random()<e&&this.spawn(t)}createPickupMesh(t){const e=new en;if(t==="health"){const n=new se({color:2271778,emissive:1135889,emissiveIntensity:.5,metalness:.3,roughness:.5}),s=new Z(new Yt(.3,.2,.3),n);e.add(s);const r=new se({color:16777215,emissive:16777215,emissiveIntensity:.3}),o=new Z(new Yt(.2,.05,.06),r);o.position.z=.16,e.add(o);const a=new Z(new Yt(.06,.05,.2),r);a.position.z=.16,e.add(a);const l=new ui(4521796,1,3);l.position.y=.2,e.add(l)}else{const n=new se({color:14527010,emissive:6702080,emissiveIntensity:.5,metalness:.4,roughness:.4}),s=new Z(new Yt(.25,.15,.35),n);e.add(s);const r=new se({color:8939042,metalness:.8,roughness:.2});for(let a=0;a<3;a++){const l=new Z(new ve(.025,.025,.08,6),r);l.position.set(-.05+a*.05,.1,0),e.add(l);const c=new Z(new ci(.025,.04,6),r);c.position.set(-.05+a*.05,.16,0),e.add(c)}const o=new ui(16755234,1,3);o.position.y=.2,e.add(o)}return e}update(t,e){const s=[];for(let r=0;r<this.pickups.length;r++){const o=this.pickups[r];if(o.lifetime-=t,o.lifetime<=0){s.push(r);continue}const a=Math.sin(Date.now()*.003+o.bobOffset)*.1;if(o.mesh.position.y=o.position.y+a,o.mesh.rotation.y+=t*2,o.lifetime<3){const c=o.lifetime/3;o.mesh.traverse(h=>{if(h instanceof Z){const u=h.material;u.transparent||(u.transparent=!0),u.opacity=c}})}o.mesh.position.distanceTo(e)<1.2&&(o.type==="health"&&this.onHealthPickup?this.onHealthPickup(o.value):o.type==="ammo"&&this.onAmmoPickup&&this.onAmmoPickup(o.value),s.push(r))}for(let r=s.length-1;r>=0;r--){const o=s[r],a=this.pickups[o];this.scene&&this.scene.remove(a.mesh),a.mesh.traverse(l=>{l instanceof Z&&(l.geometry.dispose(),Array.isArray(l.material)?l.material.forEach(c=>c.dispose()):l.material.dispose())}),this.pickups.splice(o,1)}}clear(){for(const t of this.pickups)this.scene&&this.scene.remove(t.mesh);this.pickups=[]}}const ch=document.createElement("style");ch.textContent=`
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
`;document.head.appendChild(ch);class t_{constructor(){this.combo=0,this.comboTimer=null,this.container=document.createElement("div"),this.container.id="hud-overlay",this.container.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;font-family:monospace;color:#fff;z-index:10;",this.container.innerHTML=`
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
    `,document.body.appendChild(this.container)}init(){this.healthBar=this.container.querySelector(".health-bar"),this.healthText=this.container.querySelector(".health-text"),this.ammoCounter=this.container.querySelector(".ammo-counter"),this.weaponName=this.container.querySelector(".weapon-name"),this.weaponSlots=this.container.querySelector(".weapon-slots"),this.scoreEl=this.container.querySelector(".score"),this.killsEl=this.container.querySelector(".kills"),this.waveEl=this.container.querySelector(".wave"),this.enemyCount=this.container.querySelector(".enemy-count"),this.reloadIndicator=this.container.querySelector(".reload-indicator"),this.damageOverlay=this.container.querySelector(".damage-overlay"),this.killNotifications=this.container.querySelector(".kill-notifications"),this.comboCounter=this.container.querySelector(".combo-counter")}update(t){const e=t.health/t.maxHealth*100;this.healthBar.style.width=`${e}%`,this.healthText.textContent=`${Math.ceil(t.health)}/${t.maxHealth}`,e<25?this.healthBar.style.background="linear-gradient(180deg,#f22,#800)":e<50?this.healthBar.style.background="linear-gradient(180deg,#f80,#a50)":this.healthBar.style.background="linear-gradient(180deg,#f55,#a22)";const n=t.ammo<=3?"#f66":"#fff";this.ammoCounter.style.color=n,this.ammoCounter.textContent=`${t.ammo} / ${t.reserveAmmo}`,this.weaponName.textContent=t.weaponName;const s=this.weaponSlots.querySelectorAll(".weapon-slot"),r=t.weaponName==="Pistol"?0:t.weaponName==="Shotgun"?1:2;s.forEach((o,a)=>{o.classList.toggle("active",a===r)}),this.scoreEl.textContent=t.score.toLocaleString(),this.killsEl.textContent=t.kills.toString(),this.waveEl.textContent=`WAVE ${t.wave}`,t.enemyCount!==void 0&&(this.enemyCount.textContent=t.enemyCount.toString()),this.reloadIndicator.style.display=t.isReloading?"block":"none"}showDamage(){this.damageOverlay.style.opacity="0.7",setTimeout(()=>{this.damageOverlay.style.opacity="0"},150)}showKill(t){this.combo++,this.comboTimer&&clearTimeout(this.comboTimer),this.comboTimer=window.setTimeout(()=>{this.combo=0,this.comboCounter.style.opacity="0"},2e3),this.combo>1&&(this.comboCounter.textContent=`${this.combo}x COMBO!`,this.comboCounter.style.opacity="1",this.comboCounter.style.transform="translateX(-50%) scale(1.2)",setTimeout(()=>{this.comboCounter.style.transform="translateX(-50%) scale(1)"},100));const e=document.createElement("div"),n=this.combo>1?Math.floor(t*(this.combo-1)*.1):0,s=t+n;e.innerHTML=this.combo>1?`+${s} <span style="font-size:16px;color:#f80;">×${this.combo}</span>`:`+${t}`;const r=(Math.random()-.5)*100,o=(Math.random()-.5)*50;e.style.cssText=`
      position:absolute;
      left:calc(50% + ${r}px);
      top:calc(40% + ${o}px);
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
    `,this.killNotifications.appendChild(t),setTimeout(()=>t.remove(),1500)}}class e_{constructor(){this.lines=[],this.reloadAnim=null,this.rotation=0,this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("width","40"),this.svg.setAttribute("height","40"),this.svg.setAttribute("viewBox","0 0 40 40"),this.svg.style.cssText="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:15;",[[20,5,20,15],[20,25,20,35],[5,20,15,20],[25,20,35,20]].forEach(([n,s,r,o])=>{const a=document.createElementNS("http://www.w3.org/2000/svg","line");a.setAttribute("x1",String(n)),a.setAttribute("y1",String(s)),a.setAttribute("x2",String(r)),a.setAttribute("y2",String(o)),a.setAttribute("stroke","#fff"),a.setAttribute("stroke-width","2"),this.svg.appendChild(a),this.lines.push(a)});const e=document.createElementNS("http://www.w3.org/2000/svg","circle");e.setAttribute("cx","20"),e.setAttribute("cy","20"),e.setAttribute("r","1.5"),e.setAttribute("fill","#fff"),this.svg.appendChild(e),document.body.appendChild(this.svg)}init(){this.svg.style.display="block"}update(t,e){if(t&&(this.lines.forEach(n=>{n.setAttribute("stroke","#f00"),n.setAttribute("stroke-width","3")}),setTimeout(()=>this.lines.forEach(n=>{n.setAttribute("stroke","#fff"),n.setAttribute("stroke-width","2")}),100)),e&&!this.reloadAnim){const n=()=>{this.rotation+=2,this.svg.style.transform=`translate(-50%,-50%) rotate(${this.rotation}deg)`,this.reloadAnim=requestAnimationFrame(n)};n()}else!e&&this.reloadAnim&&(cancelAnimationFrame(this.reloadAnim),this.reloadAnim=null,this.svg.style.transform="translate(-50%,-50%)")}}const hh="fps_arena_highscores",hc=5;function uh(){try{const i=localStorage.getItem(hh);if(i)return JSON.parse(i)}catch(i){console.warn("Failed to load high scores:",i)}return[]}function n_(i,t,e){const n=uh(),s={score:i,kills:t,wave:e,date:new Date().toLocaleDateString()};n.push(s),n.sort((l,c)=>c.score-l.score);const r=n.findIndex(l=>l===s)+1,o=r===1,a=n.slice(0,hc);try{localStorage.setItem(hh,JSON.stringify(a))}catch(l){console.warn("Failed to save high scores:",l)}return{rank:r<=hc?r:0,isNewHigh:o}}function i_(i){return i.length===0?'<p style="color:#666;">No scores yet. Be the first!</p>':i.map((t,e)=>`<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #333;">
      <span>${e===0?"🥇":e===1?"🥈":e===2?"🥉":`${e+1}.`} ${t.score.toLocaleString()}</span>
      <span style="color:#888;">Wave ${t.wave} • ${t.kills} kills</span>
    </div>`).join("")}const hr=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>0&&window.innerWidth<1024;class s_{constructor(){const t="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);font-family:monospace;color:#fff;z-index:50;overflow-y:auto;padding:20px;box-sizing:border-box;",e="padding:14px 40px;font-size:18px;background:linear-gradient(180deg,#e44,#b22);color:#fff;border:none;cursor:pointer;font-family:monospace;margin:8px;border-radius:4px;text-transform:uppercase;letter-spacing:2px;transition:transform 0.1s;-webkit-tap-highlight-color:transparent;",n=`onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'"`,s=hr?"🕹️ Left=Move | 👆 Right=Look | 🔫 Fire | ⟳ Reload | ⬆ Jump":"WASD=Move | Mouse=Look | Click=Shoot | R=Reload | 1-3=Weapons";this.startScreen=document.createElement("div"),this.startScreen.style.cssText=t,this.startScreen.innerHTML=`
      <h1 style="font-size:${hr?"2em":"3.5em"};margin-bottom:10px;text-shadow:0 0 20px rgba(255,50,50,0.5);">⚔️ FPS ARENA</h1>
      <p style="color:#888;margin-bottom:30px;font-size:${hr?"0.75em":"0.9em"};text-align:center;padding:0 10px;">${s}</p>
      <button style="${e}" ${n}>START GAME</button>
      <div class="highscores" style="margin-top:40px;width:${hr?"90%":"300px"};max-width:300px;background:rgba(255,255,255,0.05);padding:15px 20px;border-radius:8px;">
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
    `,document.body.appendChild(this.startScreen),document.body.appendChild(this.pauseScreen),document.body.appendChild(this.gameOverScreen),this.startScreen.querySelector("button").onclick=()=>{this.hide(),this.onStart?.()},this.pauseScreen.querySelector("button").onclick=()=>{this.hide()},this.gameOverScreen.querySelector("button").onclick=()=>{this.hide(),this.onRestart?.()}}updateHighScoresList(t){const e=t.querySelector(".hs-list");e&&(e.innerHTML=i_(uh()))}showStart(){this.startScreen.style.display="flex",this.pauseScreen.style.display="none",this.gameOverScreen.style.display="none",this.updateHighScoresList(this.startScreen)}showPause(){this.pauseScreen.style.display="flex"}showGameOver(t,e,n=0){const{rank:s,isNewHigh:r}=n_(t,e,n);this.gameOverScreen.querySelector(".go-score").textContent=`Score: ${t.toLocaleString()}`,this.gameOverScreen.querySelector(".go-kills").textContent=`Kills: ${e}`,this.gameOverScreen.querySelector(".go-wave").textContent=`Wave: ${n}`;const o=this.gameOverScreen.querySelector(".go-rank");r?(o.innerHTML="🎉 NEW HIGH SCORE! 🎉",o.setAttribute("style","color:#ff6;font-size:1.4em;margin-bottom:15px;animation:pulse 0.5s infinite alternate;")):s>0?(o.textContent=`Rank #${s}`,o.setAttribute("style","color:#ff6;font-size:1.2em;margin-bottom:10px;")):o.textContent="",this.gameOverScreen.style.display="flex",this.updateHighScoresList(this.gameOverScreen)}hide(){this.startScreen.style.display="none",this.pauseScreen.style.display="none",this.gameOverScreen.style.display="none"}}class r_{constructor(){this.size=150,this.scale=this.size/(Ht.WORLD_SIZE*2),this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,this.canvas=document.createElement("canvas"),this.canvas.width=this.size,this.canvas.height=this.size,this.canvas.style.cssText="width: 100%; height: 100%;",this.ctx=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),document.body.appendChild(this.container)}update(t,e,n){const s=this.ctx,r=this.size/2;s.clearRect(0,0,this.size,this.size),s.fillStyle="rgba(10, 20, 30, 0.8)",s.beginPath(),s.arc(r,r,r-2,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(100, 200, 255, 0.15)",s.lineWidth=1;for(let o=25;o<r;o+=25)s.beginPath(),s.arc(r,r,o,0,Math.PI*2),s.stroke();s.beginPath(),s.moveTo(r,0),s.lineTo(r,this.size),s.moveTo(0,r),s.lineTo(this.size,r),s.stroke(),s.save(),s.translate(r,r),s.rotate(-e);for(const o of n){if(o.isDead)continue;const a=(o.position.x-t.x)*this.scale,l=(o.position.z-t.z)*this.scale;if(Math.sqrt(a*a+l*l)>r-10)continue;const h=.8+Math.sin(Date.now()*.01)*.2;s.fillStyle=`rgba(255, 80, 80, ${h})`,s.beginPath(),s.arc(a,l,4,0,Math.PI*2),s.fill(),s.fillStyle="rgba(255, 80, 80, 0.3)",s.beginPath(),s.arc(a,l,7,0,Math.PI*2),s.fill()}s.restore(),s.save(),s.translate(r,r),s.fillStyle="#6cf",s.beginPath(),s.moveTo(0,-8),s.lineTo(-5,6),s.lineTo(5,6),s.closePath(),s.fill(),s.fillStyle="rgba(100, 200, 255, 0.3)",s.beginPath(),s.arc(0,0,10,0,Math.PI*2),s.fill(),s.restore(),s.font="10px monospace",s.textAlign="center",s.fillStyle="rgba(100, 200, 255, 0.6)",s.fillText("N",r,12),s.fillText("S",r,this.size-4),s.fillText("E",this.size-6,r+4),s.fillText("W",8,r+4)}show(){this.container.style.display="block"}hide(){this.container.style.display="none"}}class dh{constructor(){this.weaponButtons=[],this.joystickActive=!1,this.joystickTouchId=null,this.joystickCenter={x:0,y:0},this.joystickPos={x:0,y:0},this.joystickRadius=50,this.lookTouchId=null,this.lastLookPos={x:0,y:0},this.lookDelta={x:0,y:0},this.input={moveX:0,moveY:0,lookX:0,lookY:0,fire:!1,reload:!1,jump:!1,weapon1:!1,weapon2:!1,weapon3:!1},this.enabled=!1,this.container=document.createElement("div"),this.container.id="mobile-controls",this.container.style.cssText=`
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      z-index: 200;
      display: none;
      touch-action: none;
    `,this.joystickOuter=document.createElement("div"),this.joystickOuter.style.cssText=`
      position: absolute;
      bottom: 30px; left: 30px;
      width: 120px; height: 120px;
      background: rgba(255,255,255,0.15);
      border: 3px solid rgba(255,255,255,0.3);
      border-radius: 50%;
      pointer-events: auto;
      touch-action: none;
    `,this.joystickInner=document.createElement("div"),this.joystickInner.style.cssText=`
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 50px; height: 50px;
      background: rgba(255,255,255,0.5);
      border-radius: 50%;
      transition: none;
    `,this.joystickOuter.appendChild(this.joystickInner),this.container.appendChild(this.joystickOuter),this.fireButton=this.createButton("🔫",80,"bottom: 30px; right: 30px;","#ff4444"),this.container.appendChild(this.fireButton),this.reloadButton=this.createButton("⟳",50,"bottom: 130px; right: 40px;","#44aaff"),this.container.appendChild(this.reloadButton),this.jumpButton=this.createButton("⬆",50,"bottom: 130px; right: 110px;","#44ff44"),this.container.appendChild(this.jumpButton),["1","2","3"].forEach((n,s)=>{const r=this.createButton(n,40,`top: 100px; right: ${30+s*50}px;`,"#888");this.weaponButtons.push(r),this.container.appendChild(r)});const e=document.createElement("div");e.style.cssText=`
      position: absolute;
      top: 0; right: 0;
      width: 60%; height: 70%;
      pointer-events: auto;
      touch-action: none;
    `,e.addEventListener("touchstart",this.onLookStart.bind(this),{passive:!1}),e.addEventListener("touchmove",this.onLookMove.bind(this),{passive:!1}),e.addEventListener("touchend",this.onLookEnd.bind(this),{passive:!1}),this.container.appendChild(e),document.body.appendChild(this.container),this.setupJoystick(),this.setupButtons()}createButton(t,e,n,s){const r=document.createElement("div");return r.style.cssText=`
      position: absolute;
      ${n}
      width: ${e}px; height: ${e}px;
      background: ${s}44;
      border: 3px solid ${s}88;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${e*.4}px;
      color: white;
      pointer-events: auto;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
    `,r.textContent=t,r}setupJoystick(){this.joystickOuter.addEventListener("touchstart",t=>{if(t.preventDefault(),this.joystickTouchId!==null)return;const e=t.changedTouches[0];this.joystickTouchId=e.identifier,this.joystickActive=!0;const n=this.joystickOuter.getBoundingClientRect();this.joystickCenter={x:n.left+n.width/2,y:n.top+n.height/2},this.joystickRadius=n.width/2-25,this.updateJoystick(e.clientX,e.clientY)},{passive:!1}),document.addEventListener("touchmove",t=>{if(this.joystickActive)for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e];if(n.identifier===this.joystickTouchId){t.preventDefault(),this.updateJoystick(n.clientX,n.clientY);break}}},{passive:!1}),document.addEventListener("touchend",t=>{for(let e=0;e<t.changedTouches.length;e++)if(t.changedTouches[e].identifier===this.joystickTouchId){this.joystickTouchId=null,this.joystickActive=!1,this.joystickInner.style.transform="translate(-50%, -50%)",this.input.moveX=0,this.input.moveY=0;break}},{passive:!1})}updateJoystick(t,e){let n=t-this.joystickCenter.x,s=e-this.joystickCenter.y;const r=Math.sqrt(n*n+s*s);r>this.joystickRadius&&(n=n/r*this.joystickRadius,s=s/r*this.joystickRadius),this.joystickInner.style.transform=`translate(calc(-50% + ${n}px), calc(-50% + ${s}px))`,this.input.moveX=n/this.joystickRadius,this.input.moveY=-s/this.joystickRadius}setupButtons(){this.fireButton.addEventListener("touchstart",t=>{t.preventDefault(),t.stopPropagation(),this.input.fire=!0,this.fireButton.style.transform="scale(0.9)",this.fireButton.style.background="#ff444488",console.log("[Mobile] Fire START")},{passive:!1}),this.fireButton.addEventListener("touchend",t=>{t.preventDefault(),t.stopPropagation(),this.input.fire=!1,this.fireButton.style.transform="scale(1)",this.fireButton.style.background="#ff444444",console.log("[Mobile] Fire END")},{passive:!1}),this.fireButton.addEventListener("touchcancel",t=>{this.input.fire=!1,this.fireButton.style.transform="scale(1)",this.fireButton.style.background="#ff444444",console.log("[Mobile] Fire CANCEL")},{passive:!1}),this.reloadButton.addEventListener("touchstart",t=>{t.preventDefault(),this.input.reload=!0,this.reloadButton.style.transform="scale(0.9)"},{passive:!1}),this.reloadButton.addEventListener("touchend",t=>{t.preventDefault(),this.input.reload=!1,this.reloadButton.style.transform="scale(1)"},{passive:!1}),this.jumpButton.addEventListener("touchstart",t=>{t.preventDefault(),this.input.jump=!0,this.jumpButton.style.transform="scale(0.9)"},{passive:!1}),this.jumpButton.addEventListener("touchend",t=>{t.preventDefault(),this.input.jump=!1,this.jumpButton.style.transform="scale(1)"},{passive:!1}),this.weaponButtons.forEach((t,e)=>{t.addEventListener("touchstart",n=>{n.preventDefault(),e===0&&(this.input.weapon1=!0),e===1&&(this.input.weapon2=!0),e===2&&(this.input.weapon3=!0),t.style.background="#ffffff44"},{passive:!1}),t.addEventListener("touchend",n=>{n.preventDefault(),e===0&&(this.input.weapon1=!1),e===1&&(this.input.weapon2=!1),e===2&&(this.input.weapon3=!1),t.style.background="#88888844"},{passive:!1})})}onLookStart(t){if(this.lookTouchId!==null)return;t.preventDefault();const e=t.changedTouches[0];this.lookTouchId=e.identifier,this.lastLookPos={x:e.clientX,y:e.clientY}}onLookMove(t){for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e];if(n.identifier===this.lookTouchId){t.preventDefault();const s=n.clientX-this.lastLookPos.x,r=n.clientY-this.lastLookPos.y;this.lookDelta.x+=s*.5,this.lookDelta.y+=r*.5,this.lastLookPos={x:n.clientX,y:n.clientY};break}}}onLookEnd(t){for(let e=0;e<t.changedTouches.length;e++)if(t.changedTouches[e].identifier===this.lookTouchId){this.lookTouchId=null;break}}show(){this.enabled=!0,this.container.style.display="block"}hide(){this.enabled=!1,this.container.style.display="none"}getInput(){return this.input.lookX=this.lookDelta.x,this.input.lookY=this.lookDelta.y,this.lookDelta={x:0,y:0},{...this.input}}resetOneShot(){this.input.weapon1=!1,this.input.weapon2=!1,this.input.weapon3=!1,this.input.reload=!1,this.input.jump=!1}static isMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>0&&window.innerWidth<1024}}class o_{constructor(){this.listenerPos=new P}init(){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.master.gain.value=.5}play(t){if(!this.ctx)return;if(this.ctx.state==="suspended"){this.ctx.resume().catch(()=>{});return}const e=t.volume??1,n=t.position?t.position.distanceTo(this.listenerPos):0,s=t.position?Math.max(0,1-n/80):1,o={gunshot:{freq:150,dur:.15,decay:30},reload:{freq:300,dur:.4,decay:5,type:"triangle"},footstep:{freq:80,dur:.1,decay:20},hit:{freq:600,dur:.08,decay:40},kill:{freq:800,dur:.3,decay:8,type:"square"},damage:{freq:100,dur:.2,decay:10},ambient:{freq:60,dur:2,decay:1},wave_start:{freq:440,dur:.8,decay:3,type:"triangle"},headshot:{freq:1200,dur:.15,decay:20,type:"square"},pickup:{freq:660,dur:.2,decay:15,type:"triangle"}}[t.type];if(!o)return;const a=this.ctx.createOscillator(),l=this.ctx.createGain();if(a.type=o.type||"sine",a.frequency.value=o.freq,l.gain.setValueAtTime(e*s*.3,this.ctx.currentTime),l.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+o.dur),a.connect(l),l.connect(this.master),a.start(),a.stop(this.ctx.currentTime+o.dur),t.type==="gunshot"){const c=this.ctx.sampleRate*.05,h=this.ctx.createBuffer(1,c,this.ctx.sampleRate),u=h.getChannelData(0);for(let m=0;m<c;m++)u[m]=(Math.random()*2-1)*Math.exp(-m/c*5);const d=this.ctx.createBufferSource();d.buffer=h;const p=this.ctx.createGain();p.gain.value=e*s*.5,d.connect(p),p.connect(this.master),d.start(),d.stop(this.ctx.currentTime+.05)}}setListenerPosition(t,e){this.listenerPos.copy(t)}setVolume(t){this.master&&(this.master.gain.value=t)}}const ur=[],Bi=document.createElement("div");Bi.id="debug-overlay";Bi.style.cssText=`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 300px;
  max-height: 200px;
  overflow-y: auto;
  background: rgba(0,0,0,0.8);
  color: #0f0;
  font-family: monospace;
  font-size: 10px;
  padding: 8px;
  z-index: 9999;
  pointer-events: none;
  white-space: pre-wrap;
  word-break: break-all;
`;document.body.appendChild(Bi);const a_=console.log.bind(console);function uc(i){const t=new Date().toLocaleTimeString();ur.push(`[${t}] ${i}`),ur.length>30&&ur.shift(),Bi.textContent=ur.join(`
`),Bi.scrollTop=Bi.scrollHeight,a_(i)}const Cs=new Ng;Cs.init();const qi=Cs.getScene(),Fr=new Fg;Fr.build(qi);const Ne=new Bg;Ne.init(Cs.getDomElement());const Gn=new Hg;Gn.init();const on=new Vg,Ha=Fr.getSpawnPoints();on.init(qi,Fr.getWalls(),Ha[0]);const fn=new Yg;fn.init(qi,Ne.getCamera());const Qe=new jg;Qe.init(qi);const Or=new lh;Or.init(qi);Qe.onEnemyHit=(i,t)=>{Or.createBloodSplatter(i,t),je.gunShake()};Qe.onEnemyDeath=i=>{Or.createDeathExplosion(i),je.explosionShake(),Zi.maybeSpawn(i,.5)};Qe.onHeadshot=i=>{je.headshotSlowMo(),je.headshotFlash(),xn.play({type:"headshot"}),qn.showHeadshot()};const qn=new t_;qn.init();const fh=new e_;fh.init();const xn=new o_;xn.init();const l_=new r_,je=new Og,Ea=new dh,Je=dh.isMobile(),Zi=new Qg;Zi.init(qi);Zi.onHealthPickup=i=>{on.heal(i),xn.play({type:"pickup"}),qn.showPickup("health",i)};Zi.onAmmoPickup=i=>{fn.addReserveAmmo(i),xn.play({type:"pickup"}),qn.showPickup("ammo",i)};const Ps=new s_;let ms=0,Rr=0,vn=0,Cr=!1,ws=!1,hs=0,Pr=!1;Qe.onPlayerDamage=i=>{const t=on.takeDamage(i);qn.showDamage(),xn.play({type:"damage"}),je.damageShake(),t&&(ws=!0,Ne.unlock(),Ps.showGameOver(ms,Rr,vn))};function ph(){ms=0,Rr=0,vn=0,hs=0,Pr=!1,Cr=!0,ws=!1,on.reset(Ha[0]),Zi.clear(),mh(),Je?(Ne.mobileMode=!0,Ea.show(),document.documentElement.requestFullscreen?.().catch(()=>{})):Ne.lock()}function mh(){vn++,Pr=!1,Qe.spawnWave(vn),xn.play({type:"wave_start"}),qn.showWaveStart(vn),console.log("[Wave] Started wave",vn)}Ps.onStart=ph;Ps.onRestart=ph;Ps.showStart();const dc=document.getElementById("blocker");dc&&(dc.style.display="none");Je||document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&Cr&&!ws&&Ps.showPause()});let bo=0;Cs.onUpdate(i=>{if(!Cr||ws||!Je&&!Ne.isLocked())return;Je&&(bo++,bo%60===0&&console.log("[Mobile] Frame:",bo,"realDelta:",i.toFixed(4),"timeScale:",je.getTimeScale().toFixed(2))),je.update(i);const t=i*je.getTimeScale(),e=je.getShakeOffset(),n=Je?Ea.getInput():null;Je&&n?on.updateMobile(t,n,Ne):on.update(t,Gn,Ne);const s=on.getPosition();if(Ne.setPosition(s),Ne.applyShake(e.x,e.y),xn.setListenerPosition(s,Ne.getDirection()),je.setHealthVignette(on.getHealth()/Ht.PLAYER_MAX_HEALTH*100),fn.update(t),Or.update(t),Zi.update(t,s),Je?n?.fire??!1:Gn.isMouseDown(0))try{const u=fn.shoot();if(u&&u.length>0){uc("Shot fired! Hits: "+u.length),xn.play({type:"gunshot"}),je.gunShake();for(const d of u)if(d.object?.userData?.isEnemy){const p=fn.getCurrentWeapon(),m=Ne.getDirection();Qe.applyDamageAtPoint(d.point,p.damage,1,m),xn.play({type:"hit",position:d.point})}}}catch(u){uc("ERROR: "+u.message)}(Je?n?.reload??!1:Gn.isKeyDown("KeyR"))&&fn.reload(),(Je?n?.weapon1??!1:Gn.isKeyDown("Digit1"))&&fn.switchWeapon(0),(Je?n?.weapon2??!1:Gn.isKeyDown("Digit2"))&&fn.switchWeapon(1),(Je?n?.weapon3??!1:Gn.isKeyDown("Digit3"))&&fn.switchWeapon(2),Je&&Ea.resetOneShot(),Qe.update(t,on.getPosition());const o=Qe.getEnemies(),l=vn*(Ht.ENEMIES_PER_WAVE_BASE+(vn-1)*Ht.ENEMIES_PER_WAVE_INCREMENT)-o.length;if(l>hs){const u=l-hs;Rr+=u,ms+=u*Ht.KILL_SCORE;for(let d=0;d<u;d++)xn.play({type:"kill"}),qn.showKill(Ht.KILL_SCORE);hs=l}Qe.isWaveComplete()&&vn>0&&!Pr&&(Pr=!0,ms+=Ht.WAVE_BONUS,hs=0,je.waveSlowMo(),console.log("[Wave] Completed! Starting slow-mo..."),setTimeout(()=>{Cr&&!ws&&mh()},2e3));const c=fn.getHUDData();qn.update({health:on.getHealth(),maxHealth:Ht.PLAYER_MAX_HEALTH,ammo:c.ammo??0,maxAmmo:c.maxAmmo??0,reserveAmmo:c.reserveAmmo??0,weaponName:c.weaponName??"Unknown",score:ms,kills:Rr,wave:vn,isReloading:c.isReloading??!1,crosshairHit:!1,enemyCount:Qe.getAliveCount()}),fh.update(!1,c.isReloading??!1);const h=Qe.getEnemies().map(u=>({position:u.getPosition(),isDead:u.isDead()}));l_.update(on.getPosition(),Ne.getCamera().rotation.y,h),Gn.isKeyDown("Escape")&&Ne.unlock()});Cs.start(Ne.getCamera());console.log("[FPS Game] Initialized!");console.log(`[FPS Game] ${Fr.getWalls().length} walls, ${Ha.length} rooms`);
