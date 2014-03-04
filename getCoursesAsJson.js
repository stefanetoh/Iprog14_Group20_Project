<!-- Created by: Stefan -->
<script>
$.getJSON( "DM.json", function( data ) {
  //alert(data.courses[10].code);
  
  var courses = data.courses;

  var department = data.department;
  
  $("#courses").append("[");

  for(i=0; i<courses.length; i++){	  	
	  var code = courses[i].code;
	  var title = courses[i].title;
	  var href = courses[i].href;
	  var info = courses[i].info;
	  var credits = courses[i].credits;
	  var level = courses[i].level;	
	  
  	  $("#courses").append('<p>{<br/>code: "'+code+'",<br/>'+'title: "'+title +'",<br/>' + 'href: "' + href +'",<br/>' +'info: "'+info +'",<br/>'+'credits: "'+ credits + '",<br/>'+'level: "'+level+'"<br/>},');

  }
  $("#courses").append("];");
});
</script>