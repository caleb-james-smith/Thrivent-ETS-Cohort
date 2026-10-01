package tickets;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

public class TicketTest {
    @Test
    void ticketStoresId() {
        // Arrange
        int id = 1;
        String title = "Broken Computer";
        String description = "My computer is broken. Send help!";
        TicketCategory category = TicketCategory.COMPUTERS;
        Requester requester = new Requester(
            9001,
            "Testy",
            "Tester",
            "test@example.com",
            "999-999-9999"
        );
        
        // Act
        Ticket ticket = new Ticket(
            id,
            title,
            description,
            category,
            requester
        );

        // Assert
        assertEquals(id, ticket.getId());
    }

    @Test
    void ticketStoresTitle() {
        // Arrange
        int id = 1;
        String title = "Broken Computer";
        String description = "My computer is broken. Send help!";
        TicketCategory category = TicketCategory.COMPUTERS;
        Requester requester = new Requester(
            9001,
            "Testy",
            "Tester",
            "test@example.com",
            "999-999-9999"
        );
        
        // Act
        Ticket ticket = new Ticket(
            id,
            title,
            description,
            category,
            requester
        );

        // Assert
        assertEquals(title, ticket.getTitle());
    }

    @Test
    void ticketStoresDescription() {
        // Arrange
        int id = 1;
        String title = "Broken Computer";
        String description = "My computer is broken. Send help!";
        TicketCategory category = TicketCategory.COMPUTERS;
        Requester requester = new Requester(
            9001,
            "Testy",
            "Tester",
            "test@example.com",
            "999-999-9999"
        );
        
        // Act
        Ticket ticket = new Ticket(
            id,
            title,
            description,
            category,
            requester
        );

        // Assert
        assertEquals(description, ticket.getDescription());
    }

    @Test
    void ticketStoresCategory() {
        // Arrange
        int id = 1;
        String title = "Broken Computer";
        String description = "My computer is broken. Send help!";
        TicketCategory category = TicketCategory.COMPUTERS;
        Requester requester = new Requester(
            9001,
            "Testy",
            "Tester",
            "test@example.com",
            "999-999-9999"
        );
        
        // Act
        Ticket ticket = new Ticket(
            id,
            title,
            description,
            category,
            requester
        );

        // Assert
        assertEquals(category, ticket.getCategory());
    }
}
