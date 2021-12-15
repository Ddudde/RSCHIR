<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Интересные факты</title>


    <link rel="stylesheet" href="background.css">
    <link rel="stylesheet" href="fonts_colors_data.css">
    <link rel="stylesheet" href="./main_header/main_header.css">

    <link rel="stylesheet" href="./styles/reset.css">
    <link rel="stylesheet" href="./styles/column.css">
    <link rel="stylesheet" href="./styles/interesting-fact.css">
    <link rel="stylesheet" href="./styles/list.css">

</head>
<body>
    
    <section class="interesting-fact">
        <?php
            $mysqli = new mysqli("db", "user", "password", "appDB");
            $result = $mysqli->query("SELECT * FROM interesting_facts");
            echo "<ul>";
            foreach ($result as $row) {
                echo '<div class="column-row">
                        <div class="column-row__column column-row__column_l-6 column-row__column_m-6 column-row__column_s-2">
                            <div class="interesting-fact__video">
                                <iframe 
                                    width="560" 
                                    height="315" 
                                    src="' .$row['url_video'] . '" 
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>

                        <div class="column-row__column column-row__column_l-6 column-row__column_m-6 column-row__column_s-2">
                            <div class="interesting-fact__text-wrapper">
                                <h2 class="interesting-fact__title ">' .$row['title'] . '</h2>
                                <ol class="list">' .$row['text'] . '
                                </ol>
                            </div>
                        </div>
                    </div>';
            }
        ?>
    </section>
    

    <script src="./main_header/main_header.js"></script>
    <script>document.body.appendChild(getMainHeader());</script>
    <script src="./scripts/menu.js"></script>
</body>
</html>
