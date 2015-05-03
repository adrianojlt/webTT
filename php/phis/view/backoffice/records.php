<?php 
	$records = $content['records'];
	//var_dump($records);
	//echo '<br>';
	//echo $records[0];
?>

<div class="container">
	<div class="row">

		<h2><?php echo $content['title'];?></h2>  

		<table class="table responsiveTable" st-table="workouts" st-pipe="callServer">

			<thead>
			    <tr>
			      <th>id</th>
			      <th>mail</th>
			      <th>pass</th>
			      <th>ip</th>
			      <th>user_agent</th>
			      <th>created</th>
			      <!--
			      <th></th>
			      <th></th>
			  	  -->
			    </tr>
	    	</thead>

	    	<tbody>

	    		<?php foreach ($records as $record) {?>
	    		<tr class="" style="">

	    			<td><?php echo $record['id']; ?></td>
	    			<td><?php echo $record['mail']; ?></td>
	    			<td><?php echo $record['pass']; ?></td>
	    			<td><?php echo $record['ip']; ?></td>
	    			<td><?php echo $record['user_agent']; ?></td>
	    			<td><?php echo $record['created']; ?></td>
	    			<td></td>
	    			<!--
	    			<td>
	    				<a href="#/" class="btn btn-primary btn-sm">
              				<span class="glyphicon glyphicon-pencil" title="Edit"></span>
            			</a>
	    			</td>
	    			<td>
	    				<button type="button" class="btn btn-danger btn-xs delete-record" data-toggle="modal" data-target="#myModal" data-deleteurl="">
              				<span class="glyphicon glyphicon-trash" title="Eliminar Workout"></span>
            			</button>
	    			</td>
	    			-->

	    		</tr>
        		<?php } ?>

	    	</tbody>

	    	<tfoot>
				<tr>
				</tr>
			</tfoot>

	    </table>

	</div>
</div>
