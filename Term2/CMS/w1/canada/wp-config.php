<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'myfirstwp' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:8889' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '+zy!49m}Y=VU[fSs)`q,?>%<A%][&Qv/qVtN^%iqz1Nn.[9SLTR$M}Ny=H6#>QEt' );
define( 'SECURE_AUTH_KEY',  'zCDj<MurMM>@~kWT# #Osf#ny$}AM9&rE0Y;5a)C]U0+kE$t12Eearj94oezmG.F' );
define( 'LOGGED_IN_KEY',    'Jyys*JV^*;$nFYZ|@OLqU?]W0pP36-V{^q+.Q/w6q0y5:rpO]~x^Z0wJTZjd}kw=' );
define( 'NONCE_KEY',        'n32L?zCOKWArh15@ g}Bbhrp<?U-He}Qjukmm1KQ6T20R)_Ho}N5^TxMq<+E;O.&' );
define( 'AUTH_SALT',        '$C`7$p.T/kvspI.QiQ&xtp?/ma=6~8_bJU4P`@mThrW/ZYOF1^7VaWQ~ar~tU(9r' );
define( 'SECURE_AUTH_SALT', 'iKk!HY!)ZR:5[;% k6hlX;E^1. T v[#B@on^!=GgAP~ya&e?p$%Fq/gddh*1yH:' );
define( 'LOGGED_IN_SALT',   '^nc{3.W=%]Yp`^W5$`.-YD`zMs|r=KLQTR.OclYmF=@Rw(c(6EYQmD!0uZhT16~E' );
define( 'NONCE_SALT',       ':8X45.8DvE,!e&a i Z!07N$F<kR]D_/VON?7Mc;_dvHT=Wc7rMcCZB=6k`L{lU7' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
