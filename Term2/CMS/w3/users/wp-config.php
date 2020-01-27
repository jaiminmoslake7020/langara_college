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
define( 'DB_NAME', 'users' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',         'i)?OuG [,?)!i_~zEF^DGtfX[lsm?A!kFFaC%1of~9_(Q^p]QR#q*f:Kh[Ou#Zt>' );
define( 'SECURE_AUTH_KEY',  'XpiE5pG^X^4:0|QT?MUGx29JJ Mz>$E%Kj}PeN lOm <XHur1FeB`Jal)l,mHTc2' );
define( 'LOGGED_IN_KEY',    '^ebLKwT]whks{b2WG]%Q*hoHW?1left&Y?Q/p_VqC~>29_Xy@R4,v=|1E,d58k$.' );
define( 'NONCE_KEY',        'Qpv)+0;F^H`$7W!eSe{y7NG%sy{yfl-P_!DZ]x{LHmQ^W:=wcnR|0lZm-<~..Ls7' );
define( 'AUTH_SALT',        'R94v$=PDS`v.Us(yZ5a[$C;0|9{>{o;uGPme6 jRP-Pu1Wh,IoIcT[m2iaP^&r(E' );
define( 'SECURE_AUTH_SALT', 'trrbVr{%)!>,Q9TcVsN5M9Ng@!V9OS$@W1#>FLk@k`<+9FdD$#EK;Fk/7,1)!,t]' );
define( 'LOGGED_IN_SALT',   'ncboIWrdUW/oaq0O0)`vsl|tk?15#PC]5b>Kr9ma}qZ!g7y%f<)k3}2qvkM{}hjw' );
define( 'NONCE_SALT',       '^;1JUzsI.74eQ{QgzKiHO[z*E#@|wapgeXtaC+E.E|k6O7&*ep:<3IP2JMiIx|[c' );

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
