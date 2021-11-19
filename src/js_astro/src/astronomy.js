/*
 * �V���v�Z�֌W�X�N���v�g version 0.18j at 2021/02/27
 * Copyright (c) 1999-2001, 2004, 2005, 2017, 2021 Yoshihiro Sakai & Sakai Institute of Astrology
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * 2017/06/05[0.16j] �O���v�f�U�p���łɑΉ�
 * 2017/09/15[0.17j] ���s�̌v�Z�������������łɏo�T������
 * 2021/02/27[0.18j] ��̖��܂�胍�W�b�N������
 */

// $PI = 3.141592653589793;
const deg2rad = Math.PI / 180.0;

function sin4deg( X ){
	return Math.sin( X * deg2rad );
}

function cos4deg( X ){
	return Math.cos( X * deg2rad );
}

function tan4deg( X ){
	return Math.tan( X * deg2rad );
}

function asin4deg( X ){
	return Math.asin( X ) / deg2rad;
}

function acos4deg( X ){
	return Math.acos( X ) / deg2rad;
}

function atan4deg( X ){
	return Math.atan( X ) / deg2rad;
}

function atan24deg( X, Y ){
	return Math.atan2( X, Y ) / deg2rad;
}

function sgn( X ){
	return Math.sign( X );
}

function fmod( X, t ){
	var res = 0.0;
	res = X - Math.floor( X / t ) * t;
	if( res < 0.0 ){
		res += t;
	}
	return res;
}

function mod360( X ){
	return X - Math.floor( X / 360.0 ) * 360.0;
}

function floor( X ){
	return Math.floor( X );
}

function ceil( X ){
	return Math.ceil( X );
}


// �O���S���I���p�I
function cnvCalendar( JD ){
	JD += 0.5;
	var Z = Math.floor( JD );
	var F = JD - Z;

	var A = 0;
	if(Z >= 2299161){
		var alpha = Math.floor((Z - 1867216.25) / 36524.25);
		A = Z + 1 + alpha - Math.floor(alpha / 4);
	} else {
		A = Z;
	}

	var B = A + 1524;
	var C = Math.floor((B - 122.1) / 365.25);
	var D = Math.floor(365.25 * C);
	var E = Math.floor((B - D) / 30.6001);

	var da = B - D - Math.floor(30.6001 * E);
	var mo = (E < 13.5) ? (E - 1) : (E - 13);
	var ye = (mo > 2.5) ? (C - 4716) : (C - 4715);

	var ti = F * 24.0;
	var ho = Math.floor(ti);
	var mi = (ti - ho) * 60.0;

	var res = new Array(ye, mo, da, ho, mi);
	return res;
}

// ���̓��̃����E�X�����v�Z����
function calJD(ye, mo, da, ho, mi){ // �����̏�
	var y0 = (mo > 2) ? ye : (ye -  1);
	var m0 = (mo > 2) ? mo : (mo + 12);
	var JD = Math.floor(365.25 * y0) + Math.floor(y0 / 400) - Math.floor(y0 / 100);
	JD	+= Math.floor(30.59 * (m0 - 2)) + da;
	JD	+= ((ho - 9) * 60.0 + mi) / 1440.0 + 1721088.5;

	return JD;
}

function cnvJDr( JD ){ // �����́�������
	var date = cnvCalendar(JD);
	var ye = date[ 0 ];
	var mo = date[ 1 ];
	var da = date[ 2 ];
	var JDz = calJDz(ye, mo, da);

	return JDz;
}

function calJDz(year, month, day){ // ������
	var yt = year;
	var mt = month;
	var dt = day;

	if(month < 3){
		yt--;
		mt += 12;
	}

	var JD = Math.floor(365.25 * yt) + Math.floor(30.6001 * (mt + 1));
	JD += dt + 1720995;
	JD += 2 - Math.floor(yt / 100) + Math.floor(yt / 400);

	return JD;
}

// d, T��z��ŕԂ��B
function calTimeCoefficient( JD ){
	var d = JD - 2451545.0;
	var T = d / 36525.0;
	var coef = new Array(d, T);

	return coef;
}

// �O���v�f�U�p���Ł��ʏ�̋O���v�f
// a : semi-major axis (au).
// l : mean longitude (degree).
// h : e * sin(pi).
// k : e * cos(pi).
// p : g * sin(om).
// q : g * cos(om).
// e : eccentricity.
// g : sine of the half inclination.
// pi: longitude of the perihelion.
// om: longitude of the ascending node.
function convertOrbitalElement( a, l, h, k, p, q ) {
	var L = l;
	var e = Math.sqrt( h * h + k * k );
	var g = Math.sqrt( p * p + q * q );
	var i = Math.asin( g ) * 2.0 / deg2rad;
	var opi = Math.atan2( h, k ) / deg2rad;
	var omg = Math.atan2( p, q ) / deg2rad;

	var result = [L, opi, omg, i, e, a];
	return result;
}

// �܂Ƃ߂ċO���v�Z�B�Ԓl�́i���o�A���܁A���a�j�B
function orbitWork(L, opi, omg, i, e, a){
	var M = mod360(L - opi);
	var E = mod360(solveKepler(M, e));

	var rE  = E * deg2rad;
	var thv = Math.sqrt( (1 + e) / (1 - e) ) * Math.tan(rE / 2.0);
	var v   = mod360(Math.atan2(thv, 1.0) * 2.0 / deg2rad);
	var r   = a * (1.0 - e * Math.cos(rE));
	var u   = L + v - M - omg;
	
	var ri = i * deg2rad;
	var ru = u * deg2rad;
	var l  = mod360(omg + Math.atan2(Math.cos(ri) * Math.sin(ru), Math.cos(ru)) / deg2rad);

	var rb = Math.asin(Math.sin(ru) * Math.sin(ri));
	var b  = rb / deg2rad;

	var res = new Array(l, b, r);
	return res;
}

// Kepler������(M = E - e sinE)�������B
function solveKepler(M, e){
	var Mr = M * deg2rad;
	var Er = Mr;

	for( var i = 0; i < 20; i++ ){
		Er = Mr + e * Math.sin( Er );
	}

	return Er / deg2rad;
}

// ���S�ʒu����n�S�ʒu�փR���o�[�g���A�n�S���o��Ԃ��B
function convertGeocentric( earthCoor, planetCoor ){
	var lp, bp, rp, ls, bs, rs;

	ls = earthCoor[ 0 ];
	bs = earthCoor[ 1 ];
	rs = earthCoor[ 2 ];

	lp = planetCoor[ 0 ];
	bp = planetCoor[ 1 ];
	rp = planetCoor[ 2 ];

	var xs = rs * Math.cos(ls * deg2rad) * Math.cos(bs * deg2rad);
	var ys = rs * Math.sin(ls * deg2rad) * Math.cos(bs * deg2rad);
	var zs = rs *                          Math.sin(bs * deg2rad);
	var xp = rp * Math.cos(lp * deg2rad) * Math.cos(bp * deg2rad);
	var yp = rp * Math.sin(lp * deg2rad) * Math.cos(bp * deg2rad);
	var zp = rp *                          Math.sin(bp * deg2rad);

	var xg = xp + xs;
	var yg = yp + ys;
	var zg = zp + zs;

	var rg = Math.sqrt(xg * xg + yg * yg + zg * zg);
	var lg = Math.atan2(yg, xg) / deg2rad;
	if(lg < 0.0) lg += 360.0;
	var bg = asin4deg(zg / rg);

	var res = new Array(lg, bg, rg);
	return res;
}

// �������W�n����ԓ����W�n�֕ϊ�����B
function convertEquatorial(lon, lat, obl){
	var xs = cos4deg(lon) * cos4deg(lat);
	var ys = sin4deg(lon) * cos4deg(lat);
	var zs =                sin4deg(lat);

	var xd = xs;
	var yd = ys * cos4deg(obl) - zs * sin4deg(obl);
	var zd = ys * sin4deg(obl) + zs * cos4deg(obl);

	var RA = Math.atan2(yd, xd) / deg2rad;
	if(RA < 0.0) RA += 360.0;
	var Dec = asin4deg(zd);

	var res = new Array(RA, Dec);
	return res;
}

// �΍��␳
function coordinateConvertFromJ2000( arg ){
	var zeta, zz, theta;
	var x, y, z, xd, yd, zd, xs, ys, zs;

	var xs  = arg[ 0 ];
	var ys  = arg[ 1 ];
	var zs  = arg[ 2 ];
	var tjd = arg[ 3 ];

	var T = (tjd - 2451545.0) / 36525.0;

	var zeta  = ((( 0.017998 * T + 0.30188) * T + 2306.2181) * T) / 3600.0;
	var zz    = ((( 0.018203 * T + 1.09468) * T + 2306.2181) * T) / 3600.0;
	var theta = (((-0.041833 * T - 0.42665) * T + 2004.3109) * T) / 3600.0;

// Step 1
	x =  sin4deg(zeta) * xs + cos4deg(zeta) * ys;
	y = -cos4deg(zeta) * xs + sin4deg(zeta) * ys;
	z = zs;

// Step 2;
// 	x = x;
	y = 0 * x + cos4deg(theta) * y + sin4deg(theta) * z;
	z = 0 * x - sin4deg(theta) * y + cos4deg(theta) * z;

// Step 3
	xd = -sin4deg(zz) * x - cos4deg(zz) * y;
	yd =  cos4deg(zz) * x - sin4deg(zz) * y;
	zd = z;

	var res = new Array(xd, yd, zd);
	return res;
}

// �n���P�����v�Z
function calLST(JD, ho, mi, lo){
	var JD0 = Math.floor(JD - 0.5) + 0.5;
	var T = (JD0 - 2451545.0) / 36525.0;
	var UT = (JD - JD0) * 360.0 * 1.002737909350795;
	if( UT < 0 ) UT += 360.0;

	//�O���j�b�W�P�����v�Z
	var GST  = 0.279057273 + 100.0021390378 * T + 1.077591667e-06 * T * T;
	    GST  = GST - Math.floor(GST);
	    GST *= 360.0;

	// �n���P�����v�Z�{�͓��␳
	var LST = mod360(GST + UT + lo);
	var dpsi = calNutation(JD);
	var eps  = calOblique(JD);
	LST += dpsi * cos4deg(eps) / 3600.0;
	if(LST < 0.0) LST += 360.0;

	return LST;
}

