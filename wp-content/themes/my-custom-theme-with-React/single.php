<!--
  This template is responsible for the single blog post (default type 'post') rendered to the web browser.
  -->

  <?php
  get_header();

  while(have_posts()) {
    the_post(); 
    // pageBanner();
    ?>

    <div class="container container--narrow page-section">
       <div class="metabox metabox--position-up metabox--with-home-link">
        <div>
          <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('large'); ?></a>
        </div>
        <p>
          <a class="metabox__blog-home-link" href="<?php echo site_url('/blog'); ?>">
            <i class="fa fa-home" aria-hidden="true"></i> 
            Blog Home
          </a> 
          <span class="metabox__main">
            <?php the_title(); ?> Posted by <?php the_author_posts_link(); ?> 
            on <?php the_time('n -M-y'); ?> 
            in <?php echo get_the_category_list(', ')  ?></span>
        </p>
      </div>
      <div class="generic-content"><?php the_content(); ?></div>

    </div>

    <hr>
    <?php
  };

  get_footer(); 
?>