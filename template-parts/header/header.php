<?php 
$logo = get_field('header_logo', 'options');
$button = get_field('header_menu_cta_button', 'options');
?>
<header class="header">
	<div class="container">
        <div class="header__content">
            <?php if($logo): ?>
                <div class="header__logo">
                    <a href="<?php echo get_home_url() ?>"><img src="<?php echo $logo['url'] ?>" alt="<?php echo $logo['title']; ?>"></a>
                </div>
            <?php endif; ?>
            <div class="header__menuWrapper">
                <div class="header__menu">
                    <?php wp_nav_menu(array('menu' => 'main-menu',)) ?>
                    <?php if($button): ?>
                        <a href="<?php echo $button['url']; ?>" class="header__button"><?php echo $button['title']; ?></a>
                    <?php endif; ?>
                </div>
            </div>
            <div class="header__lang"></div>
            <div class="header__burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</header>
