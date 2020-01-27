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
define( 'DB_NAME', 'obsessiveguitarist' );

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
define( 'AUTH_KEY',         '7a;F~~]8^D$:2I}^A@10.-6t#;lA@14>TR*!y1Z3PCUx9YD*<[zS{!LAeIN*Dqmh' );
define( 'SECURE_AUTH_KEY',  '=a!c3v<08i.vu?@fQ*CboDB]<h+~C<5xuv;6gNP!IFM]ZbISxa}aX4^3p!#jLz{d' );
define( 'LOGGED_IN_KEY',    'c5CK:{T+*7F9jg%3Ybii/&6PiqJ6G=U0K* mP~|E4MKoEXN+lB||=)d`zR|<jUU|' );
define( 'NONCE_KEY',        'j9[MR}iAw*i^uBPJ~wyc,P6FR.{;U^@Ygy&c*,wEc(aA~1R.4Cb{D|J<60EuX+JT' );
define( 'AUTH_SALT',        'D1ApZqYE&_]&pVLUO8n,8PhX3!amvjn~E!>#7@OqPpNykG$V^ZvJxk(,6!3tj~4q' );
define( 'SECURE_AUTH_SALT', 'P=DL$lX-{[C(<|1t9l+`&_#W?W2jflyy_MjH>G9!6[CEDij<kr?&9]uNha#OP8c_' );
define( 'LOGGED_IN_SALT',   'cmPC|dih?EyG~y:G`R01aUcBG5 pwHVKPC%@u{^I+B>0:b1Jmv{d`FsctO7q_>,L' );
define( 'NONCE_SALT',       ',&[Q[2?e,;+p)kjk?CXgs98x6wi_6r`m;S}Cfj,3:Qi-@*3J?RV{PT|Y<#v0~jSh' );

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
