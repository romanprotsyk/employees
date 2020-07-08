using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api")]
    public class ApiController : ControllerBase
    {
        private readonly ILogger<ApiController> _logger;
        private readonly DatabaseContext _database;

        public ApiController(ILogger<ApiController> logger, DatabaseContext context)
        {
            _logger = logger;
            _database = context;
        }

        [HttpGet]
        [Route("employees")]
        public List<Employee> GetAllUsers() => _database.getEmployees();


        [HttpPost]
        [Route("employees")]
        [AllowAnonymous]
        public IActionResult AddEmployee([FromBody] Employee employee)
        {
            _logger.LogInformation("Add Employee: {LastName}", employee.LastName);
            _database.AddEmployee(employee);
            return Ok(employee);
        }
    }
}
