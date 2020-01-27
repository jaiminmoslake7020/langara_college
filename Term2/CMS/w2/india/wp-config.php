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
define( 'DB_NAME', 'india' );

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
define( 'AUTH_KEY',         '6a.[RJB;huMfSYfL7O&,/wKo~>I4dcPBl7thm4cx /jNu$BGej$0HX.,*UqVjo%l' );
define( 'SECURE_AUTH_KEY',  'M<k4b(}xO||P0#6a;|=;8qO:anH%XBc9m%ZdeBd*)]/c4a,o.k*_U<ap`(a_Q*5|' );
define( 'LOGGED_IN_KEY',    '&!y&OKQ9U-#nzn?@]s;*JIeB$XJqcI^Y^ne1|v5}wJEKmt-eX3`*D!szSL-1}1F^' );
define( 'NONCE_KEY',        'qLRw=XBt(Qkv&wt|R$u6o(xi 8<U-#KoGfXmkuznzLe23bT#MF+m(+n-[~$e`b6I' );
define( 'AUTH_SALT',        '[exV3TTi&d =`=/ZG-a|`MRZf`d$%7(&m-k7sC(#?t{wny%8w)Fn(,zb_#{Dw~A[' );
define( 'SECURE_AUTH_SALT', '](xyR_fZQmciMGfbJ}E{&}vw#]4ld%J48COZchy$ZdI!/~(On6e@W{PtuuKq+$N/' );
define( 'LOGGED_IN_SALT',   ',vQoIZ ;355 4mB~5{8H)]B!L[WTR~<WQ~]W+$>#Z.[[tO7f7>u`MrT]W@8*GqGS' );
define( 'NONCE_SALT',       'WUYZwyJ0;CWeuL ?~iF!K<9y!(?WGHti~JFMs{cd?_Y.6Ip9%^AH_;6-5jfI.QGs' );

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
