<!DOCTYPE html>
<html lang="en">

<head>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Poppins:wght@600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet">


    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>


    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="website icon" type="image" href="Q-bg.png">

    <script src="index.js"></script>
    <link rel="stylesheet" href="style.css">

    <title>Quaroit Notizie</title>
</head>

<body>
    <header>
        <a href="index.php"><img class="logo-text" src="text-logo.png"></a>
        <ul class="navigazione">
            <li><a href="#" id="menu-toggle" class="menu"> <i id="logo-menu" class="ri-menu-2-line"> </i>Menu</a></li>
            <li><a href="#" class="cerca">Ricerca</a> <i id="logo-cerca" class="ri-search-2-line"></i></li>
        </ul>
        <ul id="sidebar" class="sidebar">
            <!-- Contenuto della tendina laterale -->
            <div class="sidebar-header">
                <a href="index.php"><img class="q-text" src="q.png"></a>
                <a href="#" id="close-sidebar" class="close-sidebar"><i class="ri-close-circle-fill"></i></a>
            </div>
            <br>
            <hr class="sidebar-line">
            <h2 class="sidebar-title">Sezioni</h2>
            <hr class="sidebar-line">
            <div class="sidebar-sections">

                <div class="section">
                    <a href="?section=biblioteca">Biblioteca</a>
                </div>
                <div class="section">
                    <a href="?section=cronaca">Cronaca</a>
                </div>
                <div class="section">
                    <a href="?section=cultura">Cultura</a>
                </div>
                <div class="section">
                    <a href="?section=design">Design</a>
                </div>
                <div class="section">
                    <a href="?section=economia">Economia</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Enigmistica</a>
                </div>

                <div class="section">
                    <a href="?section=enigmistica">Esteri</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Giochi</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Green Blue</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Il Gusto</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Italian Tech</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">La Zampa</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Londra</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Moda e Beauty</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Mondo Solidale</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Motori</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Podcast</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Politica</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">RepTV</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Rubriche</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Salute</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Sport</a>
                </div>
                <div class="section">
                    <a href="?section=enigmistica">Viaggi</a>
                </div>
            </div>

            <div class="sidebar-instagram">
                <a href="https://www.instagram.com/leoalicino/" target="_blank">INSTAGRAM</a>
            </div>



        </ul>
    </header>


    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div id="news-slider" class="owl-carousel">
                    <?php
                    $rss_url = "https://www.repubblica.it/rss/homepage/rss2.0.xml"; // URL del feed RSS

                    $xml = simplexml_load_file($rss_url); // Carica il feed RSS

                    if ($xml) {
                        $items = $xml->channel->item; // Prende tutti gli elementi "item" del feed

                        foreach ($items as $item) {
                            $title = $item->title;
                            $description = $item->description;
                            $description = preg_replace('/<img[^>]+>/', '', $description);
                            $description = strip_tags($description);
                            $link = $item->link;
                            $pubDate = strtotime($item->pubDate);
                            $data = date('d-m-Y', $pubDate);

                            $enclosure = $item->enclosure;
                            if ($description != '') {
                                $image_url = (string)$enclosure['url'];

                                echo '<div class="post-slide">';
                                echo '<div class="post-img">';

                                echo '</div>';
                                echo '<div class="post-content">';
                                echo    '<h3 class="post-title">';
                                echo        '<a href="#">' . $title . '.</a>';
                                echo   '</h3>';
                                echo    '<p class="post-description">' . $description . '</p>';
                                echo    '<span class="post-date"><i class="fa fa-clock-o"></i>' . $data . '</span>';
                                echo   '<a href="' . $link . '" class="read-more " target="_blank" >Scopri di più</a>';
                                echo '</div>';
                                echo '</div>';
                            }
                        }
                    }
                    ?>

                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="date-filter">
            <form method="GET" action="">
                <script>
                    document.addEventListener('DOMContentLoaded', function() {
                        var currentDate = new Date().toISOString().split("T")[0];
                    });
                </script>
                <input type="date" id="date" name="date" max="<?php echo date('Y-m-d'); ?>">
                <button type="submit">Filtra</button>
            </form>
        </div>
        <section id="news-section">
            <?php
            $rss_url = "https://www.repubblica.it/rss/homepage/rss2.0.xml"; // URL del feed RSS
            $xml = simplexml_load_file($rss_url); // Carica il feed RSS

            
            $desiredDate = isset($_GET['date']) ? $_GET['date'] : null; // Ottieni la data desiderata dall'URL
            $startIndex = isset($_GET['start']) ? (int)$_GET['start'] : 0; // Ottieni l'indice di partenza per le notizie
            $desiredCategory = isset($_GET['section']) ? $_GET['section'] : null; // Ottieni la categoria desiderata

            $filterApplied = !empty($desiredDate) || !empty($desiredCategory); // Verifica se il filtro per data o categoria è stato applicato

            if ($xml) {
                $items = $xml->channel->item; // Prende tutti gli elementi "item" del feed
                $sorted_items = [];

                foreach ($items as $item) {
                    $title = $item->title;
                    $description = $item->description;
                    $description = preg_replace('/<img[^>]+>/', '', $description);
                    $description = strip_tags($description);
                    $link = $item->link;
                    $pubDate = strtotime($item->pubDate);
                    $image_url = (string)$item->enclosure['url'];
                    $author = (string)$item->author;
                    $categories = $item->category; // Ottieni tutte le categorie della notizia

                    if (!empty($image_url)) {
                        $categoryArray = [];

                        // Memorizza le categorie della notizia in un array
                        foreach ($categories as $category) {
                            $categoryArray[] = (string)$category;
                        }

                        $sorted_items[] = [
                            'title' => $title,
                            'description' => $description,
                            'link' => $link,
                            'pubDate' => $pubDate,
                            'img' => $image_url,
                            'author' => $author,
                            'categories' => $categoryArray
                        ];
                    }
                }

                // Ordina gli elementi in base alla data in ordine decrescente
                usort($sorted_items, function ($a, $b) {
                    return $b['pubDate'] - $a['pubDate'];
                });

                // Filtra gli elementi per la data desiderata se specificata
                if (!empty($desiredDate)) {
                    $sorted_items = array_filter($sorted_items, function ($item) use ($desiredDate) {
                        $itemDate = date('Y-m-d', $item['pubDate']);
                        return $itemDate === $desiredDate;
                    });
                }

                // Filtra gli elementi per la categoria desiderata se specificata
                if (!empty($desiredCategory)) {
                    $sorted_items = array_filter($sorted_items, function ($item) use ($desiredCategory) {
                        return in_array($desiredCategory, $item['categories']);
                    });
                }

                // Prendi solo le ultime 10 notizie con immagini a partire dall'indice specificato
                $latest_items = array_slice($sorted_items, $startIndex, 10);

                if ($filterApplied) {
                    echo '<div class="filter-indicator">';
                    echo '<div class="filter-box">';
                    if (!empty($desiredDate)) {
                        echo '<span class="filter-date">' . $desiredDate . '</span>';
                    }
                    if (!empty($desiredCategory)) {
                        echo '<span class="filter-category">' . $desiredCategory . '</span>';
                    }
                    echo '<a href="?">X</a>';
                    echo '</div>';
                    echo '<div class="filter-results">Risultati: ' . count($sorted_items) . ' notizie trovate</div>';
                    echo '</div>';
                }

                foreach ($latest_items as $item) {
                    $title = $item['title'];
                    $description = $item['description'];
                    $link = $item['link'];
                    $pubDate = $item['pubDate'];
                    $data = date('d-m-Y', $pubDate);
                    $image_url = $item['img'];
                    $author = $item['author'];

                    echo '<div class="news-item" data-category="' . $desiredCategory . '">';
                    echo '<img src="' . $image_url . '" alt="' . $title . '">';
                    echo '<div class="news-content">';
                    echo '<h3>' . $title . '</h3>';
                    echo '<p>' . $description . '</p>';
                    echo '<p class="author">Autore: ' . $author . '</p>';
                    echo '<a href="' . $link . '" class="read-more" target="_blank">Scopri di più</a>';
                    echo '</div>';
                    echo '<span class="news-date">' . $data . '</span>';
                    echo '</div>';
                    echo '<hr class="sidebar-line">';
                }

                // Mostra il link "Mostra altre notizie" solo se ci sono altre notizie da visualizzare
                if ($startIndex + 10 < count($sorted_items)) {
                    $nextIndex = $startIndex + 10;
                    $queryString = $filterApplied ? ('&date=' . $desiredDate . '&section=' . $desiredCategory) : '';
                    echo '<a href="?start=' . $nextIndex . $queryString . '">Mostra altre notizie</a>';
                }
            }
            ?>





        </section>
    </div>



    <script>
        $(document).ready(function() {
            $("#news-slider").owlCarousel({
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [980, 2],
                itemsMobile: [600, 1],
                navigation: true,
                navigationText: ["", ""],
                pagination: true,
                autoPlay: true
            });
        });
    </script>





</body>

</html>