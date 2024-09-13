import React from 'react';
import { Outlet } from 'react-router-dom';

export const Navigation = () => {
  	return (
    <>
		<nav className="max-w-screen-xl flex flex-wrap items-center mx-auto mb-6 lg:my-6 p-6 bg-white rounded-2xl shadow-md">
			<div className="w-full" id="navbar-default">
				<ul className="flex font-medium flex-row space-x-8 rtl:space-x-reverse">
					<li className='flex items-center'>
						<svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-10 w-10" viewBox="0 0 24 24"><path d="M2.047 14.667a.992.992 0 0 0 .466.607l1.909 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.002 1.002 0 0 0 1.366.366L12 20.75l1.91 1.104a1.002 1.002 0 0 0 1.366-.366l1.103-1.909h2.199a1 1 0 0 0 1-1V16.38l1.909-1.104a.999.999 0 0 0 .366-1.366L20.75 12l1.104-1.909a1 1 0 0 0-.366-1.366l-1.909-1.104V5.422a1 1 0 0 0-1-1H16.38l-1.103-1.909a1.004 1.004 0 0 0-.607-.466.994.994 0 0 0-.759.1L12 3.25l-1.909-1.104a.998.998 0 0 0-1.366.365l-1.104 1.91H5.422a1 1 0 0 0-1 1V7.62L2.513 8.725a1.001 1.001 0 0 0-.365 1.366L3.251 12l-1.104 1.909a1.003 1.003 0 0 0-.1.758z"></path></svg>
						<a href="/" className="block py-2 px-3 text-black">Inicio</a>
					</li>
					<li className='flex items-center'>
						<svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="fill-current h-7 w-7 text-red-500" viewBox="0 0 512.000000 514.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,514.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M2310 5126 c-371 -40 -690 -141 -1002 -317 -348 -195 -665 -488 -881 -814 -241 -363 -400 -810 -424 -1192 l-6 -103 676 0 677 0 4 23 c58 274 109 398 242 577 300 407 848 582 1328 425 316 -103 564 -314 711 -605 55 -109 72 -159 104 -300 l27 -115 644 -3 c355 -1 660 0 679 3 l34 6 -7 77 c-76 885 -618 1680 -1415 2077 -204 101 -467 192 -649 225 -241 43 -541 57 -742 36z"/> <path d="M2365 3495 c-334 -74 -609 -327 -715 -660 -31 -97 -40 -345 -16 -462 60 -296 266 -546 558 -675 133 -59 203 -70 403 -65 150 3 178 7 240 29 171 62 285 135 415 269 107 111 185 250 226 409 21 78 23 328 4 430 -56 305 -304 582 -620 692 -140 48 -358 63 -495 33z"/> <path d="M0 2381 c0 -86 29 -281 61 -410 84 -340 238 -669 441 -943 83 -112 368 -399 492 -497 340 -265 747 -439 1196 -508 162 -25 568 -25 730 0 439 68 881 254 1198 506 444 352 754 807 906 1330 48 165 96 431 96 532 l0 39 -674 0 c-396 0 -677 -4 -680 -9 -4 -5 -15 -51 -26 -103 -24 -119 -46 -181 -103 -293 -170 -338 -489 -584 -842 -650 -71 -14 -129 -16 -280 -13 -170 4 -200 8 -280 32 -257 77 -490 238 -644 445 -120 162 -178 301 -236 569 l-5 22 -675 0 -675 0 0 -49z"/> </g> </svg>
						<a href="/pokedex" className="block py-2 px-3 text-black">Pokedex</a>
					</li>
				</ul>
			</div>
		</nav>
      
      	<Outlet />
    </>
  );
};
