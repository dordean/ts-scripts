const greeting: string = "Welcome to TypeScript!";

function displayGreeting(message: string): void {
    const resultDiv: HTMLDivElement | null = document.getElementById("result") as HTMLDivElement | null;

    if (resultDiv) {
        resultDiv.innerText = message;
    }
}

displayGreeting(greeting);
