  var files=[];
 	var mainFeildSet=document.getElementById("filedrag");
  var result=document.getElementById("result");
	result.style.display = "none";

	// file drag hover
	function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();
		e.target.className = (e.type == "dragover" ? "hover" : "");
	}

	// file selection
	function FileSelectHandler(e) {

		// cancel event and hover styling
		FileDragHover(e);
		// fetch FileList object
		 files = e.target.files || e.dataTransfer.files;

		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
			ParseFile(f);
		}

	}

	// output file information
	function ParseFile(file) {
		mainFeildSet.style.display = "none";
    // console.log(file.type);
    if (file.type === "application/pdf"){
    result.style.display = "block";
    document.getElementById("on-error-hide").style.display = 'block';
    document.getElementById("img").style.background = '#4fd987';
    document.getElementById("img").innerHTML = "<img class='remove-icon' src='./images/pdf-type.svg'>"
    document.getElementById("demo").innerHTML = "<button type='button' class='btn-trans' onclick='ClearImage()'><img class='remove-icon' src='./images/remove.svg'></button>" + file.name;
    }
    else {
    result.style.display = "block";
    document.getElementById("img").style.background = '#fb7979';
    document.getElementById("img").innerHTML = "<img class='remove-icon' src='./images/file-error.svg'>"
    document.getElementById("on-error-hide").style.display = 'none';
    document.getElementById("demo").innerHTML =  "<button type='button' class='btn-trans' onclick='ClearImage()'><img class='remove-icon' src='./images/remove.svg'></button> Please upload a valid doucument";
    document.getElementById("invalid").innerHTML =  "e.g. PDF & Word files";
    }
	}

	function ClearImage(file) {
		mainFeildSet.style.display = "block";
    result.style.display = "none";
    files.value ="";
    document.getElementById("demo").innerHTML = '';
  }

  var fileselect=document.getElementById("fileselect")
  var filedrag=document.getElementById("filedrag")

		fileselect.addEventListener("change", FileSelectHandler, false);
	  filedrag.addEventListener("dragover", FileDragHover, false);
		filedrag.addEventListener("dragleave", FileDragHover, false);
		filedrag.addEventListener("drop", FileSelectHandler, false);
		filedrag.style.display = "block";
