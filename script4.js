/*var html1 = "<table>\
            <tr>\
              <td>Cel 1.1</td>\
              <td>Cel 1.2</td>\
              <td>Cel 1.3</td>\
            </tr>\
           </table>"; */

function createRow (j, nbCol) {
  var html = "";
  for (var i = 0; i < nbCol;i++) {
     html +="<td>";
     html +=(j+1);
     html +="x";
     html +=(i+1);
     html +="=";
     html += ((j+1)*(i+1));
     html +="</td>";
    }
  return html;
}

function createTable(nbLi, nbCol) {
              

// Intialisation de la table
var html1 = "<table>";


// boucle de création des colonnes
for (var j = 0; j < nbLi;j++) {
     html1 += "<tr>";
     html1 += createRow(j,nbCol);
     html1 += "</tr>";
}

// finalisation 
html1 += "</tr></table>";

return html1;
  
}

$("#container").html(createTable(10, 100));

