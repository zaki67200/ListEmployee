
window.addEventListener("DOMContentLoaded", function(event) {

            const apiList = document.querySelector('#listing');


              var employees = [];
            var ajx  = new XMLHttpRequest();

            ajx.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
            ajx.onload = function () {

            	if (this.status == "200") {

                     var json = JSON.parse(this.responseText);

                     var somme=0;

                    for(var i=0; i <json.data.length; i++)
                    {

                      var p=new Employees(json.data[i].id,  json.data[i].employee_name,  json.data[i].employee_salary, json.data[i].employee_age );
                      var creer_email =p.creerEmail();
                      var caculerSalaire=p.caculerSalaire();
                      employees=parseFloat(p.caculerSalaire());

                      var caculerAnneeNaissance=p.caculerAnneeNaissance();
                      somme +=caculerSalaire;
                      var taille = json.data.length;

                       apiList.innerHTML += '<tr><td>' + p.id_employee +'</td>'+
                                             '<td>' + p.name_employee +'</td>'+
                                             '<td>' + creer_email +'</td>'+
                                             '<td> ' + caculerSalaire.toFixed(2)+'</td>'+
                                             '<td>' +caculerAnneeNaissance+'</td></tr>';

                      }


                        apiList.innerHTML += '<tr><td>' +taille +'</td>'+
                                '<td></td>'+
                                '<td></td>'+
                                '<td>' +somme+'</td>'+
                                '<td></td></tr>';
                }
            };
            ajx.send();
        });
        function sortTable() {
          var table, rows, switching, i, x, y, shouldSwitch;
          table = document.getElementById("listing");
          switching = true;

          while (switching) {

            switching = false;
            rows = table.rows;

            for (i = 1; i < (rows.length - 1); i++) {

              shouldSwitch = false;

              x = rows[i].getElementsByTagName("TD")[0];
              y = rows[i + 1].getElementsByTagName("TD")[0];

              if (Number(x.innerHTML) > Number(y.innerHTML)) {

                shouldSwitch = true;
                break;
              }
            }
            if (shouldSwitch) {

              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
            }
          }
        }
