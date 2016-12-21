<div class = 'container-fluid pt-70 pb-50'>
	<div class = 'container'>
		<h1 class="align-center">Proyecto nuevo</h1>  
	</div>
	<div class = 'container'>
		<div class = 'row'>
			<div class="align-center">
				<a href="<?php echo site_url("web/proyectos"); ?>" class = "btn btn-default chk-syllabus-btn ">Regresar</a>
			</div>
		</div>
		<div class = 'row'>
			<div class = 'col-md-offset-1 col-md-10'>
				<form>
					<div class="form-group">
						<label for="project-title">Título:</label>
						<input class="form-control" type="text" placeholder="Ingresa un título..." id="project-title">
					</div>
					<div class="form-group">
						<label for="project-description">Descripción:</label>
						<textarea class="form-control" id="project-description" rows="3"></textarea>
					</div>
					<div class="form-group">
						<label for="project-date">Fecha de Entrega:</label>
						<input class="form-control" type="date" id="project-date">	
					</div>
					<div class="form-group">
						<label for="project-tags">Tags:</label>
						<input class="form-control" type="tags" placeholder="Añade algunos tags..." data-role="tagsinput" id="project-tags"/>
					</div>
					<div class="form-group">
						<input type="file" class="form-control-file" id="project-file" aria-describedby="fileHelp">
					</div>
					<button type="submit" class="btn btn-default chk-syllabus-btn">Enviar</button>
				</form>
			</div>
		</div>
	</div>
</div>