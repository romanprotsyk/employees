using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace webapi.Models
{
    public partial class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Key]
        public int EmployeeNumber { get; set; }
    }
}
