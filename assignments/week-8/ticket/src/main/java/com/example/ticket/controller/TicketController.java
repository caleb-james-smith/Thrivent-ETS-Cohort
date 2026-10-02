package com.example.ticket.controller;

import com.example.ticket.service.TicketService;
import com.example.ticket.model.Ticket;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/tickets")
public class TicketController {
    private final TicketService ticketService;
    private String header = "Repair Ticket Tracker";

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllTickets() {
        return ResponseEntity.ok(ticketService.findAll());
    }

    // Version 1
    @GetMapping("/{id}")
    public ResponseEntity<?> getTicketById(@PathVariable Long id) {
        return ResponseEntity.ok(ticketService.findById(id));
    }

    // Version 2
    // @GetMapping("/{id}")
    // public ResponseEntity<?> getTicketById(@PathVariable Long id) {
    //     Optional<Ticket> ticket = ticketService.findById(id);
        
    //     if (ticket.isPresent()) {
    //         return ResponseEntity.ok(ticket.get());
    //     } else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }

	@GetMapping("/hello")
	public String getHello(@RequestParam(value = "name", defaultValue = "") String name) {
        return ticketService.renderHello(header, name);
	}

    // Where should we put the mapping for /error? 
}
