<html lang="en">
<meta charset="UTF-8">
<body>
<?php
try {

    switch ($_FILES['upfile']['error']) {
        case UPLOAD_ERR_OK:
            break;
        case UPLOAD_ERR_NO_FILE:
            throw new RuntimeException('No file sent.');
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
            throw new RuntimeException('Exceeded filesize limit.');
        default:
            throw new RuntimeException('Unknown errors.');
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    if (false === $ext = array_search(
        $finfo->file($_FILES['upfile']['tmp_name']),
        array(
            'pdf' => 'application/pdf'
        ),
        true
    )) {
        throw new RuntimeException('Invalid file format.');
    }

    $hash = hash_file("sha512", $_FILES['upfile']['tmp_name']);

    $newfilename = sprintf('/uploads/%s.%s', $hash, $ext);
    
    if (file_exists(".".$newfilename)) {
    	echo "<p>File already exists.</p>";
    	echo '<meta http-equiv="refresh" content="2;url='.$newfilename.'">';
    	die();
    }

    if (!move_uploaded_file($_FILES['upfile']['tmp_name'], ".".$newfilename)) {
        throw new RuntimeException('Failed to move uploaded file.');
    }
    

	echo 'File is uploaded successfully.';
	echo '<meta http-equiv="refresh" content="2;url='.$newfilename.'">';
	die();

} catch (RuntimeException $e) {

    echo $e->getMessage();

}

?>
</body>
