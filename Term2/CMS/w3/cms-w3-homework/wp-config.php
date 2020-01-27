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

define('DB_NAME', 'wpconfigurationexercise_test');


/** MySQL database username */

define('DB_USER', 'root');


/** MySQL database password */

define('DB_PASSWORD', "root");


/** MySQL hostname */

define('DB_HOST', 'localhost');


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

define('AUTH_KEY',         '#IhtP^h]dRLt`z(;gH[t+r;-<^gG_L<aL{Fj{%penfH-m,ZV!@3QP=erDSfZ~4[(');

define('SECURE_AUTH_KEY',  'vbP[C7d%V5I?$Dh{;sUHdv0M2UsKq`W;DN;]=kEg8ZUifO(ll.=Yp((vSl5PPvT+');

define('LOGGED_IN_KEY',    ',Y8TA3ZTA?{3mry!`;K2-1]fsl~zqiNW;1z%OS[b&F90#2muA1g5e!$b#dnuThW|');

define('NONCE_KEY',        'X5,9XB$`7^n Q<t,`WX48#Z }o[4- [7)[){[#1uU^N%R=(OWT]^+;O}AY#$i>J@');

define('AUTH_SALT',        'HJ(%x&y7KXj4Lvi.K0NbZsr9&52ctQfkm5Q(li<yd._:7,[PEe:yej4$|^E58Adb');

define('SECURE_AUTH_SALT', 'ruyF6H@g]k(#W= tkdYL=@g|ovbydaA8!+ZE>smYiiyh^ma^M3:D)RWTTe)U-O1%');

define('LOGGED_IN_SALT',   '|$8KYxQ]nh;GlXbNQ>O]GWIgcRJ3piM1v3h.Fg7qzg^n0@qnnbT{(.2I@ `? r1[');

define('NONCE_SALT',       'dJKl~YEl1iS4}-IYBU 8CRT)c)&Uu^q7/jqs~}+^?*Ako_*OYqD(,lr%j8W#ET,i');


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

