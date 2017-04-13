package com.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.converter.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping(path="api/values") 
public class PersonController {
	
	@Autowired
	private IPersonRepository personRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public @ResponseBody Iterable<Person> getPeople() {
		
		return personRepository.findAll(new PageRequest(0, 20));
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody Person getPeople(@PathVariable long id) {
		try
		{
			Person person = personRepository.findOne(id);

            if (person != null)
            {
                return person;
            }
            else
            {
                throw new HttpMessageNotReadableException("No such person");
            }
		} catch (Exception e) {
			throw new HttpMessageNotWritableException("Internal error ffs");
		}
	}
	
	 // POST api/values
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseBody
    public Person Post(@RequestBody Person person)
    {
        try
        {
        	person.setId(null);
        	personRepository.save(person);
            return(person);
        } catch (Exception e)
        {
        	throw new HttpMessageNotWritableException("Internal error");
        }
    }


    @RequestMapping(value = "/", method = RequestMethod.PUT)
    @ResponseBody
    public Person Put(@RequestBody Person person)
    {
        try
        {
        	if(personRepository.exists(person.getId()))
        	{
        		personRepository.save(person);
        		return person;
        	}
        	else
        	{
        		throw new HttpMessageNotWritableException("Person doesnt exist");
        	}
        }
        catch (Exception e)
        {
            throw new HttpMessageNotWritableException("Internal error");
        }
    }

    // DELETE api/values/5

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public Person Delete(@PathVariable Long id)
    {
        try
        {
            Person person = personRepository.findOne(id);
            if (person != null)
            {
            	personRepository.delete(person.getId());
                return null;
            }
            else
        	{
        		throw new HttpMessageNotWritableException("Person doesnt exist");
        	}
        }
        catch (Exception e)
        {
            throw new HttpMessageNotWritableException("Internal error");
        }
	}
}
