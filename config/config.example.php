<?php

return [
    /*
     |--------------------------------------------------------------------------
     | General settings
     |--------------------------------------------------------------------------
     |
     | General settings for configuring the PageBuilder.
     |
     */
    'general' => [
        'base_url' => 'http://localhost',
        'language' => 'en',
        'assets_url' => '/assets',
        'uploads_url' => '/uploads'
    ],

    /*
     |--------------------------------------------------------------------------
     | Storage settings
     |--------------------------------------------------------------------------
     |
     | Database and file storage settings.
     |
     */
    'storage' => [
        'use_database' => true,
        'database' => [
            'driver'    => 'mysql',
            'host'      => 'localhost',
            'database'  => '',
            'username'  => '',
            'password'  => '',
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => '',
        ],
        'uploads_folder' => __DIR__ . '/uploads'
    ],

    /*
     |--------------------------------------------------------------------------
     | Auth settings
     |--------------------------------------------------------------------------
     |
     | By default an authentication class is provided which checks for the
     | credentials configured in this setting block.
     |
     */
    'auth' => [
        'use_login' => true,
        'class' => PHPageBuilder\Modules\Auth\Auth::class,
        'url' => '/admin/auth',
        'username' => 'admin',
        'password' => 'changethispassword'
    ],

    /*
     |--------------------------------------------------------------------------
     | WebsiteManager settings
     |--------------------------------------------------------------------------
     |
     | By default a basic WebsiteManager is provided for creating/editing pages.
     |
     */
    'website_manager' => [
        'use_website_manager' => true,
        'class' => PHPageBuilder\Modules\WebsiteManager\WebsiteManager::class,
        'url' => '/admin'
    ],

    /*
     |--------------------------------------------------------------------------
     | Website settings
     |--------------------------------------------------------------------------
     |
     | By default a setting class is provided for accessing website settings.
     |
     */
    'setting' => [
        'class' => PHPageBuilder\Setting::class
    ],

    /*
     |--------------------------------------------------------------------------
     | PageBuilder settings
     |--------------------------------------------------------------------------
     |
     | By default a PageBuilder is provided based on GrapesJS.
     |
     */
    'pagebuilder' => [
        'class' => PHPageBuilder\Modules\GrapesJS\PageBuilder::class,
        'url' => '/admin/pagebuilder',
        'actions' => [
            'back' => '/admin'
        ]
    ],

    /*
     |--------------------------------------------------------------------------
     | Page settings
     |--------------------------------------------------------------------------
     |
     | By default a Page class is provided with knowledge about its layout and URL.
     |
     */
    'page' => [
        'class' => PHPageBuilder\Page::class,
        'translation' => [
            'class' => PHPageBuilder\PageTranslation::class,
        ]
    ],

    /*
     |--------------------------------------------------------------------------
     | Theme settings
     |--------------------------------------------------------------------------
     |
     | PageBuilder requires a themes folder in which for each theme the individual
     | theme blocks are defined. A theme block is a sub folder in the themes folder
     | containing a view, model (optional) and controller (optional).
     |
     */
    'theme' => [
        'class' => PHPageBuilder\Theme::class,
        'folder' => __DIR__ . '/themes',
        'folder_url' => '/themes',
        'active_theme' => 'demo'
    ],

    /*
     |--------------------------------------------------------------------------
     | Routing settings
     |--------------------------------------------------------------------------
     |
     | Settings for resolving pages based on the current URI.
     |
     */
    'router' => [
        'class' => PHPageBuilder\Modules\Router\DatabasePageRouter::class
    ],
];
