<?php
   require __DIR__.'/vendor/autoload.php';

   use Kreait\Firebase\Factory;
   use Kreait\Firebase\ServiceAccount;

   $serviceAccount = ServiceAccount::fromJsonFile(__DIR__ . '/renttoown.json');
   $firebase = (new Factory)
      ->withServiceAccount($serviceAccount)
      // ->withDatabaseUri('https://crud-4f173-default-rtdb.firebaseio.com')
      ->withDatabaseUri('https://rtotest-891ba-default-rtdb.firebaseio.com')
      ->create();

    $database = $firebase->getDatabase();

?>