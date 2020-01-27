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
define('DB_NAME', 'jazz');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost:8889');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '>1wpS{iv6*g-KQhk3OFj!hk@Nt8gL_3O#@.:p_W->q&9K`><du9sq:(0B@ZyX!Dj');
define('SECURE_AUTH_KEY',  '^HHqj0C,R>*!x}9#oeR ?2|m-->e/ {NS:J(my}he5=7]:r8CV1Mr9~S7zL;;2lg');
define('LOGGED_IN_KEY',    'ah%ObDjE|3lLh6N!gK8HTf0}bum~Bu*?vr&~t+{VKot:^MC:E]e5jbOq%VdnmVWC');
define('NONCE_KEY',        'zlxj_EQ1rjUmQv~5(M1Y]]nw(N$ppubp>Mc @JY#dw3iM,32vscP;`J|3njeFFFx');
define('AUTH_SALT',        '89DrQt&15{A2it4U{tM>}QiLmD*u(vQXh%_E41WqFPIX+>`#%qQL*o>Ff[wsr/m|');
define('SECURE_AUTH_SALT', ']%E$fRG<{$x6GzeMI*b65L;O.)I(aD+bbV2p,uph2CY=I5ZFLd;sQoaQXGSv,Fx@');
define('LOGGED_IN_SALT',   'a >h0_{w|p3BAK{6^|$ ZXqJONNr,IzZVWErcMnKbDI||s+,2c1v9U;|-asEhy73');
define('NONCE_SALT',       'W^(D,>ZLaVl#`r1i(XbzNN_tDj&a&xRLZl4y`B{2(m;gHw1Y}&FOgBj%K__=*C&P');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
