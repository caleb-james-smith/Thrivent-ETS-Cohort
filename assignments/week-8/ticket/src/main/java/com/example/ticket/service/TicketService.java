package com.example.ticket.service;

import com.example.ticket.model.Ticket;
import com.example.ticket.repository.TicketRepository;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class TicketService {
    private final TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public List<Ticket> findAll() {
        return ticketRepository.findAll();
    }

    // Version 1
    // public Ticket findById(Long id) {
    //     // Type mismatch: cannot convert from Optional<Ticket> to Ticket:
    //     // return ticketRepository.findById(id);

    //     // Handle no ticket found with the provided id
    //     return ticketRepository.findById(id).orElse(null);
    // }

    // Version 2
    public Ticket findById(Long id) {
        return ticketRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Did not find ticket with id = " + id));
    }

    public String renderHello(String header, String name) {
        String result = "";

		if (name == null || name.isBlank()) {
			result = String.format("<h1>%s</h1><p>Hello!</p>", header);
		} else {
			result = String.format("<h1>%s</h1><p>Hello, <b>%s</b>!</p>", header, name);
		}

        return result;
    }
}