// �����X�Ίp���v�Z����֐�
function calOblique(JD ){
	var T = (JD - 2451545.0) / 36525.0;
	var Omg = mod360(125.00452 - T *   1934.136261);
	var Ls  = mod360(280.4665  + T *  36000.7698);
	var Lm  = mod360(218.3165  + T * 481267.8813);

	var e = 84381.448 + T * (-46.8150 + T * (-0.00059 + T * 0.001813));
	var deps  =  9.20 * cos4deg(1.0 * Omg);
	    deps +=  0.57 * cos4deg(2.0 * Ls);
	    deps +=  0.10 * cos4deg(2.0 * Lm);
	    deps += -0.09 * cos4deg(2.0 * Omg);

	return (e + deps) / 3600.0;
}

// �͓����v�Z����֐��i�ȗ��Łj
function calNutation( JD ){
	var T = (JD - 2451545.0) / 36525.0;

	var Omg = mod360(125.00452 - T *   1934.136261);
	var Ls  = mod360(280.4665  + T *  36000.7698);
	var Lm  = mod360(218.3165  + T * 481267.8813);

	var dpsi  = -17.20 * sin4deg(1.0 * Omg);
	    dpsi +=  -1.32 * sin4deg(2.0 * Ls);
	    dpsi +=  -0.23 * sin4deg(2.0 * Lm);
	    dpsi +=   0.21 * sin4deg(2.0 * Omg);

	return dpsi;
}

// �ώ������v�Z����֐�
function calEqT( JD ){
	var  T = ( JD - 2451545.0 ) / 36525.0;

	var L0  = mod360( 36000.76983 * T );
		L0  = mod360( 280.46646 + L0 + 0.0003032 * T * T );
		L0 *= deg2rad;

	var  M  = mod360( 35999.05029 * T );
		 M  = mod360( 357.52911 + M  - 0.0001537 * T * T );
		 M *= deg2rad;

	var  e  = 0.016708634 + T * ( -0.000042037 - 0.0000001267 * T );

	var  y  = calOblique( JD );
		 y  = tan4deg( y / 2.0 );
		 y  = y * y;

	var  E  = y * Math.sin( 2 * L0 ) - 2.0 * e * Math.sin( M );
		 E += 4.0 * e * y * Math.sin( M ) * Math.cos( 2.0 * L0 );
		 E -= y * y * Math.sin( 4.0 * L0 ) / 2.0;
		 E -= 5.0 * e * e * Math.sin( 2.0 * M ) / 4.0;

	E /= deg2rad;
	return ( E * 4.0 );
}

////////////////////////////////

// �J�����_�[�֌W�B
function calDayOfWeek(year, month, day){
	var JD = calJDz(year, month, day);
	var you = (JD + 1) % 7;
	return you;
}

function chkLeap( year ){
	var chk = 0;

	if(year %   4 == 0) chk = 1;
	if(year % 100 == 0) chk = 0;
	if(year % 400 == 0) chk = 1;

	return chk;
}

