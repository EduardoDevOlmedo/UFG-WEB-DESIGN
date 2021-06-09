<?php
  $destino = "eduardolmedi00@gmail.com";
  $contenido = "De: YourDestiny\n"" Asunto: COMPRA\n"" Se registró su compra exitosamente.";
  mail($destino, $contenido);
  header("Location:HTML\agradecimiento.html");
?>