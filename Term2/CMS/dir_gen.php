<?php
    for( $i = 15 ;  $i < 100 ; $i++ ){
        mkdir( __DIR__."/../OOP/w$i" );
        chmod( __DIR__."/../OOP/w$i" , 0775);
    }