function maxday(year, month){
	var mday = [31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	var md = mday[ month ];
	if( month == 2 && chkLeap( year ) ){
		md = 29;
	}

	return md;
}

// ���s���Ǘ�����֐�
// formula A : Notes Scientifiques et Techniques du Bureau des Longitudes, nr. S055
// from ftp://cyrano-se.obspm.fr/pub/6_documents/4_lunar_tables/newexp.pdf
// formula B : Polynomial Expressions for Delta T (��T)
// from https://eclipse.gsfc.nasa.gov/SEhelp/deltatpoly2004.html
// formula C : Delta T : Polynomial Approximation of Time Period 1620-2013
// from https://www.hindawi.com/archive/2014/480964/ (license: CC-BY-3.0)
function correctTDT(JD){
	var year = ( JD - 2451545.0 ) / 365.2425 + 2000.0;
	var t, dt;

	if( year < 948 ){ // formula A.26
		t = ( JD - 2451545.0 ) / 36525.0;
		dt = 2177.0 + t * ( 497.0 + t * 44.1 );
	} else if( year < 1600 ){ // formula A.25
		t = ( JD - 2451545.0 ) / 36525.0;
		dt =  102.0 + t * ( 102.0 + t * 25.3 );
	} else if( year < 1620 ){ // formula B
		t = year - 1600;
		dt = 120 + t * ( -0.9808 + t * ( -0.01532 + t / 7129 ) );
	} else if( year < 2014 ){ // formula C
		// last elements are sentinels.
		var tep = [     1620,     1673,     1730,      1798,      1844,     1878,      1905,      1946,      1990,  2014 ];
		var tk  = [    3.670,    3.120,    2.495,     1.925,     1.525,    1.220,     0.880,     0.455,     0.115, 0.000 ];
		var ta0 = [   76.541,   10.872,   13.480,    12.584,     6.364,   -5.058,    13.392,    30.782,    55.281, 0.000 ];
		var ta1 = [ -253.532,  -40.744,   13.075,     1.929,    11.004,   -1.701,   128.592,    34.348,    91.248, 0.000 ];
		var ta2 = [  695.901,  236.890,    8.635,    60.896,   407.776,  -46.403,  -279.165,    46.452,    87.202, 0.000 ];
		var ta3 = [-1256.982, -351.537,   -3.307, -1432.216, -4168.394, -866.171, -1282.050,  1295.550, -3092.565, 0.000 ];
		var ta4 = [  627.152,   36.612, -128.294,  3129.071,  7561.686, 5917.585,  4039.490, -3210.913,  8255.422, 0.000 ];

		var i = 0;
		for( var j = 0; j < tep.length; j++ ){
			if( tep[ j ] <= year && year < tep[ j + 1 ] ){
				i = j;
				break;
			}
		}
		var k  = tk[ i ];
		var a0 = ta0[ i ];
		var a1 = ta1[ i ];
		var a2 = ta2[ i ];
		var a3 = ta3[ i ];
		var a4 = ta4[ i ];

		var u = k + ( year - 2000 ) / 100;
		dt = a0 + u * ( a1 + u * ( a2 + u * ( a3 + u * a4 ) ) );
	} else { // formula A.25
		t = ( JD - 2451545.0 ) / 36525.0;
		dt =  102.0 + t * ( 102.0 + t * 25.3 );
		if( year < 2100 ){
			dt += 0.37 * ( year - 2100 ); // from "Astronomical Algorithms" p.78
		}
	}

	dt /= 86400.0;
	return dt;
}

function advanceDate( date, step ){
	return encodeDate(cnvCalendar(calJDz(decodeDate(date)) + step));
}

function calDist(sy, sm, sd, ey, em, ed){
	return calJDz(ey, em, ed) - calJDz(sy, sm, sd);
}

function decodeDate( date ){
	var ye = Math.floor( date / 10000 );
	var mo = Math.floor((date % 10000) / 100);
	var da =             date %   100;

	var res = new Array(ye, mo, da);
	return res;
}

function decodeTime( time ){
	var ho = Math.floor(time / 100);
	var mi = fmod(time, 100);

	var res = new Array(ho, mi);
	return res;
}

function encodeDate(ye, mo, da){
	return ye * 10000 + mo * 100 + da;
}

function encodeTime(ho, mi){
	return ho * 100 + mi;
}



var jplMode = 1;

// �V�̈ʒu��z��ŕԂ������֐�
function calPlanetPosition( ye, mo, da, ho, mi, pid ){
	var coor = new Array( 2 );
	coor = findPlaceCoor( pid );
	var lo = coor[ 0 ];
	var la = coor[ 1 ];

	var res = new Array();
	res = calPlanetPosition2( ye, mo, da, ho, mi, lo, la );

	return res;
}

function calPlanetPosition2( ye, mo, da, ho, mi, lon, lat ){
	var i;

	var JD   = calJD( ye, mo, da, ho, mi );
	var lst  = calLST( JD, ho, mi, lon );
	var date = ye * 10000 + mo * 100 + da * 1;
	var plapos = new Array();

	JD += correctTDT( JD );
	var coef = calTimeCoefficient( JD );
	var d = coef[ 0 ];
	var T = coef[ 1 ];

	plapos[ 0 ] = JD;

	for( var i = 1; i <= 10; i++ ){
		plapos[ i ] = calPlaPos( JD, i );
	}

	var luna = new Array( 2 );
	luna = calPositLuna( JD );
	plapos[ 11 ] = luna[ 0 ];
	plapos[ 12 ] = luna[ 1 ];

	var obl = calOblique( JD );
	var angle = new Array( 2 );
	angle = calGeoPoint( lst, lat, obl );
	plapos[13] = angle[ 0 ];
	plapos[14] = angle[ 1 ];

	var dpsi = calNutation( JD ) / 3600.0;
	for( var i = 1; i <= 12; i++){
		plapos[ i ] -= dpsi;
		if( plapos[ i ] <    0.0){
			plapos[ i ] += 360.0;
		} else if( plapos[ i ] >= 360.0){
			plapos[ i ] -= 360.0;
		}
	}

	return plapos;
}

// �e�V�̂̉��o�v�Z�^JD�͒n���͊w���
function calPlaPos( JD, pid ){
	var T  = ( JD - 2451545.0 ) /  36525.0;
	var T2 = ( JD - 2451545.0 ) / 365250.0;

// ���s���萔
	var C = [0.00347, 0.00484, 0.00700, 0.01298, 0.01756, 0.02490, 0.03121, 0.03461];
	var dl;
	var epos = new Array(3);
	var gpos = new Array(3);
	var ppos = new Array(3);

	epos = calPositSO( T2 );
	if( pid == 1 ){ // �v�Z�ڕW�����z�̏ꍇ
		gpos[ 0 ] = epos[ 0 ] - 0.005693 / epos[ 2 ];
	} else if( pid == 2 ){ // �v�Z�ڕW�����̏ꍇ
		gpos = calPositMO(T);
	} else {
		switch( pid ){
			case 3:
				ppos = calPositME( T2 );
				break;
			case 4:
				ppos = calPositVE( T2 );
				break;
			case 5:
				ppos = calPositMA( T2 );
				break;
			case 6:
				ppos = calPositJU( T2 );
				break;
			case 7:
				ppos = calPositSA( T2 );
				break;
			case 8:
				ppos = calPositUR( T2 );
				break;
			case 9:
				ppos = calPositNE( T2 );
				break;
			case 10:
				if( -1.15 <= T && T < 1.0 ){ // Pluto_mee valids thru 1885-2099
					ppos = calPositPL_mee( T );
				} else { // Pluto_obspm valids thru -3000 - 3000, but intentionally uses to 0 - 4000
					ppos = calPositPL_obspm( T );
				}
				ppos[ 0 ] += 5029.0966 / 3600.0 * T;  // ���^�ߎ��̍΍��␳����
				break;
		}
		gpos = convertGeocentric( epos, ppos );
		dl  = -0.005693  * Math.cos( ( gpos[ 0 ] - epos[ 0 ] ) * Math.PI / 180.0 );
		dl -= C[ pid - 3 ] * Math.cos( ( gpos[ 0 ] - ppos[ 0 ] ) * Math.PI / 180.0 ) / ppos[ 2 ];
		gpos[ 0 ] += dl;
	}

	return gpos[ 0 ];
}

// �e�v�f�̌v�Z
function calVsopTerm( T, term ){
	var res = 0.0;

	for( var i = term.length - 1; i >= 0; i-- ){
		res = term[ i ] + res * T;
	}

	return res;
}

function calPositSO( T ){
	var lo = 0.0;
	var bo = 0.0;
	var ro = 0.0;
	var Lon = new Array();
	var Lat = new Array();
	var Rad = new Array();

// Earth(Sun)'s Longitude
	Lon[0]  =     1.75347 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[0] +=     0.03342 * Math.cos( 4.66926 +    6283.07585 * T);
	Lon[0] +=     0.00035 * Math.cos( 4.62610 +   12566.15170 * T);
	Lon[1]  =  6283.31967 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[1] +=     0.00206 * Math.cos( 2.67823 +    6283.07585 * T);
	Lon[2]  =     0.00053 * Math.cos( 0.00000 +       0.00000 * T);

// Earth(Sun)'s Radius Vector
	Rad[0]  =     1.00014 * Math.cos( 0.00000 +       0.00000 * T);
	Rad[0] +=     0.01671 * Math.cos( 3.09846 +    6283.07585 * T);
	Rad[0] +=     0.00014 * Math.cos( 3.05525 +   12566.15170 * T);
	Rad[1]  =     0.00103 * Math.cos( 1.10749 +    6283.07585 * T);

	lo = mod360( calVsopTerm( T, Lon ) / deg2rad);
	ro = calVsopTerm( T, Rad );

	lo = mod360( lo + 180.0 );

	var res = new Array( lo, bo, ro );
	return res;
}

function calPositMO( T ){
	var mf = new Array();
	var dl, db;

// Mean Longitude of the Moon(J2000.0)
	var W1 = 481266.0 * T;
	W1  = mod360( W1 );
	W1 +=   0.48437 * T;
	W1 -=   0.00163 * T * T;
	W1 += 218.31665;
	W1  = mod360( W1 );

// D : Mean elongation of the Moon
	mf[0]  = 445267.0 * T;
	mf[0]  = mod360( mf[0] );
	mf[0] +=   0.11151 * T;
	mf[0] -=   0.00163 * T * T;
	mf[0] += 297.85020;
	mf[0]  = mod360( mf[0] );

// l' : Mean anomary of the Sun
	mf[1]  =  35999.0 * T;
	mf[1]  = mod360( mf[1] );
	mf[1] +=   0.05029 * T;
	mf[1] -=   0.00015 * T * T;
	mf[1] += 357.51687;
	mf[1]  = mod360( mf[1] );

// l : Mean anomary of the Moon
	mf[2]  = 477198.0 * T;
	mf[2]  = mod360( mf[2] );
	mf[2] +=   0.86763  * T;
	mf[2] +=   0.008997 * T * T;
	mf[2] += 134.96341;
	mf[2]  = mod360( mf[2] );

// F : Argument of latitude of the Moon
	mf[3]  = 483202.0 * T;
	mf[3]  = mod360( mf[3] );
	mf[3] +=   0.01753 * T;
	mf[3] -=   0.00340 * T * T;
	mf[3] +=  93.27210;
	mf[3]  = mod360( mf[3] );

	dl  = +6.28876 * sin4deg(0 * mf[0] + 0 * mf[1] + 1 * mf[2] + 0 * mf[3]);
	dl += +1.27401 * sin4deg(2 * mf[0] + 0 * mf[1] - 1 * mf[2] + 0 * mf[3]);
	dl += +0.65831 * sin4deg(2 * mf[0] + 0 * mf[1] + 0 * mf[2] + 0 * mf[3]);
	dl += +0.21362 * sin4deg(0 * mf[0] + 0 * mf[1] + 2 * mf[2] + 0 * mf[3]);
	dl += -0.18512 * sin4deg(0 * mf[0] + 1 * mf[1] + 0 * mf[2] + 0 * mf[3]);
	dl += -0.11433 * sin4deg(0 * mf[0] + 0 * mf[1] + 0 * mf[2] + 2 * mf[3]);
	dl += +0.05879 * sin4deg(2 * mf[0] + 0 * mf[1] - 2 * mf[2] + 0 * mf[3]);
	dl += +0.05707 * sin4deg(2 * mf[0] - 1 * mf[1] - 1 * mf[2] + 0 * mf[3]);
	dl += +0.05332 * sin4deg(2 * mf[0] + 0 * mf[1] + 1 * mf[2] + 0 * mf[3]);
	dl += +0.04576 * sin4deg(2 * mf[0] - 1 * mf[1] + 0 * mf[2] + 0 * mf[3]);
	dl += -0.04092 * sin4deg(0 * mf[0] + 1 * mf[1] - 1 * mf[2] + 0 * mf[3]);
	dl += -0.03472 * sin4deg(1 * mf[0] + 0 * mf[1] + 0 * mf[2] + 0 * mf[3]);
	dl += -0.03038 * sin4deg(0 * mf[0] + 1 * mf[1] + 1 * mf[2] + 0 * mf[3]);
	dl += +0.01533 * sin4deg(2 * mf[0] + 0 * mf[1] + 0 * mf[2] - 2 * mf[3]);
	dl += -0.01253 * sin4deg(0 * mf[0] + 0 * mf[1] + 1 * mf[2] + 2 * mf[3]);
	dl += +0.01098 * sin4deg(0 * mf[0] + 0 * mf[1] + 1 * mf[2] - 2 * mf[3]);
	dl += +0.01067 * sin4deg(4 * mf[0] + 0 * mf[1] - 1 * mf[2] + 0 * mf[3]);
	dl += +0.01003 * sin4deg(0 * mf[0] + 0 * mf[1] + 3 * mf[2] + 0 * mf[3]);
	dl += +0.00855 * sin4deg(4 * mf[0] + 0 * mf[1] - 2 * mf[2] + 0 * mf[3]);

	db  = +5.12817 * sin4deg(0 * mf[0] + 0 * mf[1] + 0 * mf[2] + 1 * mf[3]);
	db += +0.27769 * sin4deg(0 * mf[0] + 0 * mf[1] + 1 * mf[2] - 1 * mf[3]);
	db += +0.28060 * sin4deg(0 * mf[0] + 0 * mf[1] + 1 * mf[2] + 1 * mf[3]);
	db += +0.00882 * sin4deg(0 * mf[0] + 0 * mf[1] + 2 * mf[2] - 1 * mf[3]);
	db += +0.01720 * sin4deg(0 * mf[0] + 0 * mf[1] + 2 * mf[2] + 1 * mf[3]);
	db += +0.04627 * sin4deg(2 * mf[0] + 0 * mf[1] - 1 * mf[2] - 1 * mf[3]);
	db += +0.05541 * sin4deg(2 * mf[0] + 0 * mf[1] - 1 * mf[2] + 1 * mf[3]);
	db += +0.17324 * sin4deg(2 * mf[0] + 0 * mf[1] + 0 * mf[2] - 1 * mf[3]);
	db += +0.03257 * sin4deg(2 * mf[0] + 0 * mf[1] + 0 * mf[2] + 1 * mf[3]);
	db += +0.00927 * sin4deg(2 * mf[0] + 0 * mf[1] + 1 * mf[2] - 1 * mf[3]);

	W1 += dl + 5029.0966 / 3600.0 * T;

	var res = new Array( W1, db );
	return res;
}

function calPositME( T ){
	var lo = 0.0;
	var bo = 0.0;
	var ro = 0.0;
	var Lon = new Array();
	var Lat = new Array();
	var Rad = new Array();

// Mercury's Longitude
	Lon[0]  =     4.40251 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[0] +=     0.40989 * Math.cos( 1.48302 +   26087.90314 * T);
	Lon[0] +=     0.05046 * Math.cos( 4.47785 +   52175.80628 * T);
	Lon[0] +=     0.00855 * Math.cos( 1.16520 +   78263.70942 * T);
	Lon[0] +=     0.00166 * Math.cos( 4.11969 +  104351.61257 * T);
	Lon[0] +=     0.00035 * Math.cos( 0.77931 +  130439.51571 * T);
	Lon[1]  = 26088.14706 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[1] +=     0.01126 * Math.cos( 6.21704 +   26087.90314 * T);
	Lon[1] +=     0.00303 * Math.cos( 3.05565 +   52175.80628 * T);
	Lon[1] +=     0.00081 * Math.cos( 6.10455 +   78263.70942 * T);
	Lon[1] +=     0.00021 * Math.cos( 2.83532 +  104351.61257 * T);
	Lon[2]  =     0.00053 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[2] +=     0.00017 * Math.cos( 4.69072 +   26087.90314 * T);
// Mercury's Latitude
	Lat[0]  =     0.11738 * Math.cos( 1.98357 +   26087.90314 * T);
	Lat[0] +=     0.02388 * Math.cos( 5.03739 +   52175.80628 * T);
	Lat[0] +=     0.01223 * Math.cos( 3.14159 +       0.00000 * T);
	Lat[0] +=     0.00543 * Math.cos( 1.79644 +   78263.70942 * T);
	Lat[0] +=     0.00130 * Math.cos( 4.83233 +  104351.61257 * T);
	Lat[0] +=     0.00032 * Math.cos( 1.58088 +  130439.51571 * T);
	Lat[1]  =     0.00429 * Math.cos( 3.50170 +   26087.90314 * T);
	Lat[1] +=     0.00146 * Math.cos( 3.14159 +       0.00000 * T);
	Lat[1] +=     0.00023 * Math.cos( 0.01515 +   52175.80628 * T);
	Lat[1] +=     0.00011 * Math.cos( 0.48540 +   78263.70942 * T);
	Lat[2]  =     0.00012 * Math.cos( 4.79066 +   26087.90314 * T);
// Mercury's Radius Vector
	Rad[0]  =     0.39528 * Math.cos( 0.00000 +       0.00000 * T);
	Rad[0] +=     0.07834 * Math.cos( 6.19234 +   26087.90314 * T);
	Rad[0] +=     0.00796 * Math.cos( 2.95990 +   52175.80628 * T);
	Rad[0] +=     0.00121 * Math.cos( 6.01064 +   78263.70942 * T);
	Rad[0] +=     0.00022 * Math.cos( 2.77820 +  104351.61257 * T);
	Rad[1]  =     0.00217 * Math.cos( 4.65617 +   26087.90314 * T);
	Rad[1] +=     0.00044 * Math.cos( 1.42386 +   52175.80628 * T);
	Rad[1] +=     0.00010 * Math.cos( 4.47466 +   78263.70942 * T);

	lo = mod360( calVsopTerm( T, Lon ) / deg2rad);
	bo = calVsopTerm( T, Lat ) / deg2rad;
	ro = calVsopTerm( T, Rad );

	var res = new Array( lo, bo, ro );
	return res;
}

function calPositVE( T ){
	var lo = 0.0;
	var bo = 0.0;
	var ro = 0.0;
	var Lon = new Array();
	var Lat = new Array();
	var Rad = new Array();

// Venus's Longitude
	Lon[0]  =     3.17615 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[0] +=     0.01354 * Math.cos( 5.59313 +   10213.28555 * T);
	Lon[0] +=     0.00090 * Math.cos( 5.30650 +   20426.57109 * T);
	Lon[1]  = 10213.52943 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[1] +=     0.00096 * Math.cos( 2.46424 +   10213.28555 * T);
	Lon[1] +=     0.00014 * Math.cos( 0.51625 +   20426.57109 * T);
	Lon[2]  =     0.00054 * Math.cos( 0.00000 +       0.00000 * T);
// Venus's Latitude
	Lat[0]  =     0.05924 * Math.cos( 0.26703 +   10213.28555 * T);
	Lat[0] +=     0.00040 * Math.cos( 1.14737 +   20426.57109 * T);
	Lat[0] +=     0.00033 * Math.cos( 3.14159 +       0.00000 * T);
	Lat[1]  =     0.00513 * Math.cos( 1.80364 +   10213.28555 * T);
	Lat[2]  =     0.00022 * Math.cos( 3.38509 +   10213.28555 * T);
// Venus's Radius Vector
	Rad[0]  =     0.72335 * Math.cos( 0.00000 +       0.00000 * T);
	Rad[0] +=     0.00490 * Math.cos( 4.02152 +   10213.28555 * T);
	Rad[1]  =     0.00035 * Math.cos( 0.89199 +   10213.28555 * T);

	lo = mod360( calVsopTerm( T, Lon ) / deg2rad);
	bo = calVsopTerm( T, Lat ) / deg2rad;
	ro = calVsopTerm( T, Rad );

	var res = new Array( lo, bo, ro );
	return res;
}

function calPositMA( T ){
	var lo = 0.0;
	var bo = 0.0;
	var ro = 0.0;
	var Lon = new Array();
	var Lat = new Array();
	var Rad = new Array();

// Mars's Longitude
	Lon[0]  =     6.20348 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[0] +=     0.18656 * Math.cos( 5.05037 +    3340.61243 * T);
	Lon[0] +=     0.01108 * Math.cos( 5.40100 +    6681.22485 * T);
	Lon[0] +=     0.00092 * Math.cos( 5.75479 +   10021.83728 * T);
	Lon[0] +=     0.00028 * Math.cos( 5.97050 +       3.52312 * T);
	Lon[0] +=     0.00011 * Math.cos( 2.93959 +    2281.23050 * T);
	Lon[0] +=     0.00012 * Math.cos( 0.84956 +    2810.92146 * T);
	Lon[1]  =  3340.85627 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[1] +=     0.01458 * Math.cos( 3.60426 +    3340.61243 * T);
	Lon[1] +=     0.00165 * Math.cos( 3.92631 +    6681.22485 * T);
	Lon[1] +=     0.00020 * Math.cos( 4.26594 +   10021.83728 * T);
	Lon[2]  =     0.00058 * Math.cos( 2.04979 +    3340.61243 * T);
	Lon[2] +=     0.00054 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[2] +=     0.00014 * Math.cos( 2.45742 +    6681.22485 * T);
// Mars's Latitude
	Lat[0]  =     0.03197 * Math.cos( 3.76832 +    3340.61243 * T);
	Lat[0] +=     0.00298 * Math.cos( 4.10617 +    6681.22485 * T);
	Lat[0] +=     0.00289 * Math.cos( 0.00000 +       0.00000 * T);
	Lat[0] +=     0.00031 * Math.cos( 4.44651 +   10021.83728 * T);
	Lat[1]  =     0.00350 * Math.cos( 5.36848 +    3340.61243 * T);
	Lat[1] +=     0.00014 * Math.cos( 3.14159 +       0.00000 * T);
	Lat[1] +=     0.00010 * Math.cos( 5.47878 +    6681.22485 * T);
	Lat[2]  =     0.00017 * Math.cos( 0.60221 +    3340.61243 * T);
// Mars's Radius Vector
	Rad[0]  =     1.53033 * Math.cos( 0.00000 +       0.00000 * T);
	Rad[0] +=     0.14185 * Math.cos( 3.47971 +    3340.61243 * T);
	Rad[0] +=     0.00661 * Math.cos( 3.81783 +    6681.22485 * T);
	Rad[0] +=     0.00046 * Math.cos( 4.15595 +   10021.83728 * T);
	Rad[1]  =     0.01107 * Math.cos( 2.03251 +    3340.61243 * T);
	Rad[1] +=     0.00103 * Math.cos( 2.37072 +    6681.22485 * T);
	Rad[1] +=     0.00013 * Math.cos( 0.00000 +       0.00000 * T);
	Rad[1] +=     0.00011 * Math.cos( 2.70888 +   10021.83728 * T);
	Rad[2]  =     0.00044 * Math.cos( 0.47931 +    3340.61243 * T);

	lo = mod360( calVsopTerm( T, Lon ) / deg2rad);
	bo = calVsopTerm( T, Lat ) / deg2rad;
	ro = calVsopTerm( T, Rad );

	var res = new Array( lo, bo, ro );
	return res;
}

function calPositJU( T ){
	var lo = 0.0;
	var bo = 0.0;
	var ro = 0.0;
	var Lon = new Array();
	var Lat = new Array();
	var Rad = new Array();

// Jupiter's Longitude
	Lon[0]  =     0.59955 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[0] +=     0.09696 * Math.cos( 5.06192 +     529.69097 * T);
	Lon[0] +=     0.00574 * Math.cos( 1.44406 +       7.11355 * T);
	Lon[0] +=     0.00306 * Math.cos( 5.41735 +    1059.38193 * T);
	Lon[0] +=     0.00097 * Math.cos( 4.14265 +     632.78374 * T);
	Lon[0] +=     0.00073 * Math.cos( 3.64043 +     522.57742 * T);
	Lon[0] +=     0.00064 * Math.cos( 3.41145 +     103.09277 * T);
	Lon[0] +=     0.00040 * Math.cos( 2.29377 +     419.48464 * T);
	Lon[0] +=     0.00039 * Math.cos( 1.27232 +     316.39187 * T);
	Lon[0] +=     0.00028 * Math.cos( 1.78455 +     536.80451 * T);
	Lon[0] +=     0.00014 * Math.cos( 5.77481 +    1589.07290 * T);
	Lon[1]  =   529.93481 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[1] +=     0.00490 * Math.cos( 4.22067 +     529.69097 * T);
	Lon[1] +=     0.00229 * Math.cos( 6.02647 +       7.11355 * T);
	Lon[1] +=     0.00028 * Math.cos( 4.57266 +    1059.38193 * T);
	Lon[1] +=     0.00021 * Math.cos( 5.45939 +     522.57742 * T);
	Lon[1] +=     0.00012 * Math.cos( 0.16986 +     536.80451 * T);
	Lon[2]  =     0.00047 * Math.cos( 4.32148 +       7.11355 * T);
	Lon[2] +=     0.00031 * Math.cos( 2.93021 +     529.69097 * T);
	Lon[2] +=     0.00039 * Math.cos( 0.00000 +       0.00000 * T);
// Jupiter's Latitude
	Lat[0]  =     0.02269 * Math.cos( 3.55853 +     529.69097 * T);
	Lat[0] +=     0.00110 * Math.cos( 3.90809 +    1059.38193 * T);
	Lat[0] +=     0.00110 * Math.cos( 0.00000 +       0.00000 * T);
	Lat[1]  =     0.00177 * Math.cos( 5.70166 +     529.69097 * T);
// Jupiter's Radius Vector
	Rad[0]  =     5.20887 * Math.cos( 0.00000 +       0.00000 * T);
	Rad[0] +=     0.25209 * Math.cos( 3.49109 +     529.69097 * T);
	Rad[0] +=     0.00611 * Math.cos( 3.84115 +    1059.38193 * T);
	Rad[0] +=     0.00282 * Math.cos( 2.57420 +     632.78374 * T);
	Rad[0] +=     0.00188 * Math.cos( 2.07590 +     522.57742 * T);
	Rad[0] +=     0.00087 * Math.cos( 0.71001 +     419.48464 * T);
	Rad[0] +=     0.00072 * Math.cos( 0.21466 +     536.80451 * T);
	Rad[0] +=     0.00066 * Math.cos( 5.97996 +     316.39187 * T);
	Rad[0] +=     0.00029 * Math.cos( 1.67759 +     103.09277 * T);
	Rad[0] +=     0.00030 * Math.cos( 2.16132 +     949.17561 * T);
	Rad[0] +=     0.00023 * Math.cos( 3.54023 +     735.87651 * T);
	Rad[0] +=     0.00022 * Math.cos( 4.19363 +    1589.07290 * T);
	Rad[0] +=     0.00024 * Math.cos( 0.27458 +       7.11355 * T);
	Rad[0] +=     0.00013 * Math.cos( 2.96043 +    1162.47470 * T);
	Rad[0] +=     0.00010 * Math.cos( 1.90670 +     206.18555 * T);
	Rad[0] +=     0.00013 * Math.cos( 2.71550 +    1052.26838 * T);
	Rad[1]  =     0.01272 * Math.cos( 2.64938 +     529.69097 * T);
	Rad[1] +=     0.00062 * Math.cos( 3.00076 +    1059.38193 * T);
	Rad[1] +=     0.00053 * Math.cos( 3.89718 +     522.57742 * T);
	Rad[1] +=     0.00031 * Math.cos( 4.88277 +     536.80451 * T);
	Rad[1] +=     0.00041 * Math.cos( 0.00000 +       0.00000 * T);
	Rad[1] +=     0.00012 * Math.cos( 2.41330 +     419.48464 * T);
	Rad[2]  =     0.00080 * Math.cos( 1.35866 +     529.69097 * T);

	lo = mod360( calVsopTerm( T, Lon ) / deg2rad);
	bo = calVsopTerm( T, Lat ) / deg2rad;
	ro = calVsopTerm( T, Rad );

	var res = new Array( lo, bo, ro );
	return res;
}

function calPositSA( T ){
	var lo = 0.0;
	var bo = 0.0;
	var ro = 0.0;
	var Lon = new Array();
	var Lat = new Array();
	var Rad = new Array();

// Saturn's Longitude
	Lon[0]  =     0.87401 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[0] +=     0.11108 * Math.cos( 3.96205 +     213.29910 * T);
	Lon[0] +=     0.01414 * Math.cos( 4.58582 +       7.11355 * T);
	Lon[0] +=     0.00398 * Math.cos( 0.52112 +     206.18555 * T);
	Lon[0] +=     0.00351 * Math.cos( 3.30330 +     426.59819 * T);
	Lon[0] +=     0.00207 * Math.cos( 0.24658 +     103.09277 * T);
	Lon[0] +=     0.00079 * Math.cos( 3.84007 +     220.41264 * T);
	Lon[0] +=     0.00024 * Math.cos( 4.66977 +     110.20632 * T);
	Lon[0] +=     0.00017 * Math.cos( 0.43719 +     419.48464 * T);
	Lon[0] +=     0.00015 * Math.cos( 5.76903 +     316.39187 * T);
	Lon[0] +=     0.00016 * Math.cos( 0.93809 +     632.78374 * T);
	Lon[0] +=     0.00015 * Math.cos( 1.56519 +       3.93215 * T);
	Lon[0] +=     0.00013 * Math.cos( 4.44891 +      14.22709 * T);
	Lon[0] +=     0.00015 * Math.cos( 2.71670 +     639.89729 * T);
	Lon[0] +=     0.00013 * Math.cos( 5.98119 +      11.04570 * T);
	Lon[0] +=     0.00011 * Math.cos( 3.12940 +     202.25340 * T);
	Lon[1]  =   213.54296 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[1] +=     0.01297 * Math.cos( 1.82821 +     213.29910 * T);
	Lon[1] +=     0.00564 * Math.cos( 2.88500 +       7.11355 * T);
	Lon[1] +=     0.00098 * Math.cos( 1.08070 +     426.59819 * T);
	Lon[1] +=     0.00108 * Math.cos( 2.27770 +     206.18555 * T);
	Lon[1] +=     0.00040 * Math.cos( 2.04128 +     220.41264 * T);
	Lon[1] +=     0.00020 * Math.cos( 1.27955 +     103.09277 * T);
	Lon[1] +=     0.00011 * Math.cos( 2.74880 +      14.22709 * T);
	Lon[2]  =     0.00116 * Math.cos( 1.17988 +       7.11355 * T);
	Lon[2] +=     0.00092 * Math.cos( 0.07425 +     213.29910 * T);
	Lon[2] +=     0.00091 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[2] +=     0.00015 * Math.cos( 4.06492 +     206.18555 * T);
	Lon[2] +=     0.00011 * Math.cos( 0.25778 +     220.41264 * T);
	Lon[2] +=     0.00011 * Math.cos( 5.40964 +     426.59819 * T);
	Lon[3]  =     0.00016 * Math.cos( 5.73945 +       7.11355 * T);
// Saturn's Latitude
	Lat[0]  =     0.04331 * Math.cos( 3.60284 +     213.29910 * T);
	Lat[0] +=     0.00240 * Math.cos( 2.85238 +     426.59819 * T);
	Lat[0] +=     0.00085 * Math.cos( 0.00000 +       0.00000 * T);
	Lat[0] +=     0.00031 * Math.cos( 3.48442 +     220.41264 * T);
	Lat[0] +=     0.00034 * Math.cos( 0.57297 +     206.18555 * T);
	Lat[0] +=     0.00015 * Math.cos( 2.11847 +     639.89729 * T);
	Lat[0] +=     0.00010 * Math.cos( 5.79003 +     419.48464 * T);
	Lat[1]  =     0.00398 * Math.cos( 5.33290 +     213.29910 * T);
	Lat[1] +=     0.00049 * Math.cos( 3.14159 +       0.00000 * T);
	Lat[1] +=     0.00019 * Math.cos( 6.09919 +     426.59819 * T);
	Lat[1] +=     0.00015 * Math.cos( 2.30586 +     206.18555 * T);
	Lat[1] +=     0.00010 * Math.cos( 1.69675 +     220.41264 * T);
	Lat[2]  =     0.00021 * Math.cos( 0.50482 +     213.29910 * T);
// Saturn's Radius Vector
	Rad[0]  =     9.55758 * Math.cos( 0.00000 +       0.00000 * T);
	Rad[0] +=     0.52921 * Math.cos( 2.39226 +     213.29910 * T);
	Rad[0] +=     0.01874 * Math.cos( 5.23550 +     206.18555 * T);
	Rad[0] +=     0.01465 * Math.cos( 1.64763 +     426.59819 * T);
	Rad[0] +=     0.00822 * Math.cos( 5.93520 +     316.39187 * T);
	Rad[0] +=     0.00548 * Math.cos( 5.01533 +     103.09277 * T);
	Rad[0] +=     0.00372 * Math.cos( 2.27115 +     220.41264 * T);
	Rad[0] +=     0.00362 * Math.cos( 3.13904 +       7.11355 * T);
	Rad[0] +=     0.00141 * Math.cos( 5.70407 +     632.78374 * T);
	Rad[0] +=     0.00109 * Math.cos( 3.29314 +     110.20632 * T);
	Rad[0] +=     0.00069 * Math.cos( 5.94100 +     419.48464 * T);
	Rad[0] +=     0.00061 * Math.cos( 0.94038 +     639.89729 * T);
	Rad[0] +=     0.00049 * Math.cos( 1.55733 +     202.25340 * T);
	Rad[0] +=     0.00034 * Math.cos( 0.19519 +     277.03499 * T);
	Rad[0] +=     0.00032 * Math.cos( 5.47085 +     949.17561 * T);
	Rad[0] +=     0.00021 * Math.cos( 0.46349 +     735.87651 * T);
	Rad[0] +=     0.00021 * Math.cos( 1.52103 +     433.71174 * T);
	Rad[0] +=     0.00021 * Math.cos( 5.33256 +     199.07200 * T);
	Rad[0] +=     0.00015 * Math.cos( 3.05944 +     529.69097 * T);
	Rad[0] +=     0.00014 * Math.cos( 2.60434 +     323.50542 * T);
	Rad[0] +=     0.00012 * Math.cos( 5.98051 +     846.08283 * T);
	Rad[0] +=     0.00011 * Math.cos( 1.73106 +     522.57742 * T);
	Rad[0] +=     0.00013 * Math.cos( 1.64892 +     138.51750 * T);
	Rad[0] +=     0.00010 * Math.cos( 5.20476 +    1265.56748 * T);
	Rad[1]  =     0.06183 * Math.cos( 0.25844 +     213.29910 * T);
	Rad[1] +=     0.00507 * Math.cos( 0.71115 +     206.18555 * T);
	Rad[1] +=     0.00341 * Math.cos( 5.79636 +     426.59819 * T);
	Rad[1] +=     0.00188 * Math.cos( 0.47216 +     220.41264 * T);
	Rad[1] +=     0.00186 * Math.cos( 3.14159 +       0.00000 * T);
	Rad[1] +=     0.00144 * Math.cos( 1.40745 +       7.11355 * T);
	Rad[1] +=     0.00050 * Math.cos( 6.01744 +     103.09277 * T);
	Rad[1] +=     0.00021 * Math.cos( 5.09246 +     639.89729 * T);
	Rad[1] +=     0.00020 * Math.cos( 1.17560 +     419.48464 * T);
	Rad[1] +=     0.00019 * Math.cos( 1.60820 +     110.20632 * T);
	Rad[1] +=     0.00013 * Math.cos( 5.94330 +     433.71174 * T);
	Rad[1] +=     0.00014 * Math.cos( 0.75886 +     199.07200 * T);
	Rad[2]  =     0.00437 * Math.cos( 4.78672 +     213.29910 * T);
	Rad[2] +=     0.00072 * Math.cos( 2.50070 +     206.18555 * T);
	Rad[2] +=     0.00050 * Math.cos( 4.97168 +     220.41264 * T);
	Rad[2] +=     0.00043 * Math.cos( 3.86940 +     426.59819 * T);
	Rad[2] +=     0.00030 * Math.cos( 5.96310 +       7.11355 * T);
	Rad[3]  =     0.00020 * Math.cos( 3.02187 +     213.29910 * T);

	lo = mod360( calVsopTerm( T, Lon ) / deg2rad);
	bo = calVsopTerm( T, Lat ) / deg2rad;
	ro = calVsopTerm( T, Rad );

	var res = new Array( lo, bo, ro );
	return res;
}

function calPositUR( T ){
	var lo = 0.0;
	var bo = 0.0;
	var ro = 0.0;
	var Lon = new Array();
	var Lat = new Array();
	var Rad = new Array();

// Uranus's Longitude
	Lon[0]  =     5.48129 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[0] +=     0.09260 * Math.cos( 0.89106 +      74.78160 * T);
	Lon[0] +=     0.01504 * Math.cos( 3.62719 +       1.48447 * T);
	Lon[0] +=     0.00366 * Math.cos( 1.89962 +      73.29713 * T);
	Lon[0] +=     0.00272 * Math.cos( 3.35824 +     149.56320 * T);
	Lon[0] +=     0.00070 * Math.cos( 5.39254 +      63.73590 * T);
	Lon[0] +=     0.00069 * Math.cos( 6.09292 +      76.26607 * T);
	Lon[0] +=     0.00062 * Math.cos( 2.26952 +       2.96895 * T);
	Lon[0] +=     0.00062 * Math.cos( 2.85099 +      11.04570 * T);
	Lon[0] +=     0.00026 * Math.cos( 3.14152 +      71.81265 * T);
	Lon[0] +=     0.00026 * Math.cos( 6.11380 +     454.90937 * T);
	Lon[0] +=     0.00021 * Math.cos( 4.36059 +     148.07872 * T);
	Lon[0] +=     0.00018 * Math.cos( 1.74437 +      36.64856 * T);
	Lon[0] +=     0.00015 * Math.cos( 4.73732 +       3.93215 * T);
	Lon[0] +=     0.00011 * Math.cos( 5.82682 +     224.34480 * T);
	Lon[0] +=     0.00011 * Math.cos( 0.48865 +     138.51750 * T);
	Lon[0] +=     0.00010 * Math.cos( 2.95517 +      35.16409 * T);
	Lon[1]  =    75.02543 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[1] +=     0.00154 * Math.cos( 5.24202 +      74.78160 * T);
	Lon[1] +=     0.00024 * Math.cos( 1.71256 +       1.48447 * T);
	Lon[2]  =     0.00053 * Math.cos( 0.00000 +       0.00000 * T);
// Uranus's Latitude
	Lat[0]  =     0.01346 * Math.cos( 2.61878 +      74.78160 * T);
	Lat[0] +=     0.00062 * Math.cos( 5.08111 +     149.56320 * T);
	Lat[0] +=     0.00062 * Math.cos( 3.14159 +       0.00000 * T);
	Lat[0] +=     0.00010 * Math.cos( 1.61604 +      76.26607 * T);
	Lat[0] +=     0.00010 * Math.cos( 0.57630 +      73.29713 * T);
	Lat[1]  =     0.00206 * Math.cos( 4.12394 +      74.78160 * T);
// Uranus's Radius Vector
	Rad[0]  =    19.21265 * Math.cos( 0.00000 +       0.00000 * T);
	Rad[0] +=     0.88785 * Math.cos( 5.60378 +      74.78160 * T);
	Rad[0] +=     0.03441 * Math.cos( 0.32836 +      73.29713 * T);
	Rad[0] +=     0.02056 * Math.cos( 1.78295 +     149.56320 * T);
	Rad[0] +=     0.00649 * Math.cos( 4.52247 +      76.26607 * T);
	Rad[0] +=     0.00602 * Math.cos( 3.86004 +      63.73590 * T);
	Rad[0] +=     0.00496 * Math.cos( 1.40140 +     454.90937 * T);
	Rad[0] +=     0.00339 * Math.cos( 1.58003 +     138.51750 * T);
	Rad[0] +=     0.00244 * Math.cos( 1.57087 +      71.81265 * T);
	Rad[0] +=     0.00191 * Math.cos( 1.99809 +       1.48447 * T);
	Rad[0] +=     0.00162 * Math.cos( 2.79138 +     148.07872 * T);
	Rad[0] +=     0.00144 * Math.cos( 1.38369 +      11.04570 * T);
	Rad[0] +=     0.00093 * Math.cos( 0.17437 +      36.64856 * T);
	Rad[0] +=     0.00071 * Math.cos( 4.24509 +     224.34480 * T);
	Rad[0] +=     0.00090 * Math.cos( 3.66105 +     109.94569 * T);
	Rad[0] +=     0.00039 * Math.cos( 1.66971 +      70.84945 * T);
	Rad[0] +=     0.00047 * Math.cos( 1.39977 +      35.16409 * T);
	Rad[0] +=     0.00039 * Math.cos( 3.36235 +     277.03499 * T);
	Rad[0] +=     0.00037 * Math.cos( 3.88649 +     146.59425 * T);
	Rad[0] +=     0.00030 * Math.cos( 0.70100 +     151.04767 * T);
	Rad[0] +=     0.00029 * Math.cos( 3.18056 +      77.75054 * T);
	Rad[0] +=     0.00020 * Math.cos( 1.55589 +     202.25340 * T);
	Rad[0] +=     0.00026 * Math.cos( 5.25656 +     380.12777 * T);
	Rad[0] +=     0.00026 * Math.cos( 3.78538 +      85.82730 * T);
	Rad[0] +=     0.00023 * Math.cos( 0.72519 +     529.69097 * T);
	Rad[0] +=     0.00020 * Math.cos( 2.79640 +      70.32818 * T);
	Rad[0] +=     0.00018 * Math.cos( 0.55455 +       2.96895 * T);
	Rad[0] +=     0.00012 * Math.cos( 5.96039 +     127.47180 * T);
	Rad[0] +=     0.00015 * Math.cos( 4.90434 +     108.46122 * T);
	Rad[0] +=     0.00011 * Math.cos( 0.43774 +      65.22037 * T);
	Rad[0] +=     0.00016 * Math.cos( 5.35405 +      38.13304 * T);
	Rad[0] +=     0.00011 * Math.cos( 1.42105 +     213.29910 * T);
	Rad[0] +=     0.00012 * Math.cos( 3.29826 +       3.93215 * T);
	Rad[0] +=     0.00012 * Math.cos( 1.75044 +     984.60033 * T);
	Rad[0] +=     0.00013 * Math.cos( 2.62154 +     111.43016 * T);
	Rad[0] +=     0.00012 * Math.cos( 0.99343 +      52.69020 * T);
	Rad[1]  =     0.01480 * Math.cos( 3.67206 +      74.78160 * T);
	Rad[1] +=     0.00071 * Math.cos( 6.22601 +      63.73590 * T);
	Rad[1] +=     0.00069 * Math.cos( 6.13411 +     149.56320 * T);
	Rad[1] +=     0.00021 * Math.cos( 5.24625 +      11.04570 * T);
	Rad[1] +=     0.00021 * Math.cos( 2.60177 +      76.26607 * T);
	Rad[1] +=     0.00024 * Math.cos( 3.14159 +       0.00000 * T);
	Rad[1] +=     0.00011 * Math.cos( 0.01848 +      70.84945 * T);
	Rad[2]  =     0.00022 * Math.cos( 0.69953 +      74.78160 * T);

	lo = mod360( calVsopTerm( T, Lon ) / deg2rad);
	bo = calVsopTerm( T, Lat ) / deg2rad;
	ro = calVsopTerm( T, Rad );

	var res = new Array( lo, bo, ro );
	return res;
}

function calPositNE( T ){
	var lo = 0.0;
	var bo = 0.0;
	var ro = 0.0;
	var Lon = new Array();
	var Lat = new Array();
	var Rad = new Array();

// Neptune's Longitude
	Lon[0]  =     5.31189 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[0] +=     0.01798 * Math.cos( 2.90101 +      38.13304 * T);
	Lon[0] +=     0.01020 * Math.cos( 0.48581 +       1.48447 * T);
	Lon[0] +=     0.00125 * Math.cos( 4.83008 +      36.64856 * T);
	Lon[0] +=     0.00042 * Math.cos( 5.41055 +       2.96895 * T);
	Lon[0] +=     0.00038 * Math.cos( 6.09222 +      35.16409 * T);
	Lon[0] +=     0.00034 * Math.cos( 1.24489 +      76.26607 * T);
	Lon[0] +=     0.00016 * Math.cos( 0.00008 +     491.55793 * T);
	Lon[1]  =    38.37688 * Math.cos( 0.00000 +       0.00000 * T);
	Lon[1] +=     0.00017 * Math.cos( 4.86319 +       1.48447 * T);
	Lon[1] +=     0.00016 * Math.cos( 2.27923 +      38.13304 * T);
	Lon[2]  =     0.00054 * Math.cos( 0.00000 +       0.00000 * T);
// Neptune's Latitude
	Lat[0]  =     0.03089 * Math.cos( 1.44104 +      38.13304 * T);
	Lat[0] +=     0.00028 * Math.cos( 5.91272 +      76.26607 * T);
	Lat[0] +=     0.00028 * Math.cos( 0.00000 +       0.00000 * T);
	Lat[0] +=     0.00015 * Math.cos( 2.52124 +      36.64856 * T);
	Lat[0] +=     0.00015 * Math.cos( 3.50877 +      39.61751 * T);
	Lat[1]  =     0.00227 * Math.cos( 3.80793 +      38.13304 * T);
	Lat[2]  =     0.00010 * Math.cos( 5.57124 +      38.13304 * T);
// Neptune's Radius Vector
	Rad[0]  =    30.07013 * Math.cos( 0.00000 +       0.00000 * T);
	Rad[0] +=     0.27062 * Math.cos( 1.32999 +      38.13304 * T);
	Rad[0] +=     0.01692 * Math.cos( 3.25186 +      36.64856 * T);
	Rad[0] +=     0.00808 * Math.cos( 5.18593 +       1.48447 * T);
	Rad[0] +=     0.00538 * Math.cos( 4.52114 +      35.16409 * T);
	Rad[0] +=     0.00496 * Math.cos( 1.57106 +     491.55793 * T);
	Rad[0] +=     0.00275 * Math.cos( 1.84552 +     175.16606 * T);
	Rad[0] +=     0.00135 * Math.cos( 3.37221 +      39.61751 * T);
	Rad[0] +=     0.00122 * Math.cos( 5.79754 +      76.26607 * T);
	Rad[0] +=     0.00101 * Math.cos( 0.37703 +      73.29713 * T);
	Rad[0] +=     0.00070 * Math.cos( 3.79617 +       2.96895 * T);
	Rad[0] +=     0.00047 * Math.cos( 5.74938 +      33.67962 * T);
	Rad[0] +=     0.00025 * Math.cos( 0.50802 +     109.94569 * T);
	Rad[0] +=     0.00017 * Math.cos( 1.59422 +      71.81265 * T);
	Rad[0] +=     0.00014 * Math.cos( 1.07786 +      74.78160 * T);
	Rad[0] +=     0.00012 * Math.cos( 1.92062 +    1021.24889 * T);
	Rad[1]  =     0.00236 * Math.cos( 0.70498 +      38.13304 * T);
	Rad[1] +=     0.00013 * Math.cos( 3.32015 +       1.48447 * T);

	lo = mod360( calVsopTerm( T, Lon ) / deg2rad);
	bo = calVsopTerm( T, Lat ) / deg2rad;
	ro = calVsopTerm( T, Rad );

	var res = new Array( lo, bo, ro );
	return res;
}

function calPositPL_mee( T ){
	var lo = 238.9581 + 144.96 * T;
	var bo =  -3.9082;
	var ro =  40.7241;

	var Ju = mod360( 34.35 + 3034.9057 * T);
	var Sa = mod360( 50.58 + 1222.1138 * T);
	var Pl = mod360(238.96 +  144.9600 * T);

// Pluto's Longitude
	lo += -19.7998 * sin4deg(Pl * 1.0) + 19.8501 * cos4deg(Pl * 1.0);
	lo +=   0.8971 * sin4deg(Pl * 2.0) -  4.9548 * cos4deg(Pl * 2.0);
	lo +=   0.6111 * sin4deg(Pl * 3.0) +  1.2110 * cos4deg(Pl * 3.0);
	lo +=  -0.3412 * sin4deg(Pl * 4.0) -  0.1896 * cos4deg(Pl * 4.0);
	lo +=   0.1293 * sin4deg(Pl * 5.0) -  0.0350 * cos4deg(Pl * 5.0);
	lo +=  -0.0382 * sin4deg(Pl * 6.0) +  0.0309 * cos4deg(Pl * 6.0);
	lo +=   0.0204 * sin4deg(Sa -  Pl) -  0.0100 * cos4deg(Sa -  Pl);
	lo +=  -0.0041 * sin4deg(Sa * 1.0) -  0.0051 * cos4deg(Sa * 1.0);
	lo +=  -0.0060 * sin4deg(Sa +  Pl) -  0.0033 * cos4deg(Sa +  Pl);

// Pluto's Latitude
	bo +=  -5.4529 * sin4deg(Pl * 1.0) - 14.9749 * cos4deg(Pl * 1.0);
	bo +=   3.5278 * sin4deg(Pl * 2.0) +  1.6728 * cos4deg(Pl * 2.0);
	bo +=  -1.0507 * sin4deg(Pl * 3.0) +  0.3276 * cos4deg(Pl * 3.0);
	bo +=   0.1787 * sin4deg(Pl * 4.0) -  0.2922 * cos4deg(Pl * 4.0);
	bo +=   0.0187 * sin4deg(Pl * 5.0) +  0.1003 * cos4deg(Pl * 5.0);
	bo +=  -0.0307 * sin4deg(Pl * 6.0) -  0.0258 * cos4deg(Pl * 6.0);
	bo +=   0.0049 * sin4deg(Sa -  Pl) +  0.0112 * cos4deg(Sa -  Pl);
	bo +=   0.0020 * sin4deg(Sa +  Pl) -  0.0008 * cos4deg(Sa +  Pl);

// Pluto's Radius Vector
	ro +=   6.6865 * sin4deg(Pl * 1.0) +  6.8952 * cos4deg(Pl * 1.0);
	ro +=  -1.1828 * sin4deg(Pl * 2.0) -  0.0332 * cos4deg(Pl * 2.0);
	ro +=   0.1593 * sin4deg(Pl * 3.0) -  0.1439 * cos4deg(Pl * 3.0);
	ro +=  -0.0018 * sin4deg(Pl * 4.0) +  0.0483 * cos4deg(Pl * 4.0);
	ro +=  -0.0065 * sin4deg(Pl * 5.0) -  0.0085 * cos4deg(Pl * 5.0);
	ro +=   0.0031 * sin4deg(Pl * 6.0) -  0.0006 * cos4deg(Pl * 6.0);
	ro +=  -0.0006 * sin4deg(Sa -  Pl) -  0.0022 * cos4deg(Sa -  Pl);
	ro +=   0.0005 * sin4deg(Sa * 1.0) -  0.0004 * cos4deg(Sa * 1.0);
	ro +=  -0.0002 * sin4deg(Sa +  Pl);

	var res = new Array( lo, bo, ro );
	return res;
}

// Taken from ftp://cyrano-se.obspm.fr/pub/3_solar_system/3_pluto/notice.txt
function calPositPL_obspm( T ) {
	var T2 = T  * T;
	var T3 = T2 * T;

	var a = 39.5404;
       a += +0.004471   * T;
       a += +0.0315           * Math.sin(  2.545150 * T + 1.8271 );
       a += +0.0490           * Math.sin( 18.787117 * T + 4.4687 );
       a += +0.0536           * Math.sin( 47.883664 * T + 3.8553 );
       a += +0.2141           * Math.sin( 50.426476 * T + 4.1802 );
       a += +0.0004           * Math.sin( 47.883664 * T + 4.1379 );
       a += +0.0066           * Math.sin( 50.426476 * T + 5.1987 );
       a += +0.0091           * Math.sin( 47.883664 * T + 5.6881 );
       a += +0.0200           * Math.sin( 50.426476 * T + 6.0165 );
       a += +0.000018   * T   * Math.sin( 47.883664 * T + 4.1379 );
       a += +0.000330   * T   * Math.sin( 50.426476 * T + 5.1987 );
       a += +0.000905   * T   * Math.sin( 47.883664 * T + 5.6881 );
       a += +0.001990   * T   * Math.sin( 50.426476 * T + 6.0165 );
       a += +0.00002256 * T2  * Math.sin( 47.883664 * T + 5.6881 );
       a += +0.00004958 * T2  * Math.sin( 50.426476 * T + 6.0165 );

	var l =  4.1702;
       l += +2.533953     * T;
       l += -0.00021295   * T2;
       l += +0.0000001231 * T3;
       l += +0.0014            * Math.sin(  0.199159 * T + 5.8539 );
       l += +0.0050            * Math.sin(  0.364944 * T + 1.2137 );
       l += +0.0055            * Math.sin(  0.397753 * T + 4.9469 );
       l += +0.0002            * Math.sin(  2.543029 * T + 3.0186 );
       l += +0.0012            * Math.sin( 18.787098 * T + 3.4938 );
       l += +0.0008            * Math.sin( 18.817229 * T + 2.0097 );
       l += +0.0050            * Math.sin( 50.426472 * T + 2.6252 );
       l += +0.0015            * Math.sin( 52.969319 * T + 6.1048 );
       l += +0.0008            * Math.sin(292.208471 * T + 4.7603 );
       l += +0.0008            * Math.sin(292.265343 * T + 2.8055 );
       l += +0.0031            * Math.sin(  0.364944 * T + 2.7888 );
       l += +0.0004            * Math.sin(  2.543029 * T + 0.5111 );
       l += +0.0003            * Math.sin( 18.787098 * T + 6.1336 );
       l += +0.0000            * Math.sin( 50.426472 * T + 2.2515 );
       l += +0.0004            * Math.sin(292.208471 * T + 0.0813 );
       l += +0.0004            * Math.sin(292.265343 * T + 1.2477 );
       l += +0.0004            * Math.sin( 50.426472 * T + 4.2694 );
       l += +0.000156   * T    * Math.sin(  0.364944 * T + 2.7888 );
       l += +0.000020   * T    * Math.sin(  2.543029 * T + 0.5111 );
       l += +0.000017   * T    * Math.sin( 18.787098 * T + 6.1336 );
       l += +0.000000   * T    * Math.sin( 50.426472 * T + 2.2515 );
       l += +0.000022   * T    * Math.sin(292.208471 * T + 0.0813 );
       l += +0.000022   * T    * Math.sin(292.265343 * T + 1.2477 );
       l += +0.000044   * T    * Math.sin( 50.426472 * T + 4.2694 );
       l += +0.00000110 * T2   * Math.sin( 50.426472 * T + 4.2694 );
       l /= deg2rad;

    var h = -0.1733;
       h += -0.000013   * T;
       h += +0.0012            * Math.sin(  2.541849 * T + 3.9572 );
       h += +0.0008            * Math.sin( 21.329808 * T + 0.8858 );
       h += +0.0012            * Math.sin( 47.883781 * T + 1.4929 );
       h += +0.0005            * Math.sin( 50.426641 * T + 5.3286 );
       h += +0.0037            * Math.sin( 52.969135 * T + 0.6139 );

    var k = -0.1787;
       k += -0.000070   * T;
       k += +0.0006            * Math.sin(  2.512561 * T + 3.8516 );
       k += +0.0013            * Math.sin(  2.543100 * T + 0.0218 );
       k += +0.0008            * Math.sin( 21.329765 * T + 2.4324 );
       k += +0.0012            * Math.sin( 47.883788 * T + 6.2432 );
       k += +0.0005            * Math.sin( 50.426611 * T + 3.0920 );
       k += +0.0038            * Math.sin( 52.969155 * T + 2.1566 );
       k += +0.0004            * Math.sin(  2.512561 * T + 5.3919 );
       k += +0.000022   * T    * Math.sin(  2.512561 * T + 5.3919 );

    var p = +0.1398;
       p += +0.000007   * T;
       p += +0.0002            * Math.sin( 50.426871 * T + 0.6705 );
       p += +0.0002            * Math.sin( 55.512211 * T + 6.0770 );

    var q = -0.0517;
       q += +0.000020   * T;
       q += +0.0002            * Math.sin( 50.426859 * T + 5.4131 );
       q += +0.0002            * Math.sin( 55.512206 * T + 1.3314 );

	// my( $L, $opi, $omg, $i, $e, $a ) = convertOrbitalElement( $a, $l, $h, $k, $p, $q );
	var orbitalElements = convertOrbitalElement( a, l, h, k, p, q );
	return orbitWork( ...orbitalElements );
}

// ���z�ƌ��̑��x
function calSolarVelocity( JD ){
	var T = ( JD - 2451545.0 ) / 365250.0;
	var vel  = 3548.330;
		vel +=  118.568 * sin4deg( 87.5287 + 359993.7286 * T );
	return vel / 3600.0;
}

function calLunarVelocity( JD ){
	var T = ( JD - 2451545.0 ) / 36525.0;
	var mf = new Array();
	var vel;

// D : Mean elongation of the Moon
	mf[0]  = 445267.0 * T;
	mf[0]  = mod360( mf[0] );
	mf[0] +=   0.11151 * T;
	mf[0] -=   0.00163 * T * T;
	mf[0] += 297.85020;
	mf[0]  = mod360( mf[0] );

// l' : Mean anomary of the Sun
	mf[1]  =  35999.0 * T;
	mf[1]  = mod360( mf[1] );
	mf[1] +=   0.05029 * T;
	mf[1] -=   0.00015 * T * T;
	mf[1] += 357.51687;
	mf[1]  = mod360( mf[1] );

// l : Mean anomary of the Moon
	mf[2]  = 477198.0 * T;
	mf[2]  = mod360( mf[2] );
	mf[2] +=   0.86763  * T;
	mf[2] +=   0.008997 * T * T;
	mf[2] += 134.96341;
	mf[2]  = mod360( mf[2] );

// F : Argument of latitude of the Moon
	mf[3]  = 483202.0 * T;
	mf[3]  = mod360( mf[3] );
	mf[3] +=   0.01753 * T;
	mf[3] -=   0.00340 * T * T;
	mf[3] +=  93.27210;
	mf[3]  = mod360( mf[3] );

	vel  = 13.176397;
	vel +=  1.434006 * cos4deg(mf[2]);
	vel +=  0.280135 * cos4deg(2.0 * mf[0]);
	vel +=  0.251632 * cos4deg(2.0 * mf[0] - mf[2]);
	vel +=  0.097420 * cos4deg(2.0 * mf[2]);
	vel -=  0.052799 * cos4deg(2.0 * mf[3]);
	vel +=  0.034848 * cos4deg(2.0 * mf[0] + mf[2]);
	vel +=  0.018732 * cos4deg(2.0 * mf[0] - mf[1]);
	vel +=  0.010316 * cos4deg(2.0 * mf[0] - mf[1] - mf[2]);
	vel +=  0.008649 * cos4deg(mf[1] - mf[2]);
	vel -=  0.008642 * cos4deg(2.0 * mf[3] + mf[2]);
	vel -=  0.007471 * cos4deg(mf[1] + mf[2]);
	vel -=  0.007387 * cos4deg(mf[0]);
	vel +=  0.006864 * cos4deg(3.0 * mf[2]);
	vel +=  0.006650 * cos4deg(4.0 * mf[0] - mf[2]);

	return vel;
}

// �m�[�h�A�����X
// This function from "Numerical expressions for precession formulae
// and mean elements for the Moon and the planets" J. L. Simon, et al.,
// Astron. Astrophys., 282, 663-683(1994).
function calPositLuna( JD ){
	var d = JD - 2451545.0;
	var T =  d / 36525.0;
	var D, F, l, l1, omg, opi, DH, LT ;

	omg = mod360(125.0445550 -  0.0529537628 * d + 0.0020761667 * T * T);
	opi = mod360( 83.3532430 +  0.1114308160 * d - 0.0103237778 * T * T);

	D   = mod360(297.8502042 + 12.19074912 * d - 0.0016299722 * T * T);
	F   = mod360( 93.2720993 + 13.22935024 * d - 0.0034029167 * T * T);
	l   = mod360(134.9634114 + 13.06499295 * d + 0.0089970278 * T * T);
	l1  = mod360(357.5291092 +  0.98560028 * d - 0.0001536667 * T * T);

// �m�[�h�␳
	DH  = omg;
	DH -= 1.4978 * sin4deg(2.0 * (D - F));
	DH -= 0.1500 * sin4deg(l1);
	DH -= 0.1225 * sin4deg(2.0 * D);
	DH += 0.1175 * sin4deg(2.0 * F);
	DH -= 0.0800 * sin4deg(2.0 * (l - F));
	DH  = mod360(DH);

// �����X�␳
	LT  = opi + 180.0;
	LT -= 15.4469 * sin4deg(2.0 * D - l);
	LT -=  9.6419 * sin4deg(2.0 * (D - l));
	LT -=  2.7200 * sin4deg(l);
	LT +=  2.6069 * sin4deg(4.0 * D - 3.0 * l);
	LT +=  2.0847 * sin4deg(4.0 * D - 2.0 * l);
	LT +=  1.4772 * sin4deg(2.0 * D + l);
	LT +=  0.9678 * sin4deg(4.0 * (D - l));
	LT -=  0.9412 * sin4deg(2.0 * D - l1 - l);
	LT -=  0.7028 * sin4deg(6.0 * D - 4.0 * l);
	LT -=  0.6600 * sin4deg(2.0 * D);
	LT -=  0.5764 * sin4deg(2.0 * D - 3.0 * l);
	LT -=  0.5231 * sin4deg(2.0 * l);
	LT -=  0.4822 * sin4deg(6.0 * D - 5.0 * l);
	LT +=  0.4517 * sin4deg(l1);
	LT -=  0.3806 * sin4deg(6.0 * D - 3.0 * l);

	var luna = new Array( DH, LT );
	return luna;
}

// ASC�EMC�v�Z
function calGeoPoint( lst, la, obl ){
	// MC�v�Z
	var MCx = sin4deg(lst);
	var MCy = cos4deg(lst) * cos4deg(obl);
	var MC  = mod360( Math.atan2( MCx, MCy ) / deg2rad );
	if( MC < 0.0 ){
		MC += 360.0;
	}

	// ASC�v�Z
	var ASCx  = cos4deg(lst);
	var ASCy  = -(sin4deg(obl) * tan4deg(la));
	    ASCy -= cos4deg(obl) * sin4deg(lst);
	var ASC   = mod360( Math.atan2( ASCx, ASCy ) / deg2rad );
	if( ASC < 0.0 ){
		ASC += 360.0;
	}

	var res = new Array( ASC, MC );
	return res;
}

/* ---- ���ʂ̓\�[���[���^�[���A���i�[���^�[���͎g��Ȃ��B�g�����ɕ���������
///// Return �v�Z�֐�
// Solar Return
function calAfterSolarReturn{
	my($nSu, $date0) = @_;
	my($tJD0) = CalJD(DecodeDate($date0), 0, 0);
	$tJD0 += CorrectTDT($tJD0);
	my($tJD) = $tJD0;
	my($delta, $tSu, $vSu, $bSu, $rSu);
	my($eps) = 1.0 / 1440.0;
	my($isFirst) = 1;

	do{
		if(!$isFirst){
			$tJD += 365.24219;
		} else {
			$isFirst = 0;
		}
		do{
			($tSu, $bSu, $rSu) = CalPositSO(($tJD - 2451545.0) / 365250.0);
			$tSu += CalNutation($JD) / 3600.0;
			$tSu -= 0.005693 / $rSu;
			$vSu = CalSolarVelocity($tJD);
			$delta = angle1($tSu, $nSu) / $vSu;
			$tJD -= $delta;
		}while(abs($delta) > $eps);
	}while($tJD < $tJD0);

	$tJD -= CorrectTDT($tJD);
	CnvCalendar($tJD + 9.0 / 24.0);
}

// Lunar Return
function calAfterLunarReturn{
	my($nMo, $date0) = @_;
	my($tJD0) = CalJD(DecodeDate($date0), 0, 0);
	$tJD0 += CorrectTDT($tJD0);
	my($tJD) = $tJD0;
	my($delta, $tMo, $vMo, $bMo);
	my($eps) = 1.0 / 1440.0;
	my($isFirst) = 1;

	do{
		if(!$isFirst){
			$tJD += 27.321582;
		} else {
			$isFirst = 0;
		}
		do{
			($tMo, $bMo) = CalPositMO(($tJD - 2451545.0) / 36525.0);
			$tMo += CalNutation($JD) / 3600.0;
			$vMo = CalLunarVelocity($tJD);
			$delta = angle1($tMo, $nMo) / $vMo;
			$tJD -= $delta;
		}while(abs($delta) > $eps);
	}while($tJD < $tJD0);

	$tJD -= CorrectTDT($tJD);
	CnvCalendar($tJD + 9.0 / 24.0);
}
*/






function findPlaceCoor( pid ){
	if((pid < 1) || (pid > 47)) pid = 48;

	var lontbl = [0.0,
		141.70, 140.74, 141.15, 140.87, 140.10, 140.37,
		140.47, 140.48, 139.88, 139.05, 139.65, 140.12,
		139.69, 139.64, 139.02, 137.21, 136.66, 136.21,
		138.58, 138.18, 136.72, 138.38, 136.91, 136.51,
		135.86, 135.75, 135.52, 135.19, 135.83, 135.17,
		134.24, 133.05, 133.93, 132.45, 131.47, 134.56,
		134.04, 132.77, 133.53, 130.42, 130.30, 129.82,
		130.73, 131.61, 131.42, 130.55, 127.67,   0.00];

	var lattbl = [0.0,
		43.05, 40.82, 39.70, 38.26, 39.71, 38.23,
		37.74, 36.37, 36.56, 36.39, 35.85, 35.60,
		35.68, 35.43, 37.89, 36.68, 36.56, 36.06,
		35.66, 36.64, 35.38, 34.97, 35.17, 34.72,
		35.00, 35.02, 34.67, 34.68, 34.68, 34.22,
		35.50, 35.48, 34.65, 34.38, 34.17, 34.05,
		34.33, 33.87, 33.55, 33.61, 33.24, 32.74,
		32.78, 33.24, 31.91, 31.59, 26.21,  0.00];

	var coor = new Array(lontbl[pid], lattbl[pid]);
	return coor;
}

function nvPrefName( pid ){
	if((pid < 1) || (pid > 47)) pid = 48;

	var npref = ["",
		"�k�C��", "�X��", "��茧", "�{�錧", "�H�c��", "�R�`��",
		"������", "��錧", "�Ȗ،�", "�Q�n��", "��ʌ�", "��t��",
		"�����s", "�_�ސ쌧", "�V����", "�x�R��", "�ΐ쌧", "���䌧",
		"�R����", "���쌧", "�򕌌�", "�É���", "���m��", "�O�d��",
		"���ꌧ", "���s�{", "���{", "���Ɍ�", "�ޗǌ�", "�a�̎R��",
		"���挧", "������", "���R��", "�L����", "�R����", "������",
		"���쌧", "���Q��", "���m��", "������", "���ꌧ", "���茧",
		"�F�{��", "�啪��", "�{�茧", "��������", "���ꌧ", "���̑��E�C�O"];

	return npref[pid];
}

export { calPlanetPosition2 };