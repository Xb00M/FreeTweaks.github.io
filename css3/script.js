$(document).ready(function() 
{
  $("button").hide();


  $(".fontawesome-remove").click(function()
                                 {
   var isCol = $(this).parent().parent().hasClass("cellHdr");
var index = $(".fontawesome-remove").index(this);
   if (isCol) 
   {
       $(this).parent().parent().remove();
       $(".tblRow > .cell").each(function(x, element)
                               {
         numCols = $(".cellHdr").length;                        
         if((x-index)%(numCols+1)==0)
           $(this).remove();
                               });
     
     newWidth = 100/numCols - 20 + '%';     
     $(".cell").width(newWidth);
     newWidth = 100/numCols - 40 + '%';
     $(".cellHdr").width(newWidth);
     
   }
   else
   { 
       $(this).parent().parent().remove();
   }
  RenumberCells($("#chkFactorNums").prop("checked"));                                 
                                 });
  $(".fontawesome-pencil").click(function()
                                 {
                                   
    if ($(this).css("color") == "rgb(211, 211, 211)")
      return;
    $(".fontawesome-pencil").not($(this)).css("color", "lightgray");                               
   var isCol = $(this).parent().parent().hasClass("cellHdr");
var index = $(".fontawesome-pencil").index(this);
 var ele;
 var numCols = $(".cellHdr").length;
   if (isCol) 
   {
     ele = $(this).parent().parent();
     ele.css("user-select", "text");
      ele.attr("contenteditable", true);     
     $(this).parent().attr("contenteditable", false);
     ele.focus();
     
      $(".tblRow > .cell").each(function(x, element)
                                {
                              
      if(((x-index)%numCols)==0)   
      $(this).attr("contenteditable", true); 
                                });
   }
   else
   {
     index -= 4;
     $(".tblRow > .cell").each(function(x, element)
                                {
      if (x>=index && x<(index*4+4))
      {
           $(this).attr("contenteditable", true); 
      } 
                                });
     
   }
                                   
    $("button").show();                   
                                 });
  $("button").click(function()
                    {
    $(".cell").attr("contenteditable", false);  
    $(".cellHdr").attr("contenteditable", false); 
    $(".fontawesome-pencil").css("color", "black");                  
     $("button").hide();                  
                    });
});  

function RenumberCells(factor)
{ 
  if(!factor)
    return;
  
  $(".cellHdr").each(function(x, element)
                    {
 var newText = "Column" + (x + 1);           
		$(this).contents().filter(function(){
			return this.nodeType==3 && $(this).text()
		}).replaceWith(newText);
                      
//                      alert(text);
// str = str.replace(text, newText);    
// alert(str);                   
//$(this).html(str);                     //alert($(this).text());
  //$(this).text("Column" + (x + 1));                    
                      
                    });
  $(".tblRow > .cell").each(function(x, element)
                            {
  $(this).html("Cell" + (x + 1));                            
                            });
}