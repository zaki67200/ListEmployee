
class Employees {
   constructor(id_employee,name_employee,salary_employee,age_employee) {
     this.id_employee= id_employee;
     this.name_employee = name_employee;
    this.salary_employee=salary_employee;
    this.age_employee=age_employee;

  }

  creerEmail() {


    var name_Lower =this.name_employee.toLowerCase();
    var initiale=name_Lower[0];
    var name_firstName=name_Lower.split(" ");
    var split_first=name_firstName[1];
    var mail =initiale+"."+split_first+"@email.com";

     return mail;

  }

  caculerSalaire()
  {
    var salaire = this.salary_employee/12;

    return salaire;

  }

  caculerAnneeNaissance()
  {
    var ladate=new Date()

    var anneeNaissance= ladate.getFullYear()-parseInt(this.age_employee);

    return anneeNaissance;

  }


}
