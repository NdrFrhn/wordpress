<?php

function boilerplate_load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'boilerplate_add_support');

// Theme setup 
function learningWordPress_setup() {

  // Navigation Menus
  register_nav_menus(array(
    'primary' => __('Primary Menu'),
    'footer' => __('Footer Menu'),
  ));

  // Add featured image support
  add_theme_support('post-thumbnails');
  add_image_size('small-thumbnail', 180, 120, true);
  add_image_size('banner-image', 920, 210, true);

  // https://www.youtube.com/watch?v=--5I-avZUcY => check Bread video about Custom Post-Format

  // Add post format support
  add_theme_support('post-formats', array('aside', 'gallery', 'link'));
}

add_action('after_setup_theme','learningWordPress_setup');

//  Widget setup (sidebar, ...)

function awesome_widget_setup() {
  register_sidebar(
    array(
      'name' => 'Sidebar',
      'id' => 'sidebar-1',
      'class' => 'custom',
      'description' => 'Standard Sidebar',
      'before_widget' => '<aside id="%1$s" class="%2$s">',
      'after_widget' => '</aside>',
      'before_title' => '<h1 class="widget-title">',
      'after_title' => '</h1>',
    )
  );
}

add_action('widgets_init', 'awesome_widget_setup');