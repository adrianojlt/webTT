<?php 
    //$firephp->log($_GET, 'get');
    //echo $_GET['op'];
?>

<div class="navbar navbar-default navbar-static-top" role="navigation">

	<div class="container">

        <div class="navbar-header">

            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!-- You'll want to use a responsive image option so this logo looks good on devices - I recommend using something like retina.js (do a quick Google search for it and you'll find it) -->
            <a class="navbar-brand" href="#/">BackOffice</a>

        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">

            <ul class="nav navbar-nav">

                <li class="dropdown">
                     
                    <a href="" class="dropdown-toggle" data-toggle="dropdown">
                        <span class="glyphicon glyphicon-user"></span> Utilizadores <span class="caret"></span>
                    </a>

                    <ul class="dropdown-menu" style="" role="menu">
                        <li class="">
                            <a href="#"><span class="glyphicon glyphicon-list"></span> Listar </a>
                        </li> 
                        <li class="">
                            <a href="#"><span class="glyphicon glyphicon-plus"></span> Criar </a>
                        </li>
                    </ul>

                </li>

                <li class="<?php if ( $_GET['op'] == 'records' ) echo 'active';?>">
                    <a href="?op=records">Records</a>
                </li>

                <li class="<?php if ( $_GET['op'] == 'logs' ) echo 'active';?>">
                    <a href="?op=logs">Logs</a>
                </li>

                <li class="<?php if ( $_GET['op'] == 'etc' ) echo 'active';?>">
                	<a href="?op=etc">Etc</a>
                </li>


                <!--
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown">Blog <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="#/blog">List of Posts</a>
                        </li>
                        <li><a href="#/blog/post">View One Post</a>
                        </li>
                    </ul>
                </li>
            	-->

            </ul>

			<ul class="nav navbar-nav navbar-right">

				<li class="dropdown">
					 
					<a href="" class="dropdown-toggle" data-toggle="dropdown">
						<!--<i class="icon-user icon-black"></i> admin@mail.com <i class="caret"></i>-->
						<span class="glyphicon glyphicon-user"></span> admin@mail.com <span class="caret"></span>
					</a>

					<ul class="dropdown-menu" style="" role="menu">

						<li class="">
							<a href="#"><span class="glyphicon glyphicon-cog"></span> Settings </a>
						</li> 

						<li class="divider"></li>

						<li><a href="?op=logout"><span class="glyphicon glyphicon-log-out"></span> Exit </a></li>
                        
					</ul>

				</li>
            </ul>

        </div>
        <!-- /.navbar-collapse -->

    </div>
    <!-- /.container -->

</div>
