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
        assertEquals(id, ticket.getId(), "Ticket should store id");
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
        assertEquals(title, ticket.getTitle(), "Ticket should store title");
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
        assertEquals(description, ticket.getDescription(), "Ticket should store description");
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
        assertEquals(category, ticket.getCategory(), "Ticket should store category");
    }

    @Test
    void ticketIdZeroThrowsIllegalArgumentException() {
        // Arrange
        int id = 0;
        String title = "MacBook Pro Not Charging";
        String description = "My MacBook Pro (work computer) is not charging. I tried all the USB C ports, but none of them worked. I suspect that the cable is bad.";
        TicketCategory category = TicketCategory.COMPUTERS;
        Requester requester = new Requester(
            9001,
            "Aaron",
            "Sierp",
            "asierp@example.com",
            "123-456-7890"
        );
        
        // Assert
        assertThrows(
            IllegalArgumentException.class,
            () -> {
                // Act
                Ticket ticket = new Ticket(
                    id,
                    title,
                    description,
                    category,
                    requester
                );
            },
            "Creating a ticket with id = 0 should throw an IllegalArgumentException"
        );
    }
}
