using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using net_core_REST_web_api.Models;
using Microsoft.EntityFrameworkCore;

namespace net_core_REST_web_api.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        peopleContext _context;

        public ValuesController(peopleContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Person> Get()
        {
            var list = _context.Person.Take(20);
            return list;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            try
            {
                Person person = _context.Person.Find(id);
                if (person != null)
                {
                    return Ok(person);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody]Person person)
        {
            try
            {
                _context.Person.Add(person);
                _context.SaveChanges();
                return Created("", person);
            } catch
            {
                return StatusCode(500);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult Put([FromBody]Person person)
        {
            try
            {
                if (_context.Entry(person).State == EntityState.Detached)
                {
                    _context.Person.Attach(person);
                }
                _context.Entry(person).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok(person);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                Person person = _context.Person.Find(id);
                if (person != null)
                {
                    _context.Person.Remove(person);
                    _context.SaveChanges();
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception)
            {
                return StatusCode(500); 
            }
        }
    }
}
