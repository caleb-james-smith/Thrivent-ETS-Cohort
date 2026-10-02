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

    public String renderHello(String header, String name) {
        String result = "";

        if (name == null || name.isBlank()) {
            result = String.format("<h1>%s</h1><p>Hello!</p>", header);
        } else {
            result = String.format("<h1>%s</h1><p>Hello, <b>%s</b>!</p>", header, name);
        }

        return result;
    }

    public List<Ticket> findAll() {
        return ticketRepository.findAll();
    }

    public Ticket findById(Long id) {
        return ticketRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException("Did not find ticket with id = " + id)
        );
    }

    public Ticket create(String title, String description) {
        Ticket ticket = new Ticket(title, description);
        return ticketRepository.save(ticket);
    }

    public void deleteById(Long id) {
        // First, find ticket by id, and throw exception if not found
        Ticket ticket = ticketRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException("Did not find ticket with id = " + id)
        );

        ticketRepository.delete(ticket);
    }
}
