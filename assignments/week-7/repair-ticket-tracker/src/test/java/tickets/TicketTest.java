package tickets;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

public class TicketTest {

    @Test
    void ticketStoresTitleAndDescription() {
        // Arrange
        String title = "Broken Computer";
        String description = "My computer is broken. Send help!"; 
        
        // Act
        Requester requester = new Requester(
            9001,
            "Testy",
            "Tester",
            "test@example.com",
            "999-999-9999"
        );

        Ticket ticket = new Ticket(
            1,
            title,
            description,
            TicketCategory.COMPUTERS,
            requester
        );

        // Assert
        assertEquals(title, ticket.getTitle());
        assertEquals(description, ticket.getDescription());
    }
}

