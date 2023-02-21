import'./index.scss';
import logoTitle from'../../../assets/images/logo-yo.png'
import { useRef } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import { useState } from 'react';
const Logo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()
    
    const [activeClass, setClass] = useState('solid-logo');
    
    useEffect(() => {
        setTimeout(() => {
            setClass(' solid-logo active');
        }, 1000);
      });
    return (
        <div className='logo-container' ref={bgRef}>
            <img className={activeClass} ref={solidLogoRef} src={logoTitle}  alt ="Y" />
            <svg  className='svg-container'
        version="1.0" 
        xmlns="http://www.w3.org/2000/svg"
        width="455.000000pt" 
        height="551.000000pt" 
        viewBox="0 0 455.000000 551.000000"
        preserveAspectRatio="xMidYMid meet">
       
       <g className='svg-container' 
       transform="translate(0.000000,551.000000) scale(0.100000,-0.100000)"
       fill=" 	#f000ff" 
       stroke="10px">
        
       <path ref={outlineLogoRef} d="M1190 5485 c-8 -2 -49 -9 -90 -15 -286 -47 -583 -230 -781 -480 -119
       -152 -188 -288 -237 -469 -23 -87 -26 -114 -26 -286 -1 -169 2 -199 22 -268
       80 -276 267 -487 497 -560 55 -17 94 -22 180 -22 98 0 116 3 167 27 150 70
       228 222 184 356 -22 65 -80 118 -173 157 -76 32 -173 90 -173 104 0 19 90 129
       150 184 154 139 352 183 506 113 45 -21 55 -29 49 -43 -38 -97 -127 -387 -140
       -458 -24 -128 -17 -274 19 -380 106 -311 414 -504 770 -482 50 3 117 14 149
       25 31 10 57 16 57 13 0 -8 -55 -140 -61 -145 -2 -2 -152 -6 -334 -9 l-330 -6
       -85 87 c-65 66 -94 105 -121 162 -19 41 -41 86 -47 100 -10 20 -12 2 -8 -100
       3 -101 8 -139 29 -200 14 -41 24 -76 23 -77 -1 -1 -47 -11 -102 -22 -233 -48
       -408 -116 -570 -223 -295 -195 -469 -440 -541 -761 -19 -89 -22 -336 -4 -422
       81 -387 346 -672 718 -772 90 -25 114 -27 283 -27 167 1 195 3 281 26 477 128
       752 467 1115 1376 l116 292 252 0 c274 0 346 9 434 54 106 54 161 138 169 261
       4 62 1 76 -24 125 -25 49 -36 59 -94 88 -58 29 -80 34 -171 40 l-105 7 298
       735 297 735 234 6 c236 6 290 14 370 55 49 25 99 76 126 128 22 43 26 64 26
       136 1 67 -3 92 -17 114 l-18 27 -41 -46 c-88 -100 -183 -125 -474 -125 l-212
       0 -114 -282 c-63 -156 -224 -554 -358 -885 l-244 -603 -48 0 c-26 0 -48 3 -48
       8 1 4 184 459 408 1012 l408 1005 234 6 c143 4 251 11 275 19 159 49 241 144
       252 291 9 117 -34 190 -135 231 -55 22 -70 23 -421 26 -242 2 -387 0 -430 -8
       -128 -22 -211 -82 -273 -196 -15 -27 -126 -296 -248 -599 -261 -647 -299 -737
       -353 -830 -89 -157 -168 -232 -278 -266 -95 -30 -203 -21 -257 20 l-24 17 51
       142 c72 202 97 374 72 507 l-7 40 -12 -62 c-7 -34 -49 -161 -92 -282 -44 -121
       -80 -225 -80 -231 0 -19 -18 -10 -24 13 -21 79 6 198 109 478 103 279 109 306
       110 479 0 172 -13 230 -82 370 -40 82 -60 108 -142 190 -180 178 -353 248
       -631 255 -80 2 -152 2 -160 0z m349 -42 c255 -50 474 -217 576 -438 51 -110
       68 -193 68 -330 -1 -154 -15 -214 -108 -469 -129 -355 -144 -441 -92 -542 56
       -109 152 -159 291 -152 143 7 242 71 339 218 76 116 117 210 377 855 133 330
       255 623 271 651 66 117 149 168 301 185 55 7 220 9 408 6 351 -5 391 -11 454
       -70 61 -58 71 -163 25 -267 -24 -54 -60 -93 -114 -125 -76 -45 -145 -56 -388
       -63 l-229 -7 -409 -1010 c-225 -555 -412 -1020 -415 -1031 -5 -21 -3 -21 208
       -27 232 -5 292 -16 348 -63 47 -40 63 -79 62 -155 0 -87 -30 -157 -89 -209
       -92 -80 -196 -100 -543 -100 l-216 0 -123 -307 c-68 -170 -156 -375 -196 -458
       -263 -541 -530 -810 -890 -896 -192 -45 -420 -43 -589 6 -319 92 -573 352
       -657 673 -27 100 -36 318 -19 433 62 430 408 810 870 957 250 80 426 102 862
       111 191 4 349 9 352 12 16 15 83 195 76 203 -4 4 -33 -1 -63 -13 -79 -29 -198
       -42 -298 -31 -121 12 -172 26 -279 77 -80 39 -107 58 -180 132 -144 145 -194
       268 -193 476 0 148 26 251 141 571 101 281 107 303 107 399 0 69 -4 86 -27
       127 -32 53 -86 99 -155 131 -41 19 -65 22 -164 22 l-116 0 -89 -44 c-249 -124
       -423 -431 -383 -679 22 -138 75 -204 217 -271 136 -65 155 -76 187 -116 28
       -35 30 -42 30 -123 0 -101 -13 -131 -81 -198 -65 -62 -135 -86 -254 -86 -205
       1 -379 98 -516 288 -191 265 -216 653 -65 1004 100 232 327 478 566 614 234
       134 536 183 804 129z m-157 -558 c58 -20 132 -84 160 -138 17 -34 20 -54 16
       -126 -2 -48 -7 -92 -11 -98 -5 -9 -20 0 -48 27 -116 113 -296 129 -469 42
       -130 -64 -263 -215 -325 -367 -27 -66 -35 -56 -35 43 1 176 64 317 210 463
       100 101 177 149 270 169 60 12 174 5 232 -15z M1685 2289 c-263 -25 -459 -86 -622 -195 -221 -147 -333 -387 -278
       -597 35 -134 115 -235 233 -290 56 -27 81 -32 154 -35 256 -11 444 150 639
       543 76 155 249 566 242 578 -5 9 -252 7 -368 -4z m293 -131 c-27 -68 -54 -127
       -58 -132 -5 -5 -71 -13 -147 -17 -255 -17 -428 -56 -588 -133 -161 -78 -286
       -192 -345 -318 -15 -32 -30 -55 -34 -51 -15 15 -5 183 14 245 58 187 256 361
       505 443 142 46 388 79 622 84 l82 1 -51 -122z m-223 -505 c-104 -190 -226
       -335 -335 -400 -164 -96 -374 -77 -494 46 l-39 40 32 40 c102 129 274 230 482
       286 96 25 269 52 347 54 l44 1 -37 -67z M71 3654 c-1 -112 10 -187 41 -284 78 -242 256 -437 463 -507 252
       -86 493 10 536 215 12 62 1 140 -26 176 -14 19 -16 18 -50 -22 -55 -64 -147
       -105 -250 -110 -171 -9 -320 48 -455 174 -120 114 -195 236 -240 392 l-19 67
       0 -101z M3457 2144 c-22 -24 -61 -56 -88 -69 -92 -47 -153 -55 -434 -55
       l-260 0 -69 -177 c-38 -98 -102 -255 -142 -350 -354 -832 -688 -1146 -1244
       -1170 -308 -14 -545 70 -752 266 -51 48 -112 119 -144 167 -56 84 -116 218
       -129 287 -4 20 -11 40 -16 43 -24 15 2 -243 37 -363 88 -303 333 -551 639
       -646 222 -69 524 -57 742 29 219 87 391 237 558 489 148 223 248 428 421 864
       l108 271 251 0 c323 0 416 19 509 100 91 81 125 262 64 342 -12 15 -17 12 -51
       -28z"/>
       </g>
       </svg>
        </div>

        
    )
}
export default Logo