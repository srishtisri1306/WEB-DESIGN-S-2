abstract class BankAccount {

    int accountNumber;
    String accountHolderName;
    double balance;

    BankAccount(int accountNumber, String accountHolderName, double balance) {

        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    void deposit(double amount) {

        balance = balance + amount;
        System.out.println("Amount Deposited: " + amount);
    }

    void displayDetails() {

        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder Name: " + accountHolderName);
        System.out.println("Balance: " + balance);
    }

    abstract void calculateInterest();
}

/* Savings Account */
class SavingsAccount extends BankAccount {

    SavingsAccount(int accountNumber, String accountHolderName, double balance) {

        super(accountNumber, accountHolderName, balance);
    }

    void calculateInterest() {

        double interest = balance * 0.05;

        System.out.println("Savings Account Interest: " + interest);
    }
}

/* Current Account */
class CurrentAccount extends BankAccount {

    CurrentAccount(int accountNumber, String accountHolderName, double balance) {

        super(accountNumber, accountHolderName, balance);
    }

    void calculateInterest() {

        double interest = balance * 0.02;

        System.out.println("Current Account Interest: " + interest);
    }
}

/* Main Class */
public class index {

    public static void main(String[] args) {

        SavingsAccount sa = new SavingsAccount(104, "Sneha", 11000);

        CurrentAccount ca = new CurrentAccount(110, "Ankit", 25000);

        System.out.println("----- Savings Account -----");

        sa.deposit(2000);

        sa.displayDetails();

        sa.calculateInterest();

        System.out.println();

        System.out.println("----- Current Account -----");

        ca.deposit(3000);

        ca.displayDetails();

        ca.calculateInterest();
    }
}