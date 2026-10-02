package com.example.ticket.controller;

import com.example.ticket.service.TicketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tickets")
public class TicketController {
    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllTickets() {
        return ResponseEntity.ok(ticketService.findAll());
    }

    // Example (placeholder)
    // @GetMapping("/all")
    // public String getAllTickets() {
    //     String header = "Repair Ticket Tracker";
    //     String message = "This should show all tickets.";
    //     String result = String.format("<h1>%s</h1><p>%s</p>", header, message);
    //     return result;
    // }

    // TODO: Move hello() to a different class and route to /hello
    // TODO: Move logic to service
	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "") String name) {
		String result = "";
		String header = "Repair Ticket Tracker";
		if (name == null || name.isBlank()) {
			result = String.format("<h1>%s</h1><p>Hello!</p>", header);
		} else {
			result = String.format("<h1>%s</h1><p>Hello, <b>%s</b>!</p>", header, name);
		}
		return result;
	}

    // Where should we put the mapping for /error? 
}
