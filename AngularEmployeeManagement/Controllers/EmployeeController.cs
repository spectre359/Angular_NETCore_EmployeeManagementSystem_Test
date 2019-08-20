using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularEmployeeManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace AngularEmployeeManagement.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {

        [Route("employees")]
        public async Task<IActionResult> GetEmployees()
        {
            var list = new List<Employee>()
            {
                new Employee
                {
                    Name="Philip",
                    Position = "Developer"
                },
                new Employee
                {
                    Name = "Mimi",
                    Position = "Developer"
                }
            };
            return Ok(list);
        }

        [HttpPut("{name}")]
        public async Task<IActionResult> PutEmployee([FromRoute] string name, [FromBody] Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> PostEmployee([FromBody] Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok();
        }

        [HttpDelete("{name}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] string name)
        {
            
            return Ok();
        }
    }
}