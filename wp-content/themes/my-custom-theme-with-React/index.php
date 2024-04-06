 <!-- hello, I control the blog home page! -->

<?php

get_header(); ?>

<div class="row">
  <div class="col-xs-12 col-sm-9">
    <?php
      while(have_posts()) {
        the_post(); ?>
          <div class="container row post-item d-flex p-4">
            <div class="col align-self-center align-items-center">
              <div class="featured-img">
                <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('medium'); ?></a>
              </div>
              <h3 class="the_title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
              <div class="metabox">
                <p class="meta-details" >Posteb by <?php the_author_posts_link(); ?> on <?php the_time('n-M-y') ?> in <?php echo get_the_category_list(', '); ?></p>
              </div>
            </div>
            <div class="col align-self-center">
              <div class="generic-content">
                <?php the_excerpt(); ?>
                <p><a href="<?php the_permalink(); ?>" class="btn">Continue reading &raquo;</a></p>
              </div>
            </div>
          </div>
      <?php   
      }

    echo paginate_links();
    ?>
  </div>
  <div class="col-xs-12 col-sm-3">
    <?php get_sidebar(); ?>
  </div>
</div>

<?php get_footer(); ?>