package tickets;

public class Main {
    public static void main(String[] args) {
        printHeader();

        Requester requester = new Requester("Benjamin", "Gates", "benjamin.gates@example.com", "121-343-5656");

        Ticket ticket = new Ticket(
            1,
            "Broken Laptop",
            "My laptop is not starting. I tried with and without the power adapter connected, and in both scenarios it didn't start.",
            TicketCategory.COMPUTERS,
            requester
        );
        
        ticket.printTicketSummary();
    }
    

    public static void printHeader() {
        System.out.println("---------------------");
        System.out.println("Repair Ticket Tracker");
        System.out.println("---------------------");
    }
}
