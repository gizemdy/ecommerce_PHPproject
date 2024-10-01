<?php
include_once '../db/connection.php';
$object=new Connection();
$connection=$object->Connect();
$query = "SELECT id,product_order,total FROM product_order";
$result = $connection->prepare($query);
$result->execute();
$data=$result->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
    crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/2.1.7/css/dataTables.dataTables.min.css">
    <link rel="stylesheet" href="../css/animate.css">
    <link rel="stylesheet" href="../css/carousel.css">
    <link rel="stylesheet" href="../css/styles.css">
  
    <title>Grocery</title>  

</head>
  <body>
    <header>
        <nav class="navbar fixed-top navbar-expand-md navbar-dark text-white"
        style="background: #2EB26E">
        <a class="text-white navbar-brand" href="#">
        <i class="fab fa-pagelines animate flash"></i> GROCERY
    </a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" 
       aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto menu">
            <li class="nav-item active">
                <a href="../index.html" class="nav-link">Home</a>
            </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
            <a style="cursor:pointer" class="nav-link text-white" href="../index.html">
            EXIT
        </a>
        </form>
       </div>
    </nav>
</header>
<div class="container ">
    <div class="row">
        <div class="col-lg-12">
            <button data-toggle="modal" id="newBtn" type="button" class="mt-4 btn btn-success">
                New Order
            </button>
        </div>
    </div>
</div>
<br>
<div class="container ">
    <div class="row">
        <div class="col-lg-12">
            <div class="table-responsive">
                <table id="tableOrders" class="table table-striped table-bordered table-condensed" style="width:100%;">
                <thead class="text-center">
                    <tr>
                        <th>Id</th>
                        <th>Order</th>
                        <th>Total</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                        <?php
                            foreach($data as $dat){
                        ?>
                        <tr>
                            <td><?php echo $dat['id']?></td>
                            <td><?php echo $dat['product_order']?></td>
                            <td><?php echo $dat['total']?></td>
                            <td></td>
                        </tr>
                        <?php
                            }
                        ?>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>


<!-------------- MODAL----------------->
<div class="modal fade" id="modalCRUD" tabindex="-1" role="dialog" 
aria-labelledby="exampleModalLabel" aria-hidden="true">
<div role="document" class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
            </h5>
            <button type="button" class="close" data-dismiss="modal"aria-label="close"> 
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <form id="formOrders">
            <div class="modal-body">
                <div class="form-group">
                    <label for="order" class="col-form-label">Order:</label>
                    <input type="text" class="form-control" id="order">
                </div>
                <div class="form-group">
                    <label for="total" class="col-form-label">Total:</label>
                    <input type="text" class="form-control" id="total">
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                    <button type="submit" id="btnSaveOrder" class="btn btn-success">Save</button>
            </div>
        </form>
        </div>
    </div>
</div>



        <!---------------END MODAL----------------->
<div class="container">
            <footer>
                <p class="float-right">
                    <a href="#">TOP</a>
                </p>
                <div class="row">
                    HOS GELDINIZ
                </div>
            </footer>
</div>
 
        <!---------------JAVASCRIPT----------------->
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.29.2/dist/sweetalert2.all.min.js"></script>
<script src="../js/wow.js"></script>
<script src="../js/cart.js"></script>
<script src="https://cdn.datatables.net/2.1.7/js/dataTables.min.js"></script>
<script src="./admin.js"></script>
        
</body>
</html>