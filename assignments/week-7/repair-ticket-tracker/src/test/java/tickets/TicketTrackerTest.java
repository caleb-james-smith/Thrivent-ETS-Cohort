package tickets;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

public class TicketTrackerTest {
    @Test
    void addingTwoTicketsWithSameIdThrowsIllegalArgumentException() {
        // Arrange
        TicketTracker ticketTracker = new TicketTracker();
        
        int ticketId = 1;

        Requester requester1 = new Requester(
            1001,
            "Andrew",
            "Smith",
            "andrew.smith@example.com",
            "111-111-1111"
        );

        Requester requester2 = new Requester(
            1002,
            "James",
            "Taylor",
            "james.taylor@example.com",
            "222-222-2222"
        );

        Ticket ticket1 = new Ticket(
            ticketId,
            "Ticket 1",
            "This is ticket 1.",
            TicketCategory.MECHANICAL,
            requester1
        );

        Ticket ticket2 = new Ticket(
            ticketId,
            "Ticket 2",
            "This is ticket 2.",
            TicketCategory.ELECTRICAL,
            requester2
        );

        // Assert
        assertThrows(
            IllegalArgumentException.class,
            () -> {
                // Act
                ticketTracker.addTicket(ticket1);
                ticketTracker.addTicket(ticket2);
            },
            "Adding two tickets with the same id to the list of tickets should throw an IllegalArgumentException"
        );
    }
}
