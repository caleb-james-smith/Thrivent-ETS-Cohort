package com.example.ticket.controller;

import com.example.ticket.service.TicketService;
import com.example.ticket.model.Ticket;
import com.example.ticket.dto.CreateTicketRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.EntityNotFoundException;
import java.util.Optional;

@RestController
@RequestMapping("/tickets")
public class TicketController {
    private final TicketService ticketService;
    private String header = "Repair Ticket Tracker";

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping(value = {"", "/", "/all"})
    public ResponseEntity<?> getAllTickets() {
        return ResponseEntity.ok(ticketService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTicketById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(ticketService.findById(id));
        } catch (EntityNotFoundException e) {
            System.err.println("Error: " + e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }

	@GetMapping("/hello")
	public String getHello(@RequestParam(value = "name", defaultValue = "") String name) {
        return ticketService.renderHello(header, name);
	}

    @PostMapping("/create")
    public ResponseEntity<Ticket> create(@RequestBody CreateTicketRequest request) {
        return ResponseEntity.ok(
            ticketService.create(
                request.title(),
                request.description())
        );
    }
}